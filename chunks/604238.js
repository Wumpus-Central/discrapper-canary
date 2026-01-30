n.d(t, {
    E: () => _,
    e: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(528226),
    o = n(304973),
    s = n(18769),
    l = n(596395),
    c = n(245595),
    u = n(124300),
    d = n(540391),
    f = n(219561),
    p = n(244190);
let _ = {
        ContainedHero: a.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Grid: c.A,
        Section: d.A,
        Card: l.A,
        FeaturedChip: o.A,
        FeaturedCollection: s.A,
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
