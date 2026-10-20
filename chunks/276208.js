n.d(t, { X: () => p, N: () => f });
var i,
    r = n(972347),
    a = n(451988),
    s = n(73153),
    l = n(626584),
    o = n(384077),
    d = n(6494),
    c = n(927813),
    u = n(869146),
    _ = n(531685),
    E = n(652215),
    A = n(392164);
function h() {
    return (
        _.A.isVisible() ||
        u.A.getWindowVisible(E.MLl.CHANNEL_CALL_POPOUT) ||
        u.A.getWindowVisible(E.MLl.ACTIVITY_POPOUT) ||
        u.A.getWindowVisible(A.f) ||
        (function () {
            for (let e of u.A.getWindowKeys())
                if (e.startsWith(E.MLl.CALL_TILE_POPOUT) && u.A.getWindowVisible(e)) return !0;
            return !1;
        })()
    );
}
var f =
    (((i = {}).WindowVisibilityChanged = "window-visibility-changed"),
    (i.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
    i);
class I extends r.A {
    disableVideoTimer = new a.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new l.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * c.A.Millis.SECOND;
    constructor() {
        (super(),
            s.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            s.h.subscribe("WINDOW_INIT", this.handleWindowInit),
            s.h.subscribe("APP_STATE_UPDATE", this.update),
            d.A.addOnPipModeChangedListener(this.update));
    }
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    handleWindowInit = () => {
        this.discordVisible !== h() && (0, o.G$)("window_visibility_video_manager") && this.update();
    };
    update = () => {
        this.discordVisible !== h() &&
            ((this.discordVisible = h()),
            this.emit("window-visibility-changed", this.discordVisible),
            this.discordVisible
                ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                      this.setIncomingVideoEnabled(!1);
                  }));
    };
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        ((this.incomingVideoEnabled = e),
            t &&
                (this.logger.info(
                    `Incoming video enabled changed, incomingVideoEnabled = ${this.incomingVideoEnabled}`,
                ),
                (this.lastEnabledChange = performance.now()),
                this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled)));
    }
}
let p = new I();
