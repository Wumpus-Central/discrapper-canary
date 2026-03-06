t.d(e, { Ak: () => B, Cc: () => G, Jp: () => w, KR: () => V, V3: () => K, eh: () => Y, x: () => W }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(997101),
    c = t(311907),
    u = t(990078),
    o = t(397927),
    d = t(821891),
    m = t(637141),
    p = t(953689),
    I = t(155718),
    y = t(793574),
    g = t(688810),
    x = t(156312),
    S = t(340034),
    f = t(888751),
    h = t(216641),
    A = t(543767),
    P = t(874638),
    v = t(735164),
    j = t(778307),
    T = t(692440),
    b = t(351906),
    E = t(615405),
    N = t(295405),
    C = t(97352),
    U = t(166403),
    R = t(927578),
    _ = t(580630),
    L = t(652215),
    D = t(788868),
    M = t(818348),
    O = t(985018),
    k = t(272360);
function w(n) {
    let e,
        { paymentSources: t, priceOptions: i, currentPremiumSubscription: r, newAdditionalPlans: s } = n,
        { setInvoicePreview: a } = (0, x.P5)(),
        u = i.paymentSourceId,
        o = (0, h.g)(t, u),
        d = (0, c.bG)([b.A], () => b.A.hidePersonalInformation);
    e = null != r ? (0, R.Om)(r, s[0].quantity, s[0].planId) : s;
    let { analyticsLocations: m } = (0, g.Ay)(),
        [p] = (0, A.Kq)({
            subscriptionId: r?.id,
            items: e,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u,
            currency: i.currency,
            analyticsLocations: m,
            analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_PRORATED,
        }),
        [I] = (0, A.Kq)({
            subscriptionId: r?.id,
            items: e,
            renewal: !0,
            paymentSourceId: u,
            currency: i.currency,
            analyticsLocations: m,
            analyticsLocation: y.A.GUILD_BOOSTING_REVIEW_RENEWAL,
        });
    return (
        l.useEffect(() => {
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
function G(n) {
    let e,
        {
            hasLegalTermsFlash: t,
            legalTermsNodeRef: i,
            onPurchaseTermsChange: l,
            premiumSubscriptionPlan: r,
            renewalInvoicePreview: s,
            proratedInvoicePreview: c,
            paymentSourceType: u,
        } = n;
    null != s && (e = { amount: s.subtotal, currency: s.currency, tax: s.tax, taxInclusive: !1 });
    let o = a.M.EEA_COUNTRIES.has(E.A.ipCountryCodeWithFallback);
    return {
        hasLegalTermsFlash: t,
        legalTermsNodeRef: i,
        onPurchaseTermsChange: l,
        premiumSubscriptionPlan: r,
        basePrice: e,
        proratedAmount: null != c ? c.total : void 0,
        showPricingLink: (c?.currency ?? M.Yr.USD) !== M.Yr.USD,
        showWithdrawalWaiver: o,
        paymentSourceType: u,
    };
}
function V(n) {
    let {
        hasLegalTermsFlash: e,
        legalTermsNodeRef: t,
        onPurchaseTermsChange: l,
        premiumSubscriptionPlan: r,
        basePrice: s,
        proratedAmount: a,
        showPricingLink: c,
        showWithdrawalWaiver: u,
        paymentSourceType: o,
    } = n;
    return (0, i.jsx)(j.A, {
        isActive: e,
        ref: t,
        children:
            null != s &&
            (0, i.jsx)(p.A, {
                onChange: l,
                forceShow: !0,
                finePrint: (0, i.jsx)(d.A, {
                    subscriptionPlan: r,
                    paymentSourceType: o,
                    proratedAmount: a,
                    basePrice: s,
                    productLine: L.EZt.BOOST,
                }),
                showPricingLink: c,
                showWithdrawalWaiver: u,
                subscriptionPlan: r,
            }),
    });
}
function Y(n) {
    let e = (0, c.bG)([N.A], () =>
        null != n.premiumSubscriptionPaymentSourceId
            ? N.A.getPaymentSource(n.premiumSubscriptionPaymentSourceId)
            : null,
    );
    return { ...n, premiumSubscriptionPaymentSource: e };
}
function W(n) {
    let {
        paymentSources: e,
        paymentSourceId: t,
        premiumSubscriptionPaymentSourceId: l,
        premiumSubscriptionPaymentSource: r,
        onPaymentSourceChange: s,
        onPaymentSourceAdd: a,
        hidePersonalInformation: c,
        shouldUseUnifiedCheckoutUI: d = !1,
    } = n;
    return null != l
        ? null != r
            ? (0, i.jsx)(u.m, {
                  asContainer: !0,
                  text: O.intl.string(O.t.XiuuV9),
                  children: (0, i.jsx)(m.A, {
                      label: O.intl.string(O.t["mmDvV+"]),
                      paymentSources: [r],
                      selectedPaymentSourceId: r.id,
                      hidePersonalInformation: c,
                      disabled: !0,
                      shouldUseUnifiedCheckoutUI: d,
                  }),
              })
            : (0, i.jsx)(o.y$y, {})
        : (0, i.jsx)(m.A, {
              label: O.intl.string(O.t["mmDvV+"]),
              paymentSources: Object.values(e),
              selectedPaymentSourceId: t,
              onChange: s,
              onPaymentSourceAdd: a,
              hidePersonalInformation: c,
              shouldUseUnifiedCheckoutUI: d,
          });
}
function B(n) {
    let { endDate: e, className: t } = n;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: k.bU }),
            (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: k.b7,
                children: O.intl.format(O.t.IeaYqg, { endDate: e }),
            }),
            (0, i.jsx)("div", { className: k.bU }),
        ],
    });
}
function J(n) {
    let {
        isPrepaid: e,
        isReverseTrial: t,
        proratedInvoicePreview: l,
        renewalInvoicePreview: r,
        premiumSubscription: s,
    } = n;
    return e
        ? null
        : t && null != s
          ? (0, i.jsx)(B, { endDate: s.currentPeriodEnd, className: k.jk })
          : (0, i.jsx)(T.wP, { proratedInvoice: l, renewalInvoice: r });
}
function K(n, e) {
    let {
            premiumSubscription: t,
            premiumSubscriptionPlan: l,
            proratedInvoicePreview: r,
            renewalInvoicePreview: a,
            priceOptions: u,
        } = e,
        o = (function (n) {
            let {
                    premiumSubscription: e,
                    premiumSubscriptionPlan: t,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                } = n,
                a = t.interval,
                u = t.intervalCount,
                o = (0, c.bG)([C.A], () => C.A.getForSkuAndInterval((0, R.mH)(D.pe.GUILD), a, u)),
                d = (0, c.bG)([U.A], () => U.A.inReverseTrial());
            if ((s()(null != o, "Missing guildBoostingSubscriptionPlan"), null == i || null == l))
                return { isLoading: !0 };
            let m = (n) => (0, P.Z)(i.invoiceItems).find((e) => D.pW.has(e.subscriptionPlanId) && n(e)),
                p = m((n) => n.amount >= 0);
            s()(null != p, "Missing guild boosting invoice item");
            let y = m((n) => n.amount < 0),
                g = null != y ? p.quantity - y.quantity : p.quantity,
                x = i.invoiceItems.filter((n) => (0, R.xq)(n.subscriptionPlanId)),
                S = x.reduce((n, e) => n + e.amount, 0),
                f = (0, A.sL)(p) * g,
                h = (0, _.$g)(f, i.currency),
                v = (0, _.CE)(h, a, u),
                j = (0, _.$g)(i.total, i.currency) + (i.currency !== M.Yr.USD ? "*" : ""),
                T = i.total - f - S,
                b = p.discounts.map((n) => {
                    let e = n.amount / p.quantity;
                    return { ...n, amount: e * g };
                }),
                E = b.find((n) => n.type === I.iS.SUBSCRIPTION_PLAN),
                N = b.find((n) => n.type === I.iS.ENTITLEMENT),
                L = p.subscriptionPlanPrice * g,
                O = (0, R.J$)(r.paymentSourceId);
            return {
                isLoading: !1,
                noticeProps: {
                    isPrepaid: O,
                    isReverseTrial: d,
                    premiumSubscription: e,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                },
                invoiceSummaryProps: {
                    addedQuantity: g,
                    guildBoostingSubscriptionPlan: o,
                    isPrepaid: O,
                    guildBoostPriceAmount: f,
                    formattedGuildBoostPrice: h,
                    formattedGuildBoostRate: v,
                    formattedTotal: j,
                    basePlanAdjustment: S,
                    basePlanInvoiceItems: x,
                    guildBoostingAdjustment: T,
                    subscriptionDiscount: E,
                    entitlementDiscount: N,
                    originalAmount: L,
                    premiumSubscription: e,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                    isReverseTrial: d,
                    priceOptions: r,
                },
            };
        })({
            premiumSubscription: t,
            premiumSubscriptionPlan: l,
            proratedInvoicePreview: r,
            renewalInvoicePreview: a,
            priceOptions: u,
        });
    if (o.isLoading) return { isLoading: !0, loadingContent: null };
    let { noticeProps: d, invoiceSummaryProps: m } = o,
        {
            isPrepaid: p,
            originalAmount: y,
            basePlanAdjustment: g,
            basePlanInvoiceItems: x,
            guildBoostingAdjustment: h,
            isReverseTrial: j,
        } = m,
        b = ((n) => {
            let {
                addedQuantity: e,
                guildBoostingSubscriptionPlan: t,
                isPrepaid: i,
                formattedGuildBoostPrice: l,
                formattedGuildBoostRate: r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: c,
                proratedInvoicePreview: u,
            } = n;
            return {
                label: O.intl.formatToPlainString(O.t.a3cAOg, {
                    numGuildSubscriptions: e,
                    planName: (0, R.Mn)(t.id, !1, i),
                }),
                value: i ? l : r,
                subscriptionDiscount: s,
                entitlementDiscount: a,
                originalAmount: c,
                currency: u.currency,
                interval: t.interval,
                intervalCount: t.intervalCount,
            };
        })(m),
        E = null;
    if (
        (null != r &&
            null != a &&
            (E =
                null != t
                    ? (0, i.jsx)(T.m0, {
                          premiumSubscription: t,
                          proratedInvoice: r,
                          renewalInvoice: a,
                          isUpdate: !0,
                          isPrepaidPaymentSource: p,
                          isTrial: j,
                          shouldUseUnifiedCheckoutUI: n,
                      })
                    : (0, i.jsx)(T.m0, {
                          renewalInvoice: a,
                          priceOptions: u,
                          isPrepaidPaymentSource: p,
                          shouldUseUnifiedCheckoutUI: n,
                      })),
        !n)
    )
        return {
            isLoading: !1,
            isReturningUnifiedCheckoutUI: !1,
            legacyCheckoutContent: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(J, { ...d }),
                    (0, i.jsx)(q, {
                        ...m,
                        initialLineItemComponent: (0, i.jsx)(v.f0, { ...b }),
                        subscriptionInvoiceDetailsContent: E,
                    }),
                ],
            }),
        };
    {
        let { lineItems: n, ...e } = (0, f.EA)({ id: "main-line-item", amount: y, ...b });
        return (
            null != r &&
                (0 !== g &&
                    n.push({
                        id: "base-plan-adjustment",
                        label: O.intl.formatToPlainString(O.t.ZSVged, { planName: (0, R.RH)(x[0].subscriptionPlanId) }),
                        tooltip: O.intl.string(O.t.JmwQJM),
                        amount: g,
                        currency: r.currency,
                    }),
                0 !== h &&
                    n.push({
                        id: "guild-boosting-adjustment",
                        label: O.intl.string(O.t["+as5ZZ"]),
                        tooltip: O.intl.string(O.t.JmwQJM),
                        amount: h,
                        currency: r.currency,
                    })),
            {
                isLoading: !1,
                isReturningUnifiedCheckoutUI: !0,
                unifiedSubscriptionDetailsContent: E,
                unifiedInvoiceSummaryContent: (0, i.jsx)(S.ID, { lineItems: n, ...e }),
            }
        );
    }
}
function q(n) {
    let {
        isPrepaid: e,
        basePlanAdjustment: t,
        basePlanInvoiceItems: l,
        guildBoostingAdjustment: r,
        formattedTotal: s,
        proratedInvoicePreview: a,
        initialLineItemComponent: c,
        subscriptionInvoiceDetailsContent: u,
    } = n;
    return (0, i.jsxs)(v.Yx, {
        children: [
            (0, i.jsx)(v.Xd, { children: O.intl.string(O.t.CWIwms) }),
            c,
            0 !== t
                ? (0, i.jsx)(v.oR, {
                      label: (0, i.jsx)(T.sw, {
                          label: O.intl.formatToPlainString(O.t.ZSVged, {
                              planName: (0, R.RH)(l[0].subscriptionPlanId),
                          }),
                          tooltipText: O.intl.string(O.t.JmwQJM),
                      }),
                      value: (0, _.$g)(t, a.currency),
                  })
                : null,
            0 !== r
                ? (0, i.jsx)(v.oR, {
                      label: (0, i.jsx)(T.sw, {
                          label: O.intl.string(O.t["+as5ZZ"]),
                          tooltipText: O.intl.string(O.t.JmwQJM),
                      }),
                      value: (0, _.$g)(r, a.currency),
                  })
                : null,
            (0, i.jsx)(v.pK, {}),
            (0, i.jsx)(v.Sd, {
                label: O.intl.format(a.taxInclusive ? (e ? O.t.BqdxQt : O.t.XH4raN) : O.t.RUI48E, {}),
                value: s,
            }),
            u,
        ],
    });
}
