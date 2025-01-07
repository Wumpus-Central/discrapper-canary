t.d(n, {
    O: function () {
        return V;
    },
    y: function () {
        return K;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(512722),
    c = t.n(a),
    o = t(442837),
    u = t(481060),
    d = t(490504),
    m = t(911969),
    p = t(940824),
    x = t(987209),
    h = t(563132),
    f = t(409813),
    v = t(509545),
    E = t(78839),
    S = t(669079),
    g = t(63063),
    j = t(74538),
    y = t(937615),
    I = t(711459),
    P = t(109213),
    T = t(717401),
    N = t(857039),
    b = t(847903),
    C = t(104494),
    _ = t(639119),
    O = t(55610),
    A = t(653798),
    Z = t(553797),
    R = t(927699),
    w = t(987716),
    M = t(311821),
    L = t(459965),
    k = t(811616),
    F = t(251660),
    D = t(474936),
    U = t(981631),
    G = t(231338),
    B = t(388032),
    H = t(461405),
    W = t(615945);
function V(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: E, selectedPlanId: M, setSelectedPlanId: L, priceOptions: V, planOptions: K, eligibleForMultiMonthPlans: z, referralTrialOfferId: Y, subscriptionPeriodEnd: X, showTotal: q = !0, discountInvoiceItems: J, useCompactGiftComponents: Q, handleClose: $ } = e,
        { activeSubscription: ee, setSelectedPlanId: en, selectedSkuId: et, selectedPlan: ei, priceOptions: el } = (0, h.usePaymentContext)(),
        { isGift: er, giftRecipient: es, selectedGiftStyle: ea, customGiftMessage: ec, setCustomGiftMessage: eo, giftingOrigin: eu, claimableRewards: ed, setSelectedGiftingPromotionReward: em } = (0, x.wD)(),
        ep = (0, S.MY)(es),
        ex = er && (0, S.pO)(es),
        eh = (0, T.cF)(ei, ex, ed),
        ef = (0, N.Z)({ location: 'PremiumPlanSelectStep' });
    (E = null != E ? E : et), (f = null != f ? f : ee), c()(void 0 !== f, 'should not be undefined');
    let [ev, eE] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != M ? v.Z.get(M) : null]),
        eS = (0, _.N)(Y),
        eg = null == eS ? void 0 : eS.subscription_trial,
        ej = (0, C.Ng)(),
        ey = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids,
        eI = null != eE ? eE : ei,
        eP = l.useCallback(
            (e) => {
                null != L ? L(e) : en(e);
            },
            [L, en]
        ),
        eT = null != V ? V : el;
    c()(null != eT, 'Price option has to be set');
    let eN = null != eS && D.nG[eS.trial_id].skus.includes(E),
        eb = null != ej && K.some((e) => (null == ey ? void 0 : ey.includes(e))) && null != ej.discount,
        eC = (0, j.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, er, eT);
    l.useEffect(() => {
        z && I.ZP.trackExposure({ location: '5f89bb_1' });
    }, [z]);
    let e_ = (null == eI ? void 0 : eI.id) != null && K.includes(eI.id);
    l.useEffect(() => {
        if (!e_) {
            if (null == ev || er) eP(K[0]);
            else if (null != ev) {
                let e = K.find((e) => e !== ev.id);
                null != e && eP(e);
            }
        }
    }, [e_, er, K, ev, eP]),
        l.useEffect(() => {
            eh && null != ed && ed.length > 0 && em(ed[0]);
        }, [ed, em, eh]);
    let eO = !ex && (er || (!eN && !eb)) && e_ && q,
        eA = (0, u.useRadioGroup)(),
        eZ = (null == eI ? void 0 : eI.id) != null ? (0, j.aS)(eI.id, !1, er, eT) : void 0,
        { ipCountryCode: eR } = (0, b.Z)(),
        ew = 'HR' === eR && null != eZ && eZ.currency === G.pK.EUR,
        eM = (0, j.Ap)(eT.paymentSourceId),
        eL = l.useMemo(() => {
            if ((null == eg ? void 0 : eg.interval) === D.rV.DAY) return (null == eg ? void 0 : eg.interval_count) > 7 ? B.intl.string(B.t.Z1V2cn) : B.intl.string(B.t.MI1rHh);
            return B.intl.string(B.t['+S5lra']);
        }, [eg]),
        ek = !er && (eb || (null != eg && eN && null != X)),
        eF = null == J ? void 0 : null === (a = J.find((e) => e.subscriptionPlanId === D.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eD = (e, n, t) => {
            if (ex)
                return (0, i.jsx)(u.FormTitle, {
                    className: s()(W.selectGiftTitle, { [W.compactSelectGiftTitle]: Q }),
                    children: B.intl.string(B.t['3E5hXl'])
                });
            if (!ek)
                return (0, i.jsx)('div', {
                    className: W.selectPlanChooseTitle,
                    children: B.intl.string(B.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === D.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: n
                                ? B.intl.format(B.t.nG95hI, { endDate: X })
                                : B.intl.format(B.t.s4E7kZ, {
                                      trialEnd: X,
                                      trialPeriod: eL
                                  })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
            }
            if (t && null != eF && null != eC && M === D.Xh.PREMIUM_MONTH_TIER_2)
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: B.intl.format(B.t['nG7g/P'], {
                                numMonths: null == ej ? void 0 : ej.discount.user_usage_limit,
                                discountedPrice: (0, y.T4)(eC.amount - eF, eC.currency),
                                regularPrice: (0, y.T4)(eC.amount, eC.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        { enabled: eU } = P.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eG = eu === D.Wt.DM_CHANNEL && eU,
        eB = eG ? W.bodyColumnLeft : W.bodyColumnMiddle,
        eH = () => {
            if (ex && null != ea)
                return eG
                    ? (0, i.jsx)(w.q, {
                          className: H.adjustedGiftMainAnimation,
                          optionsContainerClassName: H.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(w.q, {});
            return null;
        },
        eW = () =>
            (0, i.jsx)('div', {
                ...eA,
                children: K.map((e) =>
                    (0, i.jsx)(
                        k.Z,
                        {
                            planId: e,
                            premiumSubscription: er ? null : null != f ? f : null,
                            selectPlan: eP,
                            selected: (null == eI ? void 0 : eI.id) === e,
                            priceOptions: eT,
                            shouldShowUpdatedPaymentModal: ek,
                            isEligibleForDiscount: eb,
                            discountAmountOff: eF,
                            isEligibleForTrial: eN
                        },
                        e
                    )
                )
            }),
        eV = () => eD(eS, eN, eb),
        eK = () => (ew ? (0, i.jsx)(d.Z, { message: B.intl.formatToPlainString(B.t['9hnZoK'], { kunaPriceWithCurrency: (0, y.T4)(7.5345 * eZ.amount, G.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(ex ? W.stepBodyCustomGift : W.stepBody, { [W.paddingForHalloweenBanner]: ef }),
            children: [
                (0, i.jsxs)('div', {
                    className: ex ? eB : void 0,
                    children: [
                        (0, i.jsx)(O.Z, {
                            fromBoostCancelModal: !1,
                            className: W.legacyPricingNotice
                        }),
                        eG && eV(),
                        eG ? eW() : eH(),
                        eG && eK()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: ex ? W.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(F.s, {
                            className: Q ? W.compactSendGiftToUser : void 0,
                            giftRecipient: es
                        }),
                        eG && eH(),
                        (() => {
                            if (ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: B.intl.string(B.t.B3miEx),
                                    className: s()(W.customGiftMessageWrapper, { [W.compactCustomGiftMessageWrapper]: Q }),
                                    innerClassName: W.customGiftMessage,
                                    onTextChange: (e) => eo(e),
                                    pendingText: ec,
                                    currentText: ec
                                });
                        })(),
                        null != ev &&
                            !er &&
                            (0, i.jsx)('div', {
                                className: W.bodyText,
                                children: (function (e, n) {
                                    let t = B.intl.string(B.t.BYa62t),
                                        i = B.intl.string(B.t.CDa6Dg),
                                        l = (() => {
                                            switch (e.interval) {
                                                case D.rV.YEAR:
                                                    return t;
                                                case D.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case D.Si.TIER_0:
                                            switch (r) {
                                                case D.Si.TIER_1:
                                                    return B.intl.string(B.t.q6mxDQ);
                                                case D.Si.TIER_2:
                                                    return B.intl.string(B.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_1:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                    return B.intl.string(B.t['7+u2zs']);
                                                case D.Si.TIER_2:
                                                    return B.intl.string(B.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_2:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                case D.Si.TIER_1:
                                                    return B.intl.string(B.t['eB0/w8']);
                                                case D.Si.TIER_2:
                                                    return e.interval === D.rV.MONTH ? B.intl.formatToPlainString(B.t['RqUv8/'], { numFreeGuildSubscriptions: D.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(ev, E)
                            }),
                        !eG && eV(),
                        !eG && eW(),
                        (0, i.jsx)('div', {
                            children:
                                eO && null != eI && null != eZ
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: W.selectPlanDivider }),
                                              (0, i.jsx)(A.Ji, {
                                                  label: B.intl.string(B.t.txajQE),
                                                  value: (0, i.jsx)(Z.Z, {
                                                      price: eZ.amount,
                                                      currency: eZ.currency,
                                                      intervalType: er ? null : eI.interval,
                                                      intervalCount: eI.intervalCount,
                                                      isPrepaidPaymentSource: eM
                                                  }),
                                                  className: W.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eG && eK(),
                        !er && !ek && q && (0, i.jsx)(d.Z, { message: B.intl.format(B.t.Om31w8, { documentationLink: g.Z.getArticleURL(U.BhN.LOCALIZED_PRICING) }) }),
                        er && !eG && (0, i.jsx)(p.Z, { onClose: $ })
                    ]
                })
            ]
        })
    });
}
function K(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p, claimableRewards: f, giftRecipient: v } = (0, x.wD)(),
        E = (0, S.pO)(v);
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(z, {
                          paymentSources: l,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: p,
                          claimableRewards: f,
                          shouldRenderUpdatedPaymentModal: c,
                          isTrial: o
                      })
                    : (0, i.jsx)(u.Button, {
                          disabled: !0,
                          children: B.intl.string(B.t.XqMe3N)
                      }),
                s
                    ? (0, i.jsx)(M.Z, {
                          className: p && E ? W.equalDistantBackButton : void 0,
                          onClick: r
                      })
                    : null
            ]
        })
    );
}
function z(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, claimableRewards: r, paymentSources: s, shouldRenderUpdatedPaymentModal: a, isTrial: c } = e,
        d = (0, o.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        { step: m, selectedPlan: p } = (0, h.usePaymentContext)(),
        { hasEntitlements: x } = (0, L.H)(t, l),
        v = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (x && !c);
    var S = a ? B.intl.string(B.t.PDTjLC) : B.intl.string(B.t.XqMe3N),
        g = f.h8.ADD_PAYMENT_STEPS;
    return (
        v && (g = f.h8.REVIEW),
        (0, T.id)(p, l, r) && m !== f.h8.SELECT_FREE_SKU && (g = f.h8.SELECT_FREE_SKU),
        (0, i.jsx)(u.Button, {
            onClick: () => n(g),
            children: S
        })
    );
}
