n.d(t, { W: () => o });
var r = n(592125),
    i = n(496675),
    a = n(981631);
function o(e) {
    let t = r.Z.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        o = null == t ? void 0 : t.isForumChannel();
    return n || (i.Z.can(a.Plq.ATTACH_FILES, t) && i.Z.can(a.Plq.SEND_MESSAGES, t) && !o);
}
