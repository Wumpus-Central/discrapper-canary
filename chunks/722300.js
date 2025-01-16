t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(692547),
    r = t(481060),
    a = t(410030),
    s = t(686546),
    c = t(60034),
    o = t(686369),
    u = t(388032),
    d = t(950039);
function h(e) {
    let { name: n, onRetry: t } = e,
        h = (0, a.ZP)(),
        m = (0, r.useToken)(l.Z.colors.BG_BASE_TERTIARY),
        f = (0, o.d)(h, m.hex()),
        x = null != n ? n : u.intl.string(u.t.DmIUGB);
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('div', {
                className: d.banner,
                style: { background: f }
            }),
            (0, i.jsx)('div', {
                className: d.avatarContainer,
                children: (0, i.jsx)(s.ZP, {
                    mask: s.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)('div', {
                        className: d.avatarWrapper,
                        children: (0, i.jsx)(c.R, {
                            guildName: x,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: d.header,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: x
                    }),
                    (0, i.jsxs)(r.Clickable, {
                        className: d.error,
                        onClick: t,
                        children: [
                            (0, i.jsx)(r.CircleWarningIcon, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-warning',
                                children: u.intl.string(u.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
