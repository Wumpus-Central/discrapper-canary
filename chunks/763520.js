n.d(t, {
    m: () => h,
    o: () => I
}),
    n(47120);
var i,
    l = n(259443),
    r = n(379649),
    s = n(314897),
    a = n(592125),
    o = n(866960),
    c = n(19780),
    d = n(979651),
    u = n(626135),
    _ = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var h = (((i = {}).SELF_VIDEO = 'self_video'), (i.SELF_STREAM = 'self_stream'), (i.REMOTE_VIDEO = 'remote_video'), (i.REMOTE_STREAM = 'remote_stream'), (i.CHANGE_VIDEO_BACKGROUND = 'change_video_background'), (i.VIDEO_PLAYER = 'video_player'), (i.REPLAY_VIDEO_STREAM = 'replay_video_stream'), i);
let p = new Map();
class I {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.zO)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let i = (function (e) {
                var t;
                let n = (null !== (t = p.get(e)) && void 0 !== t ? t : 0) + 1;
                return p.set(e, n), n;
            })(n),
            l = (0, r.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), l < 0)) {
            this.logger.warn('spinner duration is negative: '.concat(l, ' ms\n        [').concat(e, ', count for stream: ').concat(i, ']'));
            return;
        }
        this.logger.info('spinner visible for '.concat(l, ' ms\n      [').concat(e, ', count for stream: ').concat(i, ']'));
        let E = c.Z.getGuildId(),
            h = d.Z.getUserVoiceChannelId(E, s.default.getId()),
            I = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return 'guild_voice';
                    if (e.isGuildStageVoice()) return 'is_stage_channel';
                    if (e.isDM()) return 'dm';
                    if (e.isGroupDM()) return 'group_dm';
                }
                return null;
            })(a.Z.getChannel(h));
        u.default.track(_.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: l,
            rtc_connection_id: c.Z.getRTCConnectionId(),
            media_session_id: c.Z.getMediaSessionId(),
            event_count_for_stream: i,
            guild_id: E,
            channel_id: h,
            channel_type: I,
            spinning_user_id: t,
            connection_type: o.Z.getType(),
            effective_connection_speed: o.Z.getEffectiveConnectionSpeed(),
            service_provider: o.Z.getServiceProvider()
        });
    }
    constructor(e) {
        E(this, 'logger', void 0), E(this, 'spinnerVisibleStart', null), (this.logger = new l.Yd(e));
    }
}
