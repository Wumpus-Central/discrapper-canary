n.d(t, { Z: () => Z }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(91192),
    d = n(442837),
    f = n(481060),
    _ = n(570140),
    p = n(355467),
    h = n(827837),
    m = n(821849),
    g = n(724757),
    E = n(600164),
    b = n(239827),
    y = n(818035),
    O = n(509545),
    v = n(78839),
    I = n(74538),
    T = n(807160),
    S = n(981631),
    A = n(474936),
    C = n(231338),
    N = n(388032),
    R = n(504333),
    P = n(982710);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let j = 10;
function U(e) {
    let { payments: t, locale: n, compactMode: r, numPages: o } = e,
        l = a.useRef(null),
        [c, d] = a.useState(0),
        [_, h] = a.useState(null),
        m = t.slice(c * j, (c + 1) * j);
    a.useEffect(() => {
        var e;
        null == (e = l.current) || e.scrollTo({ to: 0 });
    }, [c]);
    let E = a.useCallback(
            (e) => {
                d(e);
                let n = t[t.length - 1].id;
                e >= o - 2 && _ !== n && ((0, p.cQ)(j, n), h(n));
            },
            [t, o, _],
        ),
        y = (0, g.Z)("billing-history", l);
    return (0, i.jsx)(u.bG, {
        navigator: y,
        children: (0, i.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    a = M(e, ["ref"]);
                return (0, i.jsx)(
                    b.Z,
                    x(
                        w(
                            {
                                className: R.verticalFit,
                                currentPageIndex: c,
                                onChangePage: E,
                                numPages: o,
                                showPageCount: !1,
                                ref: t,
                            },
                            a,
                        ),
                        {
                            children: (0, i.jsx)(f.Den, {
                                className: R.bottomDivider,
                                ref: l,
                                children: m.map((e, t) =>
                                    (0, i.jsx)(
                                        T.Z,
                                        {
                                            className: s()(R.paymentRow, R.bottomDivider),
                                            payment: e,
                                            locale: n,
                                            compactMode: r,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        },
                    ),
                );
            },
        }),
    });
}
class G extends (r = a.PureComponent) {
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / j), 1);
    }
    componentDidMount() {
        _.Z.wait(() => {
            (0, h.N)(), (0, p.cQ)(3 * j);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(f.Zbd, {
                className: R.externalRow,
                children: [
                    (0, i.jsx)("div", {
                        className: R.externalRowHeader,
                        children: N.intl.format(N.t["6mIX6s"], { paymentGatewayName: C.Vz[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: R.externalRowBody,
                        children: N.intl.format(N.t.eG0uZB, {
                            paymentGatewayName: C.Vz[e.paymentGateway],
                            billingHistoryLink: (0, I.JE)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: r } = this.props,
            a = null != n && n.isPurchasedExternally;
        return 0 !== t.length || a
            ? (0, i.jsxs)("div", {
                  className: R.verticalFit,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: s()(R.paymentPane, R.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: s()(R.paymentRow, R.bottomDivider),
                                              children: (0, i.jsxs)(E.Z, {
                                                  className: R.paymentRowHeader,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: P.date,
                                                          children: N.intl.string(N.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: R.paymentRowHeaderDescription,
                                                          children: N.intl.string(N.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: P.amount,
                                                          children: N.intl.string(N.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(U, {
                                        compactMode: e,
                                        locale: r,
                                        payments: t,
                                        numPages: this.numPages,
                                    }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e), D(this, "scrollerRef", a.createRef());
    }
}
function B(e) {
    var t;
    let n = e.skuId,
        r = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(A.Si).includes(n) || (0, I.PV)(r));
}
function Z(e) {
    let t = (0, d.e7)([y.Z], () => y.Z.getPayments()),
        n = (0, d.e7)([v.Z], () => v.Z.getPremiumTypeSubscription()),
        r = a.useMemo(
            () =>
                new Set(
                    t.filter(B).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    }),
                ),
            [t],
        ),
        o = a.useMemo(
            () =>
                new Set(
                    t.filter(B).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        s = (0, d.Wu)([O.Z], () => O.Z.getPlanIdsForSkus(Array.from(o))),
        l = a.useCallback(() => s.length === r.size, [s, r]),
        c = a.useMemo(() => t.filter((e) => e.currency !== S.pKx.DISCORD_ORB), [t]);
    return (
        a.useEffect(() => {
            l() ||
                _.Z.wait(() => {
                    o.forEach((e) => (0, m.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [l, o]),
        (0, i.jsx)(
            G,
            x(w({}, e), {
                payments: c,
                subscription: n,
            }),
        )
    );
}
D(G, "defaultProps", { compactMode: !1 });
