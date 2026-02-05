n.d(t, { A: () => g });
var i = n(73153),
    r = n(827343),
    a = n(272355),
    l = n(15285),
    s = n(869146),
    o = n(430452),
    d = n(531685),
    c = n(652215),
    u = n(731854);
let A = new Set(),
    h = new Set(),
    _ = null;
function m() {
    for (let e of A) r.A.setDisableLocalVideo(e, c.bb8.MANUAL_ENABLED, u.x.DEFAULT, !1);
    h.clear(), A.clear();
}
class p extends a.A {
    _initialize() {
        i.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            i.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            i.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            i.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            s.A.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        i.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            i.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            i.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            i.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            s.A.removeChangeListener(this.handlePopoutChange),
            m(),
            (_ = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== u.x.DEFAULT || null == i) return;
        let a = null != l.Ay.getVisibleGame(),
            _ = d.A.isVisible(),
            m = s.A.getWindowVisible(c.MLl.CHANNEL_CALL_POPOUT),
            p = o.A.isLocalVideoDisabled(t, n),
            g = h.has(t);
        !a || _ || m || p || g || (A.add(t), r.A.setDisableLocalVideo(t, c.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (h.add(t), A.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && m();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== _ && (m(), (_ = t));
    };
    handlePopoutChange = () => {
        s.A.getWindowVisible(c.MLl.CHANNEL_CALL_POPOUT) && m();
    };
}
let g = new p();
