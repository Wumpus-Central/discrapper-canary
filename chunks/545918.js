n.r(t), n.d(t, { default: () => U }), n(388685);
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(252618),
    m = n(189357),
    x = n(693546),
    b = n(246364),
    j = n(697379),
    f = n(98493),
    h = n(412222),
    g = n(223312),
    p = n(571728),
    v = n(984370),
    C = n(703656),
    T = n(433355),
    S = n(984933),
    E = n(430824),
    N = n(384433),
    O = n(241559),
    _ = n(575766),
    P = n(901066),
    I = n(987491),
    y = n(305473),
    R = n(995596),
    w = n(937283),
    A = n(440857),
    Z = n(707113),
    M = n(981631),
    D = n(176505),
    k = n(388032),
    G = n(976621),
    L = n(978966);
function B(e) {
    let { guild: t, currentTab: n, onTabSelect: r } = e,
        a = (0, j.W)(t.id),
        i = k.intl.string(k.t.oclz3Z),
        s = k.intl.string(k.t.oclz3Z);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: i,
        }),
        (0, l.jsxs)(v.Z, {
            className: G.header,
            innerClassname: G.__invalid_innerHeader,
            channelId: D.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(v.Z.Icon, {
                    icon: o.BFJ,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(v.Z.Title, { children: s }),
                a &&
                    (0, l.jsx)(R.Z, {
                        guildId: t.id,
                        currentTab: n,
                        onTabSelect: r,
                    }),
            ],
        })
    );
}
function U(e) {
    var t;
    let { guildId: n } = e,
        a = null != (t = (0, p.A)({ guildId: n })) ? t : 0,
        [u, j] = r.useState(a > 0 ? N.e.PENDING : N.e.ALL_MEMBERS),
        v = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
        { analyticsLocations: R } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, h.C)({ guildId: n }),
        { guildJoinRequests: k } = (0, g.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === u ? b.wB.SUBMITTED : u,
            sortOrder: D,
        });
    r.useEffect(() => {
        (null == v ? void 0 : v.features.has(M.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
            j(N.e.ALL_MEMBERS);
    }, [v]);
    let U = (0, O.n2)(n),
        F = (0, m.m)(n),
        q = r.useRef(null);
    (0, _.n)(n);
    let { fetchNextPage: z } = (0, f.m)({
            guildId: n,
            guildJoinRequests: k,
        }),
        V = r.useCallback(async () => {
            var e;
            if (u === N.e.ALL_MEMBERS) return;
            let t = null == (e = q.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await z(D, u));
        }, [u, u, D, z]),
        J = r.useCallback(
            async (e) => {
                u !== e && (j(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && (await z(D, e)));
            },
            [u, n, z, D],
        );
    r.useEffect(() => {
        if (!U && null != v) {
            var e;
            let t = null == (e = S.ZP.getDefaultChannel(v.id)) ? void 0 : e.id;
            (0, C.XU)(v.id, t);
        }
    }, [v, U]);
    let K = (0, s.e7)([T.ZP], () => null != T.ZP.getGuildSidebarState(n), [n]);
    return null != v && U
        ? (0, l.jsxs)(d.Gt, {
              value: R,
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(L.chat, G.page, { [L.threadSidebarOpen]: K }),
                      children: [
                          (0, l.jsx)(B, {
                              guild: v,
                              currentTab: u,
                              onTabSelect: J,
                          }),
                          (0, l.jsx)(o.Den, {
                              onScroll: V,
                              ref: q,
                              orientation: "vertical",
                              children: (0, l.jsx)("div", {
                                  className: i()(L.content, G.container),
                                  children:
                                      u === N.e.ALL_MEMBERS
                                          ? (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(y.Z, { guild: v }),
                                                    (0, l.jsx)(Z.Z, { guild: v }),
                                                ],
                                            })
                                          : (0, l.jsx)(I.Z, {
                                                guildId: v.id,
                                                currentTab: u,
                                            }),
                              }),
                          }),
                          (0, l.jsx)(A.Z, { guildId: v.id }),
                      ],
                  }),
                  F &&
                      (u === N.e.ALL_MEMBERS ? (0, l.jsx)(w.Z, { guildId: v.id }) : (0, l.jsx)(P.Z, { guildId: v.id })),
              ],
          })
        : null;
}
