a.d(l, { Z: () => m });
var s = a(200651);
a(192379);
var n = a(692547),
    i = a(481060),
    t = a(410030),
    r = a(686546),
    d = a(60034),
    c = a(686369),
    o = a(388032),
    u = a(712617);
function m(e) {
    let { name: l, onRetry: a } = e,
        m = (0, t.ZP)(),
        h = (0, i.dQu)(n.Z.colors.BG_BASE_TERTIARY),
        x = (0, c.d)(m, h.hex()),
        j = null != l ? l : o.intl.string(o.t.DmIUGB);
    return (0, s.jsxs)('div', {
        className: u.container,
        children: [
            (0, s.jsx)('div', {
                className: u.banner,
                style: { background: x }
            }),
            (0, s.jsx)('div', {
                className: u.avatarContainer,
                children: (0, s.jsx)(r.ZP, {
                    mask: r.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, s.jsx)('div', {
                        className: u.avatarWrapper,
                        children: (0, s.jsx)(d.R, {
                            guildName: j,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, s.jsxs)('div', {
                className: u.header,
                children: [
                    (0, s.jsx)(i.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: j
                    }),
                    (0, s.jsxs)(i.P3F, {
                        className: u.error,
                        onClick: a,
                        children: [
                            (0, s.jsx)(i.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-warning',
                                children: o.intl.string(o.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
