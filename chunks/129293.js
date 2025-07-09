(n.d(t, { Z: () => s }), n(35282));
var r = n(593473);
function s(e) {
    let t = null != e.hash && '' !== e.hash ? (0, r.parse)(e.hash) : null;
    if ((null == t ? void 0 : t.token) != null) return t.token;
    let n = null != e.search && '' !== e.search ? (0, r.parse)(e.search) : null;
    return (null == n ? void 0 : n.token) != null ? n.token : null;
}
