n.d(t, { default: () => h }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(512983),
    c = n(466377),
    u = n(993365),
    d = n(481060),
    f = n(600164),
    _ = n(388032),
    p = n(551988);
let h = (e) => {
    let t,
        n,
        a,
        { body: h, cancelText: m, className: g, confirmColor: E, confirmText: b = _.intl.string(_.t.BddRzc), secondaryConfirmText: y, onCancel: O, onClose: v, onConfirm: I, onConfirmSecondary: T, title: S, transitionState: A, titleClassName: N } = e,
        C = s.zx.Sizes.MEDIUM,
        [R, P] = i.useState(!1);
    i.useEffect(
        () => () => {
            R && (null == T || T());
        },
        [R, T]
    );
    let w = () => {
            null == v || v(), null == O || O();
        },
        D = (e) => {
            null != e && e.preventDefault(), null == v || v(), null == I || I();
        };
    return (
        null != m &&
            '' !== m &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: C,
                color: s.zx.Colors.PRIMARY,
                onClick: w,
                className: p.secondaryButton,
                children: m
            })),
        null != b &&
            '' !== b &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: E,
                size: C,
                className: p.primaryButton,
                autoFocus: !0,
                children: b
            })),
        null != y &&
            '' !== y &&
            (a = (0, r.jsx)(d.XZJ, {
                value: R,
                onChange: (e, t) => P(t),
                type: d.XZJ.Types.DEFAULT,
                children: (0, r.jsx)(u.x, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: y
                })
            })),
        (0, r.jsx)(c.Y0, {
            transitionState: A,
            size: c.Cg.DYNAMIC,
            className: o()(g, p.container),
            'aria-label': S,
            parentComponent: 'Alert',
            children: (0, r.jsxs)('form', {
                onSubmit: D,
                className: p.form,
                children: [
                    (0, r.jsx)(c.xB, {
                        children:
                            null != S
                                ? (0, r.jsx)(d.X6q, {
                                      variant: 'heading-lg/semibold',
                                      className: o()(p.title, N),
                                      children: S
                                  })
                                : (0, r.jsx)(l.v, {
                                      tag: 'h2',
                                      className: o()(p.title, N),
                                      children: S
                                  })
                    }),
                    (0, r.jsx)(c.hz, {
                        className: p.modalContent,
                        children: (0, r.jsx)(f.Z, {
                            direction: f.Z.Direction.VERTICAL,
                            justify: f.Z.Justify.START,
                            className: p.content,
                            children:
                                null != h &&
                                (0, r.jsx)(u.x, {
                                    variant: 'text-md/normal',
                                    className: p.body,
                                    color: 'header-secondary',
                                    children: h
                                })
                        })
                    }),
                    (0, r.jsxs)(c.mz, {
                        justify: void 0,
                        wrap: f.Z.Wrap.WRAP,
                        className: p.modalFooter,
                        children: [n, t, a]
                    })
                ]
            })
        })
    );
};
