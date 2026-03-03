t.d(e, {
    $_: () => Y,
    Ak: () => W,
    Cc: () => w,
    Fv: () => B,
    Jp: () => O,
    KR: () => G,
    eI: () => K,
    eh: () => k,
    x: () => V,
});
var i = t(627968),
    r = t(64700),
    l = t(284009),
    s = t.n(l),
    a = t(997101),
    c = t(311907),
    u = t(990078),
    o = t(397927),
    d = t(821891),
    m = t(637141),
    p = t(953689),
    I = t(155718),
    x = t(793574),
    y = t(688810),
    S = t(156312),
    A = t(216641),
    v = t(543767),
    P = t(874638),
    h = t(735164),
    f = t(778307),
    g = t(692440),
    j = t(351906),
    T = t(615405),
    E = t(295405),
    N = t(97352),
    b = t(166403),
    _ = t(927578),
    R = t(580630),
    U = t(652215),
    C = t(788868),
    L = t(818348),
    D = t(985018),
    M = t(843010);
function O(n) {
    let e,
        { paymentSources: t, priceOptions: i, currentPremiumSubscription: l, newAdditionalPlans: s } = n,
        { setInvoicePreview: a } = (0, S.P5)(),
        u = i.paymentSourceId,
        o = (0, A.g)(t, u),
        d = (0, c.bG)([j.A], () => j.A.hidePersonalInformation);
    e = null != l ? (0, _.Om)(l, s[0].quantity, s[0].planId) : s;
    let { analyticsLocations: m } = (0, y.Ay)(),
        [p] = (0, v.Kq)({
            subscriptionId: l?.id,
            items: e,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u,
            currency: i.currency,
            analyticsLocations: m,
            analyticsLocation: x.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [I] = (0, v.Kq)({
            subscriptionId: l?.id,
            items: e,
            renewal: !0,
            paymentSourceId: u,
            currency: i.currency,
            analyticsLocations: m,
            analyticsLocation: x.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        });
    return (
        r.useEffect(() => {
            a(p);
        }, [a, p]),
        {
            paymentSourceId: u,
            paymentSourceType: o,
            hidePersonalInformation: d,
            proratedInvoicePreview: p,
            renewalInvoicePreview: I,
        }
    );
}
function w(n) {
    let e,
        {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: i,
            onPurchaseTermsChange: r,
            premiumSubscriptionPlan: l,
            renewalInvoicePreview: s,
            proratedInvoicePreview: c,
            paymentSourceType: u,
        } = n;
    null != s && (e = { amount: s.subtotal, currency: s.currency, tax: s.tax, taxInclusive: !1 });
    let o = a.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback);
    return {
        hasLegalTermsFlash: t,
        legalTermsNodeRef: i,
        onPurchaseTermsChange: r,
        premiumSubscriptionPlan: l,
        basePrice: e,
        proratedAmount: null != c ? c.total : void 0,
        showPricingLink: (c?.currency ?? L.Yr.USD) !== L.Yr.USD,
        showWithdrawalWaiver: o,
        paymentSourceType: u,
    };
}
function G(n) {
    let {
        hasLegalTermsFlash: e,
        legalTermsNodeRef: t,
        onPurchaseTermsChange: r,
        premiumSubscriptionPlan: l,
        basePrice: s,
        proratedAmount: a,
        showPricingLink: c,
        showWithdrawalWaiver: u,
        paymentSourceType: o,
    } = n;
    return (0, i.jsx)(f.A, {
        isActive: e,
        ref: t,
        children:
            null != s &&
            (0, i.jsx)(p.A, {
                onChange: r,
                forceShow: !0,
                finePrint: (0, i.jsx)(d.A, {
                    subscriptionPlan: l,
                    paymentSourceType: o,
                    proratedAmount: a,
                    basePrice: s,
                    productLine: U.EZt.BOOST,
                }),
                showPricingLink: c,
                showWithdrawalWaiver: u,
                subscriptionPlan: l,
            }),
    });
}
function k(n) {
    let e = (0, c.bG)([E.A], () =>
        null != n.premiumSubscriptionPaymentSourceId
            ? E.A.getPaymentSource(n.premiumSubscriptionPaymentSourceId)
            : null,
    );
    return { ...n, premiumSubscriptionPaymentSource: e };
}
function V(n) {
    let {
        paymentSources: e,
        paymentSourceId: t,
        premiumSubscriptionPaymentSourceId: r,
        premiumSubscriptionPaymentSource: l,
        onPaymentSourceChange: s,
        onPaymentSourceAdd: a,
        hidePersonalInformation: c,
        shouldUseUnifiedCheckoutUI: d = !1,
    } = n;
    return null != r
        ? null != l
            ? (0, i.jsx)(u.m, {
                  asContainer: !0,
                  text: D.intl.string(D.t.XiuuV9),
                  children: (0, i.jsx)(m.A, {
                      label: D.intl.string(D.t["mmDvV+"]),
                      paymentSources: [l],
                      selectedPaymentSourceId: l.id,
                      hidePersonalInformation: c,
                      disabled: !0,
                      shouldUseUnifiedCheckoutUI: d,
                  }),
              })
            : (0, i.jsx)(o.y$y, {})
        : (0, i.jsx)(m.A, {
              label: D.intl.string(D.t["mmDvV+"]),
              paymentSources: Object.values(e),
              selectedPaymentSourceId: t,
              onChange: s,
              onPaymentSourceAdd: a,
              hidePersonalInformation: c,
              shouldUseUnifiedCheckoutUI: d,
          });
}
function Y(n) {
    let {
            premiumSubscription: e,
            premiumSubscriptionPlan: t,
            proratedInvoicePreview: i,
            renewalInvoicePreview: r,
            priceOptions: l,
        } = n,
        a = t.interval,
        u = t.intervalCount,
        o = (0, c.bG)([N.A], () => N.A.getForSkuAndInterval((0, _.mH)(C.pe.GUILD), a, u));
    s()(null != o, "Missing guildBoostingSubscriptionPlan");
    let d = (n) => (0, P.Z)(i.invoiceItems).find((e) => C.pW.has(e.subscriptionPlanId) && n(e)),
        m = d((n) => n.amount >= 0);
    s()(null != m, "Missing guild boosting invoice item");
    let p = d((n) => n.amount < 0),
        x = null != p ? m.quantity - p.quantity : m.quantity,
        y = i.invoiceItems.filter((n) => (0, _.xq)(n.subscriptionPlanId)),
        S = y.reduce((n, e) => n + e.amount, 0),
        A = (0, v.sL)(m) * x,
        h = (0, R.$g)(A, i.currency),
        f = (0, R.CE)(h, a, u),
        g = (0, R.$g)(i.total, i.currency) + (i.currency !== L.Yr.USD ? "*" : ""),
        j = i.total - A - S,
        T = m.discounts.map((n) => {
            let e = n.amount / m.quantity;
            return { ...n, amount: e * x };
        }),
        E = T.find((n) => n.type === I.iS.SUBSCRIPTION_PLAN),
        U = T.find((n) => n.type === I.iS.ENTITLEMENT),
        D = m.subscriptionPlanPrice * x,
        M = (0, _.J$)(l.paymentSourceId),
        O = (0, c.bG)([b.A], () => b.A.inReverseTrial());
    return {
        noticeProps: {
            isPrepaid: M,
            isReverseTrial: O,
            premiumSubscription: e,
            proratedInvoicePreview: i,
            renewalInvoicePreview: r,
        },
        invoiceSummaryProps: {
            addedQuantity: x,
            guildBoostingSubscriptionPlan: o,
            isPrepaid: M,
            formattedGuildBoostPrice: h,
            formattedGuildBoostRate: f,
            formattedTotal: g,
            basePlanAdjustment: S,
            basePlanInvoiceItems: y,
            guildBoostingAdjustment: j,
            subscriptionDiscount: E,
            entitlementDiscount: U,
            originalAmount: D,
            premiumSubscription: e,
            proratedInvoicePreview: i,
            renewalInvoicePreview: r,
            isReverseTrial: O,
            priceOptions: l,
        },
    };
}
function W(n) {
    let { endDate: e, className: t } = n;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: M.bU }),
            (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: M.b7,
                children: D.intl.format(D.t.IeaYqg, { endDate: e }),
            }),
            (0, i.jsx)("div", { className: M.bU }),
        ],
    });
}
function B(n) {
    let {
        isPrepaid: e,
        isReverseTrial: t,
        proratedInvoicePreview: r,
        renewalInvoicePreview: l,
        premiumSubscription: s,
    } = n;
    return e
        ? null
        : t && null != s
          ? (0, i.jsx)(W, { endDate: s.currentPeriodEnd, className: M.jk })
          : (0, i.jsx)(g.wP, { proratedInvoice: r, renewalInvoice: l });
}
function K(n) {
    let {
        addedQuantity: e,
        guildBoostingSubscriptionPlan: t,
        isPrepaid: r,
        formattedGuildBoostPrice: l,
        formattedGuildBoostRate: s,
        subscriptionDiscount: a,
        entitlementDiscount: c,
        originalAmount: u,
        basePlanAdjustment: o,
        basePlanInvoiceItems: d,
        guildBoostingAdjustment: m,
        formattedTotal: p,
        premiumSubscription: I,
        proratedInvoicePreview: x,
        renewalInvoicePreview: y,
        isReverseTrial: S,
        priceOptions: A,
    } = n;
    return (0, i.jsxs)(h.Yx, {
        children: [
            (0, i.jsx)(h.Xd, { children: D.intl.string(D.t.CWIwms) }),
            (0, i.jsx)(h.f0, {
                label: D.intl.formatToPlainString(D.t.a3cAOg, {
                    numGuildSubscriptions: e,
                    planName: (0, _.Mn)(t.id, !1, r),
                }),
                value: r ? l : s,
                subscriptionDiscount: a,
                entitlementDiscount: c,
                originalAmount: u,
                currency: x.currency,
                interval: t.interval,
                intervalCount: t.intervalCount,
            }),
            0 !== o
                ? (0, i.jsx)(h.oR, {
                      label: (0, i.jsx)(g.sw, {
                          label: D.intl.formatToPlainString(D.t.ZSVged, {
                              planName: (0, _.RH)(d[0].subscriptionPlanId),
                          }),
                          tooltipText: D.intl.string(D.t.JmwQJM),
                      }),
                      value: (0, R.$g)(o, x.currency),
                  })
                : null,
            0 !== m
                ? (0, i.jsx)(h.oR, {
                      label: (0, i.jsx)(g.sw, {
                          label: D.intl.string(D.t["+as5ZZ"]),
                          tooltipText: D.intl.string(D.t.JmwQJM),
                      }),
                      value: (0, R.$g)(m, x.currency),
                  })
                : null,
            (0, i.jsx)(h.pK, {}),
            (0, i.jsx)(h.Sd, {
                label: D.intl.format(x.taxInclusive ? (r ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: p,
            }),
            null != I
                ? (0, i.jsx)(g.m0, {
                      premiumSubscription: I,
                      proratedInvoice: x,
                      renewalInvoice: y,
                      isUpdate: !0,
                      isPrepaidPaymentSource: r,
                      isTrial: S,
                  })
                : (0, i.jsx)(g.m0, { renewalInvoice: y, priceOptions: A, isPrepaidPaymentSource: r }),
        ],
    });
}
