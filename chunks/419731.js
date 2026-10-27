n.d(t, { CJ: () => a, L2: () => l, f3: () => s });
var i = n(768803);
function r(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function a(e) {
    if (null == e) return;
    let t = {};
    for (let n of Object.values(i.o)) {
        let i = r(e.sections[n]?.acked_at);
        null != i && (t[n] = i);
    }
    return t;
}
function s(e, t) {
    let n = r(e);
    return null != n && null != t && n > t;
}
function l(e, t) {
    if (null == t) return !1;
    let n = r(e?.updated_at);
    return null != n && n > t;
}
