t.d(i, { c: () => l });
var n = t(734057);
function l(e, i) {
    let t = n.A.getChannel(i);
    return null != t && e.bot && t.isPrivate() && null == t.rawRecipients.find((i) => i.id === e.id);
}
