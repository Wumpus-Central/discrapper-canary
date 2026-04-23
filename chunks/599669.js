"use strict";
n.d(t, { Ak: () => G, pc: () => H, zT: () => B }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(311907),
    o = n(403581),
    c = n(834730),
    d = n(155718),
    u = n(793574),
    _ = n(688810),
    p = n(918022),
    m = n(69882),
    h = n(93159),
    f = n(596034),
    b = n(270537),
    g = n(241989),
    A = n(94420),
    E = n(958340),
    x = n(826469),
    I = n(908419),
    v = n(888751),
    S = n(216641),
    C = n(543767),
    T = n(874638),
    y = n(881489),
    N = n(692440),
    R = n(71393),
    P = n(351906),
    w = n(97352),
    L = n(927578),
    O = n(580630),
    M = n(788868),
    j = n(818348),
    U = n(985018),
    D = n(327105),
    k = n(7921);
function F(e) {
    let {
            paymentSourceType: t,
            premiumSubscriptionPlan: n,
            renewalPrice: r,
            totalDue: a,
            currency: l,
            startDate: s,
        } = e,
        { immediateDelivery: o } = (0, I.U)();
    return (0, i.jsx)(f._, {
        variant: {
            type: f.I.Subscription,
            purchaseButtonText: U.intl.string(U.t.eUEeCt),
            totalDue: a,
            renewalPrice: r,
            currency: l,
            interval: n.interval,
            intervalCount: n.intervalCount,
            startDate: s,
        },
        paymentSourceType: t,
        immediateDelivery: o,
    });
}
function B(e) {
    return U.intl.format(U.t.IeaYqg, { endDate: e });
}
function G(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: k.bU }),
            (0, i.jsx)(c.E, { variant: "text-sm/normal", className: k.b7, children: t }),
            (0, i.jsx)("div", { className: k.bU }),
        ],
    });
}
function V(e) {
    let {
            originalAmount: t,
            basePlanAdjustment: n,
            basePlanInvoiceItems: r,
            guildBoostingAdjustment: a,
            proratedInvoicePreview: l,
        } = e,
        s = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: a,
                subscriptionDiscount: l,
                entitlementDiscount: s,
                originalAmount: o,
                proratedInvoicePreview: c,
            } = e;
            return {
                label: U.intl.formatToPlainString(U.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, L.Mn)(n.id, !1, i),
                }),
                value: i ? r : a,
                subscriptionDiscount: l,
                entitlementDiscount: s,
                originalAmount: o,
                currency: c.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        o = [];
    0 !== n &&
        o.push({
            id: "base-plan-adjustment",
            label: U.intl.formatToPlainString(U.t.ZSVged, { planName: (0, L.RH)(r[0].subscriptionPlanId) }),
            tooltip: U.intl.string(U.t.JmwQJM),
            amount: n,
            lineItemType: "adjustment",
        }),
        0 !== a &&
            o.push({
                id: "guild-boosting-adjustment",
                label: U.intl.string(U.t["+as5ZZ"]),
                tooltip: U.intl.string(U.t.JmwQJM),
                amount: a,
                lineItemType: "adjustment",
            }),
        0 !== l.tax && o.push({ id: "tax", label: U.intl.string(U.t.jiRvC7), amount: l.tax, lineItemType: "tax" });
    let { lineItems: c, currency: d } = (0, v.EA)({ id: "main-line-item", amount: t, ...s }),
        u = [...c, ...o];
    return (0, i.jsx)(b.Vm, { defaultExpanded: !0, label: U.intl.string(D.default.eoXh7B), lineItems: u, currency: d });
}
function W(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        proratedInvoicePreview: r,
        renewalInvoicePreview: a,
        isPrepaid: l,
        isReverseTrial: s,
        priceOptions: o,
    } = e;
    return null != n
        ? (0, i.jsx)(N.m0, {
              premiumSubscription: n,
              proratedInvoice: r,
              renewalInvoice: a,
              isUpdate: t,
              isPrepaidPaymentSource: l,
              isTrial: s,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(N.m0, {
              renewalInvoice: a,
              priceOptions: o,
              isPrepaidPaymentSource: l,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function H(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: a,
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: f,
            premiumSubscriptionPlan: b,
            newAdditionalPlans: I,
            paymentSourceId: v,
            setPaymentSourceId: k,
            onPaymentSourceAdd: G,
        } = e,
        H = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: a,
                    newAdditionalPlans: o,
                } = e,
                c = (0, s.bG)([R.A, E.A], () => {
                    let e = R.A.getGuild(n);
                    return null != e ? e : E.A.isGuildFetching(n) ? null : E.A.getGuild(n);
                }, [n]),
                d = a.interval,
                p = a.intervalCount,
                m = (0, s.bG)([w.A], () => w.A.getForSkuAndInterval((0, L.mH)(M.pe.GUILD), d, p));
            l()(null != m, "Missing guildBoostingSubscriptionPlan");
            let h = (0, L.J$)(i.paymentSourceId),
                f = (0, y.ds)();
            t = null != r ? (0, L.Om)(r, o[0].quantity, o[0].planId) : o;
            let { analyticsLocations: b } = (0, _.Ay)(),
                [g] = (0, C.Kq)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: b,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [x] = (0, C.Kq)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: b,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, A.F0)(g),
                {
                    guild: c ?? null,
                    guildBoostingSubscriptionPlan: m,
                    isPrepaid: h,
                    isReverseTrial: f,
                    proratedInvoicePreview: g,
                    renewalInvoicePreview: x,
                    isSubscriptionUpdate: null != r,
                }
            );
        })({
            guildId: t,
            priceOptions: a,
            currentPremiumSubscription: c,
            premiumSubscriptionPlan: b,
            newAdditionalPlans: I,
        }),
        {
            isSubscriptionUpdate: Y,
            guild: Z,
            isPrepaid: z,
            isReverseTrial: J,
            proratedInvoicePreview: K,
            renewalInvoicePreview: $,
        } = H,
        q = r.useMemo(() => {
            let e = K?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(x.A.createFromCheckoutContext);
        }, [K?.checkoutContext]),
        {
            dropdownPaymentSources: X,
            giftCardsEnabled: Q,
            dropdownPaymentSourceId: ee,
            handleDropdownPaymentSourceChange: et,
            giftCardCheckboxProps: en,
        } = (0, p.Y)({
            checkoutPaymentSources: q,
            paymentSourceId: v,
            setPaymentSourceId: k,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: f,
            itemAmount: K?.total,
        }),
        ei = (0, s.bG)([P.A], () => P.A.hidePersonalInformation);
    if (null == K || null == $ || null == Z) return (0, i.jsx)(m.Ed, {});
    let er = (0, i.jsx)(W, {
            isSubscriptionUpdate: Y,
            premiumSubscription: c,
            proratedInvoicePreview: K,
            renewalInvoicePreview: $,
            isPrepaid: z,
            isReverseTrial: J,
            priceOptions: a,
        }),
        ea = (0, i.jsx)(h.nL, {
            label: U.intl.string(U.t["u+Cw58"]),
            giftCardsEnabled: Q,
            giftCardCheckboxProps: en,
            paymentSourceDropdownProps: {
                tooltipText: null == f ? null : U.intl.string(U.t.XiuuV9),
                paymentSources: X,
                selectedPaymentSourceId: ee,
                onChange: et,
                onPaymentSourceAdd: G,
                hidePersonalInformation: ei,
                shouldUseUnifiedCheckoutUI: !0,
            },
            disabled: null != f,
        }),
        el = (function (e) {
            let {
                isSubscriptionUpdate: t,
                premiumSubscriptionPlan: n,
                renewalInvoicePreview: i,
                proratedInvoicePreview: r,
                paymentSources: a,
                paymentSourceId: l,
            } = e;
            return {
                paymentSourceType: (0, S.g)(a, l),
                premiumSubscriptionPlan: n,
                renewalPrice: i.subtotal,
                totalDue: r.total,
                currency: r.currency,
                startDate: (0, N.de)({ isSubscriptionUpdate: t, currentInvoice: r, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: Y,
            premiumSubscriptionPlan: b,
            renewalInvoicePreview: $,
            proratedInvoicePreview: K,
            paymentSources: n,
            paymentSourceId: v,
        }),
        es = (0, i.jsx)(F, { ...el }),
        eo = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: a,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: c, isReverseTrial: u } = s,
                _ = n.interval,
                p = n.intervalCount,
                m = (e) => (0, T.Z)(i.invoiceItems).find((t) => M.pW.has(t.subscriptionPlanId) && e(t)),
                h = m((e) => e.amount >= 0);
            l()(null != h, "Missing guild boosting invoice item");
            let f = m((e) => e.amount < 0),
                b = null != f ? h.quantity - f.quantity : h.quantity,
                g = i.invoiceItems.filter((e) => (0, L.xq)(e.subscriptionPlanId)),
                A = g.reduce((e, t) => e + t.amount, 0),
                E = (0, C.sL)(h) * b,
                x = (0, O.$g)(E, i.currency),
                I = (0, O.CE)(x, _, p),
                v = (0, O.$g)(i.total, i.currency) + (i.currency !== j.Yr.USD ? "*" : ""),
                S = i.subtotal - E - A,
                y = h.discounts.map((e) => {
                    let t = e.amount / h.quantity;
                    return { ...e, amount: t * b };
                }),
                N = y.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN),
                R = y.find((e) => e.type === d.iS.ENTITLEMENT),
                P = h.subscriptionPlanPrice * b;
            return {
                addedQuantity: b,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: c,
                isReverseTrial: u,
                formattedGuildBoostPrice: x,
                formattedGuildBoostRate: I,
                formattedOriginalAmountGuildBoostRate: (0, O.CE)((0, O.$g)(P, i.currency), _, p),
                formattedTotal: v,
                basePlanAdjustment: A,
                basePlanInvoiceItems: g,
                guildBoostingAdjustment: S,
                subscriptionDiscount: N,
                entitlementDiscount: R,
                originalAmount: P,
                premiumSubscription: t,
                proratedInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: a,
            };
        })({
            premiumSubscription: c,
            premiumSubscriptionPlan: b,
            proratedInvoicePreview: K,
            renewalInvoicePreview: $,
            priceOptions: a,
            reviewState: H,
        }),
        ec = (0, i.jsx)(V, { ...eo }),
        ed = (function (e, t, n) {
            let {
                    addedQuantity: r,
                    guildBoostingSubscriptionPlan: a,
                    isPrepaid: l,
                    formattedGuildBoostRate: s,
                    formattedOriginalAmountGuildBoostRate: c,
                    subscriptionDiscount: d,
                } = t,
                u = null != d;
            return {
                label: U.intl.formatToPlainString(U.t.a3cAOg, {
                    numGuildSubscriptions: r,
                    planName: (0, L.Mn)(a.id, !1, l),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(g.a6, {}),
                price: s,
                PriceIcon: u ? o.t : void 0,
                priceTooltip: u ? U.intl.string(D.default.YUNJJa) : void 0,
                priceSubText: u ? c : void 0,
                bottomSubText: n?.text ?? null,
            };
        })(
            Z,
            eo,
            (function (e) {
                let { isPrepaid: t, isReverseTrial: n, premiumSubscription: i } = e;
                return !t && n && null != i ? { type: "reverseTrial", text: B(i.currentPeriodEnd) } : null;
            })({ isPrepaid: z, isReverseTrial: J, premiumSubscription: c }),
        ),
        eu = (0, i.jsx)(g.f7, { ...ed });
    return (0, i.jsx)(m.T_, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: eu,
        subscriptionDetailsContent: er,
        paymentSelectContent: ea,
        invoiceSummaryContent: ec,
        legalContent: es,
        invoiceTotalDueValue: eo.formattedTotal,
        invoiceTotalDueLabel: U.intl.string(D.default.R0cZsM),
    });
}
