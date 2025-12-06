l.d(r, { default: () => c });
var e = l(54381);
l(473749);
var n = l(481060),
    t = l(239091),
    s = l(12922),
    i = l(388032);
function c(o) {
    let { roles: r } = o;
    return (0, e.jsx)(n.v2r, {
        navId: "invite-roles-menu",
        onClose: t.Zy,
        onSelect: () => {},
        "aria-label": i.intl.string(i.t["LPJmL/"]),
        children: (0, e.jsx)(n.kSQ, {
            children: r.map((o) =>
                (0, e.jsx)(
                    n.sNh,
                    {
                        id: o.id,
                        label: () => (0, e.jsx)(s.Z, { role: o }),
                    },
                    o.id,
                ),
            ),
        }),
    });
}
