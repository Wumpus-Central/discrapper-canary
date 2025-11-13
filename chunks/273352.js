n.d(t, { default: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(466377),
    c = n(993365),
    u = n(481060),
    d = n(600164),
    f = n(388032),
    _ = n(731646);
let p = (e) => {
    let t,
        n,
        a,
        {
            body: p,
            cancelText: h,
            className: m,
            confirmColor: g,
            confirmText: E = f.intl.string(f.t.BddRzS),
            secondaryConfirmText: b,
            onCancel: y,
            onClose: O,
            onConfirm: v,
            onConfirmSecondary: I,
            title: T,
            transitionState: S,
            titleClassName: A,
        } = e,
        C = s.Button.Sizes.MEDIUM,
        [N, R] = i.useState(!1);
    i.useEffect(
        () => () => {
            N && (null == I || I());
        },
        [N, I],
    );
    let P = () => {
            null == O || O(), null == y || y();
        },
        D = (e) => {
            null != e && e.preventDefault(), null == O || O(), null == v || v();
        };
    return (
        null != h &&
            "" !== h &&
            (t = (0, r.jsx)(s.Button, {
                type: "button",
                size: C,
                color: s.Button.Colors.PRIMARY,
                onClick: P,
                className: _.secondaryButton,
                children: h,
            })),
        null != E &&
            "" !== E &&
            (n = (0, r.jsx)(s.Button, {
                type: "submit",
                color: g,
                size: C,
                className: _.primaryButton,
                autoFocus: !0,
                children: E,
            })),
        null != b &&
            "" !== b &&
            (a = (0, r.jsx)(u.Checkbox, {
                checked: N,
                onChange: (e) => R(e),
                label: b,
                labelType: "secondary",
            })),
        (0, r.jsx)(l.Y0, {
            transitionState: S,
            size: l.Cg.DYNAMIC,
            className: o()(m, _.container),
            "aria-label": T,
            parentComponent: "Alert",
            children: (0, r.jsxs)("form", {
                onSubmit: D,
                className: _.form,
                children: [
                    (0, r.jsx)(l.xB, {
                        children:
                            null != T
                                ? (0, r.jsx)(u.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: o()(_.title, A),
                                      children: T,
                                  })
                                : (0, r.jsx)(u.Heading, {
                                      variant: "heading-md/semibold",
                                      className: o()(_.title, A),
                                      children: T,
                                  }),
                    }),
                    (0, r.jsx)(l.hz, {
                        className: _.modalContent,
                        children: (0, r.jsx)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            justify: d.Z.Justify.START,
                            className: _.content,
                            children:
                                null != p &&
                                (0, r.jsx)(c.x, {
                                    variant: "text-md/normal",
                                    className: _.body,
                                    color: "header-secondary",
                                    children: p,
                                }),
                        }),
                    }),
                    (0, r.jsxs)(l.mz, {
                        justify: void 0,
                        wrap: d.Z.Wrap.WRAP,
                        className: _.modalFooter,
                        children: [n, t, a],
                    }),
                ],
            }),
        })
    );
};
