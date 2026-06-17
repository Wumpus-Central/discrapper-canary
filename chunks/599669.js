"use strict";
n.d(t, { Ak: () => G, pc: () => B, zT: () => U }), n(321073);
var i = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(403581),
    l = n(834730),
    u = n(155718),
    c = n(793574),
    d = n(688810),
    _ = n(606267),
    h = n(376843),
    f = n(38785),
    p = n(666646),
    E = n(818824),
    m = n(596034),
    g = n(848584),
    A = n(241989),
    I = n(958340),
    T = n(888751),
    S = n(216641),
    y = n(543767),
    C = n(874638),
    N = n(881489),
    v = n(458785),
    R = n(71393),
    O = n(97352),
    b = n(428262),
    D = n(580630),
    L = n(788868),
    w = n(818348),
    M = n(375708),
    P = n(982772),
    x = n(703345);
function k(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: r,
            totalDue: s,
            currency: a,
            startDate: o,
        } = e,
        { immediateDelivery: l } = (0, E.U)();
    return (0, i.jsx)(m._, {
        variant: {
            type: m.I.Subscription,
            purchaseButtonText: M.intl.string(M.t.eUEeCt),
            totalDue: s,
            renewalPrice: r,
            currency: a,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: o,
        },
        paymentSourceType: t,
        immediateDelivery: l,
    });
}
function U(e) {
    return M.intl.format(M.t.IeaYqg, { endDate: e });
}
function G(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: x.bU }),
            (0, i.jsx)(l.E, { variant: "text-sm/normal", className: x.b7, children: t }),
            (0, i.jsx)("div", { className: x.bU }),
        ],
    });
}
function F(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: r,
            guildBoostingAdjustment: s,
            checkoutInvoicePreview: a,
        } = e,
        o = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                checkoutInvoicePreview: u,
            } = e;
            return {
                label: M.intl.formatToPlainString(M.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, b.Mn)(n.id, !1, i),
                }),
                value: i ? r : s,
                subscriptionDiscount: a,
                entitlementDiscount: o,
                originalAmount: l,
                currency: u.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        l = [];
    0 !== n &&
        l.push({
            id: "base-plan-adjustment",
            label: M.intl.formatToPlainString(M.t.ZSVged, { planName: (0, b.RH)(r[0].subscriptionPlanId) }),
            tooltip: M.intl.string(M.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== s &&
            l.push({
                id: "guild-boosting-adjustment",
                label: M.intl.string(M.t["+as5ZZ"]),
                tooltip: M.intl.string(M.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== a.tax && l.push({ id: "tax", label: M.intl.string(M.t.jiRvC7), amount: a.tax, lineItemType: "tax" });
    let { lineItems: u, currency: c } = (0, T.EA)({ id: "main-line-item", amount: t, ...o }),
        d = [...u, ...l];
    return (0, i.jsx)(g.Vm, { defaultExpanded: !0, label: M.intl.string(P.default.eoXh7B), lineItems: d, currency: c });
}
function V(e) {
    let { isSubscriptionUpdate: t, premiumSubscription: n, checkoutInvoicePreview: r, renewalInvoicePreview: s } = e;
    return null != n
        ? (0, i.jsx)(v.m0, { proratedInvoice: r, renewalInvoice: s, isUpdate: t })
        : (0, i.jsx)(v.m0, { renewalInvoice: s });
}
function B(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: r,
            currentPremiumSubscription: l,
            premiumSubscriptionPaymentSourceId: E,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: g,
            paymentSourceId: T,
            setPaymentSourceId: x,
            onPaymentSourceAdd: G,
        } = e,
        B = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: o,
                    newAdditionalPlans: l,
                } = e,
                u = (0, a.bG)([R.A, I.A], () => {
                    let e = R.A.getGuild(n);
                    return null != e ? e : I.A.isGuildFetching(n) ? null : I.A.getGuild(n);
                }, [n]),
                _ = o.interval,
                h = o.intervalCount,
                f = (0, a.bG)([O.A], () => O.A.getForSkuAndInterval((0, b.mH)(L.pe.GUILD), _, h));
            s()(null != f, "Missing guildBoostingSubscriptionPlan");
            let E = (0, b.J$)(i.paymentSourceId),
                m = (0, N.ds)();
            t = null != r ? (0, b.Om)(r, l[0].quantity, l[0].planId) : l;
            let { analyticsLocations: g } = (0, d.Ay)(),
                [A, T] = (0, y.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: g,
                    analyticsLocation: c.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [S, C] = (0, y.YV)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: void 0,
                    analyticsLocations: g,
                    analyticsLocation: c.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, p.OQ)({
                    checkoutInvoicePreview: A,
                    checkoutInvoiceError: T,
                    renewalInvoicePreview: S,
                    renewalInvoiceError: C,
                }),
                {
                    guild: u ?? null,
                    guildBoostingSubscriptionPlan: f,
                    isPrepaid: E,
                    isReverseTrial: m,
                    checkoutInvoicePreview: A,
                    renewalInvoicePreview: S,
                    isSubscriptionUpdate: null != r,
                }
            );
        })({
            guildId: t,
            priceOptions: r,
            currentPremiumSubscription: l,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: g,
        }),
        {
            isSubscriptionUpdate: j,
            guild: H,
            isPrepaid: Y,
            isReverseTrial: W,
            checkoutInvoicePreview: K,
            renewalInvoicePreview: $,
        } = B,
        z = (0, _.A)({ location: "GuildBoostReview", message: M.intl.string(P.default["tK8A/8"]) });
    if (null == K || null == $ || null == H) return (0, i.jsx)(f.E, {});
    let q = (0, i.jsx)(V, {
            isSubscriptionUpdate: j,
            premiumSubscription: l,
            checkoutInvoicePreview: K,
            renewalInvoicePreview: $,
        }),
        Z = (0, i.jsx)(h.n, {
            setPaymentSourceId: x,
            paymentSourceId: T,
            location: "GuildBoostReview",
            label: M.intl.string(M.t["u+Cw58"]),
            onPaymentSourceAdd: G,
            premiumSubscriptionPaymentSourceId: E,
            hideCurrencySelect: !0,
        }),
        X = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                checkoutInvoicePreview: r,
                paymentSources: s,
                paymentSourceId: a,
            } = e;
            return {
                paymentSourceType: (0, S.g)(s, a),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, v.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: j,
            premiumSubscriptionPlan: m,
            renewalInvoicePreview: $,
            checkoutInvoicePreview: K,
            paymentSources: n,
            paymentSourceId: T,
        }),
        Q = (0, i.jsx)(k, { ...X }),
        J = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    checkoutInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: a,
                    reviewState: o,
                } = e,
                { guildBoostingSubscriptionPlan: l, isPrepaid: c, isReverseTrial: d } = o,
                _ = n.interval,
                h = n.intervalCount,
                f = (e) => (0, C.Z)(i.invoiceItems).find((t) => L.pW.has(t.subscriptionPlanId) && e(t)),
                p = f((e) => e.amount >= 0);
            s()(null != p, "Missing guild boosting invoice item");
            let E = f((e) => e.amount < 0),
                m = null != E ? p.quantity - E.quantity : p.quantity,
                g = i.invoiceItems.filter((e) => (0, b.xq)(e.subscriptionPlanId)),
                A = g.reduce((e, t) => e + t.amount, 0),
                I = (0, y.sL)(p) * m,
                T = (0, D.$g)(I, i.currency),
                S = (0, D.CE)(T, _, h),
                N = (0, D.$g)(i.total, i.currency) + (i.currency !== w.Yr.USD ? "*" : ""),
                v = i.subtotal - I - A,
                R = p.discounts.map((e) => {
                    let t = e.amount / p.quantity;
                    return { ...e, amount: t * m };
                }),
                O = R.find((e) => e.type === u.iS.SUBSCRIPTION_PLAN),
                M = R.find((e) => e.type === u.iS.ENTITLEMENT),
                P = p.subscriptionPlanPrice * m;
            return {
                addedQuantity: m,
                guildBoostingSubscriptionPlan: l,
                isPrepaid: c,
                isReverseTrial: d,
                formattedGuildBoostPrice: T,
                formattedGuildBoostRate: S,
                formattedOriginalAmountGuildBoostRate: (0, D.CE)((0, D.$g)(P, i.currency), _, h),
                formattedTotal: N,
                basePlanAdjustment: A,
                basePlanInvoiceItems: g,
                guildBoostingAdjustment: v,
                subscriptionDiscount: O,
                entitlementDiscount: M,
                originalAmount: P,
                premiumSubscription: t,
                checkoutInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: a,
            };
        })({
            premiumSubscription: l,
            premiumSubscriptionPlan: m,
            checkoutInvoicePreview: K,
            renewalInvoicePreview: $,
            priceOptions: r,
            reviewState: B,
        }),
        ee = (0, i.jsx)(F, { ...J }),
        et = (function (e, t, n) {
            let {
                    addedQuantity: r,
                    guildBoostingSubscriptionPlan: s,
                    isPrepaid: a,
                    formattedGuildBoostRate: l,
                    formattedOriginalAmountGuildBoostRate: u,
                    subscriptionDiscount: c,
                } = t,
                d = null != c;
            return {
                label: M.intl.formatToPlainString(M.t.a3cAOg, {
                    numGuildSubscriptions: r,
                    planName: (0, b.Mn)(s.id, !1, a),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(A.a6, {}),
                price: l,
                PriceIcon: d ? o.t : void 0,
                priceTooltip: d ? M.intl.string(P.default.YUNJJa) : void 0,
                priceSubText: d ? u : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            H,
            J,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: U(i.currentPeriodEnd) } : null;
            })({ isPrepaid: Y, isReverseTrial: W, premiumSubscription: l }),
        ),
        en = (0, i.jsx)(A.f7, { ...et });
    return (0, i.jsx)(f.T, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: z,
        purchaseItemContent: en,
        subscriptionDetailsContent: q,
        paymentMethodContent: Z,
        invoiceSummaryContent: ee,
        legalContent: Q,
        invoiceTotalDueValue: J.formattedTotal,
        invoiceTotalDueLabel: M.intl.string(P.default.R0cZsM),
    });
}
