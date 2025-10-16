n.d(t, { Z: () => d }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
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
let s = new Set();
function l(e) {
    let { enabled: t, mode: n } = e;
    return t ? s.add(n) : s.delete(n), (s = new Set(s)), !0;
}
function c(e) {
    let { renderDebugModes: t } = e;
    s = new Set(t);
}
class u extends (r = i.ZP.Store) {
    hasRenderDebugMode(e) {
        return s.has(e);
    }
    getRenderDebugModes() {
        return s;
    }
}
o(u, "displayName", "OverlayDevtoolsStore");
let d = new u(a.Z, {
    OVERLAY_RENDER_DEBUG_MODE: l,
    OVERLAY_INITIALIZE: c,
});
