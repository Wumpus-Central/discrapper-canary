r.d(t, { E: () => T, e: () => _ });
var l = r(64700),
    n = r(735438),
    a = r(528226),
    s = r(427941),
    c = r(653793),
    i = r(118713),
    d = r(261225),
    o = r(970488),
    u = r(720462),
    m = r(673277),
    h = r(700263),
    p = r(304973),
    A = r(18769),
    g = r(458306),
    f = r(282203),
    E = r(22519),
    v = r(607795),
    S = r(702755),
    y = r(954644),
    x = r(634791),
    C = r(190503);
let T = {
        ContainedHero: a.A,
        InteractiveHScroll: u.A,
        Carousel: i.A,
        Grid: d.A,
        GridItem: o.A,
        Section: m.A,
        Card: c.A,
        BackgroundImage: s.A,
        Skeleton: h.A,
        FeaturedChip: p.A,
        FeaturedCollection: A.A,
        FeaturedProduct: () => null,
        ShopProductCard: y.A,
        GridItemShopProductCard: S.A,
        SkuList: f.A,
        SubLayout: E.A,
        SubTemplate: v.A,
        Button: g.ar,
        Heading: g.Oo,
        Stack: g.Kp,
        Text: g.t,
        Tooltip: g.xY,
        Image: C.A,
        Any1: x.A,
        Any2: x.A,
        Any3: x.A,
    },
    _ = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return l.useMemo(() => {
            let t = (0, n.cloneDeep)(T);
            if (null != e) for (let [r, l] of Object.entries(e)) null != l && (t[r] = l);
            return t;
        }, [e]);
    };
