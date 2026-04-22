"use strict";
n.d(t, { Ay: () => h, CB: () => m, c0: () => g });
var l = n(627968);
n(64700);
var a = n(311907),
    s = n(231723),
    i = n(192308);
if (21552 == n.j) var r = n(477782);
if (21552 == n.j) var o = n(173936);
var c = n(317525),
    u = n(370480),
    d = n(985018);
let m = "guild-connection-roles";
function g(e) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await n.e("92837").then(n.bind(n, 480900));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        },
        {
            modalKey: m,
            contextKey: s.SY,
            onCloseRequest: () => {
                (0, i.closeModal)(m, s.SY);
            },
        },
    );
}
function h(e) {
    return (0, a.bG)([c.A], () => (0, u.N8)(c.A.getSortedRoles(e.id)), [e])
        ? (0, l.jsx)(r.Dr, {
              id: "guild-connection-roles",
              label: d.intl.string(d.t.ghtnss),
              icon: o.q,
              leadingAccessory: { type: "icon", icon: o.q },
              action: () => g(e.id),
          })
        : null;
}
