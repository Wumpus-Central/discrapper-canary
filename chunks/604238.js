t.d(r, { E: () => C, e: () => A });
var d = t(64700),
    l = t(735438),
    c = t(528226),
    o = t(653793),
    a = t(118713),
    n = t(261225),
    s = t(970488),
    u = t(720462),
    i = t(673277),
    h = t(700263),
    k = t(304973),
    p = t(18769),
    b = t(458306),
    m = t(282203),
    S = t(22519),
    f = t(954644),
    v = t(634791);
let C = {
        ContainedHero: c.A,
        BasicHero: (e) => {
            let { bannerSrc: r } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Carousel: a.A,
        Grid: n.A,
        GridItem: s.A,
        Section: i.A,
        Card: o.A,
        Skeleton: h.A,
        FeaturedChip: k.A,
        FeaturedCollection: p.A,
        FeaturedProduct: () => null,
        ShopProductCard: f.A,
        SkuList: m.A,
        SubLayout: S.A,
        Button: b.ar,
        Heading: b.Oo,
        Stack: b.Kp,
        Text: b.t,
        Any1: v.A,
        Any2: v.A,
        Any3: v.A,
    },
    A = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return d.useMemo(() => {
            let r = (0, l.cloneDeep)(C);
            if (null != e) for (let [t, d] of Object.entries(e)) null != d && (r[t] = d);
            return r;
        }, [e]);
    };
