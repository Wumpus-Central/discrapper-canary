(n.d(t, { A: () => f }), n(321073));
var i = n(73153),
    l = n(272355),
    r = n(400492),
    s = n(312671),
    a = n(280450),
    o = n(763827),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    A = n(559908),
    E = n(652215);
let h = (0, r.aN)("poggermode_applause", s.A.getSoundpack()),
    C = !1,
    _ = !1,
    g = [],
    I = null;
function T() {
    (h.stop(), (C = !1));
}
function p() {
    let e = u.A.isEnabled(),
        t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != d.Ay.getChannelId();
}
function N() {
    if (0 === g.length || !p() || _) return;
    _ = !0;
    let [e, t] = g[g.length - 1];
    ((0, r.Ak)(e, t), (I = setTimeout(S, 1e3)));
}
function S() {
    (g.pop(), (_ = !1), N());
}
class O extends l.A {
    _initialize() {
        (A.Ay.addChangeListener(this.startAudio),
            i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.subscribe("TYPING_STOP", this.stopAudio),
            i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio));
    }
    _terminate() {
        (A.Ay.removeChangeListener(this.startAudio),
            i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            i.h.unsubscribe("TYPING_STOP", this.stopAudio),
            i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(I));
    }
    setVolume(e) {
        let { state: t } = e;
        t === E.S7L.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && T();
    }
    stopAudio() {
        T();
    }
    startAudio() {
        if (!p()) return;
        let e = d.Ay.getChannelId();
        if (null == e) return;
        let t = a.default.getId(),
            n = c.A.isTyping(e, t),
            i = A.Ay.getUserCombo(t, e),
            l = i?.multiplier ?? 1;
        n && l >= 7 ? C || (h.loop(), (C = !0)) : T();
    }
    playAchievementUnlockSound() {
        p() &&
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = o.A.isConnected();
                (g.push([e, t * (n ? 0.1 : 1)]), N());
            })("poggermode_achievement_unlock");
    }
}
let f = new O();
