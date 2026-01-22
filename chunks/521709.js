r.d(t, {
    default: () => p,
});
var n = r(627968);
r(64700);
var c = r(311907),
    o = r(397927),
    i = r(442433),
    a = r(847767),
    l = r(181079),
    s = r(422258),
    u = r(652215),
    b = r(985018);
let p = (0, a.A)(
    function (e) {
        let { onSelect: t } = e,
            r = (0, c.bG)([l.A], () => l.A.favoriteServerMuted);
        return (0, n.jsx)(o.W1t, {
            navId: "favorite-server-context",
            onClose: i.Z_,
            "aria-label": b.intl.string(b.t.liqwPJ),
            onSelect: t,
            children: (0, n.jsx)(o.rXV, {
                children: (0, n.jsx)(o.sLh, {
                    id: "mute-server",
                    label: b.intl.string(b.t.vRzp7P),
                    action: () => (0, s.p0)(),
                    checked: r,
                }),
            }),
        });
    },
    {
        object: u.ZSU.CONTEXT_MENU,
    },
);
