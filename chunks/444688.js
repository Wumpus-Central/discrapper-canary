n.d(t, { default: () => b }), n(388685), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(82659),
    c = n(481060),
    u = n(418632),
    d = n(594174),
    f = n(388032),
    m = n(97411);
let b = function (e) {
    let { onClose: t, transitionState: l } = e,
        b = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        [p, g] = i.useState(!1),
        y = i.useCallback(() => (null == t || t(), Promise.resolve()), [t]),
        h = i.useCallback(() => {
            null == t || t(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("9343"), n.e("84577")]).then(n.bind(n, 642298));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t),
                        );
                });
        }, [t]),
        O = i.useCallback(() => {
            null == t || t(),
                a()(null != b, "ResendEmailVerificationButton: currentUser cannot be undefined"),
                g(!0),
                (0, u.s)(b).finally(() => g(!1));
        }, [b, t]),
        j = i.useMemo(
            () =>
                (null == b ? void 0 : b.email) == null
                    ? [
                          {
                              text: f.intl.string(f.t.ydw5nZ),
                              onClick: h,
                              variant: "primary",
                          },
                      ]
                    : [
                          {
                              text: f.intl.string(f.t.Vm8akJ),
                              onClick: h,
                              variant: "secondary",
                          },
                          {
                              text: f.intl.string(f.t.lm1UKi),
                              onClick: O,
                              variant: "primary",
                              loading: p,
                          },
                      ],
            [b, h, O, p],
        );
    return (0, r.jsxs)(s.Modal, {
        title: f.intl.string(f.t.UZLrY2),
        transitionState: l,
        onClose: y,
        actions: j,
        children: [
            (0, r.jsx)("div", { className: m.imageUnverified }),
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: m.message,
                children: f.intl.string(f.t["0LgOKC"]),
            }),
        ],
    });
};
