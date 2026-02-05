"use strict";
n.d(t, { Ay: () => _, CB: () => u, c0: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(317525),
    o = n(370480),
    l = n(985018);
let u = "guild-connection-roles";
function c() {
    return {
        modalKey: u,
        contextKey: a.SYi,
        onCloseRequest: () => {
            (0, a.OoC)(u, a.SYi);
        },
    };
}
function d(e) {
    (0, a.mMO)(async () => {
        let { default: t } = await n.e("92837").then(n.bind(n, 480900));
        return (n) => (0, r.jsx)(t, { ...n, guildId: e });
    }, c());
}
function _(e) {
    return (0, i.bG)([s.A], () => (0, o.N8)(s.A.getSortedRoles(e.id)), [e])
        ? (0, r.jsx)(a.Drp, {
              id: "guild-connection-roles",
              label: l.intl.string(l.t.ghtnss),
              icon: a.qYV,
              leadingAccessory: { type: "icon", icon: a.qYV },
              action: () => d(e.id),
          })
        : null;
}
