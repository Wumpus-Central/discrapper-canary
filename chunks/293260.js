e.d(t, { Ay: () => A, CB: () => u, c0: () => v });
var a = e(627968);
e(64700);
var i = e(17928),
    n = e(231723),
    s = e(192308);
if (21552 == e.j) var o = e(477782);
if (21552 == e.j) var c = e(173936);
var r = e(317525),
    d = e(370480),
    h = e(375708);
let u = "guild-connection-roles";
function v(l) {
    (0, s.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([e.e("54518"), e.e("92837")]).then(e.bind(e, 480900));
            return (e) => (0, a.jsx)(t, { ...e, guildId: l });
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
