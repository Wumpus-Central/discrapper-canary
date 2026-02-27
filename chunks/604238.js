t.d(l, { E: () => A, e: () => f });
var r = t(64700),
    o = t(735438),
    n = t(528226),
    a = t(653793),
    i = t(118713),
    d = t(261225),
    c = t(970488),
    s = t(720462),
    u = t(673277),
    h = t(700263),
    m = t(304973),
    p = t(18769),
    b = t(458306),
    C = t(282203),
    _ = t(22519),
    k = t(607795),
    g = t(954644),
    S = t(930948),
    y = t(634791);
let A = {
        ContainedHero: n.A,
        BasicHero: (e) => {
            let { bannerSrc: l } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: s.A,
        Carousel: i.A,
        Grid: d.A,
        GridItem: c.A,
        Section: u.A,
        Card: a.A,
        Skeleton: h.A,
        FeaturedChip: m.A,
        FeaturedCollection: p.A,
        FeaturedProduct: () => null,
        ShopProductCard: g.A,
        StorefrontProductCard: S.A,
        SkuList: C.A,
        SubLayout: _.A,
        SubTemplate: k.A,
        Button: b.ar,
        Heading: b.Oo,
        Stack: b.Kp,
        Text: b.t,
        Any1: y.A,
        Any2: y.A,
        Any3: y.A,
    },
    f = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(A);
            if (null != e) for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l;
        }, [e]);
    };
