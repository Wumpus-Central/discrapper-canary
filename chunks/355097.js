n.d(t, {
    Eq: () => l,
    Ew: () => _,
    MJ: () => s,
    O9: () => E,
    PZ: () => i,
    Sb: () => g,
    Ss: () => o,
    V5: () => a,
    W: () => v,
    Yu: () => f,
    _F: () => u,
    bf: () => m,
    d1: () => p,
    ko: () => y,
    kq: () => c,
    n3: () => O,
    nR: () => r,
    oD: () => h,
    vv: () => b,
});
let r = "ROLE_SUBSCRIPTIONS",
    i = "APPLICATION_SUBSCRIPTION_SUBSECTION",
    a = "VOICE_SUBSECTION",
    s = "SOUNDBOARD_SUBSECTION",
    o = "VIDEO_SUBSECTION";
var l = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.GUILD = "guild"), (e.TRY_IT_OUT = "try_it_out"), e;
    })({}),
    c = (function (e) {
        return (e.CUSTOM_APP_ICONS = "custom_app_icon"), e;
    })({}),
    u = (function (e) {
        return (e.TRY_IT_OUT = "try_it_out"), (e.GUILD_TAG = "guild_tag"), e;
    })({}),
    d = (function (e) {
        return (e.DISABLE_ACCOUNT = "disable_account"), e;
    })({}),
    f = (function (e) {
        return (e.LEGACY_CHAT_INPUT = "legacy_chat_input"), e;
    })({}),
    p = (function (e) {
        return (
            (e.DM_SAFETY_ALERTS_V2 = "dm_safety_alerts_v2"),
            (e.MESSAGE_REQUESTS_V2 = "message_requests_v2"),
            (e.EXPLICIT_MEDIA_REDACTION_V2 = "explicit_media_redaction_v2"),
            (e.RESTRICTED_ACCOUNTS = "restricted_accounts"),
            e
        );
    })({});
let _ = {
    AccountScrollPositions: d,
    ProfileCustomizationScrollPositions: u,
    AccessibilityScrollPositions: f,
    AppearanceScrollPositions: c,
    ContentAndSocialScrollPositions: p,
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
    g = (function (e) {
        return (
            (e[(e.INFREQUENT_USER_ACTION = 0)] = "INFREQUENT_USER_ACTION"),
            (e[(e.FREQUENT_USER_ACTION = 10)] = "FREQUENT_USER_ACTION"),
            (e[(e.SLOW_USER_ACTION = 20)] = "SLOW_USER_ACTION"),
            (e[(e.AUTOMATED = 30)] = "AUTOMATED"),
            (e[(e.DAILY = 86400)] = "DAILY"),
            e
        );
    })({});

function E() {
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
var y = (function (e) {
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
let b = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512,
    },
    O = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048,
    };
var v = (function (e) {
    return (e.USER = "user"), (e.STREAM = "stream"), e;
})({});
