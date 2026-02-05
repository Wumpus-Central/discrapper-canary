t.d(r, { default: () => s });
var i = t(627968);
t(64700);
var l = t(311907),
    o = t(397927),
    a = t(442433),
    n = t(775602),
    c = t(652215),
    d = t(985018);
function s(e) {
    let { roles: r } = e,
        t = (0, l.bG)([n.A], () => n.A.roleStyle);
    return (0, i.jsx)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "invite-roles-menu",
        onClose: a.Z_,
        onSelect: () => {},
        "aria-label": d.intl.string(d.t["LPJmL/"]),
        children: (0, i.jsx)(o.rXV, {
            children: r.map((e) =>
                (0, i.jsx)(
                    o.Drp,
                    {
                        id: e.id,
                        leadingAccessory: {
                            type: "roleDot",
                            variant: "dot" === t ? "dot" : "circle",
                            color: e.colorString ?? c.TpD,
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
