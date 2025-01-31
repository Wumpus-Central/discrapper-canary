n.d(t, { Z: () => _ }), n(47120);
var i = n(433517),
    r = n(570140),
    a = n(317770),
    s = n(314897),
    o = n(944486),
    l = n(105372),
    u = n(88751),
    c = n(157925);
function d(e, t, n) {
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
            d(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    if (null == e.channelId || e.userId !== s.default.getId() || (this.terminate(), i.K.get(c.$z, !1))) return;
                    let t = o.Z.getVoiceChannelId();
                    null != t && e.channelId === t && u.ZP.isAudienceMember(e.userId, t) && (i.K.set(c.$z, !0), l.$(t));
                });
            });
    }
}
let _ = new f();
