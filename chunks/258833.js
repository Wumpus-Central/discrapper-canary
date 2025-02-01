n.d(t, { Z: () => p }), n(47120);
var i = n(147913),
    r = n(460181),
    a = n(474873),
    s = n(523746),
    o = n(292959),
    l = n(246946),
    u = n(979651),
    c = n(938475);
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
let f = (0, r.uk)('call_calling', a.Z.getSoundpack());
class _ extends i.Z {
    handleSoundpackUpdate() {
        f.stop(), (f = (0, r.uk)('call_calling', a.Z.getSoundpack()));
    }
    handleRingUpdate() {
        let e = s.Z.getCalls().filter((e) => e.ringing.length > 0 && u.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
            t = u.Z.getCurrentClientVoiceChannelId(null);
        (null != t && c.ZP.countVoiceStatesForChannel(t) >= 2) || !(e.length > 0) || o.Z.isSoundDisabled('call_calling') || l.Z.disableSounds ? f.stop() : f.loop();
    }
    constructor(...e) {
        super(...e), d(this, 'stores', new Map().set(s.Z, this.handleRingUpdate).set(o.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(a.Z, this.handleSoundpackUpdate));
    }
}
let p = new _();
