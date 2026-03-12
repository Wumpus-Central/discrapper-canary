"use strict";
n.d(t, {
    Eq: () => l,
    Ew: () => p,
    MJ: () => a,
    O9: () => g,
    PZ: () => i,
    Sb: () => E,
    Ss: () => o,
    V5: () => s,
    W: () => y,
    Yu: () => _,
    _F: () => c,
    bf: () => m,
    d1: () => f,
    ko: () => I,
    kq: () => u,
    n3: () => S,
    nR: () => r,
    oD: () => h,
    od: () => A,
    vv: () => T,
});
let r = "ROLE_SUBSCRIPTIONS",
    i = "APPLICATION_SUBSCRIPTION_SUBSECTION",
    s = "VOICE_SUBSECTION",
    a = "SOUNDBOARD_SUBSECTION",
    o = "VIDEO_SUBSECTION";
var l = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.GUILD = "guild"), (e.TRY_IT_OUT = "try_it_out"), e;
    })({}),
    u = (function (e) {
        return (e.CUSTOM_APP_ICONS = "custom_app_icon"), e;
    })({}),
    c = (function (e) {
        return (e.TRY_IT_OUT = "try_it_out"), (e.GUILD_TAG = "guild_tag"), e;
    })({}),
    d = (function (e) {
        return (e.DISABLE_ACCOUNT = "disable_account"), e;
    })({}),
    _ = (function (e) {
        return (e.LEGACY_CHAT_INPUT = "legacy_chat_input"), e;
    })({}),
    f = (function (e) {
        return (
            (e.DM_SAFETY_ALERTS_V2 = "dm_safety_alerts_v2"),
            (e.MESSAGE_REQUESTS_V2 = "message_requests_v2"),
            (e.EXPLICIT_MEDIA_REDACTION_V2 = "explicit_media_redaction_v2"),
            (e.RESTRICTED_ACCOUNTS = "restricted_accounts"),
            e
        );
    })({});
let p = {
    AccountScrollPositions: d,
    ProfileCustomizationScrollPositions: c,
    AccessibilityScrollPositions: _,
    AppearanceScrollPositions: u,
    ContentAndSocialScrollPositions: f,
};
var h = (function (e) {
        return (
            (e[(e.PRELOADED_USER_SETTINGS = 1)] = "PRELOADED_USER_SETTINGS"),
            (e[(e.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = "FRECENCY_AND_FAVORITES_SETTINGS"),
            (e[(e.TEST_SETTINGS = 3)] = "TEST_SETTINGS"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e.USER_SETTINGS_PRIVACY_SAFETY = "user_settings_privacy_safety"),
            (e.USER_SETTINGS_ACTIVITY_PRIVACY = "user_settings_activity_privacy"),
            (e.SERVER_PRIVACY_MODAL = "server_privacy_modal"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e[(e.INFREQUENT_USER_ACTION = 0)] = "INFREQUENT_USER_ACTION"),
            (e[(e.FREQUENT_USER_ACTION = 10)] = "FREQUENT_USER_ACTION"),
            (e[(e.SLOW_USER_ACTION = 20)] = "SLOW_USER_ACTION"),
            (e[(e.AUTOMATED = 30)] = "AUTOMATED"),
            (e[(e.DAILY = 86400)] = "DAILY"),
            e
        );
    })({});
function g() {
    return {
        protoToSave: void 0,
        timeout: void 0,
        timeoutDelay: Number.MIN_SAFE_INTEGER,
        rateLimited: !1,
        cleanupFuncs: [],
        loaded: !1,
        loading: !1,
        triggeredMigrations: !1,
        offlineEditDataVersion: void 0,
    };
}
var A = (function (e) {
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
    I = (function (e) {
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
let T = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512,
    },
    S = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048,
    };
var y = (function (e) {
    return (e.USER = "user"), (e.STREAM = "stream"), e;
})({});
