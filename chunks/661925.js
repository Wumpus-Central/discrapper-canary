n.d(e, {
    default: () => p,
}),
    n(896048),
    n(492834);
var r = n(627968),
    l = n(64700),
    a = n(284009),
    i = n.n(a),
    s = n(158954),
    c = n(311907),
    o = n(397927),
    u = n(452357),
    b = n(287809),
    d = n(985018),
    f = n(143021);
let p = function (t) {
    let { onClose: e, transitionState: a } = t,
        p = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
        [m, y] = l.useState(!1),
        g = l.useCallback(() => (null == e || e(), Promise.resolve()), [e]),
        k = l.useCallback(() => {
            null == e || e(),
                (0, o.mMO)(async () => {
                    let { default: t } = await n.e("83269").then(n.bind(n, 350116));
                    return (e) =>
                        (0, r.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (e) {
                                            var r;
                                            (r = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = r);
                                        });
                                }
                                return t;
                            })({}, e),
                        );
                });
        }, [e]),
        v = l.useCallback(() => {
            null == e || e(),
                i()(null != p, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                y(!0),
                (0, u.S)(p).finally(() => y(!1));
        }, [p, e]),
        h = l.useMemo(
            () =>
                (null == p ? void 0 : p.email) == null
                    ? [
                          {
                              text: d.intl.string(d.t.ydw5nX),
                              onClick: k,
                              variant: "primary",
                          },
                      ]
                    : [
                          {
                              text: d.intl.string(d.t.Vm8akB),
                              onClick: k,
                              variant: "secondary",
                          },
                          {
                              text: d.intl.string(d.t.lm1UKt),
                              onClick: v,
                              variant: "primary",
                              loading: m,
                          },
                      ],
            [p, k, v, m],
        );
    return (0, r.jsxs)(s.Modal, {
        title: d.intl.string(d.t.UZLrY1),
        transitionState: a,
        onClose: g,
        actions: h,
        children: [
            (0, r.jsx)("div", {
                className: f.p,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: f.i,
                children: d.intl.string(d.t["0LgOKH"]),
            }),
        ],
    });
};
