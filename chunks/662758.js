a.d(e, { default: () => p });
var s = a(627968),
    l = a(64700),
    n = a(189213),
    o = a(993077),
    r = a(834730),
    i = a(292666),
    d = a(375708),
    c = a(786055);
function u(t) {
    let {
            title: e,
            actionText: a,
            children: u,
            transitionState: p,
            onClose: b,
            handleSubmit: h,
            onError: m,
            skipErrorMsgAbortCode: y,
            onPasswordChange: x,
            variant: C = "primary",
        } = t,
        [k, v] = l.useState(""),
        [w, f] = l.useState(null),
        [g, j] = l.useState(!1),
        N = l.useCallback(async () => {
            await b();
        }, [b]),
        S =
            l.Children.count(u) > 0
                ? (0, s.jsx)(o.Z, {
                      type: o.Z.Types.WARNING,
                      className: c.Nr,
                      children: (0, s.jsx)(r.E, { color: "currentColor", variant: "text-md/normal", children: u }),
                  })
                : null;
    return (0, s.jsx)("form", {
        onSubmit: (t) => {
            t.preventDefault(),
                j(!0),
                h(k)
                    .then(
                        (t) => b(t ?? void 0),
                        (t) => {
                            let e;
                            null != t.body &&
                                (m?.(t.body),
                                (e = t.body),
                                (null == y || e?.code !== y) &&
                                    (t.body.password
                                        ? (f(t.body.password), j(!1))
                                        : t.body.message && (f(t.body.message), j(!1))));
                        },
                    )
                    .finally(() => j(!1));
        },
        children: (0, s.jsxs)(n.Modal, {
            title: e,
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: N, variant: "secondary" },
                { text: a ?? d.intl.string(d.t["cY+Oob"]), type: "submit", variant: C, disabled: g || 0 === k.length },
            ],
            onClose: N,
            transitionState: p,
            children: [
                S,
                (0, s.jsxs)("div", {
                    className: c.YK,
                    children: [
                        (0, s.jsx)(i.k, {
                            type: "password",
                            label: d.intl.string(d.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: k,
                            onChange: (t) => {
                                x?.(t), v(t);
                            },
                            required: !0,
                        }),
                        null != w && "" !== w
                            ? (0, s.jsxs)(r.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: c.z3,
                                  children: [" ", w, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
u.key = () => "password-confirm-modal";
let p = u;
