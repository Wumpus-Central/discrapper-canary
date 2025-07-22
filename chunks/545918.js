(n.r(t), n.d(t, { default: () => F }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(252618),
    m = n(189357),
    x = n(693546),
    h = n(246364),
    j = n(697379),
    b = n(98493),
    f = n(412222),
    p = n(223312),
    g = n(571728),
    v = n(984370),
    _ = n(703656),
    C = n(433355),
    T = n(984933),
    N = n(430824),
    E = n(384433),
    S = n(241559),
    I = n(575766),
    O = n(901066),
    P = n(987491),
    R = n(305473),
    y = n(995596),
    w = n(937283),
    A = n(440857),
    M = n(707113),
    Z = n(981631),
    D = n(176505),
    k = n(388032),
    L = n(86931),
    B = n(100658);
function G(e) {
    let { guild: t, currentTab: n, onTabSelect: l } = e,
        i = (0, j.W)(t.id),
        a = k.intl.string(k.t.oclz3d),
        s = k.intl.string(k.t.oclz3d);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: a
        }),
        (0, r.jsxs)(v.Z, {
            className: L.header,
            innerClassname: L.__invalid_innerHeader,
            channelId: D.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, r.jsx)(v.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(v.Z.Title, { children: s }),
                i &&
                    (0, r.jsx)(y.Z, {
                        guildId: t.id,
                        currentTab: n,
                        onTabSelect: l
                    })
            ]
        })
    );
}
function F(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, g.A)({ guildId: n })) ? t : 0,
        [u, j] = l.useState(i > 0 ? E.e.PENDING : E.e.ALL_MEMBERS),
        v = (0, s.e7)([N.Z], () => N.Z.getGuild(n)),
        { analyticsLocations: y } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, f.C)({ guildId: n }),
        { guildJoinRequests: k } = (0, p.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? h.wB.SUBMITTED : u,
            sortOrder: D
        });
    l.useEffect(() => {
        (null == v ? void 0 : v.features.has(Z.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || j(E.e.ALL_MEMBERS);
    }, [v]);
    let F = (0, S.n2)(n),
        U = (0, m.m)(n),
        z = l.useRef(null);
    (0, I.n)(n);
    let { fetchNextPage: q } = (0, b.m)({
            guildId: n,
            guildJoinRequests: k
        }),
        V = l.useCallback(async () => {
            var e;
            if (u === E.e.ALL_MEMBERS) return;
            let t = null == (e = z.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await q(D, u));
        }, [u, u, D, q]),
        J = l.useCallback(
            async (e) => {
                u !== e && (j(e), x.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await q(D, e)));
            },
            [u, n, q, D]
        );
    l.useEffect(() => {
        if (!F && null != v) {
            var e;
            let t = null == (e = T.ZP.getDefaultChannel(v.id)) ? void 0 : e.id;
            (0, _.XU)(v.id, t);
        }
    }, [v, F]);
    let K = (0, s.e7)([C.ZP], () => null != C.ZP.getGuildSidebarState(n), [n]);
    return null != v && F
        ? (0, r.jsxs)(d.Gt, {
              value: y,
              children: [
                  (0, r.jsxs)('div', {
                      className: a()(B.chat, L.page, { [B.threadSidebarOpen]: K }),
                      children: [
                          (0, r.jsx)(G, {
                              guild: v,
                              currentTab: u,
                              onTabSelect: J
                          }),
                          (0, r.jsx)(o.Den, {
                              onScroll: V,
                              ref: z,
                              orientation: 'vertical',
                              children: (0, r.jsx)('div', {
                                  className: a()(B.content, L.container),
                                  children:
                                      u === E.e.ALL_MEMBERS
                                          ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(R.Z, { guild: v }), (0, r.jsx)(M.Z, { guild: v })]
                                            })
                                          : (0, r.jsx)(P.Z, {
                                                guildId: v.id,
                                                currentTab: u
                                            })
                              })
                          }),
                          (0, r.jsx)(A.Z, { guildId: v.id })
                      ]
                  }),
                  U && (u === E.e.ALL_MEMBERS ? (0, r.jsx)(w.Z, { guildId: v.id }) : (0, r.jsx)(O.Z, { guildId: v.id }))
              ]
          })
        : null;
}
