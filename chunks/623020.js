n.d(t, { _: () => F });
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(331322),
    o = n(304072),
    u = n(546605),
    c = n(606267),
    d = n(742810),
    p = n(666646),
    m = n(558620),
    h = n(427675),
    A = n(94420),
    C = n(810498),
    _ = n(367921),
    E = n(209030),
    y = n(427858),
    P = n(45938),
    f = n(927578),
    S = n(937008),
    T = n(156312),
    x = n(166532),
    N = n(615310),
    g = n(50956),
    I = n(921925),
    v = n(520796),
    b = n(800471),
    M = n(367160),
    L = n(971875),
    R = n(216641),
    j = n(69494),
    O = n(871084),
    D = n(482132),
    w = n(788868),
    U = n(818348),
    k = n(985018);
let Y = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            onPaymentSourceAdd: i,
            onCurrencyChange: s,
            handleClose: o,
            planGroup: u,
            hasLegalTermsFlash: c,
            legalTermsNodeRef: d,
            handlePaymentSourceAdd: p,
            trialFooterMessageOverride: h,
            reviewWarningMessage: C,
            referralTrialOfferId: _,
            verifiedTrialId: P,
            originalTrialId: f,
        } = e,
        x = (0, m.A)(),
        { selectedPlanId: N, selectedSkuId: g } = (0, A.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: I } = (0, S.Pv)(),
        {
            hasFetchedSubscriptionPlans: v,
            unifiedCheckoutFlow: b,
            activeSubscription: L,
            currencies: R,
            paymentSources: j,
            priceOptions: O,
            purchaseState: D,
            setHasAcceptedTerms: w,
            discountOffer: U,
            isEligibleForDiscount: k,
            isEligibleForTrial: Y,
        } = (0, T.P5)();
    r()(null != x, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", b, N, v, g);
    let F = a.useMemo(() => {
            let e = U?.discount?.plan_ids;
            return k && null != U && null != e && null != x && e.includes(x.id);
        }, [k, U, x]),
        G = a.useMemo(() => Y || (null != f && null != h), [Y, f, h]),
        B = {
            paymentSources: j,
            priceOptions: O,
            planGroup: u,
            currencies: R,
            onCurrencyChange: s,
            setHasAcceptedTerms: w,
            legalTermsNodeRef: d,
            hasLegalTermsFlash: c,
            handleClose: o,
        },
        W = x.id;
    if (null == L || I) {
        let e = {
            ...B,
            selectedPlanId: W,
            handlePaymentSourceAdd: p,
            trialId: P,
            trialFooterMessageOverride: h,
            reviewWarningMessage: C,
            referralTrialOfferId: _,
            isTrial: G,
            isDiscount: F,
        };
        return t ? (0, l.jsx)(M._, { ...e }) : (0, l.jsx)(E.A, { ...e });
    }
    {
        let e = {
            ...B,
            purchaseState: D,
            premiumSubscription: L,
            onPaymentSourceAdd: i,
            planId: W,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(y.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let t,
        {
            handleStepChange: n,
            trialId: i,
            trialFooterMessageOverride: E,
            reviewWarningMessage: y,
            planGroup: M,
            openInvoiceId: F,
            analyticsData: G,
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
            setUpdatedSubscription: X,
            contextMetadata: J,
            purchaseError: Q,
            setCurrency: ee,
            setPurchaseState: et,
            isPremium: en,
            purchaseType: el,
            setAppliedUserDiscounts: ea,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            disablePurchasesForStorybook: er,
            isPremiumGroupPurchase: es,
            isEligibleForTrial: eo,
            userTrialOffer: eu,
        } = (0, T.P5)(),
        ec = (0, m.A)(),
        ed = (0, N.bB)(),
        { isGift: ep, giftMessage: em, giftRecipient: eh, claimableRewards: eA } = (0, S.Pv)();
    r()(null != ed, "Step should be set");
    let eC = a.useRef(null),
        [e_, eE] = (0, o.A)(!1, 500),
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
                    checkoutPaymentSources: d,
                    hasCheckoutContextLoaded: A,
                } = (0, T.P5)(),
                C = (0, p.sw)(),
                E = (0, m.A)(),
                y = (0, h.Hf)(),
                { isGift: P } = (0, S.Pv)(),
                x = (0, R.W)(l, n),
                N = a.useMemo(() => {
                    if (null == n) return !1;
                    if (!A) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, A, n]),
                g = (0, c.iB)({ checkoutPaymentSources: d, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                I = a.useMemo(() => {
                    if (null != E) {
                        if ((0, f.xq)(E.id)) return w.LE;
                        if ((0, f.z4)(E.id)) return w.DA;
                    }
                    return [];
                }, [E]),
                v = a.useMemo(
                    () =>
                        !!g ||
                        (s === U.VV.ONE_TIME
                            ? null == n || N || null == y || null != r
                            : null == C || (!P && null != x && s === U.VV.SUBSCRIPTION && o && !x.canRedeemTrial())),
                    [g, s, y, n, r, C, P, x, o, N],
                ),
                b = (0, f.J$)(i.paymentSourceId),
                M = (0, u.vg)("PaymentModalReviewStep"),
                L = null != n ? d.find((e) => e.id === n) : null,
                j =
                    s === U.VV.SUBSCRIPTION && null == E
                        ? k.intl.string(k.t.YScQSF)
                        : (0, _.Ro)({
                              purchaseType: s,
                              plan: E,
                              premiumSubscription: e,
                              isGift: P,
                              planGroup: I,
                              isPrepaidPaymentSource: b,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: M && L?.relocationCountry != null,
                          });
            return { paymentSource: x, planGroup: I, disablePurchase: v, buttonText: j };
        })(),
        ef = M ?? ey,
        { verifiedTrialId: eS, originalTrialId: eT } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || w.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: W, isPremium: en, selectedSkuId: q }),
        ex = { user_trial_offer_id: eu?.id };
    a.useEffect(() => {
        null != Q && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let eN = a.useCallback(
            (e, t, l) => {
                X(e),
                    null != t && z(t),
                    null != l && ea(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, X, z, ea],
        ),
        eg = a.useRef(null),
        eI = (0, p.mx)(),
        ev = ep && (0, P.Ik)(eh),
        eb = null == H && null == V && el === U.VV.SUBSCRIPTION,
        eM = (0, b.vT)({ isTrial: eo, isGift: ep, selectedSkuId: q, startedPaymentFlowWithPaymentSources: ei.current }),
        eL = ep && el === U.VV.ONE_TIME,
        eR = eL || (eM ? eb && en : en),
        ej = (0, C.px)(ec, ep, eA),
        eO = a.useCallback(
            () =>
                (ee(void 0), eM)
                    ? void n(x.pn.SKU_SELECT)
                    : es
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : eL
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [ee, n, eM, eL, ej, es],
        ),
        eD = () => {
            n(x.pn.ADD_PAYMENT_STEPS);
        },
        ew = eP;
    er && (ew = !0);
    let eU = a.useCallback(() => {
        n(x.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        el === U.VV.ONE_TIME
            ? (0, l.jsx)(L.Ay, { hasLegalTermsFlash: e_, legalTermsNodeRef: eg, handlePaymentSourceAdd: eU })
            : (0, l.jsx)(Y, {
                  isUnifiedCheckoutUIEnabled: Z,
                  onCurrencyChange: (e) => ee(e),
                  onPaymentSourceAdd: eD,
                  handlePaymentSourceAdd: eU,
                  handleClose: K,
                  openInvoiceId: F,
                  trialFooterMessageOverride: E,
                  reviewWarningMessage: y,
                  referralTrialOfferId: W,
                  planGroup: ef,
                  originalTrialId: eT,
                  verifiedTrialId: eS,
                  hasLegalTermsFlash: e_,
                  legalTermsNodeRef: eg,
              });
    let ek = (0, l.jsx)(O.A, {
            invoiceError: eI,
            premiumSubscription: $ ?? null,
            setPurchaseState: et,
            onBack: eO,
            onNext: eN,
            legalTermsNodeRef: eg,
            flashLegalTerms: () => eE(!0),
            analyticsLocation: B,
            baseAnalyticsData: G,
            openInvoiceId: F,
            flowStartTime: J.startTime,
            isTrial: eo,
            trialId: eS,
            planGroup: ef,
            backButtonEligible: eR,
            metadata: ex,
            disablePurchase: ew,
            onPaymentSourceAdd: eD,
        }),
        eY = a.useMemo(
            () =>
                Z
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.Z, { giftMessage: em }),
                              !ev && (0, l.jsx)(j.A, { isEligibleForTrial: eo }),
                          ],
                      }),
            [em, ev, eo, Z],
        ),
        eF = a.useMemo(
            () =>
                Z
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(I.A, {}), (0, l.jsx)(v.A, {})],
                      }),
            [Z],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eY, (0, l.jsxs)(D.dZ, { children: [eF, t] }), (0, l.jsx)(D.UX, { children: ek })],
    });
}
