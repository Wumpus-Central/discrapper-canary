t.d(e, { Z: () => s });
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    c = t(496675),
    r = t(981631),
    d = t(388032);
function s(n, e) {
    let s = (0, a.e7)([c.Z], () => c.Z.can(r.Plq.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !s
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'clone-channel',
              label: d.intl.string(d.t.dEaPc3),
              action: () =>
                  (0, i.ZDy)(async () => {
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
