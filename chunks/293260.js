"use strict";
n.d(t, { Ay: () => A, CB: () => _, c0: () => E });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(231723),
    s = n(192308),
    l = n(477782),
    o = n(173936),
    d = n(317525),
    c = n(370480),
    u = n(375708);
let _ = "guild-connection-roles";
function E(e) {
    (0, s.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("76649"),
                n.e("95820"),
                n.e("24922"),
                n.e("50200"),
                n.e("92837"),
            ]).then(n.bind(n, 480900));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        },
        {
            modalKey: _,
            contextKey: a.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(_, a.SY);
            },
        },
    );
}
function A(e) {
    return (0, r.bG)([d.A], () => (0, c.N8)(d.A.getSortedRoles(e.id)), [e])
        ? (0, i.jsx)(l.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: o.q,
              leadingAccessory: { type: "icon", icon: o.q },
              action: () => E(e.id),
          })
        : null;
}
