n.r(t), n.d(t, { default: () => U }), n(388685);
var l = n(54381),
    r = n(473749),
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
    b = n(697379),
    h = n(98493),
    f = n(412222),
    g = n(223312),
    p = n(571728),
    v = n(984370),
    _ = n(703656),
    C = n(433355),
    T = n(984933),
    S = n(430824),
    E = n(384433),
    N = n(241559),
    O = n(575766),
    P = n(901066),
    y = n(987491),
    I = n(305473),
    R = n(995596),
    w = n(937283),
    A = n(440857),
    M = n(707113),
    Z = n(981631),
    D = n(176505),
    k = n(388032),
    L = n(350013),
    G = n(97009);
function B(e) {
    let { guild: t, currentTab: n, onTabSelect: r } = e,
        i = (0, b.W)(t.id),
        a = k.intl.string(k.t.oclz3Z),
        s = k.intl.string(k.t.oclz3Z);
    return (
        (0, u.Tt)({
            location: t.name,
            subsection: a,
        }),
        (0, l.jsxs)(v.Z, {
            className: L.header,
            innerClassname: L.__invalid_innerHeader,
            channelId: D.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(v.Z.Icon, {
                    icon: o.BFJ,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(v.Z.Title, { children: s }),
                i &&
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
        i = null != (t = (0, p.A)({ guildId: n })) ? t : 0,
        [u, b] = r.useState(i > 0 ? E.e.PENDING : E.e.ALL_MEMBERS),
        v = (0, s.e7)([S.Z], () => S.Z.getGuild(n)),
        { analyticsLocations: R } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, f.C)({ guildId: n }),
        { guildJoinRequests: k } = (0, g.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === u ? j.wB.SUBMITTED : u,
            sortOrder: D,
        });
    r.useEffect(() => {
        (null == v ? void 0 : v.features.has(Z.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
            b(E.e.ALL_MEMBERS);
    }, [v]);
    let U = (0, N.n2)(n),
        F = (0, m.m)(n),
        q = r.useRef(null);
    (0, O.n)(n);
    let { fetchNextPage: z } = (0, h.m)({
            guildId: n,
            guildJoinRequests: k,
        }),
        V = r.useCallback(async () => {
            var e;
            if (u === E.e.ALL_MEMBERS) return;
            let t = null == (e = q.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await z(D, u));
        }, [u, u, D, z]),
        J = r.useCallback(
            async (e) => {
                u !== e && (b(e), x.Z.setSelectedGuildJoinRequest(n, null), "ALL_MEMBERS" !== e && (await z(D, e)));
            },
            [u, n, z, D],
        );
    r.useEffect(() => {
        if (!U && null != v) {
            var e;
            let t = null == (e = T.ZP.getDefaultChannel(v.id)) ? void 0 : e.id;
            (0, _.XU)(v.id, t);
        }
    }, [v, U]);
    let K = (0, s.e7)([C.ZP], () => null != C.ZP.getGuildSidebarState(n), [n]);
    return null != v && U
        ? (0, l.jsxs)(d.Gt, {
              value: R,
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(G.chat, L.page, { [G.threadSidebarOpen]: K }),
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
                                  className: a()(G.content, L.container),
                                  children:
                                      u === E.e.ALL_MEMBERS
                                          ? (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(I.Z, { guild: v }),
                                                    (0, l.jsx)(M.Z, { guild: v }),
                                                ],
                                            })
                                          : (0, l.jsx)(y.Z, {
                                                guildId: v.id,
                                                currentTab: u,
                                            }),
                              }),
                          }),
                          (0, l.jsx)(A.Z, { guildId: v.id }),
                      ],
                  }),
                  F &&
                      (u === E.e.ALL_MEMBERS ? (0, l.jsx)(w.Z, { guildId: v.id }) : (0, l.jsx)(P.Z, { guildId: v.id })),
              ],
          })
        : null;
}
