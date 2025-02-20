n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var l = n(692547),
    a = n(481060),
    s = n(410030),
    i = n(686546),
    c = n(60034),
    o = n(686369),
    d = n(388032),
    u = n(545495);
function m(e) {
    let { name: t, onRetry: n } = e,
        m = (0, s.ZP)(),
        h = (0, a.dQu)(l.Z.colors.BG_BASE_TERTIARY),
        j = (0, o.d)(m, h.hex()),
        f = null != t ? t : d.NW.string(d.t.DmIUGB);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)('div', {
                className: u.banner,
                style: { background: j }
            }),
            (0, r.jsx)('div', {
                className: u.avatarContainer,
                children: (0, r.jsx)(i.ZP, {
                    mask: i.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: u.avatarWrapper,
                        children: (0, r.jsx)(c.R, {
                            guildName: f,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: u.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: f
                    }),
                    (0, r.jsxs)(a.P3F, {
                        className: u.error,
                        onClick: n,
                        children: [
                            (0, r.jsx)(a.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-warning',
                                children: d.NW.string(d.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
