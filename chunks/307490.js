n.d(t, {
    U_: () => eS,
    yq: () => eg,
    LR: () => eN,
    $p: () => ej,
    cD: () => ev,
    O8: () => ey,
    Ct: () => e_,
    RO: () => eI,
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
    h = n(298208),
    f = n(951305),
    E = n(222707),
    S = n(97352),
    g = n(45938),
    y = n(975571),
    I = n(24482),
    A = n(580630),
    P = n(881489),
    v = n(774962),
    x = n(371710),
    _ = n(163074),
    T = n(810498),
    b = n(127981),
    N = n(841907),
    j = n(547902),
    R = n(202541),
    O = n(650583),
    M = n(118751),
    L = n(452027),
    k = n(403581),
    w = n(661531),
    D = n(773669),
    U = n(843170),
    G = n(105292);
function F(e) {
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
function B(e) {
    let { plan: t, unitPrice: n, quantity: i, priceOptions: r } = e,
        a = t.interval === R.WT.YEAR,
        s = (0, I.VA)({ subscriptionPlan: t, isGift: !0, priceOptions: r }),
        o = null != s && s > n.amount ? (s - n.amount) * i : 0,
        c = (0, I.L_)({ planId: t.id, isGift: !0, priceOptions: r, subscriptionPlan: t }),
        d = (0, b.YX)(n.amount, i);
    return (0, l.jsxs)(u.B, {
        gap: 6,
        children: [
            o > 0 && null != c
                ? (0, l.jsx)(F, {
                      label: a
                          ? G.intl.formatToPlainString(U.default["0UoJ1x"], { percent: c })
                          : G.intl.formatToPlainString(U.default.b1REi6, {
                                durationCount: t.intervalCount,
                                percent: c,
                            }),
                      amount: (0, A.$g)(-o, n.currency),
                      isDiscount: !0,
                  })
                : null,
            null != d.percentOff
                ? (0, l.jsx)(F, {
                      label: G.intl.formatToPlainString(U.default.Q2nhAh, { percent: d.percentOff, giftCount: i }),
                      amount: (0, A.$g)(-d.discountAmount, n.currency),
                      isDiscount: !0,
                  })
                : null,
            (0, l.jsx)(F, {
                label: G.intl.formatToPlainString(a ? U.default.If4pX7 : U.default.W2caNQ, {
                    giftCount: i,
                    durationCount: t.intervalCount,
                }),
                amount: (0, A.$g)(d.total, n.currency),
                isDiscount: !1,
            }),
        ],
    });
}
var H = n(318824);
let W = [1, 5, 10, 20];
function V(e) {
    return W.some((t) => t === e);
}
function Y(e) {
    return Number.isInteger(e) && e >= h.y0 && e <= 50;
}
function K(e) {
    let { amount: t, currency: n, discountLabel: i, selected: r, announce: a, id: s } = e;
    return (0, l.jsxs)("div", {
        id: s,
        className: H.eg,
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
function Z(e) {
    let { selectedPlanId: t, planOptions: n, unitPrice: r } = e,
        a = (0, s.bG)([D.default], () => D.default.locale),
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
        f = !V(c) && Y(c) ? c : 3,
        [E, g] = i.useState(() => (V(c) ? "preset" : "custom")),
        [y, A] = i.useState(() => String(f)),
        [P, v] = i.useState(f),
        x = i.useId(),
        _ = i.useId(),
        T = i.useId(),
        N = o
            .filter((e) => null != e && (0, b.bM)(e.id))
            .map((e) => ({
                plan: e,
                label:
                    e.interval === R.WT.YEAR
                        ? G.intl.formatToPlainString(G.t.IfYQVC, { years: e.intervalCount })
                        : G.intl.formatToPlainString(G.t.erUSmA, { months: e.intervalCount }),
                savingsPercent: (0, I.L_)({ planId: e.id, isGift: !0, priceOptions: C, subscriptionPlan: e }),
            }));
    function j(e) {
        let { total: t, percentOff: n } = (0, b.YX)(r.amount, e);
        return { total: t, discountLabel: null != n ? (0, M.l9)(a, -n / 100) : null };
    }
    let O = N.find((e) => {
            let { plan: n } = e;
            return n.id === t;
        })?.plan,
        F = j(P);
    return (0, l.jsxs)(u.B, {
        gap: 24,
        padding: { bottom: 12 },
        children: [
            (0, l.jsx)(L.D, {
                label: G.intl.string(U.default.UWycjR),
                role: "radiogroup",
                children: (0, l.jsx)("div", {
                    className: H.bH,
                    children: N.map((e) => {
                        let { plan: n, label: i, savingsPercent: r } = e,
                            s = n.id === t;
                        return (0, l.jsxs)(
                            "label",
                            {
                                className: H.Ap,
                                "data-selected": s,
                                children: [
                                    (0, l.jsx)("input", {
                                        className: H.Ts,
                                        type: "radio",
                                        name: x,
                                        value: n.id,
                                        checked: s,
                                        onChange: () => {
                                            n.id !== t && p(n.id, { shouldUpdateQuantity: !1 });
                                        },
                                    }),
                                    (0, l.jsx)("span", { "aria-hidden": "true", className: H.FC }),
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
                                              className: H.eQ,
                                              children: (0, M.l9)(a, -r / 100),
                                          })
                                        : null,
                                ],
                            },
                            n.id,
                        );
                    }),
                }),
            }),
            (0, l.jsx)(L.D, {
                label: G.intl.string(U.default.H3pTAa),
                role: "group",
                children: (0, l.jsxs)("div", {
                    className: H._L,
                    children: [
                        W.map((e) => {
                            let t = "preset" === E && c === e,
                                n = G.intl.formatToPlainString(U.default["AxON/M"], { giftCount: e }),
                                i = j(e);
                            return (0, l.jsxs)(
                                "button",
                                {
                                    type: "button",
                                    "aria-pressed": t,
                                    className: H.Jy,
                                    onClick: () => {
                                        (g("preset"), m(e));
                                    },
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: H.E6,
                                            "aria-hidden": "true",
                                            children: (0, l.jsx)(k.t, { size: "md", color: w.A.colors.ICON_STRONG }),
                                        }),
                                        (0, l.jsxs)(u.B, {
                                            gap: 4,
                                            fullWidth: !1,
                                            className: H.Ng,
                                            children: [
                                                (0, l.jsx)(d.E, {
                                                    tag: "span",
                                                    variant: "body-md/semibold",
                                                    color: t ? "text-strong" : "text-default",
                                                    children: n,
                                                }),
                                                (0, l.jsx)(K, {
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
                            className: H.r8,
                            "data-selected": "custom" === E,
                            onPointerUp: function () {
                                "custom" !== E && (g("custom"), m(P));
                            },
                            children: [
                                (0, l.jsx)("input", {
                                    className: H.Wb,
                                    type: "text",
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: String(50).length,
                                    value: y,
                                    "aria-labelledby": _,
                                    "aria-describedby": T,
                                    onChange: function (e) {
                                        let t = e.currentTarget.value;
                                        if (!/^\d*$/.test(t)) return;
                                        if ("" !== t && Number(t) > 50) {
                                            let e = String(50);
                                            (g("custom"), A(e), v(50), m(50));
                                            return;
                                        }
                                        A(t);
                                        let n = Number(t);
                                        Y(n) && (g("custom"), v(n), m(n));
                                    },
                                    onBlur: function () {
                                        let e = Number(y);
                                        A(String(Y(e) ? e : P));
                                    },
                                }),
                                (0, l.jsxs)(u.B, {
                                    gap: 4,
                                    fullWidth: !1,
                                    className: H.Ng,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            id: _,
                                            tag: "span",
                                            variant: "body-md/semibold",
                                            color: "custom" === E ? "text-strong" : "text-default",
                                            children: G.intl.string(U.default.jhNRIe),
                                        }),
                                        (0, l.jsx)(K, {
                                            id: T,
                                            amount: F.total,
                                            currency: r.currency,
                                            discountLabel: F.discountLabel,
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
            null != O ? (0, l.jsx)(B, { plan: O, unitPrice: r, quantity: c, priceOptions: C }) : null,
        ],
    });
}
var q = n(503698),
    z = n.n(q),
    $ = n(778712),
    Q = n(123292),
    J = n(103557),
    X = n(966327),
    ee = n(7584),
    et = n(427262),
    en = n(390755);
function el(e) {
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
                        children: G.intl.string(G.t.xFn72s),
                    }),
                    (0, l.jsxs)("div", {
                        className: en.Nr,
                        children: [
                            (0, l.jsxs)("div", {
                                className: en.MT,
                                children: [
                                    (0, l.jsx)(X.A, { user: n, size: $._3.SIZE_24 }),
                                    (0, l.jsxs)("div", {
                                        className: en.rG,
                                        children: [
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-default",
                                                lineClamp: 1,
                                                children: et.Ay.getName(n),
                                            }),
                                            (0, l.jsx)(d.E, {
                                                variant: "body-md/medium",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: et.Ay.getUserTag(n),
                                            }),
                                        ],
                                    }),
                                    r
                                        ? (0, l.jsx)(Q.Q, {
                                              variant: "critical",
                                              text: G.intl.string(G.t.MhoLHy),
                                              onClick: () => s(void 0),
                                          })
                                        : (0, l.jsx)(Q.Q, {
                                              text: G.intl.string(G.t.RoS6FI),
                                              onClick: () => s(G.intl.string(G.t.ZkOo1U)),
                                          }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: z()(en.ob, r && en.F8),
                                children: (0, l.jsx)("div", {
                                    className: en.GM,
                                    inert: !r,
                                    children: (0, l.jsx)("div", {
                                        className: en.BK,
                                        children: (0, l.jsx)(J.f, {
                                            label: G.intl.string(G.t.B3miE8),
                                            hideLabel: !0,
                                            value: a ?? "",
                                            onChange: (e) => s(ee.Ay.translateInlineEmojiToSurrogates(e)),
                                            maxLength: R.Jo,
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
var ei = n(477421),
    er = n(35587),
    ea = n(511484),
    es = n(735164),
    eo = n(428212);
function eu(e) {
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
        i === R.WT.YEAR
            ? (u = G.intl.format(G.t["3U719t"], { price: o }))
            : i === R.WT.MONTH && 1 === a
              ? (u = G.intl.format(G.t.NkR7BU, { price: o }))
              : i === R.WT.MONTH && a > 1 && (u = G.intl.format(G.t.CNAGg4, { price: o, intervalCount: a })),
        (0, l.jsx)("div", {
            className: z()(eo.SW, r),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || s ? (0, l.jsx)("strong", { children: o }) : u,
        })
    );
}
var ec = n(898697),
    ed = n(968060),
    em = n(274076),
    ep = n(738869),
    eC = n(948388),
    eh = n(652215);
n(26279);
var ef = n(818348),
    eE = n(305828);
function eS(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function eg(e, t) {
    let n = G.intl.string(G.t.BYa62u),
        l = G.intl.string(G.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case R.WT.YEAR:
                    return n;
                case R.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case R.pe.TIER_0:
            switch (r) {
                case R.pe.TIER_1:
                    return G.intl.string(G.t.q6mxDS);
                case R.pe.TIER_2:
                    return G.intl.string(G.t.seZVS0);
                default:
                    return i;
            }
        case R.pe.TIER_1:
            switch (r) {
                case R.pe.TIER_0:
                    return G.intl.string(G.t["7+u2zg"]);
                case R.pe.TIER_2:
                    return G.intl.string(G.t.NG2qcc);
                default:
                    return i;
            }
        case R.pe.TIER_2:
            switch (r) {
                case R.pe.TIER_0:
                case R.pe.TIER_1:
                    return G.intl.string(G.t["eB0/w9"]);
                case R.pe.TIER_2:
                    return e.interval === R.WT.MONTH
                        ? G.intl.formatToPlainString(G.t.RqUv86, { numFreeGuildSubscriptions: R.M4 })
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
                t?.interval === R.WT.DAY
                    ? t?.intervalCount > 7
                        ? { daysCount: 14, copy: G.intl.string(G.t.Z1V2cs) }
                        : { daysCount: 7, copy: G.intl.string(G.t.MI1rHs) }
                    : { daysCount: 30, copy: G.intl.string(G.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function eI(e) {
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
        { userTrialOffer: y, isEligibleForTrial: A, discountOffer: P } = (0, p.i)(),
        v = (0, ea.YJ)(P),
        {
            isGift: x,
            giftRecipient: _,
            selectedGiftStyle: b,
            customGiftMessage: j,
            setCustomGiftMessage: R,
            claimableRewards: O,
            setSelectedGiftingPromotionRewards: M,
        } = (0, f.Pv)(),
        L = (0, C.A)(),
        k = (0, h.t4)((e) => e.getIsRecurringGiftCheckout());
    (0, N.r)(k);
    let w = (0, T.kz)(L, x && !k && (0, g.Ik)(_), O);
    a()(void 0 !== E, "should not be undefined");
    let [D, U] = (0, s.yK)([S.A], () => [null != E ? S.A.get(E.planId) : null, null != t ? S.A.get(t) : null]),
        G = y?.subscriptionTrial,
        F = y?.isReferralTrial === !0,
        B = (0, er.Sq)() && !F,
        H = U ?? L,
        W = n ?? m;
    a()(null != W, "Price option has to be set");
    let V = P?.discount?.planIds,
        Y = null != P && l.some((e) => V?.includes(e)) && null != P.discount,
        K = null != v && l.includes(v) ? (0, I.y8)(v, !1, x, W) : void 0,
        Z = null != H ? H.id : void 0,
        q = null != Z && l.includes(Z);
    (i.useEffect(() => {
        if (q) return void d(Z, { shouldUpdateQuantity: !1 });
        let e = !x && null != v && l.includes(v) ? v : null;
        if (null == D || x) d(e ?? l[0]);
        else if (null != D) {
            let e = l.find((e) => e !== D.id);
            null != e && d(e);
        }
    }, [q, x, l, D, d, Z, v]),
        i.useEffect(() => {
            w && null != O && O.length > 0 && M(O);
        }, [O, M, w]));
    let { ref: z, ...$ } = (0, o._u)(),
        Q = H?.id != null ? (0, I.y8)(H.id, !1, x, W) : void 0,
        { ipCountryCode: J } = (0, ei.A)(),
        X = "HR" === J && null != Q && Q.currency === ef.Yr.EUR,
        ee = (0, I.J$)(W.paymentSourceId),
        et = !x && (Y || (null != G && A && null != r)),
        { copy: en } = ey();
    return {
        skuId: c,
        selectedPlan: H,
        selectedPlanPrice: Q,
        premiumSubscriptionPlan: D,
        premiumSubscription: E,
        thePriceOptions: W,
        shouldShowTrialOrDiscountLayout: et,
        shouldShowHRKEuroWarning: X,
        shouldShowTotalInSubscriptionFlow: !A && !Y && q && u,
        canContinue: q,
        isPrepaid: ee,
        radioGroupRef: z,
        radioGroupProps: $,
        isGift: x,
        giftRecipient: _,
        customGiftMessage: j,
        setCustomGiftMessage: R,
        selectedGiftStyle: b,
        isEligibleForBOGOPromotion: B,
        isEligibleForTrial: A,
        userTrialOffer: y,
        trialPeriodCopy: en,
        isPlansEligibleForDiscount: Y,
        discountedPlanRegularPrice: K,
    };
}
function eA(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: eE.T }),
            (0, l.jsx)(es.Sd, {
                label: G.intl.string(G.t.txajQG),
                value: (0, l.jsx)(eu, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: eE.M3,
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
            isPrepaid: a,
            canContinue: s,
            selectedPlan: o,
            selectedPlanPrice: d,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: p,
            quantityPresetsSelector: C,
            showTotal: f,
            switchPlanSelectComponent: E,
            warningComponent: S,
        } = e,
        y = (0, h.t4)((e) => e.hasAppliedRecurringGiftDefaults);
    function I(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: G.intl.string(G.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return null != C
        ? (0, l.jsxs)(l.Fragment, { children: [C, S] })
        : (0, g.Ik)(t)
          ? (0, l.jsxs)("div", {
                className: eE.mh,
                children: [
                    (0, l.jsx)("div", { className: eE.MU, children: null != r && (0, l.jsx)(em.t, {}) }),
                    (0, l.jsxs)("div", {
                        className: eE.Tc,
                        children: [
                            p && null != t && null != i
                                ? (0, l.jsx)(el, {
                                      className: m ? eE.KW : eE.xp,
                                      giftRecipient: t,
                                      isMessageAttached: y && null != n,
                                      customGiftMessage: n,
                                      setCustomGiftMessage: i,
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(eC.Z, { className: m ? eE.KW : void 0, giftRecipient: t }),
                                          (function () {
                                              if ((0, g.lo)(t) === g.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                                  return (0, l.jsx)(ed.A, {
                                                      className: eE.iX,
                                                      innerClassName: eE.pt,
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
                className: eE.Du,
                children: [
                    (0, l.jsx)(eC.Z, { className: m ? eE.KW : void 0, giftRecipient: t }),
                    I(E),
                    s &&
                        f &&
                        null != o &&
                        null != d &&
                        (0, l.jsx)(eA, { selectedPlan: o, selectedPlanPrice: d, intervalType: null, isPrepaid: a }),
                    S,
                ],
            });
}
function ev(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === R.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [R.gD.PREMIUM_YEAR_TIER_0, R.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
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
                    (t = e.key) === O.dh.ARROW_DOWN || t === O.dh.ARROW_RIGHT
                        ? 1
                        : t === O.dh.ARROW_UP || t === O.dh.ARROW_LEFT
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
        g = i.useMemo(
            () =>
                S.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = ev(p, n);
                    return (0, l.jsx)(
                        ep.Ay,
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
        "aria-label": m ? G.intl.string(G.t["3E5hXj"]) : void 0,
        onKeyDown: E,
        children: g,
    });
}
function e_(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.isReferralTrial === !0;
    return null == n
        ? null
        : i
          ? G.intl.format(G.t.nG95hA, { endDate: n })
          : G.intl.format(G.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eT(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(m.A, {
              message: G.intl.formatToPlainString(G.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, A.$g)(7.5345 * n.amount, ef.Yr.HRK),
              }),
          })
        : null;
}
function eb() {
    let e = (0, v.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(m.A, {
        message: e
            ? G.intl.string(G.t.jHqrJW)
            : G.intl.format(G.t.Om31w8, { documentationLink: y.A.getArticleURL(eh.MVz.LOCALIZED_PRICING) }),
    });
}
function eN(e) {
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
            eT({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(eb, {}),
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
            useCompactGiftComponents: m,
        } = e,
        {
            skuId: p,
            selectedPlan: C,
            premiumSubscription: S,
            premiumSubscriptionPlan: g,
            isEligibleForBOGOPromotion: y,
            isGift: I,
            thePriceOptions: v,
            isEligibleForTrial: T,
            giftRecipient: N,
            customGiftMessage: O,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isPlansEligibleForDiscount: k,
            discountedPlanRegularPrice: w,
            userTrialOffer: D,
            shouldShowTrialOrDiscountLayout: U,
            isPrepaid: F,
            radioGroupRef: B,
            radioGroupProps: H,
            selectedPlanPrice: W,
            shouldShowHRKEuroWarning: V,
            shouldShowTotalInSubscriptionFlow: Y,
            canContinue: K,
            trialPeriodCopy: q,
        } = eI({ selectedPlanId: n, priceOptions: a, planOptions: s, subscriptionPeriodEnd: o, showTotal: u }),
        { discountAmountOff: z, applicablePlan: $, discountOffer: Q } = (0, h.t4)((e) => e.premiumDiscountInfo),
        J = (function (e) {
            let { isGift: t, giftRecipient: n, planOptions: l, location: r } = e,
                {
                    setSelectedPlanId: a,
                    hasAppliedRecurringGiftDefaults: s,
                    setHasAppliedRecurringGiftDefaults: o,
                } = (0, h.t4)((e) => ({
                    setSelectedPlanId: e.setSelectedPlanId,
                    hasAppliedRecurringGiftDefaults: e.hasAppliedRecurringGiftDefaults,
                    setHasAppliedRecurringGiftDefaults: e.setHasAppliedRecurringGiftDefaults,
                })),
                { setCustomGiftMessage: u } = (0, f.Pv)(),
                c = (0, x.Cu)({ isGift: t, giftRecipient: n, planOptions: l }),
                d = (0, j.u)({ location: r }),
                m = c && d;
            return (
                i.useEffect(() => {
                    m &&
                        !s &&
                        (o(!0), u?.(void 0), l.includes(R.gD.PREMIUM_MONTH_TIER_2) && a(R.gD.PREMIUM_MONTH_TIER_2));
                }, [s, m, l, u, o, a]),
                m
            );
        })({ isGift: I, giftRecipient: N, planOptions: s, location: "PremiumSwitchPlanSelectBody" }),
        X = (0, P.ds)(),
        { enabled: ee } = _.A.useConfig({ location: "PremiumSwitchPlanSelectBody" }),
        et = (0, b.MW)({ isGift: I, giftRecipient: N, selectedPlanId: C?.id });
    function en() {
        return (0, l.jsx)(ex, {
            disabled: t,
            planOptions: s,
            radioGroupRef: B,
            radioGroupProps: H,
            isGift: I,
            isPrepaid: F,
            premiumSubscription: S,
            selectedPlan: C,
            thePriceOptions: v,
            shouldShowTrialOrDiscountLayout: U,
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
        return (0, l.jsx)(eP, {
            giftRecipient: N,
            customGiftMessage: O,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isPrepaid: F,
            canContinue: K,
            selectedPlan: C,
            selectedPlanPrice: W,
            useCompactGiftComponents: m,
            isRecurringGiftEnabled: J,
            quantityPresetsSelector:
                et && ee && null != C && null != W
                    ? (0, l.jsx)(Z, { selectedPlanId: C.id, planOptions: s, unitPrice: W })
                    : null,
            showTotal: u,
            switchPlanSelectComponent: en(),
            warningComponent: eT({ shouldShowHRKEuroWarning: V, selectedPlanPrice: W }),
        });
    let er = !(T && el && !X),
        ea = eS(g, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            el &&
                !X &&
                (0, l.jsx)(ec.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? ec.uA.TRIAL : void 0,
                    trialPeriod: T ? q : void 0,
                    trialEnd: T ? o : void 0,
                }),
            ea &&
                !el &&
                (0, l.jsx)(d.E, {
                    variant: "body-md/medium",
                    color: "interactive-text-default",
                    className: eE.G3,
                    children: eg(g, p),
                }),
            er &&
                (function (e, t, i) {
                    if (!U)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: eE.VZ,
                            children: G.intl.string(G.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: eE.Tz,
                                    children: e_(e, { subscriptionPeriodEnd: o, trialPeriodCopy: q }),
                                }),
                                (0, l.jsx)("hr", { className: eE.RA }),
                            ],
                        });
                    if (i && null != z && null != w && null != $ && n === $) {
                        let e = C?.interval === R.WT.YEAR,
                            t = (0, A.$g)(w.amount - z, w.currency),
                            n = (0, A.$g)(w.amount, w.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    className: eE.Tz,
                                    children: e
                                        ? G.intl.format(G.t.ofweWu, {
                                              numYears: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : G.intl.format(G.t["nG7g/E"], {
                                              numMonths: Q?.discount.intervalCount ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: eE.RA }),
                            ],
                        });
                    }
                })(D, T, k),
            en(),
            eN({
                selectedPlan: C,
                selectedPlanPrice: W,
                isPrepaid: F,
                shouldShowHRKEuroWarning: V,
                shouldShowTrialOrDiscountLayout: U,
                showTotal: u,
                shouldShowTotalInSubscriptionFlow: Y,
            }),
        ],
    });
}
