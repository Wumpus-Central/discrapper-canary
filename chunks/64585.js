n.d(t, { A: () => N }), n(321073);
var i = n(73153),
    l = n(272355),
    s = n(400492),
    a = n(312671),
    r = n(961350),
    o = n(383501),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    h = n(559908),
    A = n(652215);
let g = (0, s.aN)("poggermode_applause", a.A.getSoundpack()),
    m = !1,
    p = !1,
    _ = [],
    x = null,
    f = () => {
        g.stop(), (m = !1);
    },
    E = () => {
        let e = u.A.isEnabled(),
            t = u.A.comboSoundsEnabled;
        return !!e && !!t && null != d.A.getChannelId();
    },
    C = () => {
        if (0 === _.length || !E() || p) return;
        p = !0;
        let [e, t] = _[_.length - 1];
        (0, s.Ak)(e, t), (x = setTimeout(I, 1e3));
    },
    I = () => {
        _.pop(), (p = !1), C();
    },
    S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        _.push([e, t * (n ? 0.1 : 1)]), C();
    };
class b extends l.A {
    _initialize() {
        h.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        h.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(x);
    }
    setVolume(e) {
        let { state: t } = e;
        t === A.S7L.RTC_CONNECTED ? (g.volume = 0.1) : (g.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        r.default.getId() === t && f();
    }
    stopAudio() {
        f();
    }
    startAudio() {
        if (!E()) return;
        let e = d.A.getChannelId();
        if (null == e) return;
        let t = r.default.getId(),
            n = c.A.isTyping(e, t),
            i = h.Ay.getUserCombo(t, e),
            l = i?.multiplier ?? 1;
        n && l >= 7 ? m || (g.loop(), (m = !0)) : f();
    }
    playAchievementUnlockSound() {
        E() && S("poggermode_achievement_unlock");
    }
}
let N = new b();
