n.d(t, { A: () => h });
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(979286),
    s = n(674658),
    o = n(751304),
    c = n(561769),
    d = n(785330),
    u = n(409626),
    m = n(954506),
    x = n(652215),
    _ = n(758836),
    g = n(985018);
let f = l.createContext({ closeModal: () => {}, trackAction: () => {} }),
    p = {
        ShopProductCard: (e) => {
            let { skuId: t, aspectRatio: n } = e,
                { product: d } = (0, s.q)(t, !0),
                m = l.useContext(c.v3),
                { closeModal: x, trackAction: g } = l.useContext(f),
                p = l.useCallback(() => {
                    g(u.Ws.DiscordCollectiblesShop),
                        x(),
                        (0, r.Cz)({
                            analyticsLocations: [i.A.GAME_PROFILE],
                            analyticsSource: i.A.GAME_PROFILE,
                            initialProductSkuId: t,
                            tab: _.G2.CATALOG,
                        });
                }, [g, x, t]);
            if (null == d) return null;
            let { flattenProductVariants: h, ...v } = m;
            return (0, a.jsx)(c.v3.Provider, {
                value: { flattenProductVariants: h ?? !0, ...v },
                children: (0, a.jsx)(o.A, {
                    skuId: t,
                    aspectRatio: n,
                    onClickCard: p,
                    hideWishlistButton: !0,
                    hidePrice: !0,
                    hidePrimaryCTA: !0,
                    hideSecondaryCTA: !0,
                }),
            });
        },
    };
function h(e) {
    let { detectedGame: t, closeModal: n, trackAction: s } = e,
        o = t.shopCollectionIds?.[0],
        c = l.useCallback(() => {
            s(u.Ws.DiscordCollectiblesShop),
                n(),
                (0, r.Cz)({
                    analyticsLocations: [i.A.GAME_PROFILE],
                    analyticsSource: i.A.GAME_PROFILE,
                    tab: _.G2.CATALOG,
                });
        }, [s, n]),
        h = l.useMemo(() => ({ closeModal: n, trackAction: s }), [n, s]),
        v = l.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          id: "game-profile-products",
                          children: [
                              {
                                  block: "InteractiveHScroll",
                                  children: [
                                      {
                                          block: "SubTemplate",
                                          tenantId: x.FYj,
                                          templateId: "sku-list",
                                          requestParams: {
                                              collection_id: o,
                                              sort_purchased: "true",
                                              eager_load: "true",
                                              skeleton: "true",
                                          },
                                      },
                                  ],
                              },
                          ],
                      },
            [o],
        );
    return null == v
        ? null
        : (0, a.jsx)(f.Provider, {
              value: h,
              children: (0, a.jsx)(m.A, {
                  title: g.intl.string(g.t["5DYPT8"]),
                  onClickViewAll: c,
                  children: (0, a.jsx)(d.Ay, { layout: v, overrides: p }),
              }),
          });
}
