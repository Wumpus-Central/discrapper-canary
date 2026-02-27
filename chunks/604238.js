t.d(l, { E: () => f, e: () => I });
var r = t(64700),
    o = t(735438),
    n = t(528226),
    a = t(427941),
    i = t(653793),
    d = t(118713),
    s = t(261225),
    c = t(970488),
    u = t(720462),
    h = t(673277),
    p = t(700263),
    m = t(304973),
    b = t(18769),
    C = t(458306),
    g = t(282203),
    _ = t(22519),
    k = t(607795),
    A = t(954644),
    S = t(930948),
    y = t(634791);
let f = {
        ContainedHero: n.A,
        BasicHero: (e) => {
            let { bannerSrc: l } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Carousel: d.A,
        Grid: s.A,
        GridItem: c.A,
        Section: h.A,
        Card: i.A,
        BackgroundImage: a.A,
        Skeleton: p.A,
        FeaturedChip: m.A,
        FeaturedCollection: b.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        StorefrontProductCard: S.A,
        SkuList: g.A,
        SubLayout: _.A,
        SubTemplate: k.A,
        Button: C.ar,
        Heading: C.Oo,
        Stack: C.Kp,
        Text: C.t,
        Any1: y.A,
        Any2: y.A,
        Any3: y.A,
    },
    I = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(f);
            if (null != e) for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l;
        }, [e]);
    };
