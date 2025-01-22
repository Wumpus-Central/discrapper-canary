n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(410030),
    s = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    m = n(601964),
    p = n(768581),
    h = n(981631),
    g = n(388032),
    C = n(892528),
    x = n(129512),
    v = n(330065);
function _(e) {
    let { guild: t, className: n, onClick: a } = e,
        _ = (0, o.ZP)(),
        f = new m.ZP({
            name: t.name,
            icon: t.icon
        }),
        b = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        I =
            null != b
                ? b
                : (function (e) {
                      switch (e) {
                          case h.BRd.DARK:
                              return x;
                          case h.BRd.LIGHT:
                              return v;
                      }
                  })(_),
        S = p.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, i.jsxs)(l.Clickable, {
        className: r()(C.card, n),
        onClick: a,
        'aria-label': g.intl.string(g.t.RB4L29),
        children: [
            (0, i.jsxs)('div', {
                className: C.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: I,
                        alt: '',
                        className: C.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: C.guildIcon,
                        children: (0, i.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: C.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: C.__invalid_icon,
                                    iconSrc: S,
                                    guild: f,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.cardDetails,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.guildNameWrapper,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: C.guildBadge,
                                guild: t,
                                tooltipColor: l.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                className: C.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        className: C.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, i.jsx)('div', {
                        className: C.memberInfo,
                        children: (0, i.jsxs)('div', {
                            className: C.memberCountWrapper,
                            children: [
                                (0, i.jsx)(l.UserIcon, {
                                    color: 'currentColor',
                                    className: C.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: g.intl.format(g.t.zRl6XV, { count: t.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
