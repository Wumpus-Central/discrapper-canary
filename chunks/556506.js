n.d(a, { default: () => h });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(862482),
    d = n(935462),
    o = n(571356),
    c = n(397927),
    m = n(235986),
    u = n(985018),
    p = n(933976);
let h = (e) => {
    let a,
        n,
        s,
        {
            body: h,
            cancelText: _,
            className: g,
            confirmColor: x,
            confirmText: j = u.intl.string(u.t.BddRzS),
            secondaryConfirmText: b,
            onCancel: f,
            onClose: N,
            onConfirm: y,
            onConfirmSecondary: A,
            title: C,
            transitionState: D,
            titleClassName: k,
        } = e,
        S = r.$n.Sizes.MEDIUM,
        [z, E] = i.useState(!1);
    return (
        i.useEffect(
            () => () => {
                z && A?.();
            },
            [z, A],
        ),
        null != _ &&
            "" !== _ &&
            (a = (0, t.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: S,
                color: r.$n.Colors.PRIMARY,
                onClick: () => {
                    N?.(), f?.();
                },
                className: p.zr,
                children: _,
            })),
        null != j &&
            "" !== j &&
            (n = (0, t.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: x,
                size: S,
                className: p.FS,
                autoFocus: !0,
                children: j,
            })),
        null != b &&
            "" !== b &&
            (s = (0, t.jsx)(c.Checkbox, { checked: z, onChange: (e) => E(e), label: b, labelType: "secondary" })),
        (0, t.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: D,
            size: d.rI.DYNAMIC,
            className: l()(g, p.kL),
            "aria-label": C,
            parentComponent: "Alert",
            children: (0, t.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), N?.(), y?.();
                },
                className: p.Zd,
                children: [
                    (0, t.jsx)(d.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != C
                                ? (0, t.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: l()(p.DD, k),
                                      children: C,
                                  })
                                : (0, t.jsx)(c.Heading, {
                                      variant: "heading-md/semibold",
                                      className: l()(p.DD, k),
                                      children: C,
                                  }),
                    }),
                    (0, t.jsx)(d.$m, {
                        "data-migration-pending": !0,
                        className: p.jE,
                        children: (0, t.jsx)(m.A, {
                            direction: m.A.Direction.VERTICAL,
                            justify: m.A.Justify.START,
                            className: p.Qs,
                            children:
                                null != h &&
                                (0, t.jsx)(o.E, {
                                    variant: "text-md/normal",
                                    className: p.rf,
                                    color: "text-default",
                                    children: h,
                                }),
                        }),
                    }),
                    (0, t.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: m.A.Wrap.WRAP,
                        className: p.Hx,
                        children: [n, a, s],
                    }),
                ],
            }),
        })
    );
};
