"use strict";
r.d(t, { E: () => M, e: () => N });
var l = r(64700),
    s = r(735438),
    n = r(427941),
    a = r(653793),
    i = r(118713),
    c = r(261225),
    u = r(970488),
    d = r(951707),
    o = r(673277),
    h = r(700263),
    m = r(724560),
    p = r(706992),
    g = r(304973),
    v = r(18769),
    f = r(618473),
    A = r(260779),
    E = r(219561),
    x = r(519642),
    y = r(627968),
    C = r(856535),
    S = r(785330),
    T = r(55391),
    j = r(575593),
    b = r(674658),
    _ = r(491438),
    k = r(561769),
    L = r(954644),
    I = r(634791),
    O = r(190503);
let M = {
        ContainedHero: f.A,
        FullHero: A.A,
        NarrowContent: p.A,
        FullBleedContent: m.A,
        InteractiveHScroll: d.A,
        Carousel: i.A,
        Grid: c.Ay,
        GridItem: u.A,
        Section: o.A,
        Card: a.A,
        BackgroundImage: n.A,
        Skeleton: h.A,
        FeaturedChip: g.A,
        FeaturedCollection: v.A,
        FeaturedProduct: () => null,
        ShopProductCard: L.A,
        GridItemShopProductCard: (e) => {
            let { skuId: t, auto: r, columns: s, rows: n } = e,
                { product: a } = (0, b.q)(t, !0),
                i = l.useContext(k.v3);
            if (null == a) return null;
            let { flattenProductVariants: c, ...d } = i;
            if (a.type === j.R.BUNDLE) {
                let e = r ? 2 : s,
                    l = r ? 1 : n,
                    a = `${e}/${l}`;
                return (0, y.jsx)(k.v3.Provider, {
                    value: { flattenProductVariants: c ?? !0, ...d },
                    children: (0, y.jsx)(u.A, {
                        columns: e,
                        rows: l,
                        children: (0, y.jsx)(_.A, { skuId: t, aspectRatio: a }),
                    }),
                });
            }
            if (a.type === j.R.PROFILE_EFFECT) {
                let e = r ? 1 : s,
                    l = r ? 2 : n,
                    a = `${e}/${l}`;
                return (0, y.jsx)(k.v3.Provider, {
                    value: { flattenProductVariants: c ?? !0, ...d },
                    children: (0, y.jsx)(u.A, {
                        columns: e,
                        rows: l,
                        children: (0, y.jsx)(_.A, { skuId: t, aspectRatio: a }),
                    }),
                });
            }
            return r
                ? (0, y.jsx)(k.v3.Provider, {
                      value: { flattenProductVariants: c ?? !0, ...d },
                      children: (0, y.jsx)(_.A, { skuId: t, aspectRatio: "1/1" }),
                  })
                : (0, y.jsx)(k.v3.Provider, {
                      value: { flattenProductVariants: c ?? !0, ...d },
                      children: (0, y.jsx)(u.A, {
                          columns: s,
                          rows: n,
                          children: (0, y.jsx)(_.A, { skuId: t, aspectRatio: `${s}/${n}` }),
                      }),
                  });
        },
        SkuList: x.A,
        SubLayout: (e) => {
            let { layoutId: t, tenantId: r, skeleton: l, componentMap: s } = e,
                { layout: n, loading: a } = (0, C.A)(r, t);
            return a && null != l
                ? (0, y.jsx)(S.Ay, { overrides: s, layout: { id: "skeleton", children: l } })
                : null == n
                  ? null
                  : (0, y.jsx)(S.Ay, { layout: n, overrides: s });
        },
        SubTemplate: (e) => {
            let { templateId: t, tenantId: r, skeleton: l, requestParams: s, componentMap: n } = e,
                { layout: a, loading: i } = (0, T.A)(r, t, s);
            return i && null != l
                ? (0, y.jsx)(S.Ay, { overrides: n, layout: { id: "skeleton", children: l } })
                : null == a
                  ? null
                  : (0, y.jsx)(S.Ay, { layout: a, overrides: n });
        },
        Button: E.ar,
        Heading: E.Oo,
        Stack: E.Kp,
        Text: E.t,
        Tooltip: E.xY,
        Image: O.A,
        Any1: I.A,
        Any2: I.A,
        Any3: I.A,
    },
    N = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return l.useMemo(() => {
            let t = (0, s.cloneDeep)(M);
            if (null != e) for (let [r, l] of Object.entries(e)) null != l && (t[r] = l);
            return t;
        }, [e]);
    };
