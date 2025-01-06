n.d(t, {
    av: function () {
        return Z;
    },
    bL: function () {
        return S;
    },
    kA: function () {
        return E;
    }
}),
    n(653041),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(481060),
    h = n(167533),
    g = n(766434),
    x = n(937615),
    p = n(289393),
    f = n(264451),
    C = n(759178),
    v = n(462087),
    _ = n(685201),
    I = n(981631),
    N = n(198139),
    T = n(388032),
    j = n(641991);
((r = i || (i = {})).DROPDOWN = 'dropdown'), (r.PERIOD = 'period'), (r.SUBSCRIBERS = 'subscribers'), (r.AMOUNT = 'amount'), (r.STATUS = 'status');
let b = (e, t, n, i) => {
        let r = null != i ? d()(i).add(15, 'days').toISOString() : void 0,
            a = (0, f.Zo)(r, 'MMM D');
        switch (e) {
            case N.x_.OPEN:
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != a ? T.intl.formatToPlainString(T.t.I6YOjY, { payoutDate: a }) : T.intl.string(T.t.G5ATX1), (0, l.jsx)(v.Z, { className: j.statusScheduledIcon })]
                });
            case N.x_.CANCELED:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        T.intl.string(T.t['0SrNPz']),
                        (0, l.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
            case N.x_.PAYOUT_DEFERRED:
                if ((null == n ? void 0 : n.includes(N.XL.PAYOUT_SEIZED)) === !0)
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            T.intl.string(T.t['0SrNPz']),
                            (0, l.jsx)(m.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.statusErrorIcon
                            })
                        ]
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [T.intl.string(T.t.OtZ5k5), (0, l.jsx)(_.Z, { className: j.statusDeferredIcon })]
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
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != a ? T.intl.formatToPlainString(T.t.I6YOjY, { payoutDate: a }) : T.intl.string(T.t.ubdQTk), (0, l.jsx)(v.Z, { className: j.statusScheduledIcon })]
                });
            case N.jw.PAID:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        T.intl.string(T.t.eoSslJ),
                        (0, l.jsx)(m.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusPaidIcon
                        })
                    ]
                });
            case N.jw.DEFERRED:
            case N.jw.DEFERRED_INTERNAL:
            case N.jw.REJECTED:
            case N.jw.RISK_REVIEW:
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        C.Z.getStatusErrorText(t),
                        (0, l.jsx)(m.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.statusErrorIcon
                        })
                    ]
                });
        }
        return null;
    },
    S = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)('div', {
            className: o()(j.cell, n),
            children: t
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, l.jsx)('div', {
            className: j.cell,
            children: (0, x.T4)(null != t ? t : 0, I.pKx.USD)
        });
    },
    R = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(S, {
            className: j.statusCell,
            children: null != t ? t : '-'
        });
    },
    y = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(S, {
            className: j.periodCell,
            children: d()(t).utc().format('MMMM YYYY')
        });
    },
    A = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, u.e7)([p.Z], () => p.Z.getSubscriptionListing(n)),
            r = null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : '['.concat(T.intl.string(T.t['4tEmXV']), ']');
        return (0, l.jsx)(S, { children: r });
    },
    Z = (e) => {
        let { children: t } = e;
        return (0, l.jsxs)(S, {
            className: j.subscribersCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, l.jsx)(m.UserIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.subscribersIcon,
                    'aria-hidden': !0
                })
            ]
        });
    },
    L = () => {
        let e = (0, l.jsx)(m.Tooltip, {
            text: T.intl.string(T.t.q3PkLy),
            children: (e) =>
                (0, l.jsx)(m.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.amountDisclaimer,
                    ...e
                })
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [T.intl.string(T.t['/MWnxs']), ' ', e]
        });
    },
    D = () => {
        let e = (0, l.jsx)(m.Tooltip, {
            text: T.intl.string(T.t.cIGvZG),
            children: (e) =>
                (0, l.jsx)(m.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.statusDisclaimer,
                    ...e
                })
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [T.intl.string(T.t.oypxx8), ' ', e]
        });
    },
    O = [
        {
            key: 'dropdown',
            cellClassName: j.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    r = n.has(e.key);
                return (0, l.jsx)(m.Clickable, {
                    className: o()(j.cell, j.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, l.jsx)(m.ChevronSmallRightIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(j.caretIcon, { [j.caretDownIcon]: r })
                    })
                });
            }
        },
        {
            key: 'period',
            cellClassName: j.periodColumn,
            renderHeader: () => T.intl.string(T.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, l.jsx)(y, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, l.jsx)(A, { listingId: t }, t));
                return i;
            }
        },
        {
            key: 'amount',
            cellClassName: o()(j.amountColumn, j.cellAlignRight),
            renderHeader: () => (0, l.jsx)(L, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, l.jsx)(E, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push((0, l.jsx)(E, { children: null == n ? void 0 : n.amount }, t));
                    }
                return i;
            }
        },
        {
            key: 'status',
            cellClassName: o()(j.statusColumn, j.cellAlignRight),
            renderHeader: () => (0, l.jsx)(D, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: r } = (0, g.j0)(e);
                return (0, l.jsx)(R, { children: b(t, n, i, r) });
            }
        }
    ];
t.ZP = (e) => {
    let { payoutsByPeriod: t } = e,
        [n, i] = a.useState(new Set());
    return (0, l.jsx)('div', {
        className: j.tableContainer,
        children: (0, l.jsx)(h.Z, {
            columns: O,
            data: t,
            className: j.table,
            rowClassName: j.row,
            headerClassName: j.header,
            cellProps: {
                onToggleExpandRow: (e) => {
                    i((t) => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
                },
                expandedRows: n
            }
        })
    });
};
