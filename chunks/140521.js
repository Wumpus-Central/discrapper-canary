let t;
s.d(i, { default: () => w }), s(323874), s(14289), s(35956), s(321073);
var a = s(132500),
    r = s(872379),
    n = s(795521);
let o = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
    h = "u" > typeof OffscreenCanvas,
    l = [],
    d = new Map(),
    c = new Map(),
    v = (0, n.u)(async () => {
        for (let e = 0; e < o; e++) {
            let e = new Worker(new URL("/assets/" + s.u("56565"), s.b));
            l.push({ worker: e, numActive: 0 });
        }
    }),
    I = (0, n.u)(async () => {
        t = (await s.e("22609").then(s.bind(s, 889544))).default;
    });
h ? v() : I();
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
    constructor({ canvas: e, animationId: i, assetUrl: s, assetData: n, onInitialDraw: o, onError: l }) {
        (this.canvasId = (0, a.A)()),
            (this.assetUrl = s),
            (this.assetData = n),
            (this.onInitialDraw = o),
            (this.onError = l),
            (this.observer = new IntersectionObserver(this.handleVisibilityChange)),
            this.observer.observe(e),
            h
                ? (this.initializationPromise = v().then(() => {
                      this.worker?.addEventListener("message", this.handleMessage),
                          this.worker?.addEventListener("error", this.handleError);
                      let t = e.transferControlToOffscreen();
                      this.worker?.postMessage(
                          {
                              type: r.l.INITIALIZE,
                              animationId: i,
                              assetUrl: s,
                              assetData: n,
                              canvas: t,
                              canvasId: this.canvasId,
                              isVisible: this.isVisible,
                              shouldAnimate: this.shouldAnimate,
                          },
                          [t],
                      ),
                          (this.isInitialized = !0);
                  }))
                : (this.initializationPromise = I().then(() => {
                      (this.lottieView = new t({
                          canvas: e,
                          id: i,
                          assetUrl: s,
                          assetData: n,
                          isVisible: this.isVisible,
                          shouldAnimate: this.shouldAnimate,
                          onInitialDraw: o,
                          onError: l,
                      })),
                          (this.isInitialized = !0);
                  }));
    }
    get workerIndex() {
        let e = d.get(this.canvasId);
        if (null == e) {
            let i = c.get(this.assetUrl);
            if (null != i) e = i;
            else {
                let i = l[0]?.numActive ?? 0;
                for (let [s, t] of l.entries()) t.numActive <= i && ((i = t.numActive), (e = s));
                c.set(this.assetUrl, e);
            }
            d.set(this.canvasId, e), l[e].numActive++;
        }
        return e;
    }
    get worker() {
        let e = this.workerIndex;
        if (null == l[e]) throw Error(`No worker in pool at index ${e}`);
        return l[e].worker;
    }
    async drop() {
        if ((await this.initializationPromise, h)) {
            this.worker?.removeEventListener("message", this.handleMessage),
                this.worker?.removeEventListener("error", this.handleError),
                this.worker?.postMessage({ canvasId: this.canvasId, type: r.l.DROP });
            let e = d.get(this.canvasId);
            if (null == e) throw Error(`No worker index assigned for asset ${this.canvasId}`);
            d.delete(this.canvasId), l[e].numActive--;
        } else this.lottieView?.drop();
        this.observer.disconnect();
    }
    handleVisibilityChange = (e) => {
        let i = e[e.length - 1].isIntersecting;
        if (i !== this.isVisible) {
            if (((this.isVisible = i), !this.isInitialized)) return;
            h
                ? this.worker?.postMessage({ canvasId: this.canvasId, type: r.l.VISIBILITY_CHANGE, isVisible: i })
                : this.lottieView?.setVisibility(i);
        }
    };
    handleMessage = (e) => {
        e.data.type === r.l.FIRST_DRAW && this.onInitialDraw?.(), e.data.type === r.l.ERROR && this.onError?.();
    };
    handleError = (e) => {
        this.onError?.(e);
    };
    setState(e, i) {
        (this.shouldAnimate = e),
            this.isInitialized &&
                (h
                    ? this.worker?.postMessage({
                          canvasId: this.canvasId,
                          type: r.l.STATE_CHANGE,
                          shouldAnimate: e,
                          nextFrame: i,
                      })
                    : this.lottieView?.setState(e, i));
    }
}
