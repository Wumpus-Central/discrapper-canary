n.d(t, {
    Ic: () => R,
    O5: () => D,
    Zk: () => L,
    _3: () => P,
    _F: () => w,
    _b: () => I,
    dA: () => A,
    jZ: () => C,
    mH: () => N,
    uk: () => S
}),
    n(388685);
var r = n(192379),
    i = n(930446),
    o = n(367907),
    a = n(857192),
    s = n(819640),
    l = n(626135),
    c = n(915750),
    u = n(569984),
    d = n(497505),
    f = n(918701),
    _ = n(977156),
    p = n(566078),
    h = n(46140),
    m = n(981631);
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
let v = Object.keys(d.jn),
    O = new Set([m.rMx.QUEST_CONTENT_VIEWED, m.rMx.QUEST_CONTENT_CLICKED]);
function I(e) {
    var t;
    return null != (t = v.find((t) => d.jn[t] === e)) ? t : '';
}
function S(e) {
    var t, n, r;
    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function T(e, t) {
    let n = p.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name,
        client_ad_session_id: (0, i.Gy)(t).uuid
    };
}
function N(e, t, n) {
    return {
        content_id: e,
        content_name: I(e),
        content_position: t,
        row_index: n
    };
}
function A(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1, shouldExtendSession: c = !1 } = e,
        d = u.Z.quests.get(t);
    if (null == d || ((0, _.X7)({ location: h.dr.QUEST_PREVIEW_TOOL }) && s.Z.getLayers().includes(m.S9g.USER_SETTINGS))) return;
    let f = E({}, T(d, c), r);
    if ((a.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, f), d.preview)) return;
    let p = O.has(n);
    if (i) return o.ZP.trackWithMetadata(n, f, p);
    l.default.track(n, f, { flush: p });
}
var C = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.WATCH_VIDEO = 'WATCH_VIDEO'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e;
})({});
function P(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: o, impressionId: a, trackGuildAndChannelMetadata: s = !1 } = e,
        l = (0, f.qe)(n);
    A({
        questId: t,
        event: m.rMx.QUEST_CONTENT_CLICKED,
        properties: y(E({}, l, N(n, i, o)), {
            cta_name: r,
            impression_id: a
        }),
        trackGuildAndChannelMetadata: s,
        shouldExtendSession: (0, f.VB)(n)
    });
}
function R(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    A({
        questId: n,
        event: m.rMx.QUEST_BAR_MODE_CHANGED,
        properties: y(E({}, N(t)), {
            mode: r,
            previous_mode: i
        })
    });
}
function w() {
    let e = (0, c.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: o = !1, shouldExtendSession: a = !1 } = t;
        A({
            questId: n,
            event: r,
            properties: y(E({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: o,
            shouldExtendSession: a
        });
    }
    return r.useCallback(t, [e]);
}
function D() {
    let e = w();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: i, questContentPosition: o, questContentRowIndex: a, trackGuildAndChannelMetadata: s = !1 } = t,
                l = (0, f.qe)(r);
            e({
                questId: n,
                event: m.rMx.QUEST_CONTENT_CLICKED,
                properties: y(E({}, (0, f.eE)(l), N(r, o, a)), { cta_name: i }),
                trackGuildAndChannelMetadata: s,
                shouldExtendSession: (0, f.VB)(r)
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
    o.ZP.trackWithMetadata(m.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    });
}
