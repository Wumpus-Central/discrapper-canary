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
    p = n(540059),
    _ = n(388032),
    h = n(62138);
let m = (e) => {
    let t,
        n,
        i,
        { body: m, cancelText: g, className: E, confirmColor: v, confirmText: b = _.NW.string(_.t.BddRzc), secondaryConfirmText: y, onCancel: O, onClose: S, onConfirm: I, onConfirmSecondary: T, title: N, transitionState: A, titleClassName: C } = e,
        R = (0, p.Q3)('ConfirmModal'),
        P = R ? a.zx.Sizes.MEDIUM : a.zx.Sizes.LARGE,
        w = () => {
            null == S || S(), null == O || O();
        },
        D = (e) => {
            null != e && e.preventDefault(), null == S || S(), null == I || I();
        },
        x = () => {
            null == S || S(), null == T || T();
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
        null != b &&
            '' !== b &&
            (n = (0, r.jsx)(a.zx, {
                type: 'submit',
                color: v,
                size: P,
                className: o()(h.primaryButton, null != t ? h.gutter : null),
                autoFocus: !0,
                children: b
            })),
        null != y &&
            '' !== y &&
            (i = (0, r.jsx)(s.P, {
                onClick: x,
                className: h.minorContainer,
                children: (0, r.jsx)(u.x, {
                    className: h.secondaryAction,
                    variant: 'text-xs/normal',
                    children: y
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
