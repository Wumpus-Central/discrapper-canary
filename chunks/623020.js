"use strict";
n.d(t, { _: () => H });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(304072),
    u = n(742810),
    c = n(558620),
    d = n(427675),
    _ = n(94420),
    f = n(810498),
    p = n(367921),
    h = n(271849),
    m = n(369280),
    E = n(45938),
    g = n(927578),
    A = n(937008),
    I = n(156312),
    T = n(166532),
    S = n(615310),
    y = n(50956),
    v = n(921925),
    N = n(520796),
    C = n(800471),
    R = n(367160),
    O = n(112242),
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
            checkoutPaymentSources: u,
            hasCheckoutContextLoaded: f,
        } = (0, I.P5)(),
        h = (0, _.sw)(),
        m = (0, c.A)(),
        E = (0, d.Hf)(),
        { isGift: T } = (0, A.Pv)(),
        S = (0, D.W)(r, n),
        y = i.useMemo(() => {
            if (null == n) return !1;
            if (!f) return !0;
            let e = u.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [u, f, n]),
        v = i.useMemo(() => {
            if (null != m) {
                if ((0, g.xq)(m.id)) return P.LE;
                if ((0, g.z4)(m.id)) return P.DA;
            }
            return [];
        }, [m]),
        N = i.useMemo(
            () =>
                o === x.VV.ONE_TIME
                    ? null == n || y || null == E || null != a
                    : null == h || (!T && null != S && o === x.VV.SUBSCRIPTION && l && !S.canRedeemTrial()),
            [o, E, n, a, h, T, S, l, y],
        ),
        C = (0, g.J$)(s.paymentSourceId),
        R =
            o === x.VV.SUBSCRIPTION && null == m
                ? k.intl.string(k.t.YScQSF)
                : (0, p.Ro)({
                      purchaseType: o,
                      plan: m,
                      premiumSubscription: e,
                      isGift: T,
                      planGroup: v,
                      isPrepaidPaymentSource: C,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return { paymentSource: S, planGroup: v, disablePurchase: N, buttonText: R };
}
let F = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(b.Ay, { ...n }) : (0, r.jsx)(O.Ay, { ...n });
    },
    V = (e) => {
        let {
                isUnifiedCheckoutUIEnabled: t,
                openInvoiceId: n,
                onPaymentSourceAdd: s,
                invoiceError: o,
                onInvoiceError: l,
                onCurrencyChange: u,
                handleClose: d,
                planGroup: f,
                hasLegalTermsFlash: p,
                legalTermsNodeRef: E,
                handlePaymentSourceAdd: g,
                trialFooterMessageOverride: T,
                reviewWarningMessage: S,
                referralTrialOfferId: y,
                verifiedTrialId: v,
                originalTrialId: N,
            } = e,
            C = (0, c.A)(),
            { selectedPlanId: O, selectedSkuId: b } = (0, _.t4)((e) => ({
                selectedPlanId: e.selectedPlanId,
                selectedSkuId: e.selectedSkuId,
            })),
            { isGift: D } = (0, A.Pv)(),
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
            } = (0, I.P5)();
        a()(null != C, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", w, O, L, b);
        let H = i.useMemo(() => {
                let e = F?.discount?.plan_ids;
                return V && null != F && null != e && null != C && e.includes(C.id);
            }, [V, F, C]),
            j = i.useMemo(() => B || (null != N && null != T), [B, N, T]),
            Y = {
                paymentSources: x,
                priceOptions: k,
                planGroup: f,
                currencies: P,
                onCurrencyChange: u,
                setHasAcceptedTerms: G,
                legalTermsNodeRef: E,
                hasLegalTermsFlash: p,
                handleClose: d,
                purchaseState: U,
            },
            W = C.id;
        if (null == M || D) {
            let e = {
                ...Y,
                selectedPlanId: W,
                handlePaymentSourceAdd: g,
                trialId: v,
                trialFooterMessageOverride: T,
                reviewWarningMessage: S,
                referralTrialOfferId: y,
                isTrial: j,
                isDiscount: H,
            };
            return t ? (0, r.jsx)(R._, { ...e }) : (0, r.jsx)(h.A, { ...e });
        }
        {
            let e = {
                ...Y,
                premiumSubscription: M,
                onPaymentSourceAdd: s,
                planId: W,
                onInvoiceError: l,
                invoiceError: o,
                hasOpenInvoice: null != n,
            };
            return (0, r.jsx)(m.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    },
    B = (e) => {
        let { trialId: t, referralTrialOfferId: n, isPremium: r, selectedSkuId: i } = e,
            s = t ?? n ?? null;
        return { verifiedTrialId: null != s && (!r || P.TP[s].skus.includes(i)) ? s : null, originalTrialId: t };
    };
function H(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: p,
            planGroup: h,
            openInvoiceId: m,
            analyticsData: g,
            analyticsLocation: R,
            referralTrialOfferId: O,
            initialPlanId: b,
            subscriptionTier: D,
            handleClose: P,
        } = e,
        k = (0, u.D7)({ location: "payment_modal_review_step" }),
        H = (0, _.t4)((e) => e.selectedSkuId),
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
        } = (0, I.P5)(),
        ei = (0, c.A)(),
        es = (0, S.bB)(),
        { isGift: ea, giftMessage: eo, giftRecipient: el, claimableRewards: eu } = (0, A.Pv)();
    a()(null != es, "Step should be set");
    let ec = i.useRef(null),
        [ed, e_] = (0, l.A)(!1, U),
        { planGroup: ef, disablePurchase: ep } = G(),
        eh = h ?? ef,
        { verifiedTrialId: em, originalTrialId: eE } = B({
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
                    n(T.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, Y, X, Q],
        ),
        eI = i.useRef(null),
        [eT, eS] = i.useState(null),
        ey = ea && (0, E.Ik)(el),
        ev = null == b && null == D && Z === x.VV.SUBSCRIPTION,
        eN = (0, C.vT)({ isTrial: en, isGift: ea, selectedSkuId: H, startedPaymentFlowWithPaymentSources: J.current }),
        eC = ea && Z === x.VV.ONE_TIME,
        eR = eC || (eN ? ev && q : q),
        eO = (0, f.px)(ei, ea, eu),
        eb = i.useCallback(
            () =>
                ($(void 0), eN)
                    ? void n(T.pn.SKU_SELECT)
                    : et
                      ? void n(T.pn.ADD_PAYMENT_STEPS)
                      : eO
                        ? void n(T.pn.SELECT_FREE_SKU)
                        : eC
                          ? n(T.pn.GIFT_CUSTOMIZATION)
                          : n(T.pn.PLAN_SELECT),
            [$, n, eN, eC, eO, et],
        ),
        eD = () => {
            n(T.pn.ADD_PAYMENT_STEPS);
        },
        eL = ep;
    ee && (eL = !0);
    let ew = i.useCallback(() => {
        n(T.pn.ADD_PAYMENT_STEPS);
    }, [n]);
    t =
        Z === x.VV.ONE_TIME
            ? (0, r.jsx)(F, {
                  isUnifiedCheckoutUIEnabled: k,
                  hasLegalTermsFlash: ed,
                  legalTermsNodeRef: eI,
                  handlePaymentSourceAdd: ew,
              })
            : (0, r.jsx)(V, {
                  isUnifiedCheckoutUIEnabled: k,
                  onCurrencyChange: (e) => $(e),
                  onPaymentSourceAdd: eD,
                  onInvoiceError: eS,
                  invoiceError: eT,
                  handlePaymentSourceAdd: ew,
                  handleClose: P,
                  openInvoiceId: m,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: p,
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
            analyticsLocation: R,
            baseAnalyticsData: g,
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
                k
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(y.Z, { giftMessage: eo }),
                              !ey && (0, r.jsx)(L.A, { isEligibleForTrial: en }),
                          ],
                      }),
            [eo, ey, en, k],
        ),
        ex = i.useMemo(
            () =>
                k
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(N.A, {})],
                      }),
            [k],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eP, (0, r.jsxs)(M.dZ, { children: [ex, t] }), (0, r.jsx)(M.UX, { children: eM })],
    });
}
