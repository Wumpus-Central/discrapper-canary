n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(114487),
    c = n(219039),
    d = n(979264),
    u = n(308083),
    h = n(126314);
function m(e) {
    let { className: t, clanTag: n, clanBadge: l, onTagClick: m, guildId: g, guildName: x, guildIcon: _, guildIconSize: p, memberCount: E } = e,
        C = s.useRef(null),
        [N, f] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = C.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)('div', {
            className: r()(h.container, t),
            children: [
                (0, i.jsxs)('div', {
                    className: h.guildPrefixContainer,
                    children: [
                        (0, i.jsx)(o.b, {
                            guildId: g,
                            guildName: x,
                            guildIcon: _,
                            iconSize: p,
                            className: h.guildPrefixIcon,
                            animate: !1
                        }),
                        (0, i.jsxs)('div', {
                            className: h.details,
                            children: [
                                (0, i.jsx)(a.ua7, {
                                    text: x,
                                    color: a.ua7.Colors.PRIMARY,
                                    shouldShow: N,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ref: C,
                                            ...e,
                                            className: h.guildName,
                                            children: x
                                        })
                                }),
                                null != E && (0, i.jsx)(c.Z, { count: E })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: h.tagContainer,
                    children: (0, i.jsx)(d.aG, {
                        guildId: g,
                        className: h.tag,
                        clanTag: n,
                        clanBadge: l,
                        onClick: m,
                        badgeSize: u.NC.SIZE_16,
                        textColor: 'interactive-normal',
                        textVariant: 'text-sm/semibold',
                        badgeClassName: h.badge
                    })
                })
            ]
        })
    );
}
