n.d(t, {
    M: () => m,
    u: () => b,
}),
    n(896048);
var l,
    r = n(499979),
    i = n(626584),
    a = n(961350),
    s = n(734057),
    o = n(544180),
    c = n(383501),
    u = n(977997),
    d = n(954571),
    f = n(652215);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var b =
    (((l = {}).SELF_VIDEO = "self_video"),
    (l.SELF_STREAM = "self_stream"),
    (l.REMOTE_VIDEO = "remote_video"),
    (l.REMOTE_STREAM = "remote_stream"),
    (l.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
    (l.REPLAY_VIDEO_STREAM = "replay_video_stream"),
    l);
let g = new Map();
class m {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.tB)());
    }
    trackSpinnerDuration(e, t, n) {
        var l;
        let i;
        if (null == this.spinnerVisibleStart) return;
        let p = ((i = (null != (l = g.get(n)) ? l : 0) + 1), g.set(n, i), i),
            b = (0, r.tB)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), b < 0))
            return void this.logger.warn(
                "spinner duration is negative: "
                    .concat(b, " ms\n        [")
                    .concat(e, ", count for stream: ")
                    .concat(p, "]"),
            );
        this.logger.info(
            "spinner visible for ".concat(b, " ms\n      [").concat(e, ", count for stream: ").concat(p, "]"),
        );
        let m = c.A.getGuildId(),
            h = u.A.getUserVoiceChannelId(m, a.default.getId()),
            A = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return "guild_voice";
                    if (e.isGuildStageVoice()) return "is_stage_channel";
                    if (e.isDM()) return "dm";
                    if (e.isGroupDM()) return "group_dm";
                }
                return null;
            })(s.A.getChannel(h));
        d.default.track(f.HAw.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: b,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
            event_count_for_stream: p,
            guild_id: m,
            channel_id: h,
            channel_type: A,
            spinning_user_id: t,
            connection_type: o.A.getType(),
            effective_connection_speed: o.A.getEffectiveConnectionSpeed(),
            service_provider: o.A.getServiceProvider(),
        });
    }
    constructor(e) {
        p(this, "logger", void 0), p(this, "spinnerVisibleStart", null), (this.logger = new i.A(e));
    }
}
