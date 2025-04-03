n.d(t, { Z: () => W }), n(47120);
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
    b = n(724757),
    N = n(600164),
    x = n(239827),
    _ = n(818035),
    E = n(509545),
    j = n(78839),
    O = n(74538),
    C = n(807160),
    S = n(981631),
    v = n(474936),
    T = n(231338),
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
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
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
function Z(e) {
    let { payments: t, locale: n, compactMode: r, numPages: a } = e,
        o = s.useRef(null),
        [c, u] = s.useState(0),
        [g, h] = s.useState(null),
        f = t.slice(10 * c, (c + 1) * 10);
    s.useEffect(() => {
        var e;
        null == (e = o.current) || e.scrollTo({ to: 0 });
    }, [c]);
    let N = s.useCallback(
            (e) => {
                u(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && g !== n && ((0, p.cQ)(10, n), h(n));
            },
            [t, a, g]
        ),
        _ = (0, b.Z)('billing-history', o);
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
                    x.Z,
                    D(
                        R(
                            {
                                className: l()(y.verticalFit, y.paginator),
                                currentPageIndex: c,
                                onChangePage: N,
                                numPages: a,
                                showPageCount: !1,
                                ref: t
                            },
                            s
                        ),
                        {
                            children: (0, i.jsx)(m.Den, {
                                className: y.bottomDivider,
                                ref: o,
                                children: f.map((e, t) =>
                                    (0, i.jsx)(
                                        C.Z,
                                        {
                                            className: l()(y.paymentRow, y.bottomDivider),
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
class w extends (r = s.PureComponent) {
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
                className: y.externalRow,
                children: [
                    (0, i.jsx)('div', {
                        className: y.externalRowHeader,
                        children: I.NW.format(I.t['6mIX6u'], { paymentGatewayName: T.Vz[e.paymentGateway] })
                    }),
                    (0, i.jsx)('div', {
                        className: y.externalRowBody,
                        children: I.NW.format(I.t.eG0uZG, {
                            paymentGatewayName: T.Vz[e.paymentGateway],
                            billingHistoryLink: (0, O.JE)(e.paymentGateway, 'BILLING_HISTORY')
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
                  className: y.verticalFit,
                  children: [
                      null != n && s ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)('div', {
                                className: l()(y.paymentPane, y.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: l()(y.paymentRow, y.bottomDivider),
                                              children: (0, i.jsxs)(N.Z, {
                                                  className: y.paymentRowHeader,
                                                  children: [
                                                      (0, i.jsx)('div', {
                                                          className: A.date,
                                                          children: I.NW.string(I.t['5t11BQ'])
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: y.paymentRowHeaderDescription,
                                                          children: I.NW.string(I.t.yAAPb2)
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: A.amount,
                                                          children: I.NW.string(I.t['6MqHXV'])
                                                      })
                                                  ]
                                              })
                                          }),
                                    (0, i.jsx)(Z, {
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
        super(...e), P(this, 'scrollerRef', s.createRef());
    }
}
function k(e) {
    var t;
    let n = e.skuId,
        r = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(v.Si).includes(n) || (0, O.PV)(r));
}
function W(e) {
    let t = (0, u.e7)([_.Z], () => _.Z.getPayments()),
        n = (0, u.e7)([j.ZP], () => j.ZP.getPremiumTypeSubscription()),
        r = s.useMemo(
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
        l = (0, u.Wu)([E.Z], () => E.Z.getPlanIdsForSkus(Array.from(a))),
        o = s.useCallback(() => l.length === r.size, [l, r]),
        c = s.useMemo(() => t.filter((e) => e.currency !== S.pKx.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                g.Z.wait(() => {
                    a.forEach((e) => (0, f.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [o, a]),
        (0, i.jsx)(
            w,
            D(R({}, e), {
                payments: c,
                subscription: n
            })
        )
    );
}
P(w, 'defaultProps', { compactMode: !1 });
