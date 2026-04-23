let s;
t.d(i, { default: () => v }), t(323874), t(14289), t(35956), t(321073);
var r = t(835245),
    a = t(872379),
    n = t(795521);
let o = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
    h = "u" > typeof OffscreenCanvas,
    l = [],
    d = new Map(),
    I = new Map(),
    c = (0, n.u)(async () => {
        for (let e = 0; e < o; e++) {
            let e = new Worker(new URL("/assets/" + t.u("56565"), t.b));
            l.push({ worker: e, numActive: 0 });
        }
    }),
    u = (0, n.u)(async () => {
        s = (await t.e("70959").then(t.bind(t, 787570))).default;
    });
h ? c() : u();
class v {
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
    constructor({ canvas: e, animationId: i, assetUrl: t, assetData: n, onInitialDraw: o, onError: l }) {
        (this.canvasId = (0, r.A)()),
            (this.assetUrl = t),
            (this.assetData = n),
            (this.onInitialDraw = o),
            (this.onError = l),
            (this.observer = new IntersectionObserver(this.handleVisibilityChange)),
            this.observer.observe(e),
            h
                ? (this.initializationPromise = c().then(() => {
                      this.worker?.addEventListener("message", this.handleMessage),
                          this.worker?.addEventListener("error", this.handleError);
                      let s = e.transferControlToOffscreen();
                      this.worker?.postMessage(
                          {
                              type: a.l.INITIALIZE,
                              animationId: i,
                              assetUrl: t,
                              assetData: n,
                              canvas: s,
                              canvasId: this.canvasId,
                              isVisible: this.isVisible,
                              shouldAnimate: this.shouldAnimate,
                          },
                          [s],
                      ),
                          (this.isInitialized = !0);
                  }))
                : (this.initializationPromise = u().then(() => {
                      (this.lottieView = new s({
                          canvas: e,
                          id: i,
                          assetUrl: t,
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
            let i = I.get(this.assetUrl);
            if (null != i) e = i;
            else {
                let i = l[0]?.numActive ?? 0;
                for (let [t, s] of l.entries()) s.numActive <= i && ((i = s.numActive), (e = t));
                I.set(this.assetUrl, e);
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
                this.worker?.postMessage({ canvasId: this.canvasId, type: a.l.DROP });
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
                ? this.worker?.postMessage({ canvasId: this.canvasId, type: a.l.VISIBILITY_CHANGE, isVisible: i })
                : this.lottieView?.setVisibility(i);
        }
    };
    handleMessage = (e) => {
        e.data.type === a.l.FIRST_DRAW && this.onInitialDraw?.(), e.data.type === a.l.ERROR && this.onError?.();
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
                          type: a.l.STATE_CHANGE,
                          shouldAnimate: e,
                          nextFrame: i,
                      })
                    : this.lottieView?.setState(e, i));
    }
}
