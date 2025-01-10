t.d(n, {
    As: function () {
        return M;
    },
    By: function () {
        return L;
    },
    Lu: function () {
        return j;
    },
    e9: function () {
        return D;
    },
    hG: function () {
        return O;
    },
    nd: function () {
        return G;
    },
    yT: function () {
        return H;
    }
}),
    t(411104),
    t(724458),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    s = t(512722),
    o = t.n(s),
    c = t(442837),
    u = t(481060),
    d = t(911969),
    p = t(100527),
    f = t(906732),
    m = t(509545),
    b = t(259580),
    v = t(63063),
    h = t(74538),
    P = t(937615),
    A = t(374649),
    T = t(591548),
    g = t(639119),
    y = t(653798),
    E = t(585602),
    I = t(474936),
    x = t(981631),
    _ = t(388032),
    N = t(193727);
let C = (e, n) => {
        var t;
        return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((e) => e.type === n));
    },
    R = (e, n) => {
        var t, i, r;
        return e.subscriptionPlanPrice - (null !== (r = null === (i = e.discounts) || void 0 === i ? void 0 : null === (t = i.find((e) => e.type === n)) || void 0 === t ? void 0 : t.amount) && void 0 !== r ? r : 0);
    };
function S(e) {
    var n;
    let { invoiceItem: t, overrideAmount: r, showGuildSubscriptionAdjustmentTooltip: a, currency: l, className: s, isPrepaidPaymentSource: p, referralTrialOfferId: f, inTrialPeriod: b } = e,
        v = (0, c.e7)([m.Z], () => m.Z.get(t.subscriptionPlanId)),
        A = null === (n = (0, g.N)(f)) || void 0 === n ? void 0 : n.subscription_trial;
    o()(null != v, 'Missing subscriptionPlan');
    let T = (function (e, n, t, i) {
        let r = C(e, d.eW.PREMIUM_TRIAL);
        switch (e.subscriptionPlanId) {
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
                return (0, h.Gf)(e.subscriptionPlanId, r, t, i);
            case I.Xh.PREMIUM_3_MONTH_GUILD:
            case I.Xh.PREMIUM_6_MONTH_GUILD:
                return _.intl.format(_.t.YAIIWl, {
                    num: e.quantity,
                    intervalCount: n.intervalCount
                });
            case I.Xh.PREMIUM_MONTH_GUILD:
                return _.intl.format(_.t['3BYyio'], { num: e.quantity });
            case I.Xh.PREMIUM_YEAR_GUILD:
                return _.intl.format(_.t.JVW4UF, { num: e.quantity });
        }
        switch (n.interval) {
            case I.rV.MONTH:
                if (1 === n.intervalCount) return _.intl.formatToPlainString(_.t['6oq129'], { planName: n.name });
                return _.intl.formatToPlainString(_.t['9ydggY'], {
                    planName: n.name,
                    intervalCount: n.intervalCount
                });
            case I.rV.YEAR:
                return _.intl.formatToPlainString(_.t.V6UFQE, { planName: n.name });
        }
        throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
    })(
        t,
        v,
        p,
        (0, h.if)({
            intervalType: null == A ? void 0 : A.interval,
            intervalCount: null == A ? void 0 : A.interval_count
        })
    );
    !0 === a &&
        (T = (0, i.jsxs)('div', {
            className: N.invoiceItemLabelWithIcon,
            children: [
                (0, i.jsxs)('div', {
                    children: [T, ' ']
                }),
                (0, i.jsx)(u.Tooltip, {
                    text: _.intl.format(_.t.UDop9f, {}),
                    'aria-label': _.intl.string(_.t.P68ePD),
                    tooltipClassName: N.invoiceItemTooltip,
                    children: (e) =>
                        (0, i.jsx)(u.CircleQuestionIcon, {
                            size: 'md',
                            color: 'currentColor',
                            ...e,
                            className: N.invoiceItemLabelIcon
                        })
                })
            ]
        }));
    let E = (0, P.T4)(null != r ? r : t.amount, l),
        x = p ? E : (0, P.og)(E, v.interval, v.intervalCount);
    return (0, i.jsx)(y.i$, {
        label: T,
        value: x,
        originalAmount: t.subscriptionPlanPrice * t.quantity,
        discounts: t.discounts,
        interval: v.interval,
        intervalCount: v.intervalCount,
        currency: l,
        className: s,
        inTrialPeriod: b
    });
}
function M(e) {
    let { label: n, tooltipText: t, tooltipAriaLabel: r } = e;
    return (0, i.jsxs)('div', {
        className: N.invoiceItemLabelWithIcon,
        children: [
            n,
            (0, i.jsx)(u.Tooltip, {
                clickableOnMobile: !0,
                text: t,
                'aria-label': r,
                tooltipClassName: N.invoiceItemTooltip,
                children: (e) =>
                    (0, i.jsx)(u.CircleQuestionIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...e,
                        className: N.invoiceItemLabelIcon
                    })
            })
        ]
    });
}
function L(e) {
    let { invoice: n, isPrepaidPaymentSource: t } = e,
        r = (0, T.j)(n.invoiceItems),
        a = r.find((e) => !(0, h.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        l = r.find((e) => (0, h.Z8)(e.subscriptionPlanId) && e.amount >= 0),
        s = (0, c.e7)([m.Z], () => (null != l ? m.Z.get(l.subscriptionPlanId) : null)),
        o = null != l ? l.amount : 0,
        u = (0, P.T4)(o, n.currency),
        d = null != s ? (0, P.og)(u, s.interval, s.intervalCount) : 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a
                ? (0, i.jsx)(S, {
                      invoiceItem: a,
                      currency: n.currency,
                      isPrepaidPaymentSource: t
                  })
                : null,
            0 !== o && null != l && null != s
                ? (0, i.jsx)(y.R$, {
                      label: _.intl.formatToPlainString(_.t.a3cAOj, {
                          numGuildSubscriptions: l.quantity,
                          planName: (0, h.Gf)(s.id, !1, t)
                      }),
                      value: t ? u : d
                  })
                : null,
            (0, i.jsx)(E.Z, { invoice: n }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.Ji, {
                label: _.intl.format(n.taxInclusive ? (t ? _.t.BqdxQk : _.t.XH4raG) : _.t.RUI48P, {}),
                value: n.currency === x.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function j(e) {
    let { invoice: n, newPlan: t, isPrepaidPaymentSource: r, referralTrialOfferId: a } = e,
        l = (0, T.j)(n.invoiceItems),
        s = l.find((e) => e.subscriptionPlanId === t.id);
    o()(null != s, 'Expected newPlanInvoiceItem');
    let c = l.find((e) => !(0, h.Z8)(e.subscriptionPlanId) && e.amount < 0),
        u = l.find((e) => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((e) => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
        p = C(s, d.eW.PREMIUM_TRIAL),
        f = R(s, d.eW.SUBSCRIPTION_PLAN),
        m = s.quantity * f,
        b = s.amount + (null != c ? c.amount : 0) - m + (null != u ? u.amount : 0),
        v = l.filter((e) => e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                invoiceItem: s,
                currency: n.currency,
                overrideAmount: m,
                isPrepaidPaymentSource: r,
                referralTrialOfferId: a
            }),
            0 === b || p
                ? null
                : (0, i.jsx)(y.R$, {
                      label: (0, i.jsx)(M, {
                          label: _.intl.formatToPlainString(_.t.ZSVgeX, { planName: (0, h.PV)(t.id) ? (0, h.aq)(t.id) : t.name }),
                          tooltipText: _.intl.string(_.t.JmwQJC)
                      }),
                      value: (0, P.T4)(b, n.currency)
                  }),
            0 !== v
                ? (0, i.jsx)(y.R$, {
                      label: (0, i.jsx)(M, {
                          label: _.intl.string(_.t['+as5ZW']),
                          tooltipText: _.intl.format(_.t.UDop9f, {}),
                          tooltipAriaLabel: _.intl.string(_.t.P68ePD)
                      }),
                      value: (0, P.T4)(v, n.currency)
                  })
                : null,
            (0, i.jsx)(E.Z, { invoice: n }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.Ji, {
                label: _.intl.format(n.taxInclusive ? (r ? _.t.BqdxQk : _.t.XH4raG) : _.t.RUI48P, {}),
                value: n.currency === x.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
            })
        ]
    });
}
function k(e) {
    let n = e.slice();
    return (
        n.sort((e, n) => {
            let t = (0, h.uZ)(e.subscriptionPlanId),
                i = (0, h.uZ)(n.subscriptionPlanId);
            return t && !i ? -1 : !t && i ? 1 : 0;
        }),
        n
    );
}
function U(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: n } = e;
        return n !== I.Xh.NONE_MONTH && n !== I.Xh.NONE_YEAR;
    });
}
function O(e) {
    let { proratedInvoice: n, renewalInvoice: t } = e,
        { intervalType: r, intervalCount: a } = (0, h.dn)(n),
        { intervalType: l, intervalCount: s } = (0, h.dn)(t);
    return r !== l || a !== s || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime()
        ? null
        : (0, i.jsx)('div', {
              className: N.subscriptionPeriodResetNotice,
              children: _.intl.format(_.t.JWWD4O, { renewalDate: n.subscriptionPeriodEnd })
          });
}
function B(e) {
    let { isUpdate: n, currentInvoice: t, newInvoice: r, inTrialPeriod: a } = e,
        s = null != t ? (0, T.j)(t.invoiceItems) : null,
        o = null != t ? (0, h.dn)(t) : null,
        { intervalType: c, intervalCount: u } = (0, h.dn)(r),
        d = null != o && (o.intervalType !== c || o.intervalCount !== u);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.KU, { extended: !0 }),
            null != t
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.q9, { children: _.intl.string(_.t.tuqjWV) }),
                          U(k((0, T.j)(t.invoiceItems))).map((e) =>
                              (0, i.jsx)(
                                  S,
                                  {
                                      invoiceItem: e,
                                      currency: t.currency,
                                      inTrialPeriod: a
                                  },
                                  e.id
                              )
                          ),
                          (0, i.jsx)(y.KU, { extended: !0 })
                      ]
                  })
                : null,
            (0, i.jsx)(y.q9, { children: _.intl.string(_.t.qxVrh4) }),
            U(k((0, T.j)(r.invoiceItems))).map((e) => {
                let t = null != s && !s.some((n) => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
                return (0, i.jsx)(
                    S,
                    {
                        invoiceItem: e,
                        currency: r.currency,
                        showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === I.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === I.Xh.PREMIUM_6_MONTH_GUILD),
                        className: l()({ [N.subscriptionAddedInvoiceItem]: !n || t })
                    },
                    e.id
                );
            }),
            (0, i.jsx)(E.Z, { invoice: r }),
            (0, i.jsx)(y.KU, {}),
            (0, i.jsx)(y.R$, {
                label: _.intl.string(_.t.AChTLS),
                value: (0, P.og)((0, P.T4)(r.total, r.currency), c, u),
                className: N.subscriptionCostRow
            })
        ]
    });
}
function Z(e) {
    var n;
    let { proratedInvoice: t, renewalInvoice: r, isTrial: a, isUpdate: l, overrideRenewalDate: s, trialFooterMessageOverride: o } = e,
        c = null === (n = (0, g.N)()) || void 0 === n ? void 0 : n.subscription_trial,
        { intervalType: u, intervalCount: d } = (0, h.dn)(r);
    if (null == t) return null;
    if (a) {
        let e = (0, h.if)({
                intervalType: null == c ? void 0 : c.interval,
                intervalCount: null == c ? void 0 : c.interval_count
            }),
            n = (null == c ? void 0 : c.interval) === I.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
        return (0, i.jsx)(i.Fragment, {
            children:
                null != o
                    ? o
                    : _.intl.format(_.t['2FvcjI'], {
                          duration: e,
                          days: n,
                          contactLink: x.EYA.CONTACT,
                          helpdeskArticle: v.Z.getArticleURL(x.BhN.PREMIUM_TRIAL)
                      })
        });
    }
    let p = r.taxInclusive ? _.t['hay+go'] : _.t.da0lkp;
    return (0, i.jsx)(i.Fragment, {
        children: _.intl.format(p, {
            rate: (0, P.og)((0, P.T4)(r.subtotal, r.currency), u, d),
            renewalDate: null != s ? s : l ? (null != t ? t.subscriptionPeriodEnd : r.subscriptionPeriodStart) : r.subscriptionPeriodEnd,
            contactLink: x.EYA.CONTACT,
            helpdeskArticle: v.Z.getArticleURL(x.BhN.BILLING)
        })
    });
}
function G(e) {
    let { premiumSubscription: n, proratedInvoice: t, renewalInvoice: a, overrideRenewalDate: l, isUpdate: s = !1, isTrial: o = !1, priceOptions: c, isPrepaidPaymentSource: d = !1, trialFooterMessageOverride: m, hideSubscriptionDetails: v = !1 } = e,
        { analyticsLocations: h } = (0, f.ZP)(),
        P = {
            subscriptionId: null == n ? void 0 : n.id,
            renewal: !0,
            preventFetch: !s,
            analyticsLocatinons: h,
            analyticsLocation: p.Z.SUBSCRIPTION_INVOICE_FOOTER,
            ...c
        },
        [T] = (0, A.ED)(P),
        [g, E] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d
                ? null
                : (0, i.jsx)(y.HE, {
                      children: (0, i.jsx)(Z, {
                          proratedInvoice: t,
                          renewalInvoice: a,
                          isTrial: o,
                          isUpdate: s,
                          overrideRenewalDate: l,
                          trialFooterMessageOverride: m
                      })
                  }),
            !v &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Clickable, {
                            onClick: () => E((e) => !e),
                            className: N.subscriptionDetailsToggle,
                            children: [
                                g ? _.intl.string(_.t.aBcRbG) : _.intl.string(_.t.X6duqq),
                                (0, i.jsx)(b.Z, {
                                    direction: g ? b.Z.Directions.UP : b.Z.Directions.DOWN,
                                    className: N.subscriptionDetailsToggleCaret
                                })
                            ]
                        }),
                        g
                            ? (0, i.jsx)(B, {
                                  isUpdate: s,
                                  currentInvoice: T,
                                  newInvoice: a,
                                  inTrialPeriod: o
                              })
                            : null
                    ]
                })
        ]
    });
}
function D(e) {
    let n,
        { plan: t, className: r, isPrepaidPaymentSource: a = !1, isCustomGift: l = !1, invoicePreview: s } = e,
        { tax: o, taxInclusive: c, currency: d } = s,
        p = s.total,
        f = p - o,
        m = (0, P.T4)(f, d),
        b = (0, P.T4)(p, d);
    return (
        (n = l ? (0, h.L7)(t.interval, !0, void 0, void 0, !0, (0, h.Rd)(t.id)) : _.intl.formatToPlainString(_.t.LQLxkZ, { planName: (0, h.Gf)(t.id, !1, a) })),
        (0, i.jsxs)('div', {
            className: r,
            children: [
                (0, i.jsx)(u.FormTitle, { children: _.intl.string(_.t.PEjaCw) }),
                o >= 0 && !1 === c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.Text, {
                                  variant: 'text-md/bold',
                                  className: N.purchaseDetailsHeaderText,
                                  children: n
                              }),
                              (0, i.jsxs)(y.PO, {
                                  className: r,
                                  children: [
                                      (0, i.jsx)(y.q9, { children: _.intl.string(_.t.sail9P) }),
                                      (0, i.jsx)(y.R$, {
                                          label: n,
                                          value: m
                                      }),
                                      (0, i.jsx)(E.Z, { invoice: s }),
                                      (0, i.jsx)(y.KU, {}),
                                      (0, i.jsx)(y.R$, {
                                          label: _.intl.string(_.t.txajQE),
                                          value: b,
                                          className: N.subscriptionCostRow
                                      })
                                  ]
                              })
                          ]
                      })
                    : (0, i.jsx)(u.Heading, {
                          variant: 'text-md/normal',
                          children: ''.concat(n, ' - ').concat(b)
                      })
            ]
        })
    );
}
function H(e) {
    let n,
        { invoice: t, plan: r } = e,
        a = (0, T.j)(t.invoiceItems).find((e) => e.subscriptionPlanId === r.id);
    return (
        o()(null != a, 'newPlanInvoiceItem can not be null'),
        r.interval === I.rV.MONTH ? (n = t.taxInclusive ? _.t.v9QeOD : _.t.FALkOz) : r.interval === I.rV.YEAR ? (n = t.taxInclusive ? _.t.ECT4Aw : _.t['0HQxKS']) : o()(!1, 'Invalid interval type'),
        (0, i.jsx)(u.Text, {
            variant: 'text-md/normal',
            children: _.intl.format(n, { price: (0, P.T4)(a.subscriptionPlanPrice, t.currency) })
        })
    );
}
