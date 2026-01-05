n.d(t, {
    O: () => Q,
    y: () => X,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(490504),
    d = n(911969),
    f = n(975298),
    p = n(940824),
    _ = n(987209),
    m = n(563132),
    h = n(409813),
    g = n(602733),
    E = n(509545),
    b = n(78839),
    y = n(669079),
    O = n(63063),
    v = n(74538),
    S = n(937615),
    I = n(296848),
    T = n(711459),
    C = n(367074),
    A = n(717401),
    N = n(847903),
    P = n(811334),
    R = n(553797),
    w = n(346071),
    D = n(927699),
    x = n(987716),
    L = n(311821),
    j = n(459965),
    M = n(971616),
    k = n(251660),
    U = n(474936),
    G = n(981631),
    Z = n(231338),
    F = n(388032),
    B = n(214674);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function q(e, t) {
    let n = F.intl.string(F.t.BYa62u),
        r = F.intl.string(F.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case U.rV.YEAR:
                    return n;
                case U.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case U.Si.TIER_0:
            switch (a) {
                case U.Si.TIER_1:
                    return F.intl.string(F.t.q6mxDS);
                case U.Si.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case U.Si.TIER_1:
            switch (a) {
                case U.Si.TIER_0:
                    return F.intl.string(F.t["7+u2zg"]);
                case U.Si.TIER_2:
                    return F.intl.string(F.t.NG2qcc);
                default:
                    return i;
            }
        case U.Si.TIER_2:
            switch (a) {
                case U.Si.TIER_0:
                case U.Si.TIER_1:
                    return F.intl.string(F.t["eB0/w9"]);
                case U.Si.TIER_2:
                    return e.interval === U.rV.MONTH
                        ? F.intl.formatToPlainString(F.t.RqUv86, { numFreeGuildSubscriptions: U.cb })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function Q(e) {
    var t, n, a, h;
    let {
            premiumSubscription: b,
            skuId: L,
            selectedPlanId: j,
            setSelectedPlanId: V,
            planGroup: Y,
            priceOptions: z,
            planOptions: Q,
            eligibleForMultiMonthPlans: X,
            subscriptionPeriodEnd: J,
            showTotal: $ = !0,
            discountInvoiceItems: ee,
            useCompactGiftComponents: et,
            handleClose: en,
        } = e,
        {
            activeSubscription: er,
            setSelectedPlanId: ei,
            selectedSkuId: ea,
            selectedPlan: eo,
            priceOptions: es,
            enablePremiumBrandRefresh: el,
            userTrialOffer: ec,
            isEligibleForTrial: eu,
            discountOffer: ed,
        } = (0, m.JL)(),
        {
            isGift: ef,
            giftRecipient: ep,
            selectedGiftStyle: e_,
            customGiftMessage: em,
            setCustomGiftMessage: eh,
            claimableRewards: eg,
            setSelectedGiftingPromotionReward: eE,
        } = (0, _.wD)(),
        eb = (0, A.cF)(eo, ef && (0, y.pO)(ep), eg),
        ey = (0, g.ao)({
            location: "PremiumPlanSelectStep",
            giftRecipient: ep,
            isGift: ef,
        });
    (L = null != L ? L : ea), (b = null != b ? b : er), o()(void 0 !== b, "should not be undefined");
    let [eO, ev] = (0, s.Wu)([E.Z], () => [null != b ? E.Z.get(b.planId) : null, null != j ? E.Z.get(j) : null]),
        eS = null == ec ? void 0 : ec.subscription_trial,
        eI = (0, C.Vi)(),
        eT = null != ev ? ev : eo,
        eC = i.useCallback(
            (e) => {
                null != V ? V(e) : ei(e);
            },
            [V, ei],
        ),
        eA = null != z ? z : es;
    o()(null != eA, "Price option has to be set");
    let eN = (0, f.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        eP = null == ed || null == (t = ed.discount) ? void 0 : t.plan_ids,
        eR = null != ed && Q.some((e) => (null == eP ? void 0 : eP.includes(e))) && null != ed.discount,
        ew = (0, v.aS)(U.Xh.PREMIUM_MONTH_TIER_2, !1, ef, eA);
    i.useEffect(() => {
        X && T.ZP.trackExposure({ location: "5f89bb_1" });
    }, [X]);
    let eD = (null == eT ? void 0 : eT.id) != null && Q.includes(eT.id);
    i.useEffect(() => {
        if (!eD) {
            if (null == eO || ef) eC(Q[0]);
            else if (null != eO) {
                let e = Q.find((e) => e !== eO.id);
                null != e && eC(e);
            }
        }
    }, [eD, ef, Q, eO, eC]),
        i.useEffect(() => {
            eb && null != eg && eg.length > 0 && eE(eg[0]);
        }, [eg, eE, eb]);
    let ex = (0, l.Jb)(),
        { ref: eL } = ex,
        ej = K(ex, ["ref"]),
        eM = (null == eT ? void 0 : eT.id) != null ? (0, v.aS)(eT.id, !1, ef, eA) : void 0,
        { ipCountryCode: ek } = (0, N.Z)(),
        eU = "HR" === ek && null != eM && eM.currency === Z.pK.EUR,
        eG = (0, v.Ap)(eA.paymentSourceId),
        eZ = i.useMemo(
            () =>
                (null == eS ? void 0 : eS.interval) === U.rV.DAY
                    ? (null == eS ? void 0 : eS.interval_count) > 7
                        ? F.intl.string(F.t.Z1V2cs)
                        : F.intl.string(F.t.MI1rHs)
                    : F.intl.string(F.t["+S5lrV"]),
            [eS],
        ),
        eF = !ef && (eR || (null != eS && eu && null != J)),
        eB =
            null == ee ||
            null == (h = ee.find((e) => e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_TIER_2)) ||
            null == (a = h.discounts) ||
            null == (n = a.find((e) => e.type === d.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : n.amount,
        eV = (e, t, n) => {
            if (!eF)
                return (0, r.jsx)("div", {
                    className: B.selectPlanChooseTitle,
                    children: F.intl.string(F.t.a19jpU),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === U.a7;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children: t
                                ? F.intl.format(F.t.nG95hA, { endDate: J })
                                : F.intl.format(F.t.s4E7kb, {
                                      trialEnd: J,
                                      trialPeriod: eZ,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: B.planSelectSeparator }),
                    ],
                });
            }
            if (n && null != eB && null != ew && j === U.Xh.PREMIUM_MONTH_TIER_2) {
                var i;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children: F.intl.format(F.t["nG7g/E"], {
                                numMonths: null != (i = null == ed ? void 0 : ed.discount.user_usage_limit) ? i : "",
                                discountedPrice: (0, S.T4)(ew.amount - eB, ew.currency),
                                regularPrice: (0, S.T4)(ew.amount, ew.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: B.planSelectSeparator }),
                    ],
                });
            }
        },
        eH = (e, t, n) =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: B.selectPlanDivider }),
                    (0, r.jsx)(P.az, {
                        label: F.intl.string(F.t.txajQG),
                        value: (0, r.jsx)(R.Z, {
                            price: t.amount,
                            currency: t.currency,
                            intervalType: n,
                            intervalCount: e.intervalCount,
                            isPrepaidPaymentSource: eG,
                        }),
                        className: B.selectPlanTotalRow,
                    }),
                ],
            }),
        eY = () =>
            (0, r.jsx)(
                "div",
                W(H({ ref: eL }, ej), {
                    children: Q.map((e) =>
                        (0, r.jsx)(
                            M.Z,
                            {
                                planId: e,
                                premiumSubscription: ef ? null : null != b ? b : null,
                                selectPlan: eC,
                                selected: (null == eT ? void 0 : eT.id) === e,
                                priceOptions: eA,
                                shouldShowUpdatedPaymentModal: eF,
                                isEligibleForDiscount: eR,
                                discountAmountOff: eB,
                                isEligibleForTrial: eu,
                            },
                            e,
                        ),
                    ),
                }),
            ),
        eW = () =>
            eU
                ? (0, r.jsx)(u.Z, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.T4)(7.5345 * eM.amount, Z.pK.HRK),
                      }),
                  })
                : null,
        eK = null != b && null != j && (0, I.R4)(b, j, Y),
        ez = eN.isFractionalPremiumActive && (null == b || eK) && !ef && null != j && U.dJ.has(j);
    if (ef) {
        let e = () => {
                if ((0, y.MY)(ep) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eh)
                    return (0, r.jsx)(D.Z, {
                        className: B.customGiftMessageWrapper,
                        innerClassName: B.customGiftMessage,
                        onTextChange: (e) => eh(e),
                        pendingText: em,
                        currentText: em,
                    });
            },
            t = (e) =>
                (0, r.jsx)(c.gNt, {
                    label: F.intl.string(F.t["3E5hXj"]),
                    children: e,
                });
        if ((0, y.pO)(ep))
            return (0, r.jsxs)("div", {
                className: B.stepBodyCustomGift,
                children: [
                    (0, r.jsx)("div", {
                        className: el ? B.bodyColumnMiddleCentered : B.bodyColumnMiddle,
                        children: null != e_ && (0, r.jsx)(x.q, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: B.bodyColumnRight,
                        children: [
                            (0, r.jsx)(k.s, {
                                className: et ? B.compactSendGiftToUser : void 0,
                                giftRecipient: ep,
                            }),
                            e(),
                            t(eY()),
                            eW(),
                            !ey && (0, r.jsx)(p.Z, { onClose: en }),
                        ],
                    }),
                ],
            });
        let n = eD && $;
        return (0, r.jsxs)("div", {
            className: B.stepBody,
            children: [
                (0, r.jsx)(k.s, {
                    className: et ? B.compactSendGiftToUser : void 0,
                    giftRecipient: ep,
                }),
                t(eY()),
                n && null != eT && null != eM && eH(eT, eM, null),
                eW(),
                !ey && (0, r.jsx)(p.Z, { onClose: en }),
            ],
        });
    }
    let eq = !eu && !eR && eD && $;
    return (0, r.jsxs)("div", {
        className: B.stepBody,
        children: [
            ez &&
                (0, r.jsx)(w.n, {
                    fractionalPremiumInfo: eN,
                    enablePremiumBrandRefresh: el,
                }),
            null != eO &&
                !ez &&
                !eI &&
                (0, r.jsx)("div", {
                    className: B.bodyText,
                    children: q(eO, L),
                }),
            eV(ec, eu, eR),
            eY(),
            eq && null != eT && null != eM && eH(eT, eM, eT.interval),
            eW(),
            !eF &&
                $ &&
                (0, r.jsx)(u.Z, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: O.Z.getArticleURL(G.BhN.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function X(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: f, selectedPlan: p } = (0, m.JL)(),
        { isGift: h, giftRecipient: g, claimableRewards: E } = (0, _.wD)(),
        b = (0, y.pO)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == p ? void 0 : p.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(J, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: h,
                          claimableRewards: E,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: u,
                          isNextDisabled: d,
                      })
                    : (0, r.jsx)(c.Button, {
                          variant: "primary",
                          text: F.intl.string(F.t.XqMe3N),
                          disabled: !0,
                      }),
                o
                    ? (0, r.jsx)(L.Z, {
                          className: h && b ? B.equalDistantBackButton : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function J(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: a,
            paymentSources: o,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        f = (0, s.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        { step: p, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: g } = (0, j.H)(n, i),
        E = (null != f && null != f.paymentSourceId) || Object.keys(o).length > 0 || (g && !u);
    var y = l ? F.intl.string(F.t.PDTjLN) : F.intl.string(F.t.XqMe3N),
        O = h.h8.ADD_PAYMENT_STEPS;
    return (
        E && (O = h.h8.REVIEW),
        (0, A.id)(_, i, a) && p !== h.h8.SELECT_FREE_SKU && (O = h.h8.SELECT_FREE_SKU),
        (0, r.jsx)(c.Button, {
            variant: "primary",
            text: y,
            onClick: () => t(O),
            disabled: d,
        })
    );
}
