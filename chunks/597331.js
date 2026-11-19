l.d(t, { default: () => eS });
var s,
    r = l(477900),
    i = l(582128),
    a = l(855986),
    n = l(935462),
    u = l(289873),
    d = l(354328),
    o = l(744082),
    c = l(634110),
    S = l(287809),
    I = l(4227),
    p = l(298072),
    f = l(682301),
    h = l(841702),
    m = l(466459),
    C = l(623373),
    A = l(599062),
    E = l(844821);
let R = (0, l(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var _ = l(517461),
    k = (((s = {}).LOADING = "loading"), (s.SUCCESS = "success"), (s.ERROR = "error"), s),
    O = l(993408);
l(321073);
var x = l(334279),
    y = l(986630),
    v = l(158390),
    b = l(620632),
    g = l(73153),
    j = l(627784),
    T = l(39418),
    M = l(103348),
    N = l(773669),
    L = l(927813);
let U = 30 * L.A.Millis.MINUTE,
    G = {};
function w() {
    G = {};
}
class F extends a.Ay.Store {
    static displayName = "ShopSimilarItemsStore";
    initialize() {
        this.syncWith([N.default], w);
    }
    getFetchState(e) {
        return G[e]?.state;
    }
    getResult(e) {
        let t = G[e];
        return t?.state === k.SUCCESS ? t.result : void 0;
    }
    shouldFetch(e) {
        let t = G[e];
        return null == t || t.state === k.ERROR || (t.state === k.SUCCESS && Date.now() - t.fetchedAt >= U);
    }
}
let P = new F(g.h, {
    SHOP_SIMILAR_ITEMS_FETCH_START: function (e) {
        let { seedSkuId: t } = e;
        G = { ...G, [t]: { state: k.LOADING } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_SUCCESS: function (e) {
        let { seedSkuId: t, result: l } = e;
        G = { ...G, [t]: { state: k.SUCCESS, fetchedAt: Date.now(), result: l } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_FAILURE: function (e) {
        let { seedSkuId: t } = e;
        G = { ...G, [t]: { state: k.ERROR } };
    },
    LOGOUT: w,
});
var D = l(652215);
let H = new v.A(2 * L.A.Millis.SECOND, 5 * L.A.Millis.MINUTE),
    V = 0,
    q = 0;
g.h.subscribe("LOGOUT", () => {
    (q++, (V = 0), H.succeed());
});
let W = [];
var z = l(503698),
    Y = l.n(z),
    B = l(900797),
    $ = l(646514),
    Q = l(847374),
    Z = l(123292),
    K = l(146423),
    X = l(295586),
    J = l(536572),
    ee = l(140877),
    et = l(561769),
    el = l(699976),
    es = l(792996),
    er = l(498654);
let ei = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    ea = (e) => {
        let { trayId: t, isOpen: l, onToggle: s } = e;
        return (0, r.jsxs)("div", {
            className: er.L$,
            children: [
                l
                    ? (0, r.jsx)(B.ChevronSmallUpIcon, { size: "md", color: $.A.colors.TEXT_STRONG, "aria-hidden": !0 })
                    : (0, r.jsx)(Q.ChevronSmallDownIcon, {
                          size: "md",
                          color: $.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                (0, r.jsx)(Z.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": l,
                    "aria-controls": t,
                    onClick: s,
                    text: es.intl.string(l ? es.t["0PiW99"] : es.t["69Y8jQ"]),
                }),
            ],
        });
    },
    en = i.memo(function (e) {
        let { item: t, user: l, onSelect: s } = e,
            a = i.useMemo(() => ({ productOverride: t.product }), [t.product]),
            n = i.useCallback(() => {
                s(t);
            }, [t, s]),
            u = i.useCallback(
                (e) => {
                    e &&
                        (X.p.requestProducts([t.skuId]),
                        "" !== t.product.categorySkuId && X.p.requestCollections([t.product.categorySkuId]));
                },
                [t],
            );
        return (0, r.jsx)("li", {
            className: er.AS,
            children: (0, r.jsx)(K.A, {
                sku: t.sku,
                user: l,
                spec: el.Z.SIZE_133,
                cardStyle: er.Nr,
                "aria-label": (0, J.VG)(t.product),
                onClick: n,
                onHoverOrFocusChange: u,
                children: (0, r.jsx)("div", {
                    className: er._0,
                    children: (0, r.jsx)("div", {
                        className: er.JW,
                        children: (0, r.jsx)(et.v3.Provider, {
                            value: a,
                            children: (0, r.jsx)(ee.A, {
                                skuId: t.skuId,
                                textVariant: "body-xs/semibold",
                                discountIconSize: "xs",
                            }),
                        }),
                    }),
                }),
            }),
        });
    }),
    eu = (e) => {
        let { trayId: t, footer: l, onSelect: s } = e,
            { isOpen: i, similarItems: n } = l,
            { status: u, items: d } = n,
            o = u === k.LOADING,
            c = (0, a.bG)([S.default], () => S.default.getCurrentUser());
        return (0, r.jsx)("div", {
            className: er.qr,
            "data-open": i,
            children: (0, r.jsx)("section", {
                id: t,
                className: er.OG,
                "data-open": i,
                "aria-label": es.intl.string(es.t.IsYU9r),
                "aria-busy": o,
                "aria-hidden": !i,
                inert: !i,
                children: (0, r.jsx)("div", {
                    className: er.Fm,
                    children: (0, r.jsx)("ul", {
                        className: er.ld,
                        children: o
                            ? ei.map((e) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          className: Y()(er.AS, er.qV),
                                          "aria-hidden": !0,
                                          children: (0, r.jsx)("span", { className: er.Zl }),
                                      },
                                      e,
                                  ),
                              )
                            : d.map((e) => (0, r.jsx)(en, { item: e, user: c, onSelect: s }, e.skuId)),
                    }),
                }),
            }),
        });
    },
    ed = (e) => {
        let { seedSkuId: t, onSelectSimilarItem: l, ...s } = e,
            { product: n, isSwapping: u = !1 } = s,
            d = R.useConfig({ location: "collectibles_shop_pdp" }).enabled,
            o = (function (e) {
                let { seedSkuId: t, excludedSkuIds: l, isEnabled: s, isPdpLoading: r } = e,
                    [n, u] = (0, _.V)("shop-pdp-similar-items-tray-open", !0),
                    d = n ?? !0,
                    o = (function (e) {
                        let { seedSkuId: t, excludedSkuIds: l, isEnabled: s, isPdpLoading: r } = e,
                            { fetchState: n, result: u } = (0, a.cf)(
                                [P],
                                () => ({ fetchState: P.getFetchState(t), result: P.getResult(t) }),
                                [t],
                            );
                        i.useEffect(() => {
                            s &&
                                (function (e) {
                                    if (P.shouldFetch(e)) {
                                        if (Date.now() < V)
                                            return g.h.dispatch({
                                                type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                seedSkuId: e,
                                            });
                                        !(async function (e) {
                                            let t = q,
                                                l = N.default.locale;
                                            function s() {
                                                return t !== q || l !== N.default.locale;
                                            }
                                            g.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_START", seedSkuId: e });
                                            try {
                                                let t = await b.Bo.get({
                                                    url: "/storefront/similar-items",
                                                    query: {
                                                        seed_sku_ids: [e],
                                                        application_ids: [D.FYj],
                                                        limit: 24,
                                                        hydrate: !0,
                                                        locale: l,
                                                    },
                                                    rejectWithError: !0,
                                                    failImmediatelyWhenRateLimited: !0,
                                                });
                                                if (s()) return;
                                                ((V = 0),
                                                    H.succeed(),
                                                    g.h.dispatch({
                                                        type: "SHOP_SIMILAR_ITEMS_FETCH_SUCCESS",
                                                        seedSkuId: e,
                                                        result: {
                                                            items: t.body.recommended_items.flatMap((e) => {
                                                                let { sku_id: t, product: l } = e;
                                                                return null != l
                                                                    ? [{ skuId: t, product: M.A.fromServer(l) }]
                                                                    : [];
                                                            }),
                                                            requestId: t.body.request_id,
                                                        },
                                                    }));
                                            } catch (l) {
                                                if (s()) return;
                                                let t = new j.LG(l);
                                                if (((0, T.o)(t), null == t.status || !(0, b.RU)(t.status))) {
                                                    let e =
                                                        null != t.retryAfter
                                                            ? t.retryAfter * L.A.Millis.SECOND
                                                            : void 0;
                                                    V = Date.now() + H.fail(void 0, e);
                                                }
                                                g.h.dispatch({
                                                    type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                    seedSkuId: e,
                                                });
                                            }
                                        })(e);
                                    }
                                })(t);
                        }, [s, t, null != n]);
                        let d = (0, a.bG)([I.A], () => I.A.purchases),
                            o = (0, a.bG)([I.A], () => {
                                var e;
                                return null != (e = I.A).fetchError
                                    ? k.ERROR
                                    : e.hasPreviouslyFetched
                                      ? k.SUCCESS
                                      : k.LOADING;
                            }),
                            c = (0, a.bG)([S.default], () => null != (0, O.xM)(S.default.getCurrentUser())),
                            p = (function (e) {
                                let { isPdpLoading: t, fetchState: l, purchasesState: s } = e;
                                return t
                                    ? k.LOADING
                                    : s === k.ERROR || l === k.ERROR
                                      ? k.ERROR
                                      : l === k.SUCCESS && s === k.SUCCESS
                                        ? k.SUCCESS
                                        : k.LOADING;
                            })({ isPdpLoading: r, fetchState: n, purchasesState: o }),
                            f = i.useMemo(
                                () =>
                                    s && p === k.SUCCESS && null != u
                                        ? (function (e, t, l, s) {
                                              let r = e.items.flatMap((e) => {
                                                      if (e.product.skuIds.some((e) => t.has(e))) return [];
                                                      let r = (function (e, t, l) {
                                                          let { skuId: s, product: r } = e,
                                                              i = r.skus.find((e) => e.id === s);
                                                          if (null == i || !i.isAvailable() || x.I.ALL.has(s))
                                                              return null;
                                                          let a = y.A.fromStorefrontProductRecord(r, {
                                                              flattenVariantSkuId: s,
                                                          });
                                                          if (
                                                              null == a ||
                                                              a.isCategoryReward ||
                                                              (0, O.tt)(a) ||
                                                              (null == (0, C.$K)({ product: a, hasShopDiscount: l }) &&
                                                                  null == (0, C.CW)({ product: a, hasShopDiscount: l }))
                                                          )
                                                              return null;
                                                          let { isPurchased: n, isPartiallyOwnedBundle: u } = (0, m.o)(
                                                              t,
                                                              a,
                                                          );
                                                          return { skuId: s, sku: i, product: a, isOwned: n || u };
                                                      })(e, l, s);
                                                      return null != r ? [{ productId: e.product.id, item: r }] : [];
                                                  }),
                                                  i = new Set(),
                                                  a = [];
                                              for (let { productId: e, item: t } of [
                                                  ...r.filter((e) => !e.item.isOwned),
                                                  ...r.filter((e) => e.item.isOwned),
                                              ]) {
                                                  if (6 === a.length) break;
                                                  i.has(e) || (i.add(e), a.push(t));
                                              }
                                              return a;
                                          })(u, l, { getPurchase: (e) => (null != e ? d.get(e) : void 0) }, c)
                                        : W,
                                [s, p, u, l, d, c],
                            );
                        return { status: p, items: f };
                    })({ seedSkuId: t, excludedSkuIds: l, isEnabled: s && d, isPdpLoading: r }),
                    c = i.useCallback(() => u(!d), [d, u]);
                return {
                    isVisible: s && (!d || o.status === k.LOADING || o.items.length > 0),
                    isOpen: d,
                    onToggle: c,
                    similarItems: o,
                };
            })({
                seedSkuId: t,
                excludedSkuIds: i.useMemo(() => new Set((0, C.v8)(n)), [n]),
                isEnabled: d,
                isPdpLoading: u,
            }),
            c = i.useId(),
            p = i.useCallback((e) => l(e.skuId), [l]);
        return (0, r.jsx)(E.default, {
            ...s,
            leftPanelFooter: o.isVisible
                ? (0, r.jsx)(ea, { trayId: c, isOpen: o.isOpen, onToggle: o.onToggle })
                : void 0,
            footer: o.isVisible ? (0, r.jsx)(eu, { trayId: c, footer: o, onSelect: p }) : void 0,
        });
    };
var eo = l(850186);
let ec = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    eS = function (e) {
        let {
                skuId: t,
                flattenVariants: l = !1,
                transitionState: s,
                onClose: R,
                returnRef: _,
                analyticsLocations: k,
                analyticsSource: O,
                tab: x,
                giftRecipient: y,
                giftingOrigin: v,
                initialVariantSkuId: b,
            } = e,
            g = (0, d.A)("shop_include_unpublished"),
            [j, T] = i.useState(t),
            [M, N] = i.useState(!1),
            {
                product: L,
                category: U,
                state: G,
                retry: w,
            } = (0, f.IK)(j, {
                needsCategory: !0,
                seedCategoryStore: !0,
                includeUnpublished: g,
                flattenVariants: !M && l,
            }),
            { hasPreviouslyFetched: F, fetchPurchasesError: P } = (0, h.b5)(),
            H = F || null != P;
        ((0, o.A)(D.FYj), (0, c.pE)());
        let V = (0, a.cf)([I.A], () => (null != L ? (0, m.o)(I.A, L) : ec), [L]),
            q = L?.isCategoryReward === !0 && !V.isPurchased,
            W = (0, a.bG)([S.default], () => S.default.getCurrentUser()?.id),
            z = null != y && y.id !== W;
        i.useEffect(() => {
            "ready" === G && H && q && R();
        }, [G, H, q, R]);
        let [Y, B] = i.useState(null);
        if (null != L && (0, C.B1)(L) && Y?.skuId !== j) {
            let e = M ? j : (b ?? t),
                l = L.variants.findIndex((t) => t.skuId === e);
            B({ skuId: j, product: L, variantIndex: l, isApplied: -1 === l });
        }
        let $ = (0, p.Q)(L ?? void 0);
        (Y?.skuId !== j || Y.isApplied || $ !== Y.variantIndex || B({ ...Y, isApplied: !0 }),
            i.useEffect(() => {
                null != Y && Y.variantIndex > -1 && (0, p.n)(Y.product, Y.variantIndex);
            }, [Y]));
        let Q = null != L && (0, C.B1)(L) && (Y?.skuId !== j || !Y.isApplied),
            Z = "ready" === G && H && !q && !Q,
            K = i.useMemo(
                () => (Z && null != L && null != U ? { skuId: j, product: L, category: U } : null),
                [Z, j, L, U],
            ),
            [X, J] = i.useState(null);
        (null != K && K !== X && J(K),
            "error" === G &&
                null != X &&
                X.skuId !== j &&
                (T(X.skuId),
                N(X.skuId !== t),
                B({ skuId: X.skuId, product: X.product, variantIndex: -1, isApplied: !0 })));
        let ee = K ?? X,
            et = i.useCallback((e) => {
                (N(!0), T(e));
            }, []);
        if (null != ee) {
            let e = {
                transitionState: s,
                onClose: R,
                returnRef: _,
                product: ee.product,
                category: ee.category,
                analyticsLocations: k,
                analyticsSource: O,
                tab: x,
                giftRecipient: y,
                giftingOrigin: v,
                isSwapping: ee.skuId !== j,
            };
            return z
                ? (0, r.jsx)(E.default, { ...e })
                : (0, r.jsx)(ed, { ...e, seedSkuId: j, onSelectSimilarItem: et });
        }
        return (0, r.jsx)(n.EO, {
            returnRef: _,
            transitionState: s,
            size: n.rI.DYNAMIC,
            parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
            children: (0, r.jsx)(n.$m, {
                children:
                    "error" === G
                        ? (0, r.jsx)(A.h, { onRetry: w, errorOrigin: A.A.GIFT_MODAL })
                        : (0, r.jsx)("div", {
                              className: eo.g,
                              children: (0, r.jsx)(u.y, { type: u.t.SPINNING_CIRCLE }),
                          }),
            }),
        });
    };
