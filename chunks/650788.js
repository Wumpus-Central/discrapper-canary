n.r(t),
    n.d(t, {
        default: function () {
            return V;
        }
    });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(990547),
    a = n(442837),
    c = n(481060),
    d = n(213609),
    C = n(377171),
    u = n(674180),
    x = n(38618),
    f = n(312217),
    p = n(623299),
    h = n(984370),
    m = n(430824),
    g = n(76535),
    v = n(423000),
    _ = n(891561),
    j = n(847033),
    I = n(544978),
    w = n(154522),
    L = n(935554),
    S = n(340529),
    b = n(175390),
    Z = n(957572),
    N = n(866104),
    T = n(886176),
    R = n(333866),
    M = n(176505),
    D = n(20281),
    P = n(388032),
    U = n(850166),
    k = n(247627);
function B(e) {
    var t;
    let { guildId: n, productId: i } = e,
        { loaded: s, subscriptionsSettings: o } = (0, g.H)(n),
        l = (0, a.e7)([m.Z], () => m.Z.getGuild(n)),
        { selectedTab: d, isPhantomPreview: C, categoryTabs: u } = (0, j.m)(),
        x = !s || null == o;
    return null == l || (!C && x)
        ? (0, r.jsx)(c.Spinner, {})
        : (0, r.jsx)(_.Z, {
              defaultSortOption: null !== (t = null == o ? void 0 : o.store_page_guild_products_default_sort) && void 0 !== t ? t : R.zJ.NAME,
              children: (0, r.jsxs)('div', {
                  className: U.contentContainer,
                  children: [
                      (0, r.jsx)(N.C, {
                          guild: l,
                          subscriptionsSettings: o
                      }),
                      (0, r.jsx)(c.Spacer, { size: 32 }),
                      u.length > 0 && (0, r.jsx)(S.z, { guild: l }),
                      (0, r.jsxs)('div', {
                          className: U.tabContainer,
                          children: [
                              (0, r.jsx)(c.Spacer, { size: 32 }),
                              C && (0, r.jsx)(b.Z, { guildId: n }),
                              d === I.y.GUILD_PRODUCTS &&
                                  (0, r.jsx)(w.Q, {
                                      guildId: n,
                                      productId: i
                                  }),
                              d === I.y.GUILD_ROLE_SUBSCRIPTIONS && (0, r.jsx)(L.Z, { guildId: n })
                          ]
                      })
                  ]
              })
          });
}
function E(e) {
    let { guildId: t, productId: n } = e,
        s = (0, a.e7)([x.Z], () => x.Z.isConnected()),
        g = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        { shouldHideGuildPurchaseEntryPoints: _, restrictionsLoading: I } = (0, u.uP)(t),
        { selectedTab: w, isPhantomPreview: L, categoryTabs: S } = (0, j.m)(),
        b = s && (null == g || (0 === S.length && !L) || (_ && !I));
    return (
        i.useEffect(() => {
            b && (0, v.M)(t, M.oC.GUILD_SHOP);
        }, [t, b]),
        (0, d.Z)(
            {
                type: D.n.PAGE,
                name: l.ImpressionNames.GUILD_SHOP_PAGE,
                properties: {
                    product_id: n,
                    tab: w
                }
            },
            { disableTrack: b }
        ),
        (0, r.jsxs)('div', {
            className: o()(k.chat, U.container),
            children: [
                (0, r.jsxs)(h.Z, {
                    children: [
                        (0, r.jsx)(h.Z.Icon, {
                            icon: (0, c.makeIconCompat)(T.Z),
                            'aria-hidden': !0,
                            color: C.Z.INTERACTIVE_ACTIVE
                        }),
                        (0, r.jsx)(h.Z.Title, { children: P.intl.string(P.t.al5EXF) }),
                        (0, r.jsx)(Z.Z, {})
                    ]
                }),
                (0, r.jsx)(c.ScrollerNone, {
                    className: U.content,
                    children: s
                        ? (0, r.jsx)(B, {
                              guildId: t,
                              productId: n
                          })
                        : (0, r.jsx)(c.Spinner, {})
                }),
                (0, r.jsx)(p.Z, { className: U.sparkleCloudTop }),
                (0, r.jsx)(f.Z, { className: U.sparkleCloudBottom })
            ]
        })
    );
}
function V(e) {
    let { guildId: t, productId: n, initialTab: i } = e;
    return (
        null == i && null != n && (i = I.y.GUILD_PRODUCTS),
        (0, r.jsx)(j.Z, {
            initialTab: i,
            guildId: t,
            children: (0, r.jsx)(E, {
                initialTab: i,
                productId: n,
                guildId: t
            })
        })
    );
}
