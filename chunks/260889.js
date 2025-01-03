n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(367907),
    c = n(769654),
    d = n(496675),
    u = n(205129),
    h = n(626135),
    m = n(981631),
    p = n(388032);
function g(e) {
    let t = r.useContext(h.AnalyticsContext),
        n = e.voiceChannels[0],
        g = (0, l.e7)([d.Z], () => null != n && d.Z.can(m.Plq.CONNECT, n.channel));
    return null == n
        ? null
        : [
              (0, i.jsx)(
                  a.MenuItem,
                  {
                      id: 'join-voice',
                      action: function () {
                          (0, c.X)(n.guild.id),
                              s.default.selectVoiceChannel(n.channel.id),
                              o.ZP.trackWithMetadata(m.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                  source: {
                                      ...t.location,
                                      object: m.qAy.LIST_ITEM
                                  },
                                  guild_id: n.guild.id,
                                  channel_id: n.channel.id,
                                  ...(0, u.y)(e)
                              });
                      },
                      label: p.intl.string(p.t['8yOlh4']),
                      disabled: !g
                  },
                  'join-voice'
              ),
              (0, i.jsx)(
                  a.MenuItem,
                  {
                      id: 'goto-server',
                      action: function () {
                          (0, c.X)(n.guild.id),
                              o.ZP.trackWithMetadata(m.rMx.ACTIVITY_FEED_GUILD_VISITED, {
                                  source: {
                                      ...t.location,
                                      object: m.qAy.LIST_ITEM
                                  },
                                  guild_id: n.guild.id,
                                  af_recently_played: !1,
                                  ...(0, u.y)(e)
                              });
                      },
                      label: p.intl.string(p.t.RGgqm5)
                  },
                  'goto-server'
              )
          ];
}
