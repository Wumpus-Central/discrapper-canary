n(47120);
var i = n(748780),
    r = n(570140),
    l = n(317770),
    a = n(716578),
    s = n(928518);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c extends l.Z {
    _initialize() {
        s.Z.addChangeListener(this.handlePopoutWindowChange), r.Z.subscribe('WINDOW_FOCUS', this.handleMainWindowFocus);
    }
    _terminate() {
        s.Z.removeChangeListener(this.handlePopoutWindowChange), r.Z.unsubscribe('WINDOW_FOCUS', this.handleMainWindowFocus), this.injectWindowAnimationFrame(window);
    }
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        i.Z.inject.RequestAnimationFrame(t), i.Z.inject.CancelAnimationFrame(n), a.f.setRAF(t, n);
    }
    constructor(...e) {
        super(...e),
            o(this, 'handleMainWindowFocus', (e) => {
                e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
            }),
            o(this, 'handlePopoutWindowChange', () => {
                let e = s.Z.getWindowKeys().find((e) => s.Z.getWindowFocused(e));
                if (null == e) return this.injectWindowAnimationFrame(window);
                let t = s.Z.getWindow(e);
                if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
                this.injectWindowAnimationFrame(t);
            });
    }
}
t.Z = new c();
