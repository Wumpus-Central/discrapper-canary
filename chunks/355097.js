"use strict";
n.d(t, {
    Eq: () => u,
    O9: () => p,
    PZ: () => l,
    Sb: () => f,
    W: () => A,
    Xx: () => r,
    YL: () => a,
    YP: () => s,
    _A: () => i,
    _F: () => c,
    bf: () => _,
    ko: () => m,
    n3: () => g,
    nR: () => o,
    oD: () => d,
    od: () => h,
    vv: () => E,
});
var r = (function (e) {
        return (
            (e[(e.MINUTES_15 = 900)] = "MINUTES_15"),
            (e[(e.HOURS_1 = 3600)] = "HOURS_1"),
            (e[(e.HOURS_3 = 10800)] = "HOURS_3"),
            (e[(e.HOURS_8 = 28800)] = "HOURS_8"),
            (e[(e.HOURS_24 = 86400)] = "HOURS_24"),
            (e[(e.ALWAYS = -1)] = "ALWAYS"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.REDUCED_MOTION = "REDUCED_MOTION"), (e.REDUCED_MOTION_STICKERS = "REDUCED_MOTION_STICKERS"), e;
    })({}),
    s = (function (e) {
        return (e.AUTO = "auto"), (e.COMPACT = "compact"), (e.COZY = "cozy"), e;
    })({}),
    a = (function (e) {
        return (e.GOOGLE = "google"), (e.BING = "bing"), (e.DUCKDUCKGO = "duckduckgo"), (e.CUSTOM = "custom"), e;
    })({});
let o = "ROLE_SUBSCRIPTIONS",
    l = "APPLICATION_SUBSCRIPTION_SUBSECTION";
var u = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.GUILD = "guild"), e;
    })({}),
    c = (function (e) {
        return (e.TRY_IT_OUT = "try_it_out"), (e.GUILD_TAG = "guild_tag"), e;
    })({}),
    d = (function (e) {
        return (
            (e[(e.PRELOADED_USER_SETTINGS = 1)] = "PRELOADED_USER_SETTINGS"),
            (e[(e.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = "FRECENCY_AND_FAVORITES_SETTINGS"),
            (e[(e.TEST_SETTINGS = 3)] = "TEST_SETTINGS"),
            e
        );
    })({}),
    _ = (function (e) {
        return (
            (e.USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety"),
            (e.USER_SETTINGS_ACTIVITY_PRIVACY = "user_settings_activity_privacy"),
            (e.SERVER_PRIVACY_MODAL = "server_privacy_modal"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e[(e.INFREQUENT_USER_ACTION = 0)] = "INFREQUENT_USER_ACTION"),
            (e[(e.FREQUENT_USER_ACTION = 10)] = "FREQUENT_USER_ACTION"),
            (e[(e.SLOW_USER_ACTION = 20)] = "SLOW_USER_ACTION"),
            (e[(e.AUTOMATED = 30)] = "AUTOMATED"),
            (e[(e.DAILY = 86400)] = "DAILY"),
            e
        );
    })({});
function p() {
    return {
        protoToSave: void 0,
        timeout: void 0,
        timeoutDelay: Number.MIN_SAFE_INTEGER,
        rateLimited: !1,
        cleanupFuncs: [],
        errorCallbacks: [],
        loaded: !1,
        loading: !1,
        triggeredMigrations: !1,
        offlineEditDataVersion: void 0,
    };
}
var h = (function (e) {
        return (
            (e.ACCOUNT = "account"),
            (e.ACCOUNT_STANDING = "account-standing"),
            (e.ACCOUNT_ACCOUNT_STANDING = "account/account-standing"),
            (e.PROFILE_CUSTOMIZATION = "profile-customization"),
            (e.CONTENT_AND_SOCIAL = "content-and-social"),
            (e.CONNECTED_GAMES = "connected-games"),
            (e.CONTENT_AND_SOCIAL_CONNECTED_GAMES = "content-and-social/connected-games"),
            (e.DATA_AND_PRIVACY = "data-and-privacy"),
            (e.PRIVACY_AND_SAFETY = "privacy-and-safety"),
            (e.FAMILY_CENTER = "family-center"),
            (e.SESSIONS = "sessions"),
            (e.AUTHORIZED_APPS = "authorized-apps"),
            (e.CONNECTIONS = "connections"),
            (e.CLIPS = "clips"),
            (e.PREMIUM = "premium"),
            (e.GUILD_BOOSTING = "guild-boosting"),
            (e.SUBSCRIPTIONS = "subscriptions"),
            (e.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS = "subscriptions/role-subscriptions"),
            (e.INVENTORY = "inventory"),
            (e.BILLING = "billing"),
            (e.APPEARANCE = "appearance"),
            (e.ACCESSIBILITY = "accessibility"),
            (e.VOICE = "voice"),
            (e.POGGERMODE = "poggermode"),
            (e.TEXT = "text"),
            (e.NOTIFICATIONS = "notifications"),
            (e.EMAILS = "emails"),
            (e.NOTIFICATIONS_EMAILS = "notifications/emails"),
            (e.KEYBINDS = "keybinds"),
            (e.LANGUAGE = "language"),
            (e.WINDOWS = "windows"),
            (e.LINUX = "linux"),
            (e.STREAMER_MODE = "streamer-mode"),
            (e.ADVANCED = "advanced"),
            (e.ACTIVITY_PRIVACY = "activity-privacy"),
            (e.REGISTERED_GAMES = "registered-games"),
            (e.OVERLAY = "overlay"),
            (e.EXPERIMENTS = "experiments"),
            (e.DEVELOPER_OPTIONS = "developer-options"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.CONFIRM_START = 0)] = "CONFIRM_START"),
            (e[(e.CONFIRM_CODE = 1)] = "CONFIRM_CODE"),
            (e[(e.CHANGE_EMAIL_REASONS = 2)] = "CHANGE_EMAIL_REASONS"),
            (e[(e.CHANGE_EMAIL_WARNING = 3)] = "CHANGE_EMAIL_WARNING"),
            (e[(e.EMAIL_AND_PASSWORD = 4)] = "EMAIL_AND_PASSWORD"),
            (e[(e.COMPLETE = 5)] = "COMPLETE"),
            e
        );
    })({});
let E = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512,
    },
    g = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048,
    };
var A = (function (e) {
    return (e.USER = "user"), (e.STREAM = "stream"), e;
})({});
