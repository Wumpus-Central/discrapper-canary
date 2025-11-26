n.d(t, {
    Ic: () => j,
    O5: () => G,
    Zk: () => B,
    _3: () => k,
    _F: () => U,
    _b: () => R,
    dA: () => x,
    jZ: () => M,
    mH: () => L,
    uk: () => P,
}),
    n(388685);
var r = n(473749),
    i = n(772848),
    a = n(516796),
    o = n(930446),
    s = n(912471),
    l = n(367907),
    c = n(186102),
    u = n(857192),
    d = n(819640),
    f = n(626135),
    _ = n(358085),
    p = n(915750),
    h = n(616022),
    m = n(49436),
    g = n(509212),
    E = n(727160),
    b = n(879142),
    y = n(36243),
    O = n(324805),
    v = n(981631);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = Object.keys(m.jn),
    N = new Set([v.rMx.QUEST_CONTENT_VIEWED, v.rMx.QUEST_CONTENT_CLICKED]);
function R(e) {
    var t;
    return null != (t = C.find((t) => m.jn[t] === e)) ? t : "";
}
function P(e) {
    var t, n, r;
    return (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null
        ? "COMPLETED_CLAIMED"
        : (null == (n = e.userStatus) ? void 0 : n.completedAt) != null
          ? "COMPLETED"
          : (null == (r = e.userStatus) ? void 0 : r.enrolledAt) != null
            ? "ENROLLED"
            : "NONE";
}
function D(e, t) {
    var n, r, i, a;
    let o = E.T.getConfig({ location: "quest_analytics" }),
        l = b.E.getConfig({ location: "quest_analytics" });
    return !t && l.use_user_session_for_earned
        ? null != (i = null == (r = (0, s.Ai)()) ? void 0 : r.uuid)
            ? i
            : null
        : o.use_ad_session_id
          ? e
          : null != (a = null == (n = (0, s.Ai)()) ? void 0 : n.uuid)
            ? a
            : null;
}
function w(e, t, n) {
    var r;
    let i = (0, o.Gy)(n).uuid;
    return T(
        {
            quest_id: e.id,
            quest_type: (0, g.BI)(e.config),
            game_id: e.config.application.id,
            game_name: e.config.application.name,
            application_ids: null != (r = (0, g.MC)(e)) ? r : [],
            client_ad_session_id: i,
            billing_session_id: D(i, (0, g.VB)(t)),
        },
        (0, g.qe)(e.id, t),
    );
}
function L(e, t, n) {
    return {
        content_id: e,
        content_name: R(e),
        content_position: t,
        row_index: n,
    };
}
function x(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: a = !1,
            sourceQuestContent: o,
        } = e,
        s = h.Z.quests.get(t);
    if (null == s || ((0, y.X)({ location: O.dr.QUEST_PREVIEW_TOOL }) && d.Z.getLayers().includes(v.S9g.USER_SETTINGS)))
        return;
    let c = T({}, w(s, o, a), r);
    if ((u.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, c), s.preview)) return;
    let _ = N.has(n);
    if (i) return l.ZP.trackWithMetadata(n, c, _);
    f.default.track(n, c, { flush: _ });
}
var M = (function (e) {
    return (
        (e.LEARN_MORE = "LEARN_MORE"),
        (e.SHOW_REWARD = "SHOW_REWARD"),
        (e.CLAIM_REWARD = "CLAIM_REWARD"),
        (e.GET_REWARD_CODE = "GET_REWARD_CODE"),
        (e.COPY_REWARD_CODE = "COPY_REWARD_CODE"),
        (e.ACCEPT_QUEST = "ACCEPT_QUEST"),
        (e.COPY_QUEST_URL = "COPY_QUEST_URL"),
        (e.MOBILE_SHARESHEET = "MOBILE_SHARESHEET"),
        (e.TRACK_PROGRESS = "TRACK_PROGRESS"),
        (e.CONNECT_CONSOLE = "CONNECT_CONSOLE"),
        (e.CONNECT_CONSOLE_LINK = "CONNECT_CONSOLE_LINK"),
        (e.VIEW_CONSOLE_CONNECTIONS = "VIEW_CONSOLE_CONNECTION"),
        (e.VIEW_CONSOLE_CONNECTIONS_LINK = "VIEW_CONSOLE_CONNECTIONS_LINK"),
        (e.VIEW_REQUIREMENTS = "VIEW_REQUIREMENTS"),
        (e.SELECT_CONSOLE_PLATFORM = "SELECT_CONSOLE_PLATFORM"),
        (e.SELECT_DESKTOP_PLATFORM = "SELECT_DESKTOP_PLATFORM"),
        (e.DESELECT_PLATFORM = "DESELECT_PLATFORM"),
        (e.DEFIBRILLATOR = "DEFIBRILLATOR"),
        (e.DEFIBRILLATOR_RECONNECT_CONSOLE = "DEFIBRILLATOR_RECONNECT_CONSOLE"),
        (e.OPEN_DISCLOSURE = "OPEN_DISCLOSURE"),
        (e.WATCH_STREAM = "WATCH_STREAM"),
        (e.WATCH_STREAM_CONFIRM = "WATCH_STREAM_CONFIRM"),
        (e.REWARD_LEARN_MORE = "REWARD_LEARN_MORE"),
        (e.OPEN_GAME_LINK = "OPEN_GAME_LINK"),
        (e.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU"),
        (e.OPEN_QUEST_HOME = "OPEN_QUEST_HOME"),
        (e.QUEST_BAR_COPY_LINK = "QUEST_BAR.COPY_LINK"),
        (e.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK"),
        (e.REWARD_MODAL_COPY_LINK = "REWARD_MODAL.COPY_LINK"),
        (e.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT"),
        (e.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK"),
        (e.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE"),
        (e.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE"),
        (e.HOW_TO_HELP_ARTICLE_XBOX = "HOW_TO_HELP_ARTICLE_XBOX"),
        (e.HOW_TO_HELP_ARTICLE_PLAYSTATION = "HOW_TO_HELP_ARTICLE_PLAYSTATION"),
        (e.VIEW_QUESTS = "VIEW_QUESTS"),
        (e.EXPAND = "EXPAND"),
        (e.COLLAPSE = "COLLAPSE"),
        (e.START_QUEST = "START_QUEST"),
        (e.TRANSCRIPT_ENABLE = "TRANSCRIPT_ENABLE"),
        (e.TRANSCRIPT_DISABLE = "TRANSCRIPT_DISABLE"),
        (e.CLOSED_CAPTIONING_ENABLE = "CLOSED_CAPTIONING_ENABLE"),
        (e.CLOSED_CAPTIONING_DISABLE = "CLOSED_CAPTIONING_DISABLE"),
        (e.SEEK_BACKWARD = "SEEK_BACKWARD"),
        (e.SEEK_FORWARD = "SEEK_FORWARD"),
        (e.WATCH_VIDEO = "WATCH_VIDEO"),
        (e.QUEST_BAR_VIDEO_QUEST_PREVIEW = "QUEST_BAR_VIDEO_QUEST_PREVIEW"),
        (e.QUEST_HOME_TILE_HEADER_WATCH_VIDEO = "QUEST_HOME_TILE_HEADER_WATCH_VIDEO"),
        (e.REDEEM_REWARD = "REDEEM_REWARD"),
        (e.VISIT_REDEMPTION_LINK = "VISIT_REDEMPTION_LINK"),
        (e.SPONSORED_QUEST_SHEET = "SPONSORED_QUEST_SHEET"),
        (e.GAME_PROFILE_OPEN = "GAME_PROFILE_OPEN"),
        (e.GAME_STORE_OPEN_GAME_LINK = "GAME_STORE_OPEN_GAME_LINK"),
        (e.MOBILE_ORBS_ONBOARDING_DC = "MOBILE_ORBS_ONBOARDING_DC"),
        e
    );
})({});
async function k(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: r,
            questContentPosition: o,
            questContentRowIndex: s,
            impressionId: l,
            trackGuildAndChannelMetadata: u = !1,
            sourceQuestContent: d,
        } = e,
        f = h.Z.getQuest(t),
        p = await (0, a.S)(R(n)),
        m = (0, g.jY)(n),
        E = (0, g.R_)(n);
    x({
        questId: t,
        event: v.rMx.QUEST_CONTENT_CLICKED,
        properties: A(T({}, L(n, o, s), (0, c.Z)()), {
            cta_name: r,
            quest_status: null != f ? P(f) : null,
            impression_id: l,
            apple_advertising_id: null != p && (0, _.isIOS)() ? p.advertisingId : null,
            android_advertising_id: null != p && (0, _.isAndroid)() ? p.advertisingId : null,
            click_id: (0, i.Z)(),
            metadata_raw: null != m ? m : null,
            metadata_sealed: null != E ? E : null,
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, g.VB)(n),
        sourceQuestContent: d,
    });
}
function j(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e,
        o = L(t);
    x({
        questId: r,
        event: v.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            content_id: o.content_id,
            content_name: o.content_name,
            mode: i,
            previous_mode: a,
        },
        sourceQuestContent: n,
    });
}
function U() {
    let e = (0, p.WD)();
    return r.useCallback(
        (t) => {
            x(A(T({}, t), { properties: A(T({}, t.properties), { impression_id: null == e ? void 0 : e.getId() }) }));
        },
        [e],
    );
}
function G() {
    let e = U();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: o,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    trackGuildAndChannelMetadata: u = !1,
                    sourceQuestContent: d,
                } = t,
                f = h.Z.getQuest(n),
                p = (0, g.jY)(r),
                m = (0, g.R_)(r);
            (0, a.S)(R(r)).then((t) => {
                e({
                    questId: n,
                    event: v.rMx.QUEST_CONTENT_CLICKED,
                    properties: A(T({}, L(r, s, l), (0, c.Z)()), {
                        cta_name: o,
                        quest_status: null != f ? P(f) : null,
                        click_id: (0, i.Z)(),
                        apple_advertising_id: null != t && (0, _.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, _.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != p ? p : null,
                        metadata_sealed: null != m ? m : null,
                    }),
                    trackGuildAndChannelMetadata: u,
                    shouldExtendSession: (0, g.VB)(r),
                    sourceQuestContent: d,
                });
            });
        },
        [e],
    );
}
function B(e, t) {
    r.useEffect(() => {
        Z(t, e);
    }, [e, t]);
}
function Z(e, t) {
    l.ZP.trackWithMetadata(v.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t,
    });
}
