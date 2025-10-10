n.d(t, { W: () => i });
var l = n(592125),
    a = n(496675),
    r = n(981631);
function i(e) {
    let t = l.Z.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        i = null == t ? void 0 : t.isForumChannel();
    return n || (a.Z.can(r.Plq.ATTACH_FILES, t) && a.Z.can(r.Plq.SEND_MESSAGES, t) && !i);
}
