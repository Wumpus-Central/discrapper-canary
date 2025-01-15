n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    g = n(570140),
    h = n(355467),
    p = n(827837),
    x = n(821849),
    f = n(724757),
    _ = n(600164),
    E = n(239827),
    C = n(818035),
    T = n(509545),
    S = n(78839),
    b = n(74538),
    I = n(807160),
    N = n(474936),
    v = n(231338),
    A = n(388032),
    j = n(14593),
    R = n(943857);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    let { payments: t, locale: n, compactMode: i, numPages: a } = e,
        o = r.useRef(null),
        [c, u] = r.useState(0),
        [g, p] = r.useState(null),
        x = t.slice(10 * c, (c + 1) * 10);
    r.useEffect(() => {
        var e;
        null === (e = o.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let _ = r.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && g !== n && ((0, h.cQ)(10, n), p(n));
            },
            [t, a, g]
        ),
        C = (0, f.Z)('billing-history', o);
    return (0, s.jsx)(d.bG, {
        navigator: C,
        children: (0, s.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...r } = e;
                return (0, s.jsx)(E.Z, {
                    className: l()(j.verticalFit, j.paginator),
                    currentPageIndex: c,
                    onChangePage: _,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...r,
                    children: (0, s.jsx)(m.AdvancedScroller, {
                        className: j.bottomDivider,
                        ref: o,
                        children: x.map((e, t) =>
                            (0, s.jsx)(
                                I.Z,
                                {
                                    className: l()(j.paymentRow, j.bottomDivider),
                                    payment: e,
                                    locale: n,
                                    compactMode: i
                                },
                                t
                            )
                        )
                    })
                });
            }
        })
    });
}
class y extends (i = r.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        g.Z.wait(() => {
            (0, p.N)(), (0, h.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, s.jsxs)(m.Card, {
                className: j.externalRow,
                children: [
                    (0, s.jsx)('div', {
                        className: j.externalRowHeader,
                        children: A.intl.format(A.t['6mIX6u'], { paymentGatewayName: v.Vz[e.paymentGateway] })
                    }),
                    (0, s.jsx)('div', {
                        className: j.externalRowBody,
                        children: A.intl.format(A.t.eG0uZG, {
                            paymentGatewayName: v.Vz[e.paymentGateway],
                            billingHistoryLink: (0, b.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: i } = this.props,
            r = null != n && n.isPurchasedExternally;
        return 0 !== t.length || r
            ? (0, s.jsxs)('div', {
                  className: j.verticalFit,
                  children: [
                      null != n && r ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, s.jsxs)('div', {
                                className: l()(j.paymentPane, j.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, s.jsx)('div', {
                                              className: l()(j.paymentRow, j.bottomDivider),
                                              children: (0, s.jsxs)(_.Z, {
                                                  className: j.paymentRowHeader,
                                                  children: [
                                                      (0, s.jsx)('div', {
                                                          className: R.date,
                                                          children: A.intl.string(A.t['5t11BQ'])
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: j.paymentRowHeaderDescription,
                                                          children: A.intl.string(A.t.yAAPb2)
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: R.amount,
                                                          children: A.intl.string(A.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, s.jsx)(P, {
                                        compactMode: e,
                                        locale: i,
                                        payments: t,
                                        numPages: this.numPages
                                    })
                                ]
                            })
                          : null
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e), O(this, 'scrollerRef', r.createRef());
    }
}
function D(e) {
    var t;
    let n = e.skuId,
        i = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
    return !(null == n || null == i || Object.values(N.Si).includes(n) || (0, b.PV)(i));
}
function B(e) {
    let t = (0, u.e7)([C.Z], () => C.Z.getPayments()),
        n = (0, u.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        i = r.useMemo(
            () =>
                new Set(
                    t.filter(D).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    })
                ),
            [t]
        ),
        a = r.useMemo(
            () =>
                new Set(
                    t.filter(D).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        l = (0, u.Wu)([T.Z], () => T.Z.getPlanIdsForSkus(Array.from(a))),
        o = r.useCallback(() => l.length === i.size, [l, i]);
    return (
        r.useEffect(() => {
            !o() &&
                g.Z.wait(() => {
                    a.forEach((e) => (0, x.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, s.jsx)(y, {
            ...e,
            payments: t,
            subscription: n
        })
    );
}
O(y, 'defaultProps', { compactMode: !1 });
