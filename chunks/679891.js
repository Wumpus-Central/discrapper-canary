n(47120);
var i = n(570140),
    r = n(846027),
    l = n(317770),
    a = n(594190),
    s = n(928518),
    o = n(131951),
    c = n(451478),
    d = n(981631),
    u = n(65154);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = new Set(),
    p = new Set(),
    g = null;
function f() {
    for (let e of m) r.Z.setDisableLocalVideo(e, d.ZUi.MANUAL_ENABLED, u.Yn.DEFAULT, !1);
    p.clear(), m.clear();
}
class _ extends l.Z {
    _initialize() {
        i.Z.subscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo), i.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle), i.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange), i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), s.Z.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        i.Z.unsubscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo), i.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle), i.Z.unsubscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange), i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), s.Z.removeChangeListener(this.handlePopoutChange), f(), (g = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== u.Yn.DEFAULT || null == i) return;
        let l = null != a.ZP.getVisibleGame(),
            h = c.Z.isVisible(),
            g = s.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT),
            f = o.Z.isLocalVideoDisabled(t, n),
            _ = p.has(t);
        l && !h && !g && !f && !_ && (m.add(t), r.Z.setDisableLocalVideo(t, d.ZUi.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (p.add(t), m.delete(t));
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleWindowVisibilityChange', (e) => {
                let { visible: t } = e;
                t && f();
            }),
            h(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t } = e;
                t !== g && (f(), (g = t));
            }),
            h(this, 'handlePopoutChange', () => {
                s.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT) && f();
            });
    }
}
t.Z = new _();
