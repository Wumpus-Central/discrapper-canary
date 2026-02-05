n.d(t, { t: () => r });
var i = n(734057),
    l = n(576705),
    a = n(652215);
function r(e) {
    let t = i.A.getChannel(e),
        n = t?.isPrivate(),
        r = t?.isForumChannel();
    return n || (l.A.can(a.xBc.ATTACH_FILES, t) && l.A.can(a.xBc.SEND_MESSAGES, t) && !r);
}
