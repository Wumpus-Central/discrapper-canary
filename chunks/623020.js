n.d(t, { _: () => W });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    s = n.n(i),
    r = n(331322),
    o = n(304072),
    u = n(546605),
    c = n(606267),
    d = n(742810),
    p = n(364995),
    m = n(666646),
    h = n(558620),
    A = n(427675),
    C = n(94420),
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
            handleClose: i,
            planGroup: r,
            hasLegalTermsFlash: o,
            legalTermsNodeRef: u,
            handlePaymentSourceAdd: c,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            verifiedTrialId: A,
            originalTrialId: E,
        } = e,
        y = (0, h.A)(),
        {
            selectedPlanId: _,
            selectedSkuId: T,
            purchaseState: x,
            setHasAcceptedTerms: I,
        } = (0, C.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: g } = (0, f.Pv)(),
        {
            hasFetchedSubscriptionPlans: v,
            unifiedCheckoutFlow: M,
            activeSubscription: b,
            currencies: j,
            paymentSources: L,
            priceOptions: O,
            discountOffer: D,
            isEligibleForDiscount: w,
            isEligibleForTrial: U,
            setCurrency: k,
        } = (0, N.P5)(),
        Y = a.useCallback((e) => k(e), [k]);
    s()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", M, _, v, T);
    let G = a.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != y && e.includes(y.id);
        }, [w, D, y]),
        F = a.useMemo(() => U || (null != E && null != d), [U, E, d]),
        B = {
            paymentSources: L,
            handlePaymentSourceAdd: c,
            priceOptions: O,
            planGroup: r,
            currencies: j,
            onCurrencyChange: Y,
            setHasAcceptedTerms: I,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        W = y.id;
    if (null == b || g) {
        let e = {
            ...B,
            selectedPlanId: W,
            trialId: A,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            referralTrialOfferId: m,
            isTrial: F,
            isDiscount: G,
        };
        return t ? (0, l.jsx)(R._, { ...e }) : (0, l.jsx)(P.A, { ...e });
    }
    {
        let e = { ...B, purchaseState: x, premiumSubscription: b, planId: W, hasOpenInvoice: null != n };
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
            planGroup: R,
            openInvoiceId: j,
            analyticsData: G,
            analyticsLocation: F,
            referralTrialOfferId: B,
            initialPlanId: W,
            subscriptionTier: H,
            handleClose: V,
        } = e,
        K = (0, d.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: Z, setEntitlementsGranted: q } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: z,
            setUpdatedSubscription: $,
            contextMetadata: J,
            purchaseError: X,
            setCurrency: Q,
            isPremium: ee,
            purchaseType: et,
            setAppliedUserDiscounts: en,
            startedPaymentFlowWithPaymentSourcesRef: el,
            disablePurchasesForStorybook: ea,
            isPremiumGroupPurchase: ei,
            isEligibleForTrial: es,
            userTrialOffer: er,
        } = (0, N.P5)(),
        eo = (0, h.A)(),
        eu = (0, I.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: ep, claimableRewards: em } = (0, f.Pv)();
    s()(null != eu, "Step should be set");
    let eh = a.useRef(null),
        [eA, eC] = (0, o.A)(!1, 500),
        { planGroup: eE, disablePurchase: ey } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: l,
                    priceOptions: i,
                    purchasePreviewError: s,
                    purchaseType: r,
                    isEligibleForTrial: o,
                } = (0, N.P5)(),
                { checkoutPaymentSources: d, hasInvoiceOrderContextLoaded: C } = (0, p.t6)(),
                E = (0, m.sw)(),
                P = (0, h.A)(),
                S = (0, A.Hf)(),
                { isGift: _ } = (0, f.Pv)(),
                x = (0, L.W)(l, n),
                I = a.useMemo(() => {
                    if (null == n) return !1;
                    if (!C) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, C, n]),
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
                        (r === k.VV.ONE_TIME
                            ? null == n || I || null == S || null != s
                            : null == E || (!_ && null != x && r === k.VV.SUBSCRIPTION && o && !x.canRedeemTrial())),
                    [g, r, S, n, s, E, _, x, o, I],
                ),
                b = (0, T.J$)(i.paymentSourceId),
                R = (0, u.vg)("PaymentModalReviewStep"),
                j = null != n ? d.find((e) => e.id === n) : null,
                O =
                    r === k.VV.SUBSCRIPTION && null == P
                        ? Y.intl.string(Y.t.YScQSF)
                        : (0, y.Ro)({
                              purchaseType: r,
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
        eP = R ?? eE,
        { verifiedTrialId: eS, originalTrialId: e_ } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || U.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: B, isPremium: ee, selectedSkuId: Z }),
        eT = { user_trial_offer_id: er?.id };
    a.useEffect(() => {
        null != X && null != eh.current && eh.current.scrollIntoView({ behavior: "smooth" });
    }, [X]);
    let ef = a.useCallback(
            (e, t, l) => {
                $(e),
                    null != t && q(t),
                    null != l && en(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, $, q, en],
        ),
        eN = a.useRef(null),
        ex = (0, m.mx)(),
        eI = ec && (0, _.Ik)(ep),
        eg = null == W && null == H && et === k.VV.SUBSCRIPTION,
        ev = (0, b.vT)({ isTrial: es, isGift: ec, selectedSkuId: Z, startedPaymentFlowWithPaymentSources: el.current }),
        eM = ec && et === k.VV.ONE_TIME,
        eb = eM || (ev ? eg && ee : ee),
        eR = (0, E.px)(eo, ec, em),
        ej = a.useCallback(
            () =>
                (Q(void 0), ev)
                    ? void n(x.pn.SKU_SELECT)
                    : ei
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : eR
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : eM
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [Q, n, ev, eM, eR, ei],
        ),
        eL = ey;
    ea && (eL = !0);
    let eO = a.useCallback(() => {
            n(x.pn.ADD_PAYMENT_STEPS);
        }, [n]),
        eD = a.useMemo(() => ({ hasLegalTermsFlash: eA, legalTermsNodeRef: eN }), [eA, eN]),
        ew = a.useMemo(() => ({ effectivePlanGroup: eP, verifiedTrialId: eS, originalTrialId: e_ }), [eP, eS, e_]),
        eU = a.useMemo(
            () => ({
                handleClose: V,
                openInvoiceId: j,
                trialFooterMessageOverride: P,
                reviewWarningMessage: S,
                referralTrialOfferId: B,
            }),
            [V, j, P, S, B],
        ),
        ek = a.useMemo(
            () => t(et, { isUnifiedCheckoutUIEnabled: K, handlePaymentSourceAdd: eO }, ew, eU, eD),
            [t, ew, eU, eO, K, eD, et],
        ),
        eY = (0, l.jsx)(D.A, {
            premiumSubscription: z ?? null,
            invoiceError: ex,
            onBack: ej,
            onNext: ef,
            legalTermsNodeRef: eN,
            flashLegalTerms: () => eC(!0),
            analyticsLocation: F,
            baseAnalyticsData: G,
            openInvoiceId: j,
            flowStartTime: J.startTime,
            isTrial: es,
            trialId: eS,
            planGroup: eP,
            backButtonEligible: eb,
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
                              !eI && (0, l.jsx)(O.A, { isEligibleForTrial: es }),
                          ],
                      }),
            [ed, eI, es, K],
        ),
        eF = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(r.B, {
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
    let { isUnifiedCheckoutUIEnabled: s, handlePaymentSourceAdd: r } = t;
    if (e === k.VV.ONE_TIME) return (0, l.jsx)(j.Ay, { handlePaymentSourceAdd: r, ...i });
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
            isUnifiedCheckoutUIEnabled: s,
            handlePaymentSourceAdd: r,
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
