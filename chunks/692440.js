"use strict";
n.d(t, {
    DK: () => U,
    DP: () => j,
    Lw: () => H,
    U5: () => x,
    _J: () => P,
    m0: () => B,
    mT: () => k,
    sw: () => M,
    tC: () => Y,
    wP: () => G,
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(435371),
    d = n(397927),
    _ = n(793574),
    f = n(688810),
    p = n(93159),
    h = n(340034),
    m = n(888751),
    E = n(97352),
    g = n(147925),
    A = n(975571),
    I = n(927578),
    T = n(580630),
    S = n(543767),
    y = n(874638),
    v = n(234419),
    N = n(735164),
    C = n(787455),
    R = n(815545),
    O = n(788868),
    b = n(652215),
    D = n(985018),
    L = n(362442);
function w(e) {
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
        f = (0, v.V)(l),
        p = (0, u.bG)([E.A], () => E.A.get(t.subscriptionPlanId)),
        h = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: m,
            label: g,
            value: A,
            originalAmount: I,
            subscriptionDiscount: T,
            entitlementDiscount: S,
        } = (0, R.Ae)(t, {
            subscriptionPlan: p,
            subscriptionTrial: h,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: s,
        }),
        y = g;
    return (
        !0 === i &&
            (y = (0, r.jsxs)("div", {
                className: L._H,
                children: [
                    (0, r.jsx)("div", { children: y }),
                    (0, r.jsx)(c.m_, {
                        text: D.intl.format(D.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.cBN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": D.intl.string(D.t.P68ePO),
                            className: L.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(N.f0, {
            label: y,
            value: A,
            originalAmount: I,
            subscriptionDiscount: T,
            entitlementDiscount: S,
            interval: m.interval,
            intervalCount: m.intervalCount,
            currency: s,
            className: a,
            inTrialPeriod: _,
        })
    );
}
function M(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: L._H,
        children: [
            t,
            null != n &&
                (0, r.jsx)(c.m_, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, r.jsx)(d.cBN, {
                        size: "md",
                        color: "currentColor",
                        "aria-label": i,
                        className: L.kK,
                    }),
                }),
        ],
    });
}
let x = (e) => (e.currency === b.Yri.USD ? (0, T.$g)(e.total, e.currency) : `${(0, T.$g)(e.total, e.currency)}*`);
function P(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: i } = e,
        {
            guildSubscriptionPlan: s,
            basePlanInvoiceItem: a,
            guildSubscriptionInvoiceItem: o,
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: u,
            formattedGuildBoostRate: c,
            guildBoostItemLabel: d,
        } = (0, R.rc)(t, { isPrepaidPaymentSource: n });
    if (i) {
        let { lineItems: e } = (0, m.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, r.jsx)(h.ID, { label: D.intl.string(D.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a ? (0, r.jsx)(w, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != o && null != s ? (0, r.jsx)(N.oR, { label: d, value: n ? u : c }) : null,
            (0, r.jsx)(C.A, { invoice: t }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.Sd, {
                label: D.intl.format(t.taxInclusive ? (n ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
function k(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: s } = e,
        { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, R.SA)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w, {
                invoiceItem: a,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: s,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: s, value: a } = e;
                return (0, r.jsx)(
                    N.oR,
                    { label: (0, r.jsx)(M, { label: n, tooltipText: i, tooltipAriaLabel: s }), value: a },
                    t,
                );
            }),
            (0, r.jsx)(C.A, { invoice: t }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.Sd, {
                label: D.intl.format(t.taxInclusive ? (i ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
let U = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: i, intervalCount: s } = (0, I.Ge)(t),
        { intervalType: a, intervalCount: o } = (0, I.Ge)(n);
    if (i !== a || s !== o || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let l = null != r ? r : t.subscriptionPeriodEnd;
    return D.intl.format(D.t.JWWD4E, { renewalDate: l });
};
function G(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        s = U({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i });
    return null == s ? null : (0, r.jsx)("div", { className: L.gX, children: s });
}
function F(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: s } = e,
        { intervalType: o, intervalCount: l } = (0, I.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(N.Xd, { children: D.intl.string(D.t.tuqjWQ) }),
                          (0, R.Q8)(n).map((e) =>
                              (0, r.jsx)(w, { invoiceItem: e, currency: n.currency, inTrialPeriod: s }, e.id),
                          ),
                          (0, r.jsx)(N.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(N.Xd, { children: D.intl.string(D.t.qxVrh6) }),
            (0, R.Q8)(i, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...s } = e;
                return (0, r.jsx)(
                    w,
                    {
                        invoiceItem: s,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: a()({ [L.sy]: n }),
                    },
                    s.id,
                );
            }),
            (0, r.jsx)(C.A, { invoice: i }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.oR, {
                label: D.intl.string(D.t.AChTLW),
                value: (0, T.CE)((0, T.$g)(i.total, i.currency), o, l),
                className: L.RV,
            }),
        ],
    });
}
function V(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: s,
            overrideRenewalDate: a,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, v.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, I.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, I.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === O.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            D.intl.format(D.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: b.X7G.CONTACT,
                helpdeskArticle: A.A.getArticleURL(b.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? D.t["hay+gu"] : D.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: D.intl.format(d, {
            rate: (0, T.CE)((0, T.$g)(n.subtotal, n.currency), u, c),
            renewalDate:
                null != a
                    ? a
                    : s
                      ? null != t
                          ? t.subscriptionPeriodEnd
                          : n.subscriptionPeriodStart
                      : n.subscriptionPeriodEnd,
            contactLink: b.X7G.CONTACT,
            helpdeskArticle: A.A.getArticleURL(b.MVz.BILLING),
        }),
    });
}
function B(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: s,
            overrideRenewalDate: a,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: h,
            hideSubscriptionDetails: E = !1,
            shouldUseUnifiedCheckoutUI: A,
            unifiedCheckoutDefaultExpanded: I,
        } = e,
        { analyticsLocations: T } = (0, f.Ay)(),
        y = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: T,
            analyticsLocation: _.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [v] = (0, S.Kq)(y),
        [C, R] = i.useState(!1);
    if (A) {
        let e = (0, m.Gj)(n ?? null, s, null, { overrideRenewalDate: a, isSubscriptionUpdate: o });
        return (0, r.jsx)(p._D, { ...e, defaultExpanded: I });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(N.X0, {
                      children: (0, r.jsx)(V, {
                          proratedInvoice: n,
                          renewalInvoice: s,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: h,
                      }),
                  }),
            !E &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => R((e) => !e),
                            className: L.K3,
                            children: [
                                C ? D.intl.string(D.t.aBcRbK) : D.intl.string(D.t.X6duqp),
                                (0, r.jsx)(g.A, {
                                    direction: C ? g.A.Directions.UP : g.A.Directions.DOWN,
                                    className: L.ts,
                                }),
                            ],
                        }),
                        C ? (0, r.jsx)(F, { isUpdate: o, currentInvoice: v, newInvoice: s, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let H = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, I.D8)(e.interval, !0, void 0, void 0, !0, (0, I.m6)(e.id))
        : D.intl.formatToPlainString(D.t.LQLxkW, { planName: (0, I.Mn)(e.id, !1, r) });
};
function j(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: s = !1, invoicePreview: a } = e,
        { tax: o, taxInclusive: l, currency: u } = a,
        c = a.total,
        _ = c - o,
        f = (0, T.$g)(_, u),
        p = (0, T.$g)(c, u),
        h = H(t, { isCustomGift: s, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: D.intl.string(D.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, { variant: "text-md/bold", className: L.Uc, children: h }),
                          (0, r.jsxs)(N.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(N.Xd, { children: D.intl.string(D.t.sail9P) }),
                                  (0, r.jsx)(N.oR, { label: h, value: f }),
                                  (0, r.jsx)(C.A, { invoice: a }),
                                  (0, r.jsx)(N.pK, {}),
                                  (0, r.jsx)(N.oR, { label: D.intl.string(D.t.txajQG), value: p, className: L.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(d.Heading, { variant: "text-md/normal", children: `${h} - ${p}` }),
        ],
    });
}
function Y(e) {
    let t,
        { invoice: n, plan: i } = e,
        s = (0, y.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != s, "newPlanInvoiceItem can not be null"),
        i.interval === O.WT.MONTH
            ? (t = n.taxInclusive ? D.t.v9QeON : D.t.FALkO5)
            : i.interval === O.WT.YEAR
              ? (t = n.taxInclusive ? D.t.ECT4A5 : D.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: D.intl.format(t, { price: (0, T.$g)(s.subscriptionPlanPrice, n.currency) }),
        })
    );
}
