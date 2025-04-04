n.d(t, {
    HE: () => g,
    Ji: () => m,
    KU: () => h,
    PO: () => d,
    R$: () => _,
    i$: () => p,
    q9: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(911969),
    l = n(937615),
    c = n(388032),
    u = n(822988);
function d(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(u.table, n),
        children: t
    });
}
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: u.header,
        children: t
    });
}
function _(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)('div', {
        className: o()(u.row, i),
        children: [
            (0, r.jsx)('div', {
                className: u.rowLabel,
                children: t
            }),
            (0, r.jsx)('div', {
                className: u.rowAmount,
                children: n
            })
        ]
    });
}
function p(e) {
    let { label: t, value: n, discounts: i, originalAmount: o, interval: d, currency: f, className: p, intervalCount: h, inTrialPeriod: m } = e,
        g = (e) => (null != i ? i.find((t) => t.type === e) : null),
        E = g(s.eW.SUBSCRIPTION_PLAN),
        b = g(s.eW.ENTITLEMENT),
        y = null != E ? Math.floor((E.amount / o) * 100) : null,
        v = (0, l.T4)(o, f);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                label: t,
                value: (0, r.jsxs)(r.Fragment, {
                    children: [
                        m ? c.NW.formatToPlainString(c.t.hXcaLS, { price: (0, l.T4)(0, f) }) : n,
                        null != y
                            ? (0, r.jsxs)('div', {
                                  className: u.rowPercentDiscount,
                                  children: ['-', y, '%']
                              })
                            : null
                    ]
                }),
                className: p
            }),
            m &&
                (0, r.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    className: u.trialEndPrice,
                    children: c.NW.format(c.t.v9QeOD, { price: v })
                }),
            null != y
                ? (0, r.jsxs)('div', {
                      className: u.rowDiscountOriginalPrice,
                      children: ['(', null != d && null != h ? (0, l.og)(v, d, h) : v, ')']
                  })
                : null,
            null != b
                ? (0, r.jsx)('div', {
                      className: u.entitlementDiscountRow,
                      children: c.NW.string(c.t.A7Hpfn)
                  })
                : null
        ]
    });
}
function h(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1 } = e;
    return (0, r.jsx)('div', {
        className: o()(u.divider, {
            [u.dividerExtended]: t,
            [u.negativeMarginTop]: n,
            [u.negativeMarginBottom]: i
        })
    });
}
function m(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)('div', {
        className: o()(u.totalRow, i),
        children: [
            (0, r.jsx)('div', {
                className: u.totalLabel,
                children: t
            }),
            (0, r.jsx)('div', {
                className: u.totalAmount,
                children: n
            })
        ]
    });
}
function g(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(u.finePrint, n),
        children: t
    });
}
