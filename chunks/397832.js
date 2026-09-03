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
    h = n(206441),
    f = n(473617),
    E = n(699595),
    S = n(558620),
    y = n(669510),
    I = n(683071),
    A = n(834730),
    g = n(212739);
n(216238);
var P = n(202541),
    v = n(181666),
    _ = n(375708),
    x = n(580194),
    T = n(732280),
    N = n(73663),
    b = n(815545),
    j = n(344159),
    R = n(45938),
    O = n(158045),
    M = n(577381),
    L = n(750532),
    k = n(216641),
    w = n(222707),
    U = n(403581),
    D = n(262427);
function G(e) {
    let { Icon: t = U.t, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(D.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
var F = n(377058);
function B(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = _.intl.string(_.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, c.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? _.intl.string(_.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(F.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
var H = n(340034),
    W = n(753261),
    Y = n(531536),
    V = n(924799);
function K(e) {
    let { fallback: t } = e,
        { enabled: n } = W.E.useConfig({ location: "PremiumUnifiedCheckoutOrbsRewardNotice" });
    return n
        ? (0, l.jsx)("div", {
              className: V.kL,
              children: (0, l.jsx)(Y.W, {
                  className: V.Vs,
                  image: (0, l.jsx)("img", {
                      className: V.L8,
                      alt: "",
                      src: "https://cdn.discordapp.com/assets/content/b6d1d954e5c9ccfd2356d7af86ca2a4a59717635cc6f558f731edb2e6046b25c.png",
                  }),
                  title: (0, l.jsx)(A.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: _.intl.formatToPlainString(_.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(A.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: _.intl.string(_.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var Z = n(845012),
    q = n(134638),
    z = n(888751),
    Q = n(583741);
function $(e) {
    let {
            verifiedTrialId: t,
            planGroup: n,
            metadata: U,
            reviewWarningMessage: D,
            handlePaymentSourceAdd: F,
            handleStepChange: W,
        } = e,
        {
            checkoutInvoicePreview: Y,
            checkoutPriceOptions: V,
            checkoutInvoiceError: $,
            referralTrialOfferId: J,
            isGift: X,
            activeSubscription: ee,
            shouldDisallowPlanSelection: et,
            expressCheckoutSubmitting: en,
            shouldUseStripeExpressCheckout: el,
            premiumPlanOptions: ei,
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
        { selectedPlanFromFluxStore: er, selectedPlanId: ea } = (0, S.D)(),
        {
            isEligibleForTrial: es,
            discountOffer: eo,
            premiumGroupDiscountOffer: eu,
            isPremiumGroupPurchase: ec,
        } = (0, m.i)(),
        ed = i.useMemo(() => es && null != t, [es, t]),
        {
            discriminatedInvoicePreview: em,
            subscriptionPeriodEnd: ep,
            proratedInvoicePreview: eC,
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
                            checkoutInvoiceRequestParams: _,
                            renewalInvoiceRequestParams: x,
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
                                    : { type: "subscription_checkout_invoice", params: _ },
                            [v, _, y, t, s, p],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: x }), [x, y]);
                    i.useEffect(() => {
                        o(T);
                    }, [T, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]);
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: j } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        R = i.useMemo(() => S ?? j, [S, j]),
                        O = i.useMemo(
                            () =>
                                y ? d.u$.PREMIUM_GIFT : a ? d.u$.PREMIUM_WITH_TRIAL : d.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: M } = (0, d.KY)({
                            invoiceError: R,
                            subscriptionPlan: I,
                            invoiceTypeDiscriminator: O,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: c,
                        discriminatedInvoicePreview: M,
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
        })({ selectedPlanId: ea, verifiedTrialId: t, metadata: U, isVerifiedTrial: ed }),
        ef = (0, p.K)(),
        eE = eu ?? eo,
        { giftRecipient: eS, selectedGiftingPromotionRewards: ey } = (0, C.Pv)(),
        eI = X && (0, R.Ik)(eS),
        eA = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: ed })) && !ec && !et,
        eg = U?.guild_id ?? void 0,
        eP = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: ev } = (0, c.j)(),
        {
            hasEntitlements: e_,
            paymentSourceType: ex,
            isPrepaid: eT,
            paymentSourceOptionalWarningCopy: eN,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, h.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, k.g)(n, a),
                o = (0, O.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, j.X)(t.id, r),
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
        })({ subscriptionPlan: er, paymentSources: ev }),
        eb = eC ?? Y,
        ej = i.useMemo(
            () => null != eE && null != eE.discount && null != eb && (0, b.Ro)(eb, eE.discount.id),
            [eE, eb],
        ),
        eR = (0, l.jsx)(B, {
            label: _.intl.string(_.t["u+Cw58"]),
            handlePaymentSourceAdd: F,
            isTrial: ed,
            hideCurrencySelect: ej,
            disabled: eh,
            hasEntitlements: e_,
        }),
        eO = (0, T.V)(J),
        { copy: eM, daysCount: eL, userTrialOffer: ek } = (0, N.O8)(),
        ew = (0, w.pt)({
            fractionalPremiumInfo: eP,
            selectedPlanId: ea,
            planGroup: n,
            premiumSubscription: ee,
            isGift: X,
        }),
        eU = X && er.interval === P.WT.YEAR && (0, O.xq)(er.id),
        eD = (0, O.L_)({ planId: er.id, isGift: !0, priceOptions: V, subscriptionPlan: er }),
        eG = i.useMemo(() => {
            if (null != eD && eU)
                return { headerBadgeText: _.intl.formatToPlainString(Q.default["Mi5BH/"], { percentOff: eD }) };
        }, [eD, eU]),
        eF = (0, L.Fe)(eG),
        eB = i.useMemo(() => {
            if (null != em && em.type === d.u$.PREMIUM_WITH_TRIAL && null != ek)
                return (0, l.jsx)(G, { text: _.intl.format(Q.default.IAsfR5, { daysCount: eL }) });
            if (null != eE && ej) {
                let e = eE.discount,
                    t = e.intervalCount;
                if (e.intervalType === P.Ff.MONTH)
                    return (0, l.jsx)(G, {
                        text: _.intl.format(Q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === P.Ff.YEAR)
                    return (0, l.jsx)(G, { text: _.intl.format(Q.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eU && null != eD
                ? (0, l.jsx)(G, { text: _.intl.format(Q.default["7sYIBL"], { savingsPercent: eD }) })
                : null;
        }, [ek, ej, eE, eL, em, eD, eU]),
        eH = (function (e) {
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
                                  children: _.intl.format(v.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: er.skuId, isGift: X }),
        eW = (0, M.i)({ planSkuId: er.skuId, invoice: eb }),
        eY = (0, x.Mq)(er) && ey.includes(r.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
        eV = i.useMemo(() => {
            let e = eB ?? eW ?? null;
            return eY ? (0, l.jsx)(K, { fallback: e }) : e;
        }, [eY, eB, eW]),
        eK = i.useMemo(() => {
            let e = [];
            return (
                null != D && "" !== D && e.push({ type: "warning", message: D, key: "review-warning" }),
                null != eN && e.push({ type: "info", message: eN, key: "payment-source-optional-warning" }),
                ew
                    ? e.push({
                          directContent: (0, l.jsx)(H.l, {
                              fractionalPremiumInfo: eP,
                              isEligibleForTrial: es,
                              trialPeriodCopy: eM,
                              subscriptionPeriodEnd: ep,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ec && e.push({ type: "info", message: (0, w.Nn)(), key: "premium-group-purchase-notice" }),
                null != eH && e.push({ directContent: eH, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [D, eN, ew, eP, es, eM, ep, ec, eH]),
        eZ = null != em ? em.invoicePreview : null,
        { priceOptions: eq, planPricesLoading: ez } = (0, O.Pr)(V, eZ, $),
        eQ = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eK,
            planSelectContent: eA
                ? (0, l.jsx)(Z.X, {
                      disabled: eh || en,
                      selectedPlanId: ea,
                      priceOptions: eq,
                      planOptions: ei,
                      subscriptionPeriodEnd: ep,
                      planPricesLoading: ez,
                  })
                : void 0,
            paymentMethodContent: eR,
            promotionalNoticeContent: eV,
            headerBadgeConfig: eF,
        };
    if (null == em && null != $) return (0, l.jsx)(u.T_, { ...eQ, legalContent: null });
    if (null == em || em.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eF });
    let e$ = null != eO ? eO.subscriptionTrial : void 0,
        eJ =
            em.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: em,
                      subscriptionPlan: er,
                      isPrepaidPaymentSource: eT,
                      subscriptionTrial: e$,
                      isCustomGift: eI,
                  }),
        eX = null;
    if (
        !eT &&
        (d.ME.has(em.type) || em.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in em &&
        null != em.renewalInvoicePreview
    ) {
        let e = (0, z.Gj)(em.invoicePreview, em.renewalInvoicePreview, e$, {
            discountOffer: eE,
            isSubscriptionUpdate: null != ee,
            fractionalPremiumInfo: eP,
        });
        eX = (0, l.jsx)(y._, { ...e, defaultExpanded: el });
    }
    let e0 = eA
            ? void 0
            : (0, l.jsx)(q._, {
                  type: em.type,
                  invoicePreview: em.invoicePreview,
                  storeListing: ef,
                  subscriptionPlan: er,
                  isPrepaidPaymentSource: eT,
                  giftRecipient: eS,
                  isPremiumGroupPurchase: ec,
                  guildId: eg,
                  handleStepChange: W,
              }),
        e1 = (0, l.jsx)(H.P, {
            activeSubscription: ee,
            isTrial: ed,
            plan: er,
            isGift: X,
            paymentSourceType: ex,
            discriminatedInvoicePreview: em,
            fractionalPremiumInfo: eP,
        }),
        e2 =
            em.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, z.ib)(em.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: em.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...eQ,
        purchaseItemContent: e0,
        subscriptionDetailsContent: eX,
        invoiceSummaryContent: eJ,
        legalContent: e1,
        invoiceTotalDueValue: e2,
        invoiceTotalDueLabel: X ? _.intl.string(Q.default.Zxav97) : _.intl.string(Q.default.R0cZsM),
    });
}
