n.d(t, { Z: () => l }), n(997841);
var i = n(95015),
    r = n(620662),
    o = n(981631);
function l(e, t, n, l, s) {
    let a = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, r.Z)(t, o.xjy.JOIN) || null == a) return !1;
    let c = l.getApplication(a);
    return (
        !(
            null == c ||
            (0, i.yE)(c.flags, o.udG.EMBEDDED) ||
            (e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId()))
        ) && n.shouldShowEducation(a)
    );
}
