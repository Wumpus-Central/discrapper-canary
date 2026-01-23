n.d(l, {
    default: () => f,
});
var t = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    o = n(820284),
    a = n(358367),
    d = n(793574),
    s = n(50268),
    c = n(301541),
    u = n(243949),
    A = n(180798),
    b = n(652215),
    g = n(985018);
let f = (0, a.A)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: a, onSelect: d } = e,
            f = (0, u.A)({
                userId: l.id,
                guildId: n,
            }),
            h = (0, A.A)(l.id, n),
            p = (0, s.A)({
                id: l.id,
                label: g.intl.string(g.t["/AXYnE"]),
            }),
            O = (0, c.A)(l.id),
            j = l.isNonUserBot();
        return (0, t.jsx)(o.A, {
            context: a,
            object: b.ZSU.CONTEXT_MENU,
            children: (0, t.jsxs)(r.W1t, {
                "data-menu-mixed": !0,
                navId: "user-context",
                onClose: i.Z_,
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: d,
                children: [
                    (0, t.jsxs)(r.rXV, {
                        children: [!j && f, !j && O],
                    }),
                    (0, t.jsx)(r.rXV, {
                        children: !j && h,
                    }),
                    (0, t.jsx)(r.rXV, {
                        children: p,
                    }),
                ],
            }),
        });
    },
    [d.A.CONTEXT_MENU, d.A.AUDIT_LOG_USER_MENU],
);
