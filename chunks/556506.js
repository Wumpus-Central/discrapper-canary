a.d(n, {
    default: () => h,
}),
    a(896048);
var l = a(627968),
    t = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(862482),
    d = a(935462),
    o = a(571356),
    c = a(397927),
    u = a(235986),
    m = a(985018),
    p = a(933976);
let h = (e) => {
    let n,
        a,
        i,
        {
            body: h,
            cancelText: _,
            className: g,
            confirmColor: x,
            confirmText: j = m.intl.string(m.t.BddRzS),
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
        [z, E] = t.useState(!1);
    return (
        t.useEffect(
            () => () => {
                z && (null == A || A());
            },
            [z, A],
        ),
        null != _ &&
            "" !== _ &&
            (n = (0, l.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: S,
                color: r.$n.Colors.PRIMARY,
                onClick: () => {
                    null == N || N(), null == f || f();
                },
                className: p.zr,
                children: _,
            })),
        null != j &&
            "" !== j &&
            (a = (0, l.jsx)(r.$n, {
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
            (i = (0, l.jsx)(c.Checkbox, {
                checked: z,
                onChange: (e) => E(e),
                label: b,
                labelType: "secondary",
            })),
        (0, l.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: D,
            size: d.rI.DYNAMIC,
            className: s()(g, p.kL),
            "aria-label": C,
            parentComponent: "Alert",
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == N || N(), null == y || y();
                },
                className: p.Zd,
                children: [
                    (0, l.jsx)(d.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != C
                                ? (0, l.jsx)(c.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: s()(p.DD, k),
                                      children: C,
                                  })
                                : (0, l.jsx)(c.Heading, {
                                      variant: "heading-md/semibold",
                                      className: s()(p.DD, k),
                                      children: C,
                                  }),
                    }),
                    (0, l.jsx)(d.$m, {
                        "data-migration-pending": !0,
                        className: p.jE,
                        children: (0, l.jsx)(u.A, {
                            direction: u.A.Direction.VERTICAL,
                            justify: u.A.Justify.START,
                            className: p.Qs,
                            children:
                                null != h &&
                                (0, l.jsx)(o.E, {
                                    variant: "text-md/normal",
                                    className: p.rf,
                                    color: "text-default",
                                    children: h,
                                }),
                        }),
                    }),
                    (0, l.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: u.A.Wrap.WRAP,
                        className: p.Hx,
                        children: [a, n, i],
                    }),
                ],
            }),
        })
    );
};
