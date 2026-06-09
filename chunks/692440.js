n.d(t, {
    DK: () => U,
    DP: () => z,
    Lw: () => $,
    U5: () => G,
    _J: () => B,
    de: () => H,
    m0: () => K,
    mT: () => F,
    tC: () => Q,
    wP: () => W,
});
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    u = n.n(s),
    c = n(17928),
    o = n(990078),
    d = n(290136),
    m = n(939249),
    f = n(534514),
    x = n(834730),
    p = n(793574),
    v = n(688810),
    g = n(71804),
    h = n(944355),
    b = n(848584),
    y = n(888751),
    A = n(97352),
    j = n(147925),
    T = n(975571),
    I = n(428262),
    E = n(580630),
    _ = n(543767),
    N = n(874638),
    P = n(234419),
    k = n(735164),
    S = n(787455),
    C = n(815545),
    L = n(788868),
    R = n(652215),
    D = n(375708),
    M = n(47463);
function w(e) {
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
        f = (0, P.V)(u),
        x = (0, c.bG)([A.A], () => A.A.get(t.subscriptionPlanId)),
        p = null != f ? f.subscription_trial : void 0,
        {
            subscriptionPlan: v,
            label: g,
            value: h,
            originalAmount: b,
            subscriptionDiscount: y,
            entitlementDiscount: j,
        } = (0, C.Ae)(t, {
            subscriptionPlan: x,
            subscriptionTrial: p,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: r,
        }),
        T = g;
    return (
        !0 === a &&
            (T = (0, l.jsxs)("div", {
                className: M._H,
                children: [
                    (0, l.jsx)("div", { children: T }),
                    (0, l.jsx)(o.m, {
                        text: D.intl.format(D.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, l.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": D.intl.string(D.t.P68ePO),
                            className: M.kK,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(k.f0, {
            label: T,
            value: h,
            originalAmount: b,
            subscriptionDiscount: y,
            entitlementDiscount: j,
            interval: v.interval,
            intervalCount: v.intervalCount,
            currency: r,
            className: i,
            inTrialPeriod: m,
        })
    );
}
function O(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: a } = e;
    return (0, l.jsxs)("div", {
        className: M._H,
        children: [
            t,
            null != n &&
                (0, l.jsx)(o.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, l.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": a, className: M.kK }),
                }),
        ],
    });
}
let G = (e) => (e.currency === R.Yri.USD ? (0, E.$g)(e.total, e.currency) : `${(0, E.$g)(e.total, e.currency)}*`);
function B(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: a } = e,
        {
            guildSubscriptionPlan: r,
            basePlanInvoiceItem: i,
            guildSubscriptionInvoiceItem: s,
            guildSubscriptionAmount: u,
            formattedGuildBoostPrice: c,
            formattedGuildBoostRate: o,
            guildBoostItemLabel: d,
        } = (0, C.rc)(t, { isPrepaidPaymentSource: n });
    if (a) {
        let { lineItems: e } = (0, y.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, l.jsx)(b.Vm, { label: D.intl.string(D.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != i ? (0, l.jsx)(w, { invoiceItem: i, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== u && null != s && null != r ? (0, l.jsx)(k.oR, { label: d, value: n ? c : o }) : null,
            (0, l.jsx)(S.A, { invoice: t }),
            (0, l.jsx)(k.pK, {}),
            (0, l.jsx)(k.Sd, {
                label: D.intl.format(t.taxInclusive ? (n ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
function F(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: a, referralTrialOfferId: r } = e,
        { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, C.SA)(t, n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w, {
                invoiceItem: i,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: a,
                referralTrialOfferId: r,
            }),
            u.map((e) => {
                let { id: t, label: n, tooltipText: a, tooltipAriaLabel: r, value: i } = e;
                return (0, l.jsx)(
                    k.oR,
                    { label: (0, l.jsx)(O, { label: n, tooltipText: a, tooltipAriaLabel: r }), value: i },
                    t,
                );
            }),
            (0, l.jsx)(S.A, { invoice: t }),
            (0, l.jsx)(k.pK, {}),
            (0, l.jsx)(k.Sd, {
                label: D.intl.format(t.taxInclusive ? (a ? D.t.BqdxQt : D.t.XH4raN) : D.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
let U = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: l } = e,
        { intervalType: a, intervalCount: r } = (0, I.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, I.Ge)(n);
    if (a !== i || r !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != l ? l : t.subscriptionPeriodEnd;
    return D.intl.format(D.t.JWWD4E, { renewalDate: u });
};
function W(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        r = U({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a });
    return null == r ? null : (0, l.jsx)("div", { className: M.gX, children: r });
}
function Y(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: a, inTrialPeriod: r } = e,
        { intervalType: s, intervalCount: u } = (0, I.Ge)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(k.pK, { extended: !0 }),
            null != n
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(k.Xd, { children: D.intl.string(D.t.tuqjWQ) }),
                          (0, C.Q8)(n).map((e) =>
                              (0, l.jsx)(w, { invoiceItem: e, currency: n.currency, inTrialPeriod: r }, e.id),
                          ),
                          (0, l.jsx)(k.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, l.jsx)(k.Xd, { children: D.intl.string(D.t.qxVrh6) }),
            (0, C.Q8)(a, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...r } = e;
                return (0, l.jsx)(
                    w,
                    {
                        invoiceItem: r,
                        currency: a.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: i()({ [M.sy]: n }),
                    },
                    r.id,
                );
            }),
            (0, l.jsx)(S.A, { invoice: a }),
            (0, l.jsx)(k.pK, {}),
            (0, l.jsx)(k.oR, {
                label: D.intl.string(D.t.AChTLW),
                value: (0, E.CE)((0, E.$g)(a.total, a.currency), s, u),
                className: M.RV,
            }),
        ],
    });
}
function H(e) {
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
          ? (0, I._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function V(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: a,
            isUpdate: r,
            overrideRenewalDate: i,
            trialFooterMessageOverride: s,
        } = e,
        u = (0, P.V)()?.subscription_trial,
        { intervalType: c, intervalCount: o } = (0, I.Ge)(n);
    if (null == t) return null;
    if (a) {
        let e = (0, I.re)({ intervalType: u?.interval, intervalCount: u?.interval_count }),
            t = u?.interval === L.WT.DAY && u?.interval_count < 28 ? 2 : 7;
        return (
            s ??
            D.intl.format(D.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: R.X7G.CONTACT,
                helpdeskArticle: T.A.getArticleURL(R.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? D.t["hay+gu"] : D.t.da0lki;
    return (0, l.jsx)(l.Fragment, {
        children: D.intl.format(d, {
            rate: (0, E.CE)((0, E.$g)(n.subtotal, n.currency), c, o),
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
            contactLink: R.X7G.CONTACT,
            helpdeskArticle: T.A.getArticleURL(R.MVz.BILLING),
        }),
    });
}
function K(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: r,
            overrideRenewalDate: i,
            isUpdate: s = !1,
            isTrial: u = !1,
            priceOptions: c,
            isPrepaidPaymentSource: o = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: f = !1,
            fractionalPremiumInfo: x,
            shouldUseUnifiedCheckoutUI: g,
            unifiedCheckoutDefaultExpanded: b,
        } = e,
        { analyticsLocations: A } = (0, v.Ay)(),
        T = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: A,
            analyticsLocation: p.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...c,
        },
        [I] = (0, _.YV)(T),
        [E, N] = a.useState(!1);
    if (g) {
        let e = (0, y.Gj)(n ?? null, r, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: x,
        });
        return (0, l.jsx)(h._D, { ...e, defaultExpanded: b });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o
                ? null
                : (0, l.jsx)(k.X0, {
                      children: (0, l.jsx)(V, {
                          proratedInvoice: n,
                          renewalInvoice: r,
                          isTrial: u,
                          isUpdate: s,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !f &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(m.D, {
                            onClick: () => N((e) => !e),
                            className: M.K3,
                            children: [
                                E ? D.intl.string(D.t.aBcRbK) : D.intl.string(D.t.X6duqp),
                                (0, l.jsx)(j.A, {
                                    direction: E ? j.A.Directions.UP : j.A.Directions.DOWN,
                                    className: M.ts,
                                }),
                            ],
                        }),
                        E ? (0, l.jsx)(Y, { isUpdate: s, currentInvoice: I, newInvoice: r, inTrialPeriod: u }) : null,
                    ],
                }),
        ],
    });
}
let $ = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: l } = t;
    return n
        ? (0, I.D8)(e.interval, !0, void 0, void 0, !0, (0, I.m6)(e.id))
        : D.intl.formatToPlainString(D.t.LQLxkW, { planName: (0, I.Mn)(e.id, !1, l) });
};
function z(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: a = !1, isCustomGift: r = !1, invoicePreview: i } = e,
        { tax: s, taxInclusive: u, currency: c } = i,
        o = i.total,
        d = (0, E.$g)(o - s, c),
        m = (0, E.$g)(o, c),
        p = $(t, { isCustomGift: r, isPrepaidPaymentSource: a });
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: D.intl.string(D.t.PEjaCx) }),
            s >= 0 && !1 === u
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.E, { variant: "text-md/bold", className: M.Uc, children: p }),
                          (0, l.jsxs)(k.Yx, {
                              className: n,
                              children: [
                                  (0, l.jsx)(k.Xd, { children: D.intl.string(D.t.sail9P) }),
                                  (0, l.jsx)(k.oR, { label: p, value: d }),
                                  (0, l.jsx)(S.A, { invoice: i }),
                                  (0, l.jsx)(k.pK, {}),
                                  (0, l.jsx)(k.oR, { label: D.intl.string(D.t.txajQG), value: m, className: M.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(f.D, { variant: "text-md/normal", children: `${p} - ${m}` }),
        ],
    });
}
function Q(e) {
    let t,
        { invoice: n, plan: a } = e,
        r = (0, N.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === a.id);
    if (null == r)
        throw new g.v({
            message: "newPlanInvoiceItem can not be null",
            extraSentryInformation: { invoice: n, plan: a },
        });
    return (
        a.interval === L.WT.MONTH
            ? (t = n.taxInclusive ? D.t.v9QeON : D.t.FALkO5)
            : a.interval === L.WT.YEAR
              ? (t = n.taxInclusive ? D.t.ECT4A5 : D.t["0HQxKW"])
              : u()(!1, "Invalid interval type"),
        (0, l.jsx)(x.E, {
            variant: "text-md/normal",
            children: D.intl.format(t, { price: (0, E.$g)(r.subscriptionPlanPrice, n.currency) }),
        })
    );
}
