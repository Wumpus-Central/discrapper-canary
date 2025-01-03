r.r(n),
    r.d(n, {
        AnalyticEventConfigs: function () {
            return P;
        },
        AnalyticsContext: function () {
            return T;
        },
        AnalyticsSchema: function () {
            return h;
        },
        addExtraAnalyticsDecorator: function () {
            return w;
        },
        clearAnalyticsEventsRecording: function () {
            return z;
        },
        debugLogEvent: function () {
            return V;
        },
        expandEventProperties: function () {
            return F;
        },
        expandLocation: function () {
            return M;
        },
        getAnalyticsEventsRecording: function () {
            return K;
        },
        getNewAnalyticsLoadId: function () {
            return $;
        },
        setUTMContext: function () {
            return Z;
        },
        startRecordingAnalyticsEvents: function () {
            return Y;
        },
        stopRecordingAnalyticsEvents: function () {
            return W;
        },
        trackNetworkAction: function () {
            return J;
        }
    });
var i = r(653041);
var a = r(47120);
var s = r(192379),
    o = r(772848),
    l = r(990547),
    u = r(570140),
    c = r(565384),
    d = r(569611),
    f = r(97145),
    _ = r(857192),
    h = r(747161),
    p = r(848479),
    m = r(960048),
    g = r(981631),
    E = r(94752),
    v = r(388032);
let I = { location: {} },
    T = s.createContext(I),
    b = {},
    y = 10000,
    S = 60000,
    A = 120000,
    N = 300000,
    C = 900000,
    R = 3600000,
    O = 86400000,
    D = 0.001,
    L = performance.now(),
    x = [];
function w(e) {
    x.push(e);
}
let P = {
    [g.rMx.APP_OPENED]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [g.rMx.APP_BACKGROUND]: {
        throttlePeriod: A,
        throttleKeys: () => []
    },
    [g.rMx.ACK_MESSAGES]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id, e.channel_id, e.location_section]
    },
    [g.rMx.GUILD_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id, e.is_pending]
    },
    [g.rMx.FRIENDS_LIST_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.tab_opened]
    },
    [g.rMx.NOW_PLAYING_CARD_HOVERED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.tab_opened]
    },
    [g.rMx.START_SPEAKING]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.server]
    },
    [g.rMx.START_LISTENING]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.server]
    },
    [g.rMx.ACTIVITY_UPDATED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.application_id],
        deduplicate: !0
    },
    [g.rMx.CHANNEL_OPENED]: {
        throttlePeriod: C,
        throttleKeys: (e) => (null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view])
    },
    [g.rMx.TEXT_IN_VOICE_OPENED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.NOTIFICATION_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.notif_type]
    },
    [g.rMx.MEMBER_LIST_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.DM_LIST_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.NAV_DRAWER_OPENED]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [g.rMx.KEYBOARD_SHORTCUT_USED]: {
        throttlePeriod: A,
        throttleKeys: (e) => {
            var n;
            return [e.shortcut_name, e.location_object, ...(null !== (n = e.source_class_list) && void 0 !== n ? n : [])];
        }
    },
    [g.rMx.QUICKSWITCHER_OPENED]: {
        throttlePeriod: y,
        throttleKeys: () => []
    },
    [g.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.type]
    },
    [g.rMx.ROLE_PAGE_VIEWED]: {
        throttlePeriod: A,
        throttleKeys: (e) => [e.role_id, e.tab_opened]
    },
    [g.rMx.VIDEO_INPUT_INITIALIZED]: {
        throttlePeriod: N,
        throttleKeys: () => []
    },
    [g.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [g.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
        throttlePeriod: C,
        throttleKeys: () => []
    },
    [g.rMx.RPC_SERVER_ERROR_CAUGHT]: {
        throttlePeriod: O,
        throttleKeys: () => []
    },
    [g.rMx.RPC_COMMAND_SENT]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.application_id, e.command],
        throttlePercent: D
    },
    [g.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.application_id, e.event],
        throttlePercent: D
    },
    [g.rMx.ACTIVITY_HANDSHAKE]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.application_id]
    },
    [g.rMx.CHANNEL_BANNER_VIEWED]: {
        throttlePeriod: O,
        throttleKeys: (e) => [e.banner_type, e.channel_id]
    },
    [g.rMx.PREMIUM_UPSELL_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.type]
    },
    [g.rMx.FORUM_CHANNEL_SEARCHED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [g.rMx.FORUM_CHANNEL_SCROLLED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [g.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.user_id]
    },
    [g.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
        throttlePeriod: S,
        throttleKeys: () => []
    },
    [g.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.ACTIVITY_CARDS_VIEWED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.context, e.guild_id]
    },
    [g.rMx.GUILD_TOOLTIP_SHOWN]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id]
    },
    [g.rMx.ACK_COMMUNITY_MESSAGES]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.REDESIGN_NAV_BAR_CLICKED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.tab]
    },
    [g.rMx.CHANNEL_LIST_END_REACHED]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.guild_id]
    },
    [g.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
        throttlePeriod: S,
        throttleKeys: (e) => [e.guild_id, e.channel_id]
    },
    [g.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
        throttlePeriod: R,
        throttleKeys: () => []
    },
    [g.rMx.KEYWORD_FILTER_MATCH]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.message_id]
    },
    [g.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.location_stack]
    },
    [g.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.location_stack]
    },
    [g.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
        throttlePeriod: C,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.activity_user_id, e.surface],
        deduplicate: !0
    },
    [g.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
        throttlePeriod: N,
        throttleKeys: (e) => [e.voice_channel_id],
        deduplicate: !0
    },
    [g.rMx.MEMBER_LIST_SWIPE_PEEK]: {
        throttlePeriod: 1000,
        throttleKeys: (e) => [e.channel_id]
    },
    [g.rMx.OPEN_MODAL]: (e) =>
        e.type === g.jXE.MEDIA_VIEWER
            ? {
                  throttlePeriod: S,
                  throttleKeys: (e) => [e.type]
              }
            : void 0
};
function M(e) {
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
function k(e) {
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
let U = () => E.E.NONE;
function B(e) {
    U = e;
}
let G = (0, l.trackMaker)({
    analyticEventConfigs: P,
    dispatcher: u.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function Z(e) {
    return (b = e);
}
function F(e) {
    var n, r, i, a;
    let s = e;
    if ((!s && (s = {}), null != s.location)) {
        let { location: e, ...n } = s;
        s = {
            ...n,
            ...M(e)
        };
    }
    if (null != s.source) {
        let { source: e, ...n } = s;
        s = {
            ...n,
            ...k(e)
        };
    }
    (s.client_performance_cpu = p.Z.getCurrentCPUUsagePercent()), (s.client_performance_memory = p.Z.getCurrentMemoryUsageKB()), (s.cpu_core_count = p.Z.getCPUCoreCount()), (s.accessibility_features = U()), (s.rendered_locale = v.intl.currentLocale), (s.uptime_app = Math.floor((performance.now() - L) / 1000));
    let o = p.Z.getProcessUptime();
    null != o && (s.uptime_process_renderer = Math.floor(o));
    let { utmSource: l, utmMedium: u, utmCampaign: c, utmContent: d } = b;
    return (s.utm_source = null !== (n = s.utm_source) && void 0 !== n ? n : l), (s.utm_medium = null !== (r = s.utm_medium) && void 0 !== r ? r : u), (s.utm_campaign = null !== (i = s.utm_campaign) && void 0 !== i ? i : c), (s.utm_content = null !== (a = s.utm_content) && void 0 !== a ? a : d), x.forEach((e) => e(s)), s;
}
function V(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    _.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, n), r ? d.Hj('Analytics', e, n) : d.Hj('Analytics', e);
}
let j = !1,
    H = {};
function Y() {
    j = !0;
}
function W() {
    j = !1;
}
function K() {
    return H;
}
function z() {
    Object.keys(H).forEach((e) => {
        delete H[e];
    });
}
function q(e, n) {
    return !!j && (null != n && (Array.isArray(H[e]) ? H[e].push(n) : (H[e] = [n])), !0);
}
function Q(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = String(e);
    if (
        (!f.R.includes(i) &&
            m.Z.addBreadcrumb({
                category: 'analytics',
                message: ''.concat(i)
            }),
        q(e, n),
        null != r.throttlePercent && Math.random() > r.throttlePercent)
    )
        return Promise.resolve();
    let a = F(n);
    return (
        V(i, a, r.logEventProperties),
        G(e, a, {
            flush: r.flush,
            fingerprint: r.fingerprint
        })
    );
}
let X = (0, l.trackMaker)({
    analyticEventConfigs: P,
    dispatcher: u.Z,
    TRACK_ACTION_NAME: 'TRACK'
});
function J(e, n) {
    let r = F({
        location: (0, c.k$)(),
        ...n
    });
    (0, c.dT)(e, {
        type: 'action',
        ...n
    }),
        V(e, r),
        X(e, r);
}
function $() {
    return (0, o.Z)();
}
n.default = {
    ...l,
    getCampaignParams: l.getCampaignParams,
    setSystemAccessibilityFeatures: B,
    expandEventProperties: F,
    track: Q
};
