"use strict";
n.d(t, { E: () => g, e: () => E });
var r = n(64700),
    i = n(735438),
    a = n(528226),
    s = n(653793),
    o = n(118713),
    l = n(261225),
    u = n(970488),
    c = n(720462),
    d = n(673277),
    _ = n(304973),
    f = n(18769),
    p = n(458306),
    h = n(282203),
    m = n(954644);
let g = {
        ContainedHero: a.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: c.A,
        Carousel: o.A,
        Grid: l.A,
        GridItem: u.A,
        Section: d.A,
        Card: s.A,
        FeaturedChip: _.A,
        FeaturedCollection: f.A,
        FeaturedProduct: () => null,
        ShopProductCard: m.A,
        SkuList: h.A,
        Button: p.ar,
        Heading: p.Oo,
        Stack: p.Kp,
        Text: p.t,
    },
    E = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, i.cloneDeep)(g);
            if (null != e) for (let [n, r] of Object.entries(e)) null != r && (t[n] = r);
            return t;
        }, [e]);
    };
