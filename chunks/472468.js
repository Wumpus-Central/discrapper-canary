n.d(t, {
    U_: () => eI,
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
    m = n(726656),
    p = n(463376),
    h = n(558620),
    C = n(123816),
    f = n(34188),
    E = n(661531),
    S = n(939249),
    g = n(398590),
    I = n(793574),
    y = n(688810),
    A = n(878678),
    P = n(361158),
    x = n(976860),
    v = n(815996),
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
            (0, x.pX)(T.BVt.COLLECTIBLES_SHOP),
            (0, v.Cz)({ analyticsSource: I.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, g.jH)(),
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
    q = n(650583),
    Z = n(118751),
    z = n(452027),
    $ = n(403581),
    J = n(773669),
    Q = n(805161),
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
        a = (0, s.bG)([J.default], () => J.default.locale),
        o = (0, s.yK)([L.A], () => n.map((e) => L.A.get(e))),
        {
            quantity: c,
            setQuantity: m,
            setSelectedPlanId: p,
            checkoutPriceOptions: h,
        } = (0, C.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        f = !et(c) && en(c) ? c : 3,
        [S, g] = i.useState(() => (et(c) ? "preset" : "custom")),
        [I, y] = i.useState(() => String(f)),
        [A, P] = i.useState(f),
        x = i.useId(),
        v = i.useId(),
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
                label: N.intl.string(Q.default.UWycjR),
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
                                        name: x,
                                        value: n.id,
                                        checked: s,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
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
                                              children: (0, Z.l9)(a, -r / 100),
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
                label: N.intl.string(Q.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: X._L,
                    children: [
                        ee.map((e) => {
                            let t = "preset" === S && c === e,
                                n = N.intl.formatToPlainString(Q.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: X.Jy,
                                    onClick: () => {
                                        (g("preset"), m(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: X.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)($.t, { size: "md", color: E.A.colors.ICON_STRONG }),
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
                            "data-selected": "custom" === S,
                            onPointerUp: function () {
                                "custom" !== S && (g("custom"), m(A));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: X.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: I,
                                    "aria-labelledby": v,
                                    "aria-describedby": _,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (g("custom"), y(e), P(50), m(50));
                                            return;
                                        }
                                        y(t);
                                        let n = Number(t);
                                        en(n) && (g("custom"), P(n), m(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(I);
                                        y(String(en(e) ? e : A));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: X.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: v,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === S ? "text-strong" : "text-default",
                                            children: N.intl.string(Q.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(el, {
                                            id: _,
                                            amount: r.amount * A,
                                            currency: r.currency,
                                            selected: "custom" === S,
                                            announce: "custom" === S,
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
function em(e) {
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
var ep = n(898697),
    eh = n(968060),
    eC = n(274076),
    ef = n(738869),
    eE = n(948388);
n(26279);
var eS = n(818348),
    eg = n(305828);
function eI(e, t) {
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
function eP(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: f,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: E, isEligibleForTrial: S, discountOffer: g } = (0, p.i)(),
        I = (0, es.YJ)(g),
        {
            isGift: y,
            giftRecipient: A,
            selectedGiftStyle: P,
            customGiftMessage: x,
            setCustomGiftMessage: v,
            claimableRewards: _,
            setSelectedGiftingPromotionRewards: T,
        } = (0, R.Pv)(),
        N = (0, h.A)(),
        b = (0, W.kz)(N, y && (0, k.Ik)(A), _),
        j = (0, M.tA)({ giftRecipient: A, isGift: y });
    a()(void 0 !== f, "should not be undefined");
    let [O, w] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        U = E?.subscriptionTrial,
        G = E?.isReferralTrial === !0,
        F = (0, ea.Sq)() && !G,
        B = w ?? N,
        H = n ?? m;
    a()(null != H, "Price option has to be set");
    let V = g?.discount?.planIds,
        Y = null != g && l.some((e) => V?.includes(e)) && null != g.discount,
        K = null != I && l.includes(I) ? (0, D.y8)(I, !1, y, H) : void 0,
        q = null != B ? B.id : void 0,
        Z = null != q && l.includes(q);
    (i.useEffect(() => {
        if (Z) return void d(q, { shouldUpdateQuantity: !1 });
        let e = !y && null != I && l.includes(I) ? I : null;
        if (null == O || y) d(e ?? l[0]);
        else if (null != O) {
            let e = l.find((e) => e !== O.id);
            null != e && d(e);
        }
    }, [Z, y, l, O, d, q, I]),
        i.useEffect(() => {
            b && null != _ && _.length > 0 && T(_);
        }, [_, T, b]));
    let { ref: z, ...$ } = (0, o._u)(),
        J = B?.id != null ? (0, D.y8)(B.id, !1, y, H) : void 0,
        { ipCountryCode: Q } = (0, er.A)(),
        X = "HR" === Q && null != J && J.currency === eS.Yr.EUR,
        ee = (0, D.J$)(H.paymentSourceId),
        et = !y && (Y || (null != U && S && null != r)),
        { copy: en } = eA();
    return {
        skuId: c,
        selectedPlan: B,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: O,
        premiumSubscription: f,
        thePriceOptions: H,
        hasSeenCollectiblesInSkuSelect: j,
        shouldShowTrialOrDiscountLayout: et,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !S && !Y && Z && u,
        canContinue: Z,
        isPrepaid: ee,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: y,
        giftRecipient: A,
        customGiftMessage: x,
        setCustomGiftMessage: v,
        selectedGiftStyle: P,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: S,
        userTrialOffer: E,
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: K,
    };
}
function ex(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eg.T }),
            (0, l.jsx)(eo.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(em, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eg.M3,
            }),
        ],
    });
}
function ev(e) {
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
        quantityPresetsSelector: h,
        handleClose: C,
        showTotal: f,
        switchPlanSelectComponent: E,
        warningComponent: S,
    } = e;
    function g(e) {
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
        ? (0, l.jsxs)(l.Fragment, { children: [h, S, !a && (0, l.jsx)(j, { onClose: C })] })
        : (0, k.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eg.mh,
                children: [
                    (0, l.jsx)("div", { className: eg.MU, children: null != r && (0, l.jsx)(eC.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eg.Tc,
                        children: [
                            (0, l.jsx)(eE.Z, { className: p ? eg.KW : void 0, giftRecipient: t }),
                            (function () {
                                if ((0, k.lo)(t) === k.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                    return (0, l.jsx)(eh.A, {
                                        className: eg.iX,
                                        innerClassName: eg.pt,
                                        onTextChange: (e) => i(e),
                                        pendingText: n,
                                        currentText: n,
                                    });
                            })(),
                            g(E),
                            S,
                            !a && (0, l.jsx)(j, { onClose: C }),
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eg.Du,
                children: [
                    (0, l.jsx)(eE.Z, { className: p ? eg.KW : void 0, giftRecipient: t }),
                    g(E),
                    o &&
                        f &&
                        null != d &&
                        null != m &&
                        (0, l.jsx)(ex, { selectedPlan: d, selectedPlanPrice: m, intervalType: null, isPrepaid: s }),
                    S,
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
            isRecurringGiftEnabled: m,
        } = e,
        { currentPremiumSubscriptionForCheckout: p } = (0, C.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        { onKeyDown: h, ...f } = s,
        E = i.useCallback(
            (e) => {
                var t;
                if (!m) return void h(e);
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
            [m, h],
        ),
        S = i.useMemo(() => (m ? (0, B.RG)(n) : n), [m, n]),
        g = i.useMemo(
            () =>
                S.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = e_(p, n);
                    return (0, l.jsx)(
                        ef.Ay,
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
                            isRecurringGiftEnabled: m,
                        },
                        n,
                    );
                }),
            [e.disabled, S, a, p, t, u, o, c, d, m],
        );
    return (0, l.jsx)("div", {
        ref: r,
        ...f,
        "aria-label": m ? N.intl.string(N.t["3E5hXj"]) : void 0,
        onKeyDown: E,
        children: g,
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
        ? (0, l.jsx)(m.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, eS.Yr.HRK),
              }),
          })
        : null;
}
function ej() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
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
                (0, l.jsx)(ex, {
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
            useCompactGiftComponents: m,
            handleClose: p,
        } = e,
        {
            skuId: h,
            selectedPlan: f,
            premiumSubscription: E,
            premiumSubscriptionPlan: S,
            isEligibleForBOGOPromotion: g,
            isGift: I,
            thePriceOptions: y,
            isEligibleForTrial: A,
            giftRecipient: P,
            customGiftMessage: x,
            setCustomGiftMessage: v,
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
        } = eP({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: $, applicablePlan: J, discountOffer: Q } = (0, C.t4)((e) => e.premiumDiscountInfo),
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
        })({ isGift: I, giftRecipient: P, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        ee = (0, G.ds)(),
        { enabled: et } = H.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        en = (0, V.M)({ isGift: I, giftRecipient: P, selectedPlanId: f?.id });
    function el() {
        return (0, l.jsx)(eT, {
            disabled: t,
            planOptions: s,
            radioGroupRef: w,
            radioGroupProps: D,
            isGift: I,
            isPrepaid: k,
            premiumSubscription: E,
            selectedPlan: f,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: L,
            isEligibleForTrial: A,
            isPlansEligibleForDiscount: T,
            isRecurringGiftEnabled: X,
        });
    }
    let { showFractionalPremiumBanner: er, fractionalPremiumInfo: ea } = (0, O._V)({
        premiumSubscription: E,
        selectedPlanId: n,
        planGroup: r,
        isGift: I,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (I)
        return (0, l.jsx)(ev, {
            giftRecipient: P,
            customGiftMessage: x,
            setCustomGiftMessage: v,
            selectedGiftStyle: _,
            hasSeenCollectiblesInSkuSelect: j,
            isPrepaid: k,
            canContinue: Z,
            selectedPlan: f,
            selectedPlanPrice: F,
            useCompactGiftComponents: m,
            quantityPresetsSelector:
                en && et && null != f && null != F
                    ? (0, l.jsx)(ei, { selectedPlanId: f.id, planOptions: s, unitPrice: F })
                    : null,
            handleClose: p,
            showTotal: u,
            switchPlanSelectComponent: el(),
            warningComponent: eb({ shouldShowHRKEuroWarning: W, selectedPlanPrice: F }),
        });
    let es = !(A && er && !ee),
        eo = eI(S, { isEligibleForBOGOPromotion: g });
    return (0, l.jsxs)("div", {
        children: [
            er &&
                !ee &&
                (0, l.jsx)(ep.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !0,
                    variant: A ? ep.uA.TRIAL : void 0,
                    trialPeriod: A ? z : void 0,
                    trialEnd: A ? o : void 0,
                }),
            eo &&
                !er &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eg.G3,
                    children: ey(S, h),
                }),
            es &&
                (function (e, t, i) {
                    if (!L)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eg.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eg.Tz,
                                    children: eN(e, { subscriptionPeriodEnd: o, trialPeriodCopy: z }),
                                }),
                                (0, l.jsx)("hr", { className: eg.RA }),
                            ],
                        });
                    if (i && null != $ && null != b && null != J && n === J) {
                        let e = f?.interval === K.WT.YEAR,
                            t = (0, U.$g)(b.amount - $, b.currency),
                            n = (0, U.$g)(b.amount, b.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eg.Tz,
                                    children: e
                                        ? N.intl.format(N.t.ofweWu, {
                                              numYears: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : N.intl.format(N.t["nG7g/E"], {
                                              numMonths: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: eg.RA }),
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
                shouldShowTotalInSubscriptionFlow: q,
            }),
        ],
    });
}
