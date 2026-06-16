n.d(e, { default: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    t = n.n(l),
    r = n(862482),
    d = n(935462),
    c = n(834730),
    o = n(150934),
    m = n(534514),
    u = n(235986),
    p = n(375708),
    h = n(430501);
let g = (a) => {
    let e,
        n,
        l,
        {
            body: g,
            cancelText: j,
            className: x,
            confirmColor: N,
            confirmText: b = p.intl.string(p.t.BddRzS),
            secondaryConfirmText: f,
            onCancel: A,
            onClose: D,
            onConfirm: C,
            onConfirmSecondary: S,
            title: k,
            transitionState: y,
            titleClassName: v,
        } = a,
        z = r.$n.Sizes.MEDIUM,
        [E, R] = s.useState(!1);
    return (
        s.useEffect(
            () => () => {
                E && S?.();
            },
            [E, S],
        ),
        null != j &&
            "" !== j &&
            (e = (0, i.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: z,
                color: r.$n.Colors.PRIMARY,
                onClick: () => {
                    D?.(), A?.();
                },
                className: h.zr,
                children: j,
            })),
        null != b &&
            "" !== b &&
            (n = (0, i.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: N,
                size: z,
                className: h.FS,
                autoFocus: !0,
                children: b,
            })),
        null != f &&
            "" !== f &&
            (l = (0, i.jsx)(o.S, { checked: E, onChange: (a) => R(a), label: f, labelType: "secondary" })),
        (0, i.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: y,
            size: d.rI.DYNAMIC,
            className: t()(x, h.kL),
            "aria-label": k,
            parentComponent: "Alert",
            children: (0, i.jsxs)("form", {
                onSubmit: (a) => {
                    null != a && a.preventDefault(), D?.(), C?.();
                },
                className: h.Zd,
                children: [
                    (0, i.jsx)(d.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != k
                                ? (0, i.jsx)(m.D, {
                                      variant: "heading-lg/semibold",
                                      className: t()(h.DD, v),
                                      children: k,
                                  })
                                : (0, i.jsx)(m.D, {
                                      variant: "heading-md/semibold",
                                      className: t()(h.DD, v),
                                      children: k,
                                  }),
                    }),
                    (0, i.jsx)(d.$m, {
                        "data-migration-pending": !0,
                        className: h.jE,
                        children: (0, i.jsx)(u.A, {
                            direction: u.A.Direction.VERTICAL,
                            justify: u.A.Justify.START,
                            className: h.Qs,
                            children:
                                null != g &&
                                (0, i.jsx)(c.E, {
                                    variant: "text-md/normal",
                                    className: h.rf,
                                    color: "text-default",
                                    children: g,
                                }),
                        }),
                    }),
                    (0, i.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: u.A.Wrap.WRAP,
                        className: h.Hx,
                        children: [n, e, l],
                    }),
                ],
            }),
        })
    );
};
