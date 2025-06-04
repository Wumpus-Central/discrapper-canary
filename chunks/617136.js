n.d(t, {
    Ic: () => w,
    O5: () => L,
    Zk: () => x,
    _3: () => R,
    _F: () => D,
    _b: () => S,
    dA: () => C,
    jZ: () => P,
    mH: () => N,
    uk: () => T
}),
    n(388685);
var r = n(73800),
    i = n(772848),
    a = n(930446),
    o = n(367907),
    s = n(857192),
    l = n(819640),
    c = n(626135),
    u = n(915750),
    d = n(569984),
    f = n(497505),
    _ = n(918701),
    p = n(977156),
    h = n(566078),
    m = n(46140),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = Object.keys(f.jn),
    I = new Set([g.rMx.QUEST_CONTENT_VIEWED, g.rMx.QUEST_CONTENT_CLICKED]);
function S(e) {
    var t;
    return null != (t = v.find((t) => f.jn[t] === e)) ? t : '';
}
function T(e) {
    var t, n, r;
    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ? 'COMPLETED_CLAIMED' : (null == (n = e.userStatus) ? void 0 : n.completedAt) != null ? 'COMPLETED' : (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null ? 'ENROLLED' : 'NONE';
}
function A(e, t) {
    let n = h.r.build(e.config);
    return {
        quest_id: e.id,
        quest_type: n.questType,
        game_id: n.application.id,
        game_name: n.application.name,
        client_ad_session_id: (0, a.Gy)(t).uuid
    };
}
function N(e, t, n) {
    return {
        content_id: e,
        content_name: S(e),
        content_position: t,
        row_index: n
    };
}
function C(e) {
    let { questId: t, event: n, properties: r, trackGuildAndChannelMetadata: i = !1, shouldExtendSession: a = !1 } = e,
        u = d.Z.quests.get(t);
    if (null == u || ((0, p.X7)({ location: m.dr.QUEST_PREVIEW_TOOL }) && l.Z.getLayers().includes(g.S9g.USER_SETTINGS))) return;
    let f = b({}, A(u, a), r);
    if ((s.default.isLoggingAnalyticsEvents && console.info('[Quest] AnalyticsUtils.track', n, f), u.preview)) return;
    let _ = I.has(n);
    if (i) return o.ZP.trackWithMetadata(n, f, _);
    c.default.track(n, f, { flush: _ });
}
var P = (function (e) {
    return (e.LEARN_MORE = 'LEARN_MORE'), (e.SHOW_REWARD = 'SHOW_REWARD'), (e.CLAIM_REWARD = 'CLAIM_REWARD'), (e.GET_REWARD_CODE = 'GET_REWARD_CODE'), (e.COPY_REWARD_CODE = 'COPY_REWARD_CODE'), (e.ACCEPT_QUEST = 'ACCEPT_QUEST'), (e.COPY_QUEST_URL = 'COPY_QUEST_URL'), (e.MOBILE_SHARESHEET = 'MOBILE_SHARESHEET'), (e.TRACK_PROGRESS = 'TRACK_PROGRESS'), (e.CONNECT_CONSOLE = 'CONNECT_CONSOLE'), (e.CONNECT_CONSOLE_LINK = 'CONNECT_CONSOLE_LINK'), (e.VIEW_CONSOLE_CONNECTIONS = 'VIEW_CONSOLE_CONNECTION'), (e.VIEW_CONSOLE_CONNECTIONS_LINK = 'VIEW_CONSOLE_CONNECTIONS_LINK'), (e.VIEW_REQUIREMENTS = 'VIEW_REQUIREMENTS'), (e.SELECT_CONSOLE_PLATFORM = 'SELECT_CONSOLE_PLATFORM'), (e.SELECT_DESKTOP_PLATFORM = 'SELECT_DESKTOP_PLATFORM'), (e.DESELECT_PLATFORM = 'DESELECT_PLATFORM'), (e.DEFIBRILLATOR = 'DEFIBRILLATOR'), (e.DEFIBRILLATOR_RECONNECT_CONSOLE = 'DEFIBRILLATOR_RECONNECT_CONSOLE'), (e.OPEN_DISCLOSURE = 'OPEN_DISCLOSURE'), (e.WATCH_STREAM = 'WATCH_STREAM'), (e.WATCH_STREAM_CONFIRM = 'WATCH_STREAM_CONFIRM'), (e.REWARD_LEARN_MORE = 'REWARD_LEARN_MORE'), (e.OPEN_GAME_LINK = 'OPEN_GAME_LINK'), (e.OPEN_CONTEXT_MENU = 'OPEN_CONTEXT_MENU'), (e.OPEN_QUEST_HOME = 'OPEN_QUEST_HOME'), (e.QUEST_BAR_COPY_LINK = 'QUEST_BAR.COPY_LINK'), (e.CONTEXT_MENU_COPY_LINK = 'CONTEXT_MENU.COPY_LINK'), (e.CONTEXT_MENU_HIDE_CONTENT = 'CONTEXT_MENU.HIDE_CONTENT'), (e.CONTEXT_MENU_OPEN_GAME_LINK = 'CONTEXT_MENU.OPEN_GAME_LINK'), (e.CONTEXT_MENU_OPEN_DISCLOSURE = 'CONTEXT_MENU.OPEN_DISCLOSURE'), (e.CONTEXT_MENU_LEARN_MORE = 'CONTEXT_MENU.LEARN_MORE'), (e.HOW_TO_HELP_ARTICLE_XBOX = 'HOW_TO_HELP_ARTICLE_XBOX'), (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = 'HOW_TO_HELP_ARTICLE_PLAYSTATION'), (e.VIEW_QUESTS = 'VIEW_QUESTS'), (e.EXPAND = 'EXPAND'), (e.COLLAPSE = 'COLLAPSE'), (e.START_QUEST = 'START_QUEST'), (e.TRANSCRIPT_ENABLE = 'TRANSCRIPT_ENABLE'), (e.TRANSCRIPT_DISABLE = 'TRANSCRIPT_DISABLE'), (e.CLOSED_CAPTIONING_ENABLE = 'CLOSED_CAPTIONING_ENABLE'), (e.CLOSED_CAPTIONING_DISABLE = 'CLOSED_CAPTIONING_DISABLE'), (e.SEEK_BACKWARD = 'SEEK_BACKWARD'), (e.SEEK_FORWARD = 'SEEK_FORWARD'), (e.WATCH_VIDEO = 'WATCH_VIDEO'), (e.REDEEM_REWARD = 'REDEEM_REWARD'), (e.VISIT_REDEMPTION_LINK = 'VISIT_REDEMPTION_LINK'), e;
})({});
function R(e) {
    let { questId: t, questContent: n, questContentCTA: r, questContentPosition: a, questContentRowIndex: o, impressionId: s, trackGuildAndChannelMetadata: l = !1 } = e,
        c = (0, _.qe)(n),
        u = d.Z.getQuest(t);
    C({
        questId: t,
        event: g.rMx.QUEST_CONTENT_CLICKED,
        properties: O(b({}, c, N(n, a, o)), {
            cta_name: r,
            quest_status: null != u ? T(u) : null,
            impression_id: s,
            google_advertising_id: d.Z.googleAdvertisingId,
            click_id: (0, i.Z)()
        }),
        trackGuildAndChannelMetadata: l,
        shouldExtendSession: (0, _.VB)(n)
    });
}
function w(e) {
    let { questContent: t, questId: n, mode: r, prevMode: i } = e;
    C({
        questId: n,
        event: g.rMx.QUEST_BAR_MODE_CHANGED,
        properties: O(b({}, N(t)), {
            mode: r,
            previous_mode: i
        })
    });
}
function D() {
    let e = (0, u.WD)();
    function t(t) {
        let { questId: n, event: r, properties: i, trackGuildAndChannelMetadata: a = !1, shouldExtendSession: o = !1 } = t;
        C({
            questId: n,
            event: r,
            properties: O(b({}, i), { impression_id: null == e ? void 0 : e.getId() }),
            trackGuildAndChannelMetadata: a,
            shouldExtendSession: o
        });
    }
    return r.useCallback(t, [e]);
}
function L() {
    let e = D();
    return r.useCallback(
        (t) => {
            let { questId: n, questContent: r, questContentCTA: a, questContentPosition: o, questContentRowIndex: s, trackGuildAndChannelMetadata: l = !1 } = t,
                c = d.Z.getQuest(n);
            e({
                questId: n,
                event: g.rMx.QUEST_CONTENT_CLICKED,
                properties: O(b({}, (0, _.qe)(r), N(r, o, s)), {
                    cta_name: a,
                    quest_status: null != c ? T(c) : null,
                    click_id: (0, i.Z)(),
                    google_advertising_id: d.Z.googleAdvertisingId
                }),
                trackGuildAndChannelMetadata: l,
                shouldExtendSession: (0, _.VB)(r)
            });
        },
        [e]
    );
}
function x(e, t) {
    r.useEffect(() => {
        k(t, e);
    }, [e, t]);
}
function k(e, t) {
    o.ZP.trackWithMetadata(g.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    });
}
