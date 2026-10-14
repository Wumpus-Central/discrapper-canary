n.d(t, {
    U_: () => eE,
    yq: () => eI,
    LR: () => eb,
    $p: () => ej,
    cD: () => ev,
    O8: () => eA,
    Ct: () => e_,
    RO: () => eg,
});
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(297264),
    d = n(834730),
    p = n(726656),
    m = n(463376),
    h = n(558620),
    C = n(504560),
    f = n(34188),
    S = n(661531),
    E = n(939249),
    I = n(398590),
    A = n(793574),
    g = n(688810),
    y = n(878678),
    P = n(361158),
    v = n(976860),
    x = n(815996),
    _ = n(403689),
    T = n(652215),
    N = n(660183),
    b = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, g.Ay)(),
        { isHidden: i } = _.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        (t(),
            (0, v.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: A.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, I.jH)(),
            (0, P.dF)(y.Zt));
    }
    return i
        ? null
        : (0, l.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, l.jsx)("div", {
                      className: b.Wk,
                      children: (0, l.jsx)(f.U, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: S.A.colors.ICON_DEFAULT,
                      }),
                  }),
                  (0, l.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: N.intl.format(N.t.twSHte, {
                          checkItOut: (e) => (0, l.jsx)(E.D, { className: b.nf, onClick: r, children: e }),
                      }),
                  }),
              ],
          });
};
var R = n(951305),
    O = n(222707),
    M = n(594832),
    L = n(97352),
    k = n(45938),
    w = n(975571),
    D = n(158045),
    U = n(580630),
    G = n(881489),
    F = n(774962),
    B = n(371710),
    H = n(163074),
    W = n(810498),
    Y = n(557679),
    V = n(547902),
    K = n(202541),
    q = n(650583),
    Z = n(452027),
    z = n(403581),
    $ = n(341535),
    Q = n(318824);
let J = [1, 5, 10, 20];
function X(e) {
    return J.some((t) => t === e);
}
function ee(e) {
    return Number.isInteger(e) && e >= C.y0 && e <= 50;
}
function et(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("div", {
        id: a,
        className: Q.eg,
        "aria-live": r ? "polite" : void 0,
        children: (0, l.jsx)(d.E, {
            tag: "span",
            variant: "text-sm/semibold",
            color: i ? "text-default" : "text-subtle",
            children: (0, U.$g)(t, n),
        }),
    });
}
function en(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.yK)([L.A], () => n.map((e) => L.A.get(e))),
        {
            quantity: o,
            setQuantity: c,
            setSelectedPlanId: p,
            checkoutPriceOptions: m,
        } = (0, C.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        h = !X(o) && ee(o) ? o : 3,
        [f, E] = i.useState(() => (X(o) ? "preset" : "custom")),
        [I, A] = i.useState(() => String(h)),
        [g, y] = i.useState(h),
        P = i.useId(),
        v = i.useId(),
        x = i.useId(),
        _ = a
            .filter((e) => null != e && (0, Y.b)(e.id))
            .map((e) => ({
                plan: e,
                label: N.intl.formatToPlainString(e.interval === K.WT.YEAR ? $.default.Aq6Jxd : $.default["0nFw35"], {
                    durationCount: e.intervalCount,
                }),
                savingsPercent: (0, D.L_)({ planId: e.id, isGift: !0, priceOptions: m, subscriptionPlan: e }),
            }));
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(Z.D, {
                label: N.intl.string($.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: Q.bH,
                    children: _.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            a = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: Q.Ap,
                                "data-selected": a,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: Q.Ts,
                                        type: "radio",
                                        name: P,
                                        value: n.id,
                                        checked: a,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: Q.FC }),
                                    (0, l.jsx)(d.E, {
                                        tag: "span",
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: i,
                                    }),
                                    null != r && r > 0
                                        ? (0, l.jsx)(d.E, {
                                              tag: "span",
                                              variant: "text-sm/medium",
                                              color: "text-feedback-positive",
                                              className: Q.eQ,
                                              children: N.intl.formatToPlainString($.default.rr3AQS, { percent: r }),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(Z.D, {
                label: N.intl.string($.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: Q._L,
                    children: [
                        J.map((e) => {
                            let t = "preset" === f && o === e,
                                n = N.intl.formatToPlainString($.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: Q.Jy,
                                    onClick: () => {
                                        (E("preset"), c(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: Q.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(z.t, { size: "md", color: S.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: Q.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "text-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(et, {
                                                    amount: r.amount * e,
                                                    currency: r.currency,
                                                    selected: t,
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                e,
                            );
                        }),
                        (0, l.jsxs)("label", {
                            className: Q.r8,
                            "data-selected": "custom" === f,
                            onPointerUp: function () {
                                "custom" !== f && (E("custom"), c(g));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: Q.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: I,
                                    "aria-labelledby": v,
                                    "aria-describedby": x,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (E("custom"), A(e), y(50), c(50));
                                            return;
                                        }
                                        A(t);
                                        let n = Number(t);
                                        ee(n) && (E("custom"), y(n), c(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(I);
                                        A(String(ee(e) ? e : g));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: Q.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: v,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === f ? "text-strong" : "text-default",
                                            children: N.intl.string($.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(et, {
                                            id: x,
                                            amount: r.amount * g,
                                            currency: r.currency,
                                            selected: "custom" === f,
                                            announce: "custom" === f,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
var el = n(477421),
    ei = n(35587),
    er = n(511484),
    ea = n(735164),
    es = n(503698),
    eo = n.n(es),
    eu = n(428212);
function ec(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: r,
            intervalCount: a = 1,
            isPrepaidPaymentSource: s = !1,
        } = e,
        o = (0, U.$g)(t, n),
        u = null;
    return (
        i === K.WT.YEAR
            ? (u = N.intl.format(N.t["3U719t"], { price: o }))
            : i === K.WT.MONTH && 1 === a
              ? (u = N.intl.format(N.t.NkR7BU, { price: o }))
              : i === K.WT.MONTH && a > 1 && (u = N.intl.format(N.t.CNAGg4, { price: o, intervalCount: a })),
        (0, l.jsx)("div", {
            className: eo()(eu.zz, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var ed = n(898697),
    ep = n(968060),
    em = n(274076),
    eh = n(738869),
    eC = n(948388);
n(26279);
var ef = n(818348),
    eS = n(305828);
function eE(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eI(e, t) {
    let n = N.intl.string(N.t.BYa62u),
        l = N.intl.string(N.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case K.WT.YEAR:
                    return n;
                case K.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case K.pe.TIER_0:
            switch (r) {
                case K.pe.TIER_1:
                    return N.intl.string(N.t.q6mxDS);
                case K.pe.TIER_2:
                    return N.intl.string(N.t.seZVS0);
                default:
                    return i;
            }
        case K.pe.TIER_1:
            switch (r) {
                case K.pe.TIER_0:
                    return N.intl.string(N.t["7+u2zg"]);
                case K.pe.TIER_2:
                    return N.intl.string(N.t.NG2qcc);
                default:
                    return i;
            }
        case K.pe.TIER_2:
            switch (r) {
                case K.pe.TIER_0:
                case K.pe.TIER_1:
                    return N.intl.string(N.t["eB0/w9"]);
                case K.pe.TIER_2:
                    return e.interval === K.WT.MONTH
                        ? N.intl.formatToPlainString(N.t.RqUv86, { numFreeGuildSubscriptions: K.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function eA() {
    let { userTrialOffer: e } = (0, m.i)(),
        t = e?.subscriptionTrial,
        { daysCount: n, copy: l } = i.useMemo(
            () =>
                t?.interval === K.WT.DAY
                    ? t?.intervalCount > 7
                        ? { daysCount: 14, copy: N.intl.string(N.t.Z1V2cs) }
                        : { daysCount: 7, copy: N.intl.string(N.t.MI1rHs) }
                    : { daysCount: 30, copy: N.intl.string(N.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function eg(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: p,
            activeSubscription: f,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: S, isEligibleForTrial: E, discountOffer: I } = (0, m.i)(),
        A = (0, er.YJ)(I),
        {
            isGift: g,
            giftRecipient: y,
            selectedGiftStyle: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            claimableRewards: _,
            setSelectedGiftingPromotionRewards: T,
        } = (0, R.Pv)(),
        N = (0, h.A)(),
        b = (0, W.kz)(N, g && (0, k.Ik)(y), _),
        j = (0, M.tA)({ giftRecipient: y, isGift: g });
    a()(void 0 !== f, "should not be undefined");
    let [O, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        U = S?.subscriptionTrial,
        G = S?.isReferralTrial === !0,
        F = (0, ei.Sq)() && !G,
        B = w ?? N,
        H = n ?? p;
    a()(null != H, "Price option has to be set");
    let Y = I?.discount?.planIds,
        V = null != I && l.some((e) => Y?.includes(e)) && null != I.discount,
        K = null != A && l.includes(A) ? (0, D.y8)(A, !1, g, H) : void 0,
        q = null != B ? B.id : void 0,
        Z = null != q && l.includes(q);
    (i.useEffect(() => {
        if (Z) return void d(q, { shouldUpdateQuantity: !1 });
        let e = !g && null != A && l.includes(A) ? A : null;
        if (null == O || g) d(e ?? l[0]);
        else if (null != O) {
            let e = l.find((e) => e !== O.id);
            null != e && d(e);
        }
    }, [Z, g, l, O, d, q, A]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_);
        }, [_, T, b]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = B?.id != null ? (0, D.y8)(B.id, !1, g, H) : void 0,
        { ipCountryCode: J } = (0, el.A)(),
        X = "HR" === J && null != Q && Q.currency === ef.Yr.EUR,
        ee = (0, D.J$)(H.paymentSourceId),
        et = !g && (V || (null != U && E && null != r)),
        { copy: en } = eA();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: Q,
        premiumSubscriptionPlan: O,
        premiumSubscription: f,
        thePriceOptions: H,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: et,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !E && !V && Z && u,
        canContinue: Z,
        isPrepaid: ee,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: g,
        giftRecipient: y,
        customGiftMessage: v,
        setCustomGiftMessage: x,
        selectedGiftStyle: P,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: E,
        userTrialOffer: S,
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: V,
        discountedPlanRegularPrice: K,
    };
}
function ey(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eS.T }),
            (0, l.jsx)(ea.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(ec, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eS.M3,
            }),
        ],
    });
}
function eP(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: i,
        selectedGiftStyle: r,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: s,
        canContinue: o,
        selectedPlan: d,
        selectedPlanPrice: p,
        useCompactGiftComponents: m,
        quantityPresetsSelector: h,
        handleClose: C,
        showTotal: f,
        switchPlanSelectComponent: S,
        warningComponent: E,
    } = e;
    function I(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: N.intl.string(N.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return null != h
        ? (0, l.jsxs)(l.Fragment, { children: [h, E, !a && (0, l.jsx)(j, { onClose: C })] })
        : (0, k.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eS.mh,
                children: [
                    (0, l.jsx)("div", { className: eS.MU, children: null != r && (0, l.jsx)(em.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eS.Tc,
                        children: [
                            (0, l.jsx)(eC.Z, { className: m ? eS.KW : void 0, giftRecipient: t }),
                            (function () {
                                if ((0, k.lo)(t) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                    return (0, l.jsx)(ep.A, {
                                        className: eS.iX,
                                        innerClassName: eS.pt,
                                        onTextChange: (e) => i(e),
                                        pendingText: n,
                                        currentText: n,
                                    });
                            })(),
                            I(S),
                            E,
                            !a && (0, l.jsx)(j, { onClose: C }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eS.Du,
                children: [
                    (0, l.jsx)(eC.Z, { className: m ? eS.KW : void 0, giftRecipient: t }),
                    I(S),
                    o &&
                        f &&
                        null != d &&
                        null != p &&
                        (0, l.jsx)(ey, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                    E,
                    !a && (0, l.jsx)(j, { onClose: C }),
                ],
            });
}
function ev(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function ex(e) {
    let {
            isPrepaid: t,
            planOptions: n,
            radioGroupRef: r,
            selectedPlan: a,
            radioGroupProps: s,
            shouldShowTrialOrDiscountLayout: o,
            thePriceOptions: u,
            isPlansEligibleForDiscount: c,
            isEligibleForTrial: d,
            isRecurringGiftEnabled: p,
        } = e,
        { currentPremiumSubscriptionForCheckout: m } = (0, C.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        { onKeyDown: h, ...f } = s,
        S = i.useCallback(
            (e) => {
                var t;
                if (!p) return void h(e);
                let n =
                    (t = e.key) === q.dh.ARROW_DOWN || t === q.dh.ARROW_RIGHT
                        ? 1
                        : t === q.dh.ARROW_UP || t === q.dh.ARROW_LEFT
                          ? -1
                          : 0;
                if (0 === n) return;
                let l = e.currentTarget,
                    i = e.target.closest('[role="radio"]'),
                    r = Array.from(l.querySelectorAll('[role="radio"]')),
                    a = null != i ? r.indexOf(i) : -1;
                a < 0 ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    r[(a + n + r.length) % r.length].click(),
                    requestAnimationFrame(() => l.querySelector('[role="radio"][aria-checked="true"]')?.focus()));
            },
            [p, h],
        ),
        E = i.useMemo(() => (p ? (0, B.RG)(n) : n), [p, n]),
        I = i.useMemo(
            () =>
                E.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = ev(m, n);
                    return (0, l.jsx)(
                        eh.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: i,
                            disabled: e.disabled || r,
                            premiumSubscription: m,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                            isRecurringGiftEnabled: p,
                        },
                        n,
                    );
                }),
            [e.disabled, E, a, m, t, u, o, c, d, p],
        );
    return (0, l.jsx)("div", {
        ref: r,
        ...f,
        "aria-label": p ? N.intl.string(N.t["3E5hXj"]) : void 0,
        onKeyDown: S,
        children: I,
    });
}
function e_(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eT(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, ef.Yr.HRK),
              }),
          })
        : null;
}
function eN() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(p.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: w.A.getArticleURL(T.MVz.LOCALIZED_PRICING) }),
    });
}
function eb(e) {
    let {
        selectedPlan: t,
        selectedPlanPrice: n,
        isPrepaid: i,
        shouldShowHRKEuroWarning: r,
        shouldShowTrialOrDiscountLayout: a,
        showTotal: s,
        shouldShowTotalInSubscriptionFlow: o,
        previewTotalSectionClassName: u,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o &&
                null != t &&
                null != n &&
                (0, l.jsx)(ey, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            eT({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(eN, {}),
        ],
    });
}
function ej(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: a,
            planOptions: s,
            subscriptionPeriodEnd: o,
            showTotal: u = !0,
            useCompactGiftComponents: p,
            handleClose: m,
        } = e,
        {
            skuId: h,
            selectedPlan: f,
            premiumSubscription: S,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: I,
            isGift: A,
            thePriceOptions: g,
            isEligibleForTrial: y,
            giftRecipient: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            selectedGiftStyle: _,
            isPlansEligibleForDiscount: T,
            discountedPlanRegularPrice: b,
            hasSeenCollectiblesInSkuSelect: j,
            userTrialOffer: M,
            shouldShowTrialOrDiscountLayout: L,
            isPrepaid: k,
            radioGroupRef: w,
            radioGroupProps: D,
            selectedPlanPrice: F,
            shouldShowHRKEuroWarning: W,
            shouldShowTotalInSubscriptionFlow: q,
            canContinue: Z,
            trialPeriodCopy: z,
        } = eg({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: $, applicablePlan: Q, discountOffer: J } = (0, C.t4)((e) => e.premiumDiscountInfo),
        X = (function (e) {
            let { isGift: t, giftRecipient: n, planOptions: l, location: r } = e,
                a = (0, C.t4)((e) => e.setSelectedPlanId),
                { hasAppliedRecurringGiftDefaultPlan: s, setHasAppliedRecurringGiftDefaultPlan: o } = (0, R.Pv)(),
                u = (0, B.Cu)({ isGift: t, giftRecipient: n, planOptions: l }),
                c = (0, V.u)({ location: r }),
                d = u && c;
            return (
                i.useEffect(() => {
                    d && !s && l.includes(K.gD.PREMIUM_MONTH_TIER_2) && (o(!0), a(K.gD.PREMIUM_MONTH_TIER_2));
                }, [s, d, l, o, a]),
                d
            );
        })({ isGift: A, giftRecipient: P, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        ee = (0, G.ds)(),
        { enabled: et } = H.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        el = (0, Y.M)({ isGift: A, giftRecipient: P, selectedPlanId: f?.id });
    function ei() {
        return (0, l.jsx)(ex, {
            disabled: t,
            planOptions: s,
            radioGroupRef: w,
            radioGroupProps: D,
            isGift: A,
            isPrepaid: k,
            premiumSubscription: S,
            selectedPlan: f,
            thePriceOptions: g,
            shouldShowTrialOrDiscountLayout: L,
            isEligibleForTrial: y,
            isPlansEligibleForDiscount: T,
            isRecurringGiftEnabled: X,
        });
    }
    let { showFractionalPremiumBanner: er, fractionalPremiumInfo: ea } = (0, O._V)({
        premiumSubscription: S,
        selectedPlanId: n,
        planGroup: r,
        isGift: A,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (A)
        return (0, l.jsx)(eP, {
            giftRecipient: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            selectedGiftStyle: _,
            hasSeenCollectiblesInSkuSelect: j,
            isPrepaid: k,
            canContinue: Z,
            selectedPlan: f,
            selectedPlanPrice: F,
            useCompactGiftComponents: p,
            quantityPresetsSelector:
                el && et && null != f && null != F
                    ? (0, l.jsx)(en, { selectedPlanId: f.id, planOptions: s, unitPrice: F })
                    : null,
            handleClose: m,
            showTotal: u,
            switchPlanSelectComponent: ei(),
            warningComponent: eT({ shouldShowHRKEuroWarning: W, selectedPlanPrice: F }),
        });
    let es = !(y && er && !ee),
        eo = eE(E, { isEligibleForBOGOPromotion: I });
    return (0, l.jsxs)("div", {
        children: [
            er &&
                !ee &&
                (0, l.jsx)(ed.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !0,
                    variant: y ? ed.uA.TRIAL : void 0,
                    trialPeriod: y ? z : void 0,
                    trialEnd: y ? o : void 0,
                }),
            eo &&
                !er &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eS.G3,
                    children: eI(E, h),
                }),
            es &&
                (function (e, t, i) {
                    if (!L)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eS.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eS.Tz,
                                    children: e_(e, { subscriptionPeriodEnd: o, trialPeriodCopy: z }),
                                }),
                                (0, l.jsx)("hr", { className: eS.RA }),
                            ],
                        });
                    if (i && null != $ && null != b && null != Q && n === Q) {
                        let e = f?.interval === K.WT.YEAR,
                            t = (0, U.$g)(b.amount - $, b.currency),
                            n = (0, U.$g)(b.amount, b.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eS.Tz,
                                    children: e
                                        ? N.intl.format(N.t.ofweWu, {
                                              numYears: J?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : N.intl.format(N.t["nG7g/E"], {
                                              numMonths: J?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: eS.RA }),
                            ],
                        });
                    }
                })(M, y, T),
            ei(),
            eb({
                selectedPlan: f,
                selectedPlanPrice: F,
                isPrepaid: k,
                shouldShowHRKEuroWarning: W,
                shouldShowTrialOrDiscountLayout: L,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: q,
            }),
        ],
    });
}
