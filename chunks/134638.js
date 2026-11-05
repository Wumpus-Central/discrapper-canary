var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(155718),
    s = n(587895),
    o = n(860841),
    u = n(677959),
    c = n(241989),
    d = n(516106),
    m = n(682163),
    p = n(511484),
    C = n(563020),
    h = n(813267),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    g = n(486020),
    y = n(879610),
    I = n(580630),
    A = n(166532),
    P = n(888751),
    v = n(652215),
    x = n(682901),
    _ = n(88001),
    T = n(792996),
    b = n(379912),
    N = n(50302),
    j = n(107198),
    R = n(780442);
function O(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, y.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === o.u$.PREMIUM_GIFT;
}
n.d(
    t,
    {},
    {
        _: function (e) {
            let {
                    type: t,
                    invoicePreview: n,
                    subscriptionPlan: c,
                    isPrepaidPaymentSource: L,
                    giftRecipient: k,
                    isPremiumGroupPurchase: w = !1,
                    guildId: D,
                    bottomSubText: U,
                    storeListing: G,
                    handleStepChange: F,
                } = e,
                {
                    isGift: B,
                    quantity: H,
                    priceOptions: W,
                    shouldDisallowPlanSelection: V,
                    isRecurringGiftCheckout: Y,
                    giftSubscriptionPlanId: K,
                } = (0, d.t4)((e) => ({
                    isGift: e.isGift,
                    quantity: e.quantity,
                    priceOptions: e.checkoutPriceOptions,
                    shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                })),
                Z = K ?? c.id,
                q = B && V,
                z = i.useMemo(() => {
                    if (q && null != F) return () => F(A.pn.PLAN_SELECT);
                }, [q, F]),
                $ = (function (e) {
                    let {
                            invoiceSummaryType: t,
                            invoicePreview: n,
                            subscriptionPlan: i,
                            isPremiumGroupPurchase: r,
                            isPrepaidPaymentSource: a,
                            isClickPurchaseItemToEdit: s,
                            quantity: o,
                            invoicePlanId: u,
                        } = e,
                        { subscriptionPlanInvoiceItem: c } = (0, C.Sb)(n, u ?? i.id);
                    if (r)
                        return null != c
                            ? (0, C.Tp)(c, i)
                            : T.intl.formatToPlainString(j.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
                    if (M(t)) {
                        let e = (0, P.iK)(i);
                        return (
                            o > 1 && (e = T.intl.format(b.default.kyGViz, { quantity: o, label: e })),
                            s &&
                                (e = T.intl.format(b.default.BnZSW0, {
                                    label: e,
                                    editHook: (e) =>
                                        (0, l.jsx)("span", {
                                            "data-underline-on-hover": !0,
                                            className: R.i,
                                            children: e,
                                        }),
                                })),
                            e
                        );
                    }
                    return (0, y.ys)(i.id) ? (0, y.Mn)(i.id, !1, a) : i.name;
                })({
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: c,
                    isPremiumGroupPurchase: w,
                    isPrepaidPaymentSource: L,
                    isClickPurchaseItemToEdit: q,
                    quantity: H,
                    invoicePlanId: Z,
                }),
                Q = (function (e) {
                    let { guildId: t, invoiceSummaryType: n, giftRecipient: l, isRecurringGiftCheckout: i } = e,
                        a = (0, r.bG)([f.A], () => (null != t ? f.A.getGuild(t) : null), [t]);
                    return (M(n) || i) && null != l
                        ? { type: "gift", user: l }
                        : null != a
                          ? { type: "guildSubscription", guild: a }
                          : void 0;
                })({ guildId: D, invoiceSummaryType: t, giftRecipient: k, isRecurringGiftCheckout: Y }),
                J = (function (e) {
                    let {
                        invoiceSummaryType: t,
                        guildId: n,
                        giftRecipient: l,
                        subscriptionPlan: i,
                        isRecurringGiftCheckout: r,
                    } = e;
                    return r
                        ? i.interval === x.WT.YEAR
                            ? T.intl.string(N.default.rstMwN)
                            : T.intl.string(N.default.Vb8FaC)
                        : M(t)
                          ? null != l
                              ? ""
                              : T.intl.string(b.default["3wsYeI"])
                          : null == n
                            ? T.intl.string(b.default["2zUa6I"])
                            : void 0;
                })({
                    guildId: D,
                    invoiceSummaryType: t,
                    giftRecipient: k,
                    subscriptionPlan: c,
                    isRecurringGiftCheckout: Y,
                }),
                {
                    header: X,
                    headerIconSrc: ee,
                    guildForIcon: et,
                } = (function (e) {
                    let { skuId: t } = e;
                    return (0, r.cf)(
                        [s.A, S.A, f.A, E.A],
                        () => {
                            let e = S.A.get(t);
                            if (null == e) return {};
                            let n = e.productLine;
                            if (n === v.EZt.PREMIUM) return {};
                            let l = s.A.getApplication(e.applicationId);
                            if (null == l) return {};
                            if (n === v.EZt.GUILD_ROLE) {
                                let e = E.A.getGuildId(),
                                    t = f.A.getGuild(e);
                                return null != t ? { header: t.name, guildForIcon: t } : {};
                            }
                            let i = g.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                            return { header: l.name, headerIconSrc: i };
                        },
                        [t],
                    );
                })({ skuId: c.skuId }),
                en = null != et ? (0, l.jsx)(m.Ay, { guild: et, size: m.Ay.Sizes.SMOL }) : void 0,
                el = (0, d.t4)((e) => e.premiumDiscountInfo),
                {
                    price: ei,
                    priceStrikethroughText: er,
                    priceSubText: ea,
                    priceSubTextHasStrikethrough: es,
                } = i.useMemo(
                    () =>
                        (function (e) {
                            let {
                                    invoiceSummaryType: t,
                                    subscriptionPlan: n,
                                    invoicePreview: l,
                                    priceOptions: i,
                                    isPremiumGroupPurchase: r,
                                    premiumDiscountInfo: s,
                                    quantity: u,
                                    invoicePlanId: c,
                                } = e,
                                { subscriptionPlanInvoiceItem: d } = (0, C.Sb)(l, c ?? n.id),
                                m = M(t),
                                f = t === o.u$.PREMIUM_WITH_TRIAL,
                                E = (m ? d?.amount : d?.subscriptionPlanPrice) ?? 0,
                                S = (0, I.$g)(E, l.currency),
                                g = (0, I.CE)(S, n.interval, n.intervalCount),
                                A = null,
                                v = null,
                                x = !1,
                                _ = g,
                                N = s?.discountOffer;
                            if (f)
                                ((A = (0, h.O7)(n, { amount: E, currency: l.currency })),
                                    (_ = (0, P.ib)(l.currency, { includeNowSuffix: !0 })));
                            else if (m)
                                if (((_ = S), (0, P.uH)(n))) {
                                    let e = (0, y.VA)({ subscriptionPlan: n, isGift: m, priceOptions: i });
                                    ((A = null != e ? (0, I.$g)(e * u, l.currency) : null), (x = !0));
                                } else {
                                    let e = d?.discounts.find((e) => e.type === a.iS.QUANTITY_DISCOUNT);
                                    null != e && ((A = (0, I.$g)(E + e.amount, l.currency)), (x = !0));
                                }
                            else if (!r && (0, y.xq)(n.id) && null != N) {
                                let e = (0, p.pg)(l, n.id);
                                if ((0, C.Ro)(l, N.discount.id) && null != e) {
                                    let t = (0, I.$g)(E - e, l.currency);
                                    ((_ = T.intl.format(T.t.hXcaLT, { price: t })),
                                        (v = S),
                                        (A = (0, p.hm)(N)
                                            ? T.intl.format(T.t.VZ8Tvh, { regularPrice: S })
                                            : T.intl.format(b.default.JsSin7, {
                                                  priceRate: g,
                                                  intervalCount: N.discount.intervalCount,
                                              })));
                                }
                            }
                            return {
                                price: _,
                                priceStrikethroughText: v,
                                priceSubText: A,
                                priceSubTextHasStrikethrough: x,
                            };
                        })({
                            invoiceSummaryType: t,
                            subscriptionPlan: c,
                            invoicePreview: n,
                            priceOptions: W,
                            isPremiumGroupPurchase: w,
                            premiumDiscountInfo: el,
                            quantity: H,
                            invoicePlanId: Z,
                        }),
                    [t, c, n, W, w, el, H, Z],
                ),
                eo = ((0, y.ys)(c.id) ? (0, y.m6)(c.id) : void 0) === x.PremiumTypes.TIER_2;
            return (0, l.jsx)(u.f7, {
                label: $,
                description: J,
                price: ei,
                priceStrikethroughText: er,
                priceSubText: ea,
                priceSubTextHasStrikethrough: es,
                target: Q,
                graphic: (0, l.jsx)(O, { subscriptionPlan: c, storeListing: G }),
                omitDefaultIconBackground: eo,
                header: X,
                headerIconSrc: ee,
                headerIconComponent: en,
                bottomSubText: U,
                onClick: z,
            });
        },
    },
);
