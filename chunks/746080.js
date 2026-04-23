"use strict";
n.d(t, { Gr: () => l, T4: () => d, VV: () => s, aQ: () => _, jq: () => o, lx: () => c, mP: () => u, qW: () => a });
var r,
    i,
    s =
        (((r = {}).ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (r.SERVER_MONETIZATION_ONBOARDING = "server-monetization-onboarding"),
        (r.GAME_SHOP = "game-shop"),
        (r.GUILD_SHOP = "shop"),
        (r.MEMBER_APPLICATIONS = "member-applications"),
        (r.GUILD_HOME = "@home"),
        (r.CHANNEL_BROWSER = "channel-browser"),
        (r.GUILD_ONBOARDING = "onboarding"),
        (r.CUSTOMIZE_COMMUNITY = "customize-community"),
        (r.MEMBER_SAFETY = "member-safety"),
        (r.GUILD_BOOSTS = "boosts"),
        (r.GAME_SERVERS = "game-servers"),
        (r.REPORT_TO_MOD = "report-to-mod"),
        r);
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
});
var d =
    (((i = {}).GUILD_HOME = "home"),
    (i.SERVER_GUIDE = "guide"),
    (i.CHANNEL_BROWSER = "browse"),
    (i.CUSTOMIZE_COMMUNITY = "customize"),
    (i.LINKED_ROLES = "linked-roles"),
    i);
let _ = new Set(Object.values(d));
