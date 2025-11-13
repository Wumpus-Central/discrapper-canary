a.d(e, {
    QV: () => E,
    XL: () => c,
    Y: () => i,
    nl: () => o,
});
var r = a(696486),
    _ = a(152228),
    n = a(395848);
function o(t) {
    return "number" == typeof t && isFinite(t);
}
function i(t, e, a, { ...n }) {
    let o = (0, r.XU)(t).start_timestamp;
    return (
        o && o > e && "function" == typeof t.updateStartTime && t.updateStartTime(e),
        (0, _._d)(t, () => {
            let t = (0, _.qp)({
                startTime: e,
                ...n,
            });
            return t && t.end(a), t;
        })
    );
}
function E() {
    return n.m && n.m.addEventListener && n.m.performance;
}
function c(t) {
    return t / 1000;
}
