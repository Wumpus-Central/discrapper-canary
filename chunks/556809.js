(n.d(t, { Z: () => g }), n(388685));
var r = n(147913),
    i = n(710845),
    a = n(522474),
    o = n(145597),
    s = n(41534),
    l = n(32300),
    c = n(371651),
    u = n(610394),
    d = n(501787);
function _(e, t, n) {
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
let f = new i.Z('OverlayWindowRAFManager'),
    p = window.requestAnimationFrame.bind(window),
    h = (e) => {
        try {
            let t = a.Z.getWindow(d.$J);
            if (null == t || 'function' != typeof t.requestAnimationFrame || !c.default.isAnyOverlayRendering()) return p(e);
            let n = null !== u.ZP.getFocusedRunningGame(),
                r = null != t && t.document.hasFocus();
            if (n || r) return t.requestAnimationFrame(e);
        } catch (e) {
            (f.error('RAF redirect failed, falling back to original', e), (0, s.D1)(e, u.ZP.getOverlayMethod((0, o.getPID)())));
        }
        return p(e);
    };
class m extends r.Z {
    handlePatchOverlayWindowRaf() {
        let { enabled: e } = (0, l.td)('OverlayWindowRAFManager');
        !e || __OVERLAY__ || (window.requestAnimationFrame = h);
    }
    _terminate() {
        window.requestAnimationFrame = p;
    }
    constructor(...e) {
        (super(...e), _(this, 'actions', { OVERLAY_UPDATE_OVERLAY_STATE: this.handlePatchOverlayWindowRaf }));
    }
}
let g = new m();
