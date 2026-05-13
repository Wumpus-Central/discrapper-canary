"use strict";
n.r(t),
    n.d(t, {
        clearAnalyticsEventsRecording: () => F,
        trackNetworkAction: () => H,
        addExtraAnalyticsDecorator: () => C,
        stopRecordingAnalyticsEvents: () => k,
        isGameApplicationType: () => B,
        AnalyticsContext: () => I,
        getNewAnalyticsLoadId: () => j,
        launchSignature: () => N,
        default: () => Y,
        startRecordingAnalyticsEvents: () => U,
        setUTMContext: () => L,
        getAnalyticsEventsRecording: () => G,
        expandLocation: () => O,
        AnalyticEventConfigs: () => v,
        AnalyticsSchema: () => i,
        debugLogEvent: () => M,
        expandEventProperties: () => w,
    });
var i = {};
n.r(i), n(321073);
var r = n(64700),
    s = n(835245),
    a = n(562708),
    o = n(613345),
    l = n(306173),
    u = n(228366),
    c = n(686757),
    d = n(53943);
let _ = [
    "notification_clicked",
    "experiment_user_triggered",
    "experiment_dm_triggered",
    "experiment_guild_triggered",
    "device_event",
    "react_soft_exception",
    "network_capabilities_changed",
    "foreground_service",
    "app_lifecycle",
    "ui_lifecycle",
    "touch_event",
    "http_request",
    "websocket_message_received",
];
var f = n(111162),
    h = n(321034),
    p = n(38405),
    E = n(652215),
    m = n(53298),
    g = n(705751),
    A = n(375708);
let I = r.createContext({ location: {} }),
    T = {},
    S = performance.now(),
    N = (0, l.xd)() ? (0, l.xy)((0, o.V)()) : null;
a.extendSuperProperties({ launch_signature: N });
let y = [];
function C(e) {
    y.push(e);
}
let v = {
    [E.HAw.APP_OPENED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [E.HAw.APP_BACKGROUND]: { throttlePeriod: 12e4, throttleKeys: () => [] },
    [E.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === E.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [E.HAw.GUILD_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [E.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [E.HAw.START_SPEAKING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [E.HAw.START_LISTENING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [E.HAw.ACTIVITY_UPDATED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [E.HAw.CHANNEL_OPENED]: {
        throttlePeriod: 9e5,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : [e.channel_id, e.channel_view],
    },
    [E.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.notif_type] },
    [E.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.DM_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [E.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 12e4,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [E.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: 1e4, throttleKeys: () => [] },
    [E.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.type] },
    [E.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: 12e4, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [E.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [E.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [E.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [E.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [E.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [E.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001,
    },
    [E.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001,
    },
    [E.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [E.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [a.ImpressionNames.GUILD_HANGOUT_WINDOW]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.channel_id, e.banner_hash],
    },
    [a.ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.channel_id, e.media_session_id],
    },
    [E.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] },
    [E.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [E.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.user_id] },
    [E.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: 6e4, throttleKeys: () => [] },
    [E.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.context, e.guild_id] },
    [E.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab] },
    [E.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 6e4,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [E.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [E.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [E.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [E.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [E.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: 1e3, throttleKeys: (e) => [e.channel_id] },
    [E.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [E.HAw.OPEN_MODAL]: (e) =>
        e.type === E.JJy.MEDIA_VIEWER ? { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] } : void 0,
    [E.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: 1e4, throttleKeys: (e) => [e.guild_id] },
    [E.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 432e5,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [E.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: 36e5, throttleKeys: (e) => [e.search_type] },
    [E.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [E.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [E.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [E.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: 1e3, throttleKeys: () => [] },
    [E.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
};
function O(e) {
    return "string" == typeof e
        ? { location: e }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType,
          };
}
let R = () => m.O.NONE;
function b(e) {
    _.includes(e) || p.A.addBreadcrumb({ category: "analytics", message: e });
}
let D = (0, a.trackMaker)({ addBreadcrumb: b, analyticEventConfigs: v, dispatcher: u.h, TRACK_ACTION_NAME: "TRACK" });
function L(e) {
    return (T = e);
}
function w(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...O(e) };
    }
    if (null != t.source) {
        let { source: e, ...n } = t;
        t = {
            ...n,
            ...("string" == typeof e
                ? { source: e }
                : {
                      source_page: e.page,
                      source_section: e.section,
                      source_object: e.object,
                      source_object_type: e.objectType,
                      source_promotion_id: e.promotionId,
                  }),
        };
    }
    (t.client_performance_cpu = h.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = h.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = h.A.getCPUCoreCount()),
        (t.accessibility_features = R()),
        (t.rendered_locale = A.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - S) / 1e3));
    let n = h.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: i, utmMedium: r, utmCampaign: s, utmContent: a } = T;
    return (
        (t.utm_source = t.utm_source ?? i),
        (t.utm_medium = t.utm_medium ?? r),
        (t.utm_campaign = t.utm_campaign ?? s),
        (t.utm_content = t.utm_content ?? a),
        (t.launch_signature = N),
        y.forEach((e) => e(t)),
        t
    );
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.z8("Analytics", e, t) : d.z8("Analytics", e);
}
let P = !1,
    x = {};
function U() {
    P = !0;
}
function k() {
    P = !1;
}
function G() {
    return x;
}
function F() {
    Object.keys(x).forEach((e) => {
        delete x[e];
    });
}
let V = (0, a.trackMaker)({ addBreadcrumb: b, analyticEventConfigs: v, dispatcher: u.h, TRACK_ACTION_NAME: "TRACK" });
function B(e) {
    return e === g.S7.GAME || e === g.S7.DEPRECATED_GAME;
}
function H(e, t) {
    let n = w({ location: (0, c.g$)(), ...t });
    (0, c.eE)(e, { type: "action", ...t }), M(e, n), V(e, n);
}
function j() {
    return (0, s.A)();
}
let Y = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        R = e;
    },
    expandEventProperties: w,
    track: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = String(e);
        if (
            (P && null != t && (Array.isArray(x[e]) ? x[e].push(t) : (x[e] = [t])),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
        )
            return Promise.resolve();
        let r = w(t);
        return M(i, r, n.logEventProperties), D(e, r, { flush: n.flush, fingerprint: n.fingerprint });
    },
};
