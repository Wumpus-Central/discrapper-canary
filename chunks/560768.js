n.d(t, { Z: () => a }), n(789020);
var r = n(630388),
    i = n(620662),
    o = n(981631);
function a(e, t, n, a) {
    let s = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, i.Z)(t, o.xjy.JOIN) || null == s) return !1;
    let l = a.getApplication(s);
    return !(null == l || (0, r.yE)(l.flags, o.udG.EMBEDDED)) && n.shouldShowEducation(s);
}
