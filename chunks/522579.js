n.d(t, { z9: () => a }), n(399606);
var i = n(592125),
    l = n(709054);
function a(e, t) {
    if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
    let n = i.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let a = i.Z.getChannel(n.parent_id);
    return (null == a ? void 0 : a.isMediaChannel()) === !0;
}
