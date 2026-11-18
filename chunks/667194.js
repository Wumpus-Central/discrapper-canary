r.d(t, { default: () => eh });
var l,
    s = r(477900),
    i = r(582128),
    n = r(855986),
    a = r(935462),
    d = r(289873),
    u = r(354328),
    o = r(744082),
    c = r(634110),
    S = r(287809),
    f = r(4227),
    I = r(298072),
    h = r(682301),
    p = r(841702),
    m = r(466459),
    C = r(623373),
    A = r(599062),
    E = r(959364),
    R = r(857512);
let _ = (0, r(945810).mj)({
    name: "2026-11-shop-pdp-similar-items",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = r(517461),
    y = (((l = {}).LOADING = "loading"), (l.SUCCESS = "success"), (l.ERROR = "error"), l),
    v = r(993408);
r(321073);
var x = r(334279),
    b = r(986630),
    k = r(158390),
    g = r(620632),
    j = r(73153),
    T = r(627784),
    M = r(39418),
    N = r(103348),
    L = r(773669),
    P = r(927813);
let U = 30 * P.A.Millis.MINUTE,
    F = {};
function G() {
    F = {};
}
class w extends n.Ay.Store {
    static displayName = "ShopSimilarItemsStore";
    initialize() {
        this.syncWith([L.default], G);
    }
    getFetchState(e) {
        return F[e]?.state;
    }
    getResult(e) {
        let t = F[e];
        return t?.state === y.SUCCESS ? t.result : void 0;
    }
    shouldFetch(e) {
        let t = F[e];
        return null == t || t.state === y.ERROR || (t.state === y.SUCCESS && Date.now() - t.fetchedAt >= U);
    }
}
let D = new w(j.h, {
    SHOP_SIMILAR_ITEMS_FETCH_START: function (e) {
        let { seedSkuId: t } = e;
        F = { ...F, [t]: { state: y.LOADING } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_SUCCESS: function (e) {
        let { seedSkuId: t, result: r } = e;
        F = { ...F, [t]: { state: y.SUCCESS, fetchedAt: Date.now(), result: r } };
    },
    SHOP_SIMILAR_ITEMS_FETCH_FAILURE: function (e) {
        let { seedSkuId: t } = e;
        F = { ...F, [t]: { state: y.ERROR } };
    },
    LOGOUT: G,
});
var H = r(652215);
let V = new k.A(2 * P.A.Millis.SECOND, 5 * P.A.Millis.MINUTE),
    q = 0,
    W = 0;
j.h.subscribe("LOGOUT", () => {
    (W++, (q = 0), V.succeed());
});
let z = [];
var B = r(503698),
    Y = r.n(B),
    Z = r(900797),
    $ = r(646514),
    K = r(847374),
    Q = r(123292),
    X = r(146423),
    J = r(295586),
    ee = r(536572),
    et = r(140877),
    er = r(561769),
    el = r(699976),
    es = r(792996),
    ei = r(498654);
let en = Array.from({ length: 6 }, (e, t) => `skeleton-${t}`),
    ea = (e) => {
        let { trayId: t, isOpen: r, onToggle: l } = e;
        return (0, s.jsxs)("div", {
            className: ei.L$,
            children: [
                r
                    ? (0, s.jsx)(Z.ChevronSmallUpIcon, { size: "md", color: $.A.colors.TEXT_STRONG, "aria-hidden": !0 })
                    : (0, s.jsx)(K.ChevronSmallDownIcon, {
                          size: "md",
                          color: $.A.colors.TEXT_STRONG,
                          "aria-hidden": !0,
                      }),
                (0, s.jsx)(Q.Q, {
                    variant: "secondary",
                    textVariant: "body-sm/medium",
                    "aria-expanded": r,
                    "aria-controls": t,
                    onClick: l,
                    text: es.intl.string(r ? es.t["0PiW99"] : es.t["69Y8jQ"]),
                }),
            ],
        });
    },
    ed = i.memo(function (e) {
        let { item: t, user: r, onSelect: l } = e,
            n = i.useMemo(() => ({ productOverride: t.product }), [t.product]),
            a = i.useCallback(() => {
                l(t);
            }, [t, l]),
            d = i.useCallback(
                (e) => {
                    e &&
                        (J.p.requestProducts([t.skuId]),
                        "" !== t.product.categorySkuId && J.p.requestCollections([t.product.categorySkuId]));
                },
                [t],
            );
        return (0, s.jsx)("li", {
            className: ei.AS,
            children: (0, s.jsx)(X.A, {
                sku: t.sku,
                user: r,
                spec: el.Z.SIZE_133,
                cardStyle: ei.Nr,
                "aria-label": (0, ee.VG)(t.product),
                onClick: a,
                onHoverOrFocusChange: d,
                children: (0, s.jsx)("div", {
                    className: ei._0,
                    children: (0, s.jsx)("div", {
                        className: ei.JW,
                        children: (0, s.jsx)(er.v3.Provider, {
                            value: n,
                            children: (0, s.jsx)(et.A, {
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
        let { trayId: t, footer: r, onSelect: l } = e,
            { isOpen: i, similarItems: a } = r,
            { status: d, items: u } = a,
            o = d === y.LOADING,
            c = (0, n.bG)([S.default], () => S.default.getCurrentUser());
        return (0, s.jsx)("div", {
            className: ei.qr,
            "data-open": i,
            children: (0, s.jsx)("section", {
                id: t,
                className: ei.OG,
                "data-open": i,
                "aria-label": es.intl.string(es.t.IsYU9r),
                "aria-busy": o,
                "aria-hidden": !i,
                inert: !i,
                children: (0, s.jsx)("div", {
                    className: ei.Fm,
                    children: (0, s.jsx)("ul", {
                        className: ei.ld,
                        children: o
                            ? en.map((e) =>
                                  (0, s.jsx)(
                                      "li",
                                      {
                                          className: Y()(ei.AS, ei.qV),
                                          "aria-hidden": !0,
                                          children: (0, s.jsx)("span", { className: ei.Zl }),
                                      },
                                      e,
                                  ),
                              )
                            : u.map((e) => (0, s.jsx)(ed, { item: e, user: c, onSelect: l }, e.skuId)),
                    }),
                }),
            }),
        });
    };
var eo = r(821925),
    ec = r(722258);
let eS = (e) => {
    let { seedSkuId: t, ...r } = e,
        { product: l, analyticsLocations: a, analyticsSource: d, returnRef: u, tab: o } = r,
        c = _.useConfig({ location: "collectibles_shop_pdp" }).enabled,
        h = (function (e) {
            let { seedSkuId: t, excludedSkuIds: r, isEnabled: l } = e,
                [s, a] = (0, O.V)("shop-pdp-similar-items-tray-open", !0),
                d = s ?? !0,
                u = (function (e) {
                    let { seedSkuId: t, excludedSkuIds: r, isEnabled: l } = e,
                        { fetchState: s, result: a } = (0, n.cf)(
                            [D],
                            () => ({ fetchState: D.getFetchState(t), result: D.getResult(t) }),
                            [t],
                        );
                    i.useEffect(() => {
                        l &&
                            (function (e) {
                                if (D.shouldFetch(e)) {
                                    if (Date.now() < q)
                                        return j.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE", seedSkuId: e });
                                    !(async function (e) {
                                        let t = W,
                                            r = L.default.locale;
                                        function l() {
                                            return t !== W || r !== L.default.locale;
                                        }
                                        j.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_START", seedSkuId: e });
                                        try {
                                            let t = await g.Bo.get({
                                                url: "/storefront/similar-items",
                                                query: {
                                                    seed_sku_ids: [e],
                                                    application_ids: [H.FYj],
                                                    limit: 24,
                                                    hydrate: !0,
                                                    locale: r,
                                                },
                                                rejectWithError: !0,
                                                failImmediatelyWhenRateLimited: !0,
                                            });
                                            if (l()) return;
                                            ((q = 0),
                                                V.succeed(),
                                                j.h.dispatch({
                                                    type: "SHOP_SIMILAR_ITEMS_FETCH_SUCCESS",
                                                    seedSkuId: e,
                                                    result: {
                                                        items: t.body.recommended_items.flatMap((e) => {
                                                            let { sku_id: t, product: r } = e;
                                                            return null != r
                                                                ? [{ skuId: t, product: N.A.fromServer(r) }]
                                                                : [];
                                                        }),
                                                        requestId: t.body.request_id,
                                                    },
                                                }));
                                        } catch (r) {
                                            if (l()) return;
                                            let t = new T.LG(r);
                                            if (((0, M.o)(t), null == t.status || !(0, g.RU)(t.status))) {
                                                let e =
                                                    null != t.retryAfter ? t.retryAfter * P.A.Millis.SECOND : void 0;
                                                q = Date.now() + V.fail(void 0, e);
                                            }
                                            j.h.dispatch({ type: "SHOP_SIMILAR_ITEMS_FETCH_FAILURE", seedSkuId: e });
                                        }
                                    })(e);
                                }
                            })(t);
                    }, [l, t, null != s]);
                    let d = (0, n.bG)([f.A], () => f.A.purchases),
                        u = (0, n.bG)([f.A], () => {
                            var e;
                            return null != (e = f.A).fetchError
                                ? y.ERROR
                                : e.hasPreviouslyFetched
                                  ? y.SUCCESS
                                  : y.LOADING;
                        }),
                        o = (0, n.bG)([S.default], () => null != (0, v.xM)(S.default.getCurrentUser())),
                        c = (function (e) {
                            let { isPdpLoading: t, fetchState: r, purchasesState: l } = e;
                            return t
                                ? y.LOADING
                                : l === y.ERROR || r === y.ERROR
                                  ? y.ERROR
                                  : r === y.SUCCESS && l === y.SUCCESS
                                    ? y.SUCCESS
                                    : y.LOADING;
                        })({ isPdpLoading: !1, fetchState: s, purchasesState: u }),
                        I = i.useMemo(
                            () =>
                                l && c === y.SUCCESS && null != a
                                    ? (function (e, t, r, l) {
                                          let s = e.items.flatMap((e) => {
                                                  if (e.product.skuIds.some((e) => t.has(e))) return [];
                                                  let s = (function (e, t, r) {
                                                      let { skuId: l, product: s } = e,
                                                          i = s.skus.find((e) => e.id === l);
                                                      if (null == i || !i.isAvailable() || x.I.ALL.has(l)) return null;
                                                      let n = b.A.fromStorefrontProductRecord(s, {
                                                          flattenVariantSkuId: l,
                                                      });
                                                      if (
                                                          null == n ||
                                                          n.isCategoryReward ||
                                                          (0, v.tt)(n) ||
                                                          (null == (0, C.$K)({ product: n, hasShopDiscount: r }) &&
                                                              null == (0, C.CW)({ product: n, hasShopDiscount: r }))
                                                      )
                                                          return null;
                                                      let { isPurchased: a, isPartiallyOwnedBundle: d } = (0, m.o)(
                                                          t,
                                                          n,
                                                      );
                                                      return { skuId: l, sku: i, product: n, isOwned: a || d };
                                                  })(e, r, l);
                                                  return null != s ? [{ productId: e.product.id, item: s }] : [];
                                              }),
                                              i = new Set(),
                                              n = [];
                                          for (let { productId: e, item: t } of [
                                              ...s.filter((e) => !e.item.isOwned),
                                              ...s.filter((e) => e.item.isOwned),
                                          ]) {
                                              if (6 === n.length) break;
                                              i.has(e) || (i.add(e), n.push(t));
                                          }
                                          return n;
                                      })(a, r, { getPurchase: (e) => (null != e ? d.get(e) : void 0) }, o)
                                    : z,
                            [l, c, a, r, d, o],
                        );
                    return { status: c, items: I };
                })({ seedSkuId: t, excludedSkuIds: r, isEnabled: l && d }),
                o = i.useCallback(() => a(!d), [d, a]);
            return {
                isVisible: l && (!d || u.status === y.LOADING || u.items.length > 0),
                isOpen: d,
                onToggle: o,
                similarItems: u,
            };
        })({ seedSkuId: t, excludedSkuIds: i.useMemo(() => new Set((0, C.v8)(l)), [l]), isEnabled: c }),
        p = (0, R.uM)(),
        A = i.useId(),
        k = i.useCallback(
            (e) => {
                var t;
                return (
                    (t = {
                        analyticsLocations: a,
                        analyticsSource: d,
                        tab: o,
                        returnRef: u,
                        cardId: p?.cardId,
                        sessionId: p?.sessionId,
                        tilePosition: p?.tilePosition,
                    }),
                    void (!(function (e) {
                        let t = eo.A.getProductsForSku(e)?.[0],
                            r = null != t ? b.A.fromStorefrontProductRecord(t) : void 0;
                        if (null == r || !(0, C.B1)(r)) return;
                        let l = r.variants.findIndex((t) => t.skuId === e);
                        l > -1 && (0, I.n)(r, l);
                    })(e.skuId),
                    (0, ec.Z)(),
                    (0, ec.B)({ ...t, skuId: e.skuId }))
                );
            },
            [a, d, o, u, p],
        );
    return (0, s.jsx)(E.default, {
        ...r,
        leftPanelFooter: h.isVisible ? (0, s.jsx)(ea, { trayId: A, isOpen: h.isOpen, onToggle: h.onToggle }) : void 0,
        footer: h.isVisible ? (0, s.jsx)(eu, { trayId: A, footer: h, onSelect: k }) : void 0,
    });
};
var ef = r(850186);
let eI = { isPurchased: !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 },
    eh = function (e) {
        let {
                skuId: t,
                flattenVariants: r = !1,
                transitionState: l,
                onClose: R,
                returnRef: _,
                analyticsLocations: O,
                analyticsSource: y,
                tab: v,
                giftRecipient: x,
                giftingOrigin: b,
                initialVariantSkuId: k,
            } = e,
            g = (0, u.A)("shop_include_unpublished"),
            {
                product: j,
                category: T,
                state: M,
                retry: N,
            } = (0, h.IK)(t, { needsCategory: !0, seedCategoryStore: !0, includeUnpublished: g, flattenVariants: r }),
            { hasPreviouslyFetched: L, fetchPurchasesError: P } = (0, p.b5)(),
            U = L || null != P;
        ((0, o.A)(H.FYj), (0, c.pE)());
        let F = (0, n.cf)([f.A], () => (null != j ? (0, m.o)(f.A, j) : eI), [j]),
            G = j?.isCategoryReward === !0 && !F.isPurchased,
            w = (0, n.bG)([S.default], () => S.default.getCurrentUser()?.id),
            D = null != x && x.id !== w;
        i.useEffect(() => {
            "ready" === M && U && G && R();
        }, [M, U, G, R]);
        let V = i.useRef(!1);
        if (
            (i.useEffect(() => {
                if (V.current || null == j || !(0, C.B1)(j)) return;
                let e = k ?? t,
                    r = j.variants.findIndex((t) => t.skuId === e);
                (r > -1 && (0, I.n)(j, r), (V.current = !0));
            }, [j, t, k]),
            "ready" === M && U && !G && null != j && null != T)
        ) {
            let e = {
                transitionState: l,
                onClose: R,
                returnRef: _,
                product: j,
                category: T,
                analyticsLocations: O,
                analyticsSource: y,
                tab: v,
                giftRecipient: x,
                giftingOrigin: b,
            };
            return D ? (0, s.jsx)(E.default, { ...e }) : (0, s.jsx)(eS, { ...e, seedSkuId: t });
        }
        return (0, s.jsx)(a.EO, {
            returnRef: _,
            transitionState: l,
            size: a.rI.DYNAMIC,
            parentComponent: "CollectiblesShopStandaloneProductDetailsModal",
            children: (0, s.jsx)(a.$m, {
                children:
                    "error" === M
                        ? (0, s.jsx)(A.h, { onRetry: N, errorOrigin: A.A.GIFT_MODAL })
                        : (0, s.jsx)("div", {
                              className: ef.g,
                              children: (0, s.jsx)(d.y, { type: d.t.SPINNING_CIRCLE }),
                          }),
            }),
        });
    };
