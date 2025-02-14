n.d(t, { Z: () => f });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(831218),
    o = n(840780),
    r = n(51596),
    d = n(905423),
    c = n(237997),
    u = n(145597),
    h = n(981631),
    p = n(388032),
    g = n(757353);
let m = () => (0, r.$Z)('DM_SEARCH'),
    f = s.memo(function () {
        let e = (0, l.e7)([c.Z], () => (c.Z.isLocked((0, u.QF)()) ? 'true' : 'false')),
            t = (0, d.Z)((e) => {
                let { channelId: t } = e;
                return t;
            });
        return (0, i.jsxs)('div', {
            className: g.privateChannels,
            children: [
                (0, i.jsx)('div', {
                    className: g.searchBar,
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: g.searchBarComponent,
                        onClick: m,
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
                    className: g.panels,
                    'aria-label': p.intl.string(p.t.StREWF),
                    children: (0, i.jsx)(o.Z, { guildId: null })
                })
            ]
        });
    });
