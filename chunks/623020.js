n.d(t, { _: () => F });
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(331322),
    o = n(304072),
    u = n(546605),
    c = n(606267),
    d = n(742810),
    p = n(364995),
    m = n(666646),
    h = n(558620),
    C = n(427675),
    A = n(94420),
    E = n(810498),
    y = n(367921),
    P = n(209030),
    S = n(427858),
    _ = n(45938),
    T = n(927578),
    f = n(937008),
    N = n(156312),
    x = n(166532),
    I = n(615310),
    g = n(50956),
    v = n(921925),
    M = n(520796),
    b = n(800471),
    R = n(367160),
    j = n(971875),
    L = n(216641),
    O = n(69494),
    D = n(871084),
    w = n(482132),
    U = n(788868),
    k = n(818348),
    Y = n(985018);
let G = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: a,
            planGroup: s,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: c,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            verifiedTrialId: C,
            originalTrialId: E,
        } = e,
        y = (0, h.A)(),
        { selectedPlanId: _, selectedSkuId: T } = (0, A.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: x } = (0, f.Pv)(),
        I = (0, A.t4)((e) => e.setHasAcceptedTerms),
        {
            hasFetchedSubscriptionPlans: g,
            unifiedCheckoutFlow: v,
            activeSubscription: M,
            currencies: b,
            paymentSources: j,
            priceOptions: L,
            purchaseState: O,
            discountOffer: D,
            isEligibleForDiscount: w,
            isEligibleForTrial: U,
            setCurrency: k,
        } = (0, N.P5)(),
        Y = i.useCallback((e) => k(e), [k]);
    r()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", v, _, g, T);
    let G = i.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != y && e.includes(y.id);
        }, [w, D, y]),
        F = i.useMemo(() => U || (null != E && null != d), [U, E, d]),
        B = {
            paymentSources: j,
            handlePaymentSourceAdd: c,
            priceOptions: L,
            planGroup: s,
            currencies: b,
            onCurrencyChange: Y,
            setHasAcceptedTerms: I,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: a,
        },
        W = y.id;
    if (null == M || x) {
        let e = {
            ...B,
            selectedPlanId: W,
            trialId: C,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            isTrial: F,
            isDiscount: G,
        };
        return t ? (0, l.jsx)(R._, { ...e }) : (0, l.jsx)(P.A, { ...e });
    }
    {
        let e = { ...B, purchaseState: O, premiumSubscription: M, planId: W, hasOpenInvoice: null != n };
        return (0, l.jsx)(S.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let {
            handleStepChange: t,
            trialId: n,
            trialFooterMessageOverride: a,
            reviewWarningMessage: P,
            planGroup: S,
            openInvoiceId: R,
            analyticsData: F,
            analyticsLocation: B,
            referralTrialOfferId: W,
            initialPlanId: H,
            subscriptionTier: V,
            handleClose: K,
        } = e,
        Z = (0, d.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: q, setEntitlementsGranted: z } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: $,
            setUpdatedSubscription: J,
            contextMetadata: X,
            purchaseError: Q,
            setCurrency: ee,
            setPurchaseState: et,
            isPremium: en,
            purchaseType: el,
            setAppliedUserDiscounts: ei,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            disablePurchasesForStorybook: er,
            isPremiumGroupPurchase: es,
            isEligibleForTrial: eo,
            userTrialOffer: eu,
        } = (0, N.P5)(),
        ec = (0, h.A)(),
        ed = (0, I.bB)(),
        { isGift: ep, giftMessage: em, giftRecipient: eh, claimableRewards: eC } = (0, f.Pv)();
    r()(null != ed, "Step should be set");
    let eA = i.useRef(null),
        [eE, ey] = (0, o.A)(!1, 500),
        { planGroup: eP, disablePurchase: eS } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: l,
                    priceOptions: a,
                    purchasePreviewError: r,
                    purchaseType: s,
                    isEligibleForTrial: o,
                } = (0, N.P5)(),
                { checkoutPaymentSources: d, hasInvoiceOrderContextLoaded: A } = (0, p.t6)(),
                E = (0, m.sw)(),
                P = (0, h.A)(),
                S = (0, C.Hf)(),
                { isGift: _ } = (0, f.Pv)(),
                x = (0, L.W)(l, n),
                I = i.useMemo(() => {
                    if (null == n) return !1;
                    if (!A) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, A, n]),
                g = (0, c.iB)({ checkoutPaymentSources: d, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                v = i.useMemo(() => {
                    if (null != P) {
                        if ((0, T.xq)(P.id)) return U.LE;
                        if ((0, T.z4)(P.id)) return U.DA;
                    }
                    return [];
                }, [P]),
                M = i.useMemo(
                    () =>
                        !!g ||
                        (s === k.VV.ONE_TIME
                            ? null == n || I || null == S || null != r
                            : null == E || (!_ && null != x && s === k.VV.SUBSCRIPTION && o && !x.canRedeemTrial())),
                    [g, s, S, n, r, E, _, x, o, I],
                ),
                b = (0, T.J$)(a.paymentSourceId),
                R = (0, u.vg)("PaymentModalReviewStep"),
                j = null != n ? d.find((e) => e.id === n) : null,
                O =
                    s === k.VV.SUBSCRIPTION && null == P
                        ? Y.intl.string(Y.t.YScQSF)
                        : (0, y.Ro)({
                              purchaseType: s,
                              plan: P,
                              premiumSubscription: e,
                              isGift: _,
                              planGroup: v,
                              isPrepaidPaymentSource: b,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: R && j?.relocationCountry != null,
                          });
            return { paymentSource: x, planGroup: v, disablePurchase: M, buttonText: O };
        })(),
        e_ = S ?? eP,
        { verifiedTrialId: eT, originalTrialId: ef } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                a = t ?? n ?? null;
            return { verifiedTrialId: null != a && (!l || U.TP[a].skus.includes(i)) ? a : null, originalTrialId: t };
        })({ trialId: n, referralTrialOfferId: W, isPremium: en, selectedSkuId: q }),
        eN = { user_trial_offer_id: eu?.id };
    i.useEffect(() => {
        null != Q && null != eA.current && eA.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ex = i.useCallback(
            (e, n, l) => {
                J(e),
                    null != n && z(n),
                    null != l && ei(l),
                    t(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: n } });
            },
            [t, J, z, ei],
        ),
        eI = i.useRef(null),
        eg = (0, m.mx)(),
        ev = ep && (0, _.Ik)(eh),
        eM = null == H && null == V && el === k.VV.SUBSCRIPTION,
        eb = (0, b.vT)({ isTrial: eo, isGift: ep, selectedSkuId: q, startedPaymentFlowWithPaymentSources: ea.current }),
        eR = ep && el === k.VV.ONE_TIME,
        ej = eR || (eb ? eM && en : en),
        eL = (0, E.px)(ec, ep, eC),
        eO = i.useCallback(
            () =>
                (ee(void 0), eb)
                    ? void t(x.pn.SKU_SELECT)
                    : es
                      ? void t(x.pn.ADD_PAYMENT_STEPS)
                      : eL
                        ? void t(x.pn.SELECT_FREE_SKU)
                        : eR
                          ? t(x.pn.GIFT_CUSTOMIZATION)
                          : t(x.pn.PLAN_SELECT),
            [ee, t, eb, eR, eL, es],
        ),
        eD = eS;
    er && (eD = !0);
    let ew = i.useCallback(() => {
            t(x.pn.ADD_PAYMENT_STEPS);
        }, [t]),
        eU = i.useMemo(() => ({ hasLegalTermsFlash: eE, legalTermsNodeRef: eI }), [eE, eI]),
        ek = i.useMemo(
            () =>
                ((e, t, n, i, a) => {
                    let { isUnifiedCheckoutUIEnabled: r, handlePaymentSourceAdd: s } = t;
                    if (e === k.VV.ONE_TIME) return (0, l.jsx)(j.Ay, { handlePaymentSourceAdd: s, ...a });
                    {
                        let {
                                handleClose: e,
                                openInvoiceId: t,
                                trialFooterMessageOverride: o,
                                reviewWarningMessage: u,
                                referralTrialOfferId: c,
                            } = i,
                            { effectivePlanGroup: d, ...p } = n;
                        return (0, l.jsx)(G, {
                            isUnifiedCheckoutUIEnabled: r,
                            handlePaymentSourceAdd: s,
                            planGroup: d,
                            ...p,
                            ...a,
                            handleClose: e,
                            openInvoiceId: t,
                            trialFooterMessageOverride: o,
                            reviewWarningMessage: u,
                            referralTrialOfferId: c,
                        });
                    }
                })(
                    el,
                    { isUnifiedCheckoutUIEnabled: Z, handlePaymentSourceAdd: ew },
                    { effectivePlanGroup: e_, verifiedTrialId: eT, originalTrialId: ef },
                    {
                        handleClose: K,
                        openInvoiceId: R,
                        trialFooterMessageOverride: a,
                        reviewWarningMessage: P,
                        referralTrialOfferId: W,
                    },
                    eU,
                ),
            [e_, ew, K, Z, eU, R, ef, el, W, P, a, eT],
        ),
        eY = (0, l.jsx)(D.A, {
            invoiceError: eg,
            premiumSubscription: $ ?? null,
            setPurchaseState: et,
            onBack: eO,
            onNext: ex,
            legalTermsNodeRef: eI,
            flashLegalTerms: () => ey(!0),
            analyticsLocation: B,
            baseAnalyticsData: F,
            openInvoiceId: R,
            flowStartTime: X.startTime,
            isTrial: eo,
            trialId: eT,
            planGroup: e_,
            backButtonEligible: ej,
            metadata: eN,
            disablePurchase: eD,
            onPaymentSourceAdd: ew,
        }),
        eG = i.useMemo(
            () =>
                Z
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.Z, { giftMessage: em }),
                              !ev && (0, l.jsx)(O.A, { isEligibleForTrial: eo }),
                          ],
                      }),
            [em, ev, eo, Z],
        ),
        eF = i.useMemo(
            () =>
                Z
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(v.A, {}), (0, l.jsx)(M.A, {})],
                      }),
            [Z],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eG, (0, l.jsxs)(w.dZ, { children: [eF, ek] }), (0, l.jsx)(w.UX, { children: eY })],
    });
}
