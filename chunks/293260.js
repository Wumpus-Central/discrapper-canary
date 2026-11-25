var t = i(477900);
i(582128);
var o = i(855986),
    c = i(231723),
    s = i(192308);
if (221552 == i.j) var l = i(477782);
if (221552 == i.j) var r = i(173936);
var a = i(317525),
    d = i(370480),
    u = i(792996);
let p = "guild-connection-roles";
function g(e) {
    (0, s.mM)(
        async () => {
            let { default: n } = await Promise.all([
                i.e(587882),
                i.e(727797),
                i.e(24922),
                i.e(150200),
                i.e(292837),
            ]).then(i.bind(i, 480900));
            return (i) => (0, t.jsx)(n, { ...i, guildId: e });
        },
        {
            modalKey: p,
            contextKey: c.SY,
            onCloseRequest: () => {
                (0, s.Oo)(p, c.SY);
            },
        },
    );
}
i.d(
    n,
    {},
    {
        Ay: function (e) {
            return (0, o.bG)([a.A], () => (0, d.N8)(a.A.getSortedRoles(e.id)), [e])
                ? (0, t.jsx)(l.Dr, {
                      id: "guild-connection-roles",
                      label: u.intl.string(u.t.ghtnss),
                      icon: r.LinkIcon,
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                      action: () => g(e.id),
                  })
                : null;
        },
        CB: p,
        c0: g,
    },
);
