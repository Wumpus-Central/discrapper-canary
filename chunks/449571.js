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
    h = n(793574),
    f = n(688810),
    p = n(429913),
    E = n(568598),
    m = n(313961),
    g = n(976860),
    A = n(272812),
    I = n(461782),
    T = n(334463),
    S = n(309010),
    y = n(287809),
    N = n(795816),
    v = n(933958),
    C = n(851907),
    R = n(838274),
    O = n(536246),
    b = n(108959),
    D = n(395678),
    L = n(56129),
    w = n(360469),
    M = n(5867),
    P = n(652215),
    x = n(806931),
    k = n(970682),
    U = n(27600),
    G = n(604949);
function F(e) {
    let { channel: t, isLoading: n } = e,
        [s, h] = r.useState(!1),
        f = (0, o.bG)([v.Ay], () => v.Ay.getCurrentEmbeddedActivity()),
        R = f?.applicationId,
        F = (0, o.bG)([v.Ay], () => null != R && v.Ay.isProxyTicketRefreshing(R), [R]),
        V = (0, o.bG)([v.Ay], () => v.Ay.getActivityPanelMode()),
        B = (0, p.h)(R),
        H = f?.launchId,
        j = (0, o.bG)([S.A], () => S.A.getChannelId() === t?.id),
        { dockedRect: Y, isHidden: W } = (0, o.cf)([T.A], () => {
            let e = T.A.pipWindow;
            return { dockedRect: null != e ? T.A.getDockedRect(e.id) : null, isHidden: T.A.isEmbeddedActivityHidden() };
        }),
        K = (0, C.xi)({ channelId: t?.id }),
        {
            activityParticipant: $,
            selectedParticipant: z,
            participantsOpen: q,
        } = (0, o.cf)([m.A], () => ({
            activityParticipant:
                null != f && null != t
                    ? m.A.getParticipant(
                          t.id,
                          (0, E.Qt)({ applicationId: f.applicationId, instanceId: f.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? m.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && m.A.getParticipantsOpen(t.id),
        })),
        X = j || null != K,
        Z = (0, b.A)(t?.id),
        Q = Z && z?.type !== x.lp.ACTIVITY,
        J = !Z && V === M.Gd.PIP,
        ee = (!X || (X && (Q || J) && null == Y)) && !W,
        et = ee && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function en() {
        if (null != t) {
            null != f &&
                c.A.selectParticipant(
                    t.id,
                    (0, E.Qt)({ applicationId: f.applicationId, instanceId: f.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            d.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function ei() {
        h(!s);
    }
    if (
        (r.useEffect(() => {
            if (null != R) {
                let e = ee ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: R });
            }
        }, [R, ee]),
        null == f || null == H || ((0, b.A)(t?.id) && null == $) || null == B)
    )
        return null;
    let er = Array.from(f.userIds)
            .map((e) => y.default.getUser(e))
            .filter((e) => null != e),
        es = {
            instance_id: f.compositeInstanceId ?? f.launchId ?? "",
            location_id: f.location?.id,
            launch_id: f.launchId,
            referrer_id: f.referrerId,
            custom_id: f.customId,
        };
    return (
        null != f.proxyTicket && (es.discord_proxy_ticket = f.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (es.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (es.channel_id = t.id),
        (0, i.jsx)(I.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: o, onForceIdle: u } = e;
                return (0, i.jsxs)(A.A, {
                    className: a()(k.zr, {
                        [k.NW]: ee,
                        [G.a8]: ee,
                        [U.N7]: r && !f.config?.useInteractivePIP,
                        [k.p0]: ee && !s,
                        [k.ST]: ee && s,
                        [k.R]: W,
                        [k.Gq]: et,
                    }),
                    noBorder: !ee,
                    children: [
                        (0, i.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: a, isActivityInTextChannel: o, users: l } = e;
                                return ee && null != f && ($?.type === x.lp.ACTIVITY || o)
                                    ? f.config?.useInteractivePIP
                                        ? (0, i.jsx)(L.tM, {
                                              onJumpToChannel: en,
                                              applicationId: f.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: r,
                                              onToggleHeight: ei,
                                              isExpanded: s,
                                              hideExpandedButton: o,
                                              embeddedActivity: f,
                                          })
                                        : o
                                          ? (0, i.jsx)(L.Mp, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    en(), (0, N.gk)(M.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: f.applicationId,
                                                users: l,
                                                embeddedActivity: f,
                                            })
                                          : null == $
                                            ? null
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          className: k.OB,
                                                          onDoubleClick: en,
                                                      }),
                                                      (0, i.jsx)(L.gE, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: en,
                                                          channel: t,
                                                          applicationId: f.applicationId,
                                                          selectedParticipant: $,
                                                          embeddedActivity: f,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: o, onForceIdle: u, idle: r, isActivityInTextChannel: J, users: er }),
                        }),
                        n || F
                            ? (0, i.jsx)(l.y, { className: a()(k.pU, { [k.p0]: ee && !s, [k.ST]: ee && s }) })
                            : (0, i.jsx)(D.o, {
                                  allowPopups: (0, O.b)(B),
                                  referrerPolicy: "origin",
                                  url: f.url,
                                  queryParams: es,
                                  className: a()(k.pU, {
                                      [k.p0]: ee && !s,
                                      [k.ST]: ee && s,
                                      [k.v8]: ee && !f.config?.useInteractivePIP,
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
        r = v.Ay.getCurrentEmbeddedActivity();
    (0, R.A)({ connectedEmbeddedActivity: r });
    let { analyticsLocations: s } = (0, f.Ay)(h.A.ACTIVITY_PIP);
    return (0, i.jsx)(f.f5, { value: s, children: (0, i.jsx)(F, { channel: t, isLoading: null == r, ...n }) });
};
