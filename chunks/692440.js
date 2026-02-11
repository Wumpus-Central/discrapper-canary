"use strict";
n.d(t, { DP: () => F, Lw: () => G, _J: () => w, m0: () => U, mT: () => x, sw: () => L, tC: () => V, wP: () => P });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(311907),
    c = n(435371),
    d = n(397927),
    _ = n(793574),
    f = n(688810),
    h = n(97352),
    p = n(147925),
    g = n(975571),
    E = n(927578),
    A = n(580630),
    I = n(543767),
    T = n(874638),
    y = n(234419),
    S = n(735164),
    v = n(9836),
    C = n(815545),
    b = n(788868),
    N = n(652215),
    R = n(985018),
    O = n(526172);
function D(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: i,
            currency: a,
            className: s,
            isPrepaidPaymentSource: o,
            referralTrialOfferId: l,
            inTrialPeriod: _,
        } = e,
        f = (0, y.V)(l),
        p = (0, u.bG)([h.A], () => h.A.get(t.subscriptionPlanId)),
        g = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: E,
            label: A,
            value: I,
            subscriptionDiscount: T,
            entitlementDiscount: v,
        } = (0, C.Ol)(t, {
            subscriptionPlan: p,
            subscriptionTrial: g,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: a,
        }),
        b = A;
    return (
        !0 === i &&
            (b = (0, r.jsxs)("div", {
                className: O._H,
                children: [
                    (0, r.jsxs)("div", { children: [b, " "] }),
                    (0, r.jsx)(c.m_, {
                        text: R.intl.format(R.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.cBN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": R.intl.string(R.t.P68ePO),
                            className: O.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(S.f0, {
            label: b,
            value: I,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            subscriptionDiscount: T,
            entitlementDiscount: v,
            interval: E.interval,
            intervalCount: E.intervalCount,
            currency: a,
            className: s,
            inTrialPeriod: _,
        })
    );
}
function L(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: O._H,
        children: [
            t,
            (0, r.jsx)(c.m_, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.cBN, { size: "md", color: "currentColor", "aria-label": i, className: O.kK }),
            }),
        ],
    });
}
function w(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, T.Z)(t.invoiceItems),
        a = i.find((e) => !(0, E.z4)(e.subscriptionPlanId) && e.amount >= 0),
        s = i.find((e) => (0, E.z4)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, u.bG)([h.A], () => (null != s ? h.A.get(s.subscriptionPlanId) : null)),
        l = null != s ? s.amount : 0,
        c = (0, A.$g)(l, t.currency),
        d = null != o ? (0, A.CE)(c, o.interval, o.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a ? (0, r.jsx)(D, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != s && null != o
                ? (0, r.jsx)(S.oR, {
                      label: R.intl.formatToPlainString(R.t.a3cAOg, {
                          numGuildSubscriptions: s.quantity,
                          planName: (0, E.Mn)(o.id, !1, n),
                      }),
                      value: n ? c : d,
                  })
                : null,
            (0, r.jsx)(v.A, { invoice: t }),
            (0, r.jsx)(S.pK, {}),
            (0, r.jsx)(S.Sd, {
                label: R.intl.format(t.taxInclusive ? (n ? R.t.BqdxQt : R.t.XH4raN) : R.t.RUI48E, {}),
                value: t.currency === N.Yri.USD ? (0, A.$g)(t.total, t.currency) : `${(0, A.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function x(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, C.qi)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: a, value: s } = e;
                return (0, r.jsx)(
                    S.oR,
                    { label: (0, r.jsx)(L, { label: n, tooltipText: i, tooltipAriaLabel: a }), value: s },
                    t,
                );
            }),
            (0, r.jsx)(v.A, { invoice: t }),
            (0, r.jsx)(S.pK, {}),
            (0, r.jsx)(S.Sd, {
                label: R.intl.format(t.taxInclusive ? (i ? R.t.BqdxQt : R.t.XH4raN) : R.t.RUI48E, {}),
                value: t.currency === N.Yri.USD ? (0, A.$g)(t.total, t.currency) : `${(0, A.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function P(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: s } = (0, E.Ge)(t),
        { intervalType: o, intervalCount: l } = (0, E.Ge)(n);
    if (a !== o || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", { className: O.gX, children: R.intl.format(R.t.JWWD4E, { renewalDate: u }) });
}
function M(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: a } = e,
        o = null != n ? (0, T.Z)(n.invoiceItems) : null,
        { intervalType: l, intervalCount: u } = (0, E.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(S.Xd, { children: R.intl.string(R.t.tuqjWQ) }),
                          (0, C.Q8)(n).map((e) =>
                              (0, r.jsx)(D, { invoiceItem: e, currency: n.currency, inTrialPeriod: a }, e.id),
                          ),
                          (0, r.jsx)(S.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(S.Xd, { children: R.intl.string(R.t.qxVrh6) }),
            (0, C.Q8)(i, n).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: n, ...a } = e,
                    l =
                        null != o &&
                        !o.some((e) => e.subscriptionPlanId === a.subscriptionPlanId && e.quantity === a.quantity);
                return (0, r.jsx)(
                    D,
                    {
                        invoiceItem: a,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: n,
                        className: s()({ [O.sy]: !t || l }),
                    },
                    a.id,
                );
            }),
            (0, r.jsx)(v.A, { invoice: i }),
            (0, r.jsx)(S.pK, {}),
            (0, r.jsx)(S.oR, {
                label: R.intl.string(R.t.AChTLW),
                value: (0, A.CE)((0, A.$g)(i.total, i.currency), l, u),
                className: O.RV,
            }),
        ],
    });
}
function k(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: a,
            overrideRenewalDate: s,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, y.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, E.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, E.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === b.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            R.intl.format(R.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: N.X7G.CONTACT,
                helpdeskArticle: g.A.getArticleURL(N.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? R.t["hay+gu"] : R.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: R.intl.format(d, {
            rate: (0, A.CE)((0, A.$g)(n.subtotal, n.currency), u, c),
            renewalDate:
                null != s
                    ? s
                    : a
                      ? null != t
                          ? t.subscriptionPeriodEnd
                          : n.subscriptionPeriodStart
                      : n.subscriptionPeriodEnd,
            contactLink: N.X7G.CONTACT,
            helpdeskArticle: g.A.getArticleURL(N.MVz.BILLING),
        }),
    });
}
function U(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: a,
            overrideRenewalDate: s,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: h,
            hideSubscriptionDetails: g = !1,
        } = e,
        { analyticsLocations: E } = (0, f.Ay)(),
        A = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: E,
            analyticsLocation: _.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [T] = (0, I.Kq)(A),
        [y, v] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(S.X0, {
                      children: (0, r.jsx)(k, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: s,
                          trialFooterMessageOverride: h,
                      }),
                  }),
            !g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => v((e) => !e),
                            className: O.K3,
                            children: [
                                y ? R.intl.string(R.t.aBcRbK) : R.intl.string(R.t.X6duqp),
                                (0, r.jsx)(p.A, {
                                    direction: y ? p.A.Directions.UP : p.A.Directions.DOWN,
                                    className: O.ts,
                                }),
                            ],
                        }),
                        y ? (0, r.jsx)(M, { isUpdate: o, currentInvoice: T, newInvoice: a, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let G = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, E.D8)(e.interval, !0, void 0, void 0, !0, (0, E.m6)(e.id))
        : R.intl.formatToPlainString(R.t.LQLxkW, { planName: (0, E.Mn)(e.id, !1, r) });
};
function F(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: a = !1, invoicePreview: s } = e,
        { tax: o, taxInclusive: l, currency: u } = s,
        c = s.total,
        _ = c - o,
        f = (0, A.$g)(_, u),
        h = (0, A.$g)(c, u),
        p = G(t, { isCustomGift: a, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: R.intl.string(R.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, { variant: "text-md/bold", className: O.Uc, children: p }),
                          (0, r.jsxs)(S.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(S.Xd, { children: R.intl.string(R.t.sail9P) }),
                                  (0, r.jsx)(S.oR, { label: p, value: f }),
                                  (0, r.jsx)(v.A, { invoice: s }),
                                  (0, r.jsx)(S.pK, {}),
                                  (0, r.jsx)(S.oR, { label: R.intl.string(R.t.txajQG), value: h, className: O.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(d.Heading, { variant: "text-md/normal", children: `${p} - ${h}` }),
        ],
    });
}
function V(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, T.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === b.WT.MONTH
            ? (t = n.taxInclusive ? R.t.v9QeON : R.t.FALkO5)
            : i.interval === b.WT.YEAR
              ? (t = n.taxInclusive ? R.t.ECT4A5 : R.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: R.intl.format(t, { price: (0, A.$g)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
