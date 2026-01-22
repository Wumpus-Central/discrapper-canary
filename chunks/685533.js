l.d(t, {
    A: () => _,
}),
    l(896048),
    l(747238);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(417597),
    o = l(397927),
    c = l(287809),
    u = l(954571),
    d = l(440938),
    f = l(590180),
    b = l(511265),
    g = l(365491),
    p = l(856686),
    m = l(100057),
    h = l(751304),
    E = l(561769),
    v = l(484469),
    A = l(998694),
    x = l(438166),
    S = l(652215),
    C = l(695865);
let O = {
    flattenProductVariants: !0,
};

function _(e) {
    var t;
    let { isFetchingCategories: l, scrollerRef: s, tab: _ } = e,
        y = (0, d.uM)(),
        j = null != (t = null == y ? void 0 : y.sessionId) ? t : "",
        { noCache: L, includeUnpublished: T } = (0, A.A)(),
        I = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        { skus: N, currentPage: k, totalCount: R, isFetchingResults: P } = (0, p.S)(),
        D = (0, i.yK)([f.A], () => f.A.getProductsBySkus(N)),
        w = r.useCallback(() => {
            var e;
            null == s ||
                null == (e = s.current) ||
                e.scrollToTop({
                    animate: !0,
                });
        }, [s]),
        B = null == N ? void 0 : N.join("");
    r.useEffect(() => {
        w();
    }, [B, w]);
    let M = (0, b.p)(),
        H = r.useMemo(() => M(D), [M, D]);
    r.useEffect(() => {
        l ||
            (0, m.z)({
                sessionId: j,
                checkpoint: m.t.SHOP_RENDERED,
                tab: _,
                unpublishedCategoriesShown: T,
                cacheDisabled: L,
            });
    }, [j, T, L, l, _]);
    let G = r.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: U, queryPageSize: z } = (0, g.v)(),
        [V, K] = r.useState(!1),
        W = l || P || null == I;
    r.useEffect(() => {
        W ? K(!1) : H.length > 0 && K(!0);
    }, [W, H.length]);
    let Y = z > 0 && !W && 0 === H.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == G.current || F(Math.floor(5 * getComputedStyle(G.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != G.current) return e.observe(G.current), () => e.disconnect();
    }, [F]);
    let q = r.useCallback(
        (e) => {
            u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                page_section: null == y ? void 0 : y.pageSection,
                page_category: null == y ? void 0 : y.pageCategory,
                page_index: e,
                page_size: z,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                U((e - 1) * z);
        },
        [y, z, U],
    );
    return (0, n.jsxs)(E.v3.Provider, {
        value: O,
        children: [
            (0, n.jsxs)("div", {
                className: a()({
                    [C.oE]: Y,
                }),
                children: [
                    Y && (0, n.jsx)(x.A, {}),
                    (0, n.jsxs)("div", {
                        className: a()(C.ZE, {
                            [C.Kp]: V,
                        }),
                        ref: G,
                        children: [
                            W && [...Array(z)].map((e, t) => (0, n.jsx)(v.A, {}, t)),
                            !W &&
                                H.map((e, t) =>
                                    null == f.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, n.jsx)(
                                              d.R9,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                  },
                                                  children: (0, n.jsx)(
                                                      h.A,
                                                      {
                                                          skuId: e.skuId,
                                                          onClickAnalytics: (0, E.UU)(e, _, y),
                                                      },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            R > z &&
                (0, n.jsx)("div", {
                    className: C.Ej,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.mgR, {
                            currentPage: k,
                            totalCount: R,
                            pageSize: z,
                            onPageChange: q,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
