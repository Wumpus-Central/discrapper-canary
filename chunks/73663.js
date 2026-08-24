n.d(t, {
    U_: () => eA,
    yq: () => eg,
    LR: () => eM,
    $p: () => eO,
    cD: () => eT,
    O8: () => eP,
    Ct: () => eb,
    RO: () => ev,
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
    m = n(726656),
    p = n(463376),
    C = n(558620),
    h = n(87725),
    f = n(34188),
    E = n(661531),
    S = n(939249),
    y = n(398590),
    I = n(793574),
    A = n(688810),
    g = n(906199),
    P = n(361158),
    v = n(976860),
    x = n(839534),
    _ = n(403689),
    T = n(652215),
    N = n(375708),
    b = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, A.Ay)(),
        { isHidden: i } = _.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        t(),
            (0, v.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: I.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, y.jH)(),
            (0, P.dF)(g.Zt);
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
                          color: E.A.colors.ICON_DEFAULT,
                      }),
                  }),
                  (0, l.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: N.intl.format(N.t.twSHte, {
                          checkItOut: (e) => (0, l.jsx)(S.D, { className: b.nf, onClick: r, children: e }),
                      }),
                  }),
              ],
          });
};
var R = n(951305),
    M = n(222707),
    O = n(594832),
    L = n(97352),
    k = n(45938),
    w = n(975571),
    U = n(158045),
    D = n(580630),
    G = n(881489),
    F = n(774962),
    B = n(332026),
    H = n(580194),
    W = n(557679),
    Y = n(704508),
    V = n(452027),
    K = n(202541),
    Z = n(270115),
    q = n(318824);
let z = [1, 2, 5, 10];
function Q(e) {
    return z.some((t) => t === e);
}
function $(e) {
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
            children: (0, D.$g)(t, n),
        }),
    });
}
function X(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.yK)([L.A], () => n.map((e) => L.A.get(e))),
        {
            quantity: o,
            setQuantity: c,
            setSelectedPlanId: m,
            checkoutPriceOptions: p,
        } = (0, h.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        C = !Q(o) && $(o) ? o : 3,
        [f, E] = i.useState(() => (Q(o) ? "preset" : "custom")),
        [S, y] = i.useState(() => String(C)),
        [I, A] = i.useState(C),
        g = i.useId(),
        P = i.useId(),
        v = i.useId(),
        x = a.find((e) => e?.interval === K.WT.MONTH),
        _ = a.find((e) => e?.interval === K.WT.YEAR),
        T = null != _ ? (0, U.L_)({ planId: _.id, isGift: !0, priceOptions: p, subscriptionPlan: _ }) : void 0,
        b = [
            null != x
                ? {
                      plan: x,
                      label: N.intl.formatToPlainString(Z.default["0nFw35"], { durationCount: 1 }),
                      savingsPercent: void 0,
                  }
                : null,
            null != _
                ? {
                      plan: _,
                      label: N.intl.formatToPlainString(Z.default.Aq6Jxd, { durationCount: 1 }),
                      savingsPercent: T,
                  }
                : null,
        ].filter((e) => null != e);
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(V.D, {
                label: N.intl.string(Z.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: q.bH,
                    children: b.map((e) => {
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
                                        name: g,
                                        value: n.id,
                                        checked: a,
                                        onChange: () => {
                                            n.id !== t && m(n.id, { shouldUpdateQuantity: !1 });
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
                                        E("preset"), c(e);
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: q.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(Y.y, { alt: "", width: 22, height: 22 }),
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
                                    value: S,
                                    "aria-labelledby": P,
                                    "aria-describedby": v,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            E("custom"), y(e), A(50), c(50);
                                            return;
                                        }
                                        y(t);
                                        let n = Number(t);
                                        $(n) && (E("custom"), A(n), c(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(S);
                                        y(String($(e) ? e : I));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: q.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: P,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === f ? "text-strong" : "text-default",
                                            children: N.intl.string(Z.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(J, {
                                            id: v,
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
var ee = n(408278),
    et = n(834040),
    en = n(663341),
    el = n(503698),
    ei = n.n(el),
    er = n(346689);
function ea(e) {
    let { className: t, unitPrice: n } = e,
        i = (0, h.t4)((e) => e.quantity);
    return (0, l.jsx)("div", {
        className: ei()(er.z, t),
        "aria-live": "polite",
        children: (0, l.jsxs)("div", {
            className: er.y,
            children: [
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: N.intl.string(N.t["0YJHm5"]),
                }),
                (0, l.jsx)(d.E, {
                    tag: "span",
                    variant: "heading-md/semibold",
                    color: "text-default",
                    children: (0, D.$g)(n.amount * i, n.currency),
                }),
            ],
        }),
    });
}
var es = n(649102);
function eo(e) {
    let { unitPrice: t } = e,
        { quantity: n, setQuantity: i } = (0, h.t4)((e) => ({ quantity: e.quantity, setQuantity: e.setQuantity }));
    return (0, l.jsxs)("div", {
        className: es.kL,
        children: [
            (0, l.jsxs)("div", {
                className: es.W_,
                children: [
                    (0, l.jsx)("div", {
                        className: es.l_,
                        children: (0, l.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: N.intl.string(Z.default.WnnzG7),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: es.Im,
                        role: "group",
                        "aria-label": N.intl.string(Z.default.WnnzG7),
                        children: [
                            (0, l.jsx)(ee.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: et.MinusIcon,
                                onClick: () => i(n - 1),
                                "aria-label": N.intl.string(N.t["k+ohJm"]),
                                disabled: n <= h.y0,
                            }),
                            (0, l.jsx)("div", {
                                className: es.$5,
                                "aria-live": "polite",
                                children: (0, l.jsx)(d.E, {
                                    tag: "span",
                                    variant: "heading-xl/semibold",
                                    color: "text-default",
                                    children: n,
                                }),
                            }),
                            (0, l.jsx)(ee.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: en.PlusLargeIcon,
                                onClick: () => i(n + 1),
                                "aria-label": N.intl.string(N.t.w8Sc4B),
                                disabled: n >= 50,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(ea, { unitPrice: t }),
        ],
    });
}
var eu = n(477421),
    ec = n(35587),
    ed = n(511484),
    em = n(735164),
    ep = n(363476),
    eC = n(531506),
    eh = n(871181),
    ef = n(318007),
    eE = n(958720),
    eS = n(285719);
n(26279);
var ey = n(818348),
    eI = n(656715);
function eA(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eg(e, t) {
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
function eP() {
    let { userTrialOffer: e } = (0, p.i)(),
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
function ev(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: f,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: E, isEligibleForTrial: S, discountOffer: y } = (0, p.i)(),
        I = (0, ed.YJ)(y),
        {
            isGift: A,
            giftRecipient: g,
            selectedGiftStyle: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            claimableRewards: _,
            setSelectedGiftingPromotionReward: T,
        } = (0, R.Pv)(),
        N = (0, C.A)(),
        b = (0, H.kz)(N, A && (0, k.Ik)(g), _),
        j = (0, O.tA)({ giftRecipient: g, isGift: A });
    a()(void 0 !== f, "should not be undefined");
    let [M, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        D = E?.subscriptionTrial,
        G = E?.trialId === K.Dw,
        F = (0, ec.Sq)() && !G,
        B = w ?? N,
        W = n ?? m;
    a()(null != W, "Price option has to be set");
    let Y = y?.discount?.planIds,
        V = null != y && l.some((e) => Y?.includes(e)) && null != y.discount,
        Z = null != I && l.includes(I) ? (0, U.y8)(I, !1, A, W) : void 0,
        q = null != B ? B.id : void 0,
        z = null != q && l.includes(q);
    i.useEffect(() => {
        if (z) return void d(q, { shouldUpdateQuantity: !1 });
        let e = !A && null != I && l.includes(I) ? I : null;
        if (null == M || A) d(e ?? l[0]);
        else if (null != M) {
            let e = l.find((e) => e !== M.id);
            null != e && d(e);
        }
    }, [z, A, l, M, d, q, I]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_[0]);
        }, [_, T, b]);
    let { ref: Q, ...$ } = (0, o._u)(),
        J = B?.id != null ? (0, U.y8)(B.id, !1, A, W) : void 0,
        { ipCountryCode: X } = (0, eu.A)(),
        ee = "HR" === X && null != J && J.currency === ey.Yr.EUR,
        et = (0, U.J$)(W.paymentSourceId),
        en = !A && (V || (null != D && S && null != r)),
        { copy: el } = eP();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: M,
        premiumSubscription: f,
        thePriceOptions: W,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: en,
        shouldShowHRKEuroWarning: ee,
        shouldShowTotalInSubscriptionFlow: !S && !V && z && u,
        canContinue: z,
        isPrepaid: et,
        radioGroupRef: Q,
        radioGroupProps: $,
        isGift: A,
        giftRecipient: g,
        customGiftMessage: v,
        setCustomGiftMessage: x,
        selectedGiftStyle: P,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: S,
        userTrialOffer: E,
        trialPeriodCopy: el,
        isPlansEligibleForDiscount: V,
        discountedPlanRegularPrice: Z,
    };
}
function ex(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eI.T }),
            (0, l.jsx)(em.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(ep.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eI.M3,
            }),
        ],
    });
}
function e_(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: i,
        selectedGiftStyle: r,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: s,
        canContinue: o,
        selectedPlan: d,
        selectedPlanPrice: m,
        useCompactGiftComponents: p,
        showQuantityStepper: C,
        quantityPresetsSelector: h,
        handleClose: f,
        showTotal: E,
        switchPlanSelectComponent: S,
        warningComponent: y,
    } = e;
    function I() {
        var e;
        return (
            (e =
                C && null != m
                    ? (0, l.jsxs)("div", { className: eI.SL, children: [S, (0, l.jsx)(eo, { unitPrice: m })] })
                    : S),
            (0, l.jsxs)(u.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: N.intl.string(N.t["3E5hXj"]),
                    }),
                    e,
                ],
            })
        );
    }
    return null != h
        ? (0, l.jsxs)(l.Fragment, { children: [h, y, !a && (0, l.jsx)(j, { onClose: f })] })
        : (0, k.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eI.mh,
                children: [
                    (0, l.jsx)("div", { className: eI.MU, children: null != r && (0, l.jsx)(ef.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eI.Tc,
                        children: [
                            (0, l.jsx)(eS.Z, { className: p ? eI.KW : void 0, giftRecipient: t }),
                            (function () {
                                if ((0, k.lo)(t) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                    return (0, l.jsx)(eh.A, {
                                        className: eI.iX,
                                        innerClassName: eI.pt,
                                        onTextChange: (e) => i(e),
                                        pendingText: n,
                                        currentText: n,
                                    });
                            })(),
                            I(),
                            y,
                            !a && (0, l.jsx)(j, { onClose: f }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eI.Du,
                children: [
                    (0, l.jsx)(eS.Z, { className: p ? eI.KW : void 0, giftRecipient: t }),
                    I(),
                    !C &&
                        o &&
                        E &&
                        null != d &&
                        null != m &&
                        (0, l.jsx)(ex, { selectedPlan: d, selectedPlanPrice: m, intervalType: null, isPrepaid: s }),
                    y,
                    !a && (0, l.jsx)(j, { onClose: f }),
                ],
            });
}
function eT(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eN(e) {
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
        { currentPremiumSubscriptionForCheckout: m } = (0, h.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        p = i.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eT(m, n);
                    return (0, l.jsx)(
                        eE.Ay,
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
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, m, t, u, o, c, d],
        );
    return (0, l.jsx)("div", { ref: r, ...s, children: p });
}
function eb(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.trialId === K.Dw;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function ej(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(m.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, D.$g)(7.5345 * n.amount, ey.Yr.HRK),
              }),
          })
        : null;
}
function eR() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: w.A.getArticleURL(T.MVz.LOCALIZED_PRICING) }),
    });
}
function eM(e) {
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
                (0, l.jsx)(ex, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            ej({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(eR, {}),
        ],
    });
}
function eO(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: r,
            planOptions: a,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: m,
        } = e,
        {
            skuId: p,
            selectedPlan: C,
            premiumSubscription: f,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: S,
            isGift: y,
            thePriceOptions: I,
            isEligibleForTrial: A,
            giftRecipient: g,
            customGiftMessage: P,
            setCustomGiftMessage: v,
            selectedGiftStyle: x,
            isPlansEligibleForDiscount: _,
            discountedPlanRegularPrice: T,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: j,
            shouldShowTrialOrDiscountLayout: R,
            isPrepaid: O,
            radioGroupRef: L,
            radioGroupProps: k,
            selectedPlanPrice: w,
            shouldShowHRKEuroWarning: U,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: H,
            trialPeriodCopy: Y,
        } = ev({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: V, applicablePlan: Z, discountOffer: q } = (0, h.t4)((e) => e.premiumDiscountInfo),
        z = (0, G.ds)(),
        Q = B.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        $ = (0, W.M)({ isGift: y, giftRecipient: g, selectedPlanId: C?.id }),
        J = $ && Q === B.o.STEPPER,
        ee = $ && Q === B.o.PRESETS;
    function et() {
        return (0, l.jsx)(eN, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: k,
            isGift: y,
            isPrepaid: O,
            premiumSubscription: f,
            selectedPlan: C,
            thePriceOptions: I,
            shouldShowTrialOrDiscountLayout: R,
            isEligibleForTrial: A,
            isPlansEligibleForDiscount: _,
        });
    }
    let { showFractionalPremiumBanner: en, fractionalPremiumInfo: el } = (0, M._V)({
        premiumSubscription: f,
        selectedPlanId: n,
        planGroup: i,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, l.jsx)(e_, {
            giftRecipient: g,
            customGiftMessage: P,
            setCustomGiftMessage: v,
            selectedGiftStyle: x,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: O,
            canContinue: H,
            selectedPlan: C,
            selectedPlanPrice: w,
            useCompactGiftComponents: u,
            showQuantityStepper: J,
            quantityPresetsSelector:
                ee && null != C && null != w
                    ? (0, l.jsx)(X, { selectedPlanId: C.id, planOptions: a, unitPrice: w })
                    : null,
            handleClose: m,
            showTotal: o,
            switchPlanSelectComponent: et(),
            warningComponent: ej({ shouldShowHRKEuroWarning: U, selectedPlanPrice: w }),
        });
    let ei = !(A && en && !z),
        er = eA(E, { isEligibleForBOGOPromotion: S });
    return (0, l.jsxs)("div", {
        children: [
            en &&
                !z &&
                (0, l.jsx)(eC.vi, {
                    fractionalPremiumInfo: el,
                    enablePremiumBrandRefresh: !0,
                    variant: A ? eC.uA.TRIAL : void 0,
                    trialPeriod: A ? Y : void 0,
                    trialEnd: A ? s : void 0,
                }),
            er &&
                !en &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eI.G3,
                    children: eg(E, p),
                }),
            ei &&
                (function (e, t, i) {
                    if (!R)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eI.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eI.Tz,
                                    children: eb(e, { subscriptionPeriodEnd: s, trialPeriodCopy: Y }),
                                }),
                                (0, l.jsx)("hr", { className: eI.RA }),
                            ],
                        });
                    if (i && null != V && null != T && null != Z && n === Z) {
                        let e = C?.interval === K.WT.YEAR,
                            t = (0, D.$g)(T.amount - V, T.currency),
                            n = (0, D.$g)(T.amount, T.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eI.Tz,
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
                                (0, l.jsx)("hr", { className: eI.RA }),
                            ],
                        });
                    }
                })(j, A, _),
            et(),
            eM({
                selectedPlan: C,
                selectedPlanPrice: w,
                isPrepaid: O,
                shouldShowHRKEuroWarning: U,
                shouldShowTrialOrDiscountLayout: R,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
