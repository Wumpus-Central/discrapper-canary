s.d(e, { default: () => c });
var i = s(200651);
s(192379);
var n = s(481060),
    a = s(782568),
    l = s(313201),
    o = s(388032),
    r = s(301817);
function c(t) {
    let { url: e, onClose: c, transitionState: d } = t,
        x = (0, l.Dt)();
    return (0, i.jsxs)(n.Y0X, {
        transitionState: d,
        'aria-labelledby': x,
        children: [
            (0, i.jsx)('img', {
                className: r.art,
                src: s(902623),
                alt: ''
            }),
            (0, i.jsx)(n.hzk, {
                children: (0, i.jsxs)('div', {
                    className: r.modalContent,
                    children: [
                        (0, i.jsx)(n.X6q, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: r.title,
                            children: o.intl.string(o.t.biy1X1)
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: 'text-md/normal',
                            className: r.body,
                            children: o.intl.format(o.t.J86cyc, { url: e })
                        })
                    ]
                })
            }),
            (0, i.jsxs)(n.mzw, {
                children: [
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.BRAND,
                        onClick: c,
                        children: o.intl.string(o.t['xl8R+/'])
                    }),
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.TRANSPARENT,
                        look: n.zxk.Looks.LINK,
                        onClick: () => {
                            (0, a.Z)(e, !0);
                        },
                        children: o.intl.string(o.t.gQrLtr)
                    })
                ]
            })
        ]
    });
}
