t.d(n, { Ak: () => J, pc: () => Z, zT: () => q }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(997101),
    o = t(311907),
    c = t(397927),
    u = t(821891),
    d = t(953689),
    p = t(155718),
    m = t(793574),
    _ = t(688810),
    x = t(918022),
    f = t(69882),
    h = t(742810),
    S = t(93159),
    g = t(596034),
    b = t(270537),
    I = t(241989),
    P = t(958340),
    y = t(826469),
    A = t(413748),
    E = t(534479),
    v = t(908419),
    C = t(888751),
    N = t(216641),
    j = t(543767),
    T = t(874638),
    M = t(881489),
    L = t(735164),
    R = t(778307),
    D = t(692440),
    U = t(71393),
    w = t(351906),
    k = t(615405),
    O = t(97352),
    G = t(927578),
    B = t(580630),
    W = t(652215),
    F = t(788868),
    Y = t(818348),
    V = t(985018),
    H = t(366023),
    K = t(877985);
function z(e) {
    let {
            hasLegalTermsFlash: n,
            legalTermsNodeRef: t,
            onPurchaseTermsChange: l,
            premiumSubscriptionPlan: r,
            basePrice: s,
            proratedAmount: a,
            showPricingLink: o,
            showWithdrawalWaiver: c,
            paymentSourceType: p,
            shouldUseUnifiedCheckoutUI: m,
            renewalPrice: _,
            totalDue: x,
            currency: f,
            startDate: h,
        } = e,
        { immediateDelivery: S } = (0, v.U)();
    return m
        ? (0, i.jsx)(g._, {
              variant: {
                  type: g.I.Subscription,
                  purchaseButtonText: V.intl.string(V.t.eUEeCt),
                  totalDue: x,
                  renewalPrice: _,
                  currency: f,
                  interval: r.interval,
                  intervalCount: r.intervalCount,
                  startDate: h,
              },
              paymentSourceType: p,
              immediateDelivery: S,
          })
        : (0, i.jsx)(R.A, {
              isActive: n,
              ref: t,
              children:
                  null != s &&
                  (0, i.jsx)(d.A, {
                      onChange: l,
                      forceShow: !0,
                      finePrint: (0, i.jsx)(u.A, {
                          subscriptionPlan: r,
                          paymentSourceType: p,
                          proratedAmount: a,
                          basePrice: s,
                          productLine: W.EZt.BOOST,
                      }),
                      showPricingLink: o,
                      showWithdrawalWaiver: c,
                      subscriptionPlan: r,
                  }),
          });
}
function q(e) {
    return V.intl.format(V.t.IeaYqg, { endDate: e });
}
function J(e) {
    let { text: n, className: t } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)("div", { className: K.bU }),
            (0, i.jsx)(c.Text, { variant: "text-sm/normal", className: K.b7, children: n }),
            (0, i.jsx)("div", { className: K.bU }),
        ],
    });
}
function $(e) {
    let { notice: n } = e;
    return "reverseTrial" === n.type
        ? (0, i.jsx)(J, { text: n.text, className: K.jk })
        : (0, i.jsx)(D.wP, { proratedInvoice: n.proratedInvoicePreview, renewalInvoice: n.renewalInvoicePreview });
}
function Q(e) {
    let {
            isPrepaid: n,
            formattedTotal: t,
            originalAmount: l,
            basePlanAdjustment: r,
            basePlanInvoiceItems: s,
            guildBoostingAdjustment: a,
            proratedInvoicePreview: o,
            shouldUseUnifiedCheckoutUI: c,
            subscriptionInvoiceDetailsContent: u,
        } = e,
        d = ((e) => {
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
                label: V.intl.formatToPlainString(V.t.a3cAOg, {
                    numGuildSubscriptions: n,
                    planName: (0, G.Mn)(t.id, !1, i),
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
        p = [];
    if (
        (0 !== r &&
            p.push({
                id: "base-plan-adjustment",
                label: V.intl.formatToPlainString(V.t.ZSVged, { planName: (0, G.RH)(s[0].subscriptionPlanId) }),
                tooltip: V.intl.string(V.t.JmwQJM),
                amount: r,
                lineItemType: "adjustment",
            }),
        0 !== a &&
            p.push({
                id: "guild-boosting-adjustment",
                label: V.intl.string(V.t["+as5ZZ"]),
                tooltip: V.intl.string(V.t.JmwQJM),
                amount: a,
                lineItemType: "adjustment",
            }),
        0 !== o.tax && p.push({ id: "tax", label: V.intl.string(V.t.jiRvC7), amount: o.tax, lineItemType: "tax" }),
        c)
    ) {
        let { lineItems: e, currency: n } = (0, C.EA)({ id: "main-line-item", amount: l, ...d }),
            t = [...e, ...p];
        return (0, i.jsx)(b.Vm, {
            defaultExpanded: !0,
            label: V.intl.string(H.default.eoXh7B),
            lineItems: t,
            currency: n,
        });
    }
    return (0, i.jsxs)(L.Yx, {
        children: [
            (0, i.jsx)(L.Xd, { children: V.intl.string(V.t.CWIwms) }),
            (0, i.jsx)(L.f0, { ...d }),
            p.map((e) =>
                (0, i.jsx)(
                    L.oR,
                    {
                        label: (0, i.jsx)(D.sw, { label: e.label, tooltipText: e.tooltip ?? void 0 }),
                        value: (0, B.$g)(e.amount, o.currency),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(L.pK, {}),
            (0, i.jsx)(L.Sd, {
                label: V.intl.format(o.taxInclusive ? (n ? V.t.BqdxQt : V.t.XH4raN) : V.t.RUI48E, {}),
                value: t,
            }),
            u,
        ],
    });
}
function X(e) {
    let {
        isSubscriptionUpdate: n,
        premiumSubscription: t,
        proratedInvoicePreview: l,
        renewalInvoicePreview: r,
        isPrepaid: s,
        isReverseTrial: a,
        priceOptions: o,
        shouldUseUnifiedCheckoutUI: c,
    } = e;
    return null != t
        ? (0, i.jsx)(D.m0, {
              premiumSubscription: t,
              proratedInvoice: l,
              renewalInvoice: r,
              isUpdate: n,
              isPrepaidPaymentSource: s,
              isTrial: a,
              shouldUseUnifiedCheckoutUI: c,
          })
        : (0, i.jsx)(D.m0, {
              renewalInvoice: r,
              priceOptions: o,
              isPrepaidPaymentSource: s,
              shouldUseUnifiedCheckoutUI: c,
          });
}
function Z(e) {
    let {
            guildId: n,
            paymentSources: t,
            priceOptions: r,
            currentPremiumSubscription: u,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: g,
            newAdditionalPlans: b,
            setPaymentSourceId: v,
            onPaymentSourceAdd: C,
            onPurchaseTermsChange: L,
            legalTermsNodeRef: R,
            hasLegalTermsFlash: W,
        } = e,
        J = (0, h.D7)({ location: "GuildBoostingReview" }),
        Z = (function (e) {
            let n,
                {
                    guildId: t,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: r,
                    newAdditionalPlans: a,
                } = e,
                c = (0, o.bG)([U.A, P.A], () => {
                    let e = U.A.getGuild(t);
                    return null != e ? e : P.A.isGuildFetching(t) ? null : P.A.getGuild(t);
                }, [t]),
                u = r.interval,
                d = r.intervalCount,
                p = (0, o.bG)([O.A], () => O.A.getForSkuAndInterval((0, G.mH)(F.pe.GUILD), u, d));
            s()(null != p, "Missing guildBoostingSubscriptionPlan");
            let x = (0, G.J$)(i.paymentSourceId),
                f = (0, M.ds)(),
                h = i.paymentSourceId;
            n = null != l ? (0, G.Om)(l, a[0].quantity, a[0].planId) : a;
            let { analyticsLocations: S } = (0, _.Ay)(),
                [g] = (0, j.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: h,
                    currency: i.currency,
                    analyticsLocations: S,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [b] = (0, j.Kq)({
                    subscriptionId: l?.id,
                    items: n,
                    renewal: !0,
                    paymentSourceId: h,
                    currency: i.currency,
                    analyticsLocations: S,
                    analyticsLocation: m.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                (0, A.F0)(g),
                {
                    guild: c ?? null,
                    guildBoostingSubscriptionPlan: p,
                    isPrepaid: x,
                    isReverseTrial: f,
                    paymentSourceId: h,
                    proratedInvoicePreview: g,
                    renewalInvoicePreview: b,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: n,
            priceOptions: r,
            currentPremiumSubscription: u,
            premiumSubscriptionPlan: g,
            newAdditionalPlans: b,
        }),
        {
            isSubscriptionUpdate: ee,
            guild: en,
            paymentSourceId: et,
            isPrepaid: ei,
            isReverseTrial: el,
            proratedInvoicePreview: er,
            renewalInvoicePreview: es,
        } = Z,
        ea = l.useMemo(() => {
            let e = er?.checkoutContext;
            return null == e || null == e.payment_sources ? [] : e.payment_sources.map(y.A.createFromCheckoutContext);
        }, [er?.checkoutContext]),
        {
            dropdownPaymentSources: eo,
            giftCardsEnabled: ec,
            dropdownPaymentSourceId: eu,
            handleDropdownPaymentSourceChange: ed,
            giftCardCheckboxProps: ep,
        } = (0, x.Y)({
            checkoutPaymentSources: ea,
            setPaymentSourceId: v,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: d,
            itemAmount: er?.total,
        }),
        em = (0, o.bG)([w.A], () => w.A.hidePersonalInformation);
    if (null == er || null == es || null == en) return J ? (0, i.jsx)(f.Ed, {}) : (0, i.jsx)(E.A, {});
    let e_ = (0, i.jsx)(X, {
            isSubscriptionUpdate: ee,
            premiumSubscription: u,
            proratedInvoicePreview: er,
            renewalInvoicePreview: es,
            isPrepaid: ei,
            isReverseTrial: el,
            priceOptions: r,
            shouldUseUnifiedCheckoutUI: J,
        }),
        ex = (0, i.jsx)(S.nL, {
            label: J ? V.intl.string(V.t["u+Cw58"]) : V.intl.string(V.t["mmDvV+"]),
            giftCardsEnabled: ec,
            giftCardCheckboxProps: ep,
            paymentSourceDropdownProps: {
                paymentSources: eo,
                selectedPaymentSourceId: eu,
                onChange: ed,
                onPaymentSourceAdd: C,
                hidePersonalInformation: em,
                shouldUseUnifiedCheckoutUI: J,
            },
            disabled: null != d,
        }),
        ef = (function (e) {
            let {
                    isSubscriptionUpdate: n,
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: i,
                    onPurchaseTermsChange: l,
                    premiumSubscriptionPlan: r,
                    renewalInvoicePreview: s,
                    proratedInvoicePreview: o,
                    paymentSources: c,
                    paymentSourceId: u,
                    shouldUseUnifiedCheckoutUI: d,
                } = e,
                p = (0, N.g)(c, u),
                m = { amount: s.subtotal, currency: s.currency, tax: s.tax, taxInclusive: !1 },
                _ = a.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback);
            return {
                shouldUseUnifiedCheckoutUI: d,
                hasLegalTermsFlash: t,
                legalTermsNodeRef: i,
                onPurchaseTermsChange: l,
                premiumSubscriptionPlan: r,
                basePrice: m,
                proratedAmount: o.total,
                showPricingLink: o.currency !== Y.Yr.USD,
                showWithdrawalWaiver: _,
                paymentSourceType: p,
                totalDue: o.total,
                renewalPrice: s.subtotal,
                currency: o.currency,
                startDate: (0, D.de)({ isSubscriptionUpdate: n, currentInvoice: o, renewalInvoice: s }),
            };
        })({
            isSubscriptionUpdate: ee,
            hasLegalTermsFlash: W,
            legalTermsNodeRef: R,
            onPurchaseTermsChange: L,
            premiumSubscriptionPlan: g,
            renewalInvoicePreview: es,
            proratedInvoicePreview: er,
            paymentSources: t,
            paymentSourceId: et,
            shouldUseUnifiedCheckoutUI: J,
        }),
        eh = (0, i.jsx)(z, { ...ef }),
        eS = (function (e) {
            let {
                    premiumSubscription: n,
                    premiumSubscriptionPlan: t,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: l,
                    priceOptions: r,
                    reviewState: a,
                } = e,
                { guildBoostingSubscriptionPlan: o, isPrepaid: c, isReverseTrial: u } = a,
                d = t.interval,
                m = t.intervalCount,
                _ = (e) => (0, T.Z)(i.invoiceItems).find((n) => F.pW.has(n.subscriptionPlanId) && e(n)),
                x = _((e) => e.amount >= 0);
            s()(null != x, "Missing guild boosting invoice item");
            let f = _((e) => e.amount < 0),
                h = null != f ? x.quantity - f.quantity : x.quantity,
                S = i.invoiceItems.filter((e) => (0, G.xq)(e.subscriptionPlanId)),
                g = S.reduce((e, n) => e + n.amount, 0),
                b = (0, j.sL)(x) * h,
                I = (0, B.$g)(b, i.currency),
                P = (0, B.CE)(I, d, m),
                y = (0, B.$g)(i.total, i.currency) + (i.currency !== Y.Yr.USD ? "*" : ""),
                A = i.subtotal - b - g,
                E = x.discounts.map((e) => {
                    let n = e.amount / x.quantity;
                    return { ...e, amount: n * h };
                }),
                v = E.find((e) => e.type === p.iS.SUBSCRIPTION_PLAN),
                C = E.find((e) => e.type === p.iS.ENTITLEMENT),
                N = x.subscriptionPlanPrice * h;
            return {
                addedQuantity: h,
                guildBoostingSubscriptionPlan: o,
                isPrepaid: c,
                isReverseTrial: u,
                formattedGuildBoostPrice: I,
                formattedGuildBoostRate: P,
                formattedOriginalAmountGuildBoostRate: (0, B.CE)((0, B.$g)(N, i.currency), d, m),
                formattedTotal: y,
                basePlanAdjustment: g,
                basePlanInvoiceItems: S,
                guildBoostingAdjustment: A,
                subscriptionDiscount: v,
                entitlementDiscount: C,
                originalAmount: N,
                premiumSubscription: n,
                proratedInvoicePreview: i,
                renewalInvoicePreview: l,
                priceOptions: r,
            };
        })({
            premiumSubscription: u,
            premiumSubscriptionPlan: g,
            proratedInvoicePreview: er,
            renewalInvoicePreview: es,
            priceOptions: r,
            reviewState: Z,
        }),
        eg = (0, i.jsx)(Q, { ...eS, shouldUseUnifiedCheckoutUI: J, subscriptionInvoiceDetailsContent: e_ }),
        eb = (function (e) {
            let {
                isPrepaid: n,
                isReverseTrial: t,
                premiumSubscription: i,
                proratedInvoicePreview: l,
                renewalInvoicePreview: r,
                shouldUseUnifiedCheckoutUI: s,
            } = e;
            if (n) return null;
            if (t && null != i) return { type: "reverseTrial", text: q(i.currentPeriodEnd) };
            if (s) return null;
            let a = (0, D.DK)({ proratedInvoice: l, renewalInvoice: r });
            return null == a
                ? null
                : { type: "periodReset", text: a, proratedInvoicePreview: l, renewalInvoicePreview: r };
        })({
            isPrepaid: ei,
            isReverseTrial: el,
            premiumSubscription: u,
            proratedInvoicePreview: er,
            renewalInvoicePreview: es,
            shouldUseUnifiedCheckoutUI: J,
        });
    if (J) {
        let e = (function (e, n, t) {
                let {
                        addedQuantity: l,
                        guildBoostingSubscriptionPlan: r,
                        isPrepaid: s,
                        formattedGuildBoostRate: a,
                        formattedOriginalAmountGuildBoostRate: o,
                        subscriptionDiscount: u,
                    } = n,
                    d = null != u;
                return {
                    label: V.intl.formatToPlainString(V.t.a3cAOg, {
                        numGuildSubscriptions: l,
                        planName: (0, G.Mn)(r.id, !1, s),
                    }),
                    target: { type: "boost", guild: e },
                    graphic: (0, i.jsx)(I.a6, {}),
                    price: a,
                    PriceIcon: d ? c.tvc : void 0,
                    priceTooltip: d ? V.intl.string(H.default.YUNJJa) : void 0,
                    priceSubText: d ? o : void 0,
                    bottomSubText: t?.text ?? null,
                };
            })(en, eS, eb),
            n = (0, i.jsx)(I.f7, { ...e });
        return (0, i.jsx)(f.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: n,
            subscriptionDetailsContent: e_,
            paymentSelectContent: ex,
            invoiceSummaryContent: eg,
            legalContent: eh,
            invoiceTotalDueValue: eS.formattedTotal,
            invoiceTotalDueLabel: V.intl.string(H.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != eb && (0, i.jsx)($, { notice: eb }),
            eg,
            (0, i.jsx)("div", { className: K.LC, children: ex }),
            eh,
        ],
    });
}
