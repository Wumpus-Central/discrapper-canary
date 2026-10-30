a.d(e, { Ay: () => g, CB: () => u, c0: () => v });
var t = a(477900);
a(582128);
var n = a(17928),
    s = a(231723),
    i = a(192308);
if (221552 == a.j) var c = a(477782);
if (221552 == a.j) var r = a(173936);
var d = a(317525),
    o = a(370480),
    h = a(105292);
let u = "guild-connection-roles";
function v(l) {
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                a.e("587882"),
                a.e("727797"),
                a.e("24922"),
                a.e("150200"),
                a.e("292837"),
            ]).then(a.bind(a, 480900));
            return (a) => (0, t.jsx)(e, { ...a, guildId: l });
        },
        {
            modalKey: u,
            contextKey: s.SY,
            onCloseRequest: () => {
                (0, i.closeModal)(u, s.SY);
            },
        },
    );
}
function g(l) {
    return (0, n.bG)([d.A], () => (0, o.N8)(d.A.getSortedRoles(l.id)), [l])
        ? (0, t.jsx)(c.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: r.LinkIcon,
              leadingAccessory: { type: "icon", icon: r.LinkIcon },
              action: () => v(l.id),
          })
        : null;
}
