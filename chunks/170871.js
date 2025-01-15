n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(979264),
    u = n(308083),
    m = n(984094);
function g(e) {
    let { className: t, clanTag: n, clanBadge: r, onTagClick: g, guildId: h, guildName: p, guildIcon: x, guildIconSize: f, memberCount: _ } = e,
        E = s.useRef(null),
        [C, T] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = E.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && T(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: a()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: h,
                            guildName: p,
                            guildIcon: x,
                            iconSize: f,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, i.jsx)(l.Tooltip, {
                                    text: p,
                                    color: l.Tooltip.Colors.PRIMARY,
                                    shouldShow: C,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ref: E,
                                            ...e,
                                            className: m.guildName,
                                            children: p
                                        })
                                }),
                                null != _ && (0, i.jsx)(c.Z, { count: _ })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, i.jsx)(d.aG, {
                        guildId: h,
                        className: m.tag,
                        clanTag: n,
                        clanBadge: r,
                        onClick: g,
                        badgeSize: u.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: m.badge
                    })
                })
            ]
        })
    );
}
