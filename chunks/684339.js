n.d(t, { M: () => g, u: () => m });
var i,
    l = n(499979),
    s = n(626584),
    a = n(961350),
    r = n(734057),
    o = n(544180),
    c = n(383501),
    d = n(977997),
    u = n(954571),
    h = n(652215),
    m =
        (((i = {}).SELF_VIDEO = "self_video"),
        (i.SELF_STREAM = "self_stream"),
        (i.REMOTE_VIDEO = "remote_video"),
        (i.REMOTE_STREAM = "remote_stream"),
        (i.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
        (i.REPLAY_VIDEO_STREAM = "replay_video_stream"),
        i);
let A = new Map();
class g {
    logger;
    spinnerVisibleStart = null;
    constructor(e) {
        this.logger = new s.A(e);
    }
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, l.tB)());
    }
    trackSpinnerDuration(e, t, n) {
        let i;
        if (null == this.spinnerVisibleStart) return;
        let s = ((i = (A.get(n) ?? 0) + 1), A.set(n, i), i),
            m = (0, l.tB)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), m < 0))
            return void this.logger.warn(`spinner duration is negative: ${m} ms
        [${e}, count for stream: ${s}]`);
        this.logger.info(`spinner visible for ${m} ms
      [${e}, count for stream: ${s}]`);
        let g = c.A.getGuildId(),
            p = d.A.getUserVoiceChannelId(g, a.default.getId()),
            f = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return "guild_voice";
                    if (e.isGuildStageVoice()) return "is_stage_channel";
                    if (e.isDM()) return "dm";
                    if (e.isGroupDM()) return "group_dm";
                }
                return null;
            })(r.A.getChannel(p));
        u.default.track(h.HAw.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: m,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
            event_count_for_stream: s,
            guild_id: g,
            channel_id: p,
            channel_type: f,
            spinning_user_id: t,
            connection_type: o.A.getType(),
            effective_connection_speed: o.A.getEffectiveConnectionSpeed(),
            service_provider: o.A.getServiceProvider(),
        });
    }
}
