n.d(t, {
    $x: () => c,
    AB: () => o,
    EC: () => f,
    HY: () => d,
    ME: () => s,
    Qk: () => a,
    Vg: () => i,
    Z7: () => u,
    oC: () => r,
    zZ: () => l
}),
    n(47120);
var r = (function (e) {
    return (e.ROLE_SUBSCRIPTIONS = 'role-subscriptions'), (e.GUILD_SHOP = 'shop'), (e.MEMBER_APPLICATIONS = 'member-applications'), (e.GUILD_HOME = '@home'), (e.CHANNEL_BROWSER = 'channel-browser'), (e.GUILD_ONBOARDING = 'onboarding'), (e.CUSTOMIZE_COMMUNITY = 'customize-community'), (e.MEMBER_SAFETY = 'member-safety'), (e.GUILD_BOOSTS = 'boosts'), e;
})({});
let i = new Set(Object.values(r));
function o(e) {
    return i.has(e);
}
function a(e, t) {
    return ''.concat(e, '-').concat(t);
}
function s(e) {
    return !!(null == e ? void 0 : e.includes('@home'));
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
        OBFUSCATED: 131072
    }),
    c = 1024,
    u = 4096;
var d = (function (e) {
    return (e.GUILD_HOME = 'home'), (e.SERVER_GUIDE = 'guide'), (e.CHANNEL_BROWSER = 'browse'), (e.CUSTOMIZE_COMMUNITY = 'customize'), (e.LINKED_ROLES = 'linked-roles'), e;
})({});
let f = new Set(Object.values(d));
