n.d(t, {
    U_: () => eh,
    yq: () => ef,
    LR: () => e_,
    $p: () => eT,
    cD: () => eI,
    O8: () => eS,
    Ct: () => eP,
    RO: () => eE,
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
    C = n(558620),
    h = n(504560),
    f = n(34188),
    S = n(661531),
    E = n(939249),
    A = n(398590),
    y = n(793574),
    I = n(688810),
    g = n(878678),
    P = n(361158),
    v = n(976860),
    x = n(815996),
    _ = n(403689),
    T = n(652215),
    N = n(660183),
    b = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, I.Ay)(),
        { isHidden: i } = _.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        (t(),
            (0, v.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: y.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, A.jH)(),
            (0, P.dF)(g.Zt));
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
    B = n(163074),
    H = n(810498),
    W = n(557679),
    V = n(452027),
    Y = n(403581),
    K = n(202541),
    Z = n(341535),
    q = n(318824);
let z = [1, 2, 5, 10];
function $(e) {
    return z.some((t) => t === e);
}
function Q(e) {
    return Number.isInteger(e) && e >= h.y0 && e <= 50;
}
function J(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("div", {
        id: a,
        className: q.eg,
        "aria-live": r ? "polite" : void 0,
        children: (0, l.jsx)(d.E, {
            tag: "span",
            variant: "text-sm/semibold",
            color: i ? "text-default" : "text-subtle",
            children: (0, U.$g)(t, n),
        }),
    });
}
function X(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.yK)([L.A], () => n.map((e) => L.A.get(e))),
        {
            quantity: o,
            setQuantity: c,
            setSelectedPlanId: p,
            checkoutPriceOptions: m,
        } = (0, h.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        C = !$(o) && Q(o) ? o : 3,
        [f, E] = i.useState(() => ($(o) ? "preset" : "custom")),
        [A, y] = i.useState(() => String(C)),
        [I, g] = i.useState(C),
        P = i.useId(),
        v = i.useId(),
        x = i.useId(),
        _ = a
            .filter((e) => null != e && (0, W.b)(e.id))
            .map((e) => ({
                plan: e,
                label: N.intl.formatToPlainString(e.interval === K.WT.YEAR ? Z.default.Aq6Jxd : Z.default["0nFw35"], {
                    durationCount: e.intervalCount,
                }),
                savingsPercent: (0, D.L_)({ planId: e.id, isGift: !0, priceOptions: m, subscriptionPlan: e }),
            }));
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(V.D, {
                label: N.intl.string(Z.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: q.bH,
                    children: _.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            a = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: q.Ap,
                                "data-selected": a,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: q.Ts,
                                        type: "radio",
                                        name: P,
                                        value: n.id,
                                        checked: a,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: q.FC }),
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
                                              className: q.eQ,
                                              children: N.intl.formatToPlainString(Z.default.rr3AQS, { percent: r }),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(V.D, {
                label: N.intl.string(Z.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: q._L,
                    children: [
                        z.map((e) => {
                            let t = "preset" === f && o === e,
                                n = N.intl.formatToPlainString(Z.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: q.Jy,
                                    onClick: () => {
                                        (E("preset"), c(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: q.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(Y.t, { size: "md", color: S.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: q.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "text-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(J, {
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
                            className: q.r8,
                            "data-selected": "custom" === f,
                            onPointerUp: function () {
                                "custom" !== f && (E("custom"), c(I));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: q.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: A,
                                    "aria-labelledby": v,
                                    "aria-describedby": x,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (E("custom"), y(e), g(50), c(50));
                                            return;
                                        }
                                        y(t);
                                        let n = Number(t);
                                        Q(n) && (E("custom"), g(n), c(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(A);
                                        y(String(Q(e) ? e : I));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: q.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: v,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === f ? "text-strong" : "text-default",
                                            children: N.intl.string(Z.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(J, {
                                            id: x,
                                            amount: r.amount * I,
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
var ee = n(477421),
    et = n(35587),
    en = n(511484),
    el = n(735164),
    ei = n(503698),
    er = n.n(ei),
    ea = n(428212);
function es(e) {
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
            className: er()(ea.zz, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var eo = n(898697),
    eu = n(968060),
    ec = n(274076),
    ed = n(448013),
    ep = n(948388);
n(26279);
var em = n(818348),
    eC = n(305828);
function eh(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ef(e, t) {
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
function eS() {
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
function eE(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: p,
            activeSubscription: f,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: S, isEligibleForTrial: E, discountOffer: A } = (0, m.i)(),
        y = (0, en.YJ)(A),
        {
            isGift: I,
            giftRecipient: g,
            selectedGiftStyle: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            claimableRewards: _,
            setSelectedGiftingPromotionRewards: T,
        } = (0, R.Pv)(),
        N = (0, C.A)(),
        b = (0, H.kz)(N, I && (0, k.Ik)(g), _),
        j = (0, M.tA)({ giftRecipient: g, isGift: I });
    a()(void 0 !== f, "should not be undefined");
    let [O, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        U = S?.subscriptionTrial,
        G = S?.isReferralTrial === !0,
        F = (0, et.Sq)() && !G,
        B = w ?? N,
        W = n ?? p;
    a()(null != W, "Price option has to be set");
    let V = A?.discount?.planIds,
        Y = null != A && l.some((e) => V?.includes(e)) && null != A.discount,
        K = null != y && l.includes(y) ? (0, D.y8)(y, !1, I, W) : void 0,
        Z = null != B ? B.id : void 0,
        q = null != Z && l.includes(Z);
    (i.useEffect(() => {
        if (q) return void d(Z, { shouldUpdateQuantity: !1 });
        let e = !I && null != y && l.includes(y) ? y : null;
        if (null == O || I) d(e ?? l[0]);
        else if (null != O) {
            let e = l.find((e) => e !== O.id);
            null != e && d(e);
        }
    }, [q, I, l, O, d, Z, y]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_);
        }, [_, T, b]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = B?.id != null ? (0, D.y8)(B.id, !1, I, W) : void 0,
        { ipCountryCode: J } = (0, ee.A)(),
        X = "HR" === J && null != Q && Q.currency === em.Yr.EUR,
        el = (0, D.J$)(W.paymentSourceId),
        ei = !I && (Y || (null != U && E && null != r)),
        { copy: er } = eS();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: Q,
        premiumSubscriptionPlan: O,
        premiumSubscription: f,
        thePriceOptions: W,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: ei,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !E && !Y && q && u,
        canContinue: q,
        isPrepaid: el,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: I,
        giftRecipient: g,
        customGiftMessage: v,
        setCustomGiftMessage: x,
        selectedGiftStyle: P,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: E,
        userTrialOffer: S,
        trialPeriodCopy: er,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: K,
    };
}
function eA(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eC.T }),
            (0, l.jsx)(el.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(es, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eC.M3,
            }),
        ],
    });
}
function ey(e) {
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
        quantityPresetsSelector: C,
        handleClose: h,
        showTotal: f,
        switchPlanSelectComponent: S,
        warningComponent: E,
    } = e;
    function A(e) {
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
    return null != C
        ? (0, l.jsxs)(l.Fragment, { children: [C, E, !a && (0, l.jsx)(j, { onClose: h })] })
        : (0, k.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eC.mh,
                children: [
                    (0, l.jsx)("div", { className: eC.MU, children: null != r && (0, l.jsx)(ec.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eC.Tc,
                        children: [
                            (0, l.jsx)(ep.Z, { className: m ? eC.KW : void 0, giftRecipient: t }),
                            (function () {
                                if ((0, k.lo)(t) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                    return (0, l.jsx)(eu.A, {
                                        className: eC.iX,
                                        innerClassName: eC.pt,
                                        onTextChange: (e) => i(e),
                                        pendingText: n,
                                        currentText: n,
                                    });
                            })(),
                            A(S),
                            E,
                            !a && (0, l.jsx)(j, { onClose: h }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eC.Du,
                children: [
                    (0, l.jsx)(ep.Z, { className: m ? eC.KW : void 0, giftRecipient: t }),
                    A(S),
                    o &&
                        f &&
                        null != d &&
                        null != p &&
                        (0, l.jsx)(eA, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                    E,
                    !a && (0, l.jsx)(j, { onClose: h }),
                ],
            });
}
function eI(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eg(e) {
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
        } = e,
        { currentPremiumSubscriptionForCheckout: p } = (0, h.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        m = i.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eI(p, n);
                    return (0, l.jsx)(
                        ed.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: i,
                            disabled: e.disabled || r,
                            premiumSubscription: p,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, p, t, u, o, c, d],
        );
    return (0, l.jsx)("div", { ref: r, ...s, children: m });
}
function eP(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function ev(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, em.Yr.HRK),
              }),
          })
        : null;
}
function ex() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(p.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: w.A.getArticleURL(T.MVz.LOCALIZED_PRICING) }),
    });
}
function e_(e) {
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
                (0, l.jsx)(eA, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            ev({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(ex, {}),
        ],
    });
}
function eT(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: r,
            planOptions: a,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: p,
        } = e,
        {
            skuId: m,
            selectedPlan: C,
            premiumSubscription: f,
            premiumSubscriptionPlan: S,
            isEligibleForBOGOPromotion: E,
            isGift: A,
            thePriceOptions: y,
            isEligibleForTrial: I,
            giftRecipient: g,
            customGiftMessage: P,
            setCustomGiftMessage: v,
            selectedGiftStyle: x,
            isPlansEligibleForDiscount: _,
            discountedPlanRegularPrice: T,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: j,
            shouldShowTrialOrDiscountLayout: R,
            isPrepaid: M,
            radioGroupRef: L,
            radioGroupProps: k,
            selectedPlanPrice: w,
            shouldShowHRKEuroWarning: D,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: H,
            trialPeriodCopy: V,
        } = eE({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: Y, applicablePlan: Z, discountOffer: q } = (0, h.t4)((e) => e.premiumDiscountInfo),
        z = (0, G.ds)(),
        { enabled: $ } = B.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        Q = (0, W.M)({ isGift: A, giftRecipient: g, selectedPlanId: C?.id });
    function J() {
        return (0, l.jsx)(eg, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: k,
            isGift: A,
            isPrepaid: M,
            premiumSubscription: f,
            selectedPlan: C,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: R,
            isEligibleForTrial: I,
            isPlansEligibleForDiscount: _,
        });
    }
    let { showFractionalPremiumBanner: ee, fractionalPremiumInfo: et } = (0, O._V)({
        premiumSubscription: f,
        selectedPlanId: n,
        planGroup: i,
        isGift: A,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (A)
        return (0, l.jsx)(ey, {
            giftRecipient: g,
            customGiftMessage: P,
            setCustomGiftMessage: v,
            selectedGiftStyle: x,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: M,
            canContinue: H,
            selectedPlan: C,
            selectedPlanPrice: w,
            useCompactGiftComponents: u,
            quantityPresetsSelector:
                Q && $ && null != C && null != w
                    ? (0, l.jsx)(X, { selectedPlanId: C.id, planOptions: a, unitPrice: w })
                    : null,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: J(),
            warningComponent: ev({ shouldShowHRKEuroWarning: D, selectedPlanPrice: w }),
        });
    let en = !(I && ee && !z),
        el = eh(S, { isEligibleForBOGOPromotion: E });
    return (0, l.jsxs)("div", {
        children: [
            ee &&
                !z &&
                (0, l.jsx)(eo.vi, {
                    fractionalPremiumInfo: et,
                    enablePremiumBrandRefresh: !0,
                    variant: I ? eo.uA.TRIAL : void 0,
                    trialPeriod: I ? V : void 0,
                    trialEnd: I ? s : void 0,
                }),
            el &&
                !ee &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eC.G3,
                    children: ef(S, m),
                }),
            en &&
                (function (e, t, i) {
                    if (!R)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eC.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eC.Tz,
                                    children: eP(e, { subscriptionPeriodEnd: s, trialPeriodCopy: V }),
                                }),
                                (0, l.jsx)("hr", { className: eC.RA }),
                            ],
                        });
                    if (i && null != Y && null != T && null != Z && n === Z) {
                        let e = C?.interval === K.WT.YEAR,
                            t = (0, U.$g)(T.amount - Y, T.currency),
                            n = (0, U.$g)(T.amount, T.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eC.Tz,
                                    children: e
                                        ? N.intl.format(N.t.ofweWu, {
                                              numYears: q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : N.intl.format(N.t["nG7g/E"], {
                                              numMonths: q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: eC.RA }),
                            ],
                        });
                    }
                })(j, I, _),
            J(),
            e_({
                selectedPlan: C,
                selectedPlanPrice: w,
                isPrepaid: M,
                shouldShowHRKEuroWarning: D,
                shouldShowTrialOrDiscountLayout: R,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
