n.d(t, {
    A: () => g,
    S: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(139033),
    u = n(397927),
    d = n(830215),
    f = n(287809),
    p = n(985018);

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
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e) {
    return d.A.verifyResend()
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
                (0, u.qfG)((e) =>
                    (0, r.jsx)(
                        o.Modal,
                        h(
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
        a = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    s()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0), m(a).then(() => c(!1));
        }, [a]);
    return (0, r.jsx)(u.Button, {
        size: t,
        variant: n,
        onClick: d,
        text: p.intl.string(p.t.lm1UKt),
        disabled: o,
    });
}
