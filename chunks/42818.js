n.d(t, {
    As: () => x,
    By: () => P,
    Lu: () => w,
    e9: () => F,
    hG: () => U,
    nd: () => Z,
    yT: () => V
}),
    n(411104),
    n(724458),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(911969),
    f = n(100527),
    _ = n(906732),
    p = n(509545),
    h = n(259580),
    m = n(63063),
    g = n(74538),
    E = n(937615),
    v = n(374649),
    y = n(591548),
    I = n(639119),
    T = n(653798),
    b = n(585602),
    S = n(474936),
    A = n(981631),
    N = n(388032),
    C = n(422880);
let R = (e, t) => {
        var n;
        return !!(null === (n = e.discounts) || void 0 === n ? void 0 : n.some((e) => e.type === t));
    },
    O = (e, t) => {
        var n, i, r;
        return e.subscriptionPlanPrice - (null !== (r = null === (i = e.discounts) || void 0 === i ? void 0 : null === (n = i.find((e) => e.type === t)) || void 0 === n ? void 0 : n.amount) && void 0 !== r ? r : 0);
    };
function D(e, t, n, i) {
    let r = R(e, d.eW.PREMIUM_TRIAL);
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
            return (0, g.Gf)(e.subscriptionPlanId, r, n, i);
        case S.Xh.PREMIUM_3_MONTH_GUILD:
        case S.Xh.PREMIUM_6_MONTH_GUILD:
            return N.intl.format(N.t.YAIIWl, {
                num: e.quantity,
                intervalCount: t.intervalCount
            });
        case S.Xh.PREMIUM_MONTH_GUILD:
            return N.intl.format(N.t['3BYyio'], { num: e.quantity });
        case S.Xh.PREMIUM_YEAR_GUILD:
            return N.intl.format(N.t.JVW4UF, { num: e.quantity });
    }
    switch (t.interval) {
        case S.rV.MONTH:
            if (1 === t.intervalCount) return N.intl.formatToPlainString(N.t['6oq129'], { planName: t.name });
            return N.intl.formatToPlainString(N.t['9ydggY'], {
                planName: t.name,
                intervalCount: t.intervalCount
            });
        case S.rV.YEAR:
            return N.intl.formatToPlainString(N.t.V6UFQE, { planName: t.name });
    }
    throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
}
function L(e) {
    var t;
    let { invoiceItem: n, overrideAmount: r, showGuildSubscriptionAdjustmentTooltip: a, currency: s, className: o, isPrepaidPaymentSource: d, referralTrialOfferId: f, inTrialPeriod: _ } = e,
        h = (0, u.e7)([p.Z], () => p.Z.get(n.subscriptionPlanId)),
        m = null === (t = (0, I.N)(f)) || void 0 === t ? void 0 : t.subscription_trial;
    l()(null != h, 'Missing subscriptionPlan');
    let v = D(
        n,
        h,
        d,
        (0, g.if)({
            intervalType: null == m ? void 0 : m.interval,
            intervalCount: null == m ? void 0 : m.interval_count
        })
    );
    !0 === a &&
        (v = (0, i.jsxs)('div', {
            className: C.invoiceItemLabelWithIcon,
            children: [
                (0, i.jsxs)('div', {
                    children: [v, ' ']
                }),
                (0, i.jsx)(c.ua7, {
                    text: N.intl.format(N.t.UDop9f, {}),
                    'aria-label': N.intl.string(N.t.P68ePD),
                    tooltipClassName: C.invoiceItemTooltip,
                    children: (e) =>
                        (0, i.jsx)(c.idN, {
                            size: 'md',
                            color: 'currentColor',
                            ...e,
                            className: C.invoiceItemLabelIcon
                        })
                })
            ]
        }));
    let y = (0, E.T4)(null != r ? r : n.amount, s),
        b = d ? y : (0, E.og)(y, h.interval, h.intervalCount);
    return (0, i.jsx)(T.i$, {
        label: v,
        value: b,
        originalAmount: n.subscriptionPlanPrice * n.quantity,
        discounts: n.discounts,
        interval: h.interval,
        intervalCount: h.intervalCount,
        currency: s,
        className: o,
        inTrialPeriod: _
    });
}
function x(e) {
    let { label: t, tooltipText: n, tooltipAriaLabel: r } = e;
    return (0, i.jsxs)('div', {
        className: C.invoiceItemLabelWithIcon,
        children: [
            t,
            (0, i.jsx)(c.ua7, {
                clickableOnMobile: !0,
                text: n,
                'aria-label': r,
                tooltipClassName: C.invoiceItemTooltip,
                children: (e) =>
                    (0, i.jsx)(c.idN, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: C.invoiceItemLabelIcon
                    })
            })
        ]
    });
}
function P(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        r = (0, y.j)(t.invoiceItems),
        a = r.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        s = r.find((e) => (0, g.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        o = (0, u.e7)([p.Z], () => (null != s ? p.Z.get(s.subscriptionPlanId) : null)),
        l = null != s ? s.amount : 0,
        c = (0, E.T4)(l, t.currency),
        d = null != o ? (0, E.og)(c, o.interval, o.intervalCount) : 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a
                ? (0, i.jsx)(L, {
                      invoiceItem: a,
                      currency: t.currency,
                      isPrepaidPaymentSource: n
                  })
                : null,
            0 !== l && null != s && null != o
                ? (0, i.jsx)(T.R$, {
                      label: N.intl.formatToPlainString(N.t.a3cAOj, {
                          numGuildSubscriptions: s.quantity,
                          planName: (0, g.Gf)(o.id, !1, n)
                      }),
                      value: n ? c : d
                  })
                : null,
            (0, i.jsx)(b.Z, { invoice: t }),
            (0, i.jsx)(T.KU, {}),
            (0, i.jsx)(T.Ji, {
                label: N.intl.format(t.taxInclusive ? (n ? N.t.BqdxQk : N.t.XH4raG) : N.t.RUI48P, {}),
                value: t.currency === A.pKx.USD ? (0, E.T4)(t.total, t.currency) : ''.concat((0, E.T4)(t.total, t.currency), '*')
            })
        ]
    });
}
function w(e) {
    let { invoice: t, newPlan: n, isPrepaidPaymentSource: r, referralTrialOfferId: a } = e,
        s = (0, y.j)(t.invoiceItems),
        o = s.find((e) => e.subscriptionPlanId === n.id);
    l()(null != o, 'Expected newPlanInvoiceItem');
    let u = s.find((e) => !(0, g.Z8)(e.subscriptionPlanId) && e.amount < 0),
        c = s.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        f = R(o, d.eW.PREMIUM_TRIAL),
        _ = O(o, d.eW.SUBSCRIPTION_PLAN),
        p = o.quantity * _,
        h = o.amount + (null != u ? u.amount : 0) - p + (null != c ? c.amount : 0),
        m = s.filter((e) => e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD).reduce((e, t) => e + t.amount, 0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L, {
                invoiceItem: o,
                currency: t.currency,
                overrideAmount: p,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: a
            }),
            0 === h || f
                ? null
                : (0, i.jsx)(T.R$, {
                      label: (0, i.jsx)(x, {
                          label: N.intl.formatToPlainString(N.t.ZSVgeX, { planName: (0, g.PV)(n.id) ? (0, g.aq)(n.id) : n.name }),
                          tooltipText: N.intl.string(N.t.JmwQJC)
                      }),
                      value: (0, E.T4)(h, t.currency)
                  }),
            0 !== m
                ? (0, i.jsx)(T.R$, {
                      label: (0, i.jsx)(x, {
                          label: N.intl.string(N.t['+as5ZW']),
                          tooltipText: N.intl.format(N.t.UDop9f, {}),
                          tooltipAriaLabel: N.intl.string(N.t.P68ePD)
                      }),
                      value: (0, E.T4)(m, t.currency)
                  })
                : null,
            (0, i.jsx)(b.Z, { invoice: t }),
            (0, i.jsx)(T.KU, {}),
            (0, i.jsx)(T.Ji, {
                label: N.intl.format(t.taxInclusive ? (r ? N.t.BqdxQk : N.t.XH4raG) : N.t.RUI48P, {}),
                value: t.currency === A.pKx.USD ? (0, E.T4)(t.total, t.currency) : ''.concat((0, E.T4)(t.total, t.currency), '*')
            })
        ]
    });
}
function M(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, g.uZ)(e.subscriptionPlanId),
                i = (0, g.uZ)(t.subscriptionPlanId);
            return n && !i ? -1 : !n && i ? 1 : 0;
        }),
        t
    );
}
function k(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== S.Xh.NONE_MONTH && t !== S.Xh.NONE_YEAR;
    });
}
function U(e) {
    let { proratedInvoice: t, renewalInvoice: n } = e,
        { intervalType: r, intervalCount: a } = (0, g.dn)(t),
        { intervalType: s, intervalCount: o } = (0, g.dn)(n);
    return r !== s || a !== o || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()
        ? null
        : (0, i.jsx)('div', {
              className: C.subscriptionPeriodResetNotice,
              children: N.intl.format(N.t.JWWD4O, { renewalDate: t.subscriptionPeriodEnd })
          });
}
function G(e) {
    let { isUpdate: t, currentInvoice: n, newInvoice: r, inTrialPeriod: a } = e,
        o = null != n ? (0, y.j)(n.invoiceItems) : null,
        l = null != n ? (0, g.dn)(n) : null,
        { intervalType: u, intervalCount: c } = (0, g.dn)(r),
        d = null != l && (l.intervalType !== u || l.intervalCount !== c);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.KU, { extended: !0 }),
            null != n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(T.q9, { children: N.intl.string(N.t.tuqjWV) }),
                          k(M((0, y.j)(n.invoiceItems))).map((e) =>
                              (0, i.jsx)(
                                  L,
                                  {
                                      invoiceItem: e,
                                      currency: n.currency,
                                      inTrialPeriod: a
                                  },
                                  e.id
                              )
                          ),
                          (0, i.jsx)(T.KU, { extended: !0 })
                      ]
                  })
                : null,
            (0, i.jsx)(T.q9, { children: N.intl.string(N.t.qxVrh4) }),
            k(M((0, y.j)(r.invoiceItems))).map((e) => {
                let n = null != o && !o.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
                return (0, i.jsx)(
                    L,
                    {
                        invoiceItem: e,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_6_MONTH_GUILD),
                        className: s()({ [C.subscriptionAddedInvoiceItem]: !t || n })
                    },
                    e.id
                );
            }),
            (0, i.jsx)(b.Z, { invoice: r }),
            (0, i.jsx)(T.KU, {}),
            (0, i.jsx)(T.R$, {
                label: N.intl.string(N.t.AChTLS),
                value: (0, E.og)((0, E.T4)(r.total, r.currency), u, c),
                className: C.subscriptionCostRow
            })
        ]
    });
}
function B(e) {
    var t;
    let { proratedInvoice: n, renewalInvoice: r, isTrial: a, isUpdate: s, overrideRenewalDate: o, trialFooterMessageOverride: l } = e,
        u = null === (t = (0, I.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        { intervalType: c, intervalCount: d } = (0, g.dn)(r);
    if (null == n) return null;
    if (a) {
        let e = (0, g.if)({
                intervalType: null == u ? void 0 : u.interval,
                intervalCount: null == u ? void 0 : u.interval_count
            }),
            t = (null == u ? void 0 : u.interval) === S.rV.DAY && (null == u ? void 0 : u.interval_count) < 28 ? 2 : 7;
        return (0, i.jsx)(i.Fragment, {
            children:
                null != l
                    ? l
                    : N.intl.format(N.t['2FvcjI'], {
                          duration: e,
                          days: t,
                          contactLink: A.EYA.CONTACT,
                          helpdeskArticle: m.Z.getArticleURL(A.BhN.PREMIUM_TRIAL)
                      })
        });
    }
    let f = r.taxInclusive ? N.t['hay+go'] : N.t.da0lkp;
    return (0, i.jsx)(i.Fragment, {
        children: N.intl.format(f, {
            rate: (0, E.og)((0, E.T4)(r.subtotal, r.currency), c, d),
            renewalDate: null != o ? o : s ? (null != n ? n.subscriptionPeriodEnd : r.subscriptionPeriodStart) : r.subscriptionPeriodEnd,
            contactLink: A.EYA.CONTACT,
            helpdeskArticle: m.Z.getArticleURL(A.BhN.BILLING)
        })
    });
}
function Z(e) {
    let { premiumSubscription: t, proratedInvoice: n, renewalInvoice: a, overrideRenewalDate: s, isUpdate: o = !1, isTrial: l = !1, priceOptions: u, isPrepaidPaymentSource: d = !1, trialFooterMessageOverride: p, hideSubscriptionDetails: m = !1 } = e,
        { analyticsLocations: g } = (0, _.ZP)(),
        E = {
            subscriptionId: null == t ? void 0 : t.id,
            renewal: !0,
            preventFetch: !o,
            analyticsLocatinons: g,
            analyticsLocation: f.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...u
        },
        [y] = (0, v.ED)(E),
        [I, b] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d
                ? null
                : (0, i.jsx)(T.HE, {
                      children: (0, i.jsx)(B, {
                          proratedInvoice: n,
                          renewalInvoice: a,
                          isTrial: l,
                          isUpdate: o,
                          overrideRenewalDate: s,
                          trialFooterMessageOverride: p
                      })
                  }),
            !m &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(c.P3F, {
                            onClick: () => b((e) => !e),
                            className: C.subscriptionDetailsToggle,
                            children: [
                                I ? N.intl.string(N.t.aBcRbG) : N.intl.string(N.t.X6duqq),
                                (0, i.jsx)(h.Z, {
                                    direction: I ? h.Z.Directions.UP : h.Z.Directions.DOWN,
                                    className: C.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        I
                            ? (0, i.jsx)(G, {
                                  isUpdate: o,
                                  currentInvoice: y,
                                  newInvoice: a,
                                  inTrialPeriod: l
                              })
                            : null
                    ]
                })
        ]
    });
}
function F(e) {
    let t,
        { plan: n, className: r, isPrepaidPaymentSource: a = !1, isCustomGift: s = !1, invoicePreview: o } = e,
        { tax: l, taxInclusive: u, currency: d } = o,
        f = o.total,
        _ = f - l,
        p = (0, E.T4)(_, d),
        h = (0, E.T4)(f, d);
    return (
        (t = s ? (0, g.L7)(n.interval, !0, void 0, void 0, !0, (0, g.Rd)(n.id)) : N.intl.formatToPlainString(N.t.LQLxkZ, { planName: (0, g.Gf)(n.id, !1, a) })),
        (0, i.jsxs)('div', {
            className: r,
            children: [
                (0, i.jsx)(c.vwX, { children: N.intl.string(N.t.PEjaCw) }),
                l >= 0 && !1 === u
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-md/bold',
                                  className: C.purchaseDetailsHeaderText,
                                  children: t
                              }),
                              (0, i.jsxs)(T.PO, {
                                  className: r,
                                  children: [
                                      (0, i.jsx)(T.q9, { children: N.intl.string(N.t.sail9P) }),
                                      (0, i.jsx)(T.R$, {
                                          label: t,
                                          value: p
                                      }),
                                      (0, i.jsx)(b.Z, { invoice: o }),
                                      (0, i.jsx)(T.KU, {}),
                                      (0, i.jsx)(T.R$, {
                                          label: N.intl.string(N.t.txajQE),
                                          value: h,
                                          className: C.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, i.jsx)(c.X6q, {
                          variant: 'text-md/normal',
                          children: ''.concat(t, ' - ').concat(h)
                      })
            ]
        })
    );
}
function V(e) {
    let t,
        { invoice: n, plan: r } = e,
        a = (0, y.j)(n.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        l()(null != a, 'newPlanInvoiceItem can not be null'),
        r.interval === S.rV.MONTH ? (t = n.taxInclusive ? N.t.v9QeOD : N.t.FALkOz) : r.interval === S.rV.YEAR ? (t = n.taxInclusive ? N.t.ECT4Aw : N.t['0HQxKS']) : l()(!1, 'Invalid interval type'),
        (0, i.jsx)(c.Text, {
            variant: 'text-md/normal',
            children: N.intl.format(t, { price: (0, E.T4)(a.subscriptionPlanPrice, n.currency) })
        })
    );
}
