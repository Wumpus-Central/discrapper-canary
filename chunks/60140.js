l.d(t, { A: () => y }), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(397927),
    a = l(770178),
    i = l(765548),
    o = l(408238),
    c = l(440938),
    u = l(590180),
    d = l(379177),
    f = l(511265),
    b = l(313276),
    g = l(206077),
    p = l(751304),
    m = l(561769),
    h = l(484469),
    E = l(940622),
    v = l(758836),
    A = l(201073);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let S = (e) => {
        var t, l;
        let { cardContainerRef: o, totalCards: c } = (() => {
            let [e, t] = r.useState(1),
                l = (0, s.rdh)(s.LU0.space.SPACE_XL),
                n = (0, i.A)(() => {
                    (null == o ? void 0 : o.current) == null ||
                        t(Math.max(1, Math.floor((o.current.offsetWidth + l) / (246 + l))));
                }),
                o = (0, a.w)(n, [l], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                cardContainerRef: r.useCallback(
                    (e) => {
                        (o.current = e), null != e && n();
                    },
                    [n, o],
                ),
                totalCards: e,
            };
        })();
        return (0, n.jsx)("div", {
            className: A.nM,
            ref: o,
            children: (0, n.jsx)(
                _,
                ((t = x({}, e)),
                (l = l = { totalCards: c }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var l = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              l.push.apply(l, n);
                          }
                          return l;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t),
            ),
        });
    },
    C = (e) =>
        (0, n.jsx)("div", {
            className: A.hm,
            children: (0, n.jsx)(_, x({}, e)),
        }),
    O = (e) =>
        (0, n.jsx)(o.A, {
            gap: "xl",
            children: (0, n.jsx)(_, x({}, e)),
        }),
    _ = (e) => {
        let { heroBlockRecord: t, isLoading: l, products: r, tab: s, totalCards: a } = e,
            i = (0, c.uM)(),
            o = (0, d.rR)("HeroBlockCards") && t.categorySkuId === v.op,
            f = (0, d.eJ)("HeroBlockCards");
        if (l)
            return (0, n.jsx)(n.Fragment, {
                children: [...Array(null != a ? a : 4)].map((e, t) => (0, n.jsx)(h.A, {}, t)),
            });
        let b = null != a ? r.slice(0, a) : r;
        return (0, n.jsx)(m.v3.Provider, {
            value: {
                rentalDuration: o ? f : void 0,
                flattenProductVariants: o,
            },
            children: b.map((e, t) => {
                let l = u.A.getCategoryForProduct(e.skuId);
                return null == e || null == l
                    ? null
                    : (0, n.jsx)(
                          c.R9,
                          {
                              newValue: {
                                  tilePosition: t,
                                  pageSection: "top 4",
                                  categoryPosition: 0,
                              },
                              children: (0, n.jsx)(
                                  p.A,
                                  {
                                      skuId: null == e ? void 0 : e.skuId,
                                      prioritizedCurrency: s === v.G2.ORBS ? m.Hi.ORBS : void 0,
                                      onClickAnalytics: (0, m.UU)(e, s, i),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    y = (e) => {
        let t,
            l,
            s,
            a,
            { heroBlockRecord: i, layout: o, tab: c, isBlockLoading: d = !1 } = e,
            { products: p } =
                ((t = (0, b.A)()),
                (l = r.useMemo(() => (d ? [] : t(i.rankedSkuIds)), [d, t, i.rankedSkuIds])),
                (s = (0, f.p)()(l)),
                (a = (0, g.X)(s)),
                { products: (0, E.od)(a) }),
            m = r.useMemo(
                () =>
                    !d &&
                    0 !== i.rankedSkuIds.length &&
                    !(p.length > 0) &&
                    i.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = u.A.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [d, i.rankedSkuIds, p.length],
            ),
            h = d || m;
        switch (o) {
            case "row":
                return (0, n.jsx)(S, {
                    heroBlockRecord: i,
                    isLoading: h,
                    products: p,
                    tab: c,
                });
            case "feed":
                return (0, n.jsx)(C, {
                    heroBlockRecord: i,
                    isLoading: h,
                    products: p,
                    tab: c,
                });
            case "hscroll":
                return (0, n.jsx)(O, {
                    heroBlockRecord: i,
                    isLoading: h,
                    products: p,
                    tab: c,
                });
        }
    };
