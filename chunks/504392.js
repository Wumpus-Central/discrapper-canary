i.r(n), i.d(n, { default: () => p });
var t = i(200651);
i(192379);
var a = i(481060),
    r = i(413335),
    o = i(984370),
    s = i(166351),
    c = i(460608),
    l = i(953476),
    d = i(291775),
    u = i(388032),
    m = i(77598);
function p(e) {
    let { guildId: n } = e;
    return (0, t.jsxs)('div', {
        className: m.container,
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
                className: m.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: m.powerupsContainer,
                        children: [
                            (0, t.jsxs)('div', {
                                className: m.powerupTextContainer,
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
                                className: m.powerupContainer,
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
                        className: m.sidebarContainer,
                        children: (0, t.jsx)(c.Z, { guildId: n })
                    })
                ]
            })
        ]
    });
}
