a.d(e, { default: () => l });
var s = a(200651);
a(192379);
var n = a(481060),
    i = a(388032),
    o = a(931149),
    c = a(134519);
function l(t) {
    let { transitionState: e, onClose: a } = t;
    return (0, s.jsxs)(n.Y0X, {
        transitionState: e,
        className: o.root,
        children: [
            (0, s.jsxs)(n.xBx, {
                separator: !1,
                className: o.noScroll,
                children: [
                    (0, s.jsx)(n.olH, {
                        className: o.closeButton,
                        onClick: a
                    }),
                    (0, s.jsx)('div', {
                        className: o.imageContainer,
                        children: (0, s.jsx)('img', {
                            src: c,
                            className: o.image,
                            alt: ''
                        })
                    })
                ]
            }),
            (0, s.jsx)(n.hzk, {
                children: (0, s.jsxs)('div', {
                    className: o.content,
                    children: [
                        (0, s.jsx)(n.X6q, {
                            variant: 'heading-xl/semibold',
                            className: o.title,
                            children: i.NW.string(i.t.xSV3nZ)
                        }),
                        (0, s.jsx)(n.Text, {
                            variant: 'text-md/normal',
                            className: o.text,
                            children: i.NW.string(i.t.jPMGbG)
                        }),
                        (0, s.jsx)(n.zxk, {
                            className: o.button,
                            onClick: a,
                            children: i.NW.string(i.t['NX+WJC'])
                        })
                    ]
                })
            })
        ]
    });
}
