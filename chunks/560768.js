(i.d(e, { Z: () => o }), i(997841));
var n = i(630388),
    r = i(620662),
    s = i(981631);
function o(t, e, i, o, l) {
    let a = null == e ? void 0 : e.application_id;
    if (null == t || null == e || !(0, r.Z)(e, s.xjy.JOIN) || null == a) return !1;
    let d = o.getApplication(a);
    return !(null == d || (0, n.yE)(d.flags, s.udG.EMBEDDED) || (t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId()))) && i.shouldShowEducation(a);
}
