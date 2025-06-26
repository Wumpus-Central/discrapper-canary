n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => B,
        AnalyticsContext: () => A,
        AnalyticsSchema: () => _,
        addExtraAnalyticsDecorator: () => G,
        clearAnalyticsEventsRecording: () => ee,
        debugLogEvent: () => z,
        default: () => eo,
        expandEventProperties: () => K,
        expandLocation: () => V,
        getAnalyticsEventsRecording: () => $,
        getNewAnalyticsLoadId: () => ea,
        launchSignature: () => j,
        setUTMContext: () => W,
        startRecordingAnalyticsEvents: () => Q,
        stopRecordingAnalyticsEvents: () => J,
        trackNetworkAction: () => ei
    }),
    n(539854),
    n(388685);
var r = n(73800),
    i = n(772848),
    a = n(990547),
    o = n(548345),
    s = n(668757),
    l = n(570140),
    c = n(565384),
    u = n(569611),
    d = n(97145),
    f = n(857192),
    _ = n(747161),
    p = n(848479),
    h = n(960048),
    m = n(981631),
    g = n(94752),
    E = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = { location: {} },
    A = r.createContext(S),
    N = {},
    C = 10000,
    R = 60000,
    P = 120000,
    w = 300000,
    D = 900000,
    L = 3600000,
    x = 86400000,
    k = 0.001,
    M = performance.now(),
    j = (0, s.X6)() ? (0, s.Ub)((0, o.R)()) : null,
    U = [];
function G(e) {
    U.push(e);
}
let B = {
    [m.rMx.APP_OPENED]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [m.rMx.APP_BACKGROUND]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [m.rMx.ACK_MESSAGES]: (e) =>
        e.location_object_type === m.Qqv.ACK_MANUAL
            ? void 0
            : {
                  throttlePeriod: D,
                  throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
              },
    [m.rMx.GUILD_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [m.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.tab_opened]
    },
    [m.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.tab_opened]
    },
    [m.rMx.START_SPEAKING]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.server]
    },
    [m.rMx.START_LISTENING]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.server]
    },
    [m.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [m.rMx.CHANNEL_OPENED]: {
        throttlePeriod: D,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [m.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.notif_type]
    },
    [m.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: P,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        }
    },
    [m.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [m.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.type]
    },
    [m.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [m.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [m.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [m.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: x,
        throttleKeys: () => []
    },
    [m.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: k
    },
    [m.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: k
    },
    [m.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.application_id]
    },
    [m.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: x,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [m.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.type]
    },
    [m.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.user_id]
    },
    [m.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [m.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [m.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id]
    },
    [m.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.tab]
    },
    [m.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.guild_id]
    },
    [m.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: L,
        throttleKeys: () => []
    },
    [m.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.message_id]
    },
    [m.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.location_stack]
    },
    [m.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.location_stack]
    },
    [m.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [m.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [m.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id, e.message_id]
    },
    [m.rMx.OPEN_MODAL]: (e) =>
        e.type === m.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: R,
                  throttleKeys: (e) => [e.type]
              }
            : void 0,
    [m.rMx.MODERATOR_QUEUE_ACTION]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id]
    }
};
function V(e) {
    return 'string' == typeof e
        ? { location: e }
        : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType
          };
}
function F(e) {
    return 'string' == typeof e
        ? { source: e }
        : {
              source_page: e.page,
              source_section: e.section,
              source_object: e.object,
              source_object_type: e.objectType,
              source_promotion_id: e.promotionId
          };
}
let Z = () => g.E.NONE;
function H(e) {
    Z = e;
}
let Y = (0, a.trackMaker)({
    analyticEventConfigs: B,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function W(e) {
    return (N = e);
}
function K(e) {
    var t, n, r, i;
    let a = null != e ? e : {};
    if (null != a.location) {
        let { location: e } = a;
        a = y({}, I(a, ['location']), V(e));
    }
    if (null != a.source) {
        let { source: e } = a;
        a = y({}, I(a, ['source']), F(e));
    }
    (a.client_performance_cpu = p.Z.getCurrentCPUUsagePercent()), (a.client_performance_memory = p.Z.getCurrentMemoryUsageKB()), (a.cpu_core_count = p.Z.getCPUCoreCount()), (a.accessibility_features = Z()), (a.rendered_locale = E.intl.currentLocale), (a.uptime_app = Math.floor((performance.now() - M) / 1000));
    let o = p.Z.getProcessUptime();
    null != o && (a.uptime_process_renderer = Math.floor(o));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = N;
    return (a.utm_source = null != (t = a.utm_source) ? t : s), (a.utm_medium = null != (n = a.utm_medium) ? n : l), (a.utm_campaign = null != (r = a.utm_campaign) ? r : c), (a.utm_content = null != (i = a.utm_content) ? i : u), (a.launch_signature = j), U.forEach((e) => e(a)), a;
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    f.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? u.Hj('Analytics', e, t) : u.Hj('Analytics', e);
}
let q = !1,
    X = {};
function Q() {
    q = !0;
}
function J() {
    q = !1;
}
function $() {
    return X;
}
function ee() {
    Object.keys(X).forEach((e) => {
        delete X[e];
    });
}
function et(e, t) {
    return !!q && (null != t && (Array.isArray(X[e]) ? X[e].push(t) : (X[e] = [t])), !0);
}
function en(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (d.R.includes(r) ||
            h.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(r)
            }),
        et(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = K(t);
    return (
        z(r, i, n.logEventProperties),
        Y(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint
        })
    );
}
let er = (0, a.trackMaker)({
    analyticEventConfigs: B,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function ei(e, t) {
    let n = K(y({ location: (0, c.k$)() }, t));
    (0, c.dT)(e, y({ type: 'action' }, t)), z(e, n), er(e, n);
}
function ea() {
    return (0, i.Z)();
}
let eo = v(y({}, a), {
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: H,
    expandEventProperties: K,
    track: en
});
