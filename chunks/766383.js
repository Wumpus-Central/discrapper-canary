n.d(t, { _: () => Q }), n(321073);
var l = n(477900),
    i = n(582128),
    r = n(517950),
    a = n(531260),
    s = n(854354),
    o = n(482419),
    u = n(38785),
    c = n(202475),
    d = n(400612),
    p = n(463376),
    m = n(266060),
    h = n(951305),
    C = n(87725),
    f = n(473617),
    E = n(699595),
    S = n(669510),
    y = n(683071),
    A = n(834730),
    P = n(212739);
n(25827);
var I = n(202541),
    g = n(378803),
    v = n(375708),
    _ = n(580194),
    T = n(732280),
    x = n(92886),
    N = n(815545),
    b = n(344159),
    R = n(45938),
    j = n(158045),
    M = n(577381),
    O = n(750532),
    L = n(216641),
    k = n(222707),
    w = n(559778),
    U = n(377058);
function D(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasEntitlements: s,
            label: o = v.intl.string(v.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: d } = (0, c.Y)(),
        p = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? v.intl.string(v.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
            }),
            [s, n, d],
        );
    return (0, l.jsx)(U.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: p,
        location: u,
        hideCurrencySelect: r,
    });
}
var G = n(340034),
    F = n(753261),
    B = n(531536),
    H = n(924799);
function Y(e) {
    let { fallback: t } = e,
        { enabled: n } = F.E.useConfig({ location: "PremiumUnifiedCheckoutOrbsRewardNotice" });
    return n
        ? (0, l.jsx)("div", {
              className: H.kL,
              children: (0, l.jsx)(B.W, {
                  className: H.Vs,
                  image: (0, l.jsx)("img", {
                      className: H.L8,
                      alt: "",
                      src: "https://cdn.discordapp.com/assets/content/b6d1d954e5c9ccfd2356d7af86ca2a4a59717635cc6f558f731edb2e6046b25c.png",
                  }),
                  title: (0, l.jsx)(A.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: v.intl.formatToPlainString(v.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(A.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: v.intl.string(v.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var W = n(845012),
    V = n(755880),
    K = n(134638),
    q = n(888751),
    Z = n(906234),
    z = n(477729);
function Q(e) {
    let {
            verifiedPlanId: t,
            verifiedTrialId: n,
            selectedPlan: U,
            planGroup: F,
            metadata: B,
            reviewWarningMessage: H,
            handlePaymentSourceAdd: Q,
        } = e,
        {
            checkoutInvoicePreview: $,
            checkoutPriceOptions: J,
            checkoutInvoiceError: X,
            referralTrialOfferId: ee,
            isGift: et,
            selectedSkuId: en,
            defaultPlanId: el,
            activeSubscription: ei,
            shouldDisallowPlanSelection: er,
            expressCheckoutSubmitting: ea,
            shouldUseStripeExpressCheckout: es,
        } = (0, C.t4)((e) => ({
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
            isEligibleForTrial: eo,
            discountOffer: eu,
            premiumGroupDiscountOffer: ec,
            isPremium: ed,
            isPremiumGroupPurchase: ep,
        } = (0, p.i)(),
        em = i.useMemo(() => eo && null != n, [eo, n]),
        {
            discriminatedInvoicePreview: eh,
            subscriptionPeriodEnd: eC,
            proratedInvoicePreview: ef,
            purchaseDisabled: eE,
        } = (function (e) {
            let { selectedPlanId: t, verifiedTrialId: n, metadata: l, isVerifiedTrial: r = !1 } = e,
                { priceOptions: a, activeSubscription: s } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    activeSubscription: e.activeSubscription,
                })),
                {
                    purchaseDisabled: o,
                    discriminatedInvoicePreview: u,
                    proratedInvoicePreview: c,
                    subscriptionPeriodEnd: p,
                } = (function (e) {
                    let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r, isTrial: a = !1 } = e,
                        {
                            selectedSkuId: s,
                            setFetchCheckoutInvoicePreviewRequest: o,
                            setFetchRenewalInvoicePreviewRequest: u,
                            checkoutInvoicePreview: c,
                            renewalInvoicePreview: p,
                            quantity: m,
                            primaryInvoicesError: S,
                        } = (0, C.t4)((e) => ({
                            selectedSkuId: e.selectedSkuId,
                            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                            checkoutInvoicePreview: e.checkoutInvoicePreview,
                            renewalInvoicePreview: e.renewalInvoicePreview,
                            quantity: e.quantity,
                            primaryInvoicesError: e.get("primaryInvoicesError"),
                        })),
                        { isGift: y } = (0, h.Pv)(),
                        {
                            subscriptionPlan: A,
                            purchaseDisabled: P,
                            newItems: I,
                            preventInvoiceFetch: g,
                        } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: _,
                            renewalInvoiceRequestParams: T,
                        } = (0, f.jq)({
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
                                          params: { ...v, skuId: s, subscriptionPlanId: t, quantity: m },
                                      }
                                    : { type: "subscription_checkout_invoice", params: _ },
                            [v, _, y, t, s, m],
                        ),
                        N = i.useMemo(() => (y ? null : { type: "subscription_renewal_invoice", params: T }), [T, y]);
                    i.useEffect(() => {
                        o(x);
                    }, [x, o]),
                        i.useEffect(() => {
                            u(N);
                        }, [N, u]);
                    let { proratedInvoicePreview: b } = i.useMemo(() => ({ proratedInvoicePreview: c }), [c]),
                        { discountInvoiceError: R } = (0, E.W)({ priceOptions: n, trialId: l, metadata: r }),
                        j = i.useMemo(() => S ?? R, [S, R]),
                        M = i.useMemo(
                            () =>
                                y ? d.u$.PREMIUM_GIFT : a ? d.u$.PREMIUM_WITH_TRIAL : d.u$.SUBSCRIPTION_NEW_PURCHASE,
                            [y, a],
                        ),
                        { discriminatedInvoicePreview: O } = (0, d.KY)({
                            invoiceError: j,
                            subscriptionPlan: A,
                            invoiceTypeDiscriminator: M,
                            shouldSetPurchasePreviewErrorFromInvoice: !0,
                        }),
                        L = i.useMemo(() => (null != b ? b.subscriptionPeriodEnd : void 0), [b]);
                    return {
                        checkoutInvoicePreview: c,
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
                proratedInvoicePreview: c,
            };
        })({ selectedPlanId: t, verifiedTrialId: n, metadata: B, isVerifiedTrial: em }),
        eS = (0, m.K)(),
        ey = ec ?? eu,
        { giftRecipient: eA, selectedGiftingPromotionReward: eP } = (0, h.Pv)(),
        eI = et && (0, R.Ik)(eA),
        eg = (0, C.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: em })) && !ep && !er,
        ev = B?.guild_id ?? void 0,
        e_ = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eT = i.useMemo(() => (0, j.Tm)({ skuId: en, isPremium: ed, defaultPlanId: el }), [en, el, ed]),
        { paymentSources: ex } = (0, c.j)(),
        {
            hasEntitlements: eN,
            paymentSourceType: eb,
            isPrepaid: eR,
            paymentSourceOptionalWarningCopy: ej,
        } = (function (e) {
            let { subscriptionPlan: t, paymentSources: n } = e,
                { priceOptions: l, isGift: r } = (0, C.t4)((e) => ({
                    priceOptions: e.checkoutPriceOptions,
                    isGift: e.isGift,
                })),
                a = l.paymentSourceId,
                s = (0, L.g)(n, a),
                o = (0, j.J$)(l.paymentSourceId),
                { hasEntitlements: u, entitlements: c } = (0, b.X)(t.id, r),
                d = i.useMemo(
                    () => (u && null == a ? v.intl.format(v.t["2wPRSF"], { months: c.length }) : null),
                    [u, a, c],
                );
            return {
                paymentSourceType: s,
                isPrepaid: o,
                paymentSourceId: a,
                paymentSourceOptionalWarningCopy: d,
                hasEntitlements: u,
            };
        })({ subscriptionPlan: U, paymentSources: ex }),
        eM = ef ?? $,
        eO = i.useMemo(
            () => null != ey && null != ey.discount && null != eM && (0, N.Ro)(eM, ey.discount.id),
            [ey, eM],
        ),
        eL = (0, l.jsx)(D, {
            label: v.intl.string(v.t["u+Cw58"]),
            handlePaymentSourceAdd: Q,
            isTrial: em,
            hideCurrencySelect: eO,
            disabled: eE,
            hasEntitlements: eN,
        }),
        ek = (0, T.V)(ee),
        { copy: ew, daysCount: eU, userTrialOffer: eD } = (0, x.O8)(),
        eG = (0, k.pt)({
            fractionalPremiumInfo: e_,
            selectedPlanId: t,
            planGroup: F,
            premiumSubscription: ei,
            isGift: et,
        }),
        eF = et && U.interval === I.WT.YEAR && (0, j.xq)(U.id),
        eB = (0, j.L_)({ planId: U.id, isGift: !0, priceOptions: J, subscriptionPlan: U }),
        eH = i.useMemo(() => {
            if (null != eB && eF)
                return { headerBadgeText: v.intl.formatToPlainString(z.default["Mi5BH/"], { percentOff: eB }) };
        }, [eB, eF]),
        eY = (0, O.Fe)(eH),
        eW = i.useMemo(() => {
            if (null != eh && eh.type === d.u$.PREMIUM_WITH_TRIAL && null != eD)
                return (0, l.jsx)(w.Y, { text: v.intl.format(z.default.IAsfR5, { daysCount: eU }) });
            if (null != ey && eO) {
                let e = ey.discount,
                    t = e.intervalCount;
                if (e.intervalType === I.Ff.MONTH)
                    return (0, l.jsx)(w.Y, {
                        text: v.intl.format(z.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === I.Ff.YEAR)
                    return (0, l.jsx)(w.Y, { text: v.intl.format(z.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return eF && null != eB
                ? (0, l.jsx)(w.Y, { text: v.intl.format(z.default["7sYIBL"], { savingsPercent: eB }) })
                : null;
        }, [eD, eO, ey, eU, eh, eB, eF]),
        eV = (0, Z.G)(U.id),
        eK = i.useMemo(() => (eV ? (0, l.jsx)(V.a, {}) : null), [eV]),
        eq = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, P.O)();
            return i.useMemo(
                () =>
                    n || t !== I.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(y.w, {
                              type: "info",
                              children: (0, l.jsx)(A.E, {
                                  variant: "text-sm/medium",
                                  children: v.intl.format(g.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: U.skuId, isGift: et }),
        eZ = (0, M.i)({ planSkuId: U.skuId, invoice: eM }),
        ez = (0, _.Mq)(U) && eP === r.a.SUMMER_2026_GOGO_FAKE_SKU_ID,
        eQ = i.useMemo(() => {
            let e = eW ?? eZ ?? eK ?? null;
            return ez ? (0, l.jsx)(Y, { fallback: e }) : e;
        }, [ez, eW, eZ, eK]),
        e$ = i.useMemo(() => {
            let e = [];
            return (
                null != H && "" !== H && e.push({ type: "warning", message: H, key: "review-warning" }),
                null != ej && e.push({ type: "info", message: ej, key: "payment-source-optional-warning" }),
                eG
                    ? e.push({
                          directContent: (0, l.jsx)(G.l, {
                              fractionalPremiumInfo: e_,
                              isEligibleForTrial: eo,
                              trialPeriodCopy: ew,
                              subscriptionPeriodEnd: eC,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ep && e.push({ type: "info", message: (0, k.Nn)(), key: "premium-group-purchase-notice" }),
                null != eq && e.push({ directContent: eq, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [H, ej, eG, e_, eo, ew, eC, ep, eq]),
        eJ = null != eh ? eh.invoicePreview : null,
        { priceOptions: eX, planPricesLoading: e0 } = (0, j.Pr)(J, eJ, X),
        e2 = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: e$,
            planSelectContent: eg
                ? (0, l.jsx)(W.X, {
                      disabled: eE || ea,
                      selectedPlanId: t,
                      priceOptions: eX,
                      planOptions: eT,
                      subscriptionPeriodEnd: eC,
                      planPricesLoading: e0,
                  })
                : void 0,
            paymentMethodContent: eL,
            promotionalNoticeContent: eQ,
            headerBadgeConfig: eY,
        };
    if (null == eh && null != X) return (0, l.jsx)(u.T_, { ...e2, legalContent: null });
    if (null == eh || eh.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eY });
    let e1 = null != ek ? ek.subscriptionTrial : void 0,
        e4 =
            eh.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: eh,
                      subscriptionPlan: U,
                      isPrepaidPaymentSource: eR,
                      subscriptionTrial: e1,
                      isCustomGift: eI,
                  }),
        e3 = null;
    if (
        !eR &&
        (d.ME.has(eh.type) || eh.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in eh &&
        null != eh.renewalInvoicePreview
    ) {
        let e = (0, q.Gj)(eh.invoicePreview, eh.renewalInvoicePreview, e1, {
            discountOffer: ey,
            isSubscriptionUpdate: null != ei,
            fractionalPremiumInfo: e_,
        });
        e3 = (0, l.jsx)(S._, { ...e, defaultExpanded: es });
    }
    let e7 = eg
            ? void 0
            : (0, l.jsx)(K._, {
                  type: eh.type,
                  invoicePreview: eh.invoicePreview,
                  storeListing: eS,
                  subscriptionPlan: U,
                  isPrepaidPaymentSource: eR,
                  giftRecipient: eA,
                  isPremiumGroupPurchase: ep,
                  guildId: ev,
              }),
        e6 = (0, l.jsx)(G.P, {
            activeSubscription: ei,
            isTrial: em,
            plan: U,
            isGift: et,
            paymentSourceType: eb,
            discriminatedInvoicePreview: eh,
            fractionalPremiumInfo: e_,
        }),
        e8 =
            eh.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, q.ib)(eh.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: eh.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...e2,
        purchaseItemContent: e7,
        subscriptionDetailsContent: e3,
        invoiceSummaryContent: e4,
        legalContent: e6,
        invoiceTotalDueValue: e8,
        invoiceTotalDueLabel: et ? v.intl.string(z.default.Zxav97) : v.intl.string(z.default.R0cZsM),
    });
}
