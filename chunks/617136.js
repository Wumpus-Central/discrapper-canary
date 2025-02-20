n.d(t, {
    Ic: () => C,
    O5: () => P,
    _3: () => A,
    _F: () => R,
    _b: () => y,
    dA: () => T,
    jZ: () => N,
    mH: () => I,
    uk: () => O
}),
    n(47120);
var r = n(192379),
    i = n(367907),
    o = n(857192),
    a = n(819640),
    s = n(626135),
    l = n(915750),
    c = n(569984),
    u = n(497505),
    d = n(977156),
    f = n(566078),
    p = n(46140),
    _ = n(981631);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = Object.keys(u.jn),
    b = new Set([_.rMx.QUEST_CONTENT_VIEWED, _.rMx.QUEST_CONTENT_CLICKED]);
function y(e) {
    var t;
    return null !== (t = v.find((t) => u.jn[t] === e)) && void 0 !== t ? t : '';
}
function O(e) {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function S(e) {
    let t = f.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: t.questType,
        game_id: t.application.id,
        game_name: t.application.name
    };
}
function I(e, t, n) {
    return {
        content_id: e,
        content_name: y(e),
        content_position: t,
        row_index: n
    };
}
function T(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: l = !1 } = e,
        u = c.Z.quests.get(t);
    if (null == u || ((0, d.X7)({ location: p.dr.QUEST_PREVIEW_TOOL }) && a.Z.getLayers().includes(_.S9g.USER_SETTINGS))) return;
    let f = m({}, S(u), r);
    if ((o.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, f), u.preview)) return;
    let h = b.has(n);
    if (l) return i.ZP.trackWithMetadata(n, f, h);
    s.default.track(n, f, { flush: h });
}
var N = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e;
})({});
function A(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: i, questContentRowIndex: o, impressionId: a, trackGuildAndChannelMetadata: s = !1 } = e;
    T({
        questId: t,
        event: _.rMx.QUEST_CONTENT_CLICKED,
        properties: E(m({}, I(n, i, o)), {
            cta_name: r,
            impression_id: a
        }),
        trackGuildAndChannelMetadata: s
    });
}
function C(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    T({
        questId: n,
        event: _.rMx.QUEST_BAR_MODE_CHANGED,
        properties: E(m({}, I(t)), {
            mode: r,
            previous_mode: i
        })
    });
}
function R() {
    let e = (0, l.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: o = !1 } = t;
        T({
            questId: n,
            event: r,
            properties: E(m({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: o
        });
    }
    return r.useCallback(t, [e]);
}
function P() {
    let e = R();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: i, questContentPosition: o, questContentRowIndex: a, trackGuildAndChannelMetadata: s = !1 } = t;
            e({
                questId: n,
                event: _.rMx.QUEST_CONTENT_CLICKED,
                properties: E(m({}, I(r, o, a)), { cta_name: i }),
                trackGuildAndChannelMetadata: s
            });
        },
        [e]
    );
}
