n.d(t, {
    m: () => m,
    o: () => g,
}),
    n(388685);
var r,
    i = n(379649),
    l = n(710845),
    a = n(314897),
    o = n(592125),
    c = n(866960),
    s = n(19780),
    u = n(979651),
    d = n(626135),
    f = n(981631);
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
var m =
    (((r = {}).SELF_VIDEO = "self_video"),
    (r.SELF_STREAM = "self_stream"),
    (r.REMOTE_VIDEO = "remote_video"),
    (r.REMOTE_STREAM = "remote_stream"),
    (r.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
    (r.REPLAY_VIDEO_STREAM = "replay_video_stream"),
    r);
let _ = new Map();
class g {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, i.zO)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let r = (function (e) {
                var t;
                let n = (null != (t = _.get(e)) ? t : 0) + 1;
                return _.set(e, n), n;
            })(n),
            l = (0, i.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), l < 0))
            return void this.logger.warn(
                "spinner duration is negative: "
                    .concat(l, " ms\n        [")
                    .concat(e, ", count for stream: ")
                    .concat(r, "]"),
            );
        this.logger.info(
            "spinner visible for ".concat(l, " ms\n      [").concat(e, ", count for stream: ").concat(r, "]"),
        );
        let p = s.Z.getGuildId(),
            m = u.Z.getUserVoiceChannelId(p, a.default.getId()),
            g = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return "guild_voice";
                    if (e.isGuildStageVoice()) return "is_stage_channel";
                    if (e.isDM()) return "dm";
                    if (e.isGroupDM()) return "group_dm";
                }
                return null;
            })(o.Z.getChannel(m));
        d.default.track(f.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: l,
            rtc_connection_id: s.Z.getRTCConnectionId(),
            media_session_id: s.Z.getMediaSessionId(),
            event_count_for_stream: r,
            guild_id: p,
            channel_id: m,
            channel_type: g,
            spinning_user_id: t,
            connection_type: c.Z.getType(),
            effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
            service_provider: c.Z.getServiceProvider(),
        });
    }
    constructor(e) {
        p(this, "logger", void 0), p(this, "spinnerVisibleStart", null), (this.logger = new l.Z(e));
    }
}
