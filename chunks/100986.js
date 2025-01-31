n.d(t, { Z: () => f });
var i = n(594190),
    r = n(592125),
    a = n(19780),
    s = n(944486),
    o = n(626135),
    l = n(710111),
    u = n(981631),
    c = n(474936);
function d(e, t) {
    return e.guildId === l.X8 ? 'default' : t ? 'custom-external' : 'custom';
}
function f(e, t, n, f) {
    var _;
    let p = r.Z.getChannel(s.Z.getVoiceChannelId()),
        h = null == p ? void 0 : p.getGuildId(),
        m = a.Z.getMediaSessionId(),
        g = a.Z.getRTCConnectionId(),
        E = null === (_ = i.ZP.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
        v = h !== n.guildId && n.guildId !== l.X8,
        y = d(n, v);
    o.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: c.QP.SOUNDBOARD_PLAY,
        feature_tier: v ? c.h1.PREMIUM_STANDARD : c.h1.FREE,
        guild_id: h,
        location_stack: e,
        rtc_connection_id: g,
        media_session_id: m,
        in_overlay: t,
        application_name: E,
        emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
        feature_selection: y,
        feature_selection_id: n.soundId,
        sound_type: f
    });
}
