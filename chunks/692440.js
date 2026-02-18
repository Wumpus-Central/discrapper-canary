"use strict";
n.d(t, {
    DP: () => B,
    Lw: () => V,
    U5: () => x,
    _J: () => M,
    m0: () => F,
    mT: () => P,
    sw: () => w,
    tC: () => H,
    wP: () => k,
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
    p = n(669510),
    h = n(888751),
    m = n(97352),
    E = n(147925),
    g = n(975571),
    A = n(927578),
    I = n(580630),
    T = n(543767),
    S = n(874638),
    y = n(234419),
    v = n(735164),
    N = n(787455),
    C = n(815545),
    b = n(788868),
    R = n(652215),
    O = n(985018),
    D = n(362442);
function L(e) {
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
        f = (0, y.V)(l),
        p = (0, u.bG)([m.A], () => m.A.get(t.subscriptionPlanId)),
        h = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: E,
            label: g,
            value: A,
            subscriptionDiscount: I,
            entitlementDiscount: T,
        } = (0, C.Ae)(t, {
            subscriptionPlan: p,
            subscriptionTrial: h,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: s,
        }),
        S = g;
    return (
        !0 === i &&
            (S = (0, r.jsxs)("div", {
                className: D._H,
                children: [
                    (0, r.jsxs)("div", { children: [S, " "] }),
                    (0, r.jsx)(c.m_, {
                        text: O.intl.format(O.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.cBN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": O.intl.string(O.t.P68ePO),
                            className: D.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(v.f0, {
            label: S,
            value: A,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            subscriptionDiscount: I,
            entitlementDiscount: T,
            interval: E.interval,
            intervalCount: E.intervalCount,
            currency: s,
            className: a,
            inTrialPeriod: _,
        })
    );
}
function w(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: D._H,
        children: [
            t,
            (0, r.jsx)(c.m_, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.cBN, { size: "md", color: "currentColor", "aria-label": i, className: D.kK }),
            }),
        ],
    });
}
let x = (e) => (e.currency === R.Yri.USD ? (0, I.$g)(e.total, e.currency) : `${(0, I.$g)(e.total, e.currency)}*`);
function M(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, S.Z)(t.invoiceItems),
        s = i.find((e) => !(0, A.z4)(e.subscriptionPlanId) && e.amount >= 0),
        a = i.find((e) => (0, A.z4)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, u.bG)([m.A], () => (null != a ? m.A.get(a.subscriptionPlanId) : null)),
        l = null != a ? a.amount : 0,
        c = (0, I.$g)(l, t.currency),
        d = null != o ? (0, I.CE)(c, o.interval, o.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s ? (0, r.jsx)(L, { invoiceItem: s, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != a && null != o
                ? (0, r.jsx)(v.oR, {
                      label: O.intl.formatToPlainString(O.t.a3cAOg, {
                          numGuildSubscriptions: a.quantity,
                          planName: (0, A.Mn)(o.id, !1, n),
                      }),
                      value: n ? c : d,
                  })
                : null,
            (0, r.jsx)(N.A, { invoice: t }),
            (0, r.jsx)(v.pK, {}),
            (0, r.jsx)(v.Sd, {
                label: O.intl.format(t.taxInclusive ? (n ? O.t.BqdxQt : O.t.XH4raN) : O.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
function P(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: s } = e,
        { newPlanInvoiceItem: a, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, C.Zw)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, {
                invoiceItem: a,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: s,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: s, value: a } = e;
                return (0, r.jsx)(
                    v.oR,
                    { label: (0, r.jsx)(w, { label: n, tooltipText: i, tooltipAriaLabel: s }), value: a },
                    t,
                );
            }),
            (0, r.jsx)(N.A, { invoice: t }),
            (0, r.jsx)(v.pK, {}),
            (0, r.jsx)(v.Sd, {
                label: O.intl.format(t.taxInclusive ? (i ? O.t.BqdxQt : O.t.XH4raN) : O.t.RUI48E, {}),
                value: x(t),
            }),
        ],
    });
}
function k(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: s, intervalCount: a } = (0, A.Ge)(t),
        { intervalType: o, intervalCount: l } = (0, A.Ge)(n);
    if (s !== o || a !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", { className: D.gX, children: O.intl.format(O.t.JWWD4E, { renewalDate: u }) });
}
function U(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: s } = e,
        o = null != n ? (0, S.Z)(n.invoiceItems) : null,
        { intervalType: l, intervalCount: u } = (0, A.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(v.Xd, { children: O.intl.string(O.t.tuqjWQ) }),
                          (0, C.Q8)(n).map((e) =>
                              (0, r.jsx)(L, { invoiceItem: e, currency: n.currency, inTrialPeriod: s }, e.id),
                          ),
                          (0, r.jsx)(v.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(v.Xd, { children: O.intl.string(O.t.qxVrh6) }),
            (0, C.Q8)(i, n).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: n, ...s } = e,
                    l =
                        null != o &&
                        !o.some((e) => e.subscriptionPlanId === s.subscriptionPlanId && e.quantity === s.quantity);
                return (0, r.jsx)(
                    L,
                    {
                        invoiceItem: s,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: n,
                        className: a()({ [D.sy]: !t || l }),
                    },
                    s.id,
                );
            }),
            (0, r.jsx)(N.A, { invoice: i }),
            (0, r.jsx)(v.pK, {}),
            (0, r.jsx)(v.oR, {
                label: O.intl.string(O.t.AChTLW),
                value: (0, I.CE)((0, I.$g)(i.total, i.currency), l, u),
                className: D.RV,
            }),
        ],
    });
}
function G(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: s,
            overrideRenewalDate: a,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, y.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, A.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, A.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === b.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            O.intl.format(O.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: R.X7G.CONTACT,
                helpdeskArticle: g.A.getArticleURL(R.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? O.t["hay+gu"] : O.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: O.intl.format(d, {
            rate: (0, I.CE)((0, I.$g)(n.subtotal, n.currency), u, c),
            renewalDate:
                null != a
                    ? a
                    : s
                      ? null != t
                          ? t.subscriptionPeriodEnd
                          : n.subscriptionPeriodStart
                      : n.subscriptionPeriodEnd,
            contactLink: R.X7G.CONTACT,
            helpdeskArticle: g.A.getArticleURL(R.MVz.BILLING),
        }),
    });
}
function F(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: s,
            overrideRenewalDate: a,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: m,
            hideSubscriptionDetails: g = !1,
            shouldUseUnifiedCheckoutUI: A,
        } = e,
        { analyticsLocations: I } = (0, f.Ay)(),
        S = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: I,
            analyticsLocation: _.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [y] = (0, T.Kq)(S),
        [N, C] = i.useState(!1);
    if (A) {
        let e = (0, h.Gj)(n ?? null, s, null);
        return (0, r.jsx)(p._, { ...e });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(v.X0, {
                      children: (0, r.jsx)(G, {
                          proratedInvoice: n,
                          renewalInvoice: s,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: m,
                      }),
                  }),
            !g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => C((e) => !e),
                            className: D.K3,
                            children: [
                                N ? O.intl.string(O.t.aBcRbK) : O.intl.string(O.t.X6duqp),
                                (0, r.jsx)(E.A, {
                                    direction: N ? E.A.Directions.UP : E.A.Directions.DOWN,
                                    className: D.ts,
                                }),
                            ],
                        }),
                        N ? (0, r.jsx)(U, { isUpdate: o, currentInvoice: y, newInvoice: s, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let V = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, A.D8)(e.interval, !0, void 0, void 0, !0, (0, A.m6)(e.id))
        : O.intl.formatToPlainString(O.t.LQLxkW, { planName: (0, A.Mn)(e.id, !1, r) });
};
function B(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: s = !1, invoicePreview: a } = e,
        { tax: o, taxInclusive: l, currency: u } = a,
        c = a.total,
        _ = c - o,
        f = (0, I.$g)(_, u),
        p = (0, I.$g)(c, u),
        h = V(t, { isCustomGift: s, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: O.intl.string(O.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, { variant: "text-md/bold", className: D.Uc, children: h }),
                          (0, r.jsxs)(v.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(v.Xd, { children: O.intl.string(O.t.sail9P) }),
                                  (0, r.jsx)(v.oR, { label: h, value: f }),
                                  (0, r.jsx)(N.A, { invoice: a }),
                                  (0, r.jsx)(v.pK, {}),
                                  (0, r.jsx)(v.oR, { label: O.intl.string(O.t.txajQG), value: p, className: D.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(d.Heading, { variant: "text-md/normal", children: `${h} - ${p}` }),
        ],
    });
}
function H(e) {
    let t,
        { invoice: n, plan: i } = e,
        s = (0, S.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != s, "newPlanInvoiceItem can not be null"),
        i.interval === b.WT.MONTH
            ? (t = n.taxInclusive ? O.t.v9QeON : O.t.FALkO5)
            : i.interval === b.WT.YEAR
              ? (t = n.taxInclusive ? O.t.ECT4A5 : O.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: O.intl.format(t, { price: (0, I.$g)(s.subscriptionPlanPrice, n.currency) }),
        })
    );
}
