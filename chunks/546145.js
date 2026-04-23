n.d(t, { A: () => i });
var l = n(287809),
    a = n(622543);
function i(e) {
    let t = l.default.getCurrentUser();
    return null == t ? null : null != e ? a.A.getGuildMemberProfile(t.id, e) : a.A.getUserProfile(t.id);
}
