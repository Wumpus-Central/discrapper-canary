e.d(a, { default: () => g });
var i = e(477900),
    s = e(582128),
    t = e(503698),
    l = e.n(t),
    r = e(150934),
    d = e(297264),
    c = e(862482),
    o = e(935462),
    u = e(834730),
    m = e(235986),
    p = e(375708),
    h = e(243149);
let g = function (n) {
    let a,
        e,
        t,
        {
            body: g,
            cancelText: j,
            className: x,
            confirmColor: f,
            confirmText: N = p.intl.string(p.t.BddRzS),
            secondaryConfirmText: b,
            onCancel: A,
            onClose: D,
            onConfirm: C,
            onConfirmSecondary: S,
            title: k,
            transitionState: y,
            titleClassName: v,
        } = n,
        z = c.$n.Sizes.MEDIUM,
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
            (a = (0, i.jsx)(c.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: z,
                color: c.$n.Colors.PRIMARY,
                onClick: function () {
                    D?.(), A?.();
                },
                className: h.zr,
                children: j,
            })),
        null != N &&
            "" !== N &&
            (e = (0, i.jsx)(c.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: f,
                size: z,
                className: h.FS,
                autoFocus: !0,
                children: N,
            })),
        null != b &&
            "" !== b &&
            (t = (0, i.jsx)(r.S, { checked: E, onChange: (n) => R(n), label: b, labelType: "secondary" })),
        (0, i.jsx)(o.EO, {
            "data-migration-pending": !0,
            transitionState: y,
            size: o.rI.DYNAMIC,
            className: l()(x, h.kL),
            "aria-label": k,
            parentComponent: "Alert",
            children: (0, i.jsxs)("form", {
                onSubmit: function (n) {
                    null != n && n.preventDefault(), D?.(), C?.();
                },
                className: h.Zd,
                children: [
                    (0, i.jsx)(o.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != k
                                ? (0, i.jsx)(d.D, {
                                      variant: "heading-lg/semibold",
                                      className: l()(h.DD, v),
                                      children: k,
                                  })
                                : (0, i.jsx)(d.D, {
                                      variant: "heading-md/semibold",
                                      className: l()(h.DD, v),
                                      children: k,
                                  }),
                    }),
                    (0, i.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: h.jE,
                        children: (0, i.jsx)(m.A, {
                            direction: m.A.Direction.VERTICAL,
                            justify: m.A.Justify.START,
                            className: h.Qs,
                            children:
                                null != g &&
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/normal",
                                    className: h.rf,
                                    color: "text-default",
                                    children: g,
                                }),
                        }),
                    }),
                    (0, i.jsxs)(o.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: m.A.Wrap.WRAP,
                        className: h.Hx,
                        children: [e, a, t],
                    }),
                ],
            }),
        })
    );
};
