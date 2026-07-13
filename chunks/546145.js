t.d(r, { A: () => l });
var u = t(287809),
    i = t(321191);
function l(e) {
    let r = u.default.getCurrentUser();
    return null == r ? null : null != e ? i.A.getGuildMemberProfile(r.id, e) : i.A.getUserProfile(r.id);
}
