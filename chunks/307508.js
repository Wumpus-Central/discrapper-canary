n.d(t, { Q: () => o });
var r = n(442837),
    i = n(592125),
    a = n(594174);
function o(e) {
    return (0, r.e7)([i.Z, a.default], () => {
        let t = i.Z.getChannel(e);
        if ((null == t ? void 0 : t.isDM()) !== !0) return !1;
        let n = a.default.getUser(t.getRecipientId());
        return (null == n ? void 0 : n.bot) === !0;
    });
}
