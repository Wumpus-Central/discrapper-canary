(n.d(t, {
    O: () => ee,
    y: () => et
}),
    n(388685));
var r = n(255367),
    i = n(73800),
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
    O = n(63063),
    v = n(74538),
    I = n(937615),
    T = n(296848),
    S = n(711459),
    A = n(367074),
    N = n(109213),
    C = n(717401),
    w = n(847903),
    R = n(104494),
    P = n(639119),
    D = n(811334),
    L = n(553797),
    x = n(346071),
    k = n(927699),
    j = n(987716),
    M = n(311821),
    U = n(459965),
    G = n(811616),
    B = n(251660),
    Z = n(474936),
    F = n(981631),
    V = n(231338),
    H = n(388032),
    Y = n(651427),
    W = n(104327);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            }));
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function $(e, t) {
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
    if (null == e) return {};
    var n,
        r,
        i = Q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function J(e, t) {
    let n = H.intl.string(H.t.BYa62t),
        r = H.intl.string(H.t.CDa6Dg),
        i = (() => {
            switch (e.interval) {
                case Z.rV.YEAR:
                    return n;
                case Z.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case Z.Si.TIER_0:
            switch (a) {
                case Z.Si.TIER_1:
                    return H.intl.string(H.t.q6mxDQ);
                case Z.Si.TIER_2:
                    return H.intl.string(H.t.seZVS0);
                default:
                    return i;
            }
        case Z.Si.TIER_1:
            switch (a) {
                case Z.Si.TIER_0:
                    return H.intl.string(H.t['7+u2zs']);
                case Z.Si.TIER_2:
                    return H.intl.string(H.t.NG2qcX);
                default:
                    return i;
            }
        case Z.Si.TIER_2:
            switch (a) {
                case Z.Si.TIER_0:
                case Z.Si.TIER_1:
                    return H.intl.string(H.t['eB0/w8']);
                case Z.Si.TIER_2:
                    return e.interval === Z.rV.MONTH ? H.intl.formatToPlainString(H.t['RqUv8/'], { numFreeGuildSubscriptions: Z.cb }) : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function ee(e) {
    var t, n, a, s;
    let { premiumSubscription: g, skuId: b, selectedPlanId: M, setSelectedPlanId: U, planGroup: K, priceOptions: q, planOptions: Q, eligibleForMultiMonthPlans: ee, referralTrialOfferId: et, subscriptionPeriodEnd: en, showTotal: er = !0, discountInvoiceItems: ei, useCompactGiftComponents: ea, handleClose: eo } = e,
        { activeSubscription: es, setSelectedPlanId: el, selectedSkuId: ec, selectedPlan: eu, priceOptions: ed, enablePremiumBrandRefresh: ef } = (0, m.JL)(),
        { isGift: e_, giftRecipient: ep, selectedGiftStyle: eh, customGiftMessage: em, setCustomGiftMessage: eg, giftingOrigin: eE, claimableRewards: eb, setSelectedGiftingPromotionReward: ey } = (0, h.wD)(),
        eO = (0, y.MY)(ep),
        ev = e_ && (0, y.pO)(ep),
        eI = (0, C.cF)(eu, ev, eb);
    ((b = null != b ? b : ec), (g = null != g ? g : es), l()(void 0 !== g, 'should not be undefined'));
    let [eT, eS] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != M ? E.Z.get(M) : null]),
        eA = (0, P.N)(et),
        eN = null == eA ? void 0 : eA.subscription_trial,
        eC = (0, R.Ng)(),
        ew = (0, A.Vi)(),
        eR = null == eC || null == (t = eC.discount) ? void 0 : t.plan_ids,
        eP = null != eS ? eS : eu,
        eD = i.useCallback(
            (e) => {
                null != U ? U(e) : el(e);
            },
            [U, el]
        ),
        eL = null != q ? q : ed;
    l()(null != eL, 'Price option has to be set');
    let ex = (0, _.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0
        }),
        ek = null != eA && Z.nG[eA.trial_id].skus.includes(b),
        ej = null != eC && Q.some((e) => (null == eR ? void 0 : eR.includes(e))) && null != eC.discount,
        eM = (0, v.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, !1, e_, eL);
    i.useEffect(() => {
        ee && S.ZP.trackExposure({ location: '5f89bb_1' });
    }, [ee]);
    let eU = (null == eP ? void 0 : eP.id) != null && Q.includes(eP.id);
    (i.useEffect(() => {
        if (!eU) {
            if (null == eT || e_) eD(Q[0]);
            else if (null != eT) {
                let e = Q.find((e) => e !== eT.id);
                null != e && eD(e);
            }
        }
    }, [eU, e_, Q, eT, eD]),
        i.useEffect(() => {
            eI && null != eb && eb.length > 0 && ey(eb[0]);
        }, [eb, ey, eI]));
    let eG = !ev && (e_ || (!ek && !ej)) && eU && er,
        eB = (0, u.arW)(),
        { ref: eZ } = eB,
        eF = X(eB, ['ref']),
        eV = (null == eP ? void 0 : eP.id) != null ? (0, v.aS)(eP.id, !1, e_, eL) : void 0,
        { ipCountryCode: eH } = (0, w.Z)(),
        eY = 'HR' === eH && null != eV && eV.currency === V.pK.EUR,
        eW = (0, v.Ap)(eL.paymentSourceId),
        eK = i.useMemo(() => ((null == eN ? void 0 : eN.interval) === Z.rV.DAY ? ((null == eN ? void 0 : eN.interval_count) > 7 ? H.intl.string(H.t.Z1V2cn) : H.intl.string(H.t.MI1rHh)) : H.intl.string(H.t['+S5lra'])), [eN]),
        ez = !e_ && (ej || (null != eN && ek && null != en)),
        eq = null == ei || null == (s = ei.find((e) => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || null == (a = s.discounts) || null == (n = a.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN)) ? void 0 : n.amount,
        e$ = (e, t, n) => {
            if (ev)
                return (0, r.jsx)(u.vwX, {
                    className: o()(W.selectGiftTitle, { [W.compactSelectGiftTitle]: ea }),
                    children: H.intl.string(H.t['3E5hXl'])
                });
            if (!ez)
                return (0, r.jsx)('div', {
                    className: W.selectPlanChooseTitle,
                    children: H.intl.string(H.t.a19jpa)
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === Z.a7;
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: t
                                ? H.intl.format(H.t.nG95hI, { endDate: en })
                                : H.intl.format(H.t.s4E7kZ, {
                                      trialEnd: en,
                                      trialPeriod: eK
                                  })
                        }),
                        (0, r.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
            }
            if (n && null != eq && null != eM && M === Z.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            className: W.trialPlanSelectHeader,
                            children: H.intl.format(H.t['nG7g/P'], {
                                numMonths: null == eC ? void 0 : eC.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(eM.amount - eq, eM.currency),
                                regularPrice: (0, I.T4)(eM.amount, eM.currency)
                            })
                        }),
                        (0, r.jsx)('hr', { className: W.planSelectSeparator })
                    ]
                });
        },
        eX = () => {
            if (eO === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eg)
                return (0, r.jsx)(k.Z, {
                    sectionTitle: H.intl.string(H.t.B3miEx),
                    className: o()(W.customGiftMessageWrapper, { [W.compactCustomGiftMessageWrapper]: ea }),
                    innerClassName: W.customGiftMessage,
                    onTextChange: (e) => eg(e),
                    pendingText: em,
                    currentText: em
                });
        },
        { enabled: eQ } = N.G.useExperiment({ location: 'PremiumPlanSelectStep' }, { autoTrackExposure: !1 }),
        eJ = eE === Z.Wt.DM_CHANNEL && eQ,
        e0 = eJ ? W.bodyColumnLeft : W.bodyColumnMiddle,
        e1 = () =>
            ev && null != eh
                ? eJ
                    ? (0, r.jsx)(j.q, {
                          className: Y.adjustedGiftMainAnimation,
                          optionsContainerClassName: Y.adjustedGiftBoxOptionContainer
                      })
                    : (0, r.jsx)(j.q, {})
                : null,
        e2 = () =>
            (0, r.jsx)(
                'div',
                $(z({ ref: eZ }, eF), {
                    children: Q.map((e) =>
                        (0, r.jsx)(
                            G.Z,
                            {
                                planId: e,
                                premiumSubscription: e_ ? null : null != g ? g : null,
                                selectPlan: eD,
                                selected: (null == eP ? void 0 : eP.id) === e,
                                priceOptions: eL,
                                shouldShowUpdatedPaymentModal: ez,
                                isEligibleForDiscount: ej,
                                discountAmountOff: eq,
                                isEligibleForTrial: ek
                            },
                            e
                        )
                    )
                })
            ),
        e3 = () => e$(eA, ek, ej),
        e5 = () => (eY ? (0, r.jsx)(d.Z, { message: H.intl.formatToPlainString(H.t['9hnZoK'], { kunaPriceWithCurrency: (0, I.T4)(7.5345 * eV.amount, V.pK.HRK) }) }) : null),
        e4 = null != g && null != M && (0, T.R4)(g, M, K),
        e6 = ex.isFractionalPremiumActive && (null == g || e4) && !e_ && null != M && Z.dJ.has(M);
    return (0, r.jsxs)('div', {
        className: ev ? W.stepBodyCustomGift : W.stepBody,
        children: [
            e6 &&
                (0, r.jsx)(x.n, {
                    fractionalPremiumInfo: ex,
                    enablePremiumBrandRefresh: ef
                }),
            (0, r.jsxs)('div', {
                className: ev ? e0 : void 0,
                children: [eJ && e3(), eJ ? e2() : e1(), eJ && e5()]
            }),
            (0, r.jsxs)('div', {
                className: ev ? W.bodyColumnRight : void 0,
                children: [
                    (0, r.jsx)(B.s, {
                        className: ea ? W.compactSendGiftToUser : void 0,
                        giftRecipient: ep
                    }),
                    eJ && e1(),
                    eX(),
                    null != eT &&
                        !e_ &&
                        !e6 &&
                        !ew &&
                        (0, r.jsx)('div', {
                            className: W.bodyText,
                            children: J(eT, b)
                        }),
                    !eJ && e3(),
                    !eJ && e2(),
                    (0, r.jsx)('div', {
                        children:
                            eG && null != eP && null != eV
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)('div', { className: W.selectPlanDivider }),
                                          (0, r.jsx)(D.az, {
                                              label: H.intl.string(H.t.txajQE),
                                              value: (0, r.jsx)(L.Z, {
                                                  price: eV.amount,
                                                  currency: eV.currency,
                                                  intervalType: e_ ? null : eP.interval,
                                                  intervalCount: eP.intervalCount,
                                                  isPrepaidPaymentSource: eW
                                              }),
                                              className: W.selectPlanTotalRow
                                          })
                                      ]
                                  })
                                : null
                    }),
                    !eJ && e5(),
                    !e_ && !ez && er && (0, r.jsx)(d.Z, { message: H.intl.format(H.t.Om31w8, { documentationLink: O.Z.getArticleURL(F.BhN.LOCALIZED_PRICING) }) }),
                    e_ && !eJ && (0, r.jsx)(p.Z, { onClose: eo })
                ]
            })
        ]
    });
}
function et(e) {
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
                    ? (0, r.jsx)(en, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: _,
                          claimableRewards: p,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: c
                      })
                    : (0, r.jsx)(u.zxk, {
                          variant: 'primary',
                          text: H.intl.string(H.t.XqMe3N),
                          disabled: !0
                      }),
                o
                    ? (0, r.jsx)(M.Z, {
                          className: _ && E ? W.equalDistantBackButton : void 0,
                          onClick: a
                      })
                    : null
            ]
        })
    );
}
function en(e) {
    let { onStepChange: t, selectedPlanId: n, isGift: i, claimableRewards: a, paymentSources: o, shouldRenderUpdatedPaymentModal: s, isTrial: l } = e,
        d = (0, c.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        { step: f, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: p } = (0, U.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(o).length > 0 || (p && !l);
    var E = s ? H.intl.string(H.t.PDTjLC) : H.intl.string(H.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, C.id)(_, i, a) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            variant: 'primary',
            text: E,
            onClick: () => t(y)
        })
    );
}
