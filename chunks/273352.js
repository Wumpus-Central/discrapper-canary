t.d(n, { default: () => x }), t(388685);
var l = t(54381),
    a = t(473749),
    o = t(120356),
    s = t.n(o),
    r = t(693789),
    i = t(466377),
    c = t(993365),
    d = t(481060),
    u = t(600164),
    m = t(388032),
    h = t(573857);
let x = (e) => {
    let n,
        t,
        o,
        {
            body: x,
            cancelText: _,
            className: p,
            confirmColor: y,
            confirmText: b = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: j,
            onCancel: f,
            onClose: C,
            onConfirm: z,
            onConfirmSecondary: N,
            title: g,
            transitionState: B,
            titleClassName: k,
        } = e,
        v = r.zx.Sizes.MEDIUM,
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
            (n = (0, l.jsx)(r.zx, {
                type: "button",
                size: v,
                color: r.zx.Colors.PRIMARY,
                onClick: () => {
                    null == C || C(), null == f || f();
                },
                className: h.secondaryButton,
                children: _,
            })),
        null != b &&
            "" !== b &&
            (t = (0, l.jsx)(r.zx, {
                type: "submit",
                color: y,
                size: v,
                className: h.primaryButton,
                autoFocus: !0,
                children: b,
            })),
        null != j &&
            "" !== j &&
            (o = (0, l.jsx)(d.Checkbox, {
                checked: A,
                onChange: (e) => R(e),
                label: j,
                labelType: "secondary",
            })),
        (0, l.jsx)(i.Y0, {
            transitionState: B,
            size: i.Cg.DYNAMIC,
            className: s()(p, h.container),
            "aria-label": g,
            parentComponent: "Alert",
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == C || C(), null == z || z();
                },
                className: h.form,
                children: [
                    (0, l.jsx)(i.xB, {
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
                    (0, l.jsx)(i.hz, {
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
                                    color: "header-secondary",
                                    children: x,
                                }),
                        }),
                    }),
                    (0, l.jsxs)(i.mz, {
                        justify: void 0,
                        wrap: u.Z.Wrap.WRAP,
                        className: h.modalFooter,
                        children: [t, n, o],
                    }),
                ],
            }),
        })
    );
};
