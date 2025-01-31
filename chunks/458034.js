n.d(t, {
    Am: () => d,
    ZP: () => f,
    s$: () => u
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(430824),
    o = n(275759),
    l = n(388032);
let u = 'guild-connection-roles';
function c() {
    return {
        modalKey: u,
        contextKey: a.z1l,
        onCloseRequest: () => {
            (0, a.Mr3)(u, a.z1l);
        }
    };
}
function d(e) {
    (0, a.ZDy)(async () => {
        let { default: t } = await n.e('40897').then(n.bind(n, 507294));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                guildId: e
            });
    }, c());
}
function f(e) {
    return (0, r.e7)([s.Z], () => (0, o.kQ)(e, s.Z.getRoles(e.id)), [e])
        ? (0, i.jsx)(a.sNh, {
              id: 'guild-connection-roles',
              label: l.intl.string(l.t.ghtnsr),
              icon: a.xPt,
              action: () => d(e.id)
          })
        : null;
}
