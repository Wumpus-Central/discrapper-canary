n.d(t, {
    E: () => _,
    e: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(528226),
    o = n(653793),
    s = n(261225),
    l = n(720462),
    c = n(673277),
    u = n(304973),
    d = n(18769),
    f = n(219561),
    p = n(244190);
let _ = {
        ContainedHero: a.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: l.A,
        Grid: s.A,
        Section: c.A,
        Card: o.A,
        FeaturedChip: u.A,
        FeaturedCollection: d.A,
        FeaturedProduct: () => null,
        ShopProductCard: p.A,
        Stack: f.Kp,
        Text: f.t,
        Heading: f.Oo,
    },
    h = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(_);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };
