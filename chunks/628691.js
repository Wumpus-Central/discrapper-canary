n.d(t, { AR: () => d, UN: () => l, ul: () => o });
var i = n(734057),
    r = n(576705),
    a = n(287809),
    s = n(652215);
function l(e) {
    if (null == e) return !1;
    let t = e.id,
        n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function o(e) {
    return null != e && !s.MRS.NON_REPORTABLE.has(e.type) && l(e.author);
}
function d(e) {
    var t;
    let n;
    return (
        null != e &&
        o(e) &&
        ((t = e.getChannelId()),
        null != (n = i.A.getChannel(t)) &&
            (n.type === s.rbe.DM ||
                n.type === s.rbe.GROUP_DM ||
                r.A.canWithPartialContext(s.xBc.MANAGE_MESSAGES, { channelId: t })))
    );
}
