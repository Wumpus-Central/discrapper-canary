l.d(e, {
    default: () => d,
});
var t = l(627968);
l(64700);
var i = l(311907),
    n = l(397927),
    o = l(442433),
    a = l(775602),
    c = l(652215),
    s = l(985018);

function d(r) {
    let { roles: e } = r,
        l = (0, i.bG)([a.A], () => a.A.roleStyle);
    return (0, t.jsx)(n.W1t, {
        navId: "invite-roles-menu",
        onClose: o.Z_,
        onSelect: () => {},
        "aria-label": s.intl.string(s.t["LPJmL/"]),
        children: (0, t.jsx)(n.rXV, {
            children: e.map((r) => {
                var e;
                return (0, t.jsx)(
                    n.Drp,
                    {
                        id: r.id,
                        leadingAccessory: {
                            type: "roleDot",
                            variant: "dot" === l ? "dot" : "circle",
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
