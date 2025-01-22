t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(392711),
    a = t.n(l),
    r = t(442837),
    o = t(481060),
    d = t(344185),
    u = t(665906),
    c = t(388032);
function s(n) {
    let e = (0, u.Xb)(n),
        l = (0, r.e7)([d.Z], () => !a().isEmpty(d.Z.getThreadsForGuild(n.id)));
    return e && l
        ? (0, i.jsx)(o.MenuItem, {
              id: 'active-threads',
              label: c.intl.string(c.t.TM6erq),
              icon: o.ChatIcon,
              action: () => {
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await t.e('22482').then(t.bind(t, 157743));
                      return (t) =>
                          (0, i.jsx)(e, {
                              guildId: n.id,
                              ...t
                          });
                  });
              }
          })
        : null;
}
