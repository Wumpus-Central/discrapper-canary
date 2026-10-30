n.d(t, { _: () => O });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(155718),
    s = n(587895),
    o = n(400612),
    u = n(463376),
    c = n(25149),
    d = n(241989),
    m = n(912195),
    p = n(548118),
    h = n(511484),
    C = n(563020),
    f = n(738869),
    E = n(71393),
    S = n(967198),
    g = n(67480),
    I = n(486020),
    A = n(24482),
    y = n(580630),
    x = n(166532),
    P = n(888751),
    v = n(652215),
    _ = n(202541),
    T = n(88001),
    N = n(105292),
    b = n(758476),
    j = n(899082),
    R = n(780442);
function O(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: d,
            isPrepaidPaymentSource: O,
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
        } = (0, m.t4)((e) => ({
            isGift: e.isGift,
            quantity: e.quantity,
            priceOptions: e.checkoutPriceOptions,
            shouldDisallowPlanSelection: e.getShouldDisallowPlanSelection(),
        })),
        Y = B && V,
        K = i.useMemo(() => {
            if (Y && null != F) return () => F(x.pn.PLAN_SELECT);
        }, [Y, F]),
        q = (function (e) {
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
                    : N.intl.formatToPlainString(j.default["8bPDtb"], { premiumGroupProductName: (0, T.DP)() });
            if (L(t)) {
                let e = (0, P.iK)(i);
                return (
                    o > 1 && (e = N.intl.format(b.default.kyGViz, { quantity: o, label: e })),
                    s &&
                        (e = N.intl.format(b.default.BnZSW0, {
                            label: e,
                            editHook: (e) =>
                                (0, l.jsx)("span", { "data-underline-on-hover": !0, className: R.i, children: e }),
                        })),
                    e
                );
            }
            return (0, A.ys)(i.id) ? (0, A.Mn)(i.id, !1, a) : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: d,
            isPremiumGroupPurchase: w,
            isPrepaidPaymentSource: O,
            isClickPurchaseItemToEdit: Y,
            quantity: H,
        }),
        Z = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
            return L(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: D, invoiceSummaryType: t, giftRecipient: k }),
        z = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return L(t)
                ? null != l
                    ? ""
                    : N.intl.string(b.default["3wsYeI"])
                : null == n
                  ? N.intl.string(b.default["2zUa6I"])
                  : void 0;
        })({ guildId: D, invoiceSummaryType: t, giftRecipient: k }),
        {
            header: $,
            headerIconSrc: Q,
            guildForIcon: J,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)(
                [s.A, g.A, E.A, S.A],
                () => {
                    let e = g.A.get(t);
                    if (null == e) return {};
                    let n = e.productLine;
                    if (n === v.EZt.PREMIUM) return {};
                    let l = s.A.getApplication(e.applicationId);
                    if (null == l) return {};
                    if (n === v.EZt.GUILD_ROLE) {
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
        X = null != J ? (0, l.jsx)(p.Ay, { guild: J, size: p.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: ee } = (0, u.i)(),
        et = (0, m.t4)((e) => e.premiumDiscountInfo),
        {
            price: en,
            priceStrikethroughText: el,
            priceSubText: ei,
            priceSubTextHasStrikethrough: er,
        } = i.useMemo(
            () =>
                (function (e) {
                    let {
                            invoiceSummaryType: t,
                            subscriptionPlan: n,
                            invoicePreview: l,
                            priceOptions: i,
                            isPremiumGroupPurchase: r,
                            premiumGroupDiscountOffer: s,
                            premiumDiscountInfo: u,
                            quantity: c,
                        } = e,
                        { subscriptionPlanInvoiceItem: d } = (0, C.Sb)(l, n),
                        m = L(t),
                        p = t === o.u$.PREMIUM_WITH_TRIAL,
                        E = (m ? d?.amount : d?.subscriptionPlanPrice) ?? 0,
                        S = (0, y.$g)(E, l.currency),
                        g = (0, y.CE)(S, n.interval, n.intervalCount),
                        I = null,
                        x = null,
                        v = !1,
                        _ = g,
                        T = u?.discountOffer;
                    if (p)
                        ((I = (0, f.O7)(n, { amount: E, currency: l.currency })),
                            (_ = (0, P.ib)(l.currency, { includeNowSuffix: !0 })));
                    else if (m)
                        if (((_ = S), (0, P.uH)(n))) {
                            let e = (0, A.VA)({ subscriptionPlan: n, isGift: m, priceOptions: i });
                            ((I = null != e ? (0, y.$g)(e * c, l.currency) : null), (v = !0));
                        } else {
                            let e = d?.discounts.find((e) => e.type === a.iS.QUANTITY_DISCOUNT);
                            null != e && ((I = (0, y.$g)(E + e.amount, l.currency)), (v = !0));
                        }
                    else if (r) {
                        let e = (0, h.pg)(l, n.id);
                        if (null != s && s.discount.applicableSubscriptionInterval === n.interval && null != e) {
                            let t = (0, y.$g)(E - e, l.currency);
                            ((_ = N.intl.format(b.default.U2CmMW, { priceAmount: t })),
                                (I = N.intl.format(b.default.JsSin7, {
                                    priceRate: (0, y.CE)(S, n.interval, n.intervalCount),
                                    intervalCount: s.discount.intervalCount,
                                })));
                        }
                    } else if ((0, A.xq)(n.id) && null != T) {
                        let e = (0, h.pg)(l, n.id);
                        if ((0, C.Ro)(l, T.discount.id) && null != e) {
                            let t = (0, y.$g)(E - e, l.currency);
                            ((_ = N.intl.format(N.t.hXcaLT, { price: t })),
                                (x = S),
                                (I = (0, h.hm)(T)
                                    ? N.intl.format(N.t.VZ8Tvh, { regularPrice: S })
                                    : N.intl.format(b.default.JsSin7, {
                                          priceRate: g,
                                          intervalCount: T.discount.intervalCount,
                                      })));
                        }
                    }
                    return { price: _, priceStrikethroughText: x, priceSubText: I, priceSubTextHasStrikethrough: v };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: d,
                    invoicePreview: n,
                    priceOptions: W,
                    isPremiumGroupPurchase: w,
                    premiumGroupDiscountOffer: ee,
                    premiumDiscountInfo: et,
                    quantity: H,
                }),
            [t, d, n, W, w, ee, et, H],
        ),
        ea = ((0, A.ys)(d.id) ? (0, A.m6)(d.id) : void 0) === _.PremiumTypes.TIER_2;
    return (0, l.jsx)(c.f7, {
        label: q,
        description: z,
        price: en,
        priceStrikethroughText: el,
        priceSubText: ei,
        priceSubTextHasStrikethrough: er,
        target: Z,
        graphic: (0, l.jsx)(M, { subscriptionPlan: d, storeListing: G }),
        omitDefaultIconBackground: ea,
        header: $,
        headerIconSrc: Q,
        headerIconComponent: X,
        bottomSubText: U,
        onClick: K,
    });
}
function M(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([g.A], () => g.A.get(t.skuId), [t.skuId]),
        a = (0, A.ys)(t.id) ? (0, A.m6)(t.id) : void 0;
    return (0, A.z4)(t.id) ? (0, l.jsx)(d.a6, {}) : (0, l.jsx)(d.WH, { sku: i, premiumType: a, storeListing: n });
}
function L(e) {
    return e === o.u$.PREMIUM_GIFT;
}
