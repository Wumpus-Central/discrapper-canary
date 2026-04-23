n.d(t, { A: () => E });
var l = n(627968),
    a = n(64700),
    i = n(793574),
    r = n(979286),
    s = n(674658),
    o = n(751304),
    c = n(561769),
    d = n(951707),
    u = n(409626),
    m = n(84904),
    h = n(954506),
    f = n(758836),
    _ = n(985018),
    g = n(804163);
let p = a.createContext({ closeModal: () => {}, trackAction: () => {} }),
    x = (e) => {
        let { skuId: t, aspectRatio: n } = e,
            { product: d } = (0, s.q)(t, !0),
            m = a.useContext(c.v3),
            { closeModal: h, trackAction: _ } = a.useContext(p),
            x = a.useCallback(() => {
                _(u.Ws.DiscordCollectiblesShopItem),
                    h(),
                    (0, r.Cz)({
                        analyticsLocations: [i.A.GAME_PROFILE],
                        analyticsSource: i.A.GAME_PROFILE,
                        initialProductSkuId: t,
                        tab: f.G2.CATALOG,
                    });
            }, [_, h, t]);
        if (null == d) return null;
        let { flattenProductVariants: E, ...A } = m;
        return (0, l.jsx)(c.v3.Provider, {
            value: { flattenProductVariants: E ?? !0, ...A },
            children: (0, l.jsx)(o.A, {
                skuId: t,
                aspectRatio: n,
                cardClassName: g.N,
                onClickCard: x,
                hideWishlistButton: !0,
                hidePrice: !0,
                hidePrimaryCTA: !0,
                hideSecondaryCTA: !0,
            }),
        });
    };
function E(e) {
    let { game: t, closeModal: n, trackAction: s } = e,
        o = t.shopCollectionIds?.[0],
        c = (0, m.j)(o),
        g = a.useCallback(() => {
            s(u.Ws.DiscordCollectiblesShop),
                n(),
                (0, r.Cz)({
                    analyticsLocations: [i.A.GAME_PROFILE],
                    analyticsSource: i.A.GAME_PROFILE,
                    tab: f.G2.CATALOG,
                });
        }, [s, n]),
        E = a.useMemo(() => ({ closeModal: n, trackAction: s }), [n, s]);
    return 0 === c.length
        ? null
        : (0, l.jsx)(p.Provider, {
              value: E,
              children: (0, l.jsx)(h.A, {
                  title: _.intl.string(_.t["5DYPT8"]),
                  onClickViewAll: g,
                  children: (0, l.jsx)(d.A, { gap: "md", children: c.map((e) => (0, l.jsx)(x, { skuId: e }, e)) }),
              }),
          });
}
