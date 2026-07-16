n.d(t, { _: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(531260),
    a = n(854354),
    s = n(38785),
    o = n(426398),
    u = n(463376),
    c = n(266060),
    d = n(473617),
    p = n(669510),
    m = n(6938),
    C = n(683071),
    h = n(834730),
    E = n(212739);
n(25827);
var f = n(202541),
    A = n(594387),
    y = n(375708),
    S = n(234419),
    P = n(361597),
    I = n(815545),
    _ = n(344159),
    T = n(299301),
    g = n(45938),
    x = n(428262),
    v = n(951305),
    N = n(800471),
    M = n(577381),
    R = n(750532),
    b = n(216641),
    j = n(222707),
    O = n(559778),
    L = n(17928),
    w = n(319668),
    k = n(67480);
function D(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = y.intl.string(y.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: u,
            paymentSourceDropdownClassName: c,
            paymentSourceDropdownPrependOption: d,
            location: p = "PremiumSubscriptionReview",
        } = e,
        { selectedSkuId: C } = (0, m.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        h = C ?? "",
        E = (0, L.bG)([k.A], () => k.A.get(h), [h]),
        f = E?.eligiblePaymentGateways,
        A = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? y.intl.string(y.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: f,
                shouldUseUnifiedCheckoutUI: u,
                className: c,
                prependOption: d,
            }),
            [s, n, f, u, c, d],
        );
    return (0, l.jsx)(w.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: p,
        hideCurrencySelect: r,
    });
}
var U = n(340034),
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
            planGroup: w,
            metadata: k,
            reviewWarningMessage: V,
            handlePaymentSourceAdd: K,
        } = e,
        {
            checkoutInvoicePreview: Z,
            checkoutPriceOptions: q,
            checkoutInvoiceError: z,
            referralTrialOfferId: Q,
            isGift: $,
            selectedSkuId: X,
            defaultPlanId: J,
            activeSubscription: ee,
            startedPaymentFlowWithPaymentSources: et,
        } = (0, m.t4)((e) => ({
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
            discountOffer: el,
            premiumGroupDiscountOffer: ei,
            isPremium: er,
            isPremiumGroupPurchase: ea,
        } = (0, u.i)(),
        es = i.useMemo(() => en || null != n, [en, n]),
        {
            invoiceSummaryTypeWithPreview: eo,
            subscriptionPeriodEnd: eu,
            proratedInvoicePreview: ec,
            purchaseDisabled: ed,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: i = !1 } = e,
                { priceOptions: r, activeSubscription: a } = (0, m.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: s,
                    invoiceSummaryTypeWithPreview: o,
                    proratedInvoicePreview: u,
                    subscriptionPeriodEnd: c,
                } = (0, d.V)({ selectedPlanId: t, priceOptions: r, trialId: n, metadata: l, isTrial: i });
            return {
                purchaseDisabled: s,
                activeSubscription: a,
                subscriptionPeriodEnd: c,
                invoiceSummaryTypeWithPreview: o,
                proratedInvoicePreview: u,
            };
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: k, isVerifiedTrial: es }),
        ep = (0, c.K)(),
        em = ei ?? el,
        { giftRecipient: eC } = (0, v.Pv)(),
        eh = $ && (0, g.Ik)(eC),
        eE = (0, N.vT)({ isTrial: es, isGift: $, selectedSkuId: X, startedPaymentFlowWithPaymentSources: et }) && !ea,
        ef = k?.guild_id ?? void 0,
        eA = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ey = i.useMemo(() => (0, x.Tm)({ skuId: X, isPremium: er, defaultPlanId: J }), [X, J, er]),
        { paymentSources: eS } = (0, o.jm)(),
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
                o = (0, x.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, _.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? y.intl.format(y.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: L, paymentSources: eS }),
        eg = ec ?? Z,
        ex = i.useMemo(
            () => null != em && null != em.discount && null != eg && (0, I.Ro)(eg, em.discount.id),
            [em, eg],
        ),
        ev = (0, l.jsx)(D, {
            label: y.intl.string(y.t["u+Cw58"]),
            handlePaymentSourceAdd: K,
            isTrial: es,
            hideCurrencySelect: ex,
            disabled: ed,
            hasEntitlements: eP,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eN = (0, S.V)(Q),
        { copy: eM, daysCount: eR, userTrialOffer: eb } = (0, P.O8)(),
        ej = (0, j.pt)({
            fractionalPremiumInfo: eA,
            selectedPlanId: t,
            planGroup: w,
            premiumSubscription: ee,
            isGift: $,
        }),
        eO = $ && L.interval === f.WT.YEAR && (0, x.xq)(L.id),
        eL = (0, x.L_)({ planId: L.id, isGift: !0, priceOptions: q, subscriptionPlan: L }),
        ew = i.useMemo(() => {
            if (null != eL && eO)
                return { headerBadgeText: y.intl.formatToPlainString(W.default["Mi5BH/"], { percentOff: eL }) };
        }, [eL, eO]),
        ek = (0, R.Fe)(ew),
        eD = i.useMemo(() => {
            if (null != eo && eo.type === T.N$.PREMIUM_WITH_TRIAL && null != eb)
                return (0, l.jsx)(O.Y, { text: y.intl.format(W.default.IAsfR5, { daysCount: eR }) });
            if (null != em && ex) {
                let e = em.discount,
                    t = em.getFullIntervalCount();
                if (e.userUsageLimitInterval === f.Ff.MONTH)
                    return (0, l.jsx)(O.Y, {
                        text: y.intl.format(W.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === f.Ff.YEAR)
                    return (0, l.jsx)(O.Y, { text: y.intl.format(W.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eO && null != eL
                ? (0, l.jsx)(O.Y, { text: y.intl.format(W.default["7sYIBL"], { savingsPercent: eL }) })
                : null;
        }, [eb, ex, em, eR, eo, eL, eO]),
        eU = (0, Y.G)(L.id),
        eG = i.useMemo(() => (eU ? (0, l.jsx)(F.a, {}) : null), [eU]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, E.O)();
            return i.useMemo(
                () =>
                    n || t !== f.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(C.w, {
                              type: "info",
                              children: (0, l.jsx)(h.E, {
                                  variant: "text-sm/medium",
                                  children: y.intl.format(A.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: L.skuId, isGift: $ }),
        eH = (0, M.i)({ planSkuId: L.skuId, invoice: eg }),
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
                              trialPeriodCopy: eM,
                              subscriptionPeriodEnd: eu,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, j.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [V, eT, ej, eA, en, eM, eu, ea, eF]),
        eW = null != eo ? eo.invoicePreview : null,
        { priceOptions: eV, planPricesLoading: eK } = (0, x.Pr)(q, eW, z),
        eZ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eY,
            planSelectContent: eE
                ? (0, l.jsx)(G.X, {
                      disabled: ed,
                      selectedPlanId: t,
                      priceOptions: eV,
                      planOptions: ey,
                      subscriptionPeriodEnd: eu,
                      planPricesLoading: eK,
                  })
                : void 0,
            paymentMethodContent: ev,
            promotionalNoticeContent: eB,
            headerBadgeConfig: ek,
        };
    if (null == eo && null != z) return (0, l.jsx)(s.T_, { ...eZ, legalContent: null });
    if (null == eo || eo.type === T.N$.LOADING)
        return (0, l.jsx)(s.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: ek });
    let eq = null != eN ? eN.subscription_trial : void 0,
        ez =
            eo.type === T.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(U.W9, {
                      invoiceSummaryTypeWithPreview: eo,
                      subscriptionPlan: L,
                      isPrepaidPaymentSource: e_,
                      subscriptionTrial: eq,
                      isCustomGift: eh,
                  }),
        eQ = null;
    if (
        !e_ &&
        (T.IJ.has(eo.type) || eo.type === T.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eo &&
        null != eo.renewalInvoicePreview
    ) {
        let e = (0, B.Gj)(eo.invoicePreview, eo.renewalInvoicePreview, eq, {
            discountOffer: em,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: eA,
        });
        eQ = (0, l.jsx)(p._, { ...e });
    }
    let e$ = eE
            ? void 0
            : (0, l.jsx)(H._, {
                  type: eo.type,
                  invoicePreview: eo.invoicePreview,
                  storeListing: ep,
                  subscriptionPlan: L,
                  isPrepaidPaymentSource: e_,
                  giftRecipient: eC,
                  isPremiumGroupPurchase: ea,
                  guildId: ef,
              }),
        eX = (0, l.jsx)(U.PI, {
            activeSubscription: ee,
            isTrial: es,
            plan: L,
            isGift: $,
            paymentSourceType: eI,
            invoiceSummaryTypeWithPreview: eo,
            fractionalPremiumInfo: eA,
        }),
        eJ =
            eo.type === T.N$.PREMIUM_WITH_TRIAL
                ? (0, B.ib)(eo.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eo.invoicePreview });
    return (0, l.jsx)(s.T_, {
        ...eZ,
        purchaseItemContent: e$,
        subscriptionDetailsContent: eQ,
        invoiceSummaryContent: ez,
        legalContent: eX,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: $ ? y.intl.string(W.default.Zxav97) : y.intl.string(W.default.R0cZsM),
    });
}
