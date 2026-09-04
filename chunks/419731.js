function i(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function l(e) {
    return i(e?.updated_at);
}
function s(e, t) {
    let n = i(e);
    return null != n && null != t && n > t;
}
function r(e, t) {
    if (t?.ackedWishlistUpdatedAt == null) return !1;
    let n = l(e);
    return null != n && n > t.ackedWishlistUpdatedAt;
}
n.d(t, { SR: () => l, Wh: () => r, f3: () => s });
