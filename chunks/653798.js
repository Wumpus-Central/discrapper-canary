n.d(t, {
    HE: () => g,
    Ji: () => m,
    KU: () => h,
    PO: () => d,
    R$: () => _,
    i$: () => p,
    q9: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(911969),
    l = n(937615),
    u = n(388032),
    c = n(719953);
function d(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: a()(c.table, n),
        children: t
    });
}
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: c.header,
        children: t
    });
}
function _(e) {
    let { label: t, value: n, className: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(c.row, r),
        children: [
            (0, i.jsx)('div', {
                className: c.rowLabel,
                children: t
            }),
            (0, i.jsx)('div', {
                className: c.rowAmount,
                children: n
            })
        ]
    });
}
function p(e) {
    let { label: t, value: n, discounts: r, originalAmount: a, interval: d, currency: f, className: p, intervalCount: h, inTrialPeriod: m } = e,
        g = (e) => (null != r ? r.find((t) => t.type === e) : null),
        E = g(o.eW.SUBSCRIPTION_PLAN),
        v = g(o.eW.ENTITLEMENT),
        y = null != E ? Math.floor((E.amount / a) * 100) : null,
        I = (0, l.T4)(a, f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_, {
                label: t,
                value: (0, i.jsxs)(i.Fragment, {
                    children: [
                        m ? u.intl.formatToPlainString(u.t.hXcaLS, { price: (0, l.T4)(0, f) }) : n,
                        null != y
                            ? (0, i.jsxs)('div', {
                                  className: c.rowPercentDiscount,
                                  children: ['-', y, '%']
                              })
                            : null
                    ]
                }),
                className: p
            }),
            m &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: c.trialEndPrice,
                    children: u.intl.format(u.t.v9QeOD, { price: I })
                }),
            null != y
                ? (0, i.jsxs)('div', {
                      className: c.rowDiscountOriginalPrice,
                      children: ['(', null != d && null != h ? (0, l.og)(I, d, h) : I, ')']
                  })
                : null,
            null != v
                ? (0, i.jsx)('div', {
                      className: c.entitlementDiscountRow,
                      children: u.intl.string(u.t.A7Hpfn)
                  })
                : null
        ]
    });
}
function h(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: r = !1 } = e;
    return (0, i.jsx)('div', {
        className: a()(c.divider, {
            [c.dividerExtended]: t,
            [c.negativeMarginTop]: n,
            [c.negativeMarginBottom]: r
        })
    });
}
function m(e) {
    let { label: t, value: n, className: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(c.totalRow, r),
        children: [
            (0, i.jsx)('div', {
                className: c.totalLabel,
                children: t
            }),
            (0, i.jsx)('div', {
                className: c.totalAmount,
                children: n
            })
        ]
    });
}
function g(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: a()(c.finePrint, n),
        children: t
    });
}
