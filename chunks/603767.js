n.d(t, { Z: () => o }), n(47120);
var r = n(642128);
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
class o extends r.FrameLoop {
    setRAF(e, t) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)), (this._requestAnimationFrame = e), (this._cancelAnimationFrame = t), this.loop();
    }
    constructor(...e) {
        super(...e),
            i(this, '_requestAnimationFrame', (e) => requestAnimationFrame(e)),
            i(this, '_cancelAnimationFrame', (e) => cancelAnimationFrame(e)),
            i(this, 'writing', !1),
            i(this, 'id', 0),
            i(this, 'lastTime', 0),
            i(this, 'animations', []),
            i(this, 'priority', 0),
            i(this, 'startQueue', new Set()),
            i(this, 'frameQueue', new Set()),
            i(this, 'writeQueue', new Set()),
            i(this, 'timeoutQueue', []),
            i(this, 'addAnimation', (e) => {
                let t = this.animations.indexOf(e);
                t < 0 && ((t = this.animations.findIndex((t) => t.priority > e.priority)), this.animations.splice(0 != ~t ? t : this.animations.length, 0, e));
            }),
            i(this, 'loop', () => {
                if (0 !== this.lastTime)
                    try {
                        this.advance();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        this.animations.length > 0 || this.startQueue.size > 0 || this.frameQueue.size > 0 || this.writeQueue.size > 0 || this.timeoutQueue.length > 0 ? (this.id = this._requestAnimationFrame(this.loop)) : ((this.lastTime = 0), (this.id = 0));
                    }
            }),
            i(this, 'startLoop', () => {
                this.lastTime > 0 || ((this.lastTime = r.Globals.now()), (this.id = this._requestAnimationFrame(this.loop)));
            }),
            i(this, 'advance', () => {
                let e = r.Globals.now();
                if (
                    (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
                    this.timeoutQueue.length > 0 &&
                        r.Globals.batchedUpdates(() => {
                            let t = a(this.timeoutQueue, (t) => t.time > e);
                            this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                        }),
                    e > this.lastTime)
                ) {
                    let t = Math.min(64, e - this.lastTime);
                    (this.lastTime = e),
                        r.Globals.batchedUpdates(() => {
                            this.animations.length > 0 && (r.Globals.willAdvance(this.animations), (this.animations = this.animations.filter((e) => ((this.priority = e.priority), e.idle || e.advance(t), !e.idle))), (this.priority = 0)), this.frameQueue.size > 0 && (this.frameQueue.forEach((t) => t(e)), this.frameQueue.clear()), this.writeQueue.size > 0 && ((this.writing = !0), this.writeQueue.forEach((t) => t(e)), this.writeQueue.clear(), (this.writing = !1));
                        });
                }
            }),
            i(this, 'start', (e) => {
                this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
            }),
            i(this, 'setTimeout', (e, t) => {
                let n = r.Globals.now() + t,
                    i = () => {
                        let e = this.timeoutQueue.findIndex((e) => e.cancel === i);
                        e >= 0 && this.timeoutQueue.splice(e, 1);
                    },
                    o = a(this.timeoutQueue, (e) => e.time > n),
                    s = {
                        time: n,
                        handler: e,
                        cancel: i
                    };
                return this.timeoutQueue.splice(o, 0, s), this.startLoop(), s;
            }),
            i(this, 'onFrame', (e) => {
                this.frameQueue.add(e), this.startLoop();
            }),
            i(this, 'onWrite', (e) => {
                this.writing ? e(this.lastTime) : this.writeQueue.add(e);
            });
    }
}
function a(e, t) {
    let n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
