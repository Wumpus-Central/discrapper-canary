r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(287734),
    o = r(906732),
    l = r(592125),
    u = r(19780),
    c = r(979651),
    d = r(626135),
    f = r(475413),
    _ = r(981631),
    h = r(388032);
function p(e) {
    let { user: n, activity: r, onAction: p, onClose: m } = e,
        { newestAnalyticsLocation: g } = (0, o.ZP)(),
        E = (0, a.e7)([c.Z, l.Z], () => {
            var e;
            return l.Z.getChannel(null === (e = c.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        v = (0, a.e7)([u.Z], () => u.Z.getChannelId() === (null == E ? void 0 : E.id));
    return (null == r ? void 0 : r.type) !== _.IIU.HANG_STATUS || null == E
        ? null
        : (0, i.jsx)(f.tG, {
              text: h.intl.string(h.t['9C444u']),
              disabled: v,
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(),
                      null == p || p({ action: 'PRESS_HANG_STATUS_BUTTON' }),
                      s.default.selectVoiceChannel(E.id),
                      d.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
                          channel_id: E.id,
                          guild_id: E.guild_id,
                          source: g
                      }),
                      null == m || m();
              }
          });
}
