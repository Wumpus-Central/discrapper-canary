n.d(t, { c: () => l });
var i = n(734057);
function l(e, t) {
    let n = i.A.getChannel(t);
    return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find((t) => t.id === e.id);
}
