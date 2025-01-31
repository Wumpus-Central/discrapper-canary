s.d(t, { Z: () => r });
var n = s(593473);
function r(e) {
    let t = null != e.hash && '' !== e.hash ? (0, n.parse)(e.hash) : null;
    if ((null == t ? void 0 : t.token) != null) return t.token;
    let s = null != e.search && '' !== e.search ? (0, n.parse)(e.search) : null;
    return (null == s ? void 0 : s.token) != null ? s.token : null;
}
