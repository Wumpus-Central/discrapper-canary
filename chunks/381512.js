e.d(a, { Alert: () => g });
var i = e(477900),
    s = e(582128),
    l = e(503698),
    t = e.n(l),
    r = e(150934),
    d = e(534514),
    c = e(862482),
    o = e(935462),
    m = e(834730),
    u = e(235986),
    p = e(105292),
    h = e(341542);
let g = function (n) {
    let a,
        e,
        l,
        {
            body: g,
            cancelText: j,
            className: x,
            confirmColor: f,
            confirmText: b = p.intl.string(p.t.BddRzS),
            secondaryConfirmText: A,
            onCancel: N,
            onClose: D,
            onConfirm: y,
            onConfirmSecondary: C,
            title: S,
            transitionState: k,
            titleClassName: v,
        } = n,
        z = c.$n.Sizes.MEDIUM,
        [E, R] = s.useState(!1);
    return (
        s.useEffect(
            () => () => {
                E && C?.();
            },
            [E, C],
        ),
        null != j &&
            "" !== j &&
            (a = (0, i.jsx)(c.$n, {
                "data-migration-pending": !0,
                type: "button",
                size: z,
                color: c.$n.Colors.PRIMARY,
                onClick: function () {
                    (D?.(), N?.());
                },
                className: h.zr,
                children: j,
            })),
        null != b &&
            "" !== b &&
            (e = (0, i.jsx)(c.$n, {
                "data-migration-pending": !0,
                type: "submit",
                color: f,
                size: z,
                className: h.FS,
                autoFocus: !0,
                children: b,
            })),
        null != A &&
            "" !== A &&
            (l = (0, i.jsx)(r.S, { checked: E, onChange: (n) => R(n), label: A, labelType: "secondary" })),
        (0, i.jsx)(o.EO, {
            "data-migration-pending": !0,
            transitionState: k,
            size: o.rI.DYNAMIC,
            className: t()(x, h.kL),
            "aria-label": S,
            parentComponent: "Alert",
            children: (0, i.jsxs)("form", {
                onSubmit: function (n) {
                    (null != n && n.preventDefault(), D?.(), y?.());
                },
                className: h.Zd,
                children: [
                    (0, i.jsx)(o.rQ, {
                        "data-migration-pending": !0,
                        children:
                            null != S
                                ? (0, i.jsx)(d.D, {
                                      variant: "heading-lg/semibold",
                                      className: t()(h.DD, v),
                                      children: S,
                                  })
                                : (0, i.jsx)(d.D, {
                                      variant: "heading-sm/semibold",
                                      className: t()(h.DD, v),
                                      children: S,
                                  }),
                    }),
                    (0, i.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: h.jE,
                        children: (0, i.jsx)(u.A, {
                            direction: u.A.Direction.VERTICAL,
                            justify: u.A.Justify.START,
                            className: h.Qs,
                            children:
                                null != g &&
                                (0, i.jsx)(m.E, {
                                    variant: "body-md/normal",
                                    className: h.rf,
                                    color: "text-default",
                                    children: g,
                                }),
                        }),
                    }),
                    (0, i.jsxs)(o.jl, {
                        "data-migration-pending": !0,
                        justify: void 0,
                        wrap: u.A.Wrap.WRAP,
                        className: h.Hx,
                        children: [e, a, l],
                    }),
                ],
            }),
        })
    );
};
