(n.d(t, {
    Ic: () => x,
    O5: () => M,
    Zk: () => j,
    _3: () => L,
    _F: () => k,
    _b: () => N,
    dA: () => w,
    jZ: () => D,
    mH: () => P,
    uk: () => C
}),
    n(388685));
var r = n(73800),
    i = n(772848),
    a = n(516796),
    o = n(930446),
    s = n(367907),
    l = n(186102),
    c = n(857192),
    u = n(819640),
    d = n(626135),
    _ = n(358085),
    f = n(915750),
    p = n(509212),
    h = n(569984),
    m = n(497505),
    g = n(977156),
    E = n(566078),
    b = n(46140),
    y = n(981631);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
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
let S = Object.keys(m.jn),
    A = new Set([y.rMx.QUEST_CONTENT_VIEWED, y.rMx.QUEST_CONTENT_CLICKED]);
function N(e) {
    var t;
    return null != (t = S.find((t) => m.jn[t] === e)) ? t : '';
}
function C(e) {
    var t, n, r;
    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function R(e, t) {
    let n = E.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name,
        client_ad_session_id: (0, o.Gy)(t).uuid
    };
}
function P(e, t, n) {
    return {
        content_id: e,
        content_name: N(e),
        content_position: t,
        row_index: n
    };
}
function w(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1, shouldExtendSession: a = !1, sourceQuestContent: o } = e,
        l = h.Z.quests.get(t);
    if (null == l || ((0, g.X7)({ location: b.dr.QUEST_PREVIEW_TOOL }) && u.Z.getLayers().includes(y.S9g.USER_SETTINGS))) return;
    let _ = v({}, R(l, a), (0, p.qe)(t, o), r);
    if ((c.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, _), l.preview)) return;
    let f = A.has(n);
    if (i) return s.ZP.trackWithMetadata(n, _, f);
    d.default.track(n, _, { flush: f });
}
var D = (function (e) {
    return ((e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.MOBILE_SHARESHEET = 'MOBILE_SHARESHEET'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.WATCH_STREAM_CONFIRM = 'WATCH_STREAM_CONFIRM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.WATCH_VIDEO = 'WATCH_VIDEO'), (e.QUEST_BAR_VIDEO_QUEST_PREVIEW = 'QUEST_BAR_VIDEO_QUEST_PREVIEW'), (e.QUEST_HOME_TILE_HEADER_WATCH_VIDEO = 'QUEST_HOME_TILE_HEADER_WATCH_VIDEO'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e);
})({});
async function L(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: o, questContentRowIndex: s, impressionId: c, trackGuildAndChannelMetadata: u = !1, sourceQuestContent: d } = e,
        f = h.Z.getQuest(t),
        m = await (0, a.S)();
    w({
        questId: t,
        event: y.rMx.QUEST_CONTENT_CLICKED,
        properties: T(v({}, P(n, o, s), (0, l.Z)()), {
            cta_name: r,
            quest_status: null != f ? C(f) : null,
            impression_id: c,
            android_advertising_id: null != m && (0, _.isAndroid)() ? m.advertisingId : null,
            click_id: (0, i.Z)()
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, p.VB)(n),
        sourceQuestContent: d
    });
}
function x(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e;
    w({
        questId: r,
        event: y.rMx.QUEST_BAR_MODE_CHANGED,
        properties: T(v({}, P(t)), {
            mode: i,
            previous_mode: a
        }),
        sourceQuestContent: n
    });
}
function k() {
    let e = (0, f.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: a = !1, shouldExtendSession: o = !1, sourceQuestContent: s } = t;
        w({
            questId: n,
            event: r,
            properties: T(v({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: o,
            sourceQuestContent: s
        });
    }
    return r.useCallback(t, [e]);
}
function M() {
    let e = k();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: o, questContentPosition: s, questContentRowIndex: c, trackGuildAndChannelMetadata: u = !1, sourceQuestContent: d } = t,
                f = h.Z.getQuest(n);
            (0, a.S)().then((t) => {
                e({
                    questId: n,
                    event: y.rMx.QUEST_CONTENT_CLICKED,
                    properties: T(v({}, P(r, s, c), (0, l.Z)()), {
                        cta_name: o,
                        quest_status: null != f ? C(f) : null,
                        click_id: (0, i.Z)(),
                        android_advertising_id: null != t && (0, _.isAndroid)() ? t.advertisingId : null
                    }),
                    trackGuildAndChannelMetadata: u,
                    shouldExtendSession: (0, p.VB)(r),
                    sourceQuestContent: d
                });
            });
        },
        [e]
    );
}
function j(e, t) {
    r.useEffect(() => {
        U(t, e);
    }, [e, t]);
}
function U(e, t) {
    s.ZP.trackWithMetadata(y.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    });
}
