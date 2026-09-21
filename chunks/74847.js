t.d(a, { t: () => i });
var n = t(734057),
    l = t(576705),
    s = t(652215);
function i(e) {
    let a = n.A.getChannel(e),
        t = a?.isPrivate(),
        i = a?.isForumChannel();
    return t || (l.A.can(s.xBc.ATTACH_FILES, a) && l.A.can(s.xBc.SEND_MESSAGES, a) && !i);
}
