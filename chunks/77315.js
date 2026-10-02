(n.r(t), n.d(t, { default: () => ir }), n(321073));
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
    I = n(73153),
    g = n(442433),
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
let O = new G(I.h, {
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
let V = new X(I.h, {
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
let z = new W(I.h, {
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
function Q(e) {
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
var q = n(355903),
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
    eI = n(287809),
    eg = n(568185);
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
let eT = new eS(I.h, {
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
    ex = n(379229),
    eD = n(229548),
    eG = n(139032),
    eO = n(128313),
    eU = n(363487),
    eb = n(342220),
    ey = n(383272),
    eP = n(414133),
    eH = n(864310),
    ev = n(972829),
    ej = n(568065),
    eB = n(320989),
    ew = n(728321),
    ek = n(79858),
    eX = n(72314),
    eV = n(919638),
    eK = n(808728),
    eF = n(186111),
    eW = n(584569),
    ez = n(763827),
    eY = n(158045),
    eQ = n(885631),
    eq = n(268090),
    eZ = n(960628),
    e$ = n(206248),
    eJ = n(498470),
    e0 = n(807098),
    e1 = n(637706),
    e3 = n(788883),
    e6 = n(7667);
function e8(e) {
    let { guildId: t, componentId: n, promotionId: i, coachmark: r, targetElementRef: a, markAsDismissed: o } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        c = (0, e0.T)(r.asset),
        { terms: A } = (0, e6.A)(i),
        h = l.useCallback(() => {
            o(ea.i.DISMISS);
        }, [o]),
        E = l.useCallback(() => {
            ((0, eJ.h)({
                buttonAction: r.button?.buttonAction,
                deeplinkSection: r.button?.deeplinkSection,
                applicationId: r.button?.navigableStorefrontApplicationId?.value,
                guildId: t,
                analyticsLocation: { page: B.liQ.GUILD_CHANNEL, section: B.JJy.GUILD_HEADER },
                analyticsLocations: u,
            })(),
                o(ea.i.TAKE_ACTION));
        }, [r.button, t, u, o]),
        m = (0, e1.C)(r.helpArticle, ""),
        I = [r.body, A].filter((e) => "" !== e).join(" "),
        { icon: g } = (0, eJ.x)({ buttonAction: r.button?.buttonAction }),
        C = r.button?.copy ?? "";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e3.A, {
                componentType: el.C.GUILD_HEADER_COACHMARK,
                componentId: n,
                promotionId: i,
                dismissibleContent: d.M.GUILD_HEADER_COACHMARK,
            }),
            (0, s.jsx)(e$.H, {
                targetElementRef: a,
                title: r.header,
                body: I,
                assetUrl: c ?? "",
                disableMediaViewer: !0,
                action: "" !== C ? { text: C, variant: "primary", icon: g, iconPosition: "start", onClick: E } : void 0,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                onRequestClose: h,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var e5 = n(562708),
    e2 = n(702841),
    e7 = n(139286),
    e9 = n(468689),
    e4 = n(375708),
    te = n(330766);
function tt(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        l = (0, e2.bG)([v.A, eI.default], () => {
            let e = eI.default.getCurrentUser(),
                n = v.A.getGuild(t);
            return null != n && (0, em.bM)(n, e);
        });
    return (
        (0, e7.A)({
            type: e5.ImpressionTypes.POPOUT,
            name: e5.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: l },
        }),
        (0, s.jsx)(c.A, {
            targetElementRef: i,
            title: e4.intl.string(e4.t.C0m4rQ),
            body: e4.intl.string(e4.t.zOHfEX),
            graphic: { type: "image", src: te },
            actions: [
                {
                    text: e4.intl.string(e4.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e9.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(ea.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function tn(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(e$.H, {
        targetElementRef: i,
        title: e4.intl.string(e4.t.gCgirr),
        body: e4.intl.string(e4.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e4.intl.string(e4.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e9.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS, void 0, B.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(ea.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var ti = n(834730),
    ts = n(821609),
    tl = n(736759);
function tr(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: tl.kL,
        children: [
            (0, s.jsx)("div", { className: tl.Wn }),
            (0, s.jsx)(ti.E, { variant: "text-sm/normal", className: tl.Qs, children: e4.intl.string(e4.t.rdzeVP) }),
            (0, s.jsx)(ts.$, {
                variant: "overlay-primary",
                text: e4.intl.string(e4.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(ea.i.AUTO);
                },
            }),
        ],
    });
}
var ta = n(270533);
function to(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(c.A, {
        targetElementRef: i,
        title: e4.intl.string(e4.t.Hgd22r),
        body: e4.intl.string(e4.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e4.intl.string(e4.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e9.default.open(t.id, B.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(ea.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function td(e) {
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
let tu = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: l, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, s.jsx)(s.Fragment, {
        children: (function () {
            switch (l) {
                case d.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) =>
                            (0, s.jsx)(ta.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) =>
                            (0, s.jsx)(ta.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(ta.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(ta.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(ta.Gw, {
                                type: ex.o.BOOST_TO_UNLOCK,
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
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(ta.Mr, {
                                type: ex.o.EXPIRING_PERK,
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
                    return (0, s.jsx)(td, {
                        renderPopout: (t) =>
                            (0, s.jsx)(e8, {
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
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tt, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(to, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, s.jsx)(td, {
                        renderPopout: (0, s.jsx)(tr, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, s.jsx)(td, {
                        renderPopout: (e) => (0, s.jsx)(tn, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tc = n(158390),
    tA = n(636537),
    th = n(927813);
let tE = null;
class tm extends o.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tE;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tE?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tE?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tE) return [];
        let e = tE;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tI = new tm(I.h, {
        LOGOUT: function () {
            tE = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tE = t;
        },
    }),
    tg = [];
async function tC() {
    let { body: e } = await tA.Bo.get({ url: B.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let t_ = (0, o.UT)(tI, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tI.getMap(),
    load: () => tC(),
    staleAfter: th.A.Seconds.DAY,
    retryConfig: { backoff: () => new tc.A(5 * th.A.Millis.MINUTE), maxRetries: 10 },
});
function tN(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = t_(t);
    return n?.[e] ?? tg;
}
let tp = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tS = n(509434),
    tT = n(975807),
    tM = n(435558),
    tf = n.n(tM),
    tL = n(862482),
    tR = n(939249),
    tx = n(789645),
    tD = n(297264),
    tG = n(95561),
    tO = n(446406);
let tU = tf().debounce(tG.Ay.trackWithMetadata, 500),
    tb = function (e) {
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
            tU(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let I = null;
        "function" == typeof E
            ? (I = E())
            : null != E &&
              (I = (0, s.jsx)(tL.$n, {
                  "data-migration-pending": !0,
                  className: tO.HM,
                  size: tL.$n.Sizes.SMALL,
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
        let g = null != o ? `${o}px` : "16px";
        return (0, s.jsxs)("div", {
            className: tO.kX,
            children: [
                !0 === c
                    ? null
                    : (0, s.jsx)(tR.D, {
                          onClick: function () {
                              (tG.Ay.trackWithMetadata(B.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.());
                          },
                          className: tO.VN,
                          "aria-label": e4.intl.string(e4.t.WAI6xu),
                          children: (0, s.jsx)(tx.P, { size: "md", color: "currentColor", className: tO.ut }),
                      }),
                null != r &&
                    (0, s.jsx)("div", {
                        className: tO.ZS,
                        style: { marginTop: `${d}px`, marginLeft: g, marginRight: g },
                        children: "string" == typeof r ? (0, s.jsx)("img", { className: tO.Sl, src: r, alt: "" }) : r,
                    }),
                (0, s.jsxs)("div", {
                    className: tO.iU,
                    children: [
                        null != n
                            ? (0, s.jsx)(tD.D, { variant: "heading-md/semibold", className: tO.DD, children: n })
                            : null,
                        (0, s.jsx)(ti.E, { variant: "text-sm/normal", children: i }),
                        I,
                    ],
                }),
            ],
        });
    };
var ty = n(201438),
    tP = n(194362),
    tH = n(661531),
    tv = n(307301),
    tj = n(701115);
function tB(e) {
    let { imageSrc: t } = e;
    return (0, s.jsxs)("div", {
        className: tj.kL,
        children: [
            (0, s.jsx)("div", { className: tj.j3, children: (0, s.jsx)("img", { className: tj.Su, src: t, alt: "" }) }),
            (0, s.jsx)("div", {
                className: tj.gm,
                children: (0, s.jsx)("div", {
                    className: tj.WA,
                    children: (0, s.jsx)(tv.j, { size: "sm", color: tH.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tw = n(63142);
function tk(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tN(t.id)[0] ?? null,
        { coverImageUrl: l, gameName: r } = (0, ty.A)(i, e4.intl.string(e4.t.VQq92a));
    if (null == l) return null;
    let a = t.features.has(B.GuildFeatures.VERIFIED) ? e4.intl.string(e4.t.uUARXe) : e4.intl.string(e4.t["0Dx29f"]);
    return (0, s.jsx)(tb, {
        guild: t,
        onDismissed: () => n(ea.i.USER_DISMISS),
        title: e4.intl.format(e4.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, s.jsxs)("span", {
            className: tw.m,
            children: [e4.intl.string(e4.t["2u6ZlY"]), (0, s.jsx)(tS.I, { size: "xs", color: "currentColor" })],
        }),
        type: B.n5X.GAME_CLAIM,
        image: (0, s.jsx)(tB, { imageSrc: l }),
        imageMarginX: 60,
        onClick: async () => {
            n(ea.i.TAKE_ACTION);
            let e = await (0, tP.a)(B.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tT.A)(e);
        },
    });
}
var tX = n(631305),
    tV = n(473145),
    tK = n(625633);
function tF(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tV.Os)(t, B.TVA.TIER_2),
        { analyticsLocations: l } = (0, _.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, s.jsx)(tb, {
        guild: t,
        onDismissed: () => n(ea.i.UNKNOWN),
        cta: e4.intl.string(e4.t.oPAx73),
        message: e4.intl.format(e4.t.AcaNYw, { boostsNeeded: i }),
        type: B.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tX.A)({
                analyticsLocations: l,
                analyticsSourceLocation: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tK.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tW = n(878678);
class tz extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tW.K4)({ guildId: e.id, location: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, s.jsx)(tb, {
            guild: e,
            onDismissed: () => n(ea.i.USER_DISMISS),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e4.intl.string(e4.t.hlitVQ) : e4.intl.string(e4.t.XHtaDD),
            cta: e4.intl.string(e4.t["vqb+H1"]),
            trackingSource: B.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: B.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tY = o.Ay.connectStores([H.A], (e) => {
    let { guild: t } = e;
    return { memberCount: H.A.getMemberCount(t.id) };
})(tz);
var tQ = n(503698),
    tq = n.n(tQ),
    tZ = n(933832),
    t$ = n(782603),
    tJ = n(81466),
    t0 = n(116085),
    t1 = n(597601),
    t3 = n(451394),
    t6 = n(104171),
    t8 = n(47167),
    t5 = n(713654),
    t2 = n(976860),
    t7 = n(747376),
    t9 = n(110618),
    t4 = n(280450),
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
let nh = l.memo(function (e) {
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
        className: nA.kX,
        children: [
            (0, s.jsxs)("div", {
                className: tq()(nA.fI, nA.pF),
                children: [
                    (0, s.jsx)("div", { className: nA.Ok }),
                    (0, s.jsx)(ti.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nA.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, s.jsx)(tR.D, {
                            onClick: o,
                            className: nA.ut,
                            "aria-label": e4.intl.string(e4.t.cpT0Cq),
                            children: (0, s.jsx)(tx.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, s.jsx)(tD.D, { color: "text-strong", variant: "heading-md/semibold", className: nA.eq, children: a }),
            (0, s.jsxs)("div", {
                className: tq()(nA.fI, nA.pF),
                children: [
                    i,
                    (0, s.jsx)(ti.E, { color: "none", variant: "text-xs/normal", className: nA.HA, children: n }),
                    null != l &&
                        null != r &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(ti.E, {
                                    className: nA.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, s.jsx)(ti.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nA.zH,
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
function nE(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t8.Ay)(n),
        l = (0, o.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t5.gU)(n);
    return (0, s.jsx)(nh, {
        onClickCloseIcon: () => (0, nl.iF)({ eventId: t?.id }),
        heading: e4.intl.string(e4.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, s.jsx)(r, { size: "xs", color: "currentColor", className: nA.uE }) : null,
        children: (0, s.jsx)(np, { channel: n, speakers: l, voiceType: 1 }),
    });
}
function nm(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nu.G3)(t),
        l = (0, o.bG)([ns.Ay], () => ns.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, o.bG)([nr.A], () => nr.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != r || (0, nl.pE)(t.id),
        (0, s.jsx)(ts.$, {
            onClick: function () {
                ((0, nc.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nl.Lx)(t.id), 1e3)),
                    ed.default.track(B.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: e4.intl.string(e4.t.DlcqlU),
            icon: l ? tZ.CheckmarkLargeIcon : t$.BellIcon,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nI(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nd.oF)(t),
        r = null != i ? (0, na.y)(i, !0) : null,
        a = (0, nd.WN)(t),
        o = (0, t8.Ay)(a),
        d = (0, t5.gU)(a),
        { startTime: u, endTime: c } = (0, no.Ay)(t),
        { startDateTimeString: A, upcomingEvent: h, diffMinutes: E } = (0, nu.CC)(u.toISOString(), c?.toISOString()),
        m = h
            ? E > 0
                ? e4.intl.formatToPlainString(e4.t.PQlCWk, { minutes: E })
                : e4.intl.string(e4.t.WINqKV)
            : e4.intl.formatToPlainString(e4.t.DC6h3G, { date: A });
    return (
        l.useEffect(() => {
            ed.default.track(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, s.jsxs)("div", {
            className: nA.kX,
            children: [
                (0, s.jsxs)("div", {
                    className: nA.fI,
                    children: [
                        (0, s.jsx)(tR.D, {
                            onClick: () => (0, ni.uR)({ eventId: t.id }),
                            className: nA.oP,
                            children: (0, s.jsx)(ti.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nA.eq,
                                children: t.name,
                            }),
                        }),
                        (0, s.jsx)(tR.D, {
                            onClick: () => {
                                (ed.default.track(B.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, nl.Lx)(t.id));
                            },
                            className: nA.ut,
                            "aria-label": e4.intl.string(e4.t.cpT0Cq),
                            children: (0, s.jsx)(tx.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tq()(nA.fI, nA.pF),
                    children: [
                        (0, s.jsx)(tJ.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nA.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, s.jsx)(ti.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nA.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tq()(nA.fI, nA.pF),
                    children: [
                        null != d
                            ? (0, s.jsx)(d, { size: "xs", color: "currentColor", className: nA.uE })
                            : (0, s.jsx)(t0.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nA.uE,
                              }),
                        (0, s.jsx)(ti.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nA.HA,
                            children: o ?? r,
                        }),
                    ],
                }),
                (0, s.jsx)(nm, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function ng(e) {
    let { guildEvent: t } = e,
        n = (0, nd.oF)(t);
    return null == n
        ? null
        : (0, s.jsx)(nh, {
              onClickCloseIcon: () => (0, nl.iF)({ eventId: t?.id }),
              heading: e4.intl.string(e4.t["1+boPi"]),
              topic: t.name,
              location: (0, na.y)(n, !0),
              locationIcon: (0, s.jsx)(t0.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nA.uE,
              }),
              children: (0, s.jsx)(nC, { guildEvent: t }),
          });
}
function nC(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, ni.uR)({ eventId: t.id });
        }, [t]);
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nA.PD,
        children: (0, s.jsx)(ts.$, {
            variant: "active",
            size: "sm",
            text: e4.intl.string(e4.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function n_(e) {
    let { channel: t, label: n } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nA.PD,
        children: (0, s.jsx)(ts.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t7.av)(t), (0, t2.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nN(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t8.Ay)(n),
        l = (0, o.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, S.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, o.bG)([p.A], () => p.A.getParticipantCount(n.id, S.ip.AUDIENCE), [n.id]),
        a = e4.intl.formatToPlainString(e4.t["+v2pN2"], { count: `${r}` });
    return (0, s.jsx)(nh, {
        onClickCloseIcon: () => (0, nl.iF)({ stageId: t?.id }),
        heading: e4.intl.string(e4.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, s.jsx)(t1.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nA.uE,
        }),
        locationIcon: (0, s.jsx)(t3.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nA.uE,
        }),
        topic: t.topic,
        children: (0, s.jsx)(np, { channel: n, speakers: l, voiceType: 2 }),
    });
}
function np(e) {
    var t;
    let { channel: n, speakers: i, voiceType: r } = e,
        a = n.getGuildId(),
        d = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, o.bG)([L.A], () => L.A.can(B.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, o.bG)(
                [t4.default, ne.Ay, nt.Ay],
                () => {
                    let e = t4.default.getId();
                    return ne.Ay.getVoiceChannelId() === t ? nt.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = e4.intl.string(e4.t.VJlc0S);
    switch (r) {
        case 1:
            A = e4.intl.string(e4.t.VJlc0S);
            break;
        case 2:
            ((A = e4.intl.string(e4.t.ZYO5OK)),
                c?.speaker ? (A = e4.intl.string(e4.t["/cnSFc"])) : null != c && (A = e4.intl.string(e4.t.btSGOj)));
            break;
        case 3:
            A = e4.intl.string(e4.t.wBoE6L);
            break;
        default:
            (0, nn.xb)(r);
    }
    return null == a
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  d.length > 0
                      ? (0, s.jsxs)("div", {
                            className: tq()(nA.fI, nA.pF),
                            children: [
                                (0, s.jsx)(t6.Ay, { guildId: a, users: d, showUserPopout: !0, size: t6.DN.SIZE_16 }),
                                (0, s.jsx)(ti.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nA.c8,
                                    children: (0, t9.c)(a, d, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, s.jsx)(n_, { channel: n, label: A }),
              ],
          });
}
let nS = l.memo(function (e) {
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
        ? m && (E = (0, s.jsx)(nN, { stageInstance: c, channel: a }))
        : d.entity_type === x.Ps.STAGE_INSTANCE && m
          ? (E = (0, s.jsx)(nN, { stageInstance: c, channel: a }))
          : d.entity_type === x.Ps.EXTERNAL
            ? (E = (0, s.jsx)(ng, { guildEvent: d }))
            : d.entity_type === x.Ps.VOICE && null != a && (E = (0, s.jsx)(nE, { guildEvent: d, channel: a }));
    let I = r.features.has(B.GuildFeatures.COMMUNITY);
    if (null == E && null != u && !I) {
        let { upcomingEvent: e, noticeType: t } = u;
        E = (0, s.jsx)(nI, { guildEvent: e, noticeType: t });
    }
    return E;
});
function nT(e) {
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
var nM = n(863888);
function nf(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, s.jsx)(tb, {
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
        message: e4.intl.string(e4.t["1+hiP6"]),
        cta: e4.intl.string(e4.t.hvVgAZ),
        trackingSource: B.kZU.HUB_LINK_NOTICE,
        type: B.n5X.HUB_LINK,
        image: (0, s.jsx)("div", { className: nM.b, children: (0, s.jsx)(nT, { alt: "", ariaHidden: !0 }) }),
    });
}
function nL(e) {
    let { guild: t } = e;
    function n() {
        return b.A.dismissNotice(t.id);
    }
    return (0, s.jsx)(tb, {
        guild: t,
        onDismissed: n,
        cta: e4.intl.string(e4.t.RzWDqY),
        message: e4.intl.format(e4.t["kQ/MDl"], {}),
        type: B.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), e9.default.open(t.id, B.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nR = n(587895),
    nx = n(143582);
function nD(e) {
    let t,
        { guild: n } = e,
        i = (0, y.$s)(n);
    function r() {
        return (0, nx.Hc)(n.id);
    }
    let a = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        d = (0, o.yK)(
            [nR.A],
            () => {
                let e = [];
                for (let t of a) {
                    let n = nR.A.getApplication(t);
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
                  ? e4.intl.formatToPlainString(e4.t["Egq+G/"], { a: d[0].name })
                  : 2 === d.length
                    ? e4.intl.formatToPlainString(e4.t.LxU9R3, { a: d[0].name, b: d[1].name })
                    : 3 === d.length
                      ? e4.intl.formatToPlainString(e4.t.crKXMC, { a: d[0].name, b: d[1].name, c: d[2].name })
                      : e4.intl.string(e4.t.MvfowF)),
          (0, s.jsx)(tb, {
              guild: n,
              onDismissed: r,
              message: t,
              type: B.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (r(), e9.default.open(n.id, B.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e4.intl.string(e4.t.Rr3MAe),
          }));
}
var nG = n(628287);
let nO = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tb, {
        guild: t,
        onDismissed: n,
        onClick: () => e9.default.open(t.id, B.BEX.COMMUNITY),
        message: e4.intl.string(e4.t["2klD0Z"]),
        trackingSource: B.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: B.n5X.PUBLIC_UPSELL,
        image: nG,
        cta: e4.intl.string(e4.t.hvVgAZ),
    });
};
var nU = n(536194),
    nb = n(780964),
    ny = n(766075);
class nP extends l.PureComponent {
    render() {
        return (0, s.jsx)(tb, {
            guild: this.props.guild,
            onClick: () => (0, ny.openUserSettings)(nb.X.ACCOUNT_PANEL),
            message: e4.intl.format(e4.t["oCd+at"], {}),
            cta: e4.intl.string(e4.t["8dCrV9"]),
            trackingSource: B.kZU.GUILD_MFA_WARNING,
            type: B.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nH = n(148494);
class nv extends l.PureComponent {
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
        let e = ne.Ay.getChannelId(),
            t = e4.intl.formatToPlainString(e4.t.DEn7nu, { invitePeople: e4.intl.string(e4.t.Sd8Ixw) });
        (this.props.markAsDismissed(ea.i.UNKNOWN), null != e && nH.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${e4.intl.string(e4.t.VWqWZQ)}
${e4.intl.string(e4.t["0Lgb/K"])}`;
        return (0, s.jsx)(tb, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e4.intl.string(e4.t.Sd8Ixw),
            trackingSource: B.kZU.INVITE_NOTICE,
            type: B.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
var nj = n(975571);
let nB = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tb, {
        guild: t,
        onDismissed: n,
        message: e4.intl.format(e4.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: nj.A.getArticleURL(B.MVz.MAX_MEMBERS),
        }),
        type: B.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nw = n(475358),
    nk = n(675704),
    nX = n(793322);
let nV = function (e) {
    let t = (0, s.jsx)(nw.e, { shortcut: nk.R.binds["0"], keyClassName: tO.Eb });
    return (0, s.jsx)(tb, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(ea.i.UNKNOWN),
        onClick: () => (0, nX.WU)("CHANNEL_NOTICE"),
        message: e4.intl.string(e4.t.Qhk8cs),
        cta: t,
        trackingSource: B.kZU.QUICK_SWITCHER_NOTICE,
        type: B.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nK = n(174768);
class nF extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(v.A), this.syncWith([v.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(B.GuildFeatures.BANNER) && Date.now() - t >= B.D2K;
    }
}
let nW = new nF(I.h);
class nz extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.MANAGE_GUILD, e);
    }
}
let nY = new nz(I.h);
var nQ = n(731667);
function nq() {
    return !0;
}
class nZ extends o.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], nq));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.ADMINISTRATOR, e);
    }
}
let n$ = new nZ(I.h),
    nJ = "lastHiddenChannelNotice",
    n0 = [
        {
            type: B.n5X.GUILD_BOOSTING,
            store: nY,
            dismissibleContentType: d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: B.n5X.GUILD_BANNER, store: nW, dismissibleContentType: d.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: B.n5X.INVITE, store: n$, dismissibleContentType: d.M.CHANNEL_NOTICE_INVITE },
        { type: B.n5X.HUB_LINK, store: nQ.A, dismissibleContentType: d.M.CHANNEL_NOTICE_HUBLINK },
        { type: B.n5X.QUICKSWITCHER, store: nK.A, dismissibleContentType: d.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: B.n5X.GAME_CLAIM, dismissibleContentType: d.M.GAME_CLAIM_COACHMARK },
    ],
    n1 = n0.map((e) => e.store).filter(nn.Vq),
    n3 = new Set([d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, d.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n6(e) {
    e.stopPropagation();
}
let n8 = [];
function n5(e) {
    var t, n;
    let i,
        r,
        a,
        u,
        c,
        { guild: A } = e,
        [h, E] = l.useState(P.w.get(nJ) ?? 0),
        m =
            ((n = t = A.id),
            (i = tp.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (r = (0, o.bG)([L.A], () => L.A.canWithPartialContext(B.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (u = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tN(e, t).length > 0;
            })(t, (a = i && r))),
            (c = a && u),
            l.useMemo(() => {
                let e = [];
                return (c && e.push(d.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n8);
            }, [c])),
        [I, g] = (0, $.ww)(m, A.id, ea.m.CHANNEL_NOTICES, !0),
        C = null != I,
        _ = (0, o.yK)(
            n1,
            () =>
                C
                    ? []
                    : n0
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, h) && !n3.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, h, C],
        ),
        [N, p] = (0, $.kn)(_, ea.m.CHANNEL_NOTICES),
        S = I ?? N,
        T = null != I ? g : p,
        M = l.useCallback(
            function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ea.i.UNKNOWN;
                ((e = Date.now()), P.w.set(nJ, e), E(e), T(t));
            },
            [T],
        ),
        f = (() => {
            switch (S) {
                case d.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, s.jsx)(nf, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_INVITE:
                    return (0, s.jsx)(nv, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, s.jsx)(tY, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, s.jsx)(nV, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, s.jsx)(tF, { guild: A, markAsDismissed: M });
                case d.M.GAME_CLAIM_COACHMARK:
                    return (0, s.jsx)(tk, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, s.jsx)("div", { onContextMenu: n6, children: f });
}
let n2 = function (e) {
    let { guild: t } = e;
    switch (Q(t)) {
        case Y.ENABLE_PUBLIC_GUILD:
            return (0, s.jsx)(nO, { guild: t });
        case Y.MAX_MEMBER_COUNT:
            return (0, s.jsx)(nB, { guild: t });
        case Y.GUILD_LIVE_CHANNEL:
            return (0, s.jsx)(nS, { guild: t });
        case Y.GUILD_MFA_WARNING:
            return (0, s.jsx)(nP, { guild: t });
        case Y.COMMANDS_MIGRATION:
            return (0, s.jsx)(nL, { guild: t });
        case Y.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, s.jsx)(nD, { guild: t });
    }
    return nU.P.isDisallowPopupsSet() ? null : (0, s.jsx)(n5, { guild: e.guild });
};
var n7 = n(883476);
function n9(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, s.jsx)("div", { className: n7.k, ref: i, children: (0, s.jsx)(n2, { guild: t }) })
    );
}
var n4 = n(66933),
    ie = n(846930),
    it = n(168095);
let ii = "server-settings",
    is = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class il extends l.PureComponent {
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
            I.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eB.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = eB.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        (this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            I.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices));
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
                (0, g.L3)(e, async () => {
                    let { default: e } = await n.e("879948").then(n.bind(n, 329671));
                    return (t) => (0, s.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, g.L3)(e, async () => {
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
            (0, g.L3)(e, async () => {
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
                    n.e("679157"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("410526"),
                    n.e("202985"),
                    n.e("603619"),
                    n.e("661630"),
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
                    n.e("989649"),
                    n.e("925420"),
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
                    n.e("728824"),
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
                    n.e("571247"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("10886"),
                    n.e("844448"),
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
                    n.e("456506"),
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
                    n.e("249169"),
                    n.e("754596"),
                    n.e("191601"),
                    n.e("401106"),
                    n.e("498589"),
                    n.e("21486"),
                    n.e("304419"),
                    n.e("622936"),
                    n.e("45268"),
                    n.e("617281"),
                    n.e("733199"),
                    n.e("259465"),
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
                    n.e("76283"),
                    n.e("792513"),
                    n.e("769266"),
                    n.e("487873"),
                    n.e("765626"),
                    n.e("683302"),
                    n.e("660608"),
                    n.e("744554"),
                    n.e("941827"),
                    n.e("923972"),
                    n.e("323423"),
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
                    n.e("834552"),
                    n.e("517888"),
                    n.e("993103"),
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
                    n.e("708757"),
                    n.e("56366"),
                    n.e("639161"),
                    n.e("477175"),
                    n.e("960235"),
                    n.e("402368"),
                    n.e("190779"),
                    n.e("910486"),
                    n.e("221856"),
                    n.e("678157"),
                    n.e("646271"),
                    n.e("325675"),
                    n.e("996481"),
                    n.e("331988"),
                    n.e("40291"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("793716"),
                    n.e("293159"),
                    n.e("186212"),
                    n.e("755936"),
                    n.e("209338"),
                    n.e("509398"),
                    n.e("927875"),
                    n.e("833703"),
                    n.e("55252"),
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
                    n.e("585968"),
                    n.e("27355"),
                    n.e("393336"),
                    n.e("481647"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("391763"),
                    n.e("21921"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("571210"),
                    n.e("676418"),
                    n.e("307575"),
                    n.e("942724"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("166495"),
                    n.e("401518"),
                    n.e("88342"),
                    n.e("187110"),
                    n.e("854461"),
                    n.e("139970"),
                    n.e("554241"),
                    n.e("940258"),
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
                    n.e("311802"),
                    n.e("9205"),
                    n.e("25949"),
                    n.e("146070"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("807936"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("88599"),
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
                    n.e("756055"),
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
                    n.e("474610"),
                    n.e("902564"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("92935"),
                    n.e("631908"),
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
                    n.e("204744"),
                    n.e("737021"),
                    n.e("695164"),
                    n.e("114308"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("41332"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("893349"),
                    n.e("859991"),
                    n.e("368062"),
                    n.e("844780"),
                    n.e("386317"),
                    n.e("709371"),
                    n.e("924691"),
                    n.e("217802"),
                    n.e("939171"),
                    n.e("96680"),
                    n.e("868214"),
                    n.e("661814"),
                    n.e("713567"),
                    n.e("612287"),
                    n.e("588070"),
                    n.e("793438"),
                    n.e("305557"),
                    n.e("36227"),
                    n.e("322422"),
                    n.e("444567"),
                    n.e("229666"),
                    n.e("92295"),
                    n.e("589916"),
                    n.e("695170"),
                    n.e("460773"),
                    n.e("309004"),
                    n.e("883952"),
                    n.e("28676"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("449145"),
                    n.e("278045"),
                    n.e("26001"),
                    n.e("159957"),
                    n.e("599976"),
                    n.e("174192"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("434786"),
                    n.e("430997"),
                    n.e("982730"),
                    n.e("708536"),
                    n.e("411353"),
                    n.e("49716"),
                    n.e("506045"),
                    n.e("618706"),
                    n.e("203930"),
                    n.e("439089"),
                    n.e("800872"),
                    n.e("903663"),
                    n.e("452531"),
                    n.e("201243"),
                    n.e("573330"),
                    n.e("728136"),
                    n.e("65393"),
                    n.e("338601"),
                    n.e("368530"),
                    n.e("343116"),
                    n.e("215920"),
                    n.e("216084"),
                    n.e("610943"),
                    n.e("66580"),
                    n.e("978046"),
                    n.e("127659"),
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
                    n.e("39214"),
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
                    n.e("156455"),
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
        null != e && t && eg.A.hideGuildTemplateDirtyTooltip(e.id);
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
            : (0, s.jsx)(tu, {
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
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, s.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, s.jsx)(ew.A, {
                      tutorialId: ii,
                      position: "bottom",
                      inlineSpecs: is,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, s.jsx)(c.A, {
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
                : l
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, s.jsx)(c.A, {
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
                showGuildTemplateDirtyTooltip: l,
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
            h = i || l || r;
        return null == t
            ? null
            : (0, s.jsx)(_.f5, {
                  value: a,
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
                          return (0, s.jsx)(eZ.Ay, {
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
                              disableBannerAnimation: h,
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
            return (0, s.jsx)(ie.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(B.GuildFeatures.HUB))
                return (0, s.jsx)("div", {
                    className: it.r0,
                    children: (0, s.jsx)(eL.A, { guild: t, channel: n ?? eK.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, ee.ai)(t.id) ? et.A : eq.B;
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
            className: it.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e4.intl.formatToPlainString(e4.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, s.jsx)(n9, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ir(e) {
    let t,
        i,
        r,
        u,
        c,
        A,
        h,
        E,
        I,
        g,
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
        P = (0, o.bG)([eX.A], () => eX.A.getGuildDimensions(x).scrollTo),
        H = (0, o.bG)([ez.A], () => ez.A.getChannelId()),
        w = (0, o.bG)([L.A], () => L.A.can(B.xBc.MANAGE_GUILD, b)),
        k = (0, o.bG)([eV.A], () => eV.A.isUnavailable(x)),
        X = (0, o.bG)([eI.default], () => eI.default.getCurrentUser()),
        { analyticsLocations: V } = (0, _.Ay)(C.A.GUILD_HEADER),
        [K, F] = (0, q.Ay)(
            (e) => [
                n0.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ea.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        W = Q(b),
        z = (0, m.useModalsStore)(m.hasAnyModalOpenSelector),
        Y = (0, o.bG)([eF.A], () => eF.A.hasLayers()),
        Z = (function (e) {
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
        et = (0, eR.xr)((e) => e.fullScreenLayers.length > 0),
        eg = (0, o.bG)([ek.A], () => ek.A.shouldShow(ii)),
        eC =
            ((t = (0, o.bG)([v.A], () => v.A.getGuild(x))),
            (i = (0, o.bG)([eI.default], () => eI.default.getCurrentUser())),
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
        e_ = b?.features.has(B.GuildFeatures.HUB) === !0,
        eN = w && b?.features.has(B.GuildFeatures.DISCOVERABLE) === !0,
        ep = (0, o.bG)(
            [eT, eF.A],
            () => null != b && null != X && w && !eF.A.hasLayers() && eT.shouldShowGuildTemplateDirtyTooltip(x),
        ),
        eS = (0, o.bG)([f.A], () => f.A.getChannel(G)),
        { isPopoutOpen: eL } = (0, es.S)(),
        eB = b?.features.has(B.GuildFeatures.COMMUNITY) ?? !1,
        ew = eY.Ay.isNewUser(X);
    ((c = (0, eo.TZ)(b)),
        (A = j.dR.some((e) => !(0, ee.ai)(b?.id) && eu.Ib(e, b))),
        (h = b?.defaultMessageNotifications === B.orn.ALL_MESSAGES),
        (E = (0, ec.G$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq)),
        (I = c && (A || h) && !E),
        (g = l.useCallback(() => {
            (0, ec._$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq, !0, ea.i.DISMISS);
        }, [b])),
        (N = l.useRef(!1)),
        l.useEffect(() => {
            I &&
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
                    { onCloseCallback: g },
                ),
                ed.default.track(B.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: d.V[d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? B.dJq,
                }),
                (N.current = !0));
        }, [A, b, g, h, I]));
    let eK =
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
    let eQ = (0, o.bG)([ez.A], () => ez.A.getChannelId()),
        eq = (0, o.bG)([eW.A], () => eW.A.desyncedVoiceStatesCount),
        eZ = (0, eU.A)(x),
        e$ = (0, ee.ai)(x) ? null : eZ,
        eJ =
            (function (e) {
                let t = (0, eU.A)(e),
                    n = (0, ey.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, eP.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, ey.lY)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    l = (0, ev.A)(e),
                    { available: r, isLoading: a } = (0, eH.A)(e);
                if (a) return !1;
                let o = r < ej.fe;
                return n && i && !s && o && !l && !1 === t;
            })(x) && !(0, ee.ai)(x);
    n4.A.useConfig({ guildId: x, location: "guild_sidebar" });
    let e0 = (0, ei.C$)(x, "GuildSidebar"),
        e1 = (0, o.bG)([v.A], () => v.A.getGuild(x)?.features.has(B.GuildFeatures.GAME_SERVERS) ?? !1, [x]),
        e3 = e0 && !e1 && !1 === e$,
        e6 = (0, eb.A)(),
        e8 = (0, eG.A)(x),
        e5 = !1 === e$ && e6 && null != e8,
        e2 = (0, eO.A)(x),
        e7 = !1 === e$ && e6 && null != e2,
        e9 = [];
    (e_ && e9.push(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eC && e9.push(d.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eN && e9.push(d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e$ && e9.push(d.M.GUILD_POWERUP_PERKS_COACHMARK),
        eJ && e9.push(d.M.GUILD_THEME_MEMBER_COACHMARK),
        e3 && e9.push(d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eK && e9.push(d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let [e4, te] = (0, $.kn)(e9, ea.m.GUILD_HEADER_TOOLTIPS),
        [tt, tn] = (0, eD.vB)(e0 && !1 === e$ && !(0, ee.ai)(x), ea.m.GUILD_HEADER_TOOLTIPS),
        [ti, ts] = (0, $.D8)(
            e5 ? d.M.BOOST_TO_UNLOCK_COACHMARK : null,
            x,
            { cooldownDurationMs: ex.bW, numTimesToRecur: 5 },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tl, tr] = (0, $.D8)(
            e7 ? d.M.EXPIRING_POWERUP_COACHMARK : null,
            x,
            { cooldownDurationMs: ex.mD },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        ta = l.useMemo(
            () =>
                Z.shouldShow && null != Z.coachmark
                    ? {
                          contentType: d.M.GUILD_HEADER_COACHMARK,
                          data: {
                              marketingComponent: {
                                  componentId: Z.componentId,
                                  promotionId: Z.promotionId,
                                  coachmark: Z.coachmark,
                              },
                          },
                          markAsDismissed: Z.markAsDismissed,
                      }
                    : null != e4
                      ? { contentType: e4, data: null, markAsDismissed: te }
                      : tt === d.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: tt, data: null, markAsDismissed: tn }
                        : ti === d.M.BOOST_TO_UNLOCK_COACHMARK && null != e8
                          ? { contentType: ti, data: { featuredPowerup: e8 }, markAsDismissed: ts }
                          : tl === d.M.EXPIRING_POWERUP_COACHMARK && null != e2
                            ? { contentType: tl, data: { featuredExpiringPowerup: e2 }, markAsDismissed: tr }
                            : null,
            [
                Z.shouldShow,
                Z.coachmark,
                Z.componentId,
                Z.promotionId,
                Z.markAsDismissed,
                e4,
                tt,
                ti,
                tl,
                e8,
                e2,
                te,
                tn,
                ts,
                tr,
            ],
        );
    return (0, s.jsx)(il, {
        guildId: x,
        hideSelectedChannel: D,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: D ? null : G,
        selectedChannel: eS,
        selectedVoiceChannelId: H,
        voiceStates: y,
        rtcConnectedChannelId: eQ,
        rtcDesyncedVoiceStatesCount: eq,
        isUnavailable: k,
        user: X,
        hasChannelNotice: null != W || K,
        anyLayerOpen: z || Y || et,
        showGuildHeaderTutorial: eg,
        showGuildTemplateDirtyTooltip: ep,
        showNewUnreadsBar: eB,
        isHeaderPopoutOpen: eL,
        isGuildHeaderDismissibleTooltipShown: F,
        headerAnalyticsLocations: V,
        shouldRenderBurstCoachmark: !ew,
        guildHeaderContentDescriptor: ta,
        onFavoriteGuildContextMenu: O,
        hasFavoritesAccess: U,
    });
}
