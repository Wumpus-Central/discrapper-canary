n.r(t), n.d(t, { default: () => ia }), n(321073);
var i,
    s,
    r = n(627968),
    l = n(64700),
    a = n(419354),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    _ = n(43105),
    h = n(900797),
    E = n(847374),
    g = n(922016),
    A = n(192308),
    p = n(228366),
    I = n(442433),
    N = n(475743),
    m = n(793574),
    C = n(688810),
    f = n(285059),
    T = n(63995);
n(113783);
var S = n(69407),
    M = n(446600),
    O = n(624265);
n(616356);
var x = n(734057),
    R = n(576705),
    L = n(607567),
    b = n(988794);
let v = { hiddenEventsAndStages: [] };
class D extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (v = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && v.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && v.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return v;
    }
}
let G = new D(p.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? v.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && v.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        v.hiddenEventsAndStages.includes(n) &&
            (t.status === b.XG.CANCELED || t.status === b.XG.COMPLETED) &&
            (v.hiddenEventsAndStages = v.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        v.hiddenEventsAndStages.includes(n) &&
            (v.hiddenEventsAndStages = v.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        v.hiddenEventsAndStages.includes(n) &&
            (v.hiddenEventsAndStages = v.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var U = n(508654);
n(818348);
var y = n(600975),
    P = n(652215);
let H = (0, y.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    w = (e) => (
        l.useEffect(() => {
            null != e &&
                e.features.has(P.GuildFeatures.HUB) &&
                H.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        H.useExperiment(
            { guildId: e?.id ?? P.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(P.GuildFeatures.HUB) },
        )
    );
var B = n(320426),
    j = n(169820),
    k = n(506774),
    V = n(498642),
    F = n(71393),
    X = n(124759);
let K = "publicUpsellChannelNoticeGuilds",
    W = new Set();
class Y extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(R.A, F.A, V.A), this.syncWith([R.A, F.A, V.A], P.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = V.A.getMemberCount(e.id);
        return (
            !W.has(e.id) &&
            null != t &&
            t >= X.dH &&
            R.A.can(P.xBc.ADMINISTRATOR, e) &&
            !e.features.has(P.GuildFeatures.COMMUNITY)
        );
    }
}
let z = new Y(p.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!W.has(t)) return W.add(t), k.w.set(K, W), !0;
    },
});
var Z = n(992250);
let q = { MAX_MEMBER_COUNT: new Set() };
class Q extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(R.A, F.A, V.A),
            this.syncWith([R.A, F.A, V.A], P.tEg),
            k.w.remove(P.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(P.n5X.MAX_MEMBER_COUNT_250),
            (q[P.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(P.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = V.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(P.xBc.ADMINISTRATOR, e);
        return !q[P.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let $ = new Q(p.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!q[P.n5X.MAX_MEMBER_COUNT].has(t))
            return q[P.n5X.MAX_MEMBER_COUNT].add(t), k.w.set(P.n5X.MAX_MEMBER_COUNT, q[P.n5X.MAX_MEMBER_COUNT]), !0;
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
    let t = e?.id ?? P.dJq,
        n = (0, d.bG)([z], () => z.isVisible(e)),
        i = (0, d.bG)([$], () => $.isVisible(e)),
        s = (function (e) {
            let t = (0, O.Ay)(e),
                n = x.A.getChannel(t[0]?.id),
                i = (0, d.bG)([M.A], () => M.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, U.BP)(e),
                { isStageNoticeHidden: r, isEventNoticeHidden: l } = (0, d.cf)(
                    [G],
                    () => ({
                        isStageNoticeHidden: G.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: G.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !r;
                else return !l;
            return null != i && !r;
        })(t),
        r = (0, d.bG)([Z.A], () => Z.A.isVisible(e)),
        a = B.A.useShouldShowChannelNotice(t),
        o = (0, j.$s)(e),
        { enableStudyGroup: u } = w(e),
        c = o.length > 0,
        _ = u && !e?.features.has(P.GuildFeatures.HUB),
        h = (0, U.WG)(t);
    if (
        (l.useEffect(() => {
            f.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != h) return 2;
    if (r) return 3;
    if (a) return 4;
    else if (c) return 5;
    else if (_) return 6;
    return null;
}
var et = n(771781),
    en = n(826673),
    ei = n(932001),
    es = n(313281),
    er = n(5180),
    el = n(250719),
    ea = n(780645),
    eo = n(72152),
    ed = n(15073),
    eu = n(954571),
    ec = n(488926),
    e_ = n(45780),
    eh = n(49999),
    eE = n(567305),
    eg = n(555325),
    eA = n(469993),
    ep = n(260509),
    eI = n(287809),
    eN = n(568185);
let em = "hasSeenGuildTemplatePromotionTooltip",
    eC = {},
    ef = !0 === k.w.get(em);
function eT(e) {
    let { guildId: t } = e;
    eC = { ...eC, [t]: !1 };
}
class eS extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eC[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !ef;
    }
}
let eM = new eS(p.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eC = { ...eC, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        k.w.set(em, !0), (ef = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eC = { ...eC, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eT,
    GUILD_TEMPLATE_DELETE_SUCCESS: eT,
});
var eO = n(285406),
    ex = n(361158),
    eR = n(488803),
    eL = n(764322),
    eb = n(969983),
    ev = n(379229),
    eD = n(139032),
    eG = n(52260),
    eU = n(363487),
    ey = n(342220),
    eP = n(320989),
    eH = n(728321),
    ew = n(79858),
    eB = n(72314),
    ej = n(919638),
    ek = n(808728),
    eV = n(186111),
    eF = n(584569),
    eX = n(763827),
    eK = n(927578),
    eW = n(885631),
    eY = n(849380),
    ez = n(420344),
    eZ = n(110259),
    eq = n(702841),
    eQ = n(139286),
    e$ = n(997509),
    eJ = n(985018),
    e0 = n(330766);
function e1(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, eq.bG)([F.A, eI.default], () => {
            let e = eI.default.getCurrentUser(),
                n = F.A.getGuild(t);
            return null != n && (0, ep.bM)(n, e);
        });
    return (
        (0, eQ.A)({
            type: eZ.ImpressionTypes.POPOUT,
            name: eZ.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, r.jsx)(_.A, {
            targetElementRef: i,
            title: eJ.intl.string(eJ.t.C0m4rQ),
            body: eJ.intl.string(eJ.t.zOHfEX),
            graphic: { type: "image", src: e0 },
            actions: [
                {
                    text: eJ.intl.string(eJ.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        e$.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eh.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e3 = n(338854);
function e2(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, r.jsx)(e3.H, {
        targetElementRef: i,
        title: eJ.intl.string(eJ.t.gCgirr),
        body: eJ.intl.string(eJ.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: eJ.intl.string(eJ.t.BQq86h),
            variant: "primary",
            onClick: () => {
                e$.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS, void 0, P.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eh.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var e8 = n(834730),
    e5 = n(821609),
    e9 = n(383470);
function e6(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: e9.kL,
        children: [
            (0, r.jsx)("div", { className: e9.Wn }),
            (0, r.jsx)(e8.E, { variant: "text-sm/normal", className: e9.Qs, children: eJ.intl.string(eJ.t.rdzeVP) }),
            (0, r.jsx)(e5.$, {
                variant: "overlay-primary",
                text: eJ.intl.string(eJ.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(eh.i.AUTO);
                },
            }),
        ],
    });
}
var e7 = n(166978);
function e4(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, r.jsx)(_.A, {
        targetElementRef: i,
        title: eJ.intl.string(eJ.t.Hgd22r),
        body: eJ.intl.string(eJ.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: eJ.intl.string(eJ.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    e$.A.open(t.id, P.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eh.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function te(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = l.useRef(null);
    return (0, r.jsx)(g.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, r.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(i) : t }),
        position: "bottom",
        align: "center",
        animation: g.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, r.jsx)("div", { ref: i, children: n() }),
    });
}
let tt = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: l, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, r.jsx)(r.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) =>
                            (0, r.jsx)(e7.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) =>
                            (0, r.jsx)(e7.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) =>
                            (0, r.jsx)(e7.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) => (0, r.jsx)(e7.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = l?.featuredPowerup;
                    if (null == e) return i();
                    return (0, r.jsx)(te, {
                        renderPopout: (t) =>
                            (0, r.jsx)(e7.Gw, {
                                type: ev.o.BOOST_TO_UNLOCK,
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
                    let e = l?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, r.jsx)(te, {
                        renderPopout: (t) =>
                            (0, r.jsx)(e7.Mr, {
                                type: ev.o.EXPIRING_PERK,
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
                    return (0, r.jsx)(te, {
                        renderPopout: (e) => (0, r.jsx)(e1, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) => (0, r.jsx)(e4, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, r.jsx)(te, {
                        renderPopout: (0, r.jsx)(e6, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, r.jsx)(te, {
                        renderPopout: (e) => (0, r.jsx)(e2, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tn = n(735438),
    ti = n.n(tn),
    ts = n(862482),
    tr = n(939249),
    tl = n(789645),
    ta = n(534514),
    to = n(58149),
    td = n(284245);
let tu = ti().debounce(to.Ay.trackWithMetadata, 500),
    tc = (e) => {
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
            onDismissed: _,
            onClick: h,
            cta: E,
            ctaColor: g,
        } = e;
        l.useEffect(() => {
            tu(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let A = null;
        "function" == typeof E
            ? (A = E())
            : null != E &&
              (A = (0, r.jsx)(ts.$n, {
                  "data-migration-pending": !0,
                  className: td.HM,
                  size: ts.$n.Sizes.SMALL,
                  onClick: () => {
                      null != a &&
                          eu.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          h?.();
                  },
                  fullWidth: !0,
                  color: g,
                  children: E,
              }));
        let p = null != o ? `${o}px` : "16px";
        return (0, r.jsxs)("div", {
            className: td.kX,
            children: [
                !0 === c
                    ? null
                    : (0, r.jsx)(tr.D, {
                          onClick: () => {
                              to.Ay.trackWithMetadata(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), _?.();
                          },
                          className: td.VN,
                          "aria-label": eJ.intl.string(eJ.t.WAI6xu),
                          children: (0, r.jsx)(tl.P, { size: "md", color: "currentColor", className: td.ut }),
                      }),
                null != s &&
                    (0, r.jsx)("div", {
                        className: td.ZS,
                        style: { marginTop: `${d}px`, marginLeft: p, marginRight: p },
                        children: "string" == typeof s ? (0, r.jsx)("img", { className: td.Sl, src: s, alt: "" }) : s,
                    }),
                (0, r.jsxs)("div", {
                    className: td.iU,
                    children: [
                        null != n
                            ? (0, r.jsx)(ta.D, { variant: "heading-md/semibold", className: td.DD, children: n })
                            : null,
                        (0, r.jsx)(e8.E, { variant: "text-sm/normal", children: i }),
                        A,
                    ],
                }),
            ],
        });
    };
var t_ = n(975571);
function th(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(tc, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eh.i.UNKNOWN),
        onClick: () => {
            open(t_.A.getArticleURL(P.MVz.CONNECTION_DETAILS)), n(eh.i.UNKNOWN);
        },
        title: eJ.intl.string(eJ.t.YMgaJt),
        message: eJ.intl.string(eJ.t["AV/9eW"]),
        cta: eJ.intl.string(eJ.t.hvVgAZ),
        trackingSource: P.kZU.LINKED_ROLES_ADMIN_NUX,
        type: P.n5X.LINKED_ROLES_ADMIN,
    });
}
var tE = n(927813),
    tg = n(636537);
let tA = {
        fetch() {
            p.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
                tg.Bo.get({ url: P.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let { body: t } = e;
                        p.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: t });
                    },
                    () => {
                        p.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_FAIL" });
                    },
                );
        },
    },
    tp = tE.A.Millis.DAY,
    tI = 5 * tE.A.Millis.MINUTE,
    tN = {},
    tm = !1,
    tC = null,
    tf = null;
function tT() {
    !(tm || (null != tf && Date.now() < tf + tI)) && (null == tC || Date.now() >= tC + tp) && tA.fetch();
}
class tS extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return tT(), tN[e] ?? [];
    }
    hasUnclaimedGames(e) {
        tT();
        let t = tN[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        return tT(), Object.keys(tN).filter((e) => tN[e].length > 0);
    }
    get fetching() {
        return tm;
    }
    get lastFetchedAt() {
        return tC;
    }
}
let tM = new tS(p.h, {
        LOGOUT: function () {
            (tN = {}), (tm = !1), (tC = null), (tf = null);
        },
        UNCLAIMED_GAMES_FETCH: function () {
            tm = !0;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            (tN = t), (tm = !1), (tC = Date.now()), (tf = null);
        },
        UNCLAIMED_GAMES_FETCH_FAIL: function () {
            (tm = !1), (tf = Date.now());
        },
    }),
    tO = (0, y.C)({
        kind: "guild",
        id: "2026-02_game_claim_coachmark",
        label: "Game Claim Coachmark",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
    });
var tx = n(509434),
    tR = n(975807),
    tL = n(201438),
    tb = n(194362),
    tv = n(307301),
    tD = n(661531),
    tG = n(841352);
function tU(e) {
    let { imageSrc: t } = e;
    return (0, r.jsxs)("div", {
        className: tG.kL,
        children: [
            (0, r.jsx)("div", { className: tG.j3, children: (0, r.jsx)("img", { className: tG.Su, src: t, alt: "" }) }),
            (0, r.jsx)("div", {
                className: tG.gm,
                children: (0, r.jsx)("div", {
                    className: tG.WA,
                    children: (0, r.jsx)(tv.j, { size: "sm", color: tD.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var ty = n(140461);
function tP(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = ((0, d.bG)([tM], () => tM.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null,
        { coverImageUrl: s, gameName: l } = (0, tL.A)(i, eJ.intl.string(eJ.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(P.GuildFeatures.VERIFIED) ? eJ.intl.string(eJ.t.uUARXe) : eJ.intl.string(eJ.t["0Dx29f"]);
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: () => n(eh.i.USER_DISMISS),
        title: eJ.intl.format(eJ.t.Q11WTQ, { gameName: l }),
        message: a,
        cta: (0, r.jsxs)("span", {
            className: ty.m,
            children: [eJ.intl.string(eJ.t["2u6ZlY"]), (0, r.jsx)(tx.I, { size: "xs", color: "currentColor" })],
        }),
        type: P.n5X.GAME_CLAIM,
        image: (0, r.jsx)(tU, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eh.i.TAKE_ACTION);
            let e = await (0, tb.a)(P.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tR.A)(e);
        },
    });
}
var tH = n(631305),
    tw = n(473145),
    tB = n(874864);
function tj(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tw.Os)(t, P.TVA.TIER_2),
        { analyticsLocations: s } = (0, C.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: () => n(eh.i.UNKNOWN),
        cta: eJ.intl.string(eJ.t.oPAx73),
        message: eJ.intl.format(eJ.t.AcaNYw, { boostsNeeded: i }),
        type: P.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tH.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tB.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tk = n(509536);
class tV extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tk.K4)({ guildId: e.id, location: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, r.jsx)(tc, {
            guild: e,
            onDismissed: () => n(eh.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? eJ.intl.string(eJ.t.hlitVQ) : eJ.intl.string(eJ.t.XHtaDD),
            cta: eJ.intl.string(eJ.t["vqb+H1"]),
            trackingSource: P.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: P.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tF = d.Ay.connectStores([V.A], (e) => {
    let { guild: t } = e;
    return { memberCount: V.A.getMemberCount(t.id) };
})(tV);
var tX = n(503698),
    tK = n.n(tX),
    tW = n(933832),
    tY = n(782603),
    tz = n(81466),
    tZ = n(116085),
    tq = n(597601),
    tQ = n(451394),
    t$ = n(104171),
    tJ = n(47167),
    t0 = n(713654),
    t1 = n(976860),
    t3 = n(790535),
    t2 = n(110618),
    t8 = n(495544),
    t5 = n(309010),
    t9 = n(312006),
    t6 = n(403362),
    t7 = n(707592),
    t4 = n(698441),
    ne = n(935159),
    nt = n(11550),
    nn = n(435328),
    ni = n(563312),
    ns = n(9448),
    nr = n(974930),
    nl = n(666394),
    na = n(28164);
let no = l.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: s,
        detailsIcon: l,
        topic: a,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, r.jsxs)("div", {
        className: na.kX,
        children: [
            (0, r.jsxs)("div", {
                className: tK()(na.fI, na.pF),
                children: [
                    (0, r.jsx)("div", { className: na.Ok }),
                    (0, r.jsx)(e8.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: na.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, r.jsx)(tr.D, {
                            onClick: o,
                            className: na.ut,
                            "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
                            children: (0, r.jsx)(tl.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, r.jsx)(ta.D, { color: "text-strong", variant: "heading-md/semibold", className: na.eq, children: a }),
            (0, r.jsxs)("div", {
                className: tK()(na.fI, na.pF),
                children: [
                    i,
                    (0, r.jsx)(e8.E, { color: "none", variant: "text-xs/normal", className: na.HA, children: n }),
                    null != s &&
                        null != l &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(e8.E, {
                                    className: na.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                l,
                                (0, r.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: na.zH,
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
function nd(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, tJ.Ay)(n),
        s = (0, d.yK)(
            [L.Ay],
            () =>
                L.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        l = (0, t0.gU)(n);
    return (0, r.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != l ? (0, r.jsx)(l, { size: "xs", color: "currentColor", className: na.uE }) : null,
        children: (0, r.jsx)(np, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nu(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nr.G3)(t),
        s = (0, d.bG)([t4.Ay], () => t4.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        l = (0, d.bG)([nt.A], () => nt.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != l || (0, ne.pE)(t.id),
        (0, r.jsx)(e5.$, {
            onClick: function () {
                (0, nl.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, ne.Lx)(t.id), 1e3)),
                    eu.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: eJ.intl.string(eJ.t.DlcqlU),
            icon: s ? tW.A : tY.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nc(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, ns.oF)(t),
        s = null != i ? (0, nn.l)(i, !0) : null,
        a = (0, ns.WN)(t),
        o = (0, tJ.Ay)(a),
        d = (0, t0.gU)(a),
        { startTime: u, endTime: c } = (0, ni.Ay)(t),
        { startDateTimeString: _, upcomingEvent: h, diffMinutes: E } = (0, nr.CC)(u.toISOString(), c?.toISOString()),
        g = h
            ? E > 0
                ? eJ.intl.formatToPlainString(eJ.t.PQlCWk, { minutes: E })
                : eJ.intl.string(eJ.t.WINqKV)
            : eJ.intl.formatToPlainString(eJ.t.DC6h3G, { date: _ });
    return (
        l.useEffect(() => {
            eu.default.track(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: na.kX,
            children: [
                (0, r.jsxs)("div", {
                    className: na.fI,
                    children: [
                        (0, r.jsx)(tr.D, {
                            onClick: () => (0, t7.uR)({ eventId: t.id }),
                            className: na.oP,
                            children: (0, r.jsx)(e8.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: na.eq,
                                children: t.name,
                            }),
                        }),
                        (0, r.jsx)(tr.D, {
                            onClick: () => {
                                eu.default.track(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, ne.Lx)(t.id);
                            },
                            className: na.ut,
                            "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
                            children: (0, r.jsx)(tl.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: tK()(na.fI, na.pF),
                    children: [
                        (0, r.jsx)(tz.C, {
                            size: "custom",
                            color: "currentColor",
                            className: na.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, r.jsx)(e8.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: na.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: tK()(na.fI, na.pF),
                    children: [
                        null != d
                            ? (0, r.jsx)(d, { size: "xs", color: "currentColor", className: na.uE })
                            : (0, r.jsx)(tZ.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: na.uE,
                              }),
                        (0, r.jsx)(e8.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: na.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, r.jsx)(nu, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function n_(e) {
    let { guildEvent: t } = e,
        n = (0, ns.oF)(t);
    return null == n
        ? null
        : (0, r.jsx)(no, {
              onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
              heading: eJ.intl.string(eJ.t["1+boPi"]),
              topic: t.name,
              location: (0, nn.l)(n, !0),
              locationIcon: (0, r.jsx)(tZ.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: na.uE,
              }),
              children: (0, r.jsx)(nh, { guildEvent: t }),
          });
}
function nh(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, t7.uR)({ eventId: t.id });
        }, [t]);
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: na.PD,
        children: (0, r.jsx)(e5.$, {
            variant: "active",
            size: "sm",
            text: eJ.intl.string(eJ.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nE(e) {
    let { channel: t, label: n } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: na.PD,
        children: (0, r.jsx)(e5.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, t3.av)(t), (0, t1.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function ng(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, tJ.Ay)(n),
        s = (0, d.yK)([T.A], () => [...new Set(T.A.getMutableParticipants(n.id, S.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        l = (0, d.bG)([T.A], () => T.A.getParticipantCount(n.id, S.ip.AUDIENCE), [n.id]),
        a = eJ.intl.formatToPlainString(eJ.t["+v2pN2"], { count: `${l}` });
    return (0, r.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ stageId: t?.id }),
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, r.jsx)(tq.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: na.uE,
        }),
        locationIcon: (0, r.jsx)(tQ.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: na.uE,
        }),
        topic: t.topic,
        children: (0, r.jsx)(np, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nA = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function np(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(P.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t8.default, t5.A, t9.Ay], () => {
                let e = t8.default.getId();
                return t5.A.getVoiceChannelId() === t ? t9.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        _ = eJ.intl.string(eJ.t.VJlc0S);
    switch (s) {
        case 1:
            _ = eJ.intl.string(eJ.t.VJlc0S);
            break;
        case 2:
            (_ = eJ.intl.string(eJ.t.ZYO5OK)),
                c?.speaker ? (_ = eJ.intl.string(eJ.t["/cnSFc"])) : null != c && (_ = eJ.intl.string(eJ.t.btSGOj));
            break;
        case 3:
            _ = eJ.intl.string(eJ.t.wBoE6L);
            break;
        default:
            (0, t6.xb)(s);
    }
    return null == a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  o.length > 0
                      ? (0, r.jsxs)("div", {
                            className: tK()(na.fI, na.pF),
                            children: [
                                (0, r.jsx)(t$.Ay, { guildId: a, users: o, showUserPopout: !0, size: t$.DN.SIZE_16 }),
                                (0, r.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: na.c8,
                                    children: (0, t2.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, r.jsx)(nE, { channel: n, label: _ }),
              ],
          });
}
let nI = l.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: l } = e,
        a = ((t = l.id), (n = (0, U.r2)(t)), (i = (0, O.Ay)(t)), (s = x.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, U.BP)(l.id),
        u = (0, U.WG)(l.id),
        c = (0, d.bG)([M.A], () => M.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: _, isEventNoticeHidden: h } = (0, d.cf)(
            [G],
            () => ({
                isStageNoticeHidden: G.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: G.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        E = null,
        g = null != c && null != a && !_;
    null == o || h
        ? g && (E = (0, r.jsx)(ng, { stageInstance: c, channel: a }))
        : o.entity_type === b.Ps.STAGE_INSTANCE && g
          ? (E = (0, r.jsx)(ng, { stageInstance: c, channel: a }))
          : o.entity_type === b.Ps.EXTERNAL
            ? (E = (0, r.jsx)(n_, { guildEvent: o }))
            : o.entity_type === b.Ps.VOICE && null != a && (E = (0, r.jsx)(nd, { guildEvent: o, channel: a }));
    let A = l.features.has(P.GuildFeatures.COMMUNITY);
    if (null == E && null != u && !A) {
        let { upcomingEvent: e, noticeType: t } = u;
        E = (0, r.jsx)(nc, { guildEvent: e, noticeType: t });
    }
    return E;
});
function nN(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: () => i(eh.i.UNKNOWN),
        onClick: function () {
            (0, A.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("90496"), n.e("7206")]).then(n.bind(n, 401155));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        message: eJ.intl.string(eJ.t["1+hiP6"]),
        cta: eJ.intl.string(eJ.t.hvVgAZ),
        trackingSource: P.kZU.HUB_LINK_NOTICE,
        type: P.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nm = n(717421),
    nC = n(450510);
let nf = (e) => {
    let { channel: t, guild: n } = e;
    return (0, r.jsx)(tc, {
        guild: n,
        onDismissed: () => {
            (0, nC.sF)(nC._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, nC.sF)(nC._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t3.av)(t), (0, t1.uh)(t.getGuildId(), t.id));
        },
        title: eJ.intl.string(eJ.t["4Y2AS7"]),
        message: eJ.intl.string(eJ.t.wTsxTS),
        cta: eJ.intl.string(eJ.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: P.n5X.HUB_STUDY_ROOM,
    });
};
var nT = n(994190);
let nS = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [L.Ay],
            () =>
                L.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t0.gU)(n);
    return (0, r.jsx)(no, {
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        topic: t,
        location: eJ.intl.string(eJ.t.LZA6Na),
        locationIcon: null != s ? (0, r.jsx)(s, { size: "xs", color: "currentColor", className: nT.K }) : null,
        children: (0, r.jsx)(np, { channel: n, speakers: i, voiceType: nA.STUDY_ROOM }),
    });
};
var nM = n(48686);
function nO(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nC.HP], () => nC.HP.hasHotspot(nC._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nM.Q)(t.guild_id),
        l = (0, tJ.Ay)(t),
        o = (0, nm.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, r.jsx)(a.animated.div, {
        style: o,
        children: i ? (0, r.jsx)(nf, { channel: t, guild: n }) : (0, r.jsx)(nS, { name: `📚☕ ${l}`, channel: t }),
    });
}
let nx = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([ek.Ay], () => ek.Ay.getChannels(t.id)[ek.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(P.xBc.CONNECT, n.channel));
    return t.features.has(P.GuildFeatures.HUB) && null != n && i
        ? (0, r.jsx)(nO, { channel: n.channel, guild: t })
        : null;
};
function nR(e) {
    let { guild: t } = e,
        n = () => B.A.dismissNotice(t.id);
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: n,
        cta: eJ.intl.string(eJ.t.RzWDqY),
        message: eJ.intl.format(eJ.t["kQ/MDl"], {}),
        type: P.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e$.A.open(t.id, P.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nL = n(587895),
    nb = n(143582);
function nv(e) {
    let t,
        { guild: n } = e,
        i = (0, j.$s)(n),
        s = () => (0, nb.Hc)(n.id),
        a = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nL.A], () => {
            let e = [];
            for (let t of a) {
                let n = nL.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? eJ.intl.formatToPlainString(eJ.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? eJ.intl.formatToPlainString(eJ.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? eJ.intl.formatToPlainString(eJ.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : eJ.intl.string(eJ.t.MvfowF)),
          (0, r.jsx)(tc, {
              guild: n,
              onDismissed: s,
              message: t,
              type: P.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e$.A.open(n.id, P.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: eJ.intl.string(eJ.t.Rr3MAe),
          }));
}
var nD = n(628287);
let nG = (e) => {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            (e = t.id), p.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: n,
        onClick: () => e$.A.open(t.id, P.BEX.COMMUNITY),
        message: eJ.intl.string(eJ.t["2klD0Z"]),
        trackingSource: P.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: P.n5X.PUBLIC_UPSELL,
        image: nD,
        cta: eJ.intl.string(eJ.t.hvVgAZ),
    });
};
var nU = n(536194),
    ny = n(780964),
    nP = n(858897);
class nH extends l.PureComponent {
    render() {
        return (0, r.jsx)(tc, {
            guild: this.props.guild,
            onClick: () => (0, nP.openUserSettings)(ny.X.ACCOUNT_PANEL),
            message: eJ.intl.format(eJ.t["oCd+at"], {}),
            cta: eJ.intl.string(eJ.t["8dCrV9"]),
            trackingSource: P.kZU.GUILD_MFA_WARNING,
            type: P.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nw = n(720149);
class nB extends l.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, A.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(n.bind(n, 1310));
            return (n) => (0, r.jsx)(t, { ...n, guild: e, source: P.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t5.A.getChannelId(),
            t = eJ.intl.formatToPlainString(eJ.t.DEn7nu, { invitePeople: eJ.intl.string(eJ.t.Sd8Ixw) });
        this.props.markAsDismissed(eh.i.UNKNOWN), null != e && nw.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${eJ.intl.string(eJ.t.VWqWZQ)}
${eJ.intl.string(eJ.t["0Lgb/K"])}`;
        return (0, r.jsx)(tc, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: eJ.intl.string(eJ.t.Sd8Ixw),
            trackingSource: P.kZU.INVITE_NOTICE,
            type: P.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nj = (e) => {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            (e = t.id), p.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, r.jsx)(tc, {
        guild: t,
        onDismissed: n,
        message: eJ.intl.format(eJ.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: t_.A.getArticleURL(P.MVz.MAX_MEMBERS),
        }),
        type: P.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nk = n(475358),
    nV = n(675704),
    nF = n(793322);
let nX = (e) => {
    let t = (0, r.jsx)(nk.e, { shortcut: nV.R.binds["0"], keyClassName: td.Eb });
    return (0, r.jsx)(tc, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eh.i.UNKNOWN),
        onClick: () => (0, nF.WU)("CHANNEL_NOTICE"),
        message: eJ.intl.string(eJ.t.Qhk8cs),
        cta: t,
        trackingSource: P.kZU.QUICK_SWITCHER_NOTICE,
        type: P.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nK = n(174768);
class nW extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(F.A), this.syncWith([F.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(P.GuildFeatures.BANNER) && Date.now() - t >= P.D2K;
    }
}
let nY = new nW(p.h);
class nz extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && R.A.can(P.xBc.MANAGE_GUILD, e);
    }
}
let nZ = new nz(p.h);
var nq = n(731667);
function nQ() {
    return !0;
}
class n$ extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], nQ);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && R.A.can(P.xBc.ADMINISTRATOR, e);
    }
}
let nJ = new n$(p.h),
    n0 = "lastHiddenChannelNotice",
    n1 = [
        { type: P.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: P.n5X.GUILD_BOOSTING,
            store: nZ,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: P.n5X.GUILD_BANNER, store: nY, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: P.n5X.INVITE, store: nJ, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: P.n5X.HUB_LINK, store: nq.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: P.n5X.QUICKSWITCHER, store: nK.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: P.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: P.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n3 = n1.map((e) => e.store).filter(t6.Vq),
    n2 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n8(e) {
    e.stopPropagation();
}
let n5 = [];
function n9(e) {
    var t, n;
    let i,
        s,
        { guild: a } = e,
        [o, c] = l.useState(k.w.get(n0) ?? 0),
        _ =
            ((n = t = a.id),
            (i = tO.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)(
                [R.A, tM],
                () =>
                    !!i && !!R.A.canWithPartialContext(P.xBc.ADMINISTRATOR, { guildId: t }) && tM.hasUnclaimedGames(t),
                [t, i],
            )),
            l.useMemo(() => {
                let e = [];
                return s && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n5;
            }, [s])),
        [h, E] = (0, ei.ww)(_, a.id, eh.m.CHANNEL_NOTICES, !0),
        g = null != h,
        A = (0, d.yK)(
            n3,
            () =>
                g
                    ? []
                    : n1
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(a, o) && !n2.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [a, o, g],
        ),
        [p, I] = (0, ei.kn)(A, eh.m.CHANNEL_NOTICES),
        N = h ?? p,
        m = null != h ? E : I,
        C = l.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n0, e), c(e), m(eh.i.UNKNOWN);
        }, [m]),
        f = (() => {
            switch (N) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, r.jsx)(nN, { guild: a, markAsDismissed: C });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, r.jsx)(nB, { guild: a, markAsDismissed: C });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, r.jsx)(tF, { guild: a, markAsDismissed: C });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, r.jsx)(nX, { guild: a, markAsDismissed: C });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, r.jsx)(tj, { guild: a, markAsDismissed: C });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, r.jsx)(th, { guild: a, markAsDismissed: () => m(eh.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, r.jsx)(tP, { guild: a, markAsDismissed: m });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, r.jsx)("div", { onContextMenu: n8, children: f });
}
let n6 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(nG, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, r.jsx)(nj, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(nI, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, r.jsx)(nH, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, r.jsx)(nR, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(nv, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, r.jsx)(nx, { guild: t });
    }
    return nU.P.isDisallowPopupsSet() ? null : (0, r.jsx)(n9, { guild: e.guild });
};
var n7 = n(532233);
function n4(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, r.jsx)("div", { className: n7.k, ref: i, children: (0, r.jsx)(n6, { guild: t }) })
    );
}
var ie = n(66933),
    it = n(846930),
    ii = n(153822);
let is = "server-settings",
    ir = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class il extends l.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = l.createRef();
    guildHeaderDropdownButtonRef = l.createRef();
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
            p.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eP.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eP.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            p.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
            if ((0, er.ai)(t.id)) {
                if (!i) return;
                (0, I.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, r.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, I.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, r.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, er.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("32292"),
                    n.e("49681"),
                    n.e("96382"),
                    n.e("20044"),
                    n.e("28367"),
                    n.e("45174"),
                    n.e("85519"),
                    n.e("87963"),
                    n.e("37266"),
                    n.e("55057"),
                    n.e("76021"),
                    n.e("63229"),
                    n.e("31988"),
                    n.e("55343"),
                    n.e("93103"),
                    n.e("88342"),
                    n.e("8555"),
                    n.e("40142"),
                    n.e("60161"),
                    n.e("98765"),
                    n.e("65437"),
                    n.e("34983"),
                    n.e("92414"),
                    n.e("95208"),
                    n.e("72401"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("53142"),
                    n.e("76390"),
                    n.e("93312"),
                    n.e("67339"),
                    n.e("21055"),
                    n.e("31538"),
                    n.e("21453"),
                    n.e("54436"),
                    n.e("421"),
                    n.e("227"),
                    n.e("90184"),
                    n.e("62718"),
                    n.e("29594"),
                    n.e("8018"),
                    n.e("7637"),
                    n.e("28136"),
                    n.e("3025"),
                    n.e("86674"),
                    n.e("49862"),
                    n.e("80093"),
                    n.e("22547"),
                    n.e("82486"),
                    n.e("77602"),
                    n.e("68587"),
                    n.e("86546"),
                    n.e("15373"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("46411"),
                    n.e("25961"),
                    n.e("44935"),
                    n.e("13848"),
                    n.e("62890"),
                    n.e("46291"),
                    n.e("41068"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("15666"),
                    n.e("11810"),
                    n.e("95765"),
                    n.e("13337"),
                    n.e("65338"),
                    n.e("49036"),
                    n.e("22028"),
                ]).then(n.bind(n, 860417));
                return (n) => (0, r.jsx)(e, { ...n, guild: t });
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
            t = this.props.guild?.features.has(P.GuildFeatures.HUB);
        !e && t && (0, en.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eh.i.AUTO });
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
        let { default: e } = await Promise.all([n.e("13337"), n.e("19591")]).then(n.bind(n, 587664));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, r.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, r.jsx)(tt, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? h.t : E.a;
        return (0, r.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: s } = this.state;
        return n
            ? (0, r.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, r.jsx)(eH.A, {
                      tutorialId: is,
                      position: "bottom",
                      inlineSpecs: ir,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, r.jsx)(_.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eJ.intl.string(eJ.t.Rk2RJk),
                                body: eJ.intl.string(eJ.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : s
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, r.jsx)(_.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eJ.intl.string(eJ.t.Q3qa4x),
                                body: eJ.intl.string(eJ.t.UyHD4O),
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
                isGuildHeaderDismissibleTooltipShown: l,
                headerAnalyticsLocations: a,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: u,
                bannerVisibleHeight: c,
                communityInfoVisible: _,
            } = this.state,
            h = i || s || l;
        return null == t
            ? null
            : (0, r.jsx)(C.f5, {
                  value: a,
                  children: (0, r.jsx)(g.Q, {
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
                          let { onClick: s, ...l } = i;
                          return (0, r.jsx)(ez.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: u,
                              communityInfoVisible: _,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: h,
                              animationOverlayHeight: c,
                              ...l,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, eW.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: s,
            controller: r,
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
            r.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
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
            return (0, r.jsx)(it.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(P.GuildFeatures.HUB) && !i)
                return (0, r.jsx)("div", {
                    className: ii.r0,
                    children: (0, r.jsx)(eO.A, { guild: t, channel: n ?? ek.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, er.ai)(t.id) ? eY.T : eY.B;
            return (0, r.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eW.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, er.YC)(e);
        return (0, r.jsxs)("nav", {
            className: ii.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eJ.intl.formatToPlainString(eJ.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, r.jsx)(n4, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ia(e) {
    let t,
        i,
        s,
        a,
        c,
        _,
        h,
        E,
        g,
        p,
        I,
        f,
        T,
        S,
        M,
        { guildId: O, hideSelectedChannel: L, selectedChannelId: b } = e,
        v = (0, ea.$)("favorite-guild-header-context"),
        { hasAccess: D } = (0, es.TW)("ConnectedGuildSidebar"),
        G = (0, d.bG)([F.A], () => F.A.getGuild(O)),
        U = (0, el.A)(O),
        y = (0, d.bG)([eB.A], () => eB.A.getGuildDimensions(O).scrollTo),
        H = (0, d.bG)([eX.A], () => eX.A.getChannelId()),
        B = (0, d.bG)([R.A], () => R.A.can(P.xBc.MANAGE_GUILD, G)),
        j = (0, d.bG)([ej.A], () => ej.A.isUnavailable(O)),
        k = (0, d.bG)([eI.default], () => eI.default.getCurrentUser()),
        { enableStudyGroup: V } = w(G),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = l.useState(!K),
        z = (0, N.A)(O),
        { analyticsLocations: Z } = (0, C.Ay)(m.A.GUILD_HEADER);
    l.useEffect(() => {
        O !== z && Y(!K);
    }, [O, z, K]);
    let [q, Q] = (0, et.Ay)(
            (e) => [
                n1.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eh.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        $ = ee(G),
        J = (0, A.useModalsStore)(A.hasAnyModalOpenSelector),
        eN = (0, d.bG)([eV.A], () => eV.A.hasLayers()),
        em = (0, ex.xr)((e) => e.fullScreenLayers.length > 0),
        eC = (0, d.bG)([ew.A], () => ew.A.shouldShow(is)),
        ef =
            ((t = (0, d.bG)([F.A], () => F.A.getGuild(O))),
            (i = (0, d.bG)([eI.default], () => eI.default.getCurrentUser())),
            (s = null != t && (0, ep.bM)(t, i)),
            (a = (0, eA.oS)()),
            s &&
                (t?.features.has(P.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        eT = G?.features.has(P.GuildFeatures.HUB) === !0,
        eS = B && G?.features.has(P.GuildFeatures.DISCOVERABLE) === !0,
        eO = (0, d.bG)(
            [eM, eV.A],
            () => null != G && null != k && B && !eV.A.hasLayers() && eM.shouldShowGuildTemplateDirtyTooltip(O),
        ),
        eP = (0, d.bG)([x.A], () => x.A.getChannel(b)),
        { isPopoutOpen: eH } = (0, eo.S)(),
        ek = G?.features.has(P.GuildFeatures.COMMUNITY) ?? !1,
        eW = eK.Ay.isNewUser(k),
        eY = W && !eW;
    (c = (0, ed.TZ)(G)),
        (_ = X.dR.some((e) => !(0, er.ai)(G?.id) && ec.Ib(e, G))),
        (h = G?.defaultMessageNotifications === P.orn.ALL_MESSAGES),
        (E = (0, e_.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, G?.id ?? P.dJq)),
        (g = c && (_ || h) && !E),
        (p = l.useCallback(() => {
            (0, e_._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, G?.id ?? P.dJq, !0, eh.i.DISMISS);
        }, [G])),
        (I = l.useRef(!1)),
        l.useEffect(() => {
            g &&
                !I.current &&
                ((0, A.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("42446").then(n.bind(n, 653981));
                        return (t) =>
                            (0, r.jsx)(e, {
                                guild: G,
                                canEveryoneModerate: _,
                                isDefaultNotificationsAllMessages: h,
                                ...t,
                            });
                    },
                    { onCloseCallback: p },
                ),
                eu.default.track(P.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: G?.id ?? P.dJq,
                }),
                (I.current = !0));
        }, [_, G, p, h, g]);
    let ez = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eZ =
            ((f = (0, d.bG)([F.A], () => F.A.getGuild(O))),
            (T = (0, eE._Y)(O)),
            (S =
                f?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                f?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (M = (0, eg.X9)(f)),
            S && M && T),
        eq = (0, d.bG)([eX.A], () => eX.A.getChannelId()),
        eQ = (0, d.bG)([eF.A], () => eF.A.desyncedVoiceStatesCount),
        e$ = (0, eU.A)(O);
    ie.A.useConfig({ guildId: O, location: "guild_sidebar" });
    let eJ = (0, eR.C$)(O, "GuildSidebar"),
        e0 = (0, d.bG)([F.A], () => F.A.getGuild(O)?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1, [O]),
        e1 = (0, eb.J)("GuildSidebar"),
        e3 = (0, eL.S)(O, "GuildSidebar"),
        e2 = (0, ey.A)(),
        e8 = (0, eD.A)(O),
        e5 = !1 === e$ && e2 && null != e8,
        e9 = (0, eG.A)(O),
        e6 = !1 === e$ && e2 && null != e9,
        e7 = [];
    eT && e7.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        ef && e7.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eS && e7.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e$ && e7.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        eJ && !e0 && !1 === e$ && e7.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eJ && e1 && !1 === e$ && e7.push(u.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eJ && !e0 && e3 && !1 === e$ && e7.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        eZ && e7.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [e4, te] = (0, ei.kn)(e7, eh.m.GUILD_HEADER_TOOLTIPS),
        tt = null == e4,
        [tn, ti] = (0, ei.D8)(
            tt && e5 ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            O,
            { cooldownDurationMs: ev.bW, numTimesToRecur: 5 },
            eh.m.GUILD_HEADER_TOOLTIPS,
        ),
        [ts, tr] = (0, ei.D8)(
            tt && tn !== u.M.BOOST_TO_UNLOCK_COACHMARK && e6 ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            O,
            { cooldownDurationMs: ev.mD },
            eh.m.GUILD_HEADER_TOOLTIPS,
        ),
        tl = l.useMemo(
            () =>
                null != e4
                    ? { contentType: e4, data: null, markAsDismissed: te }
                    : tn === u.M.BOOST_TO_UNLOCK_COACHMARK && null != e8
                      ? { contentType: tn, data: { featuredPowerup: e8 }, markAsDismissed: ti }
                      : ts === u.M.EXPIRING_POWERUP_COACHMARK && null != e9
                        ? { contentType: ts, data: { featuredExpiringPowerup: e9 }, markAsDismissed: tr }
                        : null,
            [e4, tn, ts, e8, e9, te, ti, tr],
        );
    return (0, r.jsx)(il, {
        guildId: O,
        hideSelectedChannel: L,
        guild: G,
        scrollToChannel: y,
        selectedChannelId: L ? null : b,
        selectedChannel: eP,
        selectedVoiceChannelId: H,
        voiceStates: U,
        rtcConnectedChannelId: eq,
        rtcDesyncedVoiceStatesCount: eQ,
        isUnavailable: j,
        user: k,
        hasChannelNotice: null != $ || q,
        anyLayerOpen: J || eN || em,
        showGuildHeaderTutorial: eC,
        showGuildTemplateDirtyTooltip: eO,
        showNewUnreadsBar: ek,
        isHeaderPopoutOpen: eH,
        enableStudyGroup: V,
        isGuildHeaderDismissibleTooltipShown: Q,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: ez,
        shouldRenderBurstCoachmark: eY,
        guildHeaderContentDescriptor: tl,
        onFavoriteGuildContextMenu: v,
        hasFavoritesAccess: D,
    });
}
