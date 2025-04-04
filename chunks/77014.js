n.d(t, {
    A: () => o,
    a: () => a
});
var r = n(75834);
function i(e, t, n) {
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
var o = (function (e) {
    return (e.STREAM = 'stream'), (e.PAUSE = 'pause'), (e.STOP = 'stop'), e;
})({});
class a {
    onStreamBegin(e, t, n) {
        let i = (0, r.e)(e, t);
        (this.sound = n), null == i || null == i.windowHandle ? this.callback({ type: 'stop' }) : this._stream(i);
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
        var n;
        (null == (n = this.application) ? void 0 : n.windowHandle) === t && this._update(e);
    }
    onCaptureLegacyEnd(e) {
        var t;
        return (null == (t = this.application) ? void 0 : t.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop();
    }
    _update(e) {
        let t = (0, r.s)(e, this.application);
        if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
        this._stop();
    }
    _stream(e) {
        var t;
        let n = (null == (t = this.application) ? void 0 : t.windowHandle) !== e.windowHandle;
        (this.active = !0),
            (this.application = Object.assign({}, e)),
            n &&
                this.callback({
                    type: 'stream',
                    sourceId: 'window:'.concat(this.application.windowHandle),
                    sound: this.sound
                });
    }
    _kill() {
        (this.active = !1), (this.application = null);
    }
    _stop() {
        this.active && (this._kill(), this.callback({ type: 'stop' }));
    }
    _pause() {
        this.active && ((this.application.windowHandle = null), this.callback({ type: 'pause' }));
    }
    constructor(e) {
        i(this, 'callback', void 0), i(this, 'active', void 0), i(this, 'application', void 0), i(this, 'sound', void 0), (this.callback = e), (this.active = !1), (this.application = null), (this.sound = !0);
    }
}
