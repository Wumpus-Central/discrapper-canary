n.d(e, { default: () => d });
var a = n(255367);
n(73800);
var i = n(755721),
    s = n(481060),
    o = n(782568),
    r = n(313201),
    l = n(388032),
    c = n(275209);
function d(t) {
    let { url: e, onClose: d, transitionState: x } = t,
        m = (0, r.Dt)();
    return (0, a.jsxs)(s.Y0X, {
        transitionState: x,
        'aria-labelledby': m,
        parentComponent: 'LinkNotDiscordModal',
        children: [
            (0, a.jsx)('img', {
                className: c.art,
                src: n(902623),
                alt: ''
            }),
            (0, a.jsx)(s.hzk, {
                children: (0, a.jsxs)('div', {
                    className: c.modalContent,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            id: m,
                            variant: 'heading-lg/semibold',
                            className: c.title,
                            children: l.intl.string(l.t.biy1X1)
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: c.body,
                            children: l.intl.format(l.t.J86cyc, { url: e })
                        })
                    ]
                })
            }),
            (0, a.jsxs)(s.mzw, {
                children: [
                    (0, a.jsx)(s.zxk, {
                        variant: 'primary',
                        text: l.intl.string(l.t['xl8R+/']),
                        type: 'button',
                        onClick: d
                    }),
                    (0, a.jsx)(i.zx, {
                        type: 'button',
                        size: i.zx.Sizes.MEDIUM,
                        color: i.zx.Colors.TRANSPARENT,
                        look: i.zx.Looks.LINK,
                        onClick: () => {
                            (0, o.Z)(e, !0);
                        },
                        children: l.intl.string(l.t.gQrLtr)
                    })
                ]
            })
        ]
    });
}
