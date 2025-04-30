n.d(t, { L: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(962086),
    s = n(225675),
    a = n(671533),
    o = n(434404),
    c = n(981631),
    u = n(388032),
    d = n(860711);
function m(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsxs)(i.xJW, {
        title: u.intl.string(u.t.arFPfH),
        className: d.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: u.intl.string(u.t['IT/0AA'])
            }),
            (0, r.jsxs)(i.zxk, {
                className: d.button,
                innerClassName: d.buttonInner,
                size: i.zxk.Sizes.SMALL,
                color: i.zxk.Colors.PRIMARY,
                onClick: () => {
                    o.Z.close(),
                        (0, l.iD)(t, {
                            type: s.z.ROLES,
                            roles: { [n.id]: n },
                            returnToSection: c.pNK.ROLES
                        });
                },
                children: [
                    u.intl.string(u.t.arFPfH),
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        direction: a.Z.Directions.RIGHT,
                        className: d.arrowIcon
                    })
                ]
            })
        ]
    });
}
