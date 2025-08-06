n.d(t, { Z: () => c });
var r = n(442837),
    i = n(931261),
    o = n(9156),
    a = n(398758),
    s = n(981631),
    l = n(176505);
function c(e) {
    var t;
    let n = (0, a.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : s.kod),
        c = (0, r.e7)([o.ZP], () => null != e && o.ZP.isChannelRecordOrParentOptedIn(e)),
        u = (0, i.g)(null != (t = null == e ? void 0 : e.guild_id) ? t : s.kod);
    if (null == e) return !1;
    let d = u && e.hasFlag(l.zZ.IS_GUILD_RESOURCE_CHANNEL);
    return n && !d && !c && !e.isThread();
}
