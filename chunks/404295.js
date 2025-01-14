r.d(n, {
    h9: function () {
        return o;
    }
});
var i = r(442837),
    a = r(592125),
    s = r(594174);
function o(e) {
    return l((0, i.e7)([a.Z], () => a.Z.getChannel(e)));
}
r(291574);
function l(e) {
    if ((null == e ? void 0 : e.isDM()) !== !0) return !1;
    let n = s.default.getUser(e.getRecipientId());
    return null != n && n.bot;
}
