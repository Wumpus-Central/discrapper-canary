n.d(t, {
    DK: () => B,
    DP: () => z,
    Lw: () => K,
    U5: () => O,
    _J: () => w,
    de: () => Y,
    m0: () => V,
    mT: () => G,
    tC: () => q,
    wP: () => W,
});
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    u = n.n(s),
    o = n(17928),
    c = n(990078),
    d = n(290136),
    m = n(939249),
    p = n(534514),
    f = n(834730),
    g = n(793574),
    v = n(688810),
    x = n(944355),
    b = n(848584),
    h = n(888751),
    A = n(97352),
    y = n(147925),
    I = n(975571),
    _ = n(428262),
    j = n(580630),
    T = n(543767),
    P = n(874638),
    E = n(234419),
    N = n(735164),
    S = n(787455),
    R = n(815545),
    M = n(788868),
    L = n(652215),
    C = n(375708),
    k = n(47463);
function D(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: a,
            currency: r,
            className: i,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: u,
            inTrialPeriod: m,
        } = e,
        p = (0, E.V)(u),
        f = (0, o.bG)([A.A], () => A.A.get(t.subscriptionPlanId)),
        g = null != p ? p.subscription_trial : void 0,
        {
            subscriptionPlan: v,
            label: x,
            value: b,
            originalAmount: h,
            subscriptionDiscount: y,
            entitlementDiscount: I,
        } = (0, R.Ae)(t, {
            subscriptionPlan: f,
            subscriptionTrial: g,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: r,
        }),
        _ = x;
    return (
        !0 === a &&
            (_ = (0, l.jsxs)("div", {
                className: k._H,
                children: [
                    (0, l.jsx)("div", { children: _ }),
                    (0, l.jsx)(c.m, {
                        text: C.intl.format(C.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, l.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": C.intl.string(C.t.P68ePO),
                            className: k.kK,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(N.f0, {
            label: _,
            value: b,
            originalAmount: h,
            subscriptionDiscount: y,
            entitlementDiscount: I,
            interval: v.interval,
            intervalCount: v.intervalCount,
            currency: r,
            className: i,
            inTrialPeriod: m,
        })
    );
}
function U(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: a } = e;
    return (0, l.jsxs)("div", {
        className: k._H,
        children: [
            t,
            null != n &&
                (0, l.jsx)(c.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, l.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": a, className: k.kK }),
                }),
        ],
    });
}
let O = (e) => (e.currency === L.Yri.USD ? (0, j.$g)(e.total, e.currency) : `${(0, j.$g)(e.total, e.currency)}*`);
function w(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: a } = e,
        {
            guildSubscriptionPlan: r,
            basePlanInvoiceItem: i,
            guildSubscriptionInvoiceItem: s,
            guildSubscriptionAmount: u,
            formattedGuildBoostPrice: o,
            formattedGuildBoostRate: c,
            guildBoostItemLabel: d,
        } = (0, R.rc)(t, { isPrepaidPaymentSource: n });
    if (a) {
        let { lineItems: e } = (0, h.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, l.jsx)(b.Vm, { label: C.intl.string(C.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i ? (0, l.jsx)(D, { invoiceItem: i, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== u && null != s && null != r ? (0, l.jsx)(N.oR, { label: d, value: n ? o : c }) : null,
            (0, l.jsx)(S.A, { invoice: t }),
            (0, l.jsx)(N.pK, {}),
            (0, l.jsx)(N.Sd, {
                label: C.intl.format(t.taxInclusive ? (n ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value: O(t),
            }),
        ],
    });
}
function G(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: a, referralTrialOfferId: r } = e,
        { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, R.SA)(t, n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D, {
                invoiceItem: i,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: a,
                referralTrialOfferId: r,
            }),
            u.map((e) => {
                let { id: t, label: n, tooltipText: a, tooltipAriaLabel: r, value: i } = e;
                return (0, l.jsx)(
                    N.oR,
                    { label: (0, l.jsx)(U, { label: n, tooltipText: a, tooltipAriaLabel: r }), value: i },
                    t,
                );
            }),
            (0, l.jsx)(S.A, { invoice: t }),
            (0, l.jsx)(N.pK, {}),
            (0, l.jsx)(N.Sd, {
                label: C.intl.format(t.taxInclusive ? (a ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value: O(t),
            }),
        ],
    });
}
let B = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: l } = e,
        { intervalType: a, intervalCount: r } = (0, _.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, _.Ge)(n);
    if (a !== i || r !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != l ? l : t.subscriptionPeriodEnd;
    return C.intl.format(C.t.JWWD4E, { renewalDate: u });
};
function W(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        r = B({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a });
    return null == r ? null : (0, l.jsx)("div", { className: k.gX, children: r });
}
function F(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: a, inTrialPeriod: r } = e,
        { intervalType: s, intervalCount: u } = (0, _.Ge)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.pK, { extended: !0 }),
            null != n
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(N.Xd, { children: C.intl.string(C.t.tuqjWQ) }),
                          (0, R.Q8)(n).map((e) =>
                              (0, l.jsx)(D, { invoiceItem: e, currency: n.currency, inTrialPeriod: r }, e.id),
                          ),
                          (0, l.jsx)(N.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, l.jsx)(N.Xd, { children: C.intl.string(C.t.qxVrh6) }),
            (0, R.Q8)(a, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...r } = e;
                return (0, l.jsx)(
                    D,
                    {
                        invoiceItem: r,
                        currency: a.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: i()({ [k.sy]: n }),
                    },
                    r.id,
                );
            }),
            (0, l.jsx)(S.A, { invoice: a }),
            (0, l.jsx)(N.pK, {}),
            (0, l.jsx)(N.oR, {
                label: C.intl.string(C.t.AChTLW),
                value: (0, j.CE)((0, j.$g)(a.total, a.currency), s, u),
                className: k.RV,
            }),
        ],
    });
}
function Y(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: l,
            renewalInvoice: a,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: i,
        } = e;
    return null != n
        ? n
        : ((t = null != l ? l.subscriptionPeriodEnd : r ? a.subscriptionPeriodStart : a.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, _._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function H(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: a,
            isUpdate: r,
            overrideRenewalDate: i,
            trialFooterMessageOverride: s,
        } = e,
        u = (0, E.V)()?.subscription_trial,
        { intervalType: o, intervalCount: c } = (0, _.Ge)(n);
    if (null == t) return null;
    if (a) {
        let e = (0, _.re)({ intervalType: u?.interval, intervalCount: u?.interval_count }),
            t = u?.interval === M.WT.DAY && u?.interval_count < 28 ? 2 : 7;
        return (
            s ??
            C.intl.format(C.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: L.X7G.CONTACT,
                helpdeskArticle: I.A.getArticleURL(L.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? C.t["hay+gu"] : C.t.da0lki;
    return (0, l.jsx)(l.Fragment, {
        children: C.intl.format(d, {
            rate: (0, j.CE)((0, j.$g)(n.subtotal, n.currency), o, c),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: l, isUpdate: a } = e;
                return null != t
                    ? t
                    : a
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : l.subscriptionPeriodStart
                      : l.subscriptionPeriodEnd;
            })({ overrideRenewalDate: i, proratedInvoice: t, renewalInvoice: n, isUpdate: r }),
            contactLink: L.X7G.CONTACT,
            helpdeskArticle: I.A.getArticleURL(L.MVz.BILLING),
        }),
    });
}
function V(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: r,
            overrideRenewalDate: i,
            isUpdate: s = !1,
            isTrial: u = !1,
            priceOptions: o,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: p = !1,
            fractionalPremiumInfo: f,
            shouldUseUnifiedCheckoutUI: b,
            unifiedCheckoutDefaultExpanded: A,
        } = e,
        { analyticsLocations: I } = (0, v.Ay)(),
        _ = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: I,
            analyticsLocation: g.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...o,
        },
        [j] = (0, T.YV)(_),
        [P, E] = a.useState(!1);
    if (b) {
        let e = (0, h.Gj)(n ?? null, r, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: f,
        });
        return (0, l.jsx)(x._D, { ...e, defaultExpanded: A });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c
                ? null
                : (0, l.jsx)(N.X0, {
                      children: (0, l.jsx)(H, {
                          proratedInvoice: n,
                          renewalInvoice: r,
                          isTrial: u,
                          isUpdate: s,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !p &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(m.D, {
                            onClick: () => E((e) => !e),
                            className: k.K3,
                            children: [
                                P ? C.intl.string(C.t.aBcRbK) : C.intl.string(C.t.X6duqp),
                                (0, l.jsx)(y.A, {
                                    direction: P ? y.A.Directions.UP : y.A.Directions.DOWN,
                                    className: k.ts,
                                }),
                            ],
                        }),
                        P ? (0, l.jsx)(F, { isUpdate: s, currentInvoice: j, newInvoice: r, inTrialPeriod: u }) : null,
                    ],
                }),
        ],
    });
}
let K = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: l } = t;
    return n
        ? (0, _.D8)(e.interval, !0, void 0, void 0, !0, (0, _.m6)(e.id))
        : C.intl.formatToPlainString(C.t.LQLxkW, { planName: (0, _.Mn)(e.id, !1, l) });
};
function z(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: a = !1, isCustomGift: r = !1, invoicePreview: i } = e,
        { tax: s, taxInclusive: u, currency: o } = i,
        c = i.total,
        d = (0, j.$g)(c - s, o),
        m = (0, j.$g)(c, o),
        g = K(t, { isCustomGift: r, isPrepaidPaymentSource: a });
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(p.D, { variant: "heading-md/semibold", children: C.intl.string(C.t.PEjaCx) }),
            s >= 0 && !1 === u
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(f.E, { variant: "text-md/bold", className: k.Uc, children: g }),
                          (0, l.jsxs)(N.Yx, {
                              className: n,
                              children: [
                                  (0, l.jsx)(N.Xd, { children: C.intl.string(C.t.sail9P) }),
                                  (0, l.jsx)(N.oR, { label: g, value: d }),
                                  (0, l.jsx)(S.A, { invoice: i }),
                                  (0, l.jsx)(N.pK, {}),
                                  (0, l.jsx)(N.oR, { label: C.intl.string(C.t.txajQG), value: m, className: k.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(p.D, { variant: "text-md/normal", children: `${g} - ${m}` }),
        ],
    });
}
function q(e) {
    let t,
        { invoice: n, plan: a } = e,
        r = (0, P.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === a.id);
    return (
        u()(null != r, "newPlanInvoiceItem can not be null"),
        a.interval === M.WT.MONTH
            ? (t = n.taxInclusive ? C.t.v9QeON : C.t.FALkO5)
            : a.interval === M.WT.YEAR
              ? (t = n.taxInclusive ? C.t.ECT4A5 : C.t["0HQxKW"])
              : u()(!1, "Invalid interval type"),
        (0, l.jsx)(f.E, {
            variant: "text-md/normal",
            children: C.intl.format(t, { price: (0, j.$g)(r.subscriptionPlanPrice, n.currency) }),
        })
    );
}
