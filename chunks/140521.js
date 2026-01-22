let s;
e.d(t, { default: () => w }),
    e(896048),
    e(693327),
    e(554719),
    e(680155),
    e(323874),
    e(14289),
    e(35956),
    e(321073),
    e(65821);
var n = e(835245),
    a = e(872379),
    r = e(795521);
function l(i, t, e) {
    return (
        t in i
            ? Object.defineProperty(i, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (i[t] = e),
        i
    );
}
let h = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
    o = "u" > typeof OffscreenCanvas,
    d = [],
    u = new Map(),
    v = new Map(),
    c = (0, r.u)(async () => {
        for (let i = 0; i < h; i++) {
            let i = new Worker(new URL("/assets/" + e.u("35343"), e.b));
            d.push({
                worker: i,
                numActive: 0,
            });
        }
    }),
    I = (0, r.u)(async () => {
        s = (await e.e("70959").then(e.bind(e, 787570))).default;
    });
o ? c() : I();
class w {
    get workerIndex() {
        let i = u.get(this.canvasId);
        if (null == i) {
            let s = v.get(this.assetUrl);
            if (null != s) i = s;
            else {
                var t, e;
                let s = null != (t = null == (e = d[0]) ? void 0 : e.numActive) ? t : 0;
                for (let [t, e] of d.entries()) e.numActive <= s && ((s = e.numActive), (i = t));
                v.set(this.assetUrl, i);
            }
            u.set(this.canvasId, i), d[i].numActive++;
        }
        return i;
    }
    get worker() {
        let i = this.workerIndex;
        if (null == d[i]) throw Error("No worker in pool at index ".concat(i));
        return d[i].worker;
    }
    async drop() {
        var i, t, e, s;
        if ((await this.initializationPromise, o)) {
            null == (i = this.worker) || i.removeEventListener("message", this.handleMessage),
                null == (t = this.worker) || t.removeEventListener("error", this.handleError),
                null == (e = this.worker) ||
                    e.postMessage({
                        canvasId: this.canvasId,
                        type: a.l.DROP,
                    });
            let s = u.get(this.canvasId);
            if (null == s) throw Error("No worker index assigned for asset ".concat(this.canvasId));
            u.delete(this.canvasId), d[s].numActive--;
        } else null == (s = this.lottieView) || s.drop();
        this.observer.disconnect();
    }
    setState(i, t) {
        var e, s;
        (this.shouldAnimate = i),
            this.isInitialized &&
                (o
                    ? null == (e = this.worker) ||
                      e.postMessage({
                          canvasId: this.canvasId,
                          type: a.l.STATE_CHANGE,
                          shouldAnimate: i,
                          nextFrame: t,
                      })
                    : null == (s = this.lottieView) || s.setState(i, t));
    }
    constructor({ canvas: i, animationId: t, assetUrl: e, assetData: r, onInitialDraw: h, onError: d }) {
        l(this, "assetUrl", void 0),
            l(this, "assetData", void 0),
            l(this, "canvasId", void 0),
            l(this, "lottieView", void 0),
            l(this, "observer", void 0),
            l(this, "isVisible", !1),
            l(this, "isInitialized", !1),
            l(this, "initializationPromise", void 0),
            l(this, "shouldAnimate", !1),
            l(this, "onInitialDraw", void 0),
            l(this, "onError", void 0),
            l(this, "handleVisibilityChange", (i) => {
                let t = i[i.length - 1].isIntersecting;
                if (t !== this.isVisible) {
                    var e, s;
                    if (((this.isVisible = t), !this.isInitialized)) return;
                    o
                        ? null == (e = this.worker) ||
                          e.postMessage({
                              canvasId: this.canvasId,
                              type: a.l.VISIBILITY_CHANGE,
                              isVisible: t,
                          })
                        : null == (s = this.lottieView) || s.setVisibility(t);
                }
            }),
            l(this, "handleMessage", (i) => {
                var t, e;
                i.data.type === a.l.FIRST_DRAW && (null == (t = this.onInitialDraw) || t.call(this)),
                    i.data.type === a.l.ERROR && (null == (e = this.onError) || e.call(this));
            }),
            l(this, "handleError", (i) => {
                var t;
                null == (t = this.onError) || t.call(this, i);
            }),
            (this.canvasId = (0, n.A)()),
            (this.assetUrl = e),
            (this.assetData = r),
            (this.onInitialDraw = h),
            (this.onError = d),
            (this.observer = new IntersectionObserver(this.handleVisibilityChange)),
            this.observer.observe(i),
            o
                ? (this.initializationPromise = c().then(() => {
                      var s, n, l;
                      null == (s = this.worker) || s.addEventListener("message", this.handleMessage),
                          null == (n = this.worker) || n.addEventListener("error", this.handleError);
                      let h = i.transferControlToOffscreen();
                      null == (l = this.worker) ||
                          l.postMessage(
                              {
                                  type: a.l.INITIALIZE,
                                  animationId: t,
                                  assetUrl: e,
                                  assetData: r,
                                  canvas: h,
                                  canvasId: this.canvasId,
                                  isVisible: this.isVisible,
                                  shouldAnimate: this.shouldAnimate,
                              },
                              [h],
                          ),
                          (this.isInitialized = !0);
                  }))
                : (this.initializationPromise = I().then(() => {
                      (this.lottieView = new s({
                          canvas: i,
                          id: t,
                          assetUrl: e,
                          assetData: r,
                          isVisible: this.isVisible,
                          shouldAnimate: this.shouldAnimate,
                          onInitialDraw: h,
                          onError: d,
                      })),
                          (this.isInitialized = !0);
                  }));
    }
}
