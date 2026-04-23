n.d(t, { Ay: () => p, CB: () => m, c0: () => h });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(231723),
    a = n(192308);
if (21552 == n.j) var l = n(477782);
if (21552 == n.j) var o = n(173936);
var c = n(317525),
    d = n(370480),
    u = n(985018);
let m = "guild-connection-roles";
function h(e) {
    (0, a.openModalLazy)(
        async () => {
            let { default: t } = await n.e("92837").then(n.bind(n, 480900));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        },
        {
            modalKey: m,
            contextKey: s.SY,
            onCloseRequest: () => {
                (0, a.closeModal)(m, s.SY);
            },
        },
    );
}
function p(e) {
    return (0, r.bG)([c.A], () => (0, d.N8)(c.A.getSortedRoles(e.id)), [e])
        ? (0, i.jsx)(l.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: o.q,
              leadingAccessory: { type: "icon", icon: o.q },
              action: () => h(e.id),
          })
        : null;
}
