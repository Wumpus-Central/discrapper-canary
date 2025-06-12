n.d(t, { default: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(512983),
    c = n(466377),
    u = n(993365),
    d = n(481060),
    _ = n(600164),
    f = n(540059),
    p = n(388032),
    h = n(551988);
let m = (e) => {
    let t,
        n,
        a,
        { body: m, cancelText: g, className: E, confirmColor: b, confirmText: y = p.intl.string(p.t.BddRzc), secondaryConfirmText: O, onCancel: v, onClose: I, onConfirm: T, onConfirmSecondary: S, title: A, transitionState: N, titleClassName: C } = e,
        R = (0, f.Q3)('ConfirmModal'),
        P = R ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE,
        [w, D] = i.useState(!1);
    i.useEffect(
        () => () => {
            w && (null == S || S());
        },
        [w, S]
    );
    let L = () => {
            null == I || I(), null == v || v();
        },
        x = (e) => {
            null != e && e.preventDefault(), null == I || I(), null == T || T();
        };
    return (
        null != g &&
            '' !== g &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: P,
                color: s.zx.Colors.PRIMARY,
                onClick: L,
                className: h.secondaryButton,
                children: g
            })),
        null != y &&
            '' !== y &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: b,
                size: P,
                className: h.primaryButton,
                autoFocus: !0,
                children: y
            })),
        null != O &&
            '' !== O &&
            (a = (0, r.jsx)(d.XZJ, {
                value: w,
                onChange: (e, t) => D(t),
                type: d.XZJ.Types.DEFAULT,
                children: (0, r.jsx)(u.x, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: O
                })
            })),
        (0, r.jsx)(c.Y0, {
            transitionState: N,
            size: c.Cg.DYNAMIC,
            className: o()(E, h.container),
            'aria-label': A,
            parentComponent: 'Alert',
            children: (0, r.jsxs)('form', {
                onSubmit: x,
                className: h.form,
                children: [
                    (0, r.jsx)(c.xB, {
                        children:
                            null != A && R
                                ? (0, r.jsx)(d.X6q, {
                                      variant: 'heading-lg/semibold',
                                      className: o()(h.title, C),
                                      children: A
                                  })
                                : (0, r.jsx)(l.v, {
                                      tag: 'h2',
                                      className: o()(h.title, C),
                                      children: A
                                  })
                    }),
                    (0, r.jsx)(c.hz, {
                        className: h.modalContent,
                        children: (0, r.jsx)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            justify: R ? _.Z.Justify.START : _.Z.Justify.CENTER,
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
                        justify: R ? void 0 : _.Z.Justify.BETWEEN,
                        wrap: _.Z.Wrap.WRAP,
                        className: h.modalFooter,
                        children: [n, t, a]
                    })
                ]
            })
        })
    );
};
