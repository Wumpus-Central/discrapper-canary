"use strict";
n.d(t, {
    Eq: () => s,
    O9: () => c,
    PZ: () => i,
    Sb: () => u,
    W: () => h,
    _F: () => a,
    bf: () => l,
    ko: () => _,
    n3: () => p,
    nR: () => r,
    oD: () => o,
    od: () => d,
    vv: () => f,
});
let r = "ROLE_SUBSCRIPTIONS",
    i = "APPLICATION_SUBSCRIPTION_SUBSECTION";
var s = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.GUILD = "guild"), e;
    })({}),
    a = (function (e) {
        return (e.TRY_IT_OUT = "try_it_out"), (e.GUILD_TAG = "guild_tag"), e;
    })({}),
    o = (function (e) {
        return (
            (e[(e.PRELOADED_USER_SETTINGS = 1)] = "PRELOADED_USER_SETTINGS"),
            (e[(e.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = "FRECENCY_AND_FAVORITES_SETTINGS"),
            (e[(e.TEST_SETTINGS = 3)] = "TEST_SETTINGS"),
            e
        );
    })({}),
    l = (function (e) {
        return (
            (e.USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety"),
            (e.USER_SETTINGS_ACTIVITY_PRIVACY = "user_settings_activity_privacy"),
            (e.SERVER_PRIVACY_MODAL = "server_privacy_modal"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.INFREQUENT_USER_ACTION = 0)] = "INFREQUENT_USER_ACTION"),
            (e[(e.FREQUENT_USER_ACTION = 10)] = "FREQUENT_USER_ACTION"),
            (e[(e.SLOW_USER_ACTION = 20)] = "SLOW_USER_ACTION"),
            (e[(e.AUTOMATED = 30)] = "AUTOMATED"),
            (e[(e.DAILY = 86400)] = "DAILY"),
            e
        );
    })({});
function c() {
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
var d = (function (e) {
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
    _ = (function (e) {
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
let f = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512,
    },
    p = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048,
    };
var h = (function (e) {
    return (e.USER = "user"), (e.STREAM = "stream"), e;
})({});
