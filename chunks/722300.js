n.d(l, { Z: () => m });
var i = n(200651);
n(192379);
var t = n(692547),
    a = n(481060),
    s = n(410030),
    r = n(686546),
    c = n(60034),
    d = n(686369),
    o = n(388032),
    u = n(950039);
function m(e) {
    let { name: l, onRetry: n } = e,
        m = (0, s.ZP)(),
        h = (0, a.dQu)(t.Z.colors.BG_BASE_TERTIARY),
        x = (0, d.d)(m, h.hex()),
        j = null != l ? l : o.intl.string(o.t.DmIUGB);
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)('div', {
                className: u.banner,
                style: { background: x }
            }),
            (0, i.jsx)('div', {
                className: u.avatarContainer,
                children: (0, i.jsx)(r.ZP, {
                    mask: r.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)('div', {
                        className: u.avatarWrapper,
                        children: (0, i.jsx)(c.R, {
                            guildName: j,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: u.header,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: j
                    }),
                    (0, i.jsxs)(a.P3F, {
                        className: u.error,
                        onClick: n,
                        children: [
                            (0, i.jsx)(a.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(a.Text, {
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
