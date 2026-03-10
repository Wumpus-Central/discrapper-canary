n.d(t, { Ak: () => J, pc: () => X, zT: () => $ }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(997101),
    u = n(104510),
    c = n(311907),
    o = n(397927),
    d = n(821891),
    m = n(637141),
    p = n(953689),
    I = n(155718),
    y = n(793574),
    x = n(688810),
    v = n(608805),
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
    _ = n(692440),
    R = n(71393),
    C = n(351906),
    L = n(615405),
    D = n(295405),
    M = n(97352),
    w = n(166403),
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
        onPurchaseTermsChange: l,
        premiumSubscriptionPlan: r,
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
                onChange: l,
                forceShow: !0,
                finePrint: (0, i.jsx)(d.A, {
                    subscriptionPlan: r,
                    paymentSourceType: o,
                    proratedAmount: s,
                    basePrice: a,
                    productLine: k.EZt.BOOST,
                }),
                showPricingLink: u,
                showWithdrawalWaiver: c,
                subscriptionPlan: r,
            }),
    });
}
function H(e) {
    let {
            paymentSources: t,
            paymentSourceId: n,
            premiumSubscriptionPaymentSourceId: l,
            onPaymentSourceChange: r,
            onPaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: s = !1,
        } = e,
        u = (0, c.bG)([C.A], () => C.A.hidePersonalInformation),
        o = (0, c.bG)([D.A], () => (null != l ? D.A.getPaymentSource(l) : null)),
        d = {
            label: V.intl.string(V.t["mmDvV+"]),
            selectedPaymentSourceId: n,
            hidePersonalInformation: u,
            shouldUseUnifiedCheckoutUI: s,
        },
        p =
            null != l
                ? {
                      ...d,
                      paymentSources: null != o ? [o] : [],
                      selectedPaymentSourceId: o?.id,
                      tooltipText: V.intl.string(V.t.XiuuV9),
                      dropdownLoading: null == o,
                      disabled: !0,
                  }
                : { ...d, paymentSources: Object.values(t), onChange: r, onPaymentSourceAdd: a };
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
        : (0, i.jsx)(_.wP, { proratedInvoice: t.proratedInvoicePreview, renewalInvoice: t.renewalInvoicePreview });
}
function z(e) {
    let {
            isPrepaid: t,
            formattedTotal: n,
            originalAmount: l,
            basePlanAdjustment: r,
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
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
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
                value: i ? l : r,
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
        (0 !== r &&
            m.push({
                id: "base-plan-adjustment",
                label: V.intl.formatToPlainString(V.t.ZSVged, { planName: (0, O.RH)(a[0].subscriptionPlanId) }),
                tooltip: V.intl.string(V.t.JmwQJM),
                amount: r,
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
            } = (0, T.EA)({ id: "main-line-item", amount: l, ...d }),
            r = [...e, ...m];
        return (0, i.jsx)(P.ID, {
            label: V.intl.string(W.default.eoXh7B),
            lineItems: r,
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
                        label: (0, i.jsx)(_.sw, { label: e.label, tooltipText: e.tooltip }),
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
        renewalInvoicePreview: l,
        isPrepaid: r,
        isReverseTrial: a,
        priceOptions: s,
        shouldUseUnifiedCheckoutUI: u,
    } = e;
    return null != t
        ? (0, i.jsx)(_.m0, {
              premiumSubscription: t,
              proratedInvoice: n,
              renewalInvoice: l,
              overrideRenewalDate: n.subscriptionPeriodEnd,
              isUpdate: !0,
              isPrepaidPaymentSource: r,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: u,
          })
        : (0, i.jsx)(_.m0, {
              renewalInvoice: l,
              priceOptions: s,
              isPrepaidPaymentSource: r,
              shouldUseUnifiedCheckoutUI: u,
          });
}
function X(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: r,
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
        k = (0, v.D7)({ location: "GuildBoostingReview" }),
        J = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: r,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: u,
                } = e,
                o = (0, c.bG)([R.A], () => R.A.getGuild(n), [n]);
            a()(null != o, "Missing guild");
            let d = s.interval,
                m = s.intervalCount,
                p = (0, c.bG)([M.A], () => M.A.getForSkuAndInterval((0, O.mH)(Y.pe.GUILD), d, m));
            a()(null != p, "Missing guildBoostingSubscriptionPlan");
            let I = (0, O.J$)(i.paymentSourceId),
                v = (0, c.bG)([w.A], () => w.A.inReverseTrial()),
                { setInvoicePreview: S } = (0, g.P5)(),
                f = i.paymentSourceId;
            t = null != r ? (0, O.Om)(r, u[0].quantity, u[0].planId) : u;
            let { analyticsLocations: A } = (0, x.Ay)(),
                [h] = (0, b.Kq)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P] = (0, b.Kq)({
                    subscriptionId: r?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                l.useEffect(() => {
                    S(h);
                }, [S, h]),
                {
                    guild: o,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: I,
                    isReverseTrial: v,
                    paymentSourceId: f,
                    proratedInvoicePreview: h,
                    renewalInvoicePreview: P,
                }
            );
        })({
            guildId: t,
            priceOptions: r,
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
    let el = (0, i.jsx)(Z, {
            premiumSubscription: d,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            isPrepaid: ee,
            isReverseTrial: et,
            priceOptions: r,
            shouldUseUnifiedCheckoutUI: k,
        }),
        er = (0, i.jsx)(H, {
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
                    onPurchaseTermsChange: l,
                    premiumSubscriptionPlan: r,
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
                onPurchaseTermsChange: l,
                premiumSubscriptionPlan: r,
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
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: c, isReverseTrial: o } = s,
                d = n.interval,
                m = n.intervalCount,
                p = (e) => (0, E.Z)(i.invoiceItems).find((t) => Y.pW.has(t.subscriptionPlanId) && e(t)),
                y = p((e) => e.amount >= 0);
            a()(null != y, "Missing guild boosting invoice item");
            let x = p((e) => e.amount < 0),
                v = null != x ? y.quantity - x.quantity : y.quantity,
                S = i.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                f = S.reduce((e, t) => e + t.amount, 0),
                A = (0, b.sL)(y) * v,
                g = (0, G.$g)(A, i.currency),
                h = (0, G.CE)(g, d, m),
                P = (0, G.$g)(i.total, i.currency) + (i.currency !== B.Yr.USD ? "*" : ""),
                T = i.total - A - f,
                j = y.discounts.map((e) => {
                    let t = e.amount / y.quantity;
                    return { ...e, amount: t * v };
                }),
                N = j.find((e) => e.type === I.iS.SUBSCRIPTION_PLAN),
                U = j.find((e) => e.type === I.iS.ENTITLEMENT),
                _ = y.subscriptionPlanPrice * v;
            return {
                addedQuantity: v,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: c,
                isReverseTrial: o,
                formattedGuildBoostPrice: g,
                formattedGuildBoostRate: h,
                formattedOriginalAmountGuildBoostRate: (0, G.CE)((0, G.$g)(_, i.currency), d, m),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: T,
                subscriptionDiscount: N,
                entitlementDiscount: U,
                originalAmount: _,
                premiumSubscription: t,
                proratedInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: d,
            premiumSubscriptionPlan: p,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            priceOptions: r,
            reviewState: J,
        }),
        ec = (0, i.jsx)(z, { ...eu, shouldUseUnifiedCheckoutUI: k, subscriptionInvoiceDetailsContent: el }),
        eo = (function (e) {
            let {
                isPrepaid: t,
                isReverseTrial: n,
                premiumSubscription: i,
                proratedInvoicePreview: l,
                renewalInvoicePreview: r,
            } = e;
            if (t) return null;
            if (n && null != i) return { type: "reverseTrial", text: $(i.currentPeriodEnd) };
            let a = (0, _.DK)({ proratedInvoice: l, renewalInvoice: r });
            return null == a
                ? null
                : { type: "periodReset", text: a, proratedInvoicePreview: l, renewalInvoicePreview: r };
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
                        addedQuantity: l,
                        guildBoostingSubscriptionPlan: r,
                        isPrepaid: a,
                        formattedGuildBoostRate: s,
                        formattedOriginalAmountGuildBoostRate: c,
                        subscriptionDiscount: d,
                    } = t,
                    m = null != d;
                return {
                    label: `${l} ${(0, O.Mn)(r.id, !1, a)}`,
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
            subscriptionDetailsContent: el,
            paymentSelectContent: er,
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
            (0, i.jsx)("div", { className: q.LC, children: er }),
            es,
        ],
    });
}
