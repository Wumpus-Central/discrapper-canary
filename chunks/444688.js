n.d(t, { default: () => g }), n(388685), n(457542);
var i = n(54381),
    r = n(473749),
    a = n(512722),
    l = n.n(a),
    s = n(793030),
    o = n(442837),
    u = n(481060),
    c = n(418632),
    d = n(594174),
    f = n(388032),
    m = n(28449);
let g = function (e) {
    let { onClose: t, transitionState: a } = e,
        g = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        [b, p] = r.useState(!1),
        v = r.useCallback(() => (null == t || t(), Promise.resolve()), [t]),
        y = r.useCallback(() => {
            null == t || t(),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, t),
                        );
                });
        }, [t]),
        k = r.useCallback(() => {
            null == t || t(),
                l()(null != g, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                p(!0),
                (0, c.s)(g).finally(() => p(!1));
        }, [g, t]),
        h = r.useMemo(
            () =>
                (null == g ? void 0 : g.email) == null
                    ? [
                          {
                              text: f.intl.string(f.t.ydw5nX),
                              onClick: y,
                              variant: "primary",
                          },
                      ]
                    : [
                          {
                              text: f.intl.string(f.t.Vm8akB),
                              onClick: y,
                              variant: "secondary",
                          },
                          {
                              text: f.intl.string(f.t.lm1UKt),
                              onClick: k,
                              variant: "primary",
                              loading: b,
                          },
                      ],
            [g, y, k, b],
        );
    return (0, i.jsxs)(s.Modal, {
        title: f.intl.string(f.t.UZLrY1),
        transitionState: a,
        onClose: v,
        actions: h,
        children: [
            (0, i.jsx)("div", { className: m.imageUnverified }),
            (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: m.message,
                children: f.intl.string(f.t["0LgOKH"]),
            }),
        ],
    });
};
