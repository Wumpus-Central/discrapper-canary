n.d(t, { Z: () => E });
var r,
    i,
    s = n(200651),
    a = n(192379),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(481060),
    m = n(264451),
    g = n(759178),
    p = n(462087),
    h = n(685201),
    f = n(766434),
    b = n(755930),
    x = n(334820),
    j = n(198139),
    N = n(388032),
    _ = n(282427);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let C = (e) => {
    let { dateUtc: t } = e;
    return (0, s.jsx)(u.Text, {
        variant: 'text-md/medium',
        color: 'interactive-active',
        children: d()(t).utc().format('MMMM YYYY')
    });
};
function O(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: i, periodEndDate: a } = (0, f.j0)(t),
        l = null != a ? d()(a).add(15, 'days').toISOString() : void 0,
        o = (0, m.Zo)(l, 'MMM D');
    switch (n) {
        case j.x_.OPEN:
            return (0, s.jsxs)(s.Fragment, {
                children: [null != o ? N.NW.formatToPlainString(N.t.I6YOjY, { payoutDate: o }) : N.NW.string(N.t.G5ATX1), (0, s.jsx)(p.Z, { className: _.statusScheduledIcon })]
            });
        case j.x_.CANCELED:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    N.NW.string(N.t['0SrNPz']),
                    (0, s.jsx)(u.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.statusErrorIcon
                    })
                ]
            });
        case j.x_.PAYOUT_DEFERRED:
            if ((null == i ? void 0 : i.includes(j.XL.PAYOUT_SEIZED)) === !0)
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        N.NW.string(N.t['0SrNPz']),
                        (0, s.jsx)(u.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.statusErrorIcon
                        })
                    ]
                });
            return (0, s.jsxs)(s.Fragment, {
                children: [N.NW.string(N.t.OtZ5k5), (0, s.jsx)(h.Z, { className: _.statusDeferredIcon })]
            });
    }
    switch (r) {
        case j.jw.MANUAL:
        case j.jw.OPEN:
        case j.jw.PENDING:
        case j.jw.PROCESSING:
        case j.jw.SUBMITTED:
        case j.jw.PENDING_FUNDS:
        case j.jw.CANCELED:
        case j.jw.ERROR:
            return (0, s.jsxs)(s.Fragment, {
                children: [null != o ? N.NW.formatToPlainString(N.t.I6YOjY, { payoutDate: o }) : N.NW.string(N.t.ubdQTk), (0, s.jsx)(p.Z, { className: _.statusScheduledIcon })]
            });
        case j.jw.PAID:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    N.NW.string(N.t.eoSslJ),
                    (0, s.jsx)(u.owK, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.statusPaidIcon
                    })
                ]
            });
        case j.jw.DEFERRED:
        case j.jw.DEFERRED_INTERNAL:
        case j.jw.REJECTED:
        case j.jw.RISK_REVIEW:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    g.Z.getStatusErrorText(r),
                    (0, s.jsx)(u.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.statusErrorIcon
                    })
                ]
            });
    }
    return null;
}
let y = (0, b.i$)({
        key: 'AMOUNT ',
        cellClassName: _.amountColumn,
        renderHeader() {
            let e = (0, s.jsx)(u.ua7, {
                text: N.NW.string(N.t.q3PkLy),
                children: (e) =>
                    (0, s.jsx)(
                        u.d3s,
                        v(
                            {
                                size: 'xs',
                                color: 'currentColor',
                                className: _.amountDisclaimer
                            },
                            e
                        )
                    )
            });
            return (0, s.jsxs)(b.qN, {
                children: [N.NW.string(N.t.VodAGR), e]
            });
        },
        getAmount: (e) => e.amount
    }),
    I = (0, x.rM)(
        [
            (0, x.Fd)({
                key: 'PERIOD',
                cellClassName: _.periodColumn,
                renderHeader: () => (0, s.jsx)(b.qN, { children: N.NW.string(N.t.fThnXV) }),
                renderContent: (e) => (0, s.jsx)(C, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    o()(null != t, 'CellProps should always be provided');
                    let { ListingIdLabel: n } = t;
                    return (0, s.jsx)(n, { listingId: e.listingId });
                }
            }),
            (0, x.Fd)(
                ((r = v({}, y)),
                (i = i =
                    {
                        renderContent: y.render,
                        renderExpandedContent: (e, t) => y.render(e, t)
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
                r)
            ),
            (0, b.wy)({
                key: 'STATUS ',
                cellClassName: _.statusColumn,
                renderHeader() {
                    let e = (0, s.jsx)(u.ua7, {
                        text: N.NW.string(N.t.cIGvZG),
                        children: (e) =>
                            (0, s.jsx)(
                                u.d3s,
                                v(
                                    {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: _.statusDisclaimer
                                    },
                                    e
                                )
                            )
                    });
                    return (0, s.jsxs)(b.qN, {
                        children: [N.NW.string(N.t.oypxx8), e]
                    });
                },
                renderContent: (e) =>
                    (0, s.jsx)(b.bL, {
                        className: _.statusCell,
                        children: (0, s.jsx)(O, { item: e })
                    })
            })
        ],
        { expandableToggleColumnKey: 'DROPDOWN' }
    );
function E(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: r, data: i } = (0, x.GN)(n, {
            generateExpandedRows: (e) =>
                Object.keys(e.ppgs).map((t) => {
                    var n;
                    return {
                        key: e.key + t,
                        listingId: t,
                        amount: null == (n = e.ppgs[t]) ? void 0 : n.amount
                    };
                })
        }),
        l = a.useMemo(() => v({ ListingIdLabel: t }, r), [r, t]);
    return (0, s.jsx)(b.ZP, {
        columns: I,
        data: i,
        cellProps: l
    });
}
