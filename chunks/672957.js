n.r(t), n.d(t, { default: () => iA }), n(321073);
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(296704),
    o = n(462180),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    g = n(922016),
    I = n(192308),
    _ = n(228366),
    N = n(442433),
    m = n(793574),
    C = n(688810),
    S = n(285059),
    T = n(63995);
n(113783);
var p = n(518769),
    M = n(446600),
    f = n(624265);
n(616356);
var O = n(734057),
    L = n(576705),
    R = n(607567),
    x = n(988794);
let G = { hiddenEventsAndStages: [] };
class D extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (G = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && G.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && G.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return G;
    }
}
let U = new D(_.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? G.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && G.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        G.hiddenEventsAndStages.includes(n) &&
            (t.status === x.XG.CANCELED || t.status === x.XG.COMPLETED) &&
            (G.hiddenEventsAndStages = G.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        G.hiddenEventsAndStages.includes(n) &&
            (G.hiddenEventsAndStages = G.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        G.hiddenEventsAndStages.includes(n) &&
            (G.hiddenEventsAndStages = G.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var b = n(508654);
n(818348);
var y = n(600975),
    P = n(652215);
let H = (0, y.C)({
    kind: "guild",
    id: "2021-10_study_group",
    label: "Student hub study group",
    defaultConfig: { enableStudyGroup: !1 },
    treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
});
function v(e) {
    return (
        r.useEffect(() => {
            null != e &&
                e.features.has(P.GuildFeatures.HUB) &&
                H.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        H.useExperiment(
            { guildId: e?.id ?? P.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(P.GuildFeatures.HUB) },
        )
    );
}
var j = n(320426),
    B = n(915043),
    w = n(506774),
    k = n(498642),
    X = n(71393),
    V = n(124759);
let K = "publicUpsellChannelNoticeGuilds",
    F = new Set();
class W extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(L.A, X.A, k.A), this.syncWith([L.A, X.A, k.A], P.tEg), (F = new Set(w.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = k.A.getMemberCount(e.id);
        return (
            !F.has(e.id) &&
            null != t &&
            t >= V.dH &&
            L.A.can(P.xBc.ADMINISTRATOR, e) &&
            !e.features.has(P.GuildFeatures.COMMUNITY)
        );
    }
}
let Y = new W(_.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!F.has(t)) return F.add(t), w.w.set(K, F), !0;
    },
});
var z = n(992250);
let Q = { MAX_MEMBER_COUNT: new Set() };
class Z extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(L.A, X.A, k.A),
            this.syncWith([L.A, X.A, k.A], P.tEg),
            w.w.remove(P.n5X.MAX_MEMBER_COUNT_100),
            w.w.remove(P.n5X.MAX_MEMBER_COUNT_250),
            (Q[P.n5X.MAX_MEMBER_COUNT] = new Set(w.w.get(P.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = k.A.getMemberCount(e.id) ?? 0,
            n = L.A.can(P.xBc.ADMINISTRATOR, e);
        return !Q[P.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let q = new Z(_.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!Q[P.n5X.MAX_MEMBER_COUNT].has(t))
            return Q[P.n5X.MAX_MEMBER_COUNT].add(t), w.w.set(P.n5X.MAX_MEMBER_COUNT, Q[P.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
var $ =
    (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (i[(i.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
    (i[(i.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
    i);
function J(e) {
    let t = e?.id ?? P.dJq,
        n = (0, d.bG)([Y], () => Y.isVisible(e)),
        i = (0, d.bG)([q], () => q.isVisible(e)),
        s = (function (e) {
            let t = (0, f.Ay)(e),
                n = O.A.getChannel(t[0]?.id),
                i = (0, d.bG)([M.A], () => M.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, b.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: r } = (0, d.cf)(
                    [U],
                    () => ({
                        isStageNoticeHidden: U.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: U.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !r;
            return null != i && !l;
        })(t),
        l = (0, d.bG)([z.A], () => z.A.isVisible(e)),
        a = j.A.useShouldShowChannelNotice(t),
        o = (0, B.$s)(e),
        { enableStudyGroup: u } = v(e),
        c = o.length > 0,
        A = u && !e?.features.has(P.GuildFeatures.HUB),
        E = (0, b.WG)(t);
    if (
        (r.useEffect(() => {
            S.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != E) return 2;
    if (l) return 3;
    if (a) return 4;
    else if (c) return 5;
    else if (A) return 6;
    return null;
}
var ee = n(558845),
    et = n(826673),
    en = n(131607),
    ei = n(93055),
    es = n(5180),
    el = n(826320),
    er = n(428784),
    ea = n(831617),
    eo = n(43471),
    ed = n(788563),
    eu = n(72152),
    ec = n(15073),
    eA = n(174459),
    eE = n(488926),
    eh = n(45780),
    eg = n(49999),
    eI = n(567305),
    e_ = n(555325),
    eN = n(469993),
    em = n(260509),
    eC = n(287809),
    eS = n(568185);
let eT = "hasSeenGuildTemplatePromotionTooltip",
    ep = {},
    eM = !0 === w.w.get(eT);
function ef(e) {
    let { guildId: t } = e;
    ep = { ...ep, [t]: !1 };
}
class eO extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return ep[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eM;
    }
}
let eL = new eO(_.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        ep = { ...ep, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        w.w.set(eT, !0), (eM = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        ep = { ...ep, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: ef,
    GUILD_TEMPLATE_DELETE_SUCCESS: ef,
});
var eR = n(875317),
    ex = n(181880),
    eG = n(285406),
    eD = n(361158),
    eU = n(379229),
    eb = n(229548),
    ey = n(139032),
    eP = n(128313),
    eH = n(363487),
    ev = n(342220),
    ej = n(383272),
    eB = n(414133),
    ew = n(864310),
    ek = n(972829),
    eX = n(568065),
    eV = n(320989),
    eK = n(728321),
    eF = n(79858),
    eW = n(72314),
    eY = n(919638),
    ez = n(808728),
    eQ = n(186111),
    eZ = n(584569),
    eq = n(763827),
    e$ = n(158045),
    eJ = n(885631),
    e0 = n(839979),
    e1 = n(599882),
    e6 = n(562708),
    e3 = n(702841),
    e5 = n(139286),
    e8 = n(468689),
    e7 = n(375708),
    e2 = n(330766);
function e4(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, e3.bG)([X.A, eC.default], () => {
            let e = eC.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, em.bM)(n, e);
        });
    return (
        (0, e5.A)({
            type: e6.ImpressionTypes.POPOUT,
            name: e6.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e7.intl.string(e7.t.C0m4rQ),
            body: e7.intl.string(e7.t.zOHfEX),
            graphic: { type: "image", src: e2 },
            actions: [
                {
                    text: e7.intl.string(e7.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e8.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eg.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e9 = n(338854);
function te(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e9.H, {
        targetElementRef: i,
        title: e7.intl.string(e7.t.gCgirr),
        body: e7.intl.string(e7.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e7.intl.string(e7.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e8.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS, void 0, P.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eg.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var tt = n(834730),
    tn = n(821609),
    ti = n(736759);
function ts(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: ti.kL,
        children: [
            (0, l.jsx)("div", { className: ti.Wn }),
            (0, l.jsx)(tt.E, { variant: "text-sm/normal", className: ti.Qs, children: e7.intl.string(e7.t.rdzeVP) }),
            (0, l.jsx)(tn.$, {
                variant: "overlay-primary",
                text: e7.intl.string(e7.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(eg.i.AUTO);
                },
            }),
        ],
    });
}
var tl = n(270533);
function tr(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e7.intl.string(e7.t.Hgd22r),
        body: e7.intl.string(e7.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e7.intl.string(e7.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e8.A.open(t.id, P.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eg.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function ta(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = r.useRef(null);
    return (0, l.jsx)(g.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, l.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(i) : t,
            }),
        position: "bottom",
        align: "center",
        animation: g.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, l.jsx)("div", { ref: i, children: n() }),
    });
}
let to = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (function () {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tl.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tl.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tl.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) => (0, l.jsx)(tl.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) => (0, l.jsx)(tl.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(ta, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tl.Gw, {
                                type: eU.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: a,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = r?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(ta, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tl.Mr, {
                                type: eU.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: a,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) => (0, l.jsx)(e4, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) => (0, l.jsx)(tr, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(ta, {
                        renderPopout: (0, l.jsx)(ts, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(ta, {
                        renderPopout: (e) => (0, l.jsx)(te, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var td = n(435558),
    tu = n.n(td),
    tc = n(862482),
    tA = n(939249),
    tE = n(789645),
    th = n(297264),
    tg = n(95561),
    tI = n(446406);
let t_ = tu().debounce(tg.Ay.trackWithMetadata, 500),
    tN = function (e) {
        let {
            guild: t,
            title: n,
            message: i,
            image: s,
            type: a,
            imageMarginX: o,
            imageMarginTop: d,
            trackingSource: u,
            undismissable: c,
            onDismissed: A,
            onClick: E,
            cta: h,
            ctaColor: g,
        } = e;
        r.useEffect(() => {
            t_(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let I = null;
        "function" == typeof h
            ? (I = h())
            : null != h &&
              (I = (0, l.jsx)(tc.$n, {
                  "data-migration-pending": !0,
                  className: tI.HM,
                  size: tc.$n.Sizes.SMALL,
                  onClick: function () {
                      null != a &&
                          eA.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          E?.();
                  },
                  fullWidth: !0,
                  color: g,
                  children: h,
              }));
        let _ = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: tI.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tA.D, {
                          onClick: function () {
                              tg.Ay.trackWithMetadata(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: tI.VN,
                          "aria-label": e7.intl.string(e7.t.WAI6xu),
                          children: (0, l.jsx)(tE.P, { size: "md", color: "currentColor", className: tI.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tI.ZS,
                        style: { marginTop: `${d}px`, marginLeft: _, marginRight: _ },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tI.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tI.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(th.D, { variant: "heading-md/semibold", className: tI.DD, children: n })
                            : null,
                        (0, l.jsx)(tt.E, { variant: "text-sm/normal", children: i }),
                        I,
                    ],
                }),
            ],
        });
    };
var tm = n(975571);
function tC(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tN, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eg.i.UNKNOWN),
        onClick: () => {
            open(tm.A.getArticleURL(P.MVz.CONNECTION_DETAILS)), n(eg.i.UNKNOWN);
        },
        title: e7.intl.string(e7.t.YMgaJt),
        message: e7.intl.string(e7.t["AV/9eW"]),
        cta: e7.intl.string(e7.t.hvVgAZ),
        trackingSource: P.kZU.LINKED_ROLES_ADMIN_NUX,
        type: P.n5X.LINKED_ROLES_ADMIN,
    });
}
var tS = n(158390),
    tT = n(636537),
    tp = n(927813);
let tM = null;
class tf extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tM;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tM?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tM?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tM) return [];
        let e = tM;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tO = new tf(_.h, {
        LOGOUT: function () {
            tM = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tM = t;
        },
    }),
    tL = [];
async function tR() {
    let { body: e } = await tT.Bo.get({ url: P.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    _.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tx = (0, d.UT)(tO, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tO.getMap(),
    load: () => tR(),
    staleAfter: tp.A.Seconds.DAY,
    retryConfig: { backoff: () => new tS.A(5 * tp.A.Millis.MINUTE), maxRetries: 10 },
});
function tG(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tx(t);
    return n?.[e] ?? tL;
}
let tD = (0, y.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tU = n(509434),
    tb = n(975807),
    ty = n(201438),
    tP = n(194362),
    tH = n(307301),
    tv = n(661531),
    tj = n(701115);
function tB(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tj.kL,
        children: [
            (0, l.jsx)("div", { className: tj.j3, children: (0, l.jsx)("img", { className: tj.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tj.gm,
                children: (0, l.jsx)("div", {
                    className: tj.WA,
                    children: (0, l.jsx)(tH.j, { size: "sm", color: tv.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tw = n(63142);
function tk(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tG(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, ty.A)(i, e7.intl.string(e7.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(P.GuildFeatures.VERIFIED) ? e7.intl.string(e7.t.uUARXe) : e7.intl.string(e7.t["0Dx29f"]);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => n(eg.i.USER_DISMISS),
        title: e7.intl.format(e7.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tw.m,
            children: [e7.intl.string(e7.t["2u6ZlY"]), (0, l.jsx)(tU.I, { size: "xs", color: "currentColor" })],
        }),
        type: P.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tB, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eg.i.TAKE_ACTION);
            let e = await (0, tP.a)(P.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tb.A)(e);
        },
    });
}
var tX = n(631305),
    tV = n(473145),
    tK = n(625633);
function tF(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tV.Os)(t, P.TVA.TIER_2),
        { analyticsLocations: s } = (0, C.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => n(eg.i.UNKNOWN),
        cta: e7.intl.string(e7.t.oPAx73),
        message: e7.intl.format(e7.t.AcaNYw, { boostsNeeded: i }),
        type: P.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tX.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tK.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tW = n(906199);
class tY extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tW.K4)({ guildId: e.id, location: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tN, {
            guild: e,
            onDismissed: () => n(eg.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e7.intl.string(e7.t.hlitVQ) : e7.intl.string(e7.t.XHtaDD),
            cta: e7.intl.string(e7.t["vqb+H1"]),
            trackingSource: P.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: P.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tz = d.Ay.connectStores([k.A], (e) => {
    let { guild: t } = e;
    return { memberCount: k.A.getMemberCount(t.id) };
})(tY);
var tQ = n(503698),
    tZ = n.n(tQ),
    tq = n(933832),
    t$ = n(782603),
    tJ = n(81466),
    t0 = n(116085),
    t1 = n(597601),
    t6 = n(451394),
    t3 = n(104171),
    t5 = n(47167),
    t8 = n(713654),
    t7 = n(976860),
    t2 = n(790535),
    t4 = n(110618),
    t9 = n(280450),
    ne = n(309010),
    nt = n(312006),
    nn = n(403362),
    ni = n(707592),
    ns = n(698441),
    nl = n(935159),
    nr = n(11550),
    na = n(435328),
    no = n(563312),
    nd = n(9448),
    nu = n(974930),
    nc = n(666394),
    nA = n(659463);
let nE = r.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: s,
        detailsIcon: r,
        topic: a,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, l.jsxs)("div", {
        className: nA.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tZ()(nA.fI, nA.pF),
                children: [
                    (0, l.jsx)("div", { className: nA.Ok }),
                    (0, l.jsx)(tt.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nA.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tA.D, {
                            onClick: o,
                            className: nA.ut,
                            "aria-label": e7.intl.string(e7.t.cpT0Cq),
                            children: (0, l.jsx)(tE.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(th.D, { color: "text-strong", variant: "heading-md/semibold", className: nA.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tZ()(nA.fI, nA.pF),
                children: [
                    i,
                    (0, l.jsx)(tt.E, { color: "none", variant: "text-xs/normal", className: nA.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(tt.E, {
                                    className: nA.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(tt.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nA.zH,
                                    children: s,
                                }),
                            ],
                        }),
                ],
            }),
            d,
        ],
    });
});
function nh(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t5.Ay)(n),
        s = (0, d.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t8.gU)(n);
    return (0, l.jsx)(nE, {
        onClickCloseIcon: () => (0, nl.iF)({ eventId: t?.id }),
        heading: e7.intl.string(e7.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nA.uE }) : null,
        children: (0, l.jsx)(nT, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function ng(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nu.G3)(t),
        s = (0, d.bG)([ns.Ay], () => ns.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([nr.A], () => nr.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, nl.pE)(t.id),
        (0, l.jsx)(tn.$, {
            onClick: function () {
                (0, nc.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nl.Lx)(t.id), 1e3)),
                    eA.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e7.intl.string(e7.t.DlcqlU),
            icon: s ? tq.CheckmarkLargeIcon : t$.BellIcon,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nI(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nd.oF)(t),
        s = null != i ? (0, na.y)(i, !0) : null,
        a = (0, nd.WN)(t),
        o = (0, t5.Ay)(a),
        d = (0, t8.gU)(a),
        { startTime: u, endTime: c } = (0, no.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nu.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e7.intl.formatToPlainString(e7.t.PQlCWk, { minutes: h })
                : e7.intl.string(e7.t.WINqKV)
            : e7.intl.formatToPlainString(e7.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            eA.default.track(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nA.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nA.fI,
                    children: [
                        (0, l.jsx)(tA.D, {
                            onClick: () => (0, ni.uR)({ eventId: t.id }),
                            className: nA.oP,
                            children: (0, l.jsx)(tt.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nA.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tA.D, {
                            onClick: () => {
                                eA.default.track(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, nl.Lx)(t.id);
                            },
                            className: nA.ut,
                            "aria-label": e7.intl.string(e7.t.cpT0Cq),
                            children: (0, l.jsx)(tE.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tZ()(nA.fI, nA.pF),
                    children: [
                        (0, l.jsx)(tJ.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nA.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(tt.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nA.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tZ()(nA.fI, nA.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nA.uE })
                            : (0, l.jsx)(t0.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nA.uE,
                              }),
                        (0, l.jsx)(tt.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nA.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(ng, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function n_(e) {
    let { guildEvent: t } = e,
        n = (0, nd.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nE, {
              onClickCloseIcon: () => (0, nl.iF)({ eventId: t?.id }),
              heading: e7.intl.string(e7.t["1+boPi"]),
              topic: t.name,
              location: (0, na.y)(n, !0),
              locationIcon: (0, l.jsx)(t0.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nA.uE,
              }),
              children: (0, l.jsx)(nN, { guildEvent: t }),
          });
}
function nN(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, ni.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nA.PD,
        children: (0, l.jsx)(tn.$, {
            variant: "active",
            size: "sm",
            text: e7.intl.string(e7.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nm(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nA.PD,
        children: (0, l.jsx)(tn.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t2.av)(t), (0, t7.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nC(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t5.Ay)(n),
        s = (0, d.yK)([T.A], () => [...new Set(T.A.getMutableParticipants(n.id, p.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([T.A], () => T.A.getParticipantCount(n.id, p.ip.AUDIENCE), [n.id]),
        a = e7.intl.formatToPlainString(e7.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(nE, {
        onClickCloseIcon: () => (0, nl.iF)({ stageId: t?.id }),
        heading: e7.intl.string(e7.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(t1.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nA.uE,
        }),
        locationIcon: (0, l.jsx)(t6.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nA.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nT, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nS = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nT(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([L.A], () => L.A.can(P.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t9.default, ne.Ay, nt.Ay], () => {
                let e = t9.default.getId();
                return ne.Ay.getVoiceChannelId() === t ? nt.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e7.intl.string(e7.t.VJlc0S);
    switch (s) {
        case 1:
            A = e7.intl.string(e7.t.VJlc0S);
            break;
        case 2:
            (A = e7.intl.string(e7.t.ZYO5OK)),
                c?.speaker ? (A = e7.intl.string(e7.t["/cnSFc"])) : null != c && (A = e7.intl.string(e7.t.btSGOj));
            break;
        case 3:
            A = e7.intl.string(e7.t.wBoE6L);
            break;
        default:
            (0, nn.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tZ()(nA.fI, nA.pF),
                            children: [
                                (0, l.jsx)(t3.Ay, { guildId: a, users: o, showUserPopout: !0, size: t3.DN.SIZE_16 }),
                                (0, l.jsx)(tt.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nA.c8,
                                    children: (0, t4.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nm, { channel: n, label: A }),
              ],
          });
}
let np = r.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, b.r2)(t)), (i = (0, f.Ay)(t)), (s = O.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, b.BP)(r.id),
        u = (0, b.WG)(r.id),
        c = (0, d.bG)([M.A], () => M.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, d.cf)(
            [U],
            () => ({
                isStageNoticeHidden: U.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: U.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        h = null,
        g = null != c && null != a && !A;
    null == o || E
        ? g && (h = (0, l.jsx)(nC, { stageInstance: c, channel: a }))
        : o.entity_type === x.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nC, { stageInstance: c, channel: a }))
          : o.entity_type === x.Ps.EXTERNAL
            ? (h = (0, l.jsx)(n_, { guildEvent: o }))
            : o.entity_type === x.Ps.VOICE && null != a && (h = (0, l.jsx)(nh, { guildEvent: o, channel: a }));
    let I = r.features.has(P.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !I) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nI, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nM(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => i(eg.i.UNKNOWN),
        onClick: function () {
            (0, I.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("896162"),
                    n.e("197804"),
                    n.e("807265"),
                    n.e("797641"),
                    n.e("890496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: e7.intl.string(e7.t["1+hiP6"]),
        cta: e7.intl.string(e7.t.hvVgAZ),
        trackingSource: P.kZU.HUB_LINK_NOTICE,
        type: P.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nf = n(717421),
    nO = n(450510);
let nL = function (e) {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tN, {
        guild: n,
        onDismissed: function () {
            (0, nO.sF)(nO._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: function () {
            (0, nO.sF)(nO._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t2.av)(t), (0, t7.uh)(t.getGuildId(), t.id));
        },
        title: e7.intl.string(e7.t["4Y2AS7"]),
        message: e7.intl.string(e7.t.wTsxTS),
        cta: e7.intl.string(e7.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: P.n5X.HUB_STUDY_ROOM,
    });
};
var nR = n(435793);
let nx = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t8.gU)(n);
    return (0, l.jsx)(nE, {
        heading: e7.intl.string(e7.t["X2K3/4"]),
        topic: t,
        location: e7.intl.string(e7.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nR.K }) : null,
        children: (0, l.jsx)(nT, { channel: n, speakers: i, voiceType: nS.STUDY_ROOM }),
    });
};
var nG = n(48686);
function nD(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nO.HP], () => nO.HP.hasHotspot(nO._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nG.Q)(t.guild_id),
        r = (0, t5.Ay)(t),
        o = (0, nf.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nL, { channel: t, guild: n })
            : (0, l.jsx)(nx, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nU = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([ez.Ay], () => ez.Ay.getChannels(t.id)[ez.vM][0]),
        i = (0, d.bG)([L.A], () => null != n && L.A.can(P.xBc.CONNECT, n.channel));
    return t.features.has(P.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nD, { channel: n.channel, guild: t })
        : null;
};
function nb(e) {
    let { guild: t } = e;
    function n() {
        return j.A.dismissNotice(t.id);
    }
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: n,
        cta: e7.intl.string(e7.t.RzWDqY),
        message: e7.intl.format(e7.t["kQ/MDl"], {}),
        type: P.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e8.A.open(t.id, P.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var ny = n(587895),
    nP = n(143582);
function nH(e) {
    let t,
        { guild: n } = e,
        i = (0, B.$s)(n);
    function s() {
        return (0, nP.Hc)(n.id);
    }
    let a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([ny.A], () => {
            let e = [];
            for (let t of a) {
                let n = ny.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? e7.intl.formatToPlainString(e7.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e7.intl.formatToPlainString(e7.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e7.intl.formatToPlainString(e7.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e7.intl.string(e7.t.MvfowF)),
          (0, l.jsx)(tN, {
              guild: n,
              onDismissed: s,
              message: t,
              type: P.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e8.A.open(n.id, P.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e7.intl.string(e7.t.Rr3MAe),
          }));
}
var nv = n(628287);
let nj = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), _.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: n,
        onClick: () => e8.A.open(t.id, P.BEX.COMMUNITY),
        message: e7.intl.string(e7.t["2klD0Z"]),
        trackingSource: P.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: P.n5X.PUBLIC_UPSELL,
        image: nv,
        cta: e7.intl.string(e7.t.hvVgAZ),
    });
};
var nB = n(536194),
    nw = n(780964),
    nk = n(766075);
class nX extends r.PureComponent {
    render() {
        return (0, l.jsx)(tN, {
            guild: this.props.guild,
            onClick: () => (0, nk.openUserSettings)(nw.X.ACCOUNT_PANEL),
            message: e7.intl.format(e7.t["oCd+at"], {}),
            cta: e7.intl.string(e7.t["8dCrV9"]),
            trackingSource: P.kZU.GUILD_MFA_WARNING,
            type: P.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nV = n(148494);
class nK extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, I.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("683621"),
                n.e("711162"),
                n.e("159957"),
                n.e("728136"),
                n.e("216084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: P.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = ne.Ay.getChannelId(),
            t = e7.intl.formatToPlainString(e7.t.DEn7nu, { invitePeople: e7.intl.string(e7.t.Sd8Ixw) });
        this.props.markAsDismissed(eg.i.UNKNOWN), null != e && nV.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e7.intl.string(e7.t.VWqWZQ)}
${e7.intl.string(e7.t["0Lgb/K"])}`;
        return (0, l.jsx)(tN, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e7.intl.string(e7.t.Sd8Ixw),
            trackingSource: P.kZU.INVITE_NOTICE,
            type: P.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nF = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), _.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: n,
        message: e7.intl.format(e7.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tm.A.getArticleURL(P.MVz.MAX_MEMBERS),
        }),
        type: P.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nW = n(475358),
    nY = n(675704),
    nz = n(793322);
let nQ = function (e) {
    let t = (0, l.jsx)(nW.e, { shortcut: nY.R.binds["0"], keyClassName: tI.Eb });
    return (0, l.jsx)(tN, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eg.i.UNKNOWN),
        onClick: () => (0, nz.WU)("CHANNEL_NOTICE"),
        message: e7.intl.string(e7.t.Qhk8cs),
        cta: t,
        trackingSource: P.kZU.QUICK_SWITCHER_NOTICE,
        type: P.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nZ = n(174768);
class nq extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(X.A), this.syncWith([X.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(P.GuildFeatures.BANNER) && Date.now() - t >= P.D2K;
    }
}
let n$ = new nq(_.h);
class nJ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.MANAGE_GUILD, e);
    }
}
let n0 = new nJ(_.h);
var n1 = n(731667);
function n6() {
    return !0;
}
class n3 extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], n6);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.ADMINISTRATOR, e);
    }
}
let n5 = new n3(_.h),
    n8 = "lastHiddenChannelNotice",
    n7 = [
        { type: P.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: P.n5X.GUILD_BOOSTING,
            store: n0,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: P.n5X.GUILD_BANNER, store: n$, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: P.n5X.INVITE, store: n5, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: P.n5X.HUB_LINK, store: n1.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: P.n5X.QUICKSWITCHER, store: nZ.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: P.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: P.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n2 = n7.map((e) => e.store).filter(nn.Vq),
    n4 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n9(e) {
    e.stopPropagation();
}
let ie = [];
function it(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(w.w.get(n8) ?? 0),
        g =
            ((n = t = A.id),
            (i = tD.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([L.A], () => L.A.canWithPartialContext(P.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tG(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : ie;
            }, [c])),
        [I, _] = (0, en.ww)(g, A.id, eg.m.CHANNEL_NOTICES, !0),
        N = null != I,
        m = (0, d.yK)(
            n2,
            () =>
                N
                    ? []
                    : n7
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n4.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, en.kn)(m, eg.m.CHANNEL_NOTICES),
        T = I ?? C,
        p = null != I ? _ : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), w.w.set(n8, e), h(e), p(eg.i.UNKNOWN);
        }, [p]),
        f = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nM, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nK, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tz, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nQ, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tF, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tC, { guild: A, markAsDismissed: () => p(eg.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tk, { guild: A, markAsDismissed: p });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, l.jsx)("div", { onContextMenu: n9, children: f });
}
let ii = function (e) {
    let { guild: t } = e;
    switch (J(t)) {
        case $.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nj, { guild: t });
        case $.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nF, { guild: t });
        case $.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(np, { guild: t });
        case $.GUILD_MFA_WARNING:
            return (0, l.jsx)(nX, { guild: t });
        case $.COMMANDS_MIGRATION:
            return (0, l.jsx)(nb, { guild: t });
        case $.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nH, { guild: t });
        case $.HUB_STUDY_ROOM:
            return (0, l.jsx)(nU, { guild: t });
    }
    return nB.P.isDisallowPopupsSet() ? null : (0, l.jsx)(it, { guild: e.guild });
};
var is = n(883476);
function il(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: is.k, ref: i, children: (0, l.jsx)(ii, { guild: t }) })
    );
}
var ir = n(66933),
    ia = n(846930),
    io = n(168095);
let id = "server-settings",
    iu = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ic extends r.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = r.createRef();
    guildHeaderDropdownButtonRef = r.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new c.Ep();
    state = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
    };
    componentDidMount() {
        this.setAnimatedValue(0),
            _.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eV.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eV.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            _.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    handleHistoryChange = (e) => {
        null != e.state &&
            e.state.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    };
    handleHeaderMenuToggle = (e) => {
        let { isHeaderPopoutOpen: t } = this.props;
        e.stopPropagation(), (0, eu.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) {
                if (!i) return;
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("879948").then(n.bind(n, 329671));
                    return (t) => (0, l.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("309004"),
                    n.e("419690"),
                    n.e("845322"),
                    n.e("110758"),
                ]).then(n.bind(n, 455557));
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("866676"),
                    n.e("876364"),
                    n.e("925807"),
                    n.e("996907"),
                    n.e("816027"),
                    n.e("562772"),
                    n.e("8159"),
                    n.e("207322"),
                    n.e("361922"),
                    n.e("65764"),
                    n.e("186856"),
                    n.e("3942"),
                    n.e("766811"),
                    n.e("295570"),
                    n.e("686117"),
                    n.e("936875"),
                    n.e("862179"),
                    n.e("722784"),
                    n.e("326794"),
                    n.e("906470"),
                    n.e("860350"),
                    n.e("774550"),
                    n.e("376991"),
                    n.e("923981"),
                    n.e("618416"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("923108"),
                    n.e("891473"),
                    n.e("414571"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("542516"),
                    n.e("661630"),
                    n.e("349687"),
                    n.e("128804"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("870088"),
                    n.e("287353"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("807432"),
                    n.e("630954"),
                    n.e("750955"),
                    n.e("28945"),
                    n.e("767311"),
                    n.e("261204"),
                    n.e("379134"),
                    n.e("279774"),
                    n.e("175997"),
                    n.e("52978"),
                    n.e("118686"),
                    n.e("410470"),
                    n.e("245726"),
                    n.e("711562"),
                    n.e("661157"),
                    n.e("609110"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("877223"),
                    n.e("448738"),
                    n.e("423549"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("253453"),
                    n.e("82937"),
                    n.e("531547"),
                    n.e("450926"),
                    n.e("750370"),
                    n.e("972281"),
                    n.e("641278"),
                    n.e("761973"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("742752"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("919659"),
                    n.e("698136"),
                    n.e("718368"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("38012"),
                    n.e("411938"),
                    n.e("653383"),
                    n.e("696490"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("451044"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("461815"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("931937"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("403643"),
                    n.e("812793"),
                    n.e("293612"),
                    n.e("703728"),
                    n.e("519435"),
                    n.e("10985"),
                    n.e("171206"),
                    n.e("102075"),
                    n.e("828178"),
                    n.e("45036"),
                    n.e("480889"),
                    n.e("434683"),
                    n.e("920955"),
                    n.e("505928"),
                    n.e("752657"),
                    n.e("747973"),
                    n.e("314001"),
                    n.e("885251"),
                    n.e("914175"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("180644"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("588861"),
                    n.e("689521"),
                    n.e("942305"),
                    n.e("147637"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("564664"),
                    n.e("842631"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("218366"),
                    n.e("464452"),
                    n.e("714144"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("40416"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
                    n.e("377016"),
                    n.e("385504"),
                    n.e("269714"),
                    n.e("331696"),
                    n.e("59766"),
                    n.e("168135"),
                    n.e("806391"),
                    n.e("803511"),
                    n.e("202342"),
                    n.e("424216"),
                    n.e("840100"),
                    n.e("22865"),
                    n.e("173896"),
                    n.e("57358"),
                    n.e("866539"),
                    n.e("722765"),
                    n.e("33909"),
                    n.e("238417"),
                    n.e("357625"),
                    n.e("308093"),
                    n.e("401106"),
                    n.e("498589"),
                    n.e("21486"),
                    n.e("304419"),
                    n.e("622936"),
                    n.e("45268"),
                    n.e("617281"),
                    n.e("164716"),
                    n.e("170282"),
                    n.e("259465"),
                    n.e("655327"),
                    n.e("335532"),
                    n.e("56955"),
                    n.e("463455"),
                    n.e("403655"),
                    n.e("317615"),
                    n.e("577154"),
                    n.e("877730"),
                    n.e("611899"),
                    n.e("527552"),
                    n.e("769266"),
                    n.e("487873"),
                    n.e("765626"),
                    n.e("683302"),
                    n.e("660608"),
                    n.e("744554"),
                    n.e("541137"),
                    n.e("331212"),
                    n.e("638259"),
                    n.e("339072"),
                    n.e("207998"),
                    n.e("683621"),
                    n.e("711162"),
                    n.e("275179"),
                    n.e("289789"),
                    n.e("116125"),
                    n.e("977412"),
                    n.e("19385"),
                    n.e("692811"),
                    n.e("762332"),
                    n.e("208607"),
                    n.e("905581"),
                    n.e("249681"),
                    n.e("869047"),
                    n.e("996382"),
                    n.e("62052"),
                    n.e("771657"),
                    n.e("122218"),
                    n.e("863232"),
                    n.e("364827"),
                    n.e("907167"),
                    n.e("784569"),
                    n.e("861060"),
                    n.e("910471"),
                    n.e("752457"),
                    n.e("960235"),
                    n.e("77333"),
                    n.e("718573"),
                    n.e("882082"),
                    n.e("413789"),
                    n.e("797595"),
                    n.e("344057"),
                    n.e("413736"),
                    n.e("128504"),
                    n.e("331988"),
                    n.e("262156"),
                    n.e("234303"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("373122"),
                    n.e("102057"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("489088"),
                    n.e("730760"),
                    n.e("994723"),
                    n.e("330316"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("188159"),
                    n.e("481987"),
                    n.e("958038"),
                    n.e("171202"),
                    n.e("875201"),
                    n.e("576909"),
                    n.e("993103"),
                    n.e("481647"),
                    n.e("428367"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("391763"),
                    n.e("21921"),
                    n.e("307575"),
                    n.e("752511"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("942724"),
                    n.e("393766"),
                    n.e("913823"),
                    n.e("571210"),
                    n.e("521930"),
                    n.e("559460"),
                    n.e("331549"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("940258"),
                    n.e("292583"),
                    n.e("875842"),
                    n.e("166495"),
                    n.e("660580"),
                    n.e("401518"),
                    n.e("198329"),
                    n.e("9205"),
                    n.e("308555"),
                    n.e("88342"),
                    n.e("323354"),
                    n.e("930233"),
                    n.e("586127"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("472789"),
                    n.e("854622"),
                    n.e("976894"),
                    n.e("25949"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("311802"),
                    n.e("179049"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("952548"),
                    n.e("817989"),
                    n.e("37977"),
                    n.e("691671"),
                    n.e("49653"),
                    n.e("147626"),
                    n.e("795596"),
                    n.e("382644"),
                    n.e("203589"),
                    n.e("613867"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("720590"),
                    n.e("31267"),
                    n.e("886414"),
                    n.e("480830"),
                    n.e("451224"),
                    n.e("179745"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("174630"),
                    n.e("692215"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("539075"),
                    n.e("163235"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("448948"),
                    n.e("963244"),
                    n.e("564850"),
                    n.e("170104"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("371477"),
                    n.e("67878"),
                    n.e("631965"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("803332"),
                    n.e("408362"),
                    n.e("772401"),
                    n.e("852617"),
                    n.e("204744"),
                    n.e("36227"),
                    n.e("737021"),
                    n.e("247907"),
                    n.e("416731"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("886243"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("305557"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("709371"),
                    n.e("845437"),
                    n.e("474610"),
                    n.e("844780"),
                    n.e("939171"),
                    n.e("95340"),
                    n.e("883952"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("460773"),
                    n.e("444567"),
                    n.e("208018"),
                    n.e("665927"),
                    n.e("968763"),
                    n.e("159957"),
                    n.e("309659"),
                    n.e("458273"),
                    n.e("820930"),
                    n.e("309004"),
                    n.e("599976"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("449145"),
                    n.e("434786"),
                    n.e("203930"),
                    n.e("982730"),
                    n.e("708536"),
                    n.e("903663"),
                    n.e("457458"),
                    n.e("506045"),
                    n.e("201243"),
                    n.e("215920"),
                    n.e("618706"),
                    n.e("430997"),
                    n.e("800872"),
                    n.e("728136"),
                    n.e("452531"),
                    n.e("393336"),
                    n.e("368530"),
                    n.e("136894"),
                    n.e("338601"),
                    n.e("216084"),
                    n.e("978046"),
                    n.e("127659"),
                    n.e("66580"),
                    n.e("343116"),
                    n.e("610943"),
                    n.e("283230"),
                    n.e("582486"),
                    n.e("273669"),
                    n.e("507775"),
                    n.e("22547"),
                    n.e("466147"),
                    n.e("428235"),
                    n.e("303710"),
                    n.e("421778"),
                    n.e("161058"),
                    n.e("50342"),
                    n.e("333097"),
                    n.e("409391"),
                    n.e("645830"),
                    n.e("810262"),
                    n.e("741786"),
                    n.e("995602"),
                    n.e("346313"),
                    n.e("743510"),
                    n.e("929569"),
                    n.e("636002"),
                    n.e("343233"),
                    n.e("463726"),
                    n.e("756684"),
                    n.e("256373"),
                    n.e("242749"),
                    n.e("556026"),
                    n.e("416301"),
                    n.e("722191"),
                    n.e("225961"),
                    n.e("359702"),
                    n.e("708364"),
                    n.e("399108"),
                    n.e("452823"),
                    n.e("556967"),
                    n.e("647011"),
                    n.e("466913"),
                    n.e("983947"),
                    n.e("71719"),
                    n.e("419690"),
                    n.e("213848"),
                    n.e("39214"),
                    n.e("588307"),
                    n.e("514878"),
                    n.e("676376"),
                    n.e("426508"),
                    n.e("991643"),
                    n.e("842935"),
                    n.e("73091"),
                    n.e("269178"),
                    n.e("886692"),
                    n.e("916373"),
                    n.e("81398"),
                    n.e("324484"),
                    n.e("925172"),
                    n.e("232347"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("591977"),
                    n.e("890152"),
                    n.e("646570"),
                    n.e("287973"),
                    n.e("174337"),
                    n.e("357197"),
                    n.e("314863"),
                    n.e("623386"),
                    n.e("560165"),
                    n.e("712390"),
                    n.e("71167"),
                    n.e("113446"),
                    n.e("306410"),
                    n.e("161309"),
                    n.e("694529"),
                    n.e("995210"),
                    n.e("198415"),
                    n.e("553584"),
                    n.e("317699"),
                    n.e("257032"),
                    n.e("845322"),
                    n.e("94832"),
                    n.e("426386"),
                    n.e("865338"),
                    n.e("588860"),
                ]).then(n.bind(n, 860417));
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip();
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, et.k8)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(P.GuildFeatures.HUB);
        !e && t && (0, et.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eg.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eS.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([
            n.e("95340"),
            n.e("309004"),
            n.e("343116"),
            n.e("256373"),
            n.e("419690"),
            n.e("113446"),
            n.e("317699"),
            n.e("257032"),
            n.e("968590"),
            n.e("193829"),
            n.e("809111"),
        ]).then(n.bind(n, 342218));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, l.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, l.jsx)(to, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? E.t : h.a;
        return (0, l.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: s } = this.state;
        return n
            ? (0, l.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, l.jsx)(eK.A, {
                      tutorialId: id,
                      position: "bottom",
                      inlineSpecs: iu,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, l.jsx)(A.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: e7.intl.string(e7.t.Rk2RJk),
                                body: e7.intl.string(e7.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : s
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, l.jsx)(A.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: e7.intl.string(e7.t.Q3qa4x),
                                body: e7.intl.string(e7.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                        ],
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let {
                guild: t,
                isHeaderPopoutOpen: n,
                showGuildHeaderTutorial: i,
                showGuildTemplateDirtyTooltip: s,
                isGuildHeaderDismissibleTooltipShown: r,
                headerAnalyticsLocations: a,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: u,
                bannerVisibleHeight: c,
                communityInfoVisible: A,
            } = this.state,
            E = i || s || r;
        return null == t
            ? null
            : (0, l.jsx)(C.f5, {
                  value: a,
                  children: (0, l.jsx)(g.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: g.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, eu.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: s, ...r } = i;
                          return (0, l.jsx)(e1.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: u,
                              communityInfoVisible: A,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: E,
                              animationOverlayHeight: c,
                              ...r,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, eJ.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: s,
            controller: l,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (s = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                s !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: s, communityInfoVisible: n }),
            l.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: i, ...s } = this.props;
        if (e || null == t)
            return (0, l.jsx)(ia.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(P.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: io.r0,
                    children: (0, l.jsx)(eG.A, { guild: t, channel: n ?? ez.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, es.ai)(t.id) ? el.A : e0.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eJ.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, es.YC)(e);
        return (0, l.jsxs)("nav", {
            className: io.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e7.intl.formatToPlainString(e7.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(il, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function iA(e) {
    let t,
        i,
        s,
        a,
        c,
        A,
        E,
        h,
        g,
        _,
        N,
        S,
        T,
        p,
        M,
        { guildId: f, hideSelectedChannel: x, selectedChannelId: G } = e,
        D = (0, er.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, ei.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(f)),
        y = (0, d.bG)([R.Ay], () => R.Ay.getVoiceStates(f), [f]),
        H = (0, d.bG)([eW.A], () => eW.A.getGuildDimensions(f).scrollTo),
        j = (0, d.bG)([eq.A], () => eq.A.getChannelId()),
        B = (0, d.bG)([L.A], () => L.A.can(P.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([eY.A], () => eY.A.isUnavailable(f)),
        k = (0, d.bG)([eC.default], () => eC.default.getCurrentUser()),
        { enableStudyGroup: K } = v(b),
        F = (0, ee.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!F),
        [z, Q] = r.useState(f),
        { analyticsLocations: Z } = (0, C.Ay)(m.A.GUILD_HEADER);
    f !== z && (Q(f), Y(!F));
    let [q, $] = (0, ee.Ay)(
            (e) => [
                n7.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eg.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        el = J(b),
        eS = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
        eT = (0, d.bG)([eQ.A], () => eQ.A.hasLayers()),
        ep = (0, eD.xr)((e) => e.fullScreenLayers.length > 0),
        eM = (0, d.bG)([eF.A], () => eF.A.shouldShow(id)),
        ef =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (i = (0, d.bG)([eC.default], () => eC.default.getCurrentUser())),
            (s = null != t && (0, em.bM)(t, i)),
            (a = (0, eN.oS)()),
            s &&
                (t?.features.has(P.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        eO = b?.features.has(P.GuildFeatures.HUB) === !0,
        eG = B && b?.features.has(P.GuildFeatures.DISCOVERABLE) === !0,
        eV = (0, d.bG)(
            [eL, eQ.A],
            () => null != b && null != k && B && !eQ.A.hasLayers() && eL.shouldShowGuildTemplateDirtyTooltip(f),
        ),
        eK = (0, d.bG)([O.A], () => O.A.getChannel(G)),
        { isPopoutOpen: ez } = (0, eu.S)(),
        eJ = b?.features.has(P.GuildFeatures.COMMUNITY) ?? !1,
        e0 = e$.Ay.isNewUser(k),
        e1 = W && !e0;
    (c = (0, ec.TZ)(b)),
        (A = V.dR.some((e) => !(0, es.ai)(b?.id) && eE.Ib(e, b))),
        (E = b?.defaultMessageNotifications === P.orn.ALL_MESSAGES),
        (h = (0, eh.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? P.dJq)),
        (g = c && (A || E) && !h),
        (_ = r.useCallback(() => {
            (0, eh._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? P.dJq, !0, eg.i.DISMISS);
        }, [b])),
        (N = r.useRef(!1)),
        r.useEffect(() => {
            g &&
                !N.current &&
                ((0, I.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("942068"), n.e("452823"), n.e("442446")]).then(
                            n.bind(n, 653981),
                        );
                        return (t) =>
                            (0, l.jsx)(e, {
                                guild: b,
                                canEveryoneModerate: A,
                                isDefaultNotificationsAllMessages: E,
                                ...t,
                            });
                    },
                    { onCloseCallback: _ },
                ),
                eA.default.track(P.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? P.dJq,
                }),
                (N.current = !0));
        }, [A, b, _, E, g]);
    let e6 = (0, et.HX)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e3 =
            ((S = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (T = (0, eI._Y)(f)),
            (p =
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (M = (0, e_.X9)(S)),
            p && M && T);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eR.Kb)(e, "GuildThemeNuxTrigger"),
            [l, a] = (0, en.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eg.m.GUILD_THEME_NUX),
            o = l === u.M.GUILD_THEME_NUX,
            d = r.useRef(!1);
        r.useEffect(() => {
            d.current = !1;
        }, [e]),
            r.useEffect(() => {
                if (!o || n || d.current) return;
                let t = setTimeout(() => {
                    d.current = !0;
                    let t = !1;
                    Promise.resolve(
                        i({
                            guildId: e,
                            markAsDismissed: (e) => {
                                t || ((t = !0), a(e, !0));
                            },
                        }),
                    ).catch(() => {
                        d.current = !1;
                    });
                }, 2e3);
                return () => clearTimeout(t);
            }, [o, n, e, a, i]);
    })(f, {
        isNuxOpen: (0, I.useHasModalOpen)(ex.u),
        openNux: r.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, I.openModalLazy)(
                async () => {
                    let e = await Promise.resolve().then(n.bind(n, 181880));
                    return (n) =>
                        (0, l.jsx)(e.default, {
                            guildId: t,
                            markAsDismissed: i,
                            transitionState: n.transitionState,
                            onClose: n.onClose,
                        });
                },
                { modalKey: ex.u, onCloseCallback: () => i(eg.i.USER_DISMISS) },
            );
        }, []),
    });
    let e5 = (0, d.bG)([eq.A], () => eq.A.getChannelId()),
        e8 = (0, d.bG)([eZ.A], () => eZ.A.desyncedVoiceStatesCount),
        e7 = (0, eH.A)(f),
        e2 = (0, es.ai)(f) ? null : e7,
        e4 =
            (function (e) {
                let t = (0, eH.A)(e),
                    n = (0, ej.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, eB.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, ek.A)(e),
                    { available: l, isLoading: r } = (0, ew.A)(e);
                if (r) return !1;
                let a = l < eX.fe;
                return n && i && a && !s && !1 === t;
            })(f) && !(0, es.ai)(f);
    ir.A.useConfig({ guildId: f, location: "guild_sidebar" });
    let e9 = (0, ea.C$)(f, "GuildSidebar"),
        te = (0, d.bG)([X.A], () => X.A.getGuild(f)?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1, [f]),
        tt = e9 && !te && !1 === e2,
        tn = (0, ed.J)("GuildSidebar"),
        ti = (0, eo.S)(f, "GuildSidebar"),
        ts = e9 && !te && ti && !1 === e2,
        tl = (0, ev.A)(),
        tr = (0, ey.A)(f),
        ta = !1 === e2 && tl && null != tr,
        to = (0, eP.A)(f),
        td = !1 === e2 && tl && null != to,
        tu = [];
    eO && tu.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        ef && tu.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eG && tu.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e2 && tu.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e4 && tu.push(u.M.GUILD_THEME_MEMBER_COACHMARK),
        tt && tu.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ts && tu.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e3 && tu.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tc, tA] = (0, en.kn)(tu, eg.m.GUILD_HEADER_TOOLTIPS),
        [tE, th] = (0, eb.vB)(tn && e9 && !1 === e2 && !(0, es.ai)(f), eg.m.GUILD_HEADER_TOOLTIPS),
        [tg, tI] = (0, en.D8)(
            ta ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            f,
            { cooldownDurationMs: eU.bW, numTimesToRecur: 5 },
            eg.m.GUILD_HEADER_TOOLTIPS,
        ),
        [t_, tN] = (0, en.D8)(
            td ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            f,
            { cooldownDurationMs: eU.mD },
            eg.m.GUILD_HEADER_TOOLTIPS,
        ),
        tm = r.useMemo(
            () =>
                null != tc
                    ? { contentType: tc, data: null, markAsDismissed: tA }
                    : tE === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: tE, data: null, markAsDismissed: th }
                      : tg === u.M.BOOST_TO_UNLOCK_COACHMARK && null != tr
                        ? { contentType: tg, data: { featuredPowerup: tr }, markAsDismissed: tI }
                        : t_ === u.M.EXPIRING_POWERUP_COACHMARK && null != to
                          ? { contentType: t_, data: { featuredExpiringPowerup: to }, markAsDismissed: tN }
                          : null,
            [tc, tE, tg, t_, tr, to, tA, th, tI, tN],
        );
    return (0, l.jsx)(ic, {
        guildId: f,
        hideSelectedChannel: x,
        guild: b,
        scrollToChannel: H,
        selectedChannelId: x ? null : G,
        selectedChannel: eK,
        selectedVoiceChannelId: j,
        voiceStates: y,
        rtcConnectedChannelId: e5,
        rtcDesyncedVoiceStatesCount: e8,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != el || q,
        anyLayerOpen: eS || eT || ep,
        showGuildHeaderTutorial: eM,
        showGuildTemplateDirtyTooltip: eV,
        showNewUnreadsBar: eJ,
        isHeaderPopoutOpen: ez,
        enableStudyGroup: K,
        isGuildHeaderDismissibleTooltipShown: $,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: e6,
        shouldRenderBurstCoachmark: e1,
        guildHeaderContentDescriptor: tm,
        onFavoriteGuildContextMenu: D,
        hasFavoritesAccess: U,
    });
}
