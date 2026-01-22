n.d(l, {
    default: () => f,
});
var r = n(627968);
n(64700);
var t = n(397927),
    i = n(442433),
    o = n(820284),
    s = n(358367),
    a = n(793574),
    c = n(50268),
    d = n(301541),
    u = n(243949),
    A = n(180798),
    b = n(652215),
    g = n(985018);
let f = (0, s.A)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: s, onSelect: a } = e,
            f = (0, u.A)({
                userId: l.id,
                guildId: n,
            }),
            h = (0, A.A)(l.id, n),
            p = (0, c.A)({
                id: l.id,
                label: g.intl.string(g.t["/AXYnE"]),
            }),
            j = (0, d.A)(l.id),
            O = l.isNonUserBot();
        return (0, r.jsx)(o.A, {
            context: s,
            object: b.ZSU.CONTEXT_MENU,
            children: (0, r.jsxs)(t.W1t, {
                navId: "user-context",
                onClose: i.Z_,
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: a,
                children: [
                    (0, r.jsxs)(t.rXV, {
                        children: [!O && f, !O && j],
                    }),
                    (0, r.jsx)(t.rXV, {
                        children: !O && h,
                    }),
                    (0, r.jsx)(t.rXV, {
                        children: p,
                    }),
                ],
            }),
        });
    },
    [a.A.CONTEXT_MENU, a.A.AUDIT_LOG_USER_MENU],
);
