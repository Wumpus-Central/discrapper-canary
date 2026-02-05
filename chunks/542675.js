"use strict";
n.d(t, { A: () => d });
var r = n(15285),
    i = n(734057),
    a = n(383501),
    s = n(309010),
    o = n(954571);
n(980504);
var l = n(652215),
    u = n(788868);
function c(e, t) {
    return "0" === e.guildId ? "default" : t ? "custom-external" : "custom";
}
function d(e, t, n, d, _) {
    let f = i.A.getChannel(s.A.getVoiceChannelId()),
        p = f?.getGuildId(),
        h = a.A.getMediaSessionId(),
        m = a.A.getRTCConnectionId(),
        g = r.Ay.getCurrentGameForAnalytics()?.name,
        E = p !== n.guildId && "0" !== n.guildId,
        A = c(n, E);
    o.default.track(l.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: u.Ae.SOUNDBOARD_PLAY,
        feature_tier: E ? u.tz.PREMIUM_STANDARD : u.tz.FREE,
        guild_id: p,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: m,
        media_session_id: h,
        in_overlay: t,
        application_name: g,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: A,
        feature_selection_id: n.soundId,
        sound_type: d,
        sequence_number: null != _ ? _ + 1 : null,
    });
}
