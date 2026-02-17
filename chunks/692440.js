"use strict";
n.d(t, { DP: () => B, Lw: () => V, _J: () => P, m0: () => F, mT: () => M, sw: () => x, tC: () => j, wP: () => k });
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
    h = n(669510),
    p = n(888751),
    g = n(97352),
    E = n(147925),
    A = n(975571),
    I = n(927578),
    T = n(580630),
    y = n(543767),
    S = n(874638),
    v = n(234419),
    C = n(735164),
    b = n(787455),
    N = n(815545),
    R = n(788868),
    O = n(652215),
    D = n(985018),
    L = n(362442);
function w(e) {
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
        f = (0, v.V)(l),
        h = (0, u.bG)([g.A], () => g.A.get(t.subscriptionPlanId)),
        p = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: E,
            label: A,
            value: I,
            subscriptionDiscount: T,
            entitlementDiscount: y,
        } = (0, N.Ol)(t, {
            subscriptionPlan: h,
            subscriptionTrial: p,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: a,
        }),
        S = A;
    return (
        !0 === i &&
            (S = (0, r.jsxs)("div", {
                className: L._H,
                children: [
                    (0, r.jsxs)("div", { children: [S, " "] }),
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
        (0, r.jsx)(C.f0, {
            label: S,
            value: I,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            subscriptionDiscount: T,
            entitlementDiscount: y,
            interval: E.interval,
            intervalCount: E.intervalCount,
            currency: a,
            className: s,
            inTrialPeriod: _,
        })
    );
}
function x(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: L._H,
        children: [
            t,
            (0, r.jsx)(c.m_, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.cBN, { size: "md", color: "currentColor", "aria-label": i, className: L.kK }),
            }),
        ],
    });
}
function P(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, S.Z)(t.invoiceItems),
        a = i.find((e) => !(0, I.z4)(e.subscriptionPlanId) && e.amount >= 0),
        s = i.find((e) => (0, I.z4)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, u.bG)([g.A], () => (null != s ? g.A.get(s.subscriptionPlanId) : null)),
        l = null != s ? s.amount : 0,
        c = (0, T.$g)(l, t.currency),
        d = null != o ? (0, T.CE)(c, o.interval, o.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a ? (0, r.jsx)(w, { invoiceItem: a, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== l && null != s && null != o
                ? (0, r.jsx)(C.oR, {
                      label: D.intl.formatToPlainString(D.t.a3cAOg, {
                          numGuildSubscriptions: s.quantity,
                          planName: (0, I.Mn)(o.id, !1, n),
                      }),
                      value: n ? c : d,
                  })
                : null,
            (0, r.jsx)(b.A, { invoice: t }),
            (0, r.jsx)(C.pK, {}),
            (0, r.jsx)(C.Sd, {
                label: D.intl.format(t.taxInclusive ? (n ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: t.currency === O.Yri.USD ? (0, T.$g)(t.total, t.currency) : `${(0, T.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function M(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, N.qi)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: a, value: s } = e;
                return (0, r.jsx)(
                    C.oR,
                    { label: (0, r.jsx)(x, { label: n, tooltipText: i, tooltipAriaLabel: a }), value: s },
                    t,
                );
            }),
            (0, r.jsx)(b.A, { invoice: t }),
            (0, r.jsx)(C.pK, {}),
            (0, r.jsx)(C.Sd, {
                label: D.intl.format(t.taxInclusive ? (i ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: t.currency === O.Yri.USD ? (0, T.$g)(t.total, t.currency) : `${(0, T.$g)(t.total, t.currency)}*`,
            }),
        ],
    });
}
function k(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: s } = (0, I.Ge)(t),
        { intervalType: o, intervalCount: l } = (0, I.Ge)(n);
    if (a !== o || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", { className: L.gX, children: D.intl.format(D.t.JWWD4E, { renewalDate: u }) });
}
function U(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: a } = e,
        o = null != n ? (0, S.Z)(n.invoiceItems) : null,
        { intervalType: l, intervalCount: u } = (0, I.Ge)(i);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(C.Xd, { children: D.intl.string(D.t.tuqjWQ) }),
                          (0, N.Q8)(n).map((e) =>
                              (0, r.jsx)(w, { invoiceItem: e, currency: n.currency, inTrialPeriod: a }, e.id),
                          ),
                          (0, r.jsx)(C.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(C.Xd, { children: D.intl.string(D.t.qxVrh6) }),
            (0, N.Q8)(i, n).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: n, ...a } = e,
                    l =
                        null != o &&
                        !o.some((e) => e.subscriptionPlanId === a.subscriptionPlanId && e.quantity === a.quantity);
                return (0, r.jsx)(
                    w,
                    {
                        invoiceItem: a,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: n,
                        className: s()({ [L.sy]: !t || l }),
                    },
                    a.id,
                );
            }),
            (0, r.jsx)(b.A, { invoice: i }),
            (0, r.jsx)(C.pK, {}),
            (0, r.jsx)(C.oR, {
                label: D.intl.string(D.t.AChTLW),
                value: (0, T.CE)((0, T.$g)(i.total, i.currency), l, u),
                className: L.RV,
            }),
        ],
    });
}
function G(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: i,
            isUpdate: a,
            overrideRenewalDate: s,
            trialFooterMessageOverride: o,
        } = e,
        l = (0, v.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, I.Ge)(n);
    if (null == t) return null;
    if (i) {
        let e = (0, I.re)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
            t = l?.interval === R.WT.DAY && l?.interval_count < 28 ? 2 : 7;
        return (
            o ??
            D.intl.format(D.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: O.X7G.CONTACT,
                helpdeskArticle: A.A.getArticleURL(O.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? D.t["hay+gu"] : D.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: D.intl.format(d, {
            rate: (0, T.CE)((0, T.$g)(n.subtotal, n.currency), u, c),
            renewalDate:
                null != s
                    ? s
                    : a
                      ? null != t
                          ? t.subscriptionPeriodEnd
                          : n.subscriptionPeriodStart
                      : n.subscriptionPeriodEnd,
            contactLink: O.X7G.CONTACT,
            helpdeskArticle: A.A.getArticleURL(O.MVz.BILLING),
        }),
    });
}
function F(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: a,
            overrideRenewalDate: s,
            isUpdate: o = !1,
            isTrial: l = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: g,
            hideSubscriptionDetails: A = !1,
            shouldUseUnifiedCheckoutUI: I,
        } = e,
        { analyticsLocations: T } = (0, f.Ay)(),
        S = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: T,
            analyticsLocation: _.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [v] = (0, y.Kq)(S),
        [b, N] = i.useState(!1);
    if (I) {
        let e = (0, p.Gj)(n ?? null, a, null);
        return (0, r.jsx)(h._, { ...e });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(C.X0, {
                      children: (0, r.jsx)(G, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: s,
                          trialFooterMessageOverride: g,
                      }),
                  }),
            !A &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => N((e) => !e),
                            className: L.K3,
                            children: [
                                b ? D.intl.string(D.t.aBcRbK) : D.intl.string(D.t.X6duqp),
                                (0, r.jsx)(E.A, {
                                    direction: b ? E.A.Directions.UP : E.A.Directions.DOWN,
                                    className: L.ts,
                                }),
                            ],
                        }),
                        b ? (0, r.jsx)(U, { isUpdate: o, currentInvoice: v, newInvoice: a, inTrialPeriod: l }) : null,
                    ],
                }),
        ],
    });
}
let V = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, I.D8)(e.interval, !0, void 0, void 0, !0, (0, I.m6)(e.id))
        : D.intl.formatToPlainString(D.t.LQLxkW, { planName: (0, I.Mn)(e.id, !1, r) });
};
function B(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: i = !1, isCustomGift: a = !1, invoicePreview: s } = e,
        { tax: o, taxInclusive: l, currency: u } = s,
        c = s.total,
        _ = c - o,
        f = (0, T.$g)(_, u),
        h = (0, T.$g)(c, u),
        p = V(t, { isCustomGift: a, isPrepaidPaymentSource: i });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: D.intl.string(D.t.PEjaCx) }),
            o >= 0 && !1 === l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, { variant: "text-md/bold", className: L.Uc, children: p }),
                          (0, r.jsxs)(C.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(C.Xd, { children: D.intl.string(D.t.sail9P) }),
                                  (0, r.jsx)(C.oR, { label: p, value: f }),
                                  (0, r.jsx)(b.A, { invoice: s }),
                                  (0, r.jsx)(C.pK, {}),
                                  (0, r.jsx)(C.oR, { label: D.intl.string(D.t.txajQG), value: h, className: L.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(d.Heading, { variant: "text-md/normal", children: `${p} - ${h}` }),
        ],
    });
}
function j(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, S.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === R.WT.MONTH
            ? (t = n.taxInclusive ? D.t.v9QeON : D.t.FALkO5)
            : i.interval === R.WT.YEAR
              ? (t = n.taxInclusive ? D.t.ECT4A5 : D.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: D.intl.format(t, { price: (0, T.$g)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
