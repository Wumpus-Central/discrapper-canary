n.d(t, {
    AR: () => f,
    UN: () => c,
    ul: () => u,
});
var r = n(734057),
    i = n(498642),
    a = n(576705),
    s = n(287809),
    o = n(652215);
let l = 50;
function c(e) {
    if (null == e) return !1;
    let t = e.id,
        n = s.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function u(e) {
    return null != e && c(e.author);
}
function d(e) {
    let t = r.A.getChannel(e);
    if (null == t) return !1;
    if (t.type === o.rbe.DM || t.type === o.rbe.GROUP_DM) return !0;
    if (a.A.canWithPartialContext(o.xBc.MANAGE_MESSAGES, { channelId: e })) {
        let e = i.A.getMemberCount(t.getGuildId());
        return null != e && e >= l;
    }
    return !1;
}
function f(e) {
    return null != e && u(e) && d(e.getChannelId());
}
