n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(287734),
    o = n(906732),
    s = n(592125),
    l = n(19780),
    c = n(979651),
    u = n(626135),
    d = n(475413),
    _ = n(981631),
    f = n(388032);
function p(e) {
    let { user: t, activity: n, onAction: p, onClose: h } = e,
        { newestAnalyticsLocation: m } = (0, o.ZP)(),
        g = (0, i.e7)([c.Z, s.Z], () => {
            var e;
            return s.Z.getChannel(null == (e = c.Z.getVoiceStateForUser(t.id)) ? void 0 : e.channelId);
        }),
        E = (0, i.e7)([l.Z], () => l.Z.getChannelId() === (null == g ? void 0 : g.id));
    return (null == n ? void 0 : n.type) !== _.IIU.HANG_STATUS || null == g
        ? null
        : (0, r.jsx)(d.tG, {
              text: f.intl.string(f.t['9C444u']),
              disabled: E,
              fullWidth: !0,
              onClick: (e) => {
                  (e.stopPropagation(),
                      null == p || p({ action: 'PRESS_HANG_STATUS_BUTTON' }),
                      a.default.selectVoiceChannel(g.id),
                      u.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
                          channel_id: g.id,
                          guild_id: g.guild_id,
                          source: m
                      }),
                      null == h || h());
              }
          });
}
