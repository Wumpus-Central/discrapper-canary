n.d(t, { Z: () => _ }), n(388685);
var r = n(433517),
    i = n(570140),
    a = n(317770),
    o = n(314897),
    s = n(944486),
    l = n(105372),
    c = n(88751),
    u = n(157925);
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
        i.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    if (null == e.channelId || e.userId !== o.default.getId() || (this.terminate(), r.K.get(u.$z, !1))) return;
                    let t = s.Z.getVoiceChannelId();
                    null != t && e.channelId === t && c.ZP.isAudienceMember(e.userId, t) && (r.K.set(u.$z, !0), l.$(t));
                });
            });
    }
}
let _ = new f();
