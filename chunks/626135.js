n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => j,
        AnalyticsContext: () => S,
        AnalyticsSchema: () => d,
        addExtraAnalyticsDecorator: () => k,
        clearAnalyticsEventsRecording: () => X,
        debugLogEvent: () => W,
        default: () => er,
        expandEventProperties: () => H,
        expandLocation: () => U,
        getAnalyticsEventsRecording: () => Q,
        getNewAnalyticsLoadId: () => en,
        setUTMContext: () => Z,
        startRecordingAnalyticsEvents: () => z,
        stopRecordingAnalyticsEvents: () => q,
        trackNetworkAction: () => et
    }),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(772848),
    o = n(990547),
    a = n(570140),
    s = n(565384),
    l = n(569611),
    c = n(97145),
    u = n(857192),
    d = n(747161),
    f = n(848479),
    _ = n(960048),
    p = n(981631),
    h = n(94752),
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = { location: {} },
    S = r.createContext(I),
    T = {},
    N = 10000,
    A = 60000,
    C = 120000,
    R = 300000,
    P = 900000,
    w = 3600000,
    D = 86400000,
    L = 0.001,
    x = performance.now(),
    M = [];
function k(e) {
    M.push(e);
}
let j = {
    [p.rMx.APP_OPENED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.APP_BACKGROUND]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [p.rMx.ACK_MESSAGES]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [p.rMx.GUILD_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [p.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.START_SPEAKING]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.START_LISTENING]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [p.rMx.CHANNEL_OPENED]: {
        throttlePeriod: P,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [p.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.notif_type]
    },
    [p.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [p.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: C,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null != (t = e.source_class_list) ? t : [])];
        }
    },
    [p.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [p.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [p.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [p.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [p.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [p.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [p.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: L
    },
    [p.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: L
    },
    [p.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id]
    },
    [p.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [p.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.user_id]
    },
    [p.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: A,
        throttleKeys: () => []
    },
    [p.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [p.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab]
    },
    [p.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [p.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.message_id]
    },
    [p.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [p.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [p.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.REDACTABLE_MESSAGE_LOADED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id, e.message_id]
    },
    [p.rMx.OPEN_MODAL]: (e) =>
        e.type === p.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: A,
                  throttleKeys: (e) => [e.type]
              }
            : void 0
};
function U(e) {
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
function G(e) {
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
let B = () => h.E.NONE;
function F(e) {
    B = e;
}
let V = (0, o.trackMaker)({
    analyticEventConfigs: j,
    dispatcher: a.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function Z(e) {
    return (T = e);
}
function H(e) {
    var t, n, r, i;
    let o = null != e ? e : {};
    if (null != o.location) {
        let { location: e } = o;
        o = E({}, v(o, ['location']), U(e));
    }
    if (null != o.source) {
        let { source: e } = o;
        o = E({}, v(o, ['source']), G(e));
    }
    (o.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (o.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (o.cpu_core_count = f.Z.getCPUCoreCount()), (o.accessibility_features = B()), (o.rendered_locale = m.NW.currentLocale), (o.uptime_app = Math.floor((performance.now() - x) / 1000));
    let a = f.Z.getProcessUptime();
    null != a && (o.uptime_process_renderer = Math.floor(a));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = T;
    return (o.utm_source = null != (t = o.utm_source) ? t : s), (o.utm_medium = null != (n = o.utm_medium) ? n : l), (o.utm_campaign = null != (r = o.utm_campaign) ? r : c), (o.utm_content = null != (i = o.utm_content) ? i : u), M.forEach((e) => e(o)), o;
}
function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    u.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? l.Hj('Analytics', e, t) : l.Hj('Analytics', e);
}
let Y = !1,
    K = {};
function z() {
    Y = !0;
}
function q() {
    Y = !1;
}
function Q() {
    return K;
}
function X() {
    Object.keys(K).forEach((e) => {
        delete K[e];
    });
}
function J(e, t) {
    return !!Y && (null != t && (Array.isArray(K[e]) ? K[e].push(t) : (K[e] = [t])), !0);
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = String(e);
    if (
        (c.R.includes(r) ||
            _.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(r)
            }),
        J(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let i = H(t);
    return (
        W(r, i, n.logEventProperties),
        V(e, i, {
            flush: n.flush,
            fingerprint: n.fingerprint
        })
    );
}
let ee = (0, o.trackMaker)({
    analyticEventConfigs: j,
    dispatcher: a.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function et(e, t) {
    let n = H(E({ location: (0, s.k$)() }, t));
    (0, s.dT)(e, E({ type: 'action' }, t)), W(e, n), ee(e, n);
}
function en() {
    return (0, i.Z)();
}
let er = y(E({}, o), {
    getCampaignParams: o.getCampaignParams,
    setSystemAccessibilityFeatures: F,
    expandEventProperties: H,
    track: $
});
