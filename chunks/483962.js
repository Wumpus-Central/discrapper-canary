var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(831218),
    o = n(840780),
    l = n(51596),
    d = n(905423),
    c = n(237997),
    u = n(145597),
    h = n(981631),
    p = n(388032),
    f = n(959534);
let g = () => (0, l.$Z)('DM_SEARCH');
t.Z = s.memo(function () {
    let e = (0, r.e7)([c.Z], () => (c.Z.isLocked((0, u.QF)()) ? 'true' : 'false')),
        t = (0, d.Z)((e) => {
            let { channelId: t } = e;
            return t;
        });
    return (0, i.jsxs)('div', {
        className: f.privateChannels,
        children: [
            (0, i.jsx)('div', {
                className: f.searchBar,
                children: (0, i.jsx)('button', {
                    type: 'button',
                    className: f.searchBarComponent,
                    onClick: g,
                    children: p.intl.string(p.t.LzcpeX)
                })
            }),
            (0, i.jsx)(a.Z, {
                padding: 8,
                theme: h.BRd.DARK,
                version: e,
                selectedChannelId: t
            }),
            (0, i.jsx)('section', {
                className: f.panels,
                'aria-label': p.intl.string(p.t.StREWF),
                children: (0, i.jsx)(o.Z, { guildId: null })
            })
        ]
    });
});
