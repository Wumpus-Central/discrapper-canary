n.r(t),
    n.d(t, {
        clearAnalyticsEventsRecording: () => F,
        trackNetworkAction: () => H,
        addExtraAnalyticsDecorator: () => O,
        stopRecordingAnalyticsEvents: () => x,
        isGameApplicationType: () => B,
        AnalyticsContext: () => m,
        getNewAnalyticsLoadId: () => j,
        launchSignature: () => N,
        default: () => W,
        startRecordingAnalyticsEvents: () => G,
        setUTMContext: () => b,
        getAnalyticsEventsRecording: () => k,
        expandLocation: () => L,
        AnalyticEventConfigs: () => R,
        AnalyticsSchema: () => i,
        debugLogEvent: () => P,
        expandEventProperties: () => M,
    });
var i = {};
n.r(i), n(321073);
var r = n(582128),
    a = n(132500),
    s = n(562708),
    l = n(613345),
    o = n(306173),
    d = n(228366),
    c = n(686757),
    u = n(53943);
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
var E = n(111162),
    A = n(321034),
    h = n(38405),
    I = n(652215),
    f = n(53298),
    p = n(705751),
    T = n(375708);
let m = r.createContext({ location: {} }),
    g = {},
    S = performance.now(),
    N = (0, o.xd)() ? (0, o.xy)((0, l.V)()) : null;
s.extendSuperProperties({ launch_signature: N });
let C = [];
function O(e) {
    C.push(e);
}
let R = {
    [I.HAw.APP_OPENED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [I.HAw.APP_BACKGROUND]: { throttlePeriod: 12e4, throttleKeys: () => [] },
    [I.HAw.ACK_MESSAGES]: (e) =>
        e.location_object_type === I.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section] },
    [I.HAw.GUILD_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.is_pending] },
    [I.HAw.FRIENDS_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [I.HAw.NOW_PLAYING_CARD_HOVERED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab_opened] },
    [I.HAw.START_SPEAKING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [I.HAw.START_LISTENING]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.server] },
    [I.HAw.ACTIVITY_UPDATED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.application_id], deduplicate: !0 },
    [I.HAw.CHANNEL_OPENED]: {
        throttlePeriod: 9e5,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : [e.channel_id, e.channel_view],
    },
    [I.HAw.TEXT_IN_VOICE_OPENED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.NOTIFICATION_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.notif_type] },
    [I.HAw.MEMBER_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.DM_LIST_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.NAV_DRAWER_OPENED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [I.HAw.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: 12e4,
        throttleKeys: (e) => [e.shortcut_name, e.location_object, ...(e.source_class_list ?? [])],
    },
    [I.HAw.QUICKSWITCHER_OPENED]: { throttlePeriod: 1e4, throttleKeys: () => [] },
    [I.HAw.CHAT_INPUT_COMPONENT_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.type] },
    [I.HAw.ROLE_PAGE_VIEWED]: { throttlePeriod: 12e4, throttleKeys: (e) => [e.role_id, e.tab_opened] },
    [I.HAw.VIDEO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [I.HAw.AUDIO_INPUT_INITIALIZED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
    [I.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [I.HAw.HUB_STUDENT_PROMPT_CLICKED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [I.HAw.RPC_SERVER_ERROR_CAUGHT]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [I.HAw.RPC_COMMAND_SENT]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: 0.001,
    },
    [I.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: 0.001,
    },
    [I.HAw.ACTIVITY_HANDSHAKE]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [I.HAw.CHANNEL_BANNER_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.banner_type, e.channel_id] },
    [s.ImpressionNames.GUILD_HANGOUT_WINDOW]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.channel_id, e.banner_hash],
    },
    [s.ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: {
        throttlePeriod: 864e5,
        throttleKeys: (e) => [e.channel_id, e.media_session_id],
    },
    [I.HAw.PREMIUM_UPSELL_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] },
    [I.HAw.FORUM_CHANNEL_SEARCHED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [I.HAw.FORUM_CHANNEL_SCROLLED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id, e.channel_id] },
    [I.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: { throttlePeriod: 6e4, throttleKeys: (e) => [e.user_id] },
    [I.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: { throttlePeriod: 6e4, throttleKeys: () => [] },
    [I.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.ACTIVITY_CARDS_VIEWED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.context, e.guild_id] },
    [I.HAw.GUILD_TOOLTIP_SHOWN]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [I.HAw.ACK_COMMUNITY_MESSAGES]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.REDESIGN_NAV_BAR_CLICKED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.tab] },
    [I.HAw.CHANNEL_LIST_END_REACHED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.guild_id] },
    [I.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: 6e4,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [I.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [I.HAw.MEDIA_INPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [I.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: { throttlePeriod: 3e5, throttleKeys: (e) => [e.location_stack] },
    [I.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [I.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: 3e5,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [I.HAw.MEMBER_LIST_SWIPE_PEEK]: { throttlePeriod: 1e3, throttleKeys: (e) => [e.channel_id] },
    [I.HAw.REDACTABLE_MESSAGE_LOADED]: { throttlePeriod: 9e5, throttleKeys: (e) => [e.channel_id, e.message_id] },
    [I.HAw.OPEN_MODAL]: (e) =>
        e.type === I.JJy.MEDIA_VIEWER ? { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] } : void 0,
    [I.HAw.MODERATOR_QUEUE_ACTION]: { throttlePeriod: 1e4, throttleKeys: (e) => [e.guild_id] },
    [I.HAw.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 432e5,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [I.HAw.SEARCH_BAR_VIEWED]: { throttlePeriod: 36e5, throttleKeys: (e) => [e.search_type] },
    [I.HAw.AD_IDENTIFIER_FETCHED]: { throttlePeriod: 864e5, throttleKeys: () => [] },
    [I.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: { throttlePeriod: 864e5, throttleKeys: (e) => [e.application_id] },
    [I.HAw.LIBDISCORE_SLOW_TIMERS]: { throttlePeriod: 36e5, throttleKeys: () => [] },
    [I.HAw.VIDEO_STREAM_ZOOM_CHANGED]: { throttlePeriod: 1e3, throttleKeys: () => [] },
    [I.HAw.CACHE_STATS_RECORDED]: { throttlePeriod: 9e5, throttleKeys: () => [] },
    [I.HAw.TYPING_INDICATOR_STYLE_SEEN]: { throttlePeriod: 864e5, throttleKeys: () => [] },
};
function L(e) {
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
let y = () => f.O.NONE;
function D(e) {
    _.includes(e) || h.A.addBreadcrumb({ category: "analytics", message: e });
}
let v = (0, s.trackMaker)({ addBreadcrumb: D, analyticEventConfigs: R, dispatcher: d.h, TRACK_ACTION_NAME: "TRACK" });
function b(e) {
    return (g = e);
}
function M(e) {
    let t = e ?? {};
    if (null != t.location) {
        let { location: e, ...n } = t;
        t = { ...n, ...L(e) };
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
    (t.client_performance_cpu = A.A.getCurrentCPUUsagePercent()),
        (t.client_performance_memory = A.A.getCurrentMemoryUsageKB()),
        (t.cpu_core_count = A.A.getCPUCoreCount()),
        (t.accessibility_features = y()),
        (t.rendered_locale = T.intl.currentLocale),
        (t.uptime_app = Math.floor((performance.now() - S) / 1e3));
    let n = A.A.getProcessUptime();
    null != n && (t.uptime_process_renderer = Math.floor(n));
    let { utmSource: i, utmMedium: r, utmCampaign: a, utmContent: s } = g;
    return (
        (t.utm_source = t.utm_source ?? i),
        (t.utm_medium = t.utm_medium ?? r),
        (t.utm_campaign = t.utm_campaign ?? a),
        (t.utm_content = t.utm_content ?? s),
        (t.launch_signature = N),
        C.forEach((e) => e(t)),
        t
    );
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    E.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? u.z8("Analytics", e, t) : u.z8("Analytics", e);
}
let U = !1,
    w = {};
function G() {
    U = !0;
}
function x() {
    U = !1;
}
function k() {
    return w;
}
function F() {
    Object.keys(w).forEach((e) => {
        delete w[e];
    });
}
let V = (0, s.trackMaker)({ addBreadcrumb: D, analyticEventConfigs: R, dispatcher: d.h, TRACK_ACTION_NAME: "TRACK" });
function B(e) {
    return e === p.S7.GAME || e === p.S7.DEPRECATED_GAME;
}
function H(e, t) {
    let n = M({ location: (0, c.g$)(), ...t });
    (0, c.eE)(e, { type: "action", ...t }), P(e, n), V(e, n);
}
function j() {
    return (0, a.A)();
}
let W = {
    ...s,
    getCampaignParams: s.getCampaignParams,
    setSystemAccessibilityFeatures: function (e) {
        y = e;
    },
    expandEventProperties: M,
    track: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = String(e);
        if (
            (U && null != t && (Array.isArray(w[e]) ? w[e].push(t) : (w[e] = [t])),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
        )
            return Promise.resolve();
        let r = M(t);
        return P(i, r, n.logEventProperties), v(e, r, { flush: n.flush, fingerprint: n.fingerprint });
    },
};
