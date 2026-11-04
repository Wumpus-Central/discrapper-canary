var r = n(855986),
    i = n(734057),
    c = n(71393),
    a = n(576705),
    l = n(652215);
n.d(
    e,
    {},
    {
        A: function (t) {
            let e = (0, r.bG)([c.A], () => c.A.getGuild(t.guildId)),
                n = (0, r.bG)([i.A], () => i.A.getChannel(t.channelId)),
                o = (0, r.bG)([a.A], () => a.A.can(l.xBc.ADMINISTRATOR, e)),
                E = (0, r.bG)([a.A], () => a.A.can(l.xBc.MANAGE_MESSAGES, n));
            return { isEntryAdmin: o, canEdit: o || E, canRemove: o || E };
        },
        b: function (t) {
            return (0, r.bG)([a.A], () => a.A.can(l.xBc.SEND_MESSAGES, t));
        },
    },
);
