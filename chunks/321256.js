n.d(t, { A: () => p }), n(896048);
var r = n(439372),
    i = n(965957),
    a = n(312671),
    s = n(458640),
    o = n(223567),
    l = n(552122),
    c = n(768612),
    u = n(235079);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends r.A {
    _initialize() {
        this.subscription = l.A.subscribe(this.handleExperimentUpdated);
    }
    _terminate() {
        var e, t;
        null == (e = (t = this).subscription) || e.call(t), (this.subscription = void 0);
    }
    updateSoundpack() {
        let e = a.A.getSoundpack(),
            t = a.A.getLastSoundpackExperimentId(),
            n = o.A.experiment.definition.id,
            r = l.A.isEligible();
        r || (null == t && e === u.i.CLASSIC)
            ? r && null != o.A.soundpack && n !== t && e !== o.A.soundpack && (0, i.p)(o.A.soundpack, n)
            : (0, i.p)(u.i.CLASSIC, null);
    }
    updateRingtone() {
        if (l.A.isEligible()) {
            let e = (0, s.A)(a.A.getSoundpack());
            null != e.call_ringing && (0, c.n)("call_ringing", e.call_ringing + ".mp3");
        } else (0, c.n)("call_ringing", "call_ringing.mp3");
    }
    constructor(...e) {
        super(...e),
            d(this, "actions", { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone }),
            d(this, "subscription", void 0),
            d(this, "handleExperimentUpdated", () => {
                this.updateSoundpack(), this.updateRingtone();
            });
    }
}
let p = new f();
