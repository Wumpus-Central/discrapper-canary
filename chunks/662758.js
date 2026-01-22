n.d(t, {
    default: () => u,
}),
    n(896048),
    n(492834);
var r = n(627968),
    i = n(64700),
    a = n(732955),
    s = n(397927),
    o = n(985018),
    l = n(574592);

function c(e) {
    let {
            title: t,
            actionText: n,
            children: c,
            transitionState: u,
            onClose: d,
            handleSubmit: f,
            onError: p,
            skipErrorMsgAbortCode: _,
            onPasswordChange: h,
        } = e,
        [m, g] = i.useState(""),
        [E, b] = i.useState(null),
        [y, O] = i.useState(!1),
        A = (e) => null != _ && (null == e ? void 0 : e.code) === _,
        v = (e) => {
            e.preventDefault(),
                O(!0),
                f(m)
                    .then(
                        (e) => d(null != e ? e : void 0),
                        (e) => {
                            null == e.body ||
                                (null == p || p(e.body),
                                !A(e.body) &&
                                    (e.body.password
                                        ? (b(e.body.password), O(!1))
                                        : e.body.message && (b(e.body.message), O(!1))));
                        },
                    )
                    .finally(() => O(!1));
        },
        S = (e) => {
            null == h || h(e), g(e);
        },
        I = i.useCallback(async () => {
            await d();
        }, [d]),
        T =
            i.Children.count(c) > 0
                ? (0, r.jsx)(s.ZpM, {
                      type: s.ZpM.Types.WARNING,
                      className: l.Nr,
                      children: (0, r.jsx)(s.Text, {
                          color: "currentColor",
                          variant: "text-md/normal",
                          children: c,
                      }),
                  })
                : null;
    return (0, r.jsx)("form", {
        onSubmit: v,
        children: (0, r.jsxs)(a.aFV, {
            title: t,
            actions: [
                {
                    text: o.intl.string(o.t["ETE/oC"]),
                    onClick: I,
                    variant: "secondary",
                },
                {
                    text: null != n ? n : o.intl.string(o.t["cY+Oob"]),
                    type: "submit",
                    disabled: y || 0 === m.length,
                },
            ],
            onClose: I,
            transitionState: u,
            children: [
                T,
                (0, r.jsxs)("div", {
                    className: l.YK,
                    children: [
                        (0, r.jsx)(s.ksK, {
                            type: "password",
                            label: o.intl.string(o.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: m,
                            onChange: S,
                            required: !0,
                        }),
                        null != E && "" !== E
                            ? (0, r.jsxs)(s.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: l.z3,
                                  children: [" ", E, " "],
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
c.key = () => "password-confirm-modal";
let u = c;
