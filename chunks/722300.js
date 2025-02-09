s.d(l, { Z: () => m });
var a = s(200651);
s(192379);
var n = s(692547),
    i = s(481060),
    t = s(410030),
    r = s(686546),
    c = s(60034),
    d = s(686369),
    o = s(388032),
    u = s(893772);
function m(e) {
    let { name: l, onRetry: s } = e,
        m = (0, t.ZP)(),
        h = (0, i.dQu)(n.Z.colors.BG_BASE_TERTIARY),
        x = (0, d.d)(m, h.hex()),
        j = null != l ? l : o.intl.string(o.t.DmIUGB);
    return (0, a.jsxs)('div', {
        className: u.container,
        children: [
            (0, a.jsx)('div', {
                className: u.banner,
                style: { background: x }
            }),
            (0, a.jsx)('div', {
                className: u.avatarContainer,
                children: (0, a.jsx)(r.ZP, {
                    mask: r.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, a.jsx)('div', {
                        className: u.avatarWrapper,
                        children: (0, a.jsx)(c.R, {
                            guildName: j,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: u.header,
                children: [
                    (0, a.jsx)(i.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: j
                    }),
                    (0, a.jsxs)(i.P3F, {
                        className: u.error,
                        onClick: s,
                        children: [
                            (0, a.jsx)(i.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, a.jsx)(i.Text, {
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
