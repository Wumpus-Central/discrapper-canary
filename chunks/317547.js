n.d(t, { Ay: () => w, Kh: () => R, MD: () => G, fh: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(989349),
    o = n.n(a),
    d = n(311907),
    c = n(990078),
    u = n(285796),
    m = n(628284),
    g = n(950305),
    h = n(885574),
    x = n(939249),
    _ = n(320448),
    p = n(596719),
    A = n(105917),
    E = n(580630),
    f = n(636194),
    j = n(971630),
    N = n(942117),
    I = n(487552),
    C = n(311237),
    b = n(652215),
    v = n(311750),
    S = n(985018),
    T = n(957112);
let y = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: r()(T.Hn, n), children: t });
    },
    R = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("div", { className: T.Hn, children: (0, E.$g)(t ?? 0, b.Yri.USD) });
    },
    L = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(y, { className: T.fo, children: null != t ? t : "-" });
    },
    D = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(y, { className: T.wJ, children: o()(t).utc().format("MMMM YYYY") });
    },
    O = (e) => {
        let { listingId: t } = e,
            n = (0, d.bG)([f.A], () => f.A.getSubscriptionListing(t)),
            l = n?.name ?? `[${S.intl.string(S.t["4tEmXR"])}]`;
        return (0, i.jsx)(y, { children: l });
    },
    G = (e) => {
        let { children: t } = e;
        return (0, i.jsxs)(y, {
            className: T.u4,
            children: [
                t ?? "-",
                " ",
                (0, i.jsx)(g.n, { size: "md", color: "currentColor", className: T.BK, "aria-hidden": !0 }),
            ],
        });
    },
    M = () => {
        let e = (0, i.jsx)(c.m, {
            text: S.intl.string(S.t.q3PkL5),
            children: (0, i.jsx)(h.m, { size: "xs", color: "currentColor", className: T.EU }),
        });
        return (0, i.jsxs)(i.Fragment, { children: [S.intl.string(S.t["/MWnxs"]), " ", e] });
    },
    k = () => {
        let e = (0, i.jsx)(c.m, {
            text: S.intl.string(S.t.cIGvZI),
            children: (0, i.jsx)(h.m, { size: "xs", color: "currentColor", className: T.Cg }),
        });
        return (0, i.jsxs)(i.Fragment, { children: [S.intl.string(S.t.oypxxw), " ", e] });
    },
    U = [
        {
            key: "dropdown",
            cellClassName: T.pR,
            renderHeader: () => null,
            render(e, t) {
                let { expandedRows: n, onToggleExpandRow: l } = t,
                    s = n.has(e.key);
                return (0, i.jsx)(x.D, {
                    className: r()(T.Hn, T.nn),
                    onClick: () => l(e.key),
                    children: (0, i.jsx)(_._, {
                        size: "md",
                        color: "currentColor",
                        className: r()(T.Rq, { [T.jH]: s }),
                    }),
                });
            },
        },
        {
            key: "period",
            cellClassName: T.Ii,
            renderHeader: () => S.intl.string(S.t.fThnXa),
            render(e, t) {
                let { expandedRows: n } = t,
                    l = [(0, i.jsx)(D, { children: e.periodStartingAt }, e.key)];
                if (n.has(e.key)) for (let t in e.ppgs) l.push((0, i.jsx)(O, { listingId: t }, t));
                return l;
            },
        },
        {
            key: "amount",
            cellClassName: r()(T.Fh, T.WI),
            renderHeader: () => (0, i.jsx)(M, {}),
            render(e, t) {
                let { expandedRows: n } = t,
                    l = [(0, i.jsx)(R, { children: e.amount }, e.key)];
                if (n.has(e.key))
                    for (let t in e.ppgs) {
                        let n = e.ppgs[t];
                        l.push((0, i.jsx)(R, { children: n?.amount }, t));
                    }
                return l;
            },
        },
        {
            key: "status",
            cellClassName: r()(T.xG, T.WI),
            renderHeader: () => (0, i.jsx)(k, {}),
            render(e) {
                let { ppgStatus: t, payoutStatus: n, ppgDeferralReasons: l, periodEndDate: s } = (0, A.Rs)(e);
                return (0, i.jsx)(L, {
                    children: ((e, t, n, l) => {
                        let s = null != l ? o()(l).add(15, "days").toISOString() : void 0,
                            r = (0, j.T4)(s, "MMM D");
                        switch (e) {
                            case v.U1.OPEN:
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != r
                                            ? S.intl.formatToPlainString(S.t.I6YOjS, { payoutDate: r })
                                            : S.intl.string(S.t.G5ATX6),
                                        (0, i.jsx)(I.A, { className: T.$A }),
                                    ],
                                });
                            case v.U1.CANCELED:
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        S.intl.string(S.t["0SrNPx"]),
                                        (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: T.u5 }),
                                    ],
                                });
                            case v.U1.PAYOUT_DEFERRED:
                                if (n?.includes(v.MC.PAYOUT_SEIZED) === !0)
                                    return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            S.intl.string(S.t["0SrNPx"]),
                                            (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: T.u5 }),
                                        ],
                                    });
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [S.intl.string(S.t.OtZ5kz), (0, i.jsx)(C.A, { className: T.tK })],
                                });
                        }
                        switch (t) {
                            case v.bp.MANUAL:
                            case v.bp.OPEN:
                            case v.bp.PENDING:
                            case v.bp.PROCESSING:
                            case v.bp.SUBMITTED:
                            case v.bp.PENDING_FUNDS:
                            case v.bp.CANCELED:
                            case v.bp.ERROR:
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != r
                                            ? S.intl.formatToPlainString(S.t.I6YOjS, { payoutDate: r })
                                            : S.intl.string(S.t.ubdQTt),
                                        (0, i.jsx)(I.A, { className: T.$A }),
                                    ],
                                });
                            case v.bp.PAID:
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        S.intl.string(S.t.eoSslJ),
                                        (0, i.jsx)(m.y, { size: "md", color: "currentColor", className: T.Ql }),
                                    ],
                                });
                            case v.bp.DEFERRED:
                            case v.bp.DEFERRED_INTERNAL:
                            case v.bp.REJECTED:
                            case v.bp.RISK_REVIEW:
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        N.A.getStatusErrorText(t),
                                        (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: T.u5 }),
                                    ],
                                });
                        }
                        return null;
                    })(t, n, l, s),
                });
            },
        },
    ],
    w = (e) => {
        let { payoutsByPeriod: t } = e,
            [n, s] = l.useState(new Set());
        return (0, i.jsx)("div", {
            className: T.CZ,
            children: (0, i.jsx)(p.A, {
                columns: U,
                data: t,
                className: T.tp,
                rowClassName: T.nM,
                headerClassName: T.wx,
                cellProps: {
                    onToggleExpandRow: (e) => {
                        s((t) => {
                            let n = new Set(t);
                            return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                    },
                    expandedRows: n,
                },
            }),
        });
    };
