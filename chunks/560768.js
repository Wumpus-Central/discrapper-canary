n.d(t, { Z: () => s }), n(789020);
var i = n(630388),
    r = n(620662),
    a = n(981631);
function s(e, t, n, s) {
    let o = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, r.Z)(t, a.xjy.JOIN) || null == o) return !1;
    let l = s.getApplication(o);
    return !(null == l || (0, i.yE)(l.flags, a.udG.EMBEDDED)) && n.shouldShowEducation(o);
}
