n.d(t, {
    ZP: () => Z,
    av: () => P,
    bL: () => C,
    kA: () => I
}),
    n(539854),
    n(388685);
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
    f = n(264451),
    h = n(759178),
    b = n(462087),
    x = n(685201),
    j = n(981631),
    N = n(198139),
    v = n(388032),
    _ = n(769570);
function y(e) {
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
            a = (0, f.Zo)(s, 'MMM D');
        switch (e) {
            case N.x_.OPEN:
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != a ? v.NW.formatToPlainString(v.t.I6YOjY, { payoutDate: a }) : v.NW.string(v.t.G5ATX1), (0, r.jsx)(b.Z, { className: _.statusScheduledIcon })]
                });
            case N.x_.CANCELED:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        v.NW.string(v.t['0SrNPz']),
                        (0, r.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.statusErrorIcon
                        })
                    ]
                });
            case N.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(N.XL.PAYOUT_SEIZED)) === !0)
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            v.NW.string(v.t['0SrNPz']),
                            (0, r.jsx)(d.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: _.statusErrorIcon
                            })
                        ]
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [v.NW.string(v.t.OtZ5k5), (0, r.jsx)(x.Z, { className: _.statusDeferredIcon })]
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
                    children: [null != a ? v.NW.formatToPlainString(v.t.I6YOjY, { payoutDate: a }) : v.NW.string(v.t.ubdQTk), (0, r.jsx)(b.Z, { className: _.statusScheduledIcon })]
                });
            case N.jw.PAID:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        v.NW.string(v.t.eoSslJ),
                        (0, r.jsx)(d.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.statusPaidIcon
                        })
                    ]
                });
            case N.jw.DEFERRED:
            case N.jw.DEFERRED_INTERNAL:
            case N.jw.REJECTED:
            case N.jw.RISK_REVIEW:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        h.Z.getStatusErrorText(t),
                        (0, r.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    C = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: a()(_.cell, n),
            children: t
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)('div', {
            className: _.cell,
            children: (0, g.T4)(null != t ? t : 0, j.pKx.USD)
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(C, {
            className: _.statusCell,
            children: null != t ? t : '-'
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(C, {
            className: _.periodCell,
            children: o()(t).utc().format('MMMM YYYY')
        });
    },
    T = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(n)),
            s = null != (t = null == i ? void 0 : i.name) ? t : '['.concat(v.NW.string(v.t['4tEmXV']), ']');
        return (0, r.jsx)(C, { children: s });
    },
    P = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(C, {
            className: _.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, r.jsx)(d.tBG, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    w = () => {
        let e = (0, r.jsx)(d.ua7, {
            text: v.NW.string(v.t.q3PkLy),
            children: (e) =>
                (0, r.jsx)(
                    d.d3s,
                    y(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.amountDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.NW.string(v.t['/MWnxs']), ' ', e]
        });
    },
    R = () => {
        let e = (0, r.jsx)(d.ua7, {
            text: v.NW.string(v.t.cIGvZG),
            children: (e) =>
                (0, r.jsx)(
                    d.d3s,
                    y(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: _.statusDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.NW.string(v.t.oypxx8), ' ', e]
        });
    },
    D = [
        {
            key: 'dropdown',
            cellClassName: _.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    s = n.has(e.key);
                return (0, r.jsx)(d.P3F, {
                    className: a()(_.cell, _.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(d.Fbu, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(_.caretIcon, { [_.caretDownIcon]: s })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: _.periodColumn,
            renderHeader: () => v.NW.string(v.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(S, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(T, { listingId: t }, t));
                return i;
            }
        },
        {
            key: 'amount',
            cellClassName: a()(_.amountColumn, _.cellAlignRight),
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
            cellClassName: a()(_.statusColumn, _.cellAlignRight),
            renderHeader: () => (0, r.jsx)(R, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: s } = (0, m.j0)(e);
                return (0, r.jsx)(E, { children: O(t, n, i, s) });
            }
        }
    ],
    Z = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, s] = i.useState(new Set());
        return (0, r.jsx)('div', {
            className: _.tableContainer,
            children: (0, r.jsx)(u.Z, {
                columns: D,
                data: t,
                className: _.table,
                rowClassName: _.row,
                headerClassName: _.header,
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
