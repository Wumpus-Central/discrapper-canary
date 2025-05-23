a.d(t, { default: () => r });
var i = a(255367);
a(73800);
var s = a(481060),
    d = a(447564),
    e = a(921944),
    l = a(388032),
    c = a(938219);
function r(n) {
    let { transitionState: t, channel: a, markAsDismissed: d } = n;
    return (0, i.jsx)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: t,
        children: (0, i.jsx)(o, {
            markAsDismissed: d,
            channel: a
        })
    });
}
function o(n) {
    let { channel: t, markAsDismissed: a } = n;
    return (0, i.jsxs)('div', {
        className: c.modal,
        children: [
            (0, i.jsx)('img', {
                className: c.img,
                src: 'https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png',
                alt: l.intl.string(l.t.UygxRk)
            }),
            (0, i.jsxs)('div', {
                className: c.body,
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
                className: c.footer,
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            a(e.L.USER_DISMISS), (0, s.pTH)();
                        },
                        color: s.Ttl.PRIMARY,
                        children: l.intl.string(l.t.i5lSbW)
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            a(e.L.TAKE_ACTION), (0, d.k)(t, 'HDStreamingPotionUpsellModal');
                        },
                        children: l.intl.string(l.t.w1qPc3)
                    })
                ]
            })
        ]
    });
}
