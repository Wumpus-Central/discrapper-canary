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
        Y = a.useCallback((e) => k(e), [k]);
    r()(null != y, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", v, _, g, T);
    let G = a.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != y && e.includes(y.id);
        }, [w, D, y]),
        F = a.useMemo(() => U || (null != E && null != d), [U, E, d]),
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
            handleClose: i,
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
        { selectedSkuId: Z, setEntitlementsGranted: q } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: z,
            setUpdatedSubscription: $,
            contextMetadata: J,
            purchaseError: X,
            setCurrency: Q,
            setPurchaseState: ee,
            isPremium: et,
            purchaseType: en,
            setAppliedUserDiscounts: el,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            disablePurchasesForStorybook: ei,
            isPremiumGroupPurchase: er,
            isEligibleForTrial: es,
            userTrialOffer: eo,
        } = (0, N.P5)(),
        eu = (0, h.A)(),
        ec = (0, I.bB)(),
        { isGift: ed, giftMessage: ep, giftRecipient: em, claimableRewards: eh } = (0, f.Pv)();
    r()(null != ec, "Step should be set");
    let eC = a.useRef(null),
        [eA, eE] = (0, o.A)(!1, 500),
        { planGroup: ey, disablePurchase: eP } = (function () {
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
                b = (0, T.J$)(i.paymentSourceId),
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
        eS = R ?? ey,
        { verifiedTrialId: e_, originalTrialId: eT } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || U.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: B, isPremium: et, selectedSkuId: Z }),
        ef = { user_trial_offer_id: eo?.id };
    a.useEffect(() => {
        null != X && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [X]);
    let eN = a.useCallback(
            (e, t, l) => {
                $(e),
                    null != t && q(t),
                    null != l && el(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, $, q, el],
        ),
        ex = a.useRef(null),
        eI = (0, m.mx)(),
        eg = ed && (0, _.Ik)(em),
        ev = null == W && null == H && en === k.VV.SUBSCRIPTION,
        eM = (0, b.vT)({ isTrial: es, isGift: ed, selectedSkuId: Z, startedPaymentFlowWithPaymentSources: ea.current }),
        eb = ed && en === k.VV.ONE_TIME,
        eR = eb || (eM ? ev && et : et),
        ej = (0, E.px)(eu, ed, eh),
        eL = a.useCallback(
            () =>
                (Q(void 0), eM)
                    ? void n(x.pn.SKU_SELECT)
                    : er
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : eb
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [Q, n, eM, eb, ej, er],
        ),
        eO = eP;
    ei && (eO = !0);
    let eD = a.useCallback(() => {
            n(x.pn.ADD_PAYMENT_STEPS);
        }, [n]),
        ew = a.useMemo(() => ({ hasLegalTermsFlash: eA, legalTermsNodeRef: ex }), [eA, ex]),
        eU = a.useMemo(() => ({ effectivePlanGroup: eS, verifiedTrialId: e_, originalTrialId: eT }), [eS, e_, eT]),
        ek = a.useMemo(
            () => ({
                handleClose: V,
                openInvoiceId: j,
                trialFooterMessageOverride: P,
                reviewWarningMessage: S,
                referralTrialOfferId: B,
            }),
            [V, j, P, S, B],
        ),
        eY = a.useMemo(
            () => t(en, { isUnifiedCheckoutUIEnabled: K, handlePaymentSourceAdd: eD }, eU, ek, ew),
            [t, eU, ek, eD, K, ew, en],
        ),
        eG = (0, l.jsx)(D.A, {
            invoiceError: eI,
            premiumSubscription: z ?? null,
            setPurchaseState: ee,
            onBack: eL,
            onNext: eN,
            legalTermsNodeRef: ex,
            flashLegalTerms: () => eE(!0),
            analyticsLocation: F,
            baseAnalyticsData: G,
            openInvoiceId: j,
            flowStartTime: J.startTime,
            isTrial: es,
            trialId: e_,
            planGroup: eS,
            backButtonEligible: eR,
            metadata: ef,
            disablePurchase: eO,
            onPaymentSourceAdd: eD,
        }),
        eF = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.Z, { giftMessage: ep }),
                              !eg && (0, l.jsx)(O.A, { isEligibleForTrial: es }),
                          ],
                      }),
            [ep, eg, es, K],
        ),
        eB = a.useMemo(
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
        children: [eF, (0, l.jsxs)(w.dZ, { children: [eB, eY] }), (0, l.jsx)(w.UX, { children: eG })],
    });
}
let B = (e, t, n, a, i) => {
    let { isUnifiedCheckoutUIEnabled: r, handlePaymentSourceAdd: s } = t;
    if (e === k.VV.ONE_TIME) return (0, l.jsx)(j.Ay, { handlePaymentSourceAdd: s, ...i });
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
