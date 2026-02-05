n.d(t, { default: () => d });
var s = n(627968),
    a = n(64700),
    i = n(732955),
    l = n(397927),
    o = n(985018),
    r = n(574592);
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
        } = e,
        [p, _] = a.useState(""),
        [f, g] = a.useState(null),
        [C, m] = a.useState(!1),
        A = a.useCallback(async () => {
            await c();
        }, [c]),
        y =
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
                m(!0),
                u(p)
                    .then(
                        (e) => c(e ?? void 0),
                        (e) => {
                            let t;
                            null != e.body &&
                                (h?.(e.body),
                                (t = e.body),
                                (null == R || t?.code !== R) &&
                                    (e.body.password
                                        ? (g(e.body.password), m(!1))
                                        : e.body.message && (g(e.body.message), m(!1))));
                        },
                    )
                    .finally(() => m(!1));
        },
        children: (0, s.jsxs)(i.aFV, {
            title: t,
            actions: [
                { text: o.intl.string(o.t["ETE/oC"]), onClick: A, variant: "secondary" },
                { text: n ?? o.intl.string(o.t["cY+Oob"]), type: "submit", disabled: C || 0 === p.length },
            ],
            onClose: A,
            transitionState: d,
            children: [
                y,
                (0, s.jsxs)("div", {
                    className: r.YK,
                    children: [
                        (0, s.jsx)(l.ksK, {
                            type: "password",
                            label: o.intl.string(o.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: p,
                            onChange: (e) => {
                                I?.(e), _(e);
                            },
                            required: !0,
                        }),
                        null != f && "" !== f
                            ? (0, s.jsxs)(l.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: r.z3,
                                  children: [" ", f, " "],
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
