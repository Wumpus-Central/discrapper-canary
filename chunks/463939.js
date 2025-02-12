n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(481060),
    d = n(264451),
    u = n(759178),
    m = n(462087),
    h = n(685201),
    g = n(766434),
    x = n(755930),
    p = n(334820),
    _ = n(198139),
    C = n(388032),
    f = n(151011);
let v = (e) => {
    let { dateUtc: t } = e;
    return (0, i.jsx)(c.Text, {
        variant: 'text-md/medium',
        color: 'interactive-active',
        children: o()(t).utc().format('MMMM YYYY')
    });
};
function N(e) {
    let { item: t } = e,
        { ppgStatus: n, payoutStatus: r, ppgDeferralReasons: l, periodEndDate: s } = (0, g.j0)(t),
        a = null != s ? o()(s).add(15, 'days').toISOString() : void 0,
        x = (0, d.Zo)(a, 'MMM D');
    switch (n) {
        case _.x_.OPEN:
            return (0, i.jsxs)(i.Fragment, {
                children: [null != x ? C.intl.formatToPlainString(C.t.I6YOjY, { payoutDate: x }) : C.intl.string(C.t.G5ATX1), (0, i.jsx)(m.Z, { className: f.statusScheduledIcon })]
            });
        case _.x_.CANCELED:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    C.intl.string(C.t['0SrNPz']),
                    (0, i.jsx)(c.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.statusErrorIcon
                    })
                ]
            });
        case _.x_.PAYOUT_DEFERRED:
            if ((null == l ? void 0 : l.includes(_.XL.PAYOUT_SEIZED)) === !0)
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C.intl.string(C.t['0SrNPz']),
                        (0, i.jsx)(c.k$p, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.statusErrorIcon
                        })
                    ]
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [C.intl.string(C.t.OtZ5k5), (0, i.jsx)(h.Z, { className: f.statusDeferredIcon })]
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
            return (0, i.jsxs)(i.Fragment, {
                children: [null != x ? C.intl.formatToPlainString(C.t.I6YOjY, { payoutDate: x }) : C.intl.string(C.t.ubdQTk), (0, i.jsx)(m.Z, { className: f.statusScheduledIcon })]
            });
        case _.jw.PAID:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    C.intl.string(C.t.eoSslJ),
                    (0, i.jsx)(c.owK, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.statusPaidIcon
                    })
                ]
            });
        case _.jw.DEFERRED:
        case _.jw.DEFERRED_INTERNAL:
        case _.jw.REJECTED:
        case _.jw.RISK_REVIEW:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    u.Z.getStatusErrorText(r),
                    (0, i.jsx)(c.k$p, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.statusErrorIcon
                    })
                ]
            });
    }
    return null;
}
let j = (0, x.i$)({
        key: 'AMOUNT ',
        cellClassName: f.amountColumn,
        renderHeader() {
            let e = (0, i.jsx)(c.ua7, {
                text: C.intl.string(C.t.q3PkLy),
                children: (e) =>
                    (0, i.jsx)(c.d3s, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.amountDisclaimer,
                        ...e
                    })
            });
            return (0, i.jsxs)(x.qN, {
                children: [C.intl.string(C.t.VodAGR), e]
            });
        },
        getAmount: (e) => e.amount
    }),
    I = (0, p.rM)(
        [
            (0, p.Fd)({
                key: 'PERIOD',
                cellClassName: f.periodColumn,
                renderHeader: () => (0, i.jsx)(x.qN, { children: C.intl.string(C.t.fThnXV) }),
                renderContent: (e) => (0, i.jsx)(v, { dateUtc: e.periodStartingAt }),
                renderExpandedContent(e, t) {
                    s()(null != t, 'CellProps should always be provided');
                    let { ListingIdLabel: n } = t;
                    return (0, i.jsx)(n, { listingId: e.listingId });
                }
            }),
            (0, p.Fd)({
                ...j,
                renderContent: j.render,
                renderExpandedContent: (e, t) => j.render(e, t)
            }),
            (0, x.wy)({
                key: 'STATUS ',
                cellClassName: f.statusColumn,
                renderHeader() {
                    let e = (0, i.jsx)(c.ua7, {
                        text: C.intl.string(C.t.cIGvZG),
                        children: (e) =>
                            (0, i.jsx)(c.d3s, {
                                size: 'xs',
                                color: 'currentColor',
                                className: f.statusDisclaimer,
                                ...e
                            })
                    });
                    return (0, i.jsxs)(x.qN, {
                        children: [C.intl.string(C.t.oypxx8), e]
                    });
                },
                renderContent: (e) =>
                    (0, i.jsx)(x.bL, {
                        className: f.statusCell,
                        children: (0, i.jsx)(N, { item: e })
                    })
            })
        ],
        { expandableToggleColumnKey: 'DROPDOWN' }
    );
function E(e) {
    let { ListingIdLabel: t, payoutsByPeriod: n } = e,
        { cellProps: l, data: s } = (0, p.GN)(n, {
            generateExpandedRows: (e) =>
                Object.keys(e.ppgs).map((t) => {
                    var n;
                    return {
                        key: e.key + t,
                        listingId: t,
                        amount: null === (n = e.ppgs[t]) || void 0 === n ? void 0 : n.amount
                    };
                })
        }),
        a = r.useMemo(
            () => ({
                ListingIdLabel: t,
                ...l
            }),
            [l, t]
        );
    return (0, i.jsx)(x.ZP, {
        columns: I,
        data: s,
        cellProps: a
    });
}
