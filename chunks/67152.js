n.d(t, {
    ZP: () => D,
    av: () => Z,
    bL: () => E,
    kA: () => b
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(167533),
    m = n(766434),
    h = n(937615),
    g = n(289393),
    x = n(264451),
    p = n(759178),
    _ = n(462087),
    C = n(685201),
    f = n(981631),
    v = n(198139),
    N = n(388032),
    j = n(641991);
let I = (e, t, n, r) => {
        let l = null != r ? o()(r).add(15, 'days').toISOString() : void 0,
            s = (0, x.Zo)(l, 'MMM D');
        switch (e) {
            case v.x_.OPEN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != s ? N.intl.formatToPlainString(N.t.I6YOjY, { payoutDate: s }) : N.intl.string(N.t.G5ATX1), (0, i.jsx)(_.Z, { className: j.statusScheduledIcon })]
                });
            case v.x_.CANCELED:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        N.intl.string(N.t['0SrNPz']),
                        (0, i.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
            case v.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(v.XL.PAYOUT_SEIZED)) === !0)
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            N.intl.string(N.t['0SrNPz']),
                            (0, i.jsx)(d.k$p, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.statusErrorIcon
                            })
                        ]
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [N.intl.string(N.t.OtZ5k5), (0, i.jsx)(C.Z, { className: j.statusDeferredIcon })]
                });
        }
        switch (t) {
            case v.jw.MANUAL:
            case v.jw.OPEN:
            case v.jw.PENDING:
            case v.jw.PROCESSING:
            case v.jw.SUBMITTED:
            case v.jw.PENDING_FUNDS:
            case v.jw.CANCELED:
            case v.jw.ERROR:
                return (0, i.jsxs)(i.Fragment, {
                    children: [null != s ? N.intl.formatToPlainString(N.t.I6YOjY, { payoutDate: s }) : N.intl.string(N.t.ubdQTk), (0, i.jsx)(_.Z, { className: j.statusScheduledIcon })]
                });
            case v.jw.PAID:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        N.intl.string(N.t.eoSslJ),
                        (0, i.jsx)(d.owK, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusPaidIcon
                        })
                    ]
                });
            case v.jw.DEFERRED:
            case v.jw.DEFERRED_INTERNAL:
            case v.jw.REJECTED:
            case v.jw.RISK_REVIEW:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        p.Z.getStatusErrorText(t),
                        (0, i.jsx)(d.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    E = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)('div', {
            className: s()(j.cell, n),
            children: t
        });
    },
    b = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: j.cell,
            children: (0, h.T4)(null != t ? t : 0, f.pKx.USD)
        });
    },
    T = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(E, {
            className: j.statusCell,
            children: null != t ? t : '-'
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(E, {
            className: j.periodCell,
            children: o()(t).utc().format('MMMM YYYY')
        });
    },
    R = (e) => {
        var t;
        let { listingId: n } = e,
            r = (0, c.e7)([g.Z], () => g.Z.getSubscriptionListing(n)),
            l = null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : '['.concat(N.intl.string(N.t['4tEmXV']), ']');
        return (0, i.jsx)(E, { children: l });
    },
    Z = (e) => {
        let { children: t } = e;
        return (0, i.jsxs)(E, {
            className: j.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, i.jsx)(d.tBG, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    y = () => {
        let e = (0, i.jsx)(d.ua7, {
            text: N.intl.string(N.t.q3PkLy),
            children: (e) =>
                (0, i.jsx)(d.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.amountDisclaimer,
                    ...e
                })
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [N.intl.string(N.t['/MWnxs']), ' ', e]
        });
    },
    A = () => {
        let e = (0, i.jsx)(d.ua7, {
            text: N.intl.string(N.t.cIGvZG),
            children: (e) =>
                (0, i.jsx)(d.d3s, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.statusDisclaimer,
                    ...e
                })
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [N.intl.string(N.t.oypxx8), ' ', e]
        });
    },
    L = [
        {
            key: 'dropdown',
            cellClassName: j.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: r } = t,
                    l = n.has(e.key);
                return (0, i.jsx)(d.P3F, {
                    className: s()(j.cell, j.toggleExpandCell),
                    onClick: () => r(e.key),
                    children: (0, i.jsx)(d.Fbu, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(j.caretIcon, { [j.caretDownIcon]: l })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: j.periodColumn,
            renderHeader: () => N.intl.string(N.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    r = [(0, i.jsx)(S, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) r.push((0, i.jsx)(R, { listingId: t }, t));
                return r;
            }
        },
        {
            key: 'amount',
            cellClassName: s()(j.amountColumn, j.cellAlignRight),
            renderHeader: () => (0, i.jsx)(y, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    r = [(0, i.jsx)(b, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        r.push((0, i.jsx)(b, { children: null == n ? void 0 : n.amount }, t));
                    }
                return r;
            }
        },
        {
            key: 'status',
            cellClassName: s()(j.statusColumn, j.cellAlignRight),
            renderHeader: () => (0, i.jsx)(A, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: r, periodEndDate: l } = (0, m.j0)(e);
                return (0, i.jsx)(T, { children: I(t, n, r, l) });
            }
        }
    ],
    D = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, l] = r.useState(new Set());
        return (0, i.jsx)('div', {
            className: j.tableContainer,
            children: (0, i.jsx)(u.Z, {
                columns: L,
                data: t,
                className: j.table,
                rowClassName: j.row,
                headerClassName: j.header,
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
