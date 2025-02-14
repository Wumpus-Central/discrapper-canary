n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(518950),
    l = n(182294),
    a = n(388032),
    o = n(968983),
    c = n(144343);
function d(e) {
    let { referrer: t, isMarketingPageV2Enabled: n } = e,
        d = (e) => (null != e.globalName ? e.globalName : e.username),
        { avatarSrc: u, eventHandlers: m } = (0, r.Z)({
            user: t,
            size: l.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, i.jsx)('div', {
        className: o.attributionBannerContainer,
        children: (0, i.jsxs)('div', {
            className: n ? o.attributionBannerContentV2 : o.attributionBannerContent,
            children: [
                (0, i.jsx)('div', {
                    className: n ? o.iconContainerV2 : o.iconContainer,
                    children: (0, i.jsx)(s.qEK, {
                        className: o.icon,
                        src: u,
                        'aria-label': t.username,
                        size: l.EF.SIZE_32,
                        ...m
                    })
                }),
                n
                    ? (0, i.jsx)(s.X6q, {
                          variant: 'heading-lg/medium',
                          className: o.textContainer,
                          children: a.intl.format(a.t.IqxblZ, { username: d(t) })
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          className: o.textContainer,
                          children: a.intl.format(a.t.IqxblZ, { username: d(t) })
                      }),
                !n &&
                    (0, i.jsx)('img', {
                        src: c,
                        alt: '',
                        className: o.attributionIcon
                    })
            ]
        })
    });
}
