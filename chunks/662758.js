n.d(t, { default: () => c });
var l = n(627968),
    a = n(64700),
    s = n(189213),
    i = n(359778),
    r = n(834730),
    o = n(292666),
    d = n(375708),
    u = n(43207);
function h(e) {
    let {
            title: t,
            actionText: n,
            children: h,
            transitionState: c,
            onClose: p,
            handleSubmit: b,
            onError: g,
            skipErrorMsgAbortCode: C,
            onPasswordChange: m,
            variant: f = "primary",
        } = e,
        [y, x] = a.useState(""),
        [v, A] = a.useState(null),
        [S, k] = a.useState(!1),
        j = a.useCallback(async () => {
            await p();
        }, [p]),
        P =
            a.Children.count(h) > 0
                ? (0, l.jsx)(i.Z, {
                      type: i.Z.Types.WARNING,
                      className: u.Nr,
                      children: (0, l.jsx)(r.E, { color: "currentColor", variant: "text-md/normal", children: h }),
                  })
                : null;
    return (0, l.jsx)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                k(!0),
                b(y)
                    .then(
                        (e) => p(e ?? void 0),
                        (e) => {
                            let t;
                            null != e.body &&
                                (g?.(e.body),
                                (t = e.body),
                                (null == C || t?.code !== C) &&
                                    (e.body.password
                                        ? (A(e.body.password), k(!1))
                                        : e.body.message && (A(e.body.message), k(!1))));
                        },
                    )
                    .finally(() => k(!1));
        },
        children: (0, l.jsxs)(s.Modal, {
            title: t,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: j, variant: "secondary" },
                { text: n ?? d.intl.string(d.t["cY+Oob"]), type: "submit", variant: f, disabled: S || 0 === y.length },
            ],
            onClose: j,
            transitionState: c,
            children: [
                P,
                (0, l.jsxs)("div", {
                    className: u.YK,
                    children: [
                        (0, l.jsx)(o.k, {
                            type: "password",
                            label: d.intl.string(d.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: y,
                            onChange: (e) => {
                                m?.(e), x(e);
                            },
                            required: !0,
                        }),
                        null != v && "" !== v
                            ? (0, l.jsxs)(r.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: u.z3,
                                  children: [" ", v, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
h.key = () => "password-confirm-modal";
let c = h;
