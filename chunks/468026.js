n.d(t, { default: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(512983),
    c = n(466377),
    u = n(993365),
    d = n(755721),
    f = n(481060),
    _ = n(600164),
    p = n(388032),
    h = n(964144);
let m = (e) => {
    let t,
        n,
        a,
        {
            body: m,
            cancelText: g,
            className: E,
            confirmColor: b,
            confirmText: y = p.intl.string(p.t.BddRzc),
            secondaryConfirmText: O,
            onCancel: v,
            onClose: I,
            onConfirm: T,
            onConfirmSecondary: S,
            title: A,
            transitionState: C,
            titleClassName: N,
        } = e,
        R = s.zx.Sizes.MEDIUM,
        [P, w] = i.useState(!1);
    i.useEffect(
        () => () => {
            P && (null == S || S());
        },
        [P, S],
    );
    let D = () => {
            null == I || I(), null == v || v();
        },
        x = (e) => {
            null != e && e.preventDefault(), null == I || I(), null == T || T();
        };
    return (
        null != g &&
            "" !== g &&
            (t = (0, r.jsx)(s.zx, {
                type: "button",
                size: R,
                color: s.zx.Colors.PRIMARY,
                onClick: D,
                className: h.secondaryButton,
                children: g,
            })),
        null != y &&
            "" !== y &&
            (n = (0, r.jsx)(s.zx, {
                type: "submit",
                color: b,
                size: R,
                className: h.primaryButton,
                autoFocus: !0,
                children: y,
            })),
        null != O &&
            "" !== O &&
            (a = (0, r.jsx)(d.$q, {
                value: P,
                onChange: (e, t) => w(t),
                type: d.M0.DEFAULT,
                children: (0, r.jsx)(u.x, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: O,
                }),
            })),
        (0, r.jsx)(c.Y0, {
            transitionState: C,
            size: c.Cg.DYNAMIC,
            className: o()(E, h.container),
            "aria-label": A,
            parentComponent: "Alert",
            children: (0, r.jsxs)("form", {
                onSubmit: x,
                className: h.form,
                children: [
                    (0, r.jsx)(c.xB, {
                        children:
                            null != A
                                ? (0, r.jsx)(f.X6q, {
                                      variant: "heading-lg/semibold",
                                      className: o()(h.title, N),
                                      children: A,
                                  })
                                : (0, r.jsx)(l.v, {
                                      tag: "h2",
                                      className: o()(h.title, N),
                                      children: A,
                                  }),
                    }),
                    (0, r.jsx)(c.hz, {
                        className: h.modalContent,
                        children: (0, r.jsx)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            justify: _.Z.Justify.START,
                            className: h.content,
                            children:
                                null != m &&
                                (0, r.jsx)(u.x, {
                                    variant: "text-md/normal",
                                    className: h.body,
                                    color: "header-secondary",
                                    children: m,
                                }),
                        }),
                    }),
                    (0, r.jsxs)(c.mz, {
                        justify: void 0,
                        wrap: _.Z.Wrap.WRAP,
                        className: h.modalFooter,
                        children: [n, t, a],
                    }),
                ],
            }),
        })
    );
};
