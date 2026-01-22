n.d(t, {
    A: () => T,
});
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(284009),
    c = n.n(a),
    o = n(989349),
    d = n.n(o),
    u = n(990078),
    f = n(397927),
    g = n(971630),
    b = n(942117),
    m = n(487552),
    p = n(311237),
    x = n(105917),
    h = n(242564),
    j = n(476719),
    O = n(311750),
    y = n(985018),
    v = n(473711);

function A(e) {
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
let E = (e) => {
    let { dateUtc: t } = e;
    return (0, l.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "interactive-text-active",
        children: d()(t).utc().format("MMMM YYYY"),
    });
};

function N(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: i, periodEndDate: s } = (0, x.Rs)(t),
        a = null != s ? d()(s).add(15, "days").toISOString() : void 0,
        c = (0, g.T4)(a, "MMM D");
    switch (n) {
        case O.U1.OPEN:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != c
                        ? y.intl.formatToPlainString(y.t.I6YOjS, {
                              payoutDate: c,
                          })
                        : y.intl.string(y.t.G5ATX6),
                    (0, l.jsx)(m.A, {
                        className: v.$A,
                    }),
                ],
            });
        case O.U1.CANCELED:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    y.intl.string(y.t["0SrNPx"]),
                    (0, l.jsx)(f.aXh, {
                        size: "md",
                        color: "currentColor",
                        className: v.u5,
                    }),
                ],
            });
        case O.U1.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(O.MC.PAYOUT_SEIZED)) === !0)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        y.intl.string(y.t["0SrNPx"]),
                        (0, l.jsx)(f.aXh, {
                            size: "md",
                            color: "currentColor",
                            className: v.u5,
                        }),
                    ],
                });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    y.intl.string(y.t.OtZ5kz),
                    (0, l.jsx)(p.A, {
                        className: v.tK,
                    }),
                ],
            });
    }
    switch (r) {
        case O.bp.MANUAL:
        case O.bp.OPEN:
        case O.bp.PENDING:
        case O.bp.PROCESSING:
        case O.bp.SUBMITTED:
        case O.bp.PENDING_FUNDS:
        case O.bp.CANCELED:
        case O.bp.ERROR:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    null != c
                        ? y.intl.formatToPlainString(y.t.I6YOjS, {
                              payoutDate: c,
                          })
                        : y.intl.string(y.t.ubdQTt),
                    (0, l.jsx)(m.A, {
                        className: v.$A,
                    }),
                ],
            });
        case O.bp.PAID:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    y.intl.string(y.t.eoSslJ),
                    (0, l.jsx)(f.yr3, {
                        size: "md",
                        color: "currentColor",
                        className: v.Ql,
                    }),
                ],
            });
        case O.bp.DEFERRED:
        case O.bp.DEFERRED_INTERNAL:
        case O.bp.REJECTED:
        case O.bp.RISK_REVIEW:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    b.A.getStatusErrorText(r),
                    (0, l.jsx)(f.aXh, {
                        size: "md",
                        color: "currentColor",
                        className: v.u5,
                    }),
                ],
            });
    }
    return null;
}
let _ = (0, h.CU)({
        key: "AMOUNT ",
        cellClassName: v.Fh,
        renderHeader() {
            let e = (0, l.jsx)(u.m, {
                text: y.intl.string(y.t.q3PkL5),
                children: (0, l.jsx)(f.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: v.EU,
                }),
            });
            return (0, l.jsxs)(h.A3, {
                children: [y.intl.string(y.t.VodAGZ), e],
            });
        },
        getAmount: (e) => e.amount,
    }),
    S = (0, j.gE)(
        [
            (0, j.N7)({
                key: "PERIOD",
                cellClassName: v.Ii,
                renderHeader: () =>
                    (0, l.jsx)(h.A3, {
                        children: y.intl.string(y.t.fThnXa),
                    }),
                renderContent: (e) =>
                    (0, l.jsx)(E, {
                        dateUtc: e.periodStartingAt,
                    }),
                renderExpandedContent(e, t) {
                    c()(null != t, "CellProps should always be provided");
                    let { ListingIdLabel: n } = t;
                    return (0, l.jsx)(n, {
                        listingId: e.listingId,
                    });
                },
            }),
            (0, j.N7)(
                ((r = A({}, _)),
                (i = i =
                    {
                        renderContent: _.render,
                        renderExpandedContent: (e, t) => _.render(e, t),
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
            (0, h.HA)({
                key: "STATUS ",
                cellClassName: v.xG,
                renderHeader() {
                    let e = (0, l.jsx)(u.m, {
                        text: y.intl.string(y.t.cIGvZI),
                        children: (0, l.jsx)(f.mir, {
                            size: "xs",
                            color: "currentColor",
                            className: v.Cg,
                        }),
                    });
                    return (0, l.jsxs)(h.A3, {
                        children: [y.intl.string(y.t.oypxxw), e],
                    });
                },
                renderContent: (e) =>
                    (0, l.jsx)(h.fh, {
                        className: v.fo,
                        children: (0, l.jsx)(N, {
                            item: e,
                        }),
                    }),
            }),
        ],
        {
            expandableToggleColumnKey: "DROPDOWN",
        },
    );

function T(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: r, data: i } = (0, j.vL)(n, {
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
        a = s.useMemo(
            () =>
                A(
                    {
                        ListingIdLabel: t,
                    },
                    r,
                ),
            [r, t],
        );
    return (0, l.jsx)(h.Ay, {
        columns: S,
        data: i,
        cellProps: a,
    });
}
