t.d(n, {
    HE: function () {
        return h;
    },
    Ji: function () {
        return v;
    },
    KU: function () {
        return b;
    },
    PO: function () {
        return d;
    },
    R$: function () {
        return f;
    },
    i$: function () {
        return m;
    },
    q9: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    l = t(481060),
    s = t(911969),
    o = t(937615),
    c = t(388032),
    u = t(719953);
function d(e) {
    let { children: n, className: t } = e;
    return (0, i.jsx)('div', {
        className: a()(u.table, t),
        children: n
    });
}
function p(e) {
    let { children: n } = e;
    return (0, i.jsx)('div', {
        className: u.header,
        children: n
    });
}
function f(e) {
    let { label: n, value: t, className: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(u.row, r),
        children: [
            (0, i.jsx)('div', {
                className: u.rowLabel,
                children: n
            }),
            (0, i.jsx)('div', {
                className: u.rowAmount,
                children: t
            })
        ]
    });
}
function m(e) {
    let { label: n, value: t, discounts: r, originalAmount: a, interval: d, currency: p, className: m, intervalCount: b, inTrialPeriod: v } = e,
        h = (e) => (null != r ? r.find((n) => n.type === e) : null),
        P = h(s.eW.SUBSCRIPTION_PLAN),
        A = h(s.eW.ENTITLEMENT),
        T = null != P ? Math.floor((P.amount / a) * 100) : null,
        g = (0, o.T4)(a, p);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f, {
                label: n,
                value: (0, i.jsxs)(i.Fragment, {
                    children: [
                        v ? c.intl.formatToPlainString(c.t.hXcaLS, { price: (0, o.T4)(0, p) }) : t,
                        null != T
                            ? (0, i.jsxs)('div', {
                                  className: u.rowPercentDiscount,
                                  children: ['-', T, '%']
                              })
                            : null
                    ]
                }),
                className: m
            }),
            v &&
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    className: u.trialEndPrice,
                    children: c.intl.format(c.t.v9QeOD, { price: g })
                }),
            null != T
                ? (0, i.jsxs)('div', {
                      className: u.rowDiscountOriginalPrice,
                      children: ['(', null != d && null != b ? (0, o.og)(g, d, b) : g, ')']
                  })
                : null,
            null != A
                ? (0, i.jsx)('div', {
                      className: u.entitlementDiscountRow,
                      children: c.intl.string(c.t.A7Hpfn)
                  })
                : null
        ]
    });
}
function b(e) {
    let { extended: n = !1, negativeMarginTop: t = !1, negativeMarginBottom: r = !1 } = e;
    return (0, i.jsx)('div', {
        className: a()(u.divider, {
            [u.dividerExtended]: n,
            [u.negativeMarginTop]: t,
            [u.negativeMarginBottom]: r
        })
    });
}
function v(e) {
    let { label: n, value: t, className: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(u.totalRow, r),
        children: [
            (0, i.jsx)('div', {
                className: u.totalLabel,
                children: n
            }),
            (0, i.jsx)('div', {
                className: u.totalAmount,
                children: t
            })
        ]
    });
}
function h(e) {
    let { children: n, className: t } = e;
    return (0, i.jsx)('div', {
        className: a()(u.finePrint, t),
        children: n
    });
}
