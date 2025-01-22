var i = r(47120);
var a = r(147913),
    o = r(474873),
    s = r(523746),
    l = r(292959),
    u = r(246946),
    c = r(979651),
    d = r(938475),
    f = r(557177);
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
let h = (0, f.uk)('call_calling', o.Z.getSoundpack());
class _ extends a.Z {
    handleSoundpackUpdate() {
        h.stop(), (h = (0, f.uk)('call_calling', o.Z.getSoundpack()));
    }
    handleRingUpdate() {
        let e = s.Z.getCalls().filter((e) => e.ringing.length > 0 && c.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
            n = c.Z.getCurrentClientVoiceChannelId(null);
        (null != n && d.ZP.countVoiceStatesForChannel(n) >= 2) || !(e.length > 0) || l.Z.isSoundDisabled('call_calling') || u.Z.disableSounds ? h.stop() : h.loop();
    }
    constructor(...e) {
        super(...e), p(this, 'stores', new Map().set(s.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(c.Z, this.handleRingUpdate).set(o.Z, this.handleSoundpackUpdate));
    }
}
n.Z = new _();
