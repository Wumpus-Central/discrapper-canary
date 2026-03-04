t.d(l, { E: () => E, e: () => y });
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
    _ = t(18769),
    b = t(458306),
    S = t(282203),
    T = t(22519),
    C = t(607795),
    A = t(954644),
    g = t(930948),
    k = t(634791);
let E = {
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
        FeaturedCollection: _.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        StorefrontProductCard: g.A,
        SkuList: S.A,
        SubLayout: T.A,
        SubTemplate: C.A,
        Button: b.ar,
        Heading: b.Oo,
        Stack: b.Kp,
        Text: b.t,
        Tooltip: b.xY,
        Any1: k.A,
        Any2: k.A,
        Any3: k.A,
    },
    y = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(E);
            if (null != e) for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l;
        }, [e]);
    };
