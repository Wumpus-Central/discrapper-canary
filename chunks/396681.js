n.d(t, { A: () => r });
var s = n(492462);
function r(e) {
    let t = null != e.hash && "" !== e.hash ? (0, s.parse)(e.hash) : null;
    if (t?.token != null) return t.token;
    let n = null != e.search && "" !== e.search ? (0, s.parse)(e.search) : null;
    return n?.token != null ? n.token : null;
}
