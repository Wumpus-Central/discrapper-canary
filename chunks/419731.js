n.d(t, { CJ: () => a, L2: () => l, R8: () => o, f3: () => s, uM: () => d });
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
function o(e, t) {
    if (null == e || null == t) return t ?? e;
    let n = { ...e };
    for (let e of Object.values(i.o)) {
        let i = t[e];
        null != i && i > (n[e] ?? 0) && (n[e] = i);
    }
    return n;
}
function d(e, t) {
    return null == t || l(e, t);
}
