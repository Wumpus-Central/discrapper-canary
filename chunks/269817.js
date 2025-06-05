s.d(e, { default: () => c });
var i = s(255367);
s(73800);
var n = s(481060),
    a = s(782568),
    o = s(313201),
    l = s(388032),
    r = s(275209);
function c(t) {
    let { url: e, onClose: c, transitionState: d } = t,
        x = (0, o.Dt)();
    return (0, i.jsxs)(n.Y0X, {
        transitionState: d,
        'aria-labelledby': x,
        parentComponent: 'LinkNotDiscordModal',
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
                            children: l.intl.string(l.t.biy1X1)
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: 'text-md/normal',
                            className: r.body,
                            children: l.intl.format(l.t.J86cyc, { url: e })
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
                        children: l.intl.string(l.t['xl8R+/'])
                    }),
                    (0, i.jsx)(n.zxk, {
                        type: 'button',
                        size: n.zxk.Sizes.MEDIUM,
                        color: n.zxk.Colors.TRANSPARENT,
                        look: n.zxk.Looks.LINK,
                        onClick: () => {
                            (0, a.Z)(e, !0);
                        },
                        children: l.intl.string(l.t.gQrLtr)
                    })
                ]
            })
        ]
    });
}
