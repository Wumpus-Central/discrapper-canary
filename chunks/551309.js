t.d(r, { default: () => p });
var i = t(627968);
t(64700);
var l = t(17928),
    o = t(550079),
    a = t(477782),
    n = t(442433),
    c = t(775602),
    d = t(652215),
    s = t(985018);
function p(e) {
    let { roles: r } = e,
        t = (0, l.bG)([c.A], () => c.A.roleStyle);
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
}
