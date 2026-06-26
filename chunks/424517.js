"use strict";
n.d(t, { _: () => W }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(531260),
    a = n(854354),
    o = n(38785),
    l = n(426398),
    u = n(463376),
    c = n(266060),
    d = n(473617),
    _ = n(214891),
    h = n(669510),
    f = n(46332),
    p = n(683071),
    E = n(834730),
    m = n(212739);
n(25827);
var g = n(788868),
    A = n(865096),
    I = n(375708),
    T = n(234419),
    S = n(361597),
    y = n(815545),
    C = n(344159),
    N = n(299301),
    v = n(45938),
    R = n(428262),
    O = n(937008),
    b = n(800471),
    D = n(71867),
    L = n(216641),
    w = n(222707),
    M = n(559778),
    P = n(17928),
    x = n(376843),
    k = n(67480);
function U(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: s,
            disabled: a,
            hasEntitlements: o,
            label: l = I.intl.string(I.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: u,
            paymentSourceDropdownClassName: c,
            paymentSourceDropdownPrependOption: d,
            location: _ = "PremiumSubscriptionReview",
        } = e,
        { selectedSkuId: h } = (0, f.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        p = h ?? "",
        E = (0, P.bG)([k.A], () => k.A.get(p), [p]),
        m = E?.eligiblePaymentGateways,
        g = r.useMemo(
            () => ({
                newPaymentMethodOptionLabel: o && !n ? I.intl.string(I.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: m,
                shouldUseUnifiedCheckoutUI: u,
                className: c,
                prependOption: d,
            }),
            [o, n, m, u, c, d],
        );
    return (0, i.jsx)(x.N, {
        label: l,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: g,
        location: _,
        hideCurrencySelect: s,
    });
}
var G = n(340034),
    F = n(622631),
    V = n(755880),
    B = n(134638),
    j = n(888751),
    H = n(906234),
    Y = n(982772);
function W(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: P,
            planGroup: x,
            metadata: k,
            reviewWarningMessage: W,
            handlePaymentSourceAdd: K,
        } = e,
        {
            checkoutInvoicePreview: $,
            checkoutPriceOptions: z,
            checkoutInvoiceError: q,
            referralTrialOfferId: Z,
            isGift: X,
            selectedSkuId: Q,
            defaultPlanId: J,
            activeSubscription: ee,
            startedPaymentFlowWithPaymentSources: et,
        } = (0, f.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            defaultPlanId: e.defaultPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        {
            isEligibleForTrial: en,
            discountOffer: ei,
            premiumGroupDiscountOffer: er,
            isPremium: es,
            isPremiumGroupPurchase: ea,
        } = (0, u.i)(),
        eo = r.useMemo(() => en || null != n, [en, n]),
        {
            invoiceSummaryTypeWithPreview: el,
            subscriptionPeriodEnd: eu,
            proratedInvoicePreview: ec,
            purchaseDisabled: ed,
        } = ((e) => {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: i, isVerifiedTrial: r = !1 } = e,
                { priceOptions: s, activeSubscription: a } = (0, f.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    invoiceSummaryTypeWithPreview: l,
                    proratedInvoicePreview: u,
                    subscriptionPeriodEnd: c,
                } = (0, d.V)({ selectedPlanId: t, priceOptions: s, trialId: n, metadata: i, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: a,
                subscriptionPeriodEnd: c,
                invoiceSummaryTypeWithPreview: l,
                proratedInvoicePreview: u,
            };
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: k, isVerifiedTrial: eo }),
        e_ = (0, c.K)(),
        eh = er ?? ei,
        { giftRecipient: ef } = (0, O.Pv)(),
        ep = X && (0, v.Ik)(ef),
        eE = (0, b.vT)({ isTrial: eo, isGift: X, selectedSkuId: Q, startedPaymentFlowWithPaymentSources: et }) && !ea,
        em = k?.guild_id ?? void 0,
        eg = (0, s.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eA = r.useMemo(() => (0, R.Tm)({ skuId: Q, isPremium: es, defaultPlanId: J }), [Q, J, es]),
        { paymentSources: eI } = (0, l.jm)(),
        {
            hasEntitlements: eT,
            paymentSourceType: eS,
            isPrepaid: ey,
            paymentSourceOptionalWarningCopy: eC,
        } = ((e) => {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: i, isGift: s } = (0, f.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = i.paymentSourceId,
                o = (0, L.g)(n, a),
                l = (0, R.J$)(i.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, C.X)(t.id, s),
                d = r.useMemo(
                    () => (u && null == a ? I.intl.format(I.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: o,
                isPrepaid: l,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: P, paymentSources: eI }),
        eN = ec ?? $,
        ev = r.useMemo(
            () => null != eh && null != eh.discount && null != eN && (0, y.Ro)(eN, eh.discount.id),
            [eh, eN],
        ),
        eR = (0, i.jsx)(U, {
            label: I.intl.string(I.t["u+Cw58"]),
            handlePaymentSourceAdd: K,
            isTrial: eo,
            hideCurrencySelect: ev,
            disabled: ed,
            hasEntitlements: eT,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eO = (0, T.V)(Z),
        { copy: eb, daysCount: eD, userTrialOffer: eL } = (0, S.O8)(),
        ew = (0, w.pt)({
            fractionalPremiumInfo: eg,
            selectedPlanId: t,
            planGroup: x,
            premiumSubscription: ee,
            isGift: X,
        }),
        { setHeaderBadgeText: eM, unsetHeaderBadgeText: eP } = (0, _.v)(),
        ex = X && P.interval === g.WT.YEAR && (0, R.xq)(P.id),
        ek = (0, R.L_)({ planId: P.id, isGift: !0, priceOptions: z, subscriptionPlan: P });
    r.useEffect(
        () => (
            null != ek && ex && eM(I.intl.formatToPlainString(Y.default["Mi5BH/"], { percentOff: ek })),
            () => {
                eP();
            }
        ),
        [ek, eM, eP, ex],
    );
    let eU = r.useMemo(() => {
            if (null != el && el.type === N.N$.PREMIUM_WITH_TRIAL && null != eL)
                return (0, i.jsx)(M.Y, { text: I.intl.format(Y.default.IAsfR5, { daysCount: eD }) });
            if (null != eh && ev) {
                let e = eh.discount,
                    t = eh.getFullIntervalCount();
                if (e.userUsageLimitInterval === g.Ff.MONTH)
                    return (0, i.jsx)(M.Y, {
                        text: I.intl.format(Y.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === g.Ff.YEAR)
                    return (0, i.jsx)(M.Y, { text: I.intl.format(Y.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ex && null != ek
                ? (0, i.jsx)(M.Y, { text: I.intl.format(Y.default["7sYIBL"], { savingsPercent: ek }) })
                : null;
        }, [eL, ev, eh, eD, el, ek, ex]),
        eG = (0, H.G)(P.id),
        eF = r.useMemo(() => (eG ? (0, i.jsx)(V.a, {}) : null), [eG]),
        eV = (function (e) {
            let { skuId: t, isGift: n } = e,
                s = (0, m.O)();
            return r.useMemo(
                () =>
                    n || t !== g.pe.TIER_2 || !1 === s
                        ? null
                        : (0, i.jsx)(p.w, {
                              type: "info",
                              children: (0, i.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  children: I.intl.format(A.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, s],
            );
        })({ skuId: P.skuId, isGift: X }),
        eB = (0, D.i)({ planSkuId: P.skuId, invoice: eN }),
        ej = r.useMemo(() => (null != eU ? eU : null != eB ? eB : null != eF ? eF : null), [eU, eB, eF]),
        eH = r.useMemo(() => {
            let e = [];
            return (
                null != W && "" !== W && e.push({ type: "warning", message: W, key: "review-warning" }),
                null != eC && e.push({ type: "info", message: eC, key: "payment-source-optional-warning" }),
                ew
                    ? e.push({
                          directContent: (0, i.jsx)(G.l$, {
                              fractionalPremiumInfo: eg,
                              isEligibleForTrial: en,
                              trialPeriodCopy: eb,
                              subscriptionPeriodEnd: eu,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, w.Nn)(), key: "premium-group-purchase-notice" }),
                null != eV && e.push({ directContent: eV, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [W, eC, ew, eg, en, eb, eu, ea, eV]),
        eY = null != el ? el.invoicePreview : null,
        { priceOptions: eW, planPricesLoading: eK } = (0, R.Pr)(z, eY, q),
        e$ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eH,
            planSelectContent: eE
                ? (0, i.jsx)(F.X, {
                      disabled: ed,
                      selectedPlanId: t,
                      priceOptions: eW,
                      planOptions: eA,
                      subscriptionPeriodEnd: eu,
                      planPricesLoading: eK,
                  })
                : void 0,
            paymentMethodContent: eR,
            promotionalNoticeContent: ej,
        };
    if (null == el && null != q) return (0, i.jsx)(o.T, { ...e$, legalContent: null });
    if (null == el || el.type === N.N$.LOADING) return (0, i.jsx)(o.E, {});
    let ez = null != eO ? eO.subscription_trial : void 0,
        eq =
            el.type === N.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, i.jsx)(G.W9, {
                      invoiceSummaryTypeWithPreview: el,
                      subscriptionPlan: P,
                      isPrepaidPaymentSource: ey,
                      subscriptionTrial: ez,
                      isCustomGift: ep,
                  }),
        eZ = null;
    if (
        !ey &&
        (N.IJ.has(el.type) || el.type === N.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in el &&
        null != el.renewalInvoicePreview
    ) {
        let e = (0, j.Gj)(el.invoicePreview, el.renewalInvoicePreview, ez, {
            discountOffer: eh,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: eg,
        });
        eZ = (0, i.jsx)(h._, { ...e });
    }
    let eX = eE
            ? void 0
            : (0, i.jsx)(B._, {
                  type: el.type,
                  invoicePreview: el.invoicePreview,
                  storeListing: e_,
                  subscriptionPlan: P,
                  isPrepaidPaymentSource: ey,
                  giftRecipient: ef,
                  isPremiumGroupPurchase: ea,
                  guildId: em,
              }),
        eQ = (0, i.jsx)(G.PI, {
            planGroup: x,
            activeSubscription: ee,
            isTrial: eo,
            plan: P,
            isGift: X,
            paymentSourceType: eS,
            isPrepaidPaymentSource: ey,
            invoiceSummaryTypeWithPreview: el,
            fractionalPremiumInfo: eg,
        }),
        eJ =
            el.type === N.N$.PREMIUM_WITH_TRIAL
                ? (0, j.ib)(el.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: el.invoicePreview });
    return (0, i.jsx)(o.T, {
        ...e$,
        purchaseItemContent: eX,
        subscriptionDetailsContent: eZ,
        invoiceSummaryContent: eq,
        legalContent: eQ,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: X ? I.intl.string(Y.default.Zxav97) : I.intl.string(Y.default.R0cZsM),
    });
}
