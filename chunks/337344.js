n.d(t, { L: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(962086),
    a = n(225675),
    s = n(434404),
    o = n(981631),
    c = n(388032),
    d = n(860711);
function u(e) {
    let { guildId: t, role: n } = e;
    return (0, r.jsxs)(i.xJW, {
        title: c.intl.string(c.t.arFPfH),
        className: d.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                className: d.text,
                children: c.intl.string(c.t['IT/0AA'])
            }),
            (0, r.jsx)(i.zxk, {
                size: 'sm',
                variant: 'secondary',
                onClick: () => {
                    (s.Z.close(),
                        (0, l.iD)(t, {
                            type: a.z.ROLES,
                            roles: { [n.id]: n },
                            returnToSection: o.pNK.ROLES
                        }));
                },
                text: c.intl.string(c.t.arFPfH),
                icon: i.d4D,
                iconPosition: 'end'
            })
        ]
    });
}
