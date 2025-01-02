r.d(n, {
    Ic: function () {
        return y;
    },
    O5: function () {
        return A;
    },
    _3: function () {
        return b;
    },
    _F: function () {
        return S;
    },
    _b: function () {
        return g;
    },
    dA: function () {
        return T;
    },
    jZ: function () {
        return i;
    },
    mH: function () {
        return I;
    },
    uk: function () {
        return E;
    }
});
var i,
    a = r(47120);
var s = r(192379),
    o = r(367907),
    l = r(857192),
    u = r(626135),
    c = r(915750),
    d = r(569984),
    f = r(497505),
    _ = r(566078),
    h = r(981631);
let p = Object.keys(f.jn),
    m = new Set([h.rMx.QUEST_CONTENT_VIEWED, h.rMx.QUEST_CONTENT_CLICKED]);
function g(e) {
    var n;
    return null !== (n = p.find((n) => f.jn[n] === e)) && void 0 !== n ? n : '';
}
function E(e) {
    var n, r, i;
    return (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.completedAt) != null ? 'COMPLETED' : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function v(e) {
    let n = _.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name
    };
}
function I(e, n, r) {
    return {
        content_id: e,
        content_name: g(e),
        content_position: n,
        row_index: r
    };
}
function T(e) {
    let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: a = !1 } = e,
        s = d.Z.quests.get(n);
    if (null == s) return;
    let c = {
        ...v(s),
        ...i
    };
    if ((l.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', r, c), s.preview)) return;
    let f = m.has(r);
    if (a) return o.ZP.trackWithMetadata(r, c, f);
    u.default.track(r, c, { flush: f });
}
function b(e) {
    let { questId: n, questContent: r, questContentCTA: i, questContentPosition: a, questContentRowIndex: s, trackGuildAndChannelMetadata: o = !1 } = e;
    T({
        questId: n,
        event: h.rMx.QUEST_CONTENT_CLICKED,
        properties: {
            ...I(r, a, s),
            cta_name: i
        },
        trackGuildAndChannelMetadata: o
    });
}
function y(e) {
    let { questContent: n, questId: r, mode: i, prevMode: a } = e;
    T({
        questId: r,
        event: h.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            ...I(n),
            mode: i,
            previous_mode: a
        }
    });
}
function S() {
    let e = (0, c.WD)();
    function n(n) {
        let { questId: r, event: i, properties: a, trackGuildAndChannelMetadata: s = !1 } = n;
        T({
            questId: r,
            event: i,
            properties: {
                ...a,
                impression_id: null == e ? void 0 : e.getId()
            },
            trackGuildAndChannelMetadata: s
        });
    }
    return s.useCallback(n, [e]);
}
function A() {
    let e = S();
    return s.useCallback(
        (n) => {
            let { questId: r, questContent: i, questContentCTA: a, questContentPosition: s, questContentRowIndex: o, trackGuildAndChannelMetadata: l = !1 } = n;
            e({
                questId: r,
                event: h.rMx.QUEST_CONTENT_CLICKED,
                properties: {
                    ...I(i, s, o),
                    cta_name: a
                },
                trackGuildAndChannelMetadata: l
            });
        },
        [e]
    );
}
!(function (e) {
    (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD');
})(i || (i = {}));
