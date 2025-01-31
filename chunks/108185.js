a.d(e, {
    QV: () => c,
    XL: () => s,
    Y: () => i,
    nl: () => _
});
var r = a(696486),
    n = a(152228),
    o = a(395848);
function _(t) {
    return 'number' == typeof t && isFinite(t);
}
function i(t, e, a, { ...o }) {
    let _ = (0, r.XU)(t).start_timestamp;
    return (
        _ && _ > e && 'function' == typeof t.updateStartTime && t.updateStartTime(e),
        (0, n._d)(t, () => {
            let t = (0, n.qp)({
                startTime: e,
                ...o
            });
            return t && t.end(a), t;
        })
    );
}
function c() {
    return o.m && o.m.addEventListener && o.m.performance;
}
function s(t) {
    return t / 1000;
}
