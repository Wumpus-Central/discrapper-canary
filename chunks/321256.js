"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(965957),
    a = n(312671),
    s = n(458640),
    o = n(223567),
    l = n(552122),
    u = n(768612),
    c = n(235079);
class d extends r.A {
    actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone };
    subscription;
    _initialize() {
        this.subscription = l.A.subscribe(this.handleExperimentUpdated);
    }
    _terminate() {
        this.subscription?.(), (this.subscription = void 0);
    }
    handleExperimentUpdated = () => {
        this.updateSoundpack(), this.updateRingtone();
    };
    updateSoundpack() {
        let e = a.A.getSoundpack(),
            t = a.A.getLastSoundpackExperimentId(),
            n = o.A.experiment.definition.id,
            r = l.A.isEligible();
        r || (null == t && e === c.i.CLASSIC)
            ? r && null != o.A.soundpack && n !== t && e !== o.A.soundpack && (0, i.p)(o.A.soundpack, n)
            : (0, i.p)(c.i.CLASSIC, null);
    }
    updateRingtone() {
        if (l.A.isEligible()) {
            let e = (0, s.A)(a.A.getSoundpack());
            null != e.call_ringing && (0, u.n)("call_ringing", e.call_ringing + ".mp3");
        } else (0, u.n)("call_ringing", "call_ringing.mp3");
    }
}
let _ = new d();
