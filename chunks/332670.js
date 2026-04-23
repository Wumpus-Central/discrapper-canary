n.d(t, { A: () => r });
var i = n(419354);
class r extends i.FrameLoop {
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
        this.lastTime > 0 || ((this.lastTime = i.Globals.now()), (this.id = this._requestAnimationFrame(this.loop)));
    };
    advance = () => {
        let e = i.Globals.now();
        if (
            (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
            this.timeoutQueue.length > 0 &&
                i.Globals.batchedUpdates(() => {
                    let t = a(this.timeoutQueue, (t) => t.time > e);
                    this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                }),
            e > this.lastTime)
        ) {
            let t = Math.min(64, e - this.lastTime);
            (this.lastTime = e),
                i.Globals.batchedUpdates(() => {
                    this.animations.length > 0 &&
                        (i.Globals.willAdvance(this.animations),
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
        let n = i.Globals.now() + t,
            r = () => {
                let e = this.timeoutQueue.findIndex((e) => e.cancel === r);
                e >= 0 && this.timeoutQueue.splice(e, 1);
            },
            l = a(this.timeoutQueue, (e) => e.time > n),
            s = { time: n, handler: e, cancel: r };
        return this.timeoutQueue.splice(l, 0, s), this.startLoop(), s;
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
function a(e, t) {
    let n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
