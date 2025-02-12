n.d(t, { Z: () => Z }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    h = n(481060),
    m = n(570140),
    g = n(355467),
    x = n(827837),
    _ = n(821849),
    p = n(724757),
    E = n(600164),
    C = n(239827),
    f = n(818035),
    N = n(509545),
    I = n(78839),
    T = n(74538),
    S = n(807160),
    j = n(474936),
    v = n(231338),
    b = n(388032),
    A = n(33484),
    O = n(745647);
function R(e, t, n) {
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
function D(e) {
    let { payments: t, locale: n, compactMode: i, numPages: r } = e,
        o = l.useRef(null),
        [c, u] = l.useState(0),
        [m, x] = l.useState(null),
        _ = t.slice(10 * c, (c + 1) * 10);
    l.useEffect(() => {
        var e;
        null === (e = o.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let E = l.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= r - 2 && m !== n && ((0, g.cQ)(10, n), x(n));
            },
            [t, r, m]
        ),
        f = (0, p.Z)('billing-history', o);
    return (0, s.jsx)(d.bG, {
        navigator: f,
        children: (0, s.jsx)(d.SJ, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, s.jsx)(C.Z, {
                    className: a()(A.verticalFit, A.paginator),
                    currentPageIndex: c,
                    onChangePage: E,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...l,
                    children: (0, s.jsx)(h.Den, {
                        className: A.bottomDivider,
                        ref: o,
                        children: _.map((e, t) =>
                            (0, s.jsx)(
                                S.Z,
                                {
                                    className: a()(A.paymentRow, A.bottomDivider),
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
class P extends (i = l.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        m.Z.wait(() => {
            (0, x.N)(), (0, g.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, s.jsxs)(h.Zbd, {
                className: A.externalRow,
                children: [
                    (0, s.jsx)('div', {
                        className: A.externalRowHeader,
                        children: b.intl.format(b.t['6mIX6u'], { paymentGatewayName: v.Vz[e.paymentGateway] })
                    }),
                    (0, s.jsx)('div', {
                        className: A.externalRowBody,
                        children: b.intl.format(b.t.eG0uZG, {
                            paymentGatewayName: v.Vz[e.paymentGateway],
                            billingHistoryLink: (0, T.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: i } = this.props,
            l = null != n && n.isPurchasedExternally;
        return 0 !== t.length || l
            ? (0, s.jsxs)('div', {
                  className: A.verticalFit,
                  children: [
                      null != n && l ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, s.jsxs)('div', {
                                className: a()(A.paymentPane, A.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, s.jsx)('div', {
                                              className: a()(A.paymentRow, A.bottomDivider),
                                              children: (0, s.jsxs)(E.Z, {
                                                  className: A.paymentRowHeader,
                                                  children: [
                                                      (0, s.jsx)('div', {
                                                          className: O.date,
                                                          children: b.intl.string(b.t['5t11BQ'])
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: A.paymentRowHeaderDescription,
                                                          children: b.intl.string(b.t.yAAPb2)
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className: O.amount,
                                                          children: b.intl.string(b.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, s.jsx)(D, {
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
        super(...e), R(this, 'scrollerRef', l.createRef());
    }
}
function y(e) {
    var t;
    let n = e.skuId,
        i = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
    return !(null == n || null == i || Object.values(j.Si).includes(n) || (0, T.PV)(i));
}
function Z(e) {
    let t = (0, u.e7)([f.Z], () => f.Z.getPayments()),
        n = (0, u.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        i = l.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    })
                ),
            [t]
        ),
        r = l.useMemo(
            () =>
                new Set(
                    t.filter(y).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        a = (0, u.Wu)([N.Z], () => N.Z.getPlanIdsForSkus(Array.from(r))),
        o = l.useCallback(() => a.length === i.size, [a, i]);
    return (
        l.useEffect(() => {
            o() ||
                m.Z.wait(() => {
                    r.forEach((e) => (0, _.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, r]),
        (0, s.jsx)(P, {
            ...e,
            payments: t,
            subscription: n
        })
    );
}
R(P, 'defaultProps', { compactMode: !1 });
