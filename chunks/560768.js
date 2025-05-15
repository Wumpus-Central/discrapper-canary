n.d(t, { Z: () => s }), n(997841);
var r = n(630388),
    i = n(774226),
    o = n(620662),
    a = n(981631);
function s(e, t, n, s) {
    let l = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, o.Z)(t, a.xjy.JOIN) || null == l) return !1;
    let c = s.getApplication(l);
    return !(null == c || ((0, r.yE)(c.flags, a.udG.EMBEDDED) && !(0, i.Kb)(c))) && n.shouldShowEducation(l);
}
