n.d(t, {
    Ic: () => P,
    O5: () => D,
    Zk: () => L,
    _3: () => R,
    _F: () => w,
    _b: () => O,
    dA: () => A,
    jZ: () => C,
    mH: () => T,
    uk: () => I,
    ze: () => N
}),
    n(47120);
var r = n(192379),
    i = n(930446),
    o = n(367907),
    a = n(857192),
    s = n(819640),
    l = n(626135),
    c = n(915750),
    u = n(569984),
    d = n(497505),
    f = n(977156),
    _ = n(566078),
    p = n(46140),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = Object.keys(d.jn),
    y = new Set([h.rMx.QUEST_CONTENT_VIEWED, h.rMx.QUEST_CONTENT_CLICKED]);
function O(e) {
    var t;
    return null !== (t = v.find((t) => d.jn[t] === e)) && void 0 !== t ? t : '';
}
function I(e) {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function S(e, t) {
    let n = _.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name,
        client_ad_session_id: (0, i.G)(t).uuid
    };
}
function T(e, t, n) {
    return {
        content_id: e,
        content_name: O(e),
        content_position: t,
        row_index: n
    };
}
function N(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1 } = e;
    return A({
        questId: t,
        event: n,
        properties: r,
        trackGuildAndChannelMetadata: i,
        shouldExtendSession: !0
    });
}
function A(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1, shouldExtendSession: c = !1 } = e,
        d = u.Z.quests.get(t);
    if (null == d || ((0, f.X7)({ location: p.dr.QUEST_PREVIEW_TOOL }) && s.Z.getLayers().includes(h.S9g.USER_SETTINGS))) return;
    let _ = g({}, S(d, c), r);
    if ((a.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, _), d.preview)) return;
    let m = y.has(n);
    if (i) return o.ZP.trackWithMetadata(n, _, m);
    l.default.track(n, _, { flush: m });
}
var C = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e;
})({});
function R(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: o, impressionId: a, trackGuildAndChannelMetadata: s = !1 } = e;
    A({
        questId: t,
        event: h.rMx.QUEST_CONTENT_CLICKED,
        properties: b(g({}, T(n, i, o)), {
            cta_name: r,
            impression_id: a
        }),
        trackGuildAndChannelMetadata: s
    });
}
function P(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    A({
        questId: n,
        event: h.rMx.QUEST_BAR_MODE_CHANGED,
        properties: b(g({}, T(t)), {
            mode: r,
            previous_mode: i
        })
    });
}
function w() {
    let e = (0, c.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: o = !1 } = t;
        A({
            questId: n,
            event: r,
            properties: b(g({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: o
        });
    }
    return r.useCallback(t, [e]);
}
function D() {
    let e = w();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: i, questContentPosition: o, questContentRowIndex: a, trackGuildAndChannelMetadata: s = !1 } = t;
            e({
                questId: n,
                event: h.rMx.QUEST_CONTENT_CLICKED,
                properties: b(g({}, T(r, o, a)), { cta_name: i }),
                trackGuildAndChannelMetadata: s
            });
        },
        [e]
    );
}
function L(e, t) {
    r.useEffect(() => {
        x(t, e);
    }, [e, t]);
}
function x(e, t) {
    o.ZP.trackWithMetadata(h.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    });
}
