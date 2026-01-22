n.d(t, {
    DP: () => G,
    _J: () => x,
    m0: () => U,
    mT: () => L,
    sw: () => D,
    tC: () => V,
    wP: () => j,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    f = n(793574),
    p = n(688810),
    _ = n(97352),
    h = n(147925),
    m = n(975571),
    g = n(927578),
    E = n(580630),
    b = n(543767),
    y = n(874638),
    O = n(234419),
    A = n(735164),
    v = n(787455),
    S = n(815545),
    I = n(788868),
    T = n(652215),
    C = n(985018),
    N = n(362442);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function P(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: i,
            currency: a,
            className: s,
            isPrepaidPaymentSource: o,
            referralTrialOfferId: l,
            inTrialPeriod: f,
        } = e,
        p = (0, O.V)(l),
        h = (0, c.bG)([_.A], () => _.A.get(t.subscriptionPlanId)),
        {
            subscriptionPlan: m,
            label: g,
            value: E,
        } = (0, S.Ol)(t, {
            subscriptionPlan: h,
            premiumTrialOffer: p,
            overrideAmount: n,
            isPrepaidPaymentSource: o,
            currency: a,
        }),
        b = g;
    return (
        !0 === i &&
            (b = (0, r.jsxs)("div", {
                className: N._H,
                children: [
                    (0, r.jsxs)("div", {
                        children: [b, " "],
                    }),
                    (0, r.jsx)(u.m_, {
                        text: C.intl.format(C.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.cBN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": C.intl.string(C.t.P68ePO),
                            className: N.kK,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(A.f0, {
            label: b,
            value: E,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            discounts: t.discounts,
            interval: m.interval,
            intervalCount: m.intervalCount,
            currency: a,
            className: s,
            inTrialPeriod: f,
        })
    );
}
function D(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: N._H,
        children: [
            t,
            (0, r.jsx)(u.m_, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.cBN, {
                    size: "md",
                    color: "currentColor",
                    "aria-label": i,
                    className: N.kK,
                }),
            }),
        ],
    });
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, y.Z)(t.invoiceItems),
        a = i.find((e) => !(0, g.z4)(e.subscriptionPlanId) && e.amount >= 0),
        s = i.find((e) => (0, g.z4)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, c.bG)([_.A], () => (null != s ? _.A.get(s.subscriptionPlanId) : null)),
        l = null != s ? s.amount : 0,
        u = (0, E.$g)(l, t.currency),
        d = null != o ? (0, E.CE)(u, o.interval, o.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a
                ? (0, r.jsx)(P, {
                      invoiceItem: a,
                      currency: t.currency,
                      isPrepaidPaymentSource: n,
                  })
                : null,
            0 !== l && null != s && null != o
                ? (0, r.jsx)(A.oR, {
                      label: C.intl.formatToPlainString(C.t.a3cAOg, {
                          numGuildSubscriptions: s.quantity,
                          planName: (0, g.Mn)(o.id, !1, n),
                      }),
                      value: n ? u : d,
                  })
                : null,
            (0, r.jsx)(v.A, { invoice: t }),
            (0, r.jsx)(A.pK, {}),
            (0, r.jsx)(A.Sd, {
                label: C.intl.format(t.taxInclusive ? (n ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value:
                    t.currency === T.Yri.USD
                        ? (0, E.$g)(t.total, t.currency)
                        : "".concat((0, E.$g)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function L(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, S.qi)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: o,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: a, value: s } = e;
                return (0, r.jsx)(
                    A.oR,
                    {
                        label: (0, r.jsx)(D, {
                            label: n,
                            tooltipText: i,
                            tooltipAriaLabel: a,
                        }),
                        value: s,
                    },
                    t,
                );
            }),
            (0, r.jsx)(v.A, { invoice: t }),
            (0, r.jsx)(A.pK, {}),
            (0, r.jsx)(A.Sd, {
                label: C.intl.format(t.taxInclusive ? (i ? C.t.BqdxQt : C.t.XH4raN) : C.t.RUI48E, {}),
                value:
                    t.currency === T.Yri.USD
                        ? (0, E.$g)(t.total, t.currency)
                        : "".concat((0, E.$g)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function j(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: s } = (0, g.Ge)(t),
        { intervalType: o, intervalCount: l } = (0, g.Ge)(n);
    if (a !== o || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", {
        className: N.gX,
        children: C.intl.format(C.t.JWWD4E, { renewalDate: c }),
    });
}
function M(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: a } = e,
        o = null != n ? (0, y.Z)(n.invoiceItems) : null,
        l = null != n ? (0, g.Ge)(n) : null,
        { intervalType: c, intervalCount: u } = (0, g.Ge)(i),
        d = null != l && (l.intervalType !== c || l.intervalCount !== u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.pK, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(A.Xd, { children: C.intl.string(C.t.tuqjWQ) }),
                          (0, S.Q8)(n).map((e) =>
                              (0, r.jsx)(
                                  P,
                                  {
                                      invoiceItem: e,
                                      currency: n.currency,
                                      inTrialPeriod: a,
                                  },
                                  e.id,
                              ),
                          ),
                          (0, r.jsx)(A.pK, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(A.Xd, { children: C.intl.string(C.t.qxVrh6) }),
            (0, S.Q8)(i).map((e) => {
                let n =
                    null != o &&
                    !o.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
                return (0, r.jsx)(
                    P,
                    {
                        invoiceItem: e,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip:
                            d &&
                            (e.subscriptionPlanId === I.gD.PREMIUM_MONTH_GUILD ||
                                e.subscriptionPlanId === I.gD.PREMIUM_YEAR_GUILD ||
                                e.subscriptionPlanId === I.gD.PREMIUM_3_MONTH_GUILD ||
                                e.subscriptionPlanId === I.gD.PREMIUM_6_MONTH_GUILD),
                        className: s()({ [N.sy]: !t || n }),
                    },
                    e.id,
                );
            }),
            (0, r.jsx)(v.A, { invoice: i }),
            (0, r.jsx)(A.pK, {}),
            (0, r.jsx)(A.oR, {
                label: C.intl.string(C.t.AChTLW),
                value: (0, E.CE)((0, E.$g)(i.total, i.currency), c, u),
                className: N.RV,
            }),
        ],
    });
}
function k(e) {
    var t;
    let {
            proratedInvoice: n,
            renewalInvoice: i,
            isTrial: a,
            isUpdate: s,
            overrideRenewalDate: o,
            trialFooterMessageOverride: l,
        } = e,
        c = null == (t = (0, O.V)()) ? void 0 : t.subscription_trial,
        { intervalType: u, intervalCount: d } = (0, g.Ge)(i);
    if (null == n) return null;
    if (a) {
        let e = (0, g.re)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count,
            }),
            t = (null == c ? void 0 : c.interval) === I.WT.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return null != l
            ? l
            : C.intl.format(C.t["2FvcjG"], {
                  duration: e,
                  days: t,
                  contactLink: T.X7G.CONTACT,
                  helpdeskArticle: m.A.getArticleURL(T.MVz.PREMIUM_TRIAL),
              });
    }
    let f = i.taxInclusive ? C.t["hay+gu"] : C.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: C.intl.format(f, {
            rate: (0, E.CE)((0, E.$g)(i.subtotal, i.currency), u, d),
            renewalDate:
                null != o
                    ? o
                    : s
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : i.subscriptionPeriodStart
                      : i.subscriptionPeriodEnd,
            contactLink: T.X7G.CONTACT,
            helpdeskArticle: m.A.getArticleURL(T.MVz.BILLING),
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
            priceOptions: c,
            isPrepaidPaymentSource: u = !1,
            trialFooterMessageOverride: _,
            hideSubscriptionDetails: m = !1,
        } = e,
        { analyticsLocations: g } = (0, p.Ay)(),
        E = w(
            {
                subscriptionId: null == t ? void 0 : t.id,
                renewal: !0,
                preventFetch: !o,
                analyticsLocatinons: g,
                analyticsLocation: f.A.SUBSCRIPTION_INVOICE_FOOTER,
            },
            c,
        ),
        [y] = (0, b.Kq)(E),
        [O, v] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u
                ? null
                : (0, r.jsx)(A.X0, {
                      children: (0, r.jsx)(k, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: s,
                          trialFooterMessageOverride: _,
                      }),
                  }),
            !m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.DUT, {
                            onClick: () => v((e) => !e),
                            className: N.K3,
                            children: [
                                O ? C.intl.string(C.t.aBcRbK) : C.intl.string(C.t.X6duqp),
                                (0, r.jsx)(h.A, {
                                    direction: O ? h.A.Directions.UP : h.A.Directions.DOWN,
                                    className: N.ts,
                                }),
                            ],
                        }),
                        O
                            ? (0, r.jsx)(M, {
                                  isUpdate: o,
                                  currentInvoice: y,
                                  newInvoice: a,
                                  inTrialPeriod: l,
                              })
                            : null,
                    ],
                }),
        ],
    });
}
function G(e) {
    let t,
        { plan: n, className: i, isPrepaidPaymentSource: a = !1, isCustomGift: s = !1, invoicePreview: o } = e,
        { tax: l, taxInclusive: c, currency: u } = o,
        f = o.total,
        p = f - l,
        _ = (0, E.$g)(p, u),
        h = (0, E.$g)(f, u);
    return (
        (t = s
            ? (0, g.D8)(n.interval, !0, void 0, void 0, !0, (0, g.m6)(n.id))
            : C.intl.formatToPlainString(C.t.LQLxkW, { planName: (0, g.Mn)(n.id, !1, a) })),
        (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: C.intl.string(C.t.PEjaCx),
                }),
                l >= 0 && !1 === c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  variant: "text-md/bold",
                                  className: N.Uc,
                                  children: t,
                              }),
                              (0, r.jsxs)(A.Yx, {
                                  className: i,
                                  children: [
                                      (0, r.jsx)(A.Xd, { children: C.intl.string(C.t.sail9P) }),
                                      (0, r.jsx)(A.oR, {
                                          label: t,
                                          value: _,
                                      }),
                                      (0, r.jsx)(v.A, { invoice: o }),
                                      (0, r.jsx)(A.pK, {}),
                                      (0, r.jsx)(A.oR, {
                                          label: C.intl.string(C.t.txajQG),
                                          value: h,
                                          className: N.RV,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, r.jsx)(d.Heading, {
                          variant: "text-md/normal",
                          children: "".concat(t, " - ").concat(h),
                      }),
            ],
        })
    );
}
function V(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, y.Z)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === I.WT.MONTH
            ? (t = n.taxInclusive ? C.t.v9QeON : C.t.FALkO5)
            : i.interval === I.WT.YEAR
              ? (t = n.taxInclusive ? C.t.ECT4A5 : C.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: C.intl.format(t, { price: (0, E.$g)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
