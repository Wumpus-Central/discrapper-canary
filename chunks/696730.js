n.d(t, { _: () => W }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(531260),
    a = n(854354),
    s = n(482419),
    o = n(38785),
    u = n(202475),
    c = n(400612),
    d = n(463376),
    p = n(266060),
    m = n(951305),
    h = n(87725),
    C = n(473617),
    f = n(699595),
    E = n(669510),
    S = n(683071),
    y = n(834730),
    A = n(212739);
n(25827);
var P = n(202541),
    I = n(378803),
    g = n(375708),
    v = n(732280),
    _ = n(92886),
    T = n(815545),
    x = n(344159),
    N = n(45938),
    b = n(158045),
    R = n(577381),
    j = n(750532),
    M = n(216641),
    O = n(222707),
    L = n(559778),
    k = n(377058);
function w(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = g.intl.string(g.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Y)(),
        p = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? g.intl.string(g.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(k.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: p,
        location: c,
        hideCurrencySelect: r,
    });
}
var U = n(340034),
    D = n(845012),
    G = n(755880),
    F = n(134638),
    B = n(888751),
    H = n(906234),
    Y = n(477729);
function W(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: k,
            planGroup: W,
            metadata: V,
            reviewWarningMessage: K,
            handlePaymentSourceAdd: q,
        } = e,
        {
            checkoutInvoicePreview: Z,
            checkoutPriceOptions: z,
            checkoutInvoiceError: Q,
            referralTrialOfferId: $,
            isGift: J,
            selectedSkuId: X,
            defaultPlanId: ee,
            activeSubscription: et,
            shouldDisallowPlanSelection: en,
            expressCheckoutSubmitting: el,
            shouldUseStripeExpressCheckout: ei,
        } = (0, h.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            defaultPlanId: e.defaultPlanId,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
        })),
        {
            isEligibleForTrial: er,
            discountOffer: ea,
            premiumGroupDiscountOffer: es,
            isPremium: eo,
            isPremiumGroupPurchase: eu,
        } = (0, d.i)(),
        ec = i.useMemo(() => er && null != n, [er, n]),
        {
            discriminatedInvoicePreview: ed,
            subscriptionPeriodEnd: ep,
            proratedInvoicePreview: em,
            purchaseDisabled: eh,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: d,
                    subscriptionPeriodEnd: p,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: d,
                            renewalInvoicePreview: p,
                            quantity: E,
                            primaryInvoicesError: S,
                        } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: y } = (0, m.Pv)(),
                        {
                            subscriptionPlan: A,
                            purchaseDisabled: P,
                            newItems: I,
                            preventInvoiceFetch: g,
                        } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: _,
                            renewalInvoiceRequestParams: T,
                        } = (0, C.jq)({
                            items: I,
                            preventFetch: g,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        x = i.useMemo(
                            () =>
                                y
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: E },
                                      }
                                    : { type: "subscription_checkout_invoice", params: _ },
                            [v, _, y, t, s, E],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: T }), [T, y]);
                    i.useEffect(() => {
                        o(x);
                    }, [x, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]);
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: R } = (0, f.W)({ priceOptions: n, trialId: l, metadata: r }),
                        j = i.useMemo(() => S ?? R, [S, R]),
                        M = i.useMemo(
                            () =>
                                y ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, c.KY)({
                            invoiceError: j,
                            subscriptionPlan: A,
                            invoiceTypeDiscriminator: M,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: d,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: p,
                        purchaseDisabled: P,
                        invoiceError: j,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: p,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: d,
            };
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: V, isVerifiedTrial: ec }),
        eC = (0, p.K)(),
        ef = es ?? ea,
        { giftRecipient: eE } = (0, m.Pv)(),
        eS = J && (0, N.Ik)(eE),
        ey = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: ec })) && !eu && !en,
        eA = V?.guild_id ?? void 0,
        eP = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eI = i.useMemo(() => (0, b.Tm)({ skuId: X, isPremium: eo, defaultPlanId: ee }), [X, ee, eo]),
        { paymentSources: eg } = (0, u.j)(),
        {
            hasEntitlements: ev,
            paymentSourceType: e_,
            isPrepaid: eT,
            paymentSourceOptionalWarningCopy: ex,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, M.g)(n, a),
                o = (0, b.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, x.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? g.intl.format(g.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: k, paymentSources: eg }),
        eN = em ?? Z,
        eb = i.useMemo(
            () => null != ef && null != ef.discount && null != eN && (0, T.Ro)(eN, ef.discount.id),
            [ef, eN],
        ),
        eR = (0, l.jsx)(w, {
            label: g.intl.string(g.t["u+Cw58"]),
            handlePaymentSourceAdd: q,
            isTrial: ec,
            hideCurrencySelect: eb,
            disabled: eh,
            hasEntitlements: ev,
        }),
        ej = (0, v.V)($),
        { copy: eM, daysCount: eO, userTrialOffer: eL } = (0, _.O8)(),
        ek = (0, O.pt)({
            fractionalPremiumInfo: eP,
            selectedPlanId: t,
            planGroup: W,
            premiumSubscription: et,
            isGift: J,
        }),
        ew = J && k.interval === P.WT.YEAR && (0, b.xq)(k.id),
        eU = (0, b.L_)({ planId: k.id, isGift: !0, priceOptions: z, subscriptionPlan: k }),
        eD = i.useMemo(() => {
            if (null != eU && ew)
                return { headerBadgeText: g.intl.formatToPlainString(Y.default["Mi5BH/"], { percentOff: eU }) };
        }, [eU, ew]),
        eG = (0, j.Fe)(eD),
        eF = i.useMemo(() => {
            if (null != ed && ed.type === c.u$.PREMIUM_WITH_TRIAL && null != eL)
                return (0, l.jsx)(L.Y, { text: g.intl.format(Y.default.IAsfR5, { daysCount: eO }) });
            if (null != ef && eb) {
                let e = ef.discount,
                    t = e.intervalCount;
                if (e.intervalType === P.Ff.MONTH)
                    return (0, l.jsx)(L.Y, {
                        text: g.intl.format(Y.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === P.Ff.YEAR)
                    return (0, l.jsx)(L.Y, { text: g.intl.format(Y.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ew && null != eU
                ? (0, l.jsx)(L.Y, { text: g.intl.format(Y.default["7sYIBL"], { savingsPercent: eU }) })
                : null;
        }, [eL, eb, ef, eO, ed, eU, ew]),
        eB = (0, H.G)(k.id),
        eH = i.useMemo(() => (eB ? (0, l.jsx)(G.a, {}) : null), [eB]),
        eY = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, A.O)();
            return i.useMemo(
                () =>
                    n || t !== P.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(S.w, {
                              type: "info",
                              children: (0, l.jsx)(y.E, {
                                  variant: "text-sm/medium",
                                  children: g.intl.format(I.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: k.skuId, isGift: J }),
        eW = (0, R.i)({ planSkuId: k.skuId, invoice: eN }),
        eV = i.useMemo(() => (null != eF ? eF : null != eW ? eW : null != eH ? eH : null), [eF, eW, eH]),
        eK = i.useMemo(() => {
            let e = [];
            return (
                null != K && "" !== K && e.push({ type: "warning", message: K, key: "review-warning" }),
                null != ex && e.push({ type: "info", message: ex, key: "payment-source-optional-warning" }),
                ek
                    ? e.push({
                          directContent: (0, l.jsx)(U.l, {
                              fractionalPremiumInfo: eP,
                              isEligibleForTrial: er,
                              trialPeriodCopy: eM,
                              subscriptionPeriodEnd: ep,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : eu && e.push({ type: "info", message: (0, O.Nn)(), key: "premium-group-purchase-notice" }),
                null != eY && e.push({ directContent: eY, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [K, ex, ek, eP, er, eM, ep, eu, eY]),
        eq = null != ed ? ed.invoicePreview : null,
        { priceOptions: eZ, planPricesLoading: ez } = (0, b.Pr)(z, eq, Q),
        eQ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eK,
            planSelectContent: ey
                ? (0, l.jsx)(D.X, {
                      disabled: eh || el,
                      selectedPlanId: t,
                      priceOptions: eZ,
                      planOptions: eI,
                      subscriptionPeriodEnd: ep,
                      planPricesLoading: ez,
                  })
                : void 0,
            paymentMethodContent: eR,
            promotionalNoticeContent: eV,
            headerBadgeConfig: eG,
        };
    if (null == ed && null != Q) return (0, l.jsx)(o.T_, { ...eQ, legalContent: null });
    if (null == ed || ed.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eG });
    let e$ = null != ej ? ej.subscriptionTrial : void 0,
        eJ =
            ed.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: ed,
                      subscriptionPlan: k,
                      isPrepaidPaymentSource: eT,
                      subscriptionTrial: e$,
                      isCustomGift: eS,
                  }),
        eX = null;
    if (
        !eT &&
        (c.ME.has(ed.type) || ed.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ed &&
        null != ed.renewalInvoicePreview
    ) {
        let e = (0, B.Gj)(ed.invoicePreview, ed.renewalInvoicePreview, e$, {
            discountOffer: ef,
            isSubscriptionUpdate: null != et,
            fractionalPremiumInfo: eP,
        });
        eX = (0, l.jsx)(E._, { ...e, defaultExpanded: ei });
    }
    let e0 = ey
            ? void 0
            : (0, l.jsx)(F._, {
                  type: ed.type,
                  invoicePreview: ed.invoicePreview,
                  storeListing: eC,
                  subscriptionPlan: k,
                  isPrepaidPaymentSource: eT,
                  giftRecipient: eE,
                  isPremiumGroupPurchase: eu,
                  guildId: eA,
              }),
        e2 = (0, l.jsx)(U.P, {
            activeSubscription: et,
            isTrial: ec,
            plan: k,
            isGift: J,
            paymentSourceType: e_,
            discriminatedInvoicePreview: ed,
            fractionalPremiumInfo: eP,
        }),
        e1 =
            ed.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, B.ib)(ed.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ed.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eQ,
        purchaseItemContent: e0,
        subscriptionDetailsContent: eX,
        invoiceSummaryContent: eJ,
        legalContent: e2,
        invoiceTotalDueValue: e1,
        invoiceTotalDueLabel: J ? g.intl.string(Y.default.Zxav97) : g.intl.string(Y.default.R0cZsM),
    });
}
