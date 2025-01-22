r.r(n);
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(693789),
    l = r(1561),
    u = r(512983),
    c = r(466377),
    d = r(993365),
    f = r(481060),
    p = r(600164),
    h = r(540059),
    _ = r(388032),
    m = r(222263);
let g = (e) => {
    let n,
        r,
        a,
        { body: g, cancelText: E, className: v, confirmColor: y, confirmText: b = _.intl.string(_.t.BddRzc), secondaryConfirmText: I, onCancel: T, onClose: S, onConfirm: A, onConfirmSecondary: C, title: N, transitionState: R, titleClassName: O } = e,
        D = (0, h.Q3)('ConfirmModal'),
        L = D ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE,
        x = () => {
            null == S || S(), null == T || T();
        },
        w = (e) => {
            null != e && e.preventDefault(), null == S || S(), null == A || A();
        },
        P = () => {
            null == S || S(), null == C || C();
        };
    return (
        null != E &&
            '' !== E &&
            (n = (0, i.jsx)(s.zx, {
                type: 'button',
                size: L,
                color: s.zx.Colors.PRIMARY,
                onClick: x,
                className: m.secondaryButton,
                children: E
            })),
        null != b &&
            '' !== b &&
            (r = (0, i.jsx)(s.zx, {
                type: 'submit',
                color: y,
                size: L,
                className: o()(m.primaryButton, null != n ? m.gutter : null),
                autoFocus: !0,
                children: b
            })),
        null != I &&
            '' !== I &&
            (a = (0, i.jsx)(l.P, {
                onClick: P,
                className: m.minorContainer,
                children: (0, i.jsx)(d.x, {
                    className: m.secondaryAction,
                    variant: 'text-xs/normal',
                    children: I
                })
            })),
        (0, i.jsx)(c.Y0, {
            transitionState: R,
            size: c.Cg.DYNAMIC,
            className: o()(v, m.container),
            'aria-label': N,
            children: (0, i.jsxs)('form', {
                onSubmit: w,
                className: m.form,
                children: [
                    (0, i.jsx)(c.xB, {
                        children:
                            null != N && D
                                ? (0, i.jsx)(f.Heading, {
                                      variant: 'heading-lg/semibold',
                                      className: o()(m.title, O),
                                      children: N
                                  })
                                : (0, i.jsx)(u.v, {
                                      tag: 'h2',
                                      className: o()(m.title, O),
                                      children: N
                                  })
                    }),
                    (0, i.jsx)(c.hz, {
                        className: m.modalContent,
                        children: (0, i.jsx)(p.Z, {
                            direction: p.Z.Direction.VERTICAL,
                            justify: D ? p.Z.Justify.START : p.Z.Justify.CENTER,
                            className: m.content,
                            children:
                                null != g &&
                                (0, i.jsx)(d.x, {
                                    variant: 'text-md/normal',
                                    className: m.body,
                                    color: D ? 'header-secondary' : 'text-normal',
                                    children: g
                                })
                        })
                    }),
                    (0, i.jsxs)(c.mz, {
                        justify: D ? void 0 : p.Z.Justify.BETWEEN,
                        wrap: p.Z.Wrap.WRAP,
                        children: [r, n, a]
                    })
                ]
            })
        })
    );
};
n.default = g;
