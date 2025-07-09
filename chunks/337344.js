n.d(t, { L: () => g });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(962086),
    a = n(225675),
    o = n(671533),
    c = n(434404),
    d = n(981631),
    u = n(388032),
    m = n(860711);
function g(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsxs)(l.xJW, {
        title: u.intl.string(u.t.arFPfH),
        className: m.container,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: u.intl.string(u.t['IT/0AA'])
            }),
            (0, r.jsxs)(i.zx, {
                className: m.button,
                innerClassName: m.buttonInner,
                size: i.zx.Sizes.SMALL,
                color: i.zx.Colors.PRIMARY,
                onClick: () => {
                    (c.Z.close(),
                        (0, s.iD)(t, {
                            type: a.z.ROLES,
                            roles: { [n.id]: n },
                            returnToSection: d.pNK.ROLES
                        }));
                },
                children: [
                    u.intl.string(u.t.arFPfH),
                    (0, r.jsx)(o.Z, {
                        width: 16,
                        height: 16,
                        direction: o.Z.Directions.RIGHT,
                        className: m.arrowIcon
                    })
                ]
            })
        ]
    });
}
