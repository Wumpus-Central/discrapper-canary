i.d(e, { Z: () => v });
var t = i(200651);
i(192379);
var r = i(481060),
    a = i(413335),
    s = i(984370),
    o = i(166351),
    c = i(953478),
    l = i(460608),
    d = i(953476),
    u = i(324180),
    x = i(388032),
    m = i(25505);
function v(n) {
    let { guildId: e } = n;
    return (0, t.jsxs)('div', {
        className: m.container,
        children: [
            (0, t.jsxs)(s.Z, {
                hideSearch: !0,
                toolbar: (0, t.jsx)('div', {}),
                children: [
                    (0, t.jsx)(s.Z.Icon, {
                        icon: (0, r.GSL)(a.Z),
                        disabled: !0,
                        'aria-label': ''
                    }),
                    (0, t.jsx)(s.Z.Title, { children: x.intl.string(u.Z.yv3DJC) }),
                    (0, t.jsx)(s.Z.Divider, {})
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
                                    (0, t.jsx)(r.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: x.intl.string(u.Z['TXY/b2'])
                                    }),
                                    (0, t.jsx)(r.Text, {
                                        variant: 'text-sm/medium',
                                        children: x.intl.string(u.Z.aJv4PD)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: m.powerupContainer,
                                children: d.O.map((n) => (0, t.jsx)(o.Z, { powerup: n }, 'powerup-'.concat(n.skuId)))
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: m.sidebarContainer,
                        children: [(0, t.jsx)(c.Z, {}), (0, t.jsx)(l.Z, { guildId: e })]
                    })
                ]
            })
        ]
    });
}
