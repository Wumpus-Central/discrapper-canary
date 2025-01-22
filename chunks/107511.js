var i = r(47120);
var a = r(433517),
    o = r(570140),
    s = r(317770),
    l = r(314897),
    u = r(944486),
    c = r(105372),
    d = r(88751),
    f = r(157925);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends s.Z {
    _initialize() {
        o.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        o.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: n } = e;
                n.forEach((e) => {
                    if (null == e.channelId || e.userId !== l.default.getId()) return;
                    if ((this.terminate(), a.K.get(f.$z, !1))) return;
                    let n = u.Z.getVoiceChannelId();
                    if (null != n && e.channelId === n) d.ZP.isAudienceMember(e.userId, n) && (a.K.set(f.$z, !0), c.$(n));
                });
            });
    }
}
n.Z = new h();
