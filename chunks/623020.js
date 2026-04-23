"use strict";
n.d(t, { _: () => G });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(331322),
    l = n(304072),
    u = n(546605),
    c = n(742810),
    d = n(558620),
    _ = n(427675),
    f = n(94420),
    p = n(810498),
    h = n(367921),
    E = n(271849),
    m = n(369280),
    g = n(45938),
    A = n(927578),
    I = n(937008),
    T = n(156312),
    S = n(166532),
    y = n(615310),
    N = n(50956),
    v = n(921925),
    C = n(520796),
    O = n(800471),
    R = n(367160),
    b = n(800132),
    D = n(216641),
    L = n(69494),
    w = n(312649),
    M = n(482132),
    P = n(788868),
    x = n(818348),
    k = n(985018);
let U = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            onPaymentSourceAdd: s,
            invoiceError: o,
            onInvoiceError: l,
            onCurrencyChange: u,
            handleClose: c,
            planGroup: _,
            hasLegalTermsFlash: p,
            legalTermsNodeRef: h,
            handlePaymentSourceAdd: g,
            trialFooterMessageOverride: A,
            reviewWarningMessage: S,
            referralTrialOfferId: y,
            verifiedTrialId: N,
            originalTrialId: v,
        } = e,
        C = (0, d.A)(),
        { selectedPlanId: O, selectedSkuId: b } = (0, f.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: D } = (0, I.Pv)(),
        {
            hasFetchedSubscriptionPlans: L,
            unifiedCheckoutFlow: w,
            activeSubscription: M,
            currencies: P,
            paymentSources: x,
            priceOptions: k,
            purchaseState: U,
            setHasAcceptedTerms: G,
            discountOffer: F,
            isEligibleForDiscount: V,
            isEligibleForTrial: B,
        } = (0, T.P5)();
    a()(null != C, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", w, O, L, b);
    let H = i.useMemo(() => {
            let e = F?.discount?.plan_ids;
            return V && null != F && null != e && null != C && e.includes(C.id);
        }, [V, F, C]),
        j = i.useMemo(() => B || (null != v && null != A), [B, v, A]),
        Y = {
            paymentSources: x,
            priceOptions: k,
            planGroup: _,
            currencies: P,
            onCurrencyChange: u,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: h,
            hasLegalTermsFlash: p,
            handleClose: c,
        },
        W = C.id;
    if (null == M || D) {
        let e = {
            ...Y,
            selectedPlanId: W,
            handlePaymentSourceAdd: g,
            trialId: N,
            trialFooterMessageOverride: A,
            reviewWarningMessage: S,
            referralTrialOfferId: y,
            isTrial: j,
            isDiscount: H,
        };
        return t ? (0, r.jsx)(R._, { ...e }) : (0, r.jsx)(E.A, { ...e });
    }
    {
        let e = {
            ...Y,
            purchaseState: U,
            premiumSubscription: M,
            onPaymentSourceAdd: s,
            planId: W,
            onInvoiceError: l,
            invoiceError: o,
            hasOpenInvoice: null != n,
        };
        return (0, r.jsx)(m.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function G(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: E,
            reviewWarningMessage: m,
            planGroup: R,
            openInvoiceId: G,
            analyticsData: F,
            analyticsLocation: V,
            referralTrialOfferId: B,
            initialPlanId: H,
            subscriptionTier: j,
            handleClose: Y,
        } = e,
        W = (0, c.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: K, setEntitlementsGranted: $ } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: z,
            setUpdatedSubscription: q,
            contextMetadata: X,
            purchaseError: Q,
            setCurrency: Z,
            setPurchaseState: J,
            isPremium: ee,
            purchaseType: et,
            setAppliedUserDiscounts: en,
            startedPaymentFlowWithPaymentSourcesRef: er,
            disablePurchasesForStorybook: ei,
            isPremiumGroupPurchase: es,
            isEligibleForTrial: ea,
            userTrialOffer: eo,
        } = (0, T.P5)(),
        el = (0, d.A)(),
        eu = (0, y.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: e_, claimableRewards: ef } = (0, I.Pv)();
    a()(null != eu, "Step should be set");
    let ep = i.useRef(null),
        [eh, eE] = (0, l.A)(!1, 500),
        { planGroup: em, disablePurchase: eg } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: r,
                    priceOptions: s,
                    purchasePreviewError: a,
                    purchaseType: o,
                    isEligibleForTrial: l,
                    checkoutPaymentSources: c,
                    hasCheckoutContextLoaded: p,
                } = (0, T.P5)(),
                E = (0, f.sw)(),
                m = (0, d.A)(),
                g = (0, _.Hf)(),
                { isGift: S } = (0, I.Pv)(),
                y = (0, D.W)(r, n),
                N = i.useMemo(() => {
                    if (null == n) return !1;
                    if (!p) return !0;
                    let e = c.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [c, p, n]),
                v = i.useMemo(() => {
                    if (null != m) {
                        if ((0, A.xq)(m.id)) return P.LE;
                        if ((0, A.z4)(m.id)) return P.DA;
                    }
                    return [];
                }, [m]),
                C = i.useMemo(
                    () =>
                        o === x.VV.ONE_TIME
                            ? null == n || N || null == g || null != a
                            : null == E || (!S && null != y && o === x.VV.SUBSCRIPTION && l && !y.canRedeemTrial()),
                    [o, g, n, a, E, S, y, l, N],
                ),
                O = (0, A.J$)(s.paymentSourceId),
                R = (0, u.vg)("PaymentModalReviewStep"),
                b = null != n ? c.find((e) => e.id === n) : null,
                L =
                    o === x.VV.SUBSCRIPTION && null == m
                        ? k.intl.string(k.t.YScQSF)
                        : (0, h.Ro)({
                              purchaseType: o,
                              plan: m,
                              premiumSubscription: e,
                              isGift: S,
                              planGroup: v,
                              isPrepaidPaymentSource: O,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: R && b?.relocationCountry != null,
                          });
            return { paymentSource: y, planGroup: v, disablePurchase: C, buttonText: L };
        })(),
        eA = R ?? em,
        { verifiedTrialId: eI, originalTrialId: eT } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: r, selectedSkuId: i } = e,
                s = t ?? n ?? null;
            return { verifiedTrialId: null != s && (!r || P.TP[s].skus.includes(i)) ? s : null, originalTrialId: t };
        })({ trialId: s, referralTrialOfferId: B, isPremium: ee, selectedSkuId: K }),
        eS = { user_trial_offer_id: eo?.id };
    i.useEffect(() => {
        null != Q && null != ep.current && ep.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ey = i.useCallback(
            (e, t, r) => {
                q(e),
                    null != t && $(t),
                    null != r && en(r),
                    n(S.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, q, $, en],
        ),
        eN = i.useRef(null),
        [ev, eC] = i.useState(null),
        eO = ec && (0, g.Ik)(e_),
        eR = null == H && null == j && et === x.VV.SUBSCRIPTION,
        eb = (0, O.vT)({ isTrial: ea, isGift: ec, selectedSkuId: K, startedPaymentFlowWithPaymentSources: er.current }),
        eD = ec && et === x.VV.ONE_TIME,
        eL = eD || (eb ? eR && ee : ee),
        ew = (0, p.px)(el, ec, ef),
        eM = i.useCallback(
            () =>
                (Z(void 0), eb)
                    ? void n(S.pn.SKU_SELECT)
                    : es
                      ? void n(S.pn.ADD_PAYMENT_STEPS)
                      : ew
                        ? void n(S.pn.SELECT_FREE_SKU)
                        : eD
                          ? n(S.pn.GIFT_CUSTOMIZATION)
                          : n(S.pn.PLAN_SELECT),
            [Z, n, eb, eD, ew, es],
        ),
        eP = () => {
            n(S.pn.ADD_PAYMENT_STEPS);
        },
        ex = eg;
    ei && (ex = !0);
    let ek = i.useCallback(() => {
        n(S.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        et === x.VV.ONE_TIME
            ? (0, r.jsx)(b.Ay, { hasLegalTermsFlash: eh, legalTermsNodeRef: eN, handlePaymentSourceAdd: ek })
            : (0, r.jsx)(U, {
                  isUnifiedCheckoutUIEnabled: W,
                  onCurrencyChange: (e) => Z(e),
                  onPaymentSourceAdd: eP,
                  onInvoiceError: eC,
                  invoiceError: ev,
                  handlePaymentSourceAdd: ek,
                  handleClose: Y,
                  openInvoiceId: G,
                  trialFooterMessageOverride: E,
                  reviewWarningMessage: m,
                  referralTrialOfferId: B,
                  planGroup: eA,
                  originalTrialId: eT,
                  verifiedTrialId: eI,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eN,
              });
    let eU = (0, r.jsx)(w.A, {
            premiumSubscription: z ?? null,
            setPurchaseState: J,
            invoiceError: ev,
            onBack: eM,
            onNext: ey,
            legalTermsNodeRef: eN,
            flashLegalTerms: () => eE(!0),
            analyticsLocation: V,
            baseAnalyticsData: F,
            openInvoiceId: G,
            flowStartTime: X.startTime,
            isTrial: ea,
            trialId: eI,
            planGroup: eA,
            backButtonEligible: eL,
            metadata: eS,
            disablePurchase: ex,
            onPaymentSourceAdd: eP,
        }),
        eG = i.useMemo(
            () =>
                W
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(N.Z, { giftMessage: ed }),
                              !eO && (0, r.jsx)(L.A, { isEligibleForTrial: ea }),
                          ],
                      }),
            [ed, eO, ea, W],
        ),
        eF = i.useMemo(
            () =>
                W
                    ? null
                    : (0, r.jsxs)(o.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(C.A, {})],
                      }),
            [W],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eG, (0, r.jsxs)(M.dZ, { children: [eF, t] }), (0, r.jsx)(M.UX, { children: eU })],
    });
}
