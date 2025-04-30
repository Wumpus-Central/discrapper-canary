n.d(t, { Z: () => f });
var r = n(594190),
    i = n(592125),
    o = n(19780),
    a = n(944486),
    s = n(626135),
    l = n(710111),
    c = n(981631),
    u = n(474936);
function d(e, t) {
    return e.guildId === l.X8 ? 'default' : t ? 'custom-external' : 'custom';
}
function f(e, t, n, f) {
    var _;
    let p = i.Z.getChannel(a.Z.getVoiceChannelId()),
        h = null == p ? void 0 : p.getGuildId(),
        m = o.Z.getMediaSessionId(),
        g = o.Z.getRTCConnectionId(),
        E = null == (_ = r.ZP.getCurrentGameForAnalytics()) ? void 0 : _.name,
        b = h !== n.guildId && n.guildId !== l.X8,
        y = d(n, b);
    s.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: u.QP.SOUNDBOARD_PLAY,
        feature_tier: b ? u.h1.PREMIUM_STANDARD : u.h1.FREE,
        guild_id: h,
        location_stack: e,
        rtc_connection_id: g,
        media_session_id: m,
        in_overlay: t,
        application_name: E,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: y,
        feature_selection_id: n.soundId,
        sound_type: f
    });
}
