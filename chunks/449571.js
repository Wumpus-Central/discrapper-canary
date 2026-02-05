"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(73153),
    c = n(367513),
    d = n(951001),
    _ = n(398590),
    f = n(793574),
    p = n(688810),
    h = n(429913),
    m = n(568598),
    g = n(313961),
    E = n(976860),
    A = n(272812),
    I = n(461782),
    T = n(334463),
    y = n(309010),
    S = n(287809),
    v = n(795816),
    C = n(933958),
    b = n(851907),
    N = n(838274),
    R = n(536246),
    O = n(108959),
    D = n(398866),
    L = n(56129),
    w = n(360469),
    x = n(5867),
    P = n(652215),
    M = n(806931),
    k = n(463967),
    U = n(319567),
    G = n(976092);
function V(e) {
    let { channel: t, isLoading: n } = e,
        [a, f] = i.useState(!1),
        p = (0, o.bG)([C.Ay], () => C.Ay.getCurrentEmbeddedActivity()),
        N = p?.applicationId,
        V = (0, o.bG)([C.Ay], () => null != N && C.Ay.isProxyTicketRefreshing(N), [N]),
        F = (0, o.bG)([C.Ay], () => C.Ay.getActivityPanelMode()),
        B = (0, h.h)(N),
        j = p?.launchId,
        H = (0, o.bG)([y.A], () => y.A.getChannelId() === t?.id),
        { dockedRect: Y, isHidden: W } = (0, o.cf)([T.A], () => {
            let e = T.A.pipWindow;
            return { dockedRect: null != e ? T.A.getDockedRect(e.id) : null, isHidden: T.A.isEmbeddedActivityHidden() };
        }),
        K = (0, b.xi)({ channelId: t?.id }),
        {
            activityParticipant: z,
            selectedParticipant: $,
            participantsOpen: q,
        } = (0, o.cf)([g.A], () => ({
            activityParticipant:
                null != p && null != t
                    ? g.A.getParticipant(
                          t.id,
                          (0, m.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? g.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && g.A.getParticipantsOpen(t.id),
        })),
        Z = H || null != K,
        Q = (0, O.A)(t?.id),
        X = Q && $?.type !== M.lp.ACTIVITY,
        J = !Q && F === x.Gd.PIP,
        ee = Z && (X || J) && null == Y,
        et = (!Z || ee) && !W,
        en = et && null != T.A.pipVideoWindow && null != T.A.pipActivityWindow;
    function er() {
        if (null != t) {
            null != p &&
                c.A.selectParticipant(
                    t.id,
                    (0, m.Qt)({ applicationId: p.applicationId, instanceId: p.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? P.ME;
            d.A.channelListScrollTo(e, t.id), (0, E.uh)(e, t.id);
        }
        null == K && (0, _.bz)();
    }
    function ei() {
        f(!a);
    }
    function ea(e) {
        let { onActive: n, onForceIdle: i, idle: s, isActivityInTextChannel: o, users: l } = e;
        return et && null != p && (z?.type === M.lp.ACTIVITY || o)
            ? p.config?.useInteractivePIP
                ? (0, r.jsx)(L.tM, {
                      onJumpToChannel: er,
                      applicationId: p.applicationId,
                      channel: t,
                      showControls: !s,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: ei,
                      isExpanded: a,
                      hideExpandedButton: o,
                      embeddedActivity: p,
                  })
                : o
                  ? (0, r.jsx)(L.Mp, {
                        idle: s,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            er(), (0, v.gk)(x.Gd.PANEL);
                        },
                        channel: t,
                        applicationId: p.applicationId,
                        users: l,
                        embeddedActivity: p,
                    })
                  : null == z
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: k.OB,
                                  onDoubleClick: er,
                              }),
                              (0, r.jsx)(L.gE, {
                                  idle: s,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: er,
                                  channel: t,
                                  applicationId: p.applicationId,
                                  selectedParticipant: z,
                                  embeddedActivity: p,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != N) {
                let e = et ? w.bN.PIP : w.bN.FOCUSED;
                u.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: N });
            }
        }, [N, et]),
        null == p || null == j || ((0, O.A)(t?.id) && null == z) || null == B)
    )
        return null;
    let es = Array.from(p.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e),
        eo = {
            instance_id: p.compositeInstanceId ?? p.launchId ?? "",
            location_id: p.location?.id,
            launch_id: p.launchId,
            referrer_id: p.referrerId,
            custom_id: p.customId,
        };
    return (
        null != p.proxyTicket && (eo.discord_proxy_ticket = p.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (eo.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (eo.channel_id = t.id),
        (0, r.jsx)(I.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: u } = e;
                return (0, r.jsxs)(A.A, {
                    className: s()(k.zr, {
                        [k.NW]: et,
                        [G.a8]: et,
                        [U.N7]: i && !p.config?.useInteractivePIP,
                        [k.p0]: et && !a,
                        [k.ST]: et && a,
                        [k.R]: W,
                        [k.Gq]: en,
                    }),
                    noBorder: !et,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: ea({
                                onActive: o,
                                onForceIdle: u,
                                idle: i,
                                isActivityInTextChannel: J,
                                users: es,
                            }),
                        }),
                        n || V
                            ? (0, r.jsx)(l.y$y, { className: s()(k.pU, { [k.p0]: et && !a, [k.ST]: et && a }) })
                            : (0, r.jsx)(D.o, {
                                  allowPopups: (0, R.b)(B),
                                  referrerPolicy: "origin",
                                  url: p.url,
                                  queryParams: eo,
                                  className: s()(k.pU, {
                                      [k.p0]: et && !a,
                                      [k.ST]: et && a,
                                      [k.v8]: et && !p.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !et && H,
                              }),
                        !et &&
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
        i = C.Ay.getCurrentEmbeddedActivity();
    (0, N.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, p.Ay)(f.A.ACTIVITY_PIP),
        s = null == i;
    return (0, r.jsx)(p.f5, { value: a, children: (0, r.jsx)(V, { channel: t, isLoading: s, ...n }) });
};
