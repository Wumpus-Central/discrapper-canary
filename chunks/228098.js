n.d(t, { A: () => c });
var l = n(17928),
    i = n(473529),
    s = n(543465),
    a = n(395504),
    r = n(652215),
    o = n(746080);
function c(e) {
    let t = (0, a.jN)(e?.getGuildId() != null ? e.guild_id : r.eGj),
        n = (0, l.bG)([s.Ay], () => null != e && s.Ay.isChannelRecordOrParentOptedIn(e)),
        c = (0, i.d)(e?.guild_id ?? r.eGj);
    if (null == e) return !1;
    let d = c && e.hasFlag(o.lx.IS_GUILD_RESOURCE_CHANNEL);
    return t && !d && !n && !e.isThread();
}
