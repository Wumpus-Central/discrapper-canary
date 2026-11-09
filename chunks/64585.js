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
let E = (0, s.aN)("poggermode_applause", l.A.getSoundpack()),
    A = !1,
    _ = !1,
    p = [],
    g = null;
function m() {
    (E.stop(), (A = !1));
}
function T() {
    let e = u.A.isEnabled(),
        t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != c.Ay.getChannelId();
}
function f() {
    if (0 === p.length || !T() || _) return;
    _ = !0;
    let [e, t] = p[p.length - 1];
    ((0, s.Ak)(e, t), (g = setTimeout(N, 1e3)));
}
function N() {
    (p.pop(), (_ = !1), f());
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
            clearTimeout(g));
    }
    setVolume(e) {
        let { state: t } = e;
        t === C.S7L.RTC_CONNECTED ? (E.volume = 0.1) : (E.volume = 1);
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
        n && r >= 7 ? A || (E.loop(), (A = !0)) : m();
    }
    playAchievementUnlockSound() {
        T() &&
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = o.A.isConnected();
                (p.push([e, t * (n ? 0.1 : 1)]), f());
            })("poggermode_achievement_unlock");
    }
}
let x = new I();
n.d(t, {}, { A: x });
