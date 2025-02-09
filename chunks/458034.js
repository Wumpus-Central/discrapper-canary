n.d(t, {
    Am: () => u,
    ZP: () => d,
    s$: () => c
});
var a = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    r = n(430824),
    s = n(275759),
    l = n(388032);
let c = 'guild-connection-roles';
function u(e) {
    (0, i.ZDy)(
        async () => {
            let { default: t } = await n.e('40897').then(n.bind(n, 507294));
            return (n) =>
                (0, a.jsx)(t, {
                    ...n,
                    guildId: e
                });
        },
        {
            modalKey: c,
            contextKey: i.z1l,
            onCloseRequest: () => {
                (0, i.Mr3)(c, i.z1l);
            }
        }
    );
}
function d(e) {
    return (0, o.e7)([r.Z], () => (0, s.kQ)(e, r.Z.getRoles(e.id)), [e])
        ? (0, a.jsx)(i.sNh, {
              id: 'guild-connection-roles',
              label: l.intl.string(l.t.ghtnsr),
              icon: i.xPt,
              action: () => u(e.id)
          })
        : null;
}
