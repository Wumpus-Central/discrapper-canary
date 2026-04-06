n.d(e, { Ak: () => $, pc: () => X, zT: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(997101),
    u = n(311907),
    o = n(397927),
    c = n(821891),
    d = n(953689),
    m = n(155718),
    p = n(793574),
    x = n(688810),
    I = n(918022),
    y = n(69882),
    v = n(742810),
    f = n(93159),
    S = n(596034),
    g = n(270537),
    h = n(241989),
    A = n(958340),
    P = n(826469),
    T = n(156312),
    b = n(534479),
    j = n(908419),
    E = n(888751),
    C = n(216641),
    N = n(543767),
    _ = n(874638),
    R = n(881489),
    U = n(735164),
    D = n(778307),
    w = n(692440),
    L = n(71393),
    M = n(351906),
    O = n(615405),
    G = n(97352),
    k = n(927578),
    B = n(580630),
    W = n(652215),
    Y = n(788868),
    V = n(818348),
    H = n(985018),
    K = n(756366),
    q = n(877985);
function F(t) {
    let {
            hasLegalTermsFlash: e,
            legalTermsNodeRef: n,
            onPurchaseTermsChange: r,
            premiumSubscriptionPlan: l,
            basePrice: a,
            proratedAmount: s,
            showPricingLink: u,
            showWithdrawalWaiver: o,
            paymentSourceType: m,
            shouldUseUnifiedCheckoutUI: p,
            renewalPrice: x,
            totalDue: I,
            currency: y,
            startDate: v,
        } = t,
        { immediateDelivery: f } = (0, j.U)();
    return p
        ? (0, i.jsx)(S._, {
              variant: {
                  type: S.I.Subscription,
                  purchaseButtonText: H.intl.string(H.t.eUEeCt),
                  totalDue: I,
                  renewalPrice: x,
                  currency: y,
                  interval: l.interval,
                  intervalCount: l.intervalCount,
                  startDate: v,
              },
              paymentSourceType: m,
              immediateDelivery: f,
          })
        : (0, i.jsx)(D.A, {
              isActive: e,
              ref: n,
              children:
                  null != a &&
                  (0, i.jsx)(d.A, {
                      onChange: r,
                      forceShow: !0,
                      finePrint: (0, i.jsx)(c.A, {
                          subscriptionPlan: l,
                          paymentSourceType: m,
                          proratedAmount: s,
                          basePrice: a,
                          productLine: W.EZt.BOOST,
                      }),
                      showPricingLink: u,
                      showWithdrawalWaiver: o,
                      subscriptionPlan: l,
                  }),
          });
}
function J(t) {
    return H.intl.format(H.t.IeaYqg, { endDate: t });
}
function $(t) {
    let { text: e, className: n } = t;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)("div", { className: q.bU }),
            (0, i.jsx)(o.Text, { variant: "text-sm/normal", className: q.b7, children: e }),
            (0, i.jsx)("div", { className: q.bU }),
        ],
    });
}
function Z(t) {
    let { notice: e } = t;
    return "reverseTrial" === e.type
        ? (0, i.jsx)($, { text: e.text, className: q.jk })
        : (0, i.jsx)(w.wP, { proratedInvoice: e.proratedInvoicePreview, renewalInvoice: e.renewalInvoicePreview });
}
function z(t) {
    let {
            isPrepaid: e,
            formattedTotal: n,
            originalAmount: r,
            basePlanAdjustment: l,
            basePlanInvoiceItems: a,
            guildBoostingAdjustment: s,
            proratedInvoicePreview: u,
            shouldUseUnifiedCheckoutUI: o,
            subscriptionInvoiceDetailsContent: c,
        } = t,
        d = ((t) => {
            let {
                addedQuantity: e,
                guildBoostingSubscriptionPlan: n,
                isPrepaid: i,
                formattedGuildBoostPrice: r,
                formattedGuildBoostRate: l,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                proratedInvoicePreview: o,
            } = t;
            return {
                label: H.intl.formatToPlainString(H.t.a3cAOg, {
                    numGuildSubscriptions: e,
                    planName: (0, k.Mn)(n.id, !1, i),
                }),
                value: i ? r : l,
                subscriptionDiscount: a,
                entitlementDiscount: s,
                originalAmount: u,
                currency: o.currency,
                interval: n.interval,
                intervalCount: n.intervalCount,
            };
        })(t),
        m = [];
    if (
        (0 !== l &&
            m.push({
                id: "base-plan-adjustment",
                label: H.intl.formatToPlainString(H.t.ZSVged, { planName: (0, k.RH)(a[0].subscriptionPlanId) }),
                tooltip: H.intl.string(H.t.JmwQJM),
                amount: l,
                lineItemType: "adjustment",
            }),
        0 !== s &&
            m.push({
                id: "guild-boosting-adjustment",
                label: H.intl.string(H.t["+as5ZZ"]),
                tooltip: H.intl.string(H.t.JmwQJM),
                amount: s,
                lineItemType: "adjustment",
            }),
        0 !== u.tax && m.push({ id: "tax", label: H.intl.string(H.t.jiRvC7), amount: u.tax, lineItemType: "tax" }),
        o)
    ) {
        let { lineItems: t, currency: e } = (0, E.EA)({ id: "main-line-item", amount: r, ...d }),
            n = [...t, ...m];
        return (0, i.jsx)(g.Vm, {
            defaultExpanded: !0,
            label: H.intl.string(K.default.eoXh7B),
            lineItems: n,
            currency: e,
        });
    }
    return (0, i.jsxs)(U.Yx, {
        children: [
            (0, i.jsx)(U.Xd, { children: H.intl.string(H.t.CWIwms) }),
            (0, i.jsx)(U.f0, { ...d }),
            m.map((t) =>
                (0, i.jsx)(
                    U.oR,
                    {
                        label: (0, i.jsx)(w.sw, { label: t.label, tooltipText: t.tooltip ?? void 0 }),
                        value: (0, B.$g)(t.amount, u.currency),
                    },
                    t.id,
                ),
            ),
            (0, i.jsx)(U.pK, {}),
            (0, i.jsx)(U.Sd, {
                label: H.intl.format(u.taxInclusive ? (e ? H.t.BqdxQt : H.t.XH4raN) : H.t.RUI48E, {}),
                value: n,
            }),
            c,
        ],
    });
}
function Q(t) {
    let {
        isSubscriptionUpdate: e,
        premiumSubscription: n,
        proratedInvoicePreview: r,
        renewalInvoicePreview: l,
        isPrepaid: a,
        isReverseTrial: s,
        priceOptions: u,
        shouldUseUnifiedCheckoutUI: o,
    } = t;
    return null != n
        ? (0, i.jsx)(w.m0, {
              premiumSubscription: n,
              proratedInvoice: r,
              renewalInvoice: l,
              isUpdate: e,
              isPrepaidPaymentSource: a,
              isTrial: s,
              shouldUseUnifiedCheckoutUI: o,
          })
        : (0, i.jsx)(w.m0, {
              renewalInvoice: l,
              priceOptions: u,
              isPrepaidPaymentSource: a,
              shouldUseUnifiedCheckoutUI: o,
          });
}
function X(t) {
    let {
            guildId: e,
            paymentSources: n,
            priceOptions: l,
            currentPremiumSubscription: c,
            premiumSubscriptionPaymentSourceId: d,
            premiumSubscriptionPlan: S,
            newAdditionalPlans: g,
            setPaymentSourceId: j,
            onPaymentSourceAdd: E,
            onPurchaseTermsChange: U,
            legalTermsNodeRef: D,
            hasLegalTermsFlash: W,
        } = t,
        $ = (0, v.D7)({ location: "GuildBoostingReview" }),
        X = (function (t) {
            let e,
                {
                    guildId: n,
                    priceOptions: i,
                    currentPremiumSubscription: l,
                    premiumSubscriptionPlan: s,
                    newAdditionalPlans: o,
                } = t,
                c = (0, u.bG)([L.A, A.A], () => {
                    let t = L.A.getGuild(n);
                    return null != t ? t : A.A.isGuildFetching(n) ? null : A.A.getGuild(n);
                }, [n]),
                d = s.interval,
                m = s.intervalCount,
                I = (0, u.bG)([G.A], () => G.A.getForSkuAndInterval((0, k.mH)(Y.pe.GUILD), d, m));
            a()(null != I, "Missing guildBoostingSubscriptionPlan");
            let y = (0, k.J$)(i.paymentSourceId),
                v = (0, R.ds)(),
                { setInvoicePreview: f } = (0, T.P5)(),
                S = i.paymentSourceId;
            e = null != l ? (0, k.Om)(l, o[0].quantity, o[0].planId) : o;
            let { analyticsLocations: g } = (0, x.Ay)(),
                [h] = (0, N.Kq)({
                    subscriptionId: l?.id,
                    items: e,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: S,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: p.A.GUILD_BOOSTING_REVIEW_PRORATED,
                }),
                [P] = (0, N.Kq)({
                    subscriptionId: l?.id,
                    items: e,
                    renewal: !0,
                    paymentSourceId: S,
                    currency: i.currency,
                    analyticsLocations: g,
                    analyticsLocation: p.A.GUILD_BOOSTING_REVIEW_RENEWAL,
                });
            return (
                r.useEffect(() => {
                    f(h);
                }, [f, h]),
                {
                    guild: c ?? null,
                    guildBoostingSubscriptionPlan: I,
                    isPrepaid: y,
                    isReverseTrial: v,
                    paymentSourceId: S,
                    proratedInvoicePreview: h,
                    renewalInvoicePreview: P,
                    isSubscriptionUpdate: null != l,
                }
            );
        })({
            guildId: e,
            priceOptions: l,
            currentPremiumSubscription: c,
            premiumSubscriptionPlan: S,
            newAdditionalPlans: g,
        }),
        {
            isSubscriptionUpdate: tt,
            guild: te,
            paymentSourceId: tn,
            isPrepaid: ti,
            isReverseTrial: tr,
            proratedInvoicePreview: tl,
            renewalInvoicePreview: ta,
        } = X,
        ts = r.useMemo(() => {
            let t = tl?.checkoutContext;
            return null == t || null == t.payment_sources ? [] : t.payment_sources.map(P.A.createFromCheckoutContext);
        }, [tl?.checkoutContext]),
        {
            dropdownPaymentSources: tu,
            giftCardsEnabled: to,
            dropdownPaymentSourceId: tc,
            handleDropdownPaymentSourceChange: td,
            giftCardCheckboxProps: tm,
        } = (0, I.Y)({
            checkoutPaymentSources: ts,
            setPaymentSourceId: j,
            location: "GuildBoostReview",
            subscriptionPaymentSourceId: d,
            itemAmount: tl?.total,
        }),
        tp = (0, u.bG)([M.A], () => M.A.hidePersonalInformation);
    if (null == tl || null == ta || null == te) return $ ? (0, i.jsx)(y.Ed, {}) : (0, i.jsx)(b.A, {});
    let tx = (0, i.jsx)(Q, {
            isSubscriptionUpdate: tt,
            premiumSubscription: c,
            proratedInvoicePreview: tl,
            renewalInvoicePreview: ta,
            isPrepaid: ti,
            isReverseTrial: tr,
            priceOptions: l,
            shouldUseUnifiedCheckoutUI: $,
        }),
        tI = (0, i.jsx)(f.nL, {
            label: $ ? H.intl.string(H.t["u+Cw58"]) : H.intl.string(H.t["mmDvV+"]),
            giftCardsEnabled: to,
            giftCardCheckboxProps: tm,
            paymentSourceDropdownProps: {
                paymentSources: tu,
                selectedPaymentSourceId: tc,
                onChange: td,
                onPaymentSourceAdd: E,
                hidePersonalInformation: tp,
                shouldUseUnifiedCheckoutUI: $,
            },
            disabled: null != d,
        }),
        ty = (function (t) {
            let {
                    isSubscriptionUpdate: e,
                    hasLegalTermsFlash: n,
                    legalTermsNodeRef: i,
                    onPurchaseTermsChange: r,
                    premiumSubscriptionPlan: l,
                    renewalInvoicePreview: a,
                    proratedInvoicePreview: u,
                    paymentSources: o,
                    paymentSourceId: c,
                    shouldUseUnifiedCheckoutUI: d,
                } = t,
                m = (0, C.g)(o, c),
                p = { amount: a.subtotal, currency: a.currency, tax: a.tax, taxInclusive: !1 },
                x = s.M.EEA_COUNTRIES.has(O.A.ipCountryCodeWithFallback);
            return {
                shouldUseUnifiedCheckoutUI: d,
                hasLegalTermsFlash: n,
                legalTermsNodeRef: i,
                onPurchaseTermsChange: r,
                premiumSubscriptionPlan: l,
                basePrice: p,
                proratedAmount: u.total,
                showPricingLink: u.currency !== V.Yr.USD,
                showWithdrawalWaiver: x,
                paymentSourceType: m,
                totalDue: u.total,
                renewalPrice: a.subtotal,
                currency: u.currency,
                startDate: (0, w.de)({ isSubscriptionUpdate: e, currentInvoice: u, renewalInvoice: a }),
            };
        })({
            isSubscriptionUpdate: tt,
            hasLegalTermsFlash: W,
            legalTermsNodeRef: D,
            onPurchaseTermsChange: U,
            premiumSubscriptionPlan: S,
            renewalInvoicePreview: ta,
            proratedInvoicePreview: tl,
            paymentSources: n,
            paymentSourceId: tn,
            shouldUseUnifiedCheckoutUI: $,
        }),
        tv = (0, i.jsx)(F, { ...ty }),
        tf = (function (t) {
            let {
                    premiumSubscription: e,
                    premiumSubscriptionPlan: n,
                    proratedInvoicePreview: i,
                    renewalInvoicePreview: r,
                    priceOptions: l,
                    reviewState: s,
                } = t,
                { guildBoostingSubscriptionPlan: u, isPrepaid: o, isReverseTrial: c } = s,
                d = n.interval,
                p = n.intervalCount,
                x = (t) => (0, _.Z)(i.invoiceItems).find((e) => Y.pW.has(e.subscriptionPlanId) && t(e)),
                I = x((t) => t.amount >= 0);
            a()(null != I, "Missing guild boosting invoice item");
            let y = x((t) => t.amount < 0),
                v = null != y ? I.quantity - y.quantity : I.quantity,
                f = i.invoiceItems.filter((t) => (0, k.xq)(t.subscriptionPlanId)),
                S = f.reduce((t, e) => t + e.amount, 0),
                g = (0, N.sL)(I) * v,
                h = (0, B.$g)(g, i.currency),
                A = (0, B.CE)(h, d, p),
                P = (0, B.$g)(i.total, i.currency) + (i.currency !== V.Yr.USD ? "*" : ""),
                T = i.subtotal - g - S,
                b = I.discounts.map((t) => {
                    let e = t.amount / I.quantity;
                    return { ...t, amount: e * v };
                }),
                j = b.find((t) => t.type === m.iS.SUBSCRIPTION_PLAN),
                E = b.find((t) => t.type === m.iS.ENTITLEMENT),
                C = I.subscriptionPlanPrice * v;
            return {
                addedQuantity: v,
                guildBoostingSubscriptionPlan: u,
                isPrepaid: o,
                isReverseTrial: c,
                formattedGuildBoostPrice: h,
                formattedGuildBoostRate: A,
                formattedOriginalAmountGuildBoostRate: (0, B.CE)((0, B.$g)(C, i.currency), d, p),
                formattedTotal: P,
                basePlanAdjustment: S,
                basePlanInvoiceItems: f,
                guildBoostingAdjustment: T,
                subscriptionDiscount: j,
                entitlementDiscount: E,
                originalAmount: C,
                premiumSubscription: e,
                proratedInvoicePreview: i,
                renewalInvoicePreview: r,
                priceOptions: l,
            };
        })({
            premiumSubscription: c,
            premiumSubscriptionPlan: S,
            proratedInvoicePreview: tl,
            renewalInvoicePreview: ta,
            priceOptions: l,
            reviewState: X,
        }),
        tS = (0, i.jsx)(z, { ...tf, shouldUseUnifiedCheckoutUI: $, subscriptionInvoiceDetailsContent: tx }),
        tg = (function (t) {
            let {
                isPrepaid: e,
                isReverseTrial: n,
                premiumSubscription: i,
                proratedInvoicePreview: r,
                renewalInvoicePreview: l,
                shouldUseUnifiedCheckoutUI: a,
            } = t;
            if (e) return null;
            if (n && null != i) return { type: "reverseTrial", text: J(i.currentPeriodEnd) };
            if (a) return null;
            let s = (0, w.DK)({ proratedInvoice: r, renewalInvoice: l });
            return null == s
                ? null
                : { type: "periodReset", text: s, proratedInvoicePreview: r, renewalInvoicePreview: l };
        })({
            isPrepaid: ti,
            isReverseTrial: tr,
            premiumSubscription: c,
            proratedInvoicePreview: tl,
            renewalInvoicePreview: ta,
            shouldUseUnifiedCheckoutUI: $,
        });
    if ($) {
        let t = (function (t, e, n) {
                let {
                        addedQuantity: r,
                        guildBoostingSubscriptionPlan: l,
                        isPrepaid: a,
                        formattedGuildBoostRate: s,
                        formattedOriginalAmountGuildBoostRate: u,
                        subscriptionDiscount: c,
                    } = e,
                    d = null != c;
                return {
                    label: H.intl.formatToPlainString(H.t.a3cAOg, {
                        numGuildSubscriptions: r,
                        planName: (0, k.Mn)(l.id, !1, a),
                    }),
                    target: { type: "boost", guild: t },
                    graphic: (0, i.jsx)(h.a6, {}),
                    price: s,
                    PriceIcon: d ? o.tvc : void 0,
                    priceTooltip: d ? H.intl.string(K.default.YUNJJa) : void 0,
                    priceSubText: d ? u : void 0,
                    bottomSubText: n?.text ?? null,
                };
            })(te, tf, tg),
            e = (0, i.jsx)(h.f7, { ...t });
        return (0, i.jsx)(y.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: e,
            subscriptionDetailsContent: tx,
            paymentSelectContent: tI,
            invoiceSummaryContent: tS,
            legalContent: tv,
            invoiceTotalDueValue: tf.formattedTotal,
            invoiceTotalDueLabel: H.intl.string(K.default.R0cZsM),
        });
    }
    return (0, i.jsxs)("div", {
        children: [
            null != tg && (0, i.jsx)(Z, { notice: tg }),
            tS,
            (0, i.jsx)("div", { className: q.LC, children: tI }),
            tv,
        ],
    });
}
