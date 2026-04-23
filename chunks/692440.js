"use strict";
n.d(t, {
    DK: () => F,
    DP: () => z,
    Lw: () => K,
    U5: () => x,
    _J: () => G,
    de: () => j,
    m0: () => Y,
    mT: () => V,
    tC: () => $,
    wP: () => B,
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(17928),
    _ = n(990078),
    u = n(290136),
    c = n(939249),
    E = n(534514),
    h = n(834730),
    m = n(793574),
    f = n(688810),
    g = n(232467),
    p = n(848584),
    A = n(888751),
    I = n(97352),
    T = n(147925),
    S = n(975571),
    N = n(927578),
    C = n(580630),
    R = n(543767),
    O = n(874638),
    y = n(234419),
    v = n(735164),
    D = n(787455),
    L = n(815545),
    b = n(788868),
    w = n(652215),
    P = n(985018),
    k = n(47463);
function M(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: r,
            currency: s,
            className: a,
            isPrepaidPaymentSource: o,
            referralTrialOfferId: l,
            inTrialPeriod: c,
        } = e,
        E = (0, y.V)(l),
        h = (0, d.bG)([I.A], () => I.A.get(t.subscriptionPlanId)),
        m = null != E ? E.subscription_trial : void 0,
        {
            subscriptionPlan: f,
            label: g,
            value: p,
            originalAmount: A,
            subscriptionDiscount: T,
            entitlementDiscount: S,
        } = (0, L.Ae)(t, {
            subscriptionPlan: h,
            subscriptionTrial: m,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: s,
        }),
        N = g;
    return (
        !0 === r &&
            (N = (0, i.jsxs)("div", {
                className: k._H,
                children: [
                    (0, i.jsx)("div", { children: N }),
                    (0, i.jsx)(_.m, {
                        text: P.intl.format(P.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, i.jsx)(u.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": P.intl.string(P.t.P68ePO),
                            className: k.kK,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(v.f0, {
            label: N,
            value: p,
            originalAmount: A,
            subscriptionDiscount: T,
            entitlementDiscount: S,
            interval: f.interval,
            intervalCount: f.intervalCount,
            currency: s,
            className: a,
            inTrialPeriod: c,
        })
    );
}
function U(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: r } = e;
    return (0, i.jsxs)("div", {
        className: k._H,
        children: [
            t,
            null != n &&
                (0, i.jsx)(_.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, i.jsx)(u.c, { size: "md", color: "currentColor", "aria-label": r, className: k.kK }),
                }),
        ],
    });
}
let x = (e) => (e.currency === w.Yri.USD ? (0, C.$g)(e.total, e.currency) : `${(0, C.$g)(e.total, e.currency)}*`);
function G(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: r } = e,
        {
            guildSubscriptionPlan: s,
            basePlanInvoiceItem: a,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: d,
            formattedGuildBoostRate: _,
            guildBoostItemLabel: u,
        } = (0, L.rc)(t, { isPrepaidPaymentSource: n });
    if (r) {
        let { lineItems: e } = (0, A.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, i.jsx)(p.Vm, { label: P.intl.string(P.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a ? (0, i.jsx)(M, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != o && null != s ? (0, i.jsx)(v.oR, { label: u, value: n ? d : _ }) : null,
            (0, i.jsx)(D.A, { invoice: t }),
            (0, i.jsx)(v.pK, {}),
            (0, i.jsx)(v.Sd, {
                label: P.intl.format(t.taxInclusive ? (n ? P.t.BqdxQt : P.t.XH4raN) : P.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
function V(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: r, referralTrialOfferId: s } = e,
        { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, L.SA)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(M, {
                invoiceItem: a,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: s,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: r, tooltipAriaLabel: s, value: a } = e;
                return (0, i.jsx)(
                    v.oR,
                    { label: (0, i.jsx)(U, { label: n, tooltipText: r, tooltipAriaLabel: s }), value: a },
                    t,
                );
            }),
            (0, i.jsx)(D.A, { invoice: t }),
            (0, i.jsx)(v.pK, {}),
            (0, i.jsx)(v.Sd, {
                label: P.intl.format(t.taxInclusive ? (r ? P.t.BqdxQt : P.t.XH4raN) : P.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
let F = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: r, intervalCount: s } = (0, N.Ge)(t),
        { intervalType: a, intervalCount: o } = (0, N.Ge)(n);
    if (r !== a || s !== o || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let l = null != i ? i : t.subscriptionPeriodEnd;
    return P.intl.format(P.t.JWWD4E, { renewalDate: l });
};
function B(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        s = F({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r });
    return null == s ? null : (0, i.jsx)("div", { className: k.gX, children: s });
}
function H(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: r, inTrialPeriod: s } = e,
        { intervalType: o, intervalCount: l } = (0, N.Ge)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.pK, { extended: !0 }),
            null != n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(v.Xd, { children: P.intl.string(P.t.tuqjWQ) }),
                          (0, L.Q8)(n).map((e) =>
                              (0, i.jsx)(M, { invoiceItem: e, currency: n.currency, inTrialPeriod: s }, e.id),
                          ),
                          (0, i.jsx)(v.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, i.jsx)(v.Xd, { children: P.intl.string(P.t.qxVrh6) }),
            (0, L.Q8)(r, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...s } = e;
                return (0, i.jsx)(
                    M,
                    {
                        invoiceItem: s,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: a()({ [k.sy]: n }),
                    },
                    s.id,
                );
            }),
            (0, i.jsx)(D.A, { invoice: r }),
            (0, i.jsx)(v.pK, {}),
            (0, i.jsx)(v.oR, {
                label: P.intl.string(P.t.AChTLW),
                value: (0, C.CE)((0, C.$g)(r.total, r.currency), o, l),
                className: k.RV,
            }),
        ],
    });
}
function j(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: i,
            renewalInvoice: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: a,
        } = e;
    return null != n
        ? n
        : ((t = null != i ? i.subscriptionPeriodEnd : s ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != a && a.isFractionalPremiumActive)
          ? (0, N._e)(t, a.unactivatedUnits, a.currentEntitlementEndsAt)
          : t;
}
function W(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: r,
            isUpdate: s,
            overrideRenewalDate: a,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, y.V)()?.subscription_trial,
        { intervalType: d, intervalCount: _ } = (0, N.Ge)(n);
    if (null == t) return null;
    if (r) {
        let e = (0, N.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === b.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            P.intl.format(P.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: w.X7G.CONTACT,
                helpdeskArticle: S.A.getArticleURL(w.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let u = n.taxInclusive ? P.t["hay+gu"] : P.t.da0lki;
    return (0, i.jsx)(i.Fragment, {
        children: P.intl.format(u, {
            rate: (0, C.CE)((0, C.$g)(n.subtotal, n.currency), d, _),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: i, isUpdate: r } = e;
                return null != t
                    ? t
                    : r
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : i.subscriptionPeriodStart
                      : i.subscriptionPeriodEnd;
            })({ overrideRenewalDate: a, proratedInvoice: t, renewalInvoice: n, isUpdate: s }),
            contactLink: w.X7G.CONTACT,
            helpdeskArticle: S.A.getArticleURL(w.MVz.BILLING),
        }),
    });
}
function Y(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: s,
            overrideRenewalDate: a,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: d,
            isPrepaidPaymentSource: _ = !1,
            trialFooterMessageOverride: u,
            hideSubscriptionDetails: E = !1,
            fractionalPremiumInfo: h,
            shouldUseUnifiedCheckoutUI: p,
            unifiedCheckoutDefaultExpanded: I,
        } = e,
        { analyticsLocations: S } = (0, f.Ay)(),
        N = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: S,
            analyticsLocation: m.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...d,
        },
        [C] = (0, R.Kq)(N),
        [O, y] = r.useState(!1);
    if (p) {
        let e = (0, A.Gj)(n ?? null, s, null, {
            overrideRenewalDate: a,
            isSubscriptionUpdate: o,
            fractionalPremiumInfo: h,
        });
        return (0, i.jsx)(g._D, { ...e, defaultExpanded: I });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _
                ? null
                : (0, i.jsx)(v.X0, {
                      children: (0, i.jsx)(W, {
                          proratedInvoice: n,
                          renewalInvoice: s,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: u,
                      }),
                  }),
            !E &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(c.D, {
                            onClick: () => y((e) => !e),
                            className: k.K3,
                            children: [
                                O ? P.intl.string(P.t.aBcRbK) : P.intl.string(P.t.X6duqp),
                                (0, i.jsx)(T.A, {
                                    direction: O ? T.A.Directions.UP : T.A.Directions.DOWN,
                                    className: k.ts,
                                }),
                            ],
                        }),
                        O ? (0, i.jsx)(H, { isUpdate: o, currentInvoice: C, newInvoice: s, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let K = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: i } = t;
    return n
        ? (0, N.D8)(e.interval, !0, void 0, void 0, !0, (0, N.m6)(e.id))
        : P.intl.formatToPlainString(P.t.LQLxkW, { planName: (0, N.Mn)(e.id, !1, i) });
};
function z(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: r = !1, isCustomGift: s = !1, invoicePreview: a } = e,
        { tax: o, taxInclusive: l, currency: d } = a,
        _ = a.total,
        u = (0, C.$g)(_ - o, d),
        c = (0, C.$g)(_, d),
        m = K(t, { isCustomGift: s, isPrepaidPaymentSource: r });
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(E.D, { variant: "heading-md/semibold", children: P.intl.string(P.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.E, { variant: "text-md/bold", className: k.Uc, children: m }),
                          (0, i.jsxs)(v.Yx, {
                              className: n,
                              children: [
                                  (0, i.jsx)(v.Xd, { children: P.intl.string(P.t.sail9P) }),
                                  (0, i.jsx)(v.oR, { label: m, value: u }),
                                  (0, i.jsx)(D.A, { invoice: a }),
                                  (0, i.jsx)(v.pK, {}),
                                  (0, i.jsx)(v.oR, { label: P.intl.string(P.t.txajQG), value: c, className: k.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(E.D, { variant: "text-md/normal", children: `${m} - ${c}` }),
        ],
    });
}
function $(e) {
    let t,
        { invoice: n, plan: r } = e,
        s = (0, O.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        l()(null != s, "newPlanInvoiceItem can not be null"),
        r.interval === b.WT.MONTH
            ? (t = n.taxInclusive ? P.t.v9QeON : P.t.FALkO5)
            : r.interval === b.WT.YEAR
              ? (t = n.taxInclusive ? P.t.ECT4A5 : P.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, i.jsx)(h.E, {
            variant: "text-md/normal",
            children: P.intl.format(t, { price: (0, C.$g)(s.subscriptionPlanPrice, n.currency) }),
        })
    );
}
