t.d(n, {
    O: function () {
        return V;
    },
    y: function () {
        return z;
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
    g = t(78839),
    S = t(669079),
    E = t(63063),
    j = t(74538),
    y = t(937615),
    P = t(711459),
    I = t(109213),
    T = t(717401),
    N = t(857039),
    b = t(847903),
    C = t(104494),
    _ = t(639119),
    Z = t(55610),
    O = t(653798),
    A = t(553797),
    R = t(927699),
    w = t(987716),
    M = t(311821),
    L = t(459965),
    k = t(811616),
    F = t(251660),
    D = t(474936),
    U = t(981631),
    B = t(231338),
    G = t(388032),
    H = t(853745),
    W = t(796166);
function V(e) {
    var n, t, r, a;
    let { premiumSubscription: f, skuId: g, selectedPlanId: M, setSelectedPlanId: L, priceOptions: V, planOptions: z, eligibleForMultiMonthPlans: K, referralTrialOfferId: Y, subscriptionPeriodEnd: X, showTotal: q = !0, discountInvoiceItems: J, useCompactGiftComponents: Q, handleClose: $ } = e,
        { activeSubscription: ee, setSelectedPlanId: en, selectedSkuId: et, selectedPlan: ei, priceOptions: el } = (0, h.usePaymentContext)(),
        { isGift: er, giftRecipient: es, selectedGiftStyle: ea, customGiftMessage: ec, setCustomGiftMessage: eo, giftingOrigin: eu, claimableRewards: ed, setSelectedGiftingPromotionReward: em } = (0, x.wD)(),
        ep = (0, S.MY)(es),
        ex = er && (0, S.pO)(es),
        eh = (0, T.cF)(ei, ex, ed),
        ef = (0, N.Z)({ location: 'PremiumPlanSelectStep' });
    (g = null != g ? g : et), (f = null != f ? f : ee), c()(void 0 !== f, 'should not be undefined');
    let [ev, eg] = (0, o.Wu)([v.Z], () => [null != f ? v.Z.get(f.planId) : null, null != M ? v.Z.get(M) : null]),
        eS = (0, _.N)(Y),
        eE = null == eS ? void 0 : eS.subscription_trial,
        ej = (0, C.Ng)(),
        ey = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids,
        eP = null != eg ? eg : ei,
        eI = l.useCallback(
            (e) => {
                null != L ? L(e) : en(e);
            },
            [L, en]
        ),
        eT = null != V ? V : el;
    c()(null != eT, 'Price option has to be set');
    let eN = null != eS && D.nG[eS.trial_id].skus.includes(g),
        eb = null != ej && z.some((e) => (null == ey ? void 0 : ey.includes(e))) && null != ej.discount,
        eC = (0, j.aS)(D.Xh.PREMIUM_MONTH_TIER_2, !1, er, eT);
    l.useEffect(() => {
        K && P.ZP.trackExposure({ location: '5f89bb_1' });
    }, [K]);
    let e_ = (null == eP ? void 0 : eP.id) != null && z.includes(eP.id);
    l.useEffect(() => {
        if (!e_) {
            if (null == ev || er) eI(z[0]);
            else if (null != ev) {
                let e = z.find((e) => e !== ev.id);
                null != e && eI(e);
            }
        }
    }, [e_, er, z, ev, eI]),
        l.useEffect(() => {
            eh && null != ed && ed.length > 0 && em(ed[0]);
        }, [ed, em, eh]);
    let eZ = !ex && (er || (!eN && !eb)) && e_ && q,
        eO = (0, u.useRadioGroup)(),
        eA = (null == eP ? void 0 : eP.id) != null ? (0, j.aS)(eP.id, !1, er, eT) : void 0,
        { ipCountryCode: eR } = (0, b.Z)(),
        ew = 'HR' === eR && null != eA && eA.currency === B.pK.EUR,
        eM = (0, j.Ap)(eT.paymentSourceId),
        eL = l.useMemo(() => {
            if ((null == eE ? void 0 : eE.interval) === D.rV.DAY) return (null == eE ? void 0 : eE.interval_count) > 7 ? G.intl.string(G.t.Z1V2cn) : G.intl.string(G.t.MI1rHh);
            return G.intl.string(G.t['+S5lra']);
        }, [eE]),
        ek = !er && (eb || (null != eE && eN && null != X)),
        eF = null == J ? void 0 : null === (a = J.find((e) => e.subscriptionPlanId === D.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === a ? void 0 : null === (r = a.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === m.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount,
        eD = (e, n, t) => {
            if (ex)
                return (0, i.jsx)(u.FormTitle, {
                    className: s()(W.selectGiftTitle, { [W.compactSelectGiftTitle]: Q }),
                    children: G.intl.string(G.t['3E5hXl'])
                });
            if (!ek)
                return (0, i.jsx)('div', {
                    className: W.selectPlanChooseTitle,
                    children: G.intl.string(G.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === D.a7;
                return (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: n
                                ? G.intl.format(G.t.nG95hI, { endDate: X })
                                : G.intl.format(G.t.s4E7kZ, {
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
                            children: G.intl.format(G.t['nG7g/P'], {
                                numMonths: null == ej ? void 0 : ej.discount.user_usage_limit,
                                discountedPrice: (0, y.T4)(eC.amount - eF, eC.currency),
                                regularPrice: (0, y.T4)(eC.amount, eC.currency)
                            })
                        }),
                        (0, i.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        { enabled: eU } = I.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eB = eu === D.Wt.DM_CHANNEL && eU,
        eG = eB ? W.bodyColumnLeft : W.bodyColumnMiddle,
        eH = () => {
            if (ex && null != ea)
                return eB
                    ? (0, i.jsx)(w.q, {
                          className: H.adjustedGiftMainAnimation,
                          optionsContainerClassName: H.adjustedGiftBoxOptionContainer
                      })
                    : (0, i.jsx)(w.q, {});
            return null;
        },
        eW = () =>
            (0, i.jsx)('div', {
                ...eO,
                children: z.map((e) =>
                    (0, i.jsx)(
                        k.Z,
                        {
                            planId: e,
                            premiumSubscription: er ? null : null != f ? f : null,
                            selectPlan: eI,
                            selected: (null == eP ? void 0 : eP.id) === e,
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
        ez = () => (ew ? (0, i.jsx)(d.Z, { message: G.intl.formatToPlainString(G.t['9hnZoK'], { kunaPriceWithCurrency: (0, y.T4)(7.5345 * eA.amount, B.pK.HRK) }) }) : null);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(ex ? W.stepBodyCustomGift : W.stepBody, { [W.paddingForHalloweenBanner]: ef }),
            children: [
                (0, i.jsxs)('div', {
                    className: ex ? eG : void 0,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            fromBoostCancelModal: !1,
                            className: W.legacyPricingNotice
                        }),
                        eB && eV(),
                        eB ? eW() : eH(),
                        eB && ez()
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: ex ? W.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(F.s, {
                            className: Q ? W.compactSendGiftToUser : void 0,
                            giftRecipient: es
                        }),
                        eB && eH(),
                        (() => {
                            if (ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: G.intl.string(G.t.B3miEx),
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
                                    let t = G.intl.string(G.t.BYa62t),
                                        i = G.intl.string(G.t.CDa6Dg),
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
                                                    return G.intl.string(G.t.q6mxDQ);
                                                case D.Si.TIER_2:
                                                    return G.intl.string(G.t.seZVS0);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_1:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                    return G.intl.string(G.t['7+u2zs']);
                                                case D.Si.TIER_2:
                                                    return G.intl.string(G.t.NG2qcX);
                                                default:
                                                    return l;
                                            }
                                        case D.Si.TIER_2:
                                            switch (r) {
                                                case D.Si.TIER_0:
                                                case D.Si.TIER_1:
                                                    return G.intl.string(G.t['eB0/w8']);
                                                case D.Si.TIER_2:
                                                    return e.interval === D.rV.MONTH ? G.intl.formatToPlainString(G.t['RqUv8/'], { numFreeGuildSubscriptions: D.cb }) : l;
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(ev, g)
                            }),
                        !eB && eV(),
                        !eB && eW(),
                        (0, i.jsx)('div', {
                            children:
                                eZ && null != eP && null != eA
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: W.selectPlanDivider }),
                                              (0, i.jsx)(O.Ji, {
                                                  label: G.intl.string(G.t.txajQE),
                                                  value: (0, i.jsx)(A.Z, {
                                                      price: eA.amount,
                                                      currency: eA.currency,
                                                      intervalType: er ? null : eP.interval,
                                                      intervalCount: eP.intervalCount,
                                                      isPrepaidPaymentSource: eM
                                                  }),
                                                  className: W.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eB && ez(),
                        !er && !ek && q && (0, i.jsx)(d.Z, { message: G.intl.format(G.t.Om31w8, { documentationLink: E.Z.getArticleURL(U.BhN.LOCALIZED_PRICING) }) }),
                        er && !eB && (0, i.jsx)(p.Z, { onClose: $ })
                    ]
                })
            ]
        })
    });
}
function z(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: l, onBackClick: r, showBackButton: s, planOptions: a, shouldRenderUpdatedPaymentModal: c = !1, isTrial: o } = e,
        { paymentSources: d, selectedPlan: m } = (0, h.usePaymentContext)(),
        { isGift: p, claimableRewards: f, giftRecipient: v } = (0, x.wD)(),
        g = (0, S.pO)(v);
    return (
        (l = null != l ? l : d),
        (t = null != t ? t : null == m ? void 0 : m.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && a.includes(t)
                    ? (0, i.jsx)(K, {
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
                          children: G.intl.string(G.t.XqMe3N)
                      }),
                s
                    ? (0, i.jsx)(M.Z, {
                          className: p && g ? W.equalDistantBackButton : void 0,
                          onClick: r
                      })
                    : null
            ]
        })
    );
}
function K(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: l, claimableRewards: r, paymentSources: s, shouldRenderUpdatedPaymentModal: a, isTrial: c } = e,
        d = (0, o.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { step: m, selectedPlan: p } = (0, h.usePaymentContext)(),
        { hasEntitlements: x } = (0, L.H)(t, l),
        v = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (x && !c);
    var S = a ? G.intl.string(G.t.PDTjLC) : G.intl.string(G.t.XqMe3N),
        E = f.h8.ADD_PAYMENT_STEPS;
    return (
        v && (E = f.h8.REVIEW),
        (0, T.id)(p, l, r) && m !== f.h8.SELECT_FREE_SKU && (E = f.h8.SELECT_FREE_SKU),
        (0, i.jsx)(u.Button, {
            onClick: () => n(E),
            children: S
        })
    );
}
