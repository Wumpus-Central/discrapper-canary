n.d(t, { _: () => Y });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(546605),
    c = n(606267),
    d = n(742810),
    p = n(558620),
    m = n(427675),
    h = n(94420),
    A = n(810498),
    C = n(367921),
    _ = n(209030),
    E = n(427858),
    y = n(45938),
    f = n(927578),
    P = n(937008),
    S = n(156312),
    T = n(166532),
    x = n(615310),
    N = n(50956),
    g = n(921925),
    I = n(520796),
    v = n(800471),
    b = n(367160),
    M = n(971875),
    L = n(216641),
    R = n(69494),
    j = n(871084),
    O = n(482132),
    D = n(788868),
    w = n(818348),
    U = n(985018);
let k = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            onPaymentSourceAdd: i,
            invoiceError: s,
            onInvoiceError: o,
            onCurrencyChange: u,
            handleClose: c,
            planGroup: d,
            hasLegalTermsFlash: m,
            legalTermsNodeRef: A,
            handlePaymentSourceAdd: C,
            trialFooterMessageOverride: y,
            reviewWarningMessage: f,
            referralTrialOfferId: T,
            verifiedTrialId: x,
            originalTrialId: N,
        } = e,
        g = (0, p.A)(),
        { selectedPlanId: I, selectedSkuId: v } = (0, h.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: M } = (0, P.Pv)(),
        {
            hasFetchedSubscriptionPlans: L,
            unifiedCheckoutFlow: R,
            activeSubscription: j,
            currencies: O,
            paymentSources: D,
            priceOptions: w,
            purchaseState: U,
            setHasAcceptedTerms: k,
            discountOffer: Y,
            isEligibleForDiscount: F,
            isEligibleForTrial: G,
        } = (0, S.P5)();
    r()(null != g, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", R, I, L, v);
    let B = a.useMemo(() => {
            let e = Y?.discount?.plan_ids;
            return F && null != Y && null != e && null != g && e.includes(g.id);
        }, [F, Y, g]),
        W = a.useMemo(() => G || (null != N && null != y), [G, N, y]),
        H = {
            paymentSources: D,
            priceOptions: w,
            planGroup: d,
            currencies: O,
            onCurrencyChange: u,
            setHasAcceptedTerms: k,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: m,
            handleClose: c,
        },
        V = g.id;
    if (null == j || M) {
        let e = {
            ...H,
            selectedPlanId: V,
            handlePaymentSourceAdd: C,
            trialId: x,
            trialFooterMessageOverride: y,
            reviewWarningMessage: f,
            referralTrialOfferId: T,
            isTrial: W,
            isDiscount: B,
        };
        return t ? (0, l.jsx)(b._, { ...e }) : (0, l.jsx)(_.A, { ...e });
    }
    {
        let e = {
            ...H,
            purchaseState: U,
            premiumSubscription: j,
            onPaymentSourceAdd: i,
            planId: V,
            onInvoiceError: o,
            invoiceError: s,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(E.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function Y(e) {
    let t,
        {
            handleStepChange: n,
            trialId: i,
            trialFooterMessageOverride: _,
            reviewWarningMessage: E,
            planGroup: b,
            openInvoiceId: Y,
            analyticsData: F,
            analyticsLocation: G,
            referralTrialOfferId: B,
            initialPlanId: W,
            subscriptionTier: H,
            handleClose: V,
        } = e,
        K = (0, d.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: Z, setEntitlementsGranted: q } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: z,
            setUpdatedSubscription: $,
            contextMetadata: X,
            purchaseError: J,
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
        } = (0, S.P5)(),
        eu = (0, p.A)(),
        ec = (0, x.bB)(),
        { isGift: ed, giftMessage: ep, giftRecipient: em, claimableRewards: eh } = (0, P.Pv)();
    r()(null != ec, "Step should be set");
    let eA = a.useRef(null),
        [eC, e_] = (0, o.A)(!1, 500),
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
                    checkoutPaymentSources: d,
                    hasCheckoutContextLoaded: A,
                } = (0, S.P5)(),
                _ = (0, h.sw)(),
                E = (0, p.A)(),
                y = (0, m.Hf)(),
                { isGift: T } = (0, P.Pv)(),
                x = (0, L.W)(l, n),
                N = a.useMemo(() => {
                    if (null == n) return !1;
                    if (!A) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, A, n]),
                g = (0, c.iB)({ checkoutPaymentSources: d, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                I = a.useMemo(() => {
                    if (null != E) {
                        if ((0, f.xq)(E.id)) return D.LE;
                        if ((0, f.z4)(E.id)) return D.DA;
                    }
                    return [];
                }, [E]),
                v = a.useMemo(
                    () =>
                        !!g ||
                        (s === w.VV.ONE_TIME
                            ? null == n || N || null == y || null != r
                            : null == _ || (!T && null != x && s === w.VV.SUBSCRIPTION && o && !x.canRedeemTrial())),
                    [g, s, y, n, r, _, T, x, o, N],
                ),
                b = (0, f.J$)(i.paymentSourceId),
                M = (0, u.vg)("PaymentModalReviewStep"),
                R = null != n ? d.find((e) => e.id === n) : null,
                j =
                    s === w.VV.SUBSCRIPTION && null == E
                        ? U.intl.string(U.t.YScQSF)
                        : (0, C.Ro)({
                              purchaseType: s,
                              plan: E,
                              premiumSubscription: e,
                              isGift: T,
                              planGroup: I,
                              isPrepaidPaymentSource: b,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: M && R?.relocationCountry != null,
                          });
            return { paymentSource: x, planGroup: I, disablePurchase: v, buttonText: j };
        })(),
        ef = b ?? eE,
        { verifiedTrialId: eP, originalTrialId: eS } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || D.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: B, isPremium: et, selectedSkuId: Z }),
        eT = { user_trial_offer_id: eo?.id };
    a.useEffect(() => {
        null != J && null != eA.current && eA.current.scrollIntoView({ behavior: "smooth" });
    }, [J]);
    let ex = a.useCallback(
            (e, t, l) => {
                $(e),
                    null != t && q(t),
                    null != l && el(l),
                    n(T.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, $, q, el],
        ),
        eN = a.useRef(null),
        [eg, eI] = a.useState(null),
        ev = ed && (0, y.Ik)(em),
        eb = null == W && null == H && en === w.VV.SUBSCRIPTION,
        eM = (0, v.vT)({ isTrial: es, isGift: ed, selectedSkuId: Z, startedPaymentFlowWithPaymentSources: ea.current }),
        eL = ed && en === w.VV.ONE_TIME,
        eR = eL || (eM ? eb && et : et),
        ej = (0, A.px)(eu, ed, eh),
        eO = a.useCallback(
            () =>
                (Q(void 0), eM)
                    ? void n(T.pn.SKU_SELECT)
                    : er
                      ? void n(T.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(T.pn.SELECT_FREE_SKU)
                        : eL
                          ? n(T.pn.GIFT_CUSTOMIZATION)
                          : n(T.pn.PLAN_SELECT),
            [Q, n, eM, eL, ej, er],
        ),
        eD = () => {
            n(T.pn.ADD_PAYMENT_STEPS);
        },
        ew = ey;
    ei && (ew = !0);
    let eU = a.useCallback(() => {
        n(T.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        en === w.VV.ONE_TIME
            ? (0, l.jsx)(M.Ay, { hasLegalTermsFlash: eC, legalTermsNodeRef: eN, handlePaymentSourceAdd: eU })
            : (0, l.jsx)(k, {
                  isUnifiedCheckoutUIEnabled: K,
                  onCurrencyChange: (e) => Q(e),
                  onPaymentSourceAdd: eD,
                  onInvoiceError: eI,
                  invoiceError: eg,
                  handlePaymentSourceAdd: eU,
                  handleClose: V,
                  openInvoiceId: Y,
                  trialFooterMessageOverride: _,
                  reviewWarningMessage: E,
                  referralTrialOfferId: B,
                  planGroup: ef,
                  originalTrialId: eS,
                  verifiedTrialId: eP,
                  hasLegalTermsFlash: eC,
                  legalTermsNodeRef: eN,
              });
    let ek = (0, l.jsx)(j.A, {
            premiumSubscription: z ?? null,
            setPurchaseState: ee,
            invoiceError: eg,
            onBack: eO,
            onNext: ex,
            legalTermsNodeRef: eN,
            flashLegalTerms: () => e_(!0),
            analyticsLocation: G,
            baseAnalyticsData: F,
            openInvoiceId: Y,
            flowStartTime: X.startTime,
            isTrial: es,
            trialId: eP,
            planGroup: ef,
            backButtonEligible: eR,
            metadata: eT,
            disablePurchase: ew,
            onPaymentSourceAdd: eD,
        }),
        eY = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(N.Z, { giftMessage: ep }),
                              !ev && (0, l.jsx)(R.A, { isEligibleForTrial: es }),
                          ],
                      }),
            [ep, ev, es, K],
        ),
        eF = a.useMemo(
            () =>
                K
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(g.A, {}), (0, l.jsx)(I.A, {})],
                      }),
            [K],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eY, (0, l.jsxs)(O.dZ, { children: [eF, t] }), (0, l.jsx)(O.UX, { children: ek })],
    });
}
