n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(692547),
    o = n(481060),
    a = n(686546),
    s = n(60034),
    l = n(686369),
    c = n(388032),
    u = n(248217);
function d(e) {
    let { name: t, onRetry: n } = e,
        d = (0, o.dQu)(i.Z.colors.BG_BASE_TERTIARY),
        f = (0, l.d)(d.hex()),
        _ = null != t ? t : c.NW.string(c.t.DmIUGB);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)('div', {
                className: u.banner,
                style: { background: f }
            }),
            (0, r.jsx)('div', {
                className: u.avatarContainer,
                children: (0, r.jsx)(a.ZP, {
                    mask: a.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: u.avatarWrapper,
                        children: (0, r.jsx)(s.R, {
                            guildName: _,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: u.header,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: _
                    }),
                    (0, r.jsxs)(o.P3F, {
                        className: u.error,
                        onClick: n,
                        children: [
                            (0, r.jsx)(o.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-warning',
                                children: c.NW.string(c.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
