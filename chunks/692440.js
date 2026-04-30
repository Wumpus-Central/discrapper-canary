n.d(t, {
    DK: () => O,
    DP: () => Y,
    Lw: () => K,
    U5: () => G,
    _J: () => w,
    de: () => H,
    m0: () => z,
    mT: () => U,
    tC: () => X,
    wP: () => F,
});
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(284009),
    c = n.n(i),
    u = n(17928),
    o = n(990078),
    d = n(290136),
    m = n(939249),
    x = n(534514),
    p = n(834730),
    v = n(793574),
    h = n(688810),
    g = n(93159),
    f = n(848584),
    b = n(888751),
    j = n(97352),
    A = n(147925),
    _ = n(975571),
    y = n(927578),
    N = n(580630),
    E = n(543767),
    I = n(874638),
    k = n(234419),
    P = n(735164),
    T = n(787455),
    C = n(815545),
    L = n(788868),
    R = n(652215),
    S = n(985018),
    M = n(47463);
function B(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: a,
            currency: s,
            className: l,
            isPrepaidPaymentSource: i,
            referralTrialOfferId: c,
            inTrialPeriod: m,
        } = e,
        x = (0, k.V)(c),
        p = (0, u.bG)([j.A], () => j.A.get(t.subscriptionPlanId)),
        v = null != x ? x.subscription_trial : void 0,
        {
            subscriptionPlan: h,
            label: g,
            value: f,
            originalAmount: b,
            subscriptionDiscount: A,
            entitlementDiscount: _,
        } = (0, C.Ae)(t, {
            subscriptionPlan: p,
            subscriptionTrial: v,
            overrideAmount: n,
            isPrepaidPaymentSource: i,
            currency: s,
        }),
        y = g;
    return (
        !0 === a &&
            (y = (0, r.jsxs)("div", {
                className: M._H,
                children: [
                    (0, r.jsx)("div", { children: y }),
                    (0, r.jsx)(o.m, {
                        text: S.intl.format(S.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": S.intl.string(S.t.P68ePO),
                            className: M.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(P.f0, {
            label: y,
            value: f,
            originalAmount: b,
            subscriptionDiscount: A,
            entitlementDiscount: _,
            interval: h.interval,
            intervalCount: h.intervalCount,
            currency: s,
            className: l,
            inTrialPeriod: m,
        })
    );
}
function D(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: a } = e;
    return (0, r.jsxs)("div", {
        className: M._H,
        children: [
            t,
            null != n &&
                (0, r.jsx)(o.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, r.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": a, className: M.kK }),
                }),
        ],
    });
}
let G = (e) => (e.currency === R.Yri.USD ? (0, N.$g)(e.total, e.currency) : `${(0, N.$g)(e.total, e.currency)}*`);
function w(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: a } = e,
        {
            guildSubscriptionPlan: s,
            basePlanInvoiceItem: l,
            guildSubscriptionInvoiceItem: i,
            guildSubscriptionAmount: c,
            formattedGuildBoostPrice: u,
            formattedGuildBoostRate: o,
            guildBoostItemLabel: d,
        } = (0, C.rc)(t, { isPrepaidPaymentSource: n });
    if (a) {
        let { lineItems: e } = (0, b.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, r.jsx)(f.Vm, { label: S.intl.string(S.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l ? (0, r.jsx)(B, { invoiceItem: l, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== c && null != i && null != s ? (0, r.jsx)(P.oR, { label: d, value: n ? u : o }) : null,
            (0, r.jsx)(T.A, { invoice: t }),
            (0, r.jsx)(P.pK, {}),
            (0, r.jsx)(P.Sd, {
                label: S.intl.format(t.taxInclusive ? (n ? S.t.BqdxQt : S.t.XH4raN) : S.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
function U(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: a, referralTrialOfferId: s } = e,
        { newPlanInvoiceItem: l, basePlanFullAmount: i, invoiceAdjustmentDisplayItems: c } = (0, C.SA)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B, {
                invoiceItem: l,
                currency: t.currency,
                overrideAmount: i,
                isPrepaidPaymentSource: a,
                referralTrialOfferId: s,
            }),
            c.map((e) => {
                let { id: t, label: n, tooltipText: a, tooltipAriaLabel: s, value: l } = e;
                return (0, r.jsx)(
                    P.oR,
                    { label: (0, r.jsx)(D, { label: n, tooltipText: a, tooltipAriaLabel: s }), value: l },
                    t,
                );
            }),
            (0, r.jsx)(T.A, { invoice: t }),
            (0, r.jsx)(P.pK, {}),
            (0, r.jsx)(P.Sd, {
                label: S.intl.format(t.taxInclusive ? (a ? S.t.BqdxQt : S.t.XH4raN) : S.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
let O = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: a, intervalCount: s } = (0, y.Ge)(t),
        { intervalType: l, intervalCount: i } = (0, y.Ge)(n);
    if (a !== l || s !== i || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != r ? r : t.subscriptionPeriodEnd;
    return S.intl.format(S.t.JWWD4E, { renewalDate: c });
};
function F(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        s = O({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a });
    return null == s ? null : (0, r.jsx)("div", { className: M.gX, children: s });
}
function W(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: a, inTrialPeriod: s } = e,
        { intervalType: i, intervalCount: c } = (0, y.Ge)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(P.Xd, { children: S.intl.string(S.t.tuqjWQ) }),
                          (0, C.Q8)(n).map((e) =>
                              (0, r.jsx)(B, { invoiceItem: e, currency: n.currency, inTrialPeriod: s }, e.id),
                          ),
                          (0, r.jsx)(P.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(P.Xd, { children: S.intl.string(S.t.qxVrh6) }),
            (0, C.Q8)(a, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...s } = e;
                return (0, r.jsx)(
                    B,
                    {
                        invoiceItem: s,
                        currency: a.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: l()({ [M.sy]: n }),
                    },
                    s.id,
                );
            }),
            (0, r.jsx)(T.A, { invoice: a }),
            (0, r.jsx)(P.pK, {}),
            (0, r.jsx)(P.oR, {
                label: S.intl.string(S.t.AChTLW),
                value: (0, N.CE)((0, N.$g)(a.total, a.currency), i, c),
                className: M.RV,
            }),
        ],
    });
}
function H(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: r,
            renewalInvoice: a,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: l,
        } = e;
    return null != n
        ? n
        : ((t = null != r ? r.subscriptionPeriodEnd : s ? a.subscriptionPeriodStart : a.subscriptionPeriodEnd),
            null != l && l.isFractionalPremiumActive)
          ? (0, y._e)(t, l.unactivatedUnits, l.currentEntitlementEndsAt)
          : t;
}
function V(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: a,
            isUpdate: s,
            overrideRenewalDate: l,
            trialFooterMessageOverride: i,
        } = e,
        c = (0, k.V)()?.subscription_trial,
        { intervalType: u, intervalCount: o } = (0, y.Ge)(n);
    if (null == t) return null;
    if (a) {
        let e = (0, y.re)({ intervalType: c?.interval, intervalCount: c?.interval_count }),
            t = c?.interval === L.WT.DAY && c?.interval_count < 28 ? 2 : 7;
        return (
            i ??
            S.intl.format(S.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: R.X7G.CONTACT,
                helpdeskArticle: _.A.getArticleURL(R.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? S.t["hay+gu"] : S.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: S.intl.format(d, {
            rate: (0, N.CE)((0, N.$g)(n.subtotal, n.currency), u, o),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: r, isUpdate: a } = e;
                return null != t
                    ? t
                    : a
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : r.subscriptionPeriodStart
                      : r.subscriptionPeriodEnd;
            })({ overrideRenewalDate: l, proratedInvoice: t, renewalInvoice: n, isUpdate: s }),
            contactLink: R.X7G.CONTACT,
            helpdeskArticle: _.A.getArticleURL(R.MVz.BILLING),
        }),
    });
}
function z(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: s,
            overrideRenewalDate: l,
            isUpdate: i = !1,
            isTrial: c = !1,
            priceOptions: u,
            isPrepaidPaymentSource: o = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: x = !1,
            fractionalPremiumInfo: p,
            shouldUseUnifiedCheckoutUI: f,
            unifiedCheckoutDefaultExpanded: j,
        } = e,
        { analyticsLocations: _ } = (0, h.Ay)(),
        y = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !i,
            analyticsLocatinons: _,
            analyticsLocation: v.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [N] = (0, E.Kq)(y),
        [I, k] = a.useState(!1);
    if (f) {
        let e = (0, b.Gj)(n ?? null, s, null, {
            overrideRenewalDate: l,
            isSubscriptionUpdate: i,
            fractionalPremiumInfo: p,
        });
        return (0, r.jsx)(g._D, { ...e, defaultExpanded: j });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o
                ? null
                : (0, r.jsx)(P.X0, {
                      children: (0, r.jsx)(V, {
                          proratedInvoice: n,
                          renewalInvoice: s,
                          isTrial: c,
                          isUpdate: i,
                          overrideRenewalDate: l,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.D, {
                            onClick: () => k((e) => !e),
                            className: M.K3,
                            children: [
                                I ? S.intl.string(S.t.aBcRbK) : S.intl.string(S.t.X6duqp),
                                (0, r.jsx)(A.A, {
                                    direction: I ? A.A.Directions.UP : A.A.Directions.DOWN,
                                    className: M.ts,
                                }),
                            ],
                        }),
                        I ? (0, r.jsx)(W, { isUpdate: i, currentInvoice: N, newInvoice: s, inTrialPeriod: c }) : null,
                    ],
                }),
        ],
    });
}
let K = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, y.D8)(e.interval, !0, void 0, void 0, !0, (0, y.m6)(e.id))
        : S.intl.formatToPlainString(S.t.LQLxkW, { planName: (0, y.Mn)(e.id, !1, r) });
};
function Y(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: a = !1, isCustomGift: s = !1, invoicePreview: l } = e,
        { tax: i, taxInclusive: c, currency: u } = l,
        o = l.total,
        d = (0, N.$g)(o - i, u),
        m = (0, N.$g)(o, u),
        v = K(t, { isCustomGift: s, isPrepaidPaymentSource: a });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(x.D, { variant: "heading-md/semibold", children: S.intl.string(S.t.PEjaCx) }),
            i >= 0 && !1 === c
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.E, { variant: "text-md/bold", className: M.Uc, children: v }),
                          (0, r.jsxs)(P.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(P.Xd, { children: S.intl.string(S.t.sail9P) }),
                                  (0, r.jsx)(P.oR, { label: v, value: d }),
                                  (0, r.jsx)(T.A, { invoice: l }),
                                  (0, r.jsx)(P.pK, {}),
                                  (0, r.jsx)(P.oR, { label: S.intl.string(S.t.txajQG), value: m, className: M.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(x.D, { variant: "text-md/normal", children: `${v} - ${m}` }),
        ],
    });
}
function X(e) {
    let t,
        { invoice: n, plan: a } = e,
        s = (0, I.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === a.id);
    return (
        c()(null != s, "newPlanInvoiceItem can not be null"),
        a.interval === L.WT.MONTH
            ? (t = n.taxInclusive ? S.t.v9QeON : S.t.FALkO5)
            : a.interval === L.WT.YEAR
              ? (t = n.taxInclusive ? S.t.ECT4A5 : S.t["0HQxKW"])
              : c()(!1, "Invalid interval type"),
        (0, r.jsx)(p.E, {
            variant: "text-md/normal",
            children: S.intl.format(t, { price: (0, N.$g)(s.subscriptionPlanPrice, n.currency) }),
        })
    );
}
