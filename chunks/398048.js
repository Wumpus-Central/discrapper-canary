t.d(e, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(496675),
    u = t(981631),
    c = t(388032);
function o(n, e) {
    let o = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !o
        ? null
        : (0, l.jsx)(i.MenuItem, {
              id: 'clone-channel',
              label: c.intl.string(c.t.dEaPc3),
              action: () =>
                  (0, i.openModalLazy)(async () => {
                      let { default: a } = await Promise.all([t.e('7590'), t.e('45094'), t.e('74100')]).then(t.bind(t, 218613));
                      return (t) =>
                          (0, l.jsx)(a, {
                              ...t,
                              channelType: n.type,
                              guildId: e.id,
                              categoryId: n.parent_id,
                              cloneChannelId: n.id
                          });
                  })
          });
}
