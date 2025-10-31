n.d(t, { z9: () => l }), n(399606);
var r = n(592125),
    i = n(709054);
function l(e, t) {
    if (e !== i.default.castChannelIdAsMessageId(t)) return !1;
    let n = r.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let l = r.Z.getChannel(n.parent_id);
    return (null == l ? void 0 : l.isMediaChannel()) === !0;
}
