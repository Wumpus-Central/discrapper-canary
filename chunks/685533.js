"use strict";
s.d(t, { A: () => L });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(417597),
    o = s(397927),
    c = s(287809),
    d = s(954571),
    u = s(440938),
    g = s(590180),
    m = s(511265),
    _ = s(365491),
    h = s(856686),
    p = s(100057),
    f = s(751304),
    E = s(561769),
    C = s(484469),
    b = s(998694),
    A = s(438166),
    x = s(652215),
    S = s(695865);
let v = { flattenProductVariants: !0 };
function L(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        L = (0, u.uM)(),
        T = L?.sessionId ?? "",
        { noCache: I, includeUnpublished: O } = (0, b.A)(),
        y = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        { skus: j, currentPage: N, totalCount: k, isFetchingResults: R } = (0, h.S)(),
        B = (0, i.yK)([g.A], () => g.A.getProductsBySkus(j)),
        P = r.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        M = j?.join("");
    r.useEffect(() => {
        P();
    }, [M, P]);
    let D = (0, m.p)(),
        w = r.useMemo(() => D(B), [D, B]);
    r.useEffect(() => {
        t ||
            (0, p.z)({
                sessionId: T,
                checkpoint: p.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: O,
                cacheDisabled: I,
            });
    }, [T, O, I, t, l]);
    let H = r.useRef(null),
        { setQueryPageSize: G, setQueryPageOffset: U, queryPageSize: F } = (0, _.v)(),
        [V, z] = r.useState(!1),
        $ = t || R || null == y;
    r.useEffect(() => {
        $ ? z(!1) : w.length > 0 && z(!0);
    }, [$, w.length]);
    let K = F > 0 && !$ && 0 === w.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == H.current || G(Math.floor(5 * getComputedStyle(H.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != H.current) return e.observe(H.current), () => e.disconnect();
    }, [G]);
    let W = r.useCallback(
        (e) => {
            d.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: L?.sessionId,
                page_section: L?.pageSection,
                page_category: L?.pageCategory,
                page_index: e,
                page_size: F,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                U((e - 1) * F);
        },
        [L, F, U],
    );
    return (0, n.jsxs)(E.v3.Provider, {
        value: v,
        children: [
            (0, n.jsxs)("div", {
                className: a()({ [S.oE]: K }),
                children: [
                    K && (0, n.jsx)(A.A, {}),
                    (0, n.jsxs)("div", {
                        className: a()(S.ZE, { [S.Kp]: V }),
                        ref: H,
                        children: [
                            $ && [...Array(F)].map((e, t) => (0, n.jsx)(C.A, {}, t)),
                            !$ &&
                                w.map((e, t) =>
                                    null == g.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, n.jsx)(
                                              u.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, n.jsx)(
                                                      f.A,
                                                      { skuId: e.skuId, onClickAnalytics: (0, E.UU)(e, l, L) },
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
            k > F &&
                (0, n.jsx)("div", {
                    className: S.Ej,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.mgR, {
                            currentPage: N,
                            totalCount: k,
                            pageSize: F,
                            onPageChange: W,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
