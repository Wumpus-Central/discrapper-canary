var i = t(477900);
t(582128);
var l = t(855986),
    o = t(165862),
    a = t(477782),
    n = t(442433),
    c = t(775602),
    d = t(652215),
    s = t(792996);
t.d(
    r,
    {},
    {
        default: function (e) {
            let { roles: r } = e,
                t = (0, l.bG)([c.Ay], () => c.Ay.roleStyle);
            return (0, i.jsx)(o.W, {
                "data-menu-migrated": !0,
                navId: "invite-roles-menu",
                onClose: n.Z_,
                onSelect: () => {},
                "aria-label": s.intl.string(s.t["LPJmL/"]),
                children: (0, i.jsx)(a.rX, {
                    children: r.map((e) =>
                        (0, i.jsx)(
                            a.Dr,
                            {
                                id: e.id,
                                leadingAccessory: {
                                    type: "roleDot",
                                    variant: "dot" === t ? "dot" : "circle",
                                    color: e.colorString ?? d.TpD,
                                    colors: e.colorStrings,
                                },
                                label: e.name,
                            },
                            e.id,
                        ),
                    ),
                }),
            });
        },
    },
);
