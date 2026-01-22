e.d(l, { default: () => a });
var o = e(627968);
e(64700);
var s = e(397927),
    n = e(442433),
    i = e(142448),
    t = e(985018);
function a(r) {
    let { roles: l } = r;
    return (0, o.jsx)(s.W1t, {
        navId: "invite-roles-menu",
        onClose: n.Z_,
        onSelect: () => {},
        "aria-label": t.intl.string(t.t["LPJmL/"]),
        children: (0, o.jsx)(s.rXV, {
            children: l.map((r) =>
                (0, o.jsx)(
                    s.Drp,
                    {
                        id: r.id,
                        label: () => (0, o.jsx)(i.A, { role: r }),
                    },
                    r.id,
                ),
            ),
        }),
    });
}
