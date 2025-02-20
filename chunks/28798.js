l.d(t, { Z: () => u });
var s = l(200651);
l(192379);
var r = l(442837),
    i = l(780384),
    n = l(481060),
    a = l(210887),
    c = l(475595),
    o = l(231338),
    d = l(388032),
    f = l(490298);
let u = function (e) {
    let { quest: t } = e,
        l = (0, r.e7)([a.Z], () => a.Z.getState().theme),
        u = (0, i.wj)(l) ? o.BR.DARK : o.BR.LIGHT;
    return (0, s.jsx)('div', {
        className: f.wrapper,
        children: (0, s.jsxs)('div', {
            className: f.content,
            children: [
                (0, s.jsx)('img', {
                    src: (0, c.fh)(t, c.eC.GAME_TILE, u).url,
                    alt: '',
                    className: f.gameTile
                }),
                (0, s.jsxs)('div', {
                    className: f.copy,
                    children: [
                        (0, s.jsx)(n.X6q, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.NW.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, s.jsx)(n.Text, {
                            className: f.subheading,
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
