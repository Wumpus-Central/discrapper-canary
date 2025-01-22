r.d(n, {
    $x: function () {
        return f;
    },
    AB: function () {
        return l;
    },
    EC: function () {
        return h;
    },
    HY: function () {
        return a;
    },
    ME: function () {
        return c;
    },
    Qk: function () {
        return u;
    },
    Vg: function () {
        return s;
    },
    Z7: function () {
        return p;
    },
    oC: function () {
        return i;
    },
    zZ: function () {
        return d;
    }
});
var i,
    a,
    o = r(47120);
!(function (e) {
    (e.ROLE_SUBSCRIPTIONS = 'role-subscriptions'), (e.GUILD_SHOP = 'shop'), (e.MEMBER_APPLICATIONS = 'member-applications'), (e.GUILD_HOME = '@home'), (e.CHANNEL_BROWSER = 'channel-browser'), (e.GUILD_ONBOARDING = 'onboarding'), (e.CUSTOMIZE_COMMUNITY = 'customize-community'), (e.MEMBER_SAFETY = 'member-safety');
})(i || (i = {}));
let s = new Set(Object.values(i));
function l(e) {
    return s.has(e);
}
function u(e, n) {
    return ''.concat(e, '-').concat(n);
}
function c(e) {
    return !!(null == e ? void 0 : e.includes('@home'));
}
let d = Object.freeze({
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
    f = 1024,
    p = 4096;
!(function (e) {
    (e.GUILD_HOME = 'home'), (e.SERVER_GUIDE = 'guide'), (e.CHANNEL_BROWSER = 'browse'), (e.CUSTOMIZE_COMMUNITY = 'customize'), (e.LINKED_ROLES = 'linked-roles');
})(a || (a = {}));
let h = new Set(Object.values(a));
