t.d(n, { default: () => p }), t(388685);
var a = t(54381),
    l = t(473749),
    o = t(120356),
    i = t.n(o),
    s = t(693789),
    r = t(466377),
    d = t(993365),
    c = t(481060),
    u = t(600164),
    m = t(388032),
    h = t(573857);
let p = (e) => {
    let n,
        t,
        o,
        {
            body: p,
            cancelText: x,
            className: _,
            confirmColor: y,
            confirmText: b = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: f,
            onCancel: g,
            onClose: j,
            onConfirm: C,
            onConfirmSecondary: z,
            title: N,
            transitionState: B,
            titleClassName: k,
        } = e,
        v = s.zx.Sizes.MEDIUM,
        [A, R] = l.useState(!1);
    return (
        l.useEffect(
            () => () => {
                A && (null == z || z());
            },
            [A, z],
        ),
        null != x &&
            "" !== x &&
            (n = (0, a.jsx)(s.zx, {
                "data-migration-pending": !0,
                type: "button",
                size: v,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == j || j(), null == g || g();
                },
                className: h.secondaryButton,
                children: x,
            })),
        null != b &&
            "" !== b &&
            (t = (0, a.jsx)(s.zx, {
                "data-migration-pending": !0,
                type: "submit",
                color: y,
                size: v,
                className: h.primaryButton,
                autoFocus: !0,
                children: b,
            })),
        null != f &&
            "" !== f &&
            (o = (0, a.jsx)(c.Checkbox, {
                checked: A,
                onChange: (e) => R(e),
                label: f,
                labelType: "secondary",
            })),
        (0, a.jsx)(r.Y0, {
            "data-migration-pending": !0,
            transitionState: B,
            size: r.Cg.DYNAMIC,
            className: i()(_, h.container),
            "aria-label": N,
            parentComponent: "Alert",
            children: (0, a.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == j || j(), null == C || C();
                },
                className: h.form,
                children: [
                    (0, a.jsx)(r.xB, {
                        children:
                            null != N
                                ? (0, a.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: i()(h.title, k),
                                      children: N,
                                  })
                                : (0, a.jsx)(c.Heading, {
                                      variant: "heading-md/semibold",
                                      className: i()(h.title, k),
                                      children: N,
                                  }),
                    }),
                    (0, a.jsx)(r.hz, {
                        className: h.modalContent,
                        children: (0, a.jsx)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.START,
                            className: h.content,
                            children:
                                null != p &&
                                (0, a.jsx)(d.x, {
                                    variant: "text-md/normal",
                                    className: h.body,
                                    color: "text-default",
                                    children: p,
                                }),
                        }),
                    }),
                    (0, a.jsxs)(r.mz, {
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
