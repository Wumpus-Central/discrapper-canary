r.r(n);
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(693789),
    l = r(1561),
    u = r(512983),
    c = r(466377),
    d = r(993365),
    f = r(481060),
    _ = r(600164),
    h = r(540059),
    p = r(388032),
    m = r(384810);
let g = (e) => {
    let n,
        r,
        a,
        { body: g, cancelText: E, className: v, confirmColor: I, confirmText: T = p.intl.string(p.t.BddRzc), secondaryConfirmText: b, onCancel: y, onClose: S, onConfirm: A, onConfirmSecondary: N, title: C, transitionState: R, titleClassName: O } = e,
        D = (0, h.Q3)('ConfirmModal'),
        L = D ? o.zx.Sizes.MEDIUM : o.zx.Sizes.LARGE,
        x = () => {
            null == S || S(), null == y || y();
        },
        w = (e) => {
            null != e && e.preventDefault(), null == S || S(), null == A || A();
        },
        P = () => {
            null == S || S(), null == N || N();
        };
    return (
        null != E &&
            '' !== E &&
            (n = (0, i.jsx)(o.zx, {
                type: 'button',
                size: L,
                color: o.zx.Colors.PRIMARY,
                onClick: x,
                className: m.secondaryButton,
                children: E
            })),
        null != T &&
            '' !== T &&
            (r = (0, i.jsx)(o.zx, {
                type: 'submit',
                color: I,
                size: L,
                className: s()(m.primaryButton, null != n ? m.gutter : null),
                autoFocus: !0,
                children: T
            })),
        null != b &&
            '' !== b &&
            (a = (0, i.jsx)(l.P, {
                onClick: P,
                className: m.minorContainer,
                children: (0, i.jsx)(d.x, {
                    className: m.secondaryAction,
                    variant: 'text-xs/normal',
                    children: b
                })
            })),
        (0, i.jsx)(c.Y0, {
            transitionState: R,
            size: c.Cg.DYNAMIC,
            className: s()(v, m.container),
            'aria-label': C,
            children: (0, i.jsxs)('form', {
                onSubmit: w,
                className: m.form,
                children: [
                    (0, i.jsx)(c.xB, {
                        children:
                            null != C && D
                                ? (0, i.jsx)(f.Heading, {
                                      variant: 'heading-lg/semibold',
                                      className: s()(m.title, O),
                                      children: C
                                  })
                                : (0, i.jsx)(u.v, {
                                      tag: 'h2',
                                      className: s()(m.title, O),
                                      children: C
                                  })
                    }),
                    (0, i.jsx)(c.hz, {
                        className: m.modalContent,
                        children: (0, i.jsx)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            justify: D ? _.Z.Justify.START : _.Z.Justify.CENTER,
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
                        justify: D ? void 0 : _.Z.Justify.BETWEEN,
                        wrap: _.Z.Wrap.WRAP,
                        children: [r, n, a]
                    })
                ]
            })
        })
    );
};
n.default = g;
