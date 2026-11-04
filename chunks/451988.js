n(321073);
class i {
    _ref;
    start(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        (!this.isStarted() || n) &&
            (this.stop(),
            (this._ref = window.setTimeout(() => {
                ((this._ref = null), t());
            }, e)));
    }
    stop() {
        null != this._ref && (clearTimeout(this._ref), (this._ref = null));
    }
    isStarted() {
        return null != this._ref;
    }
}
class r {
    _timeout;
    _delay;
    _handler;
    constructor(e, t) {
        ((this._delay = e), (this._handler = t), (this._timeout = new i()));
    }
    set(e) {
        return ((this._delay = e), this);
    }
    delay() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this._timeout.start(this._delay, this._handler, e);
    }
    cancel() {
        this._timeout.stop();
    }
    isDelayed() {
        return this._timeout.isStarted();
    }
}
class a extends Error {
    name = "BatchInvocationManagerResetError";
}
n.d(
    t,
    {},
    {
        BK: function (e) {
            return new Promise((t) => {
                setTimeout(() => t(), e);
            });
        },
        Ep: i,
        IX: class {
            _ref;
            start(e, t) {
                (this.stop(), (this._ref = window.setInterval(t, e)));
            }
            stop() {
                null != this._ref && (clearInterval(this._ref), (this._ref = null));
            }
            isStarted() {
                return null != this._ref;
            }
        },
        J_: r,
        OC: class {
            invoke;
            options;
            _promises = new Set();
            _pending = new Set();
            _flushHandler;
            _activeInvocationCount = 0;
            _flushReady = !1;
            constructor(e, t = {}) {
                ((this.invoke = e),
                    (this.options = t),
                    (this._flushHandler = new r(this.options.delay ?? 32, () => {
                        ((this._flushReady = !0), this._flush());
                    })));
            }
            queue(e) {
                let t = Array.isArray(e) ? e : [e],
                    n = [];
                for (let e of t)
                    (this.options.predicate?.(e) ?? !0) && !this._pending.has(e) && (this._pending.add(e), n.push(e));
                return (n.length > 0 && this.options.onQueued?.(n), 0 === this._pending.size)
                    ? Promise.resolve()
                    : new Promise((e, t) => {
                          (this._promises.add({ resolve: e, reject: t }),
                              this._flushReady || this._flushHandler.delay(!1));
                      });
            }
            reset() {
                let e = [...this._pending],
                    t = [...this._promises],
                    n = new a("BatchInvocationManager was reset");
                (this._pending.clear(),
                    this._promises.clear(),
                    (this._flushReady = !1),
                    this._flushHandler.cancel(),
                    e.length > 0 && this.options.onCancelled?.(e),
                    t.forEach((e) => e.reject(n)));
            }
            isPending() {
                return this._pending.size > 0;
            }
            isInvoking() {
                return this._activeInvocationCount > 0;
            }
            async _flush() {
                let e = this.options.maxConcurrentInvocations ?? 1 / 0;
                if (!this._flushReady || this._activeInvocationCount >= e) return;
                let t = [...this._pending];
                this._pending.clear();
                let n = [...this._promises];
                if ((this._promises.clear(), (this._flushReady = !1), 0 === t.length))
                    return void n.forEach((e) => e.resolve());
                this._activeInvocationCount += 1;
                try {
                    (await this.invoke(t), n.forEach((e) => e.resolve()));
                } catch (e) {
                    n.forEach((t) => t.reject(e));
                } finally {
                    ((this._activeInvocationCount -= 1), this._flush());
                }
            }
        },
        bY: a,
    },
);
