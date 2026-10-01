a.d(e, { Ay: () => g, CB: () => v, c0: () => u });
var t = a(477900);
a(582128);
var n = a(17928),
    i = a(231723),
    s = a(192308);
if (221552 == a.j) var c = a(477782);
if (221552 == a.j) var r = a(173936);
var o = a(317525),
    d = a(370480),
    h = a(375708);
let v = "guild-connection-roles";
function u(l) {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("42809"),
                a.e("64640"),
                a.e("24922"),
                a.e("150200"),
                a.e("292837"),
            ]).then(a.bind(a, 480900));
            return (a) => (0, t.jsx)(e, { ...a, guildId: l });
        },
        {
            modalKey: v,
            contextKey: i.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(v, i.SY);
            },
        },
    );
}
function g(l) {
    return (0, n.bG)([o.A], () => (0, d.N8)(o.A.getSortedRoles(l.id)), [l])
        ? (0, t.jsx)(c.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: r.LinkIcon,
              leadingAccessory: { type: "icon", icon: r.LinkIcon },
              action: () => u(l.id),
          })
        : null;
}
