n.d(a, { default: () => l });
var i = n(255367),
    s = n(481060);
n(73800);
var e = n(447564),
    d = n(921944),
    r = n(388032),
    o = n(938219);
function l(t) {
    let { transitionState: a, channel: n, markAsDismissed: e } = t;
    return (0, i.jsx)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: a,
        parentComponent: 'HDStreamingPotionUpsellModal',
        children: (0, i.jsx)(c, {
            markAsDismissed: e,
            channel: n
        })
    });
}
function c(t) {
    let { channel: a, markAsDismissed: n } = t;
    return (0, i.jsxs)('div', {
        className: o.modal,
        children: [
            (0, i.jsx)('img', {
                className: o.img,
                src: 'https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png',
                alt: r.intl.string(r.t.UygxRk)
            }),
            (0, i.jsxs)('div', {
                className: o.body,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/bold',
                        children: r.intl.string(r.t.DSyT5O)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: r.intl.format(r.t['0n58Li'], { channel_name: a.name })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o.footer,
                children: [
                    (0, i.jsx)(s.zxk, {
                        variant: 'secondary',
                        text: r.intl.string(r.t.i5lSbW),
                        onClick: () => {
                            (n(d.L.USER_DISMISS), (0, s.pTH)());
                        }
                    }),
                    (0, i.jsx)(s.zxk, {
                        variant: 'primary',
                        text: r.intl.string(r.t.w1qPc3),
                        onClick: () => {
                            (n(d.L.TAKE_ACTION), (0, e.k)(a, 'HDStreamingPotionUpsellModal'));
                        }
                    })
                ]
            })
        ]
    });
}
