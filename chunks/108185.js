r.d(t, {
    QV: () => s,
    XL: () => c,
    Y: () => _,
    nl: () => o,
});
var n = r(696486),
    a = r(152228),
    i = r(395848);
function o(e) {
    return "number" == typeof e && isFinite(e);
}
function _(e, t, r, { ...i }) {
    let o = (0, n.XU)(e).start_timestamp;
    return (
        o && o > t && "function" == typeof e.updateStartTime && e.updateStartTime(t),
        (0, a._d)(e, () => {
            let e = (0, a.qp)({
                startTime: t,
                ...i,
            });
            return e && e.end(r), e;
        })
    );
}
function s() {
    return i.m && i.m.addEventListener && i.m.performance;
}
function c(e) {
    return e / 1000;
}
