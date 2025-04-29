n.d(t, {
    As: () => k,
    By: () => j,
    Lu: () => U,
    e9: () => Y,
    hG: () => V,
    nd: () => H,
    yT: () => W
}),
    n(415506),
    n(642613),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(911969),
    f = n(100527),
    _ = n(906732),
    p = n(509545),
    h = n(259580),
    m = n(63063),
    g = n(74538),
    E = n(937615),
    b = n(374649),
    y = n(591548),
    O = n(639119),
    v = n(811334),
    I = n(585602),
    S = n(474936),
    T = n(981631),
    A = n(388032),
    N = n(727750);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = (e, t) => {
        var n;
        return !!(null == (n = e.discounts) ? void 0 : n.some((e) => e.type === t));
    },
    L = (e, t) => {
        var n, r, i;
        return e.subscriptionPlanPrice - (null != (i = null == (r = e.discounts) || null == (n = r.find((e) => e.type === t)) ? void 0 : n.amount) ? i : 0);
    };
function x(e, t, n, r) {
    let i = D(e, d.eW.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case S.Xh.PREMIUM_MONTH_LEGACY:
        case S.Xh.PREMIUM_YEAR_LEGACY:
        case S.Xh.PREMIUM_MONTH_TIER_0:
        case S.Xh.PREMIUM_YEAR_TIER_0:
        case S.Xh.PREMIUM_MONTH_TIER_1:
        case S.Xh.PREMIUM_YEAR_TIER_1:
        case S.Xh.PREMIUM_MONTH_TIER_2:
        case S.Xh.PREMIUM_YEAR_TIER_2:
        case S.Xh.PREMIUM_3_MONTH_TIER_2:
        case S.Xh.PREMIUM_6_MONTH_TIER_2:
            return (0, g.Gf)(e.subscriptionPlanId, i, n, r);
        case S.Xh.PREMIUM_3_MONTH_GUILD:
        case S.Xh.PREMIUM_6_MONTH_GUILD:
            return A.intl.format(A.t.YAIIWl, {
                num: e.quantity,
                intervalCount: t.intervalCount
            });
        case S.Xh.PREMIUM_MONTH_GUILD:
            return A.intl.format(A.t['3BYyio'], { num: e.quantity });
        case S.Xh.PREMIUM_YEAR_GUILD:
            return A.intl.format(A.t.JVW4UF, { num: e.quantity });
    }
    switch (t.interval) {
        case S.rV.MONTH:
            if (1 === t.intervalCount) return A.intl.formatToPlainString(A.t['6oq129'], { planName: t.name });
            return A.intl.formatToPlainString(A.t['9ydggY'], {
                planName: t.name,
                intervalCount: t.intervalCount
            });
        case S.rV.YEAR:
            return A.intl.formatToPlainString(A.t.V6UFQE, { planName: t.name });
    }
    throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
}
function M(e) {
    var t;
    let { invoiceItem: n, overrideAmount: i, showGuildSubscriptionAdjustmentTooltip: o, currency: a, className: s, isPrepaidPaymentSource: d, referralTrialOfferId: f, inTrialPeriod: _ } = e,
        h = (0, c.e7)([p.Z], () => p.Z.get(n.subscriptionPlanId)),
        m = null == (t = (0, O.N)(f)) ? void 0 : t.subscription_trial;
    l()(null != h, 'Missing subscriptionPlan');
    let b = x(
        n,
        h,
        d,
        (0, g.if)({
            intervalType: null == m ? void 0 : m.interval,
            intervalCount: null == m ? void 0 : m.interval_count
        })
    );
    !0 === o &&
        (b = (0, r.jsxs)('div', {
            className: N.invoiceItemLabelWithIcon,
            children: [
                (0, r.jsxs)('div', {
                    children: [b, ' ']
                }),
                (0, r.jsx)(u.ua7, {
                    text: A.intl.format(A.t.UDop9f, {}),
                    'aria-label': A.intl.string(A.t.P68ePD),
                    tooltipClassName: N.invoiceItemTooltip,
                    children: (e) =>
                        (0, r.jsx)(
                            u.idN,
                            w(
                                R(
                                    {
                                        size: 'md',
                                        color: 'currentColor'
                                    },
                                    e
                                ),
                                { className: N.invoiceItemLabelIcon }
                            )
                        )
                })
            ]
        }));
    let y = (0, E.T4)(null != i ? i : n.amount, a),
        I = d ? y : (0, E.og)(y, h.interval, h.intervalCount);
    return (0, r.jsx)(v.i$, {
        label: b,
        value: I,
        originalAmount: n.subscriptionPlanPrice * n.quantity,
        discounts: n.discounts,
        interval: h.interval,
        intervalCount: h.intervalCount,
        currency: a,
        className: s,
        inTrialPeriod: _
    });
}
function k(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: i } = e;
    return (0, r.jsxs)('div', {
        className: N.invoiceItemLabelWithIcon,
        children: [
            t,
            (0, r.jsx)(u.ua7, {
                clickableOnMobile: !0,
                text: n,
                'aria-label': i,
                tooltipClassName: N.invoiceItemTooltip,
                children: (e) =>
                    (0, r.jsx)(
                        u.idN,
                        w(
                            R(
                                {
                                    size: 'md',
                                    color: 'currentColor'
                                },
                                e
                            ),
                            { className: N.invoiceItemLabelIcon }
                        )
                    )
            })
        ]
    });
}
function j(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        i = (0, y.j)(t.invoiceItems),
        o = i.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        a = i.find((e) => (0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        s = (0, c.e7)([p.Z], () => (null != a ? p.Z.get(a.subscriptionPlanId) : null)),
        l = null != a ? a.amount : 0,
        u = (0, E.T4)(l, t.currency),
        d = null != s ? (0, E.og)(u, s.interval, s.intervalCount) : 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o
                ? (0, r.jsx)(M, {
                      invoiceItem: o,
                      currency: t.currency,
                      isPrepaidPaymentSource: n
                  })
                : null,
            0 !== l && null != a && null != s
                ? (0, r.jsx)(v.B1, {
                      label: A.intl.formatToPlainString(A.t.a3cAOj, {
                          numGuildSubscriptions: a.quantity,
                          planName: (0, g.Gf)(s.id, !1, n)
                      }),
                      value: n ? u : d
                  })
                : null,
            (0, r.jsx)(I.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: A.intl.format(t.taxInclusive ? (n ? A.t.BqdxQk : A.t.XH4raG) : A.t.RUI48P, {}),
                value: t.currency === T.pKx.USD ? (0, E.T4)(t.total, t.currency) : ''.concat((0, E.T4)(t.total, t.currency), '*')
            })
        ]
    });
}
function U(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: i, referralTrialOfferId: o } = e,
        a = (0, y.j)(t.invoiceItems),
        s = a.find((e) => e.subscriptionPlanId === n.id);
    l()(null != s, 'Expected newPlanInvoiceItem');
    let c = a.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount < 0),
        u = a.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        f = D(s, d.eW.PREMIUM_TRIAL),
        _ = L(s, d.eW.SUBSCRIPTION_PLAN),
        p = s.quantity * _,
        h = s.amount + (null != c ? c.amount : 0) - p + (null != u ? u.amount : 0),
        m = a.filter((e) => e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD).reduce((e, t) => e + t.amount, 0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M, {
                invoiceItem: s,
                currency: t.currency,
                overrideAmount: p,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: o
            }),
            0 === h || f
                ? null
                : (0, r.jsx)(v.B1, {
                      label: (0, r.jsx)(k, {
                          label: A.intl.formatToPlainString(A.t.ZSVgeX, { planName: (0, g.PV)(n.id) ? (0, g.aq)(n.id) : n.name }),
                          tooltipText: A.intl.string(A.t.JmwQJC)
                      }),
                      value: (0, E.T4)(h, t.currency)
                  }),
            0 !== m
                ? (0, r.jsx)(v.B1, {
                      label: (0, r.jsx)(k, {
                          label: A.intl.string(A.t['+as5ZW']),
                          tooltipText: A.intl.format(A.t.UDop9f, {}),
                          tooltipAriaLabel: A.intl.string(A.t.P68ePD)
                      }),
                      value: (0, E.T4)(m, t.currency)
                  })
                : null,
            (0, r.jsx)(I.Z, { invoice: t }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.az, {
                label: A.intl.format(t.taxInclusive ? (i ? A.t.BqdxQk : A.t.XH4raG) : A.t.RUI48P, {}),
                value: t.currency === T.pKx.USD ? (0, E.T4)(t.total, t.currency) : ''.concat((0, E.T4)(t.total, t.currency), '*')
            })
        ]
    });
}
function G(e) {
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
function B(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== S.Xh.NONE_MONTH && t !== S.Xh.NONE_YEAR;
    });
}
function V(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: o, intervalCount: a } = (0, g.dn)(t),
        { intervalType: s, intervalCount: l } = (0, g.dn)(n);
    if (o !== s || a !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != i ? i : t.subscriptionPeriodEnd;
    return (0, r.jsx)('div', {
        className: N.subscriptionPeriodResetNotice,
        children: A.intl.format(A.t.JWWD4O, { renewalDate: c })
    });
}
function F(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: i, inTrialPeriod: o } = e,
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
                          (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.tuqjWV) }),
                          B(G((0, y.j)(n.invoiceItems))).map((e) =>
                              (0, r.jsx)(
                                  M,
                                  {
                                      invoiceItem: e,
                                      currency: n.currency,
                                      inTrialPeriod: o
                                  },
                                  e.id
                              )
                          ),
                          (0, r.jsx)(v.UN, { extended: !0 })
                      ]
                  })
                : null,
            (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.qxVrh4) }),
            B(G((0, y.j)(i.invoiceItems))).map((e) => {
                let n = null != s && !s.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
                return (0, r.jsx)(
                    M,
                    {
                        invoiceItem: e,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_6_MONTH_GUILD),
                        className: a()({ [N.subscriptionAddedInvoiceItem]: !t || n })
                    },
                    e.id
                );
            }),
            (0, r.jsx)(I.Z, { invoice: i }),
            (0, r.jsx)(v.UN, {}),
            (0, r.jsx)(v.B1, {
                label: A.intl.string(A.t.AChTLS),
                value: (0, E.og)((0, E.T4)(i.total, i.currency), c, u),
                className: N.subscriptionCostRow
            })
        ]
    });
}
function Z(e) {
    var t;
    let { proratedInvoice: n, renewalInvoice: i, isTrial: o, isUpdate: a, overrideRenewalDate: s, trialFooterMessageOverride: l } = e,
        c = null == (t = (0, O.N)()) ? void 0 : t.subscription_trial,
        { intervalType: u, intervalCount: d } = (0, g.dn)(i);
    if (null == n) return null;
    if (o) {
        let e = (0, g.if)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count
            }),
            t = (null == c ? void 0 : c.interval) === S.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return null != l
            ? l
            : A.intl.format(A.t['2FvcjI'], {
                  duration: e,
                  days: t,
                  contactLink: T.EYA.CONTACT,
                  helpdeskArticle: m.Z.getArticleURL(T.BhN.PREMIUM_TRIAL)
              });
    }
    let f = i.taxInclusive ? A.t['hay+go'] : A.t.da0lkp;
    return (0, r.jsx)(r.Fragment, {
        children: A.intl.format(f, {
            rate: (0, E.og)((0, E.T4)(i.subtotal, i.currency), u, d),
            renewalDate: null != s ? s : a ? (null != n ? n.subscriptionPeriodEnd : i.subscriptionPeriodStart) : i.subscriptionPeriodEnd,
            contactLink: T.EYA.CONTACT,
            helpdeskArticle: m.Z.getArticleURL(T.BhN.BILLING)
        })
    });
}
function H(e) {
    let { premiumSubscription: t, proratedInvoice: n, renewalInvoice: o, overrideRenewalDate: a, isUpdate: s = !1, isTrial: l = !1, priceOptions: c, isPrepaidPaymentSource: d = !1, trialFooterMessageOverride: p, hideSubscriptionDetails: m = !1 } = e,
        { analyticsLocations: g } = (0, _.ZP)(),
        E = R(
            {
                subscriptionId: null == t ? void 0 : t.id,
                renewal: !0,
                preventFetch: !s,
                analyticsLocatinons: g,
                analyticsLocation: f.Z.SUBSCRIPTION_INVOICE_FOOTER
            },
            c
        ),
        [y] = (0, b.ED)(E),
        [O, I] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d
                ? null
                : (0, r.jsx)(v.P7, {
                      children: (0, r.jsx)(Z, {
                          proratedInvoice: n,
                          renewalInvoice: o,
                          isTrial: l,
                          isUpdate: s,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: p
                      })
                  }),
            !m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.P3F, {
                            onClick: () => I((e) => !e),
                            className: N.subscriptionDetailsToggle,
                            children: [
                                O ? A.intl.string(A.t.aBcRbG) : A.intl.string(A.t.X6duqq),
                                (0, r.jsx)(h.Z, {
                                    direction: O ? h.Z.Directions.UP : h.Z.Directions.DOWN,
                                    className: N.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        O
                            ? (0, r.jsx)(F, {
                                  isUpdate: s,
                                  currentInvoice: y,
                                  newInvoice: o,
                                  inTrialPeriod: l
                              })
                            : null
                    ]
                })
        ]
    });
}
function Y(e) {
    let t,
        { plan: n, className: i, isPrepaidPaymentSource: o = !1, isCustomGift: a = !1, invoicePreview: s } = e,
        { tax: l, taxInclusive: c, currency: d } = s,
        f = s.total,
        _ = f - l,
        p = (0, E.T4)(_, d),
        h = (0, E.T4)(f, d);
    return (
        (t = a ? (0, g.L7)(n.interval, !0, void 0, void 0, !0, (0, g.Rd)(n.id)) : A.intl.formatToPlainString(A.t.LQLxkZ, { planName: (0, g.Gf)(n.id, !1, o) })),
        (0, r.jsxs)('div', {
            className: i,
            children: [
                (0, r.jsx)(u.vwX, { children: A.intl.string(A.t.PEjaCw) }),
                l >= 0 && !1 === c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-md/bold',
                                  className: N.purchaseDetailsHeaderText,
                                  children: t
                              }),
                              (0, r.jsxs)(v.aO, {
                                  className: i,
                                  children: [
                                      (0, r.jsx)(v.Z9, { children: A.intl.string(A.t.sail9P) }),
                                      (0, r.jsx)(v.B1, {
                                          label: t,
                                          value: p
                                      }),
                                      (0, r.jsx)(I.Z, { invoice: s }),
                                      (0, r.jsx)(v.UN, {}),
                                      (0, r.jsx)(v.B1, {
                                          label: A.intl.string(A.t.txajQE),
                                          value: h,
                                          className: N.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, r.jsx)(u.X6q, {
                          variant: 'text-md/normal',
                          children: ''.concat(t, ' - ').concat(h)
                      })
            ]
        })
    );
}
function W(e) {
    let t,
        { invoice: n, plan: i } = e,
        o = (0, y.j)(n.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        l()(null != o, 'newPlanInvoiceItem can not be null'),
        i.interval === S.rV.MONTH ? (t = n.taxInclusive ? A.t.v9QeOD : A.t.FALkOz) : i.interval === S.rV.YEAR ? (t = n.taxInclusive ? A.t.ECT4Aw : A.t['0HQxKS']) : l()(!1, 'Invalid interval type'),
        (0, r.jsx)(u.Text, {
            variant: 'text-md/normal',
            children: A.intl.format(t, { price: (0, E.T4)(o.subscriptionPlanPrice, n.currency) })
        })
    );
}
