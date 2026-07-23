n.d(t, { _: () => W }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(531260),
    a = n(854354),
    s = n(482419),
    o = n(38785),
    u = n(202475),
    c = n(400612),
    d = n(463376),
    p = n(266060),
    m = n(951305),
    h = n(316915),
    C = n(473617),
    E = n(699595),
    f = n(669510),
    A = n(683071),
    S = n(834730),
    y = n(212739);
n(25827);
var P = n(202541),
    I = n(594387),
    _ = n(375708),
    T = n(732280),
    g = n(361597),
    x = n(815545),
    v = n(344159),
    N = n(45938),
    R = n(428262),
    M = n(577381),
    b = n(750532),
    j = n(216641),
    O = n(222707),
    L = n(559778),
    k = n(319668);
function w(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = _.intl.string(_.t["u+Cw58"]),
            location: c = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, u.Yh)(),
        p = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? _.intl.string(_.t.IGU7El) : null,
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
var D = n(355813),
    U = n(845012),
    G = n(755880),
    F = n(134638),
    H = n(888751),
    B = n(906234),
    Y = n(327105);
function W(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: k,
            planGroup: W,
            metadata: V,
            reviewWarningMessage: K,
            handlePaymentSourceAdd: Z,
        } = e,
        {
            checkoutInvoicePreview: q,
            checkoutPriceOptions: z,
            checkoutInvoiceError: Q,
            referralTrialOfferId: $,
            isGift: J,
            selectedSkuId: X,
            defaultPlanId: ee,
            activeSubscription: et,
            shouldDisallowPlanSelection: en,
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
        })),
        {
            isEligibleForTrial: el,
            discountOffer: ei,
            premiumGroupDiscountOffer: er,
            isPremium: ea,
            isPremiumGroupPurchase: es,
        } = (0, d.i)(),
        eo = i.useMemo(() => el || null != n, [el, n]),
        {
            discriminatedInvoicePreview: eu,
            subscriptionPeriodEnd: ec,
            proratedInvoicePreview: ed,
            purchaseDisabled: ep,
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
                            quantity: f,
                            primaryInvoicesError: A,
                        } = (0, h.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: S } = (0, m.Pv)(),
                        {
                            subscriptionPlan: y,
                            purchaseDisabled: P,
                            newItems: I,
                            preventInvoiceFetch: _,
                        } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: T,
                            checkoutInvoiceRequestParams: g,
                            renewalInvoiceRequestParams: x,
                        } = (0, C.jq)({
                            items: I,
                            preventFetch: _,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        v = i.useMemo(
                            () =>
                                S
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...T, skuId: s, subscriptionPlanId: t, quantity: f },
                                      }
                                    : { type: "subscription_checkout_invoice", params: g },
                            [T, g, S, t, s, f],
                        ),
                        N = i.useMemo(() => (S ? null : { type: "subscription_renewal_invoice", params: x }), [x, S]);
                    i.useEffect(() => {
                        o(v);
                    }, [v, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]);
                    let { proratedInvoicePreview: R } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: M } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        b = i.useMemo(() => A ?? M, [A, M]),
                        j = i.useMemo(
                            () =>
                                S ? c.u$.PREMIUM_GIFT : a ? c.u$.PREMIUM_WITH_TRIAL : c.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [S, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, c.KY)({
                            invoiceError: b,
                            subscriptionPlan: y,
                            invoiceTypeDiscriminator: j,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != R ? R.subscriptionPeriodEnd : void 0), [R]);
                    return {
                        checkoutInvoicePreview: d,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: R,
                        renewalInvoicePreview: p,
                        purchaseDisabled: P,
                        invoiceError: b,
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
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: V, isVerifiedTrial: eo }),
        em = (0, p.K)(),
        eh = er ?? ei,
        { giftRecipient: eC } = (0, m.Pv)(),
        eE = J && (0, N.Ik)(eC),
        ef = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: eo })) && !es && !en,
        eA = V?.guild_id ?? void 0,
        eS = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ey = i.useMemo(() => (0, R.Tm)({ skuId: X, isPremium: ea, defaultPlanId: ee }), [X, ee, ea]),
        { paymentSources: eP } = (0, u.jm)(),
        {
            hasEntitlements: eI,
            paymentSourceType: e_,
            isPrepaid: eT,
            paymentSourceOptionalWarningCopy: eg,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, j.g)(n, a),
                o = (0, R.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, v.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? _.intl.format(_.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: k, paymentSources: eP }),
        ex = ed ?? q,
        ev = i.useMemo(
            () => null != eh && null != eh.discount && null != ex && (0, x.Ro)(ex, eh.discount.id),
            [eh, ex],
        ),
        eN = (0, l.jsx)(w, {
            label: _.intl.string(_.t["u+Cw58"]),
            handlePaymentSourceAdd: Z,
            isTrial: eo,
            hideCurrencySelect: ev,
            disabled: ep,
            hasEntitlements: eI,
        }),
        eR = (0, T.V)($),
        { copy: eM, daysCount: eb, userTrialOffer: ej } = (0, g.O8)(),
        eO = (0, O.pt)({
            fractionalPremiumInfo: eS,
            selectedPlanId: t,
            planGroup: W,
            premiumSubscription: et,
            isGift: J,
        }),
        eL = J && k.interval === P.WT.YEAR && (0, R.xq)(k.id),
        ek = (0, R.L_)({ planId: k.id, isGift: !0, priceOptions: z, subscriptionPlan: k }),
        ew = i.useMemo(() => {
            if (null != ek && eL)
                return { headerBadgeText: _.intl.formatToPlainString(Y.default["Mi5BH/"], { percentOff: ek }) };
        }, [ek, eL]),
        eD = (0, b.Fe)(ew),
        eU = i.useMemo(() => {
            if (null != eu && eu.type === c.u$.PREMIUM_WITH_TRIAL && null != ej)
                return (0, l.jsx)(L.Y, { text: _.intl.format(Y.default.IAsfR5, { daysCount: eb }) });
            if (null != eh && ev) {
                let e = eh.discount,
                    t = eh.getFullIntervalCount();
                if (e.userUsageLimitInterval === P.Ff.MONTH)
                    return (0, l.jsx)(L.Y, {
                        text: _.intl.format(Y.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === P.Ff.YEAR)
                    return (0, l.jsx)(L.Y, { text: _.intl.format(Y.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eL && null != ek
                ? (0, l.jsx)(L.Y, { text: _.intl.format(Y.default["7sYIBL"], { savingsPercent: ek }) })
                : null;
        }, [ej, ev, eh, eb, eu, ek, eL]),
        eG = (0, B.G)(k.id),
        eF = i.useMemo(() => (eG ? (0, l.jsx)(G.a, {}) : null), [eG]),
        eH = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, y.O)();
            return i.useMemo(
                () =>
                    n || t !== P.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(A.w, {
                              type: "info",
                              children: (0, l.jsx)(S.E, {
                                  variant: "text-sm/medium",
                                  children: _.intl.format(I.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: k.skuId, isGift: J }),
        eB = (0, M.i)({ planSkuId: k.skuId, invoice: ex }),
        eY = i.useMemo(() => (null != eU ? eU : null != eB ? eB : null != eF ? eF : null), [eU, eB, eF]),
        eW = i.useMemo(() => {
            let e = [];
            return (
                null != K && "" !== K && e.push({ type: "warning", message: K, key: "review-warning" }),
                null != eg && e.push({ type: "info", message: eg, key: "payment-source-optional-warning" }),
                eO
                    ? e.push({
                          directContent: (0, l.jsx)(D.l, {
                              fractionalPremiumInfo: eS,
                              isEligibleForTrial: el,
                              trialPeriodCopy: eM,
                              subscriptionPeriodEnd: ec,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : es && e.push({ type: "info", message: (0, O.Nn)(), key: "premium-group-purchase-notice" }),
                null != eH && e.push({ directContent: eH, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [K, eg, eO, eS, el, eM, ec, es, eH]),
        eV = null != eu ? eu.invoicePreview : null,
        { priceOptions: eK, planPricesLoading: eZ } = (0, R.Pr)(z, eV, Q),
        eq = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eW,
            planSelectContent: ef
                ? (0, l.jsx)(U.X, {
                      disabled: ep,
                      selectedPlanId: t,
                      priceOptions: eK,
                      planOptions: ey,
                      subscriptionPeriodEnd: ec,
                      planPricesLoading: eZ,
                  })
                : void 0,
            paymentMethodContent: eN,
            promotionalNoticeContent: eY,
            headerBadgeConfig: eD,
        };
    if (null == eu && null != Q) return (0, l.jsx)(o.T_, { ...eq, legalContent: null });
    if (null == eu || eu.type === c.u$.LOADING)
        return (0, l.jsx)(o.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eD });
    let ez = null != eR ? eR.subscription_trial : void 0,
        eQ =
            eu.type === c.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(s.k, {
                      discriminatedInvoicePreview: eu,
                      subscriptionPlan: k,
                      isPrepaidPaymentSource: eT,
                      subscriptionTrial: ez,
                      isCustomGift: eE,
                  }),
        e$ = null;
    if (
        !eT &&
        (c.ME.has(eu.type) || eu.type === c.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eu &&
        null != eu.renewalInvoicePreview
    ) {
        let e = (0, H.Gj)(eu.invoicePreview, eu.renewalInvoicePreview, ez, {
            discountOffer: eh,
            isSubscriptionUpdate: null != et,
            fractionalPremiumInfo: eS,
        });
        e$ = (0, l.jsx)(f._, { ...e });
    }
    let eJ = ef
            ? void 0
            : (0, l.jsx)(F._, {
                  type: eu.type,
                  invoicePreview: eu.invoicePreview,
                  storeListing: em,
                  subscriptionPlan: k,
                  isPrepaidPaymentSource: eT,
                  giftRecipient: eC,
                  isPremiumGroupPurchase: es,
                  guildId: eA,
              }),
        eX = (0, l.jsx)(D.P, {
            activeSubscription: et,
            isTrial: eo,
            plan: k,
            isGift: J,
            paymentSourceType: e_,
            discriminatedInvoicePreview: eu,
            fractionalPremiumInfo: eS,
        }),
        e0 =
            eu.type === c.u$.PREMIUM_WITH_TRIAL
                ? (0, H.ib)(eu.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eu.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...eq,
        purchaseItemContent: eJ,
        subscriptionDetailsContent: e$,
        invoiceSummaryContent: eQ,
        legalContent: eX,
        invoiceTotalDueValue: e0,
        invoiceTotalDueLabel: J ? _.intl.string(Y.default.Zxav97) : _.intl.string(Y.default.R0cZsM),
    });
}
