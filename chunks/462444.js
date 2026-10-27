n.d(t, {
    U_: () => eC,
    yq: () => ef,
    LR: () => e_,
    $p: () => eT,
    cD: () => eA,
    O8: () => eE,
    Ct: () => ex,
    RO: () => eS,
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
    f = n(951305),
    E = n(222707),
    S = n(97352),
    g = n(45938),
    I = n(975571),
    A = n(927578),
    y = n(580630),
    x = n(881489),
    P = n(774962),
    v = n(371710),
    _ = n(163074),
    T = n(810498),
    N = n(557679),
    b = n(547902),
    j = n(202541),
    R = n(650583),
    O = n(118751),
    M = n(452027),
    L = n(403581),
    k = n(661531),
    w = n(773669),
    D = n(341535),
    U = n(105292),
    G = n(318824);
let F = [1, 5, 10, 20];
function B(e) {
    return F.some((t) => t === e);
}
function H(e) {
    return Number.isInteger(e) && e >= C.y0 && e <= 50;
}
function W(e) {
    let { amount: t, currency: n, selected: i, announce: r, id: a } = e;
    return (0, l.jsx)("div", {
        id: a,
        className: G.eg,
        "aria-live": r ? "polite" : void 0,
        children: (0, l.jsx)(d.E, {
            tag: "span",
            variant: "text-sm/semibold",
            color: i ? "text-default" : "text-subtle",
            children: (0, y.$g)(t, n),
        }),
    });
}
function V(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.bG)([w.default], () => w.default.locale),
        o = (0, s.yK)([S.A], () => n.map((e) => S.A.get(e))),
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
        f = !B(c) && H(c) ? c : 3,
        [E, g] = i.useState(() => (B(c) ? "preset" : "custom")),
        [I, y] = i.useState(() => String(f)),
        [x, P] = i.useState(f),
        v = i.useId(),
        _ = i.useId(),
        T = i.useId(),
        b = o
            .filter((e) => null != e && (0, N.b)(e.id))
            .map((e) => ({
                plan: e,
                label:
                    e.interval === j.WT.YEAR
                        ? U.intl.formatToPlainString(U.t.IfYQVC, { years: e.intervalCount })
                        : U.intl.formatToPlainString(U.t.erUSmA, { months: e.intervalCount }),
                savingsPercent: (0, A.L_)({ planId: e.id, isGift: !0, priceOptions: h, subscriptionPlan: e }),
            }));
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(M.D, {
                label: U.intl.string(D.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: G.bH,
                    children: b.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            s = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: G.Ap,
                                "data-selected": s,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: G.Ts,
                                        type: "radio",
                                        name: v,
                                        value: n.id,
                                        checked: s,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: G.FC }),
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
                                              className: G.eQ,
                                              children: (0, O.l9)(a, -r / 100),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(M.D, {
                label: U.intl.string(D.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: G._L,
                    children: [
                        F.map((e) => {
                            let t = "preset" === E && c === e,
                                n = U.intl.formatToPlainString(D.default["AxON/M"], { giftCount: e });
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: G.Jy,
                                    onClick: () => {
                                        (g("preset"), m(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: G.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(L.t, { size: "md", color: k.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: G.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "text-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(W, {
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
                            className: G.r8,
                            "data-selected": "custom" === E,
                            onPointerUp: function () {
                                "custom" !== E && (g("custom"), m(x));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: G.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: I,
                                    "aria-labelledby": _,
                                    "aria-describedby": T,
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
                                        H(n) && (g("custom"), P(n), m(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(I);
                                        y(String(H(e) ? e : x));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: G.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: _,
                                            tag: "span",
                                            variant: "text-md/semibold",
                                            color: "custom" === E ? "text-strong" : "text-default",
                                            children: U.intl.string(D.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(W, {
                                            id: T,
                                            amount: r.amount * x,
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
var Y = n(503698),
    K = n.n(Y),
    Z = n(778712),
    q = n(123292),
    z = n(103557),
    $ = n(966327),
    Q = n(7584),
    J = n(427262),
    X = n(390755);
function ee(e) {
    let { className: t, giftRecipient: n, isMessageAttached: r, customGiftMessage: a, setCustomGiftMessage: s } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            r && o.current?.focus();
        }, [r]),
        (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsxs)(u.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(d.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: U.intl.string(U.t.xFn72s),
                    }),
                    (0, l.jsxs)("div", {
                        className: X.Nr,
                        children: [
                            (0, l.jsxs)("div", {
                                className: X.MT,
                                children: [
                                    (0, l.jsx)($.A, { user: n, size: Z._3.SIZE_24 }),
                                    (0, l.jsxs)("div", {
                                        className: X.rG,
                                        children: [
                                            (0, l.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: J.Ay.getName(n),
                                            }),
                                            (0, l.jsx)(d.E, {
                                                variant: "text-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: J.Ay.getUserTag(n),
                                            }),
                                        ],
                                    }),
                                    r
                                        ? (0, l.jsx)(q.Q, {
                                              variant: "critical",
                                              text: U.intl.string(U.t.MhoLHy),
                                              onClick: () => s(void 0),
                                          })
                                        : (0, l.jsx)(q.Q, {
                                              text: U.intl.string(U.t.RoS6FI),
                                              onClick: () => s(U.intl.string(U.t.ZkOo1U)),
                                          }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: K()(X.ob, r && X.F8),
                                children: (0, l.jsx)("div", {
                                    className: X.GM,
                                    inert: !r,
                                    children: (0, l.jsx)("div", {
                                        className: X.BK,
                                        children: (0, l.jsx)(z.f, {
                                            label: U.intl.string(U.t.B3miE8),
                                            hideLabel: !0,
                                            value: a ?? "",
                                            onChange: (e) => s(Q.Ay.translateInlineEmojiToSurrogates(e)),
                                            maxLength: j.Jo,
                                            showCharacterCount: !0,
                                            inputRef: o,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var et = n(477421),
    en = n(35587),
    el = n(511484),
    ei = n(735164),
    er = n(428212);
function ea(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: r,
            intervalCount: a = 1,
            isPrepaidPaymentSource: s = !1,
        } = e,
        o = (0, y.$g)(t, n),
        u = null;
    return (
        i === j.WT.YEAR
            ? (u = U.intl.format(U.t["3U719t"], { price: o }))
            : i === j.WT.MONTH && 1 === a
              ? (u = U.intl.format(U.t.NkR7BU, { price: o }))
              : i === j.WT.MONTH && a > 1 && (u = U.intl.format(U.t.CNAGg4, { price: o, intervalCount: a })),
        (0, l.jsx)("div", {
            className: K()(er.zz, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var es = n(898697),
    eo = n(968060),
    eu = n(274076),
    ec = n(738869),
    ed = n(948388),
    em = n(652215);
n(26279);
var ep = n(818348),
    eh = n(305828);
function eC(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ef(e, t) {
    let n = U.intl.string(U.t.BYa62u),
        l = U.intl.string(U.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case j.WT.YEAR:
                    return n;
                case j.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case j.pe.TIER_0:
            switch (r) {
                case j.pe.TIER_1:
                    return U.intl.string(U.t.q6mxDS);
                case j.pe.TIER_2:
                    return U.intl.string(U.t.seZVS0);
                default:
                    return i;
            }
        case j.pe.TIER_1:
            switch (r) {
                case j.pe.TIER_0:
                    return U.intl.string(U.t["7+u2zg"]);
                case j.pe.TIER_2:
                    return U.intl.string(U.t.NG2qcc);
                default:
                    return i;
            }
        case j.pe.TIER_2:
            switch (r) {
                case j.pe.TIER_0:
                case j.pe.TIER_1:
                    return U.intl.string(U.t["eB0/w9"]);
                case j.pe.TIER_2:
                    return e.interval === j.WT.MONTH
                        ? U.intl.formatToPlainString(U.t.RqUv86, { numFreeGuildSubscriptions: j.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function eE() {
    let { userTrialOffer: e } = (0, p.i)(),
        t = e?.subscriptionTrial,
        { daysCount: n, copy: l } = i.useMemo(
            () =>
                t?.interval === j.WT.DAY
                    ? t?.intervalCount > 7
                        ? { daysCount: 14, copy: U.intl.string(U.t.Z1V2cs) }
                        : { daysCount: 7, copy: U.intl.string(U.t.MI1rHs) }
                    : { daysCount: 30, copy: U.intl.string(U.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function eS(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: E,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: I, isEligibleForTrial: y, discountOffer: x } = (0, p.i)(),
        P = (0, el.YJ)(x),
        {
            isGift: v,
            giftRecipient: _,
            selectedGiftStyle: N,
            customGiftMessage: b,
            setCustomGiftMessage: j,
            claimableRewards: R,
            setSelectedGiftingPromotionRewards: O,
        } = (0, f.Pv)(),
        M = (0, h.A)(),
        L = (0, T.kz)(M, v && (0, g.Ik)(_), R);
    a()(void 0 !== E, "should not be undefined");
    let [k, w] = (0, s.yK)([S.A], () => [null != E ? S.A.get(E.planId) : null, null != t ? S.A.get(t) : null]),
        D = I?.subscriptionTrial,
        U = I?.isReferralTrial === !0,
        G = (0, en.Sq)() && !U,
        F = w ?? M,
        B = n ?? m;
    a()(null != B, "Price option has to be set");
    let H = x?.discount?.planIds,
        W = null != x && l.some((e) => H?.includes(e)) && null != x.discount,
        V = null != P && l.includes(P) ? (0, A.y8)(P, !1, v, B) : void 0,
        Y = null != F ? F.id : void 0,
        K = null != Y && l.includes(Y);
    (i.useEffect(() => {
        if (K) return void d(Y, { shouldUpdateQuantity: !1 });
        let e = !v && null != P && l.includes(P) ? P : null;
        if (null == k || v) d(e ?? l[0]);
        else if (null != k) {
            let e = l.find((e) => e !== k.id);
            null != e && d(e);
        }
    }, [K, v, l, k, d, Y, P]),
        i.useEffect(() => {
            L && null != R && R.length > 0 && O(R);
        }, [R, O, L]));
    let { ref: Z, ...q } = (0, o._u)(),
        z = F?.id != null ? (0, A.y8)(F.id, !1, v, B) : void 0,
        { ipCountryCode: $ } = (0, et.A)(),
        Q = "HR" === $ && null != z && z.currency === ep.Yr.EUR,
        J = (0, A.J$)(B.paymentSourceId),
        X = !v && (W || (null != D && y && null != r)),
        { copy: ee } = eE();
    return {
        skuId: c,
        selectedPlan: F,
        selectedPlanPrice: z,
        premiumSubscriptionPlan: k,
        premiumSubscription: E,
        thePriceOptions: B,
        shouldShowTrialOrDiscountLayout: X,
        shouldShowHRKEuroWarning: Q,
        shouldShowTotalInSubscriptionFlow: !y && !W && K && u,
        canContinue: K,
        isPrepaid: J,
        radioGroupRef: Z,
        radioGroupProps: q,
        isGift: v,
        giftRecipient: _,
        customGiftMessage: b,
        setCustomGiftMessage: j,
        selectedGiftStyle: N,
        isEligibleForBOGOPromotion: G,
        isEligibleForTrial: y,
        userTrialOffer: I,
        trialPeriodCopy: ee,
        isPlansEligibleForDiscount: W,
        discountedPlanRegularPrice: V,
    };
}
function eg(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eh.T }),
            (0, l.jsx)(ei.Sd, {
                label: U.intl.string(U.t.txajQG),
                value: (0, l.jsx)(ea, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eh.M3,
            }),
        ],
    });
}
function eI(e) {
    let {
            giftRecipient: t,
            customGiftMessage: n,
            setCustomGiftMessage: i,
            selectedGiftStyle: r,
            isPrepaid: a,
            canContinue: s,
            selectedPlan: o,
            selectedPlanPrice: d,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: p,
            quantityPresetsSelector: h,
            showTotal: C,
            switchPlanSelectComponent: E,
            warningComponent: S,
        } = e,
        { hasAppliedRecurringGiftDefaults: I } = (0, f.Pv)();
    function A(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: U.intl.string(U.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return null != h
        ? (0, l.jsxs)(l.Fragment, { children: [h, S] })
        : (0, g.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eh.mh,
                children: [
                    (0, l.jsx)("div", { className: eh.MU, children: null != r && (0, l.jsx)(eu.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eh.Tc,
                        children: [
                            p && null != t && null != i
                                ? (0, l.jsx)(ee, {
                                      className: m ? eh.KW : eh.xp,
                                      giftRecipient: t,
                                      isMessageAttached: I && null != n,
                                      customGiftMessage: n,
                                      setCustomGiftMessage: i,
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(ed.Z, { className: m ? eh.KW : void 0, giftRecipient: t }),
                                          (function () {
                                              if ((0, g.lo)(t) === g.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                                  return (0, l.jsx)(eo.A, {
                                                      className: eh.iX,
                                                      innerClassName: eh.pt,
                                                      onTextChange: (e) => i(e),
                                                      pendingText: n,
                                                      currentText: n,
                                                  });
                                          })(),
                                      ],
                                  }),
                            A(E),
                            S,
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: eh.Du,
                children: [
                    (0, l.jsx)(ed.Z, { className: m ? eh.KW : void 0, giftRecipient: t }),
                    A(E),
                    s &&
                        C &&
                        null != o &&
                        null != d &&
                        (0, l.jsx)(eg, { selectedPlan: o, selectedPlanPrice: d, intervalType: null, isPrepaid: a }),
                    S,
                ],
            });
}
function eA(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === j.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [j.gD.PREMIUM_YEAR_TIER_0, j.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function ey(e) {
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
                    (t = e.key) === R.dh.ARROW_DOWN || t === R.dh.ARROW_RIGHT
                        ? 1
                        : t === R.dh.ARROW_UP || t === R.dh.ARROW_LEFT
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
        S = i.useMemo(() => (m ? (0, v.RG)(n) : n), [m, n]),
        g = i.useMemo(
            () =>
                S.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eA(p, n);
                    return (0, l.jsx)(
                        ec.Ay,
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
        "aria-label": m ? U.intl.string(U.t["3E5hXj"]) : void 0,
        onKeyDown: E,
        children: g,
    });
}
function ex(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? U.intl.format(U.t.nG95hA, { endDate: n })
          : U.intl.format(U.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eP(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(m.A, {
              message: U.intl.formatToPlainString(U.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, y.$g)(7.5345 * n.amount, ep.Yr.HRK),
              }),
          })
        : null;
}
function ev() {
    let e = (0, P.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
        message: e
            ? U.intl.string(U.t.jHqrJW)
            : U.intl.format(U.t.Om31w8, { documentationLink: I.A.getArticleURL(em.MVz.LOCALIZED_PRICING) }),
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
                (0, l.jsx)(eg, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            eP({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(ev, {}),
        ],
    });
}
function eT(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: a,
            planOptions: s,
            subscriptionPeriodEnd: o,
            showTotal: u = !0,
            useCompactGiftComponents: m,
        } = e,
        {
            skuId: p,
            selectedPlan: h,
            premiumSubscription: S,
            premiumSubscriptionPlan: g,
            isEligibleForBOGOPromotion: I,
            isGift: A,
            thePriceOptions: P,
            isEligibleForTrial: T,
            giftRecipient: R,
            customGiftMessage: O,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isPlansEligibleForDiscount: k,
            discountedPlanRegularPrice: w,
            userTrialOffer: D,
            shouldShowTrialOrDiscountLayout: G,
            isPrepaid: F,
            radioGroupRef: B,
            radioGroupProps: H,
            selectedPlanPrice: W,
            shouldShowHRKEuroWarning: Y,
            shouldShowTotalInSubscriptionFlow: K,
            canContinue: Z,
            trialPeriodCopy: q,
        } = eS({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: z, applicablePlan: $, discountOffer: Q } = (0, C.t4)((e) => e.premiumDiscountInfo),
        J = (function (e) {
            let { isGift: t, giftRecipient: n, planOptions: l, location: r } = e,
                a = (0, C.t4)((e) => e.setSelectedPlanId),
                {
                    hasAppliedRecurringGiftDefaults: s,
                    setHasAppliedRecurringGiftDefaults: o,
                    setCustomGiftMessage: u,
                } = (0, f.Pv)(),
                c = (0, v.Cu)({ isGift: t, giftRecipient: n, planOptions: l }),
                d = (0, b.u)({ location: r }),
                m = c && d;
            return (
                i.useEffect(() => {
                    m &&
                        !s &&
                        (o(!0), u?.(void 0), l.includes(j.gD.PREMIUM_MONTH_TIER_2) && a(j.gD.PREMIUM_MONTH_TIER_2));
                }, [s, m, l, u, o, a]),
                m
            );
        })({ isGift: A, giftRecipient: R, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        X = (0, x.ds)(),
        { enabled: ee } = _.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        et = (0, N.M)({ isGift: A, giftRecipient: R, selectedPlanId: h?.id });
    function en() {
        return (0, l.jsx)(ey, {
            disabled: t,
            planOptions: s,
            radioGroupRef: B,
            radioGroupProps: H,
            isGift: A,
            isPrepaid: F,
            premiumSubscription: S,
            selectedPlan: h,
            thePriceOptions: P,
            shouldShowTrialOrDiscountLayout: G,
            isEligibleForTrial: T,
            isPlansEligibleForDiscount: k,
            isRecurringGiftEnabled: J,
        });
    }
    let { showFractionalPremiumBanner: el, fractionalPremiumInfo: ei } = (0, E._V)({
        premiumSubscription: S,
        selectedPlanId: n,
        planGroup: r,
        isGift: A,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (A)
        return (0, l.jsx)(eI, {
            giftRecipient: R,
            customGiftMessage: O,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isPrepaid: F,
            canContinue: Z,
            selectedPlan: h,
            selectedPlanPrice: W,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: J,
            quantityPresetsSelector:
                et && ee && null != h && null != W
                    ? (0, l.jsx)(V, { selectedPlanId: h.id, planOptions: s, unitPrice: W })
                    : null,
            showTotal: u,
            switchPlanSelectComponent: en(),
            warningComponent: eP({ shouldShowHRKEuroWarning: Y, selectedPlanPrice: W }),
        });
    let er = !(T && el && !X),
        ea = eC(g, { isEligibleForBOGOPromotion: I });
    return (0, l.jsxs)("div", {
        children: [
            el &&
                !X &&
                (0, l.jsx)(es.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? es.uA.TRIAL : void 0,
                    trialPeriod: T ? q : void 0,
                    trialEnd: T ? o : void 0,
                }),
            ea &&
                !el &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: eh.G3,
                    children: ef(g, p),
                }),
            er &&
                (function (e, t, i) {
                    if (!G)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: eh.VZ,
                            children: U.intl.string(U.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eh.Tz,
                                    children: ex(e, { subscriptionPeriodEnd: o, trialPeriodCopy: q }),
                                }),
                                (0, l.jsx)("hr", { className: eh.RA }),
                            ],
                        });
                    if (i && null != z && null != w && null != $ && n === $) {
                        let e = h?.interval === j.WT.YEAR,
                            t = (0, y.$g)(w.amount - z, w.currency),
                            n = (0, y.$g)(w.amount, w.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: eh.Tz,
                                    children: e
                                        ? U.intl.format(U.t.ofweWu, {
                                              numYears: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : U.intl.format(U.t["nG7g/E"], {
                                              numMonths: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: eh.RA }),
                            ],
                        });
                    }
                })(D, T, k),
            en(),
            e_({
                selectedPlan: h,
                selectedPlanPrice: W,
                isPrepaid: F,
                shouldShowHRKEuroWarning: Y,
                shouldShowTrialOrDiscountLayout: G,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: K,
            }),
        ],
    });
}
