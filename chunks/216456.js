n.d(t, {
    Cy: () => V,
    Ii: () => W,
    Mm: () => B,
    NI: () => P,
    Qg: () => G,
    Ut: () => Y,
    Y5: () => F,
    av: () => U,
    fF: () => M,
    jO: () => w,
    u0: () => H,
}),
    n(896048);
var r = n(64700),
    i = n(835245),
    a = n(345353),
    s = n(881615),
    o = n(861638),
    l = n(58149),
    c = n(69114),
    u = n(111162),
    d = n(186111),
    f = n(954571),
    p = n(723702),
    _ = n(906822),
    h = n(859703),
    m = n(341915),
    g = n(431490),
    E = n(807876),
    b = n(710969),
    y = n(792620),
    O = n(814793),
    A = n(654487),
    v = n(652215);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = Object.keys(m.uF),
    R = new Set([v.HAw.QUEST_CONTENT_VIEWED, v.HAw.QUEST_CONTENT_CLICKED]);
function w(e) {
    var t;
    return null != (t = N.find((t) => m.uF[t] === e)) ? t : "";
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
    let s = g.e.getConfig({ location: "quest_analytics" });
    return t
        ? s.use_ad_session_id
            ? e
            : null != (n = null == (r = (0, o.Vc)()) ? void 0 : r.uuid)
              ? n
              : null
        : null != (i = null == (a = (0, o.Vc)()) ? void 0 : a.uuid)
          ? i
          : null;
}
function x(e, t, n) {
    let r = (0, s.sN)(n).uuid;
    return I(
        {
            client_ad_session_id: r,
            billing_session_id: D(r, (0, b.xn)(t)),
        },
        (0, b.Kc)(e, t),
    );
}
function L(e, t, n) {
    var r;
    return I(
        {
            quest_id: e.id,
            quest_type: (0, O.pv)(e.config),
            game_id: e.config.application.id,
            game_name: e.config.application.name,
            application_ids: null != (r = (0, y._3)(e)) ? r : [],
        },
        x(e.id, t, n),
    );
}
function j(e, t, n, r) {
    return I(
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
        ((0, E.Q)({ location: A.rE.QUEST_PREVIEW_TOOL }) && d.A.getLayers().includes(v.zgK.USER_SETTINGS)) ||
        (u.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)
    )
        return;
    let i = R.has(e);
    if (n) return l.Ay.trackWithMetadata(e, t, i);
    f.default.track(e, t, { flush: i });
}
function U(e) {
    let {
            questId: t,
            event: n,
            properties: r,
            trackGuildAndChannelMetadata: i,
            shouldExtendSession: a = !1,
            sourceQuestContent: s,
        } = e,
        o = h.A.quests.get(t);
    null == o || k(n, I({}, L(o, s, a), r), i, o.preview);
}
function G(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: s = !1,
        sourceQuestContent: o,
    } = e;
    k(r, I({}, j(t, n, o, s), i), a, !1);
}
var V = (function (e) {
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
            questContentPosition: s,
            questContentRowIndex: o,
            impressionId: l,
            trackGuildAndChannelMetadata: u,
            sourceQuestContent: d,
        } = e,
        f = h.A.getQuest(t),
        _ = await (0, a.N)(w(n)),
        m = (0, b.Li)(n),
        g = (0, b.L4)(n),
        E = (0, b.yI)(n, t),
        y = (0, b.Gp)(n, t);
    U({
        questId: t,
        event: v.HAw.QUEST_CONTENT_CLICKED,
        properties: C(I({}, M(n, s, o), (0, c.A)()), {
            cta_name: r,
            quest_status: null != f ? P(f) : null,
            impression_id: l,
            apple_advertising_id: null != _ && (0, p.isIOS)() ? _.advertisingId : null,
            android_advertising_id: null != _ && (0, p.isAndroid)() ? _.advertisingId : null,
            click_id: (0, i.A)(),
            metadata_raw: null != m ? m : null,
            metadata_sealed: null != g ? g : null,
            traffic_metadata_raw: null != E ? E : null,
            traffic_metadata_sealed: null != y ? y : null,
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, b.xn)(n),
        sourceQuestContent: d,
    });
}
function B(e) {
    let { questContent: t, sourceQuestContent: n, questId: r, mode: i, prevMode: a } = e,
        s = M(t);
    U({
        questId: r,
        event: v.HAw.QUEST_BAR_MODE_CHANGED,
        properties: {
            content_id: s.content_id,
            content_name: s.content_name,
            mode: i,
            previous_mode: a,
        },
        sourceQuestContent: n,
    });
}
function H() {
    let e = (0, _.vU)();
    return r.useCallback(
        (t) => {
            U(C(I({}, t), { properties: C(I({}, t.properties), { impression_id: null == e ? void 0 : e.getId() }) }));
        },
        [e],
    );
}
function Y() {
    let e = H();
    return r.useCallback(
        (t) => {
            let {
                    questId: n,
                    questContent: r,
                    questContentCTA: s,
                    questContentPosition: o,
                    questContentRowIndex: l,
                    trackGuildAndChannelMetadata: u,
                    sourceQuestContent: d,
                } = t,
                f = h.A.getQuest(n),
                _ = (0, b.Li)(r),
                m = (0, b.L4)(r),
                g = (0, b.yI)(r, n),
                E = (0, b.Gp)(r, n);
            (0, a.N)(w(r)).then((t) => {
                e({
                    questId: n,
                    event: v.HAw.QUEST_CONTENT_CLICKED,
                    properties: C(I({}, M(r, o, l), (0, c.A)()), {
                        cta_name: s,
                        quest_status: null != f ? P(f) : null,
                        click_id: (0, i.A)(),
                        apple_advertising_id: null != t && (0, p.isIOS)() ? t.advertisingId : null,
                        android_advertising_id: null != t && (0, p.isAndroid)() ? t.advertisingId : null,
                        metadata_raw: null != _ ? _ : null,
                        metadata_sealed: null != m ? m : null,
                        traffic_metadata_raw: null != g ? g : null,
                        traffic_metadata_sealed: null != E ? E : null,
                    }),
                    trackGuildAndChannelMetadata: u,
                    shouldExtendSession: (0, b.xn)(r),
                    sourceQuestContent: d,
                });
            });
        },
        [e],
    );
}
function W(e, t) {
    r.useEffect(() => {
        K(t, e);
    }, [e, t]);
}
function K(e, t) {
    l.Ay.trackWithMetadata(v.HAw.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t,
    });
}
