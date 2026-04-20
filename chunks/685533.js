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
    _ = s(590180),
    g = s(940980),
    m = s(511265),
    h = s(365491),
    p = s(856686),
    f = s(100057),
    x = s(751304),
    E = s(561769),
    b = s(484469),
    C = s(998694),
    A = s(438166),
    S = s(652215),
    v = s(528096);
let I = { flattenProductVariants: !0 };
function L(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        L = (0, u.uM)(),
        j = L?.sessionId ?? "",
        { noCache: O, includeUnpublished: k } = (0, C.A)(),
        T = (0, g.W)("CollectiblesFilterResults"),
        y = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        { skus: N, currentPage: R, totalCount: B, isFetchingResults: P } = (0, p.S)(),
        M = (0, i.yK)([_.A], () => _.A.getProductsBySkus(N)),
        H = r.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        D = N?.join("");
    r.useEffect(() => {
        H();
    }, [D, H]);
    let w = (0, m.p)(),
        F = r.useMemo(() => w(M), [w, M]);
    r.useEffect(() => {
        t ||
            (0, f.z)({
                sessionId: j,
                checkpoint: f.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: k,
                cacheDisabled: O,
            });
    }, [j, k, O, t, l]);
    let G = r.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: V, queryPageSize: W } = (0, h.v)(),
        [K, z] = r.useState(!1),
        Y = t || P || null == y;
    r.useEffect(() => {
        Y ? z(!1) : F.length > 0 && z(!0);
    }, [Y, F.length]);
    let $ = W > 0 && !Y && 0 === F.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == G.current || U(Math.floor(5 * getComputedStyle(G.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != G.current) return e.observe(G.current), () => e.disconnect();
    }, [U]);
    let Z = r.useCallback(
        (e) => {
            d.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: L?.sessionId,
                page_section: L?.pageSection,
                page_category: L?.pageCategory,
                page_index: e,
                page_size: W,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                V((e - 1) * W);
        },
        [L, W, V],
    );
    return (0, n.jsxs)(E.v3.Provider, {
        value: I,
        children: [
            (0, n.jsxs)("div", {
                className: a()({ [v.oE]: $ }),
                children: [
                    $ && (0, n.jsx)(A.A, {}),
                    (0, n.jsxs)("div", {
                        className: a()(v.ZE, { [v.Kp]: K }),
                        ref: G,
                        children: [
                            Y && [...Array(W)].map((e, t) => (0, n.jsx)(b.A, {}, t)),
                            !Y &&
                                F.map((e, t) =>
                                    null == _.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, n.jsx)(
                                              u.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, n.jsx)(
                                                      x.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !0,
                                                          prioritizedCurrency: T ? E.Hi.FIAT : void 0,
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
            B > W &&
                (0, n.jsx)("div", {
                    className: v.Ej,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.mgR, {
                            currentPage: R,
                            totalCount: B,
                            pageSize: W,
                            onPageChange: Z,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
