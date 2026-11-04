var a = t(477900);
t(582128);
var n = t(855986),
    i = t(231723),
    s = t(192308);
if (221552 == t.j) var c = t(477782);
if (221552 == t.j) var r = t(173936);
var d = t(317525),
    o = t(370480),
    u = t(792996);
let h = "guild-connection-roles";
function g(l) {
    (0, s.mM)(
        async () => {
            let { default: e } = await Promise.all([
                t.e(587882),
                t.e(727797),
                t.e(24922),
                t.e(150200),
                t.e(292837),
            ]).then(t.bind(t, 480900));
            return (t) => (0, a.jsx)(e, { ...t, guildId: l });
        },
        {
            modalKey: h,
            contextKey: i.SY,
            onCloseRequest: () => {
                (0, s.Oo)(h, i.SY);
            },
        },
    );
}
t.d(
    e,
    {},
    {
        Ay: function (l) {
            return (0, n.bG)([d.A], () => (0, o.N8)(d.A.getSortedRoles(l.id)), [l])
                ? (0, a.jsx)(c.Dr, {
                      id: "guild-connection-roles",
                      label: u.intl.string(u.t.ghtnss),
                      icon: r.LinkIcon,
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                      action: () => g(l.id),
                  })
                : null;
        },
        CB: h,
        c0: g,
    },
);
