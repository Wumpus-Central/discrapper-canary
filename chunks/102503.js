n.r(t), n.d(t, { default: () => id }), n(321073);
var i,
    s,
    l = n(627968),
    r = n(64700),
    a = n(922139),
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
    p = n(285059),
    T = n(63995);
n(113783);
var M = n(518769),
    O = n(446600),
    L = n(624265);
n(616356);
var f = n(734057),
    R = n(576705),
    U = n(607567),
    x = n(988794);
let D = { hiddenEventsAndStages: [] };
class G extends d.Ay.PersistedStore {
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
let b = new G(I.h, {
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
            (t.status === x.XG.CANCELED || t.status === x.XG.COMPLETED) &&
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
    }),
    j = (e) => (
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
let q = { MAX_MEMBER_COUNT: new Set() };
class Q extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(R.A, V.A, X.A),
            this.syncWith([R.A, V.A, X.A], H.tEg),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_100),
            k.w.remove(H.n5X.MAX_MEMBER_COUNT_250),
            (q[H.n5X.MAX_MEMBER_COUNT] = new Set(k.w.get(H.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = X.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(H.xBc.ADMINISTRATOR, e);
        return !q[H.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let $ = new Q(I.h, {
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
        i = (0, d.bG)([$], () => $.isVisible(e)),
        s = (function (e) {
            let t = (0, L.Ay)(e),
                n = f.A.getChannel(t[0]?.id),
                i = (0, d.bG)([O.A], () => O.A.getStageInstanceByChannel(n?.id), [n]),
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
            p.A.getGuildEventsForCurrentUser(t);
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
    eI = n(260509),
    eN = n(287809),
    em = n(568185);
let eC = "hasSeenGuildTemplatePromotionTooltip",
    eS = {},
    ep = !0 === k.w.get(eC);
function eT(e) {
    let { guildId: t } = e;
    eS = { ...eS, [t]: !1 };
}
class eM extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eS[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !ep;
    }
}
let eO = new eM(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eS = { ...eS, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        k.w.set(eC, !0), (ep = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eS = { ...eS, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eT,
    GUILD_TEMPLATE_DELETE_SUCCESS: eT,
});
var eL = n(875317),
    ef = n(181880),
    eR = n(285406),
    eU = n(663066),
    ex = n(488803),
    eD = n(764322),
    eG = n(661881),
    eb = n(379229),
    ey = n(229548),
    eP = n(139032),
    eH = n(52260),
    ev = n(363487),
    ej = n(342220),
    eB = n(320989),
    ew = n(728321),
    ek = n(79858),
    eX = n(72314),
    eV = n(919638),
    eF = n(808728),
    eK = n(186111),
    eW = n(584569),
    eY = n(763827),
    ez = n(428262),
    eZ = n(885631),
    eq = n(124009),
    eQ = n(83297),
    e$ = n(562708),
    eJ = n(702841),
    e0 = n(139286),
    e1 = n(468689),
    e6 = n(375708),
    e3 = n(330766);
function e2(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, eJ.bG)([V.A, eN.default], () => {
            let e = eN.default.getCurrentUser(),
                n = V.A.getGuild(t);
            return null != n && (0, eI.bM)(n, e);
        });
    return (
        (0, e0.A)({
            type: e$.ImpressionTypes.POPOUT,
            name: e$.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: e6.intl.string(e6.t.C0m4rQ),
            body: e6.intl.string(e6.t.zOHfEX),
            graphic: { type: "image", src: e3 },
            actions: [
                {
                    text: e6.intl.string(e6.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        e1.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var e8 = n(338854);
function e4(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e8.H, {
        targetElementRef: i,
        title: e6.intl.string(e6.t.gCgirr),
        body: e6.intl.string(e6.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e6.intl.string(e6.t.BQq86h),
            variant: "primary",
            onClick: () => {
                e1.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS, void 0, H.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function e5(e) {
    let { targetElementRef: t, onCheckItOut: n, onDismiss: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: t,
        shouldShow: !0,
        position: "bottom",
        align: "center",
        caretConfig: { align: "center" },
        title: e6.intl.string(e6.t.KOMFUo),
        body: e6.intl.string(e6.t.Nm72JC),
        onRequestClose: i,
        actions: [{ text: e6.intl.string(e6.t.RzWDqY), variant: "primary", onClick: n }],
    });
}
var e7 = n(834730),
    e9 = n(821609),
    te = n(383470);
function tt(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: te.kL,
        children: [
            (0, l.jsx)("div", { className: te.Wn }),
            (0, l.jsx)(e7.E, { variant: "text-sm/normal", className: te.Qs, children: e6.intl.string(e6.t.rdzeVP) }),
            (0, l.jsx)(e9.$, {
                variant: "overlay-primary",
                text: e6.intl.string(e6.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var tn = n(696943);
function ti(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: e6.intl.string(e6.t.Hgd22r),
        body: e6.intl.string(e6.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e6.intl.string(e6.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    e1.A.open(t.id, H.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function ts(e) {
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
let tl = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (() => {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tn.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tn.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tn.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) => (0, l.jsx)(tn.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(ts, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tn.Gw, {
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
                    return (0, l.jsx)(ts, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tn.Mr, {
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
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) => (0, l.jsx)(e2, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) => (0, l.jsx)(ti, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(ts, {
                        renderPopout: (0, l.jsx)(tt, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) => (0, l.jsx)(e4, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_THEME_NUX_FOLLOWUP:
                    return (0, l.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, l.jsx)(e5, {
                                targetElementRef: e,
                                onDismiss: () => {
                                    a(eE.i.USER_DISMISS);
                                },
                                onCheckItOut: () => {
                                    a(eE.i.TAKE_ACTION), (0, eo.Z)(!0);
                                },
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tr = n(735438),
    ta = n.n(tr),
    to = n(862482),
    td = n(939249),
    tu = n(789645),
    tc = n(534514),
    tA = n(95561),
    tE = n(284245);
let th = ta().debounce(tA.Ay.trackWithMetadata, 500),
    tg = (e) => {
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
            th(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let _ = null;
        "function" == typeof h
            ? (_ = h())
            : null != h &&
              (_ = (0, l.jsx)(to.$n, {
                  "data-migration-pending": !0,
                  className: tE.HM,
                  size: to.$n.Sizes.SMALL,
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
            className: tE.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(td.D, {
                          onClick: () => {
                              tA.Ay.trackWithMetadata(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.();
                          },
                          className: tE.VN,
                          "aria-label": e6.intl.string(e6.t.WAI6xu),
                          children: (0, l.jsx)(tu.P, { size: "md", color: "currentColor", className: tE.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tE.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tE.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tE.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(tc.D, { variant: "heading-md/semibold", className: tE.DD, children: n })
                            : null,
                        (0, l.jsx)(e7.E, { variant: "text-sm/normal", children: i }),
                        _,
                    ],
                }),
            ],
        });
    };
var t_ = n(975571);
function tI(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tg, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            open(t_.A.getArticleURL(H.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN);
        },
        title: e6.intl.string(e6.t.YMgaJt),
        message: e6.intl.string(e6.t["AV/9eW"]),
        cta: e6.intl.string(e6.t.hvVgAZ),
        trackingSource: H.kZU.LINKED_ROLES_ADMIN_NUX,
        type: H.n5X.LINKED_ROLES_ADMIN,
    });
}
var tN = n(158390),
    tm = n(636537),
    tC = n(927813);
let tS = null;
class tp extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tS;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tS?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tS?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tS) return [];
        let e = tS;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tT = new tp(I.h, {
        LOGOUT: function () {
            tS = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tS = t;
        },
    }),
    tM = [];
async function tO() {
    let { body: e } = await tm.Bo.get({ url: H.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tL = (0, d.UT)(tT, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tT.getMap(),
    load: () => tO(),
    staleAfter: tC.A.Seconds.DAY,
    retryConfig: { backoff: () => new tN.A(5 * tC.A.Millis.MINUTE), maxRetries: 10 },
});
function tf(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tL(t);
    return n?.[e] ?? tM;
}
let tR = (0, P.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tU = n(509434),
    tx = n(975807),
    tD = n(201438),
    tG = n(194362),
    tb = n(307301),
    ty = n(661531),
    tP = n(841352);
function tH(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, l.jsx)("div", { className: tP.j3, children: (0, l.jsx)("img", { className: tP.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tP.gm,
                children: (0, l.jsx)("div", {
                    className: tP.WA,
                    children: (0, l.jsx)(tb.j, { size: "sm", color: ty.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tv = n(140461);
function tj(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tf(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tD.A)(i, e6.intl.string(e6.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(H.GuildFeatures.VERIFIED) ? e6.intl.string(e6.t.uUARXe) : e6.intl.string(e6.t["0Dx29f"]);
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: e6.intl.format(e6.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tv.m,
            children: [e6.intl.string(e6.t["2u6ZlY"]), (0, l.jsx)(tU.I, { size: "xs", color: "currentColor" })],
        }),
        type: H.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tH, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tG.a)(H.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tx.A)(e);
        },
    });
}
var tB = n(631305),
    tw = n(473145),
    tk = n(625633);
function tX(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tw.Os)(t, H.TVA.TIER_2),
        { analyticsLocations: s } = (0, S.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: e6.intl.string(e6.t.oPAx73),
        message: e6.intl.format(e6.t.AcaNYw, { boostsNeeded: i }),
        type: H.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tB.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tk.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tV = n(509536);
class tF extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tV.K4)({ guildId: e.id, location: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tg, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e6.intl.string(e6.t.hlitVQ) : e6.intl.string(e6.t.XHtaDD),
            cta: e6.intl.string(e6.t["vqb+H1"]),
            trackingSource: H.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: H.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tK = d.Ay.connectStores([X.A], (e) => {
    let { guild: t } = e;
    return { memberCount: X.A.getMemberCount(t.id) };
})(tF);
var tW = n(503698),
    tY = n.n(tW),
    tz = n(933832),
    tZ = n(782603),
    tq = n(81466),
    tQ = n(116085),
    t$ = n(597601),
    tJ = n(451394),
    t0 = n(104171),
    t1 = n(47167),
    t6 = n(713654),
    t3 = n(976860),
    t2 = n(790535),
    t8 = n(110618),
    t4 = n(495544),
    t5 = n(309010),
    t7 = n(312006),
    t9 = n(403362),
    ne = n(707592),
    nt = n(698441),
    nn = n(935159),
    ni = n(11550),
    ns = n(435328),
    nl = n(563312),
    nr = n(9448),
    na = n(647090),
    no = n(666394),
    nd = n(28164);
let nu = r.memo(function (e) {
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
        className: nd.kX,
        children: [
            (0, l.jsxs)("div", {
                className: tY()(nd.fI, nd.pF),
                children: [
                    (0, l.jsx)("div", { className: nd.Ok }),
                    (0, l.jsx)(e7.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nd.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(td.D, {
                            onClick: o,
                            className: nd.ut,
                            "aria-label": e6.intl.string(e6.t.cpT0Cq),
                            children: (0, l.jsx)(tu.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(tc.D, { color: "text-strong", variant: "heading-md/semibold", className: nd.eq, children: a }),
            (0, l.jsxs)("div", {
                className: tY()(nd.fI, nd.pF),
                children: [
                    i,
                    (0, l.jsx)(e7.E, { color: "none", variant: "text-xs/normal", className: nd.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(e7.E, {
                                    className: nd.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(e7.E, {
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
            [U.Ay],
            () =>
                U.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t6.gU)(n);
    return (0, l.jsx)(nu, {
        onClickCloseIcon: () => (0, nn.iF)({ eventId: t?.id }),
        heading: e6.intl.string(e6.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nd.uE }) : null,
        children: (0, l.jsx)(nm, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nA(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, na.G3)(t),
        s = (0, d.bG)([nt.Ay], () => nt.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([ni.A], () => ni.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, nn.pE)(t.id),
        (0, l.jsx)(e9.$, {
            onClick: function () {
                (0, no.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nn.Lx)(t.id), 1e3)),
                    eu.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: e6.intl.string(e6.t.DlcqlU),
            icon: s ? tz.A : tZ.X,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nE(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nr.oF)(t),
        s = null != i ? (0, ns.l)(i, !0) : null,
        a = (0, nr.WN)(t),
        o = (0, t1.Ay)(a),
        d = (0, t6.gU)(a),
        { startTime: u, endTime: c } = (0, nl.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, na.CC)(u.toISOString(), c?.toISOString()),
        g = E
            ? h > 0
                ? e6.intl.formatToPlainString(e6.t.PQlCWk, { minutes: h })
                : e6.intl.string(e6.t.WINqKV)
            : e6.intl.formatToPlainString(e6.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            eu.default.track(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nd.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nd.fI,
                    children: [
                        (0, l.jsx)(td.D, {
                            onClick: () => (0, ne.uR)({ eventId: t.id }),
                            className: nd.oP,
                            children: (0, l.jsx)(e7.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nd.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(td.D, {
                            onClick: () => {
                                eu.default.track(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, nn.Lx)(t.id);
                            },
                            className: nd.ut,
                            "aria-label": e6.intl.string(e6.t.cpT0Cq),
                            children: (0, l.jsx)(tu.P, { size: "xs", color: "currentColor" }),
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
                        (0, l.jsx)(e7.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nd.Sv,
                            children: g,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tY()(nd.fI, nd.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nd.uE })
                            : (0, l.jsx)(tQ.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nd.uE,
                              }),
                        (0, l.jsx)(e7.E, {
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
        n = (0, nr.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nu, {
              onClickCloseIcon: () => (0, nn.iF)({ eventId: t?.id }),
              heading: e6.intl.string(e6.t["1+boPi"]),
              topic: t.name,
              location: (0, ns.l)(n, !0),
              locationIcon: (0, l.jsx)(tQ.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nd.uE,
              }),
              children: (0, l.jsx)(ng, { guildEvent: t }),
          });
}
function ng(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, ne.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nd.PD,
        children: (0, l.jsx)(e9.$, {
            variant: "active",
            size: "sm",
            text: e6.intl.string(e6.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function n_(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nd.PD,
        children: (0, l.jsx)(e9.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, t2.av)(t), (0, t3.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nI(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t1.Ay)(n),
        s = (0, d.yK)([T.A], () => [...new Set(T.A.getMutableParticipants(n.id, M.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([T.A], () => T.A.getParticipantCount(n.id, M.ip.AUDIENCE), [n.id]),
        a = e6.intl.formatToPlainString(e6.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(nu, {
        onClickCloseIcon: () => (0, nn.iF)({ stageId: t?.id }),
        heading: e6.intl.string(e6.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(t$.L, {
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
        children: (0, l.jsx)(nm, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nN = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nm(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(H.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)([t4.default, t5.A, t7.Ay], () => {
                let e = t4.default.getId();
                return t5.A.getVoiceChannelId() === t ? t7.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        A = e6.intl.string(e6.t.VJlc0S);
    switch (s) {
        case 1:
            A = e6.intl.string(e6.t.VJlc0S);
            break;
        case 2:
            (A = e6.intl.string(e6.t.ZYO5OK)),
                c?.speaker ? (A = e6.intl.string(e6.t["/cnSFc"])) : null != c && (A = e6.intl.string(e6.t.btSGOj));
            break;
        case 3:
            A = e6.intl.string(e6.t.wBoE6L);
            break;
        default:
            (0, t9.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: tY()(nd.fI, nd.pF),
                            children: [
                                (0, l.jsx)(t0.Ay, { guildId: a, users: o, showUserPopout: !0, size: t0.DN.SIZE_16 }),
                                (0, l.jsx)(e7.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nd.c8,
                                    children: (0, t8.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(n_, { channel: n, label: A }),
              ],
          });
}
let nC = r.memo(function (e) {
    var t;
    let n,
        i,
        s,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, y.r2)(t)), (i = (0, L.Ay)(t)), (s = f.A.getChannel(i[0]?.id)), n ?? s),
        o = (0, y.BP)(r.id),
        u = (0, y.WG)(r.id),
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
        ? g && (h = (0, l.jsx)(nI, { stageInstance: c, channel: a }))
        : o.entity_type === x.Ps.STAGE_INSTANCE && g
          ? (h = (0, l.jsx)(nI, { stageInstance: c, channel: a }))
          : o.entity_type === x.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nh, { guildEvent: o }))
            : o.entity_type === x.Ps.VOICE && null != a && (h = (0, l.jsx)(nc, { guildEvent: o, channel: a }));
    let _ = r.features.has(H.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !_) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nE, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nS(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("66879"),
                    n.e("97804"),
                    n.e("7265"),
                    n.e("97641"),
                    n.e("90496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: e6.intl.string(e6.t["1+hiP6"]),
        cta: e6.intl.string(e6.t.hvVgAZ),
        trackingSource: H.kZU.HUB_LINK_NOTICE,
        type: H.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var np = n(717421),
    nT = n(450510);
let nM = (e) => {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tg, {
        guild: n,
        onDismissed: () => {
            (0, nT.sF)(nT._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, nT.sF)(nT._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, t2.av)(t), (0, t3.uh)(t.getGuildId(), t.id));
        },
        title: e6.intl.string(e6.t["4Y2AS7"]),
        message: e6.intl.string(e6.t.wTsxTS),
        cta: e6.intl.string(e6.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: H.n5X.HUB_STUDY_ROOM,
    });
};
var nO = n(994190);
let nL = function (e) {
    let { name: t, channel: n } = e,
        i = (0, d.yK)(
            [U.Ay],
            () =>
                U.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        s = (0, t6.gU)(n);
    return (0, l.jsx)(nu, {
        heading: e6.intl.string(e6.t["X2K3/4"]),
        topic: t,
        location: e6.intl.string(e6.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nO.K }) : null,
        children: (0, l.jsx)(nm, { channel: n, speakers: i, voiceType: nN.STUDY_ROOM }),
    });
};
var nf = n(48686);
function nR(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nT.HP], () => nT.HP.hasHotspot(nT._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nf.Q)(t.guild_id),
        r = (0, t1.Ay)(t),
        o = (0, np.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nM, { channel: t, guild: n })
            : (0, l.jsx)(nL, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nU = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eF.Ay], () => eF.Ay.getChannels(t.id)[eF.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(H.xBc.CONNECT, n.channel));
    return t.features.has(H.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nR, { channel: n.channel, guild: t })
        : null;
};
function nx(e) {
    let { guild: t } = e,
        n = () => B.A.dismissNotice(t.id);
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: n,
        cta: e6.intl.string(e6.t.RzWDqY),
        message: e6.intl.format(e6.t["kQ/MDl"], {}),
        type: H.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), e1.A.open(t.id, H.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nD = n(587895),
    nG = n(143582);
function nb(e) {
    let t,
        { guild: n } = e,
        i = (0, w.$s)(n),
        s = () => (0, nG.Hc)(n.id),
        a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)([nD.A], () => {
            let e = [];
            for (let t of a) {
                let n = nD.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? e6.intl.formatToPlainString(e6.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? e6.intl.formatToPlainString(e6.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? e6.intl.formatToPlainString(e6.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : e6.intl.string(e6.t.MvfowF)),
          (0, l.jsx)(tg, {
              guild: n,
              onDismissed: s,
              message: t,
              type: H.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  s(), e1.A.open(n.id, H.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e6.intl.string(e6.t.Rr3MAe),
          }));
}
var ny = n(628287);
let nP = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: n,
        onClick: () => e1.A.open(t.id, H.BEX.COMMUNITY),
        message: e6.intl.string(e6.t["2klD0Z"]),
        trackingSource: H.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: H.n5X.PUBLIC_UPSELL,
        image: ny,
        cta: e6.intl.string(e6.t.hvVgAZ),
    });
};
var nH = n(536194),
    nv = n(780964),
    nj = n(766075);
class nB extends r.PureComponent {
    render() {
        return (0, l.jsx)(tg, {
            guild: this.props.guild,
            onClick: () => (0, nj.openUserSettings)(nv.X.ACCOUNT_PANEL),
            message: e6.intl.format(e6.t["oCd+at"], {}),
            cta: e6.intl.string(e6.t["8dCrV9"]),
            trackingSource: H.kZU.GUILD_MFA_WARNING,
            type: H.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nw = n(720149);
class nk extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, _.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("31344"),
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
            t = e6.intl.formatToPlainString(e6.t.DEn7nu, { invitePeople: e6.intl.string(e6.t.Sd8Ixw) });
        this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nw.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${e6.intl.string(e6.t.VWqWZQ)}
${e6.intl.string(e6.t["0Lgb/K"])}`;
        return (0, l.jsx)(tg, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e6.intl.string(e6.t.Sd8Ixw),
            trackingSource: H.kZU.INVITE_NOTICE,
            type: H.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nX = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            (e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, l.jsx)(tg, {
        guild: t,
        onDismissed: n,
        message: e6.intl.format(e6.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: t_.A.getArticleURL(H.MVz.MAX_MEMBERS),
        }),
        type: H.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nV = n(475358),
    nF = n(675704),
    nK = n(793322);
let nW = (e) => {
    let t = (0, l.jsx)(nV.e, { shortcut: nF.R.binds["0"], keyClassName: tE.Eb });
    return (0, l.jsx)(tg, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, nK.WU)("CHANNEL_NOTICE"),
        message: e6.intl.string(e6.t.Qhk8cs),
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
        this.waitFor(V.A), this.syncWith([V.A], H.tEg);
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
let nQ = new nq(I.h);
var n$ = n(731667);
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
    n6 = "lastHiddenChannelNotice",
    n3 = [
        { type: H.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: u.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: H.n5X.GUILD_BOOSTING,
            store: nQ,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: H.n5X.GUILD_BANNER, store: nZ, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: H.n5X.INVITE, store: n1, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: H.n5X.HUB_LINK, store: n$.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: H.n5X.QUICKSWITCHER, store: nY.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: H.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: H.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    n2 = n3.map((e) => e.store).filter(t9.Vq),
    n8 = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n4(e) {
    e.stopPropagation();
}
let n5 = [];
function n7(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(k.w.get(n6) ?? 0),
        g =
            ((n = t = A.id),
            (i = tR.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([R.A], () => R.A.canWithPartialContext(H.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tf(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n5;
            }, [c])),
        [_, I] = (0, ei.ww)(g, A.id, eE.m.CHANNEL_NOTICES, !0),
        N = null != _,
        m = (0, d.yK)(
            n2,
            () =>
                N
                    ? []
                    : n3
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n8.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, N],
        ),
        [C, S] = (0, ei.kn)(m, eE.m.CHANNEL_NOTICES),
        p = _ ?? C,
        T = null != _ ? I : S,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), k.w.set(n6, e), h(e), T(eE.i.UNKNOWN);
        }, [T]),
        O = (() => {
            switch (p) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(nS, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(nk, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(tK, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(nW, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tX, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tI, { guild: A, markAsDismissed: () => T(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tj, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == O ? null : (0, l.jsx)("div", { onContextMenu: n4, children: O });
}
let n9 = (e) => {
    let { guild: t } = e;
    switch (ee(t)) {
        case J.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nP, { guild: t });
        case J.MAX_MEMBER_COUNT:
            return (0, l.jsx)(nX, { guild: t });
        case J.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nC, { guild: t });
        case J.GUILD_MFA_WARNING:
            return (0, l.jsx)(nB, { guild: t });
        case J.COMMANDS_MIGRATION:
            return (0, l.jsx)(nx, { guild: t });
        case J.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nb, { guild: t });
        case J.HUB_STUDY_ROOM:
            return (0, l.jsx)(nU, { guild: t });
    }
    return nH.P.isDisallowPopupsSet() ? null : (0, l.jsx)(n7, { guild: e.guild });
};
var ie = n(532233);
function it(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: ie.k, ref: i, children: (0, l.jsx)(n9, { guild: t }) })
    );
}
var ii = n(66933),
    is = n(846930),
    il = n(153822);
let ir = "server-settings",
    ia = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class io extends r.PureComponent {
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
            (this.historyUnlisten = eB.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = eB.A.getHistory();
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
                    n.e("65058"),
                    n.e("22766"),
                    n.e("57093"),
                    n.e("72688"),
                    n.e("28323"),
                    n.e("99795"),
                    n.e("47141"),
                    n.e("2677"),
                    n.e("31618"),
                    n.e("31344"),
                    n.e("596"),
                    n.e("31573"),
                    n.e("11973"),
                    n.e("30849"),
                    n.e("68607"),
                    n.e("99961"),
                    n.e("65723"),
                    n.e("68338"),
                    n.e("19393"),
                    n.e("26105"),
                    n.e("84764"),
                    n.e("66879"),
                    n.e("56178"),
                    n.e("46334"),
                    n.e("26963"),
                    n.e("38805"),
                    n.e("91667"),
                    n.e("9336"),
                    n.e("22600"),
                    n.e("46912"),
                    n.e("90072"),
                    n.e("80870"),
                    n.e("13627"),
                    n.e("49011"),
                    n.e("42478"),
                    n.e("52844"),
                    n.e("83928"),
                    n.e("92702"),
                    n.e("53727"),
                    n.e("33177"),
                    n.e("69344"),
                    n.e("39457"),
                    n.e("42987"),
                    n.e("50704"),
                    n.e("57006"),
                    n.e("51143"),
                    n.e("83566"),
                    n.e("58376"),
                    n.e("72295"),
                    n.e("91035"),
                    n.e("31457"),
                    n.e("15081"),
                    n.e("71189"),
                    n.e("77377"),
                    n.e("49937"),
                    n.e("5689"),
                    n.e("49089"),
                    n.e("34359"),
                    n.e("75730"),
                    n.e("15182"),
                    n.e("3020"),
                    n.e("56574"),
                    n.e("4974"),
                    n.e("80186"),
                    n.e("44247"),
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
                    n.e("10471"),
                    n.e("63232"),
                    n.e("11301"),
                    n.e("61737"),
                    n.e("60235"),
                    n.e("68261"),
                    n.e("64827"),
                    n.e("7167"),
                    n.e("96643"),
                    n.e("92789"),
                    n.e("2368"),
                    n.e("21335"),
                    n.e("47834"),
                    n.e("11735"),
                    n.e("3932"),
                    n.e("84569"),
                    n.e("62156"),
                    n.e("6338"),
                    n.e("5636"),
                    n.e("85404"),
                    n.e("44057"),
                    n.e("45638"),
                    n.e("28504"),
                    n.e("38251"),
                    n.e("62175"),
                    n.e("7743"),
                    n.e("45959"),
                    n.e("60658"),
                    n.e("8304"),
                    n.e("18573"),
                    n.e("55936"),
                    n.e("8739"),
                    n.e("8434"),
                    n.e("31988"),
                    n.e("39667"),
                    n.e("34303"),
                    n.e("28866"),
                    n.e("2419"),
                    n.e("73122"),
                    n.e("58038"),
                    n.e("93159"),
                    n.e("25246"),
                    n.e("57269"),
                    n.e("94723"),
                    n.e("62931"),
                    n.e("50417"),
                    n.e("98201"),
                    n.e("93103"),
                    n.e("28367"),
                    n.e("93924"),
                    n.e("76602"),
                    n.e("91763"),
                    n.e("21921"),
                    n.e("9233"),
                    n.e("40402"),
                    n.e("42724"),
                    n.e("39970"),
                    n.e("76418"),
                    n.e("40258"),
                    n.e("86127"),
                    n.e("66495"),
                    n.e("71210"),
                    n.e("8555"),
                    n.e("46070"),
                    n.e("88599"),
                    n.e("75842"),
                    n.e("36863"),
                    n.e("72789"),
                    n.e("88342"),
                    n.e("86814"),
                    n.e("17249"),
                    n.e("71273"),
                    n.e("53917"),
                    n.e("79049"),
                    n.e("9640"),
                    n.e("62422"),
                    n.e("50117"),
                    n.e("90365"),
                    n.e("98765"),
                    n.e("52548"),
                    n.e("89421"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("15186"),
                    n.e("37977"),
                    n.e("47626"),
                    n.e("23354"),
                    n.e("28083"),
                    n.e("82644"),
                    n.e("3589"),
                    n.e("53984"),
                    n.e("43780"),
                    n.e("20590"),
                    n.e("65437"),
                    n.e("74810"),
                    n.e("80830"),
                    n.e("79745"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("96325"),
                    n.e("46844"),
                    n.e("63235"),
                    n.e("45413"),
                    n.e("86672"),
                    n.e("90664"),
                    n.e("64850"),
                    n.e("70104"),
                    n.e("2564"),
                    n.e("47417"),
                    n.e("19558"),
                    n.e("51693"),
                    n.e("58946"),
                    n.e("48330"),
                    n.e("14285"),
                    n.e("3332"),
                    n.e("8362"),
                    n.e("72401"),
                    n.e("52617"),
                    n.e("4744"),
                    n.e("81314"),
                    n.e("18673"),
                    n.e("501"),
                    n.e("67837"),
                    n.e("73384"),
                    n.e("82783"),
                    n.e("86243"),
                    n.e("62862"),
                    n.e("37021"),
                    n.e("42276"),
                    n.e("39171"),
                    n.e("83952"),
                    n.e("44780"),
                    n.e("95340"),
                    n.e("44567"),
                    n.e("5557"),
                    n.e("62718"),
                    n.e("89916"),
                    n.e("1812"),
                    n.e("60773"),
                    n.e("92128"),
                    n.e("9004"),
                    n.e("8018"),
                    n.e("92295"),
                    n.e("49145"),
                    n.e("68763"),
                    n.e("59957"),
                    n.e("99549"),
                    n.e("29666"),
                    n.e("58273"),
                    n.e("20930"),
                    n.e("74610"),
                    n.e("26001"),
                    n.e("30997"),
                    n.e("14591"),
                    n.e("52111"),
                    n.e("57458"),
                    n.e("38601"),
                    n.e("93336"),
                    n.e("1243"),
                    n.e("28136"),
                    n.e("69793"),
                    n.e("15920"),
                    n.e("3930"),
                    n.e("3663"),
                    n.e("27659"),
                    n.e("68530"),
                    n.e("16084"),
                    n.e("43116"),
                    n.e("66580"),
                    n.e("78046"),
                    n.e("83230"),
                    n.e("82486"),
                    n.e("73669"),
                    n.e("10943"),
                    n.e("7775"),
                    n.e("61058"),
                    n.e("50342"),
                    n.e("33097"),
                    n.e("3710"),
                    n.e("45830"),
                    n.e("22547"),
                    n.e("77602"),
                    n.e("10262"),
                    n.e("95602"),
                    n.e("46313"),
                    n.e("5896"),
                    n.e("34409"),
                    n.e("41786"),
                    n.e("29569"),
                    n.e("36002"),
                    n.e("43233"),
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
                    n.e("88307"),
                    n.e("14878"),
                    n.e("26508"),
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
                    n.e("14863"),
                    n.e("60165"),
                    n.e("71167"),
                    n.e("12390"),
                    n.e("13446"),
                    n.e("61309"),
                    n.e("94529"),
                    n.e("76256"),
                    n.e("17699"),
                    n.e("57032"),
                    n.e("45322"),
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
            : (0, l.jsx)(tl, {
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
                  children: (0, l.jsx)(ew.A, {
                      tutorialId: ir,
                      position: "bottom",
                      inlineSpecs: ia,
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
                                title: e6.intl.string(e6.t.Rk2RJk),
                                body: e6.intl.string(e6.t.sFSrFH),
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
                                title: e6.intl.string(e6.t.Q3qa4x),
                                body: e6.intl.string(e6.t.UyHD4O),
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
                          return (0, l.jsx)(eQ.Ay, {
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
            i = null != t && (0, eZ.A)(t);
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
                    children: (0, l.jsx)(eR.A, { guild: t, channel: n ?? eF.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, el.ai)(t.id) ? eq.T : eq.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eZ.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, el.YC)(e);
        return (0, l.jsxs)("nav", {
            className: il.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e6.intl.formatToPlainString(e6.t.nj5gAZ, { guildName: t ?? "" }),
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
        a,
        c,
        A,
        E,
        h,
        g,
        I,
        N,
        p,
        T,
        M,
        O,
        { guildId: L, hideSelectedChannel: U, selectedChannelId: x } = e,
        D = (0, ea.$)("favorite-guild-header-context"),
        { hasAccess: G } = (0, es.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([V.A], () => V.A.getGuild(L)),
        y = (0, er.A)(L),
        P = (0, d.bG)([eX.A], () => eX.A.getGuildDimensions(L).scrollTo),
        v = (0, d.bG)([eY.A], () => eY.A.getChannelId()),
        B = (0, d.bG)([R.A], () => R.A.can(H.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([eV.A], () => eV.A.isUnavailable(L)),
        k = (0, d.bG)([eN.default], () => eN.default.getCurrentUser()),
        { enableStudyGroup: X } = j(b),
        K = (0, et.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!K),
        z = (0, m.A)(L),
        { analyticsLocations: Z } = (0, S.Ay)(C.A.GUILD_HEADER);
    r.useEffect(() => {
        L !== z && Y(!K);
    }, [L, z, K]);
    let [q, Q] = (0, et.Ay)(
            (e) => [
                n3.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        $ = ee(b),
        J = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        em = (0, d.bG)([eK.A], () => eK.A.hasLayers()),
        eC = (0, eU.xr)((e) => e.fullScreenLayers.length > 0),
        eS = (0, d.bG)([ek.A], () => ek.A.shouldShow(ir)),
        ep =
            ((t = (0, d.bG)([V.A], () => V.A.getGuild(L))),
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
        eT = b?.features.has(H.GuildFeatures.HUB) === !0,
        eM = B && b?.features.has(H.GuildFeatures.DISCOVERABLE) === !0,
        eR = (0, d.bG)(
            [eO, eK.A],
            () => null != b && null != k && B && !eK.A.hasLayers() && eO.shouldShowGuildTemplateDirtyTooltip(L),
        ),
        eB = (0, d.bG)([f.A], () => f.A.getChannel(x)),
        { isPopoutOpen: ew } = (0, eo.S)(),
        eF = b?.features.has(H.GuildFeatures.COMMUNITY) ?? !1,
        eZ = ez.Ay.isNewUser(k),
        eq = W && !eZ;
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
    let eQ = (0, en.JZ)(u.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e$ =
            ((p = (0, d.bG)([V.A], () => V.A.getGuild(L))),
            (T = (0, eh._Y)(L)),
            (M =
                p?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                p?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (O = (0, eg.X9)(p)),
            M && O && T),
        { showFollowup: eJ } = (function (e, t) {
            let { isNuxOpen: n, openNux: i } = t,
                [s, l] = r.useState(!1),
                a = (0, en.JZ)(u.M.GUILD_THEME_NUX, { bypassNewUserCheck: !0 }),
                o = null != (0, eL.Kb)(e, "GuildThemeNuxTrigger"),
                [d, c] = (0, ei.kn)(o ? [u.M.GUILD_THEME_NUX] : [], eE.m.GUILD_THEME_NUX),
                A = d === u.M.GUILD_THEME_NUX,
                E = r.useRef(!1);
            return (
                r.useEffect(() => {
                    E.current = !1;
                }, [e]),
                r.useEffect(() => {
                    if (!A || n || E.current) return;
                    let t = setTimeout(() => {
                        E.current = !0;
                        let t = !1;
                        Promise.resolve(
                            i({
                                guildId: e,
                                markAsDismissed: (e) => {
                                    t || ((t = !0), c(e, !0));
                                },
                                onComplete: () => l(!0),
                            }),
                        ).catch(() => {
                            E.current = !1;
                        });
                    }, 2e3);
                    return () => clearTimeout(t);
                }, [A, n, e, c, i]),
                { showFollowup: s || (o && a) }
            );
        })(L, {
            isNuxOpen: (0, _.useHasModalOpen)(ef.u),
            openNux: r.useCallback((e) => {
                let { guildId: t, markAsDismissed: i, onComplete: s } = e;
                return (0, _.openModalLazy)(
                    async () => {
                        let e = await Promise.resolve().then(n.bind(n, 181880));
                        return (n) =>
                            (0, l.jsx)(e.default, {
                                guildId: t,
                                markAsDismissed: i,
                                onComplete: s,
                                transitionState: n.transitionState,
                                onClose: n.onClose,
                            });
                    },
                    { modalKey: ef.u, onCloseCallback: () => i(eE.i.USER_DISMISS) },
                );
            }, []),
        }),
        e0 = (0, d.bG)([eY.A], () => eY.A.getChannelId()),
        e1 = (0, d.bG)([eW.A], () => eW.A.desyncedVoiceStatesCount),
        e6 = (0, ev.A)(L);
    ii.A.useConfig({ guildId: L, location: "guild_sidebar" });
    let e3 = (0, ex.C$)(L, "GuildSidebar"),
        e2 = (0, d.bG)([V.A], () => V.A.getGuild(L)?.features.has(H.GuildFeatures.GAME_SERVERS) ?? !1, [L]),
        e8 = e3 && !e2 && !1 === e6,
        e4 = (0, eG.J)("GuildSidebar"),
        e5 = (0, eD.S)(L, "GuildSidebar"),
        e7 = e3 && !e2 && e5 && !1 === e6,
        e9 = (0, ej.A)(),
        te = (0, eP.A)(L),
        tt = !1 === e6 && e9 && null != te,
        tn = (0, eH.A)(L),
        ti = !1 === e6 && e9 && null != tn,
        ts = [];
    eJ && ts.push(u.M.GUILD_THEME_NUX_FOLLOWUP),
        eT && ts.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        ep && ts.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eM && ts.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e6 && ts.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e8 && ts.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        e7 && ts.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e$ && ts.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [tl, tr] = (0, ei.kn)(ts, eE.m.GUILD_HEADER_TOOLTIPS),
        [ta, to] = (0, ey.vB)(e4 && e3 && !1 === e6 && !(0, el.ai)(L), eE.m.GUILD_HEADER_TOOLTIPS),
        [td, tu] = (0, ei.D8)(
            tt ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            L,
            { cooldownDurationMs: eb.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tc, tA] = (0, ei.D8)(
            ti ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            L,
            { cooldownDurationMs: eb.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tE = r.useMemo(
            () =>
                null != tl
                    ? { contentType: tl, data: null, markAsDismissed: tr }
                    : ta === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                      ? { contentType: ta, data: null, markAsDismissed: to }
                      : td === u.M.BOOST_TO_UNLOCK_COACHMARK && null != te
                        ? { contentType: td, data: { featuredPowerup: te }, markAsDismissed: tu }
                        : tc === u.M.EXPIRING_POWERUP_COACHMARK && null != tn
                          ? { contentType: tc, data: { featuredExpiringPowerup: tn }, markAsDismissed: tA }
                          : null,
            [tl, ta, td, tc, te, tn, tr, to, tu, tA],
        );
    return (0, l.jsx)(io, {
        guildId: L,
        hideSelectedChannel: U,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: U ? null : x,
        selectedChannel: eB,
        selectedVoiceChannelId: v,
        voiceStates: y,
        rtcConnectedChannelId: e0,
        rtcDesyncedVoiceStatesCount: e1,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != $ || q,
        anyLayerOpen: J || em || eC,
        showGuildHeaderTutorial: eS,
        showGuildTemplateDirtyTooltip: eR,
        showNewUnreadsBar: eF,
        isHeaderPopoutOpen: ew,
        enableStudyGroup: X,
        isGuildHeaderDismissibleTooltipShown: Q,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: eQ,
        shouldRenderBurstCoachmark: eq,
        guildHeaderContentDescriptor: tE,
        onFavoriteGuildContextMenu: D,
        hasFavoritesAccess: G,
    });
}
