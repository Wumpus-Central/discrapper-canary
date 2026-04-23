"use strict";
n.d(t, { _: () => V });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(331322),
    l = n(304072),
    d = n(546605),
    _ = n(606267),
    u = n(742810),
    c = n(558620),
    E = n(427675),
    h = n(94420),
    m = n(810498),
    f = n(367921),
    g = n(209030),
    p = n(427858),
    A = n(45938),
    I = n(927578),
    T = n(937008),
    S = n(156312),
    N = n(166532),
    C = n(615310),
    R = n(50956),
    O = n(921925),
    y = n(520796),
    v = n(800471),
    D = n(367160),
    L = n(971875),
    b = n(216641),
    w = n(69494),
    P = n(871084),
    k = n(482132),
    M = n(788868),
    U = n(818348),
    x = n(985018);
let G = (e) => {
    let {
            isUnifiedCheckoutUIEnabled: t,
            openInvoiceId: n,
            onPaymentSourceAdd: s,
            invoiceError: o,
            onInvoiceError: l,
            onCurrencyChange: d,
            handleClose: _,
            planGroup: u,
            hasLegalTermsFlash: E,
            legalTermsNodeRef: m,
            handlePaymentSourceAdd: f,
            trialFooterMessageOverride: A,
            reviewWarningMessage: I,
            referralTrialOfferId: N,
            verifiedTrialId: C,
            originalTrialId: R,
        } = e,
        O = (0, c.A)(),
        { selectedPlanId: y, selectedSkuId: v } = (0, h.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
        })),
        { isGift: L } = (0, T.Pv)(),
        {
            hasFetchedSubscriptionPlans: b,
            unifiedCheckoutFlow: w,
            activeSubscription: P,
            currencies: k,
            paymentSources: M,
            priceOptions: U,
            purchaseState: x,
            setHasAcceptedTerms: G,
            discountOffer: V,
            isEligibleForDiscount: F,
            isEligibleForTrial: B,
        } = (0, S.P5)();
    a()(null != O, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", w, y, b, v);
    let H = r.useMemo(() => {
            let e = V?.discount?.plan_ids;
            return F && null != V && null != e && null != O && e.includes(O.id);
        }, [F, V, O]),
        j = r.useMemo(() => B || (null != R && null != A), [B, R, A]),
        W = {
            paymentSources: M,
            priceOptions: U,
            planGroup: u,
            currencies: k,
            onCurrencyChange: d,
            setHasAcceptedTerms: G,
            legalTermsNodeRef: m,
            hasLegalTermsFlash: E,
            handleClose: _,
        },
        Y = O.id;
    if (null == P || L) {
        let e = {
            ...W,
            selectedPlanId: Y,
            handlePaymentSourceAdd: f,
            trialId: C,
            trialFooterMessageOverride: A,
            reviewWarningMessage: I,
            referralTrialOfferId: N,
            isTrial: j,
            isDiscount: H,
        };
        return t ? (0, i.jsx)(D._, { ...e }) : (0, i.jsx)(g.A, { ...e });
    }
    {
        let e = {
            ...W,
            purchaseState: x,
            premiumSubscription: P,
            onPaymentSourceAdd: s,
            planId: Y,
            onInvoiceError: l,
            invoiceError: o,
            hasOpenInvoice: null != n,
        };
        return (0, i.jsx)(p.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function V(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: g,
            reviewWarningMessage: p,
            planGroup: D,
            openInvoiceId: V,
            analyticsData: F,
            analyticsLocation: B,
            referralTrialOfferId: H,
            initialPlanId: j,
            subscriptionTier: W,
            handleClose: Y,
        } = e,
        K = (0, u.D7)({ location: "payment_modal_review_step" }),
        { selectedSkuId: z, setEntitlementsGranted: $ } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
        })),
        {
            activeSubscription: q,
            setUpdatedSubscription: X,
            contextMetadata: Z,
            purchaseError: Q,
            setCurrency: J,
            setPurchaseState: ee,
            isPremium: et,
            purchaseType: en,
            setAppliedUserDiscounts: ei,
            startedPaymentFlowWithPaymentSourcesRef: er,
            disablePurchasesForStorybook: es,
            isPremiumGroupPurchase: ea,
            isEligibleForTrial: eo,
            userTrialOffer: el,
        } = (0, S.P5)(),
        ed = (0, c.A)(),
        e_ = (0, C.bB)(),
        { isGift: eu, giftMessage: ec, giftRecipient: eE, claimableRewards: eh } = (0, T.Pv)();
    a()(null != e_, "Step should be set");
    let em = r.useRef(null),
        [ef, eg] = (0, l.A)(!1, 500),
        { planGroup: ep, disablePurchase: eA } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: i,
                    priceOptions: s,
                    purchasePreviewError: a,
                    purchaseType: o,
                    isEligibleForTrial: l,
                    checkoutPaymentSources: u,
                    hasCheckoutContextLoaded: m,
                } = (0, S.P5)(),
                g = (0, h.sw)(),
                p = (0, c.A)(),
                A = (0, E.Hf)(),
                { isGift: N } = (0, T.Pv)(),
                C = (0, b.W)(i, n),
                R = r.useMemo(() => {
                    if (null == n) return !1;
                    if (!m) return !0;
                    let e = u.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [u, m, n]),
                O = (0, _.iB)({ checkoutPaymentSources: u, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                y = r.useMemo(() => {
                    if (null != p) {
                        if ((0, I.xq)(p.id)) return M.LE;
                        if ((0, I.z4)(p.id)) return M.DA;
                    }
                    return [];
                }, [p]),
                v = r.useMemo(
                    () =>
                        !!O ||
                        (o === U.VV.ONE_TIME
                            ? null == n || R || null == A || null != a
                            : null == g || (!N && null != C && o === U.VV.SUBSCRIPTION && l && !C.canRedeemTrial())),
                    [O, o, A, n, a, g, N, C, l, R],
                ),
                D = (0, I.J$)(s.paymentSourceId),
                L = (0, d.vg)("PaymentModalReviewStep"),
                w = null != n ? u.find((e) => e.id === n) : null,
                P =
                    o === U.VV.SUBSCRIPTION && null == p
                        ? x.intl.string(x.t.YScQSF)
                        : (0, f.Ro)({
                              purchaseType: o,
                              plan: p,
                              premiumSubscription: e,
                              isGift: N,
                              planGroup: y,
                              isPrepaidPaymentSource: D,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: L && w?.relocationCountry != null,
                          });
            return { paymentSource: C, planGroup: y, disablePurchase: v, buttonText: P };
        })(),
        eI = D ?? ep,
        { verifiedTrialId: eT, originalTrialId: eS } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: i, selectedSkuId: r } = e,
                s = t ?? n ?? null;
            return { verifiedTrialId: null != s && (!i || M.TP[s].skus.includes(r)) ? s : null, originalTrialId: t };
        })({ trialId: s, referralTrialOfferId: H, isPremium: et, selectedSkuId: z }),
        eN = { user_trial_offer_id: el?.id };
    r.useEffect(() => {
        null != Q && null != em.current && em.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let eC = r.useCallback(
            (e, t, i) => {
                X(e),
                    null != t && $(t),
                    null != i && ei(i),
                    n(N.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, X, $, ei],
        ),
        eR = r.useRef(null),
        [eO, ey] = r.useState(null),
        ev = eu && (0, A.Ik)(eE),
        eD = null == j && null == W && en === U.VV.SUBSCRIPTION,
        eL = (0, v.vT)({ isTrial: eo, isGift: eu, selectedSkuId: z, startedPaymentFlowWithPaymentSources: er.current }),
        eb = eu && en === U.VV.ONE_TIME,
        ew = eb || (eL ? eD && et : et),
        eP = (0, m.px)(ed, eu, eh),
        ek = r.useCallback(
            () =>
                (J(void 0), eL)
                    ? void n(N.pn.SKU_SELECT)
                    : ea
                      ? void n(N.pn.ADD_PAYMENT_STEPS)
                      : eP
                        ? void n(N.pn.SELECT_FREE_SKU)
                        : eb
                          ? n(N.pn.GIFT_CUSTOMIZATION)
                          : n(N.pn.PLAN_SELECT),
            [J, n, eL, eb, eP, ea],
        ),
        eM = () => {
            n(N.pn.ADD_PAYMENT_STEPS);
        },
        eU = eA;
    es && (eU = !0);
    let ex = r.useCallback(() => {
        n(N.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        en === U.VV.ONE_TIME
            ? (0, i.jsx)(L.Ay, { hasLegalTermsFlash: ef, legalTermsNodeRef: eR, handlePaymentSourceAdd: ex })
            : (0, i.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: K,
                  onCurrencyChange: (e) => J(e),
                  onPaymentSourceAdd: eM,
                  onInvoiceError: ey,
                  invoiceError: eO,
                  handlePaymentSourceAdd: ex,
                  handleClose: Y,
                  openInvoiceId: V,
                  trialFooterMessageOverride: g,
                  reviewWarningMessage: p,
                  referralTrialOfferId: H,
                  planGroup: eI,
                  originalTrialId: eS,
                  verifiedTrialId: eT,
                  hasLegalTermsFlash: ef,
                  legalTermsNodeRef: eR,
              });
    let eG = (0, i.jsx)(P.A, {
            premiumSubscription: q ?? null,
            setPurchaseState: ee,
            invoiceError: eO,
            onBack: ek,
            onNext: eC,
            legalTermsNodeRef: eR,
            flashLegalTerms: () => eg(!0),
            analyticsLocation: B,
            baseAnalyticsData: F,
            openInvoiceId: V,
            flowStartTime: Z.startTime,
            isTrial: eo,
            trialId: eT,
            planGroup: eI,
            backButtonEligible: ew,
            metadata: eN,
            disablePurchase: eU,
            onPaymentSourceAdd: eM,
        }),
        eV = r.useMemo(
            () =>
                K
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(R.Z, { giftMessage: ec }),
                              !ev && (0, i.jsx)(w.A, { isEligibleForTrial: eo }),
                          ],
                      }),
            [ec, ev, eo, K],
        ),
        eF = r.useMemo(
            () =>
                K
                    ? null
                    : (0, i.jsxs)(o.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, i.jsx)(O.A, {}), (0, i.jsx)(y.A, {})],
                      }),
            [K],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [eV, (0, i.jsxs)(k.dZ, { children: [eF, t] }), (0, i.jsx)(k.UX, { children: eG })],
    });
}
