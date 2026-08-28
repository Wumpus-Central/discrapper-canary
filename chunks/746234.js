n.d(t, { _: () => $ }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(517950),
    a = n(531260),
    s = n(854354),
    o = n(482419),
    u = n(38785),
    c = n(202475),
    d = n(400612),
    m = n(463376),
    p = n(266060),
    C = n(951305),
    h = n(87725),
    f = n(473617),
    E = n(699595),
    S = n(558620),
    y = n(669510),
    I = n(683071),
    A = n(834730),
    g = n(212739);
n(216238);
var P = n(202541),
    v = n(763430),
    x = n(375708),
    _ = n(580194),
    T = n(732280),
    N = n(73663),
    b = n(815545),
    j = n(344159),
    R = n(45938),
    M = n(158045),
    O = n(577381),
    L = n(750532),
    k = n(216641),
    w = n(222707),
    U = n(559778),
    D = n(377058);
function G(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = x.intl.string(x.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, c.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? x.intl.string(x.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(D.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
var F = n(340034),
    B = n(753261),
    H = n(531536),
    W = n(924799);
function Y(e) {
    let { fallback: t } = e,
        { enabled: n } = B.E.useConfig({ location: "PremiumUnifiedCheckoutOrbsRewardNotice" });
    return n
        ? (0, l.jsx)("div", {
              className: W.kL,
              children: (0, l.jsx)(H.W, {
                  className: W.Vs,
                  image: (0, l.jsx)("img", {
                      className: W.L8,
                      alt: "",
                      src: "https://cdn.discordapp.com/assets/content/b6d1d954e5c9ccfd2356d7af86ca2a4a59717635cc6f558f731edb2e6046b25c.png",
                  }),
                  title: (0, l.jsx)(A.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: x.intl.formatToPlainString(x.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(A.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: x.intl.string(x.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var V = n(845012),
    K = n(755880),
    Z = n(134638),
    q = n(888751),
    z = n(906234),
    Q = n(477729);
function $(e) {
    let { verifiedTrialId: t, planGroup: n, metadata: D, reviewWarningMessage: B, handlePaymentSourceAdd: H } = e,
        {
            checkoutInvoicePreview: W,
            checkoutPriceOptions: $,
            checkoutInvoiceError: J,
            referralTrialOfferId: X,
            isGift: ee,
            activeSubscription: et,
            shouldDisallowPlanSelection: en,
            expressCheckoutSubmitting: el,
            shouldUseStripeExpressCheckout: ei,
            premiumPlanOptions: er,
        } = (0, h.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.expressCheckoutSubmitting,
            shouldUseStripeExpressCheckout: e.getShouldUseStripeExpressCheckout(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
        })),
        { selectedPlanFromFluxStore: ea, selectedPlanId: es } = (0, S.D)(),
        {
            isEligibleForTrial: eo,
            discountOffer: eu,
            premiumGroupDiscountOffer: ec,
            isPremiumGroupPurchase: ed,
        } = (0, m.i)(),
        em = i.useMemo(() => eo && null != t, [eo, t]),
        {
            discriminatedInvoicePreview: ep,
            subscriptionPeriodEnd: eC,
            proratedInvoicePreview: eh,
            purchaseDisabled: ef,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: c,
                    subscriptionPeriodEnd: m,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: c,
                            renewalInvoicePreview: m,
                            quantity: p,
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
                        { isGift: y } = (0, C.Pv)(),
                        {
                            subscriptionPlan: I,
                            purchaseDisabled: A,
                            newItems: g,
                            preventInvoiceFetch: P,
                        } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: x,
                            renewalInvoiceRequestParams: _,
                        } = (0, f.jq)({
                            items: g,
                            preventFetch: P,
                            priceOptions: n,
                            trialId: l,
                            subscriptionMetadata: r,
                        }),
                        T = i.useMemo(
                            () =>
                                y
                                    ? {
                                          type: "premium_one_time_gift_purchase_invoice",
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: p },
                                      }
                                    : { type: "subscription_checkout_invoice", params: x },
                            [v, x, y, t, s, p],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: _ }), [_, y]);
                    i.useEffect(() => {
                        o(T);
                    }, [T, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]);
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: j } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        R = i.useMemo(() => S ?? j, [S, j]),
                        M = i.useMemo(
                            () =>
                                y ? d.u$.PREMIUM_GIFT : a ? d.u$.PREMIUM_WITH_TRIAL : d.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, d.KY)({
                            invoiceError: R,
                            subscriptionPlan: I,
                            invoiceTypeDiscriminator: M,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: c,
                        discriminatedInvoicePreview: O,
                        proratedInvoicePreview: b,
                        renewalInvoicePreview: m,
                        purchaseDisabled: A,
                        invoiceError: R,
                        subscriptionPeriodEnd: L,
                    };
                })({ selectedPlanId: t, priceOptions: a, trialId: n, metadata: l, isTrial: r });
            return {
                purchaseDisabled: o,
                activeSubscription: s,
                subscriptionPeriodEnd: m,
                discriminatedInvoicePreview: u,
                proratedInvoicePreview: c,
            };
        })({ selectedPlanId: es, verifiedTrialId: t, metadata: D, isVerifiedTrial: em }),
        eE = (0, p.K)(),
        eS = ec ?? eu,
        { giftRecipient: ey, selectedGiftingPromotionRewards: eI } = (0, C.Pv)(),
        eA = ee && (0, R.Ik)(ey),
        eg = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: em })) && !ed && !en,
        eP = D?.guild_id ?? void 0,
        ev = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: ex } = (0, c.j)(),
        {
            hasEntitlements: e_,
            paymentSourceType: eT,
            isPrepaid: eN,
            paymentSourceOptionalWarningCopy: eb,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, k.g)(n, a),
                o = (0, M.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, j.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? x.intl.format(x.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: ea, paymentSources: ex }),
        ej = eh ?? W,
        eR = i.useMemo(
            () => null != eS && null != eS.discount && null != ej && (0, b.Ro)(ej, eS.discount.id),
            [eS, ej],
        ),
        eM = (0, l.jsx)(G, {
            label: x.intl.string(x.t["u+Cw58"]),
            handlePaymentSourceAdd: H,
            isTrial: em,
            hideCurrencySelect: eR,
            disabled: ef,
            hasEntitlements: e_,
        }),
        eO = (0, T.V)(X),
        { copy: eL, daysCount: ek, userTrialOffer: ew } = (0, N.O8)(),
        eU = (0, w.pt)({
            fractionalPremiumInfo: ev,
            selectedPlanId: es,
            planGroup: n,
            premiumSubscription: et,
            isGift: ee,
        }),
        eD = ee && ea.interval === P.WT.YEAR && (0, M.xq)(ea.id),
        eG = (0, M.L_)({ planId: ea.id, isGift: !0, priceOptions: $, subscriptionPlan: ea }),
        eF = i.useMemo(() => {
            if (null != eG && eD)
                return { headerBadgeText: x.intl.formatToPlainString(Q.default["Mi5BH/"], { percentOff: eG }) };
        }, [eG, eD]),
        eB = (0, L.Fe)(eF),
        eH = i.useMemo(() => {
            if (null != ep && ep.type === d.u$.PREMIUM_WITH_TRIAL && null != ew)
                return (0, l.jsx)(U.Y, { text: x.intl.format(Q.default.IAsfR5, { daysCount: ek }) });
            if (null != eS && eR) {
                let e = eS.discount,
                    t = e.intervalCount;
                if (e.intervalType === P.Ff.MONTH)
                    return (0, l.jsx)(U.Y, {
                        text: x.intl.format(Q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === P.Ff.YEAR)
                    return (0, l.jsx)(U.Y, { text: x.intl.format(Q.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eD && null != eG
                ? (0, l.jsx)(U.Y, { text: x.intl.format(Q.default["7sYIBL"], { savingsPercent: eG }) })
                : null;
        }, [ew, eR, eS, ek, ep, eG, eD]),
        eW = (0, z.G)(ea.id),
        eY = i.useMemo(() => (eW ? (0, l.jsx)(K.a, {}) : null), [eW]),
        eV = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, g.O)();
            return i.useMemo(
                () =>
                    n || t !== P.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(I.w, {
                              type: "info",
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  children: x.intl.format(v.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: ea.skuId, isGift: ee }),
        eK = (0, O.i)({ planSkuId: ea.skuId, invoice: ej }),
        eZ = (0, _.Mq)(ea) && eI.includes(r.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
        eq = i.useMemo(() => {
            let e = eH ?? eK ?? eY ?? null;
            return eZ ? (0, l.jsx)(Y, { fallback: e }) : e;
        }, [eZ, eH, eK, eY]),
        ez = i.useMemo(() => {
            let e = [];
            return (
                null != B && "" !== B && e.push({ type: "warning", message: B, key: "review-warning" }),
                null != eb && e.push({ type: "info", message: eb, key: "payment-source-optional-warning" }),
                eU
                    ? e.push({
                          directContent: (0, l.jsx)(F.l, {
                              fractionalPremiumInfo: ev,
                              isEligibleForTrial: eo,
                              trialPeriodCopy: eL,
                              subscriptionPeriodEnd: eC,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ed && e.push({ type: "info", message: (0, w.Nn)(), key: "premium-group-purchase-notice" }),
                null != eV && e.push({ directContent: eV, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [B, eb, eU, ev, eo, eL, eC, ed, eV]),
        eQ = null != ep ? ep.invoicePreview : null,
        { priceOptions: e$, planPricesLoading: eJ } = (0, M.Pr)($, eQ, J),
        eX = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: ez,
            planSelectContent: eg
                ? (0, l.jsx)(V.X, {
                      disabled: ef || el,
                      selectedPlanId: es,
                      priceOptions: e$,
                      planOptions: er,
                      subscriptionPeriodEnd: eC,
                      planPricesLoading: eJ,
                  })
                : void 0,
            paymentMethodContent: eM,
            promotionalNoticeContent: eq,
            headerBadgeConfig: eB,
        };
    if (null == ep && null != J) return (0, l.jsx)(u.T_, { ...eX, legalContent: null });
    if (null == ep || ep.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eB });
    let e0 = null != eO ? eO.subscriptionTrial : void 0,
        e2 =
            ep.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: ep,
                      subscriptionPlan: ea,
                      isPrepaidPaymentSource: eN,
                      subscriptionTrial: e0,
                      isCustomGift: eA,
                  }),
        e1 = null;
    if (
        !eN &&
        (d.ME.has(ep.type) || ep.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ep &&
        null != ep.renewalInvoicePreview
    ) {
        let e = (0, q.Gj)(ep.invoicePreview, ep.renewalInvoicePreview, e0, {
            discountOffer: eS,
            isSubscriptionUpdate: null != et,
            fractionalPremiumInfo: ev,
        });
        e1 = (0, l.jsx)(y._, { ...e, defaultExpanded: ei });
    }
    let e4 = eg
            ? void 0
            : (0, l.jsx)(Z._, {
                  type: ep.type,
                  invoicePreview: ep.invoicePreview,
                  storeListing: eE,
                  subscriptionPlan: ea,
                  isPrepaidPaymentSource: eN,
                  giftRecipient: ey,
                  isPremiumGroupPurchase: ed,
                  guildId: eP,
              }),
        e3 = (0, l.jsx)(F.P, {
            activeSubscription: et,
            isTrial: em,
            plan: ea,
            isGift: ee,
            paymentSourceType: eT,
            discriminatedInvoicePreview: ep,
            fractionalPremiumInfo: ev,
        }),
        e7 =
            ep.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, q.ib)(ep.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ep.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...eX,
        purchaseItemContent: e4,
        subscriptionDetailsContent: e1,
        invoiceSummaryContent: e2,
        legalContent: e3,
        invoiceTotalDueValue: e7,
        invoiceTotalDueLabel: ee ? x.intl.string(Q.default.Zxav97) : x.intl.string(Q.default.R0cZsM),
    });
}
