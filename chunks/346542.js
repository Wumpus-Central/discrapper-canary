var i = n(294630);
n(107123);
var r = n(698441),
    a = n(95701),
    s = n(172799);
n.d(
    t,
    { Xd: () => s.Xd },
    {
        G4: function (e) {
            return e.target_type === i.y.STREAM && null != e.target_user;
        },
        On: function (e) {
            return "number" == typeof e.type
                ? e.type
                : e.type === s.Xd.GROUP_DM || (null != e.channel && (0, a.MK)(e.channel.type))
                  ? s.Xd.GROUP_DM
                  : e.type === s.Xd.FRIEND || (null == e.guild && null != e.inviter)
                    ? s.Xd.FRIEND
                    : s.Xd.GUILD;
        },
        d4: function (e) {
            return e.target_type === i.y.ROLE_SUBSCRIPTIONS_PURCHASE;
        },
        ly: function (e) {
            let t = e.guild_scheduled_event;
            return null != t && (0, r.d6)(t);
        },
        oK: function (e) {
            return e.target_type === i.y.EMBEDDED_APPLICATION;
        },
    },
);
