"use strict";
n.d(t, { _: () => B });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(304072),
    u = n(546605),
    c = n(742810),
    d = n(558620),
    _ = n(427675),
    f = n(94420),
    p = n(810498),
    h = n(367921),
    m = n(271849),
    E = n(369280),
    g = n(45938),
    A = n(927578),
    I = n(937008),
    T = n(156312),
    S = n(166532),
    y = n(615310),
    v = n(50956),
    N = n(921925),
    C = n(520796),
    R = n(800471),
    O = n(367160),
    b = n(800132),
    D = n(216641),
    L = n(69494),
    w = n(312649),
    M = n(482132),
    P = n(788868),
    x = n(818348),
    k = n(985018);
let U = 500;
function G() {
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
        m = (0, f.sw)(),
        E = (0, d.A)(),
        g = (0, _.Hf)(),
        { isGift: S } = (0, I.Pv)(),
        y = (0, D.W)(r, n),
        v = i.useMemo(() => {
            if (null == n) return !1;
            if (!p) return !0;
            let e = c.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [c, p, n]),
        N = i.useMemo(() => {
            if (null != E) {
                if ((0, A.xq)(E.id)) return P.LE;
                if ((0, A.z4)(E.id)) return P.DA;
            }
            return [];
        }, [E]),
        C = i.useMemo(
            () =>
                o === x.VV.ONE_TIME
                    ? null == n || v || null == g || null != a
                    : null == m || (!S && null != y && o === x.VV.SUBSCRIPTION && l && !y.canRedeemTrial()),
            [o, g, n, a, m, S, y, l, v],
        ),
        R = (0, A.J$)(s.paymentSourceId),
        O = (0, u.vg)("PaymentModalReviewStep"),
        b = null != n ? c.find((e) => e.id === n) : null,
        L =
            o === x.VV.SUBSCRIPTION && null == E
                ? k.intl.string(k.t.YScQSF)
                : (0, h.Ro)({
                      purchaseType: o,
                      plan: E,
                      premiumSubscription: e,
                      isGift: S,
                      planGroup: N,
                      isPrepaidPaymentSource: R,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                      willRelocateStoreCountry: O && b?.relocationCountry != null,
                  });
    return { paymentSource: y, planGroup: N, disablePurchase: C, buttonText: L };
}
let F = (e) => {
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
                verifiedTrialId: v,
                originalTrialId: N,
            } = e,
            C = (0, d.A)(),
            { selectedPlanId: R, selectedSkuId: b } = (0, f.t4)((e) => ({
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
        a()(null != C, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", w, R, L, b);
        let H = i.useMemo(() => {
                let e = F?.discount?.plan_ids;
                return V && null != F && null != e && null != C && e.includes(C.id);
            }, [V, F, C]),
            j = i.useMemo(() => B || (null != N && null != A), [B, N, A]),
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
                trialId: v,
                trialFooterMessageOverride: A,
                reviewWarningMessage: S,
                referralTrialOfferId: y,
                isTrial: j,
                isDiscount: H,
            };
            return t ? (0, r.jsx)(O._, { ...e }) : (0, r.jsx)(m.A, { ...e });
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
            return (0, r.jsx)(E.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    },
    V = (e) => {
        let { trialId: t, referralTrialOfferId: n, isPremium: r, selectedSkuId: i } = e,
            s = t ?? n ?? null;
        return { verifiedTrialId: null != s && (!r || P.TP[s].skus.includes(i)) ? s : null, originalTrialId: t };
    };
function B(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: u,
            reviewWarningMessage: _,
            planGroup: h,
            openInvoiceId: m,
            analyticsData: E,
            analyticsLocation: A,
            referralTrialOfferId: O,
            initialPlanId: D,
            subscriptionTier: P,
            handleClose: k,
        } = e,
        B = (0, c.D7)({ location: "payment_modal_review_step" }),
        H = (0, f.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: j,
            setUpdatedSubscription: Y,
            contextMetadata: W,
            purchaseError: K,
            setCurrency: $,
            setPurchaseState: z,
            isPremium: q,
            purchaseType: Z,
            setEntitlementsGranted: X,
            setAppliedUserDiscounts: Q,
            startedPaymentFlowWithPaymentSourcesRef: J,
            disablePurchasesForStorybook: ee,
            isPremiumGroupPurchase: et,
            isEligibleForTrial: en,
            userTrialOffer: er,
        } = (0, T.P5)(),
        ei = (0, d.A)(),
        es = (0, y.bB)(),
        { isGift: ea, giftMessage: eo, giftRecipient: el, claimableRewards: eu } = (0, I.Pv)();
    a()(null != es, "Step should be set");
    let ec = i.useRef(null),
        [ed, e_] = (0, l.A)(!1, U),
        { planGroup: ef, disablePurchase: ep } = G(),
        eh = h ?? ef,
        { verifiedTrialId: em, originalTrialId: eE } = V({
            trialId: s,
            referralTrialOfferId: O,
            isPremium: q,
            selectedSkuId: H,
        }),
        eg = { user_trial_offer_id: er?.id };
    i.useEffect(() => {
        null != K && null != ec.current && ec.current.scrollIntoView({ behavior: "smooth" });
    }, [K]);
    let eA = i.useCallback(
            (e, t, r) => {
                Y(e),
                    null != t && X(t),
                    null != r && Q(r),
                    n(S.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, Y, X, Q],
        ),
        eI = i.useRef(null),
        [eT, eS] = i.useState(null),
        ey = ea && (0, g.Ik)(el),
        ev = null == D && null == P && Z === x.VV.SUBSCRIPTION,
        eN = (0, R.vT)({ isTrial: en, isGift: ea, selectedSkuId: H, startedPaymentFlowWithPaymentSources: J.current }),
        eC = ea && Z === x.VV.ONE_TIME,
        eR = eC || (eN ? ev && q : q),
        eO = (0, p.px)(ei, ea, eu),
        eb = i.useCallback(
            () =>
                ($(void 0), eN)
                    ? void n(S.pn.SKU_SELECT)
                    : et
                      ? void n(S.pn.ADD_PAYMENT_STEPS)
                      : eO
                        ? void n(S.pn.SELECT_FREE_SKU)
                        : eC
                          ? n(S.pn.GIFT_CUSTOMIZATION)
                          : n(S.pn.PLAN_SELECT),
            [$, n, eN, eC, eO, et],
        ),
        eD = () => {
            n(S.pn.ADD_PAYMENT_STEPS);
        },
        eL = ep;
    ee && (eL = !0);
    let ew = i.useCallback(() => {
        n(S.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        Z === x.VV.ONE_TIME
            ? (0, r.jsx)(b.Ay, { hasLegalTermsFlash: ed, legalTermsNodeRef: eI, handlePaymentSourceAdd: ew })
            : (0, r.jsx)(F, {
                  isUnifiedCheckoutUIEnabled: B,
                  onCurrencyChange: (e) => $(e),
                  onPaymentSourceAdd: eD,
                  onInvoiceError: eS,
                  invoiceError: eT,
                  handlePaymentSourceAdd: ew,
                  handleClose: k,
                  openInvoiceId: m,
                  trialFooterMessageOverride: u,
                  reviewWarningMessage: _,
                  referralTrialOfferId: O,
                  planGroup: eh,
                  originalTrialId: eE,
                  verifiedTrialId: em,
                  hasLegalTermsFlash: ed,
                  legalTermsNodeRef: eI,
              });
    let eM = (0, r.jsx)(w.A, {
            premiumSubscription: j ?? null,
            setPurchaseState: z,
            invoiceError: eT,
            onBack: eb,
            onNext: eA,
            legalTermsNodeRef: eI,
            flashLegalTerms: () => e_(!0),
            analyticsLocation: A,
            baseAnalyticsData: E,
            openInvoiceId: m,
            flowStartTime: W.startTime,
            isTrial: en,
            trialId: em,
            planGroup: eh,
            backButtonEligible: eR,
            metadata: eg,
            disablePurchase: eL,
            onPaymentSourceAdd: eD,
        }),
        eP = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(v.Z, { giftMessage: eo }),
                              !ey && (0, r.jsx)(L.A, { isEligibleForTrial: en }),
                          ],
                      }),
            [eo, ey, en, B],
        ),
        ex = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, r.jsx)(N.A, {}), (0, r.jsx)(C.A, {})],
                      }),
            [B],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eP, (0, r.jsxs)(M.dZ, { children: [ex, t] }), (0, r.jsx)(M.UX, { children: eM })],
    });
}
