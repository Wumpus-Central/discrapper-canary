"use strict";
n.d(t, { X: () => m, N: () => p });
var i,
    r = n(972347),
    s = n(451988),
    a = n(228366),
    o = n(626584),
    l = n(6494),
    u = n(927813),
    c = n(869146),
    d = n(531685),
    _ = n(652215),
    h = n(392164);
function f() {
    return (
        d.A.isVisible() ||
        c.A.getWindowVisible(_.MLl.CHANNEL_CALL_POPOUT) ||
        c.A.getWindowVisible(_.MLl.ACTIVITY_POPOUT) ||
        c.A.getWindowVisible(h.f) ||
        (function () {
            for (let e of c.A.getWindowKeys())
                if (e.startsWith(_.MLl.CALL_TILE_POPOUT) && c.A.getWindowVisible(e)) return !0;
            return !1;
        })()
    );
}
var p =
    (((i = {}).WindowVisibilityChanged = "window-visibility-changed"),
    (i.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
    i);
class E extends r.A {
    disableVideoTimer = new s.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new o.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * u.A.Millis.SECOND;
    constructor() {
        super(),
            a.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.update),
            a.h.subscribe("APP_STATE_UPDATE", this.update),
            l.A.addOnPipModeChangedListener(this.update);
    }
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    lastIncomingVideoEnabledChangeTime() {
        return this.lastEnabledChange;
    }
    update = () => {
        this.discordVisible !== f() &&
            ((this.discordVisible = f()),
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
let m = new E();
