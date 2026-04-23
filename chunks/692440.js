n.d(t, {
    DK: () => G,
    DP: () => q,
    Lw: () => z,
    U5: () => w,
    _J: () => U,
    de: () => W,
    m0: () => V,
    mT: () => B,
    tC: () => K,
    wP: () => F,
});
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(284009),
    o = n.n(s),
    u = n(311907),
    c = n(990078),
    d = n(290136),
    m = n(939249),
    p = n(534514),
    _ = n(834730),
    f = n(793574),
    g = n(688810),
    b = n(93159),
    v = n(270537),
    x = n(888751),
    h = n(97352),
    I = n(147925),
    A = n(975571),
    y = n(927578),
    T = n(580630),
    E = n(543767),
    C = n(874638),
    P = n(234419),
    L = n(735164),
    S = n(787455),
    N = n(815545),
    j = n(788868),
    R = n(652215),
    M = n(985018),
    k = n(47463);
function D(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: r,
            currency: l,
            className: i,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: o,
            inTrialPeriod: m,
        } = e,
        p = (0, P.V)(o),
        _ = (0, u.bG)([h.A], () => h.A.get(t.subscriptionPlanId)),
        f = null != p ? p.subscription_trial : void 0,
        {
            subscriptionPlan: g,
            label: b,
            value: v,
            originalAmount: x,
            subscriptionDiscount: I,
            entitlementDiscount: A,
        } = (0, N.Ae)(t, {
            subscriptionPlan: _,
            subscriptionTrial: f,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: l,
        }),
        y = b;
    return (
        !0 === r &&
            (y = (0, a.jsxs)("div", {
                className: k._H,
                children: [
                    (0, a.jsx)("div", { children: y }),
                    (0, a.jsx)(c.m, {
                        text: M.intl.format(M.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, a.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": M.intl.string(M.t.P68ePO),
                            className: k.kK,
                        }),
                    }),
                ],
            })),
        (0, a.jsx)(L.f0, {
            label: y,
            value: v,
            originalAmount: x,
            subscriptionDiscount: I,
            entitlementDiscount: A,
            interval: g.interval,
            intervalCount: g.intervalCount,
            currency: l,
            className: i,
            inTrialPeriod: m,
        })
    );
}
function O(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: r } = e;
    return (0, a.jsxs)("div", {
        className: k._H,
        children: [
            t,
            null != n &&
                (0, a.jsx)(c.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, a.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": r, className: k.kK }),
                }),
        ],
    });
}
let w = (e) => (e.currency === R.Yri.USD ? (0, T.$g)(e.total, e.currency) : `${(0, T.$g)(e.total, e.currency)}*`);
function U(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: r } = e,
        {
            guildSubscriptionPlan: l,
            basePlanInvoiceItem: i,
            guildSubscriptionInvoiceItem: s,
            guildSubscriptionAmount: o,
            formattedGuildBoostPrice: u,
            formattedGuildBoostRate: c,
            guildBoostItemLabel: d,
        } = (0, N.rc)(t, { isPrepaidPaymentSource: n });
    if (r) {
        let { lineItems: e } = (0, x.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, a.jsx)(v.Vm, { label: M.intl.string(M.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != i ? (0, a.jsx)(D, { invoiceItem: i, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== o && null != s && null != l ? (0, a.jsx)(L.oR, { label: d, value: n ? u : c }) : null,
            (0, a.jsx)(S.A, { invoice: t }),
            (0, a.jsx)(L.pK, {}),
            (0, a.jsx)(L.Sd, {
                label: M.intl.format(t.taxInclusive ? (n ? M.t.BqdxQt : M.t.XH4raN) : M.t.RUI48E, {}),
                value: w(t),
            }),
        ],
    });
}
function B(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: r, referralTrialOfferId: l } = e,
        { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: o } = (0, N.SA)(t, n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(D, {
                invoiceItem: i,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: l,
            }),
            o.map((e) => {
                let { id: t, label: n, tooltipText: r, tooltipAriaLabel: l, value: i } = e;
                return (0, a.jsx)(
                    L.oR,
                    { label: (0, a.jsx)(O, { label: n, tooltipText: r, tooltipAriaLabel: l }), value: i },
                    t,
                );
            }),
            (0, a.jsx)(S.A, { invoice: t }),
            (0, a.jsx)(L.pK, {}),
            (0, a.jsx)(L.Sd, {
                label: M.intl.format(t.taxInclusive ? (r ? M.t.BqdxQt : M.t.XH4raN) : M.t.RUI48E, {}),
                value: w(t),
            }),
        ],
    });
}
let G = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        { intervalType: r, intervalCount: l } = (0, y.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, y.Ge)(n);
    if (r !== i || l !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let o = null != a ? a : t.subscriptionPeriodEnd;
    return M.intl.format(M.t.JWWD4E, { renewalDate: o });
};
function F(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        l = G({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r });
    return null == l ? null : (0, a.jsx)("div", { className: k.gX, children: l });
}
function H(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: r, inTrialPeriod: l } = e,
        { intervalType: s, intervalCount: o } = (0, y.Ge)(r);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(L.pK, { extended: !0 }),
            null != n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(L.Xd, { children: M.intl.string(M.t.tuqjWQ) }),
                          (0, N.Q8)(n).map((e) =>
                              (0, a.jsx)(D, { invoiceItem: e, currency: n.currency, inTrialPeriod: l }, e.id),
                          ),
                          (0, a.jsx)(L.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, a.jsx)(L.Xd, { children: M.intl.string(M.t.qxVrh6) }),
            (0, N.Q8)(r, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...l } = e;
                return (0, a.jsx)(
                    D,
                    {
                        invoiceItem: l,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: i()({ [k.sy]: n }),
                    },
                    l.id,
                );
            }),
            (0, a.jsx)(S.A, { invoice: r }),
            (0, a.jsx)(L.pK, {}),
            (0, a.jsx)(L.oR, {
                label: M.intl.string(M.t.AChTLW),
                value: (0, T.CE)((0, T.$g)(r.total, r.currency), s, o),
                className: k.RV,
            }),
        ],
    });
}
function W(e) {
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
          ? (0, y._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function Y(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: r,
            isUpdate: l,
            overrideRenewalDate: i,
            trialFooterMessageOverride: s,
        } = e,
        o = (0, P.V)()?.subscription_trial,
        { intervalType: u, intervalCount: c } = (0, y.Ge)(n);
    if (null == t) return null;
    if (r) {
        let e = (0, y.re)({ intervalType: o?.interval, intervalCount: o?.interval_count }),
            t = o?.interval === j.WT.DAY && o?.interval_count < 28 ? 2 : 7;
        return (
            s ??
            M.intl.format(M.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: R.X7G.CONTACT,
                helpdeskArticle: A.A.getArticleURL(R.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? M.t["hay+gu"] : M.t.da0lki;
    return (0, a.jsx)(a.Fragment, {
        children: M.intl.format(d, {
            rate: (0, T.CE)((0, T.$g)(n.subtotal, n.currency), u, c),
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
            helpdeskArticle: A.A.getArticleURL(R.MVz.BILLING),
        }),
    });
}
function V(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: s = !1,
            isTrial: o = !1,
            priceOptions: u,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: p = !1,
            fractionalPremiumInfo: _,
            shouldUseUnifiedCheckoutUI: v,
            unifiedCheckoutDefaultExpanded: h,
        } = e,
        { analyticsLocations: A } = (0, g.Ay)(),
        y = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: A,
            analyticsLocation: f.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...u,
        },
        [T] = (0, E.Kq)(y),
        [C, P] = r.useState(!1);
    if (v) {
        let e = (0, x.Gj)(n ?? null, l, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: _,
        });
        return (0, a.jsx)(b._D, { ...e, defaultExpanded: h });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            c
                ? null
                : (0, a.jsx)(L.X0, {
                      children: (0, a.jsx)(Y, {
                          proratedInvoice: n,
                          renewalInvoice: l,
                          isTrial: o,
                          isUpdate: s,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !p &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.D, {
                            onClick: () => P((e) => !e),
                            className: k.K3,
                            children: [
                                C ? M.intl.string(M.t.aBcRbK) : M.intl.string(M.t.X6duqp),
                                (0, a.jsx)(I.A, {
                                    direction: C ? I.A.Directions.UP : I.A.Directions.DOWN,
                                    className: k.ts,
                                }),
                            ],
                        }),
                        C ? (0, a.jsx)(H, { isUpdate: s, currentInvoice: T, newInvoice: l, inTrialPeriod: o }) : null,
                    ],
                }),
        ],
    });
}
let z = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: a } = t;
    return n
        ? (0, y.D8)(e.interval, !0, void 0, void 0, !0, (0, y.m6)(e.id))
        : M.intl.formatToPlainString(M.t.LQLxkW, { planName: (0, y.Mn)(e.id, !1, a) });
};
function q(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: r = !1, isCustomGift: l = !1, invoicePreview: i } = e,
        { tax: s, taxInclusive: o, currency: u } = i,
        c = i.total,
        d = (0, T.$g)(c - s, u),
        m = (0, T.$g)(c, u),
        f = z(t, { isCustomGift: l, isPrepaidPaymentSource: r });
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(p.D, { variant: "heading-md/semibold", children: M.intl.string(M.t.PEjaCx) }),
            s >= 0 && !1 === o
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(_.E, { variant: "text-md/bold", className: k.Uc, children: f }),
                          (0, a.jsxs)(L.Yx, {
                              className: n,
                              children: [
                                  (0, a.jsx)(L.Xd, { children: M.intl.string(M.t.sail9P) }),
                                  (0, a.jsx)(L.oR, { label: f, value: d }),
                                  (0, a.jsx)(S.A, { invoice: i }),
                                  (0, a.jsx)(L.pK, {}),
                                  (0, a.jsx)(L.oR, { label: M.intl.string(M.t.txajQG), value: m, className: k.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsx)(p.D, { variant: "text-md/normal", children: `${f} - ${m}` }),
        ],
    });
}
function K(e) {
    let t,
        { invoice: n, plan: r } = e,
        l = (0, C.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        o()(null != l, "newPlanInvoiceItem can not be null"),
        r.interval === j.WT.MONTH
            ? (t = n.taxInclusive ? M.t.v9QeON : M.t.FALkO5)
            : r.interval === j.WT.YEAR
              ? (t = n.taxInclusive ? M.t.ECT4A5 : M.t["0HQxKW"])
              : o()(!1, "Invalid interval type"),
        (0, a.jsx)(_.E, {
            variant: "text-md/normal",
            children: M.intl.format(t, { price: (0, T.$g)(l.subscriptionPlanPrice, n.currency) }),
        })
    );
}
