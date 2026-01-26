n.d(l, {
    default: () => f,
});
var r = n(627968);
n(64700);
var t = n(397927),
    i = n(442433),
    o = n(820284),
    c = n(358367),
    s = n(793574),
    a = n(50268),
    d = n(301541),
    u = n(243949),
    A = n(180798),
    g = n(652215),
    b = n(985018);
let f = (0, c.A)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: c, onSelect: s } = e,
            f = (0, u.A)({
                userId: l.id,
                guildId: n,
            }),
            p = (0, A.A)(l.id, n),
            h = (0, a.A)({
                id: l.id,
                label: b.intl.string(b.t["/AXYnE"]),
            }),
            j = (0, d.A)(l.id),
            O = l.isNonUserBot();
        return (0, r.jsx)(o.A, {
            context: c,
            object: g.ZSU.CONTEXT_MENU,
            children: (0, r.jsxs)(t.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: i.Z_,
                "aria-label": b.intl.string(b.t.liqwPJ),
                onSelect: s,
                children: [
                    (0, r.jsxs)(t.rXV, {
                        children: [!O && f, !O && j],
                    }),
                    (0, r.jsx)(t.rXV, {
                        children: !O && p,
                    }),
                    (0, r.jsx)(t.rXV, {
                        children: h,
                    }),
                ],
            }),
        });
    },
    [s.A.CONTEXT_MENU, s.A.AUDIT_LOG_USER_MENU],
);
