n(321073);
var i = n(73153),
    r = n(272355),
    s = n(400492),
    l = n(312671),
    a = n(46653),
    o = n(495867),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    h = n(559908),
    C = n(652215);
let A = (0, s.aN)("poggermode_applause", l.A.getSoundpack()),
    E = !1,
    _ = !1,
    g = [],
    p = null;
function m() {
    (A.stop(), (E = !1));
}
function T() {
    let e = u.A.isEnabled(),
        t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != c.Ay.getChannelId();
}
function N() {
    if (0 === g.length || !T() || _) return;
    _ = !0;
    let [e, t] = g[g.length - 1];
    ((0, s.Ak)(e, t), (p = setTimeout(f, 1e3)));
}
function f() {
    (g.pop(), (_ = !1), N());
}
class I extends r.A {
    _initialize() {
        (h.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio));
    }
    _terminate() {
        (h.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(p));
    }
    setVolume(e) {
        let { state: t } = e;
        t === C.S7L.RTC_CONNECTED ? (A.volume = 0.1) : (A.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && m();
    }
    stopAudio() {
        m();
    }
    startAudio() {
        if (!T()) return;
        let e = c.Ay.getChannelId();
        if (null == e) return;
        let t = a.default.getId(),
            n = d.A.isTyping(e, t),
            i = h.Ay.getUserCombo(t, e),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? E || (A.loop(), (E = !0)) : m();
    }
    playAchievementUnlockSound() {
        T() &&
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = o.A.isConnected();
                (g.push([e, t * (n ? 0.1 : 1)]), N());
            })("poggermode_achievement_unlock");
    }
}
let S = new I();
n.d(t, {}, { A: S });
