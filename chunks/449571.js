"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(289873),
    u = n(73153),
    d = n(367513),
    c = n(951001),
    _ = n(398590),
    f = n(793574),
    E = n(688810),
    h = n(429913),
    p = n(568598),
    m = n(313961),
    g = n(976860),
    A = n(272812),
    I = n(461782),
    T = n(334463),
    S = n(309010),
    y = n(287809),
    N = n(795816),
    O = n(933958),
    R = n(851907),
    v = n(838274),
    C = n(536246),
    b = n(108959),
    D = n(398866),
    L = n(56129),
    w = n(360469),
    M = n(5867),
    P = n(652215),
    U = n(806931),
    k = n(157690),
    x = n(429904),
    G = n(794005);
function V(e) {
    let { channel: t, isLoading: n } = e,
        [s, f] = i.useState(!1),
        E = (0, o.bG)([O.Ay], () => O.Ay.getCurrentEmbeddedActivity()),
        v = E?.applicationId,
        V = (0, o.bG)([O.Ay], () => null != v && O.Ay.isProxyTicketRefreshing(v), [v]),
        F = (0, o.bG)([O.Ay], () => O.Ay.getActivityPanelMode()),
        B = (0, h.h)(v),
        H = E?.launchId,
        Y = (0, o.bG)([S.A], () => S.A.getChannelId() === t?.id),
        { dockedRect: W, isHidden: j } = (0, o.cf)([T.A], () => {
            let e = T.A.pipWindow;
            return { dockedRect: null != e ? T.A.getDockedRect(e.id) : null, isHidden: T.A.isEmbeddedActivityHidden() };
        }),
        K = (0, R.xi)({ channelId: t?.id }),
        {
            activityParticipant: $,
            selectedParticipant: z,
            participantsOpen: q,
        } = (0, o.cf)([m.A], () => ({
            activityParticipant:
                null != E && null != t
                    ? m.A.getParticipant(
                          t.id,
                          (0, p.Qt)({ applicationId: E.applicationId, instanceId: E.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? m.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && m.A.getParticipantsOpen(t.id),
        })),
        X = Y || null != K,
        Q = (0, b.A)(t?.id),
        J = Q && z?.type !== U.lp.ACTIVITY,
        Z = !Q && F === M.Gd.PIP,
        ee = (!X || (X && (J || Z) && null == W)) && !j,
        et = ee && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function en() {
        if (null != t) {
            null != E &&
                d.A.selectParticipant(
                    t.id,
                    (0, p.Qt)({ applicationId: E.applicationId, instanceId: E.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            c.A.channelListScrollTo(e, t.id), (0, g.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function er() {
        f(!s);
    }
    if (
        (i.useEffect(() => {
            if (null != v) {
                let e = ee ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: v });
            }
        }, [v, ee]),
        null == E || null == H || ((0, b.A)(t?.id) && null == $) || null == B)
    )
        return null;
    let ei = Array.from(E.userIds)
            .map((e) => y.default.getUser(e))
            .filter((e) => null != e),
        es = {
            instance_id: E.compositeInstanceId ?? E.launchId ?? "",
            location_id: E.location?.id,
            launch_id: E.launchId,
            referrer_id: E.referrerId,
            custom_id: E.customId,
        };
    return (
        null != E.proxyTicket && (es.discord_proxy_ticket = E.proxyTicket),
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
                        [x.N7]: i && !E.config?.useInteractivePIP,
                        [k.p0]: ee && !s,
                        [k.ST]: ee && s,
                        [k.R]: j,
                        [k.Gq]: et,
                    }),
                    noBorder: !ee,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: l } = e;
                                return ee && null != E && ($?.type === U.lp.ACTIVITY || o)
                                    ? E.config?.useInteractivePIP
                                        ? (0, r.jsx)(L.tM, {
                                              onJumpToChannel: en,
                                              applicationId: E.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: i,
                                              onToggleHeight: er,
                                              isExpanded: s,
                                              hideExpandedButton: o,
                                              embeddedActivity: E,
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
                                                applicationId: E.applicationId,
                                                users: l,
                                                embeddedActivity: E,
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
                                                          applicationId: E.applicationId,
                                                          selectedParticipant: $,
                                                          embeddedActivity: E,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: o, onForceIdle: u, idle: i, isActivityInTextChannel: Z, users: ei }),
                        }),
                        n || V
                            ? (0, r.jsx)(l.y, { className: a()(k.pU, { [k.p0]: ee && !s, [k.ST]: ee && s }) })
                            : (0, r.jsx)(D.o, {
                                  allowPopups: (0, C.b)(B),
                                  referrerPolicy: "origin",
                                  url: E.url,
                                  queryParams: es,
                                  className: a()(k.pU, {
                                      [k.p0]: ee && !s,
                                      [k.ST]: ee && s,
                                      [k.v8]: ee && !E.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !ee && Y,
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
let F = (e) => {
    let { channel: t, ...n } = e,
        i = O.Ay.getCurrentEmbeddedActivity();
    (0, v.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: s } = (0, E.Ay)(f.A.ACTIVITY_PIP);
    return (0, r.jsx)(E.f5, { value: s, children: (0, r.jsx)(V, { channel: t, isLoading: null == i, ...n }) });
};
