n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(367907),
    c = n(359110),
    d = n(769654),
    u = n(496675),
    h = n(205129),
    m = n(626135),
    p = n(981631),
    g = n(388032);
function f(e) {
    let t = r.useContext(m.AnalyticsContext),
        n = e.voiceChannels[0],
        f = (0, l.e7)([u.Z], () => null != n && u.Z.can(p.Plq.CONNECT, n.channel));
    return null == n
        ? null
        : [
              (0, i.jsx)(
                  a.MenuItem,
                  {
                      id: 'join-voice',
                      action: function () {
                          (0, c.Kh)(n.channel.id),
                              s.default.selectVoiceChannel(n.channel.id),
                              o.ZP.trackWithMetadata(p.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                  source: {
                                      ...t.location,
                                      object: p.qAy.LIST_ITEM
                                  },
                                  guild_id: n.guild.id,
                                  channel_id: n.channel.id,
                                  ...(0, h.y)(e)
                              });
                      },
                      label: g.intl.string(g.t['8yOlh4']),
                      disabled: !f
                  },
                  'join-voice'
              ),
              (0, i.jsx)(
                  a.MenuItem,
                  {
                      id: 'goto-server',
                      action: function () {
                          (0, d.X)(n.guild.id),
                              o.ZP.trackWithMetadata(p.rMx.ACTIVITY_FEED_GUILD_VISITED, {
                                  source: {
                                      ...t.location,
                                      object: p.qAy.LIST_ITEM
                                  },
                                  guild_id: n.guild.id,
                                  af_recently_played: !1,
                                  ...(0, h.y)(e)
                              });
                      },
                      label: g.intl.string(g.t.RGgqm5)
                  },
                  'goto-server'
              )
          ];
}
