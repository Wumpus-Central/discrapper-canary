l.d(e, {
    default: () => d,
});
var t = l(627968);
l(64700);
var a = l(311907),
    i = l(397927),
    n = l(442433),
    o = l(775602),
    c = l(652215),
    s = l(985018);

function d(r) {
    let { roles: e } = r,
        l = (0, a.bG)([o.A], () => o.A.roleStyle);
    return (0, t.jsx)(i.W1t, {
        "data-menu-label-graphic": !0,
        navId: "invite-roles-menu",
        onClose: n.Z_,
        onSelect: () => {},
        "aria-label": s.intl.string(s.t["LPJmL/"]),
        children: (0, t.jsx)(i.rXV, {
            children: e.map((r) => {
                var e;
                return (0, t.jsx)(
                    i.Drp,
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
