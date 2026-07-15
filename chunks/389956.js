d.d(t, { X5: () => a, _S: () => b, bh: () => i.i, l3: () => c.t, lh: () => s });
var i = d(749378),
    e = d(768816);
d(827029);
var c = d(517666);
function a() {
    let l = (0, e.t)();
    if (!l) return "other";
    let t = l.toLowerCase();
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
function s(l, t) {
    let d = () => "desktop" !== t && !(0, i.i)() && "landscape" === l.current;
    return {
        get isLandscapeMobile() {
            return d();
        },
        subscribe: (t) =>
            l.subscribe(() => {
                t(d());
            }),
        cleanup: () => l.cleanup(),
    };
}
function n() {
    if ("u" < typeof window || "u" < typeof screen) return !0;
    if ("function" == typeof window.matchMedia) return !window.matchMedia("(orientation: landscape)").matches;
    if (screen.orientation?.type?.includes("portrait")) return !0;
    if (screen.orientation?.type?.includes("landscape")) return !1;
    let l = window.orientation;
    return "number" == typeof l ? 0 === Math.abs(l) : window.innerHeight >= window.innerWidth;
}
function Z(l) {
    return l ? "portrait" : "landscape";
}
var b = class {
    constructor() {
        if (
            ((this._current = Z(n())),
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
    subscribe(l) {
        return (
            this.subscribers.add(l),
            l(this._current),
            () => {
                this.subscribers.delete(l);
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
        let l = Z(n());
        if (l !== this._current) for (let t of ((this._current = l), this.subscribers)) t(this._current);
    }
};
