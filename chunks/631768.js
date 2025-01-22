var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = r(981631).Ucd.AUTO;
function u(e) {
    l = e.mode;
}
class c extends (i = a.ZP.Store) {
    get mode() {
        return l;
    }
}
s(c, 'displayName', 'VideoQualityModeStore'), (n.Z = new c(o.Z, { SET_CHANNEL_VIDEO_QUALITY_MODE: u }));
