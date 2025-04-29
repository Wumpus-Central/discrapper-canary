n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = n(981631).Ucd.AUTO;
function l(e) {
    s = e.mode;
}
class c extends (r = i.ZP.Store) {
    get mode() {
        return s;
    }
}
a(c, 'displayName', 'VideoQualityModeStore');
let u = new c(o.Z, { SET_CHANNEL_VIDEO_QUALITY_MODE: l });
