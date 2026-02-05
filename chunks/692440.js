"use strict";
n.d(t, { DP: () => G, Lw: () => U, _J: () => L, m0: () => k, mT: () => w, sw: () => D, tC: () => V, wP: () => x });
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
    p = n(97352),
    h = n(147925),
    m = n(975571),
    g = n(927578),
    E = n(580630),
    A = n(543767),
    I = n(874638),
    T = n(234419),
    y = n(735164),
    S = n(787455),
    v = n(815545),
    C = n(788868),
    b = n(652215),
    N = n(985018),
    R = n(362442);
function O(e) {
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
        f = (0, T.V)(l),
        h = (0, u.bG)([p.A], () => p.A.get(t.subscriptionPlanId)),
        {
            subscriptionPlan: m,
            label: g,
            value: E,
            subscriptionDiscount: A,
            entitlementDiscount: I,
        } = (0, v.Ol)(t, {
            subscriptionPlan: h,
            premiumTrialOffer: f,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: a,
        }),
        S = g;
    return (
        !0 === i &&
            (S = (0, r.jsxs)("div", {
                className: R._H,
                children: [
                    (0, r.jsxs)("div", { children: [S, " "] }),
                    (0, r.jsx)(c.m_, {
                        text: N.intl.format(N.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.cBN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": N.intl.string(N.t.P68ePO),
                            className: R.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(y.f0, {
            label: S,
            value: E,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            subscriptionDiscount: A,
            entitlementDiscount: I,
            interval: m.interval,
            intervalCount: m.intervalCount,
            currency: a,
            className: s,
            inTrialPeriod: _,
        })
    );
}
function D(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: R._H,
        children: [
            t,
            (0, r.jsx)(c.m_, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.cBN, { size: "md", color: "currentColor", "aria-label": i, className: R.kK }),
            }),
        ],
    });
}
function L(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, I.Z)(t.invoiceItems),
        a = i.find((e) => !(0, g.z4)(e.subscriptionPlanId) && e.amount >= 0),
        s = i.find((e) => (0, g.z4)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, u.bG)([p.A], () => (null != s ? p.A.get(s.subscriptionPlanId) : null)),
        l = null != s ? s.amount : 0,
        c = (0, E.$g)(l, t.currency),
        d = null != o ? (0, E.CE)(c, o.interval, o.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a ? (0, r.jsx)(O, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != s && null != o
                ? (0, r.jsx)(y.oR, {
                      label: N.intl.formatToPlainString(N.t.a3cAOg, {
                          numGuildSubscriptions: s.quantity,
                          planName: (0, g.Mn)(o.id, !1, n),
                      }),
                      value: n ? c : d,
                  })
                : null,
            (0, r.jsx)(S.A, { invoice: t }),
            (0, r.jsx)(y.pK, {}),
            (0, r.jsx)(y.Sd, {
                label: N.intl.format(t.taxInclusive ? (n ? N.t.BqdxQt : N.t.XH4raN) : N.t.RUI48E, {}),
                value: t.currency === b.Yri.USD ? (0, E.$g)(t.total, t.currency) : `${(0, E.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function w(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, v.qi)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: a, value: s } = e;
                return (0, r.jsx)(
                    y.oR,
                    { label: (0, r.jsx)(D, { label: n, tooltipText: i, tooltipAriaLabel: a }), value: s },
                    t,
                );
            }),
            (0, r.jsx)(S.A, { invoice: t }),
            (0, r.jsx)(y.pK, {}),
            (0, r.jsx)(y.Sd, {
                label: N.intl.format(t.taxInclusive ? (i ? N.t.BqdxQt : N.t.XH4raN) : N.t.RUI48E, {}),
                value: t.currency === b.Yri.USD ? (0, E.$g)(t.total, t.currency) : `${(0, E.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function x(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: s } = (0, g.Ge)(t),
        { intervalType: o, intervalCount: l } = (0, g.Ge)(n);
    if (a !== o || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", { className: R.gX, children: N.intl.format(N.t.JWWD4E, { renewalDate: u }) });
}
function P(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: a } = e,
        o = null != n ? (0, I.Z)(n.invoiceItems) : null,
        { intervalType: l, intervalCount: u } = (0, g.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(y.Xd, { children: N.intl.string(N.t.tuqjWQ) }),
                          (0, v.Q8)(n).map((e) =>
                              (0, r.jsx)(O, { invoiceItem: e, currency: n.currency, inTrialPeriod: a }, e.id),
                          ),
                          (0, r.jsx)(y.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(y.Xd, { children: N.intl.string(N.t.qxVrh6) }),
            (0, v.Q8)(i, n).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: n, ...a } = e,
                    l =
                        null != o &&
                        !o.some((e) => e.subscriptionPlanId === a.subscriptionPlanId && e.quantity === a.quantity);
                return (0, r.jsx)(
                    O,
                    {
                        invoiceItem: a,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: n,
                        className: s()({ [R.sy]: !t || l }),
                    },
                    a.id,
                );
            }),
            (0, r.jsx)(S.A, { invoice: i }),
            (0, r.jsx)(y.pK, {}),
            (0, r.jsx)(y.oR, {
                label: N.intl.string(N.t.AChTLW),
                value: (0, E.CE)((0, E.$g)(i.total, i.currency), l, u),
                className: R.RV,
            }),
        ],
    });
}
function M(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: a,
            overrideRenewalDate: s,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, T.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, g.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, g.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === C.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            N.intl.format(N.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: b.X7G.CONTACT,
                helpdeskArticle: m.A.getArticleURL(b.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? N.t["hay+gu"] : N.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: N.intl.format(d, {
            rate: (0, E.CE)((0, E.$g)(n.subtotal, n.currency), u, c),
            renewalDate:
                null != s
                    ? s
                    : a
                      ? null != t
                          ? t.subscriptionPeriodEnd
                          : n.subscriptionPeriodStart
                      : n.subscriptionPeriodEnd,
            contactLink: b.X7G.CONTACT,
            helpdeskArticle: m.A.getArticleURL(b.MVz.BILLING),
        }),
    });
}
function k(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: a,
            overrideRenewalDate: s,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: p,
            hideSubscriptionDetails: m = !1,
        } = e,
        { analyticsLocations: g } = (0, f.Ay)(),
        E = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: g,
            analyticsLocation: _.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [I] = (0, A.Kq)(E),
        [T, S] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(y.X0, {
                      children: (0, r.jsx)(M, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: s,
                          trialFooterMessageOverride: p,
                      }),
                  }),
            !m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => S((e) => !e),
                            className: R.K3,
                            children: [
                                T ? N.intl.string(N.t.aBcRbK) : N.intl.string(N.t.X6duqp),
                                (0, r.jsx)(h.A, {
                                    direction: T ? h.A.Directions.UP : h.A.Directions.DOWN,
                                    className: R.ts,
                                }),
                            ],
                        }),
                        T ? (0, r.jsx)(P, { isUpdate: o, currentInvoice: I, newInvoice: a, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let U = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, g.D8)(e.interval, !0, void 0, void 0, !0, (0, g.m6)(e.id))
        : N.intl.formatToPlainString(N.t.LQLxkW, { planName: (0, g.Mn)(e.id, !1, r) });
};
function G(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: a = !1, invoicePreview: s } = e,
        { tax: o, taxInclusive: l, currency: u } = s,
        c = s.total,
        _ = c - o,
        f = (0, E.$g)(_, u),
        p = (0, E.$g)(c, u),
        h = U(t, { isCustomGift: a, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: N.intl.string(N.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, { variant: "text-md/bold", className: R.Uc, children: h }),
                          (0, r.jsxs)(y.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(y.Xd, { children: N.intl.string(N.t.sail9P) }),
                                  (0, r.jsx)(y.oR, { label: h, value: f }),
                                  (0, r.jsx)(S.A, { invoice: s }),
                                  (0, r.jsx)(y.pK, {}),
                                  (0, r.jsx)(y.oR, { label: N.intl.string(N.t.txajQG), value: p, className: R.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(d.Heading, { variant: "text-md/normal", children: `${h} - ${p}` }),
        ],
    });
}
function V(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, I.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === C.WT.MONTH
            ? (t = n.taxInclusive ? N.t.v9QeON : N.t.FALkO5)
            : i.interval === C.WT.YEAR
              ? (t = n.taxInclusive ? N.t.ECT4A5 : N.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: N.intl.format(t, { price: (0, E.$g)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
