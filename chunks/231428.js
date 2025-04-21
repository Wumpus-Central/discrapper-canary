n.d(t, { Z: () => L }), n(388685);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    c = n.n(o),
    d = n(91192),
    u = n(442837),
    m = n(481060),
    g = n(570140),
    p = n(355467),
    h = n(827837),
    f = n(821849),
    b = n(724757),
    _ = n(600164),
    x = n(239827),
    E = n(818035),
    j = n(509545),
    C = n(78839),
    O = n(74538),
    S = n(807160),
    v = n(981631),
    T = n(474936),
    I = n(231338),
    N = n(388032),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                P(e, t, n[t]);
            });
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
    let { payments: t, locale: n, compactMode: i, numPages: l } = e,
        o = s.useRef(null),
        [c, u] = s.useState(0),
        [g, h] = s.useState(null),
        f = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollTo({ to: 0 });
    }, [c]);
    let _ = s.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= l - 2 && g !== n && ((0, p.cQ)(10, n), h(n));
            },
            [t, l, g]
        ),
        E = (0, b.Z)('billing-history', o);
    return (0, r.jsx)(d.bG, {
        navigator: E,
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
                                for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                        }
                        return r;
                    })(e, ['ref']);
                return (0, r.jsx)(
                    x.Z,
                    D(
                        R(
                            {
                                className: a()(y.verticalFit, y.paginator),
                                currentPageIndex: c,
                                onChangePage: _,
                                numPages: l,
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
                                        S.Z,
                                        {
                                            className: a()(y.paymentRow, y.bottomDivider),
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
        g.Z.wait(() => {
            (0, h.N)(), (0, p.cQ)(30);
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
                        children: N.intl.format(N.t['6mIX6u'], { paymentGatewayName: I.Vz[e.paymentGateway] })
                    }),
                    (0, r.jsx)('div', {
                        className: y.externalRowBody,
                        children: N.intl.format(N.t.eG0uZG, {
                            paymentGatewayName: I.Vz[e.paymentGateway],
                            billingHistoryLink: (0, O.JE)(e.paymentGateway, 'BILLING_HISTORY')
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
                                className: a()(y.paymentPane, y.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, r.jsx)('div', {
                                              className: a()(y.paymentRow, y.bottomDivider),
                                              children: (0, r.jsxs)(_.Z, {
                                                  className: y.paymentRowHeader,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: A.date,
                                                          children: N.intl.string(N.t['5t11BQ'])
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: y.paymentRowHeaderDescription,
                                                          children: N.intl.string(N.t.yAAPb2)
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: A.amount,
                                                          children: N.intl.string(N.t['6MqHXV'])
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
        super(...e), P(this, 'scrollerRef', s.createRef());
    }
}
function k(e) {
    var t;
    let n = e.skuId,
        i = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == i || Object.values(T.Si).includes(n) || (0, O.PV)(i));
}
function L(e) {
    let t = (0, u.e7)([E.Z], () => E.Z.getPayments()),
        n = (0, u.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
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
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(k).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    })
                ),
            [t]
        ),
        a = (0, u.Wu)([j.Z], () => j.Z.getPlanIdsForSkus(Array.from(l))),
        o = s.useCallback(() => a.length === i.size, [a, i]),
        c = s.useMemo(() => t.filter((e) => e.currency !== v.pKx.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                g.Z.wait(() => {
                    l.forEach((e) => (0, f.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, l]),
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
