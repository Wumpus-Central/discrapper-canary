e.d(a, { Ay: () => g, CB: () => u, c0: () => v });
var t = e(477900);
e(582128);
var n = e(17928),
    s = e(231723),
    i = e(192308);
if (221552 == e.j) var c = e(477782);
if (221552 == e.j) var r = e(173936);
var d = e(317525),
    o = e(370480),
    h = e(105292);
let u = "guild-connection-roles";
function v(l) {
    (0, i.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([
                e.e("587882"),
                e.e("727797"),
                e.e("24922"),
                e.e("150200"),
                e.e("292837"),
            ]).then(e.bind(e, 480900));
            return (e) => (0, t.jsx)(a, { ...e, guildId: l });
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
