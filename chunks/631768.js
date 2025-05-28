n.d(t, { Z: () => u });
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
o(c, 'displayName', 'VideoQualityModeStore');
let u = new c(a.Z, { SET_CHANNEL_VIDEO_QUALITY_MODE: l });
