let s;
t.d(i, { default: () => w }), t(323874), t(14289), t(35956), t(321073);
var r,
    a = t(132500),
    n =
        (((r = {})[(r.DROP = 0)] = "DROP"),
        (r[(r.INITIALIZE = 1)] = "INITIALIZE"),
        (r[(r.VISIBILITY_CHANGE = 2)] = "VISIBILITY_CHANGE"),
        (r[(r.STATE_CHANGE = 3)] = "STATE_CHANGE"),
        (r[(r.FIRST_DRAW = 4)] = "FIRST_DRAW"),
        (r[(r.ERROR = 5)] = "ERROR"),
        r),
    o = t(795521);
let h = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
    l = "u" > typeof OffscreenCanvas,
    d = [],
    I = new Map(),
    c = new Map(),
    u = (0, o.u)(async () => {
        for (let e = 0; e < h; e++) {
            let e = new Worker(new URL("/assets/" + t.u("52029"), t.b));
            d.push({ worker: e, numActive: 0 });
        }
    }),
    v = (0, o.u)(async () => {
        s = (await t.e("70959").then(t.bind(t, 787570))).default;
    });
l ? u() : v();
class w {
    assetUrl;
    assetData;
    canvasId;
    lottieView;
    observer;
    isVisible = !1;
    isInitialized = !1;
    initializationPromise;
    shouldAnimate = !1;
    onInitialDraw;
    onError;
    constructor({ canvas: e, animationId: i, assetUrl: t, assetData: r, onInitialDraw: o, onError: h }) {
        (this.canvasId = (0, a.A)()),
            (this.assetUrl = t),
            (this.assetData = r),
            (this.onInitialDraw = o),
            (this.onError = h),
            (this.observer = new IntersectionObserver(this.handleVisibilityChange)),
            this.observer.observe(e),
            l
                ? (this.initializationPromise = u().then(() => {
                      this.worker?.addEventListener("message", this.handleMessage),
                          this.worker?.addEventListener("error", this.handleError);
                      let s = e.transferControlToOffscreen();
                      this.worker?.postMessage(
                          {
                              type: n.INITIALIZE,
                              animationId: i,
                              assetUrl: t,
                              assetData: r,
                              canvas: s,
                              canvasId: this.canvasId,
                              isVisible: this.isVisible,
                              shouldAnimate: this.shouldAnimate,
                          },
                          [s],
                      ),
                          (this.isInitialized = !0);
                  }))
                : (this.initializationPromise = v().then(() => {
                      (this.lottieView = new s({
                          canvas: e,
                          id: i,
                          assetUrl: t,
                          assetData: r,
                          isVisible: this.isVisible,
                          shouldAnimate: this.shouldAnimate,
                          onInitialDraw: o,
                          onError: h,
                      })),
                          (this.isInitialized = !0);
                  }));
    }
    get workerIndex() {
        let e = I.get(this.canvasId);
        if (null == e) {
            let i = c.get(this.assetUrl);
            if (null != i) e = i;
            else {
                let i = d[0]?.numActive ?? 0;
                for (let [t, s] of d.entries()) s.numActive <= i && ((i = s.numActive), (e = t));
                c.set(this.assetUrl, e);
            }
            I.set(this.canvasId, e), d[e].numActive++;
        }
        return e;
    }
    get worker() {
        let e = this.workerIndex;
        if (null == d[e]) throw Error(`No worker in pool at index ${e}`);
        return d[e].worker;
    }
    async drop() {
        if ((await this.initializationPromise, l)) {
            this.worker?.removeEventListener("message", this.handleMessage),
                this.worker?.removeEventListener("error", this.handleError),
                this.worker?.postMessage({ canvasId: this.canvasId, type: n.DROP });
            let e = I.get(this.canvasId);
            if (null == e) throw Error(`No worker index assigned for asset ${this.canvasId}`);
            I.delete(this.canvasId), d[e].numActive--;
        } else this.lottieView?.drop();
        this.observer.disconnect();
    }
    handleVisibilityChange = (e) => {
        let i = e[e.length - 1].isIntersecting;
        if (i !== this.isVisible) {
            if (((this.isVisible = i), !this.isInitialized)) return;
            l
                ? this.worker?.postMessage({ canvasId: this.canvasId, type: n.VISIBILITY_CHANGE, isVisible: i })
                : this.lottieView?.setVisibility(i);
        }
    };
    handleMessage = (e) => {
        e.data.type === n.FIRST_DRAW && this.onInitialDraw?.(), e.data.type === n.ERROR && this.onError?.();
    };
    handleError = (e) => {
        this.onError?.(e);
    };
    setState(e, i) {
        (this.shouldAnimate = e),
            this.isInitialized &&
                (l
                    ? this.worker?.postMessage({
                          canvasId: this.canvasId,
                          type: n.STATE_CHANGE,
                          shouldAnimate: e,
                          nextFrame: i,
                      })
                    : this.lottieView?.setState(e, i));
    }
}
