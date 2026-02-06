"use strict";
n.d(t, { E: () => m, e: () => g });
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
    p = n(244190),
    h = n(135340);
let m = {
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
        SkuList: h.A,
        Button: f.ar,
        Heading: f.Oo,
        Stack: f.Kp,
        Text: f.t,
    },
    g = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, i.cloneDeep)(m);
            if (null != e) for (let [n, r] of Object.entries(e)) null != r && (t[n] = r);
            return t;
        }, [e]);
    };
