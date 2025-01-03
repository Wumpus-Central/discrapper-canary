n.d(t, {
    HG: function () {
        return m;
    },
    Iv: function () {
        return u;
    },
    XN: function () {
        return h;
    }
});
var i = n(704215),
    r = n(823385),
    l = n(327689),
    a = n(421176),
    s = n(456065),
    o = n(683743),
    c = n(823379),
    d = n(981631);
let u = 'lastHiddenChannelNotice',
    h = [
        {
            type: d.vID.CLAN_ADMIN_UPSELL,
            dismissibleContentType: i.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
        },
        {
            type: d.vID.GUILD_BOOSTING,
            store: a.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
        },
        {
            type: d.vID.GUILD_BANNER,
            store: l.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_GUILD_BANNER
        },
        {
            type: d.vID.INVITE,
            store: o.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_INVITE
        },
        {
            type: d.vID.HUB_LINK,
            store: s.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_HUBLINK
        },
        {
            type: d.vID.QUICKSWITCHER,
            store: r.Z,
            dismissibleContentType: i.z.CHANNEL_NOTICE_QUICKSWITCHER
        },
        {
            type: d.vID.LINKED_ROLES_ADMIN,
            dismissibleContentType: i.z.LINKED_ROLE_ADMIN_GUILD
        }
    ],
    m = h.map((e) => e.store).filter(c.lm);
