n.d(t, { _: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(531260),
    a = n(854354),
    s = n(38785),
    o = n(400612),
    u = n(426398),
    c = n(463376),
    d = n(266060),
    p = n(951305),
    m = n(316915),
    h = n(473617),
    C = n(699595),
    E = n(669510),
    f = n(683071),
    A = n(834730),
    S = n(212739);
n(25827);
var y = n(202541),
    P = n(594387),
    I = n(375708),
    _ = n(732280),
    T = n(361597),
    g = n(815545),
    x = n(344159),
    v = n(45938),
    N = n(428262),
    R = n(577381),
    M = n(750532),
    b = n(216641),
    j = n(222707),
    O = n(559778),
    L = n(17928),
    k = n(319668),
    w = n(67480);
function D(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = I.intl.string(I.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: u,
            paymentSourceDropdownClassName: c,
            paymentSourceDropdownPrependOption: d,
            location: p = "PremiumSubscriptionReview",
        } = e,
        { selectedSkuId: h } = (0, m.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        C = h ?? "",
        E = (0, L.bG)([w.A], () => w.A.get(C), [C]),
        f = E?.eligiblePaymentGateways,
        A = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? I.intl.string(I.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: f,
                shouldUseUnifiedCheckoutUI: u,
                className: c,
                prependOption: d,
            }),
            [s, n, f, u, c, d],
        );
    return (0, l.jsx)(k.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: p,
        hideCurrencySelect: r,
    });
}
var U = n(355813),
    G = n(845012),
    F = n(755880),
    H = n(134638),
    B = n(888751),
    Y = n(906234),
    W = n(327105);
function V(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: L,
            planGroup: k,
            metadata: w,
            reviewWarningMessage: V,
            handlePaymentSourceAdd: K,
        } = e,
        {
            checkoutInvoicePreview: Z,
            checkoutPriceOptions: q,
            checkoutInvoiceError: z,
            referralTrialOfferId: Q,
            isGift: $,
            selectedSkuId: J,
            defaultPlanId: X,
            activeSubscription: ee,
            shouldDisallowPlanSelection: et,
        } = (0, m.t4)((e) => ({
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
            isEligibleForTrial: en,
            discountOffer: el,
            premiumGroupDiscountOffer: ei,
            isPremium: er,
            isPremiumGroupPurchase: ea,
        } = (0, c.i)(),
        es = i.useMemo(() => en || null != n, [en, n]),
        {
            discriminatedInvoicePreview: eo,
            subscriptionPeriodEnd: eu,
            proratedInvoicePreview: ec,
            purchaseDisabled: ed,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, m.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: u,
                    discriminatedInvoicePreview: c,
                    proratedInvoicePreview: d,
                    subscriptionPeriodEnd: E,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: u,
                            setFetchRenewalInvoicePreviewRequest: c,
                            checkoutInvoicePreview: d,
                            renewalInvoicePreview: E,
                            quantity: f,
                            primaryInvoicesError: A,
                        } = (0, m.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: S } = (0, p.Pv)(),
                        {
                            subscriptionPlan: y,
                            purchaseDisabled: P,
                            newItems: I,
                            preventInvoiceFetch: _,
                        } = (0, h.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: T,
                            checkoutInvoiceRequestParams: g,
                            renewalInvoiceRequestParams: x,
                        } = (0, h.jq)({
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
                        u(v);
                    }, [v, u]),
                        i.useEffect(() => {
                            c(N);
                        }, [N, c]);
                    let { proratedInvoicePreview: R } = i.useMemo(() => ({ proratedInvoicePreview: d }), [d]),
                        { discountInvoiceError: M } = (0, C.W)({ priceOptions: n, trialId: l, metadata: r }),
                        b = i.useMemo(() => A ?? M, [A, M]),
                        j = i.useMemo(
                            () =>
                                S ? o.u$.PREMIUM_GIFT : a ? o.u$.PREMIUM_WITH_TRIAL : o.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [S, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, o.KY)({
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
                        renewalInvoicePreview: E,
                        purchaseDisabled: P,
                        invoiceError: b,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: u,
                activeSubscription: s,
                subscriptionPeriodEnd: E,
                discriminatedInvoicePreview: c,
                proratedInvoicePreview: d,
            };
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: w, isVerifiedTrial: es }),
        ep = (0, d.K)(),
        em = ei ?? el,
        { giftRecipient: eh } = (0, p.Pv)(),
        eC = $ && (0, v.Ik)(eh),
        eE = (0, m.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: es })) && !ea && !et,
        ef = w?.guild_id ?? void 0,
        eA = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eS = i.useMemo(() => (0, N.Tm)({ skuId: J, isPremium: er, defaultPlanId: X }), [J, X, er]),
        { paymentSources: ey } = (0, u.jm)(),
        {
            hasEntitlements: eP,
            paymentSourceType: eI,
            isPrepaid: e_,
            paymentSourceOptionalWarningCopy: eT,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, m.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, b.g)(n, a),
                o = (0, N.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, x.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? I.intl.format(I.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: L, paymentSources: ey }),
        eg = ec ?? Z,
        ex = i.useMemo(
            () => null != em && null != em.discount && null != eg && (0, g.Ro)(eg, em.discount.id),
            [em, eg],
        ),
        ev = (0, l.jsx)(D, {
            label: I.intl.string(I.t["u+Cw58"]),
            handlePaymentSourceAdd: K,
            isTrial: es,
            hideCurrencySelect: ex,
            disabled: ed,
            hasEntitlements: eP,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eN = (0, _.V)(Q),
        { copy: eR, daysCount: eM, userTrialOffer: eb } = (0, T.O8)(),
        ej = (0, j.pt)({
            fractionalPremiumInfo: eA,
            selectedPlanId: t,
            planGroup: k,
            premiumSubscription: ee,
            isGift: $,
        }),
        eO = $ && L.interval === y.WT.YEAR && (0, N.xq)(L.id),
        eL = (0, N.L_)({ planId: L.id, isGift: !0, priceOptions: q, subscriptionPlan: L }),
        ek = i.useMemo(() => {
            if (null != eL && eO)
                return { headerBadgeText: I.intl.formatToPlainString(W.default["Mi5BH/"], { percentOff: eL }) };
        }, [eL, eO]),
        ew = (0, M.Fe)(ek),
        eD = i.useMemo(() => {
            if (null != eo && eo.type === o.u$.PREMIUM_WITH_TRIAL && null != eb)
                return (0, l.jsx)(O.Y, { text: I.intl.format(W.default.IAsfR5, { daysCount: eM }) });
            if (null != em && ex) {
                let e = em.discount,
                    t = em.getFullIntervalCount();
                if (e.userUsageLimitInterval === y.Ff.MONTH)
                    return (0, l.jsx)(O.Y, {
                        text: I.intl.format(W.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === y.Ff.YEAR)
                    return (0, l.jsx)(O.Y, { text: I.intl.format(W.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eO && null != eL
                ? (0, l.jsx)(O.Y, { text: I.intl.format(W.default["7sYIBL"], { savingsPercent: eL }) })
                : null;
        }, [eb, ex, em, eM, eo, eL, eO]),
        eU = (0, Y.G)(L.id),
        eG = i.useMemo(() => (eU ? (0, l.jsx)(F.a, {}) : null), [eU]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, S.O)();
            return i.useMemo(
                () =>
                    n || t !== y.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(f.w, {
                              type: "info",
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  children: I.intl.format(P.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: L.skuId, isGift: $ }),
        eH = (0, R.i)({ planSkuId: L.skuId, invoice: eg }),
        eB = i.useMemo(() => (null != eD ? eD : null != eH ? eH : null != eG ? eG : null), [eD, eH, eG]),
        eY = i.useMemo(() => {
            let e = [];
            return (
                null != V && "" !== V && e.push({ type: "warning", message: V, key: "review-warning" }),
                null != eT && e.push({ type: "info", message: eT, key: "payment-source-optional-warning" }),
                ej
                    ? e.push({
                          directContent: (0, l.jsx)(U.l$, {
                              fractionalPremiumInfo: eA,
                              isEligibleForTrial: en,
                              trialPeriodCopy: eR,
                              subscriptionPeriodEnd: eu,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, j.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [V, eT, ej, eA, en, eR, eu, ea, eF]),
        eW = null != eo ? eo.invoicePreview : null,
        { priceOptions: eV, planPricesLoading: eK } = (0, N.Pr)(q, eW, z),
        eZ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eY,
            planSelectContent: eE
                ? (0, l.jsx)(G.X, {
                      disabled: ed,
                      selectedPlanId: t,
                      priceOptions: eV,
                      planOptions: eS,
                      subscriptionPeriodEnd: eu,
                      planPricesLoading: eK,
                  })
                : void 0,
            paymentMethodContent: ev,
            promotionalNoticeContent: eB,
            headerBadgeConfig: ew,
        };
    if (null == eo && null != z) return (0, l.jsx)(s.T_, { ...eZ, legalContent: null });
    if (null == eo || eo.type === o.u$.LOADING)
        return (0, l.jsx)(s.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: ew });
    let eq = null != eN ? eN.subscription_trial : void 0,
        ez =
            eo.type === o.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(U.W9, {
                      discriminatedInvoicePreview: eo,
                      subscriptionPlan: L,
                      isPrepaidPaymentSource: e_,
                      subscriptionTrial: eq,
                      isCustomGift: eC,
                  }),
        eQ = null;
    if (
        !e_ &&
        (o.ME.has(eo.type) || eo.type === o.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eo &&
        null != eo.renewalInvoicePreview
    ) {
        let e = (0, B.Gj)(eo.invoicePreview, eo.renewalInvoicePreview, eq, {
            discountOffer: em,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: eA,
        });
        eQ = (0, l.jsx)(E._, { ...e });
    }
    let e$ = eE
            ? void 0
            : (0, l.jsx)(H._, {
                  type: eo.type,
                  invoicePreview: eo.invoicePreview,
                  storeListing: ep,
                  subscriptionPlan: L,
                  isPrepaidPaymentSource: e_,
                  giftRecipient: eh,
                  isPremiumGroupPurchase: ea,
                  guildId: ef,
              }),
        eJ = (0, l.jsx)(U.PI, {
            activeSubscription: ee,
            isTrial: es,
            plan: L,
            isGift: $,
            paymentSourceType: eI,
            discriminatedInvoicePreview: eo,
            fractionalPremiumInfo: eA,
        }),
        eX =
            eo.type === o.u$.PREMIUM_WITH_TRIAL
                ? (0, B.ib)(eo.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eo.invoicePreview });
    return (0, l.jsx)(s.T_, {
        ...eZ,
        purchaseItemContent: e$,
        subscriptionDetailsContent: eQ,
        invoiceSummaryContent: ez,
        legalContent: eJ,
        invoiceTotalDueValue: eX,
        invoiceTotalDueLabel: $ ? I.intl.string(W.default.Zxav97) : I.intl.string(W.default.R0cZsM),
    });
}
