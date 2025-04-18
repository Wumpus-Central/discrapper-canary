s.d(e, { default: () => c });
var a = s(200651);
s(192379);
var i = s(481060),
    n = s(782568),
    o = s(313201),
    r = s(388032),
    l = s(275209);
function c(t) {
    let { url: e, onClose: c, transitionState: d } = t,
        x = (0, o.Dt)();
    return (0, a.jsxs)(i.Y0X, {
        transitionState: d,
        'aria-labelledby': x,
        children: [
            (0, a.jsx)('img', {
                className: l.art,
                src: s(902623),
                alt: ''
            }),
            (0, a.jsx)(i.hzk, {
                children: (0, a.jsxs)('div', {
                    className: l.modalContent,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            id: x,
                            variant: 'heading-lg/semibold',
                            className: l.title,
                            children: r.NW.string(r.t.biy1X1)
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            className: l.body,
                            children: r.NW.format(r.t.J86cyc, { url: e })
                        })
                    ]
                })
            }),
            (0, a.jsxs)(i.mzw, {
                children: [
                    (0, a.jsx)(i.zxk, {
                        type: 'button',
                        size: i.zxk.Sizes.MEDIUM,
                        color: i.zxk.Colors.BRAND,
                        onClick: c,
                        children: r.NW.string(r.t['xl8R+/'])
                    }),
                    (0, a.jsx)(i.zxk, {
                        type: 'button',
                        size: i.zxk.Sizes.MEDIUM,
                        color: i.zxk.Colors.TRANSPARENT,
                        look: i.zxk.Looks.LINK,
                        onClick: () => {
                            (0, n.Z)(e, !0);
                        },
                        children: r.NW.string(r.t.gQrLtr)
                    })
                ]
            })
        ]
    });
}
