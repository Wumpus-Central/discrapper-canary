n.d(t, { W: () => r });
var i = n(592125);
function r(e, t) {
    let n = i.Z.getChannel(t);
    return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find((t) => t.id === e.id);
}
