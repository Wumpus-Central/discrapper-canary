"use strict";
n.d(t, { A: () => C }), n(321073);
var i = n(228366),
    r = n(272355),
    s = n(400492),
    a = n(312671),
    o = n(495544),
    l = n(763827),
    u = n(309010),
    c = n(741961),
    d = n(3137),
    _ = n(559908),
    f = n(652215);
let h = (0, s.aN)("poggermode_applause", a.A.getSoundpack()),
    p = !1,
    E = !1,
    m = [],
    g = null,
    A = () => {
        h.stop(), (p = !1);
    },
    I = () => {
        let e = d.A.isEnabled(),
            t = d.A.comboSoundsEnabled;
        return !!e && !!t && null != u.A.getChannelId();
    },
    T = () => {
        if (0 === m.length || !I() || E) return;
        E = !0;
        let [e, t] = m[m.length - 1];
        (0, s.Ak)(e, t), (g = setTimeout(S, 1e3));
    },
    S = () => {
        m.pop(), (E = !1), T();
    },
    N = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.A.isConnected();
        m.push([e, t * (n ? 0.1 : 1)]), T();
    };
class y extends r.A {
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
            clearTimeout(g);
    }
    setVolume(e) {
        let { state: t } = e;
        t === f.S7L.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        o.default.getId() === t && A();
    }
    stopAudio() {
        A();
    }
    startAudio() {
        if (!I()) return;
        let e = u.A.getChannelId();
        if (null == e) return;
        let t = o.default.getId(),
            n = c.A.isTyping(e, t),
            i = _.Ay.getUserCombo(t, e),
            r = i?.multiplier ?? 1;
        n && r >= 7 ? p || (h.loop(), (p = !0)) : A();
    }
    playAchievementUnlockSound() {
        I() && N("poggermode_achievement_unlock");
    }
}
let C = new y();
