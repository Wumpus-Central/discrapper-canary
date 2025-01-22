r.d(n, {
    HE: function () {
        return E;
    },
    Ji: function () {
        return g;
    },
    KU: function () {
        return m;
    },
    PO: function () {
        return f;
    },
    R$: function () {
        return h;
    },
    i$: function () {
        return _;
    },
    q9: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(911969),
    u = r(937615),
    c = r(388032),
    d = r(719953);
function f(e) {
    let { children: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: o()(d.table, r),
        children: n
    });
}
function p(e) {
    let { children: n } = e;
    return (0, i.jsx)('div', {
        className: d.header,
        children: n
    });
}
function h(e) {
    let { label: n, value: r, className: a } = e;
    return (0, i.jsxs)('div', {
        className: o()(d.row, a),
        children: [
            (0, i.jsx)('div', {
                className: d.rowLabel,
                children: n
            }),
            (0, i.jsx)('div', {
                className: d.rowAmount,
                children: r
            })
        ]
    });
}
function _(e) {
    let { label: n, value: r, discounts: a, originalAmount: o, interval: f, currency: p, className: _, intervalCount: m, inTrialPeriod: g } = e,
        E = (e) => (null != a ? a.find((n) => n.type === e) : null),
        v = E(l.eW.SUBSCRIPTION_PLAN),
        y = E(l.eW.ENTITLEMENT),
        b = null != v ? Math.floor((v.amount / o) * 100) : null,
        I = (0, u.T4)(o, p);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h, {
                label: n,
                value: (0, i.jsxs)(i.Fragment, {
                    children: [
                        g ? c.intl.formatToPlainString(c.t.hXcaLS, { price: (0, u.T4)(0, p) }) : r,
                        null != b
                            ? (0, i.jsxs)('div', {
                                  className: d.rowPercentDiscount,
                                  children: ['-', b, '%']
                              })
                            : null
                    ]
                }),
                className: _
            }),
            g &&
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: d.trialEndPrice,
                    children: c.intl.format(c.t.v9QeOD, { price: I })
                }),
            null != b
                ? (0, i.jsxs)('div', {
                      className: d.rowDiscountOriginalPrice,
                      children: ['(', null != f && null != m ? (0, u.og)(I, f, m) : I, ')']
                  })
                : null,
            null != y
                ? (0, i.jsx)('div', {
                      className: d.entitlementDiscountRow,
                      children: c.intl.string(c.t.A7Hpfn)
                  })
                : null
        ]
    });
}
function m(e) {
    let { extended: n = !1, negativeMarginTop: r = !1, negativeMarginBottom: a = !1 } = e;
    return (0, i.jsx)('div', {
        className: o()(d.divider, {
            [d.dividerExtended]: n,
            [d.negativeMarginTop]: r,
            [d.negativeMarginBottom]: a
        })
    });
}
function g(e) {
    let { label: n, value: r, className: a } = e;
    return (0, i.jsxs)('div', {
        className: o()(d.totalRow, a),
        children: [
            (0, i.jsx)('div', {
                className: d.totalLabel,
                children: n
            }),
            (0, i.jsx)('div', {
                className: d.totalAmount,
                children: r
            })
        ]
    });
}
function E(e) {
    let { children: n, className: r } = e;
    return (0, i.jsx)('div', {
        className: o()(d.finePrint, r),
        children: n
    });
}
