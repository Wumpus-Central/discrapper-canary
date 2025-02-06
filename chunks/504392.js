n.r(i), n.d(i, { default: () => m });
var t = n(200651);
n(192379);
var a = n(481060),
    r = n(413335),
    o = n(984370),
    s = n(166351),
    c = n(460608),
    l = n(953476),
    d = n(291775),
    u = n(388032),
    p = n(77598);
function m(e) {
    let { guildId: i } = e;
    return (0, t.jsxs)('div', {
        className: p.container,
        children: [
            (0, t.jsxs)(o.Z, {
                hideSearch: !0,
                toolbar: (0, t.jsx)('div', {}),
                children: [
                    (0, t.jsx)(o.Z.Icon, {
                        icon: (0, a.GSL)(r.Z),
                        disabled: !0,
                        'aria-label': ''
                    }),
                    (0, t.jsx)(o.Z.Title, { children: u.intl.string(d.Z.yv3DJC) }),
                    (0, t.jsx)(o.Z.Divider, {})
                ]
            }),
            (0, t.jsxs)('div', {
                className: p.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: p.powerupsContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: p.powerupTextContainer,
                                children: [
                                    (0, t.jsx)(a.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: u.intl.string(d.Z['TXY/b2'])
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: u.intl.string(d.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: p.powerupContainer,
                                children: l.O.map((e) =>
                                    (0, t.jsx)(
                                        s.Z,
                                        {
                                            powerup: e,
                                            onClick: () => {}
                                        },
                                        'powerup-'.concat(e.skuId)
                                    )
                                )
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: p.sidebarContainer,
                        children: (0, t.jsx)(c.Z, { guildId: i })
                    })
                ]
            })
        ]
    });
}
