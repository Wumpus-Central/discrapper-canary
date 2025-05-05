n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(780384),
    s = n(481060),
    a = n(210887),
    o = n(475595),
    c = n(231338),
    d = n(388032),
    u = n(554431);
let f = function (e) {
    let { quest: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.getState().theme),
        f = (0, i.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
    return (0, r.jsx)('div', {
        className: u.wrapper,
        children: (0, r.jsxs)('div', {
            className: u.content,
            children: [
                (0, r.jsx)('img', {
                    src: (0, o.fh)(t, o.eC.GAME_TILE, f).url,
                    alt: '',
                    className: u.gameTile
                }),
                (0, r.jsxs)('div', {
                    className: u.copy,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.intl.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, r.jsx)(s.Text, {
                            className: u.subheading,
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: d.intl.string(d.t.mjbPtb)
                        })
                    ]
                })
            ]
        })
    });
};
