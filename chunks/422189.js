n.d(l, { default: () => p });
var t = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    o = n(820284),
    d = n(358367),
    s = n(793574),
    c = n(50268),
    a = n(301541),
    u = n(243949),
    A = n(180798),
    g = n(652215),
    h = n(985018);
let p = (0, d.A)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: d, onSelect: s } = e,
            p = (0, u.A)({ userId: l.id, guildId: n }),
            b = (0, A.A)(l.id, n),
            f = (0, c.A)({ id: l.id, label: h.intl.string(h.t["/AXYnE"]) }),
            j = (0, a.A)(l.id),
            v = l.isNonUserBot();
        return (0, t.jsx)(o.A, {
            context: d,
            object: g.ZSU.CONTEXT_MENU,
            children: (0, t.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: i.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: s,
                children: [
                    (0, t.jsxs)(r.rXV, { children: [!v && p, !v && j] }),
                    (0, t.jsx)(r.rXV, { children: !v && b }),
                    (0, t.jsx)(r.rXV, { children: f }),
                ],
            }),
        });
    },
    [s.A.CONTEXT_MENU, s.A.AUDIT_LOG_USER_MENU],
);
