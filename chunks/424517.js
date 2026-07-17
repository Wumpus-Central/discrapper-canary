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
    m = n(316915),
    h = n(683071),
    C = n(834730),
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
    w = n(67480);
function k(e) {
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
        { selectedSkuId: h } = (0, m.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        C = h ?? "",
        E = (0, O.bG)([w.A], () => w.A.get(C), [C]),
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
            metadata: w,
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
            defaultPlanId: J,
            activeSubscription: X,
            shouldDisallowPlanSelection: ee,
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
            isEligibleForTrial: et,
            discountOffer: en,
            premiumGroupDiscountOffer: el,
            isPremium: ei,
            isPremiumGroupPurchase: er,
        } = (0, u.i)(),
        ea = i.useMemo(() => et || null != n, [et, n]),
        {
            invoiceSummaryTypeWithPreview: es,
            subscriptionPeriodEnd: eo,
            proratedInvoicePreview: eu,
            purchaseDisabled: ec,
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
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: w, isVerifiedTrial: ea }),
        ed = (0, c.K)(),
        ep = el ?? en,
        { giftRecipient: em } = (0, v.Pv)(),
        eh = Q && (0, g.Ik)(em),
        eC = (0, m.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: ea })) && !er && !ee,
        eE = w?.guild_id ?? void 0,
        ef = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eA = i.useMemo(() => (0, x.Tm)({ skuId: $, isPremium: ei, defaultPlanId: J }), [$, J, ei]),
        { paymentSources: eS } = (0, o.jm)(),
        {
            hasEntitlements: ey,
            paymentSourceType: eP,
            isPrepaid: eI,
            paymentSourceOptionalWarningCopy: e_,
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
        })({ subscriptionPlan: O, paymentSources: eS }),
        eT = eu ?? K,
        eg = i.useMemo(
            () => null != ep && null != ep.discount && null != eT && (0, I.Ro)(eT, ep.discount.id),
            [ep, eT],
        ),
        ex = (0, l.jsx)(k, {
            label: S.intl.string(S.t["u+Cw58"]),
            handlePaymentSourceAdd: V,
            isTrial: ea,
            hideCurrencySelect: eg,
            disabled: ec,
            hasEntitlements: ey,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ev = (0, y.V)(z),
        { copy: eN, daysCount: eM, userTrialOffer: eR } = (0, P.O8)(),
        eb = (0, b.pt)({
            fractionalPremiumInfo: ef,
            selectedPlanId: t,
            planGroup: L,
            premiumSubscription: X,
            isGift: Q,
        }),
        ej = Q && O.interval === f.WT.YEAR && (0, x.xq)(O.id),
        eO = (0, x.L_)({ planId: O.id, isGift: !0, priceOptions: Z, subscriptionPlan: O }),
        eL = i.useMemo(() => {
            if (null != eO && ej)
                return { headerBadgeText: S.intl.formatToPlainString(Y.default["Mi5BH/"], { percentOff: eO }) };
        }, [eO, ej]),
        ew = (0, M.Fe)(eL),
        ek = i.useMemo(() => {
            if (null != es && es.type === T.N$.PREMIUM_WITH_TRIAL && null != eR)
                return (0, l.jsx)(j.Y, { text: S.intl.format(Y.default.IAsfR5, { daysCount: eM }) });
            if (null != ep && eg) {
                let e = ep.discount,
                    t = ep.getFullIntervalCount();
                if (e.userUsageLimitInterval === f.Ff.MONTH)
                    return (0, l.jsx)(j.Y, {
                        text: S.intl.format(Y.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === f.Ff.YEAR)
                    return (0, l.jsx)(j.Y, { text: S.intl.format(Y.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ej && null != eO
                ? (0, l.jsx)(j.Y, { text: S.intl.format(Y.default["7sYIBL"], { savingsPercent: eO }) })
                : null;
        }, [eR, eg, ep, eM, es, eO, ej]),
        eD = (0, B.G)(O.id),
        eU = i.useMemo(() => (eD ? (0, l.jsx)(G.a, {}) : null), [eD]),
        eG = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, E.O)();
            return i.useMemo(
                () =>
                    n || t !== f.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(h.w, {
                              type: "info",
                              children: (0, l.jsx)(C.E, {
                                  variant: "text-sm/medium",
                                  children: S.intl.format(A.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: O.skuId, isGift: Q }),
        eF = (0, N.i)({ planSkuId: O.skuId, invoice: eT }),
        eH = i.useMemo(() => (null != ek ? ek : null != eF ? eF : null != eU ? eU : null), [ek, eF, eU]),
        eB = i.useMemo(() => {
            let e = [];
            return (
                null != W && "" !== W && e.push({ type: "warning", message: W, key: "review-warning" }),
                null != e_ && e.push({ type: "info", message: e_, key: "payment-source-optional-warning" }),
                eb
                    ? e.push({
                          directContent: (0, l.jsx)(D.l$, {
                              fractionalPremiumInfo: ef,
                              isEligibleForTrial: et,
                              trialPeriodCopy: eN,
                              subscriptionPeriodEnd: eo,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : er && e.push({ type: "info", message: (0, b.Nn)(), key: "premium-group-purchase-notice" }),
                null != eG && e.push({ directContent: eG, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [W, e_, eb, ef, et, eN, eo, er, eG]),
        eY = null != es ? es.invoicePreview : null,
        { priceOptions: eW, planPricesLoading: eV } = (0, x.Pr)(Z, eY, q),
        eK = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eB,
            planSelectContent: eC
                ? (0, l.jsx)(U.X, {
                      disabled: ec,
                      selectedPlanId: t,
                      priceOptions: eW,
                      planOptions: eA,
                      subscriptionPeriodEnd: eo,
                      planPricesLoading: eV,
                  })
                : void 0,
            paymentMethodContent: ex,
            promotionalNoticeContent: eH,
            headerBadgeConfig: ew,
        };
    if (null == es && null != q) return (0, l.jsx)(s.T_, { ...eK, legalContent: null });
    if (null == es || es.type === T.N$.LOADING)
        return (0, l.jsx)(s.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: ew });
    let eZ = null != ev ? ev.subscription_trial : void 0,
        eq =
            es.type === T.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(D.W9, {
                      invoiceSummaryTypeWithPreview: es,
                      subscriptionPlan: O,
                      isPrepaidPaymentSource: eI,
                      subscriptionTrial: eZ,
                      isCustomGift: eh,
                  }),
        ez = null;
    if (
        !eI &&
        (T.IJ.has(es.type) || es.type === T.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in es &&
        null != es.renewalInvoicePreview
    ) {
        let e = (0, H.Gj)(es.invoicePreview, es.renewalInvoicePreview, eZ, {
            discountOffer: ep,
            isSubscriptionUpdate: null != X,
            fractionalPremiumInfo: ef,
        });
        ez = (0, l.jsx)(p._, { ...e });
    }
    let eQ = eC
            ? void 0
            : (0, l.jsx)(F._, {
                  type: es.type,
                  invoicePreview: es.invoicePreview,
                  storeListing: ed,
                  subscriptionPlan: O,
                  isPrepaidPaymentSource: eI,
                  giftRecipient: em,
                  isPremiumGroupPurchase: er,
                  guildId: eE,
              }),
        e$ = (0, l.jsx)(D.PI, {
            activeSubscription: X,
            isTrial: ea,
            plan: O,
            isGift: Q,
            paymentSourceType: eP,
            invoiceSummaryTypeWithPreview: es,
            fractionalPremiumInfo: ef,
        }),
        eJ =
            es.type === T.N$.PREMIUM_WITH_TRIAL
                ? (0, H.ib)(es.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: es.invoicePreview });
    return (0, l.jsx)(s.T_, {
        ...eK,
        purchaseItemContent: eQ,
        subscriptionDetailsContent: ez,
        invoiceSummaryContent: eq,
        legalContent: e$,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: Q ? S.intl.string(Y.default.Zxav97) : S.intl.string(Y.default.R0cZsM),
    });
}
