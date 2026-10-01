function i(t) {
    if (null == t) return null;
    let e = Date.parse(t);
    return Number.isNaN(e) ? null : e;
}
function l(t, e) {
    let n = i(t);
    return null != n && null != e && n > e;
}
function s(t, e) {
    if (null == e) return !1;
    let n = i(t?.updated_at);
    return null != n && n > e.lastViewedAt;
}
n.d(e, { ds: () => s, f3: () => l });
