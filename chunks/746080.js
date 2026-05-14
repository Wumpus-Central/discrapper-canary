"use strict";
n.d(t, { Gr: () => l, T4: () => d, VV: () => s, aQ: () => _, jq: () => o, lx: () => c, mP: () => u, qW: () => a });
var i,
    r,
    s =
        (((i = {}).ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (i.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
        (i.GAME_SHOP = "game-shop"),
        (i.GUILD_SHOP = "shop"),
        (i.MEMBER_APPLICATIONS = "member-applications"),
        (i.GUILD_HOME = "@home"),
        (i.CHANNEL_BROWSER = "channel-browser"),
        (i.GUILD_ONBOARDING = "onboarding"),
        (i.CUSTOMIZE_COMMUNITY = "customize-community"),
        (i.MEMBER_SAFETY = "member-safety"),
        (i.GUILD_BOOSTS = "boosts"),
        (i.GAME_SERVERS = "game-servers"),
        (i.REPORT_TO_MOD = "report-to-mod"),
        i);
let a = new Set(Object.values(s));
function o(e) {
    return a.has(e);
}
function l(e, t) {
    return `${e}-${t}`;
}
function u(e) {
    return !!e?.includes("@home");
}
let c = Object.freeze({
    GUILD_FEED_REMOVED: 1,
    PINNED: 2,
    ACTIVE_CHANNELS_REMOVED: 4,
    REQUIRE_TAG: 16,
    IS_SPAM: 32,
    IS_GUILD_RESOURCE_CHANNEL: 128,
    CLYDE_AI: 256,
    IS_SCHEDULED_FOR_DELETION: 512,
    IS_MEDIA_CHANNEL: 1024,
    SUMMARIES_DISABLED: 2048,
    IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192,
    IS_BROADCASTING: 16384,
    HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768,
    IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536,
    OBFUSCATED: 131072,
    IS_MODERATOR_REPORT_CHANNEL: 524288,
    IS_SPOILER_CHANNEL: 2097152,
    IS_GAME_INVITES_CHANNEL: 4194304,
});
var d =
    (((r = {}).GUILD_HOME = "home"),
    (r.SERVER_GUIDE = "guide"),
    (r.CHANNEL_BROWSER = "browse"),
    (r.CUSTOMIZE_COMMUNITY = "customize"),
    (r.LINKED_ROLES = "linked-roles"),
    r);
let _ = new Set(Object.values(d));
