n.d(t, { u: () => o }), n(388685);
var r = n(828700),
    i = n(930449),
    l = n(416145);
let a = new Set([
    l.Z5.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    l.Z5.APP_WITH_GIFT_CODE(":giftCode"),
    l.Z5.APP,
    l.Z5.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    l.Z5.SETTINGS(":section", ":subsection?"),
    l.Z5.USER_GUILD_NOTIFICATION_SETTINGS(i.H.guildId()),
    l.Z5.APPLICATION_LIBRARY_INVENTORY,
    l.Z5.WELCOME(i.H.guildId({ optional: !0 }), i.H.channelId({ optional: !0 })),
    l.Z5.GUILD_EVENT_DETAILS(i.H.guildId({ optional: !0 }), ":guildEventId"),
    l.Z5.GUILD_SETTINGS(i.H.guildId(), ":section?", ":subsection?"),
    l.Z5.CHANNEL_THREAD_VIEW(i.H.guildId(), i.H.channelId(), ":threadId", ":messageId?"),
    l.Z5.CHANNEL(i.H.guildId(), i.H.channelId({ optional: !0 }), ":messageId?"),
    l.Z5.ACTIVITY,
    l.Z5.ACTIVITIES,
    l.Z5.ACTIVITIES_HAPPENING_NOW,
    l.Z5.ACTIVITY_DETAILS(":applicationId"),
    l.Z5.APPLICATION_LIBRARY,
    l.Z5.APPLICATION_STORE,
    l.Z5.MESSAGE_REQUESTS,
    l.Z5.COLLECTIBLES_SHOP,
    l.Z5.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    l.Z5.GUILD_DISCOVERY,
    l.Z5.QUEST_HOME,
    l.Z5.QUEST_HOME_V2,
    l.Z5.ICYMI,
    l.Z5.GLOBAL_DISCOVERY,
    l.Z5.GUILD_MEMBER_VERIFICATION(i.H.guildId()),
    l.Z5.GUILD_MEMBER_VERIFICATION_FOR_HUB(i.H.guildId(), ":inviteCode?"),
    l.Z5.GUILD_BOOSTING_MARKETING(i.H.guildId()),
    l.Z5.GUILD_FEATURE(":feature", i.H.guildId()),
    l.Z5.FEATURE(":feature"),
    l.Z5.FAMILY_CENTER,
    l.Z5.APPLICATION_DIRECTORY,
    l.Z5.GAME_SHOP(i.H.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
function o(e) {
    for (let t of a) if (null != (0, r.LX)(e, { path: t })) return !0;
    return !1;
}
