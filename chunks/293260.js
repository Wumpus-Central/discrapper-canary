t.d(e, { Ay: () => A, CB: () => u, c0: () => v });
var a = t(627968);
t(64700);
var i = t(17928),
    n = t(231723),
    s = t(192308);
if (21552 == t.j) var o = t(477782);
if (21552 == t.j) var c = t(173936);
var r = t(317525),
    d = t(370480),
    h = t(375708);
let u = "guild-connection-roles";
function v(l) {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("76649"),
                t.e("95820"),
                t.e("24922"),
                t.e("50200"),
                t.e("92837"),
            ]).then(t.bind(t, 480900));
            return (t) => (0, a.jsx)(e, { ...t, guildId: l });
        },
        {
            modalKey: u,
            contextKey: n.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(u, n.SY);
            },
        },
    );
}
function A(l) {
    return (0, i.bG)([r.A], () => (0, d.N8)(r.A.getSortedRoles(l.id)), [l])
        ? (0, a.jsx)(o.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: c.q,
              leadingAccessory: { type: "icon", icon: c.q },
              action: () => v(l.id),
          })
        : null;
}
