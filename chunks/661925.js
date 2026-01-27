n.d(e, {
    default: () => m,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(158954),
    s = n(311907),
    u = n(397927),
    c = n(452357),
    d = n(287809),
    f = n(985018),
    b = n(143021);
let m = function (t) {
    let { onClose: e, transitionState: l } = t,
        m = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        [g, y] = i.useState(!1),
        p = i.useCallback(() => (null == e || e(), Promise.resolve()), [e]),
        v = i.useCallback(() => {
            null == e || e(),
                (0, u.mMO)(async () => {
                    let { default: t } = await Promise.all([n.e("83269"), n.e("17726")]).then(n.bind(n, 350116));
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
        k = i.useCallback(() => {
            null == e || e(),
                a()(null != m, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                y(!0),
                (0, c.S)(m).finally(() => y(!1));
        }, [m, e]),
        O = i.useMemo(
            () =>
                (null == m ? void 0 : m.email) == null
                    ? [
                          {
                              text: f.intl.string(f.t.ydw5nX),
                              onClick: v,
                              variant: "primary",
                          },
                      ]
                    : [
                          {
                              text: f.intl.string(f.t.Vm8akB),
                              onClick: v,
                              variant: "secondary",
                          },
                          {
                              text: f.intl.string(f.t.lm1UKt),
                              onClick: k,
                              variant: "primary",
                              loading: g,
                          },
                      ],
            [m, v, k, g],
        );
    return (0, r.jsxs)(o.Modal, {
        title: f.intl.string(f.t.UZLrY1),
        transitionState: l,
        onClose: p,
        actions: O,
        children: [
            (0, r.jsx)("div", {
                className: b.p,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: b.i,
                children: f.intl.string(f.t["0LgOKH"]),
            }),
        ],
    });
};
