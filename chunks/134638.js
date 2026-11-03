n.d(t, { _: () => R });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(155718),
    s = n(587895),
    o = n(400612),
    u = n(25149),
    c = n(241989),
    d = n(281044),
    m = n(548118),
    p = n(511484),
    C = n(563020),
    h = n(738869),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    y = n(486020),
    g = n(24482),
    I = n(580630),
    A = n(166532),
    P = n(888751),
    v = n(652215),
    x = n(202541),
    _ = n(88001),
    T = n(105292),
    b = n(758476),
    N = n(899082),
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
        V = F && W,
        Y = i.useMemo(() => {
            if (V && null != G) return () => G(A.pn.PLAN_SELECT);
        }, [V, G]),
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
                    : T.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
            if (M(t)) {
                let e = (0, P.iK)(i);
                return (
                    o > 1 && (e = T.intl.format(b.default.kyGViz, { quantity: o, label: e })),
                    s &&
                        (e = T.intl.format(b.default.BnZSW0, {
                            label: e,
                            editHook: (e) =>
                                (0, l.jsx)("span", { "data-underline-on-hover": !0, className: j.i, children: e }),
                        })),
                    e
                );
            }
            return (0, g.ys)(i.id) ? (0, g.Mn)(i.id, !1, a) : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPremiumGroupPurchase: k,
            isPrepaidPaymentSource: R,
            isClickPurchaseItemToEdit: V,
            quantity: B,
        }),
        Z = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([f.A], () => (null != t ? f.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        q = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : T.intl.string(b.default["3wsYeI"])
                : null == n
                  ? T.intl.string(b.default["2zUa6I"])
                  : void 0;
        })({ guildId: w, invoiceSummaryType: t, giftRecipient: L }),
        {
            header: z,
            headerIconSrc: $,
            guildForIcon: Q,
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
                    let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                    return { header: l.name, headerIconSrc: i };
                },
                [t],
            );
        })({ skuId: c.skuId }),
        J = null != Q ? (0, l.jsx)(m.Ay, { guild: Q, size: m.Ay.Sizes.SMOL }) : void 0,
        X = (0, d.t4)((e) => e.premiumDiscountInfo),
        {
            price: ee,
            priceStrikethroughText: et,
            priceSubText: en,
            priceSubTextHasStrikethrough: el,
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
                        } = e,
                        { subscriptionPlanInvoiceItem: c } = (0, C.Sb)(l, n),
                        d = M(t),
                        m = t === o.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        E = (0, I.$g)(f, l.currency),
                        S = (0, I.CE)(E, n.interval, n.intervalCount),
                        y = null,
                        A = null,
                        v = !1,
                        x = S,
                        _ = s?.discountOffer;
                    if (m)
                        ((y = (0, h.O7)(n, { amount: f, currency: l.currency })),
                            (x = (0, P.ib)(l.currency, { includeNowSuffix: !0 })));
                    else if (d)
                        if (((x = E), (0, P.uH)(n))) {
                            let e = (0, g.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            ((y = null != e ? (0, I.$g)(e * u, l.currency) : null), (v = !0));
                        } else {
                            let e = c?.discounts.find((e) => e.type === a.iS.QUANTITY_DISCOUNT);
                            null != e && ((y = (0, I.$g)(f + e.amount, l.currency)), (v = !0));
                        }
                    else if (!r && (0, g.xq)(n.id) && null != _) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, C.Ro)(l, _.discount.id) && null != e) {
                            let t = (0, I.$g)(f - e, l.currency);
                            ((x = T.intl.format(T.t.hXcaLT, { price: t })),
                                (A = E),
                                (y = (0, p.hm)(_)
                                    ? T.intl.format(T.t.VZ8Tvh, { regularPrice: E })
                                    : T.intl.format(b.default.JsSin7, {
                                          priceRate: S,
                                          intervalCount: _.discount.intervalCount,
                                      })));
                        }
                    }
                    return { price: x, priceStrikethroughText: A, priceSubText: y, priceSubTextHasStrikethrough: v };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: c,
                    invoicePreview: n,
                    priceOptions: H,
                    isPremiumGroupPurchase: k,
                    premiumDiscountInfo: X,
                    quantity: B,
                }),
            [t, c, n, H, k, X, B],
        ),
        ei = ((0, g.ys)(c.id) ? (0, g.m6)(c.id) : void 0) === x.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: K,
        description: q,
        price: ee,
        priceStrikethroughText: et,
        priceSubText: en,
        priceSubTextHasStrikethrough: el,
        target: Z,
        graphic: (0, l.jsx)(O, { subscriptionPlan: c, storeListing: U }),
        omitDefaultIconBackground: ei,
        header: z,
        headerIconSrc: $,
        headerIconComponent: J,
        bottomSubText: D,
        onClick: Y,
    });
}
function O(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, g.ys)(t.id) ? (0, g.m6)(t.id) : void 0;
    return (0, g.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === o.u$.PREMIUM_GIFT;
}
