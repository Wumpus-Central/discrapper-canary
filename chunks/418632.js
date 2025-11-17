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
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
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
                        h(
                            {
                                header: _.intl.string(_.t.LykQYk),
                                confirmText: _.intl.string(_.t.BddRzS),
                                confirmButtonColor: c.zx.Colors.BRAND,
                            },
                            t,
                        ),
                        {
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: _.intl.format(_.t.azKEPy, { email: e.email }),
                            }),
                        },
                    ),
                ),
            );
        })
        .catch((e) => {
            let { body: t } = e,
                n = _.intl.string(_.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, u.h7j)((e) =>
                    (0, r.jsx)(
                        s.Modal,
                        h(
                            {
                                actions: [
                                    {
                                        variant: "primary",
                                        text: _.intl.string(_.t.BddRzS),
                                        onClick: e.onClose,
                                    },
                                ],
                                title: _.intl.string(_.t.VbTh0E),
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
        text: _.intl.string(_.t.lm1UKt),
        disabled: s,
    });
}
