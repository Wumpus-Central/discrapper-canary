r.d(t, { default: () => ek });
var s,
    l = r(477900),
    i = r(582128),
    n = r(855986),
    u = r(935462),
    d = r(289873),
    a = r(354328),
    o = r(744082),
    c = r(634110),
    S = r(287809),
    I = r(4227),
    p = r(298072),
    h = r(682301),
    f = r(841702),
    A = r(466459);
(r(321073), r(134528), r(947204));
var E = r(334279);
function m(e) {
    return { currentSkuId: e, history: [], hasSwapped: !1 };
}
function C(e, t) {
    switch (t.type) {
        case "SELECT_SIMILAR_ITEM": {
            let { nextSkuId: r, leftSkuId: s } = t,
                l = e.history.filter((e) => e !== r && e !== s);
            return (E.I.ALL.has(s) || l.push(s), { currentSkuId: r, history: l.slice(-20), hasSwapped: !0 });
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
    _ = r(844821);
let y = (0, r(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = r(517461),
    x = (((s = {}).LOADING = "loading"), (s.SUCCESS = "success"), (s.ERROR = "error"), s),
    g = r(821925),
    w = r(295586),
    T = r(993408),
    b = r(986630),
    L = r(758836);
function j(e, t, r, s) {
    let l = e.items.flatMap((e) => {
            if (e.product.skuIds.some((e) => t.has(e))) return [];
            let l = (function (e, t, r) {
                let { skuId: s, product: l } = e,
                    i = l.skus.find((e) => e.id === s);
                if (null == i || !i.isAvailable() || E.I.ALL.has(s) || s === L.Dp.ORB_PROFILE_BADGE) return null;
                let n = b.A.fromStorefrontProductRecord(l, { flattenVariantSkuId: s });
                if (
                    null == n ||
                    n.isCategoryReward ||
                    (0, T.tt)(n) ||
                    (null == (0, O.$K)({ product: n, hasShopDiscount: r }) &&
                        null == (0, O.CW)({ product: n, hasShopDiscount: r }))
                )
                    return null;
                let { isPurchased: u, isPartiallyOwnedBundle: d } = (0, A.o)(t, n);
                return { skuId: s, sku: i, product: n, isOwned: u || d };
            })(e, r, s);
            return null != l ? [{ productId: e.product.id, item: l }] : [];
        }),
        i = new Set(),
        n = [];
    for (let { productId: e, item: t } of [...l.filter((e) => !e.item.isOwned), ...l.filter((e) => e.item.isOwned)]) {
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
    es = r(123292),
    el = r(406810),
    ei = r(834730),
    en = r(146423),
    eu = r(460442),
    ed = r(536572),
    ea = r(140877),
    eo = r(561769),
    ec = r(699976),
    eS = r(792996),
    eI = r(498654);
let ep = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    eh = (e) => {
        let { trayId: t, isOpen: r, onToggle: s } = e;
        return (0, l.jsxs)("div", {
            className: eI.L$,
            children: [
                r
                    ? (0, l.jsx)(ee.ChevronSmallUpIcon, {
                          size: "md",
                          color: et.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      })
                    : (0, l.jsx)(er.ChevronSmallDownIcon, {
                          size: "md",
                          color: et.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                (0, l.jsx)(es.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": r,
                    "aria-controls": t,
                    onClick: s,
                    text: eS.intl.string(r ? eS.t["0PiW99"] : eS.t["69Y8jQ"]),
                }),
            ],
        });
    },
    ef = i.memo(function (e) {
        let { item: t, user: r, onSelect: s } = e,
            n = i.useMemo(() => ({ productOverride: t.product }), [t.product]),
            u = i.useId(),
            d = i.useCallback(() => {
                s(t);
            }, [t, s]),
            [a, o] = i.useState(!1),
            c = i.useCallback(
                (e) => {
                    (o(e),
                        e &&
                            (w.p.requestProducts([t.skuId]),
                            "" !== t.product.categorySkuId && w.p.requestCollections([t.product.categorySkuId])));
                },
                [t],
            ),
            S = (0, ed.VG)(t.product);
        return (0, l.jsx)("li", {
            className: eI.AS,
            children: (0, l.jsxs)(en.A, {
                sku: t.sku,
                user: r,
                spec: ec.Z.SIZE_133,
                cardStyle: X()(eI.Nr, t.isOwned && !t.isViewed && eI.Q$),
                skuPreviewStyle: t.isOwned && !a ? eI.uB : void 0,
                "aria-label": t.isViewed ? eS.intl.formatToPlainString(eS.t.TTApvp, { productName: S }) : S,
                "aria-describedby": t.isViewed ? void 0 : u,
                onClick: d,
                onHoverOrFocusChange: c,
                children: [
                    t.isOwned && (0, l.jsx)(eu.gS, { isHoveringOrFocusing: a }),
                    (0, l.jsx)("div", {
                        className: eI._0,
                        children: (0, l.jsx)("div", {
                            id: u,
                            className: eI.JW,
                            children: t.isViewed
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(el.ClockIcon, {
                                              size: "xs",
                                              color: et.A.colors.ICON_STRONG,
                                              "aria-hidden": !0,
                                          }),
                                          (0, l.jsx)(ei.E, {
                                              variant: "body-xs/semibold",
                                              color: "text-strong",
                                              children: eS.intl.string(eS.t.RJ8Bfx),
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(eo.v3.Provider, {
                                      value: n,
                                      children: (0, l.jsx)(ea.A, {
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
        let { trayId: t, footer: r, onSelect: s } = e,
            { isOpen: i, similarItems: u } = r,
            { status: d, items: a } = u,
            o = d === x.LOADING,
            c = o ? ep.length : a.length,
            I = (0, n.bG)([S.default], () => S.default.getCurrentUser());
        return (0, l.jsx)("div", {
            className: eI.qr,
            "data-open": i,
            children: (0, l.jsx)("section", {
                id: t,
                className: eI.OG,
                "data-open": i,
                "aria-label": eS.intl.string(eS.t.IsYU9r),
                "aria-busy": o,
                "aria-hidden": !i,
                inert: !i,
                children: (0, l.jsx)("div", {
                    className: eI.Fm,
                    children: (0, l.jsx)("ul", {
                        className: eI.ld,
                        "data-full": c >= 6,
                        children: o
                            ? ep.map((e) =>
                                  (0, l.jsx)(
                                      "li",
                                      {
                                          className: X()(eI.AS, eI.qV),
                                          "aria-hidden": !0,
                                          children: (0, l.jsx)("span", { className: eI.Zl }),
                                      },
                                      e,
                                  ),
                              )
                            : a.map((e) => (0, l.jsx)(ef, { item: e, user: I, onSelect: s }, e.skuId)),
                    }),
                }),
            }),
        });
    },
    eE = (e) => {
        let { seedSkuId: t, viewedSkuId: r, onNavigate: s, ...u } = e,
            { product: d, isSwapping: a = !1 } = u,
            o =
                y.useConfig({ location: "collectibles_shop_pdp" }).enabled &&
                !(0, L.EZ)(d.skuId) &&
                d.skuId !== L.Dp.ORB_PROFILE_BADGE,
            c = (0, p.Q)(d),
            h = (0, O.rb)(d, c).skuId,
            f = (function (e) {
                let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: s, isEnabled: l, isPdpLoading: u } = e,
                    [d, a] = (0, v.V)("shop-pdp-similar-items-tray-open", !0),
                    o = d ?? !0,
                    c = (function (e) {
                        let { seedSkuId: t, excludedSkuIds: r, viewedSkuId: s, isEnabled: l, isPdpLoading: u } = e;
                        i.useEffect(() => {
                            l && null != s && w.p.requestProducts([s]);
                        }, [l, s]);
                        let { fetchState: d, result: a } = (0, n.cf)(
                            [W],
                            () => ({ fetchState: W.getFetchState(t), result: W.getResult(t) }),
                            [t],
                        );
                        i.useEffect(() => {
                            l &&
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
                                            function s() {
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
                                                if (s()) return;
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
                                                if (s()) return;
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
                        }, [l, t, null != d]);
                        let { viewedStorefrontProduct: o, viewedFetchState: c } = (0, n.cf)(
                                [g.A],
                                () => ({
                                    viewedStorefrontProduct: g.A.getProductsForSku(s)?.[0],
                                    viewedFetchState: g.A.getFetchStateForSku(s),
                                }),
                                [s],
                            ),
                            p = (0, n.bG)([I.A], () => I.A.purchases),
                            h = (0, n.bG)([I.A], () => {
                                var e;
                                return null != (e = I.A).fetchError
                                    ? x.ERROR
                                    : e.hasPreviouslyFetched
                                      ? x.SUCCESS
                                      : x.LOADING;
                            }),
                            f = (0, n.bG)([S.default], () => null != (0, T.xM)(S.default.getCurrentUser())),
                            m = (function (e) {
                                let { isPdpLoading: t, fetchState: r, purchasesState: s } = e;
                                return t
                                    ? x.LOADING
                                    : s === x.ERROR || r === x.ERROR
                                      ? x.ERROR
                                      : r === x.SUCCESS && s === x.SUCCESS
                                        ? x.SUCCESS
                                        : x.LOADING;
                            })({ isPdpLoading: u, fetchState: d, purchasesState: h }),
                            C = null != s && null == o && "loading" === c,
                            k = m === x.SUCCESS && C ? x.LOADING : m,
                            R = i.useMemo(
                                () =>
                                    null != s && null != o
                                        ? (function (e, t) {
                                              if (E.I.ALL.has(t)) return null;
                                              let r = e.skus.find((e) => e.id === t),
                                                  s = b.A.fromStorefrontProductRecord(e, { flattenVariantSkuId: t });
                                              return null != r && null != s
                                                  ? { skuId: t, sku: r, product: s, isOwned: !1, isViewed: !0 }
                                                  : null;
                                          })(o, s)
                                        : null,
                                [s, o],
                            ),
                            _ = i.useMemo(
                                () =>
                                    l && k === x.SUCCESS && null != a
                                        ? (function (e, t, r, s, l) {
                                              let i = null != l ? (0, O.v8)(l.product) : [];
                                              if (null == l || i.some((e) => t.has(e)))
                                                  return j(e, t, r, s).map((e) => ({ ...e, isViewed: !1 }));
                                              let n = j(e, new Set([...t, ...i]), r, s)
                                                      .slice(0, 5)
                                                      .map((e) => ({ ...e, isViewed: !1 })),
                                                  { isPurchased: u, isPartiallyOwnedBundle: d } = (0, A.o)(
                                                      r,
                                                      l.product,
                                                  );
                                              return [...n, { ...l, isOwned: u || d }];
                                          })(a, r, { getPurchase: (e) => (null != e ? p.get(e) : void 0) }, f, R)
                                        : Z,
                                [l, k, a, r, p, f, R],
                            );
                        return { status: k, items: _ };
                    })({ seedSkuId: t, excludedSkuIds: r, viewedSkuId: s, isEnabled: l && o, isPdpLoading: u }),
                    p = i.useCallback(() => a(!o), [o, a]);
                return {
                    isVisible: l && (!o || c.status === x.LOADING || c.items.length > 0),
                    isOpen: o,
                    onToggle: p,
                    similarItems: c,
                };
            })({
                seedSkuId: a ? t : h,
                excludedSkuIds: i.useMemo(() => new Set((0, O.v8)(d)), [d]),
                viewedSkuId: r,
                isEnabled: o,
                isPdpLoading: a,
            }),
            m = i.useId(),
            C = i.useCallback(
                (e) =>
                    s(
                        e.isViewed
                            ? { type: "GO_BACK" }
                            : { type: "SELECT_SIMILAR_ITEM", nextSkuId: e.skuId, leftSkuId: h },
                    ),
                [s, h],
            );
        return (0, l.jsx)(_.default, {
            ...u,
            leftPanelFooter: f.isVisible
                ? (0, l.jsx)(eh, { trayId: m, isOpen: f.isOpen, onToggle: f.onToggle })
                : void 0,
            footer: f.isVisible ? (0, l.jsx)(eA, { trayId: m, footer: f, onSelect: C }) : void 0,
        });
    };
var em = r(850186);
let eC = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    ek = function (e) {
        let {
                skuId: t,
                flattenVariants: r = !1,
                transitionState: s,
                onClose: E,
                returnRef: y,
                analyticsLocations: v,
                analyticsSource: x,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                initialVariantSkuId: b,
            } = e,
            L = (0, a.A)("shop_include_unpublished"),
            [j, M] = i.useReducer(C, t, m),
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
        let z = (0, n.cf)([I.A], () => (null != G ? (0, A.o)(I.A, G) : eC), [G]),
            W = G?.isCategoryReward === !0 && !z.isPurchased,
            Y = (0, n.bG)([S.default], () => S.default.getCurrentUser()?.id),
            $ = null != w && w.id !== Y;
        i.useEffect(() => {
            "ready" === D && q && W && E();
        }, [D, q, W, E]);
        let [K, Z] = i.useState(null);
        if (null != G && (0, O.B1)(G) && K?.skuId !== N) {
            let e = F ? N : (b ?? t),
                r = G.variants.findIndex((t) => t.skuId === e);
            Z({ skuId: N, product: G, variantIndex: r, isApplied: -1 === r });
        }
        let J = (0, p.Q)(G ?? void 0);
        (K?.skuId !== N || K.isApplied || J !== K.variantIndex || Z({ ...K, isApplied: !0 }),
            i.useEffect(() => {
                null != K && K.variantIndex > -1 && (0, p.n)(K.product, K.variantIndex);
            }, [K]));
        let X = null != G && (0, O.B1)(G) && (K?.skuId !== N || !K.isApplied),
            ee = "ready" === D && q && !W && !X,
            et = i.useMemo(
                () => (ee && null != G && null != U ? { skuId: N, product: G, category: U } : null),
                [ee, N, G, U],
            ),
            [er, es] = i.useState(null);
        (null != et && et !== er && es(et),
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
        let el = et ?? er;
        if (null != el) {
            let e = {
                transitionState: s,
                onClose: E,
                returnRef: y,
                product: el.product,
                category: el.category,
                analyticsLocations: v,
                analyticsSource: x,
                tab: g,
                giftRecipient: w,
                giftingOrigin: T,
                isSwapping: el.skuId !== N,
            };
            return $
                ? (0, l.jsx)(_.default, { ...e })
                : (0, l.jsx)(eE, { ...e, seedSkuId: N, viewedSkuId: P, onNavigate: M });
        }
        return (0, l.jsx)(u.EO, {
            returnRef: y,
            transitionState: s,
            size: u.rI.DYNAMIC,
            parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
            children: (0, l.jsx)(u.$m, {
                children:
                    "error" === D
                        ? (0, l.jsx)(R.h, { onRetry: V, errorOrigin: R.A.GIFT_MODAL })
                        : (0, l.jsx)("div", {
                              className: em.g,
                              children: (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE }),
                          }),
            }),
        });
    };
