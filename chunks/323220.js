a.d(l, { Z: () => u });
var s = a(200651);
a(192379);
var n = a(481060),
    i = a(410030),
    t = a(114487),
    r = a(686546),
    d = a(686369),
    c = a(388032),
    o = a(893772);
function u(e) {
    let { guildId: l, name: a } = e,
        u = (0, i.ZP)(),
        m = (0, n.dQu)(n.TVs.colors.BG_BASE_TERTIARY),
        h = (0, d.d)(u, m.hex());
    return (0, s.jsxs)('div', {
        className: o.container,
        children: [
            (0, s.jsx)('div', {
                className: o.banner,
                style: { background: h }
            }),
            (0, s.jsx)('div', {
                className: o.avatarContainer,
                children: (0, s.jsx)(r.ZP, {
                    mask: r.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, s.jsx)('div', {
                        className: o.avatarWrapper,
                        children: (0, s.jsx)(t.b, {
                            guildId: l,
                            guildName: null != a ? a : c.intl.string(c.t.DmIUGB),
                            guildIcon: null,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, s.jsx)('div', {
                className: o.header,
                children: (0, s.jsx)(n.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    children: null != a ? a : c.intl.string(c.t.DmIUGB)
                })
            }),
            (0, s.jsx)('div', {
                className: o.body,
                children: (0, s.jsx)(n.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: c.intl.string(c.t['8mfCqa'])
                })
            })
        ]
    });
}
