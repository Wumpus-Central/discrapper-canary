l.d(t, { c: () => i });
var n = l(734057);
function i(e, t) {
    let l = n.A.getChannel(t);
    return null != l && e.bot && l.isPrivate() && null == l.rawRecipients.find((t) => t.id === e.id);
}
