n.d(t, { default: () => d });
var s = n(627968),
    a = n(64700),
    i = n(732955),
    l = n(397927),
    o = n(985018),
    r = n(755430);
function E(e) {
    let {
            title: t,
            actionText: n,
            children: E,
            transitionState: d,
            onClose: c,
            handleSubmit: u,
            onError: h,
            skipErrorMsgAbortCode: R,
            onPasswordChange: I,
            variant: p = "primary",
        } = e,
        [_, f] = a.useState(""),
        [g, C] = a.useState(null),
        [m, A] = a.useState(!1),
        y = a.useCallback(async () => {
            await c();
        }, [c]),
        F =
            a.Children.count(E) > 0
                ? (0, s.jsx)(l.ZpM, {
                      type: l.ZpM.Types.WARNING,
                      className: r.Nr,
                      children: (0, s.jsx)(l.Text, { color: "currentColor", variant: "text-md/normal", children: E }),
                  })
                : null;
    return (0, s.jsx)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                A(!0),
                u(_)
                    .then(
                        (e) => c(e ?? void 0),
                        (e) => {
                            let t;
                            null != e.body &&
                                (h?.(e.body),
                                (t = e.body),
                                (null == R || t?.code !== R) &&
                                    (e.body.password
                                        ? (C(e.body.password), A(!1))
                                        : e.body.message && (C(e.body.message), A(!1))));
                        },
                    )
                    .finally(() => A(!1));
        },
        children: (0, s.jsxs)(i.aFV, {
            title: t,
            actions: [
                { text: o.intl.string(o.t["ETE/oC"]), onClick: y, variant: "secondary" },
                { text: n ?? o.intl.string(o.t["cY+Oob"]), type: "submit", variant: p, disabled: m || 0 === _.length },
            ],
            onClose: y,
            transitionState: d,
            children: [
                F,
                (0, s.jsxs)("div", {
                    className: r.YK,
                    children: [
                        (0, s.jsx)(l.ksK, {
                            type: "password",
                            label: o.intl.string(o.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: _,
                            onChange: (e) => {
                                I?.(e), f(e);
                            },
                            required: !0,
                        }),
                        null != g && "" !== g
                            ? (0, s.jsxs)(l.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: r.z3,
                                  children: [" ", g, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
E.key = () => "password-confirm-modal";
let d = E;
