n.d(t, { _: () => B });
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
    C = n(94420),
    A = n(380619),
    E = n(367921),
    y = n(209030),
    P = n(427858),
    S = n(45938),
    _ = n(927578),
    T = n(937008),
    f = n(278521),
    x = n(166532),
    N = n(615310),
    I = n(50956),
    g = n(921925),
    v = n(506120),
    M = n(800471),
    j = n(367160),
    b = n(971875),
    R = n(216641),
    L = n(69494),
    O = n(871084),
    D = n(482132),
    w = n(788868),
    U = n(818348),
    k = n(375708);
let Y = (e) => {
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
            verifiedTrialId: A,
            originalTrialId: E,
        } = e,
        S = (0, h.A)(),
        {
            selectedPlanId: _,
            selectedSkuId: x,
            purchaseState: N,
            setHasAcceptedTerms: I,
        } = (0, C.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            setHasAcceptedTerms: e.setHasAcceptedTerms,
        })),
        { isGift: g } = (0, T.Pv)(),
        {
            hasFetchedSubscriptionPlans: v,
            unifiedCheckoutFlow: M,
            activeSubscription: b,
            currencies: R,
            paymentSources: L,
            priceOptions: O,
            discountOffer: D,
            isEligibleForDiscount: w,
            isEligibleForTrial: U,
            setCurrency: k,
        } = (0, f.P5)(),
        Y = a.useCallback((e) => k(e), [k]);
    r()(null != S, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", M, _, v, x);
    let G = a.useMemo(() => {
            let e = D?.discount?.plan_ids;
            return w && null != D && null != e && null != S && e.includes(S.id);
        }, [w, D, S]),
        F = a.useMemo(() => U || (null != E && null != d), [U, E, d]),
        B = {
            paymentSources: L,
            handlePaymentSourceAdd: c,
            priceOptions: O,
            planGroup: s,
            currencies: R,
            onCurrencyChange: Y,
            setHasAcceptedTerms: I,
            legalTermsNodeRef: u,
            hasLegalTermsFlash: o,
            handleClose: i,
        },
        W = S.id;
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
        return t ? (0, l.jsx)(j._, { ...e }) : (0, l.jsx)(y.A, { ...e });
    }
    {
        let e = { ...B, purchaseState: N, premiumSubscription: b, planId: W, hasOpenInvoice: null != n };
        return (0, l.jsx)(P.A, { ...e, shouldUseUnifiedCheckoutUI: t });
    }
};
function G(e) {
    let {
            renderStepBody: t,
            handleStepChange: n,
            trialId: i,
            trialFooterMessageOverride: y,
            reviewWarningMessage: P,
            planGroup: j,
            openInvoiceId: b,
            analyticsData: Y,
            analyticsLocation: G,
            referralTrialOfferId: F,
            initialPlanId: B,
            subscriptionTier: W,
            handleClose: V,
        } = e,
        H = (0, d.D7)({ location: "payment_modal_review_step" }),
        {
            selectedSkuId: K,
            setEntitlementsGranted: Z,
            setAppliedUserDiscounts: q,
            contextMetadata: z,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setEntitlementsGranted: e.setEntitlementsGranted,
            setAppliedUserDiscounts: e.setAppliedUserDiscounts,
            contextMetadata: e.contextMetadata,
        })),
        {
            activeSubscription: $,
            setUpdatedSubscription: J,
            purchaseError: X,
            setCurrency: Q,
            isPremium: ee,
            purchaseType: et,
            startedPaymentFlowWithPaymentSourcesRef: en,
            disablePurchasesForStorybook: el,
            isPremiumGroupPurchase: ea,
            isEligibleForTrial: ei,
            userTrialOffer: er,
        } = (0, f.P5)(),
        es = (0, h.A)(),
        eo = (0, N.bB)(),
        { isGift: eu, giftMessage: ec, giftRecipient: ed, claimableRewards: ep } = (0, T.Pv)();
    r()(null != eo, "Step should be set");
    let em = a.useRef(null),
        [eh, eC] = (0, o.A)(!1, 500),
        { planGroup: eA, disablePurchase: eE } = (function () {
            let {
                    activeSubscription: e,
                    hasPaymentSources: t,
                    paymentSourceId: n,
                    paymentSources: l,
                    priceOptions: i,
                    purchasePreviewError: r,
                    purchaseType: s,
                    isEligibleForTrial: o,
                } = (0, f.P5)(),
                { checkoutPaymentSources: d, hasInvoiceOrderContextLoaded: C } = (0, p.t)(),
                A = (0, m.sw)(),
                y = (0, h.A)(),
                { isGift: P } = (0, T.Pv)(),
                S = (0, R.W)(l, n),
                x = a.useMemo(() => {
                    if (null == n) return !1;
                    if (!C) return !0;
                    let e = d.find((e) => e.id === n);
                    return null != e && !e.enabled;
                }, [d, C, n]),
                N = (0, c.iB)({ checkoutPaymentSources: d, paymentSourceId: n, location: "PaymentModalReviewStep" }),
                I = a.useMemo(() => {
                    if (null != y) {
                        if ((0, _.xq)(y.id)) return w.LE;
                        if ((0, _.z4)(y.id)) return w.DA;
                    }
                    return [];
                }, [y]),
                g = a.useMemo(
                    () =>
                        !!N ||
                        (s === U.VV.ONE_TIME
                            ? null == n || x || null == A || null != r
                            : null == A || (!P && null != S && s === U.VV.SUBSCRIPTION && o && !S.canRedeemTrial())),
                    [N, s, n, r, A, P, S, o, x],
                ),
                v = (0, _.J$)(i.paymentSourceId),
                M = (0, u.vg)("PaymentModalReviewStep"),
                j = null != n ? d.find((e) => e.id === n) : null,
                b =
                    s === U.VV.SUBSCRIPTION && null == y
                        ? k.intl.string(k.t.YScQSF)
                        : (0, E.Ro)({
                              purchaseType: s,
                              plan: y,
                              premiumSubscription: e,
                              isGift: P,
                              planGroup: I,
                              isPrepaidPaymentSource: v,
                              paymentSourceId: n,
                              hasPaymentSources: t,
                              willRelocateStoreCountry: M && j?.relocationCountry != null,
                          });
            return { paymentSource: S, planGroup: I, disablePurchase: g, buttonText: b };
        })(),
        ey = j ?? eA,
        { verifiedTrialId: eP, originalTrialId: eS } = ((e) => {
            let { trialId: t, referralTrialOfferId: n, isPremium: l, selectedSkuId: a } = e,
                i = t ?? n ?? null;
            return { verifiedTrialId: null != i && (!l || w.TP[i].skus.includes(a)) ? i : null, originalTrialId: t };
        })({ trialId: i, referralTrialOfferId: F, isPremium: ee, selectedSkuId: K }),
        e_ = { user_trial_offer_id: er?.id };
    a.useEffect(() => {
        null != X && null != em.current && em.current.scrollIntoView({ behavior: "smooth" });
    }, [X]);
    let eT = a.useCallback(
            (e, t, l) => {
                J(e),
                    null != t && Z(t),
                    null != l && q(l),
                    n(x.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, J, Z, q],
        ),
        ef = a.useRef(null),
        ex = (0, m.mx)(),
        eN = eu && (0, S.Ik)(ed),
        eI = null == B && null == W && et === U.VV.SUBSCRIPTION,
        eg = (0, M.vT)({ isTrial: ei, isGift: eu, selectedSkuId: K, startedPaymentFlowWithPaymentSources: en.current }),
        ev = eu && et === U.VV.ONE_TIME,
        eM = ev || (eg ? eI && ee : ee),
        ej = (0, A.px)(es, eu, ep),
        eb = a.useCallback(
            () =>
                (Q(void 0), eg)
                    ? void n(x.pn.SKU_SELECT)
                    : ea
                      ? void n(x.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(x.pn.SELECT_FREE_SKU)
                        : ev
                          ? n(x.pn.GIFT_CUSTOMIZATION)
                          : n(x.pn.PLAN_SELECT),
            [Q, n, eg, ev, ej, ea],
        ),
        eR = eE;
    el && (eR = !0);
    let eL = a.useCallback(() => {
            n(x.pn.ADD_PAYMENT_STEPS);
        }, [n]),
        eO = a.useMemo(() => ({ hasLegalTermsFlash: eh, legalTermsNodeRef: ef }), [eh, ef]),
        eD = a.useMemo(() => ({ effectivePlanGroup: ey, verifiedTrialId: eP, originalTrialId: eS }), [ey, eP, eS]),
        ew = a.useMemo(
            () => ({
                handleClose: V,
                openInvoiceId: b,
                trialFooterMessageOverride: y,
                reviewWarningMessage: P,
                referralTrialOfferId: F,
            }),
            [V, b, y, P, F],
        ),
        eU = a.useMemo(
            () => t(et, { isUnifiedCheckoutUIEnabled: H, handlePaymentSourceAdd: eL }, eD, ew, eO),
            [t, eD, ew, eL, H, eO, et],
        ),
        ek = (0, l.jsx)(O.A, {
            premiumSubscription: $ ?? null,
            invoiceError: ex,
            onBack: eb,
            onNext: eT,
            legalTermsNodeRef: ef,
            flashLegalTerms: () => eC(!0),
            analyticsLocation: G,
            baseAnalyticsData: Y,
            openInvoiceId: b,
            flowStartTime: z.startTime,
            isTrial: ei,
            trialId: eP,
            planGroup: ey,
            backButtonEligible: eM,
            metadata: e_,
            disablePurchase: eR,
            onPaymentSourceAdd: eL,
        }),
        eY = a.useMemo(
            () =>
                H
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(I.Z, { giftMessage: ec }),
                              !eN && (0, l.jsx)(L.A, { isEligibleForTrial: ei }),
                          ],
                      }),
            [ec, eN, ei, H],
        ),
        eG = a.useMemo(
            () =>
                H
                    ? null
                    : (0, l.jsxs)(s.B, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, l.jsx)(g.A, {}), (0, l.jsx)(v.A, {})],
                      }),
            [H],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [eY, (0, l.jsxs)(D.dZ, { children: [eG, eU] }), (0, l.jsx)(D.UX, { children: ek })],
    });
}
let F = (e, t, n, a, i) => {
    let { isUnifiedCheckoutUIEnabled: r, handlePaymentSourceAdd: s } = t;
    if (e === U.VV.ONE_TIME) return (0, l.jsx)(b.Ay, { handlePaymentSourceAdd: s, ...i });
    {
        let {
                handleClose: e,
                openInvoiceId: t,
                trialFooterMessageOverride: o,
                reviewWarningMessage: u,
                referralTrialOfferId: c,
            } = a,
            { effectivePlanGroup: d, ...p } = n;
        return (0, l.jsx)(Y, {
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
function B(e) {
    return (0, l.jsx)(G, { renderStepBody: F, ...e });
}
