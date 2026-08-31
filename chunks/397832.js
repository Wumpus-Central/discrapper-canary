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
    g = n(834730),
    A = n(212739);
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
                  title: (0, l.jsx)(g.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: x.intl.formatToPlainString(x.t.vXqqUc, { orbCount: 5e3 }),
                  }),
                  body: (0, l.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: x.intl.string(x.t.Ev7DO6),
                  }),
              }),
          })
        : t;
}
var Z = n(845012),
    q = n(134638),
    z = n(888751),
    Q = n(477729);
function $(e) {
    let { verifiedTrialId: t, planGroup: n, metadata: U, reviewWarningMessage: D, handlePaymentSourceAdd: F } = e,
        {
            checkoutInvoicePreview: W,
            checkoutPriceOptions: Y,
            checkoutInvoiceError: V,
            referralTrialOfferId: $,
            isGift: J,
            activeSubscription: X,
            shouldDisallowPlanSelection: ee,
            expressCheckoutSubmitting: et,
            shouldUseStripeExpressCheckout: en,
            premiumPlanOptions: el,
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
        { selectedPlanFromFluxStore: ei, selectedPlanId: er } = (0, S.D)(),
        {
            isEligibleForTrial: ea,
            discountOffer: es,
            premiumGroupDiscountOffer: eo,
            isPremiumGroupPurchase: eu,
        } = (0, m.i)(),
        ec = i.useMemo(() => ea && null != t, [ea, t]),
        {
            discriminatedInvoicePreview: ed,
            subscriptionPeriodEnd: em,
            proratedInvoicePreview: ep,
            purchaseDisabled: eC,
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
                            purchaseDisabled: g,
                            newItems: A,
                            preventInvoiceFetch: P,
                        } = (0, f.TP)({ selectedPlanId: t, priceOptions: n }),
                        {
                            universalInvoiceRequestParams: v,
                            checkoutInvoiceRequestParams: x,
                            renewalInvoiceRequestParams: _,
                        } = (0, f.jq)({
                            items: A,
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
                        purchaseDisabled: g,
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
        })({ selectedPlanId: er, verifiedTrialId: t, metadata: U, isVerifiedTrial: ec }),
        eh = (0, p.K)(),
        ef = eo ?? es,
        { giftRecipient: eE, selectedGiftingPromotionRewards: eS } = (0, C.Pv)(),
        ey = J && (0, R.Ik)(eE),
        eI = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: ec })) && !eu && !ee,
        eg = U?.guild_id ?? void 0,
        eA = (0, a.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        { paymentSources: eP } = (0, c.j)(),
        {
            hasEntitlements: ev,
            paymentSourceType: ex,
            isPrepaid: e_,
            paymentSourceOptionalWarningCopy: eT,
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
        })({ subscriptionPlan: ei, paymentSources: eP }),
        eN = ep ?? W,
        eb = i.useMemo(
            () => null != ef && null != ef.discount && null != eN && (0, b.Ro)(eN, ef.discount.id),
            [ef, eN],
        ),
        ej = (0, l.jsx)(B, {
            label: x.intl.string(x.t["u+Cw58"]),
            handlePaymentSourceAdd: F,
            isTrial: ec,
            hideCurrencySelect: eb,
            disabled: eC,
            hasEntitlements: ev,
        }),
        eR = (0, T.V)($),
        { copy: eM, daysCount: eO, userTrialOffer: eL } = (0, N.O8)(),
        ek = (0, w.pt)({
            fractionalPremiumInfo: eA,
            selectedPlanId: er,
            planGroup: n,
            premiumSubscription: X,
            isGift: J,
        }),
        ew = J && ei.interval === P.WT.YEAR && (0, M.xq)(ei.id),
        eU = (0, M.L_)({ planId: ei.id, isGift: !0, priceOptions: Y, subscriptionPlan: ei }),
        eD = i.useMemo(() => {
            if (null != eU && ew)
                return { headerBadgeText: x.intl.formatToPlainString(Q.default["Mi5BH/"], { percentOff: eU }) };
        }, [eU, ew]),
        eG = (0, L.Fe)(eD),
        eF = i.useMemo(() => {
            if (null != ed && ed.type === d.u$.PREMIUM_WITH_TRIAL && null != eL)
                return (0, l.jsx)(G, { text: x.intl.format(Q.default.IAsfR5, { daysCount: eO }) });
            if (null != ef && eb) {
                let e = ef.discount,
                    t = e.intervalCount;
                if (e.intervalType === P.Ff.MONTH)
                    return (0, l.jsx)(G, {
                        text: x.intl.format(Q.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                    });
                if (e.intervalType === P.Ff.YEAR)
                    return (0, l.jsx)(G, { text: x.intl.format(Q.default["tUzT/U"], { percentOff: e.amount }) });
            }
            return ew && null != eU
                ? (0, l.jsx)(G, { text: x.intl.format(Q.default["7sYIBL"], { savingsPercent: eU }) })
                : null;
        }, [eL, eb, ef, eO, ed, eU, ew]),
        eB = (function (e) {
            let { skuId: t, isGift: n } = e,
                r = (0, A.O)();
            return i.useMemo(
                () =>
                    n || t !== P.pe.TIER_2 || !1 === r
                        ? null
                        : (0, l.jsx)(I.w, {
                              type: "info",
                              children: (0, l.jsx)(g.E, {
                                  variant: "text-sm/medium",
                                  children: x.intl.format(v.default.Urtyu9, { days: 7 }),
                              }),
                          }),
                [n, t, r],
            );
        })({ skuId: ei.skuId, isGift: J }),
        eH = (0, O.i)({ planSkuId: ei.skuId, invoice: eN }),
        eW = (0, _.Mq)(ei) && eS.includes(r.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
        eY = i.useMemo(() => {
            let e = eF ?? eH ?? null;
            return eW ? (0, l.jsx)(K, { fallback: e }) : e;
        }, [eW, eF, eH]),
        eV = i.useMemo(() => {
            let e = [];
            return (
                null != D && "" !== D && e.push({ type: "warning", message: D, key: "review-warning" }),
                null != eT && e.push({ type: "info", message: eT, key: "payment-source-optional-warning" }),
                ek
                    ? e.push({
                          directContent: (0, l.jsx)(H.l, {
                              fractionalPremiumInfo: eA,
                              isEligibleForTrial: ea,
                              trialPeriodCopy: eM,
                              subscriptionPeriodEnd: em,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : eu && e.push({ type: "info", message: (0, w.Nn)(), key: "premium-group-purchase-notice" }),
                null != eB && e.push({ directContent: eB, key: "xbox-perks-notice" }),
                e.length > 0 ? e : null
            );
        }, [D, eT, ek, eA, ea, eM, em, eu, eB]),
        eK = null != ed ? ed.invoicePreview : null,
        { priceOptions: eZ, planPricesLoading: eq } = (0, M.Pr)(Y, eK, V),
        ez = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eV,
            planSelectContent: eI
                ? (0, l.jsx)(Z.X, {
                      disabled: eC || et,
                      selectedPlanId: er,
                      priceOptions: eZ,
                      planOptions: el,
                      subscriptionPeriodEnd: em,
                      planPricesLoading: eq,
                  })
                : void 0,
            paymentMethodContent: ej,
            promotionalNoticeContent: eY,
            headerBadgeConfig: eG,
        };
    if (null == ed && null != V) return (0, l.jsx)(u.T_, { ...ez, legalContent: null });
    if (null == ed || ed.type === d.u$.LOADING)
        return (0, l.jsx)(u.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eG });
    let eQ = null != eR ? eR.subscriptionTrial : void 0,
        e$ =
            ed.type === d.u$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(o.k, {
                      discriminatedInvoicePreview: ed,
                      subscriptionPlan: ei,
                      isPrepaidPaymentSource: e_,
                      subscriptionTrial: eQ,
                      isCustomGift: ey,
                  }),
        eJ = null;
    if (
        !e_ &&
        (d.ME.has(ed.type) || ed.type === d.u$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ed &&
        null != ed.renewalInvoicePreview
    ) {
        let e = (0, z.Gj)(ed.invoicePreview, ed.renewalInvoicePreview, eQ, {
            discountOffer: ef,
            isSubscriptionUpdate: null != X,
            fractionalPremiumInfo: eA,
        });
        eJ = (0, l.jsx)(y._, { ...e, defaultExpanded: en });
    }
    let eX = eI
            ? void 0
            : (0, l.jsx)(q._, {
                  type: ed.type,
                  invoicePreview: ed.invoicePreview,
                  storeListing: eh,
                  subscriptionPlan: ei,
                  isPrepaidPaymentSource: e_,
                  giftRecipient: eE,
                  isPremiumGroupPurchase: eu,
                  guildId: eg,
              }),
        e0 = (0, l.jsx)(H.P, {
            activeSubscription: X,
            isTrial: ec,
            plan: ei,
            isGift: J,
            paymentSourceType: ex,
            discriminatedInvoicePreview: ed,
            fractionalPremiumInfo: eA,
        }),
        e1 =
            ed.type === d.u$.PREMIUM_WITH_TRIAL
                ? (0, z.ib)(ed.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: ed.invoicePreview });
    return (0, l.jsx)(u.T_, {
        ...ez,
        purchaseItemContent: eX,
        subscriptionDetailsContent: eJ,
        invoiceSummaryContent: e$,
        legalContent: e0,
        invoiceTotalDueValue: e1,
        invoiceTotalDueLabel: J ? x.intl.string(Q.default.Zxav97) : x.intl.string(Q.default.R0cZsM),
    });
}
