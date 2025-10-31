n.d(t, { Z: () => b }), n(388685);
var r = n(570140),
    i = n(846027),
    l = n(317770),
    a = n(594190),
    s = n(928518),
    o = n(131951),
    c = n(451478),
    u = n(981631),
    d = n(65154);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = new Set(),
    m = new Set(),
    h = null;
function g() {
    for (let e of f) i.Z.setDisableLocalVideo(e, u.ZUi.MANUAL_ENABLED, d.Yn.DEFAULT, !1);
    m.clear(), f.clear();
}
class _ extends l.Z {
    _initialize() {
        r.Z.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            r.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            r.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            s.Z.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        r.Z.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            r.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            r.Z.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            s.Z.removeChangeListener(this.handlePopoutChange),
            g(),
            (h = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: r } = e;
        if (n !== d.Yn.DEFAULT || null == r) return;
        let l = null != a.ZP.getVisibleGame(),
            p = c.Z.isVisible(),
            h = s.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT),
            g = o.Z.isLocalVideoDisabled(t, n),
            _ = m.has(t);
        !l || p || h || g || _ || (f.add(t), i.Z.setDisableLocalVideo(t, u.ZUi.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (m.add(t), f.delete(t));
    }
    constructor(...e) {
        super(...e),
            p(this, "handleWindowVisibilityChange", (e) => {
                let { visible: t } = e;
                t && g();
            }),
            p(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t } = e;
                t !== h && (g(), (h = t));
            }),
            p(this, "handlePopoutChange", () => {
                s.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT) && g();
            });
    }
}
let b = new _();
