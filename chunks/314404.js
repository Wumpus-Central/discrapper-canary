n.d(t, {
    O: () => W,
    y: () => K
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(490504),
    f = n(911969),
    _ = n(940824),
    p = n(987209),
    h = n(563132),
    m = n(409813),
    g = n(509545),
    E = n(78839),
    v = n(669079),
    y = n(63063),
    I = n(74538),
    T = n(937615),
    b = n(711459),
    S = n(109213),
    A = n(717401),
    N = n(857039),
    C = n(847903),
    R = n(104494),
    O = n(639119),
    D = n(55610),
    L = n(653798),
    x = n(553797),
    P = n(927699),
    w = n(987716),
    M = n(311821),
    k = n(459965),
    U = n(811616),
    G = n(251660),
    B = n(474936),
    Z = n(981631),
    F = n(231338),
    V = n(388032),
    j = n(355620),
    H = n(781736);
function Y(e, t) {
    let n = V.intl.string(V.t.BYa62t),
        i = V.intl.string(V.t.CDa6Dg),
        r = (() => {
            switch (e.interval) {
                case B.rV.YEAR:
                    return n;
                case B.rV.MONTH:
                default:
                    return i;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case B.Si.TIER_0:
            switch (a) {
                case B.Si.TIER_1:
                    return V.intl.string(V.t.q6mxDQ);
                case B.Si.TIER_2:
                    return V.intl.string(V.t.seZVS0);
                default:
                    return r;
            }
        case B.Si.TIER_1:
            switch (a) {
                case B.Si.TIER_0:
                    return V.intl.string(V.t['7+u2zs']);
                case B.Si.TIER_2:
                    return V.intl.string(V.t.NG2qcX);
                default:
                    return r;
            }
        case B.Si.TIER_2:
            switch (a) {
                case B.Si.TIER_0:
                case B.Si.TIER_1:
                    return V.intl.string(V.t['eB0/w8']);
                case B.Si.TIER_2:
                    return e.interval === B.rV.MONTH ? V.intl.formatToPlainString(V.t['RqUv8/'], { numFreeGuildSubscriptions: B.cb }) : r;
                default:
                    return r;
            }
        default:
            return r;
    }
}
function W(e) {
    var t, n, a, o;
    let { premiumSubscription: m, skuId: E, selectedPlanId: M, setSelectedPlanId: k, priceOptions: W, planOptions: K, eligibleForMultiMonthPlans: z, referralTrialOfferId: q, subscriptionPeriodEnd: Q, showTotal: X = !0, discountInvoiceItems: J, useCompactGiftComponents: $, handleClose: ee } = e,
        { activeSubscription: et, setSelectedPlanId: en, selectedSkuId: ei, selectedPlan: er, priceOptions: ea } = (0, h.JL)(),
        { isGift: es, giftRecipient: eo, selectedGiftStyle: el, customGiftMessage: eu, setCustomGiftMessage: ec, giftingOrigin: ed, claimableRewards: ef, setSelectedGiftingPromotionReward: e_ } = (0, p.wD)(),
        ep = (0, v.MY)(eo),
        eh = es && (0, v.pO)(eo),
        em = (0, A.cF)(er, eh, ef),
        eg = (0, N.Z)({ location: 'PremiumPlanSelectStep' });
    (E = null != E ? E : ei), (m = null != m ? m : et), l()(void 0 !== m, 'should not be undefined');
    let [eE, ev] = (0, u.Wu)([g.Z], () => [null != m ? g.Z.get(m.planId) : null, null != M ? g.Z.get(M) : null]),
        ey = (0, O.N)(q),
        eI = null == ey ? void 0 : ey.subscription_trial,
        eT = (0, R.Ng)(),
        eb = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids,
        eS = null != ev ? ev : er,
        eA = r.useCallback(
            (e) => {
                null != k ? k(e) : en(e);
            },
            [k, en]
        ),
        eN = null != W ? W : ea;
    l()(null != eN, 'Price option has to be set');
    let eC = null != ey && B.nG[ey.trial_id].skus.includes(E),
        eR = null != eT && K.some((e) => (null == eb ? void 0 : eb.includes(e))) && null != eT.discount,
        eO = (0, I.aS)(B.Xh.PREMIUM_MONTH_TIER_2, !1, es, eN);
    r.useEffect(() => {
        z && b.ZP.trackExposure({ location: '5f89bb_1' });
    }, [z]);
    let eD = (null == eS ? void 0 : eS.id) != null && K.includes(eS.id);
    r.useEffect(() => {
        if (!eD) {
            if (null == eE || es) eA(K[0]);
            else if (null != eE) {
                let e = K.find((e) => e !== eE.id);
                null != e && eA(e);
            }
        }
    }, [eD, es, K, eE, eA]),
        r.useEffect(() => {
            em && null != ef && ef.length > 0 && e_(ef[0]);
        }, [ef, e_, em]);
    let eL = !eh && (es || (!eC && !eR)) && eD && X,
        ex = (0, c.arW)(),
        eP = (null == eS ? void 0 : eS.id) != null ? (0, I.aS)(eS.id, !1, es, eN) : void 0,
        { ipCountryCode: ew } = (0, C.Z)(),
        eM = 'HR' === ew && null != eP && eP.currency === F.pK.EUR,
        ek = (0, I.Ap)(eN.paymentSourceId),
        eU = r.useMemo(() => ((null == eI ? void 0 : eI.interval) === B.rV.DAY ? ((null == eI ? void 0 : eI.interval_count) > 7 ? V.intl.string(V.t.Z1V2cn) : V.intl.string(V.t.MI1rHh)) : V.intl.string(V.t['+S5lra'])), [eI]),
        eG = !es && (eR || (null != eI && eC && null != Q)),
        eB = null == J ? void 0 : null === (o = J.find((e) => e.subscriptionPlanId === B.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === o ? void 0 : null === (a = o.discounts) || void 0 === a ? void 0 : null === (n = a.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
        eZ = (e, t, n) => {
            if (eh)
                return (0, i.jsx)(c.vwX, {
                    className: s()(H.selectGiftTitle, { [H.compactSelectGiftTitle]: $ }),
                    children: V.intl.string(V.t['3E5hXl'])
                });
            if (!eG)
                return (0, i.jsx)('div', {
                    className: H.selectPlanChooseTitle,
                    children: V.intl.string(V.t.a19jpa)
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === B.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            className: H.trialPlanSelectHeader,
                            children: t
                                ? V.intl.format(V.t.nG95hI, { endDate: Q })
                                : V.intl.format(V.t.s4E7kZ, {
                                      trialEnd: Q,
                                      trialPeriod: eU
                                  })
                        }),
                        (0, i.jsx)('hr', { className: H.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eB && null != eO && M === B.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            className: H.trialPlanSelectHeader,
                            children: V.intl.format(V.t['nG7g/P'], {
                                numMonths: null == eT ? void 0 : eT.discount.user_usage_limit,
                                discountedPrice: (0, T.T4)(eO.amount - eB, eO.currency),
                                regularPrice: (0, T.T4)(eO.amount, eO.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: H.planSelectSeparator })
                    ]
                });
        },
        eF = () => {
            if (ep === v.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ec)
                return (0, i.jsx)(P.Z, {
                    sectionTitle: V.intl.string(V.t.B3miEx),
                    className: s()(H.customGiftMessageWrapper, { [H.compactCustomGiftMessageWrapper]: $ }),
                    innerClassName: H.customGiftMessage,
                    onTextChange: (e) => ec(e),
                    pendingText: eu,
                    currentText: eu
                });
        },
        { enabled: eV } = S.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        ej = ed === B.Wt.DM_CHANNEL && eV,
        eH = ej ? H.bodyColumnLeft : H.bodyColumnMiddle,
        eY = () =>
            eh && null != el
                ? ej
                    ? (0, i.jsx)(w.q, {
                          className: j.adjustedGiftMainAnimation,
                          optionsContainerClassName: j.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(w.q, {})
                : null,
        eW = () =>
            (0, i.jsx)('div', {
                ...ex,
                children: K.map((e) =>
                    (0, i.jsx)(
                        U.Z,
                        {
                            planId: e,
                            premiumSubscription: es ? null : null != m ? m : null,
                            selectPlan: eA,
                            selected: (null == eS ? void 0 : eS.id) === e,
                            priceOptions: eN,
                            shouldShowUpdatedPaymentModal: eG,
                            isEligibleForDiscount: eR,
                            discountAmountOff: eB,
                            isEligibleForTrial: eC
                        },
                        e
                    )
                )
            }),
        eK = () => eZ(ey, eC, eR),
        ez = () => (eM ? (0, i.jsx)(d.Z, { message: V.intl.formatToPlainString(V.t['9hnZoK'], { kunaPriceWithCurrency: (0, T.T4)(7.5345 * eP.amount, F.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(eh ? H.stepBodyCustomGift : H.stepBody, { [H.paddingForHalloweenBanner]: eg }),
            children: [
                (0, i.jsxs)('div', {
                    className: eh ? eH : void 0,
                    children: [
                        (0, i.jsx)(D.Z, {
                            fromBoostCancelModal: !1,
                            className: H.legacyPricingNotice
                        }),
                        ej && eK(),
                        ej ? eW() : eY(),
                        ej && ez()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: eh ? H.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(G.s, {
                            className: $ ? H.compactSendGiftToUser : void 0,
                            giftRecipient: eo
                        }),
                        ej && eY(),
                        eF(),
                        null != eE &&
                            !es &&
                            (0, i.jsx)('div', {
                                className: H.bodyText,
                                children: Y(eE, E)
                            }),
                        !ej && eK(),
                        !ej && eW(),
                        (0, i.jsx)('div', {
                            children:
                                eL && null != eS && null != eP
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: H.selectPlanDivider }),
                                              (0, i.jsx)(L.Ji, {
                                                  label: V.intl.string(V.t.txajQE),
                                                  value: (0, i.jsx)(x.Z, {
                                                      price: eP.amount,
                                                      currency: eP.currency,
                                                      intervalType: es ? null : eS.interval,
                                                      intervalCount: eS.intervalCount,
                                                      isPrepaidPaymentSource: ek
                                                  }),
                                                  className: H.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !ej && ez(),
                        !es && !eG && X && (0, i.jsx)(d.Z, { message: V.intl.format(V.t.Om31w8, { documentationLink: y.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING) }) }),
                        es && !ej && (0, i.jsx)(_.Z, { onClose: ee })
                    ]
                })
            ]
        })
    });
}
function K(e) {
    let { onStepChange: t, selectedPlanId: n, paymentSources: r, onBackClick: a, showBackButton: s, planOptions: o, shouldRenderUpdatedPaymentModal: l = !1, isTrial: u } = e,
        { paymentSources: d, selectedPlan: f } = (0, h.JL)(),
        { isGift: _, claimableRewards: m, giftRecipient: g } = (0, p.wD)(),
        E = (0, v.pO)(g);
    return (
        (r = null != r ? r : d),
        (n = null != n ? n : null == f ? void 0 : f.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != n && o.includes(n)
                    ? (0, i.jsx)(z, {
                          paymentSources: r,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: _,
                          claimableRewards: m,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: u
                      })
                    : (0, i.jsx)(c.zxk, {
                          disabled: !0,
                          children: V.intl.string(V.t.XqMe3N)
                      }),
                s
                    ? (0, i.jsx)(M.Z, {
                          className: _ && E ? H.equalDistantBackButton : void 0,
                          onClick: a
                      })
                    : null
            ]
        })
    );
}
function z(e) {
    let { onStepChange: t, selectedPlanId: n, isGift: r, claimableRewards: a, paymentSources: s, shouldRenderUpdatedPaymentModal: o, isTrial: l } = e,
        d = (0, u.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        { step: f, selectedPlan: _ } = (0, h.JL)(),
        { hasEntitlements: p } = (0, k.H)(n, r),
        g = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (p && !l);
    var v = o ? V.intl.string(V.t.PDTjLC) : V.intl.string(V.t.XqMe3N),
        y = m.h8.ADD_PAYMENT_STEPS;
    return (
        g && (y = m.h8.REVIEW),
        (0, A.id)(_, r, a) && f !== m.h8.SELECT_FREE_SKU && (y = m.h8.SELECT_FREE_SKU),
        (0, i.jsx)(c.zxk, {
            onClick: () => t(y),
            children: v
        })
    );
}
