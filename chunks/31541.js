l.d(t, { default: () => eC });
var r,
    s = l(477900),
    n = l(582128),
    i = l(855986),
    u = l(935462),
    a = l(289873),
    d = l(354328),
    o = l(744082),
    c = l(634110),
    S = l(287809),
    p = l(4227),
    I = l(298072),
    h = l(682301),
    f = l(841702),
    A = l(466459);
(l(321073), l(134528), l(947204));
var m = l(334279);
function C(e) {
    return { currentSkuId: e, history: [], hasSwapped: !1 };
}
function E(e, t) {
    switch (t.type) {
        case "SELECT_SIMILAR_ITEM": {
            let { nextSkuId: l, leftSkuId: r } = t,
                s = e.history.filter((e) => e !== l && e !== r);
            return (m.I.ALL.has(r) || s.push(r), { currentSkuId: l, history: s.slice(-20), hasSwapped: !0 });
        }
        case "GO_BACK": {
            let t = k(e);
            if (null == t) return e;
            return { currentSkuId: t, history: e.history.slice(0, -1), hasSwapped: !0 };
        }
        case "RESTORE": {
            let l = new Set([t.skuId, ...t.productSkuIds]);
            return { currentSkuId: t.skuId, history: e.history.filter((e) => !l.has(e)), hasSwapped: t.hasSwapped };
        }
    }
}
function k(e) {
    let { history: t } = e;
    return t.at(-1) ?? null;
}
var R = l(623373),
    y = l(599062),
    _ = l(844821);
let O = (0, l(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var x = l(517461),
    v = (((r = {}).LOADING = "loading"), (r.SUCCESS = "success"), (r.ERROR = "error"), r),
    g = l(821925),
    w = l(295586),
    T = l(993408),
    b = l(986630);
function L(e, t, l, r) {
    let s = e.items.flatMap((e) => {
            if (e.product.skuIds.some((e) => t.has(e))) return [];
            let s = (function (e, t, l) {
                let { skuId: r, product: s } = e,
                    n = s.skus.find((e) => e.id === r);
                if (null == n || !n.isAvailable() || m.I.ALL.has(r)) return null;
                let i = b.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: r });
                if (
                    null == i ||
                    i.isCategoryReward ||
                    (0, T.tt)(i) ||
                    (null == (0, R.$K)({ product: i, hasShopDiscount: l }) &&
                        null == (0, R.CW)({ product: i, hasShopDiscount: l }))
                )
                    return null;
                let { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(t, i);
                return { skuId: r, sku: n, product: i, isOwned: u || a };
            })(e, l, r);
            return null != s ? [{ productId: e.product.id, item: s }] : [];
        }),
        n = new Set(),
        i = [];
    for (let { productId: e, item: t } of [...s.filter((e) => !e.item.isOwned), ...s.filter((e) => e.item.isOwned)]) {
        if (6 === i.length) break;
        n.has(e) || (n.add(e), i.push(t));
    }
    return i;
}
var j = l(158390),
    M = l(620632),
    N = l(73153),
    F = l(627784),
    G = l(39418),
    P = l(103348),
    U = l(773669),
    D = l(927813);
let V = 30 * D.A.Millis.MINUTE,
    H = {};
function q() {
    H = {};
}
class B extends i.Ay.Store {
    static displayName = "ShopSimilarItemsStore";
    initialize() {
        this.syncWith([U.default], q);
    }
    getFetchState(e) {
        return H[e]?.state;
    }
    getResult(e) {
        let t = H[e];
        return t?.state === v.SUCCESS ? t.result : void 0;
    }
    shouldFetch(e) {
        let t = H[e];
        return null == t || t.state === v.ERROR || (t.state === v.SUCCESS && Date.now() - t.fetchedAt >= V);
    }
}
let z = new B(N.h, {
    SHOP_SIMILAR_ITEMS_FETCH_START: function (e) {
        let { seedSkuId: t } = e;
        H = { ...H, [t]: { state: v.LOADING } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_SUCCESS: function (e) {
        let { seedSkuId: t, result: l } = e;
        H = { ...H, [t]: { state: v.SUCCESS, fetchedAt: Date.now(), result: l } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_FAILURE: function (e) {
        let { seedSkuId: t } = e;
        H = { ...H, [t]: { state: v.ERROR } };
    },
    LOGOUT: q,
});
var W = l(652215);
let Y = new j.A(2 * D.A.Millis.SECOND, 5 * D.A.Millis.MINUTE),
    K = 0,
    Q = 0;
N.h.subscribe("LOGOUT", () => {
    (Q++, (K = 0), Y.succeed());
});
let $ = [];
var Z = l(503698),
    J = l.n(Z),
    X = l(900797),
    ee = l(646514),
    et = l(847374),
    el = l(123292),
    er = l(406810),
    es = l(834730),
    en = l(146423),
    ei = l(536572),
    eu = l(140877),
    ea = l(561769),
    ed = l(699976),
    eo = l(792996),
    ec = l(498654);
let eS = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    ep = (e) => {
        let { trayId: t, isOpen: l, onToggle: r } = e;
        return (0, s.jsxs)("div", {
            className: ec.L$,
            children: [
                l
                    ? (0, s.jsx)(X.ChevronSmallUpIcon, {
                          size: "md",
                          color: ee.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      })
                    : (0, s.jsx)(et.ChevronSmallDownIcon, {
                          size: "md",
                          color: ee.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                (0, s.jsx)(el.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": l,
                    "aria-controls": t,
                    onClick: r,
                    text: eo.intl.string(l ? eo.t["0PiW99"] : eo.t["69Y8jQ"]),
                }),
            ],
        });
    },
    eI = n.memo(function (e) {
        let { item: t, user: l, onSelect: r } = e,
            i = n.useMemo(() => ({ productOverride: t.product }), [t.product]),
            u = n.useCallback(() => {
                r(t);
            }, [t, r]),
            a = n.useCallback(
                (e) => {
                    e &&
                        (w.p.requestProducts([t.skuId]),
                        "" !== t.product.categorySkuId && w.p.requestCollections([t.product.categorySkuId]));
                },
                [t],
            ),
            d = (0, ei.VG)(t.product);
        return (0, s.jsx)("li", {
            className: ec.AS,
            children: (0, s.jsx)(en.A, {
                sku: t.sku,
                user: l,
                spec: ed.Z.SIZE_133,
                cardStyle: ec.Nr,
                "aria-label": t.isViewed ? eo.intl.formatToPlainString(eo.t.TTApvp, { productName: d }) : d,
                onClick: u,
                onHoverOrFocusChange: a,
                children: (0, s.jsx)("div", {
                    className: ec._0,
                    children: (0, s.jsx)("div", {
                        className: ec.JW,
                        children: t.isViewed
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(er.ClockIcon, {
                                          size: "xs",
                                          color: ee.A.colors.ICON_STRONG,
                                          "aria-hidden": !0,
                                      }),
                                      (0, s.jsx)(es.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-strong",
                                          children: eo.intl.string(eo.t.RJ8Bfx),
                                      }),
                                  ],
                              })
                            : (0, s.jsx)(ea.v3.Provider, {
                                  value: i,
                                  children: (0, s.jsx)(eu.A, {
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
    eh = (e) => {
        let { trayId: t, footer: l, onSelect: r } = e,
            { isOpen: n, similarItems: u } = l,
            { status: a, items: d } = u,
            o = a === v.LOADING,
            c = o ? eS.length : d.length,
            p = (0, i.bG)([S.default], () => S.default.getCurrentUser());
        return (0, s.jsx)("div", {
            className: ec.qr,
            "data-open": n,
            children: (0, s.jsx)("section", {
                id: t,
                className: ec.OG,
                "data-open": n,
                "aria-label": eo.intl.string(eo.t.IsYU9r),
                "aria-busy": o,
                "aria-hidden": !n,
                inert: !n,
                children: (0, s.jsx)("div", {
                    className: ec.Fm,
                    children: (0, s.jsx)("ul", {
                        className: ec.ld,
                        "data-full": c >= 6,
                        children: o
                            ? eS.map((e) =>
                                  (0, s.jsx)(
                                      "li",
                                      {
                                          className: J()(ec.AS, ec.qV),
                                          "aria-hidden": !0,
                                          children: (0, s.jsx)("span", { className: ec.Zl }),
                                      },
                                      e,
                                  ),
                              )
                            : d.map((e) => (0, s.jsx)(eI, { item: e, user: p, onSelect: r }, e.skuId)),
                    }),
                }),
            }),
        });
    },
    ef = (e) => {
        let { seedSkuId: t, viewedSkuId: l, onNavigate: r, ...u } = e,
            { product: a, isSwapping: d = !1 } = u,
            o = O.useConfig({ location: "collectibles_shop_pdp" }).enabled,
            c = (0, I.Q)(a),
            h = (0, R.rb)(a, c).skuId,
            f = (function (e) {
                let { seedSkuId: t, excludedSkuIds: l, viewedSkuId: r, isEnabled: s, isPdpLoading: u } = e,
                    [a, d] = (0, x.V)("shop-pdp-similar-items-tray-open", !0),
                    o = a ?? !0,
                    c = (function (e) {
                        let { seedSkuId: t, excludedSkuIds: l, viewedSkuId: r, isEnabled: s, isPdpLoading: u } = e;
                        n.useEffect(() => {
                            s && null != r && w.p.requestProducts([r]);
                        }, [s, r]);
                        let { fetchState: a, result: d } = (0, i.cf)(
                            [z],
                            () => ({ fetchState: z.getFetchState(t), result: z.getResult(t) }),
                            [t],
                        );
                        n.useEffect(() => {
                            s &&
                                (function (e) {
                                    if (z.shouldFetch(e)) {
                                        if (Date.now() < K)
                                            return N.h.dispatch({
                                                type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                seedSkuId: e,
                                            });
                                        !(async function (e) {
                                            let t = Q,
                                                l = U.default.locale;
                                            function r() {
                                                return t !== Q || l !== U.default.locale;
                                            }
                                            N.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_START", seedSkuId: e });
                                            try {
                                                let t = await M.Bo.get({
                                                    url: "/storefront/similar-items",
                                                    query: {
                                                        seed_sku_ids: [e],
                                                        application_ids: [W.FYj],
                                                        limit: 24,
                                                        hydrate: !0,
                                                        locale: l,
                                                    },
                                                    rejectWithError: !0,
                                                    failImmediatelyWhenRateLimited: !0,
                                                });
                                                if (r()) return;
                                                ((K = 0),
                                                    Y.succeed(),
                                                    N.h.dispatch({
                                                        type: "SHOP_SIMILAR_ITEMS_FETCH_SUCCESS",
                                                        seedSkuId: e,
                                                        result: {
                                                            items: t.body.recommended_items.flatMap((e) => {
                                                                let { sku_id: t, product: l } = e;
                                                                return null != l
                                                                    ? [{ skuId: t, product: P.A.fromServer(l) }]
                                                                    : [];
                                                            }),
                                                            requestId: t.body.request_id,
                                                        },
                                                    }));
                                            } catch (l) {
                                                if (r()) return;
                                                let t = new F.LG(l);
                                                if (((0, G.o)(t), null == t.status || !(0, M.RU)(t.status))) {
                                                    let e =
                                                        null != t.retryAfter
                                                            ? t.retryAfter * D.A.Millis.SECOND
                                                            : void 0;
                                                    K = Date.now() + Y.fail(void 0, e);
                                                }
                                                N.h.dispatch({
                                                    type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                    seedSkuId: e,
                                                });
                                            }
                                        })(e);
                                    }
                                })(t);
                        }, [s, t, null != a]);
                        let { viewedStorefrontProduct: o, viewedFetchState: c } = (0, i.cf)(
                                [g.A],
                                () => ({
                                    viewedStorefrontProduct: g.A.getProductsForSku(r)?.[0],
                                    viewedFetchState: g.A.getFetchStateForSku(r),
                                }),
                                [r],
                            ),
                            I = (0, i.bG)([p.A], () => p.A.purchases),
                            h = (0, i.bG)([p.A], () => {
                                var e;
                                return null != (e = p.A).fetchError
                                    ? v.ERROR
                                    : e.hasPreviouslyFetched
                                      ? v.SUCCESS
                                      : v.LOADING;
                            }),
                            f = (0, i.bG)([S.default], () => null != (0, T.xM)(S.default.getCurrentUser())),
                            C = (function (e) {
                                let { isPdpLoading: t, fetchState: l, purchasesState: r } = e;
                                return t
                                    ? v.LOADING
                                    : r === v.ERROR || l === v.ERROR
                                      ? v.ERROR
                                      : l === v.SUCCESS && r === v.SUCCESS
                                        ? v.SUCCESS
                                        : v.LOADING;
                            })({ isPdpLoading: u, fetchState: a, purchasesState: h }),
                            E = null != r && null == o && "loading" === c,
                            k = C === v.SUCCESS && E ? v.LOADING : C,
                            y = n.useMemo(
                                () =>
                                    null != r && null != o
                                        ? (function (e, t) {
                                              if (m.I.ALL.has(t)) return null;
                                              let l = e.skus.find((e) => e.id === t),
                                                  r = b.A.fromStorefrontProductRecord(e, { flattenVariantSkuId: t });
                                              return null != l && null != r
                                                  ? { skuId: t, sku: l, product: r, isOwned: !1, isViewed: !0 }
                                                  : null;
                                          })(o, r)
                                        : null,
                                [r, o],
                            ),
                            _ = n.useMemo(
                                () =>
                                    s && k === v.SUCCESS && null != d
                                        ? (function (e, t, l, r, s) {
                                              let n = null != s ? (0, R.v8)(s.product) : [];
                                              if (null == s || n.some((e) => t.has(e)))
                                                  return L(e, t, l, r).map((e) => ({ ...e, isViewed: !1 }));
                                              let i = L(e, new Set([...t, ...n]), l, r)
                                                      .slice(0, 5)
                                                      .map((e) => ({ ...e, isViewed: !1 })),
                                                  { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(
                                                      l,
                                                      s.product,
                                                  );
                                              return [...i, { ...s, isOwned: u || a }];
                                          })(d, l, { getPurchase: (e) => (null != e ? I.get(e) : void 0) }, f, y)
                                        : $,
                                [s, k, d, l, I, f, y],
                            );
                        return { status: k, items: _ };
                    })({ seedSkuId: t, excludedSkuIds: l, viewedSkuId: r, isEnabled: s && o, isPdpLoading: u }),
                    I = n.useCallback(() => d(!o), [o, d]);
                return {
                    isVisible: s && (!o || c.status === v.LOADING || c.items.length > 0),
                    isOpen: o,
                    onToggle: I,
                    similarItems: c,
                };
            })({
                seedSkuId: t,
                excludedSkuIds: n.useMemo(() => new Set((0, R.v8)(a)), [a]),
                viewedSkuId: l,
                isEnabled: o,
                isPdpLoading: d,
            }),
            C = n.useId(),
            E = n.useCallback(
                (e) =>
                    r(
                        e.isViewed
                            ? { type: "GO_BACK" }
                            : { type: "SELECT_SIMILAR_ITEM", nextSkuId: e.skuId, leftSkuId: h },
                    ),
                [r, h],
            );
        return (0, s.jsx)(_.default, {
            ...u,
            leftPanelFooter: f.isVisible
                ? (0, s.jsx)(ep, { trayId: C, isOpen: f.isOpen, onToggle: f.onToggle })
                : void 0,
            footer: f.isVisible ? (0, s.jsx)(eh, { trayId: C, footer: f, onSelect: E }) : void 0,
        });
    };
var eA = l(850186);
let em = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    eC = function (e) {
        let {
                skuId: t,
                flattenVariants: l = !1,
                transitionState: r,
                onClose: m,
                returnRef: O,
                analyticsLocations: x,
                analyticsSource: v,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                initialVariantSkuId: b,
            } = e,
            L = (0, d.A)("shop_include_unpublished"),
            [j, M] = n.useReducer(E, t, C),
            { currentSkuId: N, hasSwapped: F } = j,
            G = k(j),
            {
                product: P,
                category: U,
                state: D,
                retry: V,
            } = (0, h.IK)(N, {
                needsCategory: !0,
                seedCategoryStore: !0,
                includeUnpublished: L,
                flattenVariants: !F && l,
            }),
            { hasPreviouslyFetched: H, fetchPurchasesError: q } = (0, f.b5)(),
            B = H || null != q;
        ((0, o.A)(W.FYj), (0, c.pE)());
        let z = (0, i.cf)([p.A], () => (null != P ? (0, A.o)(p.A, P) : em), [P]),
            Y = P?.isCategoryReward === !0 && !z.isPurchased,
            K = (0, i.bG)([S.default], () => S.default.getCurrentUser()?.id),
            Q = null != w && w.id !== K;
        n.useEffect(() => {
            "ready" === D && B && Y && m();
        }, [D, B, Y, m]);
        let [$, Z] = n.useState(null);
        if (null != P && (0, R.B1)(P) && $?.skuId !== N) {
            let e = F ? N : (b ?? t),
                l = P.variants.findIndex((t) => t.skuId === e);
            Z({ skuId: N, product: P, variantIndex: l, isApplied: -1 === l });
        }
        let J = (0, I.Q)(P ?? void 0);
        ($?.skuId !== N || $.isApplied || J !== $.variantIndex || Z({ ...$, isApplied: !0 }),
            n.useEffect(() => {
                null != $ && $.variantIndex > -1 && (0, I.n)($.product, $.variantIndex);
            }, [$]));
        let X = null != P && (0, R.B1)(P) && ($?.skuId !== N || !$.isApplied),
            ee = "ready" === D && B && !Y && !X,
            et = n.useMemo(
                () => (ee && null != P && null != U ? { skuId: N, product: P, category: U } : null),
                [ee, N, P, U],
            ),
            [el, er] = n.useState(null);
        (null != et && et !== el && er(et),
            "error" === D &&
                null != el &&
                el.skuId !== N &&
                (M({
                    type: "RESTORE",
                    skuId: el.skuId,
                    productSkuIds: (0, R.v8)(el.product),
                    hasSwapped: el.skuId !== t,
                }),
                Z({ skuId: el.skuId, product: el.product, variantIndex: -1, isApplied: !0 })));
        let es = et ?? el;
        if (null != es) {
            let e = {
                transitionState: r,
                onClose: m,
                returnRef: O,
                product: es.product,
                category: es.category,
                analyticsLocations: x,
                analyticsSource: v,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                isSwapping: es.skuId !== N,
            };
            return Q
                ? (0, s.jsx)(_.default, { ...e })
                : (0, s.jsx)(ef, { ...e, seedSkuId: N, viewedSkuId: G, onNavigate: M });
        }
        return (0, s.jsx)(u.EO, {
            returnRef: O,
            transitionState: r,
            size: u.rI.DYNAMIC,
            parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
            children: (0, s.jsx)(u.$m, {
                children:
                    "error" === D
                        ? (0, s.jsx)(y.h, { onRetry: V, errorOrigin: y.A.GIFT_MODAL })
                        : (0, s.jsx)("div", {
                              className: eA.g,
                              children: (0, s.jsx)(a.y, { type: a.t.SPINNING_CIRCLE }),
                          }),
            }),
        });
    };
