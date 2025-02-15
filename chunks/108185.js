a.d(e, {
    QV: () => c,
    XL: () => s,
    Y: () => i,
    nl: () => o
});
var r = a(696486),
    n = a(152228),
    _ = a(395848);
function o(t) {
    return 'number' == typeof t && isFinite(t);
}
function i(t, e, a, { ..._ }) {
    let o = (0, r.XU)(t).start_timestamp;
    return (
        o && o > e && 'function' == typeof t.updateStartTime && t.updateStartTime(e),
        (0, n._d)(t, () => {
            let t = (0, n.qp)({
                startTime: e,
                ..._
            });
            return t && t.end(a), t;
        })
    );
}
function c() {
    return _.m && _.m.addEventListener && _.m.performance;
}
function s(t) {
    return t / 1000;
}
