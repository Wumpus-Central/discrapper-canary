n.d(t, {
    O: () => J,
    y: () => $,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    C = n(717401),
    N = n(847903),
    R = n(104494),
    P = n(639119),
    w = n(811334),
    D = n(553797),
    x = n(346071),
    L = n(927699),
    j = n(987716),
    M = n(311821),
    k = n(459965),
    U = n(811616),
    G = n(251660),
    B = n(474936),
    Z = n(981631),
    V = n(231338),
    F = n(388032),
    H = n(624379);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = X(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Q(e, t) {
    let n = F.intl.string(F.t.BYa62t),
        r = F.intl.string(F.t.CDa6Dg),
        i = (() => {
            switch (e.interval) {
                case B.rV.YEAR:
                    return n;
                case B.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case B.Si.TIER_0:
            switch (a) {
                case B.Si.TIER_1:
                    return F.intl.string(F.t.q6mxDQ);
                case B.Si.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case B.Si.TIER_1:
            switch (a) {
                case B.Si.TIER_0:
                    return F.intl.string(F.t["7+u2zs"]);
                case B.Si.TIER_2:
                    return F.intl.string(F.t.NG2qcX);
                default:
                    return i;
            }
        case B.Si.TIER_2:
            switch (a) {
                case B.Si.TIER_0:
                case B.Si.TIER_1:
                    return F.intl.string(F.t["eB0/w8"]);
                case B.Si.TIER_2:
                    return e.interval === B.rV.MONTH
                        ? F.intl.formatToPlainString(F.t["RqUv8/"], { numFreeGuildSubscriptions: B.cb })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function J(e) {
    var t, n, a, s;
    let {
            premiumSubscription: g,
            skuId: b,
            selectedPlanId: M,
            setSelectedPlanId: k,
            planGroup: Y,
            priceOptions: K,
            planOptions: X,
            eligibleForMultiMonthPlans: J,
            referralTrialOfferId: $,
            subscriptionPeriodEnd: ee,
            showTotal: et = !0,
            discountInvoiceItems: en,
            useCompactGiftComponents: er,
            handleClose: ei,
        } = e,
        {
            activeSubscription: ea,
            setSelectedPlanId: eo,
            selectedSkuId: es,
            selectedPlan: el,
            priceOptions: ec,
            enablePremiumBrandRefresh: eu,
        } = (0, m.JL)(),
        {
            isGift: ed,
            giftRecipient: ef,
            selectedGiftStyle: e_,
            customGiftMessage: ep,
            setCustomGiftMessage: eh,
            claimableRewards: em,
            setSelectedGiftingPromotionReward: eg,
        } = (0, h.wD)(),
        eE = (0, C.cF)(el, ed && (0, y.pO)(ef), em);
    (b = null != b ? b : es), (g = null != g ? g : ea), l()(void 0 !== g, "should not be undefined");
    let [eb, ey] = (0, c.Wu)([E.Z], () => [null != g ? E.Z.get(g.planId) : null, null != M ? E.Z.get(M) : null]),
        eO = (0, P.N)($),
        ev = null == eO ? void 0 : eO.subscription_trial,
        eI = (0, R.Ng)(),
        eT = (0, A.Vi)(),
        eS = null == eI || null == (t = eI.discount) ? void 0 : t.plan_ids,
        eA = null != ey ? ey : el,
        eC = i.useCallback(
            (e) => {
                null != k ? k(e) : eo(e);
            },
            [k, eo],
        ),
        eN = null != K ? K : ec;
    l()(null != eN, "Price option has to be set");
    let eR = (0, _.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        eP = null != eO && B.nG[eO.trial_id].skus.includes(b),
        ew = null != eI && X.some((e) => (null == eS ? void 0 : eS.includes(e))) && null != eI.discount,
        eD = (0, v.aS)(B.Xh.PREMIUM_MONTH_TIER_2, !1, ed, eN);
    i.useEffect(() => {
        J && S.ZP.trackExposure({ location: "5f89bb_1" });
    }, [J]);
    let ex = (null == eA ? void 0 : eA.id) != null && X.includes(eA.id);
    i.useEffect(() => {
        if (!ex) {
            if (null == eb || ed) eC(X[0]);
            else if (null != eb) {
                let e = X.find((e) => e !== eb.id);
                null != e && eC(e);
            }
        }
    }, [ex, ed, X, eb, eC]),
        i.useEffect(() => {
            eE && null != em && em.length > 0 && eg(em[0]);
        }, [em, eg, eE]);
    let eL = (0, u.arW)(),
        { ref: ej } = eL,
        eM = q(eL, ["ref"]),
        ek = (null == eA ? void 0 : eA.id) != null ? (0, v.aS)(eA.id, !1, ed, eN) : void 0,
        { ipCountryCode: eU } = (0, N.Z)(),
        eG = "HR" === eU && null != ek && ek.currency === V.pK.EUR,
        eB = (0, v.Ap)(eN.paymentSourceId),
        eZ = i.useMemo(
            () =>
                (null == ev ? void 0 : ev.interval) === B.rV.DAY
                    ? (null == ev ? void 0 : ev.interval_count) > 7
                        ? F.intl.string(F.t.Z1V2cn)
                        : F.intl.string(F.t.MI1rHh)
                    : F.intl.string(F.t["+S5lra"]),
            [ev],
        ),
        eV = !ed && (ew || (null != ev && eP && null != ee)),
        eF =
            null == en ||
            null == (s = en.find((e) => e.subscriptionPlanId === B.Xh.PREMIUM_MONTH_TIER_2)) ||
            null == (a = s.discounts) ||
            null == (n = a.find((e) => e.type === f.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : n.amount,
        eH = (e, t, n) => {
            if (!eV)
                return (0, r.jsx)("div", {
                    className: H.selectPlanChooseTitle,
                    children: F.intl.string(F.t.a19jpa),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === B.a7;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: H.trialPlanSelectHeader,
                            children: t
                                ? F.intl.format(F.t.nG95hI, { endDate: ee })
                                : F.intl.format(F.t.s4E7kZ, {
                                      trialEnd: ee,
                                      trialPeriod: eZ,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: H.planSelectSeparator }),
                    ],
                });
            }
            if (n && null != eF && null != eD && M === B.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: H.trialPlanSelectHeader,
                            children: F.intl.format(F.t["nG7g/P"], {
                                numMonths: null == eI ? void 0 : eI.discount.user_usage_limit,
                                discountedPrice: (0, I.T4)(eD.amount - eF, eD.currency),
                                regularPrice: (0, I.T4)(eD.amount, eD.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: H.planSelectSeparator }),
                    ],
                });
        },
        eY = (e, t, n) =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: H.selectPlanDivider }),
                    (0, r.jsx)(w.az, {
                        label: F.intl.string(F.t.txajQE),
                        value: (0, r.jsx)(D.Z, {
                            price: t.amount,
                            currency: t.currency,
                            intervalType: n,
                            intervalCount: e.intervalCount,
                            isPrepaidPaymentSource: eB,
                        }),
                        className: H.selectPlanTotalRow,
                    }),
                ],
            }),
        eW = () =>
            (0, r.jsx)(
                "div",
                z(W({ ref: ej }, eM), {
                    children: X.map((e) =>
                        (0, r.jsx)(
                            U.Z,
                            {
                                planId: e,
                                premiumSubscription: ed ? null : null != g ? g : null,
                                selectPlan: eC,
                                selected: (null == eA ? void 0 : eA.id) === e,
                                priceOptions: eN,
                                shouldShowUpdatedPaymentModal: eV,
                                isEligibleForDiscount: ew,
                                discountAmountOff: eF,
                                isEligibleForTrial: eP,
                            },
                            e,
                        ),
                    ),
                }),
            ),
        eK = () =>
            eG
                ? (0, r.jsx)(d.Z, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, I.T4)(7.5345 * ek.amount, V.pK.HRK),
                      }),
                  })
                : null,
        ez = null != g && null != M && (0, T.R4)(g, M, Y),
        eq = eR.isFractionalPremiumActive && (null == g || ez) && !ed && null != M && B.dJ.has(M);
    if (ed) {
        let e = () => {
                if ((0, y.MY)(ef) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eh)
                    return (0, r.jsx)(L.Z, {
                        sectionTitle: F.intl.string(F.t.B3miEx),
                        className: H.customGiftMessageWrapper,
                        innerClassName: H.customGiftMessage,
                        onTextChange: (e) => eh(e),
                        pendingText: ep,
                        currentText: ep,
                    });
            },
            t = () =>
                (0, r.jsx)(u.vwX, {
                    className: o()(H.selectGiftTitle, { [H.compactSelectGiftTitle]: er }),
                    children: F.intl.string(F.t["3E5hXl"]),
                });
        if ((0, y.pO)(ef))
            return (0, r.jsxs)("div", {
                className: H.stepBodyCustomGift,
                children: [
                    (0, r.jsx)("div", {
                        className: H.bodyColumnMiddle,
                        children: null != e_ && (0, r.jsx)(j.q, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: H.bodyColumnRight,
                        children: [
                            (0, r.jsx)(G.s, {
                                className: er ? H.compactSendGiftToUser : void 0,
                                giftRecipient: ef,
                            }),
                            e(),
                            t(),
                            eW(),
                            eK(),
                            (0, r.jsx)(p.Z, { onClose: ei }),
                        ],
                    }),
                ],
            });
        let n = ex && et;
        return (0, r.jsxs)("div", {
            className: H.stepBody,
            children: [
                (0, r.jsx)(G.s, {
                    className: er ? H.compactSendGiftToUser : void 0,
                    giftRecipient: ef,
                }),
                t(),
                eW(),
                n && null != eA && null != ek && eY(eA, ek, null),
                eK(),
                (0, r.jsx)(p.Z, { onClose: ei }),
            ],
        });
    }
    let eX = !eP && !ew && ex && et;
    return (0, r.jsxs)("div", {
        className: H.stepBody,
        children: [
            eq &&
                (0, r.jsx)(x.n, {
                    fractionalPremiumInfo: eR,
                    enablePremiumBrandRefresh: eu,
                }),
            null != eb &&
                !eq &&
                !eT &&
                (0, r.jsx)("div", {
                    className: H.bodyText,
                    children: Q(eb, b),
                }),
            eH(eO, eP, ew),
            eW(),
            eX && null != eA && null != ek && eY(eA, ek, eA.interval),
            eK(),
            !eV &&
                et &&
                (0, r.jsx)(d.Z, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: O.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function $(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: c,
        } = e,
        { paymentSources: d, selectedPlan: f } = (0, m.JL)(),
        { isGift: _, giftRecipient: p, claimableRewards: g } = (0, h.wD)(),
        E = (0, y.pO)(p);
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
                          claimableRewards: g,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: c,
                      })
                    : (0, r.jsx)(u.zxk, {
                          variant: "primary",
                          text: F.intl.string(F.t.XqMe3N),
                          disabled: !0,
                      }),
                o
                    ? (0, r.jsx)(M.Z, {
                          className: _ && E ? H.equalDistantBackButton : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function ee(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: a,
            paymentSources: o,
            shouldRenderUpdatedPaymentModal: s,
            isTrial: l,
        } = e,
        d = (0, c.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        { step: f, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: p } = (0, k.H)(n, i),
        h = (null != d && null != d.paymentSourceId) || Object.keys(o).length > 0 || (p && !l);
    var E = s ? F.intl.string(F.t.PDTjLC) : F.intl.string(F.t.XqMe3N),
        y = g.h8.ADD_PAYMENT_STEPS;
    return (
        h && (y = g.h8.REVIEW),
        (0, C.id)(_, i, a) && f !== g.h8.SELECT_FREE_SKU && (y = g.h8.SELECT_FREE_SKU),
        (0, r.jsx)(u.zxk, {
            variant: "primary",
            text: E,
            onClick: () => t(y),
        })
    );
}
