n.d(t, { t: () => a });
var i = n(734057),
    l = n(576705),
    s = n(652215);
function a(e) {
    let t = i.A.getChannel(e),
        n = t?.isPrivate(),
        a = t?.isForumChannel();
    return n || (l.A.can(s.xBc.ATTACH_FILES, t) && l.A.can(s.xBc.SEND_MESSAGES, t) && !a);
}
