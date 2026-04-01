"use strict";
n.d(t, { Gr: () => a, T4: () => u, VV: () => r, aQ: () => c, jq: () => s, lx: () => l, mP: () => o, qW: () => i });
var r = (function (e) {
    return (
        (e.ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (e.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
        (e.GAME_SHOP = "game-shop"),
        (e.GUILD_SHOP = "shop"),
        (e.MEMBER_APPLICATIONS = "member-applications"),
        (e.GUILD_HOME = "@home"),
        (e.CHANNEL_BROWSER = "channel-browser"),
        (e.GUILD_ONBOARDING = "onboarding"),
        (e.CUSTOMIZE_COMMUNITY = "customize-community"),
        (e.MEMBER_SAFETY = "member-safety"),
        (e.GUILD_BOOSTS = "boosts"),
        (e.GAME_SERVERS = "game-servers"),
        (e.REPORT_TO_MOD = "report-to-mod"),
        e
    );
})({});
let i = new Set(Object.values(r));
function s(e) {
    return i.has(e);
}
function a(e, t) {
    return `${e}-${t}`;
}
function o(e) {
    return !!e?.includes("@home");
}
let l = Object.freeze({
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
});
var u = (function (e) {
    return (
        (e.GUILD_HOME = "home"),
        (e.SERVER_GUIDE = "guide"),
        (e.CHANNEL_BROWSER = "browse"),
        (e.CUSTOMIZE_COMMUNITY = "customize"),
        (e.LINKED_ROLES = "linked-roles"),
        e
    );
})({});
let c = new Set(Object.values(u));
