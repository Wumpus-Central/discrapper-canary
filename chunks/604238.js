t.d(l, { E: () => S, e: () => g });
var r = t(64700),
    o = t(735438),
    i = t(528226),
    n = t(653793),
    a = t(118713),
    c = t(261225),
    d = t(970488),
    s = t(720462),
    u = t(673277),
    h = t(700263),
    p = t(304973),
    m = t(18769),
    b = t(458306),
    C = t(282203),
    _ = t(22519),
    y = t(607795),
    k = t(954644),
    A = t(634791);
let S = {
        ContainedHero: i.A,
        BasicHero: (e) => {
            let { bannerSrc: l } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: s.A,
        Carousel: a.A,
        Grid: c.A,
        GridItem: d.A,
        Section: u.A,
        Card: n.A,
        Skeleton: h.A,
        FeaturedChip: p.A,
        FeaturedCollection: m.A,
        FeaturedProduct: () => null,
        ShopProductCard: k.A,
        SkuList: C.A,
        SubLayout: _.A,
        SubTemplate: y.A,
        Button: b.ar,
        Heading: b.Oo,
        Stack: b.Kp,
        Text: b.t,
        Any1: A.A,
        Any2: A.A,
        Any3: A.A,
    },
    g = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let l = (0, o.cloneDeep)(S);
            if (null != e) for (let [t, r] of Object.entries(e)) null != r && (l[t] = r);
            return l;
        }, [e]);
    };
