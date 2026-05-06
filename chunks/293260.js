"use strict";
n.d(t, { Ay: () => h, CB: () => _, c0: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(231723),
    a = n(192308),
    o = n(477782),
    l = n(173936),
    u = n(317525),
    c = n(370480),
    d = n(375708);
let _ = "guild-connection-roles";
function f(e) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("53739"), n.e("92837")]).then(n.bind(n, 480900));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        },
        {
            modalKey: _,
            contextKey: s.SY,
            onCloseRequest: () => {
                (0, a.closeModal)(_, s.SY);
            },
        },
    );
}
function h(e) {
    return (0, r.bG)([u.A], () => (0, c.N8)(u.A.getSortedRoles(e.id)), [e])
        ? (0, i.jsx)(o.Dr, {
              id: "guild-connection-roles",
              label: d.intl.string(d.t.ghtnss),
              icon: l.q,
              leadingAccessory: { type: "icon", icon: l.q },
              action: () => f(e.id),
          })
        : null;
}
