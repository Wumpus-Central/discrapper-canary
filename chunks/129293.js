r.d(t, { Z: () => s }), r(35282);
var n = r(593473);
function s(e) {
    let t = null != e.hash && '' !== e.hash ? (0, n.parse)(e.hash) : null;
    if ((null == t ? void 0 : t.token) != null) return t.token;
    let r = null != e.search && '' !== e.search ? (0, n.parse)(e.search) : null;
    return (null == r ? void 0 : r.token) != null ? r.token : null;
}
