l.d(t, { W: () => s });
var a = l(592125),
    n = l(496675),
    i = l(981631);
function s(e) {
    let t = a.Z.getChannel(e),
        l = null == t ? void 0 : t.isPrivate(),
        s = null == t ? void 0 : t.isForumChannel();
    return l || (n.Z.can(i.Plq.ATTACH_FILES, t) && n.Z.can(i.Plq.SEND_MESSAGES, t) && !s);
}
