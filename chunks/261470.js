r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(411104);
function a(e, n, r) {
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
class o {
    get fails() {
        return this._fails;
    }
    get current() {
        return this._current;
    }
    get pending() {
        return null != this._timeoutId;
    }
    succeed() {
        this.cancel(), (this._fails = 0), (this._current = this.min);
    }
    fail(e) {
        this._fails += 1;
        let n = 2 * this._current;
        if ((this.jitter && (n *= Math.random()), (this._current = Math.min(this._current + n, this.max)), null != e)) {
            if (null != this._timeoutId) {
                if (this._callback !== e) throw Error('callback already pending');
                this.cancel();
            }
            (this._callback = e),
                (this._timeoutId = setTimeout(() => {
                    try {
                        null != e && e();
                    } finally {
                        this.cancel();
                    }
                }, this._current));
        }
        return this._current;
    }
    cancel() {
        (this._callback = null), null != this._timeoutId && (clearTimeout(this._timeoutId), (this._timeoutId = null));
    }
    constructor(e = 500, n = null, r = !0) {
        if ((a(this, 'min', void 0), a(this, 'max', void 0), a(this, 'jitter', void 0), a(this, '_current', void 0), a(this, '_timeoutId', void 0), a(this, '_callback', void 0), a(this, '_fails', 0), e <= 0)) throw Error('Backoff min value must be greater than zero or backoff will never back-off.');
        (this.min = e), (this.max = null != n ? n : 10 * e), (this.jitter = r), (this._current = e);
    }
}
