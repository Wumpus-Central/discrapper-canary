"use strict";
n.d(t, {
    DK: () => V,
    DP: () => $,
    Lw: () => K,
    U5: () => U,
    _J: () => G,
    de: () => j,
    m0: () => W,
    mT: () => F,
    tC: () => z,
    wP: () => B,
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(990078),
    d = n(290136),
    _ = n(939249),
    f = n(534514),
    p = n(834730),
    h = n(793574),
    E = n(688810),
    m = n(93159),
    g = n(270537),
    A = n(888751),
    I = n(97352),
    T = n(147925),
    S = n(975571),
    y = n(927578),
    N = n(580630),
    v = n(543767),
    C = n(874638),
    O = n(234419),
    R = n(735164),
    b = n(787455),
    D = n(815545),
    L = n(788868),
    w = n(652215),
    M = n(985018),
    P = n(47463);
function x(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: i,
            currency: s,
            className: a,
            isPrepaidPaymentSource: o,
            referralTrialOfferId: l,
            inTrialPeriod: _,
        } = e,
        f = (0, O.V)(l),
        p = (0, u.bG)([I.A], () => I.A.get(t.subscriptionPlanId)),
        h = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: E,
            label: m,
            value: g,
            originalAmount: A,
            subscriptionDiscount: T,
            entitlementDiscount: S,
        } = (0, D.Ae)(t, {
            subscriptionPlan: p,
            subscriptionTrial: h,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: s,
        }),
        y = m;
    return (
        !0 === i &&
            (y = (0, r.jsxs)("div", {
                className: P._H,
                children: [
                    (0, r.jsx)("div", { children: y }),
                    (0, r.jsx)(c.m, {
                        text: M.intl.format(M.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": M.intl.string(M.t.P68ePO),
                            className: P.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(R.f0, {
            label: y,
            value: g,
            originalAmount: A,
            subscriptionDiscount: T,
            entitlementDiscount: S,
            interval: E.interval,
            intervalCount: E.intervalCount,
            currency: s,
            className: a,
            inTrialPeriod: _,
        })
    );
}
function k(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: P._H,
        children: [
            t,
            null != n &&
                (0, r.jsx)(c.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, r.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": i, className: P.kK }),
                }),
        ],
    });
}
let U = (e) => (e.currency === w.Yri.USD ? (0, N.$g)(e.total, e.currency) : `${(0, N.$g)(e.total, e.currency)}*`);
function G(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: i } = e,
        {
            guildSubscriptionPlan: s,
            basePlanInvoiceItem: a,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: u,
            formattedGuildBoostRate: c,
            guildBoostItemLabel: d,
        } = (0, D.rc)(t, { isPrepaidPaymentSource: n });
    if (i) {
        let { lineItems: e } = (0, A.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, r.jsx)(g.Vm, { label: M.intl.string(M.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a ? (0, r.jsx)(x, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != o && null != s ? (0, r.jsx)(R.oR, { label: d, value: n ? u : c }) : null,
            (0, r.jsx)(b.A, { invoice: t }),
            (0, r.jsx)(R.pK, {}),
            (0, r.jsx)(R.Sd, {
                label: M.intl.format(t.taxInclusive ? (n ? M.t.BqdxQt : M.t.XH4raN) : M.t.RUI48E, {}),
                value: U(t),
            }),
        ],
    });
}
function F(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: s } = e,
        { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, D.SA)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x, {
                invoiceItem: a,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: s,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: s, value: a } = e;
                return (0, r.jsx)(
                    R.oR,
                    { label: (0, r.jsx)(k, { label: n, tooltipText: i, tooltipAriaLabel: s }), value: a },
                    t,
                );
            }),
            (0, r.jsx)(b.A, { invoice: t }),
            (0, r.jsx)(R.pK, {}),
            (0, r.jsx)(R.Sd, {
                label: M.intl.format(t.taxInclusive ? (i ? M.t.BqdxQt : M.t.XH4raN) : M.t.RUI48E, {}),
                value: U(t),
            }),
        ],
    });
}
let V = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: i, intervalCount: s } = (0, y.Ge)(t),
        { intervalType: a, intervalCount: o } = (0, y.Ge)(n);
    if (i !== a || s !== o || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let l = null != r ? r : t.subscriptionPeriodEnd;
    return M.intl.format(M.t.JWWD4E, { renewalDate: l });
};
function B(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        s = V({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i });
    return null == s ? null : (0, r.jsx)("div", { className: P.gX, children: s });
}
function H(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: s } = e,
        { intervalType: o, intervalCount: l } = (0, y.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(R.Xd, { children: M.intl.string(M.t.tuqjWQ) }),
                          (0, D.Q8)(n).map((e) =>
                              (0, r.jsx)(x, { invoiceItem: e, currency: n.currency, inTrialPeriod: s }, e.id),
                          ),
                          (0, r.jsx)(R.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(R.Xd, { children: M.intl.string(M.t.qxVrh6) }),
            (0, D.Q8)(i, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...s } = e;
                return (0, r.jsx)(
                    x,
                    {
                        invoiceItem: s,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: a()({ [P.sy]: n }),
                    },
                    s.id,
                );
            }),
            (0, r.jsx)(b.A, { invoice: i }),
            (0, r.jsx)(R.pK, {}),
            (0, r.jsx)(R.oR, {
                label: M.intl.string(M.t.AChTLW),
                value: (0, N.CE)((0, N.$g)(i.total, i.currency), o, l),
                className: P.RV,
            }),
        ],
    });
}
function j(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: r,
            renewalInvoice: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: a,
        } = e;
    return null != n
        ? n
        : ((t = null != r ? r.subscriptionPeriodEnd : s ? i.subscriptionPeriodStart : i.subscriptionPeriodEnd),
            null != a && a.isFractionalPremiumActive)
          ? (0, y._e)(t, a.unactivatedUnits, a.currentEntitlementEndsAt)
          : t;
}
function Y(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: s,
            overrideRenewalDate: a,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, O.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, y.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, y.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === L.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            M.intl.format(M.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: w.X7G.CONTACT,
                helpdeskArticle: S.A.getArticleURL(w.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? M.t["hay+gu"] : M.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: M.intl.format(d, {
            rate: (0, N.CE)((0, N.$g)(n.subtotal, n.currency), u, c),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: r, isUpdate: i } = e;
                return null != t
                    ? t
                    : i
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : r.subscriptionPeriodStart
                      : r.subscriptionPeriodEnd;
            })({ overrideRenewalDate: a, proratedInvoice: t, renewalInvoice: n, isUpdate: s }),
            contactLink: w.X7G.CONTACT,
            helpdeskArticle: S.A.getArticleURL(w.MVz.BILLING),
        }),
    });
}
function W(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: s,
            overrideRenewalDate: a,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: f = !1,
            fractionalPremiumInfo: p,
            shouldUseUnifiedCheckoutUI: g,
            unifiedCheckoutDefaultExpanded: I,
        } = e,
        { analyticsLocations: S } = (0, E.Ay)(),
        y = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: S,
            analyticsLocation: h.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [N] = (0, v.Kq)(y),
        [C, O] = i.useState(!1);
    if (g) {
        let e = (0, A.Gj)(n ?? null, s, null, {
            overrideRenewalDate: a,
            isSubscriptionUpdate: o,
            fractionalPremiumInfo: p,
        });
        return (0, r.jsx)(m._D, { ...e, defaultExpanded: I });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(R.X0, {
                      children: (0, r.jsx)(Y, {
                          proratedInvoice: n,
                          renewalInvoice: s,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !f &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(_.D, {
                            onClick: () => O((e) => !e),
                            className: P.K3,
                            children: [
                                C ? M.intl.string(M.t.aBcRbK) : M.intl.string(M.t.X6duqp),
                                (0, r.jsx)(T.A, {
                                    direction: C ? T.A.Directions.UP : T.A.Directions.DOWN,
                                    className: P.ts,
                                }),
                            ],
                        }),
                        C ? (0, r.jsx)(H, { isUpdate: o, currentInvoice: N, newInvoice: s, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let K = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, y.D8)(e.interval, !0, void 0, void 0, !0, (0, y.m6)(e.id))
        : M.intl.formatToPlainString(M.t.LQLxkW, { planName: (0, y.Mn)(e.id, !1, r) });
};
function $(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: s = !1, invoicePreview: a } = e,
        { tax: o, taxInclusive: l, currency: u } = a,
        c = a.total,
        d = (0, N.$g)(c - o, u),
        _ = (0, N.$g)(c, u),
        h = K(t, { isCustomGift: s, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(f.D, { variant: "heading-md/semibold", children: M.intl.string(M.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.E, { variant: "text-md/bold", className: P.Uc, children: h }),
                          (0, r.jsxs)(R.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(R.Xd, { children: M.intl.string(M.t.sail9P) }),
                                  (0, r.jsx)(R.oR, { label: h, value: d }),
                                  (0, r.jsx)(b.A, { invoice: a }),
                                  (0, r.jsx)(R.pK, {}),
                                  (0, r.jsx)(R.oR, { label: M.intl.string(M.t.txajQG), value: _, className: P.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(f.D, { variant: "text-md/normal", children: `${h} - ${_}` }),
        ],
    });
}
function z(e) {
    let t,
        { invoice: n, plan: i } = e,
        s = (0, C.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != s, "newPlanInvoiceItem can not be null"),
        i.interval === L.WT.MONTH
            ? (t = n.taxInclusive ? M.t.v9QeON : M.t.FALkO5)
            : i.interval === L.WT.YEAR
              ? (t = n.taxInclusive ? M.t.ECT4A5 : M.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(p.E, {
            variant: "text-md/normal",
            children: M.intl.format(t, { price: (0, N.$g)(s.subscriptionPlanPrice, n.currency) }),
        })
    );
}
