(n.d(t, { Z: () => L }), n(388685));
var i,
    r = n(255367),
    s = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    p = n(570140),
    g = n(355467),
    h = n(827837),
    f = n(821849),
    b = n(724757),
    x = n(600164),
    _ = n(239827),
    j = n(818035),
    O = n(509545),
    E = n(78839),
    C = n(74538),
    v = n(807160),
    S = n(981631),
    T = n(474936),
    N = n(231338),
    I = n(388032),
    y = n(474915),
    A = n(468590);
function P(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { payments: t, locale: n, compactMode: i, numPages: a } = e,
        o = s.useRef(null),
        [c, u] = s.useState(0),
        [p, h] = s.useState(null),
        f = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollTo({ to: 0 });
    }, [c]);
    let x = s.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && p !== n && ((0, g.cQ)(10, n), h(n));
            },
            [t, a, p]
        ),
        j = (0, b.Z)('billing-history', o);
    return (0, r.jsx)(d.bG, {
        navigator: j,
        children: (0, r.jsx)(d.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    s = Object.keys(e);
                                for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                        }
                        return r;
                    })(e, ['ref']);
                return (0, r.jsx)(
                    _.Z,
                    D(
                        R(
                            {
                                className: l()(y.verticalFit, y.paginator),
                                currentPageIndex: c,
                                onChangePage: x,
                                numPages: a,
                                showPageCount: !1,
                                ref: t
                            },
                            s
                        ),
                        {
                            children: (0, r.jsx)(m.Den, {
                                className: y.bottomDivider,
                                ref: o,
                                children: f.map((e, t) =>
                                    (0, r.jsx)(
                                        v.Z,
                                        {
                                            className: l()(y.paymentRow, y.bottomDivider),
                                            payment: e,
                                            locale: n,
                                            compactMode: i
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
class w extends (i = s.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        p.Z.wait(() => {
            ((0, h.N)(), (0, g.cQ)(30));
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'),
            (0, r.jsxs)(m.Zbd, {
                className: y.externalRow,
                children: [
                    (0, r.jsx)('div', {
                        className: y.externalRowHeader,
                        children: I.intl.format(I.t['6mIX6u'], { paymentGatewayName: N.Vz[e.paymentGateway] })
                    }),
                    (0, r.jsx)('div', {
                        className: y.externalRowBody,
                        children: I.intl.format(I.t.eG0uZG, {
                            paymentGatewayName: N.Vz[e.paymentGateway],
                            billingHistoryLink: (0, C.JE)(e.paymentGateway, 'BILLING_HISTORY')
                        })
                    })
                ]
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: i } = this.props,
            s = null != n && n.isPurchasedExternally;
        return 0 !== t.length || s
            ? (0, r.jsxs)('div', {
                  className: y.verticalFit,
                  children: [
                      null != n && s ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, r.jsxs)('div', {
                                className: l()(y.paymentPane, y.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, r.jsx)('div', {
                                              className: l()(y.paymentRow, y.bottomDivider),
                                              children: (0, r.jsxs)(x.Z, {
                                                  className: y.paymentRowHeader,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: A.date,
                                                          children: I.intl.string(I.t['5t11BQ'])
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: y.paymentRowHeaderDescription,
                                                          children: I.intl.string(I.t.yAAPb2)
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: A.amount,
                                                          children: I.intl.string(I.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, r.jsx)(Z, {
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
        (super(...e), P(this, 'scrollerRef', s.createRef()));
    }
}
function k(e) {
    var t;
    let n = e.skuId,
        i = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == i || Object.values(T.Si).includes(n) || (0, C.PV)(i));
}
function L(e) {
    let t = (0, u.e7)([j.Z], () => j.Z.getPayments()),
        n = (0, u.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
        i = s.useMemo(
            () =>
                new Set(
                    t.filter(k).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    })
                ),
            [t]
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(k).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        l = (0, u.Wu)([O.Z], () => O.Z.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => l.length === i.size, [l, i]),
        c = s.useMemo(() => t.filter((e) => e.currency !== S.pKx.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                p.Z.wait(() => {
                    a.forEach((e) => (0, f.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, r.jsx)(
            w,
            D(R({}, e), {
                payments: c,
                subscription: n
            })
        )
    );
}
P(w, 'defaultProps', { compactMode: !1 });
