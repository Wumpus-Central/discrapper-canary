e.d(l, { Ay: () => f, CB: () => v, c0: () => u });
var t = e(477900);
e(582128);
var i = e(17928),
    s = e(231723),
    n = e(192308);
if (221552 == e.j) var c = e(477782);
if (221552 == e.j) var o = e(173936);
var r = e(317525),
    d = e(370480),
    h = e(375708);
let v = "guild-connection-roles";
function u(a) {
    (0, n.openModalLazy)(
        async () => {
            let { default: l } = await Promise.all([
                e.e("42809"),
                e.e("64640"),
                e.e("24922"),
                e.e("150200"),
                e.e("292837"),
            ]).then(e.bind(e, 480900));
            return (e) => (0, t.jsx)(l, { ...e, guildId: a });
        },
        {
            modalKey: v,
            contextKey: s.SY,
            onCloseRequest: () => {
                (0, n.closeModal)(v, s.SY);
            },
        },
    );
}
function f(a) {
    return (0, i.bG)([r.A], () => (0, d.N8)(r.A.getSortedRoles(a.id)), [a])
        ? (0, t.jsx)(c.Dr, {
              id: "guild-connection-roles",
              label: h.intl.string(h.t.ghtnss),
              icon: o.LinkIcon,
              leadingAccessory: { type: "icon", icon: o.LinkIcon },
              action: () => u(a.id),
          })
        : null;
}
