r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(594190),
    a = r(592125),
    o = r(19780),
    s = r(944486),
    l = r(626135),
    u = r(710111),
    c = r(981631),
    d = r(474936);
function f(e, n) {
    return e.guildId === u.X8 ? 'default' : n ? 'custom-external' : 'custom';
}
function p(e, n, r, p) {
    var h;
    let _ = a.Z.getChannel(s.Z.getVoiceChannelId()),
        m = null == _ ? void 0 : _.getGuildId(),
        g = o.Z.getMediaSessionId(),
        E = o.Z.getRTCConnectionId(),
        v = null === (h = i.ZP.getCurrentGameForAnalytics()) || void 0 === h ? void 0 : h.name,
        y = m !== r.guildId && r.guildId !== u.X8,
        b = f(r, y);
    l.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: d.QP.SOUNDBOARD_PLAY,
        feature_tier: y ? d.h1.PREMIUM_STANDARD : d.h1.FREE,
        guild_id: m,
        location_stack: e,
        rtc_connection_id: E,
        media_session_id: g,
        in_overlay: n,
        application_name: v,
        emoji_count: null != r.emojiId || null != r.emojiName ? 1 : 0,
        feature_selection: b,
        feature_selection_id: r.soundId,
        sound_type: p
    });
}
