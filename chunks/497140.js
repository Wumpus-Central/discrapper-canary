n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(397927),
    r = n(791606),
    o = n(486020),
    d = n(900848),
    c = n(550591),
    u = n(962795);
function h(e) {
    let [t, h] = l.useState(!1),
        A = (0, s.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(d.c, {
        children: (0, i.jsx)(c.A, {
            text: e.name,
            children: (0, i.jsx)(a.Qk9, {
                className: u.o,
                selected: t,
                lowerBadge: (0, i.jsx)(a.fkz, { icon: (0, a.kHD)(r.A), disableColor: !0, className: u._ }),
                children: (0, i.jsx)(a.jlP, {
                    name: e.name,
                    onMouseEnter: () => {
                        h(!0);
                    },
                    onMouseLeave: () => {
                        h(!1);
                    },
                    onClick: () => {
                        (0, a.mMO)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? o.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...A,
                }),
            }),
        }),
    });
}
