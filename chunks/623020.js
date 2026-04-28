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
            onPaymentSourceAdd: a,
            onCurrencyChange: s,
            handleClose: o,
            planGroup: u,
            hasLegalTermsFlash: c,
            legalTermsNodeRef: d,
            handlePaymentSourceAdd: p,
            trialFooterMessageOverride: m,
            reviewWarningMessage: C,
            referralTrialOfferId: E,
            verifiedTrialId: y,
            originalTrialId: _,
        } = e,
        T = (0, h.A)(),
        { selectedPlanId: x, selectedSkuId: I } = (0, A.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: g } = (0, f.Pv)(),
        v = (0, A.t4)((e) => e.setHasAcceptedTerms),
        {
            hasFetchedSubscriptionPlans: M,
            unifiedCheckoutFlow: b,
            activeSubscription: j,
            currencies: L,
            paymentSources: O,
            priceOptions: D,
            purchaseState: w,
            discountOffer: U,
            isEligibleForDiscount: k,
            isEligibleForTrial: Y,
        } = (0, N.P5)();
    r()(null != T, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", b, x, M, I);
    let G = i.useMemo(() => {
            let e = U?.discount?.plan_ids;
            return k && null != U && null != e && null != T && e.includes(T.id);
        }, [k, U, T]),
        F = i.useMemo(() => Y || (null != _ && null != m), [Y, _, m]),
        B = {
            paymentSources: O,
            priceOptions: D,
            planGroup: u,
            currencies: L,
            onCurrencyChange: s,
            setHasAcceptedTerms: v,
            legalTermsNodeRef: d,
            hasLegalTermsFlash: c,
            handleClose: o,
        },
        W = T.id;
    if (null == j || g) {
        let e = {
            ...B,
            selectedPlanId: W,
            handlePaymentSourceAdd: p,
            trialId: y,
            trialFooterMessageOverride: m,
            reviewWarningMessage: C,
            referralTrialOfferId: E,
            isTrial: F,
            isDiscount: G,
        };
        return t ? (0, l.jsx)(R._, { ...e }) : (0, l.jsx)(P.A, { ...e });
    }
    {
        let e = {
            ...B,
            purchaseState: w,
            premiumSubscription: j,
            onPaymentSourceAdd: a,
            planId: W,
            hasOpenInvoice: null != n,
        };
        return (0, l.jsx)(S.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function F(e) {
    let t,
        {
            handleStepChange: n,
            trialId: a,
            trialFooterMessageOverride: P,
            reviewWarningMessage: S,
            planGroup: R,
            openInvoiceId: F,
            analyticsData: B,
            analyticsLocation: W,
            referralTrialOfferId: H,
            initialPlanId: V,
            subscriptionTier: K,
            handleClose: Z,
        } = e,
        q = (0, d.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: z, setEntitlementsGranted: $ } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: J,
            setUpdatedSubscription: X,
            contextMetadata: Q,
            purchaseError: ee,
            setCurrency: et,
            setPurchaseState: en,
            isPremium: el,
            purchaseType: ei,
            setAppliedUserDiscounts: ea,
            startedPaymentFlowWithPaymentSourcesRef: er,
            disablePurchasesForStorybook: es,
            isPremiumGroupPurchase: eo,
            isEligibleForTrial: eu,
            userTrialOffer: ec,
        } = (0, N.P5)(),
        ed = (0, h.A)(),
        ep = (0, I.bB)(),
        { isGift: em, giftMessage: eh, giftRecipient: eC, claimableRewards: eA } = (0, f.Pv)();
    r()(null != ep, "Step should be set");
    let eE = i.useRef(null),
        [ey, eP] = (0, o.A)(!1, 500),
        { planGroup: eS, disablePurchase: e_ } = (function () {
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
        eT = R ?? eS,
        { verifiedTrialId: ef, originalTrialId: eN } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: i } = e,
                a = t ?? n ?? null;
            return { verifiedTrialId: null != a && (!l || U.TP[a].skus.includes(i)) ? a : null, originalTrialId: t };
        })({ trialId: a, referralTrialOfferId: H, isPremium: el, selectedSkuId: z }),
        ex = { user_trial_offer_id: ec?.id };
    i.useEffect(() => {
        null != ee && null != eE.current && eE.current.scrollIntoView({ behavior: "smooth" });
    }, [ee]);
    let eI = i.useCallback(
            (e, t, l) => {
                X(e),
                    null != t && $(t),
                    null != l && ea(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, X, $, ea],
        ),
        eg = i.useRef(null),
        ev = (0, m.mx)(),
        eM = em && (0, _.Ik)(eC),
        eb = null == V && null == K && ei === k.VV.SUBSCRIPTION,
        eR = (0, b.vT)({ isTrial: eu, isGift: em, selectedSkuId: z, startedPaymentFlowWithPaymentSources: er.current }),
        ej = em && ei === k.VV.ONE_TIME,
        eL = ej || (eR ? eb && el : el),
        eO = (0, E.px)(ed, em, eA),
        eD = i.useCallback(
            () =>
                (et(void 0), eR)
                    ? void n(x.pn.SKU_SELECT)
                    : eo
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : eO
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : ej
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [et, n, eR, ej, eO, eo],
        ),
        ew = () => {
            n(x.pn.ADD_PAYMENT_STEPS);
        },
        eU = e_;
    es && (eU = !0);
    let ek = i.useCallback(() => {
        n(x.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        ei === k.VV.ONE_TIME
            ? (0, l.jsx)(j.Ay, { handlePaymentSourceAdd: ek, hasLegalTermsFlash: ey, legalTermsNodeRef: eg })
            : (0, l.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: q,
                  onCurrencyChange: (e) => et(e),
                  onPaymentSourceAdd: ew,
                  handlePaymentSourceAdd: ek,
                  handleClose: Z,
                  openInvoiceId: F,
                  trialFooterMessageOverride: P,
                  reviewWarningMessage: S,
                  referralTrialOfferId: H,
                  planGroup: eT,
                  originalTrialId: eN,
                  verifiedTrialId: ef,
                  hasLegalTermsFlash: ey,
                  legalTermsNodeRef: eg,
              });
    let eY = (0, l.jsx)(D.A, {
            invoiceError: ev,
            premiumSubscription: J ?? null,
            setPurchaseState: en,
            onBack: eD,
            onNext: eI,
            legalTermsNodeRef: eg,
            flashLegalTerms: () => eP(!0),
            analyticsLocation: W,
            baseAnalyticsData: B,
            openInvoiceId: F,
            flowStartTime: Q.startTime,
            isTrial: eu,
            trialId: ef,
            planGroup: eT,
            backButtonEligible: eL,
            metadata: ex,
            disablePurchase: eU,
            onPaymentSourceAdd: ew,
        }),
        eG = i.useMemo(
            () =>
                q
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(g.Z, { giftMessage: eh }),
                              !eM && (0, l.jsx)(O.A, { isEligibleForTrial: eu }),
                          ],
                      }),
            [eh, eM, eu, q],
        ),
        eF = i.useMemo(
            () =>
                q
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(v.A, {}), (0, l.jsx)(M.A, {})],
                      }),
            [q],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eG, (0, l.jsxs)(w.dZ, { children: [eF, t] }), (0, l.jsx)(w.UX, { children: eY })],
    });
}
