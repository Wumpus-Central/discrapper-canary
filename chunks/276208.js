"use strict";
n.d(t, { X: () => g, N: () => m });
var i,
    r = n(972347),
    s = n(451988),
    a = n(228366),
    o = n(626584),
    l = n(6494),
    d = n(927813),
    _ = n(869146),
    u = n(531685),
    c = n(652215),
    E = n(392164);
function h() {
    return (
        u.A.isVisible() ||
        _.A.getWindowVisible(c.MLl.CHANNEL_CALL_POPOUT) ||
        _.A.getWindowVisible(c.MLl.ACTIVITY_POPOUT) ||
        _.A.getWindowVisible(E.f) ||
        (function () {
            for (let e of _.A.getWindowKeys())
                if (e.startsWith(c.MLl.CALL_TILE_POPOUT) && _.A.getWindowVisible(e)) return !0;
            return !1;
        })()
    );
}
var m =
    (((i = {}).WindowVisibilityChanged = "window-visibility-changed"),
    (i.IncomingVideoEnabledChanged = "incoming-video-enabled-changed"),
    i);
class f extends r.A {
    disableVideoTimer = new s.Ep();
    discordVisible = !0;
    incomingVideoEnabled = !0;
    lastEnabledChange = performance.now();
    logger = new o.A("WindowVisibilityVideoManager");
    HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * d.A.Millis.SECOND;
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
        (this.incomingVideoEnabled = e),
            t &&
                (this.logger.info(
                    `Incoming video enabled changed, incomingVideoEnabled = ${this.incomingVideoEnabled}`,
                ),
                (this.lastEnabledChange = performance.now()),
                this.emit("incoming-video-enabled-changed", this.incomingVideoEnabled));
    }
}
let g = new f();
