i.d(t, { X5: () => a, _S: () => d, bh: () => r.i, l3: () => o.t, lh: () => s });
var r = i(958027),
    n = i(781322),
    o = i(410903);
function a() {
    let e = (0, n.t)();
    if (!e) return "other";
    let t = e.toLowerCase();
    return t.includes("edg/") || t.includes("edgios/")
        ? "edge"
        : t.includes("samsungbrowser/")
          ? "samsung_browser"
          : t.includes("opr/") || t.includes("opera") || t.includes("opios/") || t.includes("opt/")
            ? "opera"
            : t.includes("chrome") || t.includes("crios")
              ? "chrome"
              : t.includes("firefox") || t.includes("fxios")
                ? "firefox"
                : t.includes("safari")
                  ? "safari"
                  : "other";
}
function s(e, t) {
    let i = () => "desktop" !== t && !(0, r.i)() && "landscape" === e.current;
    return {
        get isLandscapeMobile() {
            return i();
        },
        subscribe: (t) =>
            e.subscribe(() => {
                t(i());
            }),
        cleanup: () => e.cleanup(),
    };
}
function l() {
    if ("u" < typeof window || "u" < typeof screen) return !0;
    if ("function" == typeof window.matchMedia) return !window.matchMedia("(orientation: landscape)").matches;
    if (screen.orientation?.type?.includes("portrait")) return !0;
    if (screen.orientation?.type?.includes("landscape")) return !1;
    let e = window.orientation;
    return "number" == typeof e ? 0 === Math.abs(e) : window.innerHeight >= window.innerWidth;
}
function c(e) {
    return e ? "portrait" : "landscape";
}
var d = class {
    constructor() {
        if (
            ((this._current = c(l())),
            (this.subscribers = new Set()),
            (this.orientationChangeHandler = this.handleOrientationChange.bind(this)),
            (this.resizeHandler = this.handleResize.bind(this)),
            (this.mediaQueryList = null),
            (this.mediaQueryHandler = this.handleResize.bind(this)),
            "u" < typeof window)
        )
            return;
        screen.orientation
            ? screen.orientation.addEventListener("change", this.orientationChangeHandler)
            : window.addEventListener("orientationchange", this.orientationChangeHandler),
            window.addEventListener("resize", this.resizeHandler),
            "function" == typeof window.matchMedia &&
                ((this.mediaQueryList = window.matchMedia("(orientation: landscape)")),
                this.mediaQueryList.addEventListener("change", this.mediaQueryHandler));
    }
    get current() {
        return this._current;
    }
    subscribe(e) {
        return (
            this.subscribers.add(e),
            e(this._current),
            () => {
                this.subscribers.delete(e);
            }
        );
    }
    cleanup() {
        "u" > typeof window &&
            (screen.orientation
                ? screen.orientation.removeEventListener("change", this.orientationChangeHandler)
                : window.removeEventListener("orientationchange", this.orientationChangeHandler),
            window.removeEventListener("resize", this.resizeHandler),
            this.mediaQueryList?.removeEventListener("change", this.mediaQueryHandler),
            (this.mediaQueryList = null),
            this.subscribers.clear());
    }
    handleOrientationChange() {
        setTimeout(() => {
            this.updateState(),
                document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                window.focus();
        }, 0);
    }
    handleResize() {
        this.updateState();
    }
    updateState() {
        let e = c(l());
        if (e !== this._current) for (let t of ((this._current = e), this.subscribers)) t(this._current);
    }
};
