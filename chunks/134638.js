n.d(t, { _: () => R });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(400612),
    o = n(463376),
    u = n(25149),
    c = n(241989),
    d = n(661899),
    p = n(548118),
    m = n(511484),
    h = n(563020),
    C = n(448013),
    f = n(71393),
    S = n(967198),
    E = n(67480),
    y = n(486020),
    A = n(158045),
    I = n(580630),
    g = n(166532),
    P = n(888751),
    v = n(652215),
    x = n(202541),
    _ = n(88001),
    T = n(375708),
    N = n(583741),
    b = n(148155),
    j = n(780442);
function R(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPrepaidPaymentSource: R,
            giftRecipient: L,
            isPremiumGroupPurchase: k = !1,
            guildId: w,
            bottomSubText: D,
            storeListing: U,
            handleStepChange: G,
        } = e,
        {
            isGift: F,
            quantity: B,
            priceOptions: H,
            shouldDisallowPlanSelection: W,
        } = (0, d.t4)((e) => ({
            isGift: e.isGift,
            quantity: e.quantity,
            priceOptions: e.checkoutPriceOptions,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        Y = F && W,
        V = i.useMemo(() => {
            if (Y && null != G) return () => G(g.pn.PLAN_SELECT);
        }, [Y, G]),
        K = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: i,
                    isPremiumGroupPurchase: r,
                    isPrepaidPaymentSource: a,
                    isClickPurchaseItemToEdit: s,
                    quantity: o,
                } = e,
                { subscriptionPlanInvoiceItem: u } = (0, h.Sb)(n, i);
            if (r)
                return null != u
                    ? (0, h.Tp)(u, i)
                    : T.intl.formatToPlainString(b.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
            if (M(t)) {
                let e = (0, P.iK)(i);
                return (
                    o > 1 && (e = T.intl.format(N.default.kyGViz, { quantity: o, label: e })),
                    s &&
                        (e = T.intl.format(N.default.BnZSW0, {
                            label: e,
                            editHook: (e) =>
                                (0, l.jsx)("span", { "data-underline-on-hover": !0, className: j.i, children: e }),
                        })),
                    e
                );
            }
            return (0, A.ys)(i.id) ? (0, A.Mn)(i.id, !1, a) : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPremiumGroupPurchase: k,
            isPrepaidPaymentSource: R,
            isClickPurchaseItemToEdit: Y,
            quantity: B,
        }),
        q = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([f.A], () => (null != t ? f.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        Z = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : T.intl.string(N.default["3wsYeI"])
                : null == n
                  ? T.intl.string(N.default["2zUa6I"])
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        {
            header: z,
            headerIconSrc: $,
            guildForIcon: Q,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)(
                [a.A, E.A, f.A, S.A],
                () => {
                    let e = E.A.get(t);
                    if (null == e) return {};
                    let n = e.productLine;
                    if (n === v.EZt.PREMIUM) return {};
                    let l = a.A.getApplication(e.applicationId);
                    if (null == l) return {};
                    if (n === v.EZt.GUILD_ROLE) {
                        let e = S.A.getGuildId(),
                            t = f.A.getGuild(e);
                        return null != t ? { header: t.name, guildForIcon: t } : {};
                    }
                    let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                    return { header: l.name, headerIconSrc: i };
                },
                [t],
            );
        })({ skuId: c.skuId }),
        J = null != Q ? (0, l.jsx)(p.Ay, { guild: Q, size: p.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: X } = (0, o.i)(),
        ee = (0, d.t4)((e) => e.premiumDiscountInfo),
        {
            price: et,
            priceStrikethroughText: en,
            priceSubText: el,
            priceSubTextHasStrikethrough: ei,
        } = i.useMemo(
            () =>
                (function (e) {
                    let {
                            invoiceSummaryType: t,
                            subscriptionPlan: n,
                            invoicePreview: l,
                            priceOptions: i,
                            isPremiumGroupPurchase: r,
                            premiumGroupDiscountOffer: a,
                            premiumDiscountInfo: o,
                            quantity: u,
                        } = e,
                        { subscriptionPlanInvoiceItem: c } = (0, h.Sb)(l, n),
                        d = M(t),
                        p = t === s.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        S = (0, I.$g)(f, l.currency),
                        E = (0, I.CE)(S, n.interval, n.intervalCount),
                        y = null,
                        g = null,
                        v = !1,
                        _ = E,
                        b = o?.discountOffer;
                    if (p)
                        ((y = (0, C.O7)(n, { amount: f, currency: l.currency })),
                            (_ = (0, P.ib)(l.currency, { includeNowSuffix: !0 })));
                    else if (d) {
                        if (((_ = S), n.interval === x.WT.YEAR && (0, A.xq)(n.id))) {
                            let e = (0, A.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            ((y = null != e ? (0, I.$g)(e * u, l.currency) : null), (v = !0));
                        }
                    } else if (r) {
                        let e = (0, m.pg)(l, n.id);
                        if (null != a && a.discount.applicableSubscriptionInterval === n.interval && null != e) {
                            let t = (0, I.$g)(f - e, l.currency);
                            ((_ = T.intl.format(N.default.U2CmMW, { priceAmount: t })),
                                (y = T.intl.format(N.default.JsSin7, {
                                    priceRate: (0, I.CE)(S, n.interval, n.intervalCount),
                                    intervalCount: a.discount.intervalCount,
                                })));
                        }
                    } else if ((0, A.xq)(n.id) && null != b) {
                        let e = (0, m.pg)(l, n.id);
                        if ((0, h.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, I.$g)(f - e, l.currency);
                            ((_ = T.intl.format(T.t.hXcaLT, { price: t })),
                                (g = S),
                                (y = (0, m.hm)(b)
                                    ? T.intl.format(T.t.VZ8Tvh, { regularPrice: S })
                                    : T.intl.format(N.default.JsSin7, {
                                          priceRate: E,
                                          intervalCount: b.discount.intervalCount,
                                      })));
                        }
                    }
                    return { price: _, priceStrikethroughText: g, priceSubText: y, priceSubTextHasStrikethrough: v };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: c,
                    invoicePreview: n,
                    priceOptions: H,
                    isPremiumGroupPurchase: k,
                    premiumGroupDiscountOffer: X,
                    premiumDiscountInfo: ee,
                    quantity: B,
                }),
            [t, c, n, H, k, X, ee, B],
        ),
        er = ((0, A.ys)(c.id) ? (0, A.m6)(c.id) : void 0) === x.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: K,
        description: Z,
        price: et,
        priceStrikethroughText: en,
        priceSubText: el,
        priceSubTextHasStrikethrough: ei,
        target: q,
        graphic: (0, l.jsx)(O, { subscriptionPlan: c, storeListing: U }),
        omitDefaultIconBackground: er,
        header: z,
        headerIconSrc: $,
        headerIconComponent: J,
        bottomSubText: D,
        onClick: V,
    });
}
function O(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([E.A], () => E.A.get(t.skuId), [t.skuId]),
        a = (0, A.ys)(t.id) ? (0, A.m6)(t.id) : void 0;
    return (0, A.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === s.u$.PREMIUM_GIFT;
}
