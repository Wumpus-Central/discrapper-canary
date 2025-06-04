n.d(t, {
    Ax: () => y,
    FY: () => p,
    GA: () => s,
    JC: () => b,
    KQ: () => h,
    NB: () => c,
    XZ: () => o,
    Y_: () => d,
    cP: () => a,
    f4: () => g,
    fy: () => E,
    gP: () => l,
    h1: () => u,
    ic: () => O,
    oX: () => r,
    rP: () => f,
    u0: () => I,
    vY: () => i,
    vc: () => v,
    yP: () => m
});
let r = 250,
    i = 762880,
    a = 'ROLE_SUBSCRIPTIONS',
    o = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    s = 'SOUNDBOARD_SUBSECTION',
    l = 'VIDEO_SUBSECTION';
var c = (function (e) {
        return (e.USER_PROFILE = 'user_profile'), (e.GUILD = 'guild'), (e.TRY_IT_OUT = 'try_it_out'), e;
    })({}),
    u = (function (e) {
        return (e.CUSTOM_APP_ICONS = 'custom_app_icon'), e;
    })({}),
    d = (function (e) {
        return (e.TRY_IT_OUT = 'try_it_out'), (e.GUILD_TAG = 'guild_tag'), e;
    })({}),
    f = (function (e) {
        return (e.REDUCED_MOTION = 'reduced_motion'), (e.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (e.LEGACY_CHAT_INPUT = 'legacy_chat_input'), e;
    })({}),
    _ = (function (e) {
        return (e.HARDWARE_ACCELERATION = 'hardware_acceleration'), e;
    })({}),
    p = (function (e) {
        return (e.DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (e.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (e.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2'), (e.RESTRICTED_ACCOUNTS = 'restricted_accounts'), e;
    })({});
let h = {
    ProfileCustomizationScrollPositions: d,
    AccessibilityScrollPositions: f,
    VoiceAndVideoScrollPositions: _,
    AppearanceScrollPositions: u,
    ContentAndSocialScrollPositions: p
};
var m = (function (e) {
        return (e[(e.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (e[(e.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (e[(e.TEST_SETTINGS = 3)] = 'TEST_SETTINGS'), e;
    })({}),
    g = (function (e) {
        return (e.USER_SETTINGS_PRIVACY_SAFETY = 'user_settings_privacy_safety'), (e.USER_SETTINGS_ACTIVITY_PRIVACY = 'user_settings_activity_privacy'), (e.SERVER_PRIVACY_MODAL = 'server_privacy_modal'), e;
    })({}),
    E = (function (e) {
        return (e[(e.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (e[(e.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (e[(e.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (e[(e.AUTOMATED = 30)] = 'AUTOMATED'), (e[(e.DAILY = 86400)] = 'DAILY'), e;
    })({});
function b() {
    return {
        protoToSave: void 0,
        timeout: void 0,
        timeoutDelay: Number.MIN_SAFE_INTEGER,
        rateLimited: !1,
        cleanupFuncs: [],
        loaded: !1,
        loading: !1,
        triggeredMigrations: !1,
        offlineEditDataVersion: void 0
    };
}
var y = (function (e) {
    return (e[(e.CONFIRM_START = 0)] = 'CONFIRM_START'), (e[(e.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (e[(e.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (e[(e.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (e[(e.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (e[(e.COMPLETE = 5)] = 'COMPLETE'), e;
})({});
let O = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    v = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
var I = (function (e) {
    return (e.USER = 'user'), (e.STREAM = 'stream'), e;
})({});
