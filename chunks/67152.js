n.d(t, {
    ZP: () => R,
    av: () => T,
    bL: () => N,
    kA: () => E,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    g = n(167533),
    f = n(766434),
    m = n(937615),
    b = n(289393),
    p = n(264451),
    h = n(759178),
    x = n(462087),
    j = n(685201),
    v = n(981631),
    O = n(198139),
    C = n(388032),
    y = n(729124);
let N = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(y.cell, n),
            children: t,
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: y.cell,
            children: (0, m.T4)(null != t ? t : 0, v.pKx.USD),
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(N, {
            className: y.statusCell,
            children: null != t ? t : "-",
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(N, {
            className: y.periodCell,
            children: o()(t).utc().format("MMMM YYYY"),
        });
    },
    _ = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([b.Z], () => b.Z.getSubscriptionListing(n)),
            l = null != (t = null == i ? void 0 : i.name) ? t : "[".concat(C.intl.string(C.t["4tEmXR"]), "]");
        return (0, r.jsx)(N, { children: l });
    },
    T = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(N, {
            className: y.subscribersCell,
            children: [
                null != t ? t : "-",
                " ",
                (0, r.jsx)(u.tBG, {
                    size: "md",
                    color: "currentColor",
                    className: y.subscribersIcon,
                    "aria-hidden": !0,
                }),
            ],
        });
    },
    P = () => {
        let e = (0, r.jsx)(d.u, {
            text: C.intl.string(C.t.q3PkL5),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: y.amountDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [C.intl.string(C.t["/MWnxs"]), " ", e],
        });
    },
    w = () => {
        let e = (0, r.jsx)(d.u, {
            text: C.intl.string(C.t.cIGvZI),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: y.statusDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [C.intl.string(C.t.oypxxw), " ", e],
        });
    },
    Z = [
        {
            key: "dropdown",
            cellClassName: y.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    l = n.has(e.key);
                return (0, r.jsx)(u.P3F, {
                    className: a()(y.cell, y.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(u.Fbu, {
                        size: "md",
                        color: "currentColor",
                        className: a()(y.caretIcon, { [y.caretDownIcon]: l }),
                    }),
                });
            },
        },
        {
            key: "period",
            cellClassName: y.periodColumn,
            renderHeader: () => C.intl.string(C.t.fThnXa),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(S, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(_, { listingId: t }, t));
                return i;
            },
        },
        {
            key: "amount",
            cellClassName: a()(y.amountColumn, y.cellAlignRight),
            renderHeader: () => (0, r.jsx)(P, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(E, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push((0, r.jsx)(E, { children: null == n ? void 0 : n.amount }, t));
                    }
                return i;
            },
        },
        {
            key: "status",
            cellClassName: a()(y.statusColumn, y.cellAlignRight),
            renderHeader: () => (0, r.jsx)(w, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: l } = (0, f.j0)(e);
                return (0, r.jsx)(I, {
                    children: ((e, t, n, i) => {
                        let l = null != i ? o()(i).add(15, "days").toISOString() : void 0,
                            a = (0, p.Zo)(l, "MMM D");
                        switch (e) {
                            case O.x_.OPEN:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != a
                                            ? C.intl.formatToPlainString(C.t.I6YOjS, { payoutDate: a })
                                            : C.intl.string(C.t.G5ATX6),
                                        (0, r.jsx)(x.Z, { className: y.statusScheduledIcon }),
                                    ],
                                });
                            case O.x_.CANCELED:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t["0SrNPx"]),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: y.statusErrorIcon,
                                        }),
                                    ],
                                });
                            case O.x_.PAYOUT_DEFERRED:
                                if ((null == n ? void 0 : n.includes(O.XL.PAYOUT_SEIZED)) === !0)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            C.intl.string(C.t["0SrNPx"]),
                                            (0, r.jsx)(u.k$p, {
                                                size: "md",
                                                color: "currentColor",
                                                className: y.statusErrorIcon,
                                            }),
                                        ],
                                    });
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t.OtZ5kz),
                                        (0, r.jsx)(j.Z, { className: y.statusDeferredIcon }),
                                    ],
                                });
                        }
                        switch (t) {
                            case O.jw.MANUAL:
                            case O.jw.OPEN:
                            case O.jw.PENDING:
                            case O.jw.PROCESSING:
                            case O.jw.SUBMITTED:
                            case O.jw.PENDING_FUNDS:
                            case O.jw.CANCELED:
                            case O.jw.ERROR:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != a
                                            ? C.intl.formatToPlainString(C.t.I6YOjS, { payoutDate: a })
                                            : C.intl.string(C.t.ubdQTt),
                                        (0, r.jsx)(x.Z, { className: y.statusScheduledIcon }),
                                    ],
                                });
                            case O.jw.PAID:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t.eoSslJ),
                                        (0, r.jsx)(u.owK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: y.statusPaidIcon,
                                        }),
                                    ],
                                });
                            case O.jw.DEFERRED:
                            case O.jw.DEFERRED_INTERNAL:
                            case O.jw.REJECTED:
                            case O.jw.RISK_REVIEW:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        h.Z.getStatusErrorText(t),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: y.statusErrorIcon,
                                        }),
                                    ],
                                });
                        }
                        return null;
                    })(t, n, i, l),
                });
            },
        },
    ],
    R = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, l] = i.useState(new Set());
        return (0, r.jsx)("div", {
            className: y.tableContainer,
            children: (0, r.jsx)(g.Z, {
                columns: Z,
                data: t,
                className: y.table,
                rowClassName: y.row,
                headerClassName: y.header,
                cellProps: {
                    onToggleExpandRow: (e) => {
                        l((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    expandedRows: n,
                },
            }),
        });
    };
