r.d(n, {
    O: function () {
        return z;
    },
    y: function () {
        return q;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(512722),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    p = r(490504),
    h = r(911969),
    _ = r(940824),
    m = r(987209),
    g = r(563132),
    E = r(409813),
    v = r(509545),
    y = r(78839),
    b = r(669079),
    I = r(63063),
    T = r(74538),
    S = r(937615),
    A = r(711459),
    C = r(109213),
    N = r(717401),
    R = r(857039),
    O = r(847903),
    D = r(104494),
    x = r(639119),
    L = r(55610),
    w = r(653798),
    P = r(553797),
    M = r(927699),
    k = r(987716),
    U = r(311821),
    B = r(459965),
    G = r(811616),
    Z = r(251660),
    F = r(474936),
    V = r(981631),
    j = r(231338),
    H = r(388032),
    Y = r(461405),
    W = r(615945);
function K(e, n) {
    let r = H.intl.string(H.t.BYa62t),
        i = H.intl.string(H.t.CDa6Dg),
        a = (() => {
            switch (e.interval) {
                case F.rV.YEAR:
                    return r;
                case F.rV.MONTH:
                default:
                    return i;
            }
        })(),
        o = e.skuId;
    switch (n) {
        case F.Si.TIER_0:
            switch (o) {
                case F.Si.TIER_1:
                    return H.intl.string(H.t.q6mxDQ);
                case F.Si.TIER_2:
                    return H.intl.string(H.t.seZVS0);
                default:
                    return a;
            }
        case F.Si.TIER_1:
            switch (o) {
                case F.Si.TIER_0:
                    return H.intl.string(H.t['7+u2zs']);
                case F.Si.TIER_2:
                    return H.intl.string(H.t.NG2qcX);
                default:
                    return a;
            }
        case F.Si.TIER_2:
            switch (o) {
                case F.Si.TIER_0:
                case F.Si.TIER_1:
                    return H.intl.string(H.t['eB0/w8']);
                case F.Si.TIER_2:
                    return e.interval === F.rV.MONTH ? H.intl.formatToPlainString(H.t['RqUv8/'], { numFreeGuildSubscriptions: F.cb }) : a;
                default:
                    return a;
            }
        default:
            return a;
    }
}
function z(e) {
    var n, r, i, s;
    let { premiumSubscription: u, skuId: E, selectedPlanId: y, setSelectedPlanId: U, priceOptions: B, planOptions: z, eligibleForMultiMonthPlans: q, referralTrialOfferId: Q, subscriptionPeriodEnd: X, showTotal: J = !0, discountInvoiceItems: $, useCompactGiftComponents: ee, handleClose: et } = e,
        { activeSubscription: en, setSelectedPlanId: er, selectedSkuId: ei, selectedPlan: ea, priceOptions: eo } = (0, g.usePaymentContext)(),
        { isGift: es, giftRecipient: el, selectedGiftStyle: eu, customGiftMessage: ec, setCustomGiftMessage: ed, giftingOrigin: ef, claimableRewards: ep, setSelectedGiftingPromotionReward: eh } = (0, m.wD)(),
        e_ = (0, b.MY)(el),
        em = es && (0, b.pO)(el),
        eg = (0, N.cF)(ea, em, ep),
        eE = (0, R.Z)({ location: 'PremiumPlanSelectStep' });
    (E = null != E ? E : ei), (u = null != u ? u : en), c()(void 0 !== u, 'should not be undefined');
    let [ev, ey] = (0, d.Wu)([v.Z], () => [null != u ? v.Z.get(u.planId) : null, null != y ? v.Z.get(y) : null]),
        eb = (0, x.N)(Q),
        eI = null == eb ? void 0 : eb.subscription_trial,
        eT = (0, D.Ng)(),
        eS = null == eT ? void 0 : null === (n = eT.discount) || void 0 === n ? void 0 : n.plan_ids,
        eA = null != ey ? ey : ea,
        eC = o.useCallback(
            (e) => {
                null != U ? U(e) : er(e);
            },
            [U, er]
        ),
        eN = null != B ? B : eo;
    c()(null != eN, 'Price option has to be set');
    let eR = null != eb && F.nG[eb.trial_id].skus.includes(E),
        eO = null != eT && z.some((e) => (null == eS ? void 0 : eS.includes(e))) && null != eT.discount,
        eD = (0, T.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, es, eN);
    o.useEffect(() => {
        q && A.ZP.trackExposure({ location: '5f89bb_1' });
    }, [q]);
    let ex = (null == eA ? void 0 : eA.id) != null && z.includes(eA.id);
    o.useEffect(() => {
        if (!ex) {
            if (null == ev || es) eC(z[0]);
            else if (null != ev) {
                let e = z.find((e) => e !== ev.id);
                null != e && eC(e);
            }
        }
    }, [ex, es, z, ev, eC]),
        o.useEffect(() => {
            eg && null != ep && ep.length > 0 && eh(ep[0]);
        }, [ep, eh, eg]);
    let eL = !em && (es || (!eR && !eO)) && ex && J,
        ew = (0, f.useRadioGroup)(),
        eP = (null == eA ? void 0 : eA.id) != null ? (0, T.aS)(eA.id, !1, es, eN) : void 0,
        { ipCountryCode: eM } = (0, O.Z)(),
        ek = 'HR' === eM && null != eP && eP.currency === j.pK.EUR,
        eU = (0, T.Ap)(eN.paymentSourceId),
        eB = o.useMemo(() => {
            if ((null == eI ? void 0 : eI.interval) === F.rV.DAY) return (null == eI ? void 0 : eI.interval_count) > 7 ? H.intl.string(H.t.Z1V2cn) : H.intl.string(H.t.MI1rHh);
            return H.intl.string(H.t['+S5lra']);
        }, [eI]),
        eG = !es && (eO || (null != eI && eR && null != X)),
        eZ = null == $ ? void 0 : null === (s = $.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === s ? void 0 : null === (i = s.discounts) || void 0 === i ? void 0 : null === (r = i.find((e) => e.type === h.eW.SUBSCRIPTION_PLAN)) || void 0 === r ? void 0 : r.amount,
        eF = (e, n, r) => {
            if (em)
                return (0, a.jsx)(f.FormTitle, {
                    className: l()(W.selectGiftTitle, { [W.compactSelectGiftTitle]: ee }),
                    children: H.intl.string(H.t['3E5hXl'])
                });
            if (!eG)
                return (0, a.jsx)('div', {
                    className: W.selectPlanChooseTitle,
                    children: H.intl.string(H.t.a19jpa)
                });
            if (n) {
                let n = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: n
                                ? H.intl.format(H.t.nG95hI, { endDate: X })
                                : H.intl.format(H.t.s4E7kZ, {
                                      trialEnd: X,
                                      trialPeriod: eB
                                  })
                        }),
                        (0, a.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
            }
            if (r && null != eZ && null != eD && y === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: H.intl.format(H.t['nG7g/P'], {
                                numMonths: null == eT ? void 0 : eT.discount.user_usage_limit,
                                discountedPrice: (0, S.T4)(eD.amount - eZ, eD.currency),
                                regularPrice: (0, S.T4)(eD.amount, eD.currency)
                            })
                        }),
                        (0, a.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        eV = () => {
            if (e_ === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ed)
                return (0, a.jsx)(M.Z, {
                    sectionTitle: H.intl.string(H.t.B3miEx),
                    className: l()(W.customGiftMessageWrapper, { [W.compactCustomGiftMessageWrapper]: ee }),
                    innerClassName: W.customGiftMessage,
                    onTextChange: (e) => ed(e),
                    pendingText: ec,
                    currentText: ec
                });
        },
        { enabled: ej } = C.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eH = ef === F.Wt.DM_CHANNEL && ej,
        eY = eH ? W.bodyColumnLeft : W.bodyColumnMiddle,
        eW = () => {
            if (em && null != eu)
                return eH
                    ? (0, a.jsx)(k.q, {
                          className: Y.adjustedGiftMainAnimation,
                          optionsContainerClassName: Y.adjustedGiftBoxOptionContainer
                      })
                    : (0, a.jsx)(k.q, {});
            return null;
        },
        eK = () =>
            (0, a.jsx)('div', {
                ...ew,
                children: z.map((e) =>
                    (0, a.jsx)(
                        G.Z,
                        {
                            planId: e,
                            premiumSubscription: es ? null : null != u ? u : null,
                            selectPlan: eC,
                            selected: (null == eA ? void 0 : eA.id) === e,
                            priceOptions: eN,
                            shouldShowUpdatedPaymentModal: eG,
                            isEligibleForDiscount: eO,
                            discountAmountOff: eZ,
                            isEligibleForTrial: eR
                        },
                        e
                    )
                )
            }),
        ez = () => eF(eb, eR, eO),
        eq = () => (ek ? (0, a.jsx)(p.Z, { message: H.intl.formatToPlainString(H.t['9hnZoK'], { kunaPriceWithCurrency: (0, S.T4)(7.5345 * eP.amount, j.pK.HRK) }) }) : null);
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: l()(em ? W.stepBodyCustomGift : W.stepBody, { [W.paddingForHalloweenBanner]: eE }),
            children: [
                (0, a.jsxs)('div', {
                    className: em ? eY : void 0,
                    children: [
                        (0, a.jsx)(L.Z, {
                            fromBoostCancelModal: !1,
                            className: W.legacyPricingNotice
                        }),
                        eH && ez(),
                        eH ? eK() : eW(),
                        eH && eq()
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: em ? W.bodyColumnRight : void 0,
                    children: [
                        (0, a.jsx)(Z.s, {
                            className: ee ? W.compactSendGiftToUser : void 0,
                            giftRecipient: el
                        }),
                        eH && eW(),
                        eV(),
                        null != ev &&
                            !es &&
                            (0, a.jsx)('div', {
                                className: W.bodyText,
                                children: K(ev, E)
                            }),
                        !eH && ez(),
                        !eH && eK(),
                        (0, a.jsx)('div', {
                            children:
                                eL && null != eA && null != eP
                                    ? (0, a.jsxs)('div', {
                                          children: [
                                              (0, a.jsx)('div', { className: W.selectPlanDivider }),
                                              (0, a.jsx)(w.Ji, {
                                                  label: H.intl.string(H.t.txajQE),
                                                  value: (0, a.jsx)(P.Z, {
                                                      price: eP.amount,
                                                      currency: eP.currency,
                                                      intervalType: es ? null : eA.interval,
                                                      intervalCount: eA.intervalCount,
                                                      isPrepaidPaymentSource: eU
                                                  }),
                                                  className: W.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        !eH && eq(),
                        !es && !eG && J && (0, a.jsx)(p.Z, { message: H.intl.format(H.t.Om31w8, { documentationLink: I.Z.getArticleURL(V.BhN.LOCALIZED_PRICING) }) }),
                        es && !eH && (0, a.jsx)(_.Z, { onClose: et })
                    ]
                })
            ]
        })
    });
}
function q(e) {
    let { onStepChange: n, selectedPlanId: r, paymentSources: i, onBackClick: o, showBackButton: s, planOptions: l, shouldRenderUpdatedPaymentModal: u = !1, isTrial: c } = e,
        { paymentSources: d, selectedPlan: p } = (0, g.usePaymentContext)(),
        { isGift: h, claimableRewards: _, giftRecipient: E } = (0, m.wD)(),
        v = (0, b.pO)(E);
    return (
        (i = null != i ? i : d),
        (r = null != r ? r : null == p ? void 0 : p.id),
        (0, a.jsxs)(a.Fragment, {
            children: [
                null != r && l.includes(r)
                    ? (0, a.jsx)(Q, {
                          paymentSources: i,
                          onStepChange: n,
                          selectedPlanId: r,
                          isGift: h,
                          claimableRewards: _,
                          shouldRenderUpdatedPaymentModal: u,
                          isTrial: c
                      })
                    : (0, a.jsx)(f.Button, {
                          disabled: !0,
                          children: H.intl.string(H.t.XqMe3N)
                      }),
                s
                    ? (0, a.jsx)(U.Z, {
                          className: h && v ? W.equalDistantBackButton : void 0,
                          onClick: o
                      })
                    : null
            ]
        })
    );
}
function Q(e) {
    let { onStepChange: n, selectedPlanId: r, isGift: i, claimableRewards: o, paymentSources: s, shouldRenderUpdatedPaymentModal: l, isTrial: u } = e,
        c = (0, d.e7)([y.ZP], () => y.ZP.getPremiumTypeSubscription()),
        { step: p, selectedPlan: h } = (0, g.usePaymentContext)(),
        { hasEntitlements: _ } = (0, B.H)(r, i),
        m = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (_ && !u);
    var v = l ? H.intl.string(H.t.PDTjLC) : H.intl.string(H.t.XqMe3N),
        b = E.h8.ADD_PAYMENT_STEPS;
    return (
        m && (b = E.h8.REVIEW),
        (0, N.id)(h, i, o) && p !== E.h8.SELECT_FREE_SKU && (b = E.h8.SELECT_FREE_SKU),
        (0, a.jsx)(f.Button, {
            onClick: () => n(b),
            children: v
        })
    );
}
