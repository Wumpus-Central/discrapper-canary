n.d(t, {
    O: () => et,
    y: () => en
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(490504),
    f = n(911969),
    _ = n(975298),
    p = n(940824),
    h = n(987209),
    m = n(563132),
    g = n(409813),
    E = n(509545),
    b = n(78839),
    y = n(669079),
    v = n(63063),
    O = n(74538),
    I = n(937615),
    S = n(296848),
    T = n(711459),
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
function Q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
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
    let { premiumSubscription: g, skuId: b, selectedPlanId: U, setSelectedPlanId: G, planGroup: z, priceOptions: Q, planOptions: $, eligibleForMultiMonthPlans: et, referralTrialOfferId: en, subscriptionPeriodEnd: er, showTotal: ei = !0, discountInvoiceItems: ea, useCompactGiftComponents: eo, handleClose: es } = e,
        { activeSubscription: el, setSelectedPlanId: ec, selectedSkuId: eu, selectedPlan: ed, priceOptions: ef } = (0, m.JL)(),
        { isGift: e_, giftRecipient: ep, selectedGiftStyle: eh, customGiftMessage: em, setCustomGiftMessage: eg, giftingOrigin: eE, claimableRewards: eb, setSelectedGiftingPromotionReward: ey } = (0, h.wD)(),
        ev = (0, y.MY)(ep),
        eO = e_ && (0, y.pO)(ep),
        eI = (0, N.cF)(ed, eO, eb),
        eS = (0, C.Z)({ location: 'PremiumPlanSelectStep' });
    (b = null != b ? b : eu), (g = null != g ? g : el), l()(void 0 !== g, 'should not be undefined');
    let [eT, eA] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != U ? E.Z.get(U) : null]),
        eN = (0, w.N)(en),
        eC = null == eN ? void 0 : eN.subscription_trial,
        eR = (0, P.Ng)(),
        eP = null == eR || null == (t = eR.discount) ? void 0 : t.plan_ids,
        ew = null != eA ? eA : ed,
        eD = i.useCallback(
            (e) => {
                null != G ? G(e) : ec(e);
            },
            [G, ec]
        ),
        eL = null != Q ? Q : ef;
    l()(null != eL, 'Price option has to be set');
    let ex = (0, _.Z)(),
        eM = null != eN && F.nG[eN.trial_id].skus.includes(b),
        ek = null != eR && $.some((e) => (null == eP ? void 0 : eP.includes(e))) && null != eR.discount,
        ej = (0, O.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, e_, eL);
    i.useEffect(() => {
        et && T.ZP.trackExposure({ location: '5f89bb_1' });
    }, [et]);
    let eU = (null == ew ? void 0 : ew.id) != null && $.includes(ew.id);
    i.useEffect(() => {
        if (!eU) {
            if (null == eT || e_) eD($[0]);
            else if (null != eT) {
                let e = $.find((e) => e !== eT.id);
                null != e && eD(e);
            }
        }
    }, [eU, e_, $, eT, eD]),
        i.useEffect(() => {
            eI && null != eb && eb.length > 0 && ey(eb[0]);
        }, [eb, ey, eI]);
    let eG = !eO && (e_ || (!eM && !ek)) && eU && ei,
        eB = (0, u.arW)(),
        { ref: eV } = eB,
        eF = J(eB, ['ref']),
        eZ = (null == ew ? void 0 : ew.id) != null ? (0, O.aS)(ew.id, !1, e_, eL) : void 0,
        { ipCountryCode: eH } = (0, R.Z)(),
        eY = 'HR' === eH && null != eZ && eZ.currency === H.pK.EUR,
        eW = (0, O.Ap)(eL.paymentSourceId),
        eK = i.useMemo(() => ((null == eC ? void 0 : eC.interval) === F.rV.DAY ? ((null == eC ? void 0 : eC.interval_count) > 7 ? Y.intl.string(Y.t.Z1V2cn) : Y.intl.string(Y.t.MI1rHh)) : Y.intl.string(Y.t['+S5lra'])), [eC]),
        ez = !e_ && (ek || (null != eC && eM && null != er)),
        eq = null == ea || null == (s = ea.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = s.discounts) || null == (n = a.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
        eQ = (e, t, n) => {
            if (eO)
                return (0, r.jsx)(u.vwX, {
                    className: o()(K.selectGiftTitle, { [K.compactSelectGiftTitle]: eo }),
                    children: Y.intl.string(Y.t['3E5hXl'])
                });
            if (!ez)
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
                                      trialPeriod: eK
                                  })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eq && null != ej && U === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: K.trialPlanSelectHeader,
                            children: Y.intl.format(Y.t['nG7g/P'], {
                                numMonths: null == eR ? void 0 : eR.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(ej.amount - eq, ej.currency),
                                regularPrice: (0, I.T4)(ej.amount, ej.currency)
                            })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
        },
        eX = () => {
            if (ev === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eg)
                return (0, r.jsx)(k.Z, {
                    sectionTitle: Y.intl.string(Y.t.B3miEx),
                    className: o()(K.customGiftMessageWrapper, { [K.compactCustomGiftMessageWrapper]: eo }),
                    innerClassName: K.customGiftMessage,
                    onTextChange: (e) => eg(e),
                    pendingText: em,
                    currentText: em
                });
        },
        { enabled: eJ } = A.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        e$ = eE === F.Wt.DM_CHANNEL && eJ,
        e0 = e$ ? K.bodyColumnLeft : K.bodyColumnMiddle,
        e1 = () =>
            eO && null != eh
                ? e$
                    ? (0, r.jsx)(j.q, {
                          className: W.adjustedGiftMainAnimation,
                          optionsContainerClassName: W.adjustedGiftBoxOptionContainer
                      })
                    : (0, r.jsx)(j.q, {})
                : null,
        e2 = () =>
            (0, r.jsx)(
                'div',
                X(q({ ref: eV }, eF), {
                    children: $.map((e) =>
                        (0, r.jsx)(
                            B.Z,
                            {
                                planId: e,
                                premiumSubscription: e_ ? null : null != g ? g : null,
                                selectPlan: eD,
                                selected: (null == ew ? void 0 : ew.id) === e,
                                priceOptions: eL,
                                shouldShowUpdatedPaymentModal: ez,
                                isEligibleForDiscount: ek,
                                discountAmountOff: eq,
                                isEligibleForTrial: eM
                            },
                            e
                        )
                    )
                })
            ),
        e3 = () => eQ(eN, eM, ek),
        e4 = () => (eY ? (0, r.jsx)(d.Z, { message: Y.intl.formatToPlainString(Y.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eZ.amount, H.pK.HRK) }) }) : null),
        e5 = null != g && null != U && (0, S.R4)(g, U, z),
        e6 = ex.isFractionalPremiumActive && (null == g || e5) && !e_ && null != U && F.dJ.has(U);
    return (0, r.jsxs)('div', {
        className: o()(eO ? K.stepBodyCustomGift : K.stepBody, { [K.paddingForHalloweenBanner]: eS }),
        children: [
            e6 && (0, r.jsx)(M.n, { fractionalPremiumInfo: ex }),
            (0, r.jsxs)('div', {
                className: eO ? e0 : void 0,
                children: [
                    (0, r.jsx)(L.Z, {
                        fromBoostCancelModal: !1,
                        className: K.legacyPricingNotice
                    }),
                    e$ && e3(),
                    e$ ? e2() : e1(),
                    e$ && e4()
                ]
            }),
            (0, r.jsxs)('div', {
                className: eO ? K.bodyColumnRight : void 0,
                children: [
                    (0, r.jsx)(V.s, {
                        className: eo ? K.compactSendGiftToUser : void 0,
                        giftRecipient: ep
                    }),
                    e$ && e1(),
                    eX(),
                    null != eT &&
                        !e_ &&
                        !e6 &&
                        (0, r.jsx)('div', {
                            className: K.bodyText,
                            children: ee(eT, b)
                        }),
                    !e$ && e3(),
                    !e$ && e2(),
                    (0, r.jsx)('div', {
                        children:
                            eG && null != ew && null != eZ
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)('div', { className: K.selectPlanDivider }),
                                          (0, r.jsx)(D.az, {
                                              label: Y.intl.string(Y.t.txajQE),
                                              value: (0, r.jsx)(x.Z, {
                                                  price: eZ.amount,
                                                  currency: eZ.currency,
                                                  intervalType: e_ ? null : ew.interval,
                                                  intervalCount: ew.intervalCount,
                                                  isPrepaidPaymentSource: eW
                                              }),
                                              className: K.selectPlanTotalRow
                                          })
                                      ]
                                  })
                                : null
                    }),
                    !e$ && e4(),
                    !e_ && !ez && ei && (0, r.jsx)(d.Z, { message: Y.intl.format(Y.t.Om31w8, { documentationLink: v.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING) }) }),
                    e_ && !e$ && (0, r.jsx)(p.Z, { onClose: es })
                ]
            })
        ]
    });
}
function en(e) {
    let { onStepChange: t, selectedPlanId: n, paymentSources: i, onBackClick: a, showBackButton: o, planOptions: s, shouldRenderUpdatedPaymentModal: l = !1, isTrial: c } = e,
        { paymentSources: d, selectedPlan: f } = (0, m.JL)(),
        { isGift: _, claimableRewards: p, giftRecipient: g } = (0, h.wD)(),
        E = (0, y.pO)(g);
    return (
        (i = null != i ? i : d),
        (n = null != n ? n : null == f ? void 0 : f.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(er, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: _,
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
                          className: _ && E ? K.equalDistantBackButton : void 0,
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
        { step: f, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: p } = (0, G.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(o).length > 0 || (p && !l);
    var E = s ? Y.intl.string(Y.t.PDTjLC) : Y.intl.string(Y.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, N.id)(_, i, a) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            onClick: () => t(y),
            children: E
        })
    );
}
