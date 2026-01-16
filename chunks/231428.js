n.d(t, { Z: () => F }), n(388685);
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
    p = n(570140),
    _ = n(355467),
    h = n(827837),
    m = n(821849),
    g = n(724757),
    E = n(600164),
    b = n(239827),
    y = n(818035),
    O = n(509545),
    v = n(78839),
    S = n(74538),
    I = n(807160),
    T = n(981631),
    C = n(474936),
    A = n(231338),
    N = n(388032),
    P = n(144923),
    w = n(354351);
function R(e, t, n) {
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
function D(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = 10;
function U(e) {
    let { payments: t, locale: n, compactMode: r, numPages: o } = e,
        l = a.useRef(null),
        [c, d] = a.useState(0),
        [p, h] = a.useState(null),
        m = t.slice(c * k, (c + 1) * k);
    a.useEffect(() => {
        var e;
        null == (e = l.current) || e.scrollTo({ to: 0 });
    }, [c]);
    let E = a.useCallback(
            (e) => {
                d(e);
                let n = t[t.length - 1].id;
                e >= o - 2 && p !== n && ((0, _.cQ)(k, n), h(n));
            },
            [t, o, p],
        ),
        y = (0, g.Z)("billing-history", l);
    return (0, i.jsx)(u.bG, {
        navigator: y,
        children: (0, i.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    a = j(e, ["ref"]);
                return (0, i.jsx)(
                    b.Z,
                    L(
                        D(
                            {
                                className: P.verticalFit,
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
                                className: P.bottomDivider,
                                ref: l,
                                overflow: "auto",
                                children: m.map((e, t) =>
                                    (0, i.jsx)(
                                        I.Z,
                                        {
                                            className: s()(P.paymentRow, P.bottomDivider),
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
        return Math.max(Math.ceil(this.props.payments.length / k), 1);
    }
    componentDidMount() {
        p.Z.wait(() => {
            (0, h.N)(), (0, _.cQ)(3 * k);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(f.Zbd, {
                className: P.externalRow,
                children: [
                    (0, i.jsx)("div", {
                        className: P.externalRowHeader,
                        children: N.intl.format(N.t["6mIX6s"], { paymentGatewayName: A.Vz[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: P.externalRowBody,
                        children: N.intl.format(N.t.eG0uZB, {
                            paymentGatewayName: A.Vz[e.paymentGateway],
                            billingHistoryLink: (0, S.JE)(e.paymentGateway, "BILLING_HISTORY"),
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
                  className: P.verticalFit,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: s()(P.paymentPane, P.verticalFit),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: s()(P.paymentRow, P.bottomDivider),
                                              children: (0, i.jsxs)(E.Z, {
                                                  className: P.paymentRowHeader,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: w.date,
                                                          children: N.intl.string(N.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: P.paymentRowHeaderDescription,
                                                          children: N.intl.string(N.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: w.amount,
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
        super(...e), R(this, "scrollerRef", a.createRef());
    }
}
function Z(e) {
    var t;
    let n = e.skuId,
        r = null == (t = e.subscription) ? void 0 : t.items[0].planId;
    return !(null == n || null == r || Object.values(C.Si).includes(n) || (0, S.PV)(r));
}
function F(e) {
    let t = (0, d.e7)([y.Z], () => y.Z.getPayments()),
        n = (0, d.e7)([v.Z], () => v.Z.getPremiumTypeSubscription()),
        r = a.useMemo(
            () =>
                new Set(
                    t.filter(Z).map((e) => {
                        let { subscription: t } = e;
                        return null == t ? void 0 : t.items[0].planId;
                    }),
                ),
            [t],
        ),
        o = a.useMemo(
            () =>
                new Set(
                    t.filter(Z).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        s = (0, d.Wu)([O.Z], () => O.Z.getPlanIdsForSkus(Array.from(o))),
        l = a.useCallback(() => s.length === r.size, [s, r]),
        c = a.useMemo(() => t.filter((e) => e.currency !== T.pKx.DISCORD_ORB), [t]);
    return (
        a.useEffect(() => {
            l() ||
                p.Z.wait(() => {
                    o.forEach((e) => (0, m.GZ)(e, void 0, void 0, !0, void 0));
                });
        }, [l, o]),
        (0, i.jsx)(
            G,
            L(D({}, e), {
                payments: c,
                subscription: n,
            }),
        )
    );
}
R(G, "defaultProps", { compactMode: !1 });
