n.d(t, { W: () => i });
var r = n(592125),
    l = n(496675),
    a = n(981631);
function i(e) {
    let t = r.Z.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        i = null == t ? void 0 : t.isForumChannel();
    return n || (l.Z.can(a.Plq.ATTACH_FILES, t) && l.Z.can(a.Plq.SEND_MESSAGES, t) && !i);
}
