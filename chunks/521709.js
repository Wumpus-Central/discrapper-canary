r.d(t, { default: () => p });
var n = r(627968);
r(64700);
var i = r(311907),
    c = r(397927),
    a = r(442433),
    s = r(847767),
    o = r(181079),
    d = r(422258),
    l = r(652215),
    u = r(985018);
let p = (0, s.A)(
    function (e) {
        let { onSelect: t } = e,
            r = (0, i.bG)([o.A], () => o.A.favoriteGuildMuted);
        return (0, n.jsx)(c.W1t, {
            "data-menu-migrated": !0,
            navId: "favorite-server-context",
            onClose: a.Z_,
            "aria-label": u.intl.string(u.t.liqwPJ),
            onSelect: t,
            children: (0, n.jsx)(c.rXV, {
                children: (0, n.jsx)(c.sLh, {
                    id: "mute-server",
                    label: u.intl.string(u.t.vRzp7P),
                    action: () => (0, d.zE)(),
                    checked: r,
                }),
            }),
        });
    },
    { object: l.ZSU.CONTEXT_MENU },
);
