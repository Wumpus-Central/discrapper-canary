n.d(t, { L: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(962086),
    a = n(225675),
    l = n(671533),
    o = n(434404),
    c = n(981631),
    d = n(388032),
    u = n(860711);
function m(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsxs)(i.xJW, {
        title: d.NW.string(d.t.arFPfH),
        className: u.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: d.NW.string(d.t['IT/0AA'])
            }),
            (0, r.jsxs)(i.zxk, {
                className: u.button,
                innerClassName: u.buttonInner,
                size: i.zxk.Sizes.SMALL,
                color: i.zxk.Colors.PRIMARY,
                onClick: () => {
                    o.Z.close(),
                        (0, s.iD)(t, {
                            type: a.z.ROLES,
                            roles: { [n.id]: n },
                            returnToSection: c.pNK.ROLES
                        });
                },
                children: [
                    d.NW.string(d.t.arFPfH),
                    (0, r.jsx)(l.Z, {
                        width: 16,
                        height: 16,
                        direction: l.Z.Directions.RIGHT,
                        className: u.arrowIcon
                    })
                ]
            })
        ]
    });
}
