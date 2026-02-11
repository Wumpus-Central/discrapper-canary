"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(397927),
    a = s(770178),
    i = s(765548),
    o = s(720462),
    c = s(440938),
    d = s(590180),
    u = s(511265),
    g = s(313276),
    _ = s(206077),
    m = s(751304),
    h = s(561769),
    p = s(484469),
    f = s(940622),
    x = s(758836),
    E = s(201073);
let C = (e) => {
        let { cardContainerRef: t, totalCards: s } = (() => {
            let [e, t] = r.useState(1),
                s = (0, l.rdh)(l.LU0.space.SPACE_XL),
                n = (0, i.A)(() => {
                    o?.current == null || t(Math.max(1, Math.floor((o.current.offsetWidth + s) / (246 + s))));
                }),
                o = (0, a.w)(n, [s], { fireOnMount: !0, fireOnDepsChange: !0 });
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
        return (0, n.jsx)("div", { className: E.nM, ref: t, children: (0, n.jsx)(S, { ...e, totalCards: s }) });
    },
    A = (e) => (0, n.jsx)("div", { className: E.hm, children: (0, n.jsx)(S, { ...e }) }),
    b = (e) => (0, n.jsx)(o.A, { gap: "xl", children: (0, n.jsx)(S, { ...e }) }),
    S = (e) => {
        let { isLoading: t, products: s, tab: r, totalCards: l } = e,
            a = (0, c.uM)();
        if (t) return (0, n.jsx)(n.Fragment, { children: [...Array(l ?? 4)].map((e, t) => (0, n.jsx)(p.A, {}, t)) });
        let i = null != l ? s.slice(0, l) : s;
        return (0, n.jsx)(h.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: i.map((e, t) => {
                let s = d.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, n.jsx)(
                          c.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, n.jsx)(
                                  m.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: r === x.G2.ORBS ? h.Hi.ORBS : void 0,
                                      onClickAnalytics: (0, h.UU)(e, r, a),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    v = (e) => {
        let t,
            s,
            l,
            a,
            { heroBlockRecord: i, layout: o, tab: c, isBlockLoading: m = !1 } = e,
            { products: h } =
                ((t = (0, g.A)()),
                (s = r.useMemo(() => (m ? [] : t(i.rankedSkuIds)), [m, t, i.rankedSkuIds])),
                (l = (0, u.p)()(s)),
                (a = (0, _.X)(l)),
                { products: (0, f.od)(a) }),
            p = r.useMemo(
                () =>
                    !m &&
                    0 !== i.rankedSkuIds.length &&
                    !(h.length > 0) &&
                    i.rankedSkuIds.every((e) => d.A.getProduct(e)?.variantGroupStoreListingId != null),
                [m, i.rankedSkuIds, h.length],
            ),
            x = m || p;
        switch (o) {
            case "row":
                return (0, n.jsx)(C, { heroBlockRecord: i, isLoading: x, products: h, tab: c });
            case "feed":
                return (0, n.jsx)(A, { heroBlockRecord: i, isLoading: x, products: h, tab: c });
            case "hscroll":
                return (0, n.jsx)(b, { heroBlockRecord: i, isLoading: x, products: h, tab: c });
        }
    };
