n.d(t, { Ak: () => $, pc: () => X, zT: () => J }), n(321073);
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
    I = n(793574),
    y = n(688810),
    x = n(608805),
    v = n(69882),
    S = n(596034),
    f = n(270537),
    g = n(241989),
    h = n(958340),
    A = n(156312),
    P = n(534479),
    T = n(908419),
    j = n(888751),
    b = n(216641),
    E = n(543767),
    N = n(874638),
    U = n(881489),
    C = n(735164),
    _ = n(778307),
    R = n(692440),
    D = n(71393),
    L = n(351906),
    w = n(615405),
    M = n(295405),
    O = n(97352),
    G = n(927578),
    k = n(580630),
    B = n(652215),
    V = n(788868),
    W = n(818348),
    Y = n(985018),
    H = n(756366),
    K = n(877985);
function q(e) {
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
            renewalPrice: I,
            totalDue: y,
            currency: x,
            startDate: v,
        } = e,
        { immediateDelivery: f } = (0, T.U)();
    return p
        ? (0, i.jsx)(S._, {
              variant: {
                  type: S.I.Subscription,
                  purchaseButtonText: Y.intl.string(Y.t.eUEeCt),
                  totalDue: y,
                  renewalPrice: I,
                  currency: x,
                  interval: l.interval,
                  intervalCount: l.intervalCount,
                  startDate: v,
              },
              paymentSourceType: d,
              immediateDelivery: f,
          })
        : (0, i.jsx)(_.A, {
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
function F(e) {
    let {
            paymentSources: t,
            paymentSourceId: n,
            premiumSubscriptionPaymentSourceId: r,
            onPaymentSourceChange: l,
            onPaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: s = !1,
        } = e,
        c = (0, u.bG)([L.A], () => L.A.hidePersonalInformation),
        o = (0, u.bG)([M.A], () => (null != r ? M.A.getPaymentSource(r) : null)),
        m = {
            label: Y.intl.string(Y.t["mmDvV+"]),
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
                      tooltipText: Y.intl.string(Y.t.XiuuV9),
                      dropdownLoading: null == o,
                      disabled: !0,
                  }
                : { ...m, paymentSources: Object.values(t), onChange: l, onPaymentSourceAdd: a };
    return (0, i.jsx)(d.A, { ...p });
}
function J(e) {
    return Y.intl.format(Y.t.IeaYqg, { endDate: e });
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
function Z(e) {
    let { notice: t } = e;
    return "reverseTrial" === t.type
        ? (0, i.jsx)($, { text: t.text, className: K.jk })
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
                label: Y.intl.formatToPlainString(Y.t.a3cAOg, {
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
                label: Y.intl.formatToPlainString(Y.t.ZSVged, { planName: (0, G.RH)(a[0].subscriptionPlanId) }),
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
        c)
    ) {
        let { lineItems: e, currency: t } = (0, j.EA)({ id: "main-line-item", amount: r, ...d }),
            n = [...e, ...m];
        return (0, i.jsx)(f.Vm, {
            defaultExpanded: !0,
            label: Y.intl.string(H.default.eoXh7B),
            lineItems: n,
            currency: t,
        });
    }
    return (0, i.jsxs)(C.Yx, {
        children: [
            (0, i.jsx)(C.Xd, { children: Y.intl.string(Y.t.CWIwms) }),
            (0, i.jsx)(C.f0, { ...d }),
            m.map((e) =>
                (0, i.jsx)(
                    C.oR,
                    {
                        label: (0, i.jsx)(R.sw, { label: e.label, tooltipText: e.tooltip ?? void 0 }),
                        value: (0, k.$g)(e.amount, u.currency),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(C.pK, {}),
            (0, i.jsx)(C.Sd, {
                label: Y.intl.format(u.taxInclusive ? (t ? Y.t.BqdxQt : Y.t.XH4raN) : Y.t.RUI48E, {}),
                value: n,
            }),
            o,
        ],
    });
}
function Q(e) {
    let {
        isSubscriptionUpdate: t,
        premiumSubscription: n,
        proratedInvoicePreview: r,
        renewalInvoicePreview: l,
        isPrepaid: a,
        isReverseTrial: s,
        priceOptions: u,
        shouldUseUnifiedCheckoutUI: c,
    } = e;
    return null != n
        ? (0, i.jsx)(R.m0, {
              premiumSubscription: n,
              proratedInvoice: r,
              renewalInvoice: l,
              isUpdate: t,
              isPrepaidPaymentSource: a,
              isTrial: s,
              shouldUseUnifiedCheckoutUI: c,
          })
        : (0, i.jsx)(R.m0, {
              renewalInvoice: l,
              priceOptions: u,
              isPrepaidPaymentSource: a,
              shouldUseUnifiedCheckoutUI: c,
          });
}
function X(e) {
    let {
            guildId: t,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: o,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: m,
            newAdditionalPlans: S,
            onPaymentSourceChange: f,
            onPaymentSourceAdd: T,
            onPurchaseTermsChange: j,
            legalTermsNodeRef: C,
            hasLegalTermsFlash: _,
        } = e,
        L = (0, x.D7)({ location: "GuildBoostingReview" }),
        M = (function (e) {
            let t,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: c,
                } = e,
                o = (0, u.bG)([D.A, h.A], () => {
                    let e = D.A.getGuild(n);
                    return null != e ? e : h.A.isGuildFetching(n) ? null : h.A.getGuild(n);
                }, [n]),
                d = s.interval,
                m = s.intervalCount,
                p = (0, u.bG)([O.A], () => O.A.getForSkuAndInterval((0, G.mH)(V.pe.GUILD), d, m));
            a()(null != p, "Missing guildBoostingSubscriptionPlan");
            let x = (0, G.J$)(i.paymentSourceId),
                v = (0, U.ds)(),
                { setInvoicePreview: S } = (0, A.P5)(),
                f = i.paymentSourceId;
            t = null != l ? (0, G.Om)(l, c[0].quantity, c[0].planId) : c;
            let { analyticsLocations: g } = (0, y.Ay)(),
                [P] = (0, E.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [T] = (0, E.Kq)({
                    subscriptionId: l?.id,
                    items: t,
                    renewal: !0,
                    paymentSourceId: f,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: I.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                r.useEffect(() => {
                    S(P);
                }, [S, P]),
                {
                    guild: o ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: x,
                    isReverseTrial: v,
                    paymentSourceId: f,
                    proratedInvoicePreview: P,
                    renewalInvoicePreview: T,
                    isSubscriptionUpdate: null != l,
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
            isSubscriptionUpdate: B,
            guild: $,
            paymentSourceId: X,
            isPrepaid: ee,
            isReverseTrial: et,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
        } = M;
    if (null == en || null == ei || null == $) return L ? (0, i.jsx)(v.Ed, {}) : (0, i.jsx)(P.A, {});
    let er = (0, i.jsx)(Q, {
            isSubscriptionUpdate: B,
            premiumSubscription: o,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            isPrepaid: ee,
            isReverseTrial: et,
            priceOptions: l,
            shouldUseUnifiedCheckoutUI: L,
        }),
        el = (0, i.jsx)(F, {
            paymentSources: n,
            paymentSourceId: X,
            premiumSubscriptionPaymentSourceId: d,
            onPaymentSourceChange: f,
            onPaymentSourceAdd: T,
            shouldUseUnifiedCheckoutUI: L,
        }),
        ea = (function (e) {
            let {
                    isSubscriptionUpdate: t,
                    hasLegalTermsFlash: n,
                    legalTermsNodeRef: i,
                    onPurchaseTermsChange: r,
                    premiumSubscriptionPlan: l,
                    renewalInvoicePreview: a,
                    proratedInvoicePreview: u,
                    paymentSources: c,
                    paymentSourceId: o,
                    shouldUseUnifiedCheckoutUI: d,
                } = e,
                m = (0, b.g)(c, o),
                p = { amount: a.subtotal, currency: a.currency, tax: a.tax, taxInclusive: !1 },
                I = s.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback);
            return {
                shouldUseUnifiedCheckoutUI: d,
                hasLegalTermsFlash: n,
                legalTermsNodeRef: i,
                onPurchaseTermsChange: r,
                premiumSubscriptionPlan: l,
                basePrice: p,
                proratedAmount: u.total,
                showPricingLink: u.currency !== W.Yr.USD,
                showWithdrawalWaiver: I,
                paymentSourceType: m,
                totalDue: u.total,
                renewalPrice: a.subtotal,
                currency: u.currency,
                startDate: (0, R.de)({ isSubscriptionUpdate: t, currentInvoice: u, renewalInvoice: a }),
            };
        })({
            isSubscriptionUpdate: B,
            hasLegalTermsFlash: _,
            legalTermsNodeRef: C,
            onPurchaseTermsChange: j,
            premiumSubscriptionPlan: m,
            renewalInvoicePreview: ei,
            proratedInvoicePreview: en,
            paymentSources: n,
            paymentSourceId: X,
            shouldUseUnifiedCheckoutUI: L,
        }),
        es = (0, i.jsx)(q, { ...ea }),
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
                I = (e) => (0, N.Z)(i.invoiceItems).find((t) => V.pW.has(t.subscriptionPlanId) && e(t)),
                y = I((e) => e.amount >= 0);
            a()(null != y, "Missing guild boosting invoice item");
            let x = I((e) => e.amount < 0),
                v = null != x ? y.quantity - x.quantity : y.quantity,
                S = i.invoiceItems.filter((e) => (0, G.xq)(e.subscriptionPlanId)),
                f = S.reduce((e, t) => e + t.amount, 0),
                g = (0, E.sL)(y) * v,
                h = (0, k.$g)(g, i.currency),
                A = (0, k.CE)(h, d, m),
                P = (0, k.$g)(i.total, i.currency) + (i.currency !== W.Yr.USD ? "*" : ""),
                T = i.subtotal - g - f,
                j = y.discounts.map((e) => {
                    let t = e.amount / y.quantity;
                    return { ...e, amount: t * v };
                }),
                b = j.find((e) => e.type === p.iS.SUBSCRIPTION_PLAN),
                U = j.find((e) => e.type === p.iS.ENTITLEMENT),
                C = y.subscriptionPlanPrice * v;
            return {
                addedQuantity: v,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: c,
                isReverseTrial: o,
                formattedGuildBoostPrice: h,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, k.CE)((0, k.$g)(C, i.currency), d, m),
                formattedTotal: P,
                basePlanAdjustment: f,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: T,
                subscriptionDiscount: b,
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
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            priceOptions: l,
            reviewState: M,
        }),
        ec = (0, i.jsx)(z, { ...eu, shouldUseUnifiedCheckoutUI: L, subscriptionInvoiceDetailsContent: er }),
        eo = (function (e) {
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
            let s = (0, R.DK)({ proratedInvoice: r, renewalInvoice: l });
            return null == s
                ? null
                : { type: "periodReset", text: s, proratedInvoicePreview: r, renewalInvoicePreview: l };
        })({
            isPrepaid: ee,
            isReverseTrial: et,
            premiumSubscription: o,
            proratedInvoicePreview: en,
            renewalInvoicePreview: ei,
            shouldUseUnifiedCheckoutUI: L,
        });
    if (L) {
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
                    label: Y.intl.formatToPlainString(Y.t.a3cAOg, {
                        numGuildSubscriptions: r,
                        planName: (0, G.Mn)(l.id, !1, a),
                    }),
                    target: { type: "boost", guild: e },
                    graphic: (0, i.jsx)(g.a6, {}),
                    price: s,
                    PriceIcon: d ? c.tvc : void 0,
                    priceTooltip: d ? Y.intl.string(H.default.YUNJJa) : void 0,
                    priceSubText: d ? u : void 0,
                    bottomSubText: n?.text ?? null,
                };
            })($, eu, eo),
            t = (0, i.jsx)(g.f7, { ...e });
        return (0, i.jsx)(v.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: t,
            subscriptionDetailsContent: er,
            paymentSelectContent: el,
            invoiceSummaryContent: ec,
            legalContent: es,
            invoiceTotalDueValue: eu.formattedTotal,
            invoiceTotalDueLabel: Y.intl.string(H.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != eo && (0, i.jsx)(Z, { notice: eo }),
            ec,
            (0, i.jsx)("div", { className: K.LC, children: el }),
            es,
        ],
    });
}
