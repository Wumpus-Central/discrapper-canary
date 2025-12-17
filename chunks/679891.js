n.d(t, { Z: () => _ }), n(388685);
var r = n(570140),
    i = n(846027),
    l = n(317770),
    a = n(594190),
    o = n(928518),
    s = n(131951),
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
    g = new Set(),
    h = null;
function m() {
    for (let e of f) i.Z.setDisableLocalVideo(e, u.ZUi.MANUAL_ENABLED, d.Yn.DEFAULT, !1);
    g.clear(), f.clear();
}
class b extends l.Z {
    _initialize() {
        r.Z.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            r.Z.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            r.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            o.Z.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        r.Z.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            r.Z.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            r.Z.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            o.Z.removeChangeListener(this.handlePopoutChange),
            m(),
            (h = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: r } = e;
        if (n !== d.Yn.DEFAULT || null == r) return;
        let l = null != a.ZP.getVisibleGame(),
            p = c.Z.isVisible(),
            h = o.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT),
            m = s.Z.isLocalVideoDisabled(t, n),
            b = g.has(t);
        !l || p || h || m || b || (f.add(t), i.Z.setDisableLocalVideo(t, u.ZUi.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (g.add(t), f.delete(t));
    }
    constructor(...e) {
        super(...e),
            p(this, "handleWindowVisibilityChange", (e) => {
                let { visible: t } = e;
                t && m();
            }),
            p(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t } = e;
                t !== h && (m(), (h = t));
            }),
            p(this, "handlePopoutChange", () => {
                o.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT) && m();
            });
    }
}
let _ = new b();
