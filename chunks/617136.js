n.d(t, {
    Ic: () => D,
    O5: () => x,
    Zk: () => M,
    _3: () => w,
    _F: () => L,
    _b: () => S,
    dA: () => R,
    jZ: () => P,
    mH: () => C,
    uk: () => A
}),
    n(388685);
var r = n(73800),
    i = n(772848),
    a = n(930446),
    o = n(367907),
    s = n(186102),
    l = n(857192),
    c = n(819640),
    u = n(626135),
    d = n(915750),
    f = n(569984),
    _ = n(497505),
    p = n(918701),
    h = n(977156),
    m = n(566078),
    g = n(46140),
    E = n(981631);
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
let I = Object.keys(_.jn),
    T = new Set([E.rMx.QUEST_CONTENT_VIEWED, E.rMx.QUEST_CONTENT_CLICKED]);
function S(e) {
    var t;
    return null != (t = I.find((t) => _.jn[t] === e)) ? t : '';
}
function A(e) {
    var t, n, r;
    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function N(e, t) {
    let n = m.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name,
        client_ad_session_id: (0, a.Gy)(t).uuid
    };
}
function C(e, t, n) {
    return {
        content_id: e,
        content_name: S(e),
        content_position: t,
        row_index: n
    };
}
function R(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1, shouldExtendSession: a = !1 } = e,
        s = f.Z.quests.get(t);
    if (null == s || ((0, h.X7)({ location: g.dr.QUEST_PREVIEW_TOOL }) && c.Z.getLayers().includes(E.S9g.USER_SETTINGS))) return;
    let d = y({}, N(s, a), r);
    if ((l.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, d), s.preview)) return;
    let _ = T.has(n);
    if (i) return o.ZP.trackWithMetadata(n, d, _);
    u.default.track(n, d, { flush: _ });
}
var P = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.MOBILE_SHARESHEET = 'MOBILE_SHARESHEET'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.WATCH_STREAM_CONFIRM = 'WATCH_STREAM_CONFIRM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.WATCH_VIDEO = 'WATCH_VIDEO'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e;
})({});
function w(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: a, questContentRowIndex: o, impressionId: l, trackGuildAndChannelMetadata: c = !1 } = e,
        u = (0, p.qe)(n),
        d = f.Z.getQuest(t);
    R({
        questId: t,
        event: E.rMx.QUEST_CONTENT_CLICKED,
        properties: v(y({}, u, C(n, a, o), (0, s.Z)()), {
            cta_name: r,
            quest_status: null != d ? A(d) : null,
            impression_id: l,
            google_advertising_id: f.Z.googleAdvertisingId,
            click_id: (0, i.Z)()
        }),
        trackGuildAndChannelMetadata: c,
        shouldExtendSession: (0, p.VB)(n)
    });
}
function D(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    R({
        questId: n,
        event: E.rMx.QUEST_BAR_MODE_CHANGED,
        properties: v(y({}, C(t)), {
            mode: r,
            previous_mode: i
        })
    });
}
function L() {
    let e = (0, d.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: a = !1, shouldExtendSession: o = !1 } = t;
        R({
            questId: n,
            event: r,
            properties: v(y({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: o
        });
    }
    return r.useCallback(t, [e]);
}
function x() {
    let e = L();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: a, questContentPosition: o, questContentRowIndex: l, trackGuildAndChannelMetadata: c = !1 } = t,
                u = f.Z.getQuest(n);
            e({
                questId: n,
                event: E.rMx.QUEST_CONTENT_CLICKED,
                properties: v(y({}, (0, p.qe)(r), C(r, o, l), (0, s.Z)()), {
                    cta_name: a,
                    quest_status: null != u ? A(u) : null,
                    click_id: (0, i.Z)(),
                    google_advertising_id: f.Z.googleAdvertisingId
                }),
                trackGuildAndChannelMetadata: c,
                shouldExtendSession: (0, p.VB)(r)
            });
        },
        [e]
    );
}
function M(e, t) {
    r.useEffect(() => {
        k(t, e);
    }, [e, t]);
}
function k(e, t) {
    o.ZP.trackWithMetadata(E.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    });
}
