r.d(n, {
    As: function () {
        return k;
    },
    By: function () {
        return U;
    },
    Lu: function () {
        return B;
    },
    e9: function () {
        return Y;
    },
    hG: function () {
        return F;
    },
    nd: function () {
        return H;
    },
    yT: function () {
        return W;
    }
});
var i = r(411104);
var a = r(724458);
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    p = r(442837),
    h = r(481060),
    _ = r(911969),
    m = r(100527),
    g = r(906732),
    E = r(509545),
    v = r(259580),
    y = r(63063),
    b = r(74538),
    I = r(937615),
    T = r(374649),
    S = r(591548),
    A = r(639119),
    C = r(653798),
    N = r(585602),
    R = r(474936),
    O = r(981631),
    D = r(388032),
    L = r(193727);
let x = (e, n) => {
        var r;
        return !!(null === (r = e.discounts) || void 0 === r ? void 0 : r.some((e) => e.type === n));
    },
    w = (e, n) => {
        var r, i, a;
        return e.subscriptionPlanPrice - (null !== (a = null === (i = e.discounts) || void 0 === i ? void 0 : null === (r = i.find((e) => e.type === n)) || void 0 === r ? void 0 : r.amount) && void 0 !== a ? a : 0);
    };
function P(e, n, r, i) {
    let a = x(e, _.eW.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case R.Xh.PREMIUM_MONTH_LEGACY:
        case R.Xh.PREMIUM_YEAR_LEGACY:
        case R.Xh.PREMIUM_MONTH_TIER_0:
        case R.Xh.PREMIUM_YEAR_TIER_0:
        case R.Xh.PREMIUM_MONTH_TIER_1:
        case R.Xh.PREMIUM_YEAR_TIER_1:
        case R.Xh.PREMIUM_MONTH_TIER_2:
        case R.Xh.PREMIUM_YEAR_TIER_2:
        case R.Xh.PREMIUM_3_MONTH_TIER_2:
        case R.Xh.PREMIUM_6_MONTH_TIER_2:
            return (0, b.Gf)(e.subscriptionPlanId, a, r, i);
        case R.Xh.PREMIUM_3_MONTH_GUILD:
        case R.Xh.PREMIUM_6_MONTH_GUILD:
            return D.intl.format(D.t.YAIIWl, {
                num: e.quantity,
                intervalCount: n.intervalCount
            });
        case R.Xh.PREMIUM_MONTH_GUILD:
            return D.intl.format(D.t['3BYyio'], { num: e.quantity });
        case R.Xh.PREMIUM_YEAR_GUILD:
            return D.intl.format(D.t.JVW4UF, { num: e.quantity });
    }
    switch (n.interval) {
        case R.rV.MONTH:
            if (1 === n.intervalCount) return D.intl.formatToPlainString(D.t['6oq129'], { planName: n.name });
            return D.intl.formatToPlainString(D.t['9ydggY'], {
                planName: n.name,
                intervalCount: n.intervalCount
            });
        case R.rV.YEAR:
            return D.intl.formatToPlainString(D.t.V6UFQE, { planName: n.name });
    }
    throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
}
function M(e) {
    var n;
    let { invoiceItem: r, overrideAmount: i, showGuildSubscriptionAdjustmentTooltip: a, currency: o, className: l, isPrepaidPaymentSource: u, referralTrialOfferId: c, inTrialPeriod: d } = e,
        _ = (0, p.e7)([E.Z], () => E.Z.get(r.subscriptionPlanId)),
        m = null === (n = (0, A.N)(c)) || void 0 === n ? void 0 : n.subscription_trial;
    f()(null != _, 'Missing subscriptionPlan');
    let g = P(
        r,
        _,
        u,
        (0, b.if)({
            intervalType: null == m ? void 0 : m.interval,
            intervalCount: null == m ? void 0 : m.interval_count
        })
    );
    !0 === a &&
        (g = (0, s.jsxs)('div', {
            className: L.invoiceItemLabelWithIcon,
            children: [
                (0, s.jsxs)('div', {
                    children: [g, ' ']
                }),
                (0, s.jsx)(h.Tooltip, {
                    text: D.intl.format(D.t.UDop9f, {}),
                    'aria-label': D.intl.string(D.t.P68ePD),
                    tooltipClassName: L.invoiceItemTooltip,
                    children: (e) =>
                        (0, s.jsx)(h.CircleQuestionIcon, {
                            size: 'md',
                            color: 'currentColor',
                            ...e,
                            className: L.invoiceItemLabelIcon
                        })
                })
            ]
        }));
    let v = (0, I.T4)(null != i ? i : r.amount, o),
        y = u ? v : (0, I.og)(v, _.interval, _.intervalCount);
    return (0, s.jsx)(C.i$, {
        label: g,
        value: y,
        originalAmount: r.subscriptionPlanPrice * r.quantity,
        discounts: r.discounts,
        interval: _.interval,
        intervalCount: _.intervalCount,
        currency: o,
        className: l,
        inTrialPeriod: d
    });
}
function k(e) {
    let { label: n, tooltipText: r, tooltipAriaLabel: i } = e;
    return (0, s.jsxs)('div', {
        className: L.invoiceItemLabelWithIcon,
        children: [
            n,
            (0, s.jsx)(h.Tooltip, {
                clickableOnMobile: !0,
                text: r,
                'aria-label': i,
                tooltipClassName: L.invoiceItemTooltip,
                children: (e) =>
                    (0, s.jsx)(h.CircleQuestionIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: L.invoiceItemLabelIcon
                    })
            })
        ]
    });
}
function U(e) {
    let { invoice: n, isPrepaidPaymentSource: r } = e,
        i = (0, S.j)(n.invoiceItems),
        a = i.find((e) => !(0, b.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        o = i.find((e) => (0, b.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        l = (0, p.e7)([E.Z], () => (null != o ? E.Z.get(o.subscriptionPlanId) : null)),
        u = null != o ? o.amount : 0,
        c = (0, I.T4)(u, n.currency),
        d = null != l ? (0, I.og)(c, l.interval, l.intervalCount) : 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a
                ? (0, s.jsx)(M, {
                      invoiceItem: a,
                      currency: n.currency,
                      isPrepaidPaymentSource: r
                  })
                : null,
            0 !== u && null != o && null != l
                ? (0, s.jsx)(C.R$, {
                      label: D.intl.formatToPlainString(D.t.a3cAOj, {
                          numGuildSubscriptions: o.quantity,
                          planName: (0, b.Gf)(l.id, !1, r)
                      }),
                      value: r ? c : d
                  })
                : null,
            (0, s.jsx)(N.Z, { invoice: n }),
            (0, s.jsx)(C.KU, {}),
            (0, s.jsx)(C.Ji, {
                label: D.intl.format(n.taxInclusive ? (r ? D.t.BqdxQk : D.t.XH4raG) : D.t.RUI48P, {}),
                value: n.currency === O.pKx.USD ? (0, I.T4)(n.total, n.currency) : ''.concat((0, I.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function B(e) {
    let { invoice: n, newPlan: r, isPrepaidPaymentSource: i, referralTrialOfferId: a } = e,
        o = (0, S.j)(n.invoiceItems),
        l = o.find((e) => e.subscriptionPlanId === r.id);
    f()(null != l, 'Expected newPlanInvoiceItem');
    let u = o.find((e) => !(0, b.Z8)(e.subscriptionPlanId) && e.amount < 0),
        c = o.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === _.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        d = x(l, _.eW.PREMIUM_TRIAL),
        p = w(l, _.eW.SUBSCRIPTION_PLAN),
        h = l.quantity * p,
        m = l.amount + (null != u ? u.amount : 0) - h + (null != c ? c.amount : 0),
        g = o.filter((e) => e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(M, {
                invoiceItem: l,
                currency: n.currency,
                overrideAmount: h,
                isPrepaidPaymentSource: i,
                referralTrialOfferId: a
            }),
            0 === m || d
                ? null
                : (0, s.jsx)(C.R$, {
                      label: (0, s.jsx)(k, {
                          label: D.intl.formatToPlainString(D.t.ZSVgeX, { planName: (0, b.PV)(r.id) ? (0, b.aq)(r.id) : r.name }),
                          tooltipText: D.intl.string(D.t.JmwQJC)
                      }),
                      value: (0, I.T4)(m, n.currency)
                  }),
            0 !== g
                ? (0, s.jsx)(C.R$, {
                      label: (0, s.jsx)(k, {
                          label: D.intl.string(D.t['+as5ZW']),
                          tooltipText: D.intl.format(D.t.UDop9f, {}),
                          tooltipAriaLabel: D.intl.string(D.t.P68ePD)
                      }),
                      value: (0, I.T4)(g, n.currency)
                  })
                : null,
            (0, s.jsx)(N.Z, { invoice: n }),
            (0, s.jsx)(C.KU, {}),
            (0, s.jsx)(C.Ji, {
                label: D.intl.format(n.taxInclusive ? (i ? D.t.BqdxQk : D.t.XH4raG) : D.t.RUI48P, {}),
                value: n.currency === O.pKx.USD ? (0, I.T4)(n.total, n.currency) : ''.concat((0, I.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function G(e) {
    let n = e.slice();
    return (
        n.sort((e, n) => {
            let r = (0, b.uZ)(e.subscriptionPlanId),
                i = (0, b.uZ)(n.subscriptionPlanId);
            return r && !i ? -1 : !r && i ? 1 : 0;
        }),
        n
    );
}
function Z(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: n } = e;
        return n !== R.Xh.NONE_MONTH && n !== R.Xh.NONE_YEAR;
    });
}
function F(e) {
    let { proratedInvoice: n, renewalInvoice: r } = e,
        { intervalType: i, intervalCount: a } = (0, b.dn)(n),
        { intervalType: o, intervalCount: l } = (0, b.dn)(r);
    return i !== o || a !== l || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime()
        ? null
        : (0, s.jsx)('div', {
              className: L.subscriptionPeriodResetNotice,
              children: D.intl.format(D.t.JWWD4O, { renewalDate: n.subscriptionPeriodEnd })
          });
}
function V(e) {
    let { isUpdate: n, currentInvoice: r, newInvoice: i, inTrialPeriod: a } = e,
        o = null != r ? (0, S.j)(r.invoiceItems) : null,
        l = null != r ? (0, b.dn)(r) : null,
        { intervalType: u, intervalCount: d } = (0, b.dn)(i),
        f = null != l && (l.intervalType !== u || l.intervalCount !== d);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(C.KU, { extended: !0 }),
            null != r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(C.q9, { children: D.intl.string(D.t.tuqjWV) }),
                          Z(G((0, S.j)(r.invoiceItems))).map((e) =>
                              (0, s.jsx)(
                                  M,
                                  {
                                      invoiceItem: e,
                                      currency: r.currency,
                                      inTrialPeriod: a
                                  },
                                  e.id
                              )
                          ),
                          (0, s.jsx)(C.KU, { extended: !0 })
                      ]
                  })
                : null,
            (0, s.jsx)(C.q9, { children: D.intl.string(D.t.qxVrh4) }),
            Z(G((0, S.j)(i.invoiceItems))).map((e) => {
                let r = null != o && !o.some((n) => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                return (0, s.jsx)(
                    M,
                    {
                        invoiceItem: e,
                        currency: i.currency,
                        showGuildSubscriptionAdjustmentTooltip: f && (e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_6_MONTH_GUILD),
                        className: c()({ [L.subscriptionAddedInvoiceItem]: !n || r })
                    },
                    e.id
                );
            }),
            (0, s.jsx)(N.Z, { invoice: i }),
            (0, s.jsx)(C.KU, {}),
            (0, s.jsx)(C.R$, {
                label: D.intl.string(D.t.AChTLS),
                value: (0, I.og)((0, I.T4)(i.total, i.currency), u, d),
                className: L.subscriptionCostRow
            })
        ]
    });
}
function j(e) {
    var n;
    let { proratedInvoice: r, renewalInvoice: i, isTrial: a, isUpdate: o, overrideRenewalDate: l, trialFooterMessageOverride: u } = e,
        c = null === (n = (0, A.N)()) || void 0 === n ? void 0 : n.subscription_trial,
        { intervalType: d, intervalCount: f } = (0, b.dn)(i);
    if (null == r) return null;
    if (a) {
        let e = (0, b.if)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count
            }),
            n = (null == c ? void 0 : c.interval) === R.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return (0, s.jsx)(s.Fragment, {
            children:
                null != u
                    ? u
                    : D.intl.format(D.t['2FvcjI'], {
                          duration: e,
                          days: n,
                          contactLink: O.EYA.CONTACT,
                          helpdeskArticle: y.Z.getArticleURL(O.BhN.PREMIUM_TRIAL)
                      })
        });
    }
    let p = i.taxInclusive ? D.t['hay+go'] : D.t.da0lkp;
    return (0, s.jsx)(s.Fragment, {
        children: D.intl.format(p, {
            rate: (0, I.og)((0, I.T4)(i.subtotal, i.currency), d, f),
            renewalDate: null != l ? l : o ? (null != r ? r.subscriptionPeriodEnd : i.subscriptionPeriodStart) : i.subscriptionPeriodEnd,
            contactLink: O.EYA.CONTACT,
            helpdeskArticle: y.Z.getArticleURL(O.BhN.BILLING)
        })
    });
}
function H(e) {
    let { premiumSubscription: n, proratedInvoice: r, renewalInvoice: i, overrideRenewalDate: a, isUpdate: o = !1, isTrial: u = !1, priceOptions: c, isPrepaidPaymentSource: d = !1, trialFooterMessageOverride: f, hideSubscriptionDetails: p = !1 } = e,
        { analyticsLocations: _ } = (0, g.ZP)(),
        E = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: _,
            analyticsLocation: m.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...c
        },
        [y] = (0, T.ED)(E),
        [b, I] = l.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            d
                ? null
                : (0, s.jsx)(C.HE, {
                      children: (0, s.jsx)(j, {
                          proratedInvoice: r,
                          renewalInvoice: i,
                          isTrial: u,
                          isUpdate: o,
                          overrideRenewalDate: a,
                          trialFooterMessageOverride: f
                      })
                  }),
            !p &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(h.Clickable, {
                            onClick: () => I((e) => !e),
                            className: L.subscriptionDetailsToggle,
                            children: [
                                b ? D.intl.string(D.t.aBcRbG) : D.intl.string(D.t.X6duqq),
                                (0, s.jsx)(v.Z, {
                                    direction: b ? v.Z.Directions.UP : v.Z.Directions.DOWN,
                                    className: L.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        b
                            ? (0, s.jsx)(V, {
                                  isUpdate: o,
                                  currentInvoice: y,
                                  newInvoice: i,
                                  inTrialPeriod: u
                              })
                            : null
                    ]
                })
        ]
    });
}
function Y(e) {
    let n,
        { plan: r, className: i, isPrepaidPaymentSource: a = !1, isCustomGift: o = !1, invoicePreview: l } = e,
        { tax: u, taxInclusive: c, currency: d } = l,
        f = l.total,
        p = f - u,
        _ = (0, I.T4)(p, d),
        m = (0, I.T4)(f, d);
    return (
        (n = o ? (0, b.L7)(r.interval, !0, void 0, void 0, !0, (0, b.Rd)(r.id)) : D.intl.formatToPlainString(D.t.LQLxkZ, { planName: (0, b.Gf)(r.id, !1, a) })),
        (0, s.jsxs)('div', {
            className: i,
            children: [
                (0, s.jsx)(h.FormTitle, { children: D.intl.string(D.t.PEjaCw) }),
                u >= 0 && !1 === c
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(h.Text, {
                                  variant: 'text-md/bold',
                                  className: L.purchaseDetailsHeaderText,
                                  children: n
                              }),
                              (0, s.jsxs)(C.PO, {
                                  className: i,
                                  children: [
                                      (0, s.jsx)(C.q9, { children: D.intl.string(D.t.sail9P) }),
                                      (0, s.jsx)(C.R$, {
                                          label: n,
                                          value: _
                                      }),
                                      (0, s.jsx)(N.Z, { invoice: l }),
                                      (0, s.jsx)(C.KU, {}),
                                      (0, s.jsx)(C.R$, {
                                          label: D.intl.string(D.t.txajQE),
                                          value: m,
                                          className: L.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, s.jsx)(h.Heading, {
                          variant: 'text-md/normal',
                          children: ''.concat(n, ' - ').concat(m)
                      })
            ]
        })
    );
}
function W(e) {
    let n,
        { invoice: r, plan: i } = e,
        a = (0, S.j)(r.invoiceItems).find((e) => e.subscriptionPlanId === i.id);
    return (
        f()(null != a, 'newPlanInvoiceItem can not be null'),
        i.interval === R.rV.MONTH ? (n = r.taxInclusive ? D.t.v9QeOD : D.t.FALkOz) : i.interval === R.rV.YEAR ? (n = r.taxInclusive ? D.t.ECT4Aw : D.t['0HQxKS']) : f()(!1, 'Invalid interval type'),
        (0, s.jsx)(h.Text, {
            variant: 'text-md/normal',
            children: D.intl.format(n, { price: (0, I.T4)(a.subscriptionPlanPrice, r.currency) })
        })
    );
}
