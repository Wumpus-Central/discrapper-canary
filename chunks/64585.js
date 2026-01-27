n.d(t, {
    A: () => E,
}),
    n(896048),
    n(321073);
var r = n(73153),
    l = n(272355),
    i = n(400492),
    s = n(312671),
    a = n(961350),
    o = n(383501),
    c = n(309010),
    u = n(741961),
    d = n(3137),
    p = n(559908),
    h = n(652215);
let f = (0, i.aN)("poggermode_applause", s.A.getSoundpack()),
    g = !1,
    m = !1,
    b = [],
    A = null,
    y = () => {
        f.stop(), (g = !1);
    },
    _ = () => {
        let e = d.A.isEnabled(),
            t = d.A.comboSoundsEnabled;
        return !!e && !!t && null != c.A.getChannelId();
    },
    O = () => {
        if (0 === b.length || !_() || m) return;
        m = !0;
        let [e, t] = b[b.length - 1];
        (0, i.Ak)(e, t), (A = setTimeout(j, 1e3));
    },
    j = () => {
        b.pop(), (m = !1), O();
    },
    v = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
        b.push([e, t * (n ? 0.1 : 1)]), O();
    };
class x extends l.A {
    _initialize() {
        p.Ay.addChangeListener(this.startAudio),
            r.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.h.subscribe("TYPING_STOP", this.stopAudio),
            r.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.h.subscribe("CHANNEL_SELECT", this.stopAudio),
            r.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        p.Ay.removeChangeListener(this.startAudio),
            r.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.h.unsubscribe("TYPING_STOP", this.stopAudio),
            r.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            r.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(A);
    }
    setVolume(e) {
        let { state: t } = e;
        t === h.S7L.RTC_CONNECTED ? (f.volume = 0.1) : (f.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && y();
    }
    stopAudio() {
        y();
    }
    startAudio() {
        var e;
        if (!_()) return;
        let t = c.A.getChannelId();
        if (null == t) return;
        let n = a.default.getId(),
            r = u.A.isTyping(t, n),
            l = p.Ay.getUserCombo(n, t),
            i = null != (e = null == l ? void 0 : l.multiplier) ? e : 1;
        r && i >= 7 ? g || (f.loop(), (g = !0)) : y();
    }
    playAchievementUnlockSound() {
        _() && v("poggermode_achievement_unlock");
    }
}
let E = new x();
