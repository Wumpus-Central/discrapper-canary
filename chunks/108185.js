_.d(e, {
    QV: () => i,
    XL: () => c,
    Y: () => E,
    nl: () => o,
});
var a = _(696486),
    r = _(152228),
    n = _(395848);
function o(t) {
    return "number" == typeof t && isFinite(t);
}
function E(t, e, _, { ...n }) {
    let o = (0, a.XU)(t).start_timestamp;
    return (
        o && o > e && "function" == typeof t.updateStartTime && t.updateStartTime(e),
        (0, r._d)(t, () => {
            let t = (0, r.qp)({
                startTime: e,
                ...n,
            });
            return t && t.end(_), t;
        })
    );
}
function i() {
    return n.m && n.m.addEventListener && n.m.performance;
}
function c(t) {
    return t / 1000;
}
