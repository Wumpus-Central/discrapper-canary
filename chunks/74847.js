c.d(a, { t: () => s });
var t = c(734057),
    e = c(576705),
    i = c(652215);
function s(n) {
    let a = t.A.getChannel(n),
        c = a?.isPrivate(),
        s = a?.isForumChannel();
    return c || (e.A.can(i.xBc.ATTACH_FILES, a) && e.A.can(i.xBc.SEND_MESSAGES, a) && !s);
}
