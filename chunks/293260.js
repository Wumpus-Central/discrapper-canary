var l = t(477900);
t(582128);
var i = t(855986),
    a = t(231723),
    s = t(192308);
if (221552 == t.j) var r = t(477782);
if (221552 == t.j) var c = t(173936);
var d = t(317525),
    o = t(370480),
    u = t(792996);
let N = "guild-connection-roles";
function g(e) {
    (0, s.mM)(
        async () => {
            let { default: n } = await Promise.all([
                t.e(587882),
                t.e(727797),
                t.e(24922),
                t.e(150200),
                t.e(292837),
            ]).then(t.bind(t, 480900));
            return (t) => (0, l.jsx)(n, { ...t, guildId: e });
        },
        {
            modalKey: N,
            contextKey: a.SY,
            onCloseRequest: () => {
                (0, s.Oo)(N, a.SY);
            },
        },
    );
}
t.d(
    n,
    {},
    {
        Ay: function (e) {
            return (0, i.bG)([d.A], () => (0, o.N8)(d.A.getSortedRoles(e.id)), [e])
                ? (0, l.jsx)(r.Dr, {
                      id: "guild-connection-roles",
                      label: u.intl.string(u.t.ghtnss),
                      icon: c.LinkIcon,
                      leadingAccessory: { type: "icon", icon: c.LinkIcon },
                      action: () => g(e.id),
                  })
                : null;
        },
        CB: N,
        c0: g,
    },
);
