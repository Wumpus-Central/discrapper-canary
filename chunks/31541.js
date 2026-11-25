r.d(t, { default: () => ek });
var l,
    s = r(477900),
    i = r(582128),
    n = r(855986),
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
var O = r(623373),
    R = r(599062),
    y = r(844821);
let _ = (0, r(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = r(517461),
    x = (((l = {}).LOADING = "loading"), (l.SUCCESS = "success"), (l.ERROR = "error"), l),
    g = r(821925),
    w = r(295586),
    T = r(993408),
    b = r(986630),
    L = r(758836);
function j(e, t, r, l) {
    let s = e.items.flatMap((e) => {
            if (e.product.skuIds.some((e) => t.has(e))) return [];
            let s = (function (e, t, r) {
                let { skuId: l, product: s } = e,
                    i = s.skus.find((e) => e.id === l);
                if (null == i || !i.isAvailable() || m.I.ALL.has(l) || l === L.Dp.ORB_PROFILE_BADGE) return null;
                let n = b.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: l });
                if (
                    null == n ||
                    n.isCategoryReward ||
                    (0, T.tt)(n) ||
                    (null == (0, O.$K)({ product: n, hasShopDiscount: r }) &&
                        null == (0, O.CW)({ product: n, hasShopDiscount: r }))
                )
                    return null;
                let { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(t, n);
                return { skuId: l, sku: i, product: n, isOwned: u || a };
            })(e, r, l);
            return null != s ? [{ productId: e.product.id, item: s }] : [];
        }),
        i = new Set(),
        n = [];
    for (let { productId: e, item: t } of [...s.filter((e) => !e.item.isOwned), ...s.filter((e) => e.item.isOwned)]) {
        if (6 === n.length) break;
        i.has(e) || (i.add(e), n.push(t));
    }
    return n;
}
var M = r(158390),
    N = r(620632),
    F = r(73153),
    P = r(627784),
    G = r(39418),
    U = r(103348),
    D = r(773669),
    V = r(927813);
let H = 30 * V.A.Millis.MINUTE,
    B = {};
function q() {
    B = {};
}
class z extends n.Ay.Store {
    static displayName = "ShopSimilarItemsStore";
    initialize() {
        this.syncWith([D.default], q);
    }
    getFetchState(e) {
        return B[e]?.state;
    }
    getResult(e) {
        let t = B[e];
        return t?.state === x.SUCCESS ? t.result : void 0;
    }
    shouldFetch(e) {
        let t = B[e];
        return null == t || t.state === x.ERROR || (t.state === x.SUCCESS && Date.now() - t.fetchedAt >= H);
    }
}
let W = new z(F.h, {
    SHOP_SIMILAR_ITEMS_FETCH_START: function (e) {
        let { seedSkuId: t } = e;
        B = { ...B, [t]: { state: x.LOADING } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_SUCCESS: function (e) {
        let { seedSkuId: t, result: r } = e;
        B = { ...B, [t]: { state: x.SUCCESS, fetchedAt: Date.now(), result: r } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_FAILURE: function (e) {
        let { seedSkuId: t } = e;
        B = { ...B, [t]: { state: x.ERROR } };
    },
    LOGOUT: q,
});
var Q = r(652215);
let Y = new M.A(2 * V.A.Millis.SECOND, 5 * V.A.Millis.MINUTE),
    $ = 0,
    K = 0;
F.h.subscribe("LOGOUT", () => {
    (K++, ($ = 0), Y.succeed());
});
let Z = [];
var J = r(503698),
    X = r.n(J),
    ee = r(900797),
    et = r(646514),
    er = r(847374),
    el = r(123292),
    es = r(406810),
    ei = r(834730),
    en = r(146423),
    eu = r(460442),
    ea = r(536572),
    ed = r(140877),
    eo = r(561769),
    ec = r(699976),
    eS = r(792996),
    ep = r(498654);
let eI = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    eh = (e) => {
        let { trayId: t, isOpen: r, onToggle: l } = e;
        return (0, s.jsxs)("div", {
            className: ep.L$,
            children: [
                r
                    ? (0, s.jsx)(ee.ChevronSmallUpIcon, {
                          size: "md",
                          color: et.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      })
                    : (0, s.jsx)(er.ChevronSmallDownIcon, {
                          size: "md",
                          color: et.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                (0, s.jsx)(el.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": r,
                    "aria-controls": t,
                    onClick: l,
                    text: eS.intl.string(r ? eS.t["0PiW99"] : eS.t["69Y8jQ"]),
                }),
            ],
        });
    },
    ef = i.memo(function (e) {
        let { item: t, user: r, onSelect: l } = e,
            n = i.useMemo(() => ({ productOverride: t.product }), [t.product]),
            u = i.useCallback(() => {
                l(t);
            }, [t, l]),
            [a, d] = i.useState(!1),
            o = i.useCallback(
                (e) => {
                    (d(e),
                        e &&
                            (w.p.requestProducts([t.skuId]),
                            "" !== t.product.categorySkuId && w.p.requestCollections([t.product.categorySkuId])));
                },
                [t],
            ),
            c = (0, ea.VG)(t.product);
        return (0, s.jsx)("li", {
            className: ep.AS,
            children: (0, s.jsxs)(en.A, {
                sku: t.sku,
                user: r,
                spec: ec.Z.SIZE_133,
                cardStyle: X()(ep.Nr, t.isOwned && !t.isViewed && ep.Q$),
                skuPreviewStyle: t.isOwned && !a ? ep.uB : void 0,
                "aria-label": t.isViewed ? eS.intl.formatToPlainString(eS.t.TTApvp, { productName: c }) : c,
                onClick: u,
                onHoverOrFocusChange: o,
                children: [
                    t.isOwned && (0, s.jsx)(eu.gS, { isHoveringOrFocusing: a }),
                    (0, s.jsx)("div", {
                        className: ep._0,
                        children: (0, s.jsx)("div", {
                            className: ep.JW,
                            children: t.isViewed
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(es.ClockIcon, {
                                              size: "xs",
                                              color: et.A.colors.ICON_STRONG,
                                              "aria-hidden": !0,
                                          }),
                                          (0, s.jsx)(ei.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: eS.intl.string(eS.t.RJ8Bfx),
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(eo.v3.Provider, {
                                      value: n,
                                      children: (0, s.jsx)(ed.A, {
                                          skuId: t.skuId,
                                          textVariant: "body-xs/semibold",
                                          discountIconSize: "xs",
                                      }),
                                  }),
                        }),
                    }),
                ],
            }),
        });
    }),
    eA = (e) => {
        let { trayId: t, footer: r, onSelect: l } = e,
            { isOpen: i, similarItems: u } = r,
            { status: a, items: d } = u,
            o = a === x.LOADING,
            c = o ? eI.length : d.length,
            p = (0, n.bG)([S.default], () => S.default.getCurrentUser());
        return (0, s.jsx)("div", {
            className: ep.qr,
            "data-open": i,
            children: (0, s.jsx)("section", {
                id: t,
                className: ep.OG,
                "data-open": i,
                "aria-label": eS.intl.string(eS.t.IsYU9r),
                "aria-busy": o,
                "aria-hidden": !i,
                inert: !i,
                children: (0, s.jsx)("div", {
                    className: ep.Fm,
                    children: (0, s.jsx)("ul", {
                        className: ep.ld,
                        "data-full": c >= 6,
                        children: o
                            ? eI.map((e) =>
                                  (0, s.jsx)(
                                      "li",
                                      {
                                          className: X()(ep.AS, ep.qV),
                                          "aria-hidden": !0,
                                          children: (0, s.jsx)("span", { className: ep.Zl }),
                                      },
                                      e,
                                  ),
                              )
                            : d.map((e) => (0, s.jsx)(ef, { item: e, user: p, onSelect: l }, e.skuId)),
                    }),
                }),
            }),
        });
    },
    em = (e) => {
        let { seedSkuId: t, viewedSkuId: r, onNavigate: l, ...u } = e,
            { product: a, isSwapping: d = !1 } = u,
            o = _.useConfig({ location: "collectibles_shop_pdp" }).enabled,
            c = (0, I.Q)(a),
            h = (0, O.rb)(a, c).skuId,
            f = (function (e) {
                let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s, isPdpLoading: u } = e,
                    [a, d] = (0, v.V)("shop-pdp-similar-items-tray-open", !0),
                    o = a ?? !0,
                    c = (function (e) {
                        let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s, isPdpLoading: u } = e;
                        i.useEffect(() => {
                            s && null != l && w.p.requestProducts([l]);
                        }, [s, l]);
                        let { fetchState: a, result: d } = (0, n.cf)(
                            [W],
                            () => ({ fetchState: W.getFetchState(t), result: W.getResult(t) }),
                            [t],
                        );
                        i.useEffect(() => {
                            s &&
                                (function (e) {
                                    if (W.shouldFetch(e)) {
                                        if (Date.now() < $)
                                            return F.h.dispatch({
                                                type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                seedSkuId: e,
                                            });
                                        !(async function (e) {
                                            let t = K,
                                                r = D.default.locale;
                                            function l() {
                                                return t !== K || r !== D.default.locale;
                                            }
                                            F.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_START", seedSkuId: e });
                                            try {
                                                let t = await N.Bo.get({
                                                    url: "/storefront/similar-items",
                                                    query: {
                                                        seed_sku_ids: [e],
                                                        application_ids: [Q.FYj],
                                                        limit: 24,
                                                        hydrate: !0,
                                                        locale: r,
                                                    },
                                                    rejectWithError: !0,
                                                    failImmediatelyWhenRateLimited: !0,
                                                });
                                                if (l()) return;
                                                (($ = 0),
                                                    Y.succeed(),
                                                    F.h.dispatch({
                                                        type: "SHOP_SIMILAR_ITEMS_FETCH_SUCCESS",
                                                        seedSkuId: e,
                                                        result: {
                                                            items: t.body.recommended_items.flatMap((e) => {
                                                                let { sku_id: t, product: r } = e;
                                                                return null != r
                                                                    ? [{ skuId: t, product: U.A.fromServer(r) }]
                                                                    : [];
                                                            }),
                                                            requestId: t.body.request_id,
                                                        },
                                                    }));
                                            } catch (r) {
                                                if (l()) return;
                                                let t = new P.LG(r);
                                                if (((0, G.o)(t), null == t.status || !(0, N.RU)(t.status))) {
                                                    let e =
                                                        null != t.retryAfter
                                                            ? t.retryAfter * V.A.Millis.SECOND
                                                            : void 0;
                                                    $ = Date.now() + Y.fail(void 0, e);
                                                }
                                                F.h.dispatch({
                                                    type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE",
                                                    seedSkuId: e,
                                                });
                                            }
                                        })(e);
                                    }
                                })(t);
                        }, [s, t, null != a]);
                        let { viewedStorefrontProduct: o, viewedFetchState: c } = (0, n.cf)(
                                [g.A],
                                () => ({
                                    viewedStorefrontProduct: g.A.getProductsForSku(l)?.[0],
                                    viewedFetchState: g.A.getFetchStateForSku(l),
                                }),
                                [l],
                            ),
                            I = (0, n.bG)([p.A], () => p.A.purchases),
                            h = (0, n.bG)([p.A], () => {
                                var e;
                                return null != (e = p.A).fetchError
                                    ? x.ERROR
                                    : e.hasPreviouslyFetched
                                      ? x.SUCCESS
                                      : x.LOADING;
                            }),
                            f = (0, n.bG)([S.default], () => null != (0, T.xM)(S.default.getCurrentUser())),
                            C = (function (e) {
                                let { isPdpLoading: t, fetchState: r, purchasesState: l } = e;
                                return t
                                    ? x.LOADING
                                    : l === x.ERROR || r === x.ERROR
                                      ? x.ERROR
                                      : r === x.SUCCESS && l === x.SUCCESS
                                        ? x.SUCCESS
                                        : x.LOADING;
                            })({ isPdpLoading: u, fetchState: a, purchasesState: h }),
                            E = null != l && null == o && "loading" === c,
                            k = C === x.SUCCESS && E ? x.LOADING : C,
                            R = i.useMemo(
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
                            y = i.useMemo(
                                () =>
                                    s && k === x.SUCCESS && null != d
                                        ? (function (e, t, r, l, s) {
                                              let i = null != s ? (0, O.v8)(s.product) : [];
                                              if (null == s || i.some((e) => t.has(e)))
                                                  return j(e, t, r, l).map((e) => ({ ...e, isViewed: !1 }));
                                              let n = j(e, new Set([...t, ...i]), r, l)
                                                      .slice(0, 5)
                                                      .map((e) => ({ ...e, isViewed: !1 })),
                                                  { isPurchased: u, isPartiallyOwnedBundle: a } = (0, A.o)(
                                                      r,
                                                      s.product,
                                                  );
                                              return [...n, { ...s, isOwned: u || a }];
                                          })(d, r, { getPurchase: (e) => (null != e ? I.get(e) : void 0) }, f, R)
                                        : Z,
                                [s, k, d, r, I, f, R],
                            );
                        return { status: k, items: y };
                    })({ seedSkuId: t, excludedSkuIds: r, viewedSkuId: l, isEnabled: s && o, isPdpLoading: u }),
                    I = i.useCallback(() => d(!o), [o, d]);
                return {
                    isVisible: s && (!o || c.status === x.LOADING || c.items.length > 0),
                    isOpen: o,
                    onToggle: I,
                    similarItems: c,
                };
            })({
                seedSkuId: t,
                excludedSkuIds: i.useMemo(() => new Set((0, O.v8)(a)), [a]),
                viewedSkuId: r,
                isEnabled: o,
                isPdpLoading: d,
            }),
            C = i.useId(),
            E = i.useCallback(
                (e) =>
                    l(
                        e.isViewed
                            ? { type: "GO_BACK" }
                            : { type: "SELECT_SIMILAR_ITEM", nextSkuId: e.skuId, leftSkuId: h },
                    ),
                [l, h],
            );
        return (0, s.jsx)(y.default, {
            ...u,
            leftPanelFooter: f.isVisible
                ? (0, s.jsx)(eh, { trayId: C, isOpen: f.isOpen, onToggle: f.onToggle })
                : void 0,
            footer: f.isVisible ? (0, s.jsx)(eA, { trayId: C, footer: f, onSelect: E }) : void 0,
        });
    };
var eC = r(850186);
let eE = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    ek = function (e) {
        let {
                skuId: t,
                flattenVariants: r = !1,
                transitionState: l,
                onClose: m,
                returnRef: _,
                analyticsLocations: v,
                analyticsSource: x,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                initialVariantSkuId: b,
            } = e,
            L = (0, d.A)("shop_include_unpublished"),
            [j, M] = i.useReducer(E, t, C),
            { currentSkuId: N, hasSwapped: F } = j,
            P = k(j),
            {
                product: G,
                category: U,
                state: D,
                retry: V,
            } = (0, h.IK)(N, {
                needsCategory: !0,
                seedCategoryStore: !0,
                includeUnpublished: L,
                flattenVariants: !F && r,
            }),
            { hasPreviouslyFetched: H, fetchPurchasesError: B } = (0, f.b5)(),
            q = H || null != B;
        ((0, o.A)(Q.FYj), (0, c.pE)());
        let z = (0, n.cf)([p.A], () => (null != G ? (0, A.o)(p.A, G) : eE), [G]),
            W = G?.isCategoryReward === !0 && !z.isPurchased,
            Y = (0, n.bG)([S.default], () => S.default.getCurrentUser()?.id),
            $ = null != w && w.id !== Y;
        i.useEffect(() => {
            "ready" === D && q && W && m();
        }, [D, q, W, m]);
        let [K, Z] = i.useState(null);
        if (null != G && (0, O.B1)(G) && K?.skuId !== N) {
            let e = F ? N : (b ?? t),
                r = G.variants.findIndex((t) => t.skuId === e);
            Z({ skuId: N, product: G, variantIndex: r, isApplied: -1 === r });
        }
        let J = (0, I.Q)(G ?? void 0);
        (K?.skuId !== N || K.isApplied || J !== K.variantIndex || Z({ ...K, isApplied: !0 }),
            i.useEffect(() => {
                null != K && K.variantIndex > -1 && (0, I.n)(K.product, K.variantIndex);
            }, [K]));
        let X = null != G && (0, O.B1)(G) && (K?.skuId !== N || !K.isApplied),
            ee = "ready" === D && q && !W && !X,
            et = i.useMemo(
                () => (ee && null != G && null != U ? { skuId: N, product: G, category: U } : null),
                [ee, N, G, U],
            ),
            [er, el] = i.useState(null);
        (null != et && et !== er && el(et),
            "error" === D &&
                null != er &&
                er.skuId !== N &&
                (M({
                    type: "RESTORE",
                    skuId: er.skuId,
                    productSkuIds: (0, O.v8)(er.product),
                    hasSwapped: er.skuId !== t,
                }),
                Z({ skuId: er.skuId, product: er.product, variantIndex: -1, isApplied: !0 })));
        let es = et ?? er;
        if (null != es) {
            let e = {
                transitionState: l,
                onClose: m,
                returnRef: _,
                product: es.product,
                category: es.category,
                analyticsLocations: v,
                analyticsSource: x,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                isSwapping: es.skuId !== N,
            };
            return $
                ? (0, s.jsx)(y.default, { ...e })
                : (0, s.jsx)(em, { ...e, seedSkuId: N, viewedSkuId: P, onNavigate: M });
        }
        return (0, s.jsx)(u.EO, {
            returnRef: _,
            transitionState: l,
            size: u.rI.DYNAMIC,
            parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
            children: (0, s.jsx)(u.$m, {
                children:
                    "error" === D
                        ? (0, s.jsx)(R.h, { onRetry: V, errorOrigin: R.A.GIFT_MODAL })
                        : (0, s.jsx)("div", {
                              className: eC.g,
                              children: (0, s.jsx)(a.y, { type: a.t.SPINNING_CIRCLE }),
                          }),
            }),
        });
    };
