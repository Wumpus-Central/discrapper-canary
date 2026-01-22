n.d(t, { lZ: () => G }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(330726),
    c = n(459238),
    u = n(711459),
    d = n(717401),
    f = n(716534),
    p = n(664891),
    _ = n(858987),
    h = n(669079),
    m = n(74538),
    g = n(987209),
    E = n(563132),
    b = n(409813);
n(45572);
var y = n(809144),
    O = n(698708),
    v = n(844068),
    S = n(709113),
    I = n(614223),
    T = n(282778),
    C = n(481595),
    A = n(435020),
    N = n(51499),
    P = n(678334),
    w = n(614277),
    R = n(474936),
    D = n(231338),
    x = n(388032),
    L = n(267180);
function j(e, t, n) {
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
function M(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
let k = 500;
function U() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: a,
            selectedPlan: o,
            selectedSkuPricePreview: s,
            purchasePreviewError: l,
            purchaseType: c,
            invoicePreview: u,
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: p,
        } = (0, E.JL)(),
        { isGift: h } = (0, g.wD)(),
        b = (0, A.m)(r, n),
        y = i.useMemo(() => {
            if (null != o) {
                if ((0, m.uZ)(o.id)) return R.Y1;
                if ((0, m.Z8)(o.id)) return R.j4;
            }
            return [];
        }, [o]),
        O = i.useMemo(
            () =>
                c === D.GZ.ONE_TIME
                    ? (null == s && null != n) || null != l
                    : null == u || (!h && null != b && c === D.GZ.SUBSCRIPTION && f && !b.canRedeemTrial()),
            [c, s, n, l, u, h, b, f],
        ),
        v = (0, m.Ap)(a.paymentSourceId),
        S = (0, _.K)({
            purchaseType: c,
            plan: o,
            premiumSubscription: e,
            isGift: h,
            planGroup: y,
            isPrepaidPaymentSource: v,
            inReverseTrial: d,
            paymentSourceId: n,
            hasPaymentSources: t,
        });
    return {
        paymentSource: b,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: O,
        buttonText: S,
        userTrialOffer: p,
    };
}
function G(e) {
    var t, n;
    let a,
        {
            handleStepChange: _,
            trialId: m,
            trialFooterMessageOverride: A,
            reviewWarningMessage: j,
            planGroup: G,
            openInvoiceId: Z,
            analyticsData: F,
            analyticsLocation: B,
            referralTrialOfferId: V,
            initialPlanId: H,
            subscriptionTier: Y,
            handleClose: W,
        } = e,
        { enabled: K } = (0, c.gB)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: z,
            setUpdatedSubscription: q,
            contextMetadata: Q,
            currencies: X,
            paymentSources: J,
            priceOptions: $,
            purchaseError: ee,
            purchaseTokenAuthState: et,
            selectedPlan: en,
            selectedSkuId: er,
            setCurrency: ei,
            setPaymentSourceId: ea,
            setPurchaseState: eo,
            setPurchaseError: es,
            step: el,
            purchaseState: ec,
            isPremium: eu,
            setHasAcceptedTerms: ed,
            purchaseType: ef,
            setEntitlementsGranted: ep,
            setAppliedUserDiscounts: e_,
            startedPaymentFlowWithPaymentSourcesRef: eh,
            inReverseTrial: em,
            enablePremiumBrandRefresh: eg,
            disablePurchasesForStorybook: eE,
            isPremiumGroupPurchase: eb,
            isEligibleForDiscount: ey,
            discountOffer: eO,
        } = (0, E.JL)(),
        { isGift: ev, giftMessage: eS, giftRecipient: eI, claimableRewards: eT } = (0, g.wD)();
    o()(null != el, "Step should be set");
    let eC = i.useRef(null),
        [eA, eN] = (0, l.Z)(!1, k),
        { paymentSource: eP, isEligibleForTrial: ew, planGroup: eR, disablePurchase: eD, userTrialOffer: ex } = U(),
        eL = null != (n = null != m ? m : V) ? n : null,
        ej = null != eL && (!eu || R.nG[eL].skus.includes(er)) ? eL : null,
        eM = { user_trial_offer_id: null == ex ? void 0 : ex.id };
    i.useEffect(() => {
        null != ee && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [ee]);
    let ek = i.useCallback(
            (e, t, n) => {
                q(e),
                    null != t && ep(t),
                    null != n && e_(n),
                    _(b.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [_, q, ep, e_],
        ),
        eU = null != en && R.o4.has(en.id) && null != eP && !(0, u.aQ)(eP) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        eG = i.useRef(null),
        [eZ, eF] = i.useState(null),
        eB = null == eO || null == (t = eO.discount) ? void 0 : t.plan_ids,
        eV = ey && null != eO && null != eB && null != en && eB.includes(en.id),
        eH = ev && (0, h.pO)(eI),
        eY = null == H && null == Y && ef === D.GZ.SUBSCRIPTION,
        eW = (0, I.Kp)({
            isTrial: ew,
            isGift: ev,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eK = ev && ef === D.GZ.ONE_TIME,
        ez = eK || (eW ? eY && eu : eu),
        eq = (0, d.id)(en, ev, eT),
        eQ = i.useCallback(
            () =>
                eW
                    ? void _(b.h8.SKU_SELECT)
                    : eb
                      ? void _(b.h8.ADD_PAYMENT_STEPS)
                      : eq
                        ? void _(b.h8.SELECT_FREE_SKU)
                        : eK
                          ? _(b.h8.GIFT_CUSTOMIZATION)
                          : _(b.h8.PLAN_SELECT),
            [_, eW, eK, eq, eb],
        ),
        eX = () => {
            _(b.h8.ADD_PAYMENT_STEPS);
        },
        eJ = eD;
    eE && (eJ = !0);
    let e$ = null != G ? G : eR;
    if (ef === D.GZ.ONE_TIME)
        a = (0, r.jsx)(C.Z, {
            hasLegalTermsFlash: eA,
            legalTermsNodeRef: eG,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            handlePaymentSourceAdd: () => _(b.h8.ADD_PAYMENT_STEPS),
        });
    else if (null == z || em || ev) {
        o()(null != en, "Expected plan to be selected");
        let e = {
            selectedPlanId: en.id,
            planGroup: e$,
            paymentSources: J,
            onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
            priceOptions: $,
            currencies: X,
            onCurrencyChange: (e) => ei(e),
            handlePaymentSourceAdd: () => _(b.h8.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: ed,
            legalTermsNodeRef: eG,
            hasLegalTermsFlash: eA,
            trialId: ej,
            trialFooterMessageOverride: A,
            reviewWarningMessage: j,
            purchaseState: ec,
            referralTrialOfferId: V,
            isTrial: ew || (null != m && null != A),
            isDiscount: eV,
            handleClose: W,
        };
        a = K ? (0, r.jsx)(T.W, M({}, e)) : (0, r.jsx)(f.Z, M({}, e));
    } else
        o()(null != en, "Expected plan to be selected"),
            (a = (0, r.jsx)(p.Z, {
                premiumSubscription: z,
                paymentSources: J,
                priceOptions: $,
                onPaymentSourceChange: (e) => {
                    ea(null != e ? e.id : null);
                },
                onPaymentSourceAdd: eX,
                planId: en.id,
                setHasAcceptedTerms: ed,
                legalTermsNodeRef: eG,
                hasLegalTermsFlash: eA,
                onInvoiceError: (e) => eF(e),
                planGroup: e$,
                currencies: X,
                onCurrencyChange: (e) => ei(e),
                hasOpenInvoice: null != Z,
                purchaseState: ec,
                handleClose: W,
            }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.P, { giftMessage: eS }),
            !eH && (0, r.jsx)(N.Z, { isEligibleForTrial: ew }),
            (0, r.jsxs)(w.C3, {
                children: [
                    eg && eW && !eb && (0, r.jsx)("div", { className: L.bodyGradientPadding }),
                    (0, r.jsxs)(s.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), (0, r.jsx)(S.Z, {})],
                    }),
                    a,
                ],
            }),
            (0, r.jsx)(w.O3, {
                children: (0, r.jsx)(P.Z, {
                    premiumSubscription: null != z ? z : null,
                    setPurchaseState: eo,
                    onBack: eQ,
                    onNext: ek,
                    onPurchaseError: (e) => es(e),
                    legalTermsNodeRef: eG,
                    flashLegalTerms: () => eN(!0),
                    invoiceError: eZ,
                    planError: eU,
                    analyticsLocation: B,
                    baseAnalyticsData: F,
                    flowStartTime: Q.startTime,
                    trialId: ej,
                    planGroup: e$,
                    purchaseTokenAuthState: et,
                    openInvoiceId: Z,
                    backButtonEligible: ez,
                    metadata: eM,
                    isTrial: ew,
                    disablePurchase: eJ,
                    onPaymentSourceAdd: eX,
                }),
            }),
        ],
    });
}
