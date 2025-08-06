n.d(t, {
    m: () => _,
    o: () => g,
}),
    n(388685);
var r = n(379649),
    i = n(710845),
    o = n(314897),
    a = n(592125),
    s = n(866960),
    l = n(19780),
    c = n(979651),
    u = n(626135),
    d = n(981631);
function f(e, t, n) {
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
var _ = (function (e) {
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
let p = new Map();
function h(e) {
    var t;
    let n = (null != (t = p.get(e)) ? t : 0) + 1;
    return p.set(e, n), n;
}
function m(e) {
    if (null != e) {
        if (e.isGuildVoice()) return "guild_voice";
        if (e.isGuildStageVoice()) return "is_stage_channel";
        if (e.isDM()) return "dm";
        if (e.isGroupDM()) return "group_dm";
    }
    return null;
}
class g {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.zO)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let i = h(n),
            f = (0, r.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), f < 0))
            return void this.logger.warn(
                "spinner duration is negative: "
                    .concat(f, " ms\n        [")
                    .concat(e, ", count for stream: ")
                    .concat(i, "]"),
            );
        this.logger.info(
            "spinner visible for ".concat(f, " ms\n      [").concat(e, ", count for stream: ").concat(i, "]"),
        );
        let _ = l.Z.getGuildId(),
            p = c.Z.getUserVoiceChannelId(_, o.default.getId()),
            g = m(a.Z.getChannel(p));
        u.default.track(d.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: f,
            rtc_connection_id: l.Z.getRTCConnectionId(),
            media_session_id: l.Z.getMediaSessionId(),
            event_count_for_stream: i,
            guild_id: _,
            channel_id: p,
            channel_type: g,
            spinning_user_id: t,
            connection_type: s.Z.getType(),
            effective_connection_speed: s.Z.getEffectiveConnectionSpeed(),
            service_provider: s.Z.getServiceProvider(),
        });
    }
    constructor(e) {
        f(this, "logger", void 0), f(this, "spinnerVisibleStart", null), (this.logger = new i.Z(e));
    }
}
