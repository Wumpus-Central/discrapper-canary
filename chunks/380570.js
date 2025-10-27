n.d(t, { Z: () => u }), n(388685);
var r = n(748780),
    i = n(908670),
    l = n(570140),
    a = n(317770),
    s = n(928518);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class c extends a.Z {
    _initialize() {
        s.Z.addChangeListener(this.handlePopoutWindowChange), l.Z.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        s.Z.removeChangeListener(this.handlePopoutWindowChange),
            l.Z.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        r.Z.inject.RequestAnimationFrame(t), r.Z.inject.CancelAnimationFrame(n), i.f.setRAF(t, n);
    }
    constructor(...e) {
        super(...e),
            o(this, "handleMainWindowFocus", (e) => {
                e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
            }),
            o(this, "handlePopoutWindowChange", () => {
                let e = s.Z.getWindowKeys().find((e) => s.Z.getWindowFocused(e));
                if (null == e) return this.injectWindowAnimationFrame(window);
                let t = s.Z.getWindow(e);
                if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
                this.injectWindowAnimationFrame(t);
            });
    }
}
let u = new c();
