n.d(t, { Z: () => f });
var r = n(594190),
    i = n(592125),
    a = n(19780),
    o = n(944486),
    s = n(626135),
    l = n(710111),
    c = n(981631),
    u = n(474936);
function d(e, t) {
    return e.guildId === l.X8 ? "default" : t ? "custom-external" : "custom";
}
function f(e, t, n, f, _) {
    var p;
    let h = i.Z.getChannel(o.Z.getVoiceChannelId()),
        m = null == h ? void 0 : h.getGuildId(),
        g = a.Z.getMediaSessionId(),
        E = a.Z.getRTCConnectionId(),
        b = null == (p = r.ZP.getCurrentGameForAnalytics()) ? void 0 : p.name,
        y = m !== n.guildId && n.guildId !== l.X8,
        O = d(n, y);
    s.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: u.QP.SOUNDBOARD_PLAY,
        feature_tier: y ? u.h1.PREMIUM_STANDARD : u.h1.FREE,
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
        sequence_number: null != _ ? _ + 1 : null,
    });
}
