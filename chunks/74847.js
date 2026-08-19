a.d(n, { t: () => i });
var t = a(734057),
    l = a(576705),
    s = a(652215);
function i(e) {
    let n = t.A.getChannel(e),
        a = n?.isPrivate(),
        i = n?.isForumChannel();
    return a || (l.A.can(s.xBc.ATTACH_FILES, n) && l.A.can(s.xBc.SEND_MESSAGES, n) && !i);
}
