a.d(l, { Ay: () => f, CB: () => u, c0: () => v });
var t = a(477900);
a(582128);
var n = a(17928),
    i = a(231723),
    s = a(192308);
if (221552 == a.j) var r = a(477782);
if (221552 == a.j) var c = a(173936);
var d = a(317525),
    o = a(370480),
    h = a(660183);
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
            return (a) => (0, t.jsx)(l, { ...a, guildId: e });
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
function f(e) {
    return (0, n.bG)([d.A], () => (0, o.N8)(d.A.getSortedRoles(e.id)), [e])
        ? (0, t.jsx)(r.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: c.LinkIcon,
              leadingAccessory: { type: "icon", icon: c.LinkIcon },
              action: () => v(e.id),
          })
        : null;
}
