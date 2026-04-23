n.d(t, { A: () => O }), n(321073);
var i = n(73153),
    r = n(272355),
    a = n(400492),
    l = n(312671),
    s = n(961350),
    o = n(383501),
    d = n(309010),
    u = n(741961),
    c = n(3137),
    A = n(559908),
    h = n(652215);
let _ = (0, a.aN)("poggermode_applause", l.A.getSoundpack()),
    E = !1,
    p = !1,
    m = [],
    g = null,
    I = () => {
        _.stop(), (E = !1);
    },
    C = () => {
        let e = c.A.isEnabled(),
            t = c.A.comboSoundsEnabled;
        return !!e && !!t && null != d.A.getChannelId();
    },
    f = () => {
        if (0 === m.length || !C() || p) return;
        p = !0;
        let [e, t] = m[m.length - 1];
        (0, a.Ak)(e, t), (g = setTimeout(T, 1e3));
    },
    T = () => {
        m.pop(), (p = !1), f();
    },
    S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        m.push([e, t * (n ? 0.1 : 1)]), f();
    };
class N extends r.A {
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
            clearTimeout(g);
    }
    setVolume(e) {
        let { state: t } = e;
        t === h.S7L.RTC_CONNECTED ? (_.volume = 0.1) : (_.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && I();
    }
    stopAudio() {
        I();
    }
    startAudio() {
        if (!C()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = s.default.getId(),
            n = u.A.isTyping(e, t),
            i = A.Ay.getUserCombo(t, e),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? E || (_.loop(), (E = !0)) : I();
    }
    playAchievementUnlockSound() {
        C() && S("poggermode_achievement_unlock");
    }
}
let O = new N();
