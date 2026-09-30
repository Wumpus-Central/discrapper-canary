n.d(t, {
    U_: () => e_,
    yq: () => eT,
    LR: () => eD,
    $p: () => eU,
    cD: () => eO,
    O8: () => eN,
    Ct: () => eL,
    RO: () => eb,
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
    C = n(263532),
    f = n(34188),
    S = n(661531),
    E = n(939249),
    y = n(398590),
    A = n(793574),
    I = n(688810),
    g = n(878678),
    P = n(361158),
    v = n(976860),
    x = n(815996),
    _ = n(403689),
    T = n(652215),
    N = n(375708),
    b = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, I.Ay)(),
        { isHidden: i } = _.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        (t(),
            (0, v.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: A.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, y.jH)(),
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
    B = n(332026),
    H = n(810498),
    W = n(557679),
    Y = n(452027),
    V = n(403581),
    K = n(202541),
    q = n(805161),
    Z = n(318824);
let z = [1, 2, 5, 10];
function $(e) {
    return z.some((t) => t === e);
}
function Q(e) {
    return Number.isInteger(e) && e >= C.y0 && e <= 50;
}
function J(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("div", {
        id: a,
        className: Z.eg,
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
        } = (0, C.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        h = !$(o) && Q(o) ? o : 3,
        [f, E] = i.useState(() => ($(o) ? "preset" : "custom")),
        [y, A] = i.useState(() => String(h)),
        [I, g] = i.useState(h),
        P = i.useId(),
        v = i.useId(),
        x = i.useId(),
        _ = a.find((e) => e?.interval === K.WT.MONTH),
        T = a.find((e) => e?.interval === K.WT.YEAR),
        b = null != T ? (0, D.L_)({ planId: T.id, isGift: !0, priceOptions: m, subscriptionPlan: T }) : void 0,
        j = [
            null != T
                ? {
                      plan: T,
                      label: N.intl.formatToPlainString(q.default.Aq6Jxd, { durationCount: 1 }),
                      savingsPercent: b,
                  }
                : null,
            null != _
                ? {
                      plan: _,
                      label: N.intl.formatToPlainString(q.default["0nFw35"], { durationCount: 1 }),
                      savingsPercent: void 0,
                  }
                : null,
        ].filter((e) => null != e);
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(Y.D, {
                label: N.intl.string(q.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: Z.bH,
                    children: j.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            a = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: Z.Ap,
                                "data-selected": a,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: Z.Ts,
                                        type: "radio",
                                        name: P,
                                        value: n.id,
                                        checked: a,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: Z.FC }),
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
                                              className: Z.eQ,
                                              children: N.intl.formatToPlainString(q.default.rr3AQS, { percent: r }),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(Y.D, {
                label: N.intl.string(q.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: Z._L,
                    children: [
                        z.map((e) => {
                            let t = "preset" === f && o === e,
                                n = N.intl.formatToPlainString(q.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: Z.Jy,
                                    onClick: () => {
                                        (E("preset"), c(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: Z.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(V.t, { size: "md", color: S.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: Z.Ng,
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
                            className: Z.r8,
                            "data-selected": "custom" === f,
                            onPointerUp: function () {
                                "custom" !== f && (E("custom"), c(I));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: Z.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: y,
                                    "aria-labelledby": v,
                                    "aria-describedby": x,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (E("custom"), A(e), g(50), c(50));
                                            return;
                                        }
                                        A(t);
                                        let n = Number(t);
                                        Q(n) && (E("custom"), g(n), c(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(y);
                                        A(String(Q(e) ? e : I));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: Z.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: v,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === f ? "text-strong" : "text-default",
                                            children: N.intl.string(q.default.jhNRIe),
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
var ee = n(554146),
    et = n(508770),
    en = n(408278),
    el = n(834040),
    ei = n(663341),
    er = n(131607),
    ea = n(503698),
    es = n.n(ea),
    eo = n(346689);
function eu(e) {
    let { className: t, unitPrice: n } = e,
        i = (0, C.t4)((e) => e.quantity);
    return (0, l.jsx)("div", {
        className: es()(eo.z, t),
        "aria-live": "polite",
        children: (0, l.jsxs)("div", {
            className: eo.y,
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
                    children: (0, U.$g)(n.amount * i, n.currency),
                }),
            ],
        }),
    });
}
var ec = n(49999),
    ed = n(649102);
let ep = ee.M.PREMIUM_GIFT_QUANTITY_STEPPER_NEW_BADGE;
function em(e) {
    let { unitPrice: t } = e,
        { quantity: n, setQuantity: r } = (0, C.t4)((e) => ({ quantity: e.quantity, setQuantity: e.setQuantity })),
        [a, s] = i.useState(n),
        o = (function () {
            let [e, t] = (0, er.kn)([ep]),
                n = e === ep;
            return (
                i.useEffect(() => {
                    if (n) return () => t(ec.i.AUTO_DISMISS, !0);
                }, [n, t]),
                n
            );
        })();
    i.useEffect(() => {
        s(n);
    }, [n]);
    let u = "number" == typeof a,
        c = !u || a <= C.y0,
        p = !u || a >= 50;
    function m(e) {
        (s(e), r(e));
    }
    return (0, l.jsxs)("div", {
        className: ed.kL,
        children: [
            (0, l.jsxs)("div", {
                className: ed.W_,
                children: [
                    (0, l.jsxs)("div", {
                        className: ed.l_,
                        children: [
                            (0, l.jsx)(d.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: N.intl.string(q.default.WnnzG7),
                            }),
                            o &&
                                (0, l.jsx)("div", {
                                    className: ed.qS,
                                    children: (0, l.jsx)(et.E, { type: "new", variant: "brand" }),
                                }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: ed.Im,
                        role: "group",
                        "aria-label": N.intl.string(q.default.WnnzG7),
                        children: [
                            (0, l.jsx)(en.K, {
                                variant: "secondary",
                                size: "md",
                                icon: el.MinusIcon,
                                onClick: () => {
                                    c || m(a - 1);
                                },
                                "aria-label": N.intl.string(N.t["k+ohJm"]),
                                disabled: c,
                            }),
                            (0, l.jsx)("div", {
                                className: ed.t3,
                                children: (0, l.jsx)("input", {
                                    className: ed.Ax,
                                    "aria-label": N.intl.string(q.default.WnnzG7),
                                    inputMode: "numeric",
                                    value: `${a}`,
                                    onChange: (e) =>
                                        (function (e) {
                                            if ("" === e) return void s(e);
                                            let t = parseInt(e, 10);
                                            if (!isNaN(t)) {
                                                if (t <= C.y0) return void m(C.y0);
                                                if (t >= 50) return void m(50);
                                                m(t);
                                            }
                                        })(e.currentTarget.value),
                                    onBlur: function () {
                                        "" === a && s(n);
                                    },
                                }),
                            }),
                            (0, l.jsx)(en.K, {
                                variant: "secondary",
                                size: "md",
                                icon: ei.PlusLargeIcon,
                                onClick: () => {
                                    p || m(a + 1);
                                },
                                "aria-label": N.intl.string(N.t.w8Sc4B),
                                disabled: p,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(eu, { unitPrice: t }),
        ],
    });
}
var eh = n(477421),
    eC = n(35587),
    ef = n(511484),
    eS = n(735164),
    eE = n(363476),
    ey = n(531506),
    eA = n(871181),
    eI = n(318007),
    eg = n(958720),
    eP = n(285719);
n(26279);
var ev = n(818348),
    ex = n(656715);
function e_(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eT(e, t) {
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
function eN() {
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
function eb(e) {
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
        { userTrialOffer: S, isEligibleForTrial: E, discountOffer: y } = (0, m.i)(),
        A = (0, ef.YJ)(y),
        {
            isGift: I,
            giftRecipient: g,
            selectedGiftStyle: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            claimableRewards: _,
            setSelectedGiftingPromotionRewards: T,
        } = (0, R.Pv)(),
        N = (0, h.A)(),
        b = (0, H.kz)(N, I && (0, k.Ik)(g), _),
        j = (0, M.tA)({ giftRecipient: g, isGift: I });
    a()(void 0 !== f, "should not be undefined");
    let [O, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        U = S?.subscriptionTrial,
        G = S?.isReferralTrial === !0,
        F = (0, eC.Sq)() && !G,
        B = w ?? N,
        W = n ?? p;
    a()(null != W, "Price option has to be set");
    let Y = y?.discount?.planIds,
        V = null != y && l.some((e) => Y?.includes(e)) && null != y.discount,
        K = null != A && l.includes(A) ? (0, D.y8)(A, !1, I, W) : void 0,
        q = null != B ? B.id : void 0,
        Z = null != q && l.includes(q);
    (i.useEffect(() => {
        if (Z) return void d(q, { shouldUpdateQuantity: !1 });
        let e = !I && null != A && l.includes(A) ? A : null;
        if (null == O || I) d(e ?? l[0]);
        else if (null != O) {
            let e = l.find((e) => e !== O.id);
            null != e && d(e);
        }
    }, [Z, I, l, O, d, q, A]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_);
        }, [_, T, b]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = B?.id != null ? (0, D.y8)(B.id, !1, I, W) : void 0,
        { ipCountryCode: J } = (0, eh.A)(),
        X = "HR" === J && null != Q && Q.currency === ev.Yr.EUR,
        ee = (0, D.J$)(W.paymentSourceId),
        et = !I && (V || (null != U && E && null != r)),
        { copy: en } = eN();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: Q,
        premiumSubscriptionPlan: O,
        premiumSubscription: f,
        thePriceOptions: W,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: et,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !E && !V && Z && u,
        canContinue: Z,
        isPrepaid: ee,
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
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: V,
        discountedPlanRegularPrice: K,
    };
}
function ej(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: ex.T }),
            (0, l.jsx)(eS.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(eE.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: ex.M3,
            }),
        ],
    });
}
function eR(e) {
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
        showQuantityStepper: h,
        quantityPresetsSelector: C,
        handleClose: f,
        showTotal: S,
        switchPlanSelectComponent: E,
        warningComponent: y,
    } = e;
    function A() {
        var e;
        return (
            (e =
                h && null != p
                    ? (0, l.jsxs)("div", { className: ex.SL, children: [E, (0, l.jsx)(em, { unitPrice: p })] })
                    : E),
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
    return null != C
        ? (0, l.jsxs)(l.Fragment, { children: [C, y, !a && (0, l.jsx)(j, { onClose: f })] })
        : (0, k.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: ex.mh,
                children: [
                    (0, l.jsx)("div", { className: ex.MU, children: null != r && (0, l.jsx)(eI.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: ex.Tc,
                        children: [
                            (0, l.jsx)(eP.Z, { className: m ? ex.KW : void 0, giftRecipient: t }),
                            (function () {
                                if ((0, k.lo)(t) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                    return (0, l.jsx)(eA.A, {
                                        className: ex.iX,
                                        innerClassName: ex.pt,
                                        onTextChange: (e) => i(e),
                                        pendingText: n,
                                        currentText: n,
                                    });
                            })(),
                            A(),
                            y,
                            !a && (0, l.jsx)(j, { onClose: f }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: ex.Du,
                children: [
                    (0, l.jsx)(eP.Z, { className: m ? ex.KW : void 0, giftRecipient: t }),
                    A(),
                    !h &&
                        o &&
                        S &&
                        null != d &&
                        null != p &&
                        (0, l.jsx)(ej, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                    y,
                    !a && (0, l.jsx)(j, { onClose: f }),
                ],
            });
}
function eO(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eM(e) {
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
        { currentPremiumSubscriptionForCheckout: p } = (0, C.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        m = i.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eO(p, n);
                    return (0, l.jsx)(
                        eg.Ay,
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
function eL(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function ek(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, ev.Yr.HRK),
              }),
          })
        : null;
}
function ew() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(p.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: w.A.getArticleURL(T.MVz.LOCALIZED_PRICING) }),
    });
}
function eD(e) {
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
                (0, l.jsx)(ej, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            ek({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(ew, {}),
        ],
    });
}
function eU(e) {
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
            selectedPlan: h,
            premiumSubscription: f,
            premiumSubscriptionPlan: S,
            isEligibleForBOGOPromotion: E,
            isGift: y,
            thePriceOptions: A,
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
            trialPeriodCopy: Y,
        } = eb({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: V, applicablePlan: q, discountOffer: Z } = (0, C.t4)((e) => e.premiumDiscountInfo),
        z = (0, G.ds)(),
        $ = B.Ay.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        Q = (0, W.M)({ isGift: y, giftRecipient: g, selectedPlanId: h?.id }),
        J = Q && $ === B.o3.STEPPER,
        ee = Q && $ === B.o3.PRESETS;
    function et() {
        return (0, l.jsx)(eM, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: k,
            isGift: y,
            isPrepaid: M,
            premiumSubscription: f,
            selectedPlan: h,
            thePriceOptions: A,
            shouldShowTrialOrDiscountLayout: R,
            isEligibleForTrial: I,
            isPlansEligibleForDiscount: _,
        });
    }
    let { showFractionalPremiumBanner: en, fractionalPremiumInfo: el } = (0, O._V)({
        premiumSubscription: f,
        selectedPlanId: n,
        planGroup: i,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, l.jsx)(eR, {
            giftRecipient: g,
            customGiftMessage: P,
            setCustomGiftMessage: v,
            selectedGiftStyle: x,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: M,
            canContinue: H,
            selectedPlan: h,
            selectedPlanPrice: w,
            useCompactGiftComponents: u,
            showQuantityStepper: J,
            quantityPresetsSelector:
                ee && null != h && null != w
                    ? (0, l.jsx)(X, { selectedPlanId: h.id, planOptions: a, unitPrice: w })
                    : null,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: et(),
            warningComponent: ek({ shouldShowHRKEuroWarning: D, selectedPlanPrice: w }),
        });
    let ei = !(I && en && !z),
        er = e_(S, { isEligibleForBOGOPromotion: E });
    return (0, l.jsxs)("div", {
        children: [
            en &&
                !z &&
                (0, l.jsx)(ey.vi, {
                    fractionalPremiumInfo: el,
                    enablePremiumBrandRefresh: !0,
                    variant: I ? ey.uA.TRIAL : void 0,
                    trialPeriod: I ? Y : void 0,
                    trialEnd: I ? s : void 0,
                }),
            er &&
                !en &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: ex.G3,
                    children: eT(S, m),
                }),
            ei &&
                (function (e, t, i) {
                    if (!R)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: ex.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ex.Tz,
                                    children: eL(e, { subscriptionPeriodEnd: s, trialPeriodCopy: Y }),
                                }),
                                (0, l.jsx)("hr", { className: ex.RA }),
                            ],
                        });
                    if (i && null != V && null != T && null != q && n === q) {
                        let e = h?.interval === K.WT.YEAR,
                            t = (0, U.$g)(T.amount - V, T.currency),
                            n = (0, U.$g)(T.amount, T.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ex.Tz,
                                    children: e
                                        ? N.intl.format(N.t.ofweWu, {
                                              numYears: Z?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : N.intl.format(N.t["nG7g/E"], {
                                              numMonths: Z?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: ex.RA }),
                            ],
                        });
                    }
                })(j, I, _),
            et(),
            eD({
                selectedPlan: h,
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
