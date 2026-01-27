t.d(e, {
    default: () => s,
});
var l = t(627968);
t(64700);
var i = t(311907),
    n = t(397927),
    a = t(442433),
    o = t(775602),
    c = t(652215),
    d = t(985018);

function s(r) {
    let { roles: e } = r,
        t = (0, i.bG)([o.A], () => o.A.roleStyle);
    return (0, l.jsx)(n.W1t, {
        "data-menu-migrated": !0,
        navId: "invite-roles-menu",
        onClose: a.Z_,
        onSelect: () => {},
        "aria-label": d.intl.string(d.t["LPJmL/"]),
        children: (0, l.jsx)(n.rXV, {
            children: e.map((r) => {
                var e;
                return (0, l.jsx)(
                    n.Drp,
                    {
                        id: r.id,
                        leadingAccessory: {
                            type: "roleDot",
                            variant: "dot" === t ? "dot" : "circle",
                            color: null != (e = r.colorString) ? e : c.TpD,
                            colors: r.colorStrings,
                        },
                        label: r.name,
                    },
                    r.id,
                );
            }),
        }),
    });
}
