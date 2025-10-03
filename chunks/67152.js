n.d(t, {
    ZP: () => Z,
    av: () => T,
    bL: () => y,
    kA: () => N,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(167533),
    g = n(766434),
    p = n(937615),
    f = n(289393),
    h = n(264451),
    x = n(759178),
    b = n(462087),
    j = n(685201),
    _ = n(981631),
    v = n(198139),
    C = n(388032),
    O = n(698128);
let y = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: s()(O.cell, n),
            children: t,
        });
    },
    N = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: O.cell,
            children: (0, p.T4)(null != t ? t : 0, _.pKx.USD),
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: O.statusCell,
            children: null != t ? t : "-",
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y, {
            className: O.periodCell,
            children: o()(t).utc().format("MMMM YYYY"),
        });
    },
    S = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(n)),
            l = null != (t = null == i ? void 0 : i.name) ? t : "[".concat(C.intl.string(C.t["4tEmXV"]), "]");
        return (0, r.jsx)(y, { children: l });
    },
    T = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(y, {
            className: O.subscribersCell,
            children: [
                null != t ? t : "-",
                " ",
                (0, r.jsx)(u.tBG, {
                    size: "md",
                    color: "currentColor",
                    className: O.subscribersIcon,
                    "aria-hidden": !0,
                }),
            ],
        });
    },
    P = () => {
        let e = (0, r.jsx)(d.u, {
            text: C.intl.string(C.t.q3PkLy),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: O.amountDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [C.intl.string(C.t["/MWnxs"]), " ", e],
        });
    },
    w = () => {
        let e = (0, r.jsx)(d.u, {
            text: C.intl.string(C.t.cIGvZG),
            children: (0, r.jsx)(u.d3s, {
                size: "xs",
                color: "currentColor",
                className: O.statusDisclaimer,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [C.intl.string(C.t.oypxx8), " ", e],
        });
    },
    R = [
        {
            key: "dropdown",
            cellClassName: O.toggleExpandColumn,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    l = n.has(e.key);
                return (0, r.jsx)(u.P3F, {
                    className: s()(O.cell, O.toggleExpandCell),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(u.Fbu, {
                        size: "md",
                        color: "currentColor",
                        className: s()(O.caretIcon, { [O.caretDownIcon]: l }),
                    }),
                });
            },
        },
        {
            key: "period",
            cellClassName: O.periodColumn,
            renderHeader: () => C.intl.string(C.t.fThnXV),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [(0, r.jsx)(I, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) i.push((0, r.jsx)(S, { listingId: t }, t));
                return i;
            },
        },
        {
            key: "amount",
            cellClassName: s()(O.amountColumn, O.cellAlignRight),
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
            cellClassName: s()(O.statusColumn, O.cellAlignRight),
            renderHeader: () => (0, r.jsx)(w, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: l } = (0, g.j0)(e);
                return (0, r.jsx)(E, {
                    children: ((e, t, n, i) => {
                        let l = null != i ? o()(i).add(15, "days").toISOString() : void 0,
                            s = (0, h.Zo)(l, "MMM D");
                        switch (e) {
                            case v.x_.OPEN:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != s
                                            ? C.intl.formatToPlainString(C.t.I6YOjY, { payoutDate: s })
                                            : C.intl.string(C.t.G5ATX1),
                                        (0, r.jsx)(b.Z, { className: O.statusScheduledIcon }),
                                    ],
                                });
                            case v.x_.CANCELED:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t["0SrNPz"]),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: O.statusErrorIcon,
                                        }),
                                    ],
                                });
                            case v.x_.PAYOUT_DEFERRED:
                                if ((null == n ? void 0 : n.includes(v.XL.PAYOUT_SEIZED)) === !0)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            C.intl.string(C.t["0SrNPz"]),
                                            (0, r.jsx)(u.k$p, {
                                                size: "md",
                                                color: "currentColor",
                                                className: O.statusErrorIcon,
                                            }),
                                        ],
                                    });
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t.OtZ5k5),
                                        (0, r.jsx)(j.Z, { className: O.statusDeferredIcon }),
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
                                        null != s
                                            ? C.intl.formatToPlainString(C.t.I6YOjY, { payoutDate: s })
                                            : C.intl.string(C.t.ubdQTk),
                                        (0, r.jsx)(b.Z, { className: O.statusScheduledIcon }),
                                    ],
                                });
                            case v.jw.PAID:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        C.intl.string(C.t.eoSslJ),
                                        (0, r.jsx)(u.owK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: O.statusPaidIcon,
                                        }),
                                    ],
                                });
                            case v.jw.DEFERRED:
                            case v.jw.DEFERRED_INTERNAL:
                            case v.jw.REJECTED:
                            case v.jw.RISK_REVIEW:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        x.Z.getStatusErrorText(t),
                                        (0, r.jsx)(u.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: O.statusErrorIcon,
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
    Z = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, l] = i.useState(new Set());
        return (0, r.jsx)("div", {
            className: O.tableContainer,
            children: (0, r.jsx)(m.Z, {
                columns: R,
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
                    expandedRows: n,
                },
            }),
        });
    };
