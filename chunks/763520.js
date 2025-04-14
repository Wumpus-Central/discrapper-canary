n.d(t, {
    m: () => f,
    o: () => m
}),
    n(388685);
var r,
    i = n(259443),
    o = n(379649),
    l = n(314897),
    s = n(592125),
    a = n(866960),
    c = n(19780),
    u = n(979651),
    d = n(626135),
    p = n(981631);
function h(e, t, n) {
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
var f = (((r = {}).SELF_VIDEO = 'self_video'), (r.SELF_STREAM = 'self_stream'), (r.REMOTE_VIDEO = 'remote_video'), (r.REMOTE_STREAM = 'remote_stream'), (r.CHANGE_VIDEO_BACKGROUND = 'change_video_background'), (r.REPLAY_VIDEO_STREAM = 'replay_video_stream'), r);
let _ = new Map();
class m {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, o.zO)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let r = (function (e) {
                var t;
                let n = (null != (t = _.get(e)) ? t : 0) + 1;
                return _.set(e, n), n;
            })(n),
            i = (0, o.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), i < 0)) return void this.logger.warn('spinner duration is negative: '.concat(i, ' ms\n        [').concat(e, ', count for stream: ').concat(r, ']'));
        this.logger.info('spinner visible for '.concat(i, ' ms\n      [').concat(e, ', count for stream: ').concat(r, ']'));
        let h = c.ZP.getGuildId(),
            f = u.Z.getUserVoiceChannelId(h, l.default.getId()),
            m = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return 'guild_voice';
                    if (e.isGuildStageVoice()) return 'is_stage_channel';
                    if (e.isDM()) return 'dm';
                    if (e.isGroupDM()) return 'group_dm';
                }
                return null;
            })(s.Z.getChannel(f));
        d.default.track(p.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: i,
            rtc_connection_id: c.ZP.getRTCConnectionId(),
            media_session_id: c.ZP.getMediaSessionId(),
            event_count_for_stream: r,
            guild_id: h,
            channel_id: f,
            channel_type: m,
            spinning_user_id: t,
            connection_type: a.Z.getType(),
            effective_connection_speed: a.Z.getEffectiveConnectionSpeed(),
            service_provider: a.Z.getServiceProvider()
        });
    }
    constructor(e) {
        h(this, 'logger', void 0), h(this, 'spinnerVisibleStart', null), (this.logger = new i.Yd(e));
    }
}
