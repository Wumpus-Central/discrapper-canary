t.d(l, {
    m: () => f,
    o: () => x
}),
    t(47120);
var n,
    i = t(259443),
    r = t(379649),
    s = t(314897),
    a = t(592125),
    o = t(866960),
    c = t(19780),
    u = t(979651),
    d = t(626135),
    m = t(981631);
function p(e, l, t) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[l] = t),
        e
    );
}
var f = (((n = {}).SELF_VIDEO = 'self_video'), (n.SELF_STREAM = 'self_stream'), (n.REMOTE_VIDEO = 'remote_video'), (n.REMOTE_STREAM = 'remote_stream'), (n.CHANGE_VIDEO_BACKGROUND = 'change_video_background'), (n.VIDEO_PLAYER = 'video_player'), (n.REPLAY_VIDEO_STREAM = 'replay_video_stream'), n);
let v = new Map();
class x {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.zO)());
    }
    trackSpinnerDuration(e, l, t) {
        if (null == this.spinnerVisibleStart) return;
        let n = (function (e) {
                var l;
                let t = (null !== (l = v.get(e)) && void 0 !== l ? l : 0) + 1;
                return v.set(e, t), t;
            })(t),
            i = (0, r.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), i < 0)) {
            this.logger.warn('spinner duration is negative: '.concat(i, ' ms\n        [').concat(e, ', count for stream: ').concat(n, ']'));
            return;
        }
        this.logger.info('spinner visible for '.concat(i, ' ms\n      [').concat(e, ', count for stream: ').concat(n, ']'));
        let p = c.Z.getGuildId(),
            f = u.Z.getUserVoiceChannelId(p, s.default.getId()),
            x = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return 'guild_voice';
                    if (e.isGuildStageVoice()) return 'is_stage_channel';
                    if (e.isDM()) return 'dm';
                    if (e.isGroupDM()) return 'group_dm';
                }
                return null;
            })(a.Z.getChannel(f));
        d.default.track(m.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: i,
            rtc_connection_id: c.Z.getRTCConnectionId(),
            media_session_id: c.Z.getMediaSessionId(),
            event_count_for_stream: n,
            guild_id: p,
            channel_id: f,
            channel_type: x,
            spinning_user_id: l,
            connection_type: o.Z.getType(),
            effective_connection_speed: o.Z.getEffectiveConnectionSpeed(),
            service_provider: o.Z.getServiceProvider()
        });
    }
    constructor(e) {
        p(this, 'logger', void 0), p(this, 'spinnerVisibleStart', null), (this.logger = new i.Yd(e));
    }
}
