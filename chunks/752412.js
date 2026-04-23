n.d(t, { A: () => m });
var i = n(73153),
    r = n(827343),
    a = n(272355),
    l = n(15285),
    s = n(869146),
    o = n(430452),
    d = n(531685),
    u = n(652215),
    c = n(731854);
let A = new Set(),
    h = new Set(),
    _ = null;
function E() {
    for (let e of A) r.A.setDisableLocalVideo(e, u.bb8.MANUAL_ENABLED, c.x.DEFAULT, !1);
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
            E(),
            (_ = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== c.x.DEFAULT || null == i) return;
        let a = null != l.Ay.getVisibleGame(),
            _ = d.A.isVisible(),
            E = s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT),
            p = o.Ay.isLocalVideoDisabled(t, n),
            m = h.has(t);
        !a || _ || E || p || m || (A.add(t), r.A.setDisableLocalVideo(t, u.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (h.add(t), A.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && E();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== _ && (E(), (_ = t));
    };
    handlePopoutChange = () => {
        s.A.getWindowVisible(u.MLl.CHANNEL_CALL_POPOUT) && E();
    };
}
let m = new p();
