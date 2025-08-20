n.d(t, { W: () => i });
var l = n(592125),
    r = n(496675),
    a = n(981631);
function i(e) {
    let t = l.Z.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        i = null == t ? void 0 : t.isForumChannel();
    return n || (r.Z.can(a.Plq.ATTACH_FILES, t) && r.Z.can(a.Plq.SEND_MESSAGES, t) && !i);
}
