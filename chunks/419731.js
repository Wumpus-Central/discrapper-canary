function i(t) {
    if (null == t) return null;
    let e = Date.parse(t);
    return Number.isNaN(e) ? null : e;
}
function n(t) {
    return i(t?.updated_at);
}
function r(t, e) {
    let l = i(t);
    return null != l && null != e && l > e;
}
function s(t, e) {
    if (e?.ackedWishlistUpdatedAt == null) return !1;
    let l = n(t);
    return null != l && l > e.ackedWishlistUpdatedAt;
}
l.d(e, { SR: () => n, Wh: () => s, f3: () => r });
