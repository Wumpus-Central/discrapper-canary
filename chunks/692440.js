n.d(t, {
    DK: () => B,
    DP: () => K,
    Lw: () => z,
    U5: () => G,
    _J: () => w,
    de: () => H,
    m0: () => V,
    mT: () => O,
    tC: () => q,
    wP: () => F,
});
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(284009),
    u = n.n(s),
    o = n(17928),
    c = n(990078),
    d = n(290136),
    m = n(939249),
    p = n(534514),
    v = n(834730),
    g = n(793574),
    x = n(688810),
    f = n(474367),
    _ = n(848584),
    b = n(888751),
    h = n(97352),
    I = n(147925),
    j = n(975571),
    A = n(927578),
    y = n(580630),
    E = n(543767),
    P = n(874638),
    T = n(234419),
    N = n(735164),
    R = n(787455),
    M = n(815545),
    S = n(788868),
    L = n(652215),
    C = n(375708),
    k = n(47463);
function D(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: a,
            currency: l,
            className: i,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: u,
            inTrialPeriod: m,
        } = e,
        p = (0, T.V)(u),
        v = (0, o.bG)([h.A], () => h.A.get(t.subscriptionPlanId)),
        g = null != p ? p.subscription_trial : void 0,
        {
            subscriptionPlan: x,
            label: f,
            value: _,
            originalAmount: b,
            subscriptionDiscount: I,
            entitlementDiscount: j,
        } = (0, M.Ae)(t, {
            subscriptionPlan: v,
            subscriptionTrial: g,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: l,
        }),
        A = f;
    return (
        !0 === a &&
            (A = (0, r.jsxs)("div", {
                className: k._H,
                children: [
                    (0, r.jsx)("div", { children: A }),
                    (0, r.jsx)(c.m, {
                        text: C.intl.format(C.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.c, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": C.intl.string(C.t.P68ePO),
                            className: k.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(N.f0, {
            label: A,
            value: _,
            originalAmount: b,
            subscriptionDiscount: I,
            entitlementDiscount: j,
            interval: x.interval,
            intervalCount: x.intervalCount,
            currency: l,
            className: i,
            inTrialPeriod: m,
        })
    );
}
function U(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: a } = e;
    return (0, r.jsxs)("div", {
        className: k._H,
        children: [
            t,
            null != n &&
                (0, r.jsx)(c.m, {
                    __unsupportedReactNodeAsText: n,
                    ariaHidden: !0,
                    children: (0, r.jsx)(d.c, { size: "md", color: "currentColor", "aria-label": a, className: k.kK }),
                }),
        ],
    });
}
let G = (e) => (e.currency === L.Yri.USD ? (0, y.$g)(e.total, e.currency) : `${(0, y.$g)(e.total, e.currency)}*`);
function w(e) {
    let { invoice: t, isPrepaidPaymentSource: n, shouldUseUnifiedCheckoutUI: a } = e,
        {
            guildSubscriptionPlan: l,
            basePlanInvoiceItem: i,
            guildSubscriptionInvoiceItem: s,
            guildSubscriptionAmount: u,
            formattedGuildBoostPrice: o,
            formattedGuildBoostRate: c,
            guildBoostItemLabel: d,
        } = (0, M.rc)(t, { isPrepaidPaymentSource: n });
    if (a) {
        let { lineItems: e } = (0, b.Ig)(t, {
            subscriptionTrial: null,
            includeTaxLineItem: !0,
            isPrepaidPaymentSource: n,
        });
        return (0, r.jsx)(_.Vm, { label: C.intl.string(C.t["2eh+Co"]), lineItems: e, currency: t.currency });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != i ? (0, r.jsx)(D, { invoiceItem: i, currency: t.currency, isPrepaidPaymentSource: n }) : null,
            0 !== u && null != s && null != l ? (0, r.jsx)(N.oR, { label: d, value: n ? o : c }) : null,
            (0, r.jsx)(R.A, { invoice: t }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.Sd, {
                label: C.intl.format(t.taxInclusive ? (n ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
function O(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: a, referralTrialOfferId: l } = e,
        { newPlanInvoiceItem: i, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: u } = (0, M.SA)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D, {
                invoiceItem: i,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: a,
                referralTrialOfferId: l,
            }),
            u.map((e) => {
                let { id: t, label: n, tooltipText: a, tooltipAriaLabel: l, value: i } = e;
                return (0, r.jsx)(
                    N.oR,
                    { label: (0, r.jsx)(U, { label: n, tooltipText: a, tooltipAriaLabel: l }), value: i },
                    t,
                );
            }),
            (0, r.jsx)(R.A, { invoice: t }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.Sd, {
                label: C.intl.format(t.taxInclusive ? (a ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value: G(t),
            }),
        ],
    });
}
let B = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: a, intervalCount: l } = (0, A.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, A.Ge)(n);
    if (a !== i || l !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != r ? r : t.subscriptionPeriodEnd;
    return C.intl.format(C.t.JWWD4E, { renewalDate: u });
};
function F(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        l = B({ proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a });
    return null == l ? null : (0, r.jsx)("div", { className: k.gX, children: l });
}
function W(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: a, inTrialPeriod: l } = e,
        { intervalType: s, intervalCount: u } = (0, A.Ge)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(N.Xd, { children: C.intl.string(C.t.tuqjWQ) }),
                          (0, M.Q8)(n).map((e) =>
                              (0, r.jsx)(D, { invoiceItem: e, currency: n.currency, inTrialPeriod: l }, e.id),
                          ),
                          (0, r.jsx)(N.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(N.Xd, { children: C.intl.string(C.t.qxVrh6) }),
            (0, M.Q8)(a, n, { isSubscriptionUpdate: t }).map((e) => {
                let { showGuildSubscriptionAdjustmentTooltip: t, isAddedSubscriptionInvoiceItem: n, ...l } = e;
                return (0, r.jsx)(
                    D,
                    {
                        invoiceItem: l,
                        currency: a.currency,
                        showGuildSubscriptionAdjustmentTooltip: t,
                        className: i()({ [k.sy]: n }),
                    },
                    l.id,
                );
            }),
            (0, r.jsx)(R.A, { invoice: a }),
            (0, r.jsx)(N.pK, {}),
            (0, r.jsx)(N.oR, {
                label: C.intl.string(C.t.AChTLW),
                value: (0, y.CE)((0, y.$g)(a.total, a.currency), s, u),
                className: k.RV,
            }),
        ],
    });
}
function H(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: r,
            renewalInvoice: a,
            isSubscriptionUpdate: l,
            fractionalPremiumInfo: i,
        } = e;
    return null != n
        ? n
        : ((t = null != r ? r.subscriptionPeriodEnd : l ? a.subscriptionPeriodStart : a.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, A._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function Y(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            isTrial: a,
            isUpdate: l,
            overrideRenewalDate: i,
            trialFooterMessageOverride: s,
        } = e,
        u = (0, T.V)()?.subscription_trial,
        { intervalType: o, intervalCount: c } = (0, A.Ge)(n);
    if (null == t) return null;
    if (a) {
        let e = (0, A.re)({ intervalType: u?.interval, intervalCount: u?.interval_count }),
            t = u?.interval === S.WT.DAY && u?.interval_count < 28 ? 2 : 7;
        return (
            s ??
            C.intl.format(C.t["2FvcjG"], {
                duration: e,
                days: t,
                contactLink: L.X7G.CONTACT,
                helpdeskArticle: j.A.getArticleURL(L.MVz.PREMIUM_TRIAL),
            })
        );
    }
    let d = n.taxInclusive ? C.t["hay+gu"] : C.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: C.intl.format(d, {
            rate: (0, y.CE)((0, y.$g)(n.subtotal, n.currency), o, c),
            renewalDate: (function (e) {
                let { overrideRenewalDate: t, proratedInvoice: n, renewalInvoice: r, isUpdate: a } = e;
                return null != t
                    ? t
                    : a
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : r.subscriptionPeriodStart
                      : r.subscriptionPeriodEnd;
            })({ overrideRenewalDate: i, proratedInvoice: t, renewalInvoice: n, isUpdate: l }),
            contactLink: L.X7G.CONTACT,
            helpdeskArticle: j.A.getArticleURL(L.MVz.BILLING),
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
            isTrial: u = !1,
            priceOptions: o,
            isPrepaidPaymentSource: c = !1,
            trialFooterMessageOverride: d,
            hideSubscriptionDetails: p = !1,
            fractionalPremiumInfo: v,
            shouldUseUnifiedCheckoutUI: _,
            unifiedCheckoutDefaultExpanded: h,
        } = e,
        { analyticsLocations: j } = (0, x.Ay)(),
        A = {
            subscriptionId: t?.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: j,
            analyticsLocation: g.A.SUBSCRIPTION_INVOICE_FOOTER,
            ...o,
        },
        [y] = (0, E.Kq)(A),
        [P, T] = a.useState(!1);
    if (_) {
        let e = (0, b.Gj)(n ?? null, l, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: v,
        });
        return (0, r.jsx)(f._D, { ...e, defaultExpanded: h });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c
                ? null
                : (0, r.jsx)(N.X0, {
                      children: (0, r.jsx)(Y, {
                          proratedInvoice: n,
                          renewalInvoice: l,
                          isTrial: u,
                          isUpdate: s,
                          overrideRenewalDate: i,
                          trialFooterMessageOverride: d,
                      }),
                  }),
            !p &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.D, {
                            onClick: () => T((e) => !e),
                            className: k.K3,
                            children: [
                                P ? C.intl.string(C.t.aBcRbK) : C.intl.string(C.t.X6duqp),
                                (0, r.jsx)(I.A, {
                                    direction: P ? I.A.Directions.UP : I.A.Directions.DOWN,
                                    className: k.ts,
                                }),
                            ],
                        }),
                        P ? (0, r.jsx)(W, { isUpdate: s, currentInvoice: y, newInvoice: l, inTrialPeriod: u }) : null,
                    ],
                }),
        ],
    });
}
let z = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: r } = t;
    return n
        ? (0, A.D8)(e.interval, !0, void 0, void 0, !0, (0, A.m6)(e.id))
        : C.intl.formatToPlainString(C.t.LQLxkW, { planName: (0, A.Mn)(e.id, !1, r) });
};
function K(e) {
    let { plan: t, className: n, isPrepaidPaymentSource: a = !1, isCustomGift: l = !1, invoicePreview: i } = e,
        { tax: s, taxInclusive: u, currency: o } = i,
        c = i.total,
        d = (0, y.$g)(c - s, o),
        m = (0, y.$g)(c, o),
        g = z(t, { isCustomGift: l, isPrepaidPaymentSource: a });
    return (0, r.jsxs)("div", {
        className: n,
        children: [
            (0, r.jsx)(p.D, { variant: "heading-md/semibold", children: C.intl.string(C.t.PEjaCx) }),
            s >= 0 && !1 === u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(v.E, { variant: "text-md/bold", className: k.Uc, children: g }),
                          (0, r.jsxs)(N.Yx, {
                              className: n,
                              children: [
                                  (0, r.jsx)(N.Xd, { children: C.intl.string(C.t.sail9P) }),
                                  (0, r.jsx)(N.oR, { label: g, value: d }),
                                  (0, r.jsx)(R.A, { invoice: i }),
                                  (0, r.jsx)(N.pK, {}),
                                  (0, r.jsx)(N.oR, { label: C.intl.string(C.t.txajQG), value: m, className: k.RV }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)(p.D, { variant: "text-md/normal", children: `${g} - ${m}` }),
        ],
    });
}
function q(e) {
    let t,
        { invoice: n, plan: a } = e,
        l = (0, P.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === a.id);
    return (
        u()(null != l, "newPlanInvoiceItem can not be null"),
        a.interval === S.WT.MONTH
            ? (t = n.taxInclusive ? C.t.v9QeON : C.t.FALkO5)
            : a.interval === S.WT.YEAR
              ? (t = n.taxInclusive ? C.t.ECT4A5 : C.t["0HQxKW"])
              : u()(!1, "Invalid interval type"),
        (0, r.jsx)(v.E, {
            variant: "text-md/normal",
            children: C.intl.format(t, { price: (0, y.$g)(l.subscriptionPlanPrice, n.currency) }),
        })
    );
}
