n.d(t, { Co: () => a }), n(417597);
var i = n(734057),
    l = n(661191);
function a(e, t) {
    if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
    let n = i.A.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let a = i.A.getChannel(n.parent_id);
    return a?.isMediaChannel() === !0;
}
