n.d(t, { A: () => O }), n(321073);
var i = n(228366),
    l = n(272355),
    r = n(400492),
    s = n(312671),
    a = n(280450),
    o = n(763827),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    A = n(559908),
    h = n(652215);
let E = (0, r.aN)("poggermode_applause", s.A.getSoundpack()),
    C = !1,
    g = !1,
    _ = [],
    I = null;
function T() {
    E.stop(), (C = !1);
}
function N() {
    let e = u.A.isEnabled(),
        t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != d.A.getChannelId();
}
let p = () => {
    if (0 === _.length || !N() || g) return;
    g = !0;
    let [e, t] = _[_.length - 1];
    (0, r.Ak)(e, t), (I = setTimeout(S, 1e3));
};
function S() {
    _.pop(), (g = !1), p();
}
let L = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = o.A.isConnected();
    _.push([e, t * (n ? 0.1 : 1)]), p();
};
class m extends l.A {
    _initialize() {
        A.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        A.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(I);
    }
    setVolume(e) {
        let { state: t } = e;
        t === h.S7L.RTC_CONNECTED ? (E.volume = 0.1) : (E.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && T();
    }
    stopAudio() {
        T();
    }
    startAudio() {
        if (!N()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = a.default.getId(),
            n = c.A.isTyping(e, t),
            i = A.Ay.getUserCombo(t, e),
            l = i?.multiplier ?? 1;
        n && l >= 7 ? C || (E.loop(), (C = !0)) : T();
    }
    playAchievementUnlockSound() {
        N() && L("poggermode_achievement_unlock");
    }
}
let O = new m();
