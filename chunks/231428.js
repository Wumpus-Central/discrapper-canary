n.d(t, { Z: () => k }), n(47120);
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    g = n(570140),
    p = n(355467),
    h = n(827837),
    f = n(821849),
    N = n(724757),
    x = n(600164),
    b = n(239827),
    _ = n(818035),
    E = n(509545),
    j = n(78839),
    C = n(74538),
    O = n(807160),
    v = n(474936),
    S = n(231338),
    T = n(388032),
    I = n(605432),
    y = n(49076);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { payments: t, locale: n, compactMode: r, numPages: a } = e,
        o = s.useRef(null),
        [c, u] = s.useState(0),
        [g, h] = s.useState(null),
        f = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        var e;
        null === (e = o.current) || void 0 === e || e.scrollTo({ to: 0 });
    }, [c]);
    let x = s.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && g !== n && ((0, p.cQ)(10, n), h(n));
            },
            [t, a, g]
        ),
        _ = (0, N.Z)('billing-history', o);
    return (0, i.jsx)(d.bG, {
        navigator: _,
        children: (0, i.jsx)(d.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    s = Object.keys(e);
                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['ref']);
                return (0, i.jsx)(
                    b.Z,
                    R(
                        P(
                            {
                                className: l()(I.verticalFit, I.paginator),
                                currentPageIndex: c,
                                onChangePage: x,
                                numPages: a,
                                showPageCount: !1,
                                ref: t
                            },
                            s
                        ),
                        {
                            children: (0, i.jsx)(m.Den, {
                                className: I.bottomDivider,
                                ref: o,
                                children: f.map((e, t) =>
                                    (0, i.jsx)(
                                        O.Z,
                                        {
                                            className: l()(I.paymentRow, I.bottomDivider),
                                            payment: e,
                                            locale: n,
                                            compactMode: r
                                        },
                                        t
                                    )
                                )
                            })
                        }
                    )
                );
            }
        })
    });
}
class Z extends (r = s.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        g.Z.wait(() => {
            (0, h.N)(), (0, p.cQ)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, i.jsxs)(m.Zbd, {
                className: I.externalRow,
                children: [
                    (0, i.jsx)('div', {
                        className: I.externalRowHeader,
                        children: T.NW.format(T.t['6mIX6u'], { paymentGatewayName: S.Vz[e.paymentGateway] })
                    }),
                    (0, i.jsx)('div', {
                        className: I.externalRowBody,
                        children: T.NW.format(T.t.eG0uZG, {
                            paymentGatewayName: S.Vz[e.paymentGateway],
                            billingHistoryLink: (0, C.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: r } = this.props,
            s = null != n && n.isPurchasedExternally;
        return 0 !== t.length || s
            ? (0, i.jsxs)('div', {
                  className: I.verticalFit,
                  children: [
                      null != n && s ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)('div', {
                                className: l()(I.paymentPane, I.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: l()(I.paymentRow, I.bottomDivider),
                                              children: (0, i.jsxs)(x.Z, {
                                                  className: I.paymentRowHeader,
                                                  children: [
                                                      (0, i.jsx)('div', {
                                                          className: y.date,
                                                          children: T.NW.string(T.t['5t11BQ'])
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: I.paymentRowHeaderDescription,
                                                          children: T.NW.string(T.t.yAAPb2)
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: y.amount,
                                                          children: T.NW.string(T.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, i.jsx)(D, {
                                        compactMode: e,
                                        locale: r,
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
        super(...e), A(this, 'scrollerRef', s.createRef());
    }
}
function w(e) {
    var t;
    let n = e.skuId,
        r = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(v.Si).includes(n) || (0, C.PV)(r));
}
function k(e) {
    let t = (0, u.e7)([_.Z], () => _.Z.getPayments()),
        n = (0, u.e7)([j.ZP], () => j.ZP.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(w).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    })
                ),
            [t]
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(w).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        l = (0, u.Wu)([E.Z], () => E.Z.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => l.length === r.size, [l, r]);
    return (
        s.useEffect(() => {
            o() ||
                g.Z.wait(() => {
                    a.forEach((e) => (0, f.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, i.jsx)(
            Z,
            R(P({}, e), {
                payments: t,
                subscription: n
            })
        )
    );
}
A(Z, 'defaultProps', { compactMode: !1 });
