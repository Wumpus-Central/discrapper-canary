n.d(t, {
    default: () => E,
}),
    n(896048),
    n(492834);
var l = n(627968),
    s = n(64700),
    a = n(732955),
    i = n(397927),
    o = n(985018),
    r = n(574592);

function u(e) {
    let {
            title: t,
            actionText: n,
            children: u,
            transitionState: E,
            onClose: c,
            handleSubmit: d,
            onError: h,
            skipErrorMsgAbortCode: R,
            onPasswordChange: I,
        } = e,
        [p, _] = s.useState(""),
        [f, g] = s.useState(null),
        [C, m] = s.useState(!1),
        b = s.useCallback(async () => {
            await c();
        }, [c]),
        A =
            s.Children.count(u) > 0
                ? (0, l.jsx)(i.ZpM, {
                      type: i.ZpM.Types.WARNING,
                      className: r.Nr,
                      children: (0, l.jsx)(i.Text, {
                          color: "currentColor",
                          variant: "text-md/normal",
                          children: u,
                      }),
                  })
                : null;
    return (0, l.jsx)("form", {
        onSubmit: (e) => {
            e.preventDefault(),
                m(!0),
                d(p)
                    .then(
                        (e) => c(null != e ? e : void 0),
                        (e) => {
                            let t;
                            null != e.body &&
                                (null == h || h(e.body),
                                (t = e.body),
                                (null == R || (null == t ? void 0 : t.code) !== R) &&
                                    (e.body.password
                                        ? (g(e.body.password), m(!1))
                                        : e.body.message && (g(e.body.message), m(!1))));
                        },
                    )
                    .finally(() => m(!1));
        },
        children: (0, l.jsxs)(a.aFV, {
            title: t,
            actions: [
                {
                    text: o.intl.string(o.t["ETE/oC"]),
                    onClick: b,
                    variant: "secondary",
                },
                {
                    text: null != n ? n : o.intl.string(o.t["cY+Oob"]),
                    type: "submit",
                    disabled: C || 0 === p.length,
                },
            ],
            onClose: b,
            transitionState: E,
            children: [
                A,
                (0, l.jsxs)("div", {
                    className: r.YK,
                    children: [
                        (0, l.jsx)(i.ksK, {
                            type: "password",
                            label: o.intl.string(o.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: p,
                            onChange: (e) => {
                                null == I || I(e), _(e);
                            },
                            required: !0,
                        }),
                        null != f && "" !== f
                            ? (0, l.jsxs)(i.Text, {
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
u.key = () => "password-confirm-modal";
let E = u;
