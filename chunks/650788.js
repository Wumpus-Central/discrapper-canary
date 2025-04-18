r.r(t), r.d(t, { default: () => M });
var n = r(200651),
    i = r(192379),
    o = r(120356),
    s = r.n(o),
    c = r(990547),
    l = r(442837),
    a = r(481060),
    d = r(213609),
    u = r(377171),
    C = r(674180),
    p = r(38618),
    f = r(312217),
    b = r(623299),
    j = r(984370),
    g = r(430824),
    h = r(76535),
    m = r(423000),
    x = r(891561),
    O = r(847033),
    v = r(544978),
    y = r(154522),
    _ = r(935554),
    w = r(340529),
    P = r(175390),
    N = r(957572),
    S = r(866104),
    L = r(886176),
    I = r(333866),
    Z = r(176505),
    D = r(20281),
    k = r(388032),
    T = r(663457),
    R = r(100658);
function E(e) {
    var t;
    let { guildId: r, productId: i } = e,
        { loaded: o, subscriptionsSettings: s } = (0, h.H)(r),
        c = (0, l.e7)([g.Z], () => g.Z.getGuild(r)),
        { selectedTab: d, isPhantomPreview: u, categoryTabs: C } = (0, O.m)(),
        p = !o || null == s;
    return null == c || (!u && p)
        ? (0, n.jsx)(a.$jN, {})
        : (0, n.jsx)(x.Z, {
              defaultSortOption: null != (t = null == s ? void 0 : s.store_page_guild_products_default_sort) ? t : I.zJ.NAME,
              children: (0, n.jsxs)('div', {
                  className: T.contentContainer,
                  children: [
                      (0, n.jsx)(S.C, {
                          guild: c,
                          subscriptionsSettings: s
                      }),
                      (0, n.jsx)(a.LZC, { size: 32 }),
                      C.length > 0 && (0, n.jsx)(w.z, { guild: c }),
                      (0, n.jsxs)('div', {
                          className: T.tabContainer,
                          children: [
                              (0, n.jsx)(a.LZC, { size: 32 }),
                              u && (0, n.jsx)(P.Z, { guildId: r }),
                              d === v.y.GUILD_PRODUCTS &&
                                  (0, n.jsx)(y.Q, {
                                      guildId: r,
                                      productId: i
                                  }),
                              d === v.y.GUILD_ROLE_SUBSCRIPTIONS && (0, n.jsx)(_.Z, { guildId: r })
                          ]
                      })
                  ]
              })
          });
}
function W(e) {
    let { guildId: t, productId: r } = e,
        o = (0, l.e7)([p.Z], () => p.Z.isConnected()),
        h = (0, l.e7)([g.Z], () => g.Z.getGuild(t)),
        { shouldHideGuildPurchaseEntryPoints: x, restrictionsLoading: v } = (0, C.uP)(t),
        { selectedTab: y, isPhantomPreview: _, categoryTabs: w } = (0, O.m)(),
        P = o && (null == h || (0 === w.length && !_) || (x && !v));
    return (
        i.useEffect(() => {
            P && (0, m.M)(t, Z.oC.GUILD_SHOP);
        }, [t, P]),
        (0, d.Z)(
            {
                type: D.n.PAGE,
                name: c.ImpressionNames.GUILD_SHOP_PAGE,
                properties: {
                    product_id: r,
                    tab: y
                }
            },
            { disableTrack: P }
        ),
        (0, n.jsxs)('div', {
            'data-has-border': !0,
            className: s()(R.chat, T.container),
            children: [
                (0, n.jsxs)(j.Z, {
                    children: [
                        (0, n.jsx)(j.Z.Icon, {
                            icon: (0, a.GSL)(L.Z),
                            'aria-hidden': !0,
                            color: u.Z.INTERACTIVE_ACTIVE
                        }),
                        (0, n.jsx)(j.Z.Title, { children: k.NW.string(k.t.al5EXF) }),
                        (0, n.jsx)(N.Z, {})
                    ]
                }),
                (0, n.jsx)(a.u2D, {
                    className: T.content,
                    children: o
                        ? (0, n.jsx)(E, {
                              guildId: t,
                              productId: r
                          })
                        : (0, n.jsx)(a.$jN, {})
                }),
                (0, n.jsx)(b.Z, { className: T.sparkleCloudTop }),
                (0, n.jsx)(f.Z, { className: T.sparkleCloudBottom })
            ]
        })
    );
}
function M(e) {
    let { guildId: t, productId: r, initialTab: i } = e;
    return (
        null == i && null != r && (i = v.y.GUILD_PRODUCTS),
        (0, n.jsx)(O.Z, {
            initialTab: i,
            guildId: t,
            children: (0, n.jsx)(W, {
                initialTab: i,
                productId: r,
                guildId: t
            })
        })
    );
}
