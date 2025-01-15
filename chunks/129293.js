n.d(e, {
    Z: function () {
        return r;
    }
});
var s = n(593473);
function r(t) {
    let e = null != t.hash && '' !== t.hash ? (0, s.parse)(t.hash) : null;
    if ((null == e ? void 0 : e.token) != null) return e.token;
    let n = null != t.search && '' !== t.search ? (0, s.parse)(t.search) : null;
    return (null == n ? void 0 : n.token) != null ? n.token : null;
}
