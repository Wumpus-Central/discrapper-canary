i.d(t, { c: () => n });
var l = i(734057);
function n(e, t) {
    let i = l.A.getChannel(t);
    return null != i && e.bot && i.isPrivate() && null == i.rawRecipients.find((t) => t.id === e.id);
}
