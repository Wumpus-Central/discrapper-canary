n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => V,
        AnalyticsContext: () => N,
        AnalyticsSchema: () => _,
        addExtraAnalyticsDecorator: () => F,
        clearAnalyticsEventsRecording: () => er,
        debugLogEvent: () => X,
        default: () => eu,
        expandEventProperties: () => Q,
        expandLocation: () => H,
        getAnalyticsEventsRecording: () => en,
        getNewAnalyticsLoadId: () => ec,
        isGameApplicationType: () => es,
        launchSignature: () => Z,
        setUTMContext: () => q,
        startRecordingAnalyticsEvents: () => ee,
        stopRecordingAnalyticsEvents: () => et,
        trackNetworkAction: () => el,
    }),
    n(539854),
    n(388685);
var r = n(473749),
    i = n(772848),
    a = n(990547),
    o = n(548345),
    s = n(668757),
    l = n(570140),
    c = n(100527),
    u = n(565384),
    d = n(569611),
    f = n(97145),
    p = n(857192),
    _ = n(747161),
    m = n(848479),
    h = n(960048),
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
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
    P = {},
    R = 1000,
    D = 10000,
    w = 60000,
    x = 120000,
    L = 300000,
    j = 900000,
    M = 3600000,
    k = 86400000,
    U = 0.001,
    G = performance.now(),
    Z = (0, s.X6)() ? (0, s.Ub)((0, o.R)()) : null;
a.extendSuperProperties({ launch_signature: Z });
let B = [];
function F(e) {
    B.push(e);
}
let V = {
    [g.rMx.APP_OPENED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.APP_BACKGROUND]: {
        throttlePeriod: x,
        throttleKeys: () => [],
    },
    [g.rMx.ACK_MESSAGES]: (e) =>
        e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : {
                  throttlePeriod: j,
                  throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section],
              },
    [g.rMx.GUILD_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id, e.is_pending],
    },
    [g.rMx.FRIENDS_LIST_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab_opened],
    },
    [g.rMx.START_SPEAKING]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.server],
    },
    [g.rMx.START_LISTENING]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.server],
    },
    [g.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0,
    },
    [g.rMx.CHANNEL_OPENED]: {
        throttlePeriod: j,
        throttleKeys: (e) =>
            null != e.channel_static_route
                ? [e.guild_id, e.channel_static_route, e.channel_view]
                : null != e.location && e.location.startsWith(c.Z.FREQUENT_FRIENDS_ROW)
                  ? [e.channel_id, e.channel_view, e.location]
                  : [e.channel_id, e.channel_view],
    },
    [g.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.notif_type],
    },
    [g.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: x,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        },
    },
    [g.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: D,
        throttleKeys: () => [],
    },
    [g.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.type],
    },
    [g.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.role_id, e.tab_opened],
    },
    [g.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: L,
        throttleKeys: () => [],
    },
    [g.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: () => [],
    },
    [g.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: k,
        throttleKeys: () => [],
    },
    [g.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: U,
    },
    [g.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: U,
    },
    [g.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: k,
        throttleKeys: (e) => [e.application_id],
    },
    [g.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: k,
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
        throttlePeriod: j,
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
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.context, e.guild_id],
    },
    [g.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.guild_id],
    },
    [g.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.tab],
    },
    [g.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: j,
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
    [g.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.location_stack],
    },
    [g.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: j,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0,
    },
    [g.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0,
    },
    [g.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id],
    },
    [g.rMx.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: j,
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
        throttlePeriod: D,
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
        throttlePeriod: k,
        throttleKeys: () => [],
    },
    [g.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
        throttlePeriod: k,
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
    [g.rMx.VIDEO_STREAM_ZOOM_CHANGED]: {
        throttlePeriod: R,
        throttleKeys: () => [],
    },
};
function H(e) {
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
function Y(e) {
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
let W = () => E.E.NONE;
function K(e) {
    W = e;
}
let z = (0, a.trackMaker)({
    analyticEventConfigs: V,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: "TRACK",
});
function q(e) {
    return (P = e);
}
function Q(e) {
    var t, n, r, i;
    let a = null != e ? e : {};
    if (null != a.location) {
        let { location: e } = a;
        a = v({}, T(a, ["location"]), H(e));
    }
    if (null != a.source) {
        let { source: e } = a;
        a = v({}, T(a, ["source"]), Y(e));
    }
    (a.client_performance_cpu = m.Z.getCurrentCPUUsagePercent()),
        (a.client_performance_memory = m.Z.getCurrentMemoryUsageKB()),
        (a.cpu_core_count = m.Z.getCPUCoreCount()),
        (a.accessibility_features = W()),
        (a.rendered_locale = y.intl.currentLocale),
        (a.uptime_app = Math.floor((performance.now() - G) / R));
    let o = m.Z.getProcessUptime();
    null != o && (a.uptime_process_renderer = Math.floor(o));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = P;
    return (
        (a.utm_source = null != (t = a.utm_source) ? t : s),
        (a.utm_medium = null != (n = a.utm_medium) ? n : l),
        (a.utm_campaign = null != (r = a.utm_campaign) ? r : c),
        (a.utm_content = null != (i = a.utm_content) ? i : u),
        (a.launch_signature = Z),
        B.forEach((e) => e(a)),
        a
    );
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    p.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t),
        n ? d.Hj("Analytics", e, t) : d.Hj("Analytics", e);
}
let J = !1,
    $ = {};
function ee() {
    J = !0;
}
function et() {
    J = !1;
}
function en() {
    return $;
}
function er() {
    Object.keys($).forEach((e) => {
        delete $[e];
    });
}
function ei(e, t) {
    return !!J && (null != t && (Array.isArray($[e]) ? $[e].push(t) : ($[e] = [t])), !0);
}
function ea(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (f.R.includes(r) ||
            h.Z.addBreadcrumb({
                category: "analytics",
                message: "".concat(r),
            }),
        ei(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = Q(t);
    return (
        X(r, i, n.logEventProperties),
        z(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint,
        })
    );
}
let eo = (0, a.trackMaker)({
    analyticEventConfigs: V,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: "TRACK",
});
function es(e) {
    return e === b.wW.GAME || e === b.wW.DEPRECATED_GAME;
}
function el(e, t) {
    let n = Q(v({ location: (0, u.k$)() }, t));
    (0, u.dT)(e, v({ type: "action" }, t)), X(e, n), eo(e, n);
}
function ec() {
    return (0, i.Z)();
}
let eu = I(v({}, a), {
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: K,
    expandEventProperties: Q,
    track: ea,
});
