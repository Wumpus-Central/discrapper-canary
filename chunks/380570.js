n.d(t, { Z: () => u }), n(47120);
var r = n(748780),
    i = n(570140),
    l = n(317770),
    a = n(716578),
    o = n(928518);
function s(e, t, n) {
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
        o.Z.addChangeListener(this.handlePopoutWindowChange), i.Z.subscribe('WINDOW_FOCUS', this.handleMainWindowFocus);
    }
    _terminate() {
        o.Z.removeChangeListener(this.handlePopoutWindowChange), i.Z.unsubscribe('WINDOW_FOCUS', this.handleMainWindowFocus), this.injectWindowAnimationFrame(window);
    }
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        r.Z.inject.RequestAnimationFrame(t), r.Z.inject.CancelAnimationFrame(n), a.f.setRAF(t, n);
    }
    constructor(...e) {
        super(...e),
            s(this, 'handleMainWindowFocus', (e) => {
                e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
            }),
            s(this, 'handlePopoutWindowChange', () => {
                let e = o.Z.getWindowKeys().find((e) => o.Z.getWindowFocused(e));
                if (null == e) return this.injectWindowAnimationFrame(window);
                let t = o.Z.getWindow(e);
                if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
                this.injectWindowAnimationFrame(t);
            });
    }
}
let u = new c();
