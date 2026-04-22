"use strict";
n.d(t, { d: () => o, p: () => a });
var r,
    i = n(118356),
    s = n(369543),
    a = (((r = {}).STREAM = "stream"), (r.PAUSE = "pause"), (r.STOP = "stop"), r);
class o {
    callback;
    active;
    application;
    sound;
    logger;
    constructor(e) {
        (this.callback = e),
            (this.active = !1),
            (this.application = null),
            (this.sound = !0),
            (this.logger = new i.Vy("StreamDirector"));
    }
    onStreamBegin(e, t, n) {
        let r = (0, s.M)(e, t);
        (this.sound = n), null == r || null == r.windowHandle ? this.callback({ type: "stop" }) : this._stream(r);
    }
    onStreamKilled() {
        this._kill();
    }
    onStreamEnd() {
        this._stop();
    }
    onDetectionUpdate(e) {
        this._update(e);
    }
    onCaptureEnd(e, t) {
        this.application?.windowHandle === t && this._update(e);
    }
    onCaptureLegacyEnd(e) {
        return this.application?.windowHandle != null
            ? this.onCaptureEnd(e, this.application.windowHandle)
            : this._stop();
    }
    _update(e) {
        let t = (0, s.w)(e, this.application);
        if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
        this._stop();
    }
    _stream(e) {
        let t = this.application?.windowHandle !== e.windowHandle;
        (this.active = !0),
            t &&
                this.logger.info(
                    `Stream window changed from ${this.application?.windowHandle} to ${e.windowHandle} for application ${e.applicationId}, executableName ${e.executableName}`,
                ),
            (this.application = Object.assign({}, e)),
            t &&
                this.callback({
                    type: "stream",
                    sourceId: `window:${this.application.windowHandle}`,
                    sound: this.sound,
                });
    }
    _kill() {
        (this.active = !1), (this.application = null);
    }
    _stop() {
        this.active && (this._kill(), this.callback({ type: "stop" }));
    }
    _pause() {
        this.active && ((this.application.windowHandle = null), this.callback({ type: "pause" }));
    }
}
