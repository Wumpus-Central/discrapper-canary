n.r(t),
    n.d(t, {
        AnalyticEventConfigs: () => x,
        AnalyticsContext: () => E,
        AnalyticsSchema: () => d,
        addExtraAnalyticsDecorator: () => D,
        clearAnalyticsEventsRecording: () => Y,
        debugLogEvent: () => B,
        default: () => X,
        expandEventProperties: () => G,
        expandLocation: () => L,
        getAnalyticsEventsRecording: () => H,
        getNewAnalyticsLoadId: () => Q,
        setUTMContext: () => U,
        startRecordingAnalyticsEvents: () => V,
        stopRecordingAnalyticsEvents: () => j,
        trackNetworkAction: () => q
    }),
    n(653041),
    n(47120);
var i = n(192379),
    r = n(772848),
    a = n(990547),
    s = n(570140),
    o = n(565384),
    l = n(569611),
    u = n(97145),
    c = n(857192),
    d = n(747161),
    f = n(848479),
    _ = n(960048),
    p = n(981631),
    h = n(94752),
    m = n(388032);
let g = { location: {} },
    E = i.createContext(g),
    v = {},
    y = 10000,
    I = 60000,
    b = 120000,
    T = 300000,
    S = 900000,
    A = 3600000,
    N = 86400000,
    C = 0.001,
    R = performance.now(),
    O = [];
function D(e) {
    O.push(e);
}
let x = {
    [p.rMx.APP_OPENED]: {
        throttlePeriod: T,
        throttleKeys: () => []
    },
    [p.rMx.APP_BACKGROUND]: {
        throttlePeriod: b,
        throttleKeys: () => []
    },
    [p.rMx.ACK_MESSAGES]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [p.rMx.GUILD_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [p.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.tab_opened]
    },
    [p.rMx.START_SPEAKING]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.START_LISTENING]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.server]
    },
    [p.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: I,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [p.rMx.CHANNEL_OPENED]: {
        throttlePeriod: S,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [p.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.notif_type]
    },
    [p.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: S,
        throttleKeys: () => []
    },
    [p.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: b,
        throttleKeys: (e) => {
            var t;
            return [e.shortcut_name, e.location_object, ...(null !== (t = e.source_class_list) && void 0 !== t ? t : [])];
        }
    },
    [p.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: y,
        throttleKeys: () => []
    },
    [p.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: b,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [p.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: T,
        throttleKeys: () => []
    },
    [p.rMx.AUDIO_INPUT_INITIALIZED]: {
        throttlePeriod: T,
        throttleKeys: () => []
    },
    [p.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: S,
        throttleKeys: () => []
    },
    [p.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: S,
        throttleKeys: () => []
    },
    [p.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [p.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: C
    },
    [p.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: C
    },
    [p.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.application_id]
    },
    [p.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [p.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: I,
        throttleKeys: (e) => [e.type]
    },
    [p.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: I,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: I,
        throttleKeys: (e) => [e.user_id]
    },
    [p.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: I,
        throttleKeys: () => []
    },
    [p.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: T,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [p.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.tab]
    },
    [p.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id]
    },
    [p.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: I,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [p.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: A,
        throttleKeys: () => []
    },
    [p.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.message_id]
    },
    [p.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: T,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: T,
        throttleKeys: (e) => [e.location_stack]
    },
    [p.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: T,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [p.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: T,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [p.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [p.rMx.OPEN_MODAL]: (e) =>
        e.type === p.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: I,
                  throttleKeys: (e) => [e.type]
              }
            : void 0
};
function L(e) {
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
function P(e) {
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
let w = () => h.E.NONE;
function M(e) {
    w = e;
}
let k = (0, a.trackMaker)({
    analyticEventConfigs: x,
    dispatcher: s.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function U(e) {
    return (v = e);
}
function G(e) {
    var t, n, i, r;
    let a = e;
    if ((a || (a = {}), null != a.location)) {
        let { location: e, ...t } = a;
        a = {
            ...t,
            ...L(e)
        };
    }
    if (null != a.source) {
        let { source: e, ...t } = a;
        a = {
            ...t,
            ...P(e)
        };
    }
    (a.client_performance_cpu = f.Z.getCurrentCPUUsagePercent()), (a.client_performance_memory = f.Z.getCurrentMemoryUsageKB()), (a.cpu_core_count = f.Z.getCPUCoreCount()), (a.accessibility_features = w()), (a.rendered_locale = m.intl.currentLocale), (a.uptime_app = Math.floor((performance.now() - R) / 1000));
    let s = f.Z.getProcessUptime();
    null != s && (a.uptime_process_renderer = Math.floor(s));
    let { utmSource: o, utmMedium: l, utmCampaign: u, utmContent: c } = v;
    return (a.utm_source = null !== (t = a.utm_source) && void 0 !== t ? t : o), (a.utm_medium = null !== (n = a.utm_medium) && void 0 !== n ? n : l), (a.utm_campaign = null !== (i = a.utm_campaign) && void 0 !== i ? i : u), (a.utm_content = null !== (r = a.utm_content) && void 0 !== r ? r : c), O.forEach((e) => e(a)), a;
}
function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? l.Hj('Analytics', e, t) : l.Hj('Analytics', e);
}
let Z = !1,
    F = {};
function V() {
    Z = !0;
}
function j() {
    Z = !1;
}
function H() {
    return F;
}
function Y() {
    Object.keys(F).forEach((e) => {
        delete F[e];
    });
}
function W(e, t) {
    return !!Z && (null != t && (Array.isArray(F[e]) ? F[e].push(t) : (F[e] = [t])), !0);
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = String(e);
    if (
        (u.R.includes(i) ||
            _.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(i)
            }),
        W(e, t),
        null != n.throttlePercent && Math.random() > n.throttlePercent)
    )
        return Promise.resolve();
    let r = G(t);
    return (
        B(i, r, n.logEventProperties),
        k(e, r, {
            flush: n.flush,
            fingerprint: n.fingerprint
        })
    );
}
let z = (0, a.trackMaker)({
    analyticEventConfigs: x,
    dispatcher: s.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function q(e, t) {
    let n = G({
        location: (0, o.k$)(),
        ...t
    });
    (0, o.dT)(e, {
        type: 'action',
        ...t
    }),
        B(e, n),
        z(e, n);
}
function Q() {
    return (0, r.Z)();
}
let X = {
    ...a,
    getCampaignParams: a.getCampaignParams,
    setSystemAccessibilityFeatures: M,
    expandEventProperties: G,
    track: K
};
