n.r(t), n.d(t, { default: () => iA }), n(321073);
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(580929),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    g = n(922016),
    _ = n(192308),
    I = n(228366),
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
let U = new D(I.h, {
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
let F = "publicUpsellChannelNoticeGuilds",
    K = new Set();
class W extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(L.A, X.A, k.A), this.syncWith([L.A, X.A, k.A], P.tEg), (K = new Set(w.w.get(F)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = k.A.getMemberCount(e.id);
        return (
            !K.has(e.id) &&
            null != t &&
            t >= V.dH &&
            L.A.can(P.xBc.ADMINISTRATOR, e) &&
            !e.features.has(P.GuildFeatures.COMMUNITY)
        );
    }
}
let Y = new W(I.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!K.has(t)) return K.add(t), w.w.set(F, K), !0;
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
let q = new Z(I.h, {
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
    ei = n(313281),
    es = n(5180),
    el = n(250719),
    er = n(780645),
    ea = n(72152),
    eo = n(15073),
    ed = n(174459),
    eu = n(488926),
    ec = n(45780),
    eA = n(49999),
    eE = n(567305),
    eh = n(555325),
    eg = n(469993),
    e_ = n(260509),
    eI = n(287809),
    eN = n(568185);
let em = "hasSeenGuildTemplatePromotionTooltip",
    eC = {},
    eS = !0 === w.w.get(em);
function eT(e) {
    let { guildId: t } = e;
    eC = { ...eC, [t]: !1 };
}
class ep extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eC[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eS;
    }
}
let eM = new ep(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eC = { ...eC, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        w.w.set(em, !0), (eS = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eC = { ...eC, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eT,
    GUILD_TEMPLATE_DELETE_SUCCESS: eT,
});
var ef = n(875317),
    eO = n(181880),
    eL = n(285406),
    eR = n(361158),
    ex = n(488803),
    eG = n(764322),
    eD = n(661881),
    eU = n(379229),
    eb = n(229548),
    ey = n(139032),
    eP = n(52260),
    eH = n(363487),
    ev = n(342220),
    ej = n(383272),
    eB = n(414133),
    ew = n(864310),
    ek = n(972829),
    eX = n(568065),
    eV = n(320989),
    eF = n(728321),
    eK = n(79858),
    eW = n(72314),
    eY = n(919638),
    ez = n(808728),
    eQ = n(186111),
    eZ = n(584569),
    eq = n(763827),
    e$ = n(428262),
    eJ = n(885631),
    e0 = n(156867),
    e1 = n(83297),
    e3 = n(562708),
    e6 = n(702841),
    e8 = n(139286),
    e2 = n(468689),
    e7 = n(375708),
    e4 = n(330766);
function e5(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, e6.bG)([X.A, eI.default], () => {
            let e = eI.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, e_.bM)(n, e);
        });
    return (
        (0, e8.A)({
            type: e3.ImpressionTypes.POPOUT,
            name: e3.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e7.intl.string(e7.t.C0m4rQ),
            body: e7.intl.string(e7.t.zOHfEX),
            graphic: { type: "image", src: e4 },
            actions: [
                {
                    text: e7.intl.string(e7.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e2.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eA.i.USER_DISMISS),
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
                e2.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS, void 0, P.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eA.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var tt = n(834730),
    tn = n(821609),
    ti = n(383470);
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
                    t(eA.i.AUTO);
                },
            }),
        ],
    });
}
var tl = n(696943);
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
                    e2.A.open(t.id, P.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eA.i.USER_DISMISS),
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
            (0, l.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(i) : t }),
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
                        renderPopout: (e) => (0, l.jsx)(e5, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
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
    t_ = n(284245);
let tI = tu().debounce(tg.Ay.trackWithMetadata, 500),
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
            tI(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let _ = null;
        "function" == typeof h
            ? (_ = h())
            : null != h &&
              (_ = (0, l.jsx)(tc.$n, {
                  "data-migration-pending": !0,
                  className: t_.HM,
                  size: tc.$n.Sizes.SMALL,
                  onClick: () => {
                      null != a &&
                          ed.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
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
        let I = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: t_.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tA.D, {
                          onClick: function () {
                              tg.Ay.trackWithMetadata(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: t_.VN,
                          "aria-label": e7.intl.string(e7.t.WAI6xu),
                          children: (0, l.jsx)(tE.P, { size: "md", color: "currentColor", className: t_.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: t_.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: t_.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: t_.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(th.D, { variant: "heading-md/semibold", className: t_.DD, children: n })
                            : null,
                        (0, l.jsx)(tt.E, { variant: "text-sm/normal", children: i }),
                        _,
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
        onDismissed: () => n(eA.i.UNKNOWN),
        onClick: () => {
            open(tm.A.getArticleURL(P.MVz.CONNECTION_DETAILS)), n(eA.i.UNKNOWN);
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
let tO = new tf(I.h, {
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
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
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
    tj = n(841352);
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
var tw = n(140461);
function tk(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tG(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, ty.A)(i, e7.intl.string(e7.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(P.GuildFeatures.VERIFIED) ? e7.intl.string(e7.t.uUARXe) : e7.intl.string(e7.t["0Dx29f"]);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => n(eA.i.USER_DISMISS),
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
            n(eA.i.TAKE_ACTION);
            let e = await (0, tP.a)(P.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tb.A)(e);
        },
    });
}
var tX = n(631305),
    tV = n(473145),
    tF = n(625633);
function tK(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tV.Os)(t, P.TVA.TIER_2),
        { analyticsLocations: s } = (0, C.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => n(eA.i.UNKNOWN),
        cta: e7.intl.string(e7.t.oPAx73),
        message: e7.intl.format(e7.t.AcaNYw, { boostsNeeded: i }),
        type: P.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tX.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tF.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tW = n(63152);
class tY extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tW.K4)({ guildId: e.id, location: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tN, {
            guild: e,
            onDismissed: () => n(eA.i.UNKNOWN),
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
    t3 = n(451394),
    t6 = n(104171),
    t8 = n(47167),
    t2 = n(713654),
    t7 = n(976860),
    t4 = n(790535),
    t5 = n(110618),
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
    nA = n(28164);
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
        i = (0, t8.Ay)(n),
        s = (0, d.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t2.gU)(n);
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
                    ed.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e7.intl.string(e7.t.DlcqlU),
            icon: s ? tq.A : t$.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function n_(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nd.oF)(t),
        s = null != i ? (0, na.l)(i, !0) : null,
        a = (0, nd.WN)(t),
        o = (0, t8.Ay)(a),
        d = (0, t2.gU)(a),
        { startTime: u, endTime: c } = (0, no.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nu.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e7.intl.formatToPlainString(e7.t.PQlCWk, { minutes: h })
                : e7.intl.string(e7.t.WINqKV)
            : e7.intl.formatToPlainString(e7.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            ed.default.track(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
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
                                ed.default.track(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
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
                        (0, l.jsx)(tJ.C, {
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
function nI(e) {
    let { guildEvent: t } = e,
        n = (0, nd.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nE, {
              onClickCloseIcon: () => (0, nl.iF)({ eventId: t?.id }),
              heading: e7.intl.string(e7.t["1+boPi"]),
              topic: t.name,
              location: (0, na.l)(n, !0),
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
                null != t && null != t.getGuildId() && ((0, t4.av)(t), (0, t7.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nC(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t8.Ay)(n),
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
        locationIcon: (0, l.jsx)(t3.q, {
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
            (0, d.bG)([t9.default, ne.A, nt.Ay], () => {
                let e = t9.default.getId();
                return ne.A.getVoiceChannelId() === t ? nt.Ay.getPermissionsForUser(e, t) : null;
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
                                (0, l.jsx)(t6.Ay, { guildId: a, users: o, showUserPopout: !0, size: t6.DN.SIZE_16 }),
                                (0, l.jsx)(tt.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nA.c8,
                                    children: (0, t5.c)(a, o, n?.id, i.length),
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
            ? (h = (0, l.jsx)(nI, { guildEvent: o }))
            : o.entity_type === x.Ps.VOICE && null != a && (h = (0, l.jsx)(nh, { guildEvent: o, channel: a }));
    let _ = r.features.has(P.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !_) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(n_, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nM(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: () => i(eA.i.UNKNOWN),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("7206"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
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
                null != t && null != t.getGuildId() && ((0, t4.av)(t), (0, t7.uh)(t.getGuildId(), t.id));
        },
        title: e7.intl.string(e7.t["4Y2AS7"]),
        message: e7.intl.string(e7.t.wTsxTS),
        cta: e7.intl.string(e7.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: P.n5X.HUB_STUDY_ROOM,
    });
};
var nR = n(994190);
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
        s = (0, t2.gU)(n);
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
        r = (0, t8.Ay)(t),
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
            n(), e2.A.open(t.id, P.BEX.INTEGRATIONS);
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
                  s(), e2.A.open(n.id, P.BEX.INTEGRATIONS);
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
            (e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tN, {
        guild: t,
        onDismissed: n,
        onClick: () => e2.A.open(t.id, P.BEX.COMMUNITY),
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
var nV = n(493336);
class nF extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, _.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("92430"),
                n.e("54453"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 778929));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: P.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = ne.A.getChannelId(),
            t = e7.intl.formatToPlainString(e7.t.DEn7nu, { invitePeople: e7.intl.string(e7.t.Sd8Ixw) });
        this.props.markAsDismissed(eA.i.UNKNOWN), null != e && nV.A.sendBotMessage(e, t);
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
let nK = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
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
    let t = (0, l.jsx)(nW.e, { shortcut: nY.R.binds["0"], keyClassName: t_.Eb });
    return (0, l.jsx)(tN, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eA.i.UNKNOWN),
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
let n$ = new nq(I.h);
class nJ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.MANAGE_GUILD, e);
    }
}
let n0 = new nJ(I.h);
var n1 = n(731667);
function n3() {
    return !0;
}
class n6 extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], n3);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.ADMINISTRATOR, e);
    }
}
let n8 = new n6(I.h),
    n2 = "lastHiddenChannelNotice",
    n7 = [
        { type: P.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: P.n5X.GUILD_BOOSTING,
            store: n0,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: P.n5X.GUILD_BANNER, store: n$, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: P.n5X.INVITE, store: n8, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: P.n5X.HUB_LINK, store: n1.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: P.n5X.QUICKSWITCHER, store: nZ.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: P.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: P.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n4 = n7.map((e) => e.store).filter(nn.Vq),
    n5 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
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
        [E, h] = r.useState(w.w.get(n2) ?? 0),
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
        [_, I] = (0, en.ww)(g, A.id, eA.m.CHANNEL_NOTICES, !0),
        N = null != _,
        m = (0, d.yK)(
            n4,
            () =>
                N
                    ? []
                    : n7
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n5.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, en.kn)(m, eA.m.CHANNEL_NOTICES),
        T = _ ?? C,
        p = null != _ ? I : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), w.w.set(n2, e), h(e), p(eA.i.UNKNOWN);
        }, [p]),
        f = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nM, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nF, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tz, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nQ, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tK, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tC, { guild: A, markAsDismissed: () => p(eA.i.UNKNOWN) });
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
            return (0, l.jsx)(nK, { guild: t });
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
var is = n(532233);
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
    io = n(153822);
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
            I.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eV.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eV.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            I.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
        e.stopPropagation(), (0, ea.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) {
                if (!i) return;
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, l.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("9004"), n.e("19690"), n.e("22941"), n.e("10758")]).then(
                    n.bind(n, 455557),
                );
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
                    n.e("26142"),
                    n.e("84287"),
                    n.e("1780"),
                    n.e("47173"),
                    n.e("60361"),
                    n.e("41831"),
                    n.e("51437"),
                    n.e("87960"),
                    n.e("21293"),
                    n.e("93200"),
                    n.e("41625"),
                    n.e("90629"),
                    n.e("8886"),
                    n.e("6212"),
                    n.e("660"),
                    n.e("78220"),
                    n.e("11262"),
                    n.e("16227"),
                    n.e("37520"),
                    n.e("12410"),
                    n.e("38759"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("39476"),
                    n.e("40821"),
                    n.e("86832"),
                    n.e("76342"),
                    n.e("60988"),
                    n.e("20950"),
                    n.e("56372"),
                    n.e("71441"),
                    n.e("49623"),
                    n.e("35316"),
                    n.e("38838"),
                    n.e("45214"),
                    n.e("99253"),
                    n.e("47754"),
                    n.e("33526"),
                    n.e("89510"),
                    n.e("90862"),
                    n.e("97189"),
                    n.e("16918"),
                    n.e("33730"),
                    n.e("24059"),
                    n.e("42306"),
                    n.e("11291"),
                    n.e("83893"),
                    n.e("83133"),
                    n.e("63051"),
                    n.e("84873"),
                    n.e("19709"),
                    n.e("67458"),
                    n.e("58427"),
                    n.e("28646"),
                    n.e("65327"),
                    n.e("7959"),
                    n.e("61783"),
                    n.e("6605"),
                    n.e("54483"),
                    n.e("62461"),
                    n.e("25677"),
                    n.e("73679"),
                    n.e("73178"),
                    n.e("333"),
                    n.e("97638"),
                    n.e("22995"),
                    n.e("59096"),
                    n.e("55953"),
                    n.e("56386"),
                    n.e("51943"),
                    n.e("77083"),
                    n.e("46461"),
                    n.e("47944"),
                    n.e("64509"),
                    n.e("49868"),
                    n.e("90072"),
                    n.e("80822"),
                    n.e("50336"),
                    n.e("84133"),
                    n.e("13627"),
                    n.e("57940"),
                    n.e("78179"),
                    n.e("48157"),
                    n.e("44511"),
                    n.e("37271"),
                    n.e("82781"),
                    n.e("39932"),
                    n.e("70990"),
                    n.e("15130"),
                    n.e("57578"),
                    n.e("57016"),
                    n.e("45826"),
                    n.e("32697"),
                    n.e("64622"),
                    n.e("47728"),
                    n.e("31270"),
                    n.e("6514"),
                    n.e("8641"),
                    n.e("6247"),
                    n.e("66614"),
                    n.e("82041"),
                    n.e("97238"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("8073"),
                    n.e("42157"),
                    n.e("85148"),
                    n.e("4676"),
                    n.e("53727"),
                    n.e("57034"),
                    n.e("85948"),
                    n.e("12940"),
                    n.e("52443"),
                    n.e("11266"),
                    n.e("12124"),
                    n.e("18712"),
                    n.e("60654"),
                    n.e("70179"),
                    n.e("97690"),
                    n.e("87103"),
                    n.e("52865"),
                    n.e("57215"),
                    n.e("22535"),
                    n.e("31481"),
                    n.e("83140"),
                    n.e("18670"),
                    n.e("33238"),
                    n.e("31591"),
                    n.e("39111"),
                    n.e("58530"),
                    n.e("35426"),
                    n.e("78481"),
                    n.e("69487"),
                    n.e("87550"),
                    n.e("20631"),
                    n.e("8736"),
                    n.e("61285"),
                    n.e("97242"),
                    n.e("98795"),
                    n.e("65123"),
                    n.e("23549"),
                    n.e("83566"),
                    n.e("69722"),
                    n.e("80083"),
                    n.e("28510"),
                    n.e("8502"),
                    n.e("29483"),
                    n.e("57236"),
                    n.e("20993"),
                    n.e("69164"),
                    n.e("92116"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("80050"),
                    n.e("37502"),
                    n.e("68316"),
                    n.e("46819"),
                    n.e("81619"),
                    n.e("17738"),
                    n.e("31463"),
                    n.e("57328"),
                    n.e("44135"),
                    n.e("26858"),
                    n.e("82393"),
                    n.e("39328"),
                    n.e("48845"),
                    n.e("34383"),
                    n.e("83185"),
                    n.e("79247"),
                    n.e("41069"),
                    n.e("37261"),
                    n.e("69337"),
                    n.e("62965"),
                    n.e("47587"),
                    n.e("78777"),
                    n.e("64379"),
                    n.e("79465"),
                    n.e("83314"),
                    n.e("32129"),
                    n.e("85776"),
                    n.e("83671"),
                    n.e("63980"),
                    n.e("62323"),
                    n.e("73099"),
                    n.e("47199"),
                    n.e("78381"),
                    n.e("62280"),
                    n.e("78230"),
                    n.e("11002"),
                    n.e("47170"),
                    n.e("39361"),
                    n.e("15079"),
                    n.e("70613"),
                    n.e("25870"),
                    n.e("76831"),
                    n.e("9639"),
                    n.e("3515"),
                    n.e("77335"),
                    n.e("8177"),
                    n.e("41027"),
                    n.e("37351"),
                    n.e("22671"),
                    n.e("36518"),
                    n.e("79785"),
                    n.e("46757"),
                    n.e("90324"),
                    n.e("20578"),
                    n.e("36592"),
                    n.e("10027"),
                    n.e("92430"),
                    n.e("54453"),
                    n.e("79254"),
                    n.e("38977"),
                    n.e("20802"),
                    n.e("91474"),
                    n.e("17566"),
                    n.e("42205"),
                    n.e("55675"),
                    n.e("5581"),
                    n.e("49681"),
                    n.e("69047"),
                    n.e("96382"),
                    n.e("62052"),
                    n.e("71657"),
                    n.e("22218"),
                    n.e("64827"),
                    n.e("10471"),
                    n.e("63232"),
                    n.e("7167"),
                    n.e("84569"),
                    n.e("61060"),
                    n.e("54484"),
                    n.e("36850"),
                    n.e("60235"),
                    n.e("77333"),
                    n.e("6338"),
                    n.e("47834"),
                    n.e("18573"),
                    n.e("78157"),
                    n.e("44057"),
                    n.e("53782"),
                    n.e("88774"),
                    n.e("31988"),
                    n.e("34303"),
                    n.e("40291"),
                    n.e("2368"),
                    n.e("33115"),
                    n.e("97270"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("55936"),
                    n.e("89088"),
                    n.e("42834"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("45959"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("71202"),
                    n.e("62531"),
                    n.e("52846"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("11310"),
                    n.e("76602"),
                    n.e("7170"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("36877"),
                    n.e("52511"),
                    n.e("7575"),
                    n.e("40402"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("21930"),
                    n.e("14761"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("98329"),
                    n.e("92583"),
                    n.e("21957"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("8555"),
                    n.e("28095"),
                    n.e("86127"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("72789"),
                    n.e("54622"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("44502"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("89421"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("37977"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("24689"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("4848"),
                    n.e("65437"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("90757"),
                    n.e("45596"),
                    n.e("86672"),
                    n.e("94427"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("71477"),
                    n.e("81347"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("40153"),
                    n.e("3332"),
                    n.e("30788"),
                    n.e("8362"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("37021"),
                    n.e("93350"),
                    n.e("18465"),
                    n.e("71430"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("9371"),
                    n.e("2362"),
                    n.e("39171"),
                    n.e("74630"),
                    n.e("48948"),
                    n.e("63244"),
                    n.e("68214"),
                    n.e("44780"),
                    n.e("91450"),
                    n.e("83952"),
                    n.e("93438"),
                    n.e("36227"),
                    n.e("95340"),
                    n.e("44567"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("67535"),
                    n.e("1812"),
                    n.e("60773"),
                    n.e("9004"),
                    n.e("18113"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("49145"),
                    n.e("68763"),
                    n.e("79548"),
                    n.e("99976"),
                    n.e("58273"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("59957"),
                    n.e("26001"),
                    n.e("30997"),
                    n.e("29666"),
                    n.e("8536"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("18706"),
                    n.e("872"),
                    n.e("57458"),
                    n.e("38601"),
                    n.e("93336"),
                    n.e("1243"),
                    n.e("69495"),
                    n.e("15920"),
                    n.e("3930"),
                    n.e("28136"),
                    n.e("3663"),
                    n.e("27659"),
                    n.e("68530"),
                    n.e("66580"),
                    n.e("43116"),
                    n.e("78046"),
                    n.e("83230"),
                    n.e("82486"),
                    n.e("16084"),
                    n.e("73669"),
                    n.e("10943"),
                    n.e("7775"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("33097"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("1888"),
                    n.e("77602"),
                    n.e("10262"),
                    n.e("41786"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("34409"),
                    n.e("22547"),
                    n.e("29569"),
                    n.e("36002"),
                    n.e("43233"),
                    n.e("63726"),
                    n.e("71329"),
                    n.e("56373"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("74333"),
                    n.e("8364"),
                    n.e("99108"),
                    n.e("66147"),
                    n.e("89541"),
                    n.e("52823"),
                    n.e("56967"),
                    n.e("31203"),
                    n.e("66913"),
                    n.e("71719"),
                    n.e("19690"),
                    n.e("13848"),
                    n.e("39214"),
                    n.e("88307"),
                    n.e("14878"),
                    n.e("26508"),
                    n.e("91643"),
                    n.e("47011"),
                    n.e("42935"),
                    n.e("73091"),
                    n.e("69178"),
                    n.e("86692"),
                    n.e("16373"),
                    n.e("81398"),
                    n.e("24484"),
                    n.e("44943"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("91977"),
                    n.e("90152"),
                    n.e("46570"),
                    n.e("87973"),
                    n.e("57197"),
                    n.e("74337"),
                    n.e("14863"),
                    n.e("60165"),
                    n.e("12390"),
                    n.e("71167"),
                    n.e("13446"),
                    n.e("6410"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("68264"),
                    n.e("17699"),
                    n.e("57032"),
                    n.e("22941"),
                    n.e("94832"),
                    n.e("26386"),
                    n.e("65338"),
                    n.e("94171"),
                    n.e("74572"),
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
        !e && t && (0, et.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eA.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eN.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([
            n.e("95340"),
            n.e("9004"),
            n.e("43116"),
            n.e("56373"),
            n.e("19690"),
            n.e("13446"),
            n.e("17699"),
            n.e("57032"),
            n.e("9242"),
            n.e("93829"),
            n.e("9111"),
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
                  children: (0, l.jsx)(eF.A, {
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
                          (0, ea.Z)(!1);
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
                    children: (0, l.jsx)(eL.A, { guild: t, channel: n ?? ez.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, es.ai)(t.id) ? e0.T : e0.B;
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
        I,
        N,
        S,
        T,
        p,
        M,
        { guildId: f, hideSelectedChannel: R, selectedChannelId: x } = e,
        G = (0, er.$)("favorite-guild-header-context"),
        { hasAccess: D } = (0, ei.TW)("ConnectedGuildSidebar"),
        U = (0, d.bG)([X.A], () => X.A.getGuild(f)),
        b = (0, el.A)(f),
        y = (0, d.bG)([eW.A], () => eW.A.getGuildDimensions(f).scrollTo),
        H = (0, d.bG)([eq.A], () => eq.A.getChannelId()),
        j = (0, d.bG)([L.A], () => L.A.can(P.xBc.MANAGE_GUILD, U)),
        B = (0, d.bG)([eY.A], () => eY.A.isUnavailable(f)),
        w = (0, d.bG)([eI.default], () => eI.default.getCurrentUser()),
        { enableStudyGroup: k } = v(U),
        F = (0, ee.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [K, W] = r.useState(!F),
        [Y, z] = r.useState(f),
        { analyticsLocations: Q } = (0, C.Ay)(m.A.GUILD_HEADER);
    f !== Y && (z(f), W(!F));
    let [Z, q] = (0, ee.Ay)(
            (e) => [
                n7.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eA.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        $ = J(U),
        eN = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        em = (0, d.bG)([eQ.A], () => eQ.A.hasLayers()),
        eC = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([eK.A], () => eK.A.shouldShow(id)),
        eT =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (i = (0, d.bG)([eI.default], () => eI.default.getCurrentUser())),
            (s = null != t && (0, e_.bM)(t, i)),
            (a = (0, eg.oS)()),
            s &&
                (t?.features.has(P.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ep = U?.features.has(P.GuildFeatures.HUB) === !0,
        eL = j && U?.features.has(P.GuildFeatures.DISCOVERABLE) === !0,
        eV = (0, d.bG)(
            [eM, eQ.A],
            () => null != U && null != w && j && !eQ.A.hasLayers() && eM.shouldShowGuildTemplateDirtyTooltip(f),
        ),
        eF = (0, d.bG)([O.A], () => O.A.getChannel(x)),
        { isPopoutOpen: ez } = (0, ea.S)(),
        eJ = U?.features.has(P.GuildFeatures.COMMUNITY) ?? !1,
        e0 = e$.Ay.isNewUser(w),
        e1 = K && !e0;
    (c = (0, eo.TZ)(U)),
        (A = V.dR.some((e) => !(0, es.ai)(U?.id) && eu.Ib(e, U))),
        (E = U?.defaultMessageNotifications === P.orn.ALL_MESSAGES),
        (h = (0, ec.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, U?.id ?? P.dJq)),
        (g = c && (A || E) && !h),
        (I = r.useCallback(() => {
            (0, ec._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, U?.id ?? P.dJq, !0, eA.i.DISMISS);
        }, [U])),
        (N = r.useRef(!1)),
        r.useEffect(() => {
            g &&
                !N.current &&
                ((0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("98031"), n.e("52823"), n.e("42446")]).then(
                            n.bind(n, 653981),
                        );
                        return (t) =>
                            (0, l.jsx)(e, {
                                guild: U,
                                canEveryoneModerate: A,
                                isDefaultNotificationsAllMessages: E,
                                ...t,
                            });
                    },
                    { onCloseCallback: I },
                ),
                ed.default.track(P.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: U?.id ?? P.dJq,
                }),
                (N.current = !0));
        }, [A, U, I, E, g]);
    let e3 = (0, et.HX)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e6 =
            ((S = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (T = (0, eE._Y)(f)),
            (p =
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (M = (0, eh.X9)(S)),
            p && M && T);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, ef.Kb)(e, "GuildThemeNuxTrigger"),
            [l, a] = (0, en.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eA.m.GUILD_THEME_NUX),
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
        isNuxOpen: (0, _.useHasModalOpen)(eO.u),
        openNux: r.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, _.openModalLazy)(
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
                { modalKey: eO.u, onCloseCallback: () => i(eA.i.USER_DISMISS) },
            );
        }, []),
    });
    let e8 = (0, d.bG)([eq.A], () => eq.A.getChannelId()),
        e2 = (0, d.bG)([eZ.A], () => eZ.A.desyncedVoiceStatesCount),
        e7 = (0, eH.A)(f),
        e4 = (function (e) {
            let t = (0, eH.A)(e),
                n = (0, ej.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                i = (0, eB.OS)("useShouldShowGuildThemeMemberCoachmark"),
                s = (0, ek.A)(e),
                { available: l, isLoading: r } = (0, ew.A)(e);
            if (r) return !1;
            let a = l < eX.fe;
            return n && i && a && !s && !1 === t;
        })(f);
    ir.A.useConfig({ guildId: f, location: "guild_sidebar" });
    let e5 = (0, ex.C$)(f, "GuildSidebar"),
        e9 = (0, d.bG)([X.A], () => X.A.getGuild(f)?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1, [f]),
        te = e5 && !e9 && !1 === e7,
        tt = (0, eD.J)("GuildSidebar"),
        tn = (0, eG.S)(f, "GuildSidebar"),
        ti = e5 && !e9 && tn && !1 === e7,
        ts = (0, ev.A)(),
        tl = (0, ey.A)(f),
        tr = !1 === e7 && ts && null != tl,
        ta = (0, eP.A)(f),
        to = !1 === e7 && ts && null != ta,
        td = [];
    ep && td.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eT && td.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eL && td.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e7 && td.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e4 && td.push(u.M.GUILD_THEME_MEMBER_COACHMARK),
        te && td.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ti && td.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e6 && td.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tu, tc] = (0, en.kn)(td, eA.m.GUILD_HEADER_TOOLTIPS),
        [tA, tE] = (0, eb.vB)(tt && e5 && !1 === e7 && !(0, es.ai)(f), eA.m.GUILD_HEADER_TOOLTIPS),
        [th, tg] = (0, en.D8)(
            tr ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            f,
            { cooldownDurationMs: eU.bW, numTimesToRecur: 5 },
            eA.m.GUILD_HEADER_TOOLTIPS,
        ),
        [t_, tI] = (0, en.D8)(
            to ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            f,
            { cooldownDurationMs: eU.mD },
            eA.m.GUILD_HEADER_TOOLTIPS,
        ),
        tN = r.useMemo(
            () =>
                null != tu
                    ? { contentType: tu, data: null, markAsDismissed: tc }
                    : tA === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: tA, data: null, markAsDismissed: tE }
                      : th === u.M.BOOST_TO_UNLOCK_COACHMARK && null != tl
                        ? { contentType: th, data: { featuredPowerup: tl }, markAsDismissed: tg }
                        : t_ === u.M.EXPIRING_POWERUP_COACHMARK && null != ta
                          ? { contentType: t_, data: { featuredExpiringPowerup: ta }, markAsDismissed: tI }
                          : null,
            [tu, tA, th, t_, tl, ta, tc, tE, tg, tI],
        );
    return (0, l.jsx)(ic, {
        guildId: f,
        hideSelectedChannel: R,
        guild: U,
        scrollToChannel: y,
        selectedChannelId: R ? null : x,
        selectedChannel: eF,
        selectedVoiceChannelId: H,
        voiceStates: b,
        rtcConnectedChannelId: e8,
        rtcDesyncedVoiceStatesCount: e2,
        isUnavailable: B,
        user: w,
        hasChannelNotice: null != $ || Z,
        anyLayerOpen: eN || em || eC,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eV,
        showNewUnreadsBar: eJ,
        isHeaderPopoutOpen: ez,
        enableStudyGroup: k,
        isGuildHeaderDismissibleTooltipShown: q,
        canShowCoachMarkAtBottom: K,
        headerAnalyticsLocations: Q,
        isTutorialHighlightDismissed: e3,
        shouldRenderBurstCoachmark: e1,
        guildHeaderContentDescriptor: tN,
        onFavoriteGuildContextMenu: G,
        hasFavoritesAccess: D,
    });
}
