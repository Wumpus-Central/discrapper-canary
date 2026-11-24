r.d(t, { default: () => eC });
var l,
    s = r(477900),
    n = r(582128),
    i = r(855986),
    u = r(935462),
    a = r(289873),
    d = r(354328),
    o = r(744082),
    c = r(634110),
    S = r(287809),
    p = r(4227),
    I = r(298072),
    h = r(682301),
    f = r(841702),
    A = r(466459);
(r(321073), r(134528), r(947204));
var m = r(334279);
function C(e) {
    return { currentSkuId: e, history: [], hasSwapped: !1 };
}
function E(e, t) {
    switch (t.type) {
        case "SELECT_SIMILAR_ITEM": {
            let { nextSkuId: r, leftSkuId: l } = t,
                s = e.history.filter((e) => e !== r && e !== l);
            return (m.I.ALL.has(l) || s.push(l), { currentSkuId: r, history: s.slice(-20), hasSwapped: !0 });
        }
        case "GO_BACK": {
            let t = k(e);
            if (null == t) return e;
            return { currentSkuId: t, history: e.history.slice(0, -1), hasSwapped: !0 };
        }
        case "RESTORE": {
            let r = new Set([t.skuId, ...t.productSkuIds]);
            return { currentSkuId: t.skuId, history: e.history.filter((e) => !r.has(e)), hasSwapped: t.hasSwapped };
        }
    }
}
function k(e) {
    let { history: t } = e;
    return t.at(-1) ?? null;
}
var R = r(623373),
    y = r(599062),
    _ = r(844821);
let O = (0, r(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var x = r(517461),
    v = (((l = {}).LOADING = "loading"), (l.SUCCESS = "success"), (l.ERROR = "error"), l),
    g = r(821925),
    w = r(295586),
    T = r(993408),
    b = r(986630);
function L(e, t, r, l) {
    let s = e.items.flatMap((e) => {
            if (e.product.skuIds.some((e) => t.has(e))) return [];
            let s = (function (e, t, r) {
                let { skuId: l, product: s } = e,
                    n = s.skus.find((e) => e.id === l);
                if (null == n || !n.isAvailable() || m.I.ALL.has(l)) return null;
                let i = b.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: l });
                if (
                    null == i ||
                    i.isCategoryReward ||
                    (0, T.tt)(i) ||
                    (null == (0, R.$K)({ product: i, hasShopDiscount: r }) &&
                        null == (0, R.CW)({ product: i, hasShopDiscount: r }))
                )
                    return null;
                let { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(t, i);
                return { skuId: l, sku: n, product: i, isOwned: u || a };
            })(e, r, l);
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
var j = r(158390),
    M = r(620632),
    N = r(73153),
    F = r(627784),
    G = r(39418),
    P = r(103348),
    U = r(773669),
    D = r(927813);
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
        let { seedSkuId: t, result: r } = e;
        H = { ...H, [t]: { state: v.SUCCESS, fetchedAt: Date.now(), result: r } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_FAILURE: function (e) {
        let { seedSkuId: t } = e;
        H = { ...H, [t]: { state: v.ERROR } };
    },
    LOGOUT: q,
});
var W = r(652215);
let Y = new j.A(2 * D.A.Millis.SECOND, 5 * D.A.Millis.MINUTE),
    K = 0,
    Q = 0;
N.h.subscribe("LOGOUT", () => {
    (Q++, (K = 0), Y.succeed());
});
let $ = [];
var Z = r(503698),
    J = r.n(Z),
    X = r(900797),
    ee = r(646514),
    et = r(847374),
    er = r(123292),
    el = r(406810),
    es = r(834730),
    en = r(146423),
    ei = r(536572),
    eu = r(140877),
    ea = r(561769),
    ed = r(699976),
    eo = r(792996),
    ec = r(498654);
let eS = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    ep = (e) => {
        let { trayId: t, isOpen: r, onToggle: l } = e;
        return (0, s.jsxs)("div", {
            className: ec.L$,
            children: [
                r
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
                (0, s.jsx)(er.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": r,
                    "aria-controls": t,
                    onClick: l,
                    text: eo.intl.string(r ? eo.t["0PiW99"] : eo.t["69Y8jQ"]),
                }),
            ],
        });
    },
    eI = n.memo(function (e) {
        let { item: t, user: r, onSelect: l } = e,
            i = n.useMemo(() => ({ productOverride: t.product }), [t.product]),
            u = n.useCallback(() => {
                l(t);
            }, [t, l]),
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
                user: r,
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
                                      (0, s.jsx)(el.ClockIcon, {
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
        let { trayId: t, footer: r, onSelect: l } = e,
            { isOpen: n, similarItems: u } = r,
            { status: a, items: d } = u,
            o = a === v.LOADING,
            c = (0, i.bG)([S.default], () => S.default.getCurrentUser());
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
                            : d.map((e) => (0, s.jsx)(eI, { item: e, user: c, onSelect: l }, e.skuId)),
                    }),
                }),
            }),
        });
    },
    ef = (e) => {
        let { seedSkuId: t, viewedSkuId: r, onNavigate: l, ...u } = e,
            { product: a, isSwapping: d = !1 } = u,
            o = O.useConfig({ location: "collectibles_shop_pdp" }).enabled,
            c = (0, I.Q)(a),
            h = (0, R.rb)(a, c).skuId,
            f = (function (e) {
                let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s, isPdpLoading: u } = e,
                    [a, d] = (0, x.V)("shop-pdp-similar-items-tray-open", !0),
                    o = a ?? !0,
                    c = (function (e) {
                        let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s, isPdpLoading: u } = e;
                        n.useEffect(() => {
                            s && null != l && w.p.requestProducts([l]);
                        }, [s, l]);
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
                                                r = U.default.locale;
                                            function l() {
                                                return t !== Q || r !== U.default.locale;
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
                                                        locale: r,
                                                    },
                                                    rejectWithError: !0,
                                                    failImmediatelyWhenRateLimited: !0,
                                                });
                                                if (l()) return;
                                                ((K = 0),
                                                    Y.succeed(),
                                                    N.h.dispatch({
                                                        type: "SHOP_SIMILAR_ITEMS_FETCH_SUCCESS",
                                                        seedSkuId: e,
                                                        result: {
                                                            items: t.body.recommended_items.flatMap((e) => {
                                                                let { sku_id: t, product: r } = e;
                                                                return null != r
                                                                    ? [{ skuId: t, product: P.A.fromServer(r) }]
                                                                    : [];
                                                            }),
                                                            requestId: t.body.request_id,
                                                        },
                                                    }));
                                            } catch (r) {
                                                if (l()) return;
                                                let t = new F.LG(r);
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
                                    viewedStorefrontProduct: g.A.getProductsForSku(l)?.[0],
                                    viewedFetchState: g.A.getFetchStateForSku(l),
                                }),
                                [l],
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
                                let { isPdpLoading: t, fetchState: r, purchasesState: l } = e;
                                return t
                                    ? v.LOADING
                                    : l === v.ERROR || r === v.ERROR
                                      ? v.ERROR
                                      : r === v.SUCCESS && l === v.SUCCESS
                                        ? v.SUCCESS
                                        : v.LOADING;
                            })({ isPdpLoading: u, fetchState: a, purchasesState: h }),
                            E = null != l && null == o && "loading" === c,
                            k = C === v.SUCCESS && E ? v.LOADING : C,
                            y = n.useMemo(
                                () =>
                                    null != l && null != o
                                        ? (function (e, t) {
                                              if (m.I.ALL.has(t)) return null;
                                              let r = e.skus.find((e) => e.id === t),
                                                  l = b.A.fromStorefrontProductRecord(e, { flattenVariantSkuId: t });
                                              return null != r && null != l
                                                  ? { skuId: t, sku: r, product: l, isOwned: !1, isViewed: !0 }
                                                  : null;
                                          })(o, l)
                                        : null,
                                [l, o],
                            ),
                            _ = n.useMemo(
                                () =>
                                    s && k === v.SUCCESS && null != d
                                        ? (function (e, t, r, l, s) {
                                              let n = null != s ? (0, R.v8)(s.product) : [];
                                              if (null == s || n.some((e) => t.has(e)))
                                                  return L(e, t, r, l).map((e) => ({ ...e, isViewed: !1 }));
                                              let i = L(e, new Set([...t, ...n]), r, l)
                                                      .slice(0, 5)
                                                      .map((e) => ({ ...e, isViewed: !1 })),
                                                  { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(
                                                      r,
                                                      s.product,
                                                  );
                                              return [...i, { ...s, isOwned: u || a }];
                                          })(d, r, { getPurchase: (e) => (null != e ? I.get(e) : void 0) }, f, y)
                                        : $,
                                [s, k, d, r, I, f, y],
                            );
                        return { status: k, items: _ };
                    })({ seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s && o, isPdpLoading: u }),
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
                viewedSkuId: r,
                isEnabled: o,
                isPdpLoading: d,
            }),
            C = n.useId(),
            E = n.useCallback(
                (e) =>
                    l(
                        e.isViewed
                            ? { type: "GO_BACK" }
                            : { type: "SELECT_SIMILAR_ITEM", nextSkuId: e.skuId, leftSkuId: h },
                    ),
                [l, h],
            );
        return (0, s.jsx)(_.default, {
            ...u,
            leftPanelFooter: f.isVisible
                ? (0, s.jsx)(ep, { trayId: C, isOpen: f.isOpen, onToggle: f.onToggle })
                : void 0,
            footer: f.isVisible ? (0, s.jsx)(eh, { trayId: C, footer: f, onSelect: E }) : void 0,
        });
    };
var eA = r(850186);
let em = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    eC = function (e) {
        let {
                skuId: t,
                flattenVariants: r = !1,
                transitionState: l,
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
                flattenVariants: !F && r,
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
                r = P.variants.findIndex((t) => t.skuId === e);
            Z({ skuId: N, product: P, variantIndex: r, isApplied: -1 === r });
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
            [er, el] = n.useState(null);
        (null != et && et !== er && el(et),
            "error" === D &&
                null != er &&
                er.skuId !== N &&
                (M({
                    type: "RESTORE",
                    skuId: er.skuId,
                    productSkuIds: (0, R.v8)(er.product),
                    hasSwapped: er.skuId !== t,
                }),
                Z({ skuId: er.skuId, product: er.product, variantIndex: -1, isApplied: !0 })));
        let es = et ?? er;
        if (null != es) {
            let e = {
                transitionState: l,
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
            transitionState: l,
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
