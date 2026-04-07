n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    l = n(793574),
    r = n(979286),
    s = n(674658),
    o = n(751304),
    c = n(561769),
    d = n(951707),
    u = n(409626),
    m = n(84904),
    x = n(954506),
    g = n(758836),
    h = n(985018),
    f = n(536083);
let p = i.createContext({ closeModal: () => {}, trackAction: () => {} }),
    _ = (e) => {
        let { skuId: t, aspectRatio: n } = e,
            { product: d } = (0, s.q)(t, !0),
            m = i.useContext(c.v3),
            { closeModal: x, trackAction: h } = i.useContext(p),
            _ = i.useCallback(() => {
                h(u.Ws.DiscordCollectiblesShopItem),
                    x(),
                    (0, r.Cz)({
                        analyticsLocations: [l.A.GAME_PROFILE],
                        analyticsSource: l.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: g.G2.CATALOG,
                    });
            }, [h, x, t]);
        if (null == d) return null;
        let { flattenProductVariants: v, ...A } = m;
        return (0, a.jsx)(c.v3.Provider, {
            value: { flattenProductVariants: v ?? !0, ...A },
            children: (0, a.jsx)(o.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: f.N,
                onClickCard: _,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function v(e) {
    let { game: t, closeModal: n, trackAction: s } = e,
        o = t.shopCollectionIds?.[0],
        c = (0, m.j)(o),
        f = i.useCallback(() => {
            s(u.Ws.DiscordCollectiblesShop),
                n(),
                (0, r.Cz)({
                    analyticsLocations: [l.A.GAME_PROFILE],
                    analyticsSource: l.A.GAME_PROFILE,
                    tab: g.G2.CATALOG,
                });
        }, [s, n]),
        v = i.useMemo(() => ({ closeModal: n, trackAction: s }), [n, s]);
    return 0 === c.length
        ? null
        : (0, a.jsx)(p.Provider, {
              value: v,
              children: (0, a.jsx)(x.A, {
                  title: h.intl.string(h.t["5DYPT8"]),
                  onClickViewAll: f,
                  children: (0, a.jsx)(d.A, { gap: "md", children: c.map((e) => (0, a.jsx)(_, { skuId: e }, e)) }),
              }),
          });
}
