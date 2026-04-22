s.d(t, { default: () => c });
var n = s(627968),
    l = s(64700),
    a = s(189213),
    o = s(359778),
    i = s(834730),
    r = s(292666),
    d = s(985018),
    h = s(786055);
function u(e) {
    let {
            title: t,
            actionText: s,
            children: u,
            transitionState: c,
            onClose: p,
            handleSubmit: f,
            onError: C,
            skipErrorMsgAbortCode: g,
            onPasswordChange: m,
            variant: y = "primary",
        } = e,
        [b, x] = l.useState(""),
        [A, k] = l.useState(null),
        [v, R] = l.useState(!1),
        S = l.useCallback(async () => {
            await p();
        }, [p]),
        j =
            l.Children.count(u) > 0
                ? (0, n.jsx)(o.Z, {
                      type: o.Z.Types.WARNING,
                      className: h.Nr,
                      children: (0, n.jsx)(i.E, { color: "currentColor", variant: "text-md/normal", children: u }),
                  })
                : null;
    return (0, n.jsx)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                R(!0),
                f(b)
                    .then(
                        (e) => p(e ?? void 0),
                        (e) => {
                            let t;
                            null != e.body &&
                                (C?.(e.body),
                                (t = e.body),
                                (null == g || t?.code !== g) &&
                                    (e.body.password
                                        ? (k(e.body.password), R(!1))
                                        : e.body.message && (k(e.body.message), R(!1))));
                        },
                    )
                    .finally(() => R(!1));
        },
        children: (0, n.jsxs)(a.Modal, {
            title: t,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: S, variant: "secondary" },
                { text: s ?? d.intl.string(d.t["cY+Oob"]), type: "submit", variant: y, disabled: v || 0 === b.length },
            ],
            onClose: S,
            transitionState: c,
            children: [
                j,
                (0, n.jsxs)("div", {
                    className: h.YK,
                    children: [
                        (0, n.jsx)(r.k, {
                            type: "password",
                            label: d.intl.string(d.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: b,
                            onChange: (e) => {
                                m?.(e), x(e);
                            },
                            required: !0,
                        }),
                        null != A && "" !== A
                            ? (0, n.jsxs)(i.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: h.z3,
                                  children: [" ", A, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
u.key = () => "password-confirm-modal";
let c = u;
