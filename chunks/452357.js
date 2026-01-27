n.d(t, {
    A: () => g,
    S: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(139033),
    d = n(397927),
    u = n(830215),
    _ = n(287809),
    p = n(985018);

function m(e) {
    return u.A.verifyResend()
        .then(() => {
            (0, c.A)({
                title: p.intl.string(p.t.LykQYk),
                subtitle: p.intl.format(p.t.azKEPy, {
                    email: e.email,
                }),
            });
        })
        .catch((e) => {
            let { body: t } = e,
                n = p.intl.string(p.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, d.qfG)((e) =>
                    (0, r.jsx)(
                        a.Modal,
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
                        })(
                            {
                                actions: [
                                    {
                                        variant: "primary",
                                        text: p.intl.string(p.t.BddRzS),
                                        onClick: e.onClose,
                                    },
                                ],
                                title: p.intl.string(p.t.VbTh0E),
                                subtitle: n,
                            },
                            e,
                        ),
                    ),
                );
        });
}

function g(e) {
    let { size: t, variant: n } = e,
        l = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    s()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [a, c] = i.useState(!1),
        u = i.useCallback(() => {
            c(!0), m(l).then(() => c(!1));
        }, [l]);
    return (0, r.jsx)(d.Button, {
        size: t,
        variant: n,
        onClick: u,
        text: p.intl.string(p.t.lm1UKt),
        disabled: a,
    });
}
