n.d(t, {
    U_: () => eE,
    yq: () => eS,
    LR: () => eb,
    $p: () => eN,
    cD: () => eP,
    O8: () => ey,
    Ct: () => ex,
    RO: () => eg,
});
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    m = n(726656),
    p = n(463376),
    C = n(558620),
    h = n(281044),
    f = n(951305),
    E = n(222707),
    S = n(97352),
    y = n(45938),
    g = n(975571),
    I = n(24482),
    A = n(580630),
    P = n(881489),
    v = n(774962),
    x = n(371710),
    _ = n(163074),
    T = n(810498),
    b = n(127981),
    N = n(547902),
    j = n(202541),
    R = n(650583),
    O = n(118751),
    M = n(452027),
    L = n(403581),
    k = n(661531),
    w = n(773669),
    D = n(843170),
    U = n(105292);
function G(e) {
    let { label: t, amount: n, isDiscount: i } = e,
        r = i ? "text-feedback-positive" : "text-subtle";
    return (0, l.jsxs)(u.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "end",
        children: [
            (0, l.jsx)(d.E, { variant: "body-xs/medium", color: r, children: t }),
            (0, l.jsx)(d.E, { variant: "body-xs/medium", color: r, children: n }),
        ],
    });
}
function F(e) {
    let { plan: t, unitPrice: n, quantity: i, priceOptions: r } = e,
        a = t.interval === j.WT.YEAR,
        s = (0, I.VA)({ subscriptionPlan: t, isGift: !0, priceOptions: r }),
        o = null != s && s > n.amount ? (s - n.amount) * i : 0,
        c = (0, I.L_)({ planId: t.id, isGift: !0, priceOptions: r, subscriptionPlan: t }),
        d = (0, b.YX)(n.amount, i);
    return (0, l.jsxs)(u.B, {
        gap: 6,
        children: [
            o > 0 && null != c
                ? (0, l.jsx)(G, {
                      label: a
                          ? U.intl.formatToPlainString(D.default["0UoJ1x"], { percent: c })
                          : U.intl.formatToPlainString(D.default.b1REi6, {
                                durationCount: t.intervalCount,
                                percent: c,
                            }),
                      amount: (0, A.$g)(-o, n.currency),
                      isDiscount: !0,
                  })
                : null,
            null != d.percentOff
                ? (0, l.jsx)(G, {
                      label: U.intl.formatToPlainString(D.default.Q2nhAh, { percent: d.percentOff, giftCount: i }),
                      amount: (0, A.$g)(-d.discountAmount, n.currency),
                      isDiscount: !0,
                  })
                : null,
            (0, l.jsx)(G, {
                label: U.intl.formatToPlainString(a ? D.default.If4pX7 : D.default.W2caNQ, {
                    giftCount: i,
                    durationCount: t.intervalCount,
                }),
                amount: (0, A.$g)(d.total, n.currency),
                isDiscount: !1,
            }),
        ],
    });
}
var B = n(318824);
let H = [1, 5, 10, 20];
function W(e) {
    return H.some((t) => t === e);
}
function V(e) {
    return Number.isInteger(e) && e >= h.y0 && e <= 50;
}
function Y(e) {
    let { amount: t, currency: n, discountLabel: i, selected: r, announce: a, id: s } = e;
    return (0, l.jsxs)("div", {
        id: s,
        className: B.eg,
        "aria-live": a ? "polite" : void 0,
        children: [
            (0, l.jsx)(d.E, {
                tag: "span",
                variant: "body-sm/semibold",
                color: r ? "text-default" : "text-subtle",
                children: (0, A.$g)(t, n),
            }),
            null != i
                ? (0, l.jsx)(d.E, {
                      tag: "span",
                      variant: "body-sm/semibold",
                      color: "text-feedback-positive",
                      children: i,
                  })
                : null,
        ],
    });
}
function K(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.bG)([w.default], () => w.default.locale),
        o = (0, s.yK)([S.A], () => n.map((e) => S.A.get(e))),
        {
            quantity: c,
            setQuantity: m,
            setSelectedPlanId: p,
            checkoutPriceOptions: C,
        } = (0, h.t4)((e) => ({
            quantity: e.quantity,
            setQuantity: e.setQuantity,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
        })),
        f = !W(c) && V(c) ? c : 3,
        [E, y] = i.useState(() => (W(c) ? "preset" : "custom")),
        [g, A] = i.useState(() => String(f)),
        [P, v] = i.useState(f),
        x = i.useId(),
        _ = i.useId(),
        T = i.useId(),
        N = o
            .filter((e) => null != e && (0, b.bM)(e.id))
            .map((e) => ({
                plan: e,
                label:
                    e.interval === j.WT.YEAR
                        ? U.intl.formatToPlainString(U.t.IfYQVC, { years: e.intervalCount })
                        : U.intl.formatToPlainString(U.t.erUSmA, { months: e.intervalCount }),
                savingsPercent: (0, I.L_)({ planId: e.id, isGift: !0, priceOptions: C, subscriptionPlan: e }),
            }));
    function R(e) {
        let { total: t, percentOff: n } = (0, b.YX)(r.amount, e);
        return { total: t, discountLabel: null != n ? (0, O.l9)(a, -n / 100) : null };
    }
    let G = N.find((e) => {
            let { plan: n } = e;
            return n.id === t;
        })?.plan,
        K = R(P);
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(M.D, {
                label: U.intl.string(D.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: B.bH,
                    children: N.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            s = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: B.Ap,
                                "data-selected": s,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: B.Ts,
                                        type: "radio",
                                        name: x,
                                        value: n.id,
                                        checked: s,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: B.FC }),
                                    (0, l.jsx)(d.E, {
                                        tag: "span",
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: i,
                                    }),
                                    null != r && r > 0
                                        ? (0, l.jsx)(d.E, {
                                              tag: "span",
                                              variant: "body-sm/medium",
                                              color: "text-feedback-positive",
                                              className: B.eQ,
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
                    className: B._L,
                    children: [
                        H.map((e) => {
                            let t = "preset" === E && c === e,
                                n = U.intl.formatToPlainString(D.default["AxON/M"], { giftCount: e }),
                                i = R(e);
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: B.Jy,
                                    onClick: () => {
                                        (y("preset"), m(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: B.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(L.t, { size: "md", color: k.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: B.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "body-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(Y, {
                                                    amount: i.total,
                                                    currency: r.currency,
                                                    discountLabel: i.discountLabel,
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
                            className: B.r8,
                            "data-selected": "custom" === E,
                            onPointerUp: function () {
                                "custom" !== E && (y("custom"), m(P));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: B.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: g,
                                    "aria-labelledby": _,
                                    "aria-describedby": T,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (y("custom"), A(e), v(50), m(50));
                                            return;
                                        }
                                        A(t);
                                        let n = Number(t);
                                        V(n) && (y("custom"), v(n), m(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(g);
                                        A(String(V(e) ? e : P));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: B.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: _,
                                            tag: "span",
                                            variant: "body-md/semibold",
                                            color: "custom" === E ? "text-strong" : "text-default",
                                            children: U.intl.string(D.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(Y, {
                                            id: T,
                                            amount: K.total,
                                            currency: r.currency,
                                            discountLabel: K.discountLabel,
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
            null != G ? (0, l.jsx)(F, { plan: G, unitPrice: r, quantity: c, priceOptions: C }) : null,
        ],
    });
}
var Z = n(503698),
    q = n.n(Z),
    z = n(778712),
    $ = n(123292),
    Q = n(103557),
    J = n(966327),
    X = n(7584),
    ee = n(427262),
    et = n(390755);
function en(e) {
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
                        variant: "body-md/medium",
                        color: "text-default",
                        children: U.intl.string(U.t.xFn72s),
                    }),
                    (0, l.jsxs)("div", {
                        className: et.Nr,
                        children: [
                            (0, l.jsxs)("div", {
                                className: et.MT,
                                children: [
                                    (0, l.jsx)(J.A, { user: n, size: z._3.SIZE_24 }),
                                    (0, l.jsxs)("div", {
                                        className: et.rG,
                                        children: [
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: ee.Ay.getName(n),
                                            }),
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: ee.Ay.getUserTag(n),
                                            }),
                                        ],
                                    }),
                                    r
                                        ? (0, l.jsx)($.Q, {
                                              variant: "critical",
                                              text: U.intl.string(U.t.MhoLHy),
                                              onClick: () => s(void 0),
                                          })
                                        : (0, l.jsx)($.Q, {
                                              text: U.intl.string(U.t.RoS6FI),
                                              onClick: () => s(U.intl.string(U.t.ZkOo1U)),
                                          }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: q()(et.ob, r && et.F8),
                                children: (0, l.jsx)("div", {
                                    className: et.GM,
                                    inert: !r,
                                    children: (0, l.jsx)("div", {
                                        className: et.BK,
                                        children: (0, l.jsx)(Q.f, {
                                            label: U.intl.string(U.t.B3miE8),
                                            hideLabel: !0,
                                            value: a ?? "",
                                            onChange: (e) => s(X.Ay.translateInlineEmojiToSurrogates(e)),
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
var el = n(477421),
    ei = n(35587),
    er = n(511484),
    ea = n(735164),
    es = n(428212);
function eo(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: r,
            intervalCount: a = 1,
            isPrepaidPaymentSource: s = !1,
        } = e,
        o = (0, A.$g)(t, n),
        u = null;
    return (
        i === j.WT.YEAR
            ? (u = U.intl.format(U.t["3U719t"], { price: o }))
            : i === j.WT.MONTH && 1 === a
              ? (u = U.intl.format(U.t.NkR7BU, { price: o }))
              : i === j.WT.MONTH && a > 1 && (u = U.intl.format(U.t.CNAGg4, { price: o, intervalCount: a })),
        (0, l.jsx)("div", {
            className: q()(es.SW, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var eu = n(898697),
    ec = n(968060),
    ed = n(274076),
    em = n(738869),
    ep = n(948388),
    eC = n(652215);
n(26279);
var eh = n(818348),
    ef = n(305828);
function eE(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eS(e, t) {
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
function ey() {
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
function eg(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: m,
            activeSubscription: E,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: g, isEligibleForTrial: A, discountOffer: P } = (0, p.i)(),
        v = (0, er.YJ)(P),
        {
            isGift: x,
            giftRecipient: _,
            selectedGiftStyle: b,
            customGiftMessage: N,
            setCustomGiftMessage: j,
            claimableRewards: R,
            setSelectedGiftingPromotionRewards: O,
        } = (0, f.Pv)(),
        M = (0, C.A)(),
        L = (0, T.kz)(M, x && (0, y.Ik)(_), R);
    a()(void 0 !== E, "should not be undefined");
    let [k, w] = (0, s.yK)([S.A], () => [null != E ? S.A.get(E.planId) : null, null != t ? S.A.get(t) : null]),
        D = g?.subscriptionTrial,
        U = g?.isReferralTrial === !0,
        G = (0, ei.Sq)() && !U,
        F = w ?? M,
        B = n ?? m;
    a()(null != B, "Price option has to be set");
    let H = P?.discount?.planIds,
        W = null != P && l.some((e) => H?.includes(e)) && null != P.discount,
        V = null != v && l.includes(v) ? (0, I.y8)(v, !1, x, B) : void 0,
        Y = null != F ? F.id : void 0,
        K = null != Y && l.includes(Y);
    (i.useEffect(() => {
        if (K) return void d(Y, { shouldUpdateQuantity: !1 });
        let e = !x && null != v && l.includes(v) ? v : null;
        if (null == k || x) d(e ?? l[0]);
        else if (null != k) {
            let e = l.find((e) => e !== k.id);
            null != e && d(e);
        }
    }, [K, x, l, k, d, Y, v]),
        i.useEffect(() => {
            L && null != R && R.length > 0 && O(R);
        }, [R, O, L]));
    let { ref: Z, ...q } = (0, o._u)(),
        z = F?.id != null ? (0, I.y8)(F.id, !1, x, B) : void 0,
        { ipCountryCode: $ } = (0, el.A)(),
        Q = "HR" === $ && null != z && z.currency === eh.Yr.EUR,
        J = (0, I.J$)(B.paymentSourceId),
        X = !x && (W || (null != D && A && null != r)),
        { copy: ee } = ey();
    return {
        skuId: c,
        selectedPlan: F,
        selectedPlanPrice: z,
        premiumSubscriptionPlan: k,
        premiumSubscription: E,
        thePriceOptions: B,
        shouldShowTrialOrDiscountLayout: X,
        shouldShowHRKEuroWarning: Q,
        shouldShowTotalInSubscriptionFlow: !A && !W && K && u,
        canContinue: K,
        isPrepaid: J,
        radioGroupRef: Z,
        radioGroupProps: q,
        isGift: x,
        giftRecipient: _,
        customGiftMessage: N,
        setCustomGiftMessage: j,
        selectedGiftStyle: b,
        isEligibleForBOGOPromotion: G,
        isEligibleForTrial: A,
        userTrialOffer: g,
        trialPeriodCopy: ee,
        isPlansEligibleForDiscount: W,
        discountedPlanRegularPrice: V,
    };
}
function eI(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: ef.T }),
            (0, l.jsx)(ea.Sd, {
                label: U.intl.string(U.t.txajQG),
                value: (0, l.jsx)(eo, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: ef.M3,
            }),
        ],
    });
}
function eA(e) {
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
            quantityPresetsSelector: C,
            showTotal: h,
            switchPlanSelectComponent: E,
            warningComponent: S,
        } = e,
        { hasAppliedRecurringGiftDefaults: g } = (0, f.Pv)();
    function I(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: U.intl.string(U.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return null != C
        ? (0, l.jsxs)(l.Fragment, { children: [C, S] })
        : (0, y.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: ef.mh,
                children: [
                    (0, l.jsx)("div", { className: ef.MU, children: null != r && (0, l.jsx)(ed.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: ef.Tc,
                        children: [
                            p && null != t && null != i
                                ? (0, l.jsx)(en, {
                                      className: m ? ef.KW : ef.xp,
                                      giftRecipient: t,
                                      isMessageAttached: g && null != n,
                                      customGiftMessage: n,
                                      setCustomGiftMessage: i,
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(ep.Z, { className: m ? ef.KW : void 0, giftRecipient: t }),
                                          (function () {
                                              if ((0, y.lo)(t) === y.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                                  return (0, l.jsx)(ec.A, {
                                                      className: ef.iX,
                                                      innerClassName: ef.pt,
                                                      onTextChange: (e) => i(e),
                                                      pendingText: n,
                                                      currentText: n,
                                                  });
                                          })(),
                                      ],
                                  }),
                            I(E),
                            S,
                        ],
                    }),
                ],
            })
          : (0, l.jsxs)("div", {
                className: ef.Du,
                children: [
                    (0, l.jsx)(ep.Z, { className: m ? ef.KW : void 0, giftRecipient: t }),
                    I(E),
                    s &&
                        h &&
                        null != o &&
                        null != d &&
                        (0, l.jsx)(eI, { selectedPlan: o, selectedPlanPrice: d, intervalType: null, isPrepaid: a }),
                    S,
                ],
            });
}
function eP(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === j.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [j.gD.PREMIUM_YEAR_TIER_0, j.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function ev(e) {
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
        { currentPremiumSubscriptionForCheckout: p } = (0, h.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        { onKeyDown: C, ...f } = s,
        E = i.useCallback(
            (e) => {
                var t;
                if (!m) return void C(e);
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
            [m, C],
        ),
        S = i.useMemo(() => (m ? (0, x.RG)(n) : n), [m, n]),
        y = i.useMemo(
            () =>
                S.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = eP(p, n);
                    return (0, l.jsx)(
                        em.Ay,
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
        children: y,
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
function e_(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(m.A, {
              message: U.intl.formatToPlainString(U.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, A.$g)(7.5345 * n.amount, eh.Yr.HRK),
              }),
          })
        : null;
}
function eT() {
    let e = (0, v.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
        message: e
            ? U.intl.string(U.t.jHqrJW)
            : U.intl.format(U.t.Om31w8, { documentationLink: g.A.getArticleURL(eC.MVz.LOCALIZED_PRICING) }),
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
                (0, l.jsx)(eI, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            e_({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(eT, {}),
        ],
    });
}
function eN(e) {
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
            selectedPlan: C,
            premiumSubscription: S,
            premiumSubscriptionPlan: y,
            isEligibleForBOGOPromotion: g,
            isGift: I,
            thePriceOptions: v,
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
            shouldShowHRKEuroWarning: V,
            shouldShowTotalInSubscriptionFlow: Y,
            canContinue: Z,
            trialPeriodCopy: q,
        } = eg({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: z, applicablePlan: $, discountOffer: Q } = (0, h.t4)((e) => e.premiumDiscountInfo),
        J = (function (e) {
            let { isGift: t, giftRecipient: n, planOptions: l, location: r } = e,
                a = (0, h.t4)((e) => e.setSelectedPlanId),
                {
                    hasAppliedRecurringGiftDefaults: s,
                    setHasAppliedRecurringGiftDefaults: o,
                    setCustomGiftMessage: u,
                } = (0, f.Pv)(),
                c = (0, x.Cu)({ isGift: t, giftRecipient: n, planOptions: l }),
                d = (0, N.u)({ location: r }),
                m = c && d;
            return (
                i.useEffect(() => {
                    m &&
                        !s &&
                        (o(!0), u?.(void 0), l.includes(j.gD.PREMIUM_MONTH_TIER_2) && a(j.gD.PREMIUM_MONTH_TIER_2));
                }, [s, m, l, u, o, a]),
                m
            );
        })({ isGift: I, giftRecipient: R, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        X = (0, P.ds)(),
        { enabled: ee } = _.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        et = (0, b.MW)({ isGift: I, giftRecipient: R, selectedPlanId: C?.id });
    function en() {
        return (0, l.jsx)(ev, {
            disabled: t,
            planOptions: s,
            radioGroupRef: B,
            radioGroupProps: H,
            isGift: I,
            isPrepaid: F,
            premiumSubscription: S,
            selectedPlan: C,
            thePriceOptions: v,
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
        isGift: I,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (I)
        return (0, l.jsx)(eA, {
            giftRecipient: R,
            customGiftMessage: O,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isPrepaid: F,
            canContinue: Z,
            selectedPlan: C,
            selectedPlanPrice: W,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: J,
            quantityPresetsSelector:
                et && ee && null != C && null != W
                    ? (0, l.jsx)(K, { selectedPlanId: C.id, planOptions: s, unitPrice: W })
                    : null,
            showTotal: u,
            switchPlanSelectComponent: en(),
            warningComponent: e_({ shouldShowHRKEuroWarning: V, selectedPlanPrice: W }),
        });
    let er = !(T && el && !X),
        ea = eE(y, { isEligibleForBOGOPromotion: g });
    return (0, l.jsxs)("div", {
        children: [
            el &&
                !X &&
                (0, l.jsx)(eu.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? eu.uA.TRIAL : void 0,
                    trialPeriod: T ? q : void 0,
                    trialEnd: T ? o : void 0,
                }),
            ea &&
                !el &&
                (0, l.jsx)(d.E, {
                    variant: "body-md/medium",
                    color: "interactive-text-default",
                    className: ef.G3,
                    children: eS(y, p),
                }),
            er &&
                (function (e, t, i) {
                    if (!G)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: ef.VZ,
                            children: U.intl.string(U.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: ef.Tz,
                                    children: ex(e, { subscriptionPeriodEnd: o, trialPeriodCopy: q }),
                                }),
                                (0, l.jsx)("hr", { className: ef.RA }),
                            ],
                        });
                    if (i && null != z && null != w && null != $ && n === $) {
                        let e = C?.interval === j.WT.YEAR,
                            t = (0, A.$g)(w.amount - z, w.currency),
                            n = (0, A.$g)(w.amount, w.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: ef.Tz,
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
                                (0, l.jsx)("hr", { className: ef.RA }),
                            ],
                        });
                    }
                })(D, T, k),
            en(),
            eb({
                selectedPlan: C,
                selectedPlanPrice: W,
                isPrepaid: F,
                shouldShowHRKEuroWarning: V,
                shouldShowTrialOrDiscountLayout: G,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: Y,
            }),
        ],
    });
}
