n.d(t, {
    E: () => _,
    e: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(408238),
    o = n(528226),
    s = n(304973),
    l = n(18769),
    c = n(596395),
    u = n(245595),
    d = n(540391),
    f = n(219561),
    p = n(244190);
let _ = {
        ContainedHero: o.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: a.A,
        Grid: u.A,
        Section: d.A,
        Card: c.A,
        FeaturedChip: s.A,
        FeaturedCollection: l.A,
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
