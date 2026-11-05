var s = a(477900),
    n = a(582128),
    l = a(189213),
    o = a(993077),
    r = a(834730),
    i = a(95477),
    d = a(792996),
    c = a(41002);
function u(e) {
    let {
            title: t,
            actionText: a,
            children: u,
            transitionState: b,
            onClose: p,
            handleSubmit: y,
            onError: h,
            skipErrorMsgAbortCode: m,
            onPasswordChange: x,
            variant: C = "primary",
        } = e,
        [v, f] = n.useState(""),
        [k, w] = n.useState(null),
        [g, j] = n.useState(!1),
        N = n.useCallback(async () => {
            await p();
        }, [p]),
        S =
            n.Children.count(u) > 0
                ? (0, s.jsx)(o.Z, {
                      type: o.Z.Types.WARNING,
                      className: c.Nr,
                      children: (0, s.jsx)(r.E, { color: "currentColor", variant: "body-md/normal", children: u }),
                  })
                : null;
    return (0, s.jsx)("form", {
        onSubmit: function (e) {
            (e.preventDefault(),
                j(!0),
                y(v)
                    .then(
                        (e) => p(e ?? void 0),
                        (e) => {
                            var t;
                            null != e.body &&
                                (h?.(e.body),
                                (t = e.body),
                                (null == m || t?.code !== m) &&
                                    (e.body.password
                                        ? (w(e.body.password), j(!1))
                                        : e.body.message && (w(e.body.message), j(!1))));
                        },
                    )
                    .finally(() => j(!1)));
        },
        children: (0, s.jsxs)(l.a, {
            title: t,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: N, variant: "secondary" },
                { text: a ?? d.intl.string(d.t["cY+Oob"]), type: "submit", variant: C, disabled: g || 0 === v.length },
            ],
            onClose: N,
            transitionState: b,
            children: [
                S,
                (0, s.jsxs)("div", {
                    className: c.YK,
                    children: [
                        (0, s.jsx)(i.k, {
                            type: "password",
                            revealable: !0,
                            label: d.intl.string(d.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: v,
                            onChange: function (e) {
                                (x?.(e), f(e));
                            },
                            required: !0,
                        }),
                        null != k && "" !== k
                            ? (0, s.jsxs)(r.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  className: c.z3,
                                  children: [" ", k, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
((u.key = () => "password-confirm-modal"), a.d(t, {}, { default: u }));
