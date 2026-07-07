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
    p = n(214891),
    m = n(669510),
    C = n(6938),
    h = n(683071),
    E = n(834730),
    A = n(212739);
n(25827);
var f = n(202541),
    S = n(594387),
    y = n(375708),
    P = n(234419),
    T = n(361597),
    I = n(815545),
    _ = n(344159),
    g = n(299301),
    v = n(45938),
    x = n(428262),
    N = n(937008),
    R = n(800471),
    b = n(577381),
    M = n(216641),
    O = n(222707),
    j = n(559778),
    L = n(17928),
    D = n(319668),
    U = n(67480);
function w(e) {
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
        { selectedSkuId: m } = (0, C.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        h = m ?? "",
        E = (0, L.bG)([U.A], () => U.A.get(h), [h]),
        A = E?.eligiblePaymentGateways,
        f = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? y.intl.string(y.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: A,
                shouldUseUnifiedCheckoutUI: u,
                className: c,
                prependOption: d,
            }),
            [s, n, A, u, c, d],
        );
    return (0, l.jsx)(D.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: f,
        location: p,
        hideCurrencySelect: r,
    });
}
var k = n(340034),
    G = n(845012),
    F = n(755880),
    B = n(134638),
    Y = n(888751),
    H = n(906234),
    W = n(327105);
function V(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: L,
            planGroup: D,
            metadata: U,
            reviewWarningMessage: V,
            handlePaymentSourceAdd: K,
        } = e,
        {
            checkoutInvoicePreview: Z,
            checkoutPriceOptions: q,
            checkoutInvoiceError: z,
            referralTrialOfferId: $,
            isGift: X,
            selectedSkuId: Q,
            defaultPlanId: J,
            activeSubscription: ee,
            startedPaymentFlowWithPaymentSources: et,
        } = (0, C.t4)((e) => ({
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
        } = ((e) => {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: i = !1 } = e,
                { priceOptions: r, activeSubscription: a } = (0, C.t4)((e) => ({
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
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: U, isVerifiedTrial: es }),
        ep = (0, c.K)(),
        em = ei ?? el,
        { giftRecipient: eC } = (0, N.Pv)(),
        eh = X && (0, v.Ik)(eC),
        eE = (0, R.vT)({ isTrial: es, isGift: X, selectedSkuId: Q, startedPaymentFlowWithPaymentSources: et }) && !ea,
        eA = U?.guild_id ?? void 0,
        ef = (0, r.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eS = i.useMemo(() => (0, x.Tm)({ skuId: Q, isPremium: er, defaultPlanId: J }), [Q, J, er]),
        { paymentSources: ey } = (0, o.jm)(),
        {
            hasEntitlements: eP,
            paymentSourceType: eT,
            isPrepaid: eI,
            paymentSourceOptionalWarningCopy: e_,
        } = ((e) => {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, M.g)(n, a),
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
        })({ subscriptionPlan: L, paymentSources: ey }),
        eg = ec ?? Z,
        ev = i.useMemo(
            () => null != em && null != em.discount && null != eg && (0, I.Ro)(eg, em.discount.id),
            [em, eg],
        ),
        ex = (0, l.jsx)(w, {
            label: y.intl.string(y.t["u+Cw58"]),
            handlePaymentSourceAdd: K,
            isTrial: es,
            hideCurrencySelect: ev,
            disabled: ed,
            hasEntitlements: eP,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        eN = (0, P.V)($),
        { copy: eR, daysCount: eb, userTrialOffer: eM } = (0, T.O8)(),
        eO = (0, O.pt)({
            fractionalPremiumInfo: ef,
            selectedPlanId: t,
            planGroup: D,
            premiumSubscription: ee,
            isGift: X,
        }),
        { setHeaderBadgeText: ej, unsetHeaderBadgeText: eL } = (0, p.v)(),
        eD = X && L.interval === f.WT.YEAR && (0, x.xq)(L.id),
        eU = (0, x.L_)({ planId: L.id, isGift: !0, priceOptions: q, subscriptionPlan: L });
    i.useEffect(
        () => (
            null != eU && eD && ej(y.intl.formatToPlainString(W.default["Mi5BH/"], { percentOff: eU })),
            () => {
                eL();
            }
        ),
        [eU, ej, eL, eD],
    );
    let ew = i.useMemo(() => {
            if (null != eo && eo.type === g.N$.PREMIUM_WITH_TRIAL && null != eM)
                return (0, l.jsx)(j.Y, { text: y.intl.format(W.default.IAsfR5, { daysCount: eb }) });
            if (null != em && ev) {
                let e = em.discount,
                    t = em.getFullIntervalCount();
                if (e.userUsageLimitInterval === f.Ff.MONTH)
                    return (0, l.jsx)(j.Y, {
                        text: y.intl.format(W.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.userUsageLimitInterval === f.Ff.YEAR)
                    return (0, l.jsx)(j.Y, { text: y.intl.format(W.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eD && null != eU
                ? (0, l.jsx)(j.Y, { text: y.intl.format(W.default["7sYIBL"], { savingsPercent: eU }) })
                : null;
        }, [eM, ev, em, eb, eo, eU, eD]),
        ek = (0, H.G)(L.id),
        eG = i.useMemo(() => (ek ? (0, l.jsx)(F.a, {}) : null), [ek]),
        eF = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, A.O)();
            return i.useMemo(
                () =>
                    n || t !== f.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(h.w, {
                              type: "info",
                              children: (0, l.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  children: y.intl.format(S.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: L.skuId, isGift: X }),
        eB = (0, b.i)({ planSkuId: L.skuId, invoice: eg }),
        eY = i.useMemo(() => (null != ew ? ew : null != eB ? eB : null != eG ? eG : null), [ew, eB, eG]),
        eH = i.useMemo(() => {
            let e = [];
            return (
                null != V && "" !== V && e.push({ type: "warning", message: V, key: "review-warning" }),
                null != e_ && e.push({ type: "info", message: e_, key: "payment-source-optional-warning" }),
                eO
                    ? e.push({
                          directContent: (0, l.jsx)(k.l$, {
                              fractionalPremiumInfo: ef,
                              isEligibleForTrial: en,
                              trialPeriodCopy: eR,
                              subscriptionPeriodEnd: eu,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ea && e.push({ type: "info", message: (0, O.Nn)(), key: "premium-group-purchase-notice" }),
                null != eF && e.push({ directContent: eF, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [V, e_, eO, ef, en, eR, eu, ea, eF]),
        eW = null != eo ? eo.invoicePreview : null,
        { priceOptions: eV, planPricesLoading: eK } = (0, x.Pr)(q, eW, z),
        eZ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eH,
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
            paymentMethodContent: ex,
            promotionalNoticeContent: eY,
        };
    if (null == eo && null != z) return (0, l.jsx)(s.T_, { ...eZ, legalContent: null });
    if (null == eo || eo.type === g.N$.LOADING) return (0, l.jsx)(s.Ed, {});
    let eq = null != eN ? eN.subscription_trial : void 0,
        ez =
            eo.type === g.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(k.W9, {
                      invoiceSummaryTypeWithPreview: eo,
                      subscriptionPlan: L,
                      isPrepaidPaymentSource: eI,
                      subscriptionTrial: eq,
                      isCustomGift: eh,
                  }),
        e$ = null;
    if (
        !eI &&
        (g.IJ.has(eo.type) || eo.type === g.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eo &&
        null != eo.renewalInvoicePreview
    ) {
        let e = (0, Y.Gj)(eo.invoicePreview, eo.renewalInvoicePreview, eq, {
            discountOffer: em,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: ef,
        });
        e$ = (0, l.jsx)(m._, { ...e });
    }
    let eX = eE
            ? void 0
            : (0, l.jsx)(B._, {
                  type: eo.type,
                  invoicePreview: eo.invoicePreview,
                  storeListing: ep,
                  subscriptionPlan: L,
                  isPrepaidPaymentSource: eI,
                  giftRecipient: eC,
                  isPremiumGroupPurchase: ea,
                  guildId: eA,
              }),
        eQ = (0, l.jsx)(k.PI, {
            activeSubscription: ee,
            isTrial: es,
            plan: L,
            isGift: X,
            paymentSourceType: eT,
            invoiceSummaryTypeWithPreview: eo,
            fractionalPremiumInfo: ef,
        }),
        eJ =
            eo.type === g.N$.PREMIUM_WITH_TRIAL
                ? (0, Y.ib)(eo.invoicePreview.currency)
                : (0, a.kw)({ subscriptionInvoiceRecord: eo.invoicePreview });
    return (0, l.jsx)(s.T_, {
        ...eZ,
        purchaseItemContent: eX,
        subscriptionDetailsContent: e$,
        invoiceSummaryContent: ez,
        legalContent: eQ,
        invoiceTotalDueValue: eJ,
        invoiceTotalDueLabel: X ? y.intl.string(W.default.Zxav97) : y.intl.string(W.default.R0cZsM),
    });
}
