n.d(t, { _: () => W });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
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
    E = n(380619),
    y = n(367921),
    P = n(209030),
    S = n(427858),
    _ = n(45938),
    T = n(927578),
    f = n(937008),
    N = n(902958),
    x = n(166532),
    I = n(615310),
    g = n(50956),
    v = n(921925),
    M = n(506120),
    j = n(800471),
    b = n(367160),
    R = n(971875),
    L = n(216641),
    O = n(69494),
    D = n(871084),
    w = n(482132),
    U = n(788868),
    k = n(818348),
    Y = n(375708);
let G = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            handleClose: i,
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
        {
            selectedPlanId: _,
            selectedSkuId: T,
            purchaseState: x,
            setHasAcceptedTerms: I,
        } = (0, A.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: g } = (0, f.Pv)(),
        {
            hasFetchedSubscriptionPlans: v,
            unifiedCheckoutFlow: M,
            activeSubscription: j,
            currencies: R,
            paymentSources: L,
            priceOptions: O,
            discountOffer: D,
            isEligibleForDiscount: w,
            isEligibleForTrial: U,
            setCurrency: k,
        } = (0, N.P5)(),
        Y = a.useCallback((e) => k(e), [k]);
    r()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", M, _, v, T);
    let G = a.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != y && e.includes(y.id);
        }, [w, D, y]),
        F = a.useMemo(() => U || (null != E && null != d), [U, E, d]),
        B = {
            paymentSources: L,
            handlePaymentSourceAdd: c,
            priceOptions: O,
            planGroup: s,
            currencies: R,
            onCurrencyChange: Y,
            setHasAcceptedTerms: I,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        W = y.id;
    if (null == j || g) {
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
        return t ? (0, l.jsx)(b._, { ...e }) : (0, l.jsx)(P.A, { ...e });
    }
    {
        let e = { ...B, purchaseState: x, premiumSubscription: j, planId: W, hasOpenInvoice: null != n };
        return (0, l.jsx)(S.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let {
            renderStepBody: t,
            handleStepChange: n,
            trialId: i,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            planGroup: b,
            openInvoiceId: R,
            analyticsData: G,
            analyticsLocation: F,
            referralTrialOfferId: B,
            initialPlanId: W,
            subscriptionTier: H,
            handleClose: V,
        } = e,
        K = (0, d.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: Z,
            setEntitlementsGranted: q,
            setAppliedUserDiscounts: z,
        } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
        })),
        {
            activeSubscription: $,
            setUpdatedSubscription: J,
            contextMetadata: X,
            purchaseError: Q,
            setCurrency: ee,
            isPremium: et,
            purchaseType: en,
            startedPaymentFlowWithPaymentSourcesRef: el,
            disablePurchasesForStorybook: ea,
            isPremiumGroupPurchase: ei,
            isEligibleForTrial: er,
            userTrialOffer: es,
        } = (0, N.P5)(),
        eo = (0, h.A)(),
        eu = (0, I.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: ep, claimableRewards: em } = (0, f.Pv)();
    r()(null != eu, "Step should be set");
    let eh = a.useRef(null),
        [eC, eA] = (0, o.A)(!1, 500),
        { planGroup: eE, disablePurchase: ey } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: l,
                    priceOptions: i,
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
                I = a.useMemo(() => {
                    if (null == n) return !1;
                    if (!A) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, A, n]),
                g = (0, c.iB)({ checkoutPaymentSources: d, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                v = a.useMemo(() => {
                    if (null != P) {
                        if ((0, T.xq)(P.id)) return U.LE;
                        if ((0, T.z4)(P.id)) return U.DA;
                    }
                    return [];
                }, [P]),
                M = a.useMemo(
                    () =>
                        !!g ||
                        (s === k.VV.ONE_TIME
                            ? null == n || I || null == S || null != r
                            : null == E || (!_ && null != x && s === k.VV.SUBSCRIPTION && o && !x.canRedeemTrial())),
                    [g, s, S, n, r, E, _, x, o, I],
                ),
                j = (0, T.J$)(i.paymentSourceId),
                b = (0, u.vg)("PaymentModalReviewStep"),
                R = null != n ? d.find((e) => e.id === n) : null,
                O =
                    s === k.VV.SUBSCRIPTION && null == P
                        ? Y.intl.string(Y.t.YScQSF)
                        : (0, y.Ro)({
                              purchaseType: s,
                              plan: P,
                              premiumSubscription: e,
                              isGift: _,
                              planGroup: v,
                              isPrepaidPaymentSource: j,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: b && R?.relocationCountry != null,
                          });
            return { paymentSource: x, planGroup: v, disablePurchase: M, buttonText: O };
        })(),
        eP = b ?? eE,
        { verifiedTrialId: eS, originalTrialId: e_ } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || U.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: B, isPremium: et, selectedSkuId: Z }),
        eT = { user_trial_offer_id: es?.id };
    a.useEffect(() => {
        null != Q && null != eh.current && eh.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ef = a.useCallback(
            (e, t, l) => {
                J(e),
                    null != t && q(t),
                    null != l && z(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, J, q, z],
        ),
        eN = a.useRef(null),
        ex = (0, m.mx)(),
        eI = ec && (0, _.Ik)(ep),
        eg = null == W && null == H && en === k.VV.SUBSCRIPTION,
        ev = (0, j.vT)({ isTrial: er, isGift: ec, selectedSkuId: Z, startedPaymentFlowWithPaymentSources: el.current }),
        eM = ec && en === k.VV.ONE_TIME,
        ej = eM || (ev ? eg && et : et),
        eb = (0, E.px)(eo, ec, em),
        eR = a.useCallback(
            () =>
                (ee(void 0), ev)
                    ? void n(x.pn.SKU_SELECT)
                    : ei
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : eb
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : eM
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [ee, n, ev, eM, eb, ei],
        ),
        eL = ey;
    ea && (eL = !0);
    let eO = a.useCallback(() => {
            n(x.pn.ADD_PAYMENT_STEPS);
        }, [n]),
        eD = a.useMemo(() => ({ hasLegalTermsFlash: eC, legalTermsNodeRef: eN }), [eC, eN]),
        ew = a.useMemo(() => ({ effectivePlanGroup: eP, verifiedTrialId: eS, originalTrialId: e_ }), [eP, eS, e_]),
        eU = a.useMemo(
            () => ({
                handleClose: V,
                openInvoiceId: R,
                trialFooterMessageOverride: P,
                reviewWarningMessage: S,
                referralTrialOfferId: B,
            }),
            [V, R, P, S, B],
        ),
        ek = a.useMemo(
            () => t(en, { isUnifiedCheckoutUIEnabled: K, handlePaymentSourceAdd: eO }, ew, eU, eD),
            [t, ew, eU, eO, K, eD, en],
        ),
        eY = (0, l.jsx)(D.A, {
            premiumSubscription: $ ?? null,
            invoiceError: ex,
            onBack: eR,
            onNext: ef,
            legalTermsNodeRef: eN,
            flashLegalTerms: () => eA(!0),
            analyticsLocation: F,
            baseAnalyticsData: G,
            openInvoiceId: R,
            flowStartTime: X.startTime,
            isTrial: er,
            trialId: eS,
            planGroup: eP,
            backButtonEligible: ej,
            metadata: eT,
            disablePurchase: eL,
            onPaymentSourceAdd: eO,
        }),
        eG = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.Z, { giftMessage: ed }),
                              !eI && (0, l.jsx)(O.A, { isEligibleForTrial: er }),
                          ],
                      }),
            [ed, eI, er, K],
        ),
        eF = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(v.A, {}), (0, l.jsx)(M.A, {})],
                      }),
            [K],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eG, (0, l.jsxs)(w.dZ, { children: [eF, ek] }), (0, l.jsx)(w.UX, { children: eY })],
    });
}
let B = (e, t, n, a, i) => {
    let { isUnifiedCheckoutUIEnabled: r, handlePaymentSourceAdd: s } = t;
    if (e === k.VV.ONE_TIME) return (0, l.jsx)(R.Ay, { handlePaymentSourceAdd: s, ...i });
    {
        let {
                handleClose: e,
                openInvoiceId: t,
                trialFooterMessageOverride: o,
                reviewWarningMessage: u,
                referralTrialOfferId: c,
            } = a,
            { effectivePlanGroup: d, ...p } = n;
        return (0, l.jsx)(G, {
            isUnifiedCheckoutUIEnabled: r,
            handlePaymentSourceAdd: s,
            planGroup: d,
            ...p,
            ...i,
            handleClose: e,
            openInvoiceId: t,
            trialFooterMessageOverride: o,
            reviewWarningMessage: u,
            referralTrialOfferId: c,
        });
    }
};
function W(e) {
    return (0, l.jsx)(F, { renderStepBody: B, ...e });
}
