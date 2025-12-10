n.d(t, { default: () => u }), n(388685), n(457542);
var r = n(54381),
    i = n(473749),
    a = n(159691),
    o = n(481060),
    s = n(388032),
    l = n(718325);
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
            onPasswordChange: m,
        } = e,
        [h, g] = i.useState(""),
        [E, b] = i.useState(null),
        [y, O] = i.useState(!1),
        v = (e) => null != _ && (null == e ? void 0 : e.code) === _,
        S = (e) => {
            e.preventDefault(),
                O(!0),
                f(h)
                    .then(
                        (e) => d(null != e ? e : void 0),
                        (e) => {
                            null != e.body &&
                                (null == p || p(e.body),
                                !v(e.body) &&
                                    (e.body.password
                                        ? (b(e.body.password), O(!1))
                                        : e.body.message && (b(e.body.message), O(!1))));
                        },
                    )
                    .finally(() => O(!1));
        },
        I = (e) => {
            null == m || m(e), g(e);
        },
        T = i.useCallback(async () => {
            await d();
        }, [d]),
        C =
            i.Children.count(c) > 0
                ? (0, r.jsx)(o.Zbd, {
                      type: o.Zbd.Types.WARNING,
                      className: l.card,
                      children: (0, r.jsx)(o.Text, {
                          color: "currentColor",
                          variant: "text-md/normal",
                          children: c,
                      }),
                  })
                : null;
    return (0, r.jsx)("form", {
        onSubmit: S,
        children: (0, r.jsxs)(a.u_l, {
            title: t,
            actions: [
                {
                    text: s.intl.string(s.t["ETE/oC"]),
                    onClick: T,
                    variant: "secondary",
                },
                {
                    text: null != n ? n : s.intl.string(s.t["cY+Oob"]),
                    type: "submit",
                    disabled: y || 0 === h.length,
                },
            ],
            onClose: T,
            transitionState: u,
            children: [
                C,
                (0, r.jsxs)("div", {
                    className: l.spacing,
                    children: [
                        (0, r.jsx)(o.oil, {
                            type: "password",
                            label: s.intl.string(s.t["CIGa+7"]),
                            autoComplete: "current-password",
                            autoFocus: !0,
                            value: h,
                            onChange: I,
                            required: !0,
                        }),
                        null != E && "" !== E
                            ? (0, r.jsxs)(o.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  className: l.error,
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
