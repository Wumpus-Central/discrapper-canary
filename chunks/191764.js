n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(287734),
    o = n(906732),
    s = n(359110),
    l = n(592125),
    c = n(19780),
    u = n(979651),
    d = n(938475),
    f = n(626135),
    _ = n(475413),
    p = n(981631),
    h = n(388032);
function m(e) {
    let { user: t, activity: n, onAction: m, onClose: g } = e,
        { newestAnalyticsLocation: E } = (0, o.ZP)(),
        b = (0, i.e7)([u.Z, l.Z], () => {
            var e;
            return l.Z.getChannel(null == (e = u.Z.getVoiceStateForUser(t.id)) ? void 0 : e.channelId);
        }),
        y = (0, i.e7)([c.Z], () => c.Z.getChannelId() === (null == b ? void 0 : b.id));
    return (null == n ? void 0 : n.type) !== p.IIU.HANG_STATUS || null == b
        ? null
        : (0, r.jsx)(_.tG, {
              text: y ? h.intl.string(h.t.BXxdl5) : h.intl.string(h.t["9C444u"]),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(),
                      null == m || m({ action: "PRESS_HANG_STATUS_BUTTON" }),
                      a.default.selectVoiceChannel(b.id),
                      (0, s.Kh)(b.id),
                      f.default.track(p.rMx.HANG_STATUS_CTA_CLICKED, {
                          channel_id: b.id,
                          guild_id: b.guild_id,
                          source: E,
                          media_session_id: c.Z.getMediaSessionId(),
                          call_num_participants: d.ZP.countVoiceStatesForChannel(b.id),
                          other_user_id: t.id,
                          cta_type: y ? "open" : "join",
                      }),
                      null == g || g();
              },
          });
}
