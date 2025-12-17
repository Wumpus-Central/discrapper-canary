t.d(n, { default: () => h }), t(388685);
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
    f = t(881537);
let h = (e) => {
    let n,
        t,
        o,
        {
            body: h,
            cancelText: p,
            className: x,
            confirmColor: y,
            confirmText: b = m.intl.string(m.t.BddRzS),
            secondaryConfirmText: g,
            onCancel: j,
            onClose: C,
            onConfirm: z,
            onConfirmSecondary: N,
            title: _,
            transitionState: B,
            titleClassName: k,
        } = e,
        v = s.zx.Sizes.MEDIUM,
        [A, R] = l.useState(!1);
    return (
        l.useEffect(
            () => () => {
                A && (null == N || N());
            },
            [A, N],
        ),
        null != p &&
            "" !== p &&
            (n = (0, a.jsx)(s.zx, {
                "data-migration-pending": !0,
                type: "button",
                size: v,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == C || C(), null == j || j();
                },
                className: f.secondaryButton,
                children: p,
            })),
        null != b &&
            "" !== b &&
            (t = (0, a.jsx)(s.zx, {
                "data-migration-pending": !0,
                type: "submit",
                color: y,
                size: v,
                className: f.primaryButton,
                autoFocus: !0,
                children: b,
            })),
        null != g &&
            "" !== g &&
            (o = (0, a.jsx)(c.Checkbox, {
                checked: A,
                onChange: (e) => R(e),
                label: g,
                labelType: "secondary",
            })),
        (0, a.jsx)(r.Y0, {
            "data-migration-pending": !0,
            transitionState: B,
            size: r.Cg.DYNAMIC,
            className: i()(x, f.container),
            "aria-label": _,
            parentComponent: "Alert",
            children: (0, a.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == C || C(), null == z || z();
                },
                className: f.form,
                children: [
                    (0, a.jsx)(r.xB, {
                        children:
                            null != _
                                ? (0, a.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: i()(f.title, k),
                                      children: _,
                                  })
                                : (0, a.jsx)(c.Heading, {
                                      variant: "heading-md/semibold",
                                      className: i()(f.title, k),
                                      children: _,
                                  }),
                    }),
                    (0, a.jsx)(r.hz, {
                        className: f.modalContent,
                        children: (0, a.jsx)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.START,
                            className: f.content,
                            children:
                                null != h &&
                                (0, a.jsx)(d.x, {
                                    variant: "text-md/normal",
                                    className: f.body,
                                    color: "text-default",
                                    children: h,
                                }),
                        }),
                    }),
                    (0, a.jsxs)(r.mz, {
                        justify: void 0,
                        wrap: u.Z.Wrap.WRAP,
                        className: f.modalFooter,
                        children: [t, n, o],
                    }),
                ],
            }),
        })
    );
};
