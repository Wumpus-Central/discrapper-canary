n.d(t, {
    O: () => et,
    y: () => en
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(490504),
    _ = n(911969),
    f = n(975298),
    p = n(940824),
    h = n(987209),
    m = n(563132),
    g = n(409813),
    E = n(509545),
    b = n(78839),
    y = n(669079),
    O = n(63063),
    v = n(74538),
    I = n(937615),
    T = n(296848),
    S = n(711459),
    A = n(109213),
    N = n(717401),
    C = n(857039),
    R = n(847903),
    P = n(104494),
    w = n(639119),
    D = n(811334),
    L = n(55610),
    x = n(553797),
    M = n(346071),
    k = n(927699),
    j = n(987716),
    U = n(311821),
    G = n(459965),
    B = n(811616),
    V = n(251660),
    F = n(474936),
    Z = n(981631),
    H = n(231338),
    Y = n(388032),
    W = n(651427),
    K = n(104327);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function J(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = $(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ee(e, t) {
    let n = Y.intl.string(Y.t.BYa62t),
        r = Y.intl.string(Y.t.CDa6Dg),
        i = (() => {
            switch (e.interval) {
                case F.rV.YEAR:
                    return n;
                case F.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case F.Si.TIER_0:
            switch (a) {
                case F.Si.TIER_1:
                    return Y.intl.string(Y.t.q6mxDQ);
                case F.Si.TIER_2:
                    return Y.intl.string(Y.t.seZVS0);
                default:
                    return i;
            }
        case F.Si.TIER_1:
            switch (a) {
                case F.Si.TIER_0:
                    return Y.intl.string(Y.t['7+u2zs']);
                case F.Si.TIER_2:
                    return Y.intl.string(Y.t.NG2qcX);
                default:
                    return i;
            }
        case F.Si.TIER_2:
            switch (a) {
                case F.Si.TIER_0:
                case F.Si.TIER_1:
                    return Y.intl.string(Y.t['eB0/w8']);
                case F.Si.TIER_2:
                    return e.interval === F.rV.MONTH ? Y.intl.formatToPlainString(Y.t['RqUv8/'], { numFreeGuildSubscriptions: F.cb }) : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function et(e) {
    var t, n, a, s;
    let { premiumSubscription: g, skuId: b, selectedPlanId: U, setSelectedPlanId: G, planGroup: z, priceOptions: X, planOptions: $, eligibleForMultiMonthPlans: et, referralTrialOfferId: en, subscriptionPeriodEnd: er, showTotal: ei = !0, discountInvoiceItems: ea, useCompactGiftComponents: eo, handleClose: es } = e,
        { activeSubscription: el, setSelectedPlanId: ec, selectedSkuId: eu, selectedPlan: ed, priceOptions: e_, enablePremiumRebrandDesign: ef } = (0, m.JL)(),
        { isGift: ep, giftRecipient: eh, selectedGiftStyle: em, customGiftMessage: eg, setCustomGiftMessage: eE, giftingOrigin: eb, claimableRewards: ey, setSelectedGiftingPromotionReward: eO } = (0, h.wD)(),
        ev = (0, y.MY)(eh),
        eI = ep && (0, y.pO)(eh),
        eT = (0, N.cF)(ed, eI, ey),
        eS = (0, C.Z)({ location: 'PremiumPlanSelectStep' });
    (b = null != b ? b : eu), (g = null != g ? g : el), l()(void 0 !== g, 'should not be undefined');
    let [eA, eN] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != U ? E.Z.get(U) : null]),
        eC = (0, w.N)(en),
        eR = null == eC ? void 0 : eC.subscription_trial,
        eP = (0, P.Ng)(),
        ew = null == eP || null == (t = eP.discount) ? void 0 : t.plan_ids,
        eD = null != eN ? eN : ed,
        eL = i.useCallback(
            (e) => {
                null != G ? G(e) : ec(e);
            },
            [G, ec]
        ),
        ex = null != X ? X : e_;
    l()(null != ex, 'Price option has to be set');
    let eM = (0, f.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0
        }),
        ek = null != eC && F.nG[eC.trial_id].skus.includes(b),
        ej = null != eP && $.some((e) => (null == ew ? void 0 : ew.includes(e))) && null != eP.discount,
        eU = (0, v.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, ep, ex);
    i.useEffect(() => {
        et && S.ZP.trackExposure({ location: '5f89bb_1' });
    }, [et]);
    let eG = (null == eD ? void 0 : eD.id) != null && $.includes(eD.id);
    i.useEffect(() => {
        if (!eG) {
            if (null == eA || ep) eL($[0]);
            else if (null != eA) {
                let e = $.find((e) => e !== eA.id);
                null != e && eL(e);
            }
        }
    }, [eG, ep, $, eA, eL]),
        i.useEffect(() => {
            eT && null != ey && ey.length > 0 && eO(ey[0]);
        }, [ey, eO, eT]);
    let eB = !eI && (ep || (!ek && !ej)) && eG && ei,
        eV = (0, u.arW)(),
        { ref: eF } = eV,
        eZ = J(eV, ['ref']),
        eH = (null == eD ? void 0 : eD.id) != null ? (0, v.aS)(eD.id, !1, ep, ex) : void 0,
        { ipCountryCode: eY } = (0, R.Z)(),
        eW = 'HR' === eY && null != eH && eH.currency === H.pK.EUR,
        eK = (0, v.Ap)(ex.paymentSourceId),
        ez = i.useMemo(() => ((null == eR ? void 0 : eR.interval) === F.rV.DAY ? ((null == eR ? void 0 : eR.interval_count) > 7 ? Y.intl.string(Y.t.Z1V2cn) : Y.intl.string(Y.t.MI1rHh)) : Y.intl.string(Y.t['+S5lra'])), [eR]),
        eq = !ep && (ej || (null != eR && ek && null != er)),
        eX = null == ea || null == (s = ea.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = s.discounts) || null == (n = a.find((e) => e.type === _.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
        eQ = (e, t, n) => {
            if (eI)
                return (0, r.jsx)(u.vwX, {
                    className: o()(K.selectGiftTitle, { [K.compactSelectGiftTitle]: eo }),
                    children: Y.intl.string(Y.t['3E5hXl'])
                });
            if (!eq)
                return (0, r.jsx)('div', {
                    className: K.selectPlanChooseTitle,
                    children: Y.intl.string(Y.t.a19jpa)
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: K.trialPlanSelectHeader,
                            children: t
                                ? Y.intl.format(Y.t.nG95hI, { endDate: er })
                                : Y.intl.format(Y.t.s4E7kZ, {
                                      trialEnd: er,
                                      trialPeriod: ez
                                  })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eX && null != eU && U === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: K.trialPlanSelectHeader,
                            children: Y.intl.format(Y.t['nG7g/P'], {
                                numMonths: null == eP ? void 0 : eP.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(eU.amount - eX, eU.currency),
                                regularPrice: (0, I.T4)(eU.amount, eU.currency)
                            })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
        },
        eJ = () => {
            if (ev === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eE)
                return (0, r.jsx)(k.Z, {
                    sectionTitle: Y.intl.string(Y.t.B3miEx),
                    className: o()(K.customGiftMessageWrapper, { [K.compactCustomGiftMessageWrapper]: eo }),
                    innerClassName: K.customGiftMessage,
                    onTextChange: (e) => eE(e),
                    pendingText: eg,
                    currentText: eg
                });
        },
        { enabled: e$ } = A.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        e0 = eb === F.Wt.DM_CHANNEL && e$,
        e1 = e0 ? K.bodyColumnLeft : K.bodyColumnMiddle,
        e2 = () =>
            eI && null != em
                ? e0
                    ? (0, r.jsx)(j.q, {
                          className: W.adjustedGiftMainAnimation,
                          optionsContainerClassName: W.adjustedGiftBoxOptionContainer
                      })
                    : (0, r.jsx)(j.q, {})
                : null,
        e3 = () =>
            (0, r.jsx)(
                'div',
                Q(q({ ref: eF }, eZ), {
                    children: $.map((e) =>
                        (0, r.jsx)(
                            B.Z,
                            {
                                planId: e,
                                premiumSubscription: ep ? null : null != g ? g : null,
                                selectPlan: eL,
                                selected: (null == eD ? void 0 : eD.id) === e,
                                priceOptions: ex,
                                shouldShowUpdatedPaymentModal: eq,
                                isEligibleForDiscount: ej,
                                discountAmountOff: eX,
                                isEligibleForTrial: ek
                            },
                            e
                        )
                    )
                })
            ),
        e4 = () => eQ(eC, ek, ej),
        e5 = () => (eW ? (0, r.jsx)(d.Z, { message: Y.intl.formatToPlainString(Y.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eH.amount, H.pK.HRK) }) }) : null),
        e6 = null != g && null != U && (0, T.R4)(g, U, z),
        e8 = eM.isFractionalPremiumActive && (null == g || e6) && !ep && null != U && F.dJ.has(U);
    return (0, r.jsxs)('div', {
        className: o()(eI ? K.stepBodyCustomGift : K.stepBody, { [K.paddingForHalloweenBanner]: eS }),
        children: [
            e8 &&
                (0, r.jsx)(M.n, {
                    fractionalPremiumInfo: eM,
                    enablePremiumRebrandDesign: ef
                }),
            (0, r.jsxs)('div', {
                className: eI ? e1 : void 0,
                children: [
                    (0, r.jsx)(L.Z, {
                        fromBoostCancelModal: !1,
                        className: K.legacyPricingNotice
                    }),
                    e0 && e4(),
                    e0 ? e3() : e2(),
                    e0 && e5()
                ]
            }),
            (0, r.jsxs)('div', {
                className: eI ? K.bodyColumnRight : void 0,
                children: [
                    (0, r.jsx)(V.s, {
                        className: eo ? K.compactSendGiftToUser : void 0,
                        giftRecipient: eh
                    }),
                    e0 && e2(),
                    eJ(),
                    null != eA &&
                        !ep &&
                        !e8 &&
                        (0, r.jsx)('div', {
                            className: K.bodyText,
                            children: ee(eA, b)
                        }),
                    !e0 && e4(),
                    !e0 && e3(),
                    (0, r.jsx)('div', {
                        children:
                            eB && null != eD && null != eH
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)('div', { className: K.selectPlanDivider }),
                                          (0, r.jsx)(D.az, {
                                              label: Y.intl.string(Y.t.txajQE),
                                              value: (0, r.jsx)(x.Z, {
                                                  price: eH.amount,
                                                  currency: eH.currency,
                                                  intervalType: ep ? null : eD.interval,
                                                  intervalCount: eD.intervalCount,
                                                  isPrepaidPaymentSource: eK
                                              }),
                                              className: K.selectPlanTotalRow
                                          })
                                      ]
                                  })
                                : null
                    }),
                    !e0 && e5(),
                    !ep && !eq && ei && (0, r.jsx)(d.Z, { message: Y.intl.format(Y.t.Om31w8, { documentationLink: O.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING) }) }),
                    ep && !e0 && (0, r.jsx)(p.Z, { onClose: es })
                ]
            })
        ]
    });
}
function en(e) {
    let { onStepChange: t, selectedPlanId: n, paymentSources: i, onBackClick: a, showBackButton: o, planOptions: s, shouldRenderUpdatedPaymentModal: l = !1, isTrial: c } = e,
        { paymentSources: d, selectedPlan: _ } = (0, m.JL)(),
        { isGift: f, claimableRewards: p, giftRecipient: g } = (0, h.wD)(),
        E = (0, y.pO)(g);
    return (
        (i = null != i ? i : d),
        (n = null != n ? n : null == _ ? void 0 : _.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(er, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: f,
                          claimableRewards: p,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: c
                      })
                    : (0, r.jsx)(u.zxk, {
                          disabled: !0,
                          children: Y.intl.string(Y.t.XqMe3N)
                      }),
                o
                    ? (0, r.jsx)(U.Z, {
                          className: f && E ? K.equalDistantBackButton : void 0,
                          onClick: a
                      })
                    : null
            ]
        })
    );
}
function er(e) {
    let { onStepChange: t, selectedPlanId: n, isGift: i, claimableRewards: a, paymentSources: o, shouldRenderUpdatedPaymentModal: s, isTrial: l } = e,
        d = (0, c.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        { step: _, selectedPlan: f } = (0, m.JL)(),
        { hasEntitlements: p } = (0, G.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(o).length > 0 || (p && !l);
    var E = s ? Y.intl.string(Y.t.PDTjLC) : Y.intl.string(Y.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, N.id)(f, i, a) && _ !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            onClick: () => t(y),
            children: E
        })
    );
}
