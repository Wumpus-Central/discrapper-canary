n.d(t, {
    HG: () => h,
    Iv: () => d,
    XN: () => p
});
var r = n(704215),
    i = n(823385),
    l = n(327689),
    a = n(421176),
    o = n(456065),
    s = n(683743),
    c = n(823379),
    u = n(981631);
let d = 'lastHiddenChannelNotice',
    p = [
        {
            type: u.vID.CLAN_ADMIN_UPSELL,
            dismissibleContentType: r.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
        },
        {
            type: u.vID.GUILD_BOOSTING,
            store: a.Z,
            dismissibleContentType: r.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
        },
        {
            type: u.vID.GUILD_BANNER,
            store: l.Z,
            dismissibleContentType: r.z.CHANNEL_NOTICE_GUILD_BANNER
        },
        {
            type: u.vID.INVITE,
            store: s.Z,
            dismissibleContentType: r.z.CHANNEL_NOTICE_INVITE
        },
        {
            type: u.vID.HUB_LINK,
            store: o.Z,
            dismissibleContentType: r.z.CHANNEL_NOTICE_HUBLINK
        },
        {
            type: u.vID.QUICKSWITCHER,
            store: i.Z,
            dismissibleContentType: r.z.CHANNEL_NOTICE_QUICKSWITCHER
        },
        {
            type: u.vID.LINKED_ROLES_ADMIN,
            dismissibleContentType: r.z.LINKED_ROLE_ADMIN_GUILD
        }
    ],
    h = p.map((e) => e.store).filter(c.lm);
