l.d(t, { E: () => M, e: () => N });
var r = l(64700),
    n = l(735438),
    a = l(427941),
    s = l(653793),
    c = l(118713),
    i = l(261225),
    d = l(970488),
    o = l(951707),
    u = l(673277),
    m = l(700263),
    h = l(724560),
    p = l(706992),
    A = l(304973),
    f = l(18769),
    E = l(618473),
    g = l(260779),
    v = l(219561),
    x = l(519642),
    y = l(627968),
    C = l(856535),
    S = l(785330),
    T = l(55391),
    j = l(575593),
    _ = l(674658),
    b = l(491438),
    L = l(561769),
    k = l(954644),
    I = l(634791),
    O = l(190503);
let M = {
        ContainedHero: E.A,
        FullHero: g.A,
        NarrowContent: p.A,
        FullBleedContent: h.A,
        InteractiveHScroll: o.A,
        Carousel: c.A,
        Grid: i.A,
        GridItem: d.A,
        Section: u.A,
        Card: s.A,
        BackgroundImage: a.A,
        Skeleton: m.A,
        FeaturedChip: A.A,
        FeaturedCollection: f.A,
        FeaturedProduct: () => null,
        ShopProductCard: k.A,
        GridItemShopProductCard: (e) => {
            let { skuId: t, auto: l, columns: n, rows: a } = e,
                { product: s } = (0, _.q)(t, !0),
                c = r.useContext(L.v3);
            if (null == s) return null;
            let { flattenProductVariants: i, ...o } = c;
            if (s.type === j.R.BUNDLE) {
                let e = l ? 2 : n,
                    r = l ? 1 : a,
                    s = `${e}/${r}`;
                return (0, y.jsx)(L.v3.Provider, {
                    value: { flattenProductVariants: i ?? !0, ...o },
                    children: (0, y.jsx)(d.A, {
                        columns: e,
                        rows: r,
                        children: (0, y.jsx)(b.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            if (s.type === j.R.PROFILE_EFFECT) {
                let e = l ? 1 : n,
                    r = l ? 2 : a,
                    s = `${e}/${r}`;
                return (0, y.jsx)(L.v3.Provider, {
                    value: { flattenProductVariants: i ?? !0, ...o },
                    children: (0, y.jsx)(d.A, {
                        columns: e,
                        rows: r,
                        children: (0, y.jsx)(b.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            return l
                ? (0, y.jsx)(L.v3.Provider, {
                      value: { flattenProductVariants: i ?? !0, ...o },
                      children: (0, y.jsx)(b.A, { skuId: t, aspectRatio: "1/1" }),
                  })
                : (0, y.jsx)(L.v3.Provider, {
                      value: { flattenProductVariants: i ?? !0, ...o },
                      children: (0, y.jsx)(d.A, {
                          columns: n,
                          rows: a,
                          children: (0, y.jsx)(b.A, { skuId: t, aspectRatio: `${n}/${a}` }),
                      }),
                  });
        },
        SkuList: x.A,
        SubLayout: (e) => {
            let { layoutId: t, tenantId: l, skeleton: r, componentMap: n } = e,
                { layout: a, loading: s } = (0, C.A)(l, t);
            return s && null != r
                ? (0, y.jsx)(S.Ay, { overrides: n, layout: { id: "skeleton", children: r } })
                : null == a
                  ? null
                  : (0, y.jsx)(S.Ay, { layout: a, overrides: n });
        },
        SubTemplate: (e) => {
            let { templateId: t, tenantId: l, skeleton: r, requestParams: n, componentMap: a } = e,
                { layout: s, loading: c } = (0, T.A)(l, t, n);
            return c && null != r
                ? (0, y.jsx)(S.Ay, { overrides: a, layout: { id: "skeleton", children: r } })
                : null == s
                  ? null
                  : (0, y.jsx)(S.Ay, { layout: s, overrides: a });
        },
        Button: v.ar,
        Heading: v.Oo,
        Stack: v.Kp,
        Text: v.t,
        Tooltip: v.xY,
        Image: O.A,
        Any1: I.A,
        Any2: I.A,
        Any3: I.A,
    },
    N = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, n.cloneDeep)(M);
            if (null != e) for (let [l, r] of Object.entries(e)) null != r && (t[l] = r);
            return t;
        }, [e]);
    };
