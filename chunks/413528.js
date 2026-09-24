n.d(t, { A: () => E });
var i = n(439372),
    r = n(400492),
    a = n(312671),
    s = n(470710),
    l = n(803224),
    o = n(351906),
    d = n(977997),
    c = n(607567);
let u = (0, r.aN)("call_calling", a.A.getSoundpack());
class _ extends i.A {
    _initialize() {
        this.stores = new Map()
            .set(s.A, this.handleRingUpdate)
            .set(l.A, this.handleRingUpdate)
            .set(o.A, this.handleRingUpdate)
            .set(d.A, this.handleRingUpdate)
            .set(a.A, this.handleSoundpackUpdate);
    }
    _handleRing = (e) => {
        let t = d.A.getCurrentClientVoiceChannelId(null),
            n = null != t && c.Ay.countVoiceStatesForChannel(t) >= 2;
        null == t || n || !e || l.A.isSoundDisabled("call_calling") || o.A.disableSounds ? u.stop() : u.loop();
    };
    handleSoundpackUpdate = () => {
        (u.stop(), (u = (0, r.aN)("call_calling", a.A.getSoundpack())));
    };
    handleRingUpdate = () => {
        let e = s.A.getCalls().some(
            (e) => e.ringing.length > 0 && d.A.getCurrentClientVoiceChannelId(null) === e.channelId,
        );
        this._handleRing(e);
    };
}
let E = new _();
