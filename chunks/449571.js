"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(289873),
    u = n(73153),
    c = n(367513),
    d = n(951001),
    _ = n(398590),
    f = n(793574),
    p = n(688810),
    h = n(429913),
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
    O = n(838274),
    R = n(536246),
    b = n(108959),
    D = n(398866),
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
        [s, f] = i.useState(!1),
        p = (0, o.bG)([v.Ay], () => v.Ay.getCurrentEmbeddedActivity()),
        O = p?.applicationId,
        F = (0, o.bG)([v.Ay], () => null != O && v.Ay.isProxyTicketRefreshing(O), [O]),
        V = (0, o.bG)([v.Ay], () => v.Ay.getActivityPanelMode()),
        B = (0, h.h)(O),
        H = p?.launchId,
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
                null != p && null != t
                    ? m.A.getParticipant(
                          t.id,
                          (0, E.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? m.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && m.A.getParticipantsOpen(t.id),
        })),
        X = j || null != K,
        Q = (0, b.A)(t?.id),
        Z = Q && z?.type !== x.lp.ACTIVITY,
        J = !Q && V === M.Gd.PIP,
        ee = (!X || (X && (Z || J) && null == Y)) && !W,
        et = ee && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function en() {
        if (null != t) {
            null != p &&
                c.A.selectParticipant(
                    t.id,
                    (0, E.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            d.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function er() {
        f(!s);
    }
    if (
        (i.useEffect(() => {
            if (null != O) {
                let e = ee ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: O });
            }
        }, [O, ee]),
        null == p || null == H || ((0, b.A)(t?.id) && null == $) || null == B)
    )
        return null;
    let ei = Array.from(p.userIds)
            .map((e) => y.default.getUser(e))
            .filter((e) => null != e),
        es = {
            instance_id: p.compositeInstanceId ?? p.launchId ?? "",
            location_id: p.location?.id,
            launch_id: p.launchId,
            referrer_id: p.referrerId,
            custom_id: p.customId,
        };
    return (
        null != p.proxyTicket && (es.discord_proxy_ticket = p.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (es.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (es.channel_id = t.id),
        (0, r.jsx)(I.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, r.jsxs)(A.A, {
                    className: a()(k.zr, {
                        [k.NW]: ee,
                        [G.a8]: ee,
                        [U.N7]: i && !p.config?.useInteractivePIP,
                        [k.p0]: ee && !s,
                        [k.ST]: ee && s,
                        [k.R]: W,
                        [k.Gq]: et,
                    }),
                    noBorder: !ee,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: l } = e;
                                return ee && null != p && ($?.type === x.lp.ACTIVITY || o)
                                    ? p.config?.useInteractivePIP
                                        ? (0, r.jsx)(L.tM, {
                                              onJumpToChannel: en,
                                              applicationId: p.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: i,
                                              onToggleHeight: er,
                                              isExpanded: s,
                                              hideExpandedButton: o,
                                              embeddedActivity: p,
                                          })
                                        : o
                                          ? (0, r.jsx)(L.Mp, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: i,
                                                onJumpToChannel: () => {
                                                    en(), (0, N.gk)(M.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: p.applicationId,
                                                users: l,
                                                embeddedActivity: p,
                                            })
                                          : null == $
                                            ? null
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: i,
                                                          className: k.OB,
                                                          onDoubleClick: en,
                                                      }),
                                                      (0, r.jsx)(L.gE, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: i,
                                                          onJumpToChannel: en,
                                                          channel: t,
                                                          applicationId: p.applicationId,
                                                          selectedParticipant: $,
                                                          embeddedActivity: p,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: o, onForceIdle: u, idle: i, isActivityInTextChannel: J, users: ei }),
                        }),
                        n || F
                            ? (0, r.jsx)(l.y, { className: a()(k.pU, { [k.p0]: ee && !s, [k.ST]: ee && s }) })
                            : (0, r.jsx)(D.o, {
                                  allowPopups: (0, R.b)(B),
                                  referrerPolicy: "origin",
                                  url: p.url,
                                  queryParams: es,
                                  className: a()(k.pU, {
                                      [k.p0]: ee && !s,
                                      [k.ST]: ee && s,
                                      [k.v8]: ee && !p.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !ee && j,
                              }),
                        !ee &&
                            null != t &&
                            (0, r.jsx)(L.ll, { participantsOpen: q, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
let V = (e) => {
    let { channel: t, ...n } = e,
        i = v.Ay.getCurrentEmbeddedActivity();
    (0, O.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: s } = (0, p.Ay)(f.A.ACTIVITY_PIP);
    return (0, r.jsx)(p.f5, { value: s, children: (0, r.jsx)(F, { channel: t, isLoading: null == i, ...n }) });
};
