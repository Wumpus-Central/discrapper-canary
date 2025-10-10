n.d(t, { Z: () => S });
var r,
    i,
    l = n(951288),
    s = n(647438),
    a = n(512722),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(28664),
    g = n(481060),
    m = n(264451),
    p = n(759178),
    f = n(462087),
    h = n(685201),
    x = n(766434),
    b = n(755930),
    j = n(334820),
    _ = n(198139),
    v = n(388032),
    C = n(744277);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let y = (e) => {
    let { dateUtc: t } = e;
    return (0, l.jsx)(g.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        children: d()(t).utc().format("MMMM YYYY"),
    });
};
function N(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: i, periodEndDate: s } = (0, x.j0)(t),
        a = null != s ? d()(s).add(15, "days").toISOString() : void 0,
        o = (0, m.Zo)(a, "MMM D");
    switch (n) {
        case _.x_.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != o ? v.intl.formatToPlainString(v.t.I6YOjY, { payoutDate: o }) : v.intl.string(v.t.G5ATX1),
                    (0, l.jsx)(f.Z, { className: C.statusScheduledIcon }),
                ],
            });
        case _.x_.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    v.intl.string(v.t["0SrNPz"]),
                    (0, l.jsx)(g.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: C.statusErrorIcon,
                    }),
                ],
            });
        case _.x_.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(_.XL.PAYOUT_SEIZED)) === !0)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        v.intl.string(v.t["0SrNPz"]),
                        (0, l.jsx)(g.k$p, {
                            size: "md",
                            color: "currentColor",
                            className: C.statusErrorIcon,
                        }),
                    ],
                });
            return (0, l.jsxs)(l.Fragment, {
                children: [v.intl.string(v.t.OtZ5k5), (0, l.jsx)(h.Z, { className: C.statusDeferredIcon })],
            });
    }
    switch (r) {
        case _.jw.MANUAL:
        case _.jw.OPEN:
        case _.jw.PENDING:
        case _.jw.PROCESSING:
        case _.jw.SUBMITTED:
        case _.jw.PENDING_FUNDS:
        case _.jw.CANCELED:
        case _.jw.ERROR:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != o ? v.intl.formatToPlainString(v.t.I6YOjY, { payoutDate: o }) : v.intl.string(v.t.ubdQTk),
                    (0, l.jsx)(f.Z, { className: C.statusScheduledIcon }),
                ],
            });
        case _.jw.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    v.intl.string(v.t.eoSslJ),
                    (0, l.jsx)(g.owK, {
                        size: "md",
                        color: "currentColor",
                        className: C.statusPaidIcon,
                    }),
                ],
            });
        case _.jw.DEFERRED:
        case _.jw.DEFERRED_INTERNAL:
        case _.jw.REJECTED:
        case _.jw.RISK_REVIEW:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    p.Z.getStatusErrorText(r),
                    (0, l.jsx)(g.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: C.statusErrorIcon,
                    }),
                ],
            });
    }
    return null;
}
let E = (0, b.i$)({
        key: "AMOUNT ",
        cellClassName: C.amountColumn,
        renderHeader() {
            let e = (0, l.jsx)(u.u, {
                text: v.intl.string(v.t.q3PkLy),
                children: (0, l.jsx)(g.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: C.amountDisclaimer,
                }),
            });
            return (0, l.jsxs)(b.qN, {
                children: [v.intl.string(v.t.VodAGR), e],
            });
        },
        getAmount: (e) => e.amount,
    }),
    I = (0, j.rM)(
        [
            (0, j.Fd)({
                key: "PERIOD",
                cellClassName: C.periodColumn,
                renderHeader: () => (0, l.jsx)(b.qN, { children: v.intl.string(v.t.fThnXV) }),
                renderContent: (e) => (0, l.jsx)(y, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    o()(null != t, "CellProps should always be provided");
                    let { ListingIdLabel: n } = t;
                    return (0, l.jsx)(n, { listingId: e.listingId });
                },
            }),
            (0, j.Fd)(
                ((r = O({}, E)),
                (i = i =
                    {
                        renderContent: E.render,
                        renderExpandedContent: (e, t) => E.render(e, t),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r),
            ),
            (0, b.wy)({
                key: "STATUS ",
                cellClassName: C.statusColumn,
                renderHeader() {
                    let e = (0, l.jsx)(u.u, {
                        text: v.intl.string(v.t.cIGvZG),
                        children: (0, l.jsx)(g.d3s, {
                            size: "xs",
                            color: "currentColor",
                            className: C.statusDisclaimer,
                        }),
                    });
                    return (0, l.jsxs)(b.qN, {
                        children: [v.intl.string(v.t.oypxx8), e],
                    });
                },
                renderContent: (e) =>
                    (0, l.jsx)(b.bL, {
                        className: C.statusCell,
                        children: (0, l.jsx)(N, { item: e }),
                    }),
            }),
        ],
        { expandableToggleColumnKey: "DROPDOWN" },
    );
function S(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: r, data: i } = (0, j.GN)(n, {
            generateExpandedRows: (e) =>
                Object.keys(e.ppgs).map((t) => {
                    var n;
                    return {
                        key: e.key + t,
                        listingId: t,
                        amount: null == (n = e.ppgs[t]) ? void 0 : n.amount,
                    };
                }),
        }),
        a = s.useMemo(() => O({ ListingIdLabel: t }, r), [r, t]);
    return (0, l.jsx)(b.ZP, {
        columns: I,
        data: i,
        cellProps: a,
    });
}
