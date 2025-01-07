r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(666912);
function s(e, n, r) {
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
class o extends a.FrameLoop {
    setRAF(e, n) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)), (this._requestAnimationFrame = e), (this._cancelAnimationFrame = n), this.loop();
    }
    constructor(...e) {
        super(...e),
            s(this, '_requestAnimationFrame', (e) => requestAnimationFrame(e)),
            s(this, '_cancelAnimationFrame', (e) => cancelAnimationFrame(e)),
            s(this, 'writing', !1),
            s(this, 'id', 0),
            s(this, 'lastTime', 0),
            s(this, 'animations', []),
            s(this, 'priority', 0),
            s(this, 'startQueue', new Set()),
            s(this, 'frameQueue', new Set()),
            s(this, 'writeQueue', new Set()),
            s(this, 'timeoutQueue', []),
            s(this, 'addAnimation', (e) => {
                let n = this.animations.indexOf(e);
                n < 0 && ((n = this.animations.findIndex((n) => n.priority > e.priority)), this.animations.splice(0 != ~n ? n : this.animations.length, 0, e));
            }),
            s(this, 'loop', () => {
                if (0 !== this.lastTime)
                    try {
                        this.advance();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        this.animations.length > 0 || this.startQueue.size > 0 || this.frameQueue.size > 0 || this.writeQueue.size > 0 || this.timeoutQueue.length > 0 ? (this.id = this._requestAnimationFrame(this.loop)) : ((this.lastTime = 0), (this.id = 0));
                    }
            }),
            s(this, 'startLoop', () => {
                if (!(this.lastTime > 0)) (this.lastTime = a.Globals.now()), (this.id = this._requestAnimationFrame(this.loop));
            }),
            s(this, 'advance', () => {
                let e = a.Globals.now();
                if (
                    (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
                    this.timeoutQueue.length > 0 &&
                        a.Globals.batchedUpdates(() => {
                            let n = l(this.timeoutQueue, (n) => n.time > e);
                            this.timeoutQueue.splice(0, n).forEach((e) => e.handler());
                        }),
                    e > this.lastTime)
                ) {
                    let n = Math.min(64, e - this.lastTime);
                    (this.lastTime = e),
                        a.Globals.batchedUpdates(() => {
                            this.animations.length > 0 && (a.Globals.willAdvance(this.animations), (this.animations = this.animations.filter((e) => ((this.priority = e.priority), !e.idle && e.advance(n), !e.idle))), (this.priority = 0)), this.frameQueue.size > 0 && (this.frameQueue.forEach((n) => n(e)), this.frameQueue.clear()), this.writeQueue.size > 0 && ((this.writing = !0), this.writeQueue.forEach((n) => n(e)), this.writeQueue.clear(), (this.writing = !1));
                        });
                }
            }),
            s(this, 'start', (e) => {
                this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
            }),
            s(this, 'setTimeout', (e, n) => {
                let r = a.Globals.now() + n,
                    i = () => {
                        let e = this.timeoutQueue.findIndex((e) => e.cancel === i);
                        e >= 0 && this.timeoutQueue.splice(e, 1);
                    },
                    s = l(this.timeoutQueue, (e) => e.time > r),
                    o = {
                        time: r,
                        handler: e,
                        cancel: i
                    };
                return this.timeoutQueue.splice(s, 0, o), this.startLoop(), o;
            }),
            s(this, 'onFrame', (e) => {
                this.frameQueue.add(e), this.startLoop();
            }),
            s(this, 'onWrite', (e) => {
                this.writing ? e(this.lastTime) : this.writeQueue.add(e);
            });
    }
}
function l(e, n) {
    let r = e.findIndex(n);
    return r < 0 ? e.length : r;
}
