n.d(t, {
    LN: () => s,
    dj: () => _,
    hj: () => l
});
var r = n(798681),
    i = n(450109);
let a = 10 * n(70956).Z.Millis.SECOND,
    o = 15;
function s() {
    return r.w.isIncomingVideoEnabled() && Date.now() - r.w.lastIncomingVideoEnabledChangeTime() > a;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
        r = i.Z.getAccumulatedPerformanceStats(e, t, 'short'),
        a = i.Z.getAccumulatedPerformanceStats(e, t, 'long');
    return null == r || null == a || r.numDatapoints < n || a.numDatapoints < n
        ? null
        : {
              short: r,
              long: a
          };
}
let c = 30,
    u = 15,
    d = 8,
    f = 3;
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? f : e <= 15 ? d : e <= 30 ? u : c;
}
