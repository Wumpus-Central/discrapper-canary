n.r(t), n.d(t, { default: () => E });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(990547),
    a = n(442837),
    c = n(481060),
    d = n(213609),
    C = n(377171),
    u = n(674180),
    x = n(38618),
    p = n(312217),
    h = n(623299),
    _ = n(984370),
    m = n(430824),
    g = n(76535),
    v = n(423000),
    f = n(891561),
    j = n(847033),
    L = n(544978),
    w = n(154522),
    I = n(935554),
    Z = n(340529),
    S = n(175390),
    N = n(957572),
    b = n(866104),
    T = n(886176),
    R = n(333866),
    k = n(176505),
    P = n(20281),
    D = n(388032),
    M = n(249295),
    U = n(767839);
function V(e) {
    var t;
    let { guildId: n, productId: r } = e,
        { loaded: s, subscriptionsSettings: l } = (0, g.H)(n),
        o = (0, a.e7)([m.Z], () => m.Z.getGuild(n)),
        { selectedTab: d, isPhantomPreview: C, categoryTabs: u } = (0, j.m)(),
        x = !s || null == l;
    return null == o || (!C && x)
        ? (0, i.jsx)(c.$jN, {})
        : (0, i.jsx)(f.Z, {
              defaultSortOption: null !== (t = null == l ? void 0 : l.store_page_guild_products_default_sort) && void 0 !== t ? t : R.zJ.NAME,
              children: (0, i.jsxs)('div', {
                  className: M.contentContainer,
                  children: [
                      (0, i.jsx)(b.C, {
                          guild: o,
                          subscriptionsSettings: l
                      }),
                      (0, i.jsx)(c.LZC, { size: 32 }),
                      u.length > 0 && (0, i.jsx)(Z.z, { guild: o }),
                      (0, i.jsxs)('div', {
                          className: M.tabContainer,
                          children: [
                              (0, i.jsx)(c.LZC, { size: 32 }),
                              C && (0, i.jsx)(S.Z, { guildId: n }),
                              d === L.y.GUILD_PRODUCTS &&
                                  (0, i.jsx)(w.Q, {
                                      guildId: n,
                                      productId: r
                                  }),
                              d === L.y.GUILD_ROLE_SUBSCRIPTIONS && (0, i.jsx)(I.Z, { guildId: n })
                          ]
                      })
                  ]
              })
          });
}
function z(e) {
    let { guildId: t, productId: n } = e,
        s = (0, a.e7)([x.Z], () => x.Z.isConnected()),
        g = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        { shouldHideGuildPurchaseEntryPoints: f, restrictionsLoading: L } = (0, u.uP)(t),
        { selectedTab: w, isPhantomPreview: I, categoryTabs: Z } = (0, j.m)(),
        S = s && (null == g || (0 === Z.length && !I) || (f && !L));
    return (
        r.useEffect(() => {
            S && (0, v.M)(t, k.oC.GUILD_SHOP);
        }, [t, S]),
        (0, d.Z)(
            {
                type: P.n.PAGE,
                name: o.ImpressionNames.GUILD_SHOP_PAGE,
                properties: {
                    product_id: n,
                    tab: w
                }
            },
            { disableTrack: S }
        ),
        (0, i.jsxs)('div', {
            'data-has-border': !0,
            className: l()(U.chat, M.container),
            children: [
                (0, i.jsxs)(_.Z, {
                    children: [
                        (0, i.jsx)(_.Z.Icon, {
                            icon: (0, c.GSL)(T.Z),
                            'aria-hidden': !0,
                            color: C.Z.INTERACTIVE_ACTIVE
                        }),
                        (0, i.jsx)(_.Z.Title, { children: D.intl.string(D.t.al5EXF) }),
                        (0, i.jsx)(N.Z, {})
                    ]
                }),
                (0, i.jsx)(c.u2D, {
                    className: M.content,
                    children: s
                        ? (0, i.jsx)(V, {
                              guildId: t,
                              productId: n
                          })
                        : (0, i.jsx)(c.$jN, {})
                }),
                (0, i.jsx)(h.Z, { className: M.sparkleCloudTop }),
                (0, i.jsx)(p.Z, { className: M.sparkleCloudBottom })
            ]
        })
    );
}
function E(e) {
    let { guildId: t, productId: n, initialTab: r } = e;
    return (
        null == r && null != n && (r = L.y.GUILD_PRODUCTS),
        (0, i.jsx)(j.Z, {
            initialTab: r,
            guildId: t,
            children: (0, i.jsx)(z, {
                initialTab: r,
                productId: n,
                guildId: t
            })
        })
    );
}
