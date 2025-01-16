n.d(t, {
    L: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(962086),
    s = n(225675),
    a = n(671533),
    o = n(434404),
    c = n(981631),
    d = n(388032),
    u = n(428426);
function m(e) {
    let { guildId: t, role: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(r.FormItem, {
            title: d.intl.string(d.t.arFPfH),
            className: u.container,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    children: d.intl.string(d.t['IT/0AA'])
                }),
                (0, i.jsxs)(r.Button, {
                    className: u.button,
                    innerClassName: u.buttonInner,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                        o.Z.close(),
                            (0, l.iD)(t, {
                                type: s.z.ROLES,
                                roles: { [n.id]: n },
                                returnToSection: c.pNK.ROLES
                            });
                    },
                    children: [
                        d.intl.string(d.t.arFPfH),
                        (0, i.jsx)(a.Z, {
                            width: 16,
                            height: 16,
                            direction: a.Z.Directions.RIGHT,
                            className: u.arrowIcon
                        })
                    ]
                })
            ]
        })
    });
}
