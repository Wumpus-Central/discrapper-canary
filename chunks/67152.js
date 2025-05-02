n.d(t, {
    ZP: () => D,
    av: () => P,
    bL: () => N,
    kA: () => I
}),
    n(539854),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(167533),
    m = n(766434),
    g = n(937615),
    p = n(289393),
    f = n(264451),
    h = n(759178),
    x = n(462087),
    b = n(685201),
    j = n(981631),
    _ = n(198139),
    v = n(388032),
    O = n(769570);
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
let y = (e, t, n, i) => {
        let l = null != i ? o()(i).add(15, 'days').toISOString() : void 0,
            s = (0, f.Zo)(l, 'MMM D');
        switch (e) {
            case _.x_.OPEN:
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjY, { payoutDate: s }) : v.intl.string(v.t.G5ATX1), (0, r.jsx)(x.Z, { className: O.statusScheduledIcon })]
                });
            case _.x_.CANCELED:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        v.intl.string(v.t['0SrNPz']),
                        (0, r.jsx)(u.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.statusErrorIcon
                        })
                    ]
                });
            case _.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(_.XL.PAYOUT_SEIZED)) === !0)
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            v.intl.string(v.t['0SrNPz']),
                            (0, r.jsx)(u.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: O.statusErrorIcon
                            })
                        ]
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [v.intl.string(v.t.OtZ5k5), (0, r.jsx)(b.Z, { className: O.statusDeferredIcon })]
                });
        }
        switch (t) {
            case _.jw.MANUAL:
            case _.jw.OPEN:
            case _.jw.PENDING:
            case _.jw.PROCESSING:
            case _.jw.SUBMITTED:
            case _.jw.PENDING_FUNDS:
            case _.jw.CANCELED:
            case _.jw.ERROR:
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjY, { payoutDate: s }) : v.intl.string(v.t.ubdQTk), (0, r.jsx)(x.Z, { className: O.statusScheduledIcon })]
                });
            case _.jw.PAID:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        v.intl.string(v.t.eoSslJ),
                        (0, r.jsx)(u.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.statusPaidIcon
                        })
                    ]
                });
            case _.jw.DEFERRED:
            case _.jw.DEFERRED_INTERNAL:
            case _.jw.REJECTED:
            case _.jw.RISK_REVIEW:
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        h.Z.getStatusErrorText(t),
                        (0, r.jsx)(u.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: s()(O.cell, n),
            children: t
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)('div', {
            className: O.cell,
            children: (0, g.T4)(null != t ? t : 0, j.pKx.USD)
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(N, {
            className: O.statusCell,
            children: null != t ? t : '-'
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(N, {
            className: O.periodCell,
            children: o()(t).utc().format('MMMM YYYY')
        });
    },
    T = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(n)),
            l = null != (t = null == i ? void 0 : i.name) ? t : '['.concat(v.intl.string(v.t['4tEmXV']), ']');
        return (0, r.jsx)(N, { children: l });
    },
    P = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(N, {
            className: O.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, r.jsx)(u.tBG, {
                    size: 'md',
                    color: 'currentColor',
                    className: O.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    w = () => {
        let e = (0, r.jsx)(u.ua7, {
            text: v.intl.string(v.t.q3PkLy),
            children: (e) =>
                (0, r.jsx)(
                    u.d3s,
                    C(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: O.amountDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t['/MWnxs']), ' ', e]
        });
    },
    R = () => {
        let e = (0, r.jsx)(u.ua7, {
            text: v.intl.string(v.t.cIGvZG),
            children: (e) =>
                (0, r.jsx)(
                    u.d3s,
                    C(
                        {
                            size: 'xs',
                            color: 'currentColor',
                            className: O.statusDisclaimer
                        },
                        e
                    )
                )
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t.oypxx8), ' ', e]
        });
    },
    Z = [
        {
            key: 'dropdown',
            cellClassName: O.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    l = n.has(e.key);
                return (0, r.jsx)(u.P3F, {
                    className: s()(O.cell, O.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(u.Fbu, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(O.caretIcon, { [O.caretDownIcon]: l })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: O.periodColumn,
            renderHeader: () => v.intl.string(v.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(S, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(T, { listingId: t }, t));
                return i;
            }
        },
        {
            key: 'amount',
            cellClassName: s()(O.amountColumn, O.cellAlignRight),
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
            cellClassName: s()(O.statusColumn, O.cellAlignRight),
            renderHeader: () => (0, r.jsx)(R, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: l } = (0, m.j0)(e);
                return (0, r.jsx)(E, { children: y(t, n, i, l) });
            }
        }
    ],
    D = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, l] = i.useState(new Set());
        return (0, r.jsx)('div', {
            className: O.tableContainer,
            children: (0, r.jsx)(d.Z, {
                columns: Z,
                data: t,
                className: O.table,
                rowClassName: O.row,
                headerClassName: O.header,
                cellProps: {
                    onToggleExpandRow: (e) => {
                        l((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    expandedRows: n
                }
            })
        });
    };
