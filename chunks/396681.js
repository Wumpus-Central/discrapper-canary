s.d(e, { A: () => n });
var r = s(492462);
function n(t) {
    let e = null != t.hash && "" !== t.hash ? (0, r.parse)(t.hash) : null;
    if (e?.token != null) return e.token;
    let s = null != t.search && "" !== t.search ? (0, r.parse)(t.search) : null;
    return s?.token != null ? s.token : null;
}
