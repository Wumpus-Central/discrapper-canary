n.d(t, { _: () => k });
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(331322),
    o = n(304072),
    u = n(546605),
    c = n(742810),
    d = n(558620),
    p = n(427675),
    m = n(94420),
    h = n(810498),
    A = n(367921),
    _ = n(271849),
    C = n(369280),
    E = n(45938),
    y = n(927578),
    f = n(937008),
    P = n(156312),
    S = n(166532),
    x = n(615310),
    T = n(50956),
    N = n(921925),
    g = n(520796),
    I = n(800471),
    v = n(367160),
    b = n(800132),
    R = n(216641),
    M = n(69494),
    j = n(312649),
    L = n(482132),
    O = n(788868),
    D = n(818348),
    U = n(985018);
let w = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            onPaymentSourceAdd: a,
            invoiceError: s,
            onInvoiceError: o,
            onCurrencyChange: u,
            handleClose: c,
            planGroup: p,
            hasLegalTermsFlash: h,
            legalTermsNodeRef: A,
            handlePaymentSourceAdd: E,
            trialFooterMessageOverride: y,
            reviewWarningMessage: S,
            referralTrialOfferId: x,
            verifiedTrialId: T,
            originalTrialId: N,
        } = e,
        g = (0, d.A)(),
        { selectedPlanId: I, selectedSkuId: b } = (0, m.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: R } = (0, f.Pv)(),
        {
            hasFetchedSubscriptionPlans: M,
            unifiedCheckoutFlow: j,
            activeSubscription: L,
            currencies: O,
            paymentSources: D,
            priceOptions: U,
            purchaseState: w,
            setHasAcceptedTerms: k,
            discountOffer: F,
            isEligibleForDiscount: G,
            isEligibleForTrial: B,
        } = (0, P.P5)();
    r()(null != g, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", j, I, M, b);
    let Y = i.useMemo(() => {
            let e = F?.discount?.plan_ids;
            return G && null != F && null != e && null != g && e.includes(g.id);
        }, [G, F, g]),
        W = i.useMemo(() => B || (null != N && null != y), [B, N, y]),
        V = {
            paymentSources: D,
            priceOptions: U,
            planGroup: p,
            currencies: O,
            onCurrencyChange: u,
            setHasAcceptedTerms: k,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: h,
            handleClose: c,
        },
        H = g.id;
    if (null == L || R) {
        let e = {
            ...V,
            selectedPlanId: H,
            handlePaymentSourceAdd: E,
            trialId: T,
            trialFooterMessageOverride: y,
            reviewWarningMessage: S,
            referralTrialOfferId: x,
            isTrial: W,
            isDiscount: Y,
        };
        return t ? (0, l.jsx)(v._, { ...e }) : (0, l.jsx)(_.A, { ...e });
    }
    {
        let e = {
            ...V,
            purchaseState: w,
            premiumSubscription: L,
            onPaymentSourceAdd: a,
            planId: H,
            onInvoiceError: o,
            invoiceError: s,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(C.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function k(e) {
    let t,
        {
            handleStepChange: n,
            trialId: a,
            trialFooterMessageOverride: _,
            reviewWarningMessage: C,
            planGroup: v,
            openInvoiceId: k,
            analyticsData: F,
            analyticsLocation: G,
            referralTrialOfferId: B,
            initialPlanId: Y,
            subscriptionTier: W,
            handleClose: V,
        } = e,
        H = (0, c.D7)({ location: "payment_modal_review_step" }),
        K = (0, m.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: Z,
            setUpdatedSubscription: q,
            contextMetadata: z,
            purchaseError: $,
            setCurrency: X,
            setPurchaseState: J,
            isPremium: Q,
            purchaseType: ee,
            setEntitlementsGranted: et,
            setAppliedUserDiscounts: en,
            startedPaymentFlowWithPaymentSourcesRef: el,
            disablePurchasesForStorybook: ei,
            isPremiumGroupPurchase: ea,
            isEligibleForTrial: er,
            userTrialOffer: es,
        } = (0, P.P5)(),
        eo = (0, d.A)(),
        eu = (0, x.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: ep, claimableRewards: em } = (0, f.Pv)();
    r()(null != eu, "Step should be set");
    let eh = i.useRef(null),
        [eA, e_] = (0, o.A)(!1, 500),
        { planGroup: eC, disablePurchase: eE } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: l,
                    priceOptions: a,
                    purchasePreviewError: r,
                    purchaseType: s,
                    isEligibleForTrial: o,
                    checkoutPaymentSources: c,
                    hasCheckoutContextLoaded: h,
                } = (0, P.P5)(),
                _ = (0, m.sw)(),
                C = (0, d.A)(),
                E = (0, p.Hf)(),
                { isGift: S } = (0, f.Pv)(),
                x = (0, R.W)(l, n),
                T = i.useMemo(() => {
                    if (null == n) return !1;
                    if (!h) return !0;
                    let e = c.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [c, h, n]),
                N = i.useMemo(() => {
                    if (null != C) {
                        if ((0, y.xq)(C.id)) return O.LE;
                        if ((0, y.z4)(C.id)) return O.DA;
                    }
                    return [];
                }, [C]),
                g = i.useMemo(
                    () =>
                        s === D.VV.ONE_TIME
                            ? null == n || T || null == E || null != r
                            : null == _ || (!S && null != x && s === D.VV.SUBSCRIPTION && o && !x.canRedeemTrial()),
                    [s, E, n, r, _, S, x, o, T],
                ),
                I = (0, y.J$)(a.paymentSourceId),
                v = (0, u.vg)("PaymentModalReviewStep"),
                b = null != n ? c.find((e) => e.id === n) : null,
                M =
                    s === D.VV.SUBSCRIPTION && null == C
                        ? U.intl.string(U.t.YScQSF)
                        : (0, A.Ro)({
                              purchaseType: s,
                              plan: C,
                              premiumSubscription: e,
                              isGift: S,
                              planGroup: N,
                              isPrepaidPaymentSource: I,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: v && b?.relocationCountry != null,
                          });
            return { paymentSource: x, planGroup: N, disablePurchase: g, buttonText: M };
        })(),
        ey = v ?? eC,
        { verifiedTrialId: ef, originalTrialId: eP } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                a = t ?? n ?? null;
            return { verifiedTrialId: null != a && (!l || O.TP[a].skus.includes(i)) ? a : null, originalTrialId: t };
        })({ trialId: a, referralTrialOfferId: B, isPremium: Q, selectedSkuId: K }),
        eS = { user_trial_offer_id: es?.id };
    i.useEffect(() => {
        null != $ && null != eh.current && eh.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let ex = i.useCallback(
            (e, t, l) => {
                q(e),
                    null != t && et(t),
                    null != l && en(l),
                    n(S.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, q, et, en],
        ),
        eT = i.useRef(null),
        [eN, eg] = i.useState(null),
        eI = ec && (0, E.Ik)(ep),
        ev = null == Y && null == W && ee === D.VV.SUBSCRIPTION,
        eb = (0, I.vT)({ isTrial: er, isGift: ec, selectedSkuId: K, startedPaymentFlowWithPaymentSources: el.current }),
        eR = ec && ee === D.VV.ONE_TIME,
        eM = eR || (eb ? ev && Q : Q),
        ej = (0, h.px)(eo, ec, em),
        eL = i.useCallback(
            () =>
                (X(void 0), eb)
                    ? void n(S.pn.SKU_SELECT)
                    : ea
                      ? void n(S.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(S.pn.SELECT_FREE_SKU)
                        : eR
                          ? n(S.pn.GIFT_CUSTOMIZATION)
                          : n(S.pn.PLAN_SELECT),
            [X, n, eb, eR, ej, ea],
        ),
        eO = () => {
            n(S.pn.ADD_PAYMENT_STEPS);
        },
        eD = eE;
    ei && (eD = !0);
    let eU = i.useCallback(() => {
        n(S.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        ee === D.VV.ONE_TIME
            ? (0, l.jsx)(b.Ay, { hasLegalTermsFlash: eA, legalTermsNodeRef: eT, handlePaymentSourceAdd: eU })
            : (0, l.jsx)(w, {
                  isUnifiedCheckoutUIEnabled: H,
                  onCurrencyChange: (e) => X(e),
                  onPaymentSourceAdd: eO,
                  onInvoiceError: eg,
                  invoiceError: eN,
                  handlePaymentSourceAdd: eU,
                  handleClose: V,
                  openInvoiceId: k,
                  trialFooterMessageOverride: _,
                  reviewWarningMessage: C,
                  referralTrialOfferId: B,
                  planGroup: ey,
                  originalTrialId: eP,
                  verifiedTrialId: ef,
                  hasLegalTermsFlash: eA,
                  legalTermsNodeRef: eT,
              });
    let ew = (0, l.jsx)(j.A, {
            premiumSubscription: Z ?? null,
            setPurchaseState: J,
            invoiceError: eN,
            onBack: eL,
            onNext: ex,
            legalTermsNodeRef: eT,
            flashLegalTerms: () => e_(!0),
            analyticsLocation: G,
            baseAnalyticsData: F,
            openInvoiceId: k,
            flowStartTime: z.startTime,
            isTrial: er,
            trialId: ef,
            planGroup: ey,
            backButtonEligible: eM,
            metadata: eS,
            disablePurchase: eD,
            onPaymentSourceAdd: eO,
        }),
        ek = i.useMemo(
            () =>
                H
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(T.Z, { giftMessage: ed }),
                              !eI && (0, l.jsx)(M.A, { isEligibleForTrial: er }),
                          ],
                      }),
            [ed, eI, er, H],
        ),
        eF = i.useMemo(
            () =>
                H
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(N.A, {}), (0, l.jsx)(g.A, {})],
                      }),
            [H],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [ek, (0, l.jsxs)(L.dZ, { children: [eF, t] }), (0, l.jsx)(L.UX, { children: ew })],
    });
}
