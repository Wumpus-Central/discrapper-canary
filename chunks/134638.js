n.d(t, { _: () => R });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(400612),
    o = n(463376),
    u = n(557026),
    c = n(241989),
    d = n(721836),
    m = n(548118),
    p = n(511484),
    C = n(815545),
    h = n(958720),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    y = n(486020),
    I = n(158045),
    A = n(580630),
    g = n(166532),
    P = n(888751),
    v = n(652215),
    _ = n(202541),
    x = n(88001),
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
            bottomSubText: U,
            storeListing: D,
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
                { subscriptionPlanInvoiceItem: u } = (0, C.Sb)(n, i);
            if (r)
                return null != u
                    ? (0, C.Tp)(u, i)
                    : T.intl.formatToPlainString(b.default["8bPDtb"], { premiumGroupProductName: (0, x.DP)() });
            if (O(t)) {
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
            return (0, I.ys)(i.id) ? (0, I.Mn)(i.id, !1, a) : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPremiumGroupPurchase: k,
            isPrepaidPaymentSource: R,
            isClickPurchaseItemToEdit: Y,
            quantity: B,
        }),
        Z = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([f.A], () => (null != t ? f.A.getGuild(t) : null), [t]);
            return O(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        q = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return O(t)
                ? null != l
                    ? ""
                    : T.intl.string(N.default["3wsYeI"])
                : null == n
                  ? T.intl.string(N.default["2zUa6I"])
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        {
            header: z,
            headerIconSrc: Q,
            guildForIcon: $,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, S.A, f.A, E.A], () => {
                let e = S.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === v.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === v.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = f.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: c.skuId }),
        J = null != $ ? (0, l.jsx)(m.Ay, { guild: $, size: m.Ay.Sizes.SMOL }) : void 0,
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
                        { subscriptionPlanInvoiceItem: c } = (0, C.Sb)(l, n),
                        d = O(t),
                        m = t === s.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        E = (0, A.$g)(f, l.currency),
                        S = (0, A.CE)(E, n.interval, n.intervalCount),
                        y = null,
                        g = null,
                        v = !1,
                        x = S,
                        b = o?.discountOffer;
                    if (m)
                        (y = (0, h.O7)(n, { amount: f, currency: l.currency })),
                            (x = (0, P.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((x = E), n.interval === _.WT.YEAR && (0, I.xq)(n.id))) {
                            let e = (0, I.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            (y = null != e ? (0, A.$g)(e * u, l.currency) : null), (v = !0);
                        }
                    } else if (r) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.discount.applicableSubscriptionInterval === n.interval && null != e) {
                            let t = (0, A.$g)(f - e, l.currency);
                            (x = T.intl.format(N.default.U2CmMW, { priceAmount: t })),
                                (y = T.intl.format(N.default.JsSin7, {
                                    priceRate: (0, A.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.discount.intervalCount,
                                }));
                        }
                    } else if ((0, I.xq)(n.id) && null != b) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, C.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, A.$g)(f - e, l.currency);
                            (x = T.intl.format(T.t.hXcaLT, { price: t })),
                                (g = E),
                                (y = (0, p.hm)(b)
                                    ? T.intl.format(T.t.VZ8Tvh, { regularPrice: E })
                                    : T.intl.format(N.default.JsSin7, {
                                          priceRate: S,
                                          intervalCount: b.discount.intervalCount,
                                      }));
                        }
                    }
                    return { price: x, priceStrikethroughText: g, priceSubText: y, priceSubTextHasStrikethrough: v };
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
        er = ((0, I.ys)(c.id) ? (0, I.m6)(c.id) : void 0) === _.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: K,
        description: q,
        price: et,
        priceStrikethroughText: en,
        priceSubText: el,
        priceSubTextHasStrikethrough: ei,
        target: Z,
        graphic: (0, l.jsx)(M, { subscriptionPlan: c, storeListing: D }),
        omitDefaultIconBackground: er,
        header: z,
        headerIconSrc: Q,
        headerIconComponent: J,
        bottomSubText: U,
        onClick: V,
    });
}
function M(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, I.ys)(t.id) ? (0, I.m6)(t.id) : void 0;
    return (0, I.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function O(e) {
    return e === s.u$.PREMIUM_GIFT;
}
