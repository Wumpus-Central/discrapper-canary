"use strict";
s.d(t, { A: () => j });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(641150),
    o = s(417597),
    c = s(397927),
    d = s(287809),
    u = s(954571),
    _ = s(440938),
    g = s(590180),
    m = s(940980),
    h = s(511265),
    p = s(365491),
    f = s(856686),
    x = s(100057),
    E = s(751304),
    b = s(561769),
    C = s(484469),
    A = s(998694),
    S = s(438166),
    v = s(652215),
    I = s(471312);
let L = { flattenProductVariants: !0 };
function j(e) {
    let { isFetchingCategories: t, scrollerRef: s, tab: l } = e,
        j = (0, _.uM)(),
        O = j?.sessionId ?? "",
        { noCache: T, includeUnpublished: k } = (0, A.A)(),
        y = (0, m.W)("CollectiblesFilterResults"),
        N = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        { skus: R, currentPage: B, totalCount: P, isFetchingResults: M } = (0, f.S)(),
        { itemTypeFilters: H } = (0, p.v)(),
        D = 1 === H.size && H.has(a.q.BUNDLE),
        w = (0, o.yK)([g.A], () => g.A.getProductsBySkus(R)),
        F = r.useCallback(() => {
            s?.current?.scrollToTop({ animate: !0 });
        }, [s]),
        G = R?.join("");
    r.useEffect(() => {
        F();
    }, [G, F]);
    let U = (0, h.p)(),
        V = r.useMemo(() => U(w), [U, w]);
    r.useEffect(() => {
        t ||
            (0, x.z)({
                sessionId: O,
                checkpoint: x.t.SHOP_RENDERED,
                tab: l,
                unpublishedCategoriesShown: k,
                cacheDisabled: T,
            });
    }, [O, k, T, t, l]);
    let W = r.useRef(null),
        { setQueryPageSize: K, setQueryPageOffset: z, queryPageSize: Y } = (0, p.v)(),
        [$, Z] = r.useState(!1),
        q = t || M || null == N;
    r.useEffect(() => {
        q ? Z(!1) : V.length > 0 && Z(!0);
    }, [q, V.length]);
    let X = Y > 0 && !q && 0 === V.length;
    r.useEffect(() => {
        let e = new ResizeObserver(() => {
            null == W.current || K(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != W.current) return e.observe(W.current), () => e.disconnect();
    }, [K]);
    let J = r.useCallback(
        (e) => {
            u.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: j?.sessionId,
                page_section: j?.pageSection,
                page_category: j?.pageCategory,
                page_index: e,
                page_size: Y,
                cta_name: `filter results page ${e}`,
                page_type: "catalog",
            }),
                z((e - 1) * Y);
        },
        [j, Y, z],
    );
    return (0, n.jsxs)(b.v3.Provider, {
        value: L,
        children: [
            (0, n.jsxs)("div", {
                className: i()({ [I.oE]: X }),
                children: [
                    X && (0, n.jsx)(S.A, {}),
                    (0, n.jsxs)("div", {
                        className: i()(I.ZE, { [I.Kp]: $ }),
                        ref: W,
                        children: [
                            q && [...Array(Y)].map((e, t) => (0, n.jsx)(C.A, {}, t)),
                            !q &&
                                V.map((e, t) =>
                                    null == g.A.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, n.jsx)(
                                              _.R9,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, n.jsx)(
                                                      E.A,
                                                      {
                                                          skuId: e.skuId,
                                                          hideStaticBundleBackgroundAsset: !D,
                                                          prioritizedCurrency: y ? b.Hi.FIAT : void 0,
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
            P > Y &&
                (0, n.jsx)("div", {
                    className: I.Ej,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(c.mgR, {
                            currentPage: B,
                            totalCount: P,
                            pageSize: Y,
                            onPageChange: J,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
