n.d(t, { Co: () => i }), n(417597);
var r = n(734057),
    l = n(661191);
function i(e, t) {
    if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
    let n = r.A.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let i = r.A.getChannel(n.parent_id);
    return (null == i ? void 0 : i.isMediaChannel()) === !0;
}
