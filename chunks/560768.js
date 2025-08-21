i.d(t, { Z: () => o }), i(997841);
var n = i(630388),
    r = i(620662),
    s = i(981631);
function o(e, t, i, o, l) {
    let a = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, r.Z)(t, s.xjy.JOIN) || null == a) return !1;
    let d = o.getApplication(a);
    return (
        !(
            null == d ||
            (0, n.yE)(d.flags, s.udG.EMBEDDED) ||
            (e.isPrivate() && l.isBlockedOrIgnored(e.getRecipientId()))
        ) && i.shouldShowEducation(a)
    );
}
