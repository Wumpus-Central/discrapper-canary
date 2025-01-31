n.d(t, { Z: () => c });
var i,
    r = n(442837),
    a = n(570140);
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
let o = n(981631).Ucd.AUTO;
function l(e) {
    o = e.mode;
}
class u extends (i = r.ZP.Store) {
    get mode() {
        return o;
    }
}
s(u, 'displayName', 'VideoQualityModeStore');
let c = new u(a.Z, { SET_CHANNEL_VIDEO_QUALITY_MODE: l });
