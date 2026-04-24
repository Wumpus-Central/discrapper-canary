n.d(t, { M: () => p, u: () => f });
var i,
    l = n(499979),
    a = n(626584),
    r = n(495544),
    s = n(734057),
    o = n(544180),
    d = n(763827),
    c = n(977997),
    u = n(954571),
    _ = n(652215),
    f =
        (((i = {}).SELF_VIDEO = "self_video"),
        (i.SELF_STREAM = "self_stream"),
        (i.REMOTE_VIDEO = "remote_video"),
        (i.REMOTE_STREAM = "remote_stream"),
        (i.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
        (i.REPLAY_VIDEO_STREAM = "replay_video_stream"),
        i);
let m = new Map();
class p {
    logger;
    spinnerVisibleStart = null;
    constructor(e) {
        this.logger = new a.A(e);
    }
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, l.tB)());
    }
    trackSpinnerDuration(e, t, n) {
        let i;
        if (null == this.spinnerVisibleStart) return;
        let a = ((i = (m.get(n) ?? 0) + 1), m.set(n, i), i),
            f = (0, l.tB)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), f < 0))
            return void this.logger.warn(`spinner duration is negative: ${f} ms
        [${e}, count for stream: ${a}]`);
        this.logger.info(`spinner visible for ${f} ms
      [${e}, count for stream: ${a}]`);
        let p = d.A.getGuildId(),
            g = c.A.getUserVoiceChannelId(p, r.default.getId()),
            h = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return "guild_voice";
                    if (e.isGuildStageVoice()) return "is_stage_channel";
                    if (e.isDM()) return "dm";
                    if (e.isGroupDM()) return "group_dm";
                }
                return null;
            })(s.A.getChannel(g));
        u.default.track(_.HAw.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: f,
            rtc_connection_id: d.A.getRTCConnectionId(),
            media_session_id: d.A.getMediaSessionId(),
            event_count_for_stream: a,
            guild_id: p,
            channel_id: g,
            channel_type: h,
            spinning_user_id: t,
            connection_type: o.A.getType(),
            effective_connection_speed: o.A.getEffectiveConnectionSpeed(),
            service_provider: o.A.getServiceProvider(),
        });
    }
}
