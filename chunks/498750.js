var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(155718),
    s = n(587895),
    o = n(860841),
    u = n(266060),
    c = n(677959),
    d = n(241989),
    m = n(516106),
    p = n(682163),
    h = n(511484),
    C = n(563020),
    f = n(813267),
    E = n(71393),
    S = n(967198),
    g = n(67480),
    I = n(486020),
    y = n(722178),
    A = n(580630),
    P = n(166532),
    v = n(474463),
    x = n(652215),
    _ = n(682901),
    T = n(88001),
    b = n(792996),
    N = n(379912),
    j = n(50302),
    R = n(107198),
    O = n(916194);
function M(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([g.A], () => g.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, y.z4)(t.id) ? (0, l.jsx)(d.a6, {}) : (0, l.jsx)(d.WH, { sku: i, premiumType: a, storeListing: n });
}
function L(e) {
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
                    subscriptionPlan: d,
                    isPrepaidPaymentSource: k,
                    giftRecipient: w,
                    isPremiumGroupPurchase: D = !1,
                    guildId: U,
                    bottomSubText: G,
                    handleStepChange: F,
                } = e,
                B = (0, u.K)(),
                {
                    isGift: H,
                    quantity: W,
                    priceOptions: V,
                    shouldDisallowPlanSelection: Y,
                    isRecurringGiftCheckout: K,
                    giftSubscriptionPlanId: Z,
                } = (0, m.t4)((e) => ({
                    isGift: e.isGift,
                    quantity: e.quantity,
                    priceOptions: e.checkoutPriceOptions,
                    shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    giftSubscriptionPlanId: e.getGiftSubscriptionPlanId(),
                })),
                q = Z ?? d.id,
                z = H && Y,
                $ = i.useMemo(() => {
                    if (z && null != F) return () => F(P.pn.PLAN_SELECT);
                }, [z, F]),
                Q = (function (e) {
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
                            : b.intl.formatToPlainString(R.default["8bPDtb"], { premiumGroupProductName: (0, T.DP)() });
                    if (L(t)) {
                        let e = (0, v.iK)(i);
                        return (
                            o > 1 && (e = b.intl.format(N.default.kyGViz, { quantity: o, label: e })),
                            s &&
                                (e = b.intl.format(N.default.BnZSW0, {
                                    label: e,
                                    editHook: (e) =>
                                        (0, l.jsx)("span", {
                                            "data-underline-on-hover": !0,
                                            className: O.i,
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
                    subscriptionPlan: d,
                    isPremiumGroupPurchase: D,
                    isPrepaidPaymentSource: k,
                    isClickPurchaseItemToEdit: z,
                    quantity: W,
                    invoicePlanId: q,
                }),
                J = (function (e) {
                    let { guildId: t, invoiceSummaryType: n, giftRecipient: l, isRecurringGiftCheckout: i } = e,
                        a = (0, r.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
                    return (L(n) || i) && null != l
                        ? { type: "gift", user: l }
                        : null != a
                          ? { type: "guildSubscription", guild: a }
                          : void 0;
                })({ guildId: U, invoiceSummaryType: t, giftRecipient: w, isRecurringGiftCheckout: K }),
                X = (function (e) {
                    let {
                        invoiceSummaryType: t,
                        guildId: n,
                        giftRecipient: l,
                        subscriptionPlan: i,
                        isRecurringGiftCheckout: r,
                    } = e;
                    return r
                        ? i.interval === _.WT.YEAR
                            ? b.intl.string(j.default.rstMwN)
                            : b.intl.string(j.default.Vb8FaC)
                        : L(t)
                          ? null != l
                              ? ""
                              : b.intl.string(N.default["3wsYeI"])
                          : null == n
                            ? b.intl.string(N.default["2zUa6I"])
                            : void 0;
                })({
                    guildId: U,
                    invoiceSummaryType: t,
                    giftRecipient: w,
                    subscriptionPlan: d,
                    isRecurringGiftCheckout: K,
                }),
                {
                    header: ee,
                    headerIconSrc: et,
                    guildForIcon: en,
                } = (function (e) {
                    let { skuId: t } = e;
                    return (0, r.cf)(
                        [s.A, g.A, E.A, S.A],
                        () => {
                            let e = g.A.get(t);
                            if (null == e) return {};
                            let n = e.productLine;
                            if (n === x.EZt.PREMIUM) return {};
                            let l = s.A.getApplication(e.applicationId);
                            if (null == l) return {};
                            if (n === x.EZt.GUILD_ROLE) {
                                let e = S.A.getGuildId(),
                                    t = E.A.getGuild(e);
                                return null != t ? { header: t.name, guildForIcon: t } : {};
                            }
                            let i = I.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                            return { header: l.name, headerIconSrc: i };
                        },
                        [t],
                    );
                })({ skuId: d.skuId }),
                el = null != en ? (0, l.jsx)(p.Ay, { guild: en, size: p.Ay.Sizes.SMOL }) : void 0,
                ei = (0, m.t4)((e) => e.premiumDiscountInfo),
                {
                    price: er,
                    priceStrikethroughText: ea,
                    priceSubText: es,
                    priceSubTextHasStrikethrough: eo,
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
                                m = L(t),
                                p = t === o.u$.PREMIUM_WITH_TRIAL,
                                E = (m ? d?.amount : d?.subscriptionPlanPrice) ?? 0,
                                S = (0, A.$g)(E, l.currency),
                                g = (0, A.CE)(S, n.interval, n.intervalCount),
                                I = null,
                                P = null,
                                x = !1,
                                _ = g,
                                T = s?.discountOffer;
                            if (p)
                                ((I = (0, f.O7)(n, { amount: E, currency: l.currency })),
                                    (_ = (0, v.ib)(l.currency, { includeNowSuffix: !0 })));
                            else if (m)
                                if (((_ = S), (0, v.uH)(n))) {
                                    let e = (0, y.VA)({ subscriptionPlan: n, isGift: m, priceOptions: i });
                                    ((I = null != e ? (0, A.$g)(e * u, l.currency) : null), (x = !0));
                                } else {
                                    let e = d?.discounts.find((e) => e.type === a.iS.QUANTITY_DISCOUNT);
                                    null != e && ((I = (0, A.$g)(E + e.amount, l.currency)), (x = !0));
                                }
                            else if (!r && (0, y.xq)(n.id) && null != T) {
                                let e = (0, h.pg)(l, n.id);
                                if ((0, C.Ro)(l, T.discount.id) && null != e) {
                                    let t = (0, A.$g)(E - e, l.currency);
                                    ((_ = b.intl.format(b.t.hXcaLT, { price: t })),
                                        (P = S),
                                        (I = (0, h.hm)(T)
                                            ? b.intl.format(b.t.VZ8Tvh, { regularPrice: S })
                                            : b.intl.format(N.default.JsSin7, {
                                                  priceRate: g,
                                                  intervalCount: T.discount.intervalCount,
                                              })));
                                }
                            }
                            return {
                                price: _,
                                priceStrikethroughText: P,
                                priceSubText: I,
                                priceSubTextHasStrikethrough: x,
                            };
                        })({
                            invoiceSummaryType: t,
                            subscriptionPlan: d,
                            invoicePreview: n,
                            priceOptions: V,
                            isPremiumGroupPurchase: D,
                            premiumDiscountInfo: ei,
                            quantity: W,
                            invoicePlanId: q,
                        }),
                    [t, d, n, V, D, ei, W, q],
                ),
                eu = ((0, y.ys)(d.id) ? (0, y.m6)(d.id) : void 0) === _.PremiumTypes.TIER_2;
            return (0, l.jsx)(c.f7, {
                label: Q,
                description: X,
                price: er,
                priceStrikethroughText: ea,
                priceSubText: es,
                priceSubTextHasStrikethrough: eo,
                target: J,
                graphic: (0, l.jsx)(M, { subscriptionPlan: d, storeListing: B }),
                omitDefaultIconBackground: eu,
                header: ee,
                headerIconSrc: et,
                headerIconComponent: el,
                bottomSubText: G,
                onClick: $,
            });
        },
    },
);
