(n.d(t, { A: () => x }), n(321073));
var i = n(73153),
    s = n(272355),
    r = n(400492),
    l = n(312671),
    a = n(280450),
    o = n(763827),
    c = n(309010),
    d = n(741961),
    u = n(3137),
    h = n(559908),
    C = n(652215);
let A = (0, r.aN)("poggermode_applause", l.A.getSoundpack()),
    g = !1,
    E = !1,
    p = [],
    _ = null;
function f() {
    (A.stop(), (g = !1));
}
function m() {
    let e = u.A.isEnabled(),
        t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != c.Ay.getChannelId();
}
function T() {
    if (0 === p.length || !m() || E) return;
    E = !0;
    let [e, t] = p[p.length - 1];
    ((0, r.Ak)(e, t), (_ = setTimeout(v, 1e3)));
}
function v() {
    (p.pop(), (E = !1), T());
}
class N extends s.A {
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
            clearTimeout(_));
    }
    setVolume(e) {
        let { state: t } = e;
        t === C.S7L.RTC_CONNECTED ? (A.volume = 0.1) : (A.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && f();
    }
    stopAudio() {
        f();
    }
    startAudio() {
        if (!m()) return;
        let e = c.Ay.getChannelId();
        if (null == e) return;
        let t = a.default.getId(),
            n = d.A.isTyping(e, t),
            i = h.Ay.getUserCombo(t, e),
            s = i?.multiplier ?? 1;
        n && s >= 7 ? g || (A.loop(), (g = !0)) : f();
    }
    playAchievementUnlockSound() {
        m() &&
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = o.A.isConnected();
                (p.push([e, t * (n ? 0.1 : 1)]), T());
            })("poggermode_achievement_unlock");
    }
}
let x = new N();
