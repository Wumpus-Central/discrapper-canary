n.d(e, { default: () => c });
var a = n(255367);
n(73800);
var s = n(481060),
    i = n(388032),
    o = n(931149),
    l = n(134519);
function c(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, a.jsxs)(s.Y0X, {
        transitionState: e,
        className: o.root,
        parentComponent: 'InsufficientInvitePermission',
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: o.noScroll,
                children: [
                    (0, a.jsx)(s.olH, {
                        className: o.closeButton,
                        onClick: n
                    }),
                    (0, a.jsx)('div', {
                        className: o.imageContainer,
                        children: (0, a.jsx)('img', {
                            src: l,
                            className: o.image,
                            alt: ''
                        })
                    })
                ]
            }),
            (0, a.jsx)(s.hzk, {
                children: (0, a.jsxs)('div', {
                    className: o.content,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: o.title,
                            children: i.intl.string(i.t.xSV3nZ)
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: o.text,
                            children: i.intl.string(i.t.jPMGbG)
                        }),
                        (0, a.jsx)(s.zxk, {
                            className: o.button,
                            onClick: n,
                            children: i.intl.string(i.t['NX+WJC'])
                        })
                    ]
                })
            })
        ]
    });
}
