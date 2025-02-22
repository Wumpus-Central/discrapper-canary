n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(114487),
    s = n(686546),
    i = n(686369),
    c = n(388032),
    o = n(545495);
function d(e) {
    let { guildId: t, name: n } = e,
        d = (0, l.dQu)(l.TVs.colors.BG_BASE_TERTIARY),
        u = (0, i.d)(d.hex());
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('div', {
                className: o.banner,
                style: { background: u }
            }),
            (0, r.jsx)('div', {
                className: o.avatarContainer,
                children: (0, r.jsx)(s.ZP, {
                    mask: s.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: o.avatarWrapper,
                        children: (0, r.jsx)(a.b, {
                            guildId: t,
                            guildName: null != n ? n : c.NW.string(c.t.DmIUGB),
                            guildIcon: null,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: o.header,
                children: (0, r.jsx)(l.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    children: null != n ? n : c.NW.string(c.t.DmIUGB)
                })
            }),
            (0, r.jsx)('div', {
                className: o.body,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: c.NW.string(c.t['8mfCqa'])
                })
            })
        ]
    });
}
