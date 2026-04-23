i.r(e), i.d(e, { default: () => O });
var s = i(627968),
    r = i(64700),
    n = i(503698),
    l = i.n(n),
    a = i(110259),
    d = i(311907),
    o = i(827734),
    c = i(289873),
    C = i(696986),
    u = i(565787),
    x = i(573613),
    h = i(139286),
    _ = i(465932),
    p = i(142120),
    j = i(495066),
    g = i(854018),
    m = i(742589),
    f = i(71393),
    v = i(722888),
    L = i(683271),
    I = i(558060),
    A = i(381969),
    w = i(920814),
    N = i(638964),
    R = i(422373),
    S = i(812136),
    V = i(398828),
    b = i(46623),
    T = i(43136),
    E = i(575926),
    k = i(284683),
    D = i(746080),
    U = i(412728),
    P = i(985018),
    M = i(660858),
    G = i(964623);
function H(t) {
    let { guildId: e, productId: i } = t,
        { loaded: r, subscriptionsSettings: n } = (0, v.G)(e),
        l = (0, d.bG)([f.A], () => f.A.getGuild(e)),
        { selectedTab: a, isPhantomPreview: o, categoryTabs: u } = (0, A.k)(),
        x = !r || null == n;
    return null == l || (!o && x)
        ? (0, s.jsx)(c.y, {})
        : (0, s.jsx)(I.default, {
              defaultSortOption: n?.store_page_guild_products_default_sort ?? k.p$.NAME,
              children: (0, s.jsxs)("div", {
                  className: M.hQ,
                  children: [
                      (0, s.jsx)(T.A, { guild: l, subscriptionsSettings: n }),
                      (0, s.jsx)(C.h, { size: 32 }),
                      u.length > 0 && (0, s.jsx)(S.F, { guild: l }),
                      (0, s.jsxs)("div", {
                          className: M.v_,
                          children: [
                              (0, s.jsx)(C.h, { size: 32 }),
                              o && (0, s.jsx)(V.A, { guildId: e }),
                              a === w.B.GUILD_PRODUCTS && (0, s.jsx)(N.h, { guildId: e, productId: i }),
                              a === w.B.GUILD_ROLE_SUBSCRIPTIONS && (0, s.jsx)(R.A, { guildId: e }),
                          ],
                      }),
                  ],
              }),
          });
}
function B(t) {
    let { guildId: e, productId: i } = t,
        n = (0, d.bG)([p.A], () => p.A.isConnected()),
        C = (0, d.bG)([f.A], () => f.A.getGuild(e)),
        { shouldHideGuildPurchaseEntryPoints: v, restrictionsLoading: I } = (0, _.MH)(e),
        { selectedTab: w, isPhantomPreview: N, categoryTabs: R } = (0, A.k)(),
        S = n && (null == C || (0 === R.length && !N) || (v && !I));
    return (
        r.useEffect(() => {
            S && (0, L.B)(e, D.VV.GUILD_SHOP);
        }, [e, S]),
        (0, h.A)(
            { type: U.z.PAGE, name: a.ImpressionNames.GUILD_SHOP_PAGE, properties: { product_id: i, tab: w } },
            { disableTrack: S },
        ),
        (0, s.jsxs)("div", {
            "data-has-border": !0,
            className: l()(G.TE, M.kL),
            children: [
                (0, s.jsxs)(m.A, {
                    children: [
                        (0, s.jsx)(m.A.Icon, {
                            icon: (0, u.k)(E.h),
                            "aria-hidden": !0,
                            color: o.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
                        }),
                        (0, s.jsx)(m.A.Title, { children: P.intl.string(P.t.al5EXL) }),
                        (0, s.jsx)(b.A, {}),
                    ],
                }),
                (0, s.jsx)(x.d_, {
                    className: M.Qs,
                    children: n ? (0, s.jsx)(H, { guildId: e, productId: i }) : (0, s.jsx)(c.y, {}),
                }),
                (0, s.jsx)(g.A, { className: M.Dv }),
                (0, s.jsx)(j.A, { className: M.xC }),
            ],
        })
    );
}
function O(t) {
    let { guildId: e, productId: i, initialTab: r } = t;
    return (
        null == r && null != i && (r = w.B.GUILD_PRODUCTS),
        (0, s.jsx)(A.A, {
            initialTab: r,
            guildId: e,
            children: (0, s.jsx)(B, { initialTab: r, productId: i, guildId: e }),
        })
    );
}
