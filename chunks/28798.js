l.d(t, { Z: () => u });
var i = l(200651);
l(192379);
var s = l(442837),
    r = l(780384),
    n = l(481060),
    a = l(210887),
    c = l(475595),
    o = l(231338),
    d = l(388032),
    f = l(81959);
let u = function (e) {
    let { quest: t } = e,
        l = (0, s.e7)([a.Z], () => a.Z.getState().theme),
        u = (0, r.wj)(l) ? o.BR.DARK : o.BR.LIGHT;
    return (0, i.jsx)('div', {
        className: f.wrapper,
        children: (0, i.jsxs)('div', {
            className: f.content,
            children: [
                (0, i.jsx)('img', {
                    src: (0, c.fh)(t, c.eC.GAME_TILE, u).url,
                    alt: '',
                    className: f.gameTile
                }),
                (0, i.jsxs)('div', {
                    className: f.copy,
                    children: [
                        (0, i.jsx)(n.X6q, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.intl.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, i.jsx)(n.Text, {
                            className: f.subheading,
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
