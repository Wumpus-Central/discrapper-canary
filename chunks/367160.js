n.d(t, { _: () => g }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(164928),
    u = n(669510),
    c = n(234419),
    d = n(337092),
    p = n(815545),
    m = n(209030),
    h = n(299301),
    C = n(927578),
    A = n(49960),
    E = n(222707),
    y = n(421094),
    P = n(340034),
    S = n(755880),
    _ = n(134638),
    T = n(888751),
    f = n(906234),
    x = n(788868),
    N = n(375708),
    I = n(327105);
let g = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: g,
            handlePaymentSourceAdd: v,
            isTrial: M,
            planGroup: j,
            isDiscount: b,
            metadata: R,
        } = e,
        L = (0, m.L)(e),
        { isEligibleForTrial: O, discountOffer: D, selectedStoreListing: w } = (0, A.P5)(),
        U = R?.guild_id ?? void 0,
        {
            isGift: k,
            giftRecipient: Y,
            invoiceSummaryTypeWithPreview: G,
            subscriptionPeriodEnd: F,
            proratedInvoicePreview: B,
            plan: W,
            isPrepaid: V,
            premiumPlanOptions: H,
            shouldAllowPlanSelect: K,
            isCustomGift: Z,
            hasEntitlements: q,
            paymentSourceType: z,
            eligiblePaymentGateways: $,
            activeSubscription: J,
            fractionalPremiumInfo: X,
            disabled: Q,
            isPremiumGroupPurchase: ee,
            currencyDropdownProps: et,
            paymentSourceOptionalWarningCopy: en,
        } = L,
        el = (0, l.jsx)(y.K, {
            label: N.intl.string(N.t["u+Cw58"]),
            handlePaymentSourceAdd: v,
            isTrial: M,
            isDiscount: b,
            disabled: Q,
            hasEntitlements: q,
            eligiblePaymentGateways: $,
            currencyDropdownProps: et,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        ea = (0, c.V)(t),
        { copy: ei, daysCount: er, userTrialOffer: es } = (0, d.O8)(),
        eo = (0, E.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: j,
            premiumSubscription: J,
            isGift: k,
        }),
        eu = a.useMemo(() => null != D && null != D.discount && null != B && (0, p.Ro)(B, D.discount.id), [D, B]),
        ec = a.useMemo(() => {
            if (null != G && G.type === h.N$.PREMIUM_WITH_TRIAL && null != es)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: N.intl.format(I.default.IAsfR5, { daysCount: er }),
                });
            if (null != D && eu) {
                let e = D.discount;
                if (e.userUsageLimitInterval === x.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: N.intl.format(I.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return null;
        }, [es, eu, D, er, G]),
        ed = (0, f.G)(W.id),
        ep = a.useMemo(() => (ed ? (0, l.jsx)(S.a, {}) : null), [ed]),
        em = a.useMemo(() => (null != ec ? ec : null != ep ? ep : null), [ec, ep]),
        eh = a.useMemo(() => {
            let e = [];
            return (
                null != en && e.push({ type: "info", message: en, key: "payment-source-optional-warning" }),
                eo
                    ? e.push({
                          directContent: (0, l.jsx)(P.l$, {
                              fractionalPremiumInfo: X,
                              isEligibleForTrial: O,
                              trialPeriodCopy: ei,
                              subscriptionPeriodEnd: F,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ee && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [en, eo, X, O, ei, F, ee]),
        eC = (0, C.l6)(g, null != G ? G.invoicePreview?.checkoutContext?.available_plans : void 0),
        eA = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eh,
            planSelectContent: K
                ? (0, l.jsx)(P.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: eC,
                      planOptions: H,
                      subscriptionPeriodEnd: F,
                  })
                : void 0,
            paymentSelectContent: el,
            promotionalNoticeContent: em,
        };
    if (null == G) return (0, l.jsx)(o.T, { ...eA, legalContent: null });
    if (G.type === h.N$.LOADING) return (0, l.jsx)(o.E, {});
    let eE = null != ea ? ea.subscription_trial : void 0,
        ey =
            G.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(P.W9, {
                      invoiceSummaryTypeWithPreview: G,
                      subscriptionPlan: W,
                      isPrepaidPaymentSource: V,
                      subscriptionTrial: eE,
                      isCustomGift: Z,
                  }),
        eP = null;
    if (
        !V &&
        (h.IJ.has(G.type) || G.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in G &&
        null != G.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(G.invoicePreview, G.renewalInvoicePreview, eE, {
            discountOffer: D,
            isSubscriptionUpdate: null != J,
            fractionalPremiumInfo: X,
        });
        eP = (0, l.jsx)(u._, { ...e });
    }
    let eS = K
            ? void 0
            : (0, l.jsx)(_._, {
                  type: G.type,
                  invoicePreview: G.invoicePreview,
                  storeListing: w,
                  subscriptionPlan: W,
                  isPrepaidPaymentSource: V,
                  giftRecipient: Y,
                  isPremiumGroupPurchase: ee,
                  guildId: U,
              }),
        e_ = (0, l.jsx)(P.PI, {
            planGroup: j,
            activeSubscription: J,
            isTrial: M,
            plan: W,
            isGift: k,
            paymentSourceType: z,
            isPrepaidPaymentSource: V,
            invoiceSummaryTypeWithPreview: G,
            fractionalPremiumInfo: X,
        }),
        eT =
            G.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(G.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: G.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eA,
        purchaseItemContent: eS,
        subscriptionDetailsContent: eP,
        invoiceSummaryContent: ey,
        legalContent: e_,
        invoiceTotalDueValue: eT,
        invoiceTotalDueLabel: N.intl.string(I.default.R0cZsM),
    });
};
