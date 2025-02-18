i.d(n, { Z: () => v });
var t = i(200651);
i(192379);
var a = i(481060),
    r = i(413335),
    s = i(984370),
    o = i(11658),
    c = i(166351),
    l = i(953478),
    d = i(460608),
    u = i(953476),
    x = i(947494),
    m = i(388032),
    p = i(303035);
function v(e) {
    let { guildId: n } = e;
    return (0, t.jsxs)('div', {
        className: p.container,
        children: [
            (0, t.jsxs)(s.Z, {
                hideSearch: !0,
                toolbar: (0, t.jsx)('div', {}),
                children: [
                    (0, t.jsx)(s.Z.Icon, {
                        icon: (0, a.GSL)(r.Z),
                        disabled: !0,
                        'aria-label': ''
                    }),
                    (0, t.jsx)(s.Z.Title, { children: m.intl.string(x.Z.yv3DJC) }),
                    (0, t.jsx)(s.Z.Divider, {})
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
                                        children: m.intl.string(x.Z['TXY/b2'])
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: m.intl.string(x.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: p.powerupContainer,
                                children: u.G.map((e, n) =>
                                    (0, t.jsx)(
                                        o.Z,
                                        {
                                            index: n,
                                            powerup: e,
                                            nextPowerup: u.G[n + 1]
                                        },
                                        'powerup-'.concat(e.skuId)
                                    )
                                )
                            }),
                            (0, t.jsxs)('div', {
                                className: p.powerupTextContainer,
                                children: [
                                    (0, t.jsx)(a.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: m.intl.string(x.Z['TXY/b2'])
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: m.intl.string(x.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: p.powerupContainer,
                                children: u.O.map((e) => (0, t.jsx)(c.Z, { powerup: e }, 'powerup-'.concat(e.skuId)))
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: p.sidebarContainer,
                        children: [(0, t.jsx)(l.Z, {}), (0, t.jsx)(d.Z, { guildId: n })]
                    })
                ]
            })
        ]
    });
}
