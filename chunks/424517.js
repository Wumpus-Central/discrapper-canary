n.d(t, { _: () => W }), n(321073);
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
    S = n(375708),
    y = n(234419),
    P = n(361597),
    I = n(815545),
    _ = n(344159),
    T = n(299301),
    g = n(45938),
    x = n(428262),
    v = n(951305),
    N = n(577381),
    M = n(750532),
    R = n(216641),
    b = n(222707),
    j = n(559778),
    O = n(17928),
    L = n(319668),
    k = n(67480);
function w(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = S.intl.string(S.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: u,
            paymentSourceDropdownClassName: c,
            paymentSourceDropdownPrependOption: d,
            location: p = "PremiumSubscriptionReview",
        } = e,
        { selectedSkuId: C } = (0, m.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        h = C ?? "",
        E = (0, O.bG)([k.A], () => k.A.get(h), [h]),
        f = E?.eligiblePaymentGateways,
        A = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? S.intl.string(S.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: f,
                shouldUseUnifiedCheckoutUI: u,
                className: c,
                prependOption: d,
            }),
            [s, n, f, u, c, d],
        );
    return (0, l.jsx)(L.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: p,
        hideCurrencySelect: r,
    });
}
var D = n(340034),
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
            selectedPlan: O,
            planGroup: L,
            metadata: k,
            reviewWarningMessage: W,
            handlePaymentSourceAdd: V,
        } = e,
        {
            checkoutInvoicePreview: K,
            checkoutPriceOptions: Z,
            checkoutInvoiceError: q,
            referralTrialOfferId: z,
            isGift: Q,
            selectedSkuId: $,
            defaultPlanId: X,
            activeSubscription: J,
        } = (0, m.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            defaultPlanId: e.defaultPlanId,
            activeSubscription: e.activeSubscription,
        })),
        {
            isEligibleForTrial: ee,
            discountOffer: et,
            premiumGroupDiscountOffer: en,
            isPremium: el,
            isPremiumGroupPurchase: ei,
        } = (0, u.i)(),
        er = i.useMemo(() => ee || null != n, [ee, n]),
        {
            invoiceSummaryTypeWithPreview: ea,
            subscriptionPeriodEnd: es,
            proratedInvoicePreview: eo,
            purchaseDisabled: eu,
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
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: k, isVerifiedTrial: er }),
        ec = (0, c.K)(),
        ed = en ?? et,
        { giftRecipient: ep } = (0, v.Pv)(),
        em = Q && (0, g.Ik)(ep),
        eC = (0, m.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: er })) && !ei,
        eh = k?.guild_id ?? void 0,
        eE = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        ef = i.useMemo(() => (0, x.Tm)({ skuId: $, isPremium: el, defaultPlanId: X }), [$, X, el]),
        { paymentSources: eA } = (0, o.jm)(),
        {
            hasEntitlements: eS,
            paymentSourceType: ey,
            isPrepaid: eP,
            paymentSourceOptionalWarningCopy: eI,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, m.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, R.g)(n, a),
                o = (0, x.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, _.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? S.intl.format(S.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: O, paymentSources: eA }),
        e_ = eo ?? K,
        eT = i.useMemo(
            () => null != ed && null != ed.discount && null != e_ && (0, I.Ro)(e_, ed.discount.id),
            [ed, e_],
        ),
        eg = (0, l.jsx)(w, {
            label: S.intl.string(S.t["u+Cw58"]),
            handlePaymentSourceAdd: V,
            isTrial: er,
            hideCurrencySelect: eT,
            disabled: eu,
            hasEntitlements: eS,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ex = (0, y.V)(z),
        { copy: ev, daysCount: eN, userTrialOffer: eM } = (0, P.O8)(),
        eR = (0, b.pt)({
            fractionalPremiumInfo: eE,
            selectedPlanId: t,
            planGroup: L,
            premiumSubscription: J,
            isGift: Q,
        }),
        eb = Q && O.interval === f.WT.YEAR && (0, x.xq)(O.id),
        ej = (0, x.L_)({ planId: O.id, isGift: !0, priceOptions: Z, subscriptionPlan: O }),
        eO = i.useMemo(() => {
            if (null != ej && eb)
                return { headerBadgeText: S.intl.formatToPlainString(Y.default["Mi5BH/"], { percentOff: ej }) };
        }, [ej, eb]),
        eL = (0, M.Fe)(eO),
        ek = i.useMemo(() => {
            if (null != ea && ea.type === T.N$.PREMIUM_WITH_TRIAL && null != eM)
                return (0, l.jsx)(j.Y, { text: S.intl.format(Y.default.IAsfR5, { daysCount: eN }) });
            if (null != ed && eT) {
                let e = ed.discount,
                    t = ed.getFullIntervalCount();
                if (e.userUsageLimitInterval === f.Ff.MONTH)
                    return (0, l.jsx)(j.Y, {
                        text: S.intl.format(Y.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === f.Ff.YEAR)
                    return (0, l.jsx)(j.Y, { text: S.intl.format(Y.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eb && null != ej
                ? (0, l.jsx)(j.Y, { text: S.intl.format(Y.default["7sYIBL"], { savingsPercent: ej }) })
                : null;
        }, [eM, eT, ed, eN, ea, ej, eb]),
        ew = (0, B.G)(O.id),
        eD = i.useMemo(() => (ew ? (0, l.jsx)(G.a, {}) : null), [ew]),
        eU = (function (e) {
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
                                  children: S.intl.format(A.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: O.skuId, isGift: Q }),
        eG = (0, N.i)({ planSkuId: O.skuId, invoice: e_ }),
        eF = i.useMemo(() => (null != ek ? ek : null != eG ? eG : null != eD ? eD : null), [ek, eG, eD]),
        eH = i.useMemo(() => {
            let e = [];
            return (
                null != W && "" !== W && e.push({ type: "warning", message: W, key: "review-warning" }),
                null != eI && e.push({ type: "info", message: eI, key: "payment-source-optional-warning" }),
                eR
                    ? e.push({
                          directContent: (0, l.jsx)(D.l$, {
                              fractionalPremiumInfo: eE,
                              isEligibleForTrial: ee,
                              trialPeriodCopy: ev,
                              subscriptionPeriodEnd: es,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ei && e.push({ type: "info", message: (0, b.Nn)(), key: "premium-group-purchase-notice" }),
                null != eU && e.push({ directContent: eU, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [W, eI, eR, eE, ee, ev, es, ei, eU]),
        eB = null != ea ? ea.invoicePreview : null,
        { priceOptions: eY, planPricesLoading: eW } = (0, x.Pr)(Z, eB, q),
        eV = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eH,
            planSelectContent: eC
                ? (0, l.jsx)(U.X, {
                      disabled: eu,
                      selectedPlanId: t,
                      priceOptions: eY,
                      planOptions: ef,
                      subscriptionPeriodEnd: es,
                      planPricesLoading: eW,
                  })
                : void 0,
            paymentMethodContent: eg,
            promotionalNoticeContent: eF,
            headerBadgeConfig: eL,
        };
    if (null == ea && null != q) return (0, l.jsx)(s.T_, { ...eV, legalContent: null });
    if (null == ea || ea.type === T.N$.LOADING)
        return (0, l.jsx)(s.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eL });
    let eK = null != ex ? ex.subscription_trial : void 0,
        eZ =
            ea.type === T.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(D.W9, {
                      invoiceSummaryTypeWithPreview: ea,
                      subscriptionPlan: O,
                      isPrepaidPaymentSource: eP,
                      subscriptionTrial: eK,
                      isCustomGift: em,
                  }),
        eq = null;
    if (
        !eP &&
        (T.IJ.has(ea.type) || ea.type === T.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ea &&
        null != ea.renewalInvoicePreview
    ) {
        let e = (0, H.Gj)(ea.invoicePreview, ea.renewalInvoicePreview, eK, {
            discountOffer: ed,
            isSubscriptionUpdate: null != J,
            fractionalPremiumInfo: eE,
        });
        eq = (0, l.jsx)(p._, { ...e });
    }
    let ez = eC
            ? void 0
            : (0, l.jsx)(F._, {
                  type: ea.type,
                  invoicePreview: ea.invoicePreview,
                  storeListing: ec,
                  subscriptionPlan: O,
                  isPrepaidPaymentSource: eP,
                  giftRecipient: ep,
                  isPremiumGroupPurchase: ei,
                  guildId: eh,
              }),
        eQ = (0, l.jsx)(D.PI, {
            activeSubscription: J,
            isTrial: er,
            plan: O,
            isGift: Q,
            paymentSourceType: ey,
            invoiceSummaryTypeWithPreview: ea,
            fractionalPremiumInfo: eE,
        }),
        e$ =
            ea.type === T.N$.PREMIUM_WITH_TRIAL
                ? (0, H.ib)(ea.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: ea.invoicePreview });
    return (0, l.jsx)(s.T_, {
        ...eV,
        purchaseItemContent: ez,
        subscriptionDetailsContent: eq,
        invoiceSummaryContent: eZ,
        legalContent: eQ,
        invoiceTotalDueValue: e$,
        invoiceTotalDueLabel: Q ? S.intl.string(Y.default.Zxav97) : S.intl.string(Y.default.R0cZsM),
    });
}
