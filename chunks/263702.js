n.d(t, { default: () => p });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(442433),
    s = n(820284),
    a = n(358367),
    d = n(793574),
    c = n(50268),
    u = n(301541),
    o = n(243949),
    A = n(652215),
    h = n(985018);
let p = (0, a.A)(
    function (e) {
        let { user: t, analyticsContext: n, onSelect: a } = e,
            d = (0, o.A)({ userId: t.id }),
            p = (0, c.A)({ id: t.id, label: h.intl.string(h.t["/AXYnE"]) }),
            j = (0, u.A)(t.id),
            v = t.isNonUserBot();
        return (0, i.jsx)(s.A, {
            context: n,
            object: A.ZSU.CONTEXT_MENU,
            children: (0, i.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: a,
                children: [(0, i.jsxs)(r.rXV, { children: [!v && d, !v && j] }), (0, i.jsx)(r.rXV, { children: p })],
            }),
        });
    },
    [d.A.CONTEXT_MENU, d.A.BANNED_USER_MENU],
);
