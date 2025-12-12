r.r(t), r.d(t, { default: () => M });
var n = r(54381),
    i = r(473749),
    o = r(120356),
    l = r.n(o),
    c = r(990547),
    s = r(442837),
    a = r(692547),
    d = r(481060),
    u = r(213609),
    C = r(674180),
    p = r(38618),
    f = r(312217),
    b = r(623299),
    j = r(984370),
    g = r(430824),
    O = r(76535),
    h = r(423000),
    x = r(891561),
    m = r(847033),
    v = r(544978),
    y = r(154522),
    w = r(935554),
    P = r(340529),
    _ = r(175390),
    L = r(64685),
    S = r(866104),
    I = r(886176),
    Z = r(333866),
    D = r(176505),
    T = r(20281),
    k = r(388032),
    N = r(977063),
    R = r(978966);
function E(e) {
    var t;
    let { guildId: r, productId: i } = e,
        { loaded: o, subscriptionsSettings: l } = (0, O.H)(r),
        c = (0, s.e7)([g.Z], () => g.Z.getGuild(r)),
        { selectedTab: a, isPhantomPreview: u, categoryTabs: C } = (0, m.m)(),
        p = !o || null == l;
    return null == c || (!u && p)
        ? (0, n.jsx)(d.$jN, {})
        : (0, n.jsx)(x.Z, {
              defaultSortOption:
                  null != (t = null == l ? void 0 : l.store_page_guild_products_default_sort) ? t : Z.zJ.NAME,
              children: (0, n.jsxs)("div", {
                  className: N.contentContainer,
                  children: [
                      (0, n.jsx)(S.C, {
                          guild: c,
                          subscriptionsSettings: l,
                      }),
                      (0, n.jsx)(d.LZC, { size: 32 }),
                      C.length > 0 && (0, n.jsx)(P.z, { guild: c }),
                      (0, n.jsxs)("div", {
                          className: N.tabContainer,
                          children: [
                              (0, n.jsx)(d.LZC, { size: 32 }),
                              u && (0, n.jsx)(_.Z, { guildId: r }),
                              a === v.y.GUILD_PRODUCTS &&
                                  (0, n.jsx)(y.Q, {
                                      guildId: r,
                                      productId: i,
                                  }),
                              a === v.y.GUILD_ROLE_SUBSCRIPTIONS && (0, n.jsx)(w.Z, { guildId: r }),
                          ],
                      }),
                  ],
              }),
          });
}
function V(e) {
    let { guildId: t, productId: r } = e,
        o = (0, s.e7)([p.Z], () => p.Z.isConnected()),
        O = (0, s.e7)([g.Z], () => g.Z.getGuild(t)),
        { shouldHideGuildPurchaseEntryPoints: x, restrictionsLoading: v } = (0, C.uP)(t),
        { selectedTab: y, isPhantomPreview: w, categoryTabs: P } = (0, m.m)(),
        _ = o && (null == O || (0 === P.length && !w) || (x && !v));
    return (
        i.useEffect(() => {
            _ && (0, h.M)(t, D.oC.GUILD_SHOP);
        }, [t, _]),
        (0, u.Z)(
            {
                type: T.n.PAGE,
                name: c.ImpressionNames.GUILD_SHOP_PAGE,
                properties: {
                    product_id: r,
                    tab: y,
                },
            },
            { disableTrack: _ },
        ),
        (0, n.jsxs)("div", {
            "data-has-border": !0,
            className: l()(R.chat, N.container),
            children: [
                (0, n.jsxs)(j.Z, {
                    children: [
                        (0, n.jsx)(j.Z.Icon, {
                            icon: (0, d.GSL)(I.Z),
                            "aria-hidden": !0,
                            color: a.Z.colors.INTERACTIVE_TEXT_ACTIVE.css,
                        }),
                        (0, n.jsx)(j.Z.Title, { children: k.intl.string(k.t.al5EXL) }),
                        (0, n.jsx)(L.Z, {}),
                    ],
                }),
                (0, n.jsx)(d.u2D, {
                    className: N.content,
                    children: o
                        ? (0, n.jsx)(E, {
                              guildId: t,
                              productId: r,
                          })
                        : (0, n.jsx)(d.$jN, {}),
                }),
                (0, n.jsx)(b.Z, { className: N.sparkleCloudTop }),
                (0, n.jsx)(f.Z, { className: N.sparkleCloudBottom }),
            ],
        })
    );
}
function M(e) {
    let { guildId: t, productId: r, initialTab: i } = e;
    return (
        null == i && null != r && (i = v.y.GUILD_PRODUCTS),
        (0, n.jsx)(m.Z, {
            initialTab: i,
            guildId: t,
            children: (0, n.jsx)(V, {
                initialTab: i,
                productId: r,
                guildId: t,
            }),
        })
    );
}
