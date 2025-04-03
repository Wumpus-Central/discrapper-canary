n.d(t, {
    ZP: () => D,
    av: () => P,
    bL: () => y,
    kA: () => I
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(167533),
    m = n(766434),
    g = n(937615),
    p = n(289393),
    h = n(264451),
    f = n(759178),
    b = n(462087),
    x = n(685201),
    j = n(981631),
    N = n(198139),
    _ = n(388032),
    v = n(769570);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let O = (e, t, n, i) => {
        let s = null != i ? o()(i).add(15, 'days').toISOString() : void 0,
            a = (0, h.Zo)(s, 'MMM D');
        switch (e) {
            case N.x_.OPEN:
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != a ? _.NW.formatToPlainString(_.t.I6YOjY, { payoutDate: a }) : _.NW.string(_.t.G5ATX1), (0, r.jsx)(b.Z, { className: v.statusScheduledIcon })]
                });
            case N.x_.CANCELED:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        _.NW.string(_.t['0SrNPz']),
                        (0, r.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.statusErrorIcon
                        })
                    ]
                });
            case N.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(N.XL.PAYOUT_SEIZED)) === !0)
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            _.NW.string(_.t['0SrNPz']),
                            (0, r.jsx)(d.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: v.statusErrorIcon
                            })
                        ]
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [_.NW.string(_.t.OtZ5k5), (0, r.jsx)(x.Z, { className: v.statusDeferredIcon })]
                });
        }
        switch (t) {
            case N.jw.MANUAL:
            case N.jw.OPEN:
            case N.jw.PENDING:
            case N.jw.PROCESSING:
            case N.jw.SUBMITTED:
            case N.jw.PENDING_FUNDS:
            case N.jw.CANCELED:
            case N.jw.ERROR:
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != a ? _.NW.formatToPlainString(_.t.I6YOjY, { payoutDate: a }) : _.NW.string(_.t.ubdQTk), (0, r.jsx)(b.Z, { className: v.statusScheduledIcon })]
                });
            case N.jw.PAID:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        _.NW.string(_.t.eoSslJ),
                        (0, r.jsx)(d.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.statusPaidIcon
                        })
                    ]
                });
            case N.jw.DEFERRED:
            case N.jw.DEFERRED_INTERNAL:
            case N.jw.REJECTED:
            case N.jw.RISK_REVIEW:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        f.Z.getStatusErrorText(t),
                        (0, r.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    y = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(v.cell, n),
            children: t
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)('div', {
            className: v.cell,
            children: (0, g.T4)(null != t ? t : 0, j.pKx.USD)
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: v.statusCell,
            children: null != t ? t : '-'
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: v.periodCell,
            children: o()(t).utc().format('MMMM YYYY')
        });
    },
    T = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(n)),
            s = null != (t = null == i ? void 0 : i.name) ? t : '['.concat(_.NW.string(_.t['4tEmXV']), ']');
        return (0, r.jsx)(y, { children: s });
    },
    P = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(y, {
            className: v.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, r.jsx)(d.tBG, {
                    size: 'md',
                    color: 'currentColor',
                    className: v.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    w = () => {
        let e = (0, r.jsx)(d.ua7, {
            text: _.NW.string(_.t.q3PkLy),
            children: (e) =>
                (0, r.jsx)(
                    d.d3s,
                    C(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.amountDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [_.NW.string(_.t['/MWnxs']), ' ', e]
        });
    },
    R = () => {
        let e = (0, r.jsx)(d.ua7, {
            text: _.NW.string(_.t.cIGvZG),
            children: (e) =>
                (0, r.jsx)(
                    d.d3s,
                    C(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.statusDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [_.NW.string(_.t.oypxx8), ' ', e]
        });
    },
    Z = [
        {
            key: 'dropdown',
            cellClassName: v.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    s = n.has(e.key);
                return (0, r.jsx)(d.P3F, {
                    className: a()(v.cell, v.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(d.Fbu, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(v.caretIcon, { [v.caretDownIcon]: s })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: v.periodColumn,
            renderHeader: () => _.NW.string(_.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(S, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(T, { listingId: t }, t));
                return i;
            }
        },
        {
            key: 'amount',
            cellClassName: a()(v.amountColumn, v.cellAlignRight),
            renderHeader: () => (0, r.jsx)(w, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(I, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push((0, r.jsx)(I, { children: null == n ? void 0 : n.amount }, t));
                    }
                return i;
            }
        },
        {
            key: 'status',
            cellClassName: a()(v.statusColumn, v.cellAlignRight),
            renderHeader: () => (0, r.jsx)(R, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: s } = (0, m.j0)(e);
                return (0, r.jsx)(E, { children: O(t, n, i, s) });
            }
        }
    ],
    D = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, s] = i.useState(new Set());
        return (0, r.jsx)('div', {
            className: v.tableContainer,
            children: (0, r.jsx)(u.Z, {
                columns: Z,
                data: t,
                className: v.table,
                rowClassName: v.row,
                headerClassName: v.header,
                cellProps: {
                    onToggleExpandRow: (e) => {
                        s((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    expandedRows: n
                }
            })
        });
    };
