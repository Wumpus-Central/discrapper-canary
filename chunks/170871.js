n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(979264),
    u = n(308083),
    m = n(126314);
function h(e) {
    let { className: t, clanTag: n, clanBadge: r, onTagClick: h, guildId: g, guildName: x, guildIcon: _, guildIconSize: p, memberCount: E } = e,
        C = s.useRef(null),
        [f, T] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = C.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && T(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: l()(m.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: m.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: g,
                            guildName: x,
                            guildIcon: _,
                            iconSize: p,
                            className: m.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: m.details,
                            children: [
                                (0, i.jsx)(a.ua7, {
                                    text: x,
                                    color: a.ua7.Colors.PRIMARY,
                                    shouldShow: f,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ref: C,
                                            ...e,
                                            className: m.guildName,
                                            children: x
                                        })
                                }),
                                null != E && (0, i.jsx)(c.Z, { count: E })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: m.tagContainer,
                    children: (0, i.jsx)(d.aG, {
                        guildId: g,
                        className: m.tag,
                        clanTag: n,
                        clanBadge: r,
                        onClick: h,
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
