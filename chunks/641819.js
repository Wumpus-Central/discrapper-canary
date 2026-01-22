n.d(t, {
    j: () => S,
}),
    n(896048),
    n(114821),
    n(339614);
var l = n(627968),
    r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    u = n(447784),
    c = n(235986),
    d = n(552736),
    p = n(68545),
    m = n(327101),
    f = n(763327),
    g = n(446929),
    j = n(287809),
    y = n(954571),
    h = n(937008),
    v = n(156312),
    b = n(166532),
    O = n(482132),
    x = n(652215),
    P = n(907);

function S(e) {
    var t, n, i, S, E, T;
    let { handleStepChange: I, handleClose: A } = e,
        { selectedPlan: k, selectedSkuId: w, step: _ } = (0, v.P5)(),
        {
            setSelectedGiftingPromotionReward: C,
            selectedGiftingPromotionReward: M,
            claimableRewards: N,
            claimableVariants: R,
        } = (0, h.Pv)(),
        D = (0, d.A)(),
        L = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        U = (0, p.Ay)(N, R, M),
        [G, H] = r.useState(null == U || null == (t = U.defaultHighlightedReward) ? void 0 : t.skuId),
        [B, F] = r.useState(!1),
        W = (0, m.A)({
            claimableVariants: R,
            claimableRewards: N,
            defaultSelection: U,
            selectedGiftingPromotionReward: M,
            setSelectedGiftingPromotionReward: C,
            hasUserMadeSelection: B,
        }),
        z = r.useMemo(() => {
            var e, t;
            if (null == R || 0 === R.length) return null != (t = null == D ? void 0 : D.rewards) ? t : [];
            let n = null != (e = null == W ? void 0 : W.selectedCategory) ? e : p.Sm.Trick;
            return R.flatMap((e) => {
                var t, l;
                return e.variants.length < p.PN
                    ? []
                    : ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({}, e.variants[n])),
                      (l = l =
                          {
                              name: e.name,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      t);
            });
        }, [R, null == D ? void 0 : D.rewards, null == W ? void 0 : W.selectedCategory]);
    r.useEffect(() => {
        let e = null == U ? void 0 : U.defaultHighlightedReward;
        !B && null == M && null != e && null != e && z.some((t) => t.skuId === e.skuId) && (C(e), H(e.skuId));
    }, [U, B, M, z, C]),
        s()(null != k, "Expected plan to selected"),
        s()(null != w, "Expected selectedSkuId"),
        s()(null != _, "Step should be set");
    let V = r.useMemo(() => null != G && (null != N ? N : []).some((e) => e.skuId === G), [G, N]),
        K = r.useMemo(() => null != M && z.some((e) => e.skuId === M.skuId), [z, M]),
        Y = r.useMemo(() => 0 === z.length || null == G || !K || !V, [z, G, V, K]);
    r.useEffect(() => {
        if (0 === z.length) {
            H(void 0), C(void 0);
            return;
        }
        (V && z.some((e) => e.skuId === G)) || null == G || (H(void 0), C(void 0));
    }, [z, V, G, C]);
    let Z = (e) => {
            C(z.find((t) => t.skuId === e)), H(e), F(!0);
        },
        Q = z.map((e) => {
            var t, n;
            return (0, l.jsx)(
                u.k,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != N && N.every((t) => t.skuId !== e.skuId),
                    user: L,
                    onSelect: Z,
                    selectedSkuId: G,
                    category: null == W ? void 0 : W.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        q = (0, l.jsx)(O.UX, {
            children: (0, l.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: P.Hx,
                children: (0, l.jsx)(g.Z, {
                    onStepChange: (e) => {
                        null != L &&
                            null != M &&
                            y.default.track(x.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: L.id,
                                reward_sku_id: M.skuId,
                            }),
                            I(e);
                    },
                    onBackClick: () => I(b.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [k.id],
                    selectedPlanId: k.id,
                    isNextDisabled: Y,
                }),
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: P.Hc,
                direction: c.A.Direction.VERTICAL,
                align: c.A.Align.START,
                separator: !1,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: null == D || null == (n = D.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: P.GQ,
                        children: null == D || null == (i = D.rewardSelection) ? void 0 : i.primarySubtitle(),
                    }),
                    (null == D || null == (E = D.rewardSelection) || null == (S = E.secondarySubtitle)
                        ? void 0
                        : S.call(E)) != null &&
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: null == D || null == (T = D.rewardSelection) ? void 0 : T.secondarySubtitle(),
                        }),
                    (0, l.jsx)(o.s_y, {
                        "data-migration-pending": !0,
                        className: P.b,
                        onClick: A,
                    }),
                ],
            }),
            (0, l.jsx)(o.$mQ, {
                "data-migration-pending": !0,
                children: (0, l.jsxs)(o.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        (null == W ? void 0 : W.shouldRenderCategoryControl) &&
                            (0, l.jsx)(f.A, {
                                defaultCategory: W.selectedCategory,
                                onCategoryChange: W.setSelectedCategory,
                            }),
                        (0, l.jsx)("div", {
                            className: P.Dq,
                            children: Q,
                        }),
                    ],
                }),
            }),
            q,
        ],
    });
}
