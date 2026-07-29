n.r(t), n.d(t, { default: () => ic }), n(321073);
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(461376),
    o = n(462180),
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
let Y = new W(I.h, {
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
    ei = n(281980),
    es = n(5180),
    el = n(428784),
    er = n(831617),
    ea = n(43471),
    eo = n(788563),
    ed = n(72152),
    eu = n(15073),
    ec = n(174459),
    eA = n(488926),
    eE = n(45780),
    eh = n(49999),
    eg = n(567305),
    e_ = n(555325),
    eI = n(469993),
    eN = n(260509),
    em = n(287809),
    eC = n(568185);
let eS = "hasSeenGuildTemplatePromotionTooltip",
    eT = {},
    ep = !0 === w.w.get(eS);
function eM(e) {
    let { guildId: t } = e;
    eT = { ...eT, [t]: !1 };
}
class ef extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eT[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !ep;
    }
}
let eO = new ef(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eT = { ...eT, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        w.w.set(eS, !0), (ep = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eT = { ...eT, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eM,
    GUILD_TEMPLATE_DELETE_SUCCESS: eM,
});
var eL = n(875317),
    eR = n(181880),
    ex = n(285406),
    eG = n(361158),
    eD = n(379229),
    eU = n(229548),
    eb = n(139032),
    ey = n(128313),
    eP = n(363487),
    eH = n(342220),
    ev = n(383272),
    ej = n(414133),
    eB = n(864310),
    ew = n(972829),
    ek = n(568065),
    eX = n(320989),
    eV = n(728321),
    eK = n(79858),
    eF = n(72314),
    eW = n(919638),
    eY = n(808728),
    ez = n(186111),
    eQ = n(584569),
    eZ = n(763827),
    eq = n(428262),
    e$ = n(885631),
    eJ = n(839979),
    e0 = n(599882),
    e1 = n(562708),
    e3 = n(702841),
    e8 = n(139286),
    e6 = n(468689),
    e2 = n(375708),
    e4 = n(330766);
function e5(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, e3.bG)([X.A, em.default], () => {
            let e = em.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, eN.bM)(n, e);
        });
    return (
        (0, e8.A)({
            type: e1.ImpressionTypes.POPOUT,
            name: e1.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e2.intl.string(e2.t.C0m4rQ),
            body: e2.intl.string(e2.t.zOHfEX),
            graphic: { type: "image", src: e4 },
            actions: [
                {
                    text: e2.intl.string(e2.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e6.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eh.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e9 = n(338854);
function e7(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e9.H, {
        targetElementRef: i,
        title: e2.intl.string(e2.t.gCgirr),
        body: e2.intl.string(e2.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e2.intl.string(e2.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e6.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS, void 0, P.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eh.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var te = n(834730),
    tt = n(821609),
    tn = n(709526);
function ti(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, l.jsx)("div", { className: tn.Wn }),
            (0, l.jsx)(te.E, { variant: "text-sm/normal", className: tn.Qs, children: e2.intl.string(e2.t.rdzeVP) }),
            (0, l.jsx)(tt.$, {
                variant: "overlay-primary",
                text: e2.intl.string(e2.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(eh.i.AUTO);
                },
            }),
        ],
    });
}
var ts = n(270533);
function tl(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e2.intl.string(e2.t.Hgd22r),
        body: e2.intl.string(e2.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e2.intl.string(e2.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e6.A.open(t.id, P.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eh.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function tr(e) {
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
let ta = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (function () {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) =>
                            (0, l.jsx)(ts.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) =>
                            (0, l.jsx)(ts.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) =>
                            (0, l.jsx)(ts.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) => (0, l.jsx)(ts.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) => (0, l.jsx)(ts.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(tr, {
                        renderPopout: (t) =>
                            (0, l.jsx)(ts.Gw, {
                                type: eD.o.BOOST_TO_UNLOCK,
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
                    return (0, l.jsx)(tr, {
                        renderPopout: (t) =>
                            (0, l.jsx)(ts.Mr, {
                                type: eD.o.EXPIRING_PERK,
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
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) => (0, l.jsx)(e5, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) => (0, l.jsx)(tl, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(tr, {
                        renderPopout: (0, l.jsx)(ti, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(tr, {
                        renderPopout: (e) => (0, l.jsx)(e7, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var to = n(435558),
    td = n.n(to),
    tu = n(862482),
    tc = n(939249),
    tA = n(789645),
    tE = n(297264),
    th = n(95561),
    tg = n(124925);
let t_ = td().debounce(th.Ay.trackWithMetadata, 500),
    tI = function (e) {
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
        let _ = null;
        "function" == typeof h
            ? (_ = h())
            : null != h &&
              (_ = (0, l.jsx)(tu.$n, {
                  "data-migration-pending": !0,
                  className: tg.HM,
                  size: tu.$n.Sizes.SMALL,
                  onClick: function () {
                      null != a &&
                          ec.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
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
            className: tg.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tc.D, {
                          onClick: function () {
                              th.Ay.trackWithMetadata(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: tg.VN,
                          "aria-label": e2.intl.string(e2.t.WAI6xu),
                          children: (0, l.jsx)(tA.P, { size: "md", color: "currentColor", className: tg.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tg.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tg.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tg.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(tE.D, { variant: "heading-md/semibold", className: tg.DD, children: n })
                            : null,
                        (0, l.jsx)(te.E, { variant: "text-sm/normal", children: i }),
                        _,
                    ],
                }),
            ],
        });
    };
var tN = n(975571);
function tm(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tI, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eh.i.UNKNOWN),
        onClick: () => {
            open(tN.A.getArticleURL(P.MVz.CONNECTION_DETAILS)), n(eh.i.UNKNOWN);
        },
        title: e2.intl.string(e2.t.YMgaJt),
        message: e2.intl.string(e2.t["AV/9eW"]),
        cta: e2.intl.string(e2.t.hvVgAZ),
        trackingSource: P.kZU.LINKED_ROLES_ADMIN_NUX,
        type: P.n5X.LINKED_ROLES_ADMIN,
    });
}
var tC = n(158390),
    tS = n(562465),
    tT = n(927813);
let tp = null;
class tM extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tp;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tp?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tp?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tp) return [];
        let e = tp;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tf = new tM(I.h, {
        LOGOUT: function () {
            tp = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tp = t;
        },
    }),
    tO = [];
async function tL() {
    let { body: e } = await tS.Bo.get({ url: P.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tR = (0, d.UT)(tf, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tf.getMap(),
    load: () => tL(),
    staleAfter: tT.A.Seconds.DAY,
    retryConfig: { backoff: () => new tC.A(5 * tT.A.Millis.MINUTE), maxRetries: 10 },
});
function tx(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tR(t);
    return n?.[e] ?? tO;
}
let tG = (0, y.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tD = n(509434),
    tU = n(975807),
    tb = n(201438),
    ty = n(194362),
    tP = n(307301),
    tH = n(661531),
    tv = n(921280);
function tj(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tv.kL,
        children: [
            (0, l.jsx)("div", { className: tv.j3, children: (0, l.jsx)("img", { className: tv.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tv.gm,
                children: (0, l.jsx)("div", {
                    className: tv.WA,
                    children: (0, l.jsx)(tP.j, { size: "sm", color: tH.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tB = n(150901);
function tw(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tx(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tb.A)(i, e2.intl.string(e2.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(P.GuildFeatures.VERIFIED) ? e2.intl.string(e2.t.uUARXe) : e2.intl.string(e2.t["0Dx29f"]);
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: () => n(eh.i.USER_DISMISS),
        title: e2.intl.format(e2.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tB.m,
            children: [e2.intl.string(e2.t["2u6ZlY"]), (0, l.jsx)(tD.I, { size: "xs", color: "currentColor" })],
        }),
        type: P.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tj, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eh.i.TAKE_ACTION);
            let e = await (0, ty.a)(P.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tU.A)(e);
        },
    });
}
var tk = n(631305),
    tX = n(473145),
    tV = n(625633);
function tK(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tX.Os)(t, P.TVA.TIER_2),
        { analyticsLocations: s } = (0, C.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: () => n(eh.i.UNKNOWN),
        cta: e2.intl.string(e2.t.oPAx73),
        message: e2.intl.format(e2.t.AcaNYw, { boostsNeeded: i }),
        type: P.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tk.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tV.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tF = n(906199);
class tW extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tF.K4)({ guildId: e.id, location: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tI, {
            guild: e,
            onDismissed: () => n(eh.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e2.intl.string(e2.t.hlitVQ) : e2.intl.string(e2.t.XHtaDD),
            cta: e2.intl.string(e2.t["vqb+H1"]),
            trackingSource: P.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: P.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tY = d.Ay.connectStores([k.A], (e) => {
    let { guild: t } = e;
    return { memberCount: k.A.getMemberCount(t.id) };
})(tW);
var tz = n(503698),
    tQ = n.n(tz),
    tZ = n(933832),
    tq = n(782603),
    t$ = n(81466),
    tJ = n(116085),
    t0 = n(597601),
    t1 = n(451394),
    t3 = n(104171),
    t8 = n(47167),
    t6 = n(713654),
    t2 = n(976860),
    t4 = n(790535),
    t5 = n(110618),
    t9 = n(280450),
    t7 = n(309010),
    ne = n(312006),
    nt = n(403362),
    nn = n(707592),
    ni = n(698441),
    ns = n(935159),
    nl = n(11550),
    nr = n(435328),
    na = n(563312),
    no = n(9448),
    nd = n(974930),
    nu = n(666394),
    nc = n(89180);
let nA = r.memo(function (e) {
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
        className: nc.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tQ()(nc.fI, nc.pF),
                children: [
                    (0, l.jsx)("div", { className: nc.Ok }),
                    (0, l.jsx)(te.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nc.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tc.D, {
                            onClick: o,
                            className: nc.ut,
                            "aria-label": e2.intl.string(e2.t.cpT0Cq),
                            children: (0, l.jsx)(tA.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(tE.D, { color: "text-strong", variant: "heading-md/semibold", className: nc.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tQ()(nc.fI, nc.pF),
                children: [
                    i,
                    (0, l.jsx)(te.E, { color: "none", variant: "text-xs/normal", className: nc.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(te.E, {
                                    className: nc.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(te.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nc.zH,
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
function nE(e) {
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
        r = (0, t6.gU)(n);
    return (0, l.jsx)(nA, {
        onClickCloseIcon: () => (0, ns.iF)({ eventId: t?.id }),
        heading: e2.intl.string(e2.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nc.uE }) : null,
        children: (0, l.jsx)(nS, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nh(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nd.G3)(t),
        s = (0, d.bG)([ni.Ay], () => ni.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([nl.A], () => nl.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, ns.pE)(t.id),
        (0, l.jsx)(tt.$, {
            onClick: function () {
                (0, nu.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, ns.Lx)(t.id), 1e3)),
                    ec.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e2.intl.string(e2.t.DlcqlU),
            icon: s ? tZ.A : tq.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function ng(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, no.oF)(t),
        s = null != i ? (0, nr.l)(i, !0) : null,
        a = (0, no.WN)(t),
        o = (0, t8.Ay)(a),
        d = (0, t6.gU)(a),
        { startTime: u, endTime: c } = (0, na.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nd.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e2.intl.formatToPlainString(e2.t.PQlCWk, { minutes: h })
                : e2.intl.string(e2.t.WINqKV)
            : e2.intl.formatToPlainString(e2.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            ec.default.track(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nc.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nc.fI,
                    children: [
                        (0, l.jsx)(tc.D, {
                            onClick: () => (0, nn.uR)({ eventId: t.id }),
                            className: nc.oP,
                            children: (0, l.jsx)(te.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nc.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tc.D, {
                            onClick: () => {
                                ec.default.track(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, ns.Lx)(t.id);
                            },
                            className: nc.ut,
                            "aria-label": e2.intl.string(e2.t.cpT0Cq),
                            children: (0, l.jsx)(tA.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tQ()(nc.fI, nc.pF),
                    children: [
                        (0, l.jsx)(t$.C, {
                            size: "custom",
                            color: "currentColor",
                            className: nc.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(te.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nc.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tQ()(nc.fI, nc.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nc.uE })
                            : (0, l.jsx)(tJ.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nc.uE,
                              }),
                        (0, l.jsx)(te.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nc.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nh, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function n_(e) {
    let { guildEvent: t } = e,
        n = (0, no.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nA, {
              onClickCloseIcon: () => (0, ns.iF)({ eventId: t?.id }),
              heading: e2.intl.string(e2.t["1+boPi"]),
              topic: t.name,
              location: (0, nr.l)(n, !0),
              locationIcon: (0, l.jsx)(tJ.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nc.uE,
              }),
              children: (0, l.jsx)(nI, { guildEvent: t }),
          });
}
function nI(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, nn.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nc.PD,
        children: (0, l.jsx)(tt.$, {
            variant: "active",
            size: "sm",
            text: e2.intl.string(e2.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nN(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nc.PD,
        children: (0, l.jsx)(tt.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t4.av)(t), (0, t2.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nm(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t8.Ay)(n),
        s = (0, d.yK)([T.A], () => [...new Set(T.A.getMutableParticipants(n.id, p.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([T.A], () => T.A.getParticipantCount(n.id, p.ip.AUDIENCE), [n.id]),
        a = e2.intl.formatToPlainString(e2.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(nA, {
        onClickCloseIcon: () => (0, ns.iF)({ stageId: t?.id }),
        heading: e2.intl.string(e2.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(t0.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nc.uE,
        }),
        locationIcon: (0, l.jsx)(t1.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nc.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nS, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nC = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nS(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([L.A], () => L.A.can(P.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t9.default, t7.Ay, ne.Ay], () => {
                let e = t9.default.getId();
                return t7.Ay.getVoiceChannelId() === t ? ne.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e2.intl.string(e2.t.VJlc0S);
    switch (s) {
        case 1:
            A = e2.intl.string(e2.t.VJlc0S);
            break;
        case 2:
            (A = e2.intl.string(e2.t.ZYO5OK)),
                c?.speaker ? (A = e2.intl.string(e2.t["/cnSFc"])) : null != c && (A = e2.intl.string(e2.t.btSGOj));
            break;
        case 3:
            A = e2.intl.string(e2.t.wBoE6L);
            break;
        default:
            (0, nt.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tQ()(nc.fI, nc.pF),
                            children: [
                                (0, l.jsx)(t3.Ay, { guildId: a, users: o, showUserPopout: !0, size: t3.DN.SIZE_16 }),
                                (0, l.jsx)(te.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nc.c8,
                                    children: (0, t5.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nN, { channel: n, label: A }),
              ],
          });
}
let nT = r.memo(function (e) {
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
        ? g && (h = (0, l.jsx)(nm, { stageInstance: c, channel: a }))
        : o.entity_type === x.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nm, { stageInstance: c, channel: a }))
          : o.entity_type === x.Ps.EXTERNAL
            ? (h = (0, l.jsx)(n_, { guildEvent: o }))
            : o.entity_type === x.Ps.VOICE && null != a && (h = (0, l.jsx)(nE, { guildEvent: o, channel: a }));
    let _ = r.features.has(P.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !_) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(ng, { guildEvent: e, noticeType: t });
    }
    return h;
});
function np(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: () => i(eh.i.UNKNOWN),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("7054"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: e2.intl.string(e2.t["1+hiP6"]),
        cta: e2.intl.string(e2.t.hvVgAZ),
        trackingSource: P.kZU.HUB_LINK_NOTICE,
        type: P.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nM = n(717421),
    nf = n(450510);
let nO = function (e) {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tI, {
        guild: n,
        onDismissed: function () {
            (0, nf.sF)(nf._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: function () {
            (0, nf.sF)(nf._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t4.av)(t), (0, t2.uh)(t.getGuildId(), t.id));
        },
        title: e2.intl.string(e2.t["4Y2AS7"]),
        message: e2.intl.string(e2.t.wTsxTS),
        cta: e2.intl.string(e2.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: P.n5X.HUB_STUDY_ROOM,
    });
};
var nL = n(141430);
let nR = function (e) {
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
        s = (0, t6.gU)(n);
    return (0, l.jsx)(nA, {
        heading: e2.intl.string(e2.t["X2K3/4"]),
        topic: t,
        location: e2.intl.string(e2.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nL.K }) : null,
        children: (0, l.jsx)(nS, { channel: n, speakers: i, voiceType: nC.STUDY_ROOM }),
    });
};
var nx = n(48686);
function nG(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nf.HP], () => nf.HP.hasHotspot(nf._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nx.Q)(t.guild_id),
        r = (0, t8.Ay)(t),
        o = (0, nM.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nO, { channel: t, guild: n })
            : (0, l.jsx)(nR, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nD = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eY.Ay], () => eY.Ay.getChannels(t.id)[eY.vM][0]),
        i = (0, d.bG)([L.A], () => null != n && L.A.can(P.xBc.CONNECT, n.channel));
    return t.features.has(P.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nG, { channel: n.channel, guild: t })
        : null;
};
function nU(e) {
    let { guild: t } = e;
    function n() {
        return j.A.dismissNotice(t.id);
    }
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: n,
        cta: e2.intl.string(e2.t.RzWDqY),
        message: e2.intl.format(e2.t["kQ/MDl"], {}),
        type: P.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e6.A.open(t.id, P.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nb = n(587895),
    ny = n(143582);
function nP(e) {
    let t,
        { guild: n } = e,
        i = (0, B.$s)(n);
    function s() {
        return (0, ny.Hc)(n.id);
    }
    let a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nb.A], () => {
            let e = [];
            for (let t of a) {
                let n = nb.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? e2.intl.formatToPlainString(e2.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e2.intl.formatToPlainString(e2.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e2.intl.formatToPlainString(e2.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e2.intl.string(e2.t.MvfowF)),
          (0, l.jsx)(tI, {
              guild: n,
              onDismissed: s,
              message: t,
              type: P.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e6.A.open(n.id, P.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e2.intl.string(e2.t.Rr3MAe),
          }));
}
var nH = n(628287);
let nv = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: n,
        onClick: () => e6.A.open(t.id, P.BEX.COMMUNITY),
        message: e2.intl.string(e2.t["2klD0Z"]),
        trackingSource: P.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: P.n5X.PUBLIC_UPSELL,
        image: nH,
        cta: e2.intl.string(e2.t.hvVgAZ),
    });
};
var nj = n(536194),
    nB = n(780964),
    nw = n(766075);
class nk extends r.PureComponent {
    render() {
        return (0, l.jsx)(tI, {
            guild: this.props.guild,
            onClick: () => (0, nw.openUserSettings)(nB.X.ACCOUNT_PANEL),
            message: e2.intl.format(e2.t["oCd+at"], {}),
            cta: e2.intl.string(e2.t["8dCrV9"]),
            trackingSource: P.kZU.GUILD_MFA_WARNING,
            type: P.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nX = n(148494);
class nV extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, _.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("27574"),
                n.e("21149"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: P.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t7.Ay.getChannelId(),
            t = e2.intl.formatToPlainString(e2.t.DEn7nu, { invitePeople: e2.intl.string(e2.t.Sd8Ixw) });
        this.props.markAsDismissed(eh.i.UNKNOWN), null != e && nX.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e2.intl.string(e2.t.VWqWZQ)}
${e2.intl.string(e2.t["0Lgb/K"])}`;
        return (0, l.jsx)(tI, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e2.intl.string(e2.t.Sd8Ixw),
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
    return (0, l.jsx)(tI, {
        guild: t,
        onDismissed: n,
        message: e2.intl.format(e2.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tN.A.getArticleURL(P.MVz.MAX_MEMBERS),
        }),
        type: P.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nF = n(475358),
    nW = n(675704),
    nY = n(793322);
let nz = function (e) {
    let t = (0, l.jsx)(nF.e, { shortcut: nW.R.binds["0"], keyClassName: tg.Eb });
    return (0, l.jsx)(tI, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eh.i.UNKNOWN),
        onClick: () => (0, nY.WU)("CHANNEL_NOTICE"),
        message: e2.intl.string(e2.t.Qhk8cs),
        cta: t,
        trackingSource: P.kZU.QUICK_SWITCHER_NOTICE,
        type: P.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nQ = n(174768);
class nZ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(X.A), this.syncWith([X.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(P.GuildFeatures.BANNER) && Date.now() - t >= P.D2K;
    }
}
let nq = new nZ(I.h);
class n$ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.MANAGE_GUILD, e);
    }
}
let nJ = new n$(I.h);
var n0 = n(731667);
function n1() {
    return !0;
}
class n3 extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(L.A), this.syncWith([L.A], n1);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && L.A.can(P.xBc.ADMINISTRATOR, e);
    }
}
let n8 = new n3(I.h),
    n6 = "lastHiddenChannelNotice",
    n2 = [
        { type: P.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: P.n5X.GUILD_BOOSTING,
            store: nJ,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: P.n5X.GUILD_BANNER, store: nq, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: P.n5X.INVITE, store: n8, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: P.n5X.HUB_LINK, store: n0.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: P.n5X.QUICKSWITCHER, store: nQ.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: P.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: P.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n4 = n2.map((e) => e.store).filter(nt.Vq),
    n5 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n9(e) {
    e.stopPropagation();
}
let n7 = [];
function ie(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(w.w.get(n6) ?? 0),
        g =
            ((n = t = A.id),
            (i = tG.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([L.A], () => L.A.canWithPartialContext(P.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tx(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n7;
            }, [c])),
        [_, I] = (0, en.ww)(g, A.id, eh.m.CHANNEL_NOTICES, !0),
        N = null != _,
        m = (0, d.yK)(
            n4,
            () =>
                N
                    ? []
                    : n2
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n5.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, en.kn)(m, eh.m.CHANNEL_NOTICES),
        T = _ ?? C,
        p = null != _ ? I : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), w.w.set(n6, e), h(e), p(eh.i.UNKNOWN);
        }, [p]),
        f = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(np, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nV, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tY, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nz, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tK, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tm, { guild: A, markAsDismissed: () => p(eh.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tw, { guild: A, markAsDismissed: p });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, l.jsx)("div", { onContextMenu: n9, children: f });
}
let it = function (e) {
    let { guild: t } = e;
    switch (J(t)) {
        case $.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nv, { guild: t });
        case $.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nK, { guild: t });
        case $.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nT, { guild: t });
        case $.GUILD_MFA_WARNING:
            return (0, l.jsx)(nk, { guild: t });
        case $.COMMANDS_MIGRATION:
            return (0, l.jsx)(nU, { guild: t });
        case $.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nP, { guild: t });
        case $.HUB_STUDY_ROOM:
            return (0, l.jsx)(nD, { guild: t });
    }
    return nj.P.isDisallowPopupsSet() ? null : (0, l.jsx)(ie, { guild: e.guild });
};
var ii = n(352001);
function is(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: ii.k, ref: i, children: (0, l.jsx)(it, { guild: t }) })
    );
}
var il = n(66933),
    ir = n(846930),
    ia = n(541302);
let io = "server-settings",
    id = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class iu extends r.PureComponent {
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
            (this.historyUnlisten = eX.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eX.A.getHistory();
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
        e.stopPropagation(), (0, ed.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) {
                if (!i) return;
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("79948").then(n.bind(n, 329671));
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
                    n.e("94614"),
                    n.e("38108"),
                    n.e("31668"),
                    n.e("35285"),
                    n.e("53969"),
                    n.e("40351"),
                    n.e("6389"),
                    n.e("48180"),
                    n.e("94629"),
                    n.e("67792"),
                    n.e("73153"),
                    n.e("14767"),
                    n.e("15214"),
                    n.e("76684"),
                    n.e("85631"),
                    n.e("21532"),
                    n.e("75030"),
                    n.e("47899"),
                    n.e("8248"),
                    n.e("11895"),
                    n.e("37175"),
                    n.e("1248"),
                    n.e("24092"),
                    n.e("33004"),
                    n.e("3557"),
                    n.e("83118"),
                    n.e("98942"),
                    n.e("31076"),
                    n.e("66806"),
                    n.e("23102"),
                    n.e("2285"),
                    n.e("97726"),
                    n.e("42394"),
                    n.e("44459"),
                    n.e("98986"),
                    n.e("18379"),
                    n.e("60411"),
                    n.e("93637"),
                    n.e("45807"),
                    n.e("26572"),
                    n.e("39737"),
                    n.e("85391"),
                    n.e("56356"),
                    n.e("18307"),
                    n.e("5270"),
                    n.e("42293"),
                    n.e("60574"),
                    n.e("82222"),
                    n.e("18917"),
                    n.e("94450"),
                    n.e("86307"),
                    n.e("3574"),
                    n.e("711"),
                    n.e("25457"),
                    n.e("40981"),
                    n.e("63576"),
                    n.e("50693"),
                    n.e("6487"),
                    n.e("69794"),
                    n.e("20661"),
                    n.e("46809"),
                    n.e("18315"),
                    n.e("17776"),
                    n.e("78969"),
                    n.e("77770"),
                    n.e("61275"),
                    n.e("49557"),
                    n.e("30072"),
                    n.e("18629"),
                    n.e("48227"),
                    n.e("13920"),
                    n.e("99424"),
                    n.e("670"),
                    n.e("99496"),
                    n.e("44565"),
                    n.e("88563"),
                    n.e("24212"),
                    n.e("20459"),
                    n.e("1301"),
                    n.e("55983"),
                    n.e("47519"),
                    n.e("80197"),
                    n.e("48132"),
                    n.e("61686"),
                    n.e("77873"),
                    n.e("97312"),
                    n.e("38469"),
                    n.e("9009"),
                    n.e("80126"),
                    n.e("91072"),
                    n.e("43422"),
                    n.e("49181"),
                    n.e("9"),
                    n.e("28863"),
                    n.e("35182"),
                    n.e("76913"),
                    n.e("50766"),
                    n.e("33925"),
                    n.e("72723"),
                    n.e("69977"),
                    n.e("94149"),
                    n.e("55286"),
                    n.e("43325"),
                    n.e("72026"),
                    n.e("83536"),
                    n.e("66756"),
                    n.e("25167"),
                    n.e("3650"),
                    n.e("25996"),
                    n.e("54948"),
                    n.e("85251"),
                    n.e("28634"),
                    n.e("39644"),
                    n.e("73432"),
                    n.e("39086"),
                    n.e("17104"),
                    n.e("18021"),
                    n.e("28212"),
                    n.e("35353"),
                    n.e("97551"),
                    n.e("10743"),
                    n.e("42745"),
                    n.e("70148"),
                    n.e("22878"),
                    n.e("74318"),
                    n.e("10887"),
                    n.e("99439"),
                    n.e("74362"),
                    n.e("13162"),
                    n.e("78849"),
                    n.e("75459"),
                    n.e("43300"),
                    n.e("32886"),
                    n.e("92111"),
                    n.e("64648"),
                    n.e("95013"),
                    n.e("76858"),
                    n.e("6819"),
                    n.e("55"),
                    n.e("58921"),
                    n.e("19728"),
                    n.e("94373"),
                    n.e("35238"),
                    n.e("58818"),
                    n.e("61833"),
                    n.e("11689"),
                    n.e("4142"),
                    n.e("19059"),
                    n.e("92576"),
                    n.e("4349"),
                    n.e("73763"),
                    n.e("98833"),
                    n.e("47352"),
                    n.e("38280"),
                    n.e("12345"),
                    n.e("9172"),
                    n.e("65420"),
                    n.e("3056"),
                    n.e("62329"),
                    n.e("22570"),
                    n.e("99998"),
                    n.e("80759"),
                    n.e("33587"),
                    n.e("88391"),
                    n.e("988"),
                    n.e("54540"),
                    n.e("32744"),
                    n.e("21035"),
                    n.e("26738"),
                    n.e("41295"),
                    n.e("69960"),
                    n.e("46148"),
                    n.e("91922"),
                    n.e("79414"),
                    n.e("64488"),
                    n.e("91109"),
                    n.e("61439"),
                    n.e("39653"),
                    n.e("39013"),
                    n.e("99265"),
                    n.e("40804"),
                    n.e("45827"),
                    n.e("96393"),
                    n.e("16123"),
                    n.e("73193"),
                    n.e("78250"),
                    n.e("42529"),
                    n.e("31464"),
                    n.e("3263"),
                    n.e("54964"),
                    n.e("76279"),
                    n.e("51962"),
                    n.e("35459"),
                    n.e("2861"),
                    n.e("63933"),
                    n.e("42083"),
                    n.e("20182"),
                    n.e("47426"),
                    n.e("202"),
                    n.e("49273"),
                    n.e("83647"),
                    n.e("87085"),
                    n.e("72118"),
                    n.e("65831"),
                    n.e("59729"),
                    n.e("3240"),
                    n.e("72767"),
                    n.e("38647"),
                    n.e("102"),
                    n.e("25473"),
                    n.e("48149"),
                    n.e("46420"),
                    n.e("19834"),
                    n.e("51872"),
                    n.e("75091"),
                    n.e("27574"),
                    n.e("21149"),
                    n.e("99561"),
                    n.e("49817"),
                    n.e("67578"),
                    n.e("45850"),
                    n.e("21398"),
                    n.e("50482"),
                    n.e("62332"),
                    n.e("8607"),
                    n.e("5581"),
                    n.e("49681"),
                    n.e("69047"),
                    n.e("96382"),
                    n.e("62052"),
                    n.e("71657"),
                    n.e("22218"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("7167"),
                    n.e("84569"),
                    n.e("61060"),
                    n.e("10471"),
                    n.e("40135"),
                    n.e("60235"),
                    n.e("77333"),
                    n.e("6338"),
                    n.e("47834"),
                    n.e("18573"),
                    n.e("97595"),
                    n.e("44057"),
                    n.e("55112"),
                    n.e("28504"),
                    n.e("31988"),
                    n.e("62156"),
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
                    n.e("69294"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("71315"),
                    n.e("45959"),
                    n.e("58529"),
                    n.e("81987"),
                    n.e("58038"),
                    n.e("71202"),
                    n.e("75201"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("91763"),
                    n.e("11310"),
                    n.e("76602"),
                    n.e("7170"),
                    n.e("21921"),
                    n.e("40402"),
                    n.e("36877"),
                    n.e("52511"),
                    n.e("7575"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("71210"),
                    n.e("21930"),
                    n.e("59460"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("92583"),
                    n.e("21957"),
                    n.e("66495"),
                    n.e("98329"),
                    n.e("8555"),
                    n.e("88342"),
                    n.e("30233"),
                    n.e("86127"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("72789"),
                    n.e("54622"),
                    n.e("28203"),
                    n.e("25949"),
                    n.e("44502"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("89421"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("90365"),
                    n.e("23354"),
                    n.e("52548"),
                    n.e("17989"),
                    n.e("37977"),
                    n.e("91671"),
                    n.e("49653"),
                    n.e("47626"),
                    n.e("88070"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("24689"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("4848"),
                    n.e("31267"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("74630"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("39075"),
                    n.e("63235"),
                    n.e("86672"),
                    n.e("48948"),
                    n.e("94427"),
                    n.e("63244"),
                    n.e("64850"),
                    n.e("76413"),
                    n.e("70104"),
                    n.e("68214"),
                    n.e("44761"),
                    n.e("2564"),
                    n.e("71477"),
                    n.e("17563"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("48330"),
                    n.e("91450"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("36227"),
                    n.e("37021"),
                    n.e("65840"),
                    n.e("18465"),
                    n.e("71430"),
                    n.e("76516"),
                    n.e("501"),
                    n.e("86243"),
                    n.e("85794"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("5557"),
                    n.e("68062"),
                    n.e("93438"),
                    n.e("9371"),
                    n.e("45437"),
                    n.e("74610"),
                    n.e("39171"),
                    n.e("44780"),
                    n.e("83952"),
                    n.e("95340"),
                    n.e("89916"),
                    n.e("60773"),
                    n.e("66948"),
                    n.e("9004"),
                    n.e("59957"),
                    n.e("8018"),
                    n.e("65927"),
                    n.e("49145"),
                    n.e("68763"),
                    n.e("18113"),
                    n.e("58273"),
                    n.e("20930"),
                    n.e("34786"),
                    n.e("99976"),
                    n.e("26001"),
                    n.e("30997"),
                    n.e("3930"),
                    n.e("29666"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("3663"),
                    n.e("82730"),
                    n.e("8536"),
                    n.e("28136"),
                    n.e("57458"),
                    n.e("38601"),
                    n.e("1243"),
                    n.e("88393"),
                    n.e("18706"),
                    n.e("872"),
                    n.e("52531"),
                    n.e("93336"),
                    n.e("15920"),
                    n.e("68530"),
                    n.e("36894"),
                    n.e("16084"),
                    n.e("27659"),
                    n.e("66580"),
                    n.e("43116"),
                    n.e("78046"),
                    n.e("83230"),
                    n.e("82486"),
                    n.e("73669"),
                    n.e("10943"),
                    n.e("7775"),
                    n.e("28235"),
                    n.e("21778"),
                    n.e("22547"),
                    n.e("61058"),
                    n.e("66147"),
                    n.e("50342"),
                    n.e("33097"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("10262"),
                    n.e("41786"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("34409"),
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
                    n.e("89541"),
                    n.e("52823"),
                    n.e("56967"),
                    n.e("66913"),
                    n.e("71719"),
                    n.e("19690"),
                    n.e("13848"),
                    n.e("39214"),
                    n.e("88307"),
                    n.e("14878"),
                    n.e("76376"),
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
                    n.e("74337"),
                    n.e("57197"),
                    n.e("14863"),
                    n.e("60165"),
                    n.e("12390"),
                    n.e("71167"),
                    n.e("13446"),
                    n.e("6410"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("57683"),
                    n.e("53584"),
                    n.e("17699"),
                    n.e("57032"),
                    n.e("22941"),
                    n.e("94832"),
                    n.e("26386"),
                    n.e("65338"),
                    n.e("71790"),
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
        !e && t && (0, et.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eh.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eC.A.hideGuildTemplateDirtyTooltip(e.id);
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
            n.e("68590"),
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
            : (0, l.jsx)(ta, {
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
                  children: (0, l.jsx)(eV.A, {
                      tutorialId: io,
                      position: "bottom",
                      inlineSpecs: id,
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
                                title: e2.intl.string(e2.t.Rk2RJk),
                                body: e2.intl.string(e2.t.sFSrFH),
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
                                title: e2.intl.string(e2.t.Q3qa4x),
                                body: e2.intl.string(e2.t.UyHD4O),
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
                          (0, ed.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: s, ...r } = i;
                          return (0, l.jsx)(e0.Ay, {
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
            i = null != t && (0, e$.A)(t);
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
            return (0, l.jsx)(ir.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(P.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: ia.r0,
                    children: (0, l.jsx)(ex.A, { guild: t, channel: n ?? eY.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, es.ai)(t.id) ? eJ.T : eJ.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, e$.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, es.YC)(e);
        return (0, l.jsxs)("nav", {
            className: ia.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e2.intl.formatToPlainString(e2.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(is, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ic(e) {
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
        { guildId: f, hideSelectedChannel: x, selectedChannelId: G } = e,
        D = (0, el.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, ei.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(f)),
        y = (0, d.bG)([R.Ay], () => R.Ay.getVoiceStates(f), [f]),
        H = (0, d.bG)([eF.A], () => eF.A.getGuildDimensions(f).scrollTo),
        j = (0, d.bG)([eZ.A], () => eZ.A.getChannelId()),
        B = (0, d.bG)([L.A], () => L.A.can(P.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([eW.A], () => eW.A.isUnavailable(f)),
        k = (0, d.bG)([em.default], () => em.default.getCurrentUser()),
        { enableStudyGroup: K } = v(b),
        F = (0, ee.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!F),
        [z, Q] = r.useState(f),
        { analyticsLocations: Z } = (0, C.Ay)(m.A.GUILD_HEADER);
    f !== z && (Q(f), Y(!F));
    let [q, $] = (0, ee.Ay)(
            (e) => [
                n2.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eh.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        eC = J(b),
        eS = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        eT = (0, d.bG)([ez.A], () => ez.A.hasLayers()),
        ep = (0, eG.xr)((e) => e.fullScreenLayers.length > 0),
        eM = (0, d.bG)([eK.A], () => eK.A.shouldShow(io)),
        ef =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (i = (0, d.bG)([em.default], () => em.default.getCurrentUser())),
            (s = null != t && (0, eN.bM)(t, i)),
            (a = (0, eI.oS)()),
            s &&
                (t?.features.has(P.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ex = b?.features.has(P.GuildFeatures.HUB) === !0,
        eX = B && b?.features.has(P.GuildFeatures.DISCOVERABLE) === !0,
        eV = (0, d.bG)(
            [eO, ez.A],
            () => null != b && null != k && B && !ez.A.hasLayers() && eO.shouldShowGuildTemplateDirtyTooltip(f),
        ),
        eY = (0, d.bG)([O.A], () => O.A.getChannel(G)),
        { isPopoutOpen: e$ } = (0, ed.S)(),
        eJ = b?.features.has(P.GuildFeatures.COMMUNITY) ?? !1,
        e0 = eq.Ay.isNewUser(k),
        e1 = W && !e0;
    (c = (0, eu.TZ)(b)),
        (A = V.dR.some((e) => !(0, es.ai)(b?.id) && eA.Ib(e, b))),
        (E = b?.defaultMessageNotifications === P.orn.ALL_MESSAGES),
        (h = (0, eE.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? P.dJq)),
        (g = c && (A || E) && !h),
        (I = r.useCallback(() => {
            (0, eE._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? P.dJq, !0, eh.i.DISMISS);
        }, [b])),
        (N = r.useRef(!1)),
        r.useEffect(() => {
            g &&
                !N.current &&
                ((0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("21447"), n.e("52823"), n.e("42446")]).then(
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
                    { onCloseCallback: I },
                ),
                ec.default.track(P.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? P.dJq,
                }),
                (N.current = !0));
        }, [A, b, I, E, g]);
    let e3 = (0, et.HX)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e8 =
            ((S = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (T = (0, eg._Y)(f)),
            (p =
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                S?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (M = (0, e_.X9)(S)),
            p && M && T);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eL.Kb)(e, "GuildThemeNuxTrigger"),
            [l, a] = (0, en.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eh.m.GUILD_THEME_NUX),
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
        isNuxOpen: (0, _.useHasModalOpen)(eR.u),
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
                { modalKey: eR.u, onCloseCallback: () => i(eh.i.USER_DISMISS) },
            );
        }, []),
    });
    let e6 = (0, d.bG)([eZ.A], () => eZ.A.getChannelId()),
        e2 = (0, d.bG)([eQ.A], () => eQ.A.desyncedVoiceStatesCount),
        e4 = (0, eP.A)(f),
        e5 = (0, es.ai)(f) ? null : e4,
        e9 =
            (function (e) {
                let t = (0, eP.A)(e),
                    n = (0, ev.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, ej.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, ew.A)(e),
                    { available: l, isLoading: r } = (0, eB.A)(e);
                if (r) return !1;
                let a = l < ek.fe;
                return n && i && a && !s && !1 === t;
            })(f) && !(0, es.ai)(f);
    il.A.useConfig({ guildId: f, location: "guild_sidebar" });
    let e7 = (0, er.C$)(f, "GuildSidebar"),
        te = (0, d.bG)([X.A], () => X.A.getGuild(f)?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1, [f]),
        tt = e7 && !te && !1 === e5,
        tn = (0, eo.J)("GuildSidebar"),
        ti = (0, ea.S)(f, "GuildSidebar"),
        ts = e7 && !te && ti && !1 === e5,
        tl = (0, eH.A)(),
        tr = (0, eb.A)(f),
        ta = !1 === e5 && tl && null != tr,
        to = (0, ey.A)(f),
        td = !1 === e5 && tl && null != to,
        tu = [];
    ex && tu.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        ef && tu.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eX && tu.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e5 && tu.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e9 && tu.push(u.M.GUILD_THEME_MEMBER_COACHMARK),
        tt && tu.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ts && tu.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e8 && tu.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tc, tA] = (0, en.kn)(tu, eh.m.GUILD_HEADER_TOOLTIPS),
        [tE, th] = (0, eU.vB)(tn && e7 && !1 === e5 && !(0, es.ai)(f), eh.m.GUILD_HEADER_TOOLTIPS),
        [tg, t_] = (0, en.D8)(
            ta ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            f,
            { cooldownDurationMs: eD.bW, numTimesToRecur: 5 },
            eh.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tI, tN] = (0, en.D8)(
            td ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            f,
            { cooldownDurationMs: eD.mD },
            eh.m.GUILD_HEADER_TOOLTIPS,
        ),
        tm = r.useMemo(
            () =>
                null != tc
                    ? { contentType: tc, data: null, markAsDismissed: tA }
                    : tE === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: tE, data: null, markAsDismissed: th }
                      : tg === u.M.BOOST_TO_UNLOCK_COACHMARK && null != tr
                        ? { contentType: tg, data: { featuredPowerup: tr }, markAsDismissed: t_ }
                        : tI === u.M.EXPIRING_POWERUP_COACHMARK && null != to
                          ? { contentType: tI, data: { featuredExpiringPowerup: to }, markAsDismissed: tN }
                          : null,
            [tc, tE, tg, tI, tr, to, tA, th, t_, tN],
        );
    return (0, l.jsx)(iu, {
        guildId: f,
        hideSelectedChannel: x,
        guild: b,
        scrollToChannel: H,
        selectedChannelId: x ? null : G,
        selectedChannel: eY,
        selectedVoiceChannelId: j,
        voiceStates: y,
        rtcConnectedChannelId: e6,
        rtcDesyncedVoiceStatesCount: e2,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != eC || q,
        anyLayerOpen: eS || eT || ep,
        showGuildHeaderTutorial: eM,
        showGuildTemplateDirtyTooltip: eV,
        showNewUnreadsBar: eJ,
        isHeaderPopoutOpen: e$,
        enableStudyGroup: K,
        isGuildHeaderDismissibleTooltipShown: $,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: e3,
        shouldRenderBurstCoachmark: e1,
        guildHeaderContentDescriptor: tm,
        onFavoriteGuildContextMenu: D,
        hasFavoritesAccess: U,
    });
}
