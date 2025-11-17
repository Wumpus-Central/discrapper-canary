n.d(t, {
    ZP: () => R,
    av: () => T,
    bL: () => y,
    kA: () => N,
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
    m = n(766434),
    p = n(937615),
    f = n(289393),
    h = n(264451),
    b = n(759178),
    x = n(462087),
    j = n(685201),
    _ = n(981631),
    v = n(198139),
    O = n(388032),
    C = n(698128);
let y = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: a()(C.cell, n),
            children: t,
        });
    },
    N = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: C.cell,
            children: (0, p.T4)(null != t ? t : 0, _.pKx.USD),
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: C.statusCell,
            children: null != t ? t : "-",
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: C.periodCell,
            children: o()(t).utc().format("MMMM YYYY"),
        });
    },
    S = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(n)),
            l = null != (t = null == i ? void 0 : i.name) ? t : "[".concat(O.intl.string(O.t["4tEmXR"]), "]");
        return (0, r.jsx)(y, { children: l });
    },
    T = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(y, {
            className: C.subscribersCell,
            children: [
                null != t ? t : "-",
                " ",
                (0, r.jsx)(u.tBG, {
                    size: "md",
                    color: "currentColor",
                    className: C.subscribersIcon,
                    "aria-hidden": !0,
                }),
            ],
        });
    },
    P = () => {
        let e = (0, r.jsx)(d.u, {
            text: O.intl.string(O.t.q3PkL5),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: C.amountDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [O.intl.string(O.t["/MWnxs"]), " ", e],
        });
    },
    w = () => {
        let e = (0, r.jsx)(d.u, {
            text: O.intl.string(O.t.cIGvZI),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: C.statusDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [O.intl.string(O.t.oypxxw), " ", e],
        });
    },
    Z = [
        {
            key: "dropdown",
            cellClassName: C.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    l = n.has(e.key);
                return (0, r.jsx)(u.P3F, {
                    className: a()(C.cell, C.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(u.Fbu, {
                        size: "md",
                        color: "currentColor",
                        className: a()(C.caretIcon, { [C.caretDownIcon]: l }),
                    }),
                });
            },
        },
        {
            key: "period",
            cellClassName: C.periodColumn,
            renderHeader: () => O.intl.string(O.t.fThnXa),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(I, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(S, { listingId: t }, t));
                return i;
            },
        },
        {
            key: "amount",
            cellClassName: a()(C.amountColumn, C.cellAlignRight),
            renderHeader: () => (0, r.jsx)(P, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(N, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push((0, r.jsx)(N, { children: null == n ? void 0 : n.amount }, t));
                    }
                return i;
            },
        },
        {
            key: "status",
            cellClassName: a()(C.statusColumn, C.cellAlignRight),
            renderHeader: () => (0, r.jsx)(w, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: l } = (0, m.j0)(e);
                return (0, r.jsx)(E, {
                    children: ((e, t, n, i) => {
                        let l = null != i ? o()(i).add(15, "days").toISOString() : void 0,
                            a = (0, h.Zo)(l, "MMM D");
                        switch (e) {
                            case v.x_.OPEN:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != a
                                            ? O.intl.formatToPlainString(O.t.I6YOjS, { payoutDate: a })
                                            : O.intl.string(O.t.G5ATX6),
                                        (0, r.jsx)(x.Z, { className: C.statusScheduledIcon }),
                                    ],
                                });
                            case v.x_.CANCELED:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        O.intl.string(O.t["0SrNPx"]),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: C.statusErrorIcon,
                                        }),
                                    ],
                                });
                            case v.x_.PAYOUT_DEFERRED:
                                if ((null == n ? void 0 : n.includes(v.XL.PAYOUT_SEIZED)) === !0)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            O.intl.string(O.t["0SrNPx"]),
                                            (0, r.jsx)(u.k$p, {
                                                size: "md",
                                                color: "currentColor",
                                                className: C.statusErrorIcon,
                                            }),
                                        ],
                                    });
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        O.intl.string(O.t.OtZ5kz),
                                        (0, r.jsx)(j.Z, { className: C.statusDeferredIcon }),
                                    ],
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
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != a
                                            ? O.intl.formatToPlainString(O.t.I6YOjS, { payoutDate: a })
                                            : O.intl.string(O.t.ubdQTt),
                                        (0, r.jsx)(x.Z, { className: C.statusScheduledIcon }),
                                    ],
                                });
                            case v.jw.PAID:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        O.intl.string(O.t.eoSslJ),
                                        (0, r.jsx)(u.owK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: C.statusPaidIcon,
                                        }),
                                    ],
                                });
                            case v.jw.DEFERRED:
                            case v.jw.DEFERRED_INTERNAL:
                            case v.jw.REJECTED:
                            case v.jw.RISK_REVIEW:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        b.Z.getStatusErrorText(t),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: C.statusErrorIcon,
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
            className: C.tableContainer,
            children: (0, r.jsx)(g.Z, {
                columns: Z,
                data: t,
                className: C.table,
                rowClassName: C.row,
                headerClassName: C.header,
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
