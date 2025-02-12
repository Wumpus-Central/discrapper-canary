t.d(n, { default: () => x }), t(47120);
var s = t(200651),
    a = t(192379),
    c = t(119617),
    o = t(442837),
    i = t(481060),
    l = t(607070),
    r = t(530618),
    d = t(372654),
    m = t(324180),
    f = t(388032),
    u = t(634515);
function x(e) {
    let { ...n } = e,
        t = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        x = a.useRef(null),
        C = a.useRef(new c.qA()),
        [_, b] = a.useState(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.O_, {
                ref: b,
                className: u.confettiCanvas,
                environment: C.current
            }),
            (0, s.jsxs)(i.Y0X, {
                className: u.modal,
                size: i.CgR.DYNAMIC,
                ...n,
                children: [
                    (0, s.jsx)(i.hzk, {
                        className: u.modalContentContainer,
                        scrollbarType: 'none',
                        children: (0, s.jsxs)('div', {
                            className: u.container,
                            ref: x,
                            children: [
                                (0, s.jsx)('img', {
                                    alt: '',
                                    src: '',
                                    className: u.exampleImage
                                }),
                                (0, s.jsxs)('div', {
                                    className: u.contentContainer,
                                    children: [
                                        (0, s.jsx)(i.X6q, {
                                            variant: 'heading-xl/extrabold',
                                            children: f.intl.string(m.Z.lFuOFB)
                                        }),
                                        (0, s.jsx)(i.Text, {
                                            className: u.description,
                                            variant: 'text-sm/normal',
                                            children: f.intl.string(m.Z.y3wHoq)
                                        }),
                                        (0, s.jsx)(i.zxk, {
                                            className: u.button,
                                            onClick: n.onClose,
                                            children: f.intl.string(m.Z['g5Ds6+'])
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, s.jsx)(i.olH, {
                        className: u.close,
                        onClick: n.onClose
                    }),
                    !t &&
                        (0, s.jsx)(r.Z, {
                            confettiTarget: x.current,
                            confettiCanvas: _,
                            sprites: (0, d.vK)()
                        })
                ]
            })
        ]
    });
}
