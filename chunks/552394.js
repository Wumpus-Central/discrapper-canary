a.d(t, { default: () => r });
var i = a(255367);
a(73800);
var s = a(481060),
    e = a(447564),
    d = a(921944),
    l = a(388032),
    o = a(938219);
function r(n) {
    let { transitionState: t, channel: a, markAsDismissed: e } = n;
    return (0, i.jsx)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: t,
        parentComponent: 'HDStreamingPotionUpsellModal',
        children: (0, i.jsx)(c, {
            markAsDismissed: e,
            channel: a
        })
    });
}
function c(n) {
    let { channel: t, markAsDismissed: a } = n;
    return (0, i.jsxs)('div', {
        className: o.modal,
        children: [
            (0, i.jsx)('img', {
                className: o.img,
                src: 'https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png',
                alt: l.intl.string(l.t.UygxRk)
            }),
            (0, i.jsxs)('div', {
                className: o.body,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/bold',
                        children: l.intl.string(l.t.DSyT5O)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: l.intl.format(l.t['0n58Li'], { channel_name: t.name })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o.footer,
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            a(d.L.USER_DISMISS), (0, s.pTH)();
                        },
                        color: s.Ttl.PRIMARY,
                        children: l.intl.string(l.t.i5lSbW)
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            a(d.L.TAKE_ACTION), (0, e.k)(t, 'HDStreamingPotionUpsellModal');
                        },
                        children: l.intl.string(l.t.w1qPc3)
                    })
                ]
            })
        ]
    });
}
