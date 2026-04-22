n.d(a, { default: () => _ });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(862482),
    d = n(935462),
    o = n(834730),
    c = n(150934),
    m = n(534514),
    u = n(235986),
    p = n(985018),
    h = n(430501);
let _ = (e) => {
    let a,
        n,
        s,
        {
            body: _,
            cancelText: g,
            className: j,
            confirmColor: x,
            confirmText: f = p.intl.string(p.t.BddRzS),
            secondaryConfirmText: D,
            onCancel: b,
            onClose: N,
            onConfirm: y,
            onConfirmSecondary: A,
            title: C,
            transitionState: S,
            titleClassName: k,
        } = e,
        z = r.$n.Sizes.MEDIUM,
        [E, v] = i.useState(!1);
    return (
        i.useEffect(
            () => () => {
                E && A?.();
            },
            [E, A],
        ),
        null != g &&
            "" !== g &&
            (a = (0, t.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: z,
                color: r.$n.Colors.PRIMARY,
                onClick: () => {
                    N?.(), b?.();
                },
                className: h.zr,
                children: g,
            })),
        null != f &&
            "" !== f &&
            (n = (0, t.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: x,
                size: z,
                className: h.FS,
                autoFocus: !0,
                children: f,
            })),
        null != D &&
            "" !== D &&
            (s = (0, t.jsx)(c.S, { checked: E, onChange: (e) => v(e), label: D, labelType: "secondary" })),
        (0, t.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: S,
            size: d.rI.DYNAMIC,
            className: l()(j, h.kL),
            "aria-label": C,
            parentComponent: "Alert",
            children: (0, t.jsxs)("form", {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), N?.(), y?.();
                },
                className: h.Zd,
                children: [
                    (0, t.jsx)(d.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != C
                                ? (0, t.jsx)(m.D, {
                                      variant: "heading-lg/semibold",
                                      className: l()(h.DD, k),
                                      children: C,
                                  })
                                : (0, t.jsx)(m.D, {
                                      variant: "heading-md/semibold",
                                      className: l()(h.DD, k),
                                      children: C,
                                  }),
                    }),
                    (0, t.jsx)(d.$m, {
                        "data-migration-pending": !0,
                        className: h.jE,
                        children: (0, t.jsx)(u.A, {
                            direction: u.A.Direction.VERTICAL,
                            justify: u.A.Justify.START,
                            className: h.Qs,
                            children:
                                null != _ &&
                                (0, t.jsx)(o.E, {
                                    variant: "text-md/normal",
                                    className: h.rf,
                                    color: "text-default",
                                    children: _,
                                }),
                        }),
                    }),
                    (0, t.jsxs)(d.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: u.A.Wrap.WRAP,
                        className: h.Hx,
                        children: [n, a, s],
                    }),
                ],
            }),
        })
    );
};
