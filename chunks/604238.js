"use strict";
n.d(t, { E: () => T, e: () => y });
var r = n(64700),
    i = n(735438),
    a = n(528226),
    s = n(653793),
    o = n(118713),
    l = n(261225),
    u = n(970488),
    c = n(720462),
    d = n(673277),
    _ = n(700263),
    f = n(304973),
    h = n(18769),
    p = n(458306),
    g = n(282203),
    E = n(22519),
    A = n(954644),
    I = n(634791);
let T = {
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
        Skeleton: _.A,
        FeaturedChip: f.A,
        FeaturedCollection: h.A,
        FeaturedProduct: () => null,
        ShopProductCard: A.A,
        SkuList: g.A,
        SubLayout: E.A,
        Button: p.ar,
        Heading: p.Oo,
        Stack: p.Kp,
        Text: p.t,
        Any1: I.A,
        Any2: I.A,
        Any3: I.A,
    },
    y = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, i.cloneDeep)(T);
            if (null != e) for (let [n, r] of Object.entries(e)) null != r && (t[n] = r);
            return t;
        }, [e]);
    };
