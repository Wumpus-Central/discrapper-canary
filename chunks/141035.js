var l = n(550946),
    i = n(562153),
    r = n(806931),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            if (t.type === r.lp.ACTIVITY) return n?.name ?? null;
            let a = (0, l.t)(e.guild_id, t.user?.id);
            return i.Ay.getName(e.getGuildId(), e.id, t.user) + (a ? ` ${s.intl.string(s.t["pFO/Ph"])}` : "");
        },
    },
);
