n.d(t, {
    E: () => d,
    e: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(408238),
    s = n(528226),
    o = n(889634),
    l = n(219561),
    c = n(825638),
    u = n(244190);
let d = {
        ContainedHero: s.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: a.A,
        Grid: o.A,
        Section: c.A,
        ShopProductCard: u.A,
        Stack: l.Kp,
        Text: l.t,
        Heading: l.Oo,
    },
    f = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(d);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };
