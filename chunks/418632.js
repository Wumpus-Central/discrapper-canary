n.d(t, {
    Z: () => b,
    s: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    f = n(594174),
    p = n(388032);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return d.Z.verifyResend()
        .then(() => {
            (0, u.h7j)((t) =>
                (0, r.jsx)(
                    u.ConfirmModal,
                    g(
                        m(
                            {
                                header: p.intl.string(p.t.LykQYk),
                                confirmText: p.intl.string(p.t.BddRzS),
                                confirmButtonColor: c.zx.Colors.BRAND,
                            },
                            t,
                        ),
                        {
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: p.intl.format(p.t.azKEPy, { email: e.email }),
                            }),
                        },
                    ),
                ),
            );
        })
        .catch((e) => {
            let { body: t } = e,
                n = p.intl.string(p.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, u.h7j)((e) =>
                    (0, r.jsx)(
                        s.Modal,
                        m(
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
function b(e) {
    let { size: t, variant: n } = e,
        a = (0, l.e7)([f.default], () => f.default.getCurrentUser());
    o()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [s, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0), E(a).then(() => c(!1));
        }, [a]);
    return (0, r.jsx)(u.Button, {
        size: t,
        variant: n,
        onClick: d,
        text: p.intl.string(p.t.lm1UKt),
        disabled: s,
    });
}
