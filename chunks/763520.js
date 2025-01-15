n.d(t, {
    m: function () {
        return i;
    },
    o: function () {
        return g;
    }
}),
    n(47120);
var i,
    l,
    a = n(259443),
    r = n(379649),
    s = n(314897),
    o = n(592125),
    c = n(866960),
    u = n(19780),
    d = n(979651),
    m = n(626135),
    f = n(981631);
function p(e, t, n) {
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
((l = i || (i = {})).SELF_VIDEO = 'self_video'), (l.SELF_STREAM = 'self_stream'), (l.REMOTE_VIDEO = 'remote_video'), (l.REMOTE_STREAM = 'remote_stream'), (l.CHANGE_VIDEO_BACKGROUND = 'change_video_background'), (l.VIDEO_PLAYER = 'video_player'), (l.REPLAY_VIDEO_STREAM = 'replay_video_stream');
let h = new Map();
class g {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.zO)());
    }
    trackSpinnerDuration(e, t, n) {
        if (null == this.spinnerVisibleStart) return;
        let i = (function (e) {
                var t;
                let n = (null !== (t = h.get(e)) && void 0 !== t ? t : 0) + 1;
                return h.set(e, n), n;
            })(n),
            l = (0, r.zO)() - this.spinnerVisibleStart;
        if (((this.spinnerVisibleStart = null), l < 0)) {
            this.logger.warn('spinner duration is negative: '.concat(l, ' ms\n        [').concat(e, ', count for stream: ').concat(i, ']'));
            return;
        }
        this.logger.info('spinner visible for '.concat(l, ' ms\n      [').concat(e, ', count for stream: ').concat(i, ']'));
        let a = u.Z.getGuildId(),
            p = d.Z.getUserVoiceChannelId(a, s.default.getId()),
            g = (function (e) {
                if (null != e) {
                    if (e.isGuildVoice()) return 'guild_voice';
                    if (e.isGuildStageVoice()) return 'is_stage_channel';
                    if (e.isDM()) return 'dm';
                    if (e.isGroupDM()) return 'group_dm';
                }
                return null;
            })(o.Z.getChannel(p));
        m.default.track(f.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: l,
            rtc_connection_id: u.Z.getRTCConnectionId(),
            media_session_id: u.Z.getMediaSessionId(),
            event_count_for_stream: i,
            guild_id: a,
            channel_id: p,
            channel_type: g,
            spinning_user_id: t,
            connection_type: c.Z.getType(),
            effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
            service_provider: c.Z.getServiceProvider()
        });
    }
    constructor(e) {
        p(this, 'logger', void 0), p(this, 'spinnerVisibleStart', null), (this.logger = new a.Yd(e));
    }
}
