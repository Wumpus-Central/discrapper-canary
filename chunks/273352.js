n.d(t, { default: () => _ }), n(388685);
var l = n(54381),
    o = n(473749),
    a = n(120356),
    s = n.n(a),
    r = n(693789),
    i = n(466377),
    c = n(993365),
    d = n(481060),
    u = n(600164),
    m = n(388032),
    h = n(727781);
let _ = (e) => {
    let t,
        n,
        a,
        {
            body: _,
            cancelText: p,
            className: x,
            confirmColor: y,
            confirmText: b = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: j,
            onCancel: f,
            onClose: C,
            onConfirm: B,
            onConfirmSecondary: N,
            title: g,
            transitionState: k,
            titleClassName: z,
        } = e,
        v = r.Button.Sizes.MEDIUM,
        [A, R] = o.useState(!1);
    return (
        o.useEffect(
            () => () => {
                A && (null == N || N());
            },
            [A, N],
        ),
        null != p &&
            "" !== p &&
            (t = (0, l.jsx)(r.Button, {
                type: "button",
                size: v,
                color: r.Button.Colors.PRIMARY,
                onClick: () => {
                    null == C || C(), null == f || f();
                },
                className: h.secondaryButton,
                children: p,
            })),
        null != b &&
            "" !== b &&
            (n = (0, l.jsx)(r.Button, {
                type: "submit",
                color: y,
                size: v,
                className: h.primaryButton,
                autoFocus: !0,
                children: b,
            })),
        null != j &&
            "" !== j &&
            (a = (0, l.jsx)(d.Checkbox, {
                checked: A,
                onChange: (e) => R(e),
                label: j,
                labelType: "secondary",
            })),
        (0, l.jsx)(i.Y0, {
            transitionState: k,
            size: i.Cg.DYNAMIC,
            className: s()(x, h.container),
            "aria-label": g,
            parentComponent: "Alert",
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == C || C(), null == B || B();
                },
                className: h.form,
                children: [
                    (0, l.jsx)(i.xB, {
                        children:
                            null != g
                                ? (0, l.jsx)(d.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: s()(h.title, z),
                                      children: g,
                                  })
                                : (0, l.jsx)(d.Heading, {
                                      variant: "heading-md/semibold",
                                      className: s()(h.title, z),
                                      children: g,
                                  }),
                    }),
                    (0, l.jsx)(i.hz, {
                        className: h.modalContent,
                        children: (0, l.jsx)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.START,
                            className: h.content,
                            children:
                                null != _ &&
                                (0, l.jsx)(c.x, {
                                    variant: "text-md/normal",
                                    className: h.body,
                                    color: "header-secondary",
                                    children: _,
                                }),
                        }),
                    }),
                    (0, l.jsxs)(i.mz, {
                        justify: void 0,
                        wrap: u.Z.Wrap.WRAP,
                        className: h.modalFooter,
                        children: [n, t, a],
                    }),
                ],
            }),
        })
    );
};
