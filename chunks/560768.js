n.d(t, { Z: () => o }), n(997841);
var r = n(630388),
    i = n(620662),
    a = n(981631);
function o(e, t, n, o) {
    let s = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, i.Z)(t, a.xjy.JOIN) || null == s) return !1;
    let l = o.getApplication(s);
    return !(null == l || (0, r.yE)(l.flags, a.udG.EMBEDDED)) && n.shouldShowEducation(s);
}
