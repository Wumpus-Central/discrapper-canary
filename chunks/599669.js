n.d(t, { Ak: () => F, pc: () => X, zT: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(997101),
    u = n(311907),
    o = n(397927),
    c = n(821891),
    d = n(637141),
    m = n(953689),
    p = n(155718),
    y = n(793574),
    I = n(688810),
    v = n(608805),
    x = n(69882),
    S = n(596034),
    f = n(241989),
    g = n(156312),
    A = n(534479),
    h = n(908419),
    P = n(340034),
    T = n(888751),
    b = n(216641),
    j = n(543767),
    E = n(874638),
    N = n(735164),
    U = n(778307),
    C = n(692440),
    R = n(71393),
    _ = n(351906),
    D = n(615405),
    L = n(295405),
    w = n(97352),
    M = n(166403),
    O = n(927578),
    G = n(580630),
    k = n(652215),
    B = n(788868),
    V = n(818348),
    Y = n(985018),
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
            showWithdrawalWaiver: o,
            paymentSourceType: d,
            shouldUseUnifiedCheckoutUI: p,
            renewalPrice: y,
            totalDue: I,
            currency: v,
            startDate: x,
        } = e,
        { immediateDelivery: f } = (0, h.U)();
    return p
        ? (0, i.jsx)(S._, {
              variant: {
                  type: S.I.Subscription,
                  purchaseButtonText: Y.intl.string(Y.t.eUEeCt),
                  totalDue: I,
                  renewalPrice: y,
                  currency: v,
                  interval: l.interval,
                  intervalCount: l.intervalCount,
                  startDate: x,
              },
              paymentSourceType: d,
              immediateDelivery: f,
          })
        : (0, i.jsx)(U.A, {
              isActive: t,
              ref: n,
              children:
                  null != a &&
                  (0, i.jsx)(m.A, {
                      onChange: r,
                      forceShow: !0,
                      finePrint: (0, i.jsx)(c.A, {
                          subscriptionPlan: l,
                          paymentSourceType: d,
                          proratedAmount: s,
                          basePrice: a,
                          productLine: k.EZt.BOOST,
                      }),
                      showPricingLink: u,
                      showWithdrawalWaiver: o,
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
        o = (0, u.bG)([_.A], () => _.A.hidePersonalInformation),
        c = (0, u.bG)([L.A], () => (null != r ? L.A.getPaymentSource(r) : null)),
        m = {
            label: Y.intl.string(Y.t["mmDvV+"]),
            selectedPaymentSourceId: n,
            hidePersonalInformation: o,
            shouldUseUnifiedCheckoutUI: s,
        },
        p =
            null != r
                ? {
                      ...m,
                      paymentSources: null != c ? [c] : [],
                      selectedPaymentSourceId: c?.id,
                      tooltipText: Y.intl.string(Y.t.XiuuV9),
                      dropdownLoading: null == c,
                      disabled: !0,
                  }
                : { ...m, paymentSources: Object.values(t), onChange: l, onPaymentSourceAdd: a };
    return (0, i.jsx)(d.A, { ...p });
}
function J(e) {
    return Y.intl.format(Y.t.IeaYqg, { endDate: e });
}
function F(e) {
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
function $(e) {
    let { notice: t } = e;
    return "reverseTrial" === t.type
        ? (0, i.jsx)(F, { text: t.text, className: q.jk })
        : (0, i.jsx)(C.wP, { proratedInvoice: t.proratedInvoicePreview, renewalInvoice: t.renewalInvoicePreview });
}
function Z(e) {
    let {
            isPrepaid: t,
            formattedTotal: n,
            originalAmount: r,
            basePlanAdjustment: l,
            basePlanInvoiceItems: a,
            guildBoostingAdjustment: s,
            proratedInvoicePreview: u,
            shouldUseUnifiedCheckoutUI: o,
            subscriptionInvoiceDetailsContent: c,
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
                proratedInvoicePreview: o,
            } = e;
            return {
                label: Y.intl.formatToPlainString(Y.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, O.Mn)(n.id, !1, i),
                }),
                value: i ? r : l,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                currency: o.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(e),
        m = [];
    if (
        (0 !== l &&
            m.push({
                id: "base-plan-adjustment",
                label: Y.intl.formatToPlainString(Y.t.ZSVged, { planName: (0, O.RH)(a[0].subscriptionPlanId) }),
                tooltip: Y.intl.string(Y.t.JmwQJM),
                amount: l,
                lineItemType: "adjustment",
            }),
        0 !== s &&
            m.push({
                id: "guild-boosting-adjustment",
                label: Y.intl.string(Y.t["+as5ZZ"]),
                tooltip: Y.intl.string(Y.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== u.tax && m.push({ id: "tax", label: Y.intl.string(Y.t.jiRvC7), amount: u.tax, lineItemType: "tax" }),
        o)
    ) {
        let {
                lineItems: e,
                hasSubscriptionCredit: t,
                currency: n,
            } = (0, T.EA)({ id: "main-line-item", amount: r, ...d }),
            l = [...e, ...m];
        return (0, i.jsx)(P.ID, {
            label: Y.intl.string(W.default.eoXh7B),
            lineItems: l,
            currency: n,
            hasSubscriptionCredit: t,
        });
    }
    return (0, i.jsxs)(N.Yx, {
        children: [
            (0, i.jsx)(N.Xd, { children: Y.intl.string(Y.t.CWIwms) }),
            (0, i.jsx)(N.f0, { ...d }),
            m.map((e) =>
                (0, i.jsx)(
                    N.oR,
                    {
                        label: (0, i.jsx)(C.sw, { label: e.label, tooltipText: e.tooltip ?? void 0 }),
                        value: (0, G.$g)(e.amount, u.currency),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(N.pK, {}),
            (0, i.jsx)(N.Sd, {
                label: Y.intl.format(u.taxInclusive ? (t ? Y.t.BqdxQt : Y.t.XH4raN) : Y.t.RUI48E, {}),
                value: n,
            }),
            c,
        ],
    });
}
function z(e) {
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
        ? (0, i.jsx)(C.m0, {
              premiumSubscription: t,
              proratedInvoice: n,
              renewalInvoice: r,
              overrideRenewalDate: n.subscriptionPeriodEnd,
              isUpdate: !0,
              isPrepaidPaymentSource: l,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: u,
          })
        : (0, i.jsx)(C.m0, {
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
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: S,
            onPaymentSourceChange: h,
            onPaymentSourceAdd: P,
            onPurchaseTermsChange: T,
            legalTermsNodeRef: N,
            hasLegalTermsFlash: U,
        } = e,
        _ = (0, v.D7)({ location: "GuildBoostingReview" }),
        L = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: o,
                } = e,
                c = (0, u.bG)([R.A], () => R.A.getGuild(n), [n]);
            a()(null != c, "Missing guild");
            let d = s.interval,
                m = s.intervalCount,
                p = (0, u.bG)([w.A], () => w.A.getForSkuAndInterval((0, O.mH)(B.pe.GUILD), d, m));
            a()(null != p, "Missing guildBoostingSubscriptionPlan");
            let v = (0, O.J$)(i.paymentSourceId),
                x = (0, u.bG)([M.A], () => M.A.inReverseTrial()),
                { setInvoicePreview: S } = (0, g.P5)(),
                f = i.paymentSourceId;
            t = null != l ? (0, O.Om)(l, o[0].quantity, o[0].planId) : o;
            let { analyticsLocations: A } = (0, I.Ay)(),
                [h] = (0, j.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P] = (0, j.Kq)({
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
                    guild: c,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: v,
                    isReverseTrial: x,
                    paymentSourceId: f,
                    proratedInvoicePreview: h,
                    renewalInvoicePreview: P,
                }
            );
        })({
            guildId: t,
            priceOptions: l,
            currentPremiumSubscription: c,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: S,
        }),
        {
            guild: k,
            paymentSourceId: F,
            isPrepaid: X,
            isReverseTrial: Q,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: et,
        } = L;
    if (null == ee || null == et) return _ ? (0, i.jsx)(x.Ed, {}) : (0, i.jsx)(A.A, {});
    let en = (0, i.jsx)(z, {
            premiumSubscription: c,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: et,
            isPrepaid: X,
            isReverseTrial: Q,
            priceOptions: l,
            shouldUseUnifiedCheckoutUI: _,
        }),
        ei = (0, i.jsx)(H, {
            paymentSources: n,
            paymentSourceId: F,
            premiumSubscriptionPaymentSourceId: d,
            onPaymentSourceChange: h,
            onPaymentSourceAdd: P,
            shouldUseUnifiedCheckoutUI: _,
        }),
        er = (function (e) {
            let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPurchaseTermsChange: i,
                    premiumSubscriptionPlan: r,
                    renewalInvoicePreview: l,
                    proratedInvoicePreview: a,
                    paymentSources: u,
                    paymentSourceId: o,
                    shouldUseUnifiedCheckoutUI: c,
                } = e,
                d = (0, b.g)(u, o),
                m = { amount: l.subtotal, currency: l.currency, tax: l.tax, taxInclusive: !1 },
                p = s.M.EEA_COUNTRIES.has(D.A.ipCountryCodeWithFallback);
            return {
                shouldUseUnifiedCheckoutUI: c,
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                onPurchaseTermsChange: i,
                premiumSubscriptionPlan: r,
                basePrice: m,
                proratedAmount: a.total,
                showPricingLink: a.currency !== V.Yr.USD,
                showWithdrawalWaiver: p,
                paymentSourceType: d,
                totalDue: a.total,
                renewalPrice: l.subtotal,
                currency: a.currency,
                startDate: a.subscriptionPeriodEnd,
            };
        })({
            hasLegalTermsFlash: U,
            legalTermsNodeRef: N,
            onPurchaseTermsChange: T,
            premiumSubscriptionPlan: m,
            renewalInvoicePreview: et,
            proratedInvoicePreview: ee,
            paymentSources: n,
            paymentSourceId: F,
            shouldUseUnifiedCheckoutUI: _,
        }),
        el = (0, i.jsx)(K, { ...er }),
        ea = (function (e) {
            let {
                    premiumSubscription: t,
                    premiumSubscriptionPlan: n,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: l,
                    reviewState: s,
                } = e,
                { guildBoostingSubscriptionPlan: u, isPrepaid: o, isReverseTrial: c } = s,
                d = n.interval,
                m = n.intervalCount,
                y = (e) => (0, E.Z)(i.invoiceItems).find((t) => B.pW.has(t.subscriptionPlanId) && e(t)),
                I = y((e) => e.amount >= 0);
            a()(null != I, "Missing guild boosting invoice item");
            let v = y((e) => e.amount < 0),
                x = null != v ? I.quantity - v.quantity : I.quantity,
                S = i.invoiceItems.filter((e) => (0, O.xq)(e.subscriptionPlanId)),
                f = S.reduce((e, t) => e + t.amount, 0),
                g = (0, j.sL)(I) * x,
                A = (0, G.$g)(g, i.currency),
                h = (0, G.CE)(A, d, m),
                P = (0, G.$g)(i.total, i.currency) + (i.currency !== V.Yr.USD ? "*" : ""),
                T = i.subtotal - g - f,
                b = I.discounts.map((e) => {
                    let t = e.amount / I.quantity;
                    return { ...e, amount: t * x };
                }),
                N = b.find((e) => e.type === p.iS.SUBSCRIPTION_PLAN),
                U = b.find((e) => e.type === p.iS.ENTITLEMENT),
                C = I.subscriptionPlanPrice * x;
            return {
                addedQuantity: x,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: A,
                formattedGuildBoostRate: h,
                formattedOriginalAmountGuildBoostRate: (0, G.CE)((0, G.$g)(C, i.currency), d, m),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: T,
                subscriptionDiscount: N,
                entitlementDiscount: U,
                originalAmount: C,
                premiumSubscription: t,
                proratedInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: l,
            };
        })({
            premiumSubscription: c,
            premiumSubscriptionPlan: m,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: et,
            priceOptions: l,
            reviewState: L,
        }),
        es = (0, i.jsx)(Z, { ...ea, shouldUseUnifiedCheckoutUI: _, subscriptionInvoiceDetailsContent: en }),
        eu = (function (e) {
            let {
                isPrepaid: t,
                isReverseTrial: n,
                premiumSubscription: i,
                proratedInvoicePreview: r,
                renewalInvoicePreview: l,
                shouldUseUnifiedCheckoutUI: a,
            } = e;
            if (t) return null;
            if (n && null != i) return { type: "reverseTrial", text: J(i.currentPeriodEnd) };
            if (a) return null;
            let s = (0, C.DK)({ proratedInvoice: r, renewalInvoice: l });
            return null == s
                ? null
                : { type: "periodReset", text: s, proratedInvoicePreview: r, renewalInvoicePreview: l };
        })({
            isPrepaid: X,
            isReverseTrial: Q,
            premiumSubscription: c,
            proratedInvoicePreview: ee,
            renewalInvoicePreview: et,
            shouldUseUnifiedCheckoutUI: _,
        });
    if (_) {
        let e = (function (e, t, n) {
                let {
                        addedQuantity: r,
                        guildBoostingSubscriptionPlan: l,
                        isPrepaid: a,
                        formattedGuildBoostRate: s,
                        formattedOriginalAmountGuildBoostRate: u,
                        subscriptionDiscount: c,
                    } = t,
                    d = null != c;
                return {
                    label: Y.intl.formatToPlainString(Y.t.a3cAOg, {
                        numGuildSubscriptions: r,
                        planName: (0, O.Mn)(l.id, !1, a),
                    }),
                    target: { type: "boost", guild: e },
                    graphic: (0, i.jsx)(f.a6, {}),
                    price: s,
                    PriceIcon: d ? o.tvc : void 0,
                    priceTooltip: d ? Y.intl.string(W.default.YUNJJa) : void 0,
                    priceSubText: d ? u : void 0,
                    bottomSubText: n?.text ?? null,
                };
            })(k, ea, eu),
            t = (0, i.jsx)(f.f7, { ...e });
        return (0, i.jsx)(x.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: t,
            subscriptionDetailsContent: en,
            paymentSelectContent: ei,
            invoiceSummaryContent: es,
            legalContent: el,
            invoiceTotalDueValue: ea.formattedTotal,
            invoiceTotalDueLabel: Y.intl.string(W.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != eu && (0, i.jsx)($, { notice: eu }),
            es,
            (0, i.jsx)("div", { className: q.LC, children: ei }),
            el,
        ],
    });
}
