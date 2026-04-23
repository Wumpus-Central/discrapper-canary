n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(989349),
    o = n.n(a),
    d = n(990078),
    c = n(834730),
    u = n(285796),
    m = n(628284),
    g = n(885574),
    h = n(971630),
    x = n(942117),
    _ = n(487552),
    p = n(311237),
    A = n(105917),
    E = n(242564),
    f = n(476719),
    j = n(311750),
    N = n(985018),
    I = n(739004);
let C = (e) => {
    let { dateUtc: t } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: o()(t).utc().format("MMMM YYYY"),
    });
};
function b(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: l, ppgDeferralReasons: s, periodEndDate: r } = (0, A.Rs)(t),
        a = null != r ? o()(r).add(15, "days").toISOString() : void 0,
        d = (0, h.T4)(a, "MMM D");
    switch (n) {
        case j.U1.OPEN:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != d ? N.intl.formatToPlainString(N.t.I6YOjS, { payoutDate: d }) : N.intl.string(N.t.G5ATX6),
                    (0, i.jsx)(_.A, { className: I.$A }),
                ],
            });
        case j.U1.CANCELED:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    N.intl.string(N.t["0SrNPx"]),
                    (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: I.u5 }),
                ],
            });
        case j.U1.PAYOUT_DEFERRED:
            if (s?.includes(j.MC.PAYOUT_SEIZED) === !0)
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        N.intl.string(N.t["0SrNPx"]),
                        (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: I.u5 }),
                    ],
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [N.intl.string(N.t.OtZ5kz), (0, i.jsx)(p.A, { className: I.tK })],
            });
    }
    switch (l) {
        case j.bp.MANUAL:
        case j.bp.OPEN:
        case j.bp.PENDING:
        case j.bp.PROCESSING:
        case j.bp.SUBMITTED:
        case j.bp.PENDING_FUNDS:
        case j.bp.CANCELED:
        case j.bp.ERROR:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != d ? N.intl.formatToPlainString(N.t.I6YOjS, { payoutDate: d }) : N.intl.string(N.t.ubdQTt),
                    (0, i.jsx)(_.A, { className: I.$A }),
                ],
            });
        case j.bp.PAID:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    N.intl.string(N.t.eoSslJ),
                    (0, i.jsx)(m.y, { size: "md", color: "currentColor", className: I.Ql }),
                ],
            });
        case j.bp.DEFERRED:
        case j.bp.DEFERRED_INTERNAL:
        case j.bp.REJECTED:
        case j.bp.RISK_REVIEW:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    x.A.getStatusErrorText(l),
                    (0, i.jsx)(u.a, { size: "md", color: "currentColor", className: I.u5 }),
                ],
            });
    }
    return null;
}
let v = (0, E.CU)({
        key: "AMOUNT ",
        cellClassName: I.Fh,
        renderHeader() {
            let e = (0, i.jsx)(d.m, {
                text: N.intl.string(N.t.q3PkL5),
                children: (0, i.jsx)(g.m, { size: "xs", color: "currentColor", className: I.EU }),
            });
            return (0, i.jsxs)(E.A3, { children: [N.intl.string(N.t.VodAGZ), e] });
        },
        getAmount: (e) => e.amount,
    }),
    S = (0, f.gE)(
        [
            (0, f.N7)({
                key: "PERIOD",
                cellClassName: I.Ii,
                renderHeader: () => (0, i.jsx)(E.A3, { children: N.intl.string(N.t.fThnXa) }),
                renderContent: (e) => (0, i.jsx)(C, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    r()(null != t, "CellProps should always be provided");
                    let { ListingIdLabel: n } = t;
                    return (0, i.jsx)(n, { listingId: e.listingId });
                },
            }),
            (0, f.N7)({ ...v, renderContent: v.render, renderExpandedContent: (e, t) => v.render(e, t) }),
            (0, E.HA)({
                key: "STATUS ",
                cellClassName: I.xG,
                renderHeader() {
                    let e = (0, i.jsx)(d.m, {
                        text: N.intl.string(N.t.cIGvZI),
                        children: (0, i.jsx)(g.m, { size: "xs", color: "currentColor", className: I.Cg }),
                    });
                    return (0, i.jsxs)(E.A3, { children: [N.intl.string(N.t.oypxxw), e] });
                },
                renderContent: (e) => (0, i.jsx)(E.fh, { className: I.fo, children: (0, i.jsx)(b, { item: e }) }),
            }),
        ],
        { expandableToggleColumnKey: "DROPDOWN" },
    );
function T(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: s, data: r } = (0, f.vL)(n, {
            generateExpandedRows: (e) =>
                Object.keys(e.ppgs).map((t) => ({ key: e.key + t, listingId: t, amount: e.ppgs[t]?.amount })),
        }),
        a = l.useMemo(() => ({ ListingIdLabel: t, ...s }), [s, t]);
    return (0, i.jsx)(E.Ay, { columns: S, data: r, cellProps: a });
}
