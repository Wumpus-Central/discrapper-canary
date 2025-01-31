n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    s = n(410030),
    o = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    m = n(601964),
    h = n(768581),
    p = n(981631),
    g = n(388032),
    _ = n(892528),
    x = n(129512),
    C = n(330065);
function v(e) {
    let { guild: t, className: n, onClick: a } = e,
        v = (0, s.ZP)(),
        f = new m.ZP({
            name: t.name,
            icon: t.icon
        }),
        I = h.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        b =
            null != I
                ? I
                : (function (e) {
                      switch (e) {
                          case p.BRd.DARK:
                              return x;
                          case p.BRd.LIGHT:
                              return C;
                      }
                  })(v),
        j = h.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, i.jsxs)(l.P3F, {
        className: r()(_.card, n),
        onClick: a,
        'aria-label': g.intl.string(g.t.RB4L29),
        children: [
            (0, i.jsxs)('div', {
                className: _.cardHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: b,
                        alt: '',
                        className: _.splashImage
                    }),
                    (0, i.jsx)('div', {
                        className: _.guildIcon,
                        children: (0, i.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)('div', {
                                className: _.iconMask,
                                children: (0, i.jsx)(c.Z, {
                                    className: _.__invalid_icon,
                                    iconSrc: j,
                                    guild: f,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.cardDetails,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.guildNameWrapper,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: _.guildBadge,
                                guild: t,
                                tooltipColor: l.ua7.Colors.PRIMARY
                            }),
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                className: _.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        className: _.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, i.jsx)('div', {
                        className: _.memberInfo,
                        children: (0, i.jsxs)('div', {
                            className: _.memberCountWrapper,
                            children: [
                                (0, i.jsx)(l.tBG, {
                                    color: 'currentColor',
                                    className: _.memberCountIcon,
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
