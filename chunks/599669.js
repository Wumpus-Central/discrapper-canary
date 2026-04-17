t.d(n, { Ak: () => B, pc: () => Y, zT: () => G }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(311907),
    o = t(397927),
    c = t(155718),
    u = t(793574),
    d = t(688810),
    p = t(918022),
    m = t(69882),
    _ = t(93159),
    f = t(596034),
    S = t(270537),
    x = t(241989),
    g = t(94420),
    b = t(958340),
    h = t(826469),
    I = t(908419),
    E = t(888751),
    y = t(216641),
    P = t(543767),
    A = t(874638),
    N = t(881489),
    C = t(692440),
    v = t(71393),
    T = t(351906),
    j = t(97352),
    M = t(927578),
    L = t(580630),
    R = t(788868),
    D = t(818348),
    U = t(985018),
    k = t(327105),
    w = t(7921);
function O(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: o } = (0, I.U)();
    return (0, i.jsx)(f._, {
        variant: {
            type: f.I.Subscription,
            purchaseButtonText: U.intl.string(U.t.eUEeCt),
            totalDue: r,
            renewalPrice: l,
            currency: s,
            interval: t.interval,
            intervalCount: t.intervalCount,
            startDate: a,
        },
        paymentSourceType: n,
        immediateDelivery: o,
    });
}
function G(e) {
    return U.intl.format(U.t.IeaYqg, { endDate: e });
}
function B(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: w.bU }),
            (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: w.b7, children: n }),
            (0, i.jsx)("div", { className: w.bU }),
        ],
    });
}
function W(e) {
    let {
            originalAmount: n,
            basePlanAdjustment: t,
            basePlanInvoiceItems: l,
            guildBoostingAdjustment: r,
            proratedInvoicePreview: s,
        } = e,
        a = ((e) => {
            let {
                addedQuantity: n,
                guildBoostingSubscriptionPlan: t,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: o,
                proratedInvoicePreview: c,
            } = e;
            return {
                label: U.intl.formatToPlainString(U.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, M.Mn)(t.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: o,
                currency: c.currency,
                interval: t.interval,
                intervalCount: t.intervalCount,
            };
        })(e),
        o = [];
    0 !== t &&
        o.push({
            id: "base-plan-adjustment",
            label: U.intl.formatToPlainString(U.t.ZSVged, { planName: (0, M.RH)(l[0].subscriptionPlanId) }),
            tooltip: U.intl.string(U.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: U.intl.string(U.t["+as5ZZ"]),
                tooltip: U.intl.string(U.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== s.tax && o.push({ id: "tax", label: U.intl.string(U.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: c, currency: u } = (0, E.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...c, ...o];
    return (0, i.jsx)(S.Vm, { defaultExpanded: !0, label: U.intl.string(k.default.eoXh7B), lineItems: d, currency: u });
}
function F(e) {
    let {
        isSubscriptionUpdate: n,
        premiumSubscription: t,
        proratedInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: o,
    } = e;
    return null != t
        ? (0, i.jsx)(C.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: n,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: !0,
          })
        : (0, i.jsx)(C.m0, {
              renewalInvoice: r,
              priceOptions: o,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: !0,
          });
}
function Y(e) {
    let {
            guildId: n,
            paymentSources: t,
            priceOptions: r,
            currentPremiumSubscription: f,
            premiumSubscriptionPaymentSourceId: S,
            premiumSubscriptionPlan: I,
            newAdditionalPlans: E,
            setPaymentSourceId: w,
            onPaymentSourceAdd: B,
        } = e,
        Y = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: r,
                    newAdditionalPlans: o,
                } = e,
                c = (0, a.bG)([v.A, b.A], () => {
                    let e = v.A.getGuild(t);
                    return null != e ? e : b.A.isGuildFetching(t) ? null : b.A.getGuild(t);
                }, [t]),
                p = r.interval,
                m = r.intervalCount,
                _ = (0, a.bG)([j.A], () => j.A.getForSkuAndInterval((0, M.mH)(R.pe.GUILD), p, m));
            s()(null != _, "Missing guildBoostingSubscriptionPlan");
            let f = (0, M.J$)(i.paymentSourceId),
                S = (0, N.ds)(),
                x = i.paymentSourceId;
            n = null != l ? (0, M.Om)(l, o[0].quantity, o[0].planId) : o;
            let { analyticsLocations: h } = (0, d.Ay)(),
                [I] = (0, P.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: x,
                    currency: i.currency,
                    analyticsLocations: h,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [E] = (0, P.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: x,
                    currency: i.currency,
                    analyticsLocations: h,
                    analyticsLocation: u.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, g.F0)(I),
                {
                    guild: c ?? null,
                    guildBoostingSubscriptionPlan: _,
                    isPrepaid: f,
                    isReverseTrial: S,
                    paymentSourceId: x,
                    proratedInvoicePreview: I,
                    renewalInvoicePreview: E,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: r,
            currentPremiumSubscription: f,
            premiumSubscriptionPlan: I,
            newAdditionalPlans: E,
        }),
        {
            isSubscriptionUpdate: V,
            guild: H,
            paymentSourceId: z,
            isPrepaid: K,
            isReverseTrial: J,
            proratedInvoicePreview: q,
            renewalInvoicePreview: $,
        } = Y,
        Q = l.useMemo(() => {
            let e = q?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(h.A.createFromCheckoutContext);
        }, [q?.checkoutContext]),
        {
            dropdownPaymentSources: X,
            giftCardsEnabled: Z,
            dropdownPaymentSourceId: ee,
            handleDropdownPaymentSourceChange: en,
            giftCardCheckboxProps: et,
        } = (0, p.Y)({
            checkoutPaymentSources: Q,
            setPaymentSourceId: w,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: S,
            itemAmount: q?.total,
        }),
        ei = (0, a.bG)([T.A], () => T.A.hidePersonalInformation);
    if (null == q || null == $ || null == H) return (0, i.jsx)(m.Ed, {});
    let el = (0, i.jsx)(F, {
            isSubscriptionUpdate: V,
            premiumSubscription: f,
            proratedInvoicePreview: q,
            renewalInvoicePreview: $,
            isPrepaid: K,
            isReverseTrial: J,
            priceOptions: r,
        }),
        er = (0, i.jsx)(_.nL, {
            label: U.intl.string(U.t["u+Cw58"]),
            giftCardsEnabled: Z,
            giftCardCheckboxProps: et,
            paymentSourceDropdownProps: {
                paymentSources: X,
                selectedPaymentSourceId: ee,
                onChange: en,
                onPaymentSourceAdd: B,
                hidePersonalInformation: ei,
                shouldUseUnifiedCheckoutUI: !0,
            },
            disabled: null != S,
        }),
        es = (function (e) {
            let {
                isSubscriptionUpdate: n,
                premiumSubscriptionPlan: t,
                renewalInvoicePreview: i,
                proratedInvoicePreview: l,
                paymentSources: r,
                paymentSourceId: s,
            } = e;
            return {
                paymentSourceType: (0, y.g)(r, s),
                premiumSubscriptionPlan: t,
                renewalPrice: i.subtotal,
                totalDue: l.total,
                currency: l.currency,
                startDate: (0, C.de)({ isSubscriptionUpdate: n, currentInvoice: l, renewalInvoice: i }),
            };
        })({
            isSubscriptionUpdate: V,
            premiumSubscriptionPlan: I,
            renewalInvoicePreview: $,
            proratedInvoicePreview: q,
            paymentSources: t,
            paymentSourceId: z,
        }),
        ea = (0, i.jsx)(O, { ...es }),
        eo = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: u, isReverseTrial: d } = a,
                p = t.interval,
                m = t.intervalCount,
                _ = (e) => (0, A.Z)(i.invoiceItems).find((n) => R.pW.has(n.subscriptionPlanId) && e(n)),
                f = _((e) => e.amount >= 0);
            s()(null != f, "Missing guild boosting invoice item");
            let S = _((e) => e.amount < 0),
                x = null != S ? f.quantity - S.quantity : f.quantity,
                g = i.invoiceItems.filter((e) => (0, M.xq)(e.subscriptionPlanId)),
                b = g.reduce((e, n) => e + n.amount, 0),
                h = (0, P.sL)(f) * x,
                I = (0, L.$g)(h, i.currency),
                E = (0, L.CE)(I, p, m),
                y = (0, L.$g)(i.total, i.currency) + (i.currency !== D.Yr.USD ? "*" : ""),
                N = i.subtotal - h - b,
                C = f.discounts.map((e) => {
                    let n = e.amount / f.quantity;
                    return { ...e, amount: n * x };
                }),
                v = C.find((e) => e.type === c.iS.SUBSCRIPTION_PLAN),
                T = C.find((e) => e.type === c.iS.ENTITLEMENT),
                j = f.subscriptionPlanPrice * x;
            return {
                addedQuantity: x,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: u,
                isReverseTrial: d,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: E,
                formattedOriginalAmountGuildBoostRate: (0, L.CE)((0, L.$g)(j, i.currency), p, m),
                formattedTotal: y,
                basePlanAdjustment: b,
                basePlanInvoiceItems: g,
                guildBoostingAdjustment: N,
                subscriptionDiscount: v,
                entitlementDiscount: T,
                originalAmount: j,
                premiumSubscription: n,
                proratedInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: f,
            premiumSubscriptionPlan: I,
            proratedInvoicePreview: q,
            renewalInvoicePreview: $,
            priceOptions: r,
            reviewState: Y,
        }),
        ec = (0, i.jsx)(W, { ...eo }),
        eu = (function (e, n, t) {
            let {
                    addedQuantity: l,
                    guildBoostingSubscriptionPlan: r,
                    isPrepaid: s,
                    formattedGuildBoostRate: a,
                    formattedOriginalAmountGuildBoostRate: c,
                    subscriptionDiscount: u,
                } = n,
                d = null != u;
            return {
                label: U.intl.formatToPlainString(U.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, M.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(x.a6, {}),
                price: a,
                PriceIcon: d ? o.tvc : void 0,
                priceTooltip: d ? U.intl.string(k.default.YUNJJa) : void 0,
                priceSubText: d ? c : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            H,
            eo,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: G(i.currentPeriodEnd) } : null;
            })({ isPrepaid: K, isReverseTrial: J, premiumSubscription: f }),
        ),
        ed = (0, i.jsx)(x.f7, { ...eu });
    return (0, i.jsx)(m.rg, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: ed,
        subscriptionDetailsContent: el,
        paymentSelectContent: er,
        invoiceSummaryContent: ec,
        legalContent: ea,
        invoiceTotalDueValue: eo.formattedTotal,
        invoiceTotalDueLabel: U.intl.string(k.default.R0cZsM),
    });
}
