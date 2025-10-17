n.d(t, { Z: () => S });
var r,
    i,
    l = n(951288),
    a = n(647438),
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
    v = n(198139),
    _ = n(388032),
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
function E(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: i, periodEndDate: a } = (0, b.j0)(t),
        s = null != a ? d()(a).add(15, "days").toISOString() : void 0,
        o = (0, m.Zo)(s, "MMM D");
    switch (n) {
        case v.x_.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != o ? _.intl.formatToPlainString(_.t.I6YOjY, { payoutDate: o }) : _.intl.string(_.t.G5ATX1),
                    (0, l.jsx)(f.Z, { className: C.statusScheduledIcon }),
                ],
            });
        case v.x_.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    _.intl.string(_.t["0SrNPz"]),
                    (0, l.jsx)(g.k$p, {
                        size: "md",
                        color: "currentColor",
                        className: C.statusErrorIcon,
                    }),
                ],
            });
        case v.x_.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(v.XL.PAYOUT_SEIZED)) === !0)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        _.intl.string(_.t["0SrNPz"]),
                        (0, l.jsx)(g.k$p, {
                            size: "md",
                            color: "currentColor",
                            className: C.statusErrorIcon,
                        }),
                    ],
                });
            return (0, l.jsxs)(l.Fragment, {
                children: [_.intl.string(_.t.OtZ5k5), (0, l.jsx)(h.Z, { className: C.statusDeferredIcon })],
            });
    }
    switch (r) {
        case v.jw.MANUAL:
        case v.jw.OPEN:
        case v.jw.PENDING:
        case v.jw.PROCESSING:
        case v.jw.SUBMITTED:
        case v.jw.PENDING_FUNDS:
        case v.jw.CANCELED:
        case v.jw.ERROR:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != o ? _.intl.formatToPlainString(_.t.I6YOjY, { payoutDate: o }) : _.intl.string(_.t.ubdQTk),
                    (0, l.jsx)(f.Z, { className: C.statusScheduledIcon }),
                ],
            });
        case v.jw.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    _.intl.string(_.t.eoSslJ),
                    (0, l.jsx)(g.owK, {
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
let N = (0, x.i$)({
        key: "AMOUNT ",
        cellClassName: C.amountColumn,
        renderHeader() {
            let e = (0, l.jsx)(u.u, {
                text: _.intl.string(_.t.q3PkLy),
                children: (0, l.jsx)(g.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: C.amountDisclaimer,
                }),
            });
            return (0, l.jsxs)(x.qN, {
                children: [_.intl.string(_.t.VodAGR), e],
            });
        },
        getAmount: (e) => e.amount,
    }),
    I = (0, j.rM)(
        [
            (0, j.Fd)({
                key: "PERIOD",
                cellClassName: C.periodColumn,
                renderHeader: () => (0, l.jsx)(x.qN, { children: _.intl.string(_.t.fThnXV) }),
                renderContent: (e) => (0, l.jsx)(y, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    o()(null != t, "CellProps should always be provided");
                    let { ListingIdLabel: n } = t;
                    return (0, l.jsx)(n, { listingId: e.listingId });
                },
            }),
            (0, j.Fd)(
                ((r = O({}, N)),
                (i = i =
                    {
                        renderContent: N.render,
                        renderExpandedContent: (e, t) => N.render(e, t),
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
                cellClassName: C.statusColumn,
                renderHeader() {
                    let e = (0, l.jsx)(u.u, {
                        text: _.intl.string(_.t.cIGvZG),
                        children: (0, l.jsx)(g.d3s, {
                            size: "xs",
                            color: "currentColor",
                            className: C.statusDisclaimer,
                        }),
                    });
                    return (0, l.jsxs)(x.qN, {
                        children: [_.intl.string(_.t.oypxx8), e],
                    });
                },
                renderContent: (e) =>
                    (0, l.jsx)(x.bL, {
                        className: C.statusCell,
                        children: (0, l.jsx)(E, { item: e }),
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
        s = a.useMemo(() => O({ ListingIdLabel: t }, r), [r, t]);
    return (0, l.jsx)(x.ZP, {
        columns: I,
        data: i,
        cellProps: s,
    });
}
