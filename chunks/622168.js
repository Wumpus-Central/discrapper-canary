n.r(t), n.d(t, { default: () => id }), n(321073);
var i,
    s,
    l = n(627968),
    a = n(64700),
    r = n(873174),
    o = n(942381),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    _ = n(922016),
    g = n(192308),
    I = n(228366),
    N = n(442433),
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
var f = n(734057),
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
        a.useEffect(() => {
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
        this.waitFor(R.A, X.A, V.A), this.syncWith([R.A, X.A, V.A], H.tEg), (W = new Set(k.w.get(K)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = V.A.getMemberCount(e.id);
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
let q = { MAX_MEMBER_COUNT: new Set() };
class $ extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(R.A, X.A, V.A),
            this.syncWith([R.A, X.A, V.A], H.tEg),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_250),
            (q[H.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(H.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = V.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(H.xBc.ADMINISTRATOR, e);
        return !q[H.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let Q = new $(I.h, {
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
                n = f.A.getChannel(t[0]?.id),
                i = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, P.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: a } = (0, d.cf)(
                    [b],
                    () => ({
                        isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !a;
            return null != i && !l;
        })(t),
        l = (0, d.bG)([Z.A], () => Z.A.isVisible(e)),
        r = j.A.useShouldShowChannelNotice(t),
        o = (0, w.$s)(e),
        { enableStudyGroup: u } = B(e),
        c = o.length > 0,
        A = u && !e?.features.has(H.GuildFeatures.HUB),
        E = (0, P.WG)(t);
    if (
        (a.useEffect(() => {
            T.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != E) return 2;
    if (l) return 3;
    if (r) return 4;
    else if (c) return 5;
    else if (A) return 6;
    return null;
}
var et = n(558845),
    en = n(826673),
    ei = n(131607),
    es = n(313281),
    el = n(5180),
    ea = n(250719),
    er = n(3026),
    eo = n(72152),
    ed = n(15073),
    eu = n(174459),
    ec = n(488926),
    eA = n(45780),
    eE = n(49999),
    eh = n(567305),
    e_ = n(555325),
    eg = n(469993),
    eI = n(260509),
    eN = n(287809),
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
let eO = new eM(I.h, {
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
    ef = n(663066),
    eR = n(488803),
    ex = n(764322),
    eG = n(661881),
    eD = n(379229),
    eU = n(229548),
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
    eW = n(927578),
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
        s = (0, e$.bG)([X.A, eN.default], () => {
            let e = eN.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, eI.bM)(n, e);
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
        i = a.useRef(null);
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
let tn = a.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: a, markAsDismissed: r } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.UB, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.YX, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e7.Ns, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e7.K8, { guildId: n.id, markAsDismissed: r, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = a?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(tt, {
                        renderPopout: (t) =>
                            (0, l.jsx)(e7.Gw, {
                                type: eD.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = a?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(tt, {
                        renderPopout: (t) =>
                            (0, l.jsx)(e7.Mr, {
                                type: eD.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e3, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(te, { guild: n, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(tt, {
                        renderPopout: (0, l.jsx)(e9, { markAsDismissed: r }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(tt, {
                        renderPopout: (e) => (0, l.jsx)(e5, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
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
    ta = n(939249),
    tr = n(789645),
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
            type: r,
            imageMarginX: o,
            imageMarginTop: d,
            trackingSource: u,
            undismissable: c,
            onDismissed: A,
            onClick: E,
            cta: h,
            ctaColor: _,
        } = e;
        a.useEffect(() => {
            tc(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: r, guild_id: t.id });
        }, [t.id, r]);
        let g = null;
        "function" == typeof h
            ? (g = h())
            : null != h &&
              (g = (0, l.jsx)(tl.$n, {
                  "data-migration-pending": !0,
                  className: tu.HM,
                  size: tl.$n.Sizes.SMALL,
                  onClick: () => {
                      null != r &&
                          eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: r,
                          }),
                          E?.();
                  },
                  fullWidth: !0,
                  color: _,
                  children: h,
              }));
        let I = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: tu.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(ta.D, {
                          onClick: () => {
                              td.Ay.trackWithMetadata(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: r }), A?.();
                          },
                          className: tu.VN,
                          "aria-label": e0.intl.string(e0.t.WAI6xu),
                          children: (0, l.jsx)(tr.P, { size: "md", color: "currentColor", className: tu.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tu.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tu.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tu.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(to.D, { variant: "heading-md/semibold", className: tu.DD, children: n })
                            : null,
                        (0, l.jsx)(e8.E, { variant: "text-sm/normal", children: i }),
                        g,
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
var t_ = n(158390),
    tg = n(927813),
    tI = n(636537);
let tN = {
        fetch() {
            I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
                tI.Bo.get({ url: H.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let { body: t } = e;
                        I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: t });
                    },
                    () => {
                        I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_FAIL" });
                    },
                );
        },
    },
    tC = tg.A.Millis.DAY,
    tm = new t_.A(5 * tg.A.Millis.MINUTE),
    tS = {},
    tT = !1,
    tp = null,
    tM = null;
function tO() {
    !(tT || tm.fails >= 10 || (null != tM && Date.now() < tM)) && (null == tp || Date.now() >= tp + tC) && tN.fetch();
}
class tL extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return tO(), tS[e] ?? [];
    }
    hasUnclaimedGames(e) {
        tO();
        let t = tS[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        return tO(), Object.keys(tS).filter((e) => tS[e].length > 0);
    }
    get fetching() {
        return tT;
    }
    get lastFetchedAt() {
        return tp;
    }
}
let tf = new tL(I.h, {
        LOGOUT: function () {
            (tS = {}), (tT = !1), (tp = null), (tM = null), tm.succeed();
        },
        UNCLAIMED_GAMES_FETCH: function () {
            tT = !0;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            (tS = t), (tT = !1), (tp = Date.now()), (tM = null), tm.succeed();
        },
        UNCLAIMED_GAMES_FETCH_FAIL: function () {
            (tT = !1), (tM = Date.now() + tm.fail());
        },
    }),
    tR = (0, y.C)({
        kind: "guild",
        id: "2026-02_game_claim_coachmark",
        label: "Game Claim Coachmark",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
    });
var tx = n(509434),
    tG = n(975807),
    tD = n(201438),
    tU = n(194362),
    tb = n(307301),
    tP = n(661531),
    ty = n(841352);
function tH(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, l.jsx)("div", { className: ty.j3, children: (0, l.jsx)("img", { className: ty.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: ty.gm,
                children: (0, l.jsx)("div", {
                    className: ty.WA,
                    children: (0, l.jsx)(tb.j, { size: "sm", color: tP.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tv = n(140461);
function tB(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = ((0, d.bG)([tf], () => tf.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null,
        { coverImageUrl: s, gameName: a } = (0, tD.A)(i, e0.intl.string(e0.t.VQq92a));
    if (null == s) return null;
    let r = t.features.has(H.GuildFeatures.VERIFIED) ? e0.intl.string(e0.t.uUARXe) : e0.intl.string(e0.t["0Dx29f"]);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: e0.intl.format(e0.t.Q11WTQ, { gameName: a }),
        message: r,
        cta: (0, l.jsxs)("span", {
            className: tv.m,
            children: [e0.intl.string(e0.t["2u6ZlY"]), (0, l.jsx)(tx.I, { size: "xs", color: "currentColor" })],
        }),
        type: H.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tH, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tU.a)(H.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tG.A)(e);
        },
    });
}
var tj = n(631305),
    tw = n(473145),
    tk = n(625633);
function tV(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tw.Os)(t, H.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(m.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: e0.intl.string(e0.t.oPAx73),
        message: e0.intl.format(e0.t.AcaNYw, { boostsNeeded: i }),
        type: H.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tj.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tk.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tX = n(509536);
class tF extends a.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tX.K4)({ guildId: e.id, location: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_STATUS_CTA } });
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
let tK = d.Ay.connectStores([V.A], (e) => {
    let { guild: t } = e;
    return { memberCount: V.A.getMemberCount(t.id) };
})(tF);
var tW = n(503698),
    tY = n.n(tW),
    tz = n(933832),
    tZ = n(782603),
    tq = n(81466),
    t$ = n(116085),
    tQ = n(597601),
    tJ = n(451394),
    t0 = n(104171),
    t1 = n(47167),
    t3 = n(713654),
    t6 = n(976860),
    t5 = n(790535),
    t8 = n(110618),
    t4 = n(495544),
    t2 = n(309010),
    t9 = n(312006),
    t7 = n(403362),
    ne = n(707592),
    nt = n(698441),
    nn = n(935159),
    ni = n(11550),
    ns = n(435328),
    nl = n(563312),
    na = n(9448),
    nr = n(647090),
    no = n(666394),
    nd = n(28164);
let nu = a.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: s,
        detailsIcon: a,
        topic: r,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, l.jsxs)("div", {
        className: nd.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tY()(nd.fI, nd.pF),
                children: [
                    (0, l.jsx)("div", { className: nd.Ok }),
                    (0, l.jsx)(e8.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nd.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(ta.D, {
                            onClick: o,
                            className: nd.ut,
                            "aria-label": e0.intl.string(e0.t.cpT0Cq),
                            children: (0, l.jsx)(tr.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(to.D, { color: "text-strong", variant: "heading-md/semibold", className: nd.eq, children: r }),
            (0, l.jsxs)("div", {
                className: tY()(nd.fI, nd.pF),
                children: [
                    i,
                    (0, l.jsx)(e8.E, { color: "none", variant: "text-xs/normal", className: nd.HA, children: n }),
                    null != s &&
                        null != a &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(e8.E, {
                                    className: nd.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                a,
                                (0, l.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nd.zH,
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
function nc(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t1.Ay)(n),
        s = (0, d.yK)(
            [x.Ay],
            () =>
                x.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, t3.gU)(n);
    return (0, l.jsx)(nu, {
        onClickCloseIcon: () => (0, nn.iF)({ eventId: t?.id }),
        heading: e0.intl.string(e0.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != a ? (0, l.jsx)(a, { size: "xs", color: "currentColor", className: nd.uE }) : null,
        children: (0, l.jsx)(nC, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nA(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nr.G3)(t),
        s = (0, d.bG)([nt.Ay], () => nt.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, d.bG)([ni.A], () => ni.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != a || (0, nn.pE)(t.id),
        (0, l.jsx)(e4.$, {
            onClick: function () {
                (0, no.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nn.Lx)(t.id), 1e3)),
                    eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e0.intl.string(e0.t.DlcqlU),
            icon: s ? tz.A : tZ.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nE(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, na.oF)(t),
        s = null != i ? (0, ns.l)(i, !0) : null,
        r = (0, na.WN)(t),
        o = (0, t1.Ay)(r),
        d = (0, t3.gU)(r),
        { startTime: u, endTime: c } = (0, nl.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nr.CC)(u.toISOString(), c?.toISOString()),
        _ = E
            ? h > 0
                ? e0.intl.formatToPlainString(e0.t.PQlCWk, { minutes: h })
                : e0.intl.string(e0.t.WINqKV)
            : e0.intl.formatToPlainString(e0.t.DC6h3G, { date: A });
    return (
        a.useEffect(() => {
            eu.default.track(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nd.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nd.fI,
                    children: [
                        (0, l.jsx)(ta.D, {
                            onClick: () => (0, ne.uR)({ eventId: t.id }),
                            className: nd.oP,
                            children: (0, l.jsx)(e8.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nd.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(ta.D, {
                            onClick: () => {
                                eu.default.track(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, nn.Lx)(t.id);
                            },
                            className: nd.ut,
                            "aria-label": e0.intl.string(e0.t.cpT0Cq),
                            children: (0, l.jsx)(tr.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tY()(nd.fI, nd.pF),
                    children: [
                        (0, l.jsx)(tq.C, {
                            size: "custom",
                            color: "currentColor",
                            className: nd.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(e8.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nd.Sv,
                            children: _,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tY()(nd.fI, nd.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nd.uE })
                            : (0, l.jsx)(t$.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nd.uE,
                              }),
                        (0, l.jsx)(e8.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nd.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nA, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nh(e) {
    let { guildEvent: t } = e,
        n = (0, na.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nu, {
              onClickCloseIcon: () => (0, nn.iF)({ eventId: t?.id }),
              heading: e0.intl.string(e0.t["1+boPi"]),
              topic: t.name,
              location: (0, ns.l)(n, !0),
              locationIcon: (0, l.jsx)(t$.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nd.uE,
              }),
              children: (0, l.jsx)(n_, { guildEvent: t }),
          });
}
function n_(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, ne.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nd.PD,
        children: (0, l.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: e0.intl.string(e0.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function ng(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nd.PD,
        children: (0, l.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, t5.av)(t), (0, t6.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nI(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t1.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        r = e0.intl.formatToPlainString(e0.t["+v2pN2"], { count: `${a}` });
    return (0, l.jsx)(nu, {
        onClickCloseIcon: () => (0, nn.iF)({ stageId: t?.id }),
        heading: e0.intl.string(e0.t["X2K3/4"]),
        location: i,
        details: r,
        detailsIcon: (0, l.jsx)(tQ.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nd.uE,
        }),
        locationIcon: (0, l.jsx)(tJ.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nd.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nC, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nN = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nC(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        r = n.getGuildId(),
        o = a.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(H.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t4.default, t2.A, t9.Ay], () => {
                let e = t4.default.getId();
                return t2.A.getVoiceChannelId() === t ? t9.Ay.getPermissionsForUser(e, t) : null;
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
            (0, t7.xb)(s);
    }
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tY()(nd.fI, nd.pF),
                            children: [
                                (0, l.jsx)(t0.Ay, { guildId: r, users: o, showUserPopout: !0, size: t0.DN.SIZE_16 }),
                                (0, l.jsx)(e8.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nd.c8,
                                    children: (0, t8.c)(r, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(ng, { channel: n, label: A }),
              ],
          });
}
let nm = a.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: a } = e,
        r = ((t = a.id), (n = (0, P.r2)(t)), (i = (0, L.Ay)(t)), (s = f.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, P.BP)(a.id),
        u = (0, P.WG)(a.id),
        c = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(r?.id), [r]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, d.cf)(
            [b],
            () => ({
                isStageNoticeHidden: b.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: b.isLiveChannelNoticeHidden({ eventId: o?.id }),
            }),
            [c, o],
        ),
        h = null,
        _ = null != c && null != r && !A;
    null == o || E
        ? _ && (h = (0, l.jsx)(nI, { stageInstance: c, channel: r }))
        : o.entity_type === G.Ps.STAGE_INSTANCE && _
          ? (h = (0, l.jsx)(nI, { stageInstance: c, channel: r }))
          : o.entity_type === G.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nh, { guildEvent: o }))
            : o.entity_type === G.Ps.VOICE && null != r && (h = (0, l.jsx)(nc, { guildEvent: o, channel: r }));
    let g = a.features.has(H.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nE, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nS(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("93010"),
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
var nT = n(717421),
    np = n(450510);
let nM = (e) => {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tA, {
        guild: n,
        onDismissed: () => {
            (0, np.sF)(np._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, np.sF)(np._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t5.av)(t), (0, t6.uh)(t.getGuildId(), t.id));
        },
        title: e0.intl.string(e0.t["4Y2AS7"]),
        message: e0.intl.string(e0.t.wTsxTS),
        cta: e0.intl.string(e0.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: H.n5X.HUB_STUDY_ROOM,
    });
};
var nO = n(994190);
let nL = function (e) {
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
        s = (0, t3.gU)(n);
    return (0, l.jsx)(nu, {
        heading: e0.intl.string(e0.t["X2K3/4"]),
        topic: t,
        location: e0.intl.string(e0.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nO.K }) : null,
        children: (0, l.jsx)(nC, { channel: n, speakers: i, voiceType: nN.STUDY_ROOM }),
    });
};
var nf = n(48686);
function nR(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([np.HP], () => np.HP.hasHotspot(np._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nf.Q)(t.guild_id),
        a = (0, t1.Ay)(t),
        o = (0, nT.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(r.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nM, { channel: t, guild: n })
            : (0, l.jsx)(nL, { name: `\u{1F4DA}\u{2615} ${a}`, channel: t }),
    });
}
let nx = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eV.Ay], () => eV.Ay.getChannels(t.id)[eV.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(H.xBc.CONNECT, n.channel));
    return t.features.has(H.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nR, { channel: n.channel, guild: t })
        : null;
};
function nG(e) {
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
var nD = n(587895),
    nU = n(143582);
function nb(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n),
        s = () => (0, nU.Hc)(n.id),
        r = a.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nD.A], () => {
            let e = [];
            for (let t of r) {
                let n = nD.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [r]);
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
var nP = n(628287);
let ny = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tA, {
        guild: t,
        onDismissed: n,
        onClick: () => eJ.A.open(t.id, H.BEX.COMMUNITY),
        message: e0.intl.string(e0.t["2klD0Z"]),
        trackingSource: H.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: H.n5X.PUBLIC_UPSELL,
        image: nP,
        cta: e0.intl.string(e0.t.hvVgAZ),
    });
};
var nH = n(536194),
    nv = n(780964),
    nB = n(766075);
class nj extends a.PureComponent {
    render() {
        return (0, l.jsx)(tA, {
            guild: this.props.guild,
            onClick: () => (0, nB.openUserSettings)(nv.X.ACCOUNT_PANEL),
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
var nw = n(720149);
class nk extends a.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, g.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("89555"),
                n.e("59957"),
                n.e("28136"),
                n.e("16084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: H.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t2.A.getChannelId(),
            t = e0.intl.formatToPlainString(e0.t.DEn7nu, { invitePeople: e0.intl.string(e0.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nw.A.sendBotMessage(e, t);
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
let nV = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
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
var nX = n(475358),
    nF = n(675704),
    nK = n(793322);
let nW = (e) => {
    let t = (0, l.jsx)(nX.e, { shortcut: nF.R.binds["0"], keyClassName: tu.Eb });
    return (0, l.jsx)(tA, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nK.WU)("CHANNEL_NOTICE"),
        message: e0.intl.string(e0.t.Qhk8cs),
        cta: t,
        trackingSource: H.kZU.QUICK_SWITCHER_NOTICE,
        type: H.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nY = n(174768);
class nz extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(X.A), this.syncWith([X.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(H.GuildFeatures.BANNER) && Date.now() - t >= H.D2K;
    }
}
let nZ = new nz(I.h);
class nq extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], H.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.MANAGE_GUILD, e);
    }
}
let n$ = new nq(I.h);
var nQ = n(731667);
function nJ() {
    return !0;
}
class n0 extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(R.A), this.syncWith([R.A], nJ);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.ADMINISTRATOR, e);
    }
}
let n1 = new n0(I.h),
    n3 = "lastHiddenChannelNotice",
    n6 = [
        { type: H.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: H.n5X.GUILD_BOOSTING,
            store: n$,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: H.n5X.GUILD_BANNER, store: nZ, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: H.n5X.INVITE, store: n1, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: H.n5X.HUB_LINK, store: nQ.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: H.n5X.QUICKSWITCHER, store: nY.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: H.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: H.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n5 = n6.map((e) => e.store).filter(t7.Vq),
    n8 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n4(e) {
    e.stopPropagation();
}
let n2 = [];
function n9(e) {
    var t, n;
    let i,
        s,
        { guild: r } = e,
        [o, c] = a.useState(k.w.get(n3) ?? 0),
        A =
            ((n = t = r.id),
            (i = tR.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)(
                [R.A, tf],
                () =>
                    !!i && !!R.A.canWithPartialContext(H.xBc.ADMINISTRATOR, { guildId: t }) && tf.hasUnclaimedGames(t),
                [t, i],
            )),
            a.useMemo(() => {
                let e = [];
                return s && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n2;
            }, [s])),
        [E, h] = (0, ei.ww)(A, r.id, eE.m.CHANNEL_NOTICES, !0),
        _ = null != E,
        g = (0, d.yK)(
            n5,
            () =>
                _
                    ? []
                    : n6
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(r, o) && !n8.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [r, o, _],
        ),
        [I, N] = (0, ei.kn)(g, eE.m.CHANNEL_NOTICES),
        C = E ?? I,
        m = null != E ? h : N,
        S = a.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n3, e), c(e), m(eE.i.UNKNOWN);
        }, [m]),
        T = (() => {
            switch (C) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nS, { guild: r, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nk, { guild: r, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tK, { guild: r, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nW, { guild: r, markAsDismissed: S });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tV, { guild: r, markAsDismissed: S });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(th, { guild: r, markAsDismissed: () => m(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tB, { guild: r, markAsDismissed: m });
                default:
                    return null;
            }
        })();
    return null == T ? null : (0, l.jsx)("div", { onContextMenu: n4, children: T });
}
let n7 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(ny, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nV, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nm, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nj, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(nG, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nb, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nx, { guild: t });
    }
    return nH.P.isDisallowPopupsSet() ? null : (0, l.jsx)(n9, { guild: e.guild });
};
var ie = n(532233);
function it(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: ie.k, ref: i, children: (0, l.jsx)(n7, { guild: t }) })
    );
}
var ii = n(66933),
    is = n(846930),
    il = n(153822);
let ia = "server-settings",
    ir = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class io extends a.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = a.createRef();
    guildHeaderDropdownButtonRef = a.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new c.Ep();
    state = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
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
            (this.historyUnlisten = ev.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = ev.A.getHistory();
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
            (0, N.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("89555"),
                    n.e("19756"),
                    n.e("94864"),
                    n.e("39624"),
                    n.e("93010"),
                    n.e("85399"),
                    n.e("15925"),
                    n.e("65159"),
                    n.e("78220"),
                    n.e("59786"),
                    n.e("86522"),
                    n.e("58128"),
                    n.e("19543"),
                    n.e("97217"),
                    n.e("99961"),
                    n.e("31688"),
                    n.e("69273"),
                    n.e("55793"),
                    n.e("5959"),
                    n.e("46461"),
                    n.e("63454"),
                    n.e("45650"),
                    n.e("27660"),
                    n.e("85484"),
                    n.e("81126"),
                    n.e("333"),
                    n.e("79705"),
                    n.e("32245"),
                    n.e("76032"),
                    n.e("33957"),
                    n.e("78211"),
                    n.e("53739"),
                    n.e("57006"),
                    n.e("10889"),
                    n.e("53689"),
                    n.e("68340"),
                    n.e("51794"),
                    n.e("87845"),
                    n.e("30402"),
                    n.e("10859"),
                    n.e("45970"),
                    n.e("44629"),
                    n.e("47620"),
                    n.e("56574"),
                    n.e("79785"),
                    n.e("98689"),
                    n.e("4974"),
                    n.e("51507"),
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
                    n.e("18573"),
                    n.e("55936"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("5812"),
                    n.e("26073"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("1368"),
                    n.e("8304"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("15599"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("81987"),
                    n.e("50417"),
                    n.e("91737"),
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
                    n.e("23995"),
                    n.e("48330"),
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
                    n.e("10943"),
                    n.e("15920"),
                    n.e("68530"),
                    n.e("3930"),
                    n.e("44057"),
                    n.e("3663"),
                    n.e("66580"),
                    n.e("78046"),
                    n.e("80093"),
                    n.e("38601"),
                    n.e("73669"),
                    n.e("7775"),
                    n.e("22547"),
                    n.e("82486"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("33097"),
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
                    n.e("34409"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("98093"),
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
                      tutorialId: ia,
                      position: "bottom",
                      inlineSpecs: ir,
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
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: r,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: u,
                bannerVisibleHeight: c,
                communityInfoVisible: A,
            } = this.state,
            E = i || s || a;
        return null == t
            ? null
            : (0, l.jsx)(S.f5, {
                  value: r,
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
                          let { onClick: s, ...a } = i;
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
                              ...a,
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
            return (0, l.jsx)(is.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(H.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: il.r0,
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
            className: il.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e0.intl.formatToPlainString(e0.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(it, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function id(e) {
    let t,
        i,
        s,
        r,
        c,
        A,
        E,
        h,
        _,
        I,
        N,
        T,
        p,
        M,
        O,
        { guildId: L, hideSelectedChannel: x, selectedChannelId: G } = e,
        D = (0, er.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(L)),
        P = (0, ea.A)(L),
        y = (0, d.bG)([ew.A], () => ew.A.getGuildDimensions(L).scrollTo),
        v = (0, d.bG)([eK.A], () => eK.A.getChannelId()),
        j = (0, d.bG)([R.A], () => R.A.can(H.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([ek.A], () => ek.A.isUnavailable(L)),
        k = (0, d.bG)([eN.default], () => eN.default.getCurrentUser()),
        { enableStudyGroup: V } = B(b),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = a.useState(!K),
        z = (0, C.A)(L),
        { analyticsLocations: Z } = (0, S.Ay)(m.A.GUILD_HEADER);
    a.useEffect(() => {
        L !== z && Y(!K);
    }, [L, z, K]);
    let [q, $] = (0, et.Ay)(
            (e) => [
                n6.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        Q = ee(b),
        J = (0, g.useModalsStore)(g.hasAnyModalOpenSelector),
        eC = (0, d.bG)([eX.A], () => eX.A.hasLayers()),
        em = (0, ef.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([ej.A], () => ej.A.shouldShow(ia)),
        eT =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (i = (0, d.bG)([eN.default], () => eN.default.getCurrentUser())),
            (s = null != t && (0, eI.bM)(t, i)),
            (r = (0, eg.oS)()),
            s &&
                (t?.features.has(H.GuildFeatures.COMMUNITY) ?? !1) &&
                r &&
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
        ev = (0, d.bG)([f.A], () => f.A.getChannel(G)),
        { isPopoutOpen: eB } = (0, eo.S)(),
        eV = b?.features.has(H.GuildFeatures.COMMUNITY) ?? !1,
        eY = eW.Ay.isNewUser(k),
        ez = W && !eY;
    (c = (0, ed.TZ)(b)),
        (A = F.dR.some((e) => !(0, el.ai)(b?.id) && ec.Ib(e, b))),
        (E = b?.defaultMessageNotifications === H.orn.ALL_MESSAGES),
        (h = (0, eA.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq)),
        (_ = c && (A || E) && !h),
        (I = a.useCallback(() => {
            (0, eA._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq, !0, eE.i.DISMISS);
        }, [b])),
        (N = a.useRef(!1)),
        a.useEffect(() => {
            _ &&
                !N.current &&
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
                    { onCloseCallback: I },
                ),
                eu.default.track(H.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? H.dJq,
                }),
                (N.current = !0));
        }, [A, b, I, E, _]);
    let eZ = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eq =
            ((T = (0, d.bG)([X.A], () => X.A.getGuild(L))),
            (p = (0, eh._Y)(L)),
            (M =
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                T?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (O = (0, e_.X9)(T)),
            M && O && p),
        e$ = (0, d.bG)([eK.A], () => eK.A.getChannelId()),
        eQ = (0, d.bG)([eF.A], () => eF.A.desyncedVoiceStatesCount),
        eJ = (0, ey.A)(L);
    ii.A.useConfig({ guildId: L, location: "guild_sidebar" });
    let e0 = (0, eR.C$)(L, "GuildSidebar"),
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
        [ts, tl] = (0, eU.vB)(e6 && e0 && !1 === eJ && !(0, el.ai)(L), eE.m.GUILD_HEADER_TOOLTIPS),
        [ta, tr] = (0, ei.D8)(
            e9 ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            L,
            { cooldownDurationMs: eD.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [to, td] = (0, ei.D8)(
            te ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            L,
            { cooldownDurationMs: eD.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tu = a.useMemo(
            () =>
                null != tn
                    ? { contentType: tn, data: null, markAsDismissed: ti }
                    : ts === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: ts, data: null, markAsDismissed: tl }
                      : ta === u.M.BOOST_TO_UNLOCK_COACHMARK && null != e2
                        ? { contentType: ta, data: { featuredPowerup: e2 }, markAsDismissed: tr }
                        : to === u.M.EXPIRING_POWERUP_COACHMARK && null != e7
                          ? { contentType: to, data: { featuredExpiringPowerup: e7 }, markAsDismissed: td }
                          : null,
            [tn, ts, ta, to, e2, e7, ti, tl, tr, td],
        );
    return (0, l.jsx)(io, {
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
        onFavoriteGuildContextMenu: D,
        hasFavoritesAccess: U,
    });
}
