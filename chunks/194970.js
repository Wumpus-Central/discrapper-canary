n.d(t, { A: () => u }), n(896048);
var r = n(615300),
    i = n(365659),
    l = n(73153),
    a = n(272355),
    s = n(869146);
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
class c extends a.A {
    _initialize() {
        s.A.addChangeListener(this.handlePopoutWindowChange), l.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        s.A.removeChangeListener(this.handlePopoutWindowChange),
            l.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        r.A.inject.RequestAnimationFrame(t), r.A.inject.CancelAnimationFrame(n), i.W.setRAF(t, n);
    }
    constructor(...e) {
        super(...e),
            o(this, "handleMainWindowFocus", (e) => {
                e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
            }),
            o(this, "handlePopoutWindowChange", () => {
                let e = s.A.getWindowKeys().find((e) => s.A.getWindowFocused(e));
                if (null == e) return this.injectWindowAnimationFrame(window);
                let t = s.A.getWindow(e);
                if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
                this.injectWindowAnimationFrame(t);
            });
    }
}
let u = new c();
