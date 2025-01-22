r.d(n, {
    A: function () {
        return i;
    },
    a: function () {
        return s;
    }
});
var i,
    a = r(75834);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.STREAM = 'stream'), (e.PAUSE = 'pause'), (e.STOP = 'stop');
})(i || (i = {}));
class s {
    onStreamBegin(e, n) {
        let r = (0, a.e)(e, n);
        null == r || null == r.windowHandle ? this.callback({ type: 'stop' }) : this._stream(r);
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
    onCaptureEnd(e, n) {
        var r;
        (null === (r = this.application) || void 0 === r ? void 0 : r.windowHandle) === n && this._update(e);
    }
    onCaptureLegacyEnd(e) {
        var n;
        return (null === (n = this.application) || void 0 === n ? void 0 : n.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop();
    }
    _update(e) {
        let n = (0, a.s)(e, this.application);
        if (null != n) return null == n.windowHandle ? this._pause() : this._stream(n);
        this._stop();
    }
    _stream(e) {
        var n;
        let r = (null === (n = this.application) || void 0 === n ? void 0 : n.windowHandle) !== e.windowHandle;
        (this.active = !0),
            (this.application = Object.assign({}, e)),
            r &&
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
        o(this, 'callback', void 0), o(this, 'active', void 0), o(this, 'application', void 0), (this.callback = e), (this.active = !1), (this.application = null);
    }
}
