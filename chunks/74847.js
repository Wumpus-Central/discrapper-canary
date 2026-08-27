n.d(a, { t: () => s });
var t = n(734057),
    i = n(576705),
    l = n(652215);
function s(e) {
    let a = t.A.getChannel(e),
        n = a?.isPrivate(),
        s = a?.isForumChannel();
    return n || (i.A.can(l.xBc.ATTACH_FILES, a) && i.A.can(l.xBc.SEND_MESSAGES, a) && !s);
}
