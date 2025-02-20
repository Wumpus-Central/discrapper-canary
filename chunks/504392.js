t.d(n, { Z: () => p });
var i = t(200651);
t(192379);
var r = t(481060),
    a = t(413335),
    o = t(984370),
    s = t(11658),
    c = t(166351),
    l = t(953478),
    d = t(460608),
    u = t(953476),
    x = t(783684),
    v = t(388032),
    m = t(748448);
function p(e) {
    let { guildId: n } = e;
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsxs)(o.Z, {
                hideSearch: !0,
                toolbar: (0, i.jsx)('div', {}),
                children: [
                    (0, i.jsx)(o.Z.Icon, {
                        icon: (0, r.GSL)(a.Z),
                        disabled: !0,
                        'aria-label': ''
                    }),
                    (0, i.jsx)(o.Z.Title, { children: v.NW.string(x.Z.yv3DJC) }),
                    (0, i.jsx)(o.Z.Divider, {})
                ]
            }),
            (0, i.jsxs)('div', {
                className: m.contentContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.powerupsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: m.powerupTextContainer,
                                children: [
                                    (0, i.jsx)(r.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: v.NW.string(x.Z['TXY/b2'])
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/medium',
                                        children: v.NW.string(x.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: m.powerupContainer,
                                children: u.G.map((e, n) =>
                                    (0, i.jsx)(
                                        s.Z,
                                        {
                                            index: n,
                                            powerup: e,
                                            nextPowerup: u.G[n + 1]
                                        },
                                        'powerup-'.concat(e.skuId)
                                    )
                                )
                            }),
                            (0, i.jsxs)('div', {
                                className: m.powerupTextContainer,
                                children: [
                                    (0, i.jsx)(r.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: v.NW.string(x.Z['TXY/b2'])
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/medium',
                                        children: v.NW.string(x.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: m.powerupContainer,
                                children: u.O.map((e) => (0, i.jsx)(c.Z, { powerup: e }, 'powerup-'.concat(e.skuId)))
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: m.sidebarContainer,
                        children: [(0, i.jsx)(l.Z, { guildId: n }), (0, i.jsx)(d.Z, { guildId: n })]
                    })
                ]
            })
        ]
    });
}
