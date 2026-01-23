n.d(t, {
    default: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(820284),
    c = n(358367),
    s = n(793574),
    o = n(50268),
    u = n(301541),
    d = n(243949),
    b = n(652215),
    f = n(985018);
let p = (0, c.A)(
    function (e) {
        let { user: t, analyticsContext: n, onSelect: c } = e,
            s = (0, d.A)({
                userId: t.id,
            }),
            p = (0, o.A)({
                id: t.id,
                label: f.intl.string(f.t["/AXYnE"]),
            }),
            O = (0, u.A)(t.id),
            j = t.isNonUserBot();
        return (0, r.jsx)(a.A, {
            context: n,
            object: b.ZSU.CONTEXT_MENU,
            children: (0, r.jsxs)(i.W1t, {
                "data-menu-mixed": !0,
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": f.intl.string(f.t.liqwPJ),
                onSelect: c,
                children: [
                    (0, r.jsxs)(i.rXV, {
                        children: [!j && s, !j && O],
                    }),
                    (0, r.jsx)(i.rXV, {
                        children: p,
                    }),
                ],
            }),
        });
    },
    [s.A.CONTEXT_MENU, s.A.BANNED_USER_MENU],
);
