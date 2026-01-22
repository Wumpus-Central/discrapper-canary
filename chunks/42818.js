n.d(t, {
    As: () => D,
    By: () => x,
    Lu: () => L,
    e9: () => G,
    hG: () => j,
    nd: () => U,
    yT: () => Z,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    f = n(100527),
    p = n(906732),
    _ = n(509545),
    h = n(259580),
    m = n(63063),
    g = n(74538),
    E = n(937615),
    b = n(374649),
    y = n(591548),
    O = n(639119),
    v = n(811334),
    S = n(585602),
    I = n(358079),
    T = n(474936),
    C = n(981631),
    A = n(388032),
    N = n(626568);
function P(e, t, n) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function R(e) {
    let {
            invoiceItem: t,
            overrideAmount: n,
            showGuildSubscriptionAdjustmentTooltip: i,
            currency: a,
            className: o,
            isPrepaidPaymentSource: s,
            referralTrialOfferId: l,
            inTrialPeriod: f,
        } = e,
        p = (0, O.N)(l),
        h = (0, c.e7)([_.Z], () => _.Z.get(t.subscriptionPlanId)),
        {
            subscriptionPlan: m,
            label: g,
            value: E,
        } = (0, I.pK)(t, {
            subscriptionPlan: h,
            premiumTrialOffer: p,
            overrideAmount: n,
            isPrepaidPaymentSource: s,
            currency: a,
        }),
        b = g;
    return (
        !0 === i &&
            (b = (0, r.jsxs)("div", {
                className: N.invoiceItemLabelWithIcon,
                children: [
                    (0, r.jsxs)("div", {
                        children: [b, " "],
                    }),
                    (0, r.jsx)(u.u, {
                        text: A.intl.format(A.t.UDop9c, {}),
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.idN, {
                            size: "md",
                            color: "currentColor",
                            "aria-label": A.intl.string(A.t.P68ePO),
                            className: N.invoiceItemLabelIcon,
                        }),
                    }),
                ],
            })),
        (0, r.jsx)(v.i$, {
            label: b,
            value: E,
            originalAmount: t.subscriptionPlanPrice * t.quantity,
            discounts: t.discounts,
            interval: m.interval,
            intervalCount: m.intervalCount,
            currency: a,
            className: o,
            inTrialPeriod: f,
        })
    );
}
function D(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: N.invoiceItemLabelWithIcon,
        children: [
            t,
            (0, r.jsx)(u.u, {
                __unsupportedReactNodeAsText: n,
                ariaHidden: !0,
                children: (0, r.jsx)(d.idN, {
                    size: "md",
                    color: "currentColor",
                    "aria-label": i,
                    className: N.invoiceItemLabelIcon,
                }),
            }),
        ],
    });
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, y.j)(t.invoiceItems),
        a = i.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        o = i.find((e) => (0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        s = (0, c.e7)([_.Z], () => (null != o ? _.Z.get(o.subscriptionPlanId) : null)),
        l = null != o ? o.amount : 0,
        u = (0, E.T4)(l, t.currency),
        d = null != s ? (0, E.og)(u, s.interval, s.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a
                ? (0, r.jsx)(R, {
                      invoiceItem: a,
                      currency: t.currency,
                      isPrepaidPaymentSource: n,
                  })
                : null,
            0 !== l && null != o && null != s
                ? (0, r.jsx)(v.B1, {
                      label: A.intl.formatToPlainString(A.t.a3cAOg, {
                          numGuildSubscriptions: o.quantity,
                          planName: (0, g.Gf)(s.id, !1, n),
                      }),
                      value: n ? u : d,
                  })
                : null,
            (0, r.jsx)(S.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: A.intl.format(t.taxInclusive ? (n ? A.t.BqdxQt : A.t.XH4raN) : A.t.RUI48E, {}),
                value:
                    t.currency === C.pKx.USD
                        ? (0, E.T4)(t.total, t.currency)
                        : "".concat((0, E.T4)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function L(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        { newPlanInvoiceItem: o, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: l } = (0, I.A0)(t, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R, {
                invoiceItem: o,
                currency: t.currency,
                overrideAmount: s,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            l.map((e) => {
                let { id: t, label: n, tooltipText: i, tooltipAriaLabel: a, value: o } = e;
                return (0, r.jsx)(
                    v.B1,
                    {
                        label: (0, r.jsx)(D, {
                            label: n,
                            tooltipText: i,
                            tooltipAriaLabel: a,
                        }),
                        value: o,
                    },
                    t,
                );
            }),
            (0, r.jsx)(S.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: A.intl.format(t.taxInclusive ? (i ? A.t.BqdxQt : A.t.XH4raN) : A.t.RUI48E, {}),
                value:
                    t.currency === C.pKx.USD
                        ? (0, E.T4)(t.total, t.currency)
                        : "".concat((0, E.T4)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function j(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: o } = (0, g.dn)(t),
        { intervalType: s, intervalCount: l } = (0, g.dn)(n);
    if (a !== s || o !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", {
        className: N.subscriptionPeriodResetNotice,
        children: A.intl.format(A.t.JWWD4E, { renewalDate: c }),
    });
}
function M(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: a } = e,
        s = null != n ? (0, y.j)(n.invoiceItems) : null,
        l = null != n ? (0, g.dn)(n) : null,
        { intervalType: c, intervalCount: u } = (0, g.dn)(i),
        d = null != l && (l.intervalType !== c || l.intervalCount !== u);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.UN, { extended: !0 }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.tuqjWQ) }),
                          (0, I.gI)(n).map((e) =>
                              (0, r.jsx)(
                                  R,
                                  {
                                      invoiceItem: e,
                                      currency: n.currency,
                                      inTrialPeriod: a,
                                  },
                                  e.id,
                              ),
                          ),
                          (0, r.jsx)(v.UN, { extended: !0 }),
                      ],
                  })
                : null,
            (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.qxVrh6) }),
            (0, I.gI)(i).map((e) => {
                let n =
                    null != s &&
                    !s.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
                return (0, r.jsx)(
                    R,
                    {
                        invoiceItem: e,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip:
                            d &&
                            (e.subscriptionPlanId === T.Xh.PREMIUM_MONTH_GUILD ||
                                e.subscriptionPlanId === T.Xh.PREMIUM_YEAR_GUILD ||
                                e.subscriptionPlanId === T.Xh.PREMIUM_3_MONTH_GUILD ||
                                e.subscriptionPlanId === T.Xh.PREMIUM_6_MONTH_GUILD),
                        className: o()({ [N.subscriptionAddedInvoiceItem]: !t || n }),
                    },
                    e.id,
                );
            }),
            (0, r.jsx)(S.Z, { invoice: i }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.B1, {
                label: A.intl.string(A.t.AChTLW),
                value: (0, E.og)((0, E.T4)(i.total, i.currency), c, u),
                className: N.subscriptionCostRow,
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
            isUpdate: o,
            overrideRenewalDate: s,
            trialFooterMessageOverride: l,
        } = e,
        c = null == (t = (0, O.N)()) ? void 0 : t.subscription_trial,
        { intervalType: u, intervalCount: d } = (0, g.dn)(i);
    if (null == n) return null;
    if (a) {
        let e = (0, g.if)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count,
            }),
            t = (null == c ? void 0 : c.interval) === T.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return null != l
            ? l
            : A.intl.format(A.t["2FvcjG"], {
                  duration: e,
                  days: t,
                  contactLink: C.EYA.CONTACT,
                  helpdeskArticle: m.Z.getArticleURL(C.BhN.PREMIUM_TRIAL),
              });
    }
    let f = i.taxInclusive ? A.t["hay+gu"] : A.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: A.intl.format(f, {
            rate: (0, E.og)((0, E.T4)(i.subtotal, i.currency), u, d),
            renewalDate:
                null != s
                    ? s
                    : o
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : i.subscriptionPeriodStart
                      : i.subscriptionPeriodEnd,
            contactLink: C.EYA.CONTACT,
            helpdeskArticle: m.Z.getArticleURL(C.BhN.BILLING),
        }),
    });
}
function U(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: a,
            overrideRenewalDate: o,
            isUpdate: s = !1,
            isTrial: l = !1,
            priceOptions: c,
            isPrepaidPaymentSource: u = !1,
            trialFooterMessageOverride: _,
            hideSubscriptionDetails: m = !1,
        } = e,
        { analyticsLocations: g } = (0, p.ZP)(),
        E = w(
            {
                subscriptionId: null == t ? void 0 : t.id,
                renewal: !0,
                preventFetch: !s,
                analyticsLocatinons: g,
                analyticsLocation: f.Z.SUBSCRIPTION_INVOICE_FOOTER,
            },
            c,
        ),
        [y] = (0, b.ED)(E),
        [O, S] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u
                ? null
                : (0, r.jsx)(v.P7, {
                      children: (0, r.jsx)(k, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: s,
                          overrideRenewalDate: o,
                          trialFooterMessageOverride: _,
                      }),
                  }),
            !m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.P3F, {
                            onClick: () => S((e) => !e),
                            className: N.subscriptionDetailsToggle,
                            children: [
                                O ? A.intl.string(A.t.aBcRbK) : A.intl.string(A.t.X6duqp),
                                (0, r.jsx)(h.Z, {
                                    direction: O ? h.Z.Directions.UP : h.Z.Directions.DOWN,
                                    className: N.subscriptionDetailsToggleCaret,
                                }),
                            ],
                        }),
                        O
                            ? (0, r.jsx)(M, {
                                  isUpdate: s,
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
        { plan: n, className: i, isPrepaidPaymentSource: a = !1, isCustomGift: o = !1, invoicePreview: s } = e,
        { tax: l, taxInclusive: c, currency: u } = s,
        f = s.total,
        p = f - l,
        _ = (0, E.T4)(p, u),
        h = (0, E.T4)(f, u);
    return (
        (t = o
            ? (0, g.L7)(n.interval, !0, void 0, void 0, !0, (0, g.Rd)(n.id))
            : A.intl.formatToPlainString(A.t.LQLxkW, { planName: (0, g.Gf)(n.id, !1, a) })),
        (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: A.intl.string(A.t.PEjaCx),
                }),
                l >= 0 && !1 === c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  variant: "text-md/bold",
                                  className: N.purchaseDetailsHeaderText,
                                  children: t,
                              }),
                              (0, r.jsxs)(v.aO, {
                                  className: i,
                                  children: [
                                      (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.sail9P) }),
                                      (0, r.jsx)(v.B1, {
                                          label: t,
                                          value: _,
                                      }),
                                      (0, r.jsx)(S.Z, { invoice: s }),
                                      (0, r.jsx)(v.UN, {}),
                                      (0, r.jsx)(v.B1, {
                                          label: A.intl.string(A.t.txajQG),
                                          value: h,
                                          className: N.subscriptionCostRow,
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
function Z(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, y.j)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === T.rV.MONTH
            ? (t = n.taxInclusive ? A.t.v9QeON : A.t.FALkO5)
            : i.interval === T.rV.YEAR
              ? (t = n.taxInclusive ? A.t.ECT4A5 : A.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            children: A.intl.format(t, { price: (0, E.T4)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
