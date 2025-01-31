n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var a = n(442837),
    i = n(481060),
    r = n(430824),
    o = n(594174),
    u = n(388032);
function d(e, t) {
    let d = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        s = (0, a.e7)([r.Z], () => r.Z.getGuild(t));
    return null == s || null == d || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(d)
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'transfer-ownership',
              color: 'danger',
              label: u.intl.string(u.t.Z5s7PD),
              action: () =>
                  (0, i.ZDy)(async () => {
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
