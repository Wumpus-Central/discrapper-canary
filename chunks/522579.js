(n.d(t, { z9: () => o }), n(399606));
var r = n(592125),
    i = n(709054);
function o(e, t) {
    if (e !== i.default.castChannelIdAsMessageId(t)) return !1;
    let n = r.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let o = r.Z.getChannel(n.parent_id);
    return (null == o ? void 0 : o.isMediaChannel()) === !0;
}
