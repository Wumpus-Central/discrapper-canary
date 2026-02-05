"use strict";
s.d(t, { A: () => L });
var n = s(627968),
    r = s(64700),
    l = s(397927),
    a = s(770178),
    i = s(765548),
    o = s(720462),
    c = s(440938),
    d = s(590180),
    u = s(379177),
    g = s(511265),
    m = s(313276),
    _ = s(206077),
    h = s(751304),
    p = s(561769),
    f = s(484469),
    E = s(940622),
    C = s(758836),
    b = s(201073);
let A = (e) => {
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
        return (0, n.jsx)("div", { className: b.nM, ref: t, children: (0, n.jsx)(v, { ...e, totalCards: s }) });
    },
    x = (e) => (0, n.jsx)("div", { className: b.hm, children: (0, n.jsx)(v, { ...e }) }),
    S = (e) => (0, n.jsx)(o.A, { gap: "xl", children: (0, n.jsx)(v, { ...e }) }),
    v = (e) => {
        let { heroBlockRecord: t, isLoading: s, products: r, tab: l, totalCards: a } = e,
            i = (0, c.uM)(),
            o = (0, u.rR)("HeroBlockCards") && t.categorySkuId === C.op,
            g = (0, u.eJ)("HeroBlockCards");
        if (s) return (0, n.jsx)(n.Fragment, { children: [...Array(a ?? 4)].map((e, t) => (0, n.jsx)(f.A, {}, t)) });
        let m = null != a ? r.slice(0, a) : r;
        return (0, n.jsx)(p.v3.Provider, {
            value: { rentalDuration: o ? g : void 0, flattenProductVariants: o },
            children: m.map((e, t) => {
                let s = d.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, n.jsx)(
                          c.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, n.jsx)(
                                  h.A,
                                  {
                                      skuId: e?.skuId,
                                      prioritizedCurrency: l === C.G2.ORBS ? p.Hi.ORBS : void 0,
                                      onClickAnalytics: (0, p.UU)(e, l, i),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    L = (e) => {
        let t,
            s,
            l,
            a,
            { heroBlockRecord: i, layout: o, tab: c, isBlockLoading: u = !1 } = e,
            { products: h } =
                ((t = (0, m.A)()),
                (s = r.useMemo(() => (u ? [] : t(i.rankedSkuIds)), [u, t, i.rankedSkuIds])),
                (l = (0, g.p)()(s)),
                (a = (0, _.X)(l)),
                { products: (0, E.od)(a) }),
            p = r.useMemo(
                () =>
                    !u &&
                    0 !== i.rankedSkuIds.length &&
                    !(h.length > 0) &&
                    i.rankedSkuIds.every((e) => d.A.getProduct(e)?.variantGroupStoreListingId != null),
                [u, i.rankedSkuIds, h.length],
            ),
            f = u || p;
        switch (o) {
            case "row":
                return (0, n.jsx)(A, { heroBlockRecord: i, isLoading: f, products: h, tab: c });
            case "feed":
                return (0, n.jsx)(x, { heroBlockRecord: i, isLoading: f, products: h, tab: c });
            case "hscroll":
                return (0, n.jsx)(S, { heroBlockRecord: i, isLoading: f, products: h, tab: c });
        }
    };
