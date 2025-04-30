n.d(t, { h9: () => o });
var r = n(442837),
    i = n(592125),
    a = n(594174);
function o(e) {
    return s((0, r.e7)([i.Z], () => i.Z.getChannel(e)));
}
function s(e) {
    if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
    let t = a.default.getUser(e.getRecipientId());
    return null != t && t.bot;
}
n(291574);
