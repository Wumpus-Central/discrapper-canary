n.r(d), n.d(d, { default: () => m });
var r = n(627968),
    t = n(64700),
    _ = n(503698),
    a = n.n(_),
    s = n(835245),
    o = n(397927),
    c = n(444927),
    i = n(785330),
    l = n(697454),
    b = n(611924),
    u = n(976860),
    h = n(594832),
    p = n(841702),
    g = n(621653),
    C = n(983545),
    k = n(155486),
    I = n(938191),
    x = n(758836),
    E = n(652215),
    f = n(157884);
let m = (e) => {
    let { collectionId: d } = e;
    (0, b.P)(l.a), (0, g.g)();
    let n = t.useRef(null);
    t.useEffect(() => {
        n.current?.focus();
    }, []);
    let _ = (0, c.A)((0, s.A)());
    (0, h.pE)();
    let m = (0, I.yB)("CollectiblesShopIndexPage");
    (0, I.gB)();
    let { selectedTab: j, transitionToTab: v } = (0, C.o)(x.G2.COLLECTION_INDEX),
        { categories: B, isFetching: L } = (0, p.Ay)({ logPerf: !0 }, { sessionId: _, tab: x.G2.COLLECTION_INDEX }),
        O = t.useMemo(
            () =>
                [...B.values()].find((e) => {
                    let { skuId: n } = e;
                    return n === d;
                }),
            [B, d],
        );
    t.useEffect(() => {
        !L && B.size > 0 && O?.skuId == null && (0, u.pX)(E.BVt.COLLECTIBLES_SHOP);
    }, [L, B.size, O?.skuId]);
    let S = t.useMemo(() => {
        let e = O?.styles?.backgroundColors?.[0];
        return {
            id: "shop-index-page",
            children: [
                {
                    block: "Section",
                    children: [
                        {
                            block: "ContainedHero",
                            bannerSrc: O?.catalogBannerUrl ?? "",
                            backgroundColor: e?.toHexString() ?? "red",
                        },
                    ],
                },
                {
                    block: "Section",
                    children: [
                        {
                            block: "Grid",
                            columns: 3,
                            children: O?.products.map((e) => ({ block: "ShopProductCard", skuId: e.skuId })) ?? [],
                        },
                    ],
                },
            ],
        };
    }, [O]);
    return L || 0 === B.size
        ? null
        : (0, r.jsxs)("div", {
              className: a()(f.bx, { [I.jP]: m }),
              ref: n,
              tabIndex: -1,
              children: [
                  (0, r.jsx)(k.G, { handleTransition: v, selectedTab: j }),
                  (0, r.jsx)(o.HOs, {
                      children: (0, r.jsx)("div", { className: f.Qs, children: (0, r.jsx)(i.A, { layout: S }) }),
                  }),
              ],
          });
};
