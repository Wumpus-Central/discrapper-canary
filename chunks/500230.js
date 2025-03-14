n.d(t, { Z: () => g });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(550271),
    o = n(434404),
    c = n(254925),
    d = n(502936),
    u = n(388032),
    m = n(935921);
let g = function (e) {
    let { className: t, guildId: n, guildProfile: i } = e;
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(a.vwX, {
                className: m.sectionTitle,
                children: u.NW.string(d.Z.zSbMdX)
            }),
            (0, r.jsx)('div', {
                className: m.pickerGrid,
                children: c.go.map((e) =>
                    (0, r.jsx)(
                        a.P3F,
                        {
                            className: s()(m.pickerItem, { [m.pickerItemSelected]: e.primary === i.badgeColorPrimary && e.secondary === i.badgeColorSecondary }),
                            onClick: () => {
                                o.Z.updateGuildProfile(n, {
                                    badgeColorPrimary: e.primary,
                                    badgeColorSecondary: e.secondary
                                });
                            },
                            children: (0, r.jsx)(l.A, {
                                badge: c.QV['0'],
                                width: 32,
                                height: 32,
                                primaryTintColor: e.primary,
                                secondaryTintColor: e.secondary
                            })
                        },
                        ''.concat(e.primary).concat(e.secondary)
                    )
                )
            })
        ]
    });
};
