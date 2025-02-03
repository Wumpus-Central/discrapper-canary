n.d(t, { default: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(693789),
    o = n(1561),
    l = n(512983),
    u = n(466377),
    c = n(993365),
    d = n(481060),
    f = n(600164),
    _ = n(540059),
    p = n(388032),
    h = n(222263);
let m = (e) => {
    let t,
        n,
        r,
        { body: m, cancelText: g, className: E, confirmColor: v, confirmText: y = p.intl.string(p.t.BddRzc), secondaryConfirmText: I, onCancel: b, onClose: T, onConfirm: S, onConfirmSecondary: A, title: N, transitionState: C, titleClassName: R } = e,
        O = (0, _.Q3)('ConfirmModal'),
        D = O ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE,
        x = () => {
            null == T || T(), null == b || b();
        },
        L = (e) => {
            null != e && e.preventDefault(), null == T || T(), null == S || S();
        },
        P = () => {
            null == T || T(), null == A || A();
        };
    return (
        null != g &&
            '' !== g &&
            (t = (0, i.jsx)(s.zx, {
                type: 'button',
                size: D,
                color: s.zx.Colors.PRIMARY,
                onClick: x,
                className: h.secondaryButton,
                children: g
            })),
        null != y &&
            '' !== y &&
            (n = (0, i.jsx)(s.zx, {
                type: 'submit',
                color: v,
                size: D,
                className: a()(h.primaryButton, null != t ? h.gutter : null),
                autoFocus: !0,
                children: y
            })),
        null != I &&
            '' !== I &&
            (r = (0, i.jsx)(o.P, {
                onClick: P,
                className: h.minorContainer,
                children: (0, i.jsx)(c.x, {
                    className: h.secondaryAction,
                    variant: 'text-xs/normal',
                    children: I
                })
            })),
        (0, i.jsx)(u.Y0, {
            transitionState: C,
            size: u.Cg.DYNAMIC,
            className: a()(E, h.container),
            'aria-label': N,
            children: (0, i.jsxs)('form', {
                onSubmit: L,
                className: h.form,
                children: [
                    (0, i.jsx)(u.xB, {
                        children:
                            null != N && O
                                ? (0, i.jsx)(d.X6q, {
                                      variant: 'heading-lg/semibold',
                                      className: a()(h.title, R),
                                      children: N
                                  })
                                : (0, i.jsx)(l.v, {
                                      tag: 'h2',
                                      className: a()(h.title, R),
                                      children: N
                                  })
                    }),
                    (0, i.jsx)(u.hz, {
                        className: h.modalContent,
                        children: (0, i.jsx)(f.Z, {
                            direction: f.Z.Direction.VERTICAL,
                            justify: O ? f.Z.Justify.START : f.Z.Justify.CENTER,
                            className: h.content,
                            children:
                                null != m &&
                                (0, i.jsx)(c.x, {
                                    variant: 'text-md/normal',
                                    className: h.body,
                                    color: O ? 'header-secondary' : 'text-normal',
                                    children: m
                                })
                        })
                    }),
                    (0, i.jsxs)(u.mz, {
                        justify: O ? void 0 : f.Z.Justify.BETWEEN,
                        wrap: f.Z.Wrap.WRAP,
                        children: [n, t, r]
                    })
                ]
            })
        })
    );
};
