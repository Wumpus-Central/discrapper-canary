n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => j,
        AnalyticsContext: () => I,
        AnalyticsSchema: () => d,
        addExtraAnalyticsDecorator: () => k,
        clearAnalyticsEventsRecording: () => X,
        debugLogEvent: () => W,
        default: () => er,
        expandEventProperties: () => H,
        expandLocation: () => U,
        getAnalyticsEventsRecording: () => Q,
        getNewAnalyticsLoadId: () => en,
        setUTMContext: () => V,
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
    p = n(960048),
    _ = n(981631),
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
function v(e, t) {
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
function b(e, t) {
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
function y(e, t) {
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
let S = { location: {} },
    I = r.createContext(S),
    T = {},
    N = 10000,
    A = 60000,
    C = 120000,
    R = 300000,
    P = 900000,
    w = 3600000,
    D = 86400000,
    x = 0.001,
    L = performance.now(),
    M = [];
function k(e) {
    M.push(e);
}
let j = {
    [_.rMx.APP_OPENED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [_.rMx.APP_BACKGROUND]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [_.rMx.ACK_MESSAGES]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [_.rMx.GUILD_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [_.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab_opened]
    },
    [_.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab_opened]
    },
    [_.rMx.START_SPEAKING]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.server]
    },
    [_.rMx.START_LISTENING]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.server]
    },
    [_.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [_.rMx.CHANNEL_OPENED]: {
        throttlePeriod: P,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [_.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.notif_type]
    },
    [_.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [_.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: C,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [_.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [_.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.type]
    },
    [_.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [_.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [_.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [_.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [_.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: P,
        throttleKeys: () => []
    },
    [_.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: D,
        throttleKeys: () => []
    },
    [_.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: x
    },
    [_.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: x
    },
    [_.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.application_id]
    },
    [_.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: D,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [_.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.type]
    },
    [_.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [_.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [_.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.user_id]
    },
    [_.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: A,
        throttleKeys: () => []
    },
    [_.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [_.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id]
    },
    [_.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.tab]
    },
    [_.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.guild_id]
    },
    [_.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [_.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: w,
        throttleKeys: () => []
    },
    [_.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.message_id]
    },
    [_.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.location_stack]
    },
    [_.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.location_stack]
    },
    [_.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: P,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [_.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: R,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [_.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [_.rMx.OPEN_MODAL]: (e) =>
        e.type === _.jXE.MEDIA_VIEWER
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
function Z(e) {
    B = e;
}
let F = (0, o.trackMaker)({
    analyticEventConfigs: j,
    dispatcher: a.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function V(e) {
    return (T = e);
}
function H(e) {
    var t, n, r, i;
    let o = e;
    if ((o || (o = {}), null != o.location)) {
        let { location: e } = o;
        o = E({}, y(o, ['location']), U(e));
    }
    if (null != o.source) {
        let { source: e } = o;
        o = E({}, y(o, ['source']), G(e));
    }
    (o.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (o.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (o.cpu_core_count = f.Z.getCPUCoreCount()), (o.accessibility_features = B()), (o.rendered_locale = m.NW.currentLocale), (o.uptime_app = Math.floor((performance.now() - L) / 1000));
    let a = f.Z.getProcessUptime();
    null != a && (o.uptime_process_renderer = Math.floor(a));
    let { utmSource: s, utmMedium: l, utmCampaign: c, utmContent: u } = T;
    return (o.utm_source = null !== (t = o.utm_source) && void 0 !== t ? t : s), (o.utm_medium = null !== (n = o.utm_medium) && void 0 !== n ? n : l), (o.utm_campaign = null !== (r = o.utm_campaign) && void 0 !== r ? r : c), (o.utm_content = null !== (i = o.utm_content) && void 0 !== i ? i : u), M.forEach((e) => e(o)), o;
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
            p.Z.addBreadcrumb({
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
        F(e, i, {
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
let er = b(E({}, o), {
    getCampaignParams: o.getCampaignParams,
    setSystemAccessibilityFeatures: Z,
    expandEventProperties: H,
    track: $
});
