e.d(a, { default: () => g });
var i = e(627968),
    s = e(64700),
    t = e(503698),
    l = e.n(t),
    r = e(862482),
    d = e(935462),
    c = e(834730),
    o = e(150934),
    u = e(534514),
    m = e(235986),
    p = e(375708),
    h = e(430501);
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
            (a = (0, i.jsx)(r.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: z,
                color: r.$n.Colors.PRIMARY,
                onClick: function () {
                    D?.(), A?.();
                },
                className: h.zr,
                children: j,
            })),
        null != N &&
            "" !== N &&
            (e = (0, i.jsx)(r.$n, {
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
            (t = (0, i.jsx)(o.S, { checked: E, onChange: (n) => R(n), label: b, labelType: "secondary" })),
        (0, i.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: y,
            size: d.rI.DYNAMIC,
            className: l()(x, h.kL),
            "aria-label": k,
            parentComponent: "Alert",
            children: (0, i.jsxs)("form", {
                onSubmit: function (n) {
                    null != n && n.preventDefault(), D?.(), C?.();
                },
                className: h.Zd,
                children: [
                    (0, i.jsx)(d.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != k
                                ? (0, i.jsx)(u.D, {
                                      variant: "heading-lg/semibold",
                                      className: l()(h.DD, v),
                                      children: k,
                                  })
                                : (0, i.jsx)(u.D, {
                                      variant: "heading-md/semibold",
                                      className: l()(h.DD, v),
                                      children: k,
                                  }),
                    }),
                    (0, i.jsx)(d.$m, {
                        "data-migration-pending": !0,
                        className: h.jE,
                        children: (0, i.jsx)(m.A, {
                            direction: m.A.Direction.VERTICAL,
                            justify: m.A.Justify.START,
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
                        wrap: m.A.Wrap.WRAP,
                        className: h.Hx,
                        children: [e, a, t],
                    }),
                ],
            }),
        })
    );
};
