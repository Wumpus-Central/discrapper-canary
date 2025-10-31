n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => F,
        AnalyticsContext: () => N,
        AnalyticsSchema: () => p,
        addExtraAnalyticsDecorator: () => Z,
        clearAnalyticsEventsRecording: () => en,
        debugLogEvent: () => X,
        default: () => ec,
        expandEventProperties: () => q,
        expandLocation: () => V,
        getAnalyticsEventsRecording: () => et,
        getNewAnalyticsLoadId: () => el,
        isGameApplicationType: () => eo,
        launchSignature: () => G,
        setUTMContext: () => z,
        startRecordingAnalyticsEvents: () => $,
        stopRecordingAnalyticsEvents: () => ee,
        trackNetworkAction: () => es,
    }),
    n(539854),
    n(388685);
var r = n(647438),
    i = n(772848),
    a = n(990547),
    o = n(548345),
    s = n(668757),
    l = n(570140),
    c = n(100527),
    u = n(565384),
    d = n(569611),
    f = n(97145),
    _ = n(857192),
    p = n(747161),
    h = n(848479),
    m = n(960048),
    g = n(981631),
    E = n(94752),
    b = n(674563),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = { location: {} },
    N = r.createContext(C),
    R = {},
    P = 10000,
    w = 60000,
    D = 120000,
    x = 300000,
    L = 900000,
    M = 3600000,
    j = 86400000,
    k = 0.001,
    U = performance.now(),
    G = (0, s.X6)() ? (0, s.Ub)((0, o.R)()) : null;
a.extendSuperProperties({ launch_signature: G });
let B = [];
function Z(e) {
    B.push(e);
}
let F = {
    [g.rMx.APP_OPENED]: {
        throttlePeriod: x,
        throttleKeys: () => [],
    },
    [g.rMx.APP_BACKGROUND]: {
        throttlePeriod: D,
        throttleKeys: () => [],
    },
    [g.rMx.ACK_MESSAGES]: (e) =>
        e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : {
                  throttlePeriod: L,
                  throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section],
              },
    [g.rMx.GUILD_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id, e.is_pending],
    },
    [g.rMx.FRIENDS_LIST_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.START_SPEAKING]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.server],
    },
    [g.rMx.START_LISTENING]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.server],
    },
    [g.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0,
    },
    [g.rMx.CHANNEL_OPENED]: {
        throttlePeriod: L,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(c.Z.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [g.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.notif_type],
    },
    [g.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: D,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        },
    },
    [g.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: P,
        throttleKeys: () => [],
    },
    [g.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.type],
    },
    [g.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.role_id, e.tab_opened],
    },
    [g.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: x,
        throttleKeys: () => [],
    },
    [g.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: x,
        throttleKeys: () => [],
    },
    [g.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: k,
    },
    [g.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: k,
    },
    [g.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.application_id],
    },
    [g.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.banner_type, e.channel_id],
    },
    [g.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.type],
    },
    [g.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.user_id],
    },
    [g.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: w,
        throttleKeys: () => [],
    },
    [g.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.context, e.guild_id],
    },
    [g.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab],
    },
    [g.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.guild_id, e.channel_id],
    },
    [g.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
    [g.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.message_id],
    },
    [g.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [g.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [g.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id, e.message_id],
    },
    [g.rMx.OPEN_MODAL]: (e) =>
        e.type === g.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: w,
                  throttleKeys: (e) => [e.type],
              }
            : void 0,
    [g.rMx.MODERATOR_QUEUE_ACTION]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.rMx.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * M,
        throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
        ],
    },
    [g.rMx.SEARCH_BAR_VIEWED]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.search_type],
    },
    [g.rMx.AD_IDENTIFIER_FETCHED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.application_id],
    },
    [g.rMx.LIBDISCORE_SLOW_TIMERS]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
    [g.rMx.DEBUG_MISSING_STRING]: {
        throttlePeriod: M,
        throttleKeys: () => [],
    },
};
function V(e) {
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
function H(e) {
    return "string" == typeof e
        ? { source: e }
        : {
              source_page: e.page,
              source_section: e.section,
              source_object: e.object,
              source_object_type: e.objectType,
              source_promotion_id: e.promotionId,
          };
}
let Y = () => E.E.NONE;
function W(e) {
    Y = e;
}
let K = (0, a.trackMaker)({
    analyticEventConfigs: F,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: "TRACK",
});
function z(e) {
    return (R = e);
}
function q(e) {
    var t, n, r, i;
    let a = null != e ? e : {};
    if (null != a.location) {
        let { location: e } = a;
        a = v({}, S(a, ["location"]), V(e));
    }
    if (null != a.source) {
        let { source: e } = a;
        a = v({}, S(a, ["source"]), H(e));
    }
    (a.client_performance_cpu = h.Z.getCurrentCPUUsagePercent()),
        (a.client_performance_memory = h.Z.getCurrentMemoryUsageKB()),
        (a.cpu_core_count = h.Z.getCPUCoreCount()),
        (a.accessibility_features = Y()),
        (a.rendered_locale = y.intl.currentLocale),
        (a.uptime_app = Math.floor((performance.now() - U) / 1000));
    let o = h.Z.getProcessUptime();
    null != o && (a.uptime_process_renderer = Math.floor(o));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = R;
    return (
        (a.utm_source = null != (t = a.utm_source) ? t : s),
        (a.utm_medium = null != (n = a.utm_medium) ? n : l),
        (a.utm_campaign = null != (r = a.utm_campaign) ? r : c),
        (a.utm_content = null != (i = a.utm_content) ? i : u),
        (a.launch_signature = G),
        B.forEach((e) => e(a)),
        a
    );
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    _.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.Hj("Analytics", e, t) : d.Hj("Analytics", e);
}
let Q = !1,
    J = {};
function $() {
    Q = !0;
}
function ee() {
    Q = !1;
}
function et() {
    return J;
}
function en() {
    Object.keys(J).forEach((e) => {
        delete J[e];
    });
}
function er(e, t) {
    return !!Q && (null != t && (Array.isArray(J[e]) ? J[e].push(t) : (J[e] = [t])), !0);
}
function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (f.R.includes(r) ||
            m.Z.addBreadcrumb({
                category: "analytics",
                message: "".concat(r),
            }),
        er(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = q(t);
    return (
        X(r, i, n.logEventProperties),
        K(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint,
        })
    );
}
let ea = (0, a.trackMaker)({
    analyticEventConfigs: F,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: "TRACK",
});
function eo(e) {
    return e === b.wW.GAME || e === b.wW.DEPRECATED_GAME;
}
function es(e, t) {
    let n = q(v({ location: (0, u.k$)() }, t));
    (0, u.dT)(e, v({ type: "action" }, t)), X(e, n), ea(e, n);
}
function el() {
    return (0, i.Z)();
}
let ec = T(v({}, a), {
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: W,
    expandEventProperties: q,
    track: ei,
});
