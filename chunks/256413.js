n.d(t, { Z: () => c });
var i = n(442837),
    l = n(931261),
    a = n(9156),
    r = n(398758),
    s = n(981631),
    o = n(176505);
function c(e) {
    var t;
    let n = (0, r.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : s.kod),
        c = (0, i.e7)([a.ZP], () => null != e && a.ZP.isChannelRecordOrParentOptedIn(e)),
        d = (0, l.g)(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : s.kod);
    if (null == e) return !1;
    let u = d && e.hasFlag(o.zZ.IS_GUILD_RESOURCE_CHANNEL);
    return n && !u && !c && !e.isThread();
}
