n.r(t), n.d(t, { default: () => q }), n(388685);
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
    j = n(246364),
    h = n(697379),
    b = n(98493),
    f = n(412222),
    v = n(223312),
    g = n(571728),
    p = n(984370),
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
    M = n(937283),
    O = n(440857),
    y = n(707113),
    A = n(981631),
    k = n(176505),
    D = n(388032),
    B = n(350013),
    L = n(97009);
function G(e) {
    let { guild: t, currentTab: n, onTabSelect: r } = e,
        a = (0, h.W)(t.id),
        i = D.intl.string(D.t.oclz3d),
        s = D.intl.string(D.t.oclz3d);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: i,
        }),
        (0, l.jsxs)(p.Z, {
            className: B.header,
            innerClassname: B.__invalid_innerHeader,
            channelId: k.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(p.Z.Icon, {
                    icon: o.BFJ,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(p.Z.Title, { children: s }),
                a &&
                    (0, l.jsx)(w.Z, {
                        guildId: t.id,
                        currentTab: n,
                        onTabSelect: r,
                    }),
            ],
        })
    );
}
function q(e) {
    var t;
    let { guildId: n } = e,
        a = null != (t = (0, g.A)({ guildId: n })) ? t : 0,
        [u, h] = r.useState(a > 0 ? N.e.PENDING : N.e.ALL_MEMBERS),
        p = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
        { analyticsLocations: w } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        k = (0, f.C)({ guildId: n }),
        { guildJoinRequests: D } = (0, v.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === u ? j.wB.SUBMITTED : u,
            sortOrder: k,
        });
    r.useEffect(() => {
        (null == p ? void 0 : p.features.has(A.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || h(N.e.ALL_MEMBERS);
    }, [p]);
    let q = (0, S.n2)(n),
        F = (0, m.m)(n),
        U = r.useRef(null);
    (0, P.n)(n);
    let { fetchNextPage: z } = (0, b.m)({
            guildId: n,
            guildJoinRequests: D,
        }),
        V = r.useCallback(async () => {
            var e;
            if (u === N.e.ALL_MEMBERS) return;
            let t = null == (e = U.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await z(k, u));
        }, [u, u, k, z]),
        J = r.useCallback(
            async (e) => {
                u !== e && (h(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && (await z(k, e)));
            },
            [u, n, z, k],
        );
    r.useEffect(() => {
        if (!q && null != p) {
            var e;
            let t = null == (e = T.ZP.getDefaultChannel(p.id)) ? void 0 : e.id;
            (0, C.XU)(p.id, t);
        }
    }, [p, q]);
    let K = (0, s.e7)([_.ZP], () => null != _.ZP.getGuildSidebarState(n), [n]);
    return null != p && q
        ? (0, l.jsxs)(d.Gt, {
              value: w,
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(L.chat, B.page, { [L.threadSidebarOpen]: K }),
                      children: [
                          (0, l.jsx)(G, {
                              guild: p,
                              currentTab: u,
                              onTabSelect: J,
                          }),
                          (0, l.jsx)(o.Den, {
                              onScroll: V,
                              ref: U,
                              orientation: "vertical",
                              children: (0, l.jsx)("div", {
                                  className: i()(L.content, B.container),
                                  children:
                                      u === N.e.ALL_MEMBERS
                                          ? (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(Z.Z, { guild: p }),
                                                    (0, l.jsx)(y.Z, { guild: p }),
                                                ],
                                            })
                                          : (0, l.jsx)(I.Z, {
                                                guildId: p.id,
                                                currentTab: u,
                                            }),
                              }),
                          }),
                          (0, l.jsx)(O.Z, { guildId: p.id }),
                      ],
                  }),
                  F &&
                      (u === N.e.ALL_MEMBERS ? (0, l.jsx)(M.Z, { guildId: p.id }) : (0, l.jsx)(R.Z, { guildId: p.id })),
              ],
          })
        : null;
}
