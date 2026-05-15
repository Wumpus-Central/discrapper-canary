n.r(t), n.d(t, { default: () => ir }), n(321073);
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(873174),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    g = n(922016),
    _ = n(192308),
    N = n(228366),
    I = n(442433),
    C = n(475743),
    m = n(793574),
    S = n(688810),
    T = n(285059),
    p = n(63995);
n(113783);
var M = n(518769),
    O = n(446600),
    L = n(624265);
n(616356);
var R = n(734057),
    f = n(576705),
    x = n(607567),
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
var y = n(600975),
    H = n(652215);
let v = (0, y.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    B = (e) => (
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
        this.waitFor(f.A, X.A, V.A), this.syncWith([f.A, X.A, V.A], H.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = V.A.getMemberCount(e.id);
        return (
            !W.has(e.id) &&
            null != t &&
            t >= F.dH &&
            f.A.can(H.xBc.ADMINISTRATOR, e) &&
            !e.features.has(H.GuildFeatures.COMMUNITY)
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
        this.waitFor(f.A, X.A, V.A),
            this.syncWith([f.A, X.A, V.A], H.tEg),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_250),
            (q[H.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(H.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = V.A.getMemberCount(e.id) ?? 0,
            n = f.A.can(H.xBc.ADMINISTRATOR, e);
        return !q[H.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let Q = new $(N.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!q[H.n5X.MAX_MEMBER_COUNT].has(t))
            return q[H.n5X.MAX_MEMBER_COUNT].add(t), k.w.set(H.n5X.MAX_MEMBER_COUNT, q[H.n5X.MAX_MEMBER_COUNT]), !0;
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
        A = u && !e?.features.has(H.GuildFeatures.HUB),
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
var et = n(558845),
    en = n(826673),
    ei = n(131607),
    es = n(313281),
    el = n(5180),
    er = n(250719),
    ea = n(3026),
    eo = n(72152),
    ed = n(15073),
    eu = n(174459),
    ec = n(488926),
    eA = n(45780),
    eE = n(49999),
    eh = n(567305),
    eg = n(555325),
    e_ = n(469993),
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
    eR = n(663066),
    ef = n(488803),
    ex = n(764322),
    eG = n(661881),
    eU = n(379229),
    eD = n(229548),
    eb = n(139032),
    eP = n(52260),
    ey = n(363487),
    eH = n(342220),
    ev = n(320989),
    eB = n(728321),
    ej = n(79858),
    ew = n(72314),
    ek = n(919638),
    eV = n(808728),
    eX = n(186111),
    eF = n(584569),
    eK = n(763827),
    eW = n(428262),
    eY = n(885631),
    ez = n(849380),
    eZ = n(83297),
    eq = n(562708),
    e$ = n(702841),
    eQ = n(139286),
    eJ = n(468689),
    e0 = n(375708),
    e1 = n(330766);
function e3(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, e$.bG)([X.A, eI.default], () => {
            let e = eI.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, eN.bM)(n, e);
        });
    return (
        (0, eQ.A)({
            type: eq.ImpressionTypes.POPOUT,
            name: eq.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e0.intl.string(e0.t.C0m4rQ),
            body: e0.intl.string(e0.t.zOHfEX),
            graphic: { type: "image", src: e1 },
            actions: [
                {
                    text: e0.intl.string(e0.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        eJ.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e6 = n(338854);
function e5(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e6.H, {
        targetElementRef: i,
        title: e0.intl.string(e0.t.gCgirr),
        body: e0.intl.string(e0.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e0.intl.string(e0.t.BQq86h),
            variant: "primary",
            onClick: () => {
                eJ.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS, void 0, H.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var e8 = n(834730),
    e4 = n(821609),
    e2 = n(383470);
function e9(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: e2.kL,
        children: [
            (0, l.jsx)("div", { className: e2.Wn }),
            (0, l.jsx)(e8.E, { variant: "text-sm/normal", className: e2.Qs, children: e0.intl.string(e0.t.rdzeVP) }),
            (0, l.jsx)(e4.$, {
                variant: "overlay-primary",
                text: e0.intl.string(e0.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var e7 = n(166978);
function te(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e0.intl.string(e0.t.Hgd22r),
        body: e0.intl.string(e0.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e0.intl.string(e0.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    eJ.A.open(t.id, H.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function tt(e) {
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
let tn = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e7.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(tt, {
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
                    return (0, l.jsx)(tt, {
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
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e3, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(te, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(tt, {
                        renderPopout: (0, l.jsx)(e9, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e5, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var ti = n(735438),
    ts = n.n(ti),
    tl = n(862482),
    tr = n(939249),
    ta = n(789645),
    to = n(534514),
    td = n(95561),
    tu = n(284245);
let tc = ts().debounce(td.Ay.trackWithMetadata, 500),
    tA = (e) => {
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
            tc(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let _ = null;
        "function" == typeof h
            ? (_ = h())
            : null != h &&
              (_ = (0, l.jsx)(tl.$n, {
                  "data-migration-pending": !0,
                  className: tu.HM,
                  size: tl.$n.Sizes.SMALL,
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
        let N = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: tu.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tr.D, {
                          onClick: () => {
                              td.Ay.trackWithMetadata(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: tu.VN,
                          "aria-label": e0.intl.string(e0.t.WAI6xu),
                          children: (0, l.jsx)(ta.P, { size: "md", color: "currentColor", className: tu.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tu.ZS,
                        style: { marginTop: `${d}px`, marginLeft: N, marginRight: N },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tu.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tu.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(to.D, { variant: "heading-md/semibold", className: tu.DD, children: n })
                            : null,
                        (0, l.jsx)(e8.E, { variant: "text-sm/normal", children: i }),
                        _,
                    ],
                }),
            ],
        });
    };
var tE = n(975571);
function th(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tA, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            open(tE.A.getArticleURL(H.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN);
        },
        title: e0.intl.string(e0.t.YMgaJt),
        message: e0.intl.string(e0.t["AV/9eW"]),
        cta: e0.intl.string(e0.t.hvVgAZ),
        trackingSource: H.kZU.LINKED_ROLES_ADMIN_NUX,
        type: H.n5X.LINKED_ROLES_ADMIN,
    });
}
var tg = n(158390),
    t_ = n(636537),
    tN = n(927813);
let tI = null;
class tC extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tI;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tI?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tI?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tI) return [];
        let e = tI;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tm = new tC(N.h, {
        LOGOUT: function () {
            tI = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tI = t;
        },
    }),
    tS = [];
async function tT() {
    let { body: e } = await t_.Bo.get({ url: H.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    N.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tp = (0, d.UT)(tm, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tm.getMap(),
    load: () => tT(),
    staleAfter: tN.A.Seconds.DAY,
    retryConfig: { backoff: () => new tg.A(5 * tN.A.Millis.MINUTE), maxRetries: 10 },
});
function tM(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tp(t);
    return n?.[e] ?? tS;
}
let tO = (0, y.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tL = n(509434),
    tR = n(975807),
    tf = n(201438),
    tx = n(194362),
    tG = n(307301),
    tU = n(661531),
    tD = n(841352);
function tb(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tD.kL,
        children: [
            (0, l.jsx)("div", { className: tD.j3, children: (0, l.jsx)("img", { className: tD.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tD.gm,
                children: (0, l.jsx)("div", {
                    className: tD.WA,
                    children: (0, l.jsx)(tG.j, { size: "sm", color: tU.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tP = n(140461);
function ty(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tM(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tf.A)(i, e0.intl.string(e0.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(H.GuildFeatures.VERIFIED) ? e0.intl.string(e0.t.uUARXe) : e0.intl.string(e0.t["0Dx29f"]);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: e0.intl.format(e0.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tP.m,
            children: [e0.intl.string(e0.t["2u6ZlY"]), (0, l.jsx)(tL.I, { size: "xs", color: "currentColor" })],
        }),
        type: H.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tb, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tx.a)(H.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tR.A)(e);
        },
    });
}
var tH = n(631305),
    tv = n(473145),
    tB = n(625633);
function tj(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tv.Os)(t, H.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: e0.intl.string(e0.t.oPAx73),
        message: e0.intl.format(e0.t.AcaNYw, { boostsNeeded: i }),
        type: H.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tH.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tB.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tw = n(509536);
class tk extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tw.K4)({ guildId: e.id, location: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tA, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e0.intl.string(e0.t.hlitVQ) : e0.intl.string(e0.t.XHtaDD),
            cta: e0.intl.string(e0.t["vqb+H1"]),
            trackingSource: H.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: H.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tV = d.Ay.connectStores([V.A], (e) => {
    let { guild: t } = e;
    return { memberCount: V.A.getMemberCount(t.id) };
})(tk);
var tX = n(503698),
    tF = n.n(tX),
    tK = n(933832),
    tW = n(782603),
    tY = n(81466),
    tz = n(116085),
    tZ = n(597601),
    tq = n(451394),
    t$ = n(104171),
    tQ = n(47167),
    tJ = n(713654),
    t0 = n(976860),
    t1 = n(790535),
    t3 = n(110618),
    t6 = n(495544),
    t5 = n(309010),
    t8 = n(312006),
    t4 = n(403362),
    t2 = n(707592),
    t9 = n(698441),
    t7 = n(935159),
    ne = n(11550),
    nt = n(435328),
    nn = n(563312),
    ni = n(9448),
    ns = n(647090),
    nl = n(666394),
    nr = n(28164);
let na = r.memo(function (e) {
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
        className: nr.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tF()(nr.fI, nr.pF),
                children: [
                    (0, l.jsx)("div", { className: nr.Ok }),
                    (0, l.jsx)(e8.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nr.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tr.D, {
                            onClick: o,
                            className: nr.ut,
                            "aria-label": e0.intl.string(e0.t.cpT0Cq),
                            children: (0, l.jsx)(ta.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(to.D, { color: "text-strong", variant: "heading-md/semibold", className: nr.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tF()(nr.fI, nr.pF),
                children: [
                    i,
                    (0, l.jsx)(e8.E, { color: "none", variant: "text-xs/normal", className: nr.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(e8.E, {
                                    className: nr.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nr.zH,
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
function no(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, tQ.Ay)(n),
        s = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, tJ.gU)(n);
    return (0, l.jsx)(na, {
        onClickCloseIcon: () => (0, t7.iF)({ eventId: t?.id }),
        heading: e0.intl.string(e0.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nr.uE }) : null,
        children: (0, l.jsx)(n_, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nd(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, ns.G3)(t),
        s = (0, d.bG)([t9.Ay], () => t9.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([ne.A], () => ne.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, t7.pE)(t.id),
        (0, l.jsx)(e4.$, {
            onClick: function () {
                (0, nl.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, t7.Lx)(t.id), 1e3)),
                    eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e0.intl.string(e0.t.DlcqlU),
            icon: s ? tK.A : tW.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nu(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, ni.oF)(t),
        s = null != i ? (0, nt.l)(i, !0) : null,
        a = (0, ni.WN)(t),
        o = (0, tQ.Ay)(a),
        d = (0, tJ.gU)(a),
        { startTime: u, endTime: c } = (0, nn.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, ns.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e0.intl.formatToPlainString(e0.t.PQlCWk, { minutes: h })
                : e0.intl.string(e0.t.WINqKV)
            : e0.intl.formatToPlainString(e0.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            eu.default.track(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nr.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nr.fI,
                    children: [
                        (0, l.jsx)(tr.D, {
                            onClick: () => (0, t2.uR)({ eventId: t.id }),
                            className: nr.oP,
                            children: (0, l.jsx)(e8.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nr.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tr.D, {
                            onClick: () => {
                                eu.default.track(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, t7.Lx)(t.id);
                            },
                            className: nr.ut,
                            "aria-label": e0.intl.string(e0.t.cpT0Cq),
                            children: (0, l.jsx)(ta.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tF()(nr.fI, nr.pF),
                    children: [
                        (0, l.jsx)(tY.C, {
                            size: "custom",
                            color: "currentColor",
                            className: nr.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(e8.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nr.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tF()(nr.fI, nr.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nr.uE })
                            : (0, l.jsx)(tz.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nr.uE,
                              }),
                        (0, l.jsx)(e8.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nr.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nd, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nc(e) {
    let { guildEvent: t } = e,
        n = (0, ni.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(na, {
              onClickCloseIcon: () => (0, t7.iF)({ eventId: t?.id }),
              heading: e0.intl.string(e0.t["1+boPi"]),
              topic: t.name,
              location: (0, nt.l)(n, !0),
              locationIcon: (0, l.jsx)(tz.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nr.uE,
              }),
              children: (0, l.jsx)(nA, { guildEvent: t }),
          });
}
function nA(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, t2.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nr.PD,
        children: (0, l.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: e0.intl.string(e0.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nE(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nr.PD,
        children: (0, l.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, t1.av)(t), (0, t0.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nh(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, tQ.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        a = e0.intl.formatToPlainString(e0.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(na, {
        onClickCloseIcon: () => (0, t7.iF)({ stageId: t?.id }),
        heading: e0.intl.string(e0.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(tZ.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nr.uE,
        }),
        locationIcon: (0, l.jsx)(tq.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nr.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(n_, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var ng = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function n_(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([f.A], () => f.A.can(H.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t6.default, t5.A, t8.Ay], () => {
                let e = t6.default.getId();
                return t5.A.getVoiceChannelId() === t ? t8.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e0.intl.string(e0.t.VJlc0S);
    switch (s) {
        case 1:
            A = e0.intl.string(e0.t.VJlc0S);
            break;
        case 2:
            (A = e0.intl.string(e0.t.ZYO5OK)),
                c?.speaker ? (A = e0.intl.string(e0.t["/cnSFc"])) : null != c && (A = e0.intl.string(e0.t.btSGOj));
            break;
        case 3:
            A = e0.intl.string(e0.t.wBoE6L);
            break;
        default:
            (0, t4.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tF()(nr.fI, nr.pF),
                            children: [
                                (0, l.jsx)(t$.Ay, { guildId: a, users: o, showUserPopout: !0, size: t$.DN.SIZE_16 }),
                                (0, l.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nr.c8,
                                    children: (0, t3.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nE, { channel: n, label: A }),
              ],
          });
}
let nN = r.memo(function (e) {
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
        g = null != c && null != a && !A;
    null == o || E
        ? g && (h = (0, l.jsx)(nh, { stageInstance: c, channel: a }))
        : o.entity_type === G.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nh, { stageInstance: c, channel: a }))
          : o.entity_type === G.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nc, { guildEvent: o }))
            : o.entity_type === G.Ps.VOICE && null != a && (h = (0, l.jsx)(no, { guildEvent: o, channel: a }));
    let _ = r.features.has(H.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !_) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nu, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nI(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("80203"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: e0.intl.string(e0.t["1+hiP6"]),
        cta: e0.intl.string(e0.t.hvVgAZ),
        trackingSource: H.kZU.HUB_LINK_NOTICE,
        type: H.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var nC = n(717421),
    nm = n(450510);
let nS = (e) => {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tA, {
        guild: n,
        onDismissed: () => {
            (0, nm.sF)(nm._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, nm.sF)(nm._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t1.av)(t), (0, t0.uh)(t.getGuildId(), t.id));
        },
        title: e0.intl.string(e0.t["4Y2AS7"]),
        message: e0.intl.string(e0.t.wTsxTS),
        cta: e0.intl.string(e0.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: H.n5X.HUB_STUDY_ROOM,
    });
};
var nT = n(994190);
let np = function (e) {
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
        s = (0, tJ.gU)(n);
    return (0, l.jsx)(na, {
        heading: e0.intl.string(e0.t["X2K3/4"]),
        topic: t,
        location: e0.intl.string(e0.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nT.K }) : null,
        children: (0, l.jsx)(n_, { channel: n, speakers: i, voiceType: ng.STUDY_ROOM }),
    });
};
var nM = n(48686);
function nO(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nm.HP], () => nm.HP.hasHotspot(nm._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nM.Q)(t.guild_id),
        r = (0, tQ.Ay)(t),
        o = (0, nC.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nS, { channel: t, guild: n })
            : (0, l.jsx)(np, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nL = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eV.Ay], () => eV.Ay.getChannels(t.id)[eV.vM][0]),
        i = (0, d.bG)([f.A], () => null != n && f.A.can(H.xBc.CONNECT, n.channel));
    return t.features.has(H.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nO, { channel: n.channel, guild: t })
        : null;
};
function nR(e) {
    let { guild: t } = e,
        n = () => j.A.dismissNotice(t.id);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: n,
        cta: e0.intl.string(e0.t.RzWDqY),
        message: e0.intl.format(e0.t["kQ/MDl"], {}),
        type: H.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), eJ.A.open(t.id, H.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nf = n(587895),
    nx = n(143582);
function nG(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n),
        s = () => (0, nx.Hc)(n.id),
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
                  ? e0.intl.formatToPlainString(e0.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e0.intl.formatToPlainString(e0.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e0.intl.formatToPlainString(e0.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e0.intl.string(e0.t.MvfowF)),
          (0, l.jsx)(tA, {
              guild: n,
              onDismissed: s,
              message: t,
              type: H.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), eJ.A.open(n.id, H.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e0.intl.string(e0.t.Rr3MAe),
          }));
}
var nU = n(628287);
let nD = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), N.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: n,
        onClick: () => eJ.A.open(t.id, H.BEX.COMMUNITY),
        message: e0.intl.string(e0.t["2klD0Z"]),
        trackingSource: H.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: H.n5X.PUBLIC_UPSELL,
        image: nU,
        cta: e0.intl.string(e0.t.hvVgAZ),
    });
};
var nb = n(536194),
    nP = n(780964),
    ny = n(766075);
class nH extends r.PureComponent {
    render() {
        return (0, l.jsx)(tA, {
            guild: this.props.guild,
            onClick: () => (0, ny.openUserSettings)(nP.X.ACCOUNT_PANEL),
            message: e0.intl.format(e0.t["oCd+at"], {}),
            cta: e0.intl.string(e0.t["8dCrV9"]),
            trackingSource: H.kZU.GUILD_MFA_WARNING,
            type: H.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nv = n(720149);
class nB extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, _.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("74389"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: H.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t5.A.getChannelId(),
            t = e0.intl.formatToPlainString(e0.t.DEn7nu, { invitePeople: e0.intl.string(e0.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nv.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e0.intl.string(e0.t.VWqWZQ)}
${e0.intl.string(e0.t["0Lgb/K"])}`;
        return (0, l.jsx)(tA, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e0.intl.string(e0.t.Sd8Ixw),
            trackingSource: H.kZU.INVITE_NOTICE,
            type: H.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nj = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), N.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: n,
        message: e0.intl.format(e0.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tE.A.getArticleURL(H.MVz.MAX_MEMBERS),
        }),
        type: H.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nw = n(475358),
    nk = n(675704),
    nV = n(793322);
let nX = (e) => {
    let t = (0, l.jsx)(nw.e, { shortcut: nk.R.binds["0"], keyClassName: tu.Eb });
    return (0, l.jsx)(tA, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nV.WU)("CHANNEL_NOTICE"),
        message: e0.intl.string(e0.t.Qhk8cs),
        cta: t,
        trackingSource: H.kZU.QUICK_SWITCHER_NOTICE,
        type: H.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nF = n(174768);
class nK extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(X.A), this.syncWith([X.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(H.GuildFeatures.BANNER) && Date.now() - t >= H.D2K;
    }
}
let nW = new nK(N.h);
class nY extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(f.A), this.syncWith([f.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && f.A.can(H.xBc.MANAGE_GUILD, e);
    }
}
let nz = new nY(N.h);
var nZ = n(731667);
function nq() {
    return !0;
}
class n$ extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(f.A), this.syncWith([f.A], nq);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && f.A.can(H.xBc.ADMINISTRATOR, e);
    }
}
let nQ = new n$(N.h),
    nJ = "lastHiddenChannelNotice",
    n0 = [
        { type: H.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: H.n5X.GUILD_BOOSTING,
            store: nz,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: H.n5X.GUILD_BANNER, store: nW, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: H.n5X.INVITE, store: nQ, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: H.n5X.HUB_LINK, store: nZ.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: H.n5X.QUICKSWITCHER, store: nF.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: H.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: H.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n1 = n0.map((e) => e.store).filter(t4.Vq),
    n3 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n6(e) {
    e.stopPropagation();
}
let n5 = [];
function n8(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(k.w.get(nJ) ?? 0),
        g =
            ((n = t = A.id),
            (i = tO.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([f.A], () => f.A.canWithPartialContext(H.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tM(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n5;
            }, [c])),
        [_, N] = (0, ei.ww)(g, A.id, eE.m.CHANNEL_NOTICES, !0),
        I = null != _,
        C = (0, d.yK)(
            n1,
            () =>
                I
                    ? []
                    : n0
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n3.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, I],
        ),
        [m, S] = (0, ei.kn)(C, eE.m.CHANNEL_NOTICES),
        T = _ ?? m,
        p = null != _ ? N : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(nJ, e), h(e), p(eE.i.UNKNOWN);
        }, [p]),
        O = (() => {
            switch (T) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nI, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nB, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tV, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nX, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tj, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(th, { guild: A, markAsDismissed: () => p(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(ty, { guild: A, markAsDismissed: p });
                default:
                    return null;
            }
        })();
    return null == O ? null : (0, l.jsx)("div", { onContextMenu: n6, children: O });
}
let n4 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nD, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nj, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nN, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nH, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(nR, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nG, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nL, { guild: t });
    }
    return nb.P.isDisallowPopupsSet() ? null : (0, l.jsx)(n8, { guild: e.guild });
};
var n2 = n(532233);
function n9(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: n2.k, ref: i, children: (0, l.jsx)(n4, { guild: t }) })
    );
}
var n7 = n(66933),
    ie = n(846930),
    it = n(153822);
let ii = "server-settings",
    is = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class il extends r.PureComponent {
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
            (this.historyUnlisten = ev.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = ev.A.getHistory();
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
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
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
                    n.e("32824"),
                    n.e("79924"),
                    n.e("28951"),
                    n.e("60361"),
                    n.e("80203"),
                    n.e("29690"),
                    n.e("685"),
                    n.e("39655"),
                    n.e("77691"),
                    n.e("79149"),
                    n.e("54266"),
                    n.e("96527"),
                    n.e("93110"),
                    n.e("74103"),
                    n.e("5959"),
                    n.e("86028"),
                    n.e("95664"),
                    n.e("9432"),
                    n.e("45650"),
                    n.e("18556"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("31135"),
                    n.e("69177"),
                    n.e("8506"),
                    n.e("333"),
                    n.e("15615"),
                    n.e("79705"),
                    n.e("73953"),
                    n.e("33957"),
                    n.e("48157"),
                    n.e("42971"),
                    n.e("28643"),
                    n.e("47459"),
                    n.e("40671"),
                    n.e("74389"),
                    n.e("52787"),
                    n.e("49579"),
                    n.e("41069"),
                    n.e("2661"),
                    n.e("43908"),
                    n.e("87845"),
                    n.e("85970"),
                    n.e("49089"),
                    n.e("45970"),
                    n.e("5007"),
                    n.e("1472"),
                    n.e("83852"),
                    n.e("80186"),
                    n.e("23924"),
                    n.e("42205"),
                    n.e("71091"),
                    n.e("19402"),
                    n.e("49681"),
                    n.e("96382"),
                    n.e("22687"),
                    n.e("62052"),
                    n.e("63202"),
                    n.e("82596"),
                    n.e("28367"),
                    n.e("10471"),
                    n.e("35429"),
                    n.e("63232"),
                    n.e("11301"),
                    n.e("60235"),
                    n.e("64827"),
                    n.e("30938"),
                    n.e("96643"),
                    n.e("94493"),
                    n.e("92789"),
                    n.e("47834"),
                    n.e("74016"),
                    n.e("19551"),
                    n.e("84569"),
                    n.e("6338"),
                    n.e("50689"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("26073"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("1368"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("31716"),
                    n.e("8751"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("50417"),
                    n.e("74548"),
                    n.e("93103"),
                    n.e("91763"),
                    n.e("76602"),
                    n.e("9233"),
                    n.e("28229"),
                    n.e("21921"),
                    n.e("76418"),
                    n.e("71210"),
                    n.e("42724"),
                    n.e("40258"),
                    n.e("66495"),
                    n.e("88342"),
                    n.e("86127"),
                    n.e("39970"),
                    n.e("91146"),
                    n.e("8555"),
                    n.e("46070"),
                    n.e("42451"),
                    n.e("72789"),
                    n.e("86814"),
                    n.e("17249"),
                    n.e("88599"),
                    n.e("53917"),
                    n.e("62422"),
                    n.e("25949"),
                    n.e("90365"),
                    n.e("71273"),
                    n.e("36863"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("9640"),
                    n.e("98765"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("82644"),
                    n.e("52548"),
                    n.e("3589"),
                    n.e("75842"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("28083"),
                    n.e("78453"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("53984"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("48760"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("30788"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("52617"),
                    n.e("2564"),
                    n.e("25246"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("23995"),
                    n.e("14285"),
                    n.e("8362"),
                    n.e("72401"),
                    n.e("62875"),
                    n.e("4744"),
                    n.e("5500"),
                    n.e("501"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("39171"),
                    n.e("37021"),
                    n.e("234"),
                    n.e("44780"),
                    n.e("5557"),
                    n.e("59957"),
                    n.e("83952"),
                    n.e("95340"),
                    n.e("62718"),
                    n.e("89916"),
                    n.e("90301"),
                    n.e("49145"),
                    n.e("57355"),
                    n.e("60773"),
                    n.e("9004"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("68763"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("26001"),
                    n.e("30997"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("28136"),
                    n.e("57458"),
                    n.e("93336"),
                    n.e("60358"),
                    n.e("87436"),
                    n.e("16084"),
                    n.e("1243"),
                    n.e("43116"),
                    n.e("27659"),
                    n.e("15920"),
                    n.e("68530"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("10943"),
                    n.e("66580"),
                    n.e("78046"),
                    n.e("80093"),
                    n.e("38601"),
                    n.e("73669"),
                    n.e("7775"),
                    n.e("22547"),
                    n.e("82486"),
                    n.e("45830"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("33097"),
                    n.e("3710"),
                    n.e("77602"),
                    n.e("10262"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("5896"),
                    n.e("29569"),
                    n.e("36002"),
                    n.e("43233"),
                    n.e("41786"),
                    n.e("91643"),
                    n.e("63726"),
                    n.e("71329"),
                    n.e("34409"),
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
                    n.e("73091"),
                    n.e("86692"),
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
                    n.e("87973"),
                    n.e("57197"),
                    n.e("14863"),
                    n.e("71167"),
                    n.e("12390"),
                    n.e("13446"),
                    n.e("61309"),
                    n.e("70284"),
                    n.e("94529"),
                    n.e("93305"),
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
            t = this.props.guild?.features.has(H.GuildFeatures.HUB);
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
            n.e("70284"),
            n.e("17699"),
            n.e("57032"),
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
            : (0, l.jsx)(tn, {
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
                  children: (0, l.jsx)(eB.A, {
                      tutorialId: ii,
                      position: "bottom",
                      inlineSpecs: is,
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
                                title: e0.intl.string(e0.t.Rk2RJk),
                                body: e0.intl.string(e0.t.sFSrFH),
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
                                title: e0.intl.string(e0.t.Q3qa4x),
                                body: e0.intl.string(e0.t.UyHD4O),
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
                          return (0, l.jsx)(eZ.Ay, {
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
            i = null != t && (0, eY.A)(t);
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
            return (0, l.jsx)(ie.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(H.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: it.r0,
                    children: (0, l.jsx)(eL.A, { guild: t, channel: n ?? eV.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, el.ai)(t.id) ? ez.T : ez.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eY.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, el.YC)(e);
        return (0, l.jsxs)("nav", {
            className: it.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e0.intl.formatToPlainString(e0.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(n9, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ir(e) {
    let t,
        i,
        s,
        a,
        c,
        A,
        E,
        h,
        g,
        N,
        I,
        T,
        p,
        M,
        O,
        { guildId: L, hideSelectedChannel: x, selectedChannelId: G } = e,
        U = (0, ea.$)("favorite-guild-header-context"),
        { hasAccess: D } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(L)),
        P = (0, er.A)(L),
        y = (0, d.bG)([ew.A], () => ew.A.getGuildDimensions(L).scrollTo),
        v = (0, d.bG)([eK.A], () => eK.A.getChannelId()),
        j = (0, d.bG)([f.A], () => f.A.can(H.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([ek.A], () => ek.A.isUnavailable(L)),
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
                n0.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        Q = ee(b),
        J = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        eC = (0, d.bG)([eX.A], () => eX.A.hasLayers()),
        em = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([ej.A], () => ej.A.shouldShow(ii)),
        eT =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (i = (0, d.bG)([eI.default], () => eI.default.getCurrentUser())),
            (s = null != t && (0, eN.bM)(t, i)),
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
        eM = j && b?.features.has(H.GuildFeatures.DISCOVERABLE) === !0,
        eL = (0, d.bG)(
            [eO, eX.A],
            () => null != b && null != k && j && !eX.A.hasLayers() && eO.shouldShowGuildTemplateDirtyTooltip(L),
        ),
        ev = (0, d.bG)([R.A], () => R.A.getChannel(G)),
        { isPopoutOpen: eB } = (0, eo.S)(),
        eV = b?.features.has(H.GuildFeatures.COMMUNITY) ?? !1,
        eY = eW.Ay.isNewUser(k),
        ez = W && !eY;
    (c = (0, ed.TZ)(b)),
        (A = F.dR.some((e) => !(0, el.ai)(b?.id) && ec.Ib(e, b))),
        (E = b?.defaultMessageNotifications === H.orn.ALL_MESSAGES),
        (h = (0, eA.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq)),
        (g = c && (A || E) && !h),
        (N = r.useCallback(() => {
            (0, eA._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq, !0, eE.i.DISMISS);
        }, [b])),
        (I = r.useRef(!1)),
        r.useEffect(() => {
            g &&
                !I.current &&
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
                    { onCloseCallback: N },
                ),
                eu.default.track(H.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? H.dJq,
                }),
                (I.current = !0));
        }, [A, b, N, E, g]);
    let eZ = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eq =
            ((T = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (p = (0, eh._Y)(L)),
            (M =
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (O = (0, eg.X9)(T)),
            M && O && p),
        e$ = (0, d.bG)([eK.A], () => eK.A.getChannelId()),
        eQ = (0, d.bG)([eF.A], () => eF.A.desyncedVoiceStatesCount),
        eJ = (0, ey.A)(L);
    n7.A.useConfig({ guildId: L, location: "guild_sidebar" });
    let e0 = (0, ef.C$)(L, "GuildSidebar"),
        e1 = (0, d.bG)([X.A], () => X.A.getGuild(L)?.features.has(H.GuildFeatures.GAME_SERVERS) ?? !1, [L]),
        e3 = e0 && !e1 && !1 === eJ,
        e6 = (0, eG.J)("GuildSidebar"),
        e5 = (0, ex.S)(L, "GuildSidebar"),
        e8 = e0 && !e1 && e5 && !1 === eJ,
        e4 = (0, eH.A)(),
        e2 = (0, eb.A)(L),
        e9 = !1 === eJ && e4 && null != e2,
        e7 = (0, eP.A)(L),
        te = !1 === eJ && e4 && null != e7,
        tt = [];
    ep && tt.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eT && tt.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eM && tt.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eJ && tt.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e3 && tt.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        e8 && tt.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        eq && tt.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tn, ti] = (0, ei.kn)(tt, eE.m.GUILD_HEADER_TOOLTIPS),
        [ts, tl] = (0, eD.vB)(e6 && e0 && !1 === eJ && !(0, el.ai)(L), eE.m.GUILD_HEADER_TOOLTIPS),
        [tr, ta] = (0, ei.D8)(
            e9 ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            L,
            { cooldownDurationMs: eU.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [to, td] = (0, ei.D8)(
            te ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            L,
            { cooldownDurationMs: eU.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tu = r.useMemo(
            () =>
                null != tn
                    ? { contentType: tn, data: null, markAsDismissed: ti }
                    : ts === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: ts, data: null, markAsDismissed: tl }
                      : tr === u.M.BOOST_TO_UNLOCK_COACHMARK && null != e2
                        ? { contentType: tr, data: { featuredPowerup: e2 }, markAsDismissed: ta }
                        : to === u.M.EXPIRING_POWERUP_COACHMARK && null != e7
                          ? { contentType: to, data: { featuredExpiringPowerup: e7 }, markAsDismissed: td }
                          : null,
            [tn, ts, tr, to, e2, e7, ti, tl, ta, td],
        );
    return (0, l.jsx)(il, {
        guildId: L,
        hideSelectedChannel: x,
        guild: b,
        scrollToChannel: y,
        selectedChannelId: x ? null : G,
        selectedChannel: ev,
        selectedVoiceChannelId: v,
        voiceStates: P,
        rtcConnectedChannelId: e$,
        rtcDesyncedVoiceStatesCount: eQ,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != Q || q,
        anyLayerOpen: J || eC || em,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eL,
        showNewUnreadsBar: eV,
        isHeaderPopoutOpen: eB,
        enableStudyGroup: V,
        isGuildHeaderDismissibleTooltipShown: $,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: eZ,
        shouldRenderBurstCoachmark: ez,
        guildHeaderContentDescriptor: tu,
        onFavoriteGuildContextMenu: U,
        hasFavoritesAccess: D,
    });
}
