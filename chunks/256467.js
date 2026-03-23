i.r(e), i.d(e, { default: () => O });
var s = i(627968),
    r = i(64700),
    n = i(503698),
    l = i.n(n),
    d = i(110259),
    a = i(311907),
    o = i(827734),
    c = i(397927),
    C = i(139286),
    u = i(465932),
    x = i(142120),
    h = i(495066),
    _ = i(854018),
    p = i(742589),
    j = i(71393),
    g = i(722888),
    m = i(683271),
    f = i(558060),
    v = i(381969),
    L = i(920814),
    I = i(638964),
    A = i(422373),
    w = i(812136),
    N = i(398828),
    T = i(46623),
    R = i(43136),
    S = i(575926),
    b = i(284683),
    V = i(746080),
    k = i(412728),
    D = i(985018),
    U = i(86719),
    P = i(638990);
function E(t) {
    let { guildId: e, productId: i } = t,
        { loaded: r, subscriptionsSettings: n } = (0, g.G)(e),
        l = (0, a.bG)([j.A], () => j.A.getGuild(e)),
        { selectedTab: d, isPhantomPreview: o, categoryTabs: C } = (0, v.k)(),
        u = !r || null == n;
    return null == l || (!o && u)
        ? (0, s.jsx)(c.y$y, {})
        : (0, s.jsx)(f.default, {
              defaultSortOption: n?.store_page_guild_products_default_sort ?? b.p$.NAME,
              children: (0, s.jsxs)("div", {
                  className: U.hQ,
                  children: [
                      (0, s.jsx)(R.A, { guild: l, subscriptionsSettings: n }),
                      (0, s.jsx)(c.hKd, { size: 32 }),
                      C.length > 0 && (0, s.jsx)(w.F, { guild: l }),
                      (0, s.jsxs)("div", {
                          className: U.v_,
                          children: [
                              (0, s.jsx)(c.hKd, { size: 32 }),
                              o && (0, s.jsx)(N.A, { guildId: e }),
                              d === L.B.GUILD_PRODUCTS && (0, s.jsx)(I.h, { guildId: e, productId: i }),
                              d === L.B.GUILD_ROLE_SUBSCRIPTIONS && (0, s.jsx)(A.A, { guildId: e }),
                          ],
                      }),
                  ],
              }),
          });
}
function H(t) {
    let { guildId: e, productId: i } = t,
        n = (0, a.bG)([x.A], () => x.A.isConnected()),
        g = (0, a.bG)([j.A], () => j.A.getGuild(e)),
        { shouldHideGuildPurchaseEntryPoints: f, restrictionsLoading: L } = (0, u.MH)(e),
        { selectedTab: I, isPhantomPreview: A, categoryTabs: w } = (0, v.k)(),
        N = n && (null == g || (0 === w.length && !A) || (f && !L));
    return (
        r.useEffect(() => {
            N && (0, m.B)(e, V.VV.GUILD_SHOP);
        }, [e, N]),
        (0, C.A)(
            { type: k.z.PAGE, name: d.ImpressionNames.GUILD_SHOP_PAGE, properties: { product_id: i, tab: I } },
            { disableTrack: N },
        ),
        (0, s.jsxs)("div", {
            "data-has-border": !0,
            className: l()(P.TE, U.kL),
            children: [
                (0, s.jsxs)(p.A, {
                    children: [
                        (0, s.jsx)(p.A.Icon, {
                            icon: (0, c.kHD)(S.h),
                            "aria-hidden": !0,
                            color: o.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
                        }),
                        (0, s.jsx)(p.A.Title, { children: D.intl.string(D.t.al5EXL) }),
                        (0, s.jsx)(T.A, {}),
                    ],
                }),
                (0, s.jsx)(c.d_W, {
                    className: U.Qs,
                    children: n ? (0, s.jsx)(E, { guildId: e, productId: i }) : (0, s.jsx)(c.y$y, {}),
                }),
                (0, s.jsx)(_.A, { className: U.Dv }),
                (0, s.jsx)(h.A, { className: U.xC }),
            ],
        })
    );
}
function O(t) {
    let { guildId: e, productId: i, initialTab: r } = t;
    return (
        null == r && null != i && (r = L.B.GUILD_PRODUCTS),
        (0, s.jsx)(v.A, {
            initialTab: r,
            guildId: e,
            children: (0, s.jsx)(H, { initialTab: r, productId: i, guildId: e }),
        })
    );
}
