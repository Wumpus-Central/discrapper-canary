t.d(n, { Ak: () => F, pc: () => Y, zT: () => B }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(311907),
    o = t(403581),
    c = t(834730),
    u = t(155718),
    d = t(793574),
    p = t(688810),
    m = t(918022),
    _ = t(69882),
    f = t(93159),
    h = t(596034),
    g = t(270537),
    S = t(241989),
    x = t(94420),
    b = t(958340),
    I = t(826469),
    E = t(908419),
    A = t(888751),
    y = t(216641),
    P = t(543767),
    N = t(874638),
    v = t(881489),
    C = t(692440),
    T = t(71393),
    j = t(351906),
    M = t(97352),
    L = t(927578),
    R = t(580630),
    D = t(788868),
    U = t(818348),
    w = t(985018),
    k = t(327105),
    O = t(7921);
function G(e) {
    let {
            paymentSourceType: n,
            premiumSubscriptionPlan: t,
            renewalPrice: l,
            totalDue: r,
            currency: s,
            startDate: a,
        } = e,
        { immediateDelivery: o } = (0, E.U)();
    return (0, i.jsx)(h._, {
        variant: {
            type: h.I.Subscription,
            purchaseButtonText: w.intl.string(w.t.eUEeCt),
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
function B(e) {
    return w.intl.format(w.t.IeaYqg, { endDate: e });
}
function F(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: O.bU }),
            (0, i.jsx)(c.E, { variant: "text-sm/normal", className: O.b7, children: n }),
            (0, i.jsx)("div", { className: O.bU }),
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
                label: w.intl.formatToPlainString(w.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, L.Mn)(t.id, !1, i),
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
            label: w.intl.formatToPlainString(w.t.ZSVged, { planName: (0, L.RH)(l[0].subscriptionPlanId) }),
            tooltip: w.intl.string(w.t.JmwQJM),
            amount: t,
            lineItemType: "adjustment",
        }),
        0 !== r &&
            o.push({
                id: "guild-boosting-adjustment",
                label: w.intl.string(w.t["+as5ZZ"]),
                tooltip: w.intl.string(w.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== s.tax && o.push({ id: "tax", label: w.intl.string(w.t.jiRvC7), amount: s.tax, lineItemType: "tax" });
    let { lineItems: c, currency: u } = (0, A.EA)({ id: "main-line-item", amount: n, ...a }),
        d = [...c, ...o];
    return (0, i.jsx)(g.Vm, { defaultExpanded: !0, label: w.intl.string(k.default.eoXh7B), lineItems: d, currency: u });
}
function V(e) {
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
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: h,
            premiumSubscriptionPlan: g,
            newAdditionalPlans: E,
            paymentSourceId: A,
            setPaymentSourceId: O,
            onPaymentSourceAdd: F,
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
                c = (0, a.bG)([T.A, b.A], () => {
                    let e = T.A.getGuild(t);
                    return null != e ? e : b.A.isGuildFetching(t) ? null : b.A.getGuild(t);
                }, [t]),
                u = r.interval,
                m = r.intervalCount,
                _ = (0, a.bG)([M.A], () => M.A.getForSkuAndInterval((0, L.mH)(D.pe.GUILD), u, m));
            s()(null != _, "Missing guildBoostingSubscriptionPlan");
            let f = (0, L.J$)(i.paymentSourceId),
                h = (0, v.ds)();
            n = null != l ? (0, L.Om)(l, o[0].quantity, o[0].planId) : o;
            let { analyticsLocations: g } = (0, p.Ay)(),
                [S] = (0, P.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: d.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [I] = (0, P.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: i.paymentSourceId,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: d.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, x.F0)(S),
                {
                    guild: c ?? null,
                    guildBoostingSubscriptionPlan: _,
                    isPrepaid: f,
                    isReverseTrial: h,
                    proratedInvoicePreview: S,
                    renewalInvoicePreview: I,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: r,
            currentPremiumSubscription: c,
            premiumSubscriptionPlan: g,
            newAdditionalPlans: E,
        }),
        {
            isSubscriptionUpdate: H,
            guild: z,
            isPrepaid: K,
            isReverseTrial: q,
            proratedInvoicePreview: J,
            renewalInvoicePreview: $,
        } = Y,
        Q = l.useMemo(() => {
            let e = J?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(I.A.createFromCheckoutContext);
        }, [J?.checkoutContext]),
        {
            dropdownPaymentSources: X,
            giftCardsEnabled: Z,
            dropdownPaymentSourceId: ee,
            handleDropdownPaymentSourceChange: en,
            giftCardCheckboxProps: et,
        } = (0, m.Y)({
            checkoutPaymentSources: Q,
            paymentSourceId: A,
            setPaymentSourceId: O,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: h,
            itemAmount: J?.total,
        }),
        ei = (0, a.bG)([j.A], () => j.A.hidePersonalInformation);
    if (null == J || null == $ || null == z) return (0, i.jsx)(_.Ed, {});
    let el = (0, i.jsx)(V, {
            isSubscriptionUpdate: H,
            premiumSubscription: c,
            proratedInvoicePreview: J,
            renewalInvoicePreview: $,
            isPrepaid: K,
            isReverseTrial: q,
            priceOptions: r,
        }),
        er = (0, i.jsx)(f.nL, {
            label: w.intl.string(w.t["u+Cw58"]),
            giftCardsEnabled: Z,
            giftCardCheckboxProps: et,
            paymentSourceDropdownProps: {
                tooltipText: null == h ? null : w.intl.string(w.t.XiuuV9),
                paymentSources: X,
                selectedPaymentSourceId: ee,
                onChange: en,
                onPaymentSourceAdd: F,
                hidePersonalInformation: ei,
                shouldUseUnifiedCheckoutUI: !0,
            },
            disabled: null != h,
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
            isSubscriptionUpdate: H,
            premiumSubscriptionPlan: g,
            renewalInvoicePreview: $,
            proratedInvoicePreview: J,
            paymentSources: t,
            paymentSourceId: A,
        }),
        ea = (0, i.jsx)(G, { ...es }),
        eo = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: c, isReverseTrial: d } = a,
                p = t.interval,
                m = t.intervalCount,
                _ = (e) => (0, N.Z)(i.invoiceItems).find((n) => D.pW.has(n.subscriptionPlanId) && e(n)),
                f = _((e) => e.amount >= 0);
            s()(null != f, "Missing guild boosting invoice item");
            let h = _((e) => e.amount < 0),
                g = null != h ? f.quantity - h.quantity : f.quantity,
                S = i.invoiceItems.filter((e) => (0, L.xq)(e.subscriptionPlanId)),
                x = S.reduce((e, n) => e + n.amount, 0),
                b = (0, P.sL)(f) * g,
                I = (0, R.$g)(b, i.currency),
                E = (0, R.CE)(I, p, m),
                A = (0, R.$g)(i.total, i.currency) + (i.currency !== U.Yr.USD ? "*" : ""),
                y = i.subtotal - b - x,
                v = f.discounts.map((e) => {
                    let n = e.amount / f.quantity;
                    return { ...e, amount: n * g };
                }),
                C = v.find((e) => e.type === u.iS.SUBSCRIPTION_PLAN),
                T = v.find((e) => e.type === u.iS.ENTITLEMENT),
                j = f.subscriptionPlanPrice * g;
            return {
                addedQuantity: g,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: c,
                isReverseTrial: d,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: E,
                formattedOriginalAmountGuildBoostRate: (0, R.CE)((0, R.$g)(j, i.currency), p, m),
                formattedTotal: A,
                basePlanAdjustment: x,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: y,
                subscriptionDiscount: C,
                entitlementDiscount: T,
                originalAmount: j,
                premiumSubscription: n,
                proratedInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: c,
            premiumSubscriptionPlan: g,
            proratedInvoicePreview: J,
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
                label: w.intl.formatToPlainString(w.t.a3cAOg, {
                    numGuildSubscriptions: l,
                    planName: (0, L.Mn)(r.id, !1, s),
                }),
                target: { type: "boost", guild: e },
                graphic: (0, i.jsx)(S.a6, {}),
                price: a,
                PriceIcon: d ? o.t : void 0,
                priceTooltip: d ? w.intl.string(k.default.YUNJJa) : void 0,
                priceSubText: d ? c : void 0,
                bottomSubText: t?.text ?? null,
            };
        })(
            z,
            eo,
            (function (e) {
                let { isPrepaid: n, isReverseTrial: t, premiumSubscription: i } = e;
                return !n && t && null != i ? { type: "reverseTrial", text: B(i.currentPeriodEnd) } : null;
            })({ isPrepaid: K, isReverseTrial: q, premiumSubscription: c }),
        ),
        ed = (0, i.jsx)(S.f7, { ...eu });
    return (0, i.jsx)(_.T_, {
        shouldShowGlobalNotices: !0,
        purchaseItemContent: ed,
        subscriptionDetailsContent: el,
        paymentSelectContent: er,
        invoiceSummaryContent: ec,
        legalContent: ea,
        invoiceTotalDueValue: eo.formattedTotal,
        invoiceTotalDueLabel: w.intl.string(k.default.R0cZsM),
    });
}
