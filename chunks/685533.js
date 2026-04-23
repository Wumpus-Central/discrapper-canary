"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(417597),
    o = s(158142),
    c = s(287809),
    d = s(954571),
    u = s(440938),
    g = s(590180),
    h = s(940980),
    _ = s(511265),
    m = s(365491),
    p = s(856686),
    f = s(100057),
    E = s(751304),
    x = s(561769),
    A = s(484469),
    C = s(998694),
    S = s(438166),
    b = s(652215),
    v = s(528096);
let L = { flattenProductVariants: !0 };
function I(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: r } = e,
        I = (0, u.uM)(),
        j = I?.sessionId ?? "",
        { noCache: N, includeUnpublished: T } = (0, C.A)(),
        O = (0, h.W)("CollectiblesFilterResults"),
        y = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        { skus: k, currentPage: R, totalCount: B, isFetchingResults: P } = (0, p.S)(),
        M = (0, i.yK)([g.A], () => g.A.getProductsBySkus(k)),
        D = l.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        w = k?.join("");
    l.useEffect(() => {
        D();
    }, [w, D]);
    let H = (0, _.p)(),
        G = l.useMemo(() => H(M), [H, M]);
    l.useEffect(() => {
        t ||
            (0, f.z)({
                sessionId: j,
                checkpoint: f.t.SHOP_RENDERED,
                tab: r,
                unpublishedCategoriesShown: T,
                cacheDisabled: N,
            });
    }, [j, T, N, t, r]);
    let F = l.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: K, queryPageSize: V } = (0, m.v)(),
        [W, z] = l.useState(!1),
        $ = t || P || null == y;
    l.useEffect(() => {
        $ ? z(!1) : G.length > 0 && z(!0);
    }, [$, G.length]);
    let Y = V > 0 && !$ && 0 === G.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == F.current || U(Math.floor(5 * getComputedStyle(F.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != F.current) return e.observe(F.current), () => e.disconnect();
    }, [U]);
    let Z = l.useCallback(
        (e) => {
            d.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: I?.sessionId,
                page_section: I?.pageSection,
                page_category: I?.pageCategory,
                page_index: e,
                page_size: V,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                K((e - 1) * V);
        },
        [I, V, K],
    );
    return (0, n.jsxs)(x.v3.Provider, {
        value: L,
        children: [
            (0, n.jsxs)("div", {
                className: a()({ [v.oE]: Y }),
                children: [
                    Y && (0, n.jsx)(S.A, {}),
                    (0, n.jsxs)("div", {
                        className: a()(v.ZE, { [v.Kp]: W }),
                        ref: F,
                        children: [
                            $ && [...Array(V)].map((e, t) => (0, n.jsx)(A.A, {}, t)),
                            !$ &&
                                G.map((e, t) =>
                                    null == g.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, n.jsx)(
                                              u.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, n.jsx)(
                                                      E.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: O ? x.Hi.FIAT : void 0,
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
            B > V &&
                (0, n.jsx)("div", {
                    className: v.Ej,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.m, {
                            currentPage: R,
                            totalCount: B,
                            pageSize: V,
                            onPageChange: Z,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
