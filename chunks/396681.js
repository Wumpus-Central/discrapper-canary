s.d(t, { A: () => n });
var r = s(492462);
function n(e) {
    let t = null != e.hash && "" !== e.hash ? (0, r.parse)(e.hash) : null;
    if (t?.token != null) return t.token;
    let s = null != e.search && "" !== e.search ? (0, r.parse)(e.search) : null;
    return s?.token != null ? s.token : null;
}
