(n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => Z,
        AnalyticsContext: () => N,
        AnalyticsSchema: () => _,
        addExtraAnalyticsDecorator: () => B,
        clearAnalyticsEventsRecording: () => et,
        debugLogEvent: () => q,
        default: () => el,
        expandEventProperties: () => z,
        expandLocation: () => F,
        getAnalyticsEventsRecording: () => ee,
        getNewAnalyticsLoadId: () => es,
        isGameApplicationType: () => eo,
        launchSignature: () => U,
        setUTMContext: () => K,
        startRecordingAnalyticsEvents: () => J,
        stopRecordingAnalyticsEvents: () => $,
        trackNetworkAction: () => ea
    }),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(772848),
    o = n(990547),
    a = n(548345),
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
    E = n(674563),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let A = { location: {} },
    N = r.createContext(A),
    C = {},
    R = 10000,
    P = 60000,
    w = 120000,
    D = 300000,
    L = 900000,
    x = 3600000,
    M = 86400000,
    k = 0.001,
    j = performance.now(),
    U = (0, s.X6)() ? (0, s.Ub)((0, a.R)()) : null;
o.extendSuperProperties({ launch_signature: U });
let G = [];
function B(e) {
    G.push(e);
}
let Z = {
    [m.rMx.APP_OPENED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.APP_BACKGROUND]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [m.rMx.ACK_MESSAGES]: (e) =>
        e.location_object_type === m.Qqv.ACK_MANUAL
            ? void 0
            : {
                  throttlePeriod: L,
                  throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
              },
    [m.rMx.GUILD_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [m.rMx.FRIENDS_LIST_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened]
    },
    [m.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened]
    },
    [m.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab_opened]
    },
    [m.rMx.START_SPEAKING]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.server]
    },
    [m.rMx.START_LISTENING]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.server]
    },
    [m.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [m.rMx.CHANNEL_OPENED]: {
        throttlePeriod: L,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [m.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.notif_type]
    },
    [m.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: L,
        throttleKeys: () => []
    },
    [m.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: w,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        }
    },
    [m.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [m.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.type]
    },
    [m.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: w,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [m.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [m.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: L,
        throttleKeys: () => []
    },
    [m.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: () => []
    },
    [m.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: M,
        throttleKeys: () => []
    },
    [m.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: k
    },
    [m.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: k
    },
    [m.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.application_id]
    },
    [m.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: M,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [m.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.type]
    },
    [m.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.user_id]
    },
    [m.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [m.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [m.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id]
    },
    [m.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.tab]
    },
    [m.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.guild_id]
    },
    [m.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [m.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: x,
        throttleKeys: () => []
    },
    [m.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.message_id]
    },
    [m.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.location_stack]
    },
    [m.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.location_stack]
    },
    [m.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [m.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [m.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [m.rMx.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: L,
        throttleKeys: (e) => [e.channel_id, e.message_id]
    },
    [m.rMx.OPEN_MODAL]: (e) =>
        e.type === m.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: P,
                  throttleKeys: (e) => [e.type]
              }
            : void 0,
    [m.rMx.MODERATOR_QUEUE_ACTION]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.guild_id]
    },
    [m.rMx.NOTIFICATION_PERMISSION_STATUS]: {
        throttlePeriod: 12 * x,
        throttleKeys: (e) => [e.os_enabled, e.notification_authorization_status, e.foreground_app_enabled, e.background_app_enabled]
    }
};
function F(e) {
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
function V(e) {
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
let H = () => g.E.NONE;
function Y(e) {
    H = e;
}
let W = (0, o.trackMaker)({
    analyticEventConfigs: Z,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function K(e) {
    return (C = e);
}
function z(e) {
    var t, n, r, i;
    let o = null != e ? e : {};
    if (null != o.location) {
        let { location: e } = o;
        o = O({}, T(o, ['location']), F(e));
    }
    if (null != o.source) {
        let { source: e } = o;
        o = O({}, T(o, ['source']), V(e));
    }
    ((o.client_performance_cpu = p.Z.getCurrentCPUUsagePercent()), (o.client_performance_memory = p.Z.getCurrentMemoryUsageKB()), (o.cpu_core_count = p.Z.getCPUCoreCount()), (o.accessibility_features = H()), (o.rendered_locale = b.intl.currentLocale), (o.uptime_app = Math.floor((performance.now() - j) / 1000)));
    let a = p.Z.getProcessUptime();
    null != a && (o.uptime_process_renderer = Math.floor(a));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = C;
    return ((o.utm_source = null != (t = o.utm_source) ? t : s), (o.utm_medium = null != (n = o.utm_medium) ? n : l), (o.utm_campaign = null != (r = o.utm_campaign) ? r : c), (o.utm_content = null != (i = o.utm_content) ? i : u), (o.launch_signature = U), G.forEach((e) => e(o)), o);
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (f.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? u.Hj('Analytics', e, t) : u.Hj('Analytics', e));
}
let X = !1,
    Q = {};
function J() {
    X = !0;
}
function $() {
    X = !1;
}
function ee() {
    return Q;
}
function et() {
    Object.keys(Q).forEach((e) => {
        delete Q[e];
    });
}
function en(e, t) {
    return !!X && (null != t && (Array.isArray(Q[e]) ? Q[e].push(t) : (Q[e] = [t])), !0);
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (d.R.includes(r) ||
            h.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(r)
            }),
        en(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = z(t);
    return (
        q(r, i, n.logEventProperties),
        W(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint
        })
    );
}
let ei = (0, o.trackMaker)({
    analyticEventConfigs: Z,
    dispatcher: l.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function eo(e) {
    return e === E.wW.GAME || e === E.wW.DEPRECATED_GAME;
}
function ea(e, t) {
    let n = z(O({ location: (0, c.k$)() }, t));
    ((0, c.dT)(e, O({ type: 'action' }, t)), q(e, n), ei(e, n));
}
function es() {
    return (0, i.Z)();
}
let el = I(O({}, o), {
    getCampaignParams: o.getCampaignParams,
    setSystemAccessibilityFeatures: Y,
    expandEventProperties: z,
    track: er
});
