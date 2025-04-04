n.d(t, { default: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(693789),
    s = n(1561),
    l = n(512983),
    c = n(466377),
    u = n(993365),
    d = n(481060),
    f = n(600164),
    _ = n(540059),
    p = n(388032),
    h = n(551988);
let m = (e) => {
    let t,
        n,
        i,
        { body: m, cancelText: g, className: E, confirmColor: b, confirmText: y = p.NW.string(p.t.BddRzc), secondaryConfirmText: v, onCancel: O, onClose: I, onConfirm: S, onConfirmSecondary: T, title: N, transitionState: A, titleClassName: C } = e,
        R = (0, _.Q3)('ConfirmModal'),
        P = R ? a.zx.Sizes.MEDIUM : a.zx.Sizes.LARGE,
        w = () => {
            null == I || I(), null == O || O();
        },
        D = (e) => {
            null != e && e.preventDefault(), null == I || I(), null == S || S();
        },
        L = () => {
            null == I || I(), null == T || T();
        };
    return (
        null != g &&
            '' !== g &&
            (t = (0, r.jsx)(a.zx, {
                type: 'button',
                size: P,
                color: a.zx.Colors.PRIMARY,
                onClick: w,
                className: h.secondaryButton,
                children: g
            })),
        null != y &&
            '' !== y &&
            (n = (0, r.jsx)(a.zx, {
                type: 'submit',
                color: b,
                size: P,
                className: o()(h.primaryButton, null != t ? h.gutter : null),
                autoFocus: !0,
                children: y
            })),
        null != v &&
            '' !== v &&
            (i = (0, r.jsx)(s.P, {
                onClick: L,
                className: h.minorContainer,
                children: (0, r.jsx)(u.x, {
                    className: h.secondaryAction,
                    variant: 'text-xs/normal',
                    children: v
                })
            })),
        (0, r.jsx)(c.Y0, {
            transitionState: A,
            size: c.Cg.DYNAMIC,
            className: o()(E, h.container),
            'aria-label': N,
            children: (0, r.jsxs)('form', {
                onSubmit: D,
                className: h.form,
                children: [
                    (0, r.jsx)(c.xB, {
                        children:
                            null != N && R
                                ? (0, r.jsx)(d.X6q, {
                                      variant: 'heading-lg/semibold',
                                      className: o()(h.title, C),
                                      children: N
                                  })
                                : (0, r.jsx)(l.v, {
                                      tag: 'h2',
                                      className: o()(h.title, C),
                                      children: N
                                  })
                    }),
                    (0, r.jsx)(c.hz, {
                        className: h.modalContent,
                        children: (0, r.jsx)(f.Z, {
                            direction: f.Z.Direction.VERTICAL,
                            justify: R ? f.Z.Justify.START : f.Z.Justify.CENTER,
                            className: h.content,
                            children:
                                null != m &&
                                (0, r.jsx)(u.x, {
                                    variant: 'text-md/normal',
                                    className: h.body,
                                    color: R ? 'header-secondary' : 'text-normal',
                                    children: m
                                })
                        })
                    }),
                    (0, r.jsxs)(c.mz, {
                        justify: R ? void 0 : f.Z.Justify.BETWEEN,
                        wrap: f.Z.Wrap.WRAP,
                        children: [n, t, i]
                    })
                ]
            })
        })
    );
};
