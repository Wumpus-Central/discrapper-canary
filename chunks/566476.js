n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(399606),
    a = n(481060),
    o = n(385499),
    c = n(246946),
    d = n(933018);
function u(e) {
    let { className: t, avatarURL: n, name: r, bot: u, verifiedBot: m, userTag: h } = e,
        g = (0, s.e7)([c.Z], () => c.Z.hidePersonalInformation);
    return (0, i.jsxs)('div', {
        className: l()(d.container, t),
        children: [
            (0, i.jsx)(a.Avatar, {
                className: d.avatar,
                src: n,
                size: a.AvatarSizes.SIZE_24,
                'aria-label': r
            }),
            (0, i.jsxs)('div', {
                className: d.textContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        tag: 'span',
                        className: d.name,
                        color: 'header-primary',
                        variant: 'text-sm/semibold',
                        children: r
                    }),
                    u
                        ? (0, i.jsx)(o.Z, {
                              className: d.botTag,
                              verified: m
                          })
                        : null,
                    g
                        ? null
                        : (0, i.jsx)(a.Text, {
                              tag: 'span',
                              color: 'interactive-normal',
                              className: d.userTag,
                              variant: 'text-sm/normal',
                              children: h
                          })
                ]
            })
        ]
    });
}
