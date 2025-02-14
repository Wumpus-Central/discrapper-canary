i.d(e, { Z: () => v });
var t = i(200651);
i(192379);
var a = i(481060),
    r = i(413335),
    o = i(984370),
    s = i(166351),
    c = i(953478),
    l = i(460608),
    d = i(953476),
    u = i(306685),
    x = i(388032),
    p = i(303035);
function v(n) {
    let { guildId: e } = n;
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
                    (0, t.jsx)(o.Z.Title, { children: x.intl.string(u.Z.yv3DJC) }),
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
                                        children: x.intl.string(u.Z['TXY/b2'])
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: x.intl.string(u.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: p.powerupContainer,
                                children: d.O.map((n) => (0, t.jsx)(s.Z, { powerup: n }, 'powerup-'.concat(n.skuId)))
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: p.sidebarContainer,
                        children: [(0, t.jsx)(c.Z, {}), (0, t.jsx)(l.Z, { guildId: e })]
                    })
                ]
            })
        ]
    });
}
