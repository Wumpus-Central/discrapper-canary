n.d(t, { Z: () => a });
var r = n(399606),
    i = n(608949),
    l = n(326660),
    o = n(639777);
function a(e) {
    var t, n, a;
    let s = e.premiumSubscriberCount,
        c = (0, o.Z)(e),
        u = (0, r.e7)([i.Z], () => i.Z.getNotificationStateForGuild(e.id), [e.id]);
    if (c && s !== (null !== (t = null == u ? void 0 : u.lastBoostCount) && void 0 !== t ? t : 0) && s - (null !== (n = null == u ? void 0 : u.lastBoostCount) && void 0 !== n ? n : 0) > 0)
        return {
            type: l.o.UNREAD,
            count: s - (null !== (a = null == u ? void 0 : u.lastBoostCount) && void 0 !== a ? a : 0)
        };
}
