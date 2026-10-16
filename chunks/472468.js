n.d(t, {
    U_: () => eg,
    yq: () => ey,
    LR: () => eR,
    $p: () => eO,
    cD: () => e_,
    O8: () => eA,
    Ct: () => eN,
    RO: () => eP,
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
    C = n(123816),
    f = n(34188),
    S = n(661531),
    E = n(939249),
    I = n(398590),
    g = n(793574),
    y = n(688810),
    A = n(878678),
    P = n(361158),
    v = n(976860),
    x = n(815996),
    _ = n(403689),
    T = n(652215),
    N = n(105292),
    b = n(909753);
let j = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, y.Ay)(),
        { isHidden: i } = _.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        (t(),
            (0, v.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, x.Cz)({ analyticsSource: g.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, I.jH)(),
            (0, P.dF)(A.Zt));
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
    V = n(557679),
    Y = n(547902),
    K = n(202541),
    Z = n(650583),
    q = n(118751),
    z = n(452027),
    $ = n(403581),
    Q = n(773669),
    J = n(341535),
    X = n(318824);
let ee = [1, 5, 10, 20];
function et(e) {
    return ee.some((t) => t === e);
}
function en(e) {
    return Number.isInteger(e) && e >= C.y0 && e <= 50;
}
function el(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("div", {
        id: a,
        className: X.eg,
        "aria-live": r ? "polite" : void 0,
        children: (0, l.jsx)(d.E, {
            tag: "span",
            variant: "text-sm/semibold",
            color: i ? "text-default" : "text-subtle",
            children: (0, U.$g)(t, n),
        }),
    });
}
function ei(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.bG)([Q.default], () => Q.default.locale),
        o = (0, s.yK)([L.A], () => n.map((e) => L.A.get(e))),
        {
            quantity: c,
            setQuantity: p,
            setSelectedPlanId: m,
            checkoutPriceOptions: h,
        } = (0, C.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        f = !et(c) && en(c) ? c : 3,
        [E, I] = i.useState(() => (et(c) ? "preset" : "custom")),
        [g, y] = i.useState(() => String(f)),
        [A, P] = i.useState(f),
        v = i.useId(),
        x = i.useId(),
        _ = i.useId(),
        T = o
            .filter((e) => null != e && (0, V.b)(e.id))
            .map((e) => ({
                plan: e,
                label:
                    e.interval === K.WT.YEAR
                        ? N.intl.formatToPlainString(N.t.IfYQVC, { years: e.intervalCount })
                        : N.intl.formatToPlainString(N.t.erUSmA, { months: e.intervalCount }),
                savingsPercent: (0, D.L_)({ planId: e.id, isGift: !0, priceOptions: h, subscriptionPlan: e }),
            }));
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(z.D, {
                label: N.intl.string(J.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: X.bH,
                    children: T.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            s = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: X.Ap,
                                "data-selected": s,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: X.Ts,
                                        type: "radio",
                                        name: v,
                                        value: n.id,
                                        checked: s,
                                        onChange: () => {
                                            n.id !== t && m(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: X.FC }),
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
                                              className: X.eQ,
                                              children: (0, q.l9)(a, -r / 100),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(z.D, {
                label: N.intl.string(J.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: X._L,
                    children: [
                        ee.map((e) => {
                            let t = "preset" === E && c === e,
                                n = N.intl.formatToPlainString(J.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: X.Jy,
                                    onClick: () => {
                                        (I("preset"), p(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: X.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)($.t, { size: "md", color: S.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: X.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "text-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(el, {
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
                            className: X.r8,
                            "data-selected": "custom" === E,
                            onPointerUp: function () {
                                "custom" !== E && (I("custom"), p(A));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: X.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: g,
                                    "aria-labelledby": x,
                                    "aria-describedby": _,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (I("custom"), y(e), P(50), p(50));
                                            return;
                                        }
                                        y(t);
                                        let n = Number(t);
                                        en(n) && (I("custom"), P(n), p(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(g);
                                        y(String(en(e) ? e : A));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: X.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: x,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === E ? "text-strong" : "text-default",
                                            children: N.intl.string(J.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(el, {
                                            id: _,
                                            amount: r.amount * A,
                                            currency: r.currency,
                                            selected: "custom" === E,
                                            announce: "custom" === E,
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
var er = n(477421),
    ea = n(35587),
    es = n(511484),
    eo = n(735164),
    eu = n(503698),
    ec = n.n(eu),
    ed = n(428212);
function ep(e) {
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
            className: ec()(ed.zz, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var em = n(898697),
    eh = n(968060),
    eC = n(274076),
    ef = n(738869),
    eS = n(948388);
n(26279);
var eE = n(818348),
    eI = n(305828);
function eg(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ey(e, t) {
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
function eP(e) {
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
        g = (0, es.YJ)(I),
        {
            isGift: y,
            giftRecipient: A,
            selectedGiftStyle: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            claimableRewards: _,
            setSelectedGiftingPromotionRewards: T,
        } = (0, R.Pv)(),
        N = (0, h.A)(),
        b = (0, W.kz)(N, y && (0, k.Ik)(A), _),
        j = (0, M.tA)({ giftRecipient: A, isGift: y });
    a()(void 0 !== f, "should not be undefined");
    let [O, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        U = S?.subscriptionTrial,
        G = S?.isReferralTrial === !0,
        F = (0, ea.Sq)() && !G,
        B = w ?? N,
        H = n ?? p;
    a()(null != H, "Price option has to be set");
    let V = I?.discount?.planIds,
        Y = null != I && l.some((e) => V?.includes(e)) && null != I.discount,
        K = null != g && l.includes(g) ? (0, D.y8)(g, !1, y, H) : void 0,
        Z = null != B ? B.id : void 0,
        q = null != Z && l.includes(Z);
    (i.useEffect(() => {
        if (q) return void d(Z, { shouldUpdateQuantity: !1 });
        let e = !y && null != g && l.includes(g) ? g : null;
        if (null == O || y) d(e ?? l[0]);
        else if (null != O) {
            let e = l.find((e) => e !== O.id);
            null != e && d(e);
        }
    }, [q, y, l, O, d, Z, g]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_);
        }, [_, T, b]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = B?.id != null ? (0, D.y8)(B.id, !1, y, H) : void 0,
        { ipCountryCode: J } = (0, er.A)(),
        X = "HR" === J && null != Q && Q.currency === eE.Yr.EUR,
        ee = (0, D.J$)(H.paymentSourceId),
        et = !y && (Y || (null != U && E && null != r)),
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
        shouldShowTotalInSubscriptionFlow: !E && !Y && q && u,
        canContinue: q,
        isPrepaid: ee,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: y,
        giftRecipient: A,
        customGiftMessage: v,
        setCustomGiftMessage: x,
        selectedGiftStyle: P,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: E,
        userTrialOffer: S,
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: K,
    };
}
function ev(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eI.T }),
            (0, l.jsx)(eo.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(ep, {
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
function ex(e) {
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
                className: eI.mh,
                children: [
                    (0, l.jsx)("div", { className: eI.MU, children: null != r && (0, l.jsx)(eC.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eI.Tc,
                        children: [
                            (0, l.jsx)(eS.Z, { className: m ? eI.KW : void 0, giftRecipient: t }),
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
                            I(S),
                            E,
                            !a && (0, l.jsx)(j, { onClose: C }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eI.Du,
                children: [
                    (0, l.jsx)(eS.Z, { className: m ? eI.KW : void 0, giftRecipient: t }),
                    I(S),
                    o &&
                        f &&
                        null != d &&
                        null != p &&
                        (0, l.jsx)(ev, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                    E,
                    !a && (0, l.jsx)(j, { onClose: C }),
                ],
            });
}
function e_(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === K.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [K.gD.PREMIUM_YEAR_TIER_0, K.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eT(e) {
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
                    (t = e.key) === Z.dh.ARROW_DOWN || t === Z.dh.ARROW_RIGHT
                        ? 1
                        : t === Z.dh.ARROW_UP || t === Z.dh.ARROW_LEFT
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
                    let { isCurrentPlan: i, disabled: r } = e_(m, n);
                    return (0, l.jsx)(
                        ef.Ay,
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
function eN(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eb(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, eE.Yr.HRK),
              }),
          })
        : null;
}
function ej() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(p.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: w.A.getArticleURL(T.MVz.LOCALIZED_PRICING) }),
    });
}
function eR(e) {
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
                (0, l.jsx)(ev, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            eb({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(ej, {}),
        ],
    });
}
function eO(e) {
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
            isGift: g,
            thePriceOptions: y,
            isEligibleForTrial: A,
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
            shouldShowTotalInSubscriptionFlow: Z,
            canContinue: q,
            trialPeriodCopy: z,
        } = eP({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: $, applicablePlan: Q, discountOffer: J } = (0, C.t4)((e) => e.premiumDiscountInfo),
        X = (function (e) {
            let { isGift: t, giftRecipient: n, planOptions: l, location: r } = e,
                a = (0, C.t4)((e) => e.setSelectedPlanId),
                { hasAppliedRecurringGiftDefaultPlan: s, setHasAppliedRecurringGiftDefaultPlan: o } = (0, R.Pv)(),
                u = (0, B.Cu)({ isGift: t, giftRecipient: n, planOptions: l }),
                c = (0, Y.u)({ location: r }),
                d = u && c;
            return (
                i.useEffect(() => {
                    d && !s && l.includes(K.gD.PREMIUM_MONTH_TIER_2) && (o(!0), a(K.gD.PREMIUM_MONTH_TIER_2));
                }, [s, d, l, o, a]),
                d
            );
        })({ isGift: g, giftRecipient: P, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        ee = (0, G.ds)(),
        { enabled: et } = H.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        en = (0, V.M)({ isGift: g, giftRecipient: P, selectedPlanId: f?.id });
    function el() {
        return (0, l.jsx)(eT, {
            disabled: t,
            planOptions: s,
            radioGroupRef: w,
            radioGroupProps: D,
            isGift: g,
            isPrepaid: k,
            premiumSubscription: S,
            selectedPlan: f,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: L,
            isEligibleForTrial: A,
            isPlansEligibleForDiscount: T,
            isRecurringGiftEnabled: X,
        });
    }
    let { showFractionalPremiumBanner: er, fractionalPremiumInfo: ea } = (0, O._V)({
        premiumSubscription: S,
        selectedPlanId: n,
        planGroup: r,
        isGift: g,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (g)
        return (0, l.jsx)(ex, {
            giftRecipient: P,
            customGiftMessage: v,
            setCustomGiftMessage: x,
            selectedGiftStyle: _,
            hasSeenCollectiblesInSkuSelect: j,
            isPrepaid: k,
            canContinue: q,
            selectedPlan: f,
            selectedPlanPrice: F,
            useCompactGiftComponents: p,
            quantityPresetsSelector:
                en && et && null != f && null != F
                    ? (0, l.jsx)(ei, { selectedPlanId: f.id, planOptions: s, unitPrice: F })
                    : null,
            handleClose: m,
            showTotal: u,
            switchPlanSelectComponent: el(),
            warningComponent: eb({ shouldShowHRKEuroWarning: W, selectedPlanPrice: F }),
        });
    let es = !(A && er && !ee),
        eo = eg(E, { isEligibleForBOGOPromotion: I });
    return (0, l.jsxs)("div", {
        children: [
            er &&
                !ee &&
                (0, l.jsx)(em.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !0,
                    variant: A ? em.uA.TRIAL : void 0,
                    trialPeriod: A ? z : void 0,
                    trialEnd: A ? o : void 0,
                }),
            eo &&
                !er &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eI.G3,
                    children: ey(E, h),
                }),
            es &&
                (function (e, t, i) {
                    if (!L)
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
                                    children: eN(e, { subscriptionPeriodEnd: o, trialPeriodCopy: z }),
                                }),
                                (0, l.jsx)("hr", { className: eI.RA }),
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
                                    className: eI.Tz,
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
                                (0, l.jsx)("hr", { className: eI.RA }),
                            ],
                        });
                    }
                })(M, A, T),
            el(),
            eR({
                selectedPlan: f,
                selectedPlanPrice: F,
                isPrepaid: k,
                shouldShowHRKEuroWarning: W,
                shouldShowTrialOrDiscountLayout: L,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: Z,
            }),
        ],
    });
}
