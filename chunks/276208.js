"use strict";
n.d(t, { X: () => f, N: () => h });
var i,
    r = n(972347),
    a = n(451988),
    s = n(228366),
    l = n(626584),
    o = n(6494),
    d = n(927813),
    c = n(869146),
    u = n(531685),
    _ = n(652215),
    E = n(392164);
function A() {
    return (
        u.A.isVisible() ||
        c.A.getWindowVisible(_.MLl.CHANNEL_CALL_POPOUT) ||
        c.A.getWindowVisible(_.MLl.ACTIVITY_POPOUT) ||
        c.A.getWindowVisible(E.f) ||
        (function () {
            for (let e of c.A.getWindowKeys())
                if (e.startsWith(_.MLl.CALL_TILE_POPOUT) && c.A.getWindowVisible(e)) return !0;
            return !1;
        })()
    );
}
var h =
    (((i = {}).WindowVisibilityChanged = "window-visibility-changed"),
    (i.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
    i);
class I extends r.A {
    disableVideoTimer = new a.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new l.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * d.A.Millis.SECOND;
    constructor() {
        super(),
            s.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            s.h.subscribe("APP_STATE_UPDATE", this.update),
            o.A.addOnPipModeChangedListener(this.update);
    }
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    update = () => {
        this.discordVisible !== A() &&
            ((this.discordVisible = A()),
            this.emit("window-visibility-changed", this.discordVisible),
            this.discordVisible
                ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                      this.setIncomingVideoEnabled(!1);
                  }));
    };
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e),
            t &&
                (this.logger.info(
                    `Incoming video enabled changed, incomingVideoEnabled = ${this.incomingVideoEnabled}`,
                ),
                (this.lastEnabledChange = performance.now()),
                this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled));
    }
}
let f = new I();
