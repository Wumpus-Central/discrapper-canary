n.d(t, { A: () => f });
var r = n(15285),
    i = n(734057),
    a = n(383501),
    s = n(309010),
    o = n(954571),
    l = n(980504),
    c = n(652215),
    u = n(788868);
function d(e, t) {
    return e.guildId === l.mV ? "default" : t ? "custom-external" : "custom";
}
function f(e, t, n, f, p) {
    var _;
    let h = i.A.getChannel(s.A.getVoiceChannelId()),
        m = null == h ? void 0 : h.getGuildId(),
        g = a.A.getMediaSessionId(),
        E = a.A.getRTCConnectionId(),
        b = null == (_ = r.Ay.getCurrentGameForAnalytics()) ? void 0 : _.name,
        y = m !== n.guildId && n.guildId !== l.mV,
        O = d(n, y);
    o.default.track(c.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: u.Ae.SOUNDBOARD_PLAY,
        feature_tier: y ? u.tz.PREMIUM_STANDARD : u.tz.FREE,
        guild_id: m,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: E,
        media_session_id: g,
        in_overlay: t,
        application_name: b,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: O,
        feature_selection_id: n.soundId,
        sound_type: f,
        sequence_number: null != p ? p + 1 : null,
    });
}
