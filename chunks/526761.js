var a, n, _, o, E, i, c, s, l, I, u, R, A, T, N, d, f, O, L;
r.d(t, {
    Ax: function () {
        return I;
    },
    FY: function () {
        return i;
    },
    GA: function () {
        return C;
    },
    JC: function () {
        return g;
    },
    KQ: function () {
        return P;
    },
    NB: function () {
        return a;
    },
    XZ: function () {
        return S;
    },
    Y_: function () {
        return _;
    },
    cP: function () {
        return D;
    },
    f4: function () {
        return s;
    },
    fy: function () {
        return l;
    },
    h1: function () {
        return n;
    },
    ic: function () {
        return U;
    },
    oX: function () {
        return p;
    },
    rP: function () {
        return o;
    },
    u0: function () {
        return u;
    },
    vY: function () {
        return h;
    },
    vc: function () {
        return M;
    },
    yP: function () {
        return c;
    }
});
let p = 250,
    h = 762880,
    D = 'ROLE_SUBSCRIPTIONS',
    S = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    C = 'SOUNDBOARD_SUBSECTION';
((R = a || (a = {})).USER_PROFILE = 'user_profile'), (R.GUILD = 'guild'), (R.TRY_IT_OUT = 'try_it_out'), ((n || (n = {})).CUSTOM_APP_ICONS = 'custom_app_icon'), ((_ || (_ = {})).TRY_IT_OUT = 'try_it_out'), ((A = o || (o = {})).REDUCED_MOTION = 'reduced_motion'), (A.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (A.LEGACY_CHAT_INPUT = 'legacy_chat_input'), ((E || (E = {})).HARDWARE_ACCELERATION = 'hardware_acceleration'), ((T = i || (i = {})).DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (T.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (T.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2'), (T.RESTRICTED_ACCOUNTS = 'restricted_accounts');
let P = {
    ProfileCustomizationScrollPositions: _,
    AccessibilityScrollPositions: o,
    VoiceAndVideoScrollPositions: E,
    AppearanceScrollPositions: n,
    ContentAndSocialScrollPositions: i
};
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
        offlineEditDataVersion: void 0
    };
}
((N = c || (c = {}))[(N.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (N[(N.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (N[(N.TEST_SETTINGS = 3)] = 'TEST_SETTINGS'), ((d = s || (s = {})).USER_SETTINGS_PRIVACY_SAFETY = 'user_settings_privacy_safety'), (d.SERVER_PRIVACY_MODAL = 'server_privacy_modal'), ((f = l || (l = {}))[(f.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (f[(f.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (f[(f.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (f[(f.AUTOMATED = 30)] = 'AUTOMATED'), (f[(f.DAILY = 86400)] = 'DAILY'), ((O = I || (I = {}))[(O.CONFIRM_START = 0)] = 'CONFIRM_START'), (O[(O.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (O[(O.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (O[(O.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (O[(O.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (O[(O.COMPLETE = 5)] = 'COMPLETE');
let U = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    M = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
((L = u || (u = {})).USER = 'user'), (L.STREAM = 'stream');
