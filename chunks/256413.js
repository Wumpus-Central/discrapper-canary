n.d(t, { Z: () => c });
var r = n(442837),
    i = n(931261),
    l = n(9156),
    a = n(398758),
    o = n(981631),
    s = n(176505);
function c(e) {
    var t;
    let n = (0, a.DM)((null == e ? void 0 : e.getGuildId()) != null ? e.guild_id : o.kod),
        c = (0, r.e7)([l.ZP], () => null != e && l.ZP.isChannelRecordOrParentOptedIn(e)),
        u = (0, i.g)(null != (t = null == e ? void 0 : e.guild_id) ? t : o.kod);
    if (null == e) return !1;
    let d = u && e.hasFlag(s.zZ.IS_GUILD_RESOURCE_CHANNEL);
    return n && !d && !c && !e.isThread();
}
