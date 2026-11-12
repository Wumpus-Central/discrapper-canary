(n.d(t, { M: () => eP }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(120700),
    a = n(860841),
    s = n(854354),
    o = n(987666),
    u = n(482419),
    c = n(69882),
    d = n(202475),
    m = n(418200),
    p = n(316363),
    h = n(764724),
    C = n(473617),
    f = n(558620),
    E = n(669510),
    S = n(448645),
    g = n(602787),
    I = n(683071),
    y = n(212739);
n(216238);
var A = n(682901),
    P = n(337091),
    v = n(792996),
    x = n(814576),
    _ = n(84674),
    T = n(480060),
    b = n(773444),
    N = n(503698),
    j = n.n(N),
    R = n(575593),
    O = n(855986),
    M = n(403581),
    L = n(834730),
    k = n(262427),
    w = n(674658),
    D = n(474012),
    U = n(607123),
    G = n(287809),
    F = n(50302),
    B = n(189399);
function H(e) {
    let { Icon: t = M.NitroWheelIcon, iconSize: n, customGraphic: i, gradientColor: r = "nitro-pink", ...a } = e;
    return (0, l.jsx)(k.J, {
        gradientColor: r,
        ...(null != i ? { customGraphic: i } : { Icon: t, iconSize: n }),
        ...a,
    });
}
function W(e) {
    let { skuIds: t, text: n, gradientColor: r = "nitro-pink" } = e,
        a = (0, O.bG)([G.default], () => G.default.getCurrentUser()),
        { product: s } = (0, w.q)(t[0]),
        o = i.useMemo(
            () =>
                null != s && t.length > 1
                    ? v.intl.format(F.default.XoHiqS, { name: s.name, count: t.length - 1 })
                    : s?.name,
            [s, t.length],
        ),
        u = (0, D.tP)(s);
    return null == u
        ? null
        : (0, l.jsx)(k.A, {
              className: B.Xx,
              gradientColor: r,
              customGraphic: (0, l.jsx)("div", {
                  className: B.yn,
                  children: (0, l.jsx)("div", {
                      className: j()(B.ML, {
                          [B.M]: s?.type === R.R.AVATAR_DECORATION,
                          [B.Hm]: s?.type === R.R.PROFILE_EFFECT,
                          [B.hH]: s?.type === R.R.PROFILE_FRAME,
                          [B.qF]: s?.type === R.R.NAMEPLATE,
                          [B.l2]: s?.type === R.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(U.pL, {
                          collectiblesItem: u,
                          user: a,
                          nameplatePreviewStyle: B.M4,
                          nameplatePreviewRescalerStyle: B.N1,
                      }),
                  }),
              }),
              children: (0, l.jsxs)("div", {
                  className: B.zN,
                  children: [
                      (0, l.jsx)(L.E, { variant: "body-sm/medium", color: "currentColor", children: n }),
                      null != o && (0, l.jsx)(L.E, { variant: "body-sm/medium", color: "currentColor", children: o }),
                  ],
              }),
          });
}
var V = n(379912);
let Y = i.memo(function (e) {
        let { giftSavingsPercent: t, isGiftingMultiPeriodPremium: n, discriminatedInvoicePreview: r } = e,
            {
                isGift: s,
                checkoutInvoicePreview: o,
                hasQuantityDiscount: u,
            } = (0, p.t4)((e) => ({
                isGift: e.isGift,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                hasQuantityDiscount: e.getHasQuantityDiscount(),
            })),
            { discountOffer: d, currentInvoiceHasMatchingDiscountOffer: h } = (0, g.i)(),
            { selectedPlanFromFluxStore: C } = (0, f.D)(),
            { selectedGiftingPromotionRewards: E } = (0, m.Pv)(),
            { daysCount: S, userTrialOffer: I } = (0, x.O8)(),
            y = i.useMemo(() => {
                if (null != r && r.type === a.u$.PREMIUM_WITH_TRIAL && null != I)
                    return (0, l.jsx)(H, { text: v.intl.format(V.default.IAsfR5, { daysCount: S }) });
                if (null != d && h) {
                    let e = d.discount,
                        t = e.intervalCount;
                    if (e.intervalType === A.Ff.MONTH)
                        return (0, l.jsx)(H, {
                            text: v.intl.format(V.default.wCkwJf, { percentOff: e.amount, intervalCount: t }),
                        });
                    if (e.intervalType === A.Ff.YEAR)
                        return (0, l.jsx)(H, { text: v.intl.format(V.default["tUzT/U"], { percentOff: e.amount }) });
                }
                return s && E.length > 0
                    ? (0, l.jsx)(W, { skuIds: E, text: v.intl.format(V.default["XWo+Bp"], { count: E.length }) })
                    : n && null != t && !u
                      ? (0, l.jsx)(H, {
                            text:
                                C.interval === A.WT.YEAR
                                    ? v.intl.format(V.default["7sYIBL"], { savingsPercent: t })
                                    : v.intl.format(V.default.uCXulJ, {
                                          intervalCount: C.intervalCount,
                                          savingsPercent: t,
                                      }),
                        })
                      : null;
            }, [I, h, d, S, r, t, n, u, C.interval, C.intervalCount, s, E]),
            P = (0, _.i)({ planSkuId: C.skuId, invoice: o }),
            T = y ?? P ?? null;
        return null == T ? null : (0, l.jsx)(c.iA, { children: T });
    }),
    K = i.memo(function (e) {
        let { planGroup: t, fractionalPremiumInfo: n, coreUpperInlineNoticeProps: r } = e,
            {
                isGift: a,
                activeSubscription: s,
                subscriptionPeriodEnd: o,
            } = (0, p.t4)((e) => ({
                isGift: e.isGift,
                activeSubscription: e.activeSubscription,
                subscriptionPeriodEnd: e.getInvoiceSubscriptionPeriodEnd(),
            })),
            { isEligibleForTrial: u, isPremiumGroupPurchase: d } = (0, g.i)(),
            { selectedPlanFromFluxStore: m, selectedPlanId: h } = (0, f.D)(),
            { copy: C } = (0, x.O8)(),
            E = (0, b.pt)({
                fractionalPremiumInfo: n,
                selectedPlanId: h,
                planGroup: t,
                premiumSubscription: s,
                isGift: a,
            }),
            S = (function (e) {
                let { skuId: t, isGift: n } = e,
                    r = (0, y.O)();
                return i.useMemo(
                    () =>
                        n || t !== A.pe.TIER_2 || !1 === r
                            ? null
                            : (0, l.jsx)(I.w, {
                                  type: "info",
                                  message: v.intl.format(P.default.Urtyu9, { days: 7 }),
                                  role: "none",
                              }),
                    [n, t, r],
                );
            })({ skuId: m.skuId, isGift: a }),
            _ = i.useMemo(() => {
                let e = [];
                return (
                    E
                        ? e.push({
                              directContent: (0, l.jsx)(T.l, {
                                  fractionalPremiumInfo: n,
                                  isEligibleForTrial: u,
                                  trialPeriodCopy: C,
                                  subscriptionPeriodEnd: o,
                              }),
                              key: "fractional-premium-notice",
                          })
                        : d &&
                          e.push({
                              type: "info",
                              message: (0, b.Nn)(),
                              role: "none",
                              key: "premium-group-purchase-notice",
                          }),
                    null != S && e.push({ directContent: S, key: "xbox-perks-notice" }),
                    e.length > 0 ? e : null
                );
            }, [E, n, u, C, o, d, S]),
            N = i.useMemo(() => {
                let e = [...(r ?? []), ...(_ ?? [])];
                return e.length > 0 ? e : null;
            }, [r, _]);
        return (0, l.jsx)(c.zJ, { upperInlineNoticeProps: N, shouldShowGlobalNotices: !0 });
    });
var Z = n(770020),
    q = n(531260),
    z = n(71804),
    $ = n(841907),
    Q = n(436102),
    J = n(45938),
    X = n(750532),
    ee = n(232423),
    et = n(310507),
    en = n(599941),
    el = n(71766),
    ei = n(216641),
    er = n(809107),
    ea = n(886767);
function es(e) {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            hideCurrencySelect: r,
            disabled: a,
            hasSubscriptionCredit: s = !1,
            label: o = v.intl.string(v.t["u+Cw58"]),
            location: u = "PremiumSubscriptionReview",
        } = e,
        { paymentGatewayRestrictions: c } = (0, d.Y)(),
        m = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: s && !n ? v.intl.string(v.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: c,
            }),
            [s, n, c],
        );
    return (0, l.jsx)(ea.N, {
        label: o,
        disabled: a,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: m,
        location: u,
        hideCurrencySelect: r,
    });
}
n(938796);
var eo = n(587895),
    eu = n(266060),
    ec = n(241989),
    ed = n(682163),
    em = n(563020),
    ep = n(813267),
    eh = n(163437),
    eC = n(71393),
    ef = n(67480),
    eE = n(486020),
    eS = n(580630);
function eg(e) {
    let { subscriptionPlan: t, invoicePreview: n, isTrial: r } = e,
        a = (0, O.bG)([ef.A], () => ef.A.get(t.skuId), [t.skuId]),
        s = (0, eu.K)(),
        { price: o, priceSubText: u } = i.useMemo(
            () =>
                (function (e) {
                    let { subscriptionPlan: t, invoicePreview: n, isTrial: l } = e,
                        { subscriptionPlanInvoiceItem: i } = (0, em.Sb)(n, t.id),
                        r = i?.subscriptionPlanPrice ?? 0,
                        a = (0, eS.$g)(r, n.currency);
                    return l
                        ? {
                              price: (0, ee.ib)(n.currency, { includeNowSuffix: !0 }),
                              priceSubText: (0, ep.O7)(t, { amount: r, currency: n.currency }),
                          }
                        : { price: (0, eS.CE)(a, t.interval, t.intervalCount), priceSubText: null };
                })({ subscriptionPlan: t, invoicePreview: n, isTrial: r }),
            [t, n, r],
        );
    return { label: t.name, price: o, priceSubText: u, graphic: (0, l.jsx)(ec.WH, { sku: a, storeListing: s }) };
}
function eI(e) {
    let { subscriptionPlan: t, invoicePreview: n, description: i, target: a, ...s } = e,
        o = (0, p.t4)((e) => {
            let t = e.getTenantParams(r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT);
            return null != t ? t.guildId : null;
        }),
        { application: u, guild: c } = (0, O.cf)(
            [eo.A, ef.A, eC.A],
            () => {
                let e = ef.A.get(t.skuId),
                    n = null != e && (0, eh.bg)(e.flags);
                return {
                    application: null != e ? eo.A.getApplication(e.applicationId) : null,
                    guild: n || null == o ? null : eC.A.getGuild(o),
                };
            },
            [t.skuId, o],
        ),
        d = eg({ subscriptionPlan: t, invoicePreview: n, isTrial: !1 }),
        m = a ?? (null != c ? { type: "guildSubscription", guild: c } : void 0);
    return (0, l.jsx)(ec.f7, {
        ...d,
        description: i ?? (null == m ? v.intl.string(V.default["2zUa6I"]) : void 0),
        header: u?.name,
        headerIconSrc: null != u ? eE.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }) : void 0,
        target: m,
        ...s,
    });
}
function ey(e) {
    let { subscriptionPlan: t, invoicePreview: n, description: i, isTrial: a, target: s, ...o } = e,
        { guildId: u } = (0, p.t4)((e) => e.getTenantParams(r.C.GUILD_ROLE_CHECKOUT) ?? { guildId: null }),
        c = (0, O.bG)([eC.A], () => (null != u ? eC.A.getGuild(u) : null), [u]),
        d = eg({ subscriptionPlan: t, invoicePreview: n, isTrial: a });
    return (0, l.jsx)(ec.f7, {
        ...d,
        description: i ?? (null == s ? v.intl.string(V.default["2zUa6I"]) : void 0),
        header: c?.name,
        headerIconComponent: null != c ? (0, l.jsx)(ed.Ay, { guild: c, size: ed.Ay.Sizes.SMOL }) : void 0,
        ...o,
        target: s,
    });
}
function eA(e) {
    return e === r.C.GUILD_ROLE_CHECKOUT || e === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT;
}
function eP(e) {
    var t;
    let {
            verifiedTrialId: n,
            planGroup: I,
            metadata: y,
            reviewWarningMessage: A,
            handlePaymentSourceAdd: P,
            handleStepChange: x,
        } = e,
        {
            unifiedCheckoutFlow: _,
            checkoutInvoicePreview: T,
            checkoutPriceOptions: b,
            checkoutInvoiceError: N,
            isGift: j,
            activeSubscription: R,
            shouldDisallowPlanSelection: O,
            expressCheckoutSubmitting: M,
            premiumPlanOptions: L,
            setPurchasePreviewError: k,
        } = (0, p.t4)((e) => ({
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            checkoutPriceOptions: e.checkoutPriceOptions,
            checkoutInvoiceError: e.checkoutInvoiceError,
            isGift: e.isGift,
            activeSubscription: e.activeSubscription,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
            expressCheckoutSubmitting: e.getExpressCheckoutSubmitting(),
            premiumPlanOptions: e.getPremiumPlanOptionsOrNull() ?? [],
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        { selectedPlanFromFluxStore: w, selectedPlanId: D } = (0, f.D)(),
        U = (function (e) {
            let { verifiedTrialId: t } = e,
                { isEligibleForTrial: n, userTrialOffer: l } = (0, g.i)();
            return {
                subscriptionTrial: null != l && null != l.subscriptionTrial ? l.subscriptionTrial : void 0,
                isVerifiedTrial: n && null != t,
            };
        })({ verifiedTrialId: n }),
        G = (function (e) {
            let { verifiedTrialId: t } = e,
                n = (0, p.t4)((e) => {
                    let t = e.getTenantParams(r.C.GUILD_ROLE_CHECKOUT);
                    return null != t ? t.listing.id : null;
                }),
                l = (0, en.dL)(n);
            return i.useMemo(() => {
                let e = null != l ? l.active_trial : null;
                return null == t || null == e || e.id !== t
                    ? { subscriptionTrial: void 0, isVerifiedTrial: !1 }
                    : { subscriptionTrial: et.A.createFromServer(e), isVerifiedTrial: !0 };
            }, [l, t]);
        })({ verifiedTrialId: n }),
        { isVerifiedTrial: F, subscriptionTrial: B } = _ === r.C.GUILD_ROLE_CHECKOUT ? G : U,
        {
            isRecurringGiftCheckout: H,
            isRecurringGiftCheckoutLoading: W,
            giftRecipient: ea,
            isCustomGift: eo,
            isPremiumGroupPurchase: eu,
            discountOffer: ec,
            currentInvoiceHasMatchingDiscountOffer: ed,
            fractionalPremiumInfo: em,
            isGiftingMultiPeriodPremium: ep,
            giftSavingsPercent: eh,
            headerBadgeConfig: eC,
            hasPremiumSubscriptionCredit: ef,
            paymentSourceOptionalWarningCopy: eE,
        } = (function () {
            let {
                    isGift: e,
                    priceOptions: t,
                    hasQuantityDiscount: n,
                    isRecurringGiftCheckout: l,
                    giftSubscriptionPlanId: r,
                } = (0, p.t4)((e) => ({
                    isGift: e.isGift,
                    priceOptions: e.checkoutPriceOptions,
                    hasQuantityDiscount: e.getHasQuantityDiscount(),
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                })),
                { selectedPlanFromFluxStore: a, selectedPlanId: s } = (0, f.D)(),
                { isLoaded: o, hasFetchFailed: u } = (0, $.r)(l);
            if (l && u)
                throw new z.v({
                    message: "Failed to fetch gift subscription plans (usePremiumCheckoutReviewStepState)",
                    extraSentryInformation: { selectedPlanId: s, giftSubscriptionPlanId: r },
                });
            let { giftRecipient: c } = (0, m.Pv)(),
                { discountOffer: d, isPremiumGroupPurchase: h, currentInvoiceHasMatchingDiscountOffer: C } = (0, g.i)(),
                E = (0, q.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
                I = e && (0, ee.uH)(a),
                y = (0, S.L_)({ planId: a.id, isGift: !0, priceOptions: t, subscriptionPlan: a }),
                A = i.useMemo(
                    () =>
                        n
                            ? {}
                            : null != y && I
                              ? { headerBadgeText: v.intl.formatToPlainString(V.default["Mi5BH/"], { percentOff: y }) }
                              : void 0,
                    [n, y, I],
                ),
                P = (0, X.Fe)(A),
                { hasEntitlements: x, entitlements: _ } = (0, Q.X)(a.id, e),
                T = i.useMemo(
                    () => (x && null == t.paymentSourceId ? v.intl.format(v.t["2wPRSF"], { months: _.length }) : null),
                    [x, t.paymentSourceId, _],
                );
            return {
                isRecurringGiftCheckout: l,
                isRecurringGiftCheckoutLoading: l && !o,
                giftRecipient: c,
                isCustomGift: e && (0, J.Ik)(c),
                isPremiumGroupPurchase: h,
                discountOffer: d,
                currentInvoiceHasMatchingDiscountOffer: C,
                fractionalPremiumInfo: E,
                isGiftingMultiPeriodPremium: I,
                giftSavingsPercent: y,
                headerBadgeConfig: P,
                hasPremiumSubscriptionCredit: x,
                paymentSourceOptionalWarningCopy: T,
            };
        })(),
        { purchaseDisabled: eS, consolidatedInvoiceError: eg } = (function (e) {
            let { selectedPlanId: t, priceOptions: n, trialId: l, metadata: r } = e,
                {
                    selectedSkuId: a,
                    setFetchCheckoutInvoicePreviewRequest: s,
                    setFetchRenewalInvoicePreviewRequest: o,
                    checkoutInvoicePreview: u,
                    renewalInvoicePreview: c,
                    quantity: d,
                    primaryInvoicesError: f,
                    giftSubscriptionPlanId: E,
                } = (0, p.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                    setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    quantity: e.quantity,
                    primaryInvoicesError: e.get("primaryInvoicesError"),
                    giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                })),
                { isGift: S } = (0, m.Pv)(),
                {
                    purchaseDisabled: g,
                    newItems: I,
                    preventInvoiceFetch: y,
                } = (0, C.TP)({ selectedPlanId: t, priceOptions: n }),
                A = null != E,
                P = i.useMemo(() => (null != E ? [{ planId: E, quantity: 1 }] : I), [E, I]),
                {
                    universalInvoiceRequestParams: v,
                    checkoutInvoiceRequestParams: x,
                    renewalInvoiceRequestParams: _,
                } = (0, C.jq)({ items: P, preventFetch: y, priceOptions: n, trialId: l, subscriptionMetadata: r }),
                T = i.useMemo(
                    () =>
                        S && !A
                            ? {
                                  type: "premium_one_time_gift_purchase_invoice",
                                  params: { ...v, skuId: a, subscriptionPlanId: t, quantity: d },
                              }
                            : { type: "subscription_checkout_invoice", params: x },
                    [v, x, S, A, t, a, d],
                ),
                b = i.useMemo(
                    () =>
                        A
                            ? { type: "subscription_renewal_invoice", params: { ..._, subscriptionId: void 0 } }
                            : S
                              ? null
                              : { type: "subscription_renewal_invoice", params: _ },
                    [_, S, A],
                );
            (i.useEffect(() => {
                s(T);
            }, [T, s]),
                i.useEffect(() => {
                    o(b);
                }, [b, o]));
            let { discountInvoiceError: N } = (0, h.W)({ priceOptions: n, trialId: l, metadata: r });
            return {
                checkoutInvoicePreview: u,
                renewalInvoicePreview: c,
                purchaseDisabled: g,
                consolidatedInvoiceError: i.useMemo(() => f ?? N, [f, N]),
            };
        })({ selectedPlanId: D, priceOptions: b, trialId: n, metadata: y });
    i.useEffect(() => {
        k(eg);
    }, [eg, k]);
    let { discriminatedInvoicePreview: eP, subscriptionPeriodEnd: ev } = (0, p.t4)((e) => ({
            subscriptionPeriodEnd: e.getInvoiceSubscriptionPeriodEnd(),
            discriminatedInvoicePreview: e.getPremiumDiscriminatedInvoicePreview({ invoiceError: eg, isTrial: F }),
        })),
        ex = (0, p.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: F })),
        e_ = !eA(_) && ex && !eu && !O,
        eT = (0, p.t4)((e) => e.checkoutPriceOptions.paymentSourceId),
        { paymentSources: eb } = (0, d.j)(),
        eN = (0, ei.g)(eb, eT),
        ej = (0, S.J$)(eT),
        eR = (0, l.jsx)(es, {
            handlePaymentSourceAdd: P,
            isTrial: F,
            hideCurrencySelect: ed,
            disabled: eS,
            hasSubscriptionCredit: ef,
        }),
        eO = i.useMemo(() => {
            let e = [];
            return (
                null != A && "" !== A && e.push({ type: "warning", message: A, role: "none", key: "review-warning" }),
                null != eE &&
                    e.push({ type: "info", message: eE, role: "status", key: "payment-source-optional-warning" }),
                e.length > 0 ? e : null
            );
        }, [A, eE]),
        eM =
            ((t = { giftSavingsPercent: eh, isGiftingMultiPeriodPremium: ep, discriminatedInvoicePreview: eP }),
            eA(_) ? null : (0, l.jsx)(Y, { ...t })),
        { priceOptions: eL, planPricesLoading: ek } = (0, S.Pr)(b, T, N),
        ew = {
            planSelectContent: e_
                ? (0, l.jsx)(Z.X, {
                      disabled: eS || M,
                      selectedPlanId: D,
                      priceOptions: eL,
                      planOptions: L,
                      subscriptionPeriodEnd: ev,
                      planPricesLoading: ek,
                  })
                : void 0,
            upperInlineNoticeContent: (function (e, t) {
                let { coreUpperInlineNoticeProps: n, ...i } = t;
                return eA(e)
                    ? (0, l.jsx)(c.zJ, { upperInlineNoticeProps: n, shouldShowGlobalNotices: !0 })
                    : (0, l.jsx)(K, { ...i, coreUpperInlineNoticeProps: n });
            })(_, { planGroup: I, fractionalPremiumInfo: em, coreUpperInlineNoticeProps: eO }),
            paymentMethodContent: eR,
            promotionalNoticeContent: eM,
            tenantProvidesPromotionalNoticeContainer: !0,
            headerBadgeConfig: eC,
        },
        eD = null == eP || eP.type === a.u$.LOADING,
        eU = i.useMemo(() => {
            if (eD || ej) return null;
            if (
                (a.ME.has(eP.type) || eP.type === a.u$.PREMIUM_WITH_TRIAL) &&
                "renewalInvoicePreview" in eP &&
                null != eP.renewalInvoicePreview
            ) {
                let e = (0, ee.Gj)(
                    eP.invoicePreview,
                    eP.renewalInvoicePreview,
                    B,
                    (function (e, t) {
                        let {
                            isSubscriptionUpdate: n,
                            isRecurringGiftCheckout: l,
                            discountOffer: i,
                            fractionalPremiumInfo: r,
                        } = t;
                        return eA(e)
                            ? { isSubscriptionUpdate: n }
                            : l
                              ? { discountOffer: i, isSubscriptionUpdate: !1, fractionalPremiumInfo: void 0 }
                              : { discountOffer: i, isSubscriptionUpdate: n, fractionalPremiumInfo: r };
                    })(_, {
                        isSubscriptionUpdate: null != R,
                        isRecurringGiftCheckout: H,
                        discountOffer: ec,
                        fractionalPremiumInfo: em,
                    }),
                );
                return (0, l.jsx)(E._, { ...e });
            }
            return null;
        }, [_, eD, eP, ej, R, ec, em, H, B]),
        eG = i.useMemo(
            () =>
                eD || eP.type === a.u$.PREMIUM_WITH_TRIAL
                    ? null
                    : (0, l.jsx)(u.k, {
                          discriminatedInvoicePreview: eP,
                          subscriptionPlan: w,
                          isPrepaidPaymentSource: ej,
                          subscriptionTrial: B,
                          isCustomGift: eo,
                      }),
            [eD, eP, ej, w, B, eo],
        ),
        eF = i.useMemo(
            () =>
                eD
                    ? null
                    : (function (e, t) {
                          let { isGift: n, isTrial: i, subscriptionTrial: r, fractionalPremiumInfo: a, ...s } = t;
                          return eA(e)
                              ? (0, l.jsx)(o.$, {
                                    ...s,
                                    subscriptionTrial: r,
                                    unifiedLegalType: (0, er.X)({ isGift: n, isTrial: i, unifiedCheckoutFlow: e }),
                                })
                              : (0, l.jsx)(er.P, { ...s, isGift: n, isTrial: i, fractionalPremiumInfo: a });
                      })(_, {
                          isTrial: F,
                          plan: w,
                          paymentSourceType: eN,
                          discriminatedInvoicePreview: eP,
                          subscriptionTrial: B,
                          ...(H
                              ? { activeSubscription: null, fractionalPremiumInfo: null, isGift: !1 }
                              : { activeSubscription: R, fractionalPremiumInfo: em, isGift: j }),
                      }),
            [_, eD, H, B, R, F, w, j, eN, eP, em],
        );
    if (null == eP && null != N) return (0, l.jsx)(c.T_, { ...ew, legalContent: null });
    if (null == eP || eP.type === a.u$.LOADING || W)
        return (0, l.jsx)(c.Ed, { shouldShowUnifiedHeader: !0, headerBadgeConfig: eC });
    let eB = (function (e, t) {
            let {
                shouldAllowPlanSelect: n,
                discriminatedInvoicePreview: i,
                subscriptionPlan: s,
                handleStepChange: o,
                isTrial: u,
                isPrepaidPaymentSource: c,
                giftRecipient: d,
                isPremiumGroupPurchase: m,
            } = t;
            if (i.type === a.u$.LOADING) return null;
            let { invoicePreview: p } = i;
            return e === r.C.GUILD_ROLE_CHECKOUT
                ? (0, l.jsx)(ey, { subscriptionPlan: s, invoicePreview: p, isTrial: u })
                : e === r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT
                  ? (0, l.jsx)(eI, { subscriptionPlan: s, invoicePreview: p })
                  : n
                    ? null
                    : (0, l.jsx)(el._, {
                          type: i.type,
                          invoicePreview: p,
                          subscriptionPlan: s,
                          handleStepChange: o,
                          isPrepaidPaymentSource: c,
                          giftRecipient: d,
                          isPremiumGroupPurchase: m,
                      });
        })(_, {
            shouldAllowPlanSelect: e_,
            discriminatedInvoicePreview: eP,
            subscriptionPlan: w,
            isPrepaidPaymentSource: ej,
            giftRecipient: ea,
            isPremiumGroupPurchase: eu,
            handleStepChange: x,
            isTrial: F,
        }),
        eH = j && !H ? v.intl.string(V.default.Zxav97) : v.intl.string(V.default.R0cZsM),
        eW =
            eP.type === a.u$.PREMIUM_WITH_TRIAL
                ? (0, ee.ib)(eP.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: eP.invoicePreview });
    return (0, l.jsx)(c.T_, {
        ...ew,
        purchaseItemContent: eB,
        subscriptionDetailsContent: eU,
        invoiceSummaryContent: eG,
        legalContent: eF,
        invoiceTotalDueLabel: eH,
        invoiceTotalDueValue: eW,
    });
}
