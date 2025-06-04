n.d(t, { Z: () => a }), n(997841);
var r = n(630388),
    i = n(620662),
    o = n(981631);
function a(e, t, n, a, s) {
    let l = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, i.Z)(t, o.xjy.JOIN) || null == l) return !1;
    let c = a.getApplication(l);
    return !(null == c || (0, r.yE)(c.flags, o.udG.EMBEDDED) || (e.isPrivate() && s.isBlocked(e.getRecipientId()))) && n.shouldShowEducation(l);
}
