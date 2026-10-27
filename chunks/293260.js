a.d(l, { Ay: () => g, CB: () => u, c0: () => v });
var n = a(477900);
a(582128);
var t = a(17928),
    i = a(231723),
    s = a(192308);
if (221552 == a.j) var r = a(477782);
if (221552 == a.j) var d = a(173936);
var c = a(317525),
    o = a(370480),
    h = a(105292);
let u = "guild-connection-roles";
function v(e) {
    (0, s.openModalLazy)(
        async () => {
            let { default: l } = await Promise.all([
                a.e("18146"),
                a.e("64640"),
                a.e("24922"),
                a.e("150200"),
                a.e("292837"),
            ]).then(a.bind(a, 480900));
            return (a) => (0, n.jsx)(l, { ...a, guildId: e });
        },
        {
            modalKey: u,
            contextKey: i.SY,
            onCloseRequest: () => {
                (0, s.closeModal)(u, i.SY);
            },
        },
    );
}
function g(e) {
    return (0, t.bG)([c.A], () => (0, o.N8)(c.A.getSortedRoles(e.id)), [e])
        ? (0, n.jsx)(r.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: d.LinkIcon,
              leadingAccessory: { type: "icon", icon: d.LinkIcon },
              action: () => v(e.id),
          })
        : null;
}
