l.d(e, { t: () => i });
var t = l(734057),
    n = l(576705),
    s = l(652215);
function i(a) {
    let e = t.A.getChannel(a),
        l = e?.isPrivate(),
        i = e?.isForumChannel();
    return l || (n.A.can(s.xBc.ATTACH_FILES, e) && n.A.can(s.xBc.SEND_MESSAGES, e) && !i);
}
