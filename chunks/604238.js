t.d(l, { E: () => v, e: () => I });
var r = t(64700),
    n = t(735438),
    o = t(528226),
    i = t(427941),
    a = t(653793),
    s = t(118713),
    d = t(261225),
    c = t(970488),
    u = t(720462),
    h = t(673277),
    m = t(700263),
    p = t(304973),
    _ = t(18769),
    T = t(458306),
    S = t(282203),
    A = t(22519),
    E = t(607795),
    b = t(702755),
    C = t(954644),
    g = t(997175),
    f = t(930948),
    y = t(634791);
let v = {
        ContainedHero: o.A,
        BasicHero: (e) => {
            let { bannerSrc: l } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Carousel: s.A,
        Grid: d.A,
        GridItem: c.A,
        Section: h.A,
        Card: a.A,
        BackgroundImage: i.A,
        Skeleton: m.A,
        FeaturedChip: p.A,
        FeaturedCollection: _.A,
        FeaturedProduct: () => null,
        ShopProductCard: C.A,
        GridItemShopProductCard: b.A,
        StorefrontProductCard: f.A,
        GridItemStorefrontProductCard: g.A,
        SkuList: S.A,
        SubLayout: A.A,
        SubTemplate: E.A,
        Button: T.ar,
        Heading: T.Oo,
        Stack: T.Kp,
        Text: T.t,
        Tooltip: T.xY,
        Any1: y.A,
        Any2: y.A,
        Any3: y.A,
    },
    I = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, n.cloneDeep)(v);
            if (null != e) for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l;
        }, [e]);
    };
