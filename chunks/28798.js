n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(780384),
    s = n(481060),
    o = n(210887),
    a = n(475595),
    c = n(231338),
    d = n(388032),
    u = n(554431);
let f = function (e) {
    let { quest: t } = e,
        n = (0, l.e7)([o.Z], () => o.Z.getState().theme),
        f = (0, i.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
    return (0, r.jsx)('div', {
        className: u.wrapper,
        children: (0, r.jsxs)('div', {
            className: u.content,
            children: [
                (0, r.jsx)('img', {
                    src: (0, a.fh)(t, a.eC.GAME_TILE, f).url,
                    alt: '',
                    className: u.gameTile
                }),
                (0, r.jsxs)('div', {
                    className: u.copy,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.NW.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, r.jsx)(s.Text, {
                            className: u.subheading,
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: d.NW.string(d.t.mjbPtb)
                        })
                    ]
                })
            ]
        })
    });
};
