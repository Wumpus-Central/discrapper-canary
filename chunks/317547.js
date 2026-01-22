n.d(t, {
    Ay: () => R,
    Kh: () => N,
    MD: () => I,
    fh: () => E,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    c = n.n(a),
    o = n(311907),
    d = n(990078),
    u = n(397927),
    f = n(596719),
    g = n(105917),
    b = n(580630),
    m = n(636194),
    p = n(971630),
    x = n(942117),
    h = n(487552),
    j = n(311237),
    O = n(652215),
    y = n(311750),
    v = n(985018),
    A = n(921503);
let E = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: s()(A.Hn, n),
            children: t,
        });
    },
    N = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: A.Hn,
            children: (0, b.$g)(null != t ? t : 0, O.Yri.USD),
        });
    },
    _ = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(E, {
            className: A.fo,
            children: null != t ? t : "-",
        });
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(E, {
            className: A.wJ,
            children: c()(t).utc().format("MMMM YYYY"),
        });
    },
    T = (e) => {
        var t;
        let { listingId: n } = e,
            i = (0, o.bG)([m.A], () => m.A.getSubscriptionListing(n)),
            l = null != (t = null == i ? void 0 : i.name) ? t : "[".concat(v.intl.string(v.t["4tEmXR"]), "]");
        return (0, r.jsx)(E, {
            children: l,
        });
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)(E, {
            className: A.u4,
            children: [
                null != t ? t : "-",
                " ",
                (0, r.jsx)(u.nys, {
                    size: "md",
                    color: "currentColor",
                    className: A.BK,
                    "aria-hidden": !0,
                }),
            ],
        });
    },
    C = () => {
        let e = (0, r.jsx)(d.m, {
            text: v.intl.string(v.t.q3PkL5),
            children: (0, r.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: A.EU,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t["/MWnxs"]), " ", e],
        });
    },
    P = () => {
        let e = (0, r.jsx)(d.m, {
            text: v.intl.string(v.t.cIGvZI),
            children: (0, r.jsx)(u.mir, {
                size: "xs",
                color: "currentColor",
                className: A.Cg,
            }),
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [v.intl.string(v.t.oypxxw), " ", e],
        });
    },
    w = [
        {
            key: "dropdown",
            cellClassName: A.pR,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: i } = t,
                    l = n.has(e.key);
                return (0, r.jsx)(u.DUT, {
                    className: s()(A.Hn, A.nn),
                    onClick: () => i(e.key),
                    children: (0, r.jsx)(u._BQ, {
                        size: "md",
                        color: "currentColor",
                        className: s()(A.Rq, {
                            [A.jH]: l,
                        }),
                    }),
                });
            },
        },
        {
            key: "period",
            cellClassName: A.Ii,
            renderHeader: () => v.intl.string(v.t.fThnXa),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [
                        (0, r.jsx)(
                            S,
                            {
                                children: e.periodStartingAt,
                            },
                            e.key,
                        ),
                    ];
                if (n.has(e.key))
                    for (let t in e.ppgs)
                        i.push(
                            (0, r.jsx)(
                                T,
                                {
                                    listingId: t,
                                },
                                t,
                            ),
                        );
                return i;
            },
        },
        {
            key: "amount",
            cellClassName: s()(A.Fh, A.WI),
            renderHeader: () => (0, r.jsx)(C, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    i = [
                        (0, r.jsx)(
                            N,
                            {
                                children: e.amount,
                            },
                            e.key,
                        ),
                    ];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        i.push(
                            (0, r.jsx)(
                                N,
                                {
                                    children: null == n ? void 0 : n.amount,
                                },
                                t,
                            ),
                        );
                    }
                return i;
            },
        },
        {
            key: "status",
            cellClassName: s()(A.xG, A.WI),
            renderHeader: () => (0, r.jsx)(P, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: i, periodEndDate: l } = (0, g.Rs)(e);
                return (0, r.jsx)(_, {
                    children: ((e, t, n, i) => {
                        let l = null != i ? c()(i).add(15, "days").toISOString() : void 0,
                            s = (0, p.T4)(l, "MMM D");
                        switch (e) {
                            case y.U1.OPEN:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != s
                                            ? v.intl.formatToPlainString(v.t.I6YOjS, {
                                                  payoutDate: s,
                                              })
                                            : v.intl.string(v.t.G5ATX6),
                                        (0, r.jsx)(h.A, {
                                            className: A.$A,
                                        }),
                                    ],
                                });
                            case y.U1.CANCELED:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        v.intl.string(v.t["0SrNPx"]),
                                        (0, r.jsx)(u.aXh, {
                                            size: "md",
                                            color: "currentColor",
                                            className: A.u5,
                                        }),
                                    ],
                                });
                            case y.U1.PAYOUT_DEFERRED:
                                if ((null == n ? void 0 : n.includes(y.MC.PAYOUT_SEIZED)) === !0)
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            v.intl.string(v.t["0SrNPx"]),
                                            (0, r.jsx)(u.aXh, {
                                                size: "md",
                                                color: "currentColor",
                                                className: A.u5,
                                            }),
                                        ],
                                    });
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        v.intl.string(v.t.OtZ5kz),
                                        (0, r.jsx)(j.A, {
                                            className: A.tK,
                                        }),
                                    ],
                                });
                        }
                        switch (t) {
                            case y.bp.MANUAL:
                            case y.bp.OPEN:
                            case y.bp.PENDING:
                            case y.bp.PROCESSING:
                            case y.bp.SUBMITTED:
                            case y.bp.PENDING_FUNDS:
                            case y.bp.CANCELED:
                            case y.bp.ERROR:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != s
                                            ? v.intl.formatToPlainString(v.t.I6YOjS, {
                                                  payoutDate: s,
                                              })
                                            : v.intl.string(v.t.ubdQTt),
                                        (0, r.jsx)(h.A, {
                                            className: A.$A,
                                        }),
                                    ],
                                });
                            case y.bp.PAID:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        v.intl.string(v.t.eoSslJ),
                                        (0, r.jsx)(u.yr3, {
                                            size: "md",
                                            color: "currentColor",
                                            className: A.Ql,
                                        }),
                                    ],
                                });
                            case y.bp.DEFERRED:
                            case y.bp.DEFERRED_INTERNAL:
                            case y.bp.REJECTED:
                            case y.bp.RISK_REVIEW:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        x.A.getStatusErrorText(t),
                                        (0, r.jsx)(u.aXh, {
                                            size: "md",
                                            color: "currentColor",
                                            className: A.u5,
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
            className: A.CZ,
            children: (0, r.jsx)(f.A, {
                columns: w,
                data: t,
                className: A.tp,
                rowClassName: A.nM,
                headerClassName: A.wx,
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
