l.d(a, {
    default: () => h,
}),
    l(896048);
var n = l(627968),
    s = l(64700),
    i = l(503698),
    t = l.n(i),
    d = l(862482),
    r = l(935462),
    c = l(571356),
    o = l(397927),
    u = l(235986),
    f = l(985018),
    m = l(933976);
let h = (e) => {
    let a,
        l,
        i,
        {
            body: h,
            cancelText: b,
            className: p,
            confirmColor: x,
            confirmText: j = f.intl.string(f.t.BddRzS),
            secondaryConfirmText: g,
            onCancel: N,
            onClose: A,
            onConfirm: D,
            onConfirmSecondary: k,
            title: C,
            transitionState: _,
            titleClassName: S,
        } = e,
        y = d.$n.Sizes.MEDIUM,
        [z, E] = s.useState(!1);
    return (
        s.useEffect(
            () => () => {
                z && (null == k || k());
            },
            [z, k],
        ),
        null != b &&
            "" !== b &&
            (a = (0, n.jsx)(d.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: y,
                color: d.$n.Colors.PRIMARY,
                onClick: () => {
                    null == A || A(), null == N || N();
                },
                className: m.zr,
                children: b,
            })),
        null != j &&
            "" !== j &&
            (l = (0, n.jsx)(d.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: x,
                size: y,
                className: m.FS,
                autoFocus: !0,
                children: j,
            })),
        null != g &&
            "" !== g &&
            (i = (0, n.jsx)(o.Checkbox, {
                checked: z,
                onChange: (e) => E(e),
                label: g,
                labelType: "secondary",
            })),
        (0, n.jsx)(r.EO, {
            "data-migration-pending": !0,
            transitionState: _,
            size: r.rI.DYNAMIC,
            className: t()(p, m.kL),
            "aria-label": C,
            parentComponent: "Alert",
            children: (0, n.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == A || A(), null == D || D();
                },
                className: m.Zd,
                children: [
                    (0, n.jsx)(r.rQ, {
                        children:
                            null != C
                                ? (0, n.jsx)(o.Heading, {
                                      variant: "heading-lg/semibold",
                                      className: t()(m.DD, S),
                                      children: C,
                                  })
                                : (0, n.jsx)(o.Heading, {
                                      variant: "heading-md/semibold",
                                      className: t()(m.DD, S),
                                      children: C,
                                  }),
                    }),
                    (0, n.jsx)(r.$m, {
                        className: m.jE,
                        children: (0, n.jsx)(u.A, {
                            direction: u.A.Direction.VERTICAL,
                            justify: u.A.Justify.START,
                            className: m.Qs,
                            children:
                                null != h &&
                                (0, n.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    className: m.rf,
                                    color: "text-default",
                                    children: h,
                                }),
                        }),
                    }),
                    (0, n.jsxs)(r.jl, {
                        justify: void 0,
                        wrap: u.A.Wrap.WRAP,
                        className: m.Hx,
                        children: [l, a, i],
                    }),
                ],
            }),
        })
    );
};
