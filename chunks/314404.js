n.d(t, {
    O: () => J,
    y: () => $
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    S = n(711459),
    T = n(109213),
    N = n(717401),
    A = n(857039),
    C = n(847903),
    R = n(104494),
    P = n(639119),
    w = n(55610),
    D = n(653798),
    L = n(553797),
    x = n(346071),
    M = n(927699),
    k = n(987716),
    j = n(311821),
    U = n(459965),
    G = n(811616),
    B = n(251660),
    F = n(474936),
    V = n(981631),
    Z = n(231338),
    H = n(388032),
    W = n(651427),
    Y = n(104327);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e, t) {
    let n = H.NW.string(H.t.BYa62t),
        r = H.NW.string(H.t.CDa6Dg),
        i = (() => {
            switch (e.interval) {
                case F.rV.YEAR:
                    return n;
                case F.rV.MONTH:
                default:
                    return r;
            }
        })(),
        o = e.skuId;
    switch (t) {
        case F.Si.TIER_0:
            switch (o) {
                case F.Si.TIER_1:
                    return H.NW.string(H.t.q6mxDQ);
                case F.Si.TIER_2:
                    return H.NW.string(H.t.seZVS0);
                default:
                    return i;
            }
        case F.Si.TIER_1:
            switch (o) {
                case F.Si.TIER_0:
                    return H.NW.string(H.t['7+u2zs']);
                case F.Si.TIER_2:
                    return H.NW.string(H.t.NG2qcX);
                default:
                    return i;
            }
        case F.Si.TIER_2:
            switch (o) {
                case F.Si.TIER_0:
                case F.Si.TIER_1:
                    return H.NW.string(H.t['eB0/w8']);
                case F.Si.TIER_2:
                    return e.interval === F.rV.MONTH ? H.NW.formatToPlainString(H.t['RqUv8/'], { numFreeGuildSubscriptions: F.cb }) : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function J(e) {
    var t, n, o, s;
    let { premiumSubscription: g, skuId: b, selectedPlanId: j, setSelectedPlanId: U, priceOptions: K, planOptions: q, eligibleForMultiMonthPlans: J, referralTrialOfferId: $, subscriptionPeriodEnd: ee, showTotal: et = !0, discountInvoiceItems: en, useCompactGiftComponents: er, handleClose: ei } = e,
        { activeSubscription: eo, setSelectedPlanId: ea, selectedSkuId: es, selectedPlan: el, priceOptions: ec } = (0, m.JL)(),
        { isGift: eu, giftRecipient: ed, selectedGiftStyle: ef, customGiftMessage: e_, setCustomGiftMessage: ep, giftingOrigin: eh, claimableRewards: em, setSelectedGiftingPromotionReward: eg } = (0, h.wD)(),
        eE = (0, y.MY)(ed),
        eb = eu && (0, y.pO)(ed),
        ey = (0, N.cF)(el, eb, em),
        ev = (0, A.Z)({ location: 'PremiumPlanSelectStep' });
    (b = null != b ? b : es), (g = null != g ? g : eo), l()(void 0 !== g, 'should not be undefined');
    let [eO, eI] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != j ? E.Z.get(j) : null]),
        eS = (0, P.N)($),
        eT = null == eS ? void 0 : eS.subscription_trial,
        eN = (0, R.Ng)(),
        eA = null == eN || null == (t = eN.discount) ? void 0 : t.plan_ids,
        eC = null != eI ? eI : el,
        eR = i.useCallback(
            (e) => {
                null != U ? U(e) : ea(e);
            },
            [U, ea]
        ),
        eP = null != K ? K : ec;
    l()(null != eP, 'Price option has to be set');
    let ew = (0, _.Z)(),
        eD = ew.fractionalState !== F.a$.NONE,
        eL = null != eS && F.nG[eS.trial_id].skus.includes(b),
        ex = null != eN && q.some((e) => (null == eA ? void 0 : eA.includes(e))) && null != eN.discount,
        eM = (0, O.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, eu, eP);
    i.useEffect(() => {
        J && S.ZP.trackExposure({ location: '5f89bb_1' });
    }, [J]);
    let ek = (null == eC ? void 0 : eC.id) != null && q.includes(eC.id);
    i.useEffect(() => {
        if (!ek) {
            if (null == eO || eu) eR(q[0]);
            else if (null != eO) {
                let e = q.find((e) => e !== eO.id);
                null != e && eR(e);
            }
        }
    }, [ek, eu, q, eO, eR]),
        i.useEffect(() => {
            ey && null != em && em.length > 0 && eg(em[0]);
        }, [em, eg, ey]);
    let ej = !eb && (eu || (!eL && !ex)) && ek && et && !eD,
        eU = (0, u.arW)(),
        eG = (null == eC ? void 0 : eC.id) != null ? (0, O.aS)(eC.id, !1, eu, eP) : void 0,
        { ipCountryCode: eB } = (0, C.Z)(),
        eF = 'HR' === eB && null != eG && eG.currency === Z.pK.EUR,
        eV = (0, O.Ap)(eP.paymentSourceId),
        eZ = i.useMemo(() => ((null == eT ? void 0 : eT.interval) === F.rV.DAY ? ((null == eT ? void 0 : eT.interval_count) > 7 ? H.NW.string(H.t.Z1V2cn) : H.NW.string(H.t.MI1rHh)) : H.NW.string(H.t['+S5lra'])), [eT]),
        eH = !eu && (ex || (null != eT && eL && null != ee) || eD),
        eW = null == en || null == (s = en.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || null == (o = s.discounts) || null == (n = o.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
        eY = (e, t, n) => {
            if (eb)
                return (0, r.jsx)(u.vwX, {
                    className: a()(Y.selectGiftTitle, { [Y.compactSelectGiftTitle]: er }),
                    children: H.NW.string(H.t['3E5hXl'])
                });
            if (!eH)
                return (0, r.jsx)('div', {
                    className: Y.selectPlanChooseTitle,
                    children: H.NW.string(H.t.a19jpa)
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: Y.trialPlanSelectHeader,
                            children: t
                                ? H.NW.format(H.t.nG95hI, { endDate: ee })
                                : H.NW.format(H.t.s4E7kZ, {
                                      trialEnd: ee,
                                      trialPeriod: eZ
                                  })
                        }),
                        (0, r.jsx)('hr', { className: Y.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eW && null != eM && j === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: Y.trialPlanSelectHeader,
                            children: H.NW.format(H.t['nG7g/P'], {
                                numMonths: null == eN ? void 0 : eN.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(eM.amount - eW, eM.currency),
                                regularPrice: (0, I.T4)(eM.amount, eM.currency)
                            })
                        }),
                        (0, r.jsx)('hr', { className: Y.planSelectSeparator })
                    ]
                });
        },
        eK = () => {
            if (eE === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ep)
                return (0, r.jsx)(M.Z, {
                    sectionTitle: H.NW.string(H.t.B3miEx),
                    className: a()(Y.customGiftMessageWrapper, { [Y.compactCustomGiftMessageWrapper]: er }),
                    innerClassName: Y.customGiftMessage,
                    onTextChange: (e) => ep(e),
                    pendingText: e_,
                    currentText: e_
                });
        },
        { enabled: ez } = T.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eq = eh === F.Wt.DM_CHANNEL && ez,
        eQ = eq ? Y.bodyColumnLeft : Y.bodyColumnMiddle,
        eX = () =>
            eb && null != ef
                ? eq
                    ? (0, r.jsx)(k.q, {
                          className: W.adjustedGiftMainAnimation,
                          optionsContainerClassName: W.adjustedGiftBoxOptionContainer
                      })
                    : (0, r.jsx)(k.q, {})
                : null,
        eJ = () =>
            (0, r.jsx)(
                'div',
                Q(z({}, eU), {
                    children: q.map((e) =>
                        (0, r.jsx)(
                            G.Z,
                            {
                                planId: e,
                                premiumSubscription: eu ? null : null != g ? g : null,
                                selectPlan: eR,
                                selected: (null == eC ? void 0 : eC.id) === e,
                                priceOptions: eP,
                                shouldShowUpdatedPaymentModal: eH,
                                isEligibleForDiscount: ex,
                                discountAmountOff: eW,
                                isEligibleForTrial: eL
                            },
                            e
                        )
                    )
                })
            ),
        e$ = () => eY(eS, eL, ex),
        e0 = () => (eF ? (0, r.jsx)(d.Z, { message: H.NW.formatToPlainString(H.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eG.amount, Z.pK.HRK) }) }) : null),
        e1 = ew.isFractionalPremiumActive && !eu;
    return (0, r.jsxs)('div', {
        className: a()(eb ? Y.stepBodyCustomGift : Y.stepBody, { [Y.paddingForHalloweenBanner]: ev }),
        children: [
            e1 && (0, r.jsx)(x.n, { fractionalPremiumInfo: ew }),
            (0, r.jsxs)('div', {
                className: eb ? eQ : void 0,
                children: [
                    (0, r.jsx)(w.Z, {
                        fromBoostCancelModal: !1,
                        className: Y.legacyPricingNotice
                    }),
                    eq && e$(),
                    eq ? eJ() : eX(),
                    eq && e0()
                ]
            }),
            (0, r.jsxs)('div', {
                className: eb ? Y.bodyColumnRight : void 0,
                children: [
                    (0, r.jsx)(B.s, {
                        className: er ? Y.compactSendGiftToUser : void 0,
                        giftRecipient: ed
                    }),
                    eq && eX(),
                    eK(),
                    null != eO &&
                        !eu &&
                        (0, r.jsx)('div', {
                            className: Y.bodyText,
                            children: X(eO, b)
                        }),
                    !eq && e$(),
                    !eq && eJ(),
                    (0, r.jsx)('div', {
                        children:
                            ej && null != eC && null != eG
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)('div', { className: Y.selectPlanDivider }),
                                          (0, r.jsx)(D.Ji, {
                                              label: H.NW.string(H.t.txajQE),
                                              value: (0, r.jsx)(L.Z, {
                                                  price: eG.amount,
                                                  currency: eG.currency,
                                                  intervalType: eu ? null : eC.interval,
                                                  intervalCount: eC.intervalCount,
                                                  isPrepaidPaymentSource: eV
                                              }),
                                              className: Y.selectPlanTotalRow
                                          })
                                      ]
                                  })
                                : null
                    }),
                    !eq && e0(),
                    !eu && !eH && et && (0, r.jsx)(d.Z, { message: H.NW.format(H.t.Om31w8, { documentationLink: v.Z.getArticleURL(V.BhN.LOCALIZED_PRICING) }) }),
                    eu && !eq && (0, r.jsx)(p.Z, { onClose: ei })
                ]
            })
        ]
    });
}
function $(e) {
    let { onStepChange: t, selectedPlanId: n, paymentSources: i, onBackClick: o, showBackButton: a, planOptions: s, shouldRenderUpdatedPaymentModal: l = !1, isTrial: c } = e,
        { paymentSources: d, selectedPlan: f } = (0, m.JL)(),
        { isGift: _, claimableRewards: p, giftRecipient: g } = (0, h.wD)(),
        E = (0, y.pO)(g);
    return (
        (i = null != i ? i : d),
        (n = null != n ? n : null == f ? void 0 : f.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(ee, {
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
                          children: H.NW.string(H.t.XqMe3N)
                      }),
                a
                    ? (0, r.jsx)(j.Z, {
                          className: _ && E ? Y.equalDistantBackButton : void 0,
                          onClick: o
                      })
                    : null
            ]
        })
    );
}
function ee(e) {
    let { onStepChange: t, selectedPlanId: n, isGift: i, claimableRewards: o, paymentSources: a, shouldRenderUpdatedPaymentModal: s, isTrial: l } = e,
        d = (0, c.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        { step: f, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: p } = (0, U.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(a).length > 0 || (p && !l);
    var E = s ? H.NW.string(H.t.PDTjLC) : H.NW.string(H.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, N.id)(_, i, o) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            onClick: () => t(y),
            children: E
        })
    );
}
