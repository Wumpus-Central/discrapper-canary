"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(289873),
    u = n(228366),
    c = n(367513),
    d = n(951001),
    _ = n(398590),
    f = n(793574),
    h = n(688810),
    p = n(429913),
    E = n(568598),
    m = n(313961),
    g = n(976860),
    A = n(272812),
    I = n(461782),
    T = n(334463),
    S = n(309010),
    N = n(287809),
    y = n(795816),
    C = n(933958),
    v = n(851907),
    O = n(838274),
    R = n(536246),
    b = n(108959),
    D = n(395678),
    L = n(56129),
    w = n(360469),
    M = n(5867),
    P = n(652215),
    x = n(806931),
    U = n(970682),
    k = n(27600),
    G = n(604949);
function F(e) {
    let { channel: t, isLoading: n } = e,
        [s, f] = r.useState(!1),
        h = (0, o.bG)([C.Ay], () => C.Ay.getCurrentEmbeddedActivity()),
        O = h?.applicationId,
        F = (0, o.bG)([C.Ay], () => null != O && C.Ay.isProxyTicketRefreshing(O), [O]),
        V = (0, o.bG)([C.Ay], () => C.Ay.getActivityPanelMode()),
        B = (0, p.h)(O),
        H = h?.launchId,
        j = (0, o.bG)([S.A], () => S.A.getChannelId() === t?.id),
        { dockedRect: Y, isHidden: W } = (0, o.cf)([T.A], () => {
            let e = T.A.pipWindow;
            return { dockedRect: null != e ? T.A.getDockedRect(e.id) : null, isHidden: T.A.isEmbeddedActivityHidden() };
        }),
        K = (0, v.xi)({ channelId: t?.id }),
        {
            activityParticipant: z,
            selectedParticipant: $,
            participantsOpen: q,
        } = (0, o.cf)([m.A], () => ({
            activityParticipant:
                null != h && null != t
                    ? m.A.getParticipant(
                          t.id,
                          (0, E.Qt)({ applicationId: h.applicationId, instanceId: h.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? m.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && m.A.getParticipantsOpen(t.id),
        })),
        Z = j || null != K,
        X = (0, b.A)(t?.id),
        Q = X && $?.type !== x.lp.ACTIVITY,
        J = !X && V === M.Gd.PIP,
        ee = (!Z || (Z && (Q || J) && null == Y)) && !W,
        et = ee && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function en() {
        if (null != t) {
            null != h &&
                c.A.selectParticipant(
                    t.id,
                    (0, E.Qt)({ applicationId: h.applicationId, instanceId: h.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            d.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function ei() {
        f(!s);
    }
    if (
        (r.useEffect(() => {
            if (null != O) {
                let e = ee ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: O });
            }
        }, [O, ee]),
        null == h || null == H || ((0, b.A)(t?.id) && null == z) || null == B)
    )
        return null;
    let er = Array.from(h.userIds)
            .map((e) => N.default.getUser(e))
            .filter((e) => null != e),
        es = {
            instance_id: h.compositeInstanceId ?? h.launchId ?? "",
            location_id: h.location?.id,
            launch_id: h.launchId,
            referrer_id: h.referrerId,
            custom_id: h.customId,
        };
    return (
        null != h.proxyTicket && (es.discord_proxy_ticket = h.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (es.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (es.channel_id = t.id),
        (0, i.jsx)(I.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: o, onForceIdle: u } = e;
                return (0, i.jsxs)(A.A, {
                    className: a()(U.zr, {
                        [U.NW]: ee,
                        [G.a8]: ee,
                        [k.N7]: r && !h.config?.useInteractivePIP,
                        [U.p0]: ee && !s,
                        [U.ST]: ee && s,
                        [U.R]: W,
                        [U.Gq]: et,
                    }),
                    noBorder: !ee,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: a, isActivityInTextChannel: o, users: l } = e;
                                return ee && null != h && (z?.type === x.lp.ACTIVITY || o)
                                    ? h.config?.useInteractivePIP
                                        ? (0, i.jsx)(L.tM, {
                                              onJumpToChannel: en,
                                              applicationId: h.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: r,
                                              onToggleHeight: ei,
                                              isExpanded: s,
                                              hideExpandedButton: o,
                                              embeddedActivity: h,
                                          })
                                        : o
                                          ? (0, i.jsx)(L.Mp, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    en(), (0, y.gk)(M.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: h.applicationId,
                                                users: l,
                                                embeddedActivity: h,
                                            })
                                          : null == z
                                            ? null
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          className: U.OB,
                                                          onDoubleClick: en,
                                                      }),
                                                      (0, i.jsx)(L.gE, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: en,
                                                          channel: t,
                                                          applicationId: h.applicationId,
                                                          selectedParticipant: z,
                                                          embeddedActivity: h,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: o, onForceIdle: u, idle: r, isActivityInTextChannel: J, users: er }),
                        }),
                        n || F
                            ? (0, i.jsx)(l.y, { className: a()(U.pU, { [U.p0]: ee && !s, [U.ST]: ee && s }) })
                            : (0, i.jsx)(D.o, {
                                  allowPopups: (0, R.b)(B),
                                  referrerPolicy: "origin",
                                  url: h.url,
                                  queryParams: es,
                                  className: a()(U.pU, {
                                      [U.p0]: ee && !s,
                                      [U.ST]: ee && s,
                                      [U.v8]: ee && !h.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !ee && j,
                              }),
                        !ee &&
                            null != t &&
                            (0, i.jsx)(L.ll, { participantsOpen: q, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let V = (e) => {
    let { channel: t, ...n } = e,
        r = C.Ay.getCurrentEmbeddedActivity();
    (0, O.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: s } = (0, h.Ay)(f.A.ACTIVITY_PIP);
    return (0, i.jsx)(h.f5, { value: s, children: (0, i.jsx)(F, { channel: t, isLoading: null == r, ...n }) });
};
