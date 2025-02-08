s.d(a, { default: () => d });
var n = s(200651),
    o = s(481060),
    t = s(773),
    i = s(601978);
function d(e) {
    let { powerup: a, ...s } = e;
    return (0, n.jsxs)(o.Y0X, {
        className: i.modal,
        size: o.CgR.DYNAMIC,
        ...s,
        children: [
            (0, n.jsxs)(o.hzk, {
                className: i.modalContentContainer,
                scrollbarType: 'none',
                children: [
                    (0, n.jsxs)('div', {
                        className: i.sidebar,
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                src: '',
                                className: i.powerupImage
                            }),
                            (0, n.jsxs)('div', {
                                className: i.contentContainer,
                                children: [
                                    (0, n.jsx)(o.X6q, {
                                        variant: 'heading-xl/extrabold',
                                        children: a.title
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        className: i.description,
                                        variant: 'text-sm/normal',
                                        children: a.description
                                    }),
                                    (0, n.jsx)(t.Z, {
                                        className: i.footer,
                                        skuId: a.skuId,
                                        active: a.active
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: i.exampleImage,
                        children: (0, n.jsx)('img', {
                            alt: '',
                            src: ''
                        })
                    })
                ]
            }),
            (0, n.jsx)(o.olH, {
                className: i.close,
                onClick: s.onClose
            })
        ]
    });
}
