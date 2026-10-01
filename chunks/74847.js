l.d(a, { t: () => i });
var t = l(734057),
    n = l(576705),
    s = l(652215);
function i(e) {
    let a = t.A.getChannel(e),
        l = a?.isPrivate(),
        i = a?.isForumChannel();
    return l || (n.A.can(s.xBc.ATTACH_FILES, a) && n.A.can(s.xBc.SEND_MESSAGES, a) && !i);
}
