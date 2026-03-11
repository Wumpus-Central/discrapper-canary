n.d(t, { Ak: () => $, pc: () => Q, zT: () => F }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(997101),
    u = n(311907),
    c = n(397927),
    o = n(821891),
    d = n(637141),
    m = n(953689),
    p = n(155718),
    y = n(793574),
    v = n(688810),
    I = n(608805),
    x = n(69882),
    S = n(596034),
    f = n(241989),
    A = n(263063),
    g = n(156312),
    h = n(534479),
    P = n(908419),
    T = n(340034),
    b = n(888751),
    j = n(216641),
    E = n(543767),
    N = n(874638),
    U = n(735164),
    C = n(778307),
    R = n(692440),
    _ = n(71393),
    D = n(351906),
    L = n(615405),
    w = n(295405),
    M = n(97352),
    O = n(166403),
    G = n(927578),
    k = n(580630),
    B = n(652215),
    V = n(788868),
    Y = n(818348),
    W = n(985018),
    q = n(756366),
    K = n(843010);
function H(e) {
    let {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPurchaseTermsChange: r,
            premiumSubscriptionPlan: l,
            basePrice: a,
            proratedAmount: s,
            showPricingLink: u,
            showWithdrawalWaiver: c,
            paymentSourceType: d,
            shouldUseUnifiedCheckoutUI: p,
            renewalPrice: y,
            totalDue: v,
            currency: I,
            startDate: x,
        } = e,
        { immediateDelivery: f } = (0, P.U)();
    return p
        ? (0, i.jsx)(S._, {
              variant: {
                  type: S.I.Subscription,
                  purchaseButtonText: W.intl.string(W.t.eUEeCt),
                  totalDue: v,
                  renewalPrice: y,
                  currency: I,
                  interval: l.interval,
                  intervalCount: l.intervalCount,
                  startDate: x,
              },
              paymentSourceType: d,
              immediateDelivery: f,
          })
        : (0, i.jsx)(C.A, {
              isActive: t,
              ref: n,
              children:
                  null != a &&
                  (0, i.jsx)(m.A, {
                      onChange: r,
                      forceShow: !0,
                      finePrint: (0, i.jsx)(o.A, {
                          subscriptionPlan: l,
                          paymentSourceType: d,
                          proratedAmount: s,
                          basePrice: a,
                          productLine: B.EZt.BOOST,
                      }),
                      showPricingLink: u,
                      showWithdrawalWaiver: c,
                      subscriptionPlan: l,
                  }),
          });
}
function J(e) {
    let {
            paymentSources: t,
            paymentSourceId: n,
            premiumSubscriptionPaymentSourceId: r,
            onPaymentSourceChange: l,
            onPaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: s = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.hidePersonalInformation),
        o = (0, u.bG)([w.A], () => (null != r ? w.A.getPaymentSource(r) : null)),
        m = {
            label: W.intl.string(W.t["mmDvV+"]),
            selectedPaymentSourceId: n,
            hidePersonalInformation: c,
            shouldUseUnifiedCheckoutUI: s,
        },
        p =
            null != r
                ? {
                      ...m,
                      paymentSources: null != o ? [o] : [],
                      selectedPaymentSourceId: o?.id,
                      tooltipText: W.intl.string(W.t.XiuuV9),
                      dropdownLoading: null == o,
                      disabled: !0,
                  }
                : { ...m, paymentSources: Object.values(t), onChange: l, onPaymentSourceAdd: a };
    return (0, i.jsx)(d.A, { ...p });
}
function F(e) {
    return W.intl.format(W.t.IeaYqg, { endDate: e });
}
function $(e) {
    let { text: t, className: n } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: K.bU }),
            (0, i.jsx)(c.Text, { variant: "text-sm/normal", className: K.b7, children: t }),
            (0, i.jsx)("div", { className: K.bU }),
        ],
    });
}
function z(e) {
    let { notice: t } = e;
    return "reverseTrial" === t.type
        ? (0, i.jsx)($, { text: t.text, className: K.jk })
        : (0, i.jsx)(R.wP, { proratedInvoice: t.proratedInvoicePreview, renewalInvoice: t.renewalInvoicePreview });
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
                label: W.intl.formatToPlainString(W.t.a3cAOg, {
                    numGuildSubscriptions: t,
                    planName: (0, G.Mn)(n.id, !1, i),
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
                label: W.intl.formatToPlainString(W.t.ZSVged, { planName: (0, G.RH)(a[0].subscriptionPlanId) }),
                tooltip: W.intl.string(W.t.JmwQJM),
                amount: l,
            }),
        0 !== s &&
            m.push({
                id: "guild-boosting-adjustment",
                label: W.intl.string(W.t["+as5ZZ"]),
                tooltip: W.intl.string(W.t.JmwQJM),
                amount: s,
            }),
        c)
    ) {
        let {
                lineItems: e,
                hasSubscriptionCredit: t,
                currency: n,
            } = (0, b.EA)({ id: "main-line-item", amount: r, ...d }),
            l = [...e, ...m];
        return (0, i.jsx)(T.ID, {
            label: W.intl.string(q.default.eoXh7B),
            lineItems: l,
            currency: n,
            hasSubscriptionCredit: t,
        });
    }
    return (0, i.jsxs)(U.Yx, {
        children: [
            (0, i.jsx)(U.Xd, { children: W.intl.string(W.t.CWIwms) }),
            (0, i.jsx)(U.f0, { ...d }),
            m.map((e) =>
                (0, i.jsx)(
                    U.oR,
                    {
                        label: (0, i.jsx)(R.sw, { label: e.label, tooltipText: e.tooltip }),
                        value: (0, k.$g)(e.amount, u.currency),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(U.pK, {}),
            (0, i.jsx)(U.Sd, {
                label: W.intl.format(u.taxInclusive ? (t ? W.t.BqdxQt : W.t.XH4raN) : W.t.RUI48E, {}),
                value: n,
            }),
            o,
        ],
    });
}
function X(e) {
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
function Q(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: o,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: S,
            onPaymentSourceChange: P,
            onPaymentSourceAdd: T,
            onPurchaseTermsChange: b,
            legalTermsNodeRef: U,
            hasLegalTermsFlash: C,
        } = e,
        D = (0, I.D7)({ location: "GuildBoostingReview" }),
        w = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: c,
                } = e,
                o = (0, u.bG)([_.A], () => _.A.getGuild(n), [n]);
            a()(null != o, "Missing guild");
            let d = s.interval,
                m = s.intervalCount,
                p = (0, u.bG)([M.A], () => M.A.getForSkuAndInterval((0, G.mH)(V.pe.GUILD), d, m));
            a()(null != p, "Missing guildBoostingSubscriptionPlan");
            let I = (0, G.J$)(i.paymentSourceId),
                x = (0, u.bG)([O.A], () => O.A.inReverseTrial()),
                { setInvoicePreview: S } = (0, g.P5)(),
                f = i.paymentSourceId;
            t = null != l ? (0, G.Om)(l, c[0].quantity, c[0].planId) : c;
            let { analyticsLocations: A } = (0, v.Ay)(),
                [h] = (0, E.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: A,
                    analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P] = (0, E.Kq)({
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
            currentPremiumSubscription: o,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: S,
        }),
        {
            guild: B,
            paymentSourceId: $,
            isPrepaid: Q,
            isReverseTrial: ee,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
        } = w;
    if (null == et || null == en) return D ? (0, i.jsx)(x.Ed, {}) : (0, i.jsx)(h.A, {});
    let ei = (0, i.jsx)(X, {
            premiumSubscription: o,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
            isPrepaid: Q,
            isReverseTrial: ee,
            priceOptions: l,
            shouldUseUnifiedCheckoutUI: D,
        }),
        er = (0, i.jsx)(J, {
            paymentSources: n,
            paymentSourceId: $,
            premiumSubscriptionPaymentSourceId: d,
            onPaymentSourceChange: P,
            onPaymentSourceAdd: T,
            shouldUseUnifiedCheckoutUI: D,
        }),
        el = (function (e) {
            let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPurchaseTermsChange: i,
                    premiumSubscriptionPlan: r,
                    renewalInvoicePreview: l,
                    proratedInvoicePreview: a,
                    paymentSources: u,
                    paymentSourceId: c,
                    shouldUseUnifiedCheckoutUI: o,
                } = e,
                d = (0, j.g)(u, c),
                m = { amount: l.subtotal, currency: l.currency, tax: l.tax, taxInclusive: !1 },
                p = s.M.EEA_COUNTRIES.has(L.A.ipCountryCodeWithFallback);
            return {
                shouldUseUnifiedCheckoutUI: o,
                hasLegalTermsFlash: t,
                legalTermsNodeRef: n,
                onPurchaseTermsChange: i,
                premiumSubscriptionPlan: r,
                basePrice: m,
                proratedAmount: a.total,
                showPricingLink: a.currency !== Y.Yr.USD,
                showWithdrawalWaiver: p,
                paymentSourceType: d,
                totalDue: a.total,
                renewalPrice: l.subtotal,
                currency: a.currency,
                startDate: l.subscriptionPeriodEnd,
            };
        })({
            hasLegalTermsFlash: C,
            legalTermsNodeRef: U,
            onPurchaseTermsChange: b,
            premiumSubscriptionPlan: m,
            renewalInvoicePreview: en,
            proratedInvoicePreview: et,
            paymentSources: n,
            paymentSourceId: $,
            shouldUseUnifiedCheckoutUI: D,
        }),
        ea = (0, i.jsx)(H, { ...el }),
        es = (function (e) {
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
                y = (e) => (0, N.Z)(i.invoiceItems).find((t) => V.pW.has(t.subscriptionPlanId) && e(t)),
                v = y((e) => e.amount >= 0);
            a()(null != v, "Missing guild boosting invoice item");
            let I = y((e) => e.amount < 0),
                x = null != I ? v.quantity - I.quantity : v.quantity,
                S = i.invoiceItems.filter((e) => (0, G.xq)(e.subscriptionPlanId)),
                f = S.reduce((e, t) => e + t.amount, 0),
                A = (0, E.sL)(v) * x,
                g = (0, k.$g)(A, i.currency),
                h = (0, k.CE)(g, d, m),
                P = (0, k.$g)(i.total, i.currency) + (i.currency !== Y.Yr.USD ? "*" : ""),
                T = i.total - A - f,
                b = v.discounts.map((e) => {
                    let t = e.amount / v.quantity;
                    return { ...e, amount: t * x };
                }),
                j = b.find((e) => e.type === p.iS.SUBSCRIPTION_PLAN),
                U = b.find((e) => e.type === p.iS.ENTITLEMENT),
                C = v.subscriptionPlanPrice * x;
            return {
                addedQuantity: x,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: c,
                isReverseTrial: o,
                formattedGuildBoostPrice: g,
                formattedGuildBoostRate: h,
                formattedOriginalAmountGuildBoostRate: (0, k.CE)((0, k.$g)(C, i.currency), d, m),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: T,
                subscriptionDiscount: j,
                entitlementDiscount: U,
                originalAmount: C,
                premiumSubscription: t,
                proratedInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: l,
            };
        })({
            premiumSubscription: o,
            premiumSubscriptionPlan: m,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
            priceOptions: l,
            reviewState: w,
        }),
        eu = (0, i.jsx)(Z, { ...es, shouldUseUnifiedCheckoutUI: D, subscriptionInvoiceDetailsContent: ei }),
        ec = (function (e) {
            let {
                isPrepaid: t,
                isReverseTrial: n,
                premiumSubscription: i,
                proratedInvoicePreview: r,
                renewalInvoicePreview: l,
                shouldUseUnifiedCheckoutUI: a,
            } = e;
            if (t) return null;
            if (n && null != i) return { type: "reverseTrial", text: F(i.currentPeriodEnd) };
            if (a) return null;
            let s = (0, R.DK)({ proratedInvoice: r, renewalInvoice: l });
            return null == s
                ? null
                : { type: "periodReset", text: s, proratedInvoicePreview: r, renewalInvoicePreview: l };
        })({
            isPrepaid: Q,
            isReverseTrial: ee,
            premiumSubscription: o,
            proratedInvoicePreview: et,
            renewalInvoicePreview: en,
            shouldUseUnifiedCheckoutUI: D,
        });
    if (D) {
        let e = (function (e, t, n) {
                let {
                        addedQuantity: r,
                        guildBoostingSubscriptionPlan: l,
                        isPrepaid: a,
                        formattedGuildBoostRate: s,
                        formattedOriginalAmountGuildBoostRate: u,
                        subscriptionDiscount: o,
                    } = t,
                    d = null != o;
                return {
                    label: W.intl.formatToPlainString(W.t.a3cAOg, {
                        numGuildSubscriptions: r,
                        planName: (0, G.Mn)(l.id, !1, a),
                    }),
                    description: W.intl.format(q.default["8imbq5"], {
                        guildName: e.name,
                        guildIcon: () =>
                            (0, i.jsx)(A.Ay, {
                                guild: e,
                                size: A.Ay.Sizes.SMOL,
                                style: { display: "inline-flex", verticalAlign: "middle" },
                            }),
                    }),
                    graphic: (0, i.jsx)(f.a6, {}),
                    price: s,
                    PriceIcon: d ? c.tvc : void 0,
                    priceTooltip: d ? W.intl.string(q.default.YUNJJa) : void 0,
                    priceSubText: d ? u : void 0,
                    bottomSubText: n?.text ?? null,
                };
            })(B, es, ec),
            t = (0, i.jsx)(f.f7, { ...e });
        return (0, i.jsx)(x.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: t,
            subscriptionDetailsContent: ei,
            paymentSelectContent: er,
            invoiceSummaryContent: eu,
            legalContent: ea,
            invoiceTotalDueValue: es.formattedTotal,
            invoiceTotalDueLabel: W.intl.string(q.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != ec && (0, i.jsx)(z, { notice: ec }),
            eu,
            (0, i.jsx)("div", { className: K.LC, children: er }),
            ea,
        ],
    });
}
