"use strict";
n.d(t, { A: () => f });
var r = n(439372),
    i = n(217222),
    s = n(965957),
    a = n(312671),
    o = n(458640),
    l = n(223567),
    u = n(552122),
    c = n(768612),
    d = n(235079);
class _ extends r.A {
    stores = new Map().set(i.A, () => this.handleExperimentUpdated());
    actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone };
    handleExperimentUpdated = () => {
        this.updateSoundpack(), this.updateRingtone();
    };
    updateSoundpack() {
        let e = a.A.getSoundpack(),
            t = a.A.getLastSoundpackExperimentId(),
            n = l.A.experiment?.definition.name,
            r = u.A.isEligible();
        r || (null == t && e === d.i.CLASSIC)
            ? r && null != l.A.soundpack && n !== t && e !== l.A.soundpack && (0, s.p)(l.A.soundpack, n)
            : (0, s.p)(d.i.CLASSIC, null);
    }
    updateRingtone() {
        if (u.A.isEligible()) {
            let e = (0, o.A)(a.A.getSoundpack());
            null != e.call_ringing && (0, c.n)("call_ringing", e.call_ringing + ".mp3");
        } else (0, c.n)("call_ringing", "call_ringing.mp3");
    }
}
let f = new _();
