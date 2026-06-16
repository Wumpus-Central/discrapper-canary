"use strict";
n.d(t, { Q: () => o });
var i = n(302495),
    r = n(334465),
    s = n(901123);
let a = new Set([
    s.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    s.BV.APP_WITH_GIFT_CODE(":giftCode"),
    s.BV.APP,
    s.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    s.BV.SETTINGS(":section", ":subsection?"),
    s.BV.USER_GUILD_NOTIFICATION_SETTINGS(i.p.guildId()),
    s.BV.APPLICATION_LIBRARY_INVENTORY,
    s.BV.WELCOME(i.p.guildId({ optional: !0 }), i.p.channelId({ optional: !0 })),
    s.BV.GUILD_EVENT_DETAILS(i.p.guildId({ optional: !0 }), ":guildEventId"),
    s.BV.GUILD_SETTINGS(i.p.guildId(), ":section?", ":subsection?"),
    s.BV.CHANNEL_THREAD_VIEW(i.p.guildId(), i.p.channelId(), ":threadId", ":messageId?"),
    s.BV.CHANNEL(i.p.guildId(), i.p.channelId({ optional: !0 }), ":messageId?"),
    s.BV.ACTIVITY,
    s.BV.ACTIVITIES,
    s.BV.ACTIVITIES_HAPPENING_NOW,
    s.BV.ACTIVITY_DETAILS(":applicationId"),
    s.BV.APPLICATION_LIBRARY,
    s.BV.APPLICATION_STORE,
    s.BV.MESSAGE_REQUESTS,
    s.BV.COLLECTIBLES_SHOP,
    s.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    s.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    s.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    s.BV.GUILD_DISCOVERY,
    s.BV.QUEST_HOME_DEPRECATED,
    s.BV.QUEST_HOME,
    s.BV.ICYMI,
    s.BV.GLOBAL_DISCOVERY,
    s.BV.GUILD_MEMBER_VERIFICATION(i.p.guildId()),
    s.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(i.p.guildId(), ":inviteCode?"),
    s.BV.GUILD_BOOSTING_MARKETING(i.p.guildId()),
    s.BV.GUILD_FEATURE(":feature", i.p.guildId()),
    s.BV.FEATURE(":feature"),
    s.BV.FAMILY_CENTER,
    s.BV.APPLICATION_DIRECTORY,
    s.BV.GAME_SHOP(i.p.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
function o(e) {
    for (let t of a) if (null != (0, r.B)(e, { path: t })) return !0;
    return !1;
}
