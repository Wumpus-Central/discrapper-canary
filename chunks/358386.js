n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    r = n(430824),
    o = n(594174),
    d = n(388032);
function u(e, t) {
    let u = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        s = (0, i.e7)([r.Z], () => r.Z.getGuild(t));
    return null == s || null == u || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(u)
        ? null
        : (0, l.jsx)(a.sNh, {
              id: 'transfer-ownership',
              color: 'danger',
              label: d.intl.string(d.t.Z5s7PD),
              action: () =>
                  (0, a.ZDy)(async () => {
                      let { default: t } = await n.e('8653').then(n.bind(n, 928090));
                      return (n) =>
                          (0, l.jsx)(t, {
                              ...n,
                              guild: s,
                              fromUser: u,
                              toUser: e
                          });
                  })
          });
}
