n.r(t), n.d(t, { default: () => q }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
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
    f = n(665625),
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
    O = n(995596),
    w = n(937283),
    M = n(440857),
    y = n(707113),
    A = n(981631),
    D = n(176505),
    k = n(388032),
    B = n(401853),
    G = n(161655);
function L(e) {
    let { guild: t, currentTab: n, onTabSelect: r } = e,
        i = (0, h.W)(t.id),
        a = k.intl.string(k.t.oclz3d),
        s = k.intl.string(k.t.oclz3d);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: a,
        }),
        (0, l.jsxs)(p.Z, {
            className: B.header,
            innerClassname: B.__invalid_innerHeader,
            channelId: D.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(p.Z.Icon, {
                    icon: o.BFJ,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(p.Z.Title, { children: s }),
                i &&
                    (0, l.jsx)(O.Z, {
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
        i = null != (t = (0, g.A)({ guildId: n })) ? t : 0,
        [u, h] = r.useState(i > 0 ? N.e.PENDING : N.e.ALL_MEMBERS),
        p = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
        { analyticsLocations: O } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, f.C)({ guildId: n }),
        { guildJoinRequests: k } = (0, v.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === u ? j.wB.SUBMITTED : u,
            sortOrder: D,
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
            guildJoinRequests: k,
        }),
        V = r.useCallback(async () => {
            var e;
            if (u === N.e.ALL_MEMBERS) return;
            let t = null == (e = U.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await z(D, u));
        }, [u, u, D, z]),
        J = r.useCallback(
            async (e) => {
                u !== e && (h(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && (await z(D, e)));
            },
            [u, n, z, D],
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
              value: O,
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(G.chat, B.page, { [G.threadSidebarOpen]: K }),
                      children: [
                          (0, l.jsx)(L, {
                              guild: p,
                              currentTab: u,
                              onTabSelect: J,
                          }),
                          (0, l.jsx)(o.Den, {
                              onScroll: V,
                              ref: U,
                              orientation: "vertical",
                              children: (0, l.jsx)("div", {
                                  className: a()(G.content, B.container),
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
                          (0, l.jsx)(M.Z, { guildId: p.id }),
                      ],
                  }),
                  F &&
                      (u === N.e.ALL_MEMBERS ? (0, l.jsx)(w.Z, { guildId: p.id }) : (0, l.jsx)(R.Z, { guildId: p.id })),
              ],
          })
        : null;
}
