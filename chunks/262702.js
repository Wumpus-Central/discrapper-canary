n.d(t, { Z: () => g }), n(47120);
var r = n(570140),
    i = n(846027),
    l = n(872810),
    a = n(317770),
    o = n(569545),
    s = n(199902),
    c = n(314897),
    u = n(592125),
    d = n(131951),
    p = n(590415);
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
class f extends a.Z {
    _initialize() {
        r.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        r.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e,
                    n = c.default.getId();
                t.forEach((e) => {
                    var t;
                    e.userId === n && (null == (t = u.Z.getChannel(e.channelId)) ? void 0 : t.isGuildStageVoice()) && (0, p.gf)(e) !== p.xO.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo());
                });
            }),
            h(this, 'handleStopStream', (e) => {
                let t = s.Z.getActiveStreamForUser(e.userId, e.guildId);
                null != t && (0, l.g)((0, o.V9)(t), !1);
            }),
            h(this, 'handleStopUserVideo', () => {
                d.Z.isVideoEnabled() && i.Z.setVideoEnabled(!1);
            });
    }
}
let g = new f();
