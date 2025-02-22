n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(692547),
    a = n(481060),
    s = n(686546),
    i = n(60034),
    c = n(686369),
    o = n(388032),
    d = n(545495);
function u(e) {
    let { name: t, onRetry: n } = e,
        u = (0, a.dQu)(l.Z.colors.BG_BASE_TERTIARY),
        m = (0, c.d)(u.hex()),
        h = null != t ? t : o.NW.string(o.t.DmIUGB);
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('div', {
                className: d.banner,
                style: { background: m }
            }),
            (0, r.jsx)('div', {
                className: d.avatarContainer,
                children: (0, r.jsx)(s.ZP, {
                    mask: s.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: d.avatarWrapper,
                        children: (0, r.jsx)(i.R, {
                            guildName: h,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: d.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: h
                    }),
                    (0, r.jsxs)(a.P3F, {
                        className: d.error,
                        onClick: n,
                        children: [
                            (0, r.jsx)(a.P4T, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-warning',
                                children: o.NW.string(o.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
