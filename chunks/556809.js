(n.d(t, { Z: () => h }), n(388685));
var r = n(147913),
    i = n(710845),
    a = n(522474),
    o = n(32300),
    s = n(371651),
    l = n(610394),
    c = n(501787);
function u(e, t, n) {
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
let d = new i.Z('OverlayWindowRAFManager'),
    f = window.requestAnimationFrame.bind(window),
    _ = (e) => {
        try {
            let t = a.Z.getWindow(c.$J);
            if (null == t || 'function' != typeof t.requestAnimationFrame || !s.default.isAnyOverlayRendering()) return f(e);
            let n = null !== l.ZP.getFocusedRunningGame(),
                r = null != t && t.document.hasFocus();
            if (n || r) return t.requestAnimationFrame(e);
        } catch (e) {
            d.error('RAF redirect failed, falling back to original', e);
        }
        return f(e);
    };
class p extends r.Z {
    handlePatchOverlayWindowRaf() {
        let { enabled: e } = (0, o.td)('OverlayWindowRAFManager');
        !e || __OVERLAY__ || (window.requestAnimationFrame = _);
    }
    _terminate() {
        window.requestAnimationFrame = f;
    }
    constructor(...e) {
        (super(...e), u(this, 'actions', { OVERLAY_UPDATE_OVERLAY_STATE: this.handlePatchOverlayWindowRaf }));
    }
}
let h = new p();
