n.d(t, { default: () => x }), n(388685);
var l = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    i = n(693789),
    r = n(466377),
    c = n(993365),
    d = n(481060),
    u = n(600164),
    m = n(388032),
    h = n(573857);
let x = (e) => {
    let t,
        n,
        o,
        {
            body: x,
            cancelText: _,
            className: p,
            confirmColor: y,
            confirmText: b = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: f,
            onCancel: j,
            onClose: C,
            onConfirm: z,
            onConfirmSecondary: N,
            title: g,
            transitionState: B,
            titleClassName: k,
        } = e,
        v = i.zx.Sizes.MEDIUM,
        [A, R] = a.useState(!1);
    return (
        a.useEffect(
            () => () => {
                A && (null == N || N());
            },
            [A, N],
        ),
        null != _ &&
            "" !== _ &&
            (t = (0, l.jsx)(i.zx, {
                type: "button",
                size: v,
                color: i.zx.Colors.PRIMARY,
                onClick: () => {
                    null == C || C(), null == j || j();
                },
                className: h.secondaryButton,
                children: _,
            })),
        null != b &&
            "" !== b &&
            (n = (0, l.jsx)(i.zx, {
                type: "submit",
                color: y,
                size: v,
                className: h.primaryButton,
                autoFocus: !0,
                children: b,
            })),
        null != f &&
            "" !== f &&
            (o = (0, l.jsx)(d.Checkbox, {
                checked: A,
                onChange: (e) => R(e),
                label: f,
                labelType: "secondary",
            })),
        (0, l.jsx)(r.Y0, {
            transitionState: B,
            size: r.Cg.DYNAMIC,
            className: s()(p, h.container),
            "aria-label": g,
            parentComponent: "Alert",
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == C || C(), null == z || z();
                },
                className: h.form,
                children: [
                    (0, l.jsx)(r.xB, {
                        children:
                            null != g
                                ? (0, l.jsx)(d.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: s()(h.title, k),
                                      children: g,
                                  })
                                : (0, l.jsx)(d.Heading, {
                                      variant: "heading-md/semibold",
                                      className: s()(h.title, k),
                                      children: g,
                                  }),
                    }),
                    (0, l.jsx)(r.hz, {
                        className: h.modalContent,
                        children: (0, l.jsx)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.START,
                            className: h.content,
                            children:
                                null != x &&
                                (0, l.jsx)(c.x, {
                                    variant: "text-md/normal",
                                    className: h.body,
                                    color: "text-default",
                                    children: x,
                                }),
                        }),
                    }),
                    (0, l.jsxs)(r.mz, {
                        justify: void 0,
                        wrap: u.Z.Wrap.WRAP,
                        className: h.modalFooter,
                        children: [n, t, o],
                    }),
                ],
            }),
        })
    );
};
