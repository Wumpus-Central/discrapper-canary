(n.r(t), n.d(t, { default: () => F }), n(388685));
var l = n(255367),
    r = n(73800),
    a = n(120356),
    i = n.n(a),
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
    v = n(571728),
    g = n(984370),
    C = n(703656),
    _ = n(433355),
    T = n(984933),
    E = n(430824),
    N = n(384433),
    S = n(241559),
    P = n(575766),
    R = n(901066),
    I = n(987491),
    Z = n(305473),
    w = n(995596),
    y = n(937283),
    M = n(440857),
    O = n(707113),
    A = n(981631),
    k = n(176505),
    B = n(388032),
    D = n(86931),
    L = n(100658);
function G(e) {
    let { guild: t, currentTab: n, onTabSelect: r } = e,
        a = (0, j.W)(t.id),
        i = B.intl.string(B.t.oclz3d),
        s = B.intl.string(B.t.oclz3d);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: i
        }),
        (0, l.jsxs)(g.Z, {
            className: D.header,
            innerClassname: D.__invalid_innerHeader,
            channelId: k.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(g.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(g.Z.Title, { children: s }),
                a &&
                    (0, l.jsx)(w.Z, {
                        guildId: t.id,
                        currentTab: n,
                        onTabSelect: r
                    })
            ]
        })
    );
}
function F(e) {
    var t;
    let { guildId: n } = e,
        a = null != (t = (0, v.A)({ guildId: n })) ? t : 0,
        [u, j] = r.useState(a > 0 ? N.e.PENDING : N.e.ALL_MEMBERS),
        g = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
        { analyticsLocations: w } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        k = (0, f.C)({ guildId: n }),
        { guildJoinRequests: B } = (0, p.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? h.wB.SUBMITTED : u,
            sortOrder: k
        });
    r.useEffect(() => {
        (null == g ? void 0 : g.features.has(A.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || j(N.e.ALL_MEMBERS);
    }, [g]);
    let F = (0, S.n2)(n),
        q = (0, m.m)(n),
        U = r.useRef(null);
    (0, P.n)(n);
    let { fetchNextPage: z } = (0, b.m)({
            guildId: n,
            guildJoinRequests: B
        }),
        V = r.useCallback(async () => {
            var e;
            if (u === N.e.ALL_MEMBERS) return;
            let t = null == (e = U.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await z(k, u));
        }, [u, u, k, z]),
        J = r.useCallback(
            async (e) => {
                u !== e && (j(e), x.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await z(k, e)));
            },
            [u, n, z, k]
        );
    r.useEffect(() => {
        if (!F && null != g) {
            var e;
            let t = null == (e = T.ZP.getDefaultChannel(g.id)) ? void 0 : e.id;
            (0, C.XU)(g.id, t);
        }
    }, [g, F]);
    let K = (0, s.e7)([_.ZP], () => null != _.ZP.getGuildSidebarState(n), [n]);
    return null != g && F
        ? (0, l.jsxs)(d.Gt, {
              value: w,
              children: [
                  (0, l.jsxs)('div', {
                      className: i()(L.chat, D.page, { [L.threadSidebarOpen]: K }),
                      children: [
                          (0, l.jsx)(G, {
                              guild: g,
                              currentTab: u,
                              onTabSelect: J
                          }),
                          (0, l.jsx)(o.Den, {
                              onScroll: V,
                              ref: U,
                              orientation: 'vertical',
                              children: (0, l.jsx)('div', {
                                  className: i()(L.content, D.container),
                                  children:
                                      u === N.e.ALL_MEMBERS
                                          ? (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsx)(Z.Z, { guild: g }), (0, l.jsx)(O.Z, { guild: g })]
                                            })
                                          : (0, l.jsx)(I.Z, {
                                                guildId: g.id,
                                                currentTab: u
                                            })
                              })
                          }),
                          (0, l.jsx)(M.Z, { guildId: g.id })
                      ]
                  }),
                  q && (u === N.e.ALL_MEMBERS ? (0, l.jsx)(y.Z, { guildId: g.id }) : (0, l.jsx)(R.Z, { guildId: g.id }))
              ]
          })
        : null;
}
