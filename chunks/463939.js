n.d(t, { Z: () => S });
var r,
    i,
    l = n(54381),
    a = n(473749),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(28664),
    g = n(481060),
    m = n(264451),
    p = n(759178),
    f = n(462087),
    h = n(685201),
    b = n(766434),
    x = n(755930),
    j = n(334820),
    _ = n(198139),
    v = n(388032),
    O = n(744277);
function C(e) {
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
        color: "interactive-text-active",
        children: d()(t).utc().format("MMMM YYYY"),
    });
};
function N(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: i, periodEndDate: a } = (0, b.j0)(t),
        s = null != a ? d()(a).add(15, "days").toISOString() : void 0,
        o = (0, m.Zo)(s, "MMM D");
    switch (n) {
        case _.x_.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != o ? v.intl.formatToPlainString(v.t.I6YOjS, { payoutDate: o }) : v.intl.string(v.t.G5ATX6),
                    (0, l.jsx)(f.Z, { className: O.statusScheduledIcon }),
                ],
            });
        case _.x_.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    v.intl.string(v.t["0SrNPx"]),
                    (0, l.jsx)(g.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: O.statusErrorIcon,
                    }),
                ],
            });
        case _.x_.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(_.XL.PAYOUT_SEIZED)) === !0)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        v.intl.string(v.t["0SrNPx"]),
                        (0, l.jsx)(g.k$p, {
                            size: "md",
                            color: "currentColor",
                            className: O.statusErrorIcon,
                        }),
                    ],
                });
            return (0, l.jsxs)(l.Fragment, {
                children: [v.intl.string(v.t.OtZ5kz), (0, l.jsx)(h.Z, { className: O.statusDeferredIcon })],
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
                    null != o ? v.intl.formatToPlainString(v.t.I6YOjS, { payoutDate: o }) : v.intl.string(v.t.ubdQTt),
                    (0, l.jsx)(f.Z, { className: O.statusScheduledIcon }),
                ],
            });
        case _.jw.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    v.intl.string(v.t.eoSslJ),
                    (0, l.jsx)(g.owK, {
                        size: "md",
                        color: "currentColor",
                        className: O.statusPaidIcon,
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
                        className: O.statusErrorIcon,
                    }),
                ],
            });
    }
    return null;
}
let E = (0, x.i$)({
        key: "AMOUNT ",
        cellClassName: O.amountColumn,
        renderHeader() {
            let e = (0, l.jsx)(u.u, {
                text: v.intl.string(v.t.q3PkL5),
                children: (0, l.jsx)(g.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: O.amountDisclaimer,
                }),
            });
            return (0, l.jsxs)(x.qN, {
                children: [v.intl.string(v.t.VodAGZ), e],
            });
        },
        getAmount: (e) => e.amount,
    }),
    I = (0, j.rM)(
        [
            (0, j.Fd)({
                key: "PERIOD",
                cellClassName: O.periodColumn,
                renderHeader: () => (0, l.jsx)(x.qN, { children: v.intl.string(v.t.fThnXa) }),
                renderContent: (e) => (0, l.jsx)(y, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    o()(null != t, "CellProps should always be provided");
                    let { ListingIdLabel: n } = t;
                    return (0, l.jsx)(n, { listingId: e.listingId });
                },
            }),
            (0, j.Fd)(
                ((r = C({}, E)),
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
            (0, x.wy)({
                key: "STATUS ",
                cellClassName: O.statusColumn,
                renderHeader() {
                    let e = (0, l.jsx)(u.u, {
                        text: v.intl.string(v.t.cIGvZI),
                        children: (0, l.jsx)(g.d3s, {
                            size: "xs",
                            color: "currentColor",
                            className: O.statusDisclaimer,
                        }),
                    });
                    return (0, l.jsxs)(x.qN, {
                        children: [v.intl.string(v.t.oypxxw), e],
                    });
                },
                renderContent: (e) =>
                    (0, l.jsx)(x.bL, {
                        className: O.statusCell,
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
        s = a.useMemo(() => C({ ListingIdLabel: t }, r), [r, t]);
    return (0, l.jsx)(x.ZP, {
        columns: I,
        data: i,
        cellProps: s,
    });
}
