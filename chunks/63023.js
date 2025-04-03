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
n.d(t, { Z: () => i }), n(653041);
class i {
    _processQueue() {
        setTimeout(() => {
            if (this._queue.length > 0 && this._tokenCount > 0) {
                this._tokenCount--, null == this._intervalID && (this._intervalID = setInterval(() => this._iterate(), this._intervalPeriod));
                let e = this._queue.shift();
                null == e || e(), this._processQueue();
            }
        }, 0);
    }
    _iterate() {
        (this._tokenCount = Math.min(this._capacity, this._tokenCount + 1)), this._tokenCount >= this._capacity && null != this._intervalID && (clearInterval(this._intervalID), (this._intervalID = null)), this._processQueue();
    }
    process() {
        return new Promise((e) => {
            this._queue.push(e), this._processQueue();
        });
    }
    constructor(e, t) {
        r(this, '_capacity', void 0), r(this, '_tokenCount', void 0), r(this, '_queue', void 0), r(this, '_intervalPeriod', void 0), r(this, '_intervalID', void 0), (this._capacity = e), (this._tokenCount = e), (this._queue = []), (this._intervalPeriod = t / e), (this._intervalID = null);
    }
}
