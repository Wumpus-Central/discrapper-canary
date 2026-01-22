n.d(t, {
    t: () => s,
});
var r = n(734057),
    i = n(576705),
    a = n(652215);

function s(e) {
    let t = r.A.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        s = null == t ? void 0 : t.isForumChannel();
    return n || (i.A.can(a.xBc.ATTACH_FILES, t) && i.A.can(a.xBc.SEND_MESSAGES, t) && !s);
}
