"use strict";
n.d(t, { Ay: () => m, CB: () => _, c0: () => p });
var a = n(627968);
n(64700);
var r = n(17928),
    i = n(231723),
    l = n(192308);
if (21552 == n.j) var s = n(477782);
if (21552 == n.j) var o = n(173936);
var c = n(317525),
    d = n(370480),
    u = n(985018);
let _ = "guild-connection-roles";
function p(e) {
    (0, l.openModalLazy)(
        async () => {
            let { default: t } = await n.e("92837").then(n.bind(n, 480900));
            return (n) => (0, a.jsx)(t, { ...n, guildId: e });
        },
        {
            modalKey: _,
            contextKey: i.SY,
            onCloseRequest: () => {
                (0, l.closeModal)(_, i.SY);
            },
        },
    );
}
function m(e) {
    return (0, r.bG)([c.A], () => (0, d.N8)(c.A.getSortedRoles(e.id)), [e])
        ? (0, a.jsx)(s.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: o.q,
              leadingAccessory: { type: "icon", icon: o.q },
              action: () => p(e.id),
          })
        : null;
}
