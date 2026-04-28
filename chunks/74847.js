n.d(t, { t: () => r });
var a = n(734057),
    i = n(576705),
    l = n(652215);
function r(e) {
    let t = a.A.getChannel(e),
        n = t?.isPrivate(),
        r = t?.isForumChannel();
    return n || (i.A.can(l.xBc.ATTACH_FILES, t) && i.A.can(l.xBc.SEND_MESSAGES, t) && !r);
}
