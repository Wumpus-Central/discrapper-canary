a.d(e, { Ay: () => v, CB: () => h, c0: () => g });
var n = a(477900);
a(582128);
var t = a(17928),
    i = a(231723),
    s = a(192308);
if (221552 == a.j) var c = a(477782);
if (221552 == a.j) var r = a(173936);
var o = a(317525),
    d = a(370480),
    u = a(105292);
let h = "guild-connection-roles";
function g(l) {
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("587882"),
                a.e("727797"),
                a.e("24922"),
                a.e("150200"),
                a.e("292837"),
            ]).then(a.bind(a, 480900));
            return (a) => (0, n.jsx)(e, { ...a, guildId: l });
        },
        {
            modalKey: h,
            contextKey: i.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(h, i.SY);
            },
        },
    );
}
function v(l) {
    return (0, t.bG)([o.A], () => (0, d.N8)(o.A.getSortedRoles(l.id)), [l])
        ? (0, n.jsx)(c.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: r.LinkIcon,
              leadingAccessory: { type: "icon", icon: r.LinkIcon },
              action: () => g(l.id),
          })
        : null;
}
