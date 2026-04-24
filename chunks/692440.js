n.d(t, {
    DK: () => U,
    DP: () => z,
    Lw: () => Y,
    U5: () => D,
    _J: () => B,
    de: () => K,
    m0: () => H,
    mT: () => G,
    tC: () => X,
    wP: () => F,
});
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(17928),
    d = n(990078),
    u = n(290136),
    p = n(939249),
    _ = n(534514),
    m = n(834730),
    b = n(793574),
    f = n(688810),
    g = n(93159),
    h = n(848584),
    x = n(888751),
    v = n(97352),
    A = n(147925),
    y = n(975571),
    I = n(927578),
    j = n(580630),
    E = n(543767),
    P = n(874638),
    S = n(234419),
    k = n(735164),
    T = n(787455),
    N = n(815545),
    C = n(788868),
    R = n(652215),
    L = n(985018),
    M = n(47463);
function w(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: r,
            currency: l,
            className: i,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: o,
            inTrialPeriod: p,
        } = e,
        _ = (0, S.V)(o),
        m = (0, c.bG)([v.A], () => v.A.get(t.subscriptionPlanId)),
        b = null != _ ? _.subscription_trial : void 0,
        {
            subscriptionPlan: f,
            label: g,
            value: h,
            originalAmount: x,
            subscriptionDiscount: A,
            entitlementDiscount: y,
        } = (0, N.Ae)(t, {
            subscriptionPlan: m,
            subscriptionTrial: b,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: l,
        }),
        I = g;
    return (
        !0 === r &&
            (I = (0, a.jsxs)("div", {
                className: M._H,
                children: [
                    (0, a.jsx)("div", { children: I }),
                    (0, a.jsx)(d.m, {
                        text: L.intl.format(L.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, a.jsx)(u.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": L.intl.string(L.t.P68ePO),
                            className: M.kK,
                        }),
                    }),
                ],
            })),
        (0, a.jsx)(k.f0, {
            label: I,
            value: h,
            originalAmount: x,
            subscriptionDiscount: A,
            entitlementDiscount: y,
            interval: f.interval,
            intervalCount: f.intervalCount,
            currency: l,
            className: i,
            inTrialPeriod: p,
        })
    );
}
function O(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: r } = e;
    return (0, a.jsxs)("div", {
        className: M._H,
        children: [
            t,
            null != n &&
                (0, a.jsx)(d.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, a.jsx)(u.c, { size: "md", color: "currentColor", "aria-label": r, className: M.kK }),
                }),
        ],
    });
}
let D = (e) => (e.currency === R.Yri.USD ? (0, j.$g)(e.total, e.currency) : `${(0, j.$g)(e.total, e.currency)}*`);
function B(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: r } = e,
        {
            guildSubscriptionPlan: l,
            basePlanInvoiceItem: i,
            guildSubscriptionInvoiceItem: s,
            guildSubscriptionAmount: o,
            formattedGuildBoostPrice: c,
            formattedGuildBoostRate: d,
            guildBoostItemLabel: u,
        } = (0, N.rc)(t, { isPrepaidPaymentSource: n });
    if (r) {
        let { lineItems: e } = (0, x.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, a.jsx)(h.Vm, { label: L.intl.string(L.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != i ? (0, a.jsx)(w, { invoiceItem: i, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== o && null != s && null != l ? (0, a.jsx)(k.oR, { label: u, value: n ? c : d }) : null,
            (0, a.jsx)(T.A, { invoice: t }),
            (0, a.jsx)(k.pK, {}),
            (0, a.jsx)(k.Sd, {
                label: L.intl.format(t.taxInclusive ? (n ? L.t.BqdxQt : L.t.XH4raN) : L.t.RUI48E, {}),
                value: D(t),
            }),
        ],
    });
}
function G(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: r, referralTrialOfferId: l } = e,
        { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: o } = (0, N.SA)(t, n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(w, {
                invoiceItem: i,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: l,
            }),
            o.map((e) => {
                let { id: t, label: n, tooltipText: r, tooltipAriaLabel: l, value: i } = e;
                return (0, a.jsx)(
                    k.oR,
                    { label: (0, a.jsx)(O, { label: n, tooltipText: r, tooltipAriaLabel: l }), value: i },
                    t,
                );
            }),
            (0, a.jsx)(T.A, { invoice: t }),
            (0, a.jsx)(k.pK, {}),
            (0, a.jsx)(k.Sd, {
                label: L.intl.format(t.taxInclusive ? (r ? L.t.BqdxQt : L.t.XH4raN) : L.t.RUI48E, {}),
                value: D(t),
            }),
        ],
    });
}
let U = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        { intervalType: r, intervalCount: l } = (0, I.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, I.Ge)(n);
    if (r !== i || l !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let o = null != a ? a : t.subscriptionPeriodEnd;
    return L.intl.format(L.t.JWWD4E, { renewalDate: o });
};
function F(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        l = U({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r });
    return null == l ? null : (0, a.jsx)("div", { className: M.gX, children: l });
}
function W(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: r, inTrialPeriod: l } = e,
        { intervalType: s, intervalCount: o } = (0, I.Ge)(r);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.pK, { extended: !0 }),
            null != n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(k.Xd, { children: L.intl.string(L.t.tuqjWQ) }),
                          (0, N.Q8)(n).map((e) =>
                              (0, a.jsx)(w, { invoiceItem: e, currency: n.currency, inTrialPeriod: l }, e.id),
                          ),
                          (0, a.jsx)(k.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, a.jsx)(k.Xd, { children: L.intl.string(L.t.qxVrh6) }),
            (0, N.Q8)(r, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...l } = e;
                return (0, a.jsx)(
                    w,
                    {
                        invoiceItem: l,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: i()({ [M.sy]: n }),
                    },
                    l.id,
                );
            }),
            (0, a.jsx)(T.A, { invoice: r }),
            (0, a.jsx)(k.pK, {}),
            (0, a.jsx)(k.oR, {
                label: L.intl.string(L.t.AChTLW),
                value: (0, j.CE)((0, j.$g)(r.total, r.currency), s, o),
                className: M.RV,
            }),
        ],
    });
}
function K(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: a,
            renewalInvoice: r,
            isSubscriptionUpdate: l,
            fractionalPremiumInfo: i,
        } = e;
    return null != n
        ? n
        : ((t = null != a ? a.subscriptionPeriodEnd : l ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, I._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function V(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: r,
            isUpdate: l,
            overrideRenewalDate: i,
            trialFooterMessageOverride: s,
        } = e,
        o = (0, S.V)()?.subscription_trial,
        { intervalType: c, intervalCount: d } = (0, I.Ge)(n);
    if (null == t) return null;
    if (r) {
        let e = (0, I.re)({ intervalType: o?.interval, intervalCount: o?.interval_count }),
            t = o?.interval === C.WT.DAY && o?.interval_count < 28 ? 2 : 7;
        return (
            s ??
            L.intl.format(L.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: R.X7G.CONTACT,
                helpdeskArticle: y.A.getArticleURL(R.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let u = n.taxInclusive ? L.t["hay+gu"] : L.t.da0lki;
    return (0, a.jsx)(a.Fragment, {
        children: L.intl.format(u, {
            rate: (0, j.CE)((0, j.$g)(n.subtotal, n.currency), c, d),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: a, isUpdate: r } = e;
                return null != t
                    ? t
                    : r
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : a.subscriptionPeriodStart
                      : a.subscriptionPeriodEnd;
            })({ overrideRenewalDate: i, proratedInvoice: t, renewalInvoice: n, isUpdate: l }),
            contactLink: R.X7G.CONTACT,
            helpdeskArticle: y.A.getArticleURL(R.MVz.BILLING),
        }),
    });
}
function H(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: s = !1,
            isTrial: o = !1,
            priceOptions: c,
            isPrepaidPaymentSource: d = !1,
            trialFooterMessageOverride: u,
            hideSubscriptionDetails: _ = !1,
            fractionalPremiumInfo: m,
            shouldUseUnifiedCheckoutUI: h,
            unifiedCheckoutDefaultExpanded: v,
        } = e,
        { analyticsLocations: y } = (0, f.Ay)(),
        I = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: y,
            analyticsLocation: b.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...c,
        },
        [j] = (0, E.Kq)(I),
        [P, S] = r.useState(!1);
    if (h) {
        let e = (0, x.Gj)(n ?? null, l, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: m,
        });
        return (0, a.jsx)(g._D, { ...e, defaultExpanded: v });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d
                ? null
                : (0, a.jsx)(k.X0, {
                      children: (0, a.jsx)(V, {
                          proratedInvoice: n,
                          renewalInvoice: l,
                          isTrial: o,
                          isUpdate: s,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: u,
                      }),
                  }),
            !_ &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(p.D, {
                            onClick: () => S((e) => !e),
                            className: M.K3,
                            children: [
                                P ? L.intl.string(L.t.aBcRbK) : L.intl.string(L.t.X6duqp),
                                (0, a.jsx)(A.A, {
                                    direction: P ? A.A.Directions.UP : A.A.Directions.DOWN,
                                    className: M.ts,
                                }),
                            ],
                        }),
                        P ? (0, a.jsx)(W, { isUpdate: s, currentInvoice: j, newInvoice: l, inTrialPeriod: o }) : null,
                    ],
                }),
        ],
    });
}
let Y = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: a } = t;
    return n
        ? (0, I.D8)(e.interval, !0, void 0, void 0, !0, (0, I.m6)(e.id))
        : L.intl.formatToPlainString(L.t.LQLxkW, { planName: (0, I.Mn)(e.id, !1, a) });
};
function z(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: r = !1, isCustomGift: l = !1, invoicePreview: i } = e,
        { tax: s, taxInclusive: o, currency: c } = i,
        d = i.total,
        u = (0, j.$g)(d - s, c),
        p = (0, j.$g)(d, c),
        b = Y(t, { isCustomGift: l, isPrepaidPaymentSource: r });
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(_.D, { variant: "heading-md/semibold", children: L.intl.string(L.t.PEjaCx) }),
            s >= 0 && !1 === o
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(m.E, { variant: "text-md/bold", className: M.Uc, children: b }),
                          (0, a.jsxs)(k.Yx, {
                              className: n,
                              children: [
                                  (0, a.jsx)(k.Xd, { children: L.intl.string(L.t.sail9P) }),
                                  (0, a.jsx)(k.oR, { label: b, value: u }),
                                  (0, a.jsx)(T.A, { invoice: i }),
                                  (0, a.jsx)(k.pK, {}),
                                  (0, a.jsx)(k.oR, { label: L.intl.string(L.t.txajQG), value: p, className: M.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsx)(_.D, { variant: "text-md/normal", children: `${b} - ${p}` }),
        ],
    });
}
function X(e) {
    let t,
        { invoice: n, plan: r } = e,
        l = (0, P.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        o()(null != l, "newPlanInvoiceItem can not be null"),
        r.interval === C.WT.MONTH
            ? (t = n.taxInclusive ? L.t.v9QeON : L.t.FALkO5)
            : r.interval === C.WT.YEAR
              ? (t = n.taxInclusive ? L.t.ECT4A5 : L.t["0HQxKW"])
              : o()(!1, "Invalid interval type"),
        (0, a.jsx)(m.E, {
            variant: "text-md/normal",
            children: L.intl.format(t, { price: (0, j.$g)(l.subscriptionPlanPrice, n.currency) }),
        })
    );
}
