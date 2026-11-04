var l = n(855986),
    i = n(473529),
    s = n(543465),
    a = n(395504);
n(652215);
var r = n(746080);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, a.jN)(e?.getGuildId() != null ? e.guild_id : "null"),
                n = (0, l.bG)([s.Ay], () => null != e && s.Ay.isChannelRecordOrParentOptedIn(e)),
                o = (0, i.d)(e?.guild_id ?? "null");
            if (null == e) return !1;
            let c = o && e.hasFlag(r.lx.IS_GUILD_RESOURCE_CHANNEL);
            return t && !c && !n && !e.isThread();
        },
    },
);
