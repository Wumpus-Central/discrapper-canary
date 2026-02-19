"use strict";
n.d(t, { M: () => m, u: () => _ });
var r = n(499979),
    i = n(626584),
    s = n(961350),
    a = n(734057),
    o = n(544180),
    l = n(383501),
    u = n(977997),
    c = n(954571),
    d = n(652215),
    _ = (function (e) {
        return (
            (e.SELF_VIDEO = "self_video"),
            (e.SELF_STREAM = "self_stream"),
            (e.REMOTE_VIDEO = "remote_video"),
            (e.REMOTE_STREAM = "remote_stream"),
            (e.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
            (e.REPLAY_VIDEO_STREAM = "replay_video_stream"),
            e
        );
    })({});
let f = new Map();
function p(e) {
    let t = (f.get(e) ?? 0) + 1;
    return f.set(e, t), t;
}
function h(e) {
    if (null != e) {
        if (e.isGuildVoice()) return "guild_voice";
        if (e.isGuildStageVoice()) return "is_stage_channel";
        if (e.isDM()) return "dm";
        if (e.isGroupDM()) return "group_dm";
    }
    return null;
}
class m {
    logger;
    spinnerVisibleStart = null;
    constructor(e) {
        this.logger = new i.A(e);
    }
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.tB)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let i = p(n),
            _ = (0, r.tB)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), _ < 0))
            return void this.logger.warn(`spinner duration is negative: ${_} ms
        [${e}, count for stream: ${i}]`);
        this.logger.info(`spinner visible for ${_} ms
      [${e}, count for stream: ${i}]`);
        let f = l.A.getGuildId(),
            m = u.A.getUserVoiceChannelId(f, s.default.getId()),
            E = h(a.A.getChannel(m));
        c.default.track(d.HAw.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: _,
            rtc_connection_id: l.A.getRTCConnectionId(),
            media_session_id: l.A.getMediaSessionId(),
            event_count_for_stream: i,
            guild_id: f,
            channel_id: m,
            channel_type: E,
            spinning_user_id: t,
            connection_type: o.A.getType(),
            effective_connection_speed: o.A.getEffectiveConnectionSpeed(),
            service_provider: o.A.getServiceProvider(),
        });
    }
}
