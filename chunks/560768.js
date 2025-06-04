n.d(t, { Z: () => o }), n(997841);
var r = n(630388),
    i = n(620662),
    a = n(981631);
function o(e, t, n, o, s) {
    let l = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, i.Z)(t, a.xjy.JOIN) || null == l) return !1;
    let c = o.getApplication(l);
    return !(null == c || (0, r.yE)(c.flags, a.udG.EMBEDDED) || (e.isPrivate() && s.isBlocked(e.getRecipientId()))) && n.shouldShowEducation(l);
}
