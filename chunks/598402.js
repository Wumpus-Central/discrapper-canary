a.d(e, { default: () => l });
var n = a(255367);
a(73800);
var s = a(481060),
    i = a(388032),
    o = a(931149),
    r = a(134519);
function l(t) {
    let { transitionState: e, onClose: a } = t;
    return (0, n.jsxs)(s.Y0X, {
        transitionState: e,
        className: o.root,
        parentComponent: 'InsufficientInvitePermission',
        children: [
            (0, n.jsxs)(s.xBx, {
                separator: !1,
                className: o.noScroll,
                children: [
                    (0, n.jsx)(s.olH, {
                        className: o.closeButton,
                        onClick: a
                    }),
                    (0, n.jsx)('div', {
                        className: o.imageContainer,
                        children: (0, n.jsx)('img', {
                            src: r,
                            className: o.image,
                            alt: ''
                        })
                    })
                ]
            }),
            (0, n.jsx)(s.hzk, {
                children: (0, n.jsxs)('div', {
                    className: o.content,
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: o.title,
                            children: i.intl.string(i.t.xSV3nZ)
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: o.text,
                            children: i.intl.string(i.t.jPMGbG)
                        }),
                        (0, n.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: o.button,
                            children: (0, n.jsx)(s.zxk, {
                                variant: 'primary',
                                text: i.intl.string(i.t['NX+WJC']),
                                onClick: a
                            })
                        })
                    ]
                })
            })
        ]
    });
}
