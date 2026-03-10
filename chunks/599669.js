n.d(t, { Ak: () => J, pc: () => X, zT: () => $ }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(997101),
    u = n(104510),
    c = n(311907),
    o = n(397927),
    d = n(821891),
    m = n(637141),
    p = n(953689),
    I = n(155718),
    y = n(793574),
    v = n(688810),
    x = n(608805),
    S = n(69882),
    f = n(241989),
    A = n(263063),
    g = n(156312),
    h = n(534479),
    P = n(340034),
    T = n(888751),
    j = n(216641),
    b = n(543767),
    E = n(874638),
    N = n(735164),
    U = n(778307),
    R = n(692440),
    _ = n(71393),
    C = n(351906),
    L = n(615405),
    D = n(295405),
    w = n(97352),
    M = n(166403),
    O = n(927578),
    G = n(580630),
    k = n(652215),
    Y = n(788868),
    B = n(818348),
    V = n(985018),
    W = n(756366),
    q = n(843010);
function K(e) {
    let {
        hasLegalTermsFlash: t,
        legalTermsNodeRef: n,
        onPurchaseTermsChange: r,
        premiumSubscriptionPlan: l,
        basePrice: a,
        proratedAmount: s,
        showPricingLink: u,
        showWithdrawalWaiver: c,
        paymentSourceType: o,
    } = e;
    return (0, i.jsx)(U.A, {
        isActive: t,
        ref: n,
        children:
            null != a &&
            (0, i.jsx)(p.A, {
                onChange: r,
                forceShow: !0,
                finePrint: (0, i.jsx)(d.A, {
                    subscriptionPlan: l,
                    paymentSourceType: o,
                    proratedAmount: s,
                    basePrice: a,
                    productLine: k.EZt.BOOST,
                }),
                showPricingLink: u,
                showWithdrawalWaiver: c,
                subscriptionPlan: l,
            }),
    });
}
function H(e) {
    let {
            paymentSources: t,
            paymentSourceId: n,
            premiumSubscriptionPaymentSourceId: r,
            onPaymentSourceChange: l,
            onPaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: s = !1,
        } = e,
        u = (0, c.bG)([C.A], () => C.A.hidePersonalInformation),
        o = (0, c.bG)([D.A], () => (null != r ? D.A.getPaymentSource(r) : null)),
        d = {
            label: V.intl.string(V.t["mmDvV+"]),
            selectedPaymentSourceId: n,
            hidePersonalInformation: u,
            shouldUseUnifiedCheckoutUI: s,
        },
        p =
            null != r
                ? {
                      ...d,
                      paymentSources: null != o ? [o] : [],
                      selectedPaymentSourceId: o?.id,
                      tooltipText: V.intl.string(V.t.XiuuV9),
                      dropdownLoading: null == o,
                      disabled: !0,
                  }
                : { ...d, paymentSources: Object.values(t), onChange: l, onPaymentSourceAdd: a };
    return (0, i.jsx)(m.A, { ...p });
}
function $(e) {
    return V.intl.format(V.t.IeaYqg, { endDate: e });
}
function J(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: q.bU }),
            (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: q.b7, children: t }),
            (0, i.jsx)("div", { className: q.bU }),
        ],
    });
}
function F(e) {
    let { notice: t } = e;
    return "reverseTrial" === t.type
        ? (0, i.jsx)(J, { text: t.text, className: q.jk })
        : (0, i.jsx)(R.wP, { proratedInvoice: t.proratedInvoicePreview, renewalInvoice: t.renewalInvoicePreview });
}
function z(e) {
    let {
            isPrepaid: t,
            formattedTotal: n,
            originalAmount: r,
            basePlanAdjustment: l,
            basePlanInvoiceItems: a,
            guildBoostingAdjustment: s,
            proratedInvoicePreview: u,
            shouldUseUnifiedCheckoutUI: c,
            subscriptionInvoiceDetailsContent: o,
        } = e,
        d = ((e) => {
            let {
                addedQuantity: t,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: l,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                proratedInvoicePreview: c,
            } = e;
            return {
                label: V.intl.formatToPlainString(V.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, O.Mn)(n.id, !1, i),
                }),
                value: i ? r : l,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                currency: c.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        m = [];
    if (
        (0 !== l &&
            m.push({
                id: "base-plan-adjustment",
                label: V.intl.formatToPlainString(V.t.ZSVged, { planName: (0, O.RH)(a[0].subscriptionPlanId) }),
                tooltip: V.intl.string(V.t.JmwQJM),
                amount: l,
            }),
        0 !== s &&
            m.push({
                id: "guild-boosting-adjustment",
                label: V.intl.string(V.t["+as5ZZ"]),
                tooltip: V.intl.string(V.t.JmwQJM),
                amount: s,
            }),
        c)
    ) {
        let {
                lineItems: e,
                hasSubscriptionCredit: t,
                currency: n,
            } = (0, T.EA)({ id: "main-line-item", amount: r, ...d }),
            l = [...e, ...m];
        return (0, i.jsx)(P.ID, {
            label: V.intl.string(W.default.eoXh7B),
            lineItems: l,
            currency: n,
            hasSubscriptionCredit: t,
        });
    }
    return (0, i.jsxs)(N.Yx, {
        children: [
            (0, i.jsx)(N.Xd, { children: V.intl.string(V.t.CWIwms) }),
            (0, i.jsx)(N.f0, { ...d }),
            m.map((e) =>
                (0, i.jsx)(
                    N.oR,
                    {
                        label: (0, i.jsx)(R.sw, { label: e.label, tooltipText: e.tooltip }),
                        value: (0, G.$g)(e.amount, u.currency),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(N.pK, {}),
            (0, i.jsx)(N.Sd, {
                label: V.intl.format(u.taxInclusive ? (t ? V.t.BqdxQt : V.t.XH4raN) : V.t.RUI48E, {}),
                value: n,
            }),
            o,
        ],
    });
}
function Z(e) {
    let {
        premiumSubscription: t,
        proratedInvoicePreview: n,
        renewalInvoicePreview: r,
        isPrepaid: l,
        isReverseTrial: a,
        priceOptions: s,
        shouldUseUnifiedCheckoutUI: u,
    } = e;
    return null != t
        ? (0, i.jsx)(R.m0, {
              premiumSubscription: t,
              proratedInvoice: n,
              renewalInvoice: r,
              overrideRenewalDate: n.subscriptionPeriodEnd,
              isUpdate: !0,
              isPrepaidPaymentSource: l,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: u,
          })
        : (0, i.jsx)(R.m0, {
              renewalInvoice: r,
              priceOptions: s,
              isPrepaidPaymentSource: l,
              overrideRenewalDate: r.subscriptionPeriodEnd,
              shouldUseUnifiedCheckoutUI: u,
          });
}
function X(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: d,
            premiumSubscriptionPaymentSourceId: m,
            premiumSubscriptionPlan: p,
            newAdditionalPlans: P,
            onPaymentSourceChange: T,
            onPaymentSourceAdd: N,
            onPurchaseTermsChange: U,
            legalTermsNodeRef: C,
            hasLegalTermsFlash: D,
        } = e,
        k = (0, x.D7)({ location: "GuildBoostingReview" }),
        J = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: u,
                } = e,
                o = (0, c.bG)([_.A], () => _.A.getGuild(n), [n]);
            a()(null != o, "Missing guild");
            let d = s.interval,
                m = s.intervalCount,
                p = (0, c.bG)([w.A], () => w.A.getForSkuAndInterval((0, O.mH)(Y.pe.GUILD), d, m));
            a()(null != p, "Missing guildBoostingSubscriptionPlan");
            let I = (0, O.J$)(i.paymentSourceId),
                x = (0, c.bG)([M.A], () => M.A.inReverseTrial()),
                { setInvoicePreview: S } = (0, g.P5)(),
                f = i.paymentSourceId;
            t = null != l ? (0, O.Om)(l, u[0].quantity, u[0].planId) : u;
            let { analyticsLocations: A } = (0, v.Ay)(),
                [h] = (0, b.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P] = (0, b.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                r.useEffect(() => {
                    S(h);
                }, [S, h]),
                {
                    guild: o,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: I,
                    isReverseTrial: x,
                    paymentSourceId: f,
                    proratedInvoicePreview: h,
                    renewalInvoicePreview: P,
                }
            );
        })({
            guildId: t,
            priceOptions: l,
            currentPremiumSubscription: d,
            premiumSubscriptionPlan: p,
            newAdditionalPlans: P,
        }),
        {
            guild: X,
            paymentSourceId: Q,
            isPrepaid: ee,
            isReverseTrial: et,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
        } = J;
    if (null == en || null == ei) return k ? (0, i.jsx)(S.Ed, {}) : (0, i.jsx)(h.A, {});
    let er = (0, i.jsx)(Z, {
            premiumSubscription: d,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            isPrepaid: ee,
            isReverseTrial: et,
            priceOptions: l,
            shouldUseUnifiedCheckoutUI: k,
        }),
        el = (0, i.jsx)(H, {
            paymentSources: n,
            paymentSourceId: Q,
            premiumSubscriptionPaymentSourceId: m,
            onPaymentSourceChange: T,
            onPaymentSourceAdd: N,
            shouldUseUnifiedCheckoutUI: k,
        }),
        ea = (function (e) {
            let t,
                {
                    hasLegalTermsFlash: n,
                    legalTermsNodeRef: i,
                    onPurchaseTermsChange: r,
                    premiumSubscriptionPlan: l,
                    renewalInvoicePreview: a,
                    proratedInvoicePreview: u,
                    paymentSources: c,
                    paymentSourceId: o,
                } = e,
                d = (0, j.g)(c, o);
            null != a && (t = { amount: a.subtotal, currency: a.currency, tax: a.tax, taxInclusive: !1 });
            let m = s.M.EEA_COUNTRIES.has(L.A.ipCountryCodeWithFallback);
            return {
                hasLegalTermsFlash: n,
                legalTermsNodeRef: i,
                onPurchaseTermsChange: r,
                premiumSubscriptionPlan: l,
                basePrice: t,
                proratedAmount: null != u ? u.total : void 0,
                showPricingLink: (u?.currency ?? B.Yr.USD) !== B.Yr.USD,
                showWithdrawalWaiver: m,
                paymentSourceType: d,
            };
        })({
            hasLegalTermsFlash: D,
            legalTermsNodeRef: C,
            onPurchaseTermsChange: U,
            premiumSubscriptionPlan: p,
            renewalInvoicePreview: ei,
            proratedInvoicePreview: en,
            paymentSources: n,
            paymentSourceId: Q,
        }),
        es = (0, i.jsx)(K, { ...ea }),
        eu = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: l,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: c, isReverseTrial: o } = s,
                d = n.interval,
                m = n.intervalCount,
                p = (e) => (0, E.Z)(i.invoiceItems).find((t) => Y.pW.has(t.subscriptionPlanId) && e(t)),
                y = p((e) => e.amount >= 0);
            a()(null != y, "Missing guild boosting invoice item");
            let v = p((e) => e.amount < 0),
                x = null != v ? y.quantity - v.quantity : y.quantity,
                S = i.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                f = S.reduce((e, t) => e + t.amount, 0),
                A = (0, b.sL)(y) * x,
                g = (0, G.$g)(A, i.currency),
                h = (0, G.CE)(g, d, m),
                P = (0, G.$g)(i.total, i.currency) + (i.currency !== B.Yr.USD ? "*" : ""),
                T = i.total - A - f,
                j = y.discounts.map((e) => {
                    let t = e.amount / y.quantity;
                    return { ...e, amount: t * x };
                }),
                N = j.find((e) => e.type === I.iS.SUBSCRIPTION_PLAN),
                U = j.find((e) => e.type === I.iS.ENTITLEMENT),
                R = y.subscriptionPlanPrice * x;
            return {
                addedQuantity: x,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: c,
                isReverseTrial: o,
                formattedGuildBoostPrice: g,
                formattedGuildBoostRate: h,
                formattedOriginalAmountGuildBoostRate: (0, G.CE)((0, G.$g)(R, i.currency), d, m),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: T,
                subscriptionDiscount: N,
                entitlementDiscount: U,
                originalAmount: R,
                premiumSubscription: t,
                proratedInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: l,
            };
        })({
            premiumSubscription: d,
            premiumSubscriptionPlan: p,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            priceOptions: l,
            reviewState: J,
        }),
        ec = (0, i.jsx)(z, { ...eu, shouldUseUnifiedCheckoutUI: k, subscriptionInvoiceDetailsContent: er }),
        eo = (function (e) {
            let {
                isPrepaid: t,
                isReverseTrial: n,
                premiumSubscription: i,
                proratedInvoicePreview: r,
                renewalInvoicePreview: l,
            } = e;
            if (t) return null;
            if (n && null != i) return { type: "reverseTrial", text: $(i.currentPeriodEnd) };
            let a = (0, R.DK)({ proratedInvoice: r, renewalInvoice: l });
            return null == a
                ? null
                : { type: "periodReset", text: a, proratedInvoicePreview: r, renewalInvoicePreview: l };
        })({
            isPrepaid: ee,
            isReverseTrial: et,
            premiumSubscription: d,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
        });
    if (k) {
        let e = (function (e, t, n) {
                let {
                        addedQuantity: r,
                        guildBoostingSubscriptionPlan: l,
                        isPrepaid: a,
                        formattedGuildBoostRate: s,
                        formattedOriginalAmountGuildBoostRate: c,
                        subscriptionDiscount: d,
                    } = t,
                    m = null != d;
                return {
                    label: `${r} ${(0, O.Mn)(l.id, !1, a)}`,
                    description: V.intl.format(W.default["8imbq5"], {
                        guildName: e.name,
                        guildIcon: () =>
                            (0, i.jsx)(A.Ay, {
                                guild: e,
                                size: A.Ay.Sizes.SMOL,
                                style: { display: "inline-flex", verticalAlign: "middle" },
                            }),
                    }),
                    graphic: (0, i.jsx)(u._, {}),
                    price: s,
                    PriceIcon: m ? o.tvc : void 0,
                    priceTooltip: m ? V.intl.string(W.default.YUNJJa) : void 0,
                    priceSubText: m ? c : void 0,
                    bottomSubText: n?.text ?? null,
                };
            })(X, eu, eo),
            t = (0, i.jsx)(f.f7, { ...e });
        return (0, i.jsx)(S.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: t,
            subscriptionDetailsContent: er,
            paymentSelectContent: el,
            invoiceSummaryContent: ec,
            legalContent: es,
            invoiceTotalDueValue: eu.formattedTotal,
            invoiceTotalDueLabel: V.intl.string(W.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != eo && (0, i.jsx)(F, { notice: eo }),
            ec,
            (0, i.jsx)("div", { className: q.LC, children: el }),
            es,
        ],
    });
}
