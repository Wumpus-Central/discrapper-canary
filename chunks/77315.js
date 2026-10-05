(n.r(t), n.d(t, { default: () => ia }), n(321073));
var i,
    s = n(477900),
    l = n(582128),
    r = n(202091),
    a = n(462180),
    o = n(17928),
    d = n(554146),
    u = n(451988),
    c = n(43105),
    A = n(900797),
    h = n(847374),
    E = n(922016),
    m = n(192308),
    g = n(73153),
    I = n(442433),
    C = n(793574),
    _ = n(688810),
    N = n(285059),
    p = n(63995);
n(113783);
var S = n(518769),
    T = n(446600),
    M = n(624265);
n(616356);
var f = n(734057),
    L = n(576705),
    R = n(607567),
    x = n(988794);
let D = { hiddenEventsAndStages: [] };
class G extends o.Ay.PersistedStore {
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
let O = new G(g.h, {
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
var U = n(508654);
n(818348);
var b = n(320426),
    y = n(915043),
    P = n(506774),
    H = n(498642),
    v = n(71393),
    j = n(124759),
    B = n(652215);
let w = "publicUpsellChannelNoticeGuilds",
    k = new Set();
class X extends o.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        (this.waitFor(L.A, v.A, H.A), this.syncWith([L.A, v.A, H.A], B.tEg), (k = new Set(P.w.get(w)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return;
        let t = H.A.getMemberCount(e.id);
        return (
            !k.has(e.id) &&
            null != t &&
            t >= j.dH &&
            L.A.can(B.xBc.ADMINISTRATOR, e) &&
            !e.features.has(B.GuildFeatures.COMMUNITY)
        );
    }
}
let V = new X(g.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!k.has(t)) return (k.add(t), P.w.set(w, k), !0);
    },
});
var K = n(992250);
let F = { MAX_MEMBER_COUNT: new Set() };
class W extends o.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        (this.waitFor(L.A, v.A, H.A),
            this.syncWith([L.A, v.A, H.A], B.tEg),
            P.w.remove(B.n5X.MAX_MEMBER_COUNT_100),
            P.w.remove(B.n5X.MAX_MEMBER_COUNT_250),
            (F[B.n5X.MAX_MEMBER_COUNT] = new Set(P.w.get(B.n5X.MAX_MEMBER_COUNT)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = H.A.getMemberCount(e.id) ?? 0,
            n = L.A.can(B.xBc.ADMINISTRATOR, e);
        return !F[B.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let z = new W(g.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!F[B.n5X.MAX_MEMBER_COUNT].has(t))
            return (F[B.n5X.MAX_MEMBER_COUNT].add(t), P.w.set(B.n5X.MAX_MEMBER_COUNT, F[B.n5X.MAX_MEMBER_COUNT]), !0);
    },
});
var Y =
    (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (i[(i.CLAN_UPSELL = 6)] = "CLAN_UPSELL"),
    i);
function q(e) {
    let t = e?.id ?? B.dJq,
        n = (0, o.bG)([V], () => V.isVisible(e)),
        i = (0, o.bG)([z], () => z.isVisible(e)),
        s = (function (e) {
            let t = (0, M.Ay)(e),
                n = f.A.getChannel(t[0]?.id),
                i = (0, o.bG)([T.A], () => T.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, U.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: r } = (0, o.cf)(
                    [O],
                    () => ({
                        isStageNoticeHidden: O.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: O.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !r;
            return null != i && !l;
        })(t),
        r = (0, o.bG)([K.A], () => K.A.isVisible(e)),
        a = b.A.useShouldShowChannelNotice(t),
        d = (0, y.$s)(e).length > 0,
        u = (0, U.WG)(t);
    if (
        (l.useEffect(() => {
            N.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != u) return 2;
    if (r) return 3;
    if (a) return 4;
    else if (d) return 5;
    return null;
}
var Q = n(355903),
    Z = n(826673),
    $ = n(131607),
    J = n(93055),
    ee = n(5180),
    et = n(826320),
    en = n(428784),
    ei = n(831617),
    es = n(72152),
    el = n(877624),
    er = n(549996),
    ea = n(49999),
    eo = n(15073),
    ed = n(174459),
    eu = n(488926),
    ec = n(45780),
    eA = n(567305),
    eh = n(555325),
    eE = n(469993),
    em = n(260509),
    eg = n(287809),
    eI = n(568185);
let eC = "hasSeenGuildTemplatePromotionTooltip",
    e_ = {},
    eN = !0 === P.w.get(eC);
function ep(e) {
    let { guildId: t } = e;
    e_ = { ...e_, [t]: !1 };
}
class eS extends o.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return e_[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eN;
    }
}
let eT = new eS(g.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        e_ = { ...e_, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        (P.w.set(eC, !0), (eN = !0));
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        e_ = { ...e_, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: ep,
    GUILD_TEMPLATE_DELETE_SUCCESS: ep,
});
var eM = n(875317),
    ef = n(181880),
    eL = n(285406),
    eR = n(361158),
    ex = n(783514),
    eD = n(379229),
    eG = n(229548),
    eO = n(139032),
    eU = n(128313),
    eb = n(363487),
    ey = n(342220),
    eP = n(383272),
    eH = n(414133),
    ev = n(864310),
    ej = n(972829),
    eB = n(568065),
    ew = n(320989),
    ek = n(728321),
    eX = n(79858),
    eV = n(72314),
    eK = n(919638),
    eF = n(808728),
    eW = n(186111),
    ez = n(584569),
    eY = n(763827),
    eq = n(158045),
    eQ = n(885631),
    eZ = n(144888),
    e$ = n(960628),
    eJ = n(206248),
    e0 = n(498470),
    e1 = n(807098),
    e3 = n(637706),
    e6 = n(788883),
    e8 = n(7667);
function e5(e) {
    let { guildId: t, componentId: n, promotionId: i, coachmark: r, targetElementRef: a, markAsDismissed: o } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        c = (0, e1.T)(r.asset),
        { terms: A } = (0, e8.A)(i),
        h = l.useCallback(() => {
            o(ea.i.DISMISS);
        }, [o]),
        E = l.useCallback(() => {
            ((0, e0.h)({
                buttonAction: r.button?.buttonAction,
                deeplinkSection: r.button?.deeplinkSection,
                applicationId: r.button?.navigableStorefrontApplicationId?.value,
                guildId: t,
                analyticsLocation: { page: B.liQ.GUILD_CHANNEL, section: B.JJy.GUILD_HEADER },
                analyticsLocations: u,
            })(),
                o(ea.i.TAKE_ACTION));
        }, [r.button, t, u, o]),
        m = (0, e3.C)(r.helpArticle, ""),
        g = [r.body, A].filter((e) => "" !== e).join(" "),
        { icon: I } = (0, e0.x)({ buttonAction: r.button?.buttonAction }),
        C = r.button?.copy ?? "";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e6.A, {
                componentType: el.C.GUILD_HEADER_COACHMARK,
                componentId: n,
                promotionId: i,
                dismissibleContent: d.M.GUILD_HEADER_COACHMARK,
            }),
            (0, s.jsx)(eJ.H, {
                targetElementRef: a,
                title: r.header,
                body: g,
                assetUrl: c ?? "",
                disableMediaViewer: !0,
                action: "" !== C ? { text: C, variant: "primary", icon: I, iconPosition: "start", onClick: E } : void 0,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                onRequestClose: h,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var e7 = n(562708),
    e2 = n(702841),
    e9 = n(139286),
    e4 = n(468689),
    te = n(375708),
    tt = n(330766);
function tn(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        l = (0, e2.bG)([v.A, eg.default], () => {
            let e = eg.default.getCurrentUser(),
                n = v.A.getGuild(t);
            return null != n && (0, em.bM)(n, e);
        });
    return (
        (0, e9.A)({
            type: e7.ImpressionTypes.POPOUT,
            name: e7.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: l },
        }),
        (0, s.jsx)(c.A, {
            targetElementRef: i,
            title: te.intl.string(te.t.C0m4rQ),
            body: te.intl.string(te.t.zOHfEX),
            graphic: { type: "image", src: tt },
            actions: [
                {
                    text: te.intl.string(te.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e4.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(ea.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function ti(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(eJ.H, {
        targetElementRef: i,
        title: te.intl.string(te.t.gCgirr),
        body: te.intl.string(te.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: te.intl.string(te.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e4.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS, void 0, B.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(ea.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var ts = n(834730),
    tl = n(821609),
    tr = n(736759);
function ta(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: tr.kL,
        children: [
            (0, s.jsx)("div", { className: tr.Wn }),
            (0, s.jsx)(ts.E, { variant: "text-sm/normal", className: tr.Qs, children: te.intl.string(te.t.rdzeVP) }),
            (0, s.jsx)(tl.$, {
                variant: "overlay-primary",
                text: te.intl.string(te.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(ea.i.AUTO);
                },
            }),
        ],
    });
}
var to = n(270533);
function td(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(c.A, {
        targetElementRef: i,
        title: te.intl.string(te.t.Hgd22r),
        body: te.intl.string(te.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: te.intl.string(te.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e4.default.open(t.id, B.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(ea.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function tu(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = l.useRef(null);
    return (0, s.jsx)(E.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, s.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(i) : t,
            }),
        position: "bottom",
        align: "center",
        animation: E.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, s.jsx)("div", { ref: i, children: n() }),
    });
}
let tc = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: l, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, s.jsx)(s.Fragment, {
        children: (function () {
            switch (l) {
                case d.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) =>
                            (0, s.jsx)(to.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) =>
                            (0, s.jsx)(to.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) => (0, s.jsx)(to.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) => (0, s.jsx)(to.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(tu, {
                        renderPopout: (t) =>
                            (0, s.jsx)(to.Gw, {
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
                case d.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = r?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(tu, {
                        renderPopout: (t) =>
                            (0, s.jsx)(to.Mr, {
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
                case d.M.GUILD_HEADER_COACHMARK: {
                    let e = r?.marketingComponent;
                    if (null == e) return i();
                    return (0, s.jsx)(tu, {
                        renderPopout: (t) =>
                            (0, s.jsx)(e5, {
                                guildId: n.id,
                                componentId: e.componentId,
                                promotionId: e.promotionId,
                                coachmark: e.coachmark,
                                targetElementRef: t,
                                markAsDismissed: a,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case d.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) => (0, s.jsx)(tn, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) => (0, s.jsx)(td, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, s.jsx)(tu, {
                        renderPopout: (0, s.jsx)(ta, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, s.jsx)(tu, {
                        renderPopout: (e) => (0, s.jsx)(ti, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tA = n(158390),
    th = n(636537),
    tE = n(927813);
let tm = null;
class tg extends o.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tm;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tm?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tm?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tm) return [];
        let e = tm;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tI = new tg(g.h, {
        LOGOUT: function () {
            tm = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tm = t;
        },
    }),
    tC = [];
async function t_() {
    let { body: e } = await th.Bo.get({ url: B.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    g.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tN = (0, o.UT)(tI, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tI.getMap(),
    load: () => t_(),
    staleAfter: tE.A.Seconds.DAY,
    retryConfig: { backoff: () => new tA.A(5 * tE.A.Millis.MINUTE), maxRetries: 10 },
});
function tp(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tN(t);
    return n?.[e] ?? tC;
}
let tS = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tT = n(509434),
    tM = n(975807),
    tf = n(435558),
    tL = n.n(tf),
    tR = n(862482),
    tx = n(939249),
    tD = n(789645),
    tG = n(297264),
    tO = n(95561),
    tU = n(446406);
let tb = tL().debounce(tO.Ay.trackWithMetadata, 500),
    ty = function (e) {
        let {
            guild: t,
            title: n,
            message: i,
            image: r,
            type: a,
            imageMarginX: o,
            imageMarginTop: d,
            trackingSource: u,
            undismissable: c,
            onDismissed: A,
            onClick: h,
            cta: E,
            ctaColor: m,
        } = e;
        l.useEffect(() => {
            tb(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let g = null;
        "function" == typeof E
            ? (g = E())
            : null != E &&
              (g = (0, s.jsx)(tR.$n, {
                  "data-migration-pending": !0,
                  className: tU.HM,
                  size: tR.$n.Sizes.SMALL,
                  onClick: function () {
                      (null != a &&
                          ed.default.track(B.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          h?.());
                  },
                  fullWidth: !0,
                  color: m,
                  children: E,
              }));
        let I = null != o ? `${o}px` : "16px";
        return (0, s.jsxs)("div", {
            className: tU.kX,
            children: [
                !0 === c
                    ? null
                    : (0, s.jsx)(tx.D, {
                          onClick: function () {
                              (tO.Ay.trackWithMetadata(B.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.());
                          },
                          className: tU.VN,
                          "aria-label": te.intl.string(te.t.WAI6xu),
                          children: (0, s.jsx)(tD.P, { size: "md", color: "currentColor", className: tU.ut }),
                      }),
                null != r &&
                    (0, s.jsx)("div", {
                        className: tU.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof r ? (0, s.jsx)("img", { className: tU.Sl, src: r, alt: "" }) : r,
                    }),
                (0, s.jsxs)("div", {
                    className: tU.iU,
                    children: [
                        null != n
                            ? (0, s.jsx)(tG.D, { variant: "heading-md/semibold", className: tU.DD, children: n })
                            : null,
                        (0, s.jsx)(ts.E, { variant: "text-sm/normal", children: i }),
                        g,
                    ],
                }),
            ],
        });
    };
var tP = n(201438),
    tH = n(194362),
    tv = n(661531),
    tj = n(307301),
    tB = n(701115);
function tw(e) {
    let { imageSrc: t } = e;
    return (0, s.jsxs)("div", {
        className: tB.kL,
        children: [
            (0, s.jsx)("div", { className: tB.j3, children: (0, s.jsx)("img", { className: tB.Su, src: t, alt: "" }) }),
            (0, s.jsx)("div", {
                className: tB.gm,
                children: (0, s.jsx)("div", {
                    className: tB.WA,
                    children: (0, s.jsx)(tj.j, { size: "sm", color: tv.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tk = n(63142);
function tX(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tp(t.id)[0] ?? null,
        { coverImageUrl: l, gameName: r } = (0, tP.A)(i, te.intl.string(te.t.VQq92a));
    if (null == l) return null;
    let a = t.features.has(B.GuildFeatures.VERIFIED) ? te.intl.string(te.t.uUARXe) : te.intl.string(te.t["0Dx29f"]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => n(ea.i.USER_DISMISS),
        title: te.intl.format(te.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, s.jsxs)("span", {
            className: tk.m,
            children: [te.intl.string(te.t["2u6ZlY"]), (0, s.jsx)(tT.I, { size: "xs", color: "currentColor" })],
        }),
        type: B.n5X.GAME_CLAIM,
        image: (0, s.jsx)(tw, { imageSrc: l }),
        imageMarginX: 60,
        onClick: async () => {
            n(ea.i.TAKE_ACTION);
            let e = await (0, tH.a)(B.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tM.A)(e);
        },
    });
}
var tV = n(631305),
    tK = n(473145),
    tF = n(625633);
function tW(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tK.Os)(t, B.TVA.TIER_2),
        { analyticsLocations: l } = (0, _.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => n(ea.i.UNKNOWN),
        cta: te.intl.string(te.t.oPAx73),
        message: te.intl.format(te.t.AcaNYw, { boostsNeeded: i }),
        type: B.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tV.A)({
                analyticsLocations: l,
                analyticsSourceLocation: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tF.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tz = n(878678);
class tY extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tz.K4)({ guildId: e.id, location: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, s.jsx)(ty, {
            guild: e,
            onDismissed: () => n(ea.i.USER_DISMISS),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? te.intl.string(te.t.hlitVQ) : te.intl.string(te.t.XHtaDD),
            cta: te.intl.string(te.t["vqb+H1"]),
            trackingSource: B.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: B.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tq = o.Ay.connectStores([H.A], (e) => {
    let { guild: t } = e;
    return { memberCount: H.A.getMemberCount(t.id) };
})(tY);
var tQ = n(503698),
    tZ = n.n(tQ),
    t$ = n(933832),
    tJ = n(782603),
    t0 = n(81466),
    t1 = n(116085),
    t3 = n(597601),
    t6 = n(451394),
    t8 = n(104171),
    t5 = n(47167),
    t7 = n(713654),
    t2 = n(976860),
    t9 = n(747376),
    t4 = n(110618),
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
    nh = n(659463);
let nE = l.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: l,
        detailsIcon: r,
        topic: a,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, s.jsxs)("div", {
        className: nh.kX,
        children: [
            (0, s.jsxs)("div", {
                className: tZ()(nh.fI, nh.pF),
                children: [
                    (0, s.jsx)("div", { className: nh.Ok }),
                    (0, s.jsx)(ts.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nh.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, s.jsx)(tx.D, {
                            onClick: o,
                            className: nh.ut,
                            "aria-label": te.intl.string(te.t.cpT0Cq),
                            children: (0, s.jsx)(tD.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, s.jsx)(tG.D, { color: "text-strong", variant: "heading-md/semibold", className: nh.eq, children: a }),
            (0, s.jsxs)("div", {
                className: tZ()(nh.fI, nh.pF),
                children: [
                    i,
                    (0, s.jsx)(ts.E, { color: "none", variant: "text-xs/normal", className: nh.HA, children: n }),
                    null != l &&
                        null != r &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(ts.E, {
                                    className: nh.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, s.jsx)(ts.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nh.zH,
                                    children: l,
                                }),
                            ],
                        }),
                ],
            }),
            d,
        ],
    });
});
function nm(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t5.Ay)(n),
        l = (0, o.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t7.gU)(n);
    return (0, s.jsx)(nE, {
        onClickCloseIcon: () => (0, nr.iF)({ eventId: t?.id }),
        heading: te.intl.string(te.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, s.jsx)(r, { size: "xs", color: "currentColor", className: nh.uE }) : null,
        children: (0, s.jsx)(nS, { channel: n, speakers: l, voiceType: 1 }),
    });
}
function ng(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nc.G3)(t),
        l = (0, o.bG)([nl.Ay], () => nl.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, o.bG)([na.A], () => na.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != r || (0, nr.pE)(t.id),
        (0, s.jsx)(tl.$, {
            onClick: function () {
                ((0, nA.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nr.Lx)(t.id), 1e3)),
                    ed.default.track(B.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: te.intl.string(te.t.DlcqlU),
            icon: l ? t$.CheckmarkLargeIcon : tJ.BellIcon,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nI(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nu.oF)(t),
        r = null != i ? (0, no.y)(i, !0) : null,
        a = (0, nu.WN)(t),
        o = (0, t5.Ay)(a),
        d = (0, t7.gU)(a),
        { startTime: u, endTime: c } = (0, nd.Ay)(t),
        { startDateTimeString: A, upcomingEvent: h, diffMinutes: E } = (0, nc.CC)(u.toISOString(), c?.toISOString()),
        m = h
            ? E > 0
                ? te.intl.formatToPlainString(te.t.PQlCWk, { minutes: E })
                : te.intl.string(te.t.WINqKV)
            : te.intl.formatToPlainString(te.t.DC6h3G, { date: A });
    return (
        l.useEffect(() => {
            ed.default.track(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, s.jsxs)("div", {
            className: nh.kX,
            children: [
                (0, s.jsxs)("div", {
                    className: nh.fI,
                    children: [
                        (0, s.jsx)(tx.D, {
                            onClick: () => (0, ns.uR)({ eventId: t.id }),
                            className: nh.oP,
                            children: (0, s.jsx)(ts.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nh.eq,
                                children: t.name,
                            }),
                        }),
                        (0, s.jsx)(tx.D, {
                            onClick: () => {
                                (ed.default.track(B.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, nr.Lx)(t.id));
                            },
                            className: nh.ut,
                            "aria-label": te.intl.string(te.t.cpT0Cq),
                            children: (0, s.jsx)(tD.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tZ()(nh.fI, nh.pF),
                    children: [
                        (0, s.jsx)(t0.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nh.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, s.jsx)(ts.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nh.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tZ()(nh.fI, nh.pF),
                    children: [
                        null != d
                            ? (0, s.jsx)(d, { size: "xs", color: "currentColor", className: nh.uE })
                            : (0, s.jsx)(t1.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nh.uE,
                              }),
                        (0, s.jsx)(ts.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nh.HA,
                            children: o ?? r,
                        }),
                    ],
                }),
                (0, s.jsx)(ng, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nC(e) {
    let { guildEvent: t } = e,
        n = (0, nu.oF)(t);
    return null == n
        ? null
        : (0, s.jsx)(nE, {
              onClickCloseIcon: () => (0, nr.iF)({ eventId: t?.id }),
              heading: te.intl.string(te.t["1+boPi"]),
              topic: t.name,
              location: (0, no.y)(n, !0),
              locationIcon: (0, s.jsx)(t1.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nh.uE,
              }),
              children: (0, s.jsx)(n_, { guildEvent: t }),
          });
}
function n_(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, ns.uR)({ eventId: t.id });
        }, [t]);
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nh.PD,
        children: (0, s.jsx)(tl.$, {
            variant: "active",
            size: "sm",
            text: te.intl.string(te.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nN(e) {
    let { channel: t, label: n } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nh.PD,
        children: (0, s.jsx)(tl.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t9.av)(t), (0, t2.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function np(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t5.Ay)(n),
        l = (0, o.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, S.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, o.bG)([p.A], () => p.A.getParticipantCount(n.id, S.ip.AUDIENCE), [n.id]),
        a = te.intl.formatToPlainString(te.t["+v2pN2"], { count: `${r}` });
    return (0, s.jsx)(nE, {
        onClickCloseIcon: () => (0, nr.iF)({ stageId: t?.id }),
        heading: te.intl.string(te.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, s.jsx)(t3.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nh.uE,
        }),
        locationIcon: (0, s.jsx)(t6.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nh.uE,
        }),
        topic: t.topic,
        children: (0, s.jsx)(nS, { channel: n, speakers: l, voiceType: 2 }),
    });
}
function nS(e) {
    var t;
    let { channel: n, speakers: i, voiceType: r } = e,
        a = n.getGuildId(),
        d = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, o.bG)([L.A], () => L.A.can(B.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, o.bG)(
                [ne.default, nt.Ay, nn.Ay],
                () => {
                    let e = ne.default.getId();
                    return nt.Ay.getVoiceChannelId() === t ? nn.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = te.intl.string(te.t.VJlc0S);
    switch (r) {
        case 1:
            A = te.intl.string(te.t.VJlc0S);
            break;
        case 2:
            ((A = te.intl.string(te.t.ZYO5OK)),
                c?.speaker ? (A = te.intl.string(te.t["/cnSFc"])) : null != c && (A = te.intl.string(te.t.btSGOj)));
            break;
        case 3:
            A = te.intl.string(te.t.wBoE6L);
            break;
        default:
            (0, ni.xb)(r);
    }
    return null == a
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  d.length > 0
                      ? (0, s.jsxs)("div", {
                            className: tZ()(nh.fI, nh.pF),
                            children: [
                                (0, s.jsx)(t8.Ay, { guildId: a, users: d, showUserPopout: !0, size: t8.DN.SIZE_16 }),
                                (0, s.jsx)(ts.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nh.c8,
                                    children: (0, t4.c)(a, d, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, s.jsx)(nN, { channel: n, label: A }),
              ],
          });
}
let nT = l.memo(function (e) {
    var t;
    let n,
        i,
        l,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, U.r2)(t)), (i = (0, M.Ay)(t)), (l = f.A.getChannel(i[0]?.id)), n ?? l),
        d = (0, U.BP)(r.id),
        u = (0, U.WG)(r.id),
        c = (0, o.bG)([T.A], () => T.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: A, isEventNoticeHidden: h } = (0, o.cf)(
            [O],
            () => ({
                isStageNoticeHidden: O.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: O.isLiveChannelNoticeHidden({ eventId: d?.id }),
            }),
            [c, d],
        ),
        E = null,
        m = null != c && null != a && !A;
    null == d || h
        ? m && (E = (0, s.jsx)(np, { stageInstance: c, channel: a }))
        : d.entity_type === x.Ps.STAGE_INSTANCE && m
          ? (E = (0, s.jsx)(np, { stageInstance: c, channel: a }))
          : d.entity_type === x.Ps.EXTERNAL
            ? (E = (0, s.jsx)(nC, { guildEvent: d }))
            : d.entity_type === x.Ps.VOICE && null != a && (E = (0, s.jsx)(nm, { guildEvent: d, channel: a }));
    let g = r.features.has(B.GuildFeatures.COMMUNITY);
    if (null == E && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        E = (0, s.jsx)(nI, { guildEvent: e, noticeType: t });
    }
    return E;
});
function nM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: r = 288, height: a = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: r, height: a },
        src: "https://cdn.discordapp.com/assets/content/22b530628b0360931343feee81e79f9e43c02bf07c24cb4ee9f657b3ec8a0e6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nf = n(863888);
function nL(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: () => i(ea.i.UNKNOWN),
        onClick: function () {
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("638781"),
                    n.e("197804"),
                    n.e("807265"),
                    n.e("797641"),
                    n.e("890496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        },
        message: te.intl.string(te.t["1+hiP6"]),
        cta: te.intl.string(te.t.hvVgAZ),
        trackingSource: B.kZU.HUB_LINK_NOTICE,
        type: B.n5X.HUB_LINK,
        image: (0, s.jsx)("div", { className: nf.b, children: (0, s.jsx)(nM, { alt: "", ariaHidden: !0 }) }),
    });
}
function nR(e) {
    let { guild: t } = e;
    function n() {
        return b.A.dismissNotice(t.id);
    }
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        cta: te.intl.string(te.t.RzWDqY),
        message: te.intl.format(te.t["kQ/MDl"], {}),
        type: B.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), e4.default.open(t.id, B.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nx = n(587895),
    nD = n(143582);
function nG(e) {
    let t,
        { guild: n } = e,
        i = (0, y.$s)(n);
    function r() {
        return (0, nD.Hc)(n.id);
    }
    let a = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        d = (0, o.yK)(
            [nx.A],
            () => {
                let e = [];
                for (let t of a) {
                    let n = nx.A.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [a],
        );
    return 0 === d.length
        ? null
        : ((t =
              1 === d.length
                  ? te.intl.formatToPlainString(te.t["Egq+G/"], { a: d[0].name })
                  : 2 === d.length
                    ? te.intl.formatToPlainString(te.t.LxU9R3, { a: d[0].name, b: d[1].name })
                    : 3 === d.length
                      ? te.intl.formatToPlainString(te.t.crKXMC, { a: d[0].name, b: d[1].name, c: d[2].name })
                      : te.intl.string(te.t.MvfowF)),
          (0, s.jsx)(ty, {
              guild: n,
              onDismissed: r,
              message: t,
              type: B.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (r(), e4.default.open(n.id, B.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: te.intl.string(te.t.Rr3MAe),
          }));
}
var nO = n(628287);
let nU = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), g.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        onClick: () => e4.default.open(t.id, B.BEX.COMMUNITY),
        message: te.intl.string(te.t["2klD0Z"]),
        trackingSource: B.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: B.n5X.PUBLIC_UPSELL,
        image: nO,
        cta: te.intl.string(te.t.hvVgAZ),
    });
};
var nb = n(536194),
    ny = n(780964),
    nP = n(766075);
class nH extends l.PureComponent {
    render() {
        return (0, s.jsx)(ty, {
            guild: this.props.guild,
            onClick: () => (0, nP.openUserSettings)(ny.X.ACCOUNT_PANEL),
            message: te.intl.format(te.t["oCd+at"], {}),
            cta: te.intl.string(te.t["8dCrV9"]),
            trackingSource: B.kZU.GUILD_MFA_WARNING,
            type: B.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nv = n(148494);
class nj extends l.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, m.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("683621"),
                n.e("711162"),
                n.e("159957"),
                n.e("728136"),
                n.e("216084"),
                n.e("284819"),
            ]).then(n.bind(n, 405342));
            return (n) => (0, s.jsx)(t, { ...n, guild: e, source: B.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = nt.Ay.getChannelId(),
            t = te.intl.formatToPlainString(te.t.DEn7nu, { invitePeople: te.intl.string(te.t.Sd8Ixw) });
        (this.props.markAsDismissed(ea.i.UNKNOWN), null != e && nv.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${te.intl.string(te.t.VWqWZQ)}
${te.intl.string(te.t["0Lgb/K"])}`;
        return (0, s.jsx)(ty, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: te.intl.string(te.t.Sd8Ixw),
            trackingSource: B.kZU.INVITE_NOTICE,
            type: B.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
var nB = n(975571);
let nw = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), g.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(ty, {
        guild: t,
        onDismissed: n,
        message: te.intl.format(te.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: nB.A.getArticleURL(B.MVz.MAX_MEMBERS),
        }),
        type: B.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nk = n(475358),
    nX = n(675704),
    nV = n(793322);
let nK = function (e) {
    let t = (0, s.jsx)(nk.e, { shortcut: nX.R.binds["0"], keyClassName: tU.Eb });
    return (0, s.jsx)(ty, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(ea.i.UNKNOWN),
        onClick: () => (0, nV.WU)("CHANNEL_NOTICE"),
        message: te.intl.string(te.t.Qhk8cs),
        cta: t,
        trackingSource: B.kZU.QUICK_SWITCHER_NOTICE,
        type: B.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nF = n(174768);
class nW extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(v.A), this.syncWith([v.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(B.GuildFeatures.BANNER) && Date.now() - t >= B.D2K;
    }
}
let nz = new nW(g.h);
class nY extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.MANAGE_GUILD, e);
    }
}
let nq = new nY(g.h);
var nQ = n(731667);
function nZ() {
    return !0;
}
class n$ extends o.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], nZ));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.ADMINISTRATOR, e);
    }
}
let nJ = new n$(g.h),
    n0 = "lastHiddenChannelNotice",
    n1 = [
        {
            type: B.n5X.GUILD_BOOSTING,
            store: nq,
            dismissibleContentType: d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: B.n5X.GUILD_BANNER, store: nz, dismissibleContentType: d.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: B.n5X.INVITE, store: nJ, dismissibleContentType: d.M.CHANNEL_NOTICE_INVITE },
        { type: B.n5X.HUB_LINK, store: nQ.A, dismissibleContentType: d.M.CHANNEL_NOTICE_HUBLINK },
        { type: B.n5X.QUICKSWITCHER, store: nF.A, dismissibleContentType: d.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: B.n5X.GAME_CLAIM, dismissibleContentType: d.M.GAME_CLAIM_COACHMARK },
    ],
    n3 = n1.map((e) => e.store).filter(ni.Vq),
    n6 = new Set([d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, d.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n8(e) {
    e.stopPropagation();
}
let n5 = [];
function n7(e) {
    var t, n;
    let i,
        r,
        a,
        u,
        c,
        { guild: A } = e,
        [h, E] = l.useState(P.w.get(n0) ?? 0),
        m =
            ((n = t = A.id),
            (i = tS.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (r = (0, o.bG)([L.A], () => L.A.canWithPartialContext(B.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (u = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tp(e, t).length > 0;
            })(t, (a = i && r))),
            (c = a && u),
            l.useMemo(() => {
                let e = [];
                return (c && e.push(d.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n5);
            }, [c])),
        [g, I] = (0, $.ww)(m, A.id, ea.m.CHANNEL_NOTICES, !0),
        C = null != g,
        _ = (0, o.yK)(
            n3,
            () =>
                C
                    ? []
                    : n1
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, h) && !n6.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, h, C],
        ),
        [N, p] = (0, $.kn)(_, ea.m.CHANNEL_NOTICES),
        S = g ?? N,
        T = null != g ? I : p,
        M = l.useCallback(
            function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea.i.UNKNOWN;
                ((e = Date.now()), P.w.set(n0, e), E(e), T(t));
            },
            [T],
        ),
        f = (() => {
            switch (S) {
                case d.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, s.jsx)(nL, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_INVITE:
                    return (0, s.jsx)(nj, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, s.jsx)(tq, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, s.jsx)(nK, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, s.jsx)(tW, { guild: A, markAsDismissed: M });
                case d.M.GAME_CLAIM_COACHMARK:
                    return (0, s.jsx)(tX, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, s.jsx)("div", { onContextMenu: n8, children: f });
}
let n2 = function (e) {
    let { guild: t } = e;
    switch (q(t)) {
        case Y.ENABLE_PUBLIC_GUILD:
            return (0, s.jsx)(nU, { guild: t });
        case Y.MAX_MEMBER_COUNT:
            return (0, s.jsx)(nw, { guild: t });
        case Y.GUILD_LIVE_CHANNEL:
            return (0, s.jsx)(nT, { guild: t });
        case Y.GUILD_MFA_WARNING:
            return (0, s.jsx)(nH, { guild: t });
        case Y.COMMANDS_MIGRATION:
            return (0, s.jsx)(nR, { guild: t });
        case Y.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, s.jsx)(nG, { guild: t });
    }
    return nb.P.isDisallowPopupsSet() ? null : (0, s.jsx)(n7, { guild: e.guild });
};
var n9 = n(883476);
function n4(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, s.jsx)("div", { className: n9.k, ref: i, children: (0, s.jsx)(n2, { guild: t }) })
    );
}
var ie = n(66933),
    it = n(846930),
    ii = n(168095);
let is = "server-settings",
    il = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ir extends l.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = l.createRef();
    guildHeaderDropdownButtonRef = l.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new u.Ep();
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
        (this.setAnimatedValue(0),
            g.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = ew.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = ew.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        (this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            g.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices));
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
        (e.stopPropagation(), (0, es.Z)(!t), this.closeAllHeaderNotices());
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, ee.ai)(t.id)) {
                if (!i) return;
                (0, I.L3)(e, async () => {
                    let { default: e } = await n.e("879948").then(n.bind(n, 329671));
                    return (t) => (0, s.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("309004"),
                    n.e("419690"),
                    n.e("845322"),
                    n.e("110758"),
                ]).then(n.bind(n, 455557));
                return (n) => (0, s.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, ee.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, I.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("203112"),
                    n.e("876364"),
                    n.e("925807"),
                    n.e("996907"),
                    n.e("816027"),
                    n.e("562772"),
                    n.e("8159"),
                    n.e("597981"),
                    n.e("361922"),
                    n.e("179028"),
                    n.e("403032"),
                    n.e("684290"),
                    n.e("295570"),
                    n.e("301850"),
                    n.e("936875"),
                    n.e("862179"),
                    n.e("722784"),
                    n.e("326794"),
                    n.e("906470"),
                    n.e("860350"),
                    n.e("774550"),
                    n.e("923981"),
                    n.e("618416"),
                    n.e("902654"),
                    n.e("706073"),
                    n.e("227512"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("412117"),
                    n.e("263406"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("470126"),
                    n.e("162775"),
                    n.e("128804"),
                    n.e("60882"),
                    n.e("71151"),
                    n.e("227853"),
                    n.e("286615"),
                    n.e("70866"),
                    n.e("311541"),
                    n.e("472847"),
                    n.e("870088"),
                    n.e("300641"),
                    n.e("932020"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("763945"),
                    n.e("261204"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("279774"),
                    n.e("590088"),
                    n.e("125298"),
                    n.e("327439"),
                    n.e("685673"),
                    n.e("71169"),
                    n.e("736663"),
                    n.e("419121"),
                    n.e("489020"),
                    n.e("919789"),
                    n.e("669130"),
                    n.e("802890"),
                    n.e("82937"),
                    n.e("987221"),
                    n.e("157064"),
                    n.e("156957"),
                    n.e("918786"),
                    n.e("701335"),
                    n.e("257935"),
                    n.e("724086"),
                    n.e("358937"),
                    n.e("448738"),
                    n.e("680431"),
                    n.e("338332"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("88683"),
                    n.e("363874"),
                    n.e("750370"),
                    n.e("612162"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("547510"),
                    n.e("966366"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("411938"),
                    n.e("326559"),
                    n.e("696490"),
                    n.e("31159"),
                    n.e("952068"),
                    n.e("768289"),
                    n.e("772565"),
                    n.e("533781"),
                    n.e("737853"),
                    n.e("225307"),
                    n.e("332165"),
                    n.e("524434"),
                    n.e("854326"),
                    n.e("984"),
                    n.e("226229"),
                    n.e("981833"),
                    n.e("614929"),
                    n.e("570473"),
                    n.e("516497"),
                    n.e("24774"),
                    n.e("489565"),
                    n.e("684231"),
                    n.e("570690"),
                    n.e("886631"),
                    n.e("435860"),
                    n.e("426782"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("403643"),
                    n.e("323223"),
                    n.e("830560"),
                    n.e("526575"),
                    n.e("588035"),
                    n.e("165291"),
                    n.e("109383"),
                    n.e("818291"),
                    n.e("243794"),
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
                    n.e("123727"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("10886"),
                    n.e("84993"),
                    n.e("343298"),
                    n.e("592268"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
                    n.e("440636"),
                    n.e("568960"),
                    n.e("459257"),
                    n.e("790484"),
                    n.e("765073"),
                    n.e("631323"),
                    n.e("464452"),
                    n.e("714144"),
                    n.e("458855"),
                    n.e("305161"),
                    n.e("845486"),
                    n.e("58353"),
                    n.e("17256"),
                    n.e("377016"),
                    n.e("385504"),
                    n.e("269714"),
                    n.e("331696"),
                    n.e("249918"),
                    n.e("865429"),
                    n.e("806391"),
                    n.e("803511"),
                    n.e("202342"),
                    n.e("424216"),
                    n.e("840100"),
                    n.e("22865"),
                    n.e("173896"),
                    n.e("57358"),
                    n.e("580305"),
                    n.e("722765"),
                    n.e("33909"),
                    n.e("238417"),
                    n.e("191601"),
                    n.e("401106"),
                    n.e("498589"),
                    n.e("21486"),
                    n.e("304419"),
                    n.e("622936"),
                    n.e("45268"),
                    n.e("617281"),
                    n.e("733199"),
                    n.e("489217"),
                    n.e("655327"),
                    n.e("335532"),
                    n.e("138545"),
                    n.e("536490"),
                    n.e("463455"),
                    n.e("403655"),
                    n.e("317615"),
                    n.e("577154"),
                    n.e("877730"),
                    n.e("611899"),
                    n.e("527552"),
                    n.e("903758"),
                    n.e("962811"),
                    n.e("855773"),
                    n.e("722915"),
                    n.e("769266"),
                    n.e("487873"),
                    n.e("765626"),
                    n.e("683302"),
                    n.e("660608"),
                    n.e("744554"),
                    n.e("118203"),
                    n.e("331212"),
                    n.e("638259"),
                    n.e("635958"),
                    n.e("207998"),
                    n.e("683621"),
                    n.e("711162"),
                    n.e("275179"),
                    n.e("289789"),
                    n.e("116125"),
                    n.e("977412"),
                    n.e("19385"),
                    n.e("692811"),
                    n.e("348567"),
                    n.e("452075"),
                    n.e("900277"),
                    n.e("499485"),
                    n.e("905581"),
                    n.e("249681"),
                    n.e("869047"),
                    n.e("996382"),
                    n.e("62052"),
                    n.e("771657"),
                    n.e("122218"),
                    n.e("76428"),
                    n.e("77473"),
                    n.e("863232"),
                    n.e("25279"),
                    n.e("364827"),
                    n.e("517888"),
                    n.e("811133"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("907167"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("784569"),
                    n.e("861060"),
                    n.e("77333"),
                    n.e("834552"),
                    n.e("56366"),
                    n.e("639161"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("402368"),
                    n.e("190779"),
                    n.e("793716"),
                    n.e("910486"),
                    n.e("221856"),
                    n.e("678157"),
                    n.e("147134"),
                    n.e("325675"),
                    n.e("996481"),
                    n.e("331988"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("708757"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("209338"),
                    n.e("434539"),
                    n.e("927875"),
                    n.e("833703"),
                    n.e("256274"),
                    n.e("692990"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("532039"),
                    n.e("719466"),
                    n.e("99799"),
                    n.e("576909"),
                    n.e("27355"),
                    n.e("585968"),
                    n.e("393336"),
                    n.e("481647"),
                    n.e("776602"),
                    n.e("776273"),
                    n.e("140402"),
                    n.e("391763"),
                    n.e("407170"),
                    n.e("21921"),
                    n.e("811310"),
                    n.e("307575"),
                    n.e("942724"),
                    n.e("676418"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("401518"),
                    n.e("571210"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("139970"),
                    n.e("554241"),
                    n.e("940258"),
                    n.e("166495"),
                    n.e("724303"),
                    n.e("198329"),
                    n.e("521930"),
                    n.e("292583"),
                    n.e("308555"),
                    n.e("53102"),
                    n.e("110327"),
                    n.e("586127"),
                    n.e("173764"),
                    n.e("875842"),
                    n.e("9205"),
                    n.e("25949"),
                    n.e("88342"),
                    n.e("146070"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("807936"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
                    n.e("311802"),
                    n.e("179049"),
                    n.e("95340"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("37977"),
                    n.e("136149"),
                    n.e("470068"),
                    n.e("354044"),
                    n.e("817989"),
                    n.e("437065"),
                    n.e("720590"),
                    n.e("709640"),
                    n.e("23055"),
                    n.e("147626"),
                    n.e("952548"),
                    n.e("613867"),
                    n.e("164776"),
                    n.e("203589"),
                    n.e("636373"),
                    n.e("255580"),
                    n.e("294857"),
                    n.e("726033"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("64504"),
                    n.e("553984"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("608557"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("154469"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("212055"),
                    n.e("486672"),
                    n.e("14035"),
                    n.e("75029"),
                    n.e("564850"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("902564"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("92935"),
                    n.e("649362"),
                    n.e("67878"),
                    n.e("568156"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("731503"),
                    n.e("803332"),
                    n.e("859546"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("608032"),
                    n.e("852617"),
                    n.e("477970"),
                    n.e("844780"),
                    n.e("204744"),
                    n.e("737021"),
                    n.e("114308"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("218203"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("41332"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("893349"),
                    n.e("368062"),
                    n.e("859991"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("924691"),
                    n.e("217802"),
                    n.e("96680"),
                    n.e("868214"),
                    n.e("939171"),
                    n.e("661814"),
                    n.e("713567"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("793438"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("535507"),
                    n.e("444567"),
                    n.e("309004"),
                    n.e("883952"),
                    n.e("229666"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("695170"),
                    n.e("460773"),
                    n.e("159957"),
                    n.e("28676"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("449145"),
                    n.e("278045"),
                    n.e("26001"),
                    n.e("599976"),
                    n.e("430997"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("434786"),
                    n.e("203930"),
                    n.e("982730"),
                    n.e("174192"),
                    n.e("708536"),
                    n.e("903663"),
                    n.e("411353"),
                    n.e("49716"),
                    n.e("506045"),
                    n.e("618706"),
                    n.e("439089"),
                    n.e("800872"),
                    n.e("728136"),
                    n.e("452531"),
                    n.e("201243"),
                    n.e("573330"),
                    n.e("65393"),
                    n.e("338601"),
                    n.e("215920"),
                    n.e("368530"),
                    n.e("216084"),
                    n.e("343116"),
                    n.e("610943"),
                    n.e("66580"),
                    n.e("127659"),
                    n.e("978046"),
                    n.e("283230"),
                    n.e("582486"),
                    n.e("273669"),
                    n.e("507775"),
                    n.e("284819"),
                    n.e("466147"),
                    n.e("50342"),
                    n.e("428235"),
                    n.e("369501"),
                    n.e("303710"),
                    n.e("161058"),
                    n.e("134504"),
                    n.e("333097"),
                    n.e("908608"),
                    n.e("409391"),
                    n.e("645830"),
                    n.e("115368"),
                    n.e("810262"),
                    n.e("741786"),
                    n.e("995602"),
                    n.e("346313"),
                    n.e("463726"),
                    n.e("816589"),
                    n.e("256373"),
                    n.e("929569"),
                    n.e("636002"),
                    n.e("343233"),
                    n.e("756684"),
                    n.e("419690"),
                    n.e("806354"),
                    n.e("556026"),
                    n.e("416301"),
                    n.e("722191"),
                    n.e("225961"),
                    n.e("359702"),
                    n.e("708364"),
                    n.e("452823"),
                    n.e("8422"),
                    n.e("779348"),
                    n.e("647011"),
                    n.e("269178"),
                    n.e("553584"),
                    n.e("466913"),
                    n.e("983947"),
                    n.e("71719"),
                    n.e("213848"),
                    n.e("588307"),
                    n.e("514878"),
                    n.e("676376"),
                    n.e("426508"),
                    n.e("842935"),
                    n.e("73091"),
                    n.e("37786"),
                    n.e("886692"),
                    n.e("916373"),
                    n.e("528038"),
                    n.e("81398"),
                    n.e("324484"),
                    n.e("925172"),
                    n.e("232347"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("591977"),
                    n.e("890152"),
                    n.e("174337"),
                    n.e("646570"),
                    n.e("287973"),
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
                    n.e("303807"),
                    n.e("995210"),
                    n.e("795016"),
                    n.e("317699"),
                    n.e("257032"),
                    n.e("845322"),
                    n.e("114748"),
                    n.e("426386"),
                    n.e("842987"),
                    n.e("204665"),
                    n.e("588860"),
                ]).then(n.bind(n, 237600));
                return (n) => (0, s.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        (this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip());
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, Z.k8)(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(B.GuildFeatures.HUB);
        !e && t && (0, Z.Dr)(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ea.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        (this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eI.A.hideGuildTemplateDirtyTooltip(e.id);
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
            n.e("610124"),
            n.e("193829"),
            n.e("809111"),
        ]).then(n.bind(n, 342218));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, s.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, s.jsx)(tc, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? A.t : h.a;
        return (0, s.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let {
                guildId: t,
                showGuildTemplateDirtyTooltip: n,
                showGuildHeaderTutorial: i,
                showPriorityHeaderNotice: l,
                anyLayerOpen: r,
            } = this.props,
            { shouldShowSubscribeTooltip: a } = this.state;
        return i
            ? (0, s.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, s.jsx)(ek.A, {
                      tutorialId: is,
                      position: "bottom",
                      inlineSpecs: il,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : l
              ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !r &&
                            (0, s.jsx)(ex.Hd, { guildId: t, targetElementRef: this.guildHeaderDropdownButtonRef }),
                    ],
                })
              : n
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          this.renderGuildHeaderDropdownButton(e),
                          !e &&
                              !r &&
                              (0, s.jsx)(c.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: te.intl.string(te.t.Rk2RJk),
                                  body: te.intl.string(te.t.sFSrFH),
                                  onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                  position: "bottom",
                                  caretConfig: { align: "center" },
                              }),
                      ],
                  })
                : r || e
                  ? this.renderGuildHeaderDropdownButton(e)
                  : a
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              this.renderGuildHeaderDropdownButton(e),
                              (0, s.jsx)(c.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: te.intl.string(te.t.Q3qa4x),
                                  body: te.intl.string(te.t.UyHD4O),
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
                showGuildTemplateDirtyTooltip: l,
                showPriorityHeaderNotice: r,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: o,
            } = this.props,
            {
                controller: d,
                renderBanner: u,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: h,
            } = this.state,
            m = i || r || l || a;
        return null == t
            ? null
            : (0, s.jsx)(_.f5, {
                  value: o,
                  children: (0, s.jsx)(E.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: E.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, es.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: l, ...r } = i;
                          return (0, s.jsx)(e$.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: d,
                              renderBanner: u,
                              hasSubheader: e,
                              bannerVisible: c,
                              communityInfoVisible: h,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: m,
                              animationOverlayHeight: A,
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
            i = null != t && (0, eQ.A)(t);
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
        (((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (s = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                s !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: s, communityInfoVisible: n }),
            l.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start());
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        (((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start());
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, ...i } = this.props;
        if (e || null == t)
            return (0, s.jsx)(it.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(B.GuildFeatures.HUB))
                return (0, s.jsx)("div", {
                    className: ii.r0,
                    children: (0, s.jsx)(eL.A, { guild: t, channel: n ?? eF.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, ee.ai)(t.id) ? et.A : eZ.B;
            return (0, s.jsx)(e, {
                guild: t,
                ...i,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eQ.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, ee.YC)(e);
        return (0, s.jsxs)("nav", {
            className: ii.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": te.intl.formatToPlainString(te.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, s.jsx)(n4, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ia(e) {
    let t,
        i,
        r,
        u,
        c,
        A,
        h,
        E,
        g,
        I,
        N,
        p,
        S,
        T,
        M,
        { guildId: x, hideSelectedChannel: D, selectedChannelId: G } = e,
        O = (0, en.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, J.TW)("ConnectedGuildSidebar"),
        b = (0, o.bG)([v.A], () => v.A.getGuild(x)),
        y = (0, o.bG)([R.Ay], () => R.Ay.getVoiceStates(x), [x]),
        P = (0, o.bG)([eV.A], () => eV.A.getGuildDimensions(x).scrollTo),
        H = (0, o.bG)([eY.A], () => eY.A.getChannelId()),
        w = (0, o.bG)([L.A], () => L.A.can(B.xBc.MANAGE_GUILD, b)),
        k = (0, o.bG)([eK.A], () => eK.A.isUnavailable(x)),
        X = (0, o.bG)([eg.default], () => eg.default.getCurrentUser()),
        { analyticsLocations: V } = (0, _.Ay)(C.A.GUILD_HEADER),
        [K, F] = (0, Q.Ay)(
            (e) => [
                n1.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ea.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        W = q(b),
        z = (0, m.useModalsStore)(m.hasAnyModalOpenSelector),
        Y = (0, o.bG)([eW.A], () => eW.A.hasLayers()),
        Z = (0, ex.Dq)(b),
        et = (function (e) {
            let t = (0, er.c)(el.C.GUILD_HEADER_COACHMARK),
                n =
                    null != t && "guildHeaderCoachmark" === t.properties.properties.oneofKind
                        ? t.properties.properties.guildHeaderCoachmark
                        : null,
                i = null != e && !(0, ee.ai)(e),
                [s, l] = (0, $.Cc)(
                    null != n && i ? d.M.GUILD_HEADER_COACHMARK : null,
                    t?.promotionId ?? "",
                    ea.m.GUILD_HEADER_TOOLTIPS,
                );
            return {
                shouldShow: null != n && i && s === d.M.GUILD_HEADER_COACHMARK,
                componentId: t?.id ?? "",
                promotionId: t?.promotionId ?? "",
                coachmark: n,
                markAsDismissed: l,
            };
        })(x),
        eI = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        eC = (0, o.bG)([eX.A], () => eX.A.shouldShow(is)),
        e_ =
            ((t = (0, o.bG)([v.A], () => v.A.getGuild(x))),
            (i = (0, o.bG)([eg.default], () => eg.default.getCurrentUser())),
            (r = null != t && (0, em.bM)(t, i)),
            (u = (0, eE.oS)()),
            r &&
                (t?.features.has(B.GuildFeatures.COMMUNITY) ?? !1) &&
                u &&
                !(
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        eN = b?.features.has(B.GuildFeatures.HUB) === !0,
        ep = w && b?.features.has(B.GuildFeatures.DISCOVERABLE) === !0,
        eS = (0, o.bG)(
            [eT, eW.A],
            () => null != b && null != X && w && !eW.A.hasLayers() && eT.shouldShowGuildTemplateDirtyTooltip(x),
        ),
        eL = (0, o.bG)([f.A], () => f.A.getChannel(G)),
        { isPopoutOpen: ew } = (0, es.S)(),
        ek = b?.features.has(B.GuildFeatures.COMMUNITY) ?? !1,
        eF = eq.Ay.isNewUser(X);
    ((c = (0, eo.TZ)(b)),
        (A = j.dR.some((e) => !(0, ee.ai)(b?.id) && eu.Ib(e, b))),
        (h = b?.defaultMessageNotifications === B.orn.ALL_MESSAGES),
        (E = (0, ec.G$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq)),
        (g = c && (A || h) && !E),
        (I = l.useCallback(() => {
            (0, ec._$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq, !0, ea.i.DISMISS);
        }, [b])),
        (N = l.useRef(!1)),
        l.useEffect(() => {
            g &&
                !N.current &&
                ((0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("942068"), n.e("452823"), n.e("442446")]).then(
                            n.bind(n, 653981),
                        );
                        return (t) =>
                            (0, s.jsx)(e, {
                                guild: b,
                                canEveryoneModerate: A,
                                isDefaultNotificationsAllMessages: h,
                                ...t,
                            });
                    },
                    { onCloseCallback: I },
                ),
                ed.default.track(B.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: d.V[d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? B.dJq,
                }),
                (N.current = !0));
        }, [A, b, I, h, g]));
    let eQ =
        ((p = (0, o.bG)([v.A], () => v.A.getGuild(x))),
        (S = (0, eA._Y)(x)),
        (T =
            p?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
            p?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
        (M = (0, eh.X9)(p)),
        T && M && S);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eM.Kb)(e, "GuildThemeNuxTrigger"),
            [r, a] = (0, $.kn)(null != s ? [d.M.GUILD_THEME_NUX] : [], ea.m.GUILD_THEME_NUX),
            o = r === d.M.GUILD_THEME_NUX,
            u = l.useRef(!1);
        (l.useEffect(() => {
            u.current = !1;
        }, [e]),
            l.useEffect(() => {
                if (!o || n || u.current) return;
                let t = setTimeout(() => {
                    u.current = !0;
                    let t = !1;
                    Promise.resolve(
                        i({
                            guildId: e,
                            markAsDismissed: (e) => {
                                t || ((t = !0), a(e, !0));
                            },
                        }),
                    ).catch(() => {
                        u.current = !1;
                    });
                }, 2e3);
                return () => clearTimeout(t);
            }, [o, n, e, a, i]));
    })(x, {
        isNuxOpen: (0, m.useHasModalOpen)(ef.u),
        openNux: l.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, m.openModalLazy)(
                async () => {
                    let e = await Promise.resolve().then(n.bind(n, 181880));
                    return (n) =>
                        (0, s.jsx)(e.default, {
                            guildId: t,
                            markAsDismissed: i,
                            transitionState: n.transitionState,
                            onClose: n.onClose,
                        });
                },
                { modalKey: ef.u, onCloseCallback: () => i(ea.i.USER_DISMISS) },
            );
        }, []),
    });
    let eZ = (0, o.bG)([eY.A], () => eY.A.getChannelId()),
        e$ = (0, o.bG)([ez.A], () => ez.A.desyncedVoiceStatesCount),
        eJ = (0, eb.A)(x),
        e0 = (0, ee.ai)(x) ? null : eJ,
        e1 =
            (function (e) {
                let t = (0, eb.A)(e),
                    n = (0, eP.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, eH.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, eP.lY)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    l = (0, ej.A)(e),
                    { available: r, isLoading: a } = (0, ev.A)(e);
                if (a) return !1;
                let o = r < eB.fe;
                return n && i && !s && o && !l && !1 === t;
            })(x) && !(0, ee.ai)(x);
    ie.A.useConfig({ guildId: x, location: "guild_sidebar" });
    let e3 = (0, ei.C$)(x, "GuildSidebar"),
        e6 = (0, o.bG)([v.A], () => v.A.getGuild(x)?.features.has(B.GuildFeatures.GAME_SERVERS) ?? !1, [x]),
        e8 = e3 && !e6 && !1 === e0,
        e5 = (0, ey.A)(),
        e7 = (0, eO.A)(x),
        e2 = !1 === e0 && e5 && null != e7,
        e9 = (0, eU.A)(x),
        e4 = !1 === e0 && e5 && null != e9,
        te = [];
    (eN && te.push(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        e_ && te.push(d.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        ep && te.push(d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e0 && te.push(d.M.GUILD_POWERUP_PERKS_COACHMARK),
        e1 && te.push(d.M.GUILD_THEME_MEMBER_COACHMARK),
        e8 && te.push(d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eQ && te.push(d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let [tt, tn] = (0, $.kn)(te, ea.m.GUILD_HEADER_TOOLTIPS),
        [ti, ts] = (0, eG.vB)(e3 && !1 === e0 && !(0, ee.ai)(x), ea.m.GUILD_HEADER_TOOLTIPS),
        [tl, tr] = (0, $.D8)(
            e2 ? d.M.BOOST_TO_UNLOCK_COACHMARK : null,
            x,
            { cooldownDurationMs: eD.bW, numTimesToRecur: 5 },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        [ta, to] = (0, $.D8)(
            e4 ? d.M.EXPIRING_POWERUP_COACHMARK : null,
            x,
            { cooldownDurationMs: eD.mD },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        td = l.useMemo(
            () =>
                et.shouldShow && null != et.coachmark
                    ? {
                          contentType: d.M.GUILD_HEADER_COACHMARK,
                          data: {
                              marketingComponent: {
                                  componentId: et.componentId,
                                  promotionId: et.promotionId,
                                  coachmark: et.coachmark,
                              },
                          },
                          markAsDismissed: et.markAsDismissed,
                      }
                    : null != tt
                      ? { contentType: tt, data: null, markAsDismissed: tn }
                      : ti === d.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: ti, data: null, markAsDismissed: ts }
                        : tl === d.M.BOOST_TO_UNLOCK_COACHMARK && null != e7
                          ? { contentType: tl, data: { featuredPowerup: e7 }, markAsDismissed: tr }
                          : ta === d.M.EXPIRING_POWERUP_COACHMARK && null != e9
                            ? { contentType: ta, data: { featuredExpiringPowerup: e9 }, markAsDismissed: to }
                            : null,
            [
                et.shouldShow,
                et.coachmark,
                et.componentId,
                et.promotionId,
                et.markAsDismissed,
                tt,
                ti,
                tl,
                ta,
                e7,
                e9,
                tn,
                ts,
                tr,
                to,
            ],
        );
    return (0, s.jsx)(ir, {
        guildId: x,
        hideSelectedChannel: D,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: D ? null : G,
        selectedChannel: eL,
        selectedVoiceChannelId: H,
        voiceStates: y,
        rtcConnectedChannelId: eZ,
        rtcDesyncedVoiceStatesCount: e$,
        isUnavailable: k,
        user: X,
        hasChannelNotice: null != W || K,
        anyLayerOpen: z || Y || eI,
        showGuildHeaderTutorial: eC,
        showPriorityHeaderNotice: Z,
        showGuildTemplateDirtyTooltip: eS,
        showNewUnreadsBar: ek,
        isHeaderPopoutOpen: ew,
        isGuildHeaderDismissibleTooltipShown: F,
        headerAnalyticsLocations: V,
        shouldRenderBurstCoachmark: !eF,
        guildHeaderContentDescriptor: td,
        onFavoriteGuildContextMenu: O,
        hasFavoritesAccess: U,
    });
}
