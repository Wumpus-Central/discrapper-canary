n.d(t, { A: () => O }), n(321073);
var i = n(228366),
    r = n(272355),
    a = n(400492),
    l = n(312671),
    s = n(495544),
    o = n(763827),
    d = n(309010),
    u = n(741961),
    c = n(3137),
    _ = n(559908),
    A = n(652215);
let h = (0, a.aN)("poggermode_applause", l.A.getSoundpack()),
    E = !1,
    p = !1,
    m = [],
    I = null,
    g = () => {
        h.stop(), (E = !1);
    },
    C = () => {
        let e = c.A.isEnabled(),
            t = c.A.comboSoundsEnabled;
        return !!e && !!t && null != d.A.getChannelId();
    },
    T = () => {
        if (0 === m.length || !C() || p) return;
        p = !0;
        let [e, t] = m[m.length - 1];
        (0, a.Ak)(e, t), (I = setTimeout(f, 1e3));
    },
    f = () => {
        m.pop(), (p = !1), T();
    },
    N = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        m.push([e, t * (n ? 0.1 : 1)]), T();
    };
class S extends r.A {
    _initialize() {
        _.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        _.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(I);
    }
    setVolume(e) {
        let { state: t } = e;
        t === A.S7L.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && g();
    }
    stopAudio() {
        g();
    }
    startAudio() {
        if (!C()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = s.default.getId(),
            n = u.A.isTyping(e, t),
            i = _.Ay.getUserCombo(t, e),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? E || (h.loop(), (E = !0)) : g();
    }
    playAchievementUnlockSound() {
        C() && N("poggermode_achievement_unlock");
    }
}
let O = new S();
