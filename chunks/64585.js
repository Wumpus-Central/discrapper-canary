n.d(t, { A: () => R }), n(321073);
var i = n(228366),
    a = n(272355),
    r = n(400492),
    s = n(312671),
    l = n(495544),
    o = n(763827),
    d = n(309010),
    c = n(741961),
    _ = n(3137),
    E = n(559908),
    u = n(652215);
let A = (0, r.aN)("poggermode_applause", s.A.getSoundpack()),
    I = !1,
    T = !1,
    h = [],
    S = null,
    N = () => {
        A.stop(), (I = !1);
    },
    f = () => {
        let e = _.A.isEnabled(),
            t = _.A.comboSoundsEnabled;
        return !!e && !!t && null != d.A.getChannelId();
    },
    p = () => {
        if (0 === h.length || !f() || T) return;
        T = !0;
        let [e, t] = h[h.length - 1];
        (0, r.Ak)(e, t), (S = setTimeout(m, 1e3));
    },
    m = () => {
        h.pop(), (T = !1), p();
    },
    O = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        h.push([e, t * (n ? 0.1 : 1)]), p();
    };
class C extends a.A {
    _initialize() {
        E.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        E.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(S);
    }
    setVolume(e) {
        let { state: t } = e;
        t === u.S7L.RTC_CONNECTED ? (A.volume = 0.1) : (A.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        l.default.getId() === t && N();
    }
    stopAudio() {
        N();
    }
    startAudio() {
        if (!f()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = l.default.getId(),
            n = c.A.isTyping(e, t),
            i = E.Ay.getUserCombo(t, e),
            a = i?.multiplier ?? 1;
        n && a >= 7 ? I || (A.loop(), (I = !0)) : N();
    }
    playAchievementUnlockSound() {
        f() && O("poggermode_achievement_unlock");
    }
}
let R = new C();
