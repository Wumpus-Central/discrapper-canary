"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(837381),
    r = n(397927),
    a = n(791606),
    o = n(486020),
    c = n(900848),
    d = n(550591),
    u = n(78043);
function h(e) {
    let [t, h] = s.useState(!1),
        A = (0, l.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(c.c, {
        children: (0, i.jsx)(d.A, {
            text: e.name,
            children: (0, i.jsx)(r.Qk9, {
                className: u.o,
                selected: t,
                lowerBadge: (0, i.jsx)(r.fkz, { icon: (0, r.kHD)(a.A), disableColor: !0, className: u._ }),
                children: (0, i.jsx)(r.jlP, {
                    name: e.name,
                    onMouseEnter: () => {
                        h(!0);
                    },
                    onMouseLeave: () => {
                        h(!1);
                    },
                    onClick: () => {
                        (0, r.mMO)(async () => {
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
