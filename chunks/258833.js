n.d(t, { Z: () => p }), n(47120);
var i = n(147913),
    r = n(474873),
    a = n(523746),
    s = n(292959),
    o = n(246946),
    l = n(979651),
    u = n(938475),
    c = n(557177);
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
let f = (0, c.uk)('call_calling', r.Z.getSoundpack());
class _ extends i.Z {
    handleSoundpackUpdate() {
        f.stop(), (f = (0, c.uk)('call_calling', r.Z.getSoundpack()));
    }
    handleRingUpdate() {
        let e = a.Z.getCalls().filter((e) => e.ringing.length > 0 && l.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
            t = l.Z.getCurrentClientVoiceChannelId(null);
        (null != t && u.ZP.countVoiceStatesForChannel(t) >= 2) || !(e.length > 0) || s.Z.isSoundDisabled('call_calling') || o.Z.disableSounds ? f.stop() : f.loop();
    }
    constructor(...e) {
        super(...e), d(this, 'stores', new Map().set(a.Z, this.handleRingUpdate).set(s.Z, this.handleRingUpdate).set(o.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(r.Z, this.handleSoundpackUpdate));
    }
}
let p = new _();
