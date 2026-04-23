n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(192308),
    r = n(862328),
    o = n(777666),
    d = n(565787),
    c = n(67811),
    u = n(791606),
    h = n(486020),
    A = n(900848),
    _ = n(550591),
    m = n(962795);
function g(e) {
    let [t, g] = l.useState(!1),
        p = (0, s.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(A.c, {
        children: (0, i.jsx)(_.A, {
            text: e.name,
            children: (0, i.jsx)(r.Q, {
                className: m.o,
                selected: t,
                lowerBadge: (0, i.jsx)(o.fk, { icon: (0, d.k)(u.A), disableColor: !0, className: m._ }),
                children: (0, i.jsx)(c.j, {
                    name: e.name,
                    onMouseEnter: () => {
                        g(!0);
                    },
                    onMouseLeave: () => {
                        g(!1);
                    },
                    onClick: () => {
                        (0, a.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? h.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...p,
                }),
            }),
        }),
    });
}
