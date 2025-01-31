n.d(t, {
    A: () => a,
    a: () => s
});
var i = n(75834);
function r(e, t, n) {
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
var a = (function (e) {
    return (e.STREAM = 'stream'), (e.PAUSE = 'pause'), (e.STOP = 'stop'), e;
})({});
class s {
    onStreamBegin(e, t) {
        let n = (0, i.e)(e, t);
        null == n || null == n.windowHandle ? this.callback({ type: 'stop' }) : this._stream(n);
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
        (null === (n = this.application) || void 0 === n ? void 0 : n.windowHandle) === t && this._update(e);
    }
    onCaptureLegacyEnd(e) {
        var t;
        return (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop();
    }
    _update(e) {
        let t = (0, i.s)(e, this.application);
        if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
        this._stop();
    }
    _stream(e) {
        var t;
        let n = (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) !== e.windowHandle;
        (this.active = !0),
            (this.application = Object.assign({}, e)),
            n &&
                this.callback({
                    type: 'stream',
                    sourceId: 'window:'.concat(this.application.windowHandle)
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
        r(this, 'callback', void 0), r(this, 'active', void 0), r(this, 'application', void 0), (this.callback = e), (this.active = !1), (this.application = null);
    }
}
