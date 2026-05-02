t.d(l, { Ay: () => f, CB: () => h, c0: () => g });
var a = t(627968);
t(64700);
var i = t(17928),
    n = t(231723),
    s = t(192308);
if (21552 == t.j) var o = t(477782);
if (21552 == t.j) var r = t(173936);
var c = t(317525),
    d = t(370480),
    u = t(375708);
let h = "guild-connection-roles";
function g(e) {
    (0, s.openModalLazy)(
        async () => {
            let { default: l } = await Promise.all([t.e("15251"), t.e("92837")]).then(t.bind(t, 480900));
            return (t) => (0, a.jsx)(l, { ...t, guildId: e });
        },
        {
            modalKey: h,
            contextKey: n.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(h, n.SY);
            },
        },
    );
}
function f(e) {
    return (0, i.bG)([c.A], () => (0, d.N8)(c.A.getSortedRoles(e.id)), [e])
        ? (0, a.jsx)(o.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: r.q,
              leadingAccessory: { type: "icon", icon: r.q },
              action: () => g(e.id),
          })
        : null;
}
