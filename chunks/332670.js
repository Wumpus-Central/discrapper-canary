"use strict";
n.d(t, { A: () => i });
var r = n(4208);
class i extends r.FrameLoop {
    _requestAnimationFrame = (e) => requestAnimationFrame(e);
    _cancelAnimationFrame = (e) => cancelAnimationFrame(e);
    writing = !1;
    id = 0;
    lastTime = 0;
    animations = [];
    priority = 0;
    startQueue = new Set();
    frameQueue = new Set();
    writeQueue = new Set();
    timeoutQueue = [];
    addAnimation = (e) => {
        let t = this.animations.indexOf(e);
        t < 0 &&
            ((t = this.animations.findIndex((t) => t.priority > e.priority)),
            this.animations.splice(0 != ~t ? t : this.animations.length, 0, e));
    };
    loop = () => {
        if (0 !== this.lastTime)
            try {
                this.advance();
            } catch (e) {
                console.error(e);
            } finally {
                this.animations.length > 0 ||
                this.startQueue.size > 0 ||
                this.frameQueue.size > 0 ||
                this.writeQueue.size > 0 ||
                this.timeoutQueue.length > 0
                    ? (this.id = this._requestAnimationFrame(this.loop))
                    : ((this.lastTime = 0), (this.id = 0));
            }
    };
    startLoop = () => {
        this.lastTime > 0 || ((this.lastTime = r.Globals.now()), (this.id = this._requestAnimationFrame(this.loop)));
    };
    advance = () => {
        let e = r.Globals.now();
        if (
            (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
            this.timeoutQueue.length > 0 &&
                r.Globals.batchedUpdates(() => {
                    let t = s(this.timeoutQueue, (t) => t.time > e);
                    this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                }),
            e > this.lastTime)
        ) {
            let t = Math.min(64, e - this.lastTime);
            (this.lastTime = e),
                r.Globals.batchedUpdates(() => {
                    this.animations.length > 0 &&
                        (r.Globals.willAdvance(this.animations),
                        (this.animations = this.animations.filter(
                            (e) => ((this.priority = e.priority), e.idle || e.advance(t), !e.idle),
                        )),
                        (this.priority = 0)),
                        this.frameQueue.size > 0 && (this.frameQueue.forEach((t) => t(e)), this.frameQueue.clear()),
                        this.writeQueue.size > 0 &&
                            ((this.writing = !0),
                            this.writeQueue.forEach((t) => t(e)),
                            this.writeQueue.clear(),
                            (this.writing = !1));
                });
        }
    };
    start = (e) => {
        this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
    };
    setTimeout = (e, t) => {
        let n = r.Globals.now() + t,
            i = () => {
                let e = this.timeoutQueue.findIndex((e) => e.cancel === i);
                e >= 0 && this.timeoutQueue.splice(e, 1);
            },
            a = s(this.timeoutQueue, (e) => e.time > n),
            o = { time: n, handler: e, cancel: i };
        return this.timeoutQueue.splice(a, 0, o), this.startLoop(), o;
    };
    onFrame = (e) => {
        this.frameQueue.add(e), this.startLoop();
    };
    onWrite = (e) => {
        this.writing ? e(this.lastTime) : this.writeQueue.add(e);
    };
    setRAF(e, t) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)),
            (this._requestAnimationFrame = e),
            (this._cancelAnimationFrame = t),
            this.loop();
    }
}
function s(e, t) {
    let n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
