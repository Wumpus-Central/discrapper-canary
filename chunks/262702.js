n(47120);
var i = n(570140),
    r = n(846027),
    l = n(872810),
    a = n(317770),
    s = n(569545),
    o = n(199902),
    c = n(314897),
    d = n(592125),
    u = n(131951),
    h = n(590415);
function m(e, t, n) {
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
class p extends a.Z {
    _initialize() {
        i.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            m(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e,
                    n = c.default.getId();
                t.forEach((e) => {
                    var t;
                    if (e.userId === n && !!(null === (t = d.Z.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice())) (0, h.gf)(e) !== h.xO.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo());
                });
            }),
            m(this, 'handleStopStream', (e) => {
                let t = o.Z.getActiveStreamForUser(e.userId, e.guildId);
                if (null != t) (0, l.g)((0, s.V9)(t), !1);
            }),
            m(this, 'handleStopUserVideo', () => {
                u.Z.isVideoEnabled() && r.Z.setVideoEnabled(!1);
            });
    }
}
t.Z = new p();
