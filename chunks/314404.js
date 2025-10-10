n.d(t, {
    O: () => Q,
    y: () => J,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(490504),
    d = n(911969),
    f = n(975298),
    _ = n(940824),
    p = n(987209),
    h = n(563132),
    m = n(409813),
    g = n(509545),
    E = n(78839),
    b = n(669079),
    y = n(63063),
    O = n(74538),
    v = n(937615),
    I = n(296848),
    T = n(711459),
    S = n(367074),
    A = n(717401),
    C = n(847903),
    N = n(104494),
    R = n(639119),
    P = n(811334),
    w = n(553797),
    D = n(346071),
    x = n(927699),
    L = n(987716),
    M = n(311821),
    k = n(459965),
    j = n(811616),
    U = n(251660),
    G = n(474936),
    B = n(981631),
    Z = n(231338),
    F = n(388032),
    V = n(624379);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function X(e, t) {
    let n = F.intl.string(F.t.BYa62t),
        r = F.intl.string(F.t.CDa6Dg),
        i = (() => {
            switch (e.interval) {
                case G.rV.YEAR:
                    return n;
                case G.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case G.Si.TIER_0:
            switch (a) {
                case G.Si.TIER_1:
                    return F.intl.string(F.t.q6mxDQ);
                case G.Si.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case G.Si.TIER_1:
            switch (a) {
                case G.Si.TIER_0:
                    return F.intl.string(F.t["7+u2zs"]);
                case G.Si.TIER_2:
                    return F.intl.string(F.t.NG2qcX);
                default:
                    return i;
            }
        case G.Si.TIER_2:
            switch (a) {
                case G.Si.TIER_0:
                case G.Si.TIER_1:
                    return F.intl.string(F.t["eB0/w8"]);
                case G.Si.TIER_2:
                    return e.interval === G.rV.MONTH
                        ? F.intl.formatToPlainString(F.t["RqUv8/"], { numFreeGuildSubscriptions: G.cb })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function Q(e) {
    var t, n, a, m;
    let {
            premiumSubscription: E,
            skuId: M,
            selectedPlanId: k,
            setSelectedPlanId: H,
            planGroup: W,
            priceOptions: q,
            planOptions: Q,
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
        } = (0, h.JL)(),
        {
            isGift: ed,
            giftRecipient: ef,
            selectedGiftStyle: e_,
            customGiftMessage: ep,
            setCustomGiftMessage: eh,
            claimableRewards: em,
            setSelectedGiftingPromotionReward: eg,
        } = (0, p.wD)(),
        eE = (0, A.cF)(el, ed && (0, b.pO)(ef), em);
    (M = null != M ? M : es), (E = null != E ? E : ea), o()(void 0 !== E, "should not be undefined");
    let [eb, ey] = (0, s.Wu)([g.Z], () => [null != E ? g.Z.get(E.planId) : null, null != k ? g.Z.get(k) : null]),
        eO = (0, R.N)($),
        ev = null == eO ? void 0 : eO.subscription_trial,
        eI = (0, N.Ng)(),
        eT = (0, S.Vi)(),
        eS = null == eI || null == (t = eI.discount) ? void 0 : t.plan_ids,
        eA = null != ey ? ey : el,
        eC = i.useCallback(
            (e) => {
                null != H ? H(e) : eo(e);
            },
            [H, eo],
        ),
        eN = null != q ? q : ec;
    o()(null != eN, "Price option has to be set");
    let eR = (0, f.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        eP = null != eO && G.nG[eO.trial_id].skus.includes(M),
        ew = null != eI && Q.some((e) => (null == eS ? void 0 : eS.includes(e))) && null != eI.discount,
        eD = (0, O.aS)(G.Xh.PREMIUM_MONTH_TIER_2, !1, ed, eN);
    i.useEffect(() => {
        J && T.ZP.trackExposure({ location: "5f89bb_1" });
    }, [J]);
    let ex = (null == eA ? void 0 : eA.id) != null && Q.includes(eA.id);
    i.useEffect(() => {
        if (!ex) {
            if (null == eb || ed) eC(Q[0]);
            else if (null != eb) {
                let e = Q.find((e) => e !== eb.id);
                null != e && eC(e);
            }
        }
    }, [ex, ed, Q, eb, eC]),
        i.useEffect(() => {
            eE && null != em && em.length > 0 && eg(em[0]);
        }, [em, eg, eE]);
    let eL = (0, l.Jb)(),
        { ref: eM } = eL,
        ek = z(eL, ["ref"]),
        ej = (null == eA ? void 0 : eA.id) != null ? (0, O.aS)(eA.id, !1, ed, eN) : void 0,
        { ipCountryCode: eU } = (0, C.Z)(),
        eG = "HR" === eU && null != ej && ej.currency === Z.pK.EUR,
        eB = (0, O.Ap)(eN.paymentSourceId),
        eZ = i.useMemo(
            () =>
                (null == ev ? void 0 : ev.interval) === G.rV.DAY
                    ? (null == ev ? void 0 : ev.interval_count) > 7
                        ? F.intl.string(F.t.Z1V2cn)
                        : F.intl.string(F.t.MI1rHh)
                    : F.intl.string(F.t["+S5lra"]),
            [ev],
        ),
        eF = !ed && (ew || (null != ev && eP && null != ee)),
        eV =
            null == en ||
            null == (m = en.find((e) => e.subscriptionPlanId === G.Xh.PREMIUM_MONTH_TIER_2)) ||
            null == (a = m.discounts) ||
            null == (n = a.find((e) => e.type === d.eW.SUBSCRIPTION_PLAN))
                ? void 0
                : n.amount,
        eH = (e, t, n) => {
            if (!eF)
                return (0, r.jsx)("div", {
                    className: V.selectPlanChooseTitle,
                    children: F.intl.string(F.t.a19jpa),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === G.a7;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: V.trialPlanSelectHeader,
                            children: t
                                ? F.intl.format(F.t.nG95hI, { endDate: ee })
                                : F.intl.format(F.t.s4E7kZ, {
                                      trialEnd: ee,
                                      trialPeriod: eZ,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: V.planSelectSeparator }),
                    ],
                });
            }
            if (n && null != eV && null != eD && k === G.Xh.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: V.trialPlanSelectHeader,
                            children: F.intl.format(F.t["nG7g/P"], {
                                numMonths: null == eI ? void 0 : eI.discount.user_usage_limit,
                                discountedPrice: (0, v.T4)(eD.amount - eV, eD.currency),
                                regularPrice: (0, v.T4)(eD.amount, eD.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: V.planSelectSeparator }),
                    ],
                });
        },
        eY = (e, t, n) =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: V.selectPlanDivider }),
                    (0, r.jsx)(P.az, {
                        label: F.intl.string(F.t.txajQE),
                        value: (0, r.jsx)(w.Z, {
                            price: t.amount,
                            currency: t.currency,
                            intervalType: n,
                            intervalCount: e.intervalCount,
                            isPrepaidPaymentSource: eB,
                        }),
                        className: V.selectPlanTotalRow,
                    }),
                ],
            }),
        eW = () =>
            (0, r.jsx)(
                "div",
                K(Y({ ref: eM }, ek), {
                    children: Q.map((e) =>
                        (0, r.jsx)(
                            j.Z,
                            {
                                planId: e,
                                premiumSubscription: ed ? null : null != E ? E : null,
                                selectPlan: eC,
                                selected: (null == eA ? void 0 : eA.id) === e,
                                priceOptions: eN,
                                shouldShowUpdatedPaymentModal: eF,
                                isEligibleForDiscount: ew,
                                discountAmountOff: eV,
                                isEligibleForTrial: eP,
                            },
                            e,
                        ),
                    ),
                }),
            ),
        eK = () =>
            eG
                ? (0, r.jsx)(u.Z, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, v.T4)(7.5345 * ej.amount, Z.pK.HRK),
                      }),
                  })
                : null,
        ez = null != E && null != k && (0, I.R4)(E, k, W),
        eq = eR.isFractionalPremiumActive && (null == E || ez) && !ed && null != k && G.dJ.has(k);
    if (ed) {
        let e = () => {
                if ((0, b.MY)(ef) === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eh)
                    return (0, r.jsx)(x.Z, {
                        sectionTitle: F.intl.string(F.t.B3miEx),
                        className: V.customGiftMessageWrapper,
                        innerClassName: V.customGiftMessage,
                        onTextChange: (e) => eh(e),
                        pendingText: ep,
                        currentText: ep,
                    });
            },
            t = (e) =>
                (0, r.jsx)(c.gNt, {
                    label: F.intl.string(F.t["3E5hXl"]),
                    children: e,
                });
        if ((0, b.pO)(ef))
            return (0, r.jsxs)("div", {
                className: V.stepBodyCustomGift,
                children: [
                    (0, r.jsx)("div", {
                        className: eu ? V.bodyColumnMiddleCentered : V.bodyColumnMiddle,
                        children: null != e_ && (0, r.jsx)(L.q, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: V.bodyColumnRight,
                        children: [
                            (0, r.jsx)(U.s, {
                                className: er ? V.compactSendGiftToUser : void 0,
                                giftRecipient: ef,
                            }),
                            e(),
                            t(eW()),
                            eK(),
                            (0, r.jsx)(_.Z, { onClose: ei }),
                        ],
                    }),
                ],
            });
        let n = ex && et;
        return (0, r.jsxs)("div", {
            className: V.stepBody,
            children: [
                (0, r.jsx)(U.s, {
                    className: er ? V.compactSendGiftToUser : void 0,
                    giftRecipient: ef,
                }),
                t(eW()),
                n && null != eA && null != ej && eY(eA, ej, null),
                eK(),
                (0, r.jsx)(_.Z, { onClose: ei }),
            ],
        });
    }
    let eX = !eP && !ew && ex && et;
    return (0, r.jsxs)("div", {
        className: V.stepBody,
        children: [
            eq &&
                (0, r.jsx)(D.n, {
                    fractionalPremiumInfo: eR,
                    enablePremiumBrandRefresh: eu,
                }),
            null != eb &&
                !eq &&
                !eT &&
                (0, r.jsx)("div", {
                    className: V.bodyText,
                    children: X(eb, M),
                }),
            eH(eO, eP, ew),
            eW(),
            eX && null != eA && null != ej && eY(eA, ej, eA.interval),
            eK(),
            !eF &&
                et &&
                (0, r.jsx)(u.Z, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: y.Z.getArticleURL(B.BhN.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function J(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: f, selectedPlan: _ } = (0, h.JL)(),
        { isGift: m, giftRecipient: g, claimableRewards: E } = (0, p.wD)(),
        y = (0, b.pO)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == _ ? void 0 : _.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)($, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: m,
                          claimableRewards: E,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: u,
                          isNextDisabled: d,
                      })
                    : (0, r.jsx)(c.zxk, {
                          variant: "primary",
                          text: F.intl.string(F.t.XqMe3N),
                          disabled: !0,
                      }),
                o
                    ? (0, r.jsx)(M.Z, {
                          className: m && y ? V.equalDistantBackButton : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function $(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: a,
            paymentSources: o,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        f = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        { step: _, selectedPlan: p } = (0, h.JL)(),
        { hasEntitlements: g } = (0, k.H)(n, i),
        b = (null != f && null != f.paymentSourceId) || Object.keys(o).length > 0 || (g && !u);
    var y = l ? F.intl.string(F.t.PDTjLC) : F.intl.string(F.t.XqMe3N),
        O = m.h8.ADD_PAYMENT_STEPS;
    return (
        b && (O = m.h8.REVIEW),
        (0, A.id)(p, i, a) && _ !== m.h8.SELECT_FREE_SKU && (O = m.h8.SELECT_FREE_SKU),
        (0, r.jsx)(c.zxk, {
            variant: "primary",
            text: y,
            onClick: () => t(O),
            disabled: d,
        })
    );
}
