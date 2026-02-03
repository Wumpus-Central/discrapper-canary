n.d(t, {
    E: () => h,
    e: () => m,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(528226),
    o = n(653793),
    s = n(261225),
    l = n(970488),
    c = n(720462),
    u = n(673277),
    d = n(304973),
    f = n(18769),
    p = n(219561),
    _ = n(244190);
let h = {
        ContainedHero: a.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: c.A,
        Grid: s.A,
        GridItem: l.A,
        Section: u.A,
        Card: o.A,
        FeaturedChip: d.A,
        FeaturedCollection: f.A,
        FeaturedProduct: () => null,
        ShopProductCard: _.A,
        Stack: p.Kp,
        Text: p.t,
        Heading: p.Oo,
    },
    m = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(h);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };
