"use strict";
n.d(t, { E: () => h, e: () => m });
var r = n(64700),
    i = n(735438),
    a = n(528226),
    s = n(653793),
    o = n(261225),
    l = n(970488),
    u = n(720462),
    c = n(673277),
    d = n(304973),
    _ = n(18769),
    f = n(458306),
    p = n(244190);
let h = {
        ContainedHero: a.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: u.A,
        Grid: o.A,
        GridItem: l.A,
        Section: c.A,
        Card: s.A,
        FeaturedChip: d.A,
        FeaturedCollection: _.A,
        FeaturedProduct: () => null,
        ShopProductCard: p.A,
        Button: f.ar,
        Heading: f.Oo,
        Stack: f.Kp,
        Text: f.t,
    },
    m = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(h);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };
