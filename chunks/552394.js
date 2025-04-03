n.d(s, { default: () => o });
var t = n(200651);
n(192379);
var i = n(481060),
    d = n(447564),
    e = n(921944),
    c = n(388032),
    r = n(938219);
function o(a) {
    let { transitionState: s, channel: n, markAsDismissed: d } = a;
    return (0, t.jsx)(i.Y0X, {
        size: i.CgR.DYNAMIC,
        transitionState: s,
        children: (0, t.jsx)(l, {
            markAsDismissed: d,
            channel: n
        })
    });
}
function l(a) {
    let { channel: s, markAsDismissed: n } = a;
    return (0, t.jsxs)('div', {
        className: r.modal,
        children: [
            (0, t.jsx)('img', {
                className: r.img,
                src: 'https://cdn.discordapp.com/assets/content/28f991389d76cad2f134080324967f70d380d072bca7ac88595287fd7f8f45e5.png',
                alt: c.NW.string(c.t.UygxRk)
            }),
            (0, t.jsxs)('div', {
                className: r.body,
                children: [
                    (0, t.jsx)(i.X6q, {
                        variant: 'heading-lg/bold',
                        children: c.NW.string(c.t.DSyT5O)
                    }),
                    (0, t.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: c.NW.format(c.t['0n58Li'], { channel_name: s.name })
                    })
                ]
            }),
            (0, t.jsxs)('div', {
                className: r.footer,
                children: [
                    (0, t.jsx)(i.zxk, {
                        onClick: () => {
                            n(e.L.USER_DISMISS), (0, i.pTH)();
                        },
                        color: i.Ttl.PRIMARY,
                        children: c.NW.string(c.t.i5lSbW)
                    }),
                    (0, t.jsx)(i.zxk, {
                        onClick: () => {
                            n(e.L.TAKE_ACTION), (0, d.k)(s, 'HDStreamingPotionUpsellModal');
                        },
                        children: c.NW.string(c.t.w1qPc3)
                    })
                ]
            })
        ]
    });
}
