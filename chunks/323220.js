n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(410030),
    s = n(114487),
    i = n(686546),
    c = n(686369),
    o = n(388032),
    d = n(545495);
function u(e) {
    let { guildId: t, name: n } = e,
        u = (0, a.ZP)(),
        m = (0, l.dQu)(l.TVs.colors.BG_BASE_TERTIARY),
        h = (0, c.d)(u, m.hex());
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('div', {
                className: d.banner,
                style: { background: h }
            }),
            (0, r.jsx)('div', {
                className: d.avatarContainer,
                children: (0, r.jsx)(i.ZP, {
                    mask: i.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: d.avatarWrapper,
                        children: (0, r.jsx)(s.b, {
                            guildId: t,
                            guildName: null != n ? n : o.NW.string(o.t.DmIUGB),
                            guildIcon: null,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: d.header,
                children: (0, r.jsx)(l.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    children: null != n ? n : o.NW.string(o.t.DmIUGB)
                })
            }),
            (0, r.jsx)('div', {
                className: d.body,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: o.NW.string(o.t['8mfCqa'])
                })
            })
        ]
    });
}
