n.d(l, { default: () => p });
var t = n(627968);
n(64700);
var r = n(861672),
    i = n(477782),
    o = n(442433),
    d = n(820284),
    s = n(358367),
    c = n(793574),
    a = n(50268),
    u = n(301541),
    A = n(243949),
    g = n(180798),
    f = n(652215),
    h = n(985018);
let p = (0, s.A)(
    function (e) {
        let { user: l, guildId: n, analyticsContext: s, onSelect: c } = e,
            p = (0, A.A)({ userId: l.id, guildId: n }),
            x = (0, g.A)(l.id, n),
            b = (0, a.A)({ id: l.id, label: h.intl.string(h.t["/AXYnE"]) }),
            v = (0, u.A)(l.id),
            j = l.isNonUserBot();
        return (0, t.jsx)(d.A, {
            context: s,
            object: f.ZSU.CONTEXT_MENU,
            children: (0, t.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: o.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: c,
                children: [
                    (0, t.jsxs)(i.rX, { children: [!j && p, !j && v] }),
                    (0, t.jsx)(i.rX, { children: !j && x }),
                    (0, t.jsx)(i.rX, { children: b }),
                ],
            }),
        });
    },
    [c.A.CONTEXT_MENU, c.A.AUDIT_LOG_USER_MENU],
);
