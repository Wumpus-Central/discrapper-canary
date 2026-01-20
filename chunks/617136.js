n.d(t, {
    Gf: () => G,
    Ic: () => B,
    O5: () => H,
    Zk: () => Y,
    _3: () => F,
    _F: () => V,
    _b: () => w,
    dA: () => U,
    jZ: () => Z,
    mH: () => M,
    uk: () => R,
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
    p = n(358085),
    _ = n(915750),
    h = n(616022),
    m = n(49436),
    g = n(727160),
    E = n(36243),
    b = n(862657),
    y = n(254579),
    O = n(283689),
    v = n(324805),
    S = n(981631);
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
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = Object.keys(m.jn),
    P = new Set([S.rMx.QUEST_CONTENT_VIEWED, S.rMx.QUEST_CONTENT_CLICKED]);
function w(e) {
    var t;
    return null != (t = N.find((t) => m.jn[t] === e)) ? t : "";
}
function R(e) {
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
    let o = g.T.getConfig({ location: "quest_analytics" });
    return t
        ? o.use_ad_session_id
            ? e
            : null != (a = null == (n = (0, s.Ai)()) ? void 0 : n.uuid)
              ? a
              : null
        : null != (i = null == (r = (0, s.Ai)()) ? void 0 : r.uuid)
          ? i
          : null;
}
function x(e, t, n) {
    let r = (0, o.Gy)(n).uuid;
    return T(
        {
            client_ad_session_id: r,
            billing_session_id: D(r, (0, b.VB)(t)),
        },
        (0, b.qe)(e, t),
    );
}
function L(e, t, n) {
    var r;
    return T(
        {
            quest_id: e.id,
            quest_type: (0, O.BI)(e.config),
            game_id: e.config.application.id,
            game_name: e.config.application.name,
            application_ids: null != (r = (0, y.MC)(e)) ? r : [],
        },
        x(e.id, t, n),
    );
}
function j(e, t, n, r) {
    return T(
        {
            ad_content_id: e,
            creative_type: t,
        },
        x(e, n, r),
    );
}
function M(e, t, n) {
    return {
        content_id: e,
        content_name: w(e),
        content_position: t,
        row_index: n,
    };
}
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (
        ((0, E.X)({ location: v.dr.QUEST_PREVIEW_TOOL }) && d.Z.getLayers().includes(S.S9g.USER_SETTINGS)) ||
        (u.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = P.has(e);
    if (n) return l.ZP.trackWithMetadata(e, t, i);
    f.default.track(e, t, { flush: i });
}
function U(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: a = !1,
            sourceQuestContent: o,
        } = e,
        s = h.Z.quests.get(t);
    null != s && k(n, T({}, L(s, o, a), r), i, s.preview);
}
function G(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: o = !1,
        sourceQuestContent: s,
    } = e;
    k(r, T({}, j(t, n, s, o), i), a, !1);
}
var Z = (function (e) {
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
        (e.LAUNCH_MOBILE_ACTIVITY = "LAUNCH_MOBILE_ACTIVITY"),
        e
    );
})({});
async function F(e) {
    let {
            questId: t,
            questContent: n,
            questContentCTA: r,
            questContentPosition: o,
            questContentRowIndex: s,
            impressionId: l,
            trackGuildAndChannelMetadata: u,
            sourceQuestContent: d,
        } = e,
        f = h.Z.getQuest(t),
        _ = await (0, a.S)(w(n)),
        m = (0, b.jY)(n),
        g = (0, b.R_)(n),
        E = (0, b.NS)(n, t),
        y = (0, b.K8)(n, t);
    U({
        questId: t,
        event: S.rMx.QUEST_CONTENT_CLICKED,
        properties: A(T({}, M(n, o, s), (0, c.Z)()), {
            cta_name: r,
            quest_status: null != f ? R(f) : null,
            impression_id: l,
            apple_advertising_id: null != _ && (0, p.isIOS)() ? _.advertisingId : null,
            android_advertising_id: null != _ && (0, p.isAndroid)() ? _.advertisingId : null,
            click_id: (0, i.Z)(),
            metadata_raw: null != m ? m : null,
            metadata_sealed: null != g ? g : null,
            traffic_metadata_raw: null != E ? E : null,
            traffic_metadata_sealed: null != y ? y : null,
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, b.VB)(n),
        sourceQuestContent: d,
    });
}
function B(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e,
        o = M(t);
    U({
        questId: r,
        event: S.rMx.QUEST_BAR_MODE_CHANGED,
        properties: {
            content_id: o.content_id,
            content_name: o.content_name,
            mode: i,
            previous_mode: a,
        },
        sourceQuestContent: n,
    });
}
function V() {
    let e = (0, _.WD)();
    return r.useCallback(
        (t) => {
            U(A(T({}, t), { properties: A(T({}, t.properties), { impression_id: null == e ? void 0 : e.getId() }) }));
        },
        [e],
    );
}
function H() {
    let e = V();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: o,
                    questContentPosition: s,
                    questContentRowIndex: l,
                    trackGuildAndChannelMetadata: u,
                    sourceQuestContent: d,
                } = t,
                f = h.Z.getQuest(n),
                _ = (0, b.jY)(r),
                m = (0, b.R_)(r),
                g = (0, b.NS)(r, n),
                E = (0, b.K8)(r, n);
            (0, a.S)(w(r)).then((t) => {
                e({
                    questId: n,
                    event: S.rMx.QUEST_CONTENT_CLICKED,
                    properties: A(T({}, M(r, s, l), (0, c.Z)()), {
                        cta_name: o,
                        quest_status: null != f ? R(f) : null,
                        click_id: (0, i.Z)(),
                        apple_advertising_id: null != t && (0, p.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, p.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != _ ? _ : null,
                        metadata_sealed: null != m ? m : null,
                        traffic_metadata_raw: null != g ? g : null,
                        traffic_metadata_sealed: null != E ? E : null,
                    }),
                    trackGuildAndChannelMetadata: u,
                    shouldExtendSession: (0, b.VB)(r),
                    sourceQuestContent: d,
                });
            });
        },
        [e],
    );
}
function Y(e, t) {
    r.useEffect(() => {
        W(t, e);
    }, [e, t]);
}
function W(e, t) {
    l.ZP.trackWithMetadata(S.rMx.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t,
    });
}
