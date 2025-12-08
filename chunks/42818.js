n.d(t, {
    As: () => U,
    By: () => G,
    Lu: () => Z,
    e9: () => K,
    hG: () => V,
    nd: () => W,
    yT: () => z,
}),
    n(415506),
    n(642613),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(911969),
    f = n(100527),
    p = n(906732),
    _ = n(509545),
    m = n(259580),
    h = n(63063),
    g = n(74538),
    E = n(937615),
    b = n(374649),
    y = n(591548),
    O = n(639119),
    v = n(811334),
    S = n(585602),
    I = n(474936),
    T = n(282793),
    A = n(981631),
    C = n(441677),
    N = n(388032),
    P = n(146911);
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
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (e, t) => {
        var n;
        return !!(null == (n = e.discounts) ? void 0 : n.some((e) => e.type === t));
    },
    j = (e, t) => {
        var n, r, i;
        return (
            e.subscriptionPlanPrice -
            (null != (i = null == (r = e.discounts) || null == (n = r.find((e) => e.type === t)) ? void 0 : n.amount)
                ? i
                : 0)
        );
    };
function M(e, t, n, r) {
    let i = L(e, d.eW.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case I.Xh.PREMIUM_GROUP_MONTH:
            return N.intl.formatToPlainString(C.default["8bPDtb"], { premiumGroupProductName: (0, T.sO)() });
        case I.Xh.PREMIUM_MONTH_LEGACY:
        case I.Xh.PREMIUM_YEAR_LEGACY:
        case I.Xh.PREMIUM_MONTH_TIER_0:
        case I.Xh.PREMIUM_YEAR_TIER_0:
        case I.Xh.PREMIUM_MONTH_TIER_1:
        case I.Xh.PREMIUM_YEAR_TIER_1:
        case I.Xh.PREMIUM_MONTH_TIER_2:
        case I.Xh.PREMIUM_YEAR_TIER_2:
        case I.Xh.PREMIUM_3_MONTH_TIER_2:
        case I.Xh.PREMIUM_6_MONTH_TIER_2:
            return (0, g.Gf)(e.subscriptionPlanId, i, n, r);
        case I.Xh.PREMIUM_3_MONTH_GUILD:
        case I.Xh.PREMIUM_6_MONTH_GUILD:
            return N.intl.format(N.t.YAIIWp, {
                num: e.quantity,
                intervalCount: t.intervalCount,
            });
        case I.Xh.PREMIUM_MONTH_GUILD:
            return N.intl.format(N.t["3BYyip"], { num: e.quantity });
        case I.Xh.PREMIUM_YEAR_GUILD:
            return N.intl.format(N.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case I.rV.MONTH:
            if (1 === t.intervalCount) return N.intl.formatToPlainString(N.t["6oq128"], { planName: t.name });
            return N.intl.formatToPlainString(N.t["9ydggS"], {
                planName: t.name,
                intervalCount: t.intervalCount,
            });
        case I.rV.YEAR:
            return N.intl.formatToPlainString(N.t.V6UFQM, { planName: t.name });
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
}
function k(e) {
    var t;
    let {
            invoiceItem: n,
            overrideAmount: i,
            showGuildSubscriptionAdjustmentTooltip: a,
            currency: o,
            className: s,
            isPrepaidPaymentSource: d,
            referralTrialOfferId: f,
            inTrialPeriod: p,
        } = e,
        m = (0, c.e7)([_.Z], () => _.Z.get(n.subscriptionPlanId)),
        h = null == (t = (0, O.N)(f)) ? void 0 : t.subscription_trial;
    l()(null != m, "Missing subscriptionPlan");
    let b = M(
        n,
        m,
        d,
        (0, g.if)({
            intervalType: null == h ? void 0 : h.interval,
            intervalCount: null == h ? void 0 : h.interval_count,
        }),
    );
    !0 === a &&
        (b = (0, r.jsxs)("div", {
            className: P.invoiceItemLabelWithIcon,
            children: [
                (0, r.jsxs)("div", {
                    children: [b, " "],
                }),
                (0, r.jsx)(u.aML, {
                    "data-migration-pending": !0,
                    text: N.intl.format(N.t.UDop9c, {}),
                    "aria-label": N.intl.string(N.t.P68ePO),
                    tooltipClassName: P.invoiceItemTooltip,
                    children: (e) =>
                        (0, r.jsx)(
                            u.idN,
                            x(
                                w(
                                    {
                                        size: "md",
                                        color: "currentColor",
                                    },
                                    e,
                                ),
                                { className: P.invoiceItemLabelIcon },
                            ),
                        ),
                }),
            ],
        }));
    let y = (0, E.T4)(null != i ? i : n.amount, o),
        S = d ? y : (0, E.og)(y, m.interval, m.intervalCount);
    return (0, r.jsx)(v.i$, {
        label: b,
        value: S,
        originalAmount: n.subscriptionPlanPrice * n.quantity,
        discounts: n.discounts,
        interval: m.interval,
        intervalCount: m.intervalCount,
        currency: o,
        className: s,
        inTrialPeriod: p,
    });
}
function U(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)("div", {
        className: P.invoiceItemLabelWithIcon,
        children: [
            t,
            (0, r.jsx)(u.aML, {
                "data-migration-pending": !0,
                clickableOnMobile: !0,
                text: n,
                "aria-label": i,
                tooltipClassName: P.invoiceItemTooltip,
                children: (e) =>
                    (0, r.jsx)(
                        u.idN,
                        x(
                            w(
                                {
                                    size: "md",
                                    color: "currentColor",
                                },
                                e,
                            ),
                            { className: P.invoiceItemLabelIcon },
                        ),
                    ),
            }),
        ],
    });
}
function G(e) {
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
                ? (0, r.jsx)(k, {
                      invoiceItem: a,
                      currency: t.currency,
                      isPrepaidPaymentSource: n,
                  })
                : null,
            0 !== l && null != o && null != s
                ? (0, r.jsx)(v.B1, {
                      label: N.intl.formatToPlainString(N.t.a3cAOg, {
                          numGuildSubscriptions: o.quantity,
                          planName: (0, g.Gf)(s.id, !1, n),
                      }),
                      value: n ? u : d,
                  })
                : null,
            (0, r.jsx)(S.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: N.intl.format(t.taxInclusive ? (n ? N.t.BqdxQt : N.t.XH4raN) : N.t.RUI48E, {}),
                value:
                    t.currency === A.pKx.USD
                        ? (0, E.T4)(t.total, t.currency)
                        : "".concat((0, E.T4)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function Z(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        o = (0, y.j)(t.invoiceItems),
        s = o.find((e) => e.subscriptionPlanId === n.id);
    l()(null != s, "Expected newPlanInvoiceItem");
    let c = o.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount < 0),
        u = o.find(
            (e) =>
                null == e.subscriptionPlanId &&
                null != e.discounts &&
                e.discounts.find((e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION),
        ),
        f = L(s, d.eW.PREMIUM_TRIAL),
        p = j(s, d.eW.SUBSCRIPTION_PLAN),
        _ = s.quantity * p,
        m = s.amount + (null != c ? c.amount : 0) - _ + (null != u ? u.amount : 0),
        h = o
            .filter(
                (e) =>
                    e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD,
            )
            .reduce((e, t) => e + t.amount, 0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: _,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a,
            }),
            0 === m || f
                ? null
                : (0, r.jsx)(v.B1, {
                      label: (0, r.jsx)(U, {
                          label: N.intl.formatToPlainString(N.t.ZSVged, {
                              planName: (0, g.PV)(n.id) ? (0, g.MF)(n.id) : n.name,
                          }),
                          tooltipText: N.intl.string(N.t.JmwQJM),
                      }),
                      value: (0, E.T4)(m, t.currency),
                  }),
            0 !== h
                ? (0, r.jsx)(v.B1, {
                      label: (0, r.jsx)(U, {
                          label: N.intl.string(N.t["+as5ZZ"]),
                          tooltipText: N.intl.format(N.t.UDop9c, {}),
                          tooltipAriaLabel: N.intl.string(N.t.P68ePO),
                      }),
                      value: (0, E.T4)(h, t.currency),
                  })
                : null,
            (0, r.jsx)(S.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: N.intl.format(t.taxInclusive ? (i ? N.t.BqdxQt : N.t.XH4raN) : N.t.RUI48E, {}),
                value:
                    t.currency === A.pKx.USD
                        ? (0, E.T4)(t.total, t.currency)
                        : "".concat((0, E.T4)(t.total, t.currency), "*"),
            }),
        ],
    });
}
function B(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, g.uZ)(e.subscriptionPlanId),
                r = (0, g.uZ)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        t
    );
}
function F(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== I.Xh.NONE_MONTH && t !== I.Xh.NONE_YEAR;
    });
}
function V(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: a, intervalCount: o } = (0, g.dn)(t),
        { intervalType: s, intervalCount: l } = (0, g.dn)(n);
    if (a !== s || o !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)("div", {
        className: P.subscriptionPeriodResetNotice,
        children: N.intl.format(N.t.JWWD4E, { renewalDate: c }),
    });
}
function H(e) {
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
                          (0, r.jsx)(v.Z9, { children: N.intl.string(N.t.tuqjWQ) }),
                          F(B((0, y.j)(n.invoiceItems))).map((e) =>
                              (0, r.jsx)(
                                  k,
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
            (0, r.jsx)(v.Z9, { children: N.intl.string(N.t.qxVrh6) }),
            F(B((0, y.j)(i.invoiceItems))).map((e) => {
                let n =
                    null != s &&
                    !s.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
                return (0, r.jsx)(
                    k,
                    {
                        invoiceItem: e,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip:
                            d &&
                            (e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD ||
                                e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD ||
                                e.subscriptionPlanId === I.Xh.PREMIUM_3_MONTH_GUILD ||
                                e.subscriptionPlanId === I.Xh.PREMIUM_6_MONTH_GUILD),
                        className: o()({ [P.subscriptionAddedInvoiceItem]: !t || n }),
                    },
                    e.id,
                );
            }),
            (0, r.jsx)(S.Z, { invoice: i }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.B1, {
                label: N.intl.string(N.t.AChTLW),
                value: (0, E.og)((0, E.T4)(i.total, i.currency), c, u),
                className: P.subscriptionCostRow,
            }),
        ],
    });
}
function Y(e) {
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
            t = (null == c ? void 0 : c.interval) === I.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return null != l
            ? l
            : N.intl.format(N.t["2FvcjG"], {
                  duration: e,
                  days: t,
                  contactLink: A.EYA.CONTACT,
                  helpdeskArticle: h.Z.getArticleURL(A.BhN.PREMIUM_TRIAL),
              });
    }
    let f = i.taxInclusive ? N.t["hay+gu"] : N.t.da0lki;
    return (0, r.jsx)(r.Fragment, {
        children: N.intl.format(f, {
            rate: (0, E.og)((0, E.T4)(i.subtotal, i.currency), u, d),
            renewalDate:
                null != s
                    ? s
                    : o
                      ? null != n
                          ? n.subscriptionPeriodEnd
                          : i.subscriptionPeriodStart
                      : i.subscriptionPeriodEnd,
            contactLink: A.EYA.CONTACT,
            helpdeskArticle: h.Z.getArticleURL(A.BhN.BILLING),
        }),
    });
}
function W(e) {
    let {
            premiumSubscription: t,
            proratedInvoice: n,
            renewalInvoice: a,
            overrideRenewalDate: o,
            isUpdate: s = !1,
            isTrial: l = !1,
            priceOptions: c,
            isPrepaidPaymentSource: d = !1,
            trialFooterMessageOverride: _,
            hideSubscriptionDetails: h = !1,
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
            d
                ? null
                : (0, r.jsx)(v.P7, {
                      children: (0, r.jsx)(Y, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: s,
                          overrideRenewalDate: o,
                          trialFooterMessageOverride: _,
                      }),
                  }),
            !h &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.P3F, {
                            onClick: () => S((e) => !e),
                            className: P.subscriptionDetailsToggle,
                            children: [
                                O ? N.intl.string(N.t.aBcRbK) : N.intl.string(N.t.X6duqp),
                                (0, r.jsx)(m.Z, {
                                    direction: O ? m.Z.Directions.UP : m.Z.Directions.DOWN,
                                    className: P.subscriptionDetailsToggleCaret,
                                }),
                            ],
                        }),
                        O
                            ? (0, r.jsx)(H, {
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
function K(e) {
    let t,
        { plan: n, className: i, isPrepaidPaymentSource: a = !1, isCustomGift: o = !1, invoicePreview: s } = e,
        { tax: l, taxInclusive: c, currency: d } = s,
        f = s.total,
        p = f - l,
        _ = (0, E.T4)(p, d),
        m = (0, E.T4)(f, d);
    return (
        (t = o
            ? (0, g.L7)(n.interval, !0, void 0, void 0, !0, (0, g.Rd)(n.id))
            : N.intl.formatToPlainString(N.t.LQLxkW, { planName: (0, g.Gf)(n.id, !1, a) })),
        (0, r.jsxs)("div", {
            className: i,
            children: [
                (0, r.jsx)(u.Heading, {
                    variant: "heading-md/semibold",
                    children: N.intl.string(N.t.PEjaCx),
                }),
                l >= 0 && !1 === c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/bold",
                                  className: P.purchaseDetailsHeaderText,
                                  children: t,
                              }),
                              (0, r.jsxs)(v.aO, {
                                  className: i,
                                  children: [
                                      (0, r.jsx)(v.Z9, { children: N.intl.string(N.t.sail9P) }),
                                      (0, r.jsx)(v.B1, {
                                          label: t,
                                          value: _,
                                      }),
                                      (0, r.jsx)(S.Z, { invoice: s }),
                                      (0, r.jsx)(v.UN, {}),
                                      (0, r.jsx)(v.B1, {
                                          label: N.intl.string(N.t.txajQG),
                                          value: m,
                                          className: P.subscriptionCostRow,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Heading, {
                          variant: "text-md/normal",
                          children: "".concat(t, " - ").concat(m),
                      }),
            ],
        })
    );
}
function z(e) {
    let t,
        { invoice: n, plan: i } = e,
        a = (0, y.j)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != a, "newPlanInvoiceItem can not be null"),
        i.interval === I.rV.MONTH
            ? (t = n.taxInclusive ? N.t.v9QeON : N.t.FALkO5)
            : i.interval === I.rV.YEAR
              ? (t = n.taxInclusive ? N.t.ECT4A5 : N.t["0HQxKW"])
              : l()(!1, "Invalid interval type"),
        (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            children: N.intl.format(t, { price: (0, E.T4)(a.subscriptionPlanPrice, n.currency) }),
        })
    );
}
