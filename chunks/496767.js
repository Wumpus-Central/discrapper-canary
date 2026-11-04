var i = n(855986),
    r = n(71393),
    a = n(576705),
    s = n(709977),
    l = n(652215);
n.d(
    t,
    {},
    {
        W: function (e) {
            let t = (0, i.bG)([r.A], () => r.A.getGuild(e));
            return (
                null != t &&
                t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                a.A.can(l.xBc.KICK_MEMBERS, t) &&
                (0, s.Qd)(t)
            );
        },
        h: function (e) {
            let t = r.A.getGuild(e);
            return (
                null != t &&
                t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                a.A.can(l.xBc.KICK_MEMBERS, t)
            );
        },
    },
);
