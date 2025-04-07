n.d(t, {
    O: () => $,
    y: () => ee
}),
    n(388685);
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
    S = n(296848),
    T = n(711459),
    N = n(109213),
    A = n(717401),
    C = n(857039),
    R = n(847903),
    P = n(104494),
    w = n(639119),
    D = n(55610),
    L = n(653798),
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
    W = n(388032),
    Y = n(651427),
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
    let n = W.NW.string(W.t.BYa62t),
        r = W.NW.string(W.t.CDa6Dg),
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
                    return W.NW.string(W.t.q6mxDQ);
                case F.Si.TIER_2:
                    return W.NW.string(W.t.seZVS0);
                default:
                    return i;
            }
        case F.Si.TIER_1:
            switch (o) {
                case F.Si.TIER_0:
                    return W.NW.string(W.t['7+u2zs']);
                case F.Si.TIER_2:
                    return W.NW.string(W.t.NG2qcX);
                default:
                    return i;
            }
        case F.Si.TIER_2:
            switch (o) {
                case F.Si.TIER_0:
                case F.Si.TIER_1:
                    return W.NW.string(W.t['eB0/w8']);
                case F.Si.TIER_2:
                    return e.interval === F.rV.MONTH ? W.NW.formatToPlainString(W.t['RqUv8/'], { numFreeGuildSubscriptions: F.cb }) : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function $(e) {
    var t, n, o, s;
    let { premiumSubscription: g, skuId: b, selectedPlanId: U, setSelectedPlanId: G, planGroup: z, priceOptions: Q, planOptions: $, eligibleForMultiMonthPlans: ee, referralTrialOfferId: et, subscriptionPeriodEnd: en, showTotal: er = !0, discountInvoiceItems: ei, useCompactGiftComponents: eo, handleClose: ea } = e,
        { activeSubscription: es, setSelectedPlanId: el, selectedSkuId: ec, selectedPlan: eu, priceOptions: ed } = (0, m.JL)(),
        { isGift: ef, giftRecipient: e_, selectedGiftStyle: ep, customGiftMessage: eh, setCustomGiftMessage: em, giftingOrigin: eg, claimableRewards: eE, setSelectedGiftingPromotionReward: eb } = (0, h.wD)(),
        ey = (0, y.MY)(e_),
        ev = ef && (0, y.pO)(e_),
        eO = (0, A.cF)(eu, ev, eE),
        eI = (0, C.Z)({ location: 'PremiumPlanSelectStep' });
    (b = null != b ? b : ec), (g = null != g ? g : es), l()(void 0 !== g, 'should not be undefined');
    let [eS, eT] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != U ? E.Z.get(U) : null]),
        eN = (0, w.N)(et),
        eA = null == eN ? void 0 : eN.subscription_trial,
        eC = (0, P.Ng)(),
        eR = null == eC || null == (t = eC.discount) ? void 0 : t.plan_ids,
        eP = null != eT ? eT : eu,
        ew = i.useCallback(
            (e) => {
                null != G ? G(e) : el(e);
            },
            [G, el]
        ),
        eD = null != Q ? Q : ed;
    l()(null != eD, 'Price option has to be set');
    let eL = (0, _.Z)(),
        ex = null != eN && F.nG[eN.trial_id].skus.includes(b),
        eM = null != eC && $.some((e) => (null == eR ? void 0 : eR.includes(e))) && null != eC.discount,
        ek = (0, O.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, ef, eD);
    i.useEffect(() => {
        ee && T.ZP.trackExposure({ location: '5f89bb_1' });
    }, [ee]);
    let ej = (null == eP ? void 0 : eP.id) != null && $.includes(eP.id);
    i.useEffect(() => {
        if (!ej) {
            if (null == eS || ef) ew($[0]);
            else if (null != eS) {
                let e = $.find((e) => e !== eS.id);
                null != e && ew(e);
            }
        }
    }, [ej, ef, $, eS, ew]),
        i.useEffect(() => {
            eO && null != eE && eE.length > 0 && eb(eE[0]);
        }, [eE, eb, eO]);
    let eU = !ev && (ef || (!ex && !eM)) && ej && er,
        eG = (0, u.arW)(),
        eB = (null == eP ? void 0 : eP.id) != null ? (0, O.aS)(eP.id, !1, ef, eD) : void 0,
        { ipCountryCode: eV } = (0, R.Z)(),
        eF = 'HR' === eV && null != eB && eB.currency === H.pK.EUR,
        eZ = (0, O.Ap)(eD.paymentSourceId),
        eH = i.useMemo(() => ((null == eA ? void 0 : eA.interval) === F.rV.DAY ? ((null == eA ? void 0 : eA.interval_count) > 7 ? W.NW.string(W.t.Z1V2cn) : W.NW.string(W.t.MI1rHh)) : W.NW.string(W.t['+S5lra'])), [eA]),
        eW = !ef && (eM || (null != eA && ex && null != en)),
        eY = null == ei || null == (s = ei.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) || null == (o = s.discounts) || null == (n = o.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
        eK = (e, t, n) => {
            if (ev)
                return (0, r.jsx)(u.vwX, {
                    className: a()(K.selectGiftTitle, { [K.compactSelectGiftTitle]: eo }),
                    children: W.NW.string(W.t['3E5hXl'])
                });
            if (!eW)
                return (0, r.jsx)('div', {
                    className: K.selectPlanChooseTitle,
                    children: W.NW.string(W.t.a19jpa)
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: K.trialPlanSelectHeader,
                            children: t
                                ? W.NW.format(W.t.nG95hI, { endDate: en })
                                : W.NW.format(W.t.s4E7kZ, {
                                      trialEnd: en,
                                      trialPeriod: eH
                                  })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eY && null != ek && U === F.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: K.trialPlanSelectHeader,
                            children: W.NW.format(W.t['nG7g/P'], {
                                numMonths: null == eC ? void 0 : eC.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(ek.amount - eY, ek.currency),
                                regularPrice: (0, I.T4)(ek.amount, ek.currency)
                            })
                        }),
                        (0, r.jsx)('hr', { className: K.planSelectSeparator })
                    ]
                });
        },
        ez = () => {
            if (ey === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != em)
                return (0, r.jsx)(k.Z, {
                    sectionTitle: W.NW.string(W.t.B3miEx),
                    className: a()(K.customGiftMessageWrapper, { [K.compactCustomGiftMessageWrapper]: eo }),
                    innerClassName: K.customGiftMessage,
                    onTextChange: (e) => em(e),
                    pendingText: eh,
                    currentText: eh
                });
        },
        { enabled: eq } = N.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eQ = eg === F.Wt.DM_CHANNEL && eq,
        eX = eQ ? K.bodyColumnLeft : K.bodyColumnMiddle,
        eJ = () =>
            ev && null != ep
                ? eQ
                    ? (0, r.jsx)(j.q, {
                          className: Y.adjustedGiftMainAnimation,
                          optionsContainerClassName: Y.adjustedGiftBoxOptionContainer
                      })
                    : (0, r.jsx)(j.q, {})
                : null,
        e$ = () =>
            (0, r.jsx)(
                'div',
                X(q({}, eG), {
                    children: $.map((e) =>
                        (0, r.jsx)(
                            B.Z,
                            {
                                planId: e,
                                premiumSubscription: ef ? null : null != g ? g : null,
                                selectPlan: ew,
                                selected: (null == eP ? void 0 : eP.id) === e,
                                priceOptions: eD,
                                shouldShowUpdatedPaymentModal: eW,
                                isEligibleForDiscount: eM,
                                discountAmountOff: eY,
                                isEligibleForTrial: ex
                            },
                            e
                        )
                    )
                })
            ),
        e0 = () => eK(eN, ex, eM),
        e1 = () => (eF ? (0, r.jsx)(d.Z, { message: W.NW.formatToPlainString(W.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eB.amount, H.pK.HRK) }) }) : null),
        e2 = null != g && null != U && (0, S.R4)(g, U, z),
        e3 = eL.isFractionalPremiumActive && (null == g || e2) && !ef;
    return (0, r.jsxs)('div', {
        className: a()(ev ? K.stepBodyCustomGift : K.stepBody, { [K.paddingForHalloweenBanner]: eI }),
        children: [
            e3 && (0, r.jsx)(M.n, { fractionalPremiumInfo: eL }),
            (0, r.jsxs)('div', {
                className: ev ? eX : void 0,
                children: [
                    (0, r.jsx)(D.Z, {
                        fromBoostCancelModal: !1,
                        className: K.legacyPricingNotice
                    }),
                    eQ && e0(),
                    eQ ? e$() : eJ(),
                    eQ && e1()
                ]
            }),
            (0, r.jsxs)('div', {
                className: ev ? K.bodyColumnRight : void 0,
                children: [
                    (0, r.jsx)(V.s, {
                        className: eo ? K.compactSendGiftToUser : void 0,
                        giftRecipient: e_
                    }),
                    eQ && eJ(),
                    ez(),
                    null != eS &&
                        !ef &&
                        !e3 &&
                        (0, r.jsx)('div', {
                            className: K.bodyText,
                            children: J(eS, b)
                        }),
                    !eQ && e0(),
                    !eQ && e$(),
                    (0, r.jsx)('div', {
                        children:
                            eU && null != eP && null != eB
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)('div', { className: K.selectPlanDivider }),
                                          (0, r.jsx)(L.Ji, {
                                              label: W.NW.string(W.t.txajQE),
                                              value: (0, r.jsx)(x.Z, {
                                                  price: eB.amount,
                                                  currency: eB.currency,
                                                  intervalType: ef ? null : eP.interval,
                                                  intervalCount: eP.intervalCount,
                                                  isPrepaidPaymentSource: eZ
                                              }),
                                              className: K.selectPlanTotalRow
                                          })
                                      ]
                                  })
                                : null
                    }),
                    !eQ && e1(),
                    !ef && !eW && er && (0, r.jsx)(d.Z, { message: W.NW.format(W.t.Om31w8, { documentationLink: v.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING) }) }),
                    ef && !eQ && (0, r.jsx)(p.Z, { onClose: ea })
                ]
            })
        ]
    });
}
function ee(e) {
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
                    ? (0, r.jsx)(et, {
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
                          children: W.NW.string(W.t.XqMe3N)
                      }),
                a
                    ? (0, r.jsx)(U.Z, {
                          className: _ && E ? K.equalDistantBackButton : void 0,
                          onClick: o
                      })
                    : null
            ]
        })
    );
}
function et(e) {
    let { onStepChange: t, selectedPlanId: n, isGift: i, claimableRewards: o, paymentSources: a, shouldRenderUpdatedPaymentModal: s, isTrial: l } = e,
        d = (0, c.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        { step: f, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: p } = (0, G.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(a).length > 0 || (p && !l);
    var E = s ? W.NW.string(W.t.PDTjLC) : W.NW.string(W.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, A.id)(_, i, o) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            onClick: () => t(y),
            children: E
        })
    );
}
