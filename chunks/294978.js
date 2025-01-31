t.d(n, { Z: () => c });
var i = t(200651);
t(192379);
var l = t(392711),
    a = t.n(l),
    r = t(442837),
    d = t(481060),
    s = t(344185),
    o = t(665906),
    u = t(388032);
function c(e) {
    let n = (0, o.Xb)(e),
        l = (0, r.e7)([s.Z], () => !a().isEmpty(s.Z.getThreadsForGuild(e.id)));
    return n && l
        ? (0, i.jsx)(d.sNh, {
              id: 'active-threads',
              label: u.intl.string(u.t.TM6erq),
              icon: d.kBi,
              action: () => {
                  (0, d.ZDy)(async () => {
                      let { default: n } = await t.e('22482').then(t.bind(t, 157743));
                      return (t) =>
                          (0, i.jsx)(n, {
                              guildId: e.id,
                              ...t
                          });
                  });
              }
          })
        : null;
}
