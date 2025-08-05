(n.d(t, { z9: () => a }), n(399606));
var r = n(592125),
    i = n(709054);
function a(e, t) {
    if (e !== i.default.castChannelIdAsMessageId(t)) return !1;
    let n = r.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let a = r.Z.getChannel(n.parent_id);
    return (null == a ? void 0 : a.isMediaChannel()) === !0;
}
