"use strict";
n.d(t, { A: () => c });
var r = n(15285),
    i = n(734057),
    s = n(383501),
    a = n(309010),
    o = n(954571);
n(980504);
var l = n(652215),
    u = n(788868);
function c(e, t, n, c, d) {
    let _ = i.A.getChannel(a.A.getVoiceChannelId()),
        f = _?.getGuildId(),
        p = s.A.getMediaSessionId(),
        h = s.A.getRTCConnectionId(),
        E = r.Ay.getCurrentGameForAnalytics()?.name,
        m = f !== n.guildId && "0" !== n.guildId,
        g = "0" === n.guildId ? "default" : m ? "custom-external" : "custom";
    o.default.track(l.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: u.Ae.SOUNDBOARD_PLAY,
        feature_tier: m ? u.tz.PREMIUM_STANDARD : u.tz.FREE,
        guild_id: f,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: h,
        media_session_id: p,
        in_overlay: t,
        application_name: E,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: g,
        feature_selection_id: n.soundId,
        sound_type: c,
        sequence_number: null != d ? d + 1 : null,
    });
}
