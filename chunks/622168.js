n.r(t), n.d(t, { default: () => ia }), n(321073);
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(123924),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    _ = n(922016),
    g = n(192308),
    N = n(228366),
    I = n(442433),
    C = n(475743),
    m = n(793574),
    S = n(688810),
    T = n(285059),
    p = n(63995);
n(113783);
var M = n(69407),
    O = n(446600),
    L = n(624265);
n(616356);
var R = n(734057),
    x = n(576705),
    f = n(607567),
    G = n(988794);
let U = { hiddenEventsAndStages: [] };
class D extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (U = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && U.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && U.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return U;
    }
}
let b = new D(N.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? U.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && U.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (t.status === G.XG.CANCELED || t.status === G.XG.COMPLETED) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        U.hiddenEventsAndStages.includes(n) &&
            (U.hiddenEventsAndStages = U.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var P = n(508654);
n(818348);
var H = n(600975),
    y = n(652215);
let v = (0, H.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    B = (e) => (
        r.useEffect(() => {
            null != e &&
                e.features.has(y.GuildFeatures.HUB) &&
                v.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        v.useExperiment(
            { guildId: e?.id ?? y.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(y.GuildFeatures.HUB) },
        )
    );
var j = n(320426),
    w = n(915043),
    k = n(506774),
    V = n(498642),
    X = n(71393),
    F = n(124759);
let K = "publicUpsellChannelNoticeGuilds",
    W = new Set();
class Y extends d.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(x.A, X.A, V.A), this.syncWith([x.A, X.A, V.A], y.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = V.A.getMemberCount(e.id);
        return (
            !W.has(e.id) &&
            null != t &&
            t >= F.dH &&
            x.A.can(y.xBc.ADMINISTRATOR, e) &&
            !e.features.has(y.GuildFeatures.COMMUNITY)
        );
    }
}
let z = new Y(N.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!W.has(t)) return W.add(t), k.w.set(K, W), !0;
    },
});
var Z = n(992250);
let q = { MAX_MEMBER_COUNT: new Set() };
class $ extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(x.A, X.A, V.A),
            this.syncWith([x.A, X.A, V.A], y.tEg),
            k.w.remove(y.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(y.n5X.MAX_MEMBER_COUNT_250),
            (q[y.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(y.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = V.A.getMemberCount(e.id) ?? 0,
            n = x.A.can(y.xBc.ADMINISTRATOR, e);
        return !q[y.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let Q = new $(N.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!q[y.n5X.MAX_MEMBER_COUNT].has(t))
            return q[y.n5X.MAX_MEMBER_COUNT].add(t), k.w.set(y.n5X.MAX_MEMBER_COUNT, q[y.n5X.MAX_MEMBER_COUNT]), !0;
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
    let t = e?.id ?? y.dJq,
        n = (0, d.bG)([z], () => z.isVisible(e)),
        i = (0, d.bG)([Q], () => Q.isVisible(e)),
        s = (function (e) {
            let t = (0, L.Ay)(e),
                n = R.A.getChannel(t[0]?.id),
                i = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, P.BP)(e),
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
        a = j.A.useShouldShowChannelNotice(t),
        o = (0, w.$s)(e),
        { enableStudyGroup: u } = B(e),
        c = o.length > 0,
        A = u && !e?.features.has(y.GuildFeatures.HUB),
        E = (0, P.WG)(t);
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
var et = n(771781),
    en = n(826673),
    ei = n(932001),
    es = n(313281),
    el = n(5180),
    er = n(250719),
    ea = n(780645),
    eo = n(72152),
    ed = n(15073),
    eu = n(954571),
    ec = n(488926),
    eA = n(45780),
    eE = n(49999),
    eh = n(567305),
    e_ = n(555325),
    eg = n(469993),
    eN = n(260509),
    eI = n(287809),
    eC = n(568185);
let em = "hasSeenGuildTemplatePromotionTooltip",
    eS = {},
    eT = !0 === k.w.get(em);
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
let eO = new eM(N.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eS = { ...eS, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        k.w.set(em, !0), (eT = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eS = { ...eS, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: ep,
    GUILD_TEMPLATE_DELETE_SUCCESS: ep,
});
var eL = n(285406),
    eR = n(361158),
    ex = n(488803),
    ef = n(764322),
    eG = n(969983),
    eU = n(379229),
    eD = n(139032),
    eb = n(52260),
    eP = n(363487),
    eH = n(342220),
    ey = n(320989),
    ev = n(728321),
    eB = n(79858),
    ej = n(72314),
    ew = n(919638),
    ek = n(808728),
    eV = n(186111),
    eX = n(584569),
    eF = n(763827),
    eK = n(927578),
    eW = n(885631),
    eY = n(849380),
    ez = n(420344),
    eZ = n(110259),
    eq = n(702841),
    e$ = n(139286),
    eQ = n(997509),
    eJ = n(985018),
    e0 = n(330766);
function e1(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, eq.bG)([X.A, eI.default], () => {
            let e = eI.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, eN.bM)(n, e);
        });
    return (
        (0, e$.A)({
            type: eZ.ImpressionTypes.POPOUT,
            name: eZ.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: eJ.intl.string(eJ.t.C0m4rQ),
            body: eJ.intl.string(eJ.t.zOHfEX),
            graphic: { type: "image", src: e0 },
            actions: [
                {
                    text: eJ.intl.string(eJ.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        eQ.A.open(t, y.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e3 = n(338854);
function e8(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e3.H, {
        targetElementRef: i,
        title: eJ.intl.string(eJ.t.gCgirr),
        body: eJ.intl.string(eJ.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: eJ.intl.string(eJ.t.BQq86h),
            variant: "primary",
            onClick: () => {
                eQ.A.open(t, y.BEX.ROLE_SUBSCRIPTIONS, void 0, y.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var e2 = n(834730),
    e4 = n(821609),
    e5 = n(383470);
function e6(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: e5.kL,
        children: [
            (0, l.jsx)("div", { className: e5.Wn }),
            (0, l.jsx)(e2.E, { variant: "text-sm/normal", className: e5.Qs, children: eJ.intl.string(eJ.t.rdzeVP) }),
            (0, l.jsx)(e4.$, {
                variant: "overlay-primary",
                text: eJ.intl.string(eJ.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var e7 = n(166978);
function e9(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: eJ.intl.string(eJ.t.Hgd22r),
        body: eJ.intl.string(eJ.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: eJ.intl.string(eJ.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    eQ.A.open(t.id, y.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function te(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = r.useRef(null);
    return (0, l.jsx)(_.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, l.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(i) : t }),
        position: "bottom",
        align: "center",
        animation: _.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, l.jsx)("div", { ref: i, children: n() }),
    });
}
let tt = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) => (0, l.jsx)(e7.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(te, {
                        renderPopout: (t) =>
                            (0, l.jsx)(e7.Gw, {
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
                    return (0, l.jsx)(te, {
                        renderPopout: (t) =>
                            (0, l.jsx)(e7.Mr, {
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
                    return (0, l.jsx)(te, {
                        renderPopout: (e) => (0, l.jsx)(e1, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) => (0, l.jsx)(e9, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(te, {
                        renderPopout: (0, l.jsx)(e6, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(te, {
                        renderPopout: (e) => (0, l.jsx)(e8, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
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
    tl = n(939249),
    tr = n(789645),
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
            onDismissed: A,
            onClick: E,
            cta: h,
            ctaColor: _,
        } = e;
        r.useEffect(() => {
            tu(y.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let g = null;
        "function" == typeof h
            ? (g = h())
            : null != h &&
              (g = (0, l.jsx)(ts.$n, {
                  "data-migration-pending": !0,
                  className: td.HM,
                  size: ts.$n.Sizes.SMALL,
                  onClick: () => {
                      null != a &&
                          eu.default.track(y.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          E?.();
                  },
                  fullWidth: !0,
                  color: _,
                  children: h,
              }));
        let N = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: td.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tl.D, {
                          onClick: () => {
                              to.Ay.trackWithMetadata(y.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: td.VN,
                          "aria-label": eJ.intl.string(eJ.t.WAI6xu),
                          children: (0, l.jsx)(tr.P, { size: "md", color: "currentColor", className: td.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: td.ZS,
                        style: { marginTop: `${d}px`, marginLeft: N, marginRight: N },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: td.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: td.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(ta.D, { variant: "heading-md/semibold", className: td.DD, children: n })
                            : null,
                        (0, l.jsx)(e2.E, { variant: "text-sm/normal", children: i }),
                        g,
                    ],
                }),
            ],
        });
    };
var tA = n(975571);
function tE(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tc, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            open(tA.A.getArticleURL(y.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN);
        },
        title: eJ.intl.string(eJ.t.YMgaJt),
        message: eJ.intl.string(eJ.t["AV/9eW"]),
        cta: eJ.intl.string(eJ.t.hvVgAZ),
        trackingSource: y.kZU.LINKED_ROLES_ADMIN_NUX,
        type: y.n5X.LINKED_ROLES_ADMIN,
    });
}
var th = n(927813),
    t_ = n(636537);
let tg = {
        fetch() {
            N.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
                t_.Bo.get({ url: y.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let { body: t } = e;
                        N.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: t });
                    },
                    () => {
                        N.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_FAIL" });
                    },
                );
        },
    },
    tN = th.A.Millis.DAY,
    tI = 5 * th.A.Millis.MINUTE,
    tC = {},
    tm = !1,
    tS = null,
    tT = null;
function tp() {
    !(tm || (null != tT && Date.now() < tT + tI)) && (null == tS || Date.now() >= tS + tN) && tg.fetch();
}
class tM extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return tp(), tC[e] ?? [];
    }
    hasUnclaimedGames(e) {
        tp();
        let t = tC[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        return tp(), Object.keys(tC).filter((e) => tC[e].length > 0);
    }
    get fetching() {
        return tm;
    }
    get lastFetchedAt() {
        return tS;
    }
}
let tO = new tM(N.h, {
        LOGOUT: function () {
            (tC = {}), (tm = !1), (tS = null), (tT = null);
        },
        UNCLAIMED_GAMES_FETCH: function () {
            tm = !0;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            (tC = t), (tm = !1), (tS = Date.now()), (tT = null);
        },
        UNCLAIMED_GAMES_FETCH_FAIL: function () {
            (tm = !1), (tT = Date.now());
        },
    }),
    tL = (0, H.C)({
        kind: "guild",
        id: "2026-02_game_claim_coachmark",
        label: "Game Claim Coachmark",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
    });
var tR = n(509434),
    tx = n(975807),
    tf = n(201438),
    tG = n(194362),
    tU = n(307301),
    tD = n(661531),
    tb = n(841352);
function tP(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tb.kL,
        children: [
            (0, l.jsx)("div", { className: tb.j3, children: (0, l.jsx)("img", { className: tb.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tb.gm,
                children: (0, l.jsx)("div", {
                    className: tb.WA,
                    children: (0, l.jsx)(tU.j, { size: "sm", color: tD.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tH = n(140461);
function ty(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = ((0, d.bG)([tO], () => tO.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tf.A)(i, eJ.intl.string(eJ.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(y.GuildFeatures.VERIFIED) ? eJ.intl.string(eJ.t.uUARXe) : eJ.intl.string(eJ.t["0Dx29f"]);
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: eJ.intl.format(eJ.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tH.m,
            children: [eJ.intl.string(eJ.t["2u6ZlY"]), (0, l.jsx)(tR.I, { size: "xs", color: "currentColor" })],
        }),
        type: y.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tP, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tG.a)(y.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tx.A)(e);
        },
    });
}
var tv = n(631305),
    tB = n(473145),
    tj = n(874864);
function tw(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tB.Os)(t, y.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: eJ.intl.string(eJ.t.oPAx73),
        message: eJ.intl.format(eJ.t.AcaNYw, { boostsNeeded: i }),
        type: y.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tv.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: y.JJy.CHANNEL_NOTICE, object: y.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tj.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tk = n(509536);
class tV extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tk.K4)({ guildId: e.id, location: { section: y.JJy.CHANNEL_NOTICE, object: y.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tc, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? eJ.intl.string(eJ.t.hlitVQ) : eJ.intl.string(eJ.t.XHtaDD),
            cta: eJ.intl.string(eJ.t["vqb+H1"]),
            trackingSource: y.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: y.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tX = d.Ay.connectStores([V.A], (e) => {
    let { guild: t } = e;
    return { memberCount: V.A.getMemberCount(t.id) };
})(tV);
var tF = n(503698),
    tK = n.n(tF),
    tW = n(933832),
    tY = n(782603),
    tz = n(81466),
    tZ = n(116085),
    tq = n(597601),
    t$ = n(451394),
    tQ = n(104171),
    tJ = n(47167),
    t0 = n(713654),
    t1 = n(976860),
    t3 = n(790535),
    t8 = n(110618),
    t2 = n(495544),
    t4 = n(309010),
    t5 = n(312006),
    t6 = n(403362),
    t7 = n(707592),
    t9 = n(698441),
    ne = n(935159),
    nt = n(11550),
    nn = n(435328),
    ni = n(563312),
    ns = n(9448),
    nl = n(974930),
    nr = n(666394),
    na = n(28164);
let no = r.memo(function (e) {
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
        className: na.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tK()(na.fI, na.pF),
                children: [
                    (0, l.jsx)("div", { className: na.Ok }),
                    (0, l.jsx)(e2.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: na.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tl.D, {
                            onClick: o,
                            className: na.ut,
                            "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
                            children: (0, l.jsx)(tr.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(ta.D, { color: "text-strong", variant: "heading-md/semibold", className: na.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tK()(na.fI, na.pF),
                children: [
                    i,
                    (0, l.jsx)(e2.E, { color: "none", variant: "text-xs/normal", className: na.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(e2.E, {
                                    className: na.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                r,
                                (0, l.jsx)(e2.E, {
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
            [f.Ay],
            () =>
                f.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t0.gU)(n);
    return (0, l.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: na.uE }) : null,
        children: (0, l.jsx)(nN, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nu(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nl.G3)(t),
        s = (0, d.bG)([t9.Ay], () => t9.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([nt.A], () => nt.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, ne.pE)(t.id),
        (0, l.jsx)(e4.$, {
            onClick: function () {
                (0, nr.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, ne.Lx)(t.id), 1e3)),
                    eu.default.track(y.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
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
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nl.CC)(u.toISOString(), c?.toISOString()),
        _ = E
            ? h > 0
                ? eJ.intl.formatToPlainString(eJ.t.PQlCWk, { minutes: h })
                : eJ.intl.string(eJ.t.WINqKV)
            : eJ.intl.formatToPlainString(eJ.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            eu.default.track(y.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: na.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: na.fI,
                    children: [
                        (0, l.jsx)(tl.D, {
                            onClick: () => (0, t7.uR)({ eventId: t.id }),
                            className: na.oP,
                            children: (0, l.jsx)(e2.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: na.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tl.D, {
                            onClick: () => {
                                eu.default.track(y.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, ne.Lx)(t.id);
                            },
                            className: na.ut,
                            "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
                            children: (0, l.jsx)(tr.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tK()(na.fI, na.pF),
                    children: [
                        (0, l.jsx)(tz.C, {
                            size: "custom",
                            color: "currentColor",
                            className: na.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(e2.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: na.Sv,
                            children: _,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tK()(na.fI, na.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: na.uE })
                            : (0, l.jsx)(tZ.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: na.uE,
                              }),
                        (0, l.jsx)(e2.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: na.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nu, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nA(e) {
    let { guildEvent: t } = e,
        n = (0, ns.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(no, {
              onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
              heading: eJ.intl.string(eJ.t["1+boPi"]),
              topic: t.name,
              location: (0, nn.l)(n, !0),
              locationIcon: (0, l.jsx)(tZ.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: na.uE,
              }),
              children: (0, l.jsx)(nE, { guildEvent: t }),
          });
}
function nE(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, t7.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: na.PD,
        children: (0, l.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: eJ.intl.string(eJ.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nh(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: na.PD,
        children: (0, l.jsx)(e4.$, {
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
function n_(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, tJ.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        a = eJ.intl.formatToPlainString(eJ.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ stageId: t?.id }),
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(tq.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: na.uE,
        }),
        locationIcon: (0, l.jsx)(t$.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: na.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nN, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var ng = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nN(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([x.A], () => x.A.can(y.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t2.default, t4.A, t5.Ay], () => {
                let e = t2.default.getId();
                return t4.A.getVoiceChannelId() === t ? t5.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = eJ.intl.string(eJ.t.VJlc0S);
    switch (s) {
        case 1:
            A = eJ.intl.string(eJ.t.VJlc0S);
            break;
        case 2:
            (A = eJ.intl.string(eJ.t.ZYO5OK)),
                c?.speaker ? (A = eJ.intl.string(eJ.t["/cnSFc"])) : null != c && (A = eJ.intl.string(eJ.t.btSGOj));
            break;
        case 3:
            A = eJ.intl.string(eJ.t.wBoE6L);
            break;
        default:
            (0, t6.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tK()(na.fI, na.pF),
                            children: [
                                (0, l.jsx)(tQ.Ay, { guildId: a, users: o, showUserPopout: !0, size: tQ.DN.SIZE_16 }),
                                (0, l.jsx)(e2.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: na.c8,
                                    children: (0, t8.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nh, { channel: n, label: A }),
              ],
          });
}
let nI = r.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, P.r2)(t)), (i = (0, L.Ay)(t)), (s = R.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, P.BP)(r.id),
        u = (0, P.WG)(r.id),
        c = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, d.cf)(
            [b],
            () => ({
                isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        h = null,
        _ = null != c && null != a && !A;
    null == o || E
        ? _ && (h = (0, l.jsx)(n_, { stageInstance: c, channel: a }))
        : o.entity_type === G.Ps.STAGE_INSTANCE && _
          ? (h = (0, l.jsx)(n_, { stageInstance: c, channel: a }))
          : o.entity_type === G.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nA, { guildEvent: o }))
            : o.entity_type === G.Ps.VOICE && null != a && (h = (0, l.jsx)(nd, { guildEvent: o, channel: a }));
    let g = r.features.has(y.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nc, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nC(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("77598"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: eJ.intl.string(eJ.t["1+hiP6"]),
        cta: eJ.intl.string(eJ.t.hvVgAZ),
        trackingSource: y.kZU.HUB_LINK_NOTICE,
        type: y.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nm = n(717421),
    nS = n(450510);
let nT = (e) => {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tc, {
        guild: n,
        onDismissed: () => {
            (0, nS.sF)(nS._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, nS.sF)(nS._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t3.av)(t), (0, t1.uh)(t.getGuildId(), t.id));
        },
        title: eJ.intl.string(eJ.t["4Y2AS7"]),
        message: eJ.intl.string(eJ.t.wTsxTS),
        cta: eJ.intl.string(eJ.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: y.n5X.HUB_STUDY_ROOM,
    });
};
var np = n(994190);
let nM = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [f.Ay],
            () =>
                f.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t0.gU)(n);
    return (0, l.jsx)(no, {
        heading: eJ.intl.string(eJ.t["X2K3/4"]),
        topic: t,
        location: eJ.intl.string(eJ.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: np.K }) : null,
        children: (0, l.jsx)(nN, { channel: n, speakers: i, voiceType: ng.STUDY_ROOM }),
    });
};
var nO = n(48686);
function nL(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nS.HP], () => nS.HP.hasHotspot(nS._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nO.Q)(t.guild_id),
        r = (0, tJ.Ay)(t),
        o = (0, nm.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i ? (0, l.jsx)(nT, { channel: t, guild: n }) : (0, l.jsx)(nM, { name: `📚☕ ${r}`, channel: t }),
    });
}
let nR = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([ek.Ay], () => ek.Ay.getChannels(t.id)[ek.vM][0]),
        i = (0, d.bG)([x.A], () => null != n && x.A.can(y.xBc.CONNECT, n.channel));
    return t.features.has(y.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nL, { channel: n.channel, guild: t })
        : null;
};
function nx(e) {
    let { guild: t } = e,
        n = () => j.A.dismissNotice(t.id);
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: n,
        cta: eJ.intl.string(eJ.t.RzWDqY),
        message: eJ.intl.format(eJ.t["kQ/MDl"], {}),
        type: y.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), eQ.A.open(t.id, y.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nf = n(587895),
    nG = n(143582);
function nU(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n),
        s = () => (0, nG.Hc)(n.id),
        a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nf.A], () => {
            let e = [];
            for (let t of a) {
                let n = nf.A.getApplication(t);
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
          (0, l.jsx)(tc, {
              guild: n,
              onDismissed: s,
              message: t,
              type: y.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), eQ.A.open(n.id, y.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: eJ.intl.string(eJ.t.Rr3MAe),
          }));
}
var nD = n(628287);
let nb = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), N.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: n,
        onClick: () => eQ.A.open(t.id, y.BEX.COMMUNITY),
        message: eJ.intl.string(eJ.t["2klD0Z"]),
        trackingSource: y.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: y.n5X.PUBLIC_UPSELL,
        image: nD,
        cta: eJ.intl.string(eJ.t.hvVgAZ),
    });
};
var nP = n(536194),
    nH = n(780964),
    ny = n(858897);
class nv extends r.PureComponent {
    render() {
        return (0, l.jsx)(tc, {
            guild: this.props.guild,
            onClick: () => (0, ny.openUserSettings)(nH.X.ACCOUNT_PANEL),
            message: eJ.intl.format(eJ.t["oCd+at"], {}),
            cta: eJ.intl.string(eJ.t["8dCrV9"]),
            trackingSource: y.kZU.GUILD_MFA_WARNING,
            type: y.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nB = n(720149);
class nj extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, g.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("80813"),
                n.e("83818"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: y.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t4.A.getChannelId(),
            t = eJ.intl.formatToPlainString(eJ.t.DEn7nu, { invitePeople: eJ.intl.string(eJ.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nB.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${eJ.intl.string(eJ.t.VWqWZQ)}
${eJ.intl.string(eJ.t["0Lgb/K"])}`;
        return (0, l.jsx)(tc, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: eJ.intl.string(eJ.t.Sd8Ixw),
            trackingSource: y.kZU.INVITE_NOTICE,
            type: y.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nw = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), N.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tc, {
        guild: t,
        onDismissed: n,
        message: eJ.intl.format(eJ.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tA.A.getArticleURL(y.MVz.MAX_MEMBERS),
        }),
        type: y.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nk = n(475358),
    nV = n(675704),
    nX = n(793322);
let nF = (e) => {
    let t = (0, l.jsx)(nk.e, { shortcut: nV.R.binds["0"], keyClassName: td.Eb });
    return (0, l.jsx)(tc, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nX.WU)("CHANNEL_NOTICE"),
        message: eJ.intl.string(eJ.t.Qhk8cs),
        cta: t,
        trackingSource: y.kZU.QUICK_SWITCHER_NOTICE,
        type: y.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nK = n(174768);
class nW extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(X.A), this.syncWith([X.A], y.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(y.GuildFeatures.BANNER) && Date.now() - t >= y.D2K;
    }
}
let nY = new nW(N.h);
class nz extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(x.A), this.syncWith([x.A], y.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= y.D2K && x.A.can(y.xBc.MANAGE_GUILD, e);
    }
}
let nZ = new nz(N.h);
var nq = n(731667);
function n$() {
    return !0;
}
class nQ extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(x.A), this.syncWith([x.A], n$);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= y.D2K && x.A.can(y.xBc.ADMINISTRATOR, e);
    }
}
let nJ = new nQ(N.h),
    n0 = "lastHiddenChannelNotice",
    n1 = [
        { type: y.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: y.n5X.GUILD_BOOSTING,
            store: nZ,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: y.n5X.GUILD_BANNER, store: nY, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: y.n5X.INVITE, store: nJ, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: y.n5X.HUB_LINK, store: nq.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: y.n5X.QUICKSWITCHER, store: nK.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: y.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: y.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n3 = n1.map((e) => e.store).filter(t6.Vq),
    n8 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n2(e) {
    e.stopPropagation();
}
let n4 = [];
function n5(e) {
    var t, n;
    let i,
        s,
        { guild: a } = e,
        [o, c] = r.useState(k.w.get(n0) ?? 0),
        A =
            ((n = t = a.id),
            (i = tL.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)(
                [x.A, tO],
                () =>
                    !!i && !!x.A.canWithPartialContext(y.xBc.ADMINISTRATOR, { guildId: t }) && tO.hasUnclaimedGames(t),
                [t, i],
            )),
            r.useMemo(() => {
                let e = [];
                return s && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n4;
            }, [s])),
        [E, h] = (0, ei.ww)(A, a.id, eE.m.CHANNEL_NOTICES, !0),
        _ = null != E,
        g = (0, d.yK)(
            n3,
            () =>
                _
                    ? []
                    : n1
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(a, o) && !n8.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [a, o, _],
        ),
        [N, I] = (0, ei.kn)(g, eE.m.CHANNEL_NOTICES),
        C = E ?? N,
        m = null != E ? h : I,
        S = r.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n0, e), c(e), m(eE.i.UNKNOWN);
        }, [m]),
        T = (() => {
            switch (C) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nC, { guild: a, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nj, { guild: a, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tX, { guild: a, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nF, { guild: a, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tw, { guild: a, markAsDismissed: S });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tE, { guild: a, markAsDismissed: () => m(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(ty, { guild: a, markAsDismissed: m });
                default:
                    return null;
            }
        })();
    return null == T ? null : (0, l.jsx)("div", { onContextMenu: n2, children: T });
}
let n6 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nb, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nw, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nI, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nv, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(nx, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nU, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nR, { guild: t });
    }
    return nP.P.isDisallowPopupsSet() ? null : (0, l.jsx)(n5, { guild: e.guild });
};
var n7 = n(532233);
function n9(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: n7.k, ref: i, children: (0, l.jsx)(n6, { guild: t }) })
    );
}
var ie = n(66933),
    it = n(846930),
    ii = n(153822);
let is = "server-settings",
    il = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ir extends r.PureComponent {
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
            N.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = ey.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = ey.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            N.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
                (0, I.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("87141"), n.e("60497")]).then(n.bind(n, 908424));
                    return (t) => (0, l.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("9004"), n.e("19690"), n.e("45322"), n.e("10758")]).then(
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
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("73432"),
                    n.e("94232"),
                    n.e("15652"),
                    n.e("47042"),
                    n.e("77598"),
                    n.e("43763"),
                    n.e("28592"),
                    n.e("78220"),
                    n.e("93816"),
                    n.e("80813"),
                    n.e("19364"),
                    n.e("69273"),
                    n.e("77083"),
                    n.e("63009"),
                    n.e("25385"),
                    n.e("25806"),
                    n.e("45650"),
                    n.e("97189"),
                    n.e("48486"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("63232"),
                    n.e("55918"),
                    n.e("15274"),
                    n.e("79705"),
                    n.e("74187"),
                    n.e("32245"),
                    n.e("76032"),
                    n.e("61748"),
                    n.e("42987"),
                    n.e("8641"),
                    n.e("57568"),
                    n.e("58376"),
                    n.e("84200"),
                    n.e("33217"),
                    n.e("78304"),
                    n.e("17116"),
                    n.e("32292"),
                    n.e("87845"),
                    n.e("35636"),
                    n.e("23491"),
                    n.e("47234"),
                    n.e("83030"),
                    n.e("61175"),
                    n.e("49937"),
                    n.e("56574"),
                    n.e("65533"),
                    n.e("83818"),
                    n.e("80186"),
                    n.e("23924"),
                    n.e("15510"),
                    n.e("48226"),
                    n.e("19402"),
                    n.e("49681"),
                    n.e("96382"),
                    n.e("22687"),
                    n.e("62052"),
                    n.e("63202"),
                    n.e("82596"),
                    n.e("20287"),
                    n.e("28367"),
                    n.e("35429"),
                    n.e("10471"),
                    n.e("40851"),
                    n.e("64827"),
                    n.e("30938"),
                    n.e("23808"),
                    n.e("11301"),
                    n.e("60235"),
                    n.e("61737"),
                    n.e("79428"),
                    n.e("29963"),
                    n.e("47834"),
                    n.e("98329"),
                    n.e("20317"),
                    n.e("84569"),
                    n.e("2368"),
                    n.e("27084"),
                    n.e("24313"),
                    n.e("48405"),
                    n.e("63185"),
                    n.e("19551"),
                    n.e("84150"),
                    n.e("45959"),
                    n.e("18573"),
                    n.e("55057"),
                    n.e("37794"),
                    n.e("26073"),
                    n.e("7743"),
                    n.e("34303"),
                    n.e("48172"),
                    n.e("28866"),
                    n.e("54961"),
                    n.e("8304"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("55936"),
                    n.e("11566"),
                    n.e("21106"),
                    n.e("31988"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("58007"),
                    n.e("5812"),
                    n.e("17363"),
                    n.e("55411"),
                    n.e("93103"),
                    n.e("58337"),
                    n.e("26437"),
                    n.e("91763"),
                    n.e("13708"),
                    n.e("76602"),
                    n.e("28229"),
                    n.e("91007"),
                    n.e("76418"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("88342"),
                    n.e("69747"),
                    n.e("40258"),
                    n.e("20683"),
                    n.e("66495"),
                    n.e("91146"),
                    n.e("42724"),
                    n.e("39970"),
                    n.e("42451"),
                    n.e("8371"),
                    n.e("8555"),
                    n.e("86127"),
                    n.e("39851"),
                    n.e("72789"),
                    n.e("29871"),
                    n.e("17249"),
                    n.e("41250"),
                    n.e("84971"),
                    n.e("53917"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("15423"),
                    n.e("26295"),
                    n.e("88599"),
                    n.e("36863"),
                    n.e("1518"),
                    n.e("67861"),
                    n.e("15186"),
                    n.e("98765"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("37187"),
                    n.e("71273"),
                    n.e("27779"),
                    n.e("75842"),
                    n.e("12743"),
                    n.e("10957"),
                    n.e("55973"),
                    n.e("20590"),
                    n.e("45172"),
                    n.e("65437"),
                    n.e("34983"),
                    n.e("63235"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("80830"),
                    n.e("86672"),
                    n.e("3589"),
                    n.e("86814"),
                    n.e("52548"),
                    n.e("22266"),
                    n.e("53984"),
                    n.e("80854"),
                    n.e("79780"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("46844"),
                    n.e("45413"),
                    n.e("22822"),
                    n.e("75627"),
                    n.e("90664"),
                    n.e("79745"),
                    n.e("34150"),
                    n.e("64850"),
                    n.e("72401"),
                    n.e("70104"),
                    n.e("68802"),
                    n.e("52617"),
                    n.e("8563"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("14285"),
                    n.e("78100"),
                    n.e("78453"),
                    n.e("8362"),
                    n.e("80149"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("87046"),
                    n.e("12542"),
                    n.e("501"),
                    n.e("46769"),
                    n.e("33297"),
                    n.e("73384"),
                    n.e("86243"),
                    n.e("82783"),
                    n.e("7833"),
                    n.e("30788"),
                    n.e("48295"),
                    n.e("60249"),
                    n.e("4193"),
                    n.e("39171"),
                    n.e("25246"),
                    n.e("37021"),
                    n.e("21049"),
                    n.e("8377"),
                    n.e("28610"),
                    n.e("44795"),
                    n.e("95370"),
                    n.e("97784"),
                    n.e("10014"),
                    n.e("84783"),
                    n.e("44928"),
                    n.e("33416"),
                    n.e("83952"),
                    n.e("37752"),
                    n.e("3217"),
                    n.e("47678"),
                    n.e("5557"),
                    n.e("44780"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("93907"),
                    n.e("59957"),
                    n.e("89916"),
                    n.e("90301"),
                    n.e("49145"),
                    n.e("68763"),
                    n.e("15188"),
                    n.e("9004"),
                    n.e("18489"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("60773"),
                    n.e("92295"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("50535"),
                    n.e("81202"),
                    n.e("26001"),
                    n.e("99549"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("8018"),
                    n.e("79211"),
                    n.e("30997"),
                    n.e("28136"),
                    n.e("57458"),
                    n.e("90213"),
                    n.e("69765"),
                    n.e("1243"),
                    n.e("62304"),
                    n.e("16084"),
                    n.e("38090"),
                    n.e("29080"),
                    n.e("44057"),
                    n.e("43116"),
                    n.e("27659"),
                    n.e("10943"),
                    n.e("15920"),
                    n.e("68530"),
                    n.e("3930"),
                    n.e("78046"),
                    n.e("3663"),
                    n.e("38601"),
                    n.e("52212"),
                    n.e("66580"),
                    n.e("80093"),
                    n.e("73669"),
                    n.e("66016"),
                    n.e("83518"),
                    n.e("22547"),
                    n.e("82486"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("7775"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("3304"),
                    n.e("33097"),
                    n.e("5896"),
                    n.e("77602"),
                    n.e("10262"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("29569"),
                    n.e("36002"),
                    n.e("43233"),
                    n.e("41786"),
                    n.e("91643"),
                    n.e("63726"),
                    n.e("71329"),
                    n.e("37038"),
                    n.e("56373"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("30501"),
                    n.e("8364"),
                    n.e("66147"),
                    n.e("89541"),
                    n.e("74337"),
                    n.e("52823"),
                    n.e("56967"),
                    n.e("47011"),
                    n.e("31203"),
                    n.e("66913"),
                    n.e("71719"),
                    n.e("19690"),
                    n.e("13848"),
                    n.e("39214"),
                    n.e("99108"),
                    n.e("14878"),
                    n.e("88307"),
                    n.e("26508"),
                    n.e("14656"),
                    n.e("39855"),
                    n.e("73091"),
                    n.e("14530"),
                    n.e("86692"),
                    n.e("75933"),
                    n.e("16237"),
                    n.e("16373"),
                    n.e("81398"),
                    n.e("24484"),
                    n.e("44943"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("48111"),
                    n.e("90152"),
                    n.e("24019"),
                    n.e("87973"),
                    n.e("57197"),
                    n.e("14863"),
                    n.e("71167"),
                    n.e("12390"),
                    n.e("13446"),
                    n.e("34409"),
                    n.e("32607"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("98371"),
                    n.e("65011"),
                    n.e("17699"),
                    n.e("57032"),
                    n.e("45322"),
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
            t = this.props.guild?.features.has(y.GuildFeatures.HUB);
        !e && t && (0, en.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eE.i.AUTO });
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
            n.e("32607"),
            n.e("65011"),
            n.e("17699"),
            n.e("57032"),
            n.e("87141"),
            n.e("9242"),
            n.e("93829"),
            n.e("39817"),
        ]).then(n.bind(n, 587664));
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
            : (0, l.jsx)(tt, {
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
                  children: (0, l.jsx)(ev.A, {
                      tutorialId: is,
                      position: "bottom",
                      inlineSpecs: il,
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
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, l.jsx)(A.A, {
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
                  children: (0, l.jsx)(_.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: _.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, eo.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: s, ...r } = i;
                          return (0, l.jsx)(ez.Ay, {
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
            i = null != t && (0, eW.A)(t);
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
            return (0, l.jsx)(it.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(y.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: ii.r0,
                    children: (0, l.jsx)(eL.A, { guild: t, channel: n ?? ek.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, el.ai)(t.id) ? eY.T : eY.B;
            return (0, l.jsx)(e, {
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
            t = (0, el.YC)(e);
        return (0, l.jsxs)("nav", {
            className: ii.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eJ.intl.formatToPlainString(eJ.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(n9, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
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
        A,
        E,
        h,
        _,
        N,
        I,
        T,
        p,
        M,
        O,
        { guildId: L, hideSelectedChannel: f, selectedChannelId: G } = e,
        U = (0, ea.$)("favorite-guild-header-context"),
        { hasAccess: D } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(L)),
        P = (0, er.A)(L),
        H = (0, d.bG)([ej.A], () => ej.A.getGuildDimensions(L).scrollTo),
        v = (0, d.bG)([eF.A], () => eF.A.getChannelId()),
        j = (0, d.bG)([x.A], () => x.A.can(y.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([ew.A], () => ew.A.isUnavailable(L)),
        k = (0, d.bG)([eI.default], () => eI.default.getCurrentUser()),
        { enableStudyGroup: V } = B(b),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!K),
        z = (0, C.A)(L),
        { analyticsLocations: Z } = (0, S.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        L !== z && Y(!K);
    }, [L, z, K]);
    let [q, $] = (0, et.Ay)(
            (e) => [
                n1.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        Q = ee(b),
        J = (0, g.useModalsStore)(g.hasAnyModalOpenSelector),
        eC = (0, d.bG)([eV.A], () => eV.A.hasLayers()),
        em = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([eB.A], () => eB.A.shouldShow(is)),
        eT =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (i = (0, d.bG)([eI.default], () => eI.default.getCurrentUser())),
            (s = null != t && (0, eN.bM)(t, i)),
            (a = (0, eg.oS)()),
            s &&
                (t?.features.has(y.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(y.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ep = b?.features.has(y.GuildFeatures.HUB) === !0,
        eM = j && b?.features.has(y.GuildFeatures.DISCOVERABLE) === !0,
        eL = (0, d.bG)(
            [eO, eV.A],
            () => null != b && null != k && j && !eV.A.hasLayers() && eO.shouldShowGuildTemplateDirtyTooltip(L),
        ),
        ey = (0, d.bG)([R.A], () => R.A.getChannel(G)),
        { isPopoutOpen: ev } = (0, eo.S)(),
        ek = b?.features.has(y.GuildFeatures.COMMUNITY) ?? !1,
        eW = eK.Ay.isNewUser(k),
        eY = W && !eW;
    (c = (0, ed.TZ)(b)),
        (A = F.dR.some((e) => !(0, el.ai)(b?.id) && ec.Ib(e, b))),
        (E = b?.defaultMessageNotifications === y.orn.ALL_MESSAGES),
        (h = (0, eA.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? y.dJq)),
        (_ = c && (A || E) && !h),
        (N = r.useCallback(() => {
            (0, eA._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? y.dJq, !0, eE.i.DISMISS);
        }, [b])),
        (I = r.useRef(!1)),
        r.useEffect(() => {
            _ &&
                !I.current &&
                ((0, g.openModalLazy)(
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
                    { onCloseCallback: N },
                ),
                eu.default.track(y.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? y.dJq,
                }),
                (I.current = !0));
        }, [A, b, N, E, _]);
    let ez = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eZ =
            ((T = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (p = (0, eh._Y)(L)),
            (M =
                T?.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                T?.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (O = (0, e_.X9)(T)),
            M && O && p),
        eq = (0, d.bG)([eF.A], () => eF.A.getChannelId()),
        e$ = (0, d.bG)([eX.A], () => eX.A.desyncedVoiceStatesCount),
        eQ = (0, eP.A)(L);
    ie.A.useConfig({ guildId: L, location: "guild_sidebar" });
    let eJ = (0, ex.C$)(L, "GuildSidebar"),
        e0 = (0, d.bG)([X.A], () => X.A.getGuild(L)?.features.has(y.GuildFeatures.GAME_SERVERS) ?? !1, [L]),
        e1 = (0, eG.J)("GuildSidebar"),
        e3 = (0, ef.S)(L, "GuildSidebar"),
        e8 = (0, eH.A)(),
        e2 = (0, eD.A)(L),
        e4 = !1 === eQ && e8 && null != e2,
        e5 = (0, eb.A)(L),
        e6 = !1 === eQ && e8 && null != e5,
        e7 = [];
    ep && e7.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eT && e7.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eM && e7.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eQ && e7.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        eJ && !e0 && !1 === eQ && e7.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eJ && e1 && !1 === eQ && e7.push(u.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eJ && !e0 && e3 && !1 === eQ && e7.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        eZ && e7.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [e9, te] = (0, ei.kn)(e7, eE.m.GUILD_HEADER_TOOLTIPS),
        tt = null == e9,
        [tn, ti] = (0, ei.D8)(
            tt && e4 ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            L,
            { cooldownDurationMs: eU.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [ts, tl] = (0, ei.D8)(
            tt && tn !== u.M.BOOST_TO_UNLOCK_COACHMARK && e6 ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            L,
            { cooldownDurationMs: eU.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tr = r.useMemo(
            () =>
                null != e9
                    ? { contentType: e9, data: null, markAsDismissed: te }
                    : tn === u.M.BOOST_TO_UNLOCK_COACHMARK && null != e2
                      ? { contentType: tn, data: { featuredPowerup: e2 }, markAsDismissed: ti }
                      : ts === u.M.EXPIRING_POWERUP_COACHMARK && null != e5
                        ? { contentType: ts, data: { featuredExpiringPowerup: e5 }, markAsDismissed: tl }
                        : null,
            [e9, tn, ts, e2, e5, te, ti, tl],
        );
    return (0, l.jsx)(ir, {
        guildId: L,
        hideSelectedChannel: f,
        guild: b,
        scrollToChannel: H,
        selectedChannelId: f ? null : G,
        selectedChannel: ey,
        selectedVoiceChannelId: v,
        voiceStates: P,
        rtcConnectedChannelId: eq,
        rtcDesyncedVoiceStatesCount: e$,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != Q || q,
        anyLayerOpen: J || eC || em,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eL,
        showNewUnreadsBar: ek,
        isHeaderPopoutOpen: ev,
        enableStudyGroup: V,
        isGuildHeaderDismissibleTooltipShown: $,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: ez,
        shouldRenderBurstCoachmark: eY,
        guildHeaderContentDescriptor: tr,
        onFavoriteGuildContextMenu: U,
        hasFavoritesAccess: D,
    });
}
