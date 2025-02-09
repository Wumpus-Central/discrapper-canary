n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(430824),
    u = n(594174),
    o = n(388032);
function d(e, t) {
    let d = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        s = (0, i.e7)([a.Z], () => a.Z.getGuild(t));
    return null == s || null == d || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(d)
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'transfer-ownership',
              color: 'danger',
              label: o.intl.string(o.t.Z5s7PD),
              action: () =>
                  (0, r.ZDy)(async () => {
                      let { default: t } = await n.e('8653').then(n.bind(n, 928090));
                      return (n) =>
                          (0, l.jsx)(t, {
                              ...n,
                              guild: s,
                              fromUser: d,
                              toUser: e
                          });
                  })
          });
}
