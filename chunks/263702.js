n.d(t, { default: () => P });
var i = n(627968);
n(64700);
var l = n(861672),
    d = n(477782),
    r = n(442433),
    a = n(820284),
    o = n(358367),
    s = n(793574),
    c = n(50268),
    u = n(301541),
    A = n(243949),
    f = n(652215),
    h = n(985018);
let P = (0, o.A)(
    function (e) {
        let { user: t, analyticsContext: n, onSelect: o } = e,
            s = (0, A.A)({ userId: t.id }),
            P = (0, c.A)({ id: t.id, label: h.intl.string(h.t["/AXYnE"]) }),
            p = (0, u.A)(t.id),
            v = t.isNonUserBot();
        return (0, i.jsx)(a.A, {
            context: n,
            object: f.ZSU.CONTEXT_MENU,
            children: (0, i.jsxs)(l.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: r.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: o,
                children: [(0, i.jsxs)(d.rX, { children: [!v && s, !v && p] }), (0, i.jsx)(d.rX, { children: P })],
            }),
        });
    },
    [s.A.CONTEXT_MENU, s.A.BANNED_USER_MENU],
);
