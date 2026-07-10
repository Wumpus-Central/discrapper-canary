n.r(t), n.d(t, { default: () => iE }), n(321073);
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
    m = n(475743),
    C = n(793574),
    S = n(688810),
    T = n(285059),
    p = n(63995);
n(113783);
var M = n(518769),
    f = n(446600),
    O = n(624265);
n(616356);
var L = n(734057),
    R = n(576705),
    x = n(607567),
    G = n(988794);
let D = { hiddenEventsAndStages: [] };
class U extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (D = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && D.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && D.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return D;
    }
}
let b = new U(I.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? D.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && D.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        D.hiddenEventsAndStages.includes(n) &&
            (t.status === G.XG.CANCELED || t.status === G.XG.COMPLETED) &&
            (D.hiddenEventsAndStages = D.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        D.hiddenEventsAndStages.includes(n) &&
            (D.hiddenEventsAndStages = D.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        D.hiddenEventsAndStages.includes(n) &&
            (D.hiddenEventsAndStages = D.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var y = n(508654);
n(818348);
var P = n(600975),
    H = n(652215);
let v = (0, P.C)({
    kind: "guild",
    id: "2021-10_study_group",
    label: "Student hub study group",
    defaultConfig: { enableStudyGroup: !1 },
    treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
});
function j(e) {
    return (
        r.useEffect(() => {
            null != e &&
                e.features.has(H.GuildFeatures.HUB) &&
                v.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        v.useExperiment(
            { guildId: e?.id ?? H.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(H.GuildFeatures.HUB) },
        )
    );
}
var B = n(320426),
    w = n(915043),
    k = n(506774),
    X = n(498642),
    V = n(71393),
    F = n(124759);
let K = "publicUpsellChannelNoticeGuilds",
    W = new Set();
class Y extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(R.A, V.A, X.A), this.syncWith([R.A, V.A, X.A], H.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = X.A.getMemberCount(e.id);
        return (
            !W.has(e.id) &&
            null != t &&
            t >= F.dH &&
            R.A.can(H.xBc.ADMINISTRATOR, e) &&
            !e.features.has(H.GuildFeatures.COMMUNITY)
        );
    }
}
let z = new Y(I.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!W.has(t)) return W.add(t), k.w.set(K, W), !0;
    },
});
var Z = n(992250);
let Q = { MAX_MEMBER_COUNT: new Set() };
class q extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(R.A, V.A, X.A),
            this.syncWith([R.A, V.A, X.A], H.tEg),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_250),
            (Q[H.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(H.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = X.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(H.xBc.ADMINISTRATOR, e);
        return !Q[H.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let $ = new q(I.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!Q[H.n5X.MAX_MEMBER_COUNT].has(t))
            return Q[H.n5X.MAX_MEMBER_COUNT].add(t), k.w.set(H.n5X.MAX_MEMBER_COUNT, Q[H.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
var J =
    (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (i[(i.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
    (i[(i.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
    i);
function ee(e) {
    let t = e?.id ?? H.dJq,
        n = (0, d.bG)([z], () => z.isVisible(e)),
        i = (0, d.bG)([$], () => $.isVisible(e)),
        s = (function (e) {
            let t = (0, O.Ay)(e),
                n = L.A.getChannel(t[0]?.id),
                i = (0, d.bG)([f.A], () => f.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, y.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: r } = (0, d.cf)(
                    [b],
                    () => ({
                        isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !r;
            return null != i && !l;
        })(t),
        l = (0, d.bG)([Z.A], () => Z.A.isVisible(e)),
        a = B.A.useShouldShowChannelNotice(t),
        o = (0, w.$s)(e),
        { enableStudyGroup: u } = j(e),
        c = o.length > 0,
        A = u && !e?.features.has(H.GuildFeatures.HUB),
        E = (0, y.WG)(t);
    if (
        (r.useEffect(() => {
            T.A.getGuildEventsForCurrentUser(t);
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
var et = n(558845),
    en = n(826673),
    ei = n(131607),
    es = n(313281),
    el = n(5180),
    er = n(250719),
    ea = n(780645),
    eo = n(72152),
    ed = n(15073),
    eu = n(174459),
    ec = n(488926),
    eA = n(45780),
    eE = n(49999),
    eh = n(567305),
    eg = n(555325),
    e_ = n(469993),
    eI = n(260509),
    eN = n(287809),
    em = n(568185);
let eC = "hasSeenGuildTemplatePromotionTooltip",
    eS = {},
    eT = !0 === k.w.get(eC);
function ep(e) {
    let { guildId: t } = e;
    eS = { ...eS, [t]: !1 };
}
class eM extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eS[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eT;
    }
}
let ef = new eM(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eS = { ...eS, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        k.w.set(eC, !0), (eT = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eS = { ...eS, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: ep,
    GUILD_TEMPLATE_DELETE_SUCCESS: ep,
});
var eO = n(875317),
    eL = n(181880),
    eR = n(285406),
    ex = n(361158),
    eG = n(488803),
    eD = n(764322),
    eU = n(661881),
    eb = n(379229),
    ey = n(229548),
    eP = n(139032),
    eH = n(52260),
    ev = n(363487),
    ej = n(342220),
    eB = n(383272),
    ew = n(414133),
    ek = n(864310),
    eX = n(972829),
    eV = n(568065),
    eF = n(320989),
    eK = n(728321),
    eW = n(79858),
    eY = n(72314),
    ez = n(919638),
    eZ = n(808728),
    eQ = n(186111),
    eq = n(584569),
    e$ = n(763827),
    eJ = n(428262),
    e0 = n(885631),
    e1 = n(156867),
    e3 = n(83297),
    e2 = n(562708),
    e8 = n(702841),
    e6 = n(139286),
    e7 = n(468689),
    e4 = n(375708),
    e5 = n(330766);
function e9(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, e8.bG)([V.A, eN.default], () => {
            let e = eN.default.getCurrentUser(),
                n = V.A.getGuild(t);
            return null != n && (0, eI.bM)(n, e);
        });
    return (
        (0, e6.A)({
            type: e2.ImpressionTypes.POPOUT,
            name: e2.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e4.intl.string(e4.t.C0m4rQ),
            body: e4.intl.string(e4.t.zOHfEX),
            graphic: { type: "image", src: e5 },
            actions: [
                {
                    text: e4.intl.string(e4.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e7.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var te = n(338854);
function tt(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(te.H, {
        targetElementRef: i,
        title: e4.intl.string(e4.t.gCgirr),
        body: e4.intl.string(e4.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e4.intl.string(e4.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e7.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS, void 0, H.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var tn = n(834730),
    ti = n(821609),
    ts = n(383470);
function tl(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: ts.kL,
        children: [
            (0, l.jsx)("div", { className: ts.Wn }),
            (0, l.jsx)(tn.E, { variant: "text-sm/normal", className: ts.Qs, children: e4.intl.string(e4.t.rdzeVP) }),
            (0, l.jsx)(ti.$, {
                variant: "overlay-primary",
                text: e4.intl.string(e4.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var tr = n(696943);
function ta(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e4.intl.string(e4.t.Hgd22r),
        body: e4.intl.string(e4.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e4.intl.string(e4.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e7.A.open(t.id, H.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function to(e) {
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
let td = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (function () {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tr.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tr.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tr.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) => (0, l.jsx)(tr.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) => (0, l.jsx)(tr.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(to, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tr.Gw, {
                                type: eb.o.BOOST_TO_UNLOCK,
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
                    return (0, l.jsx)(to, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tr.Mr, {
                                type: eb.o.EXPIRING_PERK,
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
                    return (0, l.jsx)(to, {
                        renderPopout: (e) => (0, l.jsx)(e9, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) => (0, l.jsx)(ta, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(to, {
                        renderPopout: (0, l.jsx)(tl, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(to, {
                        renderPopout: (e) => (0, l.jsx)(tt, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tu = n(735438),
    tc = n.n(tu),
    tA = n(862482),
    tE = n(939249),
    th = n(789645),
    tg = n(534514),
    t_ = n(95561),
    tI = n(284245);
let tN = tc().debounce(t_.Ay.trackWithMetadata, 500),
    tm = function (e) {
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
            tN(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let _ = null;
        "function" == typeof h
            ? (_ = h())
            : null != h &&
              (_ = (0, l.jsx)(tA.$n, {
                  "data-migration-pending": !0,
                  className: tI.HM,
                  size: tA.$n.Sizes.SMALL,
                  onClick: () => {
                      null != a &&
                          eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
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
            className: tI.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tE.D, {
                          onClick: function () {
                              t_.Ay.trackWithMetadata(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: tI.VN,
                          "aria-label": e4.intl.string(e4.t.WAI6xu),
                          children: (0, l.jsx)(th.P, { size: "md", color: "currentColor", className: tI.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tI.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tI.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tI.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(tg.D, { variant: "heading-md/semibold", className: tI.DD, children: n })
                            : null,
                        (0, l.jsx)(tn.E, { variant: "text-sm/normal", children: i }),
                        _,
                    ],
                }),
            ],
        });
    };
var tC = n(975571);
function tS(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tm, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            open(tC.A.getArticleURL(H.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN);
        },
        title: e4.intl.string(e4.t.YMgaJt),
        message: e4.intl.string(e4.t["AV/9eW"]),
        cta: e4.intl.string(e4.t.hvVgAZ),
        trackingSource: H.kZU.LINKED_ROLES_ADMIN_NUX,
        type: H.n5X.LINKED_ROLES_ADMIN,
    });
}
var tT = n(158390),
    tp = n(636537),
    tM = n(927813);
let tf = null;
class tO extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tf;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tf?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tf?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tf) return [];
        let e = tf;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tL = new tO(I.h, {
        LOGOUT: function () {
            tf = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tf = t;
        },
    }),
    tR = [];
async function tx() {
    let { body: e } = await tp.Bo.get({ url: H.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tG = (0, d.UT)(tL, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tL.getMap(),
    load: () => tx(),
    staleAfter: tM.A.Seconds.DAY,
    retryConfig: { backoff: () => new tT.A(5 * tM.A.Millis.MINUTE), maxRetries: 10 },
});
function tD(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tG(t);
    return n?.[e] ?? tR;
}
let tU = (0, P.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tb = n(509434),
    ty = n(975807),
    tP = n(201438),
    tH = n(194362),
    tv = n(307301),
    tj = n(661531),
    tB = n(841352);
function tw(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tB.kL,
        children: [
            (0, l.jsx)("div", { className: tB.j3, children: (0, l.jsx)("img", { className: tB.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tB.gm,
                children: (0, l.jsx)("div", {
                    className: tB.WA,
                    children: (0, l.jsx)(tv.j, { size: "sm", color: tj.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tk = n(140461);
function tX(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tD(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tP.A)(i, e4.intl.string(e4.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(H.GuildFeatures.VERIFIED) ? e4.intl.string(e4.t.uUARXe) : e4.intl.string(e4.t["0Dx29f"]);
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: e4.intl.format(e4.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tk.m,
            children: [e4.intl.string(e4.t["2u6ZlY"]), (0, l.jsx)(tb.I, { size: "xs", color: "currentColor" })],
        }),
        type: H.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tw, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tH.a)(H.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ty.A)(e);
        },
    });
}
var tV = n(631305),
    tF = n(473145),
    tK = n(625633);
function tW(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tF.Os)(t, H.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: e4.intl.string(e4.t.oPAx73),
        message: e4.intl.format(e4.t.AcaNYw, { boostsNeeded: i }),
        type: H.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tV.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tK.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tY = n(63152);
class tz extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tY.K4)({ guildId: e.id, location: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tm, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e4.intl.string(e4.t.hlitVQ) : e4.intl.string(e4.t.XHtaDD),
            cta: e4.intl.string(e4.t["vqb+H1"]),
            trackingSource: H.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: H.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tZ = d.Ay.connectStores([X.A], (e) => {
    let { guild: t } = e;
    return { memberCount: X.A.getMemberCount(t.id) };
})(tz);
var tQ = n(503698),
    tq = n.n(tQ),
    t$ = n(933832),
    tJ = n(782603),
    t0 = n(81466),
    t1 = n(116085),
    t3 = n(597601),
    t2 = n(451394),
    t8 = n(104171),
    t6 = n(47167),
    t7 = n(713654),
    t4 = n(976860),
    t5 = n(790535),
    t9 = n(110618),
    ne = n(280450),
    nt = n(309010),
    nn = n(312006),
    ni = n(403362),
    ns = n(707592),
    nl = n(698441),
    nr = n(935159),
    na = n(11550),
    no = n(435328),
    nd = n(563312),
    nu = n(9448),
    nc = n(974930),
    nA = n(666394),
    nE = n(28164);
let nh = r.memo(function (e) {
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
        className: nE.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tq()(nE.fI, nE.pF),
                children: [
                    (0, l.jsx)("div", { className: nE.Ok }),
                    (0, l.jsx)(tn.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nE.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tE.D, {
                            onClick: o,
                            className: nE.ut,
                            "aria-label": e4.intl.string(e4.t.cpT0Cq),
                            children: (0, l.jsx)(th.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(tg.D, { color: "text-strong", variant: "heading-md/semibold", className: nE.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tq()(nE.fI, nE.pF),
                children: [
                    i,
                    (0, l.jsx)(tn.E, { color: "none", variant: "text-xs/normal", className: nE.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(tn.E, {
                                    className: nE.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(tn.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nE.zH,
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
function ng(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t6.Ay)(n),
        s = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t7.gU)(n);
    return (0, l.jsx)(nh, {
        onClickCloseIcon: () => (0, nr.iF)({ eventId: t?.id }),
        heading: e4.intl.string(e4.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nE.uE }) : null,
        children: (0, l.jsx)(np, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function n_(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nc.G3)(t),
        s = (0, d.bG)([nl.Ay], () => nl.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([na.A], () => na.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, nr.pE)(t.id),
        (0, l.jsx)(ti.$, {
            onClick: function () {
                (0, nA.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nr.Lx)(t.id), 1e3)),
                    eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e4.intl.string(e4.t.DlcqlU),
            icon: s ? t$.A : tJ.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nI(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nu.oF)(t),
        s = null != i ? (0, no.l)(i, !0) : null,
        a = (0, nu.WN)(t),
        o = (0, t6.Ay)(a),
        d = (0, t7.gU)(a),
        { startTime: u, endTime: c } = (0, nd.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nc.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e4.intl.formatToPlainString(e4.t.PQlCWk, { minutes: h })
                : e4.intl.string(e4.t.WINqKV)
            : e4.intl.formatToPlainString(e4.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            eu.default.track(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nE.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nE.fI,
                    children: [
                        (0, l.jsx)(tE.D, {
                            onClick: () => (0, ns.uR)({ eventId: t.id }),
                            className: nE.oP,
                            children: (0, l.jsx)(tn.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nE.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tE.D, {
                            onClick: () => {
                                eu.default.track(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, nr.Lx)(t.id);
                            },
                            className: nE.ut,
                            "aria-label": e4.intl.string(e4.t.cpT0Cq),
                            children: (0, l.jsx)(th.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tq()(nE.fI, nE.pF),
                    children: [
                        (0, l.jsx)(t0.C, {
                            size: "custom",
                            color: "currentColor",
                            className: nE.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(tn.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nE.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tq()(nE.fI, nE.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nE.uE })
                            : (0, l.jsx)(t1.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nE.uE,
                              }),
                        (0, l.jsx)(tn.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nE.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(n_, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nN(e) {
    let { guildEvent: t } = e,
        n = (0, nu.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nh, {
              onClickCloseIcon: () => (0, nr.iF)({ eventId: t?.id }),
              heading: e4.intl.string(e4.t["1+boPi"]),
              topic: t.name,
              location: (0, no.l)(n, !0),
              locationIcon: (0, l.jsx)(t1.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nE.uE,
              }),
              children: (0, l.jsx)(nm, { guildEvent: t }),
          });
}
function nm(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, ns.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nE.PD,
        children: (0, l.jsx)(ti.$, {
            variant: "active",
            size: "sm",
            text: e4.intl.string(e4.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nC(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nE.PD,
        children: (0, l.jsx)(ti.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t5.av)(t), (0, t4.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nS(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t6.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        a = e4.intl.formatToPlainString(e4.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(nh, {
        onClickCloseIcon: () => (0, nr.iF)({ stageId: t?.id }),
        heading: e4.intl.string(e4.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(t3.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nE.uE,
        }),
        locationIcon: (0, l.jsx)(t2.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nE.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(np, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nT = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function np(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(H.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([ne.default, nt.A, nn.Ay], () => {
                let e = ne.default.getId();
                return nt.A.getVoiceChannelId() === t ? nn.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e4.intl.string(e4.t.VJlc0S);
    switch (s) {
        case 1:
            A = e4.intl.string(e4.t.VJlc0S);
            break;
        case 2:
            (A = e4.intl.string(e4.t.ZYO5OK)),
                c?.speaker ? (A = e4.intl.string(e4.t["/cnSFc"])) : null != c && (A = e4.intl.string(e4.t.btSGOj));
            break;
        case 3:
            A = e4.intl.string(e4.t.wBoE6L);
            break;
        default:
            (0, ni.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tq()(nE.fI, nE.pF),
                            children: [
                                (0, l.jsx)(t8.Ay, { guildId: a, users: o, showUserPopout: !0, size: t8.DN.SIZE_16 }),
                                (0, l.jsx)(tn.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nE.c8,
                                    children: (0, t9.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nC, { channel: n, label: A }),
              ],
          });
}
let nM = r.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, y.r2)(t)), (i = (0, O.Ay)(t)), (s = L.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, y.BP)(r.id),
        u = (0, y.WG)(r.id),
        c = (0, d.bG)([f.A], () => f.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, d.cf)(
            [b],
            () => ({
                isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        h = null,
        g = null != c && null != a && !A;
    null == o || E
        ? g && (h = (0, l.jsx)(nS, { stageInstance: c, channel: a }))
        : o.entity_type === G.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nS, { stageInstance: c, channel: a }))
          : o.entity_type === G.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nN, { guildEvent: o }))
            : o.entity_type === G.Ps.VOICE && null != a && (h = (0, l.jsx)(ng, { guildEvent: o, channel: a }));
    let _ = r.features.has(H.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !_) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nI, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nf(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
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
        message: e4.intl.string(e4.t["1+hiP6"]),
        cta: e4.intl.string(e4.t.hvVgAZ),
        trackingSource: H.kZU.HUB_LINK_NOTICE,
        type: H.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nO = n(717421),
    nL = n(450510);
let nR = function (e) {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tm, {
        guild: n,
        onDismissed: function () {
            (0, nL.sF)(nL._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: function () {
            (0, nL.sF)(nL._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t5.av)(t), (0, t4.uh)(t.getGuildId(), t.id));
        },
        title: e4.intl.string(e4.t["4Y2AS7"]),
        message: e4.intl.string(e4.t.wTsxTS),
        cta: e4.intl.string(e4.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: H.n5X.HUB_STUDY_ROOM,
    });
};
var nx = n(994190);
let nG = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t7.gU)(n);
    return (0, l.jsx)(nh, {
        heading: e4.intl.string(e4.t["X2K3/4"]),
        topic: t,
        location: e4.intl.string(e4.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nx.K }) : null,
        children: (0, l.jsx)(np, { channel: n, speakers: i, voiceType: nT.STUDY_ROOM }),
    });
};
var nD = n(48686);
function nU(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nL.HP], () => nL.HP.hasHotspot(nL._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nD.Q)(t.guild_id),
        r = (0, t6.Ay)(t),
        o = (0, nO.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nR, { channel: t, guild: n })
            : (0, l.jsx)(nG, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nb = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eZ.Ay], () => eZ.Ay.getChannels(t.id)[eZ.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(H.xBc.CONNECT, n.channel));
    return t.features.has(H.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nU, { channel: n.channel, guild: t })
        : null;
};
function ny(e) {
    let { guild: t } = e;
    function n() {
        return B.A.dismissNotice(t.id);
    }
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: n,
        cta: e4.intl.string(e4.t.RzWDqY),
        message: e4.intl.format(e4.t["kQ/MDl"], {}),
        type: H.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e7.A.open(t.id, H.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nP = n(587895),
    nH = n(143582);
function nv(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n);
    function s() {
        return (0, nH.Hc)(n.id);
    }
    let a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nP.A], () => {
            let e = [];
            for (let t of a) {
                let n = nP.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? e4.intl.formatToPlainString(e4.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e4.intl.formatToPlainString(e4.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e4.intl.formatToPlainString(e4.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e4.intl.string(e4.t.MvfowF)),
          (0, l.jsx)(tm, {
              guild: n,
              onDismissed: s,
              message: t,
              type: H.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e7.A.open(n.id, H.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e4.intl.string(e4.t.Rr3MAe),
          }));
}
var nj = n(628287);
let nB = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: n,
        onClick: () => e7.A.open(t.id, H.BEX.COMMUNITY),
        message: e4.intl.string(e4.t["2klD0Z"]),
        trackingSource: H.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: H.n5X.PUBLIC_UPSELL,
        image: nj,
        cta: e4.intl.string(e4.t.hvVgAZ),
    });
};
var nw = n(536194),
    nk = n(780964),
    nX = n(766075);
class nV extends r.PureComponent {
    render() {
        return (0, l.jsx)(tm, {
            guild: this.props.guild,
            onClick: () => (0, nX.openUserSettings)(nk.X.ACCOUNT_PANEL),
            message: e4.intl.format(e4.t["oCd+at"], {}),
            cta: e4.intl.string(e4.t["8dCrV9"]),
            trackingSource: H.kZU.GUILD_MFA_WARNING,
            type: H.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nF = n(493336);
class nK extends r.PureComponent {
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
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: H.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = nt.A.getChannelId(),
            t = e4.intl.formatToPlainString(e4.t.DEn7nu, { invitePeople: e4.intl.string(e4.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nF.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e4.intl.string(e4.t.VWqWZQ)}
${e4.intl.string(e4.t["0Lgb/K"])}`;
        return (0, l.jsx)(tm, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e4.intl.string(e4.t.Sd8Ixw),
            trackingSource: H.kZU.INVITE_NOTICE,
            type: H.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nW = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tm, {
        guild: t,
        onDismissed: n,
        message: e4.intl.format(e4.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tC.A.getArticleURL(H.MVz.MAX_MEMBERS),
        }),
        type: H.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nY = n(475358),
    nz = n(675704),
    nZ = n(793322);
let nQ = function (e) {
    let t = (0, l.jsx)(nY.e, { shortcut: nz.R.binds["0"], keyClassName: tI.Eb });
    return (0, l.jsx)(tm, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nZ.WU)("CHANNEL_NOTICE"),
        message: e4.intl.string(e4.t.Qhk8cs),
        cta: t,
        trackingSource: H.kZU.QUICK_SWITCHER_NOTICE,
        type: H.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nq = n(174768);
class n$ extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(V.A), this.syncWith([V.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(H.GuildFeatures.BANNER) && Date.now() - t >= H.D2K;
    }
}
let nJ = new n$(I.h);
class n0 extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.MANAGE_GUILD, e);
    }
}
let n1 = new n0(I.h);
var n3 = n(731667);
function n2() {
    return !0;
}
class n8 extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], n2);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.ADMINISTRATOR, e);
    }
}
let n6 = new n8(I.h),
    n7 = "lastHiddenChannelNotice",
    n4 = [
        { type: H.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: H.n5X.GUILD_BOOSTING,
            store: n1,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: H.n5X.GUILD_BANNER, store: nJ, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: H.n5X.INVITE, store: n6, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: H.n5X.HUB_LINK, store: n3.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: H.n5X.QUICKSWITCHER, store: nq.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: H.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: H.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n5 = n4.map((e) => e.store).filter(ni.Vq),
    n9 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function ie(e) {
    e.stopPropagation();
}
let it = [];
function ii(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(k.w.get(n7) ?? 0),
        g =
            ((n = t = A.id),
            (i = tU.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([R.A], () => R.A.canWithPartialContext(H.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tD(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : it;
            }, [c])),
        [_, I] = (0, ei.ww)(g, A.id, eE.m.CHANNEL_NOTICES, !0),
        N = null != _,
        m = (0, d.yK)(
            n5,
            () =>
                N
                    ? []
                    : n4
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n9.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, ei.kn)(m, eE.m.CHANNEL_NOTICES),
        T = _ ?? C,
        p = null != _ ? I : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n7, e), h(e), p(eE.i.UNKNOWN);
        }, [p]),
        f = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nf, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nK, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tZ, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nQ, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tW, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tS, { guild: A, markAsDismissed: () => p(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tX, { guild: A, markAsDismissed: p });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, l.jsx)("div", { onContextMenu: ie, children: f });
}
let is = function (e) {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nB, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nW, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nM, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nV, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(ny, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nv, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nb, { guild: t });
    }
    return nw.P.isDisallowPopupsSet() ? null : (0, l.jsx)(ii, { guild: e.guild });
};
var il = n(532233);
function ir(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: il.k, ref: i, children: (0, l.jsx)(is, { guild: t }) })
    );
}
var ia = n(66933),
    io = n(846930),
    id = n(153822);
let iu = "server-settings",
    ic = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class iA extends r.PureComponent {
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
            (this.historyUnlisten = eF.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eF.A.getHistory();
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
        e.stopPropagation(), (0, eo.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, el.ai)(t.id)) {
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
            if ((0, el.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
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
                    n.e("78279"),
                    n.e("78220"),
                    n.e("11262"),
                    n.e("16227"),
                    n.e("37520"),
                    n.e("12410"),
                    n.e("38759"),
                    n.e("37634"),
                    n.e("812"),
                    n.e("89209"),
                    n.e("86832"),
                    n.e("76342"),
                    n.e("60988"),
                    n.e("69273"),
                    n.e("72210"),
                    n.e("3155"),
                    n.e("82104"),
                    n.e("41711"),
                    n.e("49623"),
                    n.e("35316"),
                    n.e("38838"),
                    n.e("45214"),
                    n.e("99253"),
                    n.e("17202"),
                    n.e("90862"),
                    n.e("97189"),
                    n.e("16918"),
                    n.e("33730"),
                    n.e("24059"),
                    n.e("42306"),
                    n.e("11291"),
                    n.e("96846"),
                    n.e("19709"),
                    n.e("4251"),
                    n.e("47412"),
                    n.e("65327"),
                    n.e("96490"),
                    n.e("85484"),
                    n.e("51772"),
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
                    n.e("90072"),
                    n.e("88016"),
                    n.e("84133"),
                    n.e("13627"),
                    n.e("57940"),
                    n.e("58171"),
                    n.e("44511"),
                    n.e("39375"),
                    n.e("47944"),
                    n.e("84473"),
                    n.e("70990"),
                    n.e("15130"),
                    n.e("74051"),
                    n.e("50541"),
                    n.e("32697"),
                    n.e("64622"),
                    n.e("47728"),
                    n.e("31270"),
                    n.e("6514"),
                    n.e("8641"),
                    n.e("6247"),
                    n.e("70298"),
                    n.e("82041"),
                    n.e("97238"),
                    n.e("30541"),
                    n.e("74187"),
                    n.e("62279"),
                    n.e("67454"),
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
                    n.e("71505"),
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
                    n.e("39680"),
                    n.e("21194"),
                    n.e("99272"),
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
                    n.e("18078"),
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
                    n.e("37870"),
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
                    n.e("23924"),
                    n.e("42205"),
                    n.e("55675"),
                    n.e("25845"),
                    n.e("19402"),
                    n.e("49681"),
                    n.e("22687"),
                    n.e("96382"),
                    n.e("62052"),
                    n.e("63202"),
                    n.e("82596"),
                    n.e("10471"),
                    n.e("64827"),
                    n.e("63232"),
                    n.e("68261"),
                    n.e("7167"),
                    n.e("11301"),
                    n.e("12721"),
                    n.e("84569"),
                    n.e("60235"),
                    n.e("61737"),
                    n.e("92789"),
                    n.e("21335"),
                    n.e("77333"),
                    n.e("47834"),
                    n.e("11735"),
                    n.e("85927"),
                    n.e("834"),
                    n.e("2368"),
                    n.e("33115"),
                    n.e("6338"),
                    n.e("18573"),
                    n.e("78157"),
                    n.e("55936"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("1453"),
                    n.e("88774"),
                    n.e("10120"),
                    n.e("62175"),
                    n.e("31988"),
                    n.e("34303"),
                    n.e("97270"),
                    n.e("45959"),
                    n.e("73122"),
                    n.e("8304"),
                    n.e("93159"),
                    n.e("71202"),
                    n.e("8739"),
                    n.e("42834"),
                    n.e("88131"),
                    n.e("43430"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("58529"),
                    n.e("58038"),
                    n.e("62531"),
                    n.e("22103"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("81647"),
                    n.e("11310"),
                    n.e("76602"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("36877"),
                    n.e("52511"),
                    n.e("40402"),
                    n.e("7575"),
                    n.e("53930"),
                    n.e("42724"),
                    n.e("93766"),
                    n.e("13823"),
                    n.e("24303"),
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
                    n.e("54638"),
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
                    n.e("47958"),
                    n.e("65437"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("45413"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("90757"),
                    n.e("86672"),
                    n.e("94427"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("95152"),
                    n.e("71477"),
                    n.e("73401"),
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
                    n.e("81314"),
                    n.e("91913"),
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
                    n.e("89916"),
                    n.e("1812"),
                    n.e("60773"),
                    n.e("92128"),
                    n.e("9004"),
                    n.e("18113"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("49145"),
                    n.e("41807"),
                    n.e("68763"),
                    n.e("79548"),
                    n.e("99549"),
                    n.e("58273"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("59957"),
                    n.e("48382"),
                    n.e("30997"),
                    n.e("29666"),
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
                    n.e("77602"),
                    n.e("10262"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("41786"),
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
                    n.e("71167"),
                    n.e("12390"),
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
        let e = (0, en.k8)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(H.GuildFeatures.HUB);
        !e && t && (0, en.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eE.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && em.A.hideGuildTemplateDirtyTooltip(e.id);
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
            : (0, l.jsx)(td, {
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
                      tutorialId: iu,
                      position: "bottom",
                      inlineSpecs: ic,
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
                                title: e4.intl.string(e4.t.Rk2RJk),
                                body: e4.intl.string(e4.t.sFSrFH),
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
                                title: e4.intl.string(e4.t.Q3qa4x),
                                body: e4.intl.string(e4.t.UyHD4O),
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
            : (0, l.jsx)(S.f5, {
                  value: a,
                  children: (0, l.jsx)(g.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: g.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, eo.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: s, ...r } = i;
                          return (0, l.jsx)(e3.Ay, {
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
            i = null != t && (0, e0.A)(t);
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
            return (0, l.jsx)(io.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(H.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: id.r0,
                    children: (0, l.jsx)(eR.A, { guild: t, channel: n ?? eZ.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, el.ai)(t.id) ? e1.T : e1.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, e0.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, el.YC)(e);
        return (0, l.jsxs)("nav", {
            className: id.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e4.intl.formatToPlainString(e4.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(ir, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function iE(e) {
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
        T,
        p,
        M,
        f,
        { guildId: O, hideSelectedChannel: x, selectedChannelId: G } = e,
        D = (0, ea.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([V.A], () => V.A.getGuild(O)),
        y = (0, er.A)(O),
        P = (0, d.bG)([eY.A], () => eY.A.getGuildDimensions(O).scrollTo),
        v = (0, d.bG)([e$.A], () => e$.A.getChannelId()),
        B = (0, d.bG)([R.A], () => R.A.can(H.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([ez.A], () => ez.A.isUnavailable(O)),
        k = (0, d.bG)([eN.default], () => eN.default.getCurrentUser()),
        { enableStudyGroup: X } = j(b),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!K),
        z = (0, m.A)(O),
        { analyticsLocations: Z } = (0, S.Ay)(C.A.GUILD_HEADER);
    r.useEffect(() => {
        O !== z && Y(!K);
    }, [O, z, K]);
    let [Q, q] = (0, et.Ay)(
            (e) => [
                n4.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        $ = ee(b),
        J = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        em = (0, d.bG)([eQ.A], () => eQ.A.hasLayers()),
        eC = (0, ex.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([eW.A], () => eW.A.shouldShow(iu)),
        eT =
            ((t = (0, d.bG)([V.A], () => V.A.getGuild(O))),
            (i = (0, d.bG)([eN.default], () => eN.default.getCurrentUser())),
            (s = null != t && (0, eI.bM)(t, i)),
            (a = (0, e_.oS)()),
            s &&
                (t?.features.has(H.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ep = b?.features.has(H.GuildFeatures.HUB) === !0,
        eM = B && b?.features.has(H.GuildFeatures.DISCOVERABLE) === !0,
        eR = (0, d.bG)(
            [ef, eQ.A],
            () => null != b && null != k && B && !eQ.A.hasLayers() && ef.shouldShowGuildTemplateDirtyTooltip(O),
        ),
        eF = (0, d.bG)([L.A], () => L.A.getChannel(G)),
        { isPopoutOpen: eK } = (0, eo.S)(),
        eZ = b?.features.has(H.GuildFeatures.COMMUNITY) ?? !1,
        e0 = eJ.Ay.isNewUser(k),
        e1 = W && !e0;
    (c = (0, ed.TZ)(b)),
        (A = F.dR.some((e) => !(0, el.ai)(b?.id) && ec.Ib(e, b))),
        (E = b?.defaultMessageNotifications === H.orn.ALL_MESSAGES),
        (h = (0, eA.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq)),
        (g = c && (A || E) && !h),
        (I = r.useCallback(() => {
            (0, eA._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq, !0, eE.i.DISMISS);
        }, [b])),
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
                                guild: b,
                                canEveryoneModerate: A,
                                isDefaultNotificationsAllMessages: E,
                                ...t,
                            });
                    },
                    { onCloseCallback: I },
                ),
                eu.default.track(H.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? H.dJq,
                }),
                (N.current = !0));
        }, [A, b, I, E, g]);
    let e3 = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e2 =
            ((T = (0, d.bG)([V.A], () => V.A.getGuild(O))),
            (p = (0, eh._Y)(O)),
            (M =
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (f = (0, eg.X9)(T)),
            M && f && p);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eO.Kb)(e, "GuildThemeNuxTrigger"),
            [l, a] = (0, ei.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eE.m.GUILD_THEME_NUX),
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
    })(O, {
        isNuxOpen: (0, _.useHasModalOpen)(eL.u),
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
                { modalKey: eL.u, onCloseCallback: () => i(eE.i.USER_DISMISS) },
            );
        }, []),
    });
    let e8 = (0, d.bG)([e$.A], () => e$.A.getChannelId()),
        e6 = (0, d.bG)([eq.A], () => eq.A.desyncedVoiceStatesCount),
        e7 = (0, ev.A)(O),
        e4 = (function (e) {
            let t = (0, ev.A)(e),
                n = (0, eB.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                i = (0, ew.OS)("useShouldShowGuildThemeMemberCoachmark"),
                s = (0, eX.A)(e),
                { available: l, isLoading: r } = (0, ek.A)(e);
            if (r) return !1;
            let a = l < eV.fe;
            return n && i && a && !s && !1 === t;
        })(O);
    ia.A.useConfig({ guildId: O, location: "guild_sidebar" });
    let e5 = (0, eG.C$)(O, "GuildSidebar"),
        e9 = (0, d.bG)([V.A], () => V.A.getGuild(O)?.features.has(H.GuildFeatures.GAME_SERVERS) ?? !1, [O]),
        te = e5 && !e9 && !1 === e7,
        tt = (0, eU.J)("GuildSidebar"),
        tn = (0, eD.S)(O, "GuildSidebar"),
        ti = e5 && !e9 && tn && !1 === e7,
        ts = (0, ej.A)(),
        tl = (0, eP.A)(O),
        tr = !1 === e7 && ts && null != tl,
        ta = (0, eH.A)(O),
        to = !1 === e7 && ts && null != ta,
        td = [];
    ep && td.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eT && td.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eM && td.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e7 && td.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e4 && td.push(u.M.GUILD_THEME_MEMBER_COACHMARK),
        te && td.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ti && td.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e2 && td.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tu, tc] = (0, ei.kn)(td, eE.m.GUILD_HEADER_TOOLTIPS),
        [tA, tE] = (0, ey.vB)(tt && e5 && !1 === e7 && !(0, el.ai)(O), eE.m.GUILD_HEADER_TOOLTIPS),
        [th, tg] = (0, ei.D8)(
            tr ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            O,
            { cooldownDurationMs: eb.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [t_, tI] = (0, ei.D8)(
            to ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            O,
            { cooldownDurationMs: eb.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
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
    return (0, l.jsx)(iA, {
        guildId: O,
        hideSelectedChannel: x,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: x ? null : G,
        selectedChannel: eF,
        selectedVoiceChannelId: v,
        voiceStates: y,
        rtcConnectedChannelId: e8,
        rtcDesyncedVoiceStatesCount: e6,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != $ || Q,
        anyLayerOpen: J || em || eC,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eR,
        showNewUnreadsBar: eZ,
        isHeaderPopoutOpen: eK,
        enableStudyGroup: X,
        isGuildHeaderDismissibleTooltipShown: q,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: e3,
        shouldRenderBurstCoachmark: e1,
        guildHeaderContentDescriptor: tN,
        onFavoriteGuildContextMenu: D,
        hasFavoritesAccess: U,
    });
}
