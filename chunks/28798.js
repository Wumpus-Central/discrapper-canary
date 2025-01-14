var l = i(200651);
i(192379);
var r = i(442837),
    n = i(780384),
    s = i(481060),
    a = i(210887),
    c = i(475595),
    o = i(231338),
    d = i(388032),
    f = i(81959);
t.Z = function (e) {
    let { quest: t } = e,
        i = (0, r.e7)([a.Z], () => a.Z.getState().theme),
        u = (0, n.wj)(i) ? o.BR.DARK : o.BR.LIGHT;
    return (0, l.jsx)('div', {
        className: f.wrapper,
        children: (0, l.jsxs)('div', {
            className: f.content,
            children: [
                (0, l.jsx)('img', {
                    src: (0, c.fh)(t, c.eC.GAME_TILE, u).url,
                    alt: '',
                    className: f.gameTile
                }),
                (0, l.jsxs)('div', {
                    className: f.copy,
                    children: [
                        (0, l.jsx)(s.Heading, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.intl.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, l.jsx)(s.Text, {
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
