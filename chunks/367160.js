n.d(t, { _: () => g }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(717925),
    u = n(669510),
    c = n(234419),
    d = n(337092),
    p = n(815545),
    m = n(209030),
    h = n(299301),
    C = n(428262),
    A = n(834252),
    E = n(222707),
    y = n(421094),
    P = n(340034),
    S = n(755880),
    _ = n(134638),
    T = n(888751),
    f = n(906234),
    N = n(788868),
    I = n(375708),
    x = n(327105);
let g = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: g,
            handlePaymentSourceAdd: v,
            isTrial: M,
            planGroup: b,
            isDiscount: R,
            metadata: j,
        } = e,
        L = (0, m.L)(e),
        { isEligibleForTrial: O, discountOffer: D, selectedStoreListing: w } = (0, A.P5)(),
        U = j?.guild_id ?? void 0,
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
            paymentSourceOptionalWarningCopy: et,
        } = L,
        en = (0, l.jsx)(y.K, {
            label: I.intl.string(I.t["u+Cw58"]),
            handlePaymentSourceAdd: v,
            isTrial: M,
            isDiscount: R,
            disabled: Q,
            hasEntitlements: q,
            eligiblePaymentGateways: $,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        el = (0, c.V)(t),
        { copy: ea, daysCount: ei, userTrialOffer: er } = (0, d.O8)(),
        es = (0, E.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: b,
            premiumSubscription: J,
            isGift: k,
        }),
        eo = a.useMemo(() => null != D && null != D.discount && null != B && (0, p.Ro)(B, D.discount.id), [D, B]),
        eu = a.useMemo(() => {
            if (null != G && G.type === h.N$.PREMIUM_WITH_TRIAL && null != er)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: I.intl.format(x.default.IAsfR5, { daysCount: ei }),
                });
            if (null != D && eo) {
                let e = D.discount;
                if (e.userUsageLimitInterval === N.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: I.intl.format(x.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.userUsageLimitIntervalCount,
                        }),
                    });
            }
            return null;
        }, [er, eo, D, ei, G]),
        ec = (0, f.G)(W.id),
        ed = a.useMemo(() => (ec ? (0, l.jsx)(S.a, {}) : null), [ec]),
        ep = a.useMemo(() => (null != eu ? eu : null != ed ? ed : null), [eu, ed]),
        em = a.useMemo(() => {
            let e = [];
            return (
                null != et && e.push({ type: "info", message: et, key: "payment-source-optional-warning" }),
                es
                    ? e.push({
                          directContent: (0, l.jsx)(P.l$, {
                              fractionalPremiumInfo: X,
                              isEligibleForTrial: O,
                              trialPeriodCopy: ea,
                              subscriptionPeriodEnd: F,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : ee && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [et, es, X, O, ea, F, ee]),
        eh = (0, C.l6)(g, null != G ? G.invoicePreview?.checkoutContext?.available_plans : void 0),
        eC = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: em,
            planSelectContent: K
                ? (0, l.jsx)(P.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: eh,
                      planOptions: H,
                      subscriptionPeriodEnd: F,
                  })
                : void 0,
            paymentSelectContent: en,
            promotionalNoticeContent: ep,
        };
    if (null == G) return (0, l.jsx)(o.T, { ...eC, legalContent: null });
    if (G.type === h.N$.LOADING) return (0, l.jsx)(o.E, {});
    let eA = null != el ? el.subscription_trial : void 0,
        eE =
            G.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(P.W9, {
                      invoiceSummaryTypeWithPreview: G,
                      subscriptionPlan: W,
                      isPrepaidPaymentSource: V,
                      subscriptionTrial: eA,
                      isCustomGift: Z,
                  }),
        ey = null;
    if (
        !V &&
        (h.IJ.has(G.type) || G.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in G &&
        null != G.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(G.invoicePreview, G.renewalInvoicePreview, eA, {
            discountOffer: D,
            isSubscriptionUpdate: null != J,
            fractionalPremiumInfo: X,
        });
        ey = (0, l.jsx)(u._, { ...e });
    }
    let eP = K
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
        eS = (0, l.jsx)(P.PI, {
            planGroup: b,
            activeSubscription: J,
            isTrial: M,
            plan: W,
            isGift: k,
            paymentSourceType: z,
            isPrepaidPaymentSource: V,
            invoiceSummaryTypeWithPreview: G,
            fractionalPremiumInfo: X,
        }),
        e_ =
            G.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(G.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: G.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...eC,
        purchaseItemContent: eP,
        subscriptionDetailsContent: ey,
        invoiceSummaryContent: eE,
        legalContent: eS,
        invoiceTotalDueValue: e_,
        invoiceTotalDueLabel: I.intl.string(x.default.R0cZsM),
    });
};
