n.d(t, { h9: () => s });
var i = n(442837),
    r = n(592125),
    a = n(594174);
function s(e) {
    return o((0, i.e7)([r.Z], () => r.Z.getChannel(e)));
}
function o(e) {
    if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
    let t = a.default.getUser(e.getRecipientId());
    return null != t && t.bot;
}
n(291574);
