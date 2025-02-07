n.d(t, {
    Ic: () => S,
    O5: () => N,
    _3: () => T,
    _F: () => A,
    _b: () => g,
    dA: () => I,
    jZ: () => b,
    mH: () => y,
    uk: () => E
}),
    n(47120);
var i = n(192379),
    r = n(367907),
    a = n(857192),
    s = n(819640),
    o = n(626135),
    l = n(915750),
    u = n(569984),
    c = n(497505),
    d = n(977156),
    f = n(566078),
    _ = n(46140),
    p = n(981631);
let h = Object.keys(c.jn),
    m = new Set([p.rMx.QUEST_CONTENT_VIEWED, p.rMx.QUEST_CONTENT_CLICKED]);
function g(e) {
    var t;
    return null !== (t = h.find((t) => c.jn[t] === e)) && void 0 !== t ? t : '';
}
function E(e) {
    var t, n, i;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function v(e) {
    let t = f.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: t.questType,
        game_id: t.application.id,
        game_name: t.application.name
    };
}
function y(e, t, n) {
    return {
        content_id: e,
        content_name: g(e),
        content_position: t,
        row_index: n
    };
}
function I(e) {
    let { questId: t, event: n, properties: i, trackGuildAndChannelMetadata: l = !1 } = e,
        c = u.Z.quests.get(t);
    if (null == c || ((0, d.X7)({ location: _.dr.QUEST_PREVIEW_TOOL }) && s.Z.getLayers().includes(p.S9g.USER_SETTINGS))) return;
    let f = {
        ...v(c),
        ...i
    };
    if ((a.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, f), c.preview)) return;
    let h = m.has(n);
    if (l) return r.ZP.trackWithMetadata(n, f, h);
    o.default.track(n, f, { flush: h });
}
var b = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), e;
})({});
function T(e) {
    let { questId: t, questContent: n, questContentCTA: i, questContentPosition: r, questContentRowIndex: a, impressionId: s, trackGuildAndChannelMetadata: o = !1 } = e;
    I({
        questId: t,
        event: p.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...y(n, r, a),
            cta_name: i,
            impression_id: s
        },
        trackGuildAndChannelMetadata: o
    });
}
function S(e) {
    let { questContent: t, questId: n, mode: i, prevMode: r } = e;
    I({
        questId: n,
        event: p.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            ...y(t),
            mode: i,
            previous_mode: r
        }
    });
}
function A() {
    let e = (0, l.WD)();
    function t(t) {
        let { questId: n, event: i, properties: r, trackGuildAndChannelMetadata: a = !1 } = t;
        I({
            questId: n,
            event: i,
            properties: {
                ...r,
                impression_id: null == e ? void 0 : e.getId()
            },
            trackGuildAndChannelMetadata: a
        });
    }
    return i.useCallback(t, [e]);
}
function N() {
    let e = A();
    return i.useCallback(
        (t) => {
            let { questId: n, questContent: i, questContentCTA: r, questContentPosition: a, questContentRowIndex: s, trackGuildAndChannelMetadata: o = !1 } = t;
            e({
                questId: n,
                event: p.rMx.QUEST_CONTENT_CLICKED,
                properties: {
                    ...y(i, a, s),
                    cta_name: r
                },
                trackGuildAndChannelMetadata: o
            });
        },
        [e]
    );
}
