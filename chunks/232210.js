(n.r(t), n.d(t, { default: () => is }), n(321073));
var i,
    s = n(477900),
    l = n(582128),
    a = n(120692),
    r = n(855986),
    o = n(554146),
    d = n(451988),
    u = n(43105),
    c = n(900797),
    A = n(847374),
    h = n(265872),
    E = n(192308),
    m = n(73153),
    g = n(442433),
    I = n(793574),
    C = n(688810),
    _ = n(285059),
    N = n(63995);
n(113783);
var S = n(597886),
    p = n(446600),
    T = n(624265);
n(616356);
var M = n(734057),
    f = n(576705),
    b = n(607567),
    R = n(988794);
let L = { hiddenEventsAndStages: [] };
class x extends r.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (L = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && L.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && L.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return L;
    }
}
let D = new x(m.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? L.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && L.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (t.status === R.XG.CANCELED || t.status === R.XG.COMPLETED) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        L.hiddenEventsAndStages.includes(n) &&
            (L.hiddenEventsAndStages = L.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var O = n(508654);
n(818348);
var G = n(320426),
    U = n(915043),
    y = n(506774),
    P = n(498642),
    H = n(71393),
    v = n(124759),
    j = n(652215);
let B = "publicUpsellChannelNoticeGuilds",
    w = new Set();
class k extends r.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        (this.waitFor(f.A, H.A, P.A), this.syncWith([f.A, H.A, P.A], j.tEg), (w = new Set(y.w.get(B)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return;
        let t = P.A.getMemberCount(e.id);
        return (
            !w.has(e.id) &&
            null != t &&
            t >= 1e3 &&
            f.A.can(j.xBc.ADMINISTRATOR, e) &&
            !e.features.has(j.GuildFeatures.COMMUNITY)
        );
    }
}
let X = new k(m.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!w.has(t)) return (w.add(t), y.w.set(B, w), !0);
    },
});
var V = n(992250);
let K = { MAX_MEMBER_COUNT: new Set() };
class F extends r.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        (this.waitFor(f.A, H.A, P.A),
            this.syncWith([f.A, H.A, P.A], j.tEg),
            y.w.remove(j.n5X.MAX_MEMBER_COUNT_100),
            y.w.remove(j.n5X.MAX_MEMBER_COUNT_250),
            (K[j.n5X.MAX_MEMBER_COUNT] = new Set(y.w.get(j.n5X.MAX_MEMBER_COUNT)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = P.A.getMemberCount(e.id) ?? 0,
            n = f.A.can(j.xBc.ADMINISTRATOR, e);
        return !K[j.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let W = new F(m.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!K[j.n5X.MAX_MEMBER_COUNT].has(t))
            return (K[j.n5X.MAX_MEMBER_COUNT].add(t), y.w.set(j.n5X.MAX_MEMBER_COUNT, K[j.n5X.MAX_MEMBER_COUNT]), !0);
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
function z(e) {
    let t = e?.id ?? "",
        n = (0, r.bG)([X], () => X.isVisible(e)),
        i = (0, r.bG)([W], () => W.isVisible(e)),
        s = (function (e) {
            let t = (0, T.Ay)(e),
                n = M.A.getChannel(t[0]?.id),
                i = (0, r.bG)([p.A], () => p.A.getStageInstanceByChannel(n?.id), [n]),
                s = (0, O.BP)(e),
                { isStageNoticeHidden: l, isEventNoticeHidden: a } = (0, r.cf)(
                    [D],
                    () => ({
                        isStageNoticeHidden: D.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: D.isLiveChannelNoticeHidden({ eventId: s?.id }),
                    }),
                    [i, s],
                );
            if (null != s)
                if (null != i) return !l;
                else return !a;
            return null != i && !l;
        })(t),
        a = (0, r.bG)([V.A], () => V.A.isVisible(e)),
        o = G.A.useShouldShowChannelNotice(t),
        d = (0, U.$s)(e).length > 0,
        u = (0, O.WG)(t);
    if (
        (l.useEffect(() => {
            _.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (s || null != u) return 2;
    if (a) return 3;
    if (o) return 4;
    else if (d) return 5;
    return null;
}
var Q = n(517057),
    Z = n(826673),
    q = n(263775),
    $ = n(5180),
    J = n(132598),
    ee = n(428784),
    et = n(831617),
    en = n(72152),
    ei = n(517352),
    es = n(641436),
    el = n(49999),
    ea = n(600975);
let er = (0, ea.C)({
    kind: "guild",
    id: "2022-11_default_disable_mass_mention",
    label: "Disable mass mentions for communities by default",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
var eo = n(129230),
    ed = n(488926),
    eu = n(45780),
    ec = n(567305),
    eA = n(555325),
    eh = n(469993),
    eE = n(260509),
    em = n(287809),
    eg = n(568185);
let eI = "hasSeenGuildTemplatePromotionTooltip",
    eC = {},
    e_ = !0 === y.w.get(eI);
function eN(e) {
    let { guildId: t } = e;
    eC = { ...eC, [t]: !1 };
}
class eS extends r.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eC[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !e_;
    }
}
let ep = new eS(m.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eC = { ...eC, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        (y.w.set(eI, !0), (e_ = !0));
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eC = { ...eC, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eN,
    GUILD_TEMPLATE_DELETE_SUCCESS: eN,
});
var eT = n(875317),
    eM = n(166998),
    ef = n(814255),
    eb = n(361158),
    eR = n(941504),
    eL = n(379229),
    ex = n(229548),
    eD = n(139032),
    eO = n(470892),
    eG = n(363487),
    eU = n(342220),
    ey = n(128376),
    eP = n(728321),
    eH = n(179913),
    ev = n(72314),
    ej = n(919638),
    eB = n(808728),
    ew = n(186111),
    ek = n(584569),
    eX = n(495867),
    eV = n(448645),
    eK = n(885631),
    eF = n(616740),
    eW = n(182179),
    eY = n(206248),
    ez = n(498470),
    eQ = n(807098),
    eZ = n(637706),
    eq = n(788883),
    e$ = n(7667);
function eJ(e) {
    let { guildId: t, marketingComponent: n, targetElementRef: i, markAsDismissed: a } = e,
        { id: r, componentType: d, promotionId: u } = n,
        { surface: c } = n,
        { analyticsLocations: A } = (0, C.Ay)(),
        h = (0, eQ.T)(c.asset),
        { terms: E } = (0, e$.A)(u),
        m = l.useCallback(() => {
            a(el.i.DISMISS);
        }, [a]),
        g = l.useCallback(() => {
            ((0, ez.h)({
                buttonAction: c.button?.buttonAction,
                deeplinkSection: c.button?.deeplinkSection,
                applicationId: c.button?.navigableStorefrontApplicationId?.value,
                shopCollectionId: c.button?.shopCollectionId?.value,
                giftModalDestination: c.button?.giftModalDestination,
                guildId: t,
                analyticsLocation: { page: j.liQ.GUILD_CHANNEL, section: j.JJy.GUILD_HEADER },
                analyticsLocations: A,
            })(),
                a(el.i.TAKE_ACTION));
        }, [c.button, t, A, a]),
        I = (0, eZ.C)(c.helpArticle, ""),
        _ = [c.body, E].filter((e) => "" !== e).join(" "),
        { icon: N } = (0, ez.x)({ buttonAction: c.button?.buttonAction }),
        S = c.button?.copy ?? "";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eq.A, {
                componentType: d,
                componentId: r,
                promotionId: u,
                dismissibleContent: o.M.GUILD_HEADER_COACHMARK,
            }),
            (0, s.jsx)(eY.H, {
                targetElementRef: i,
                title: c.header,
                body: _,
                assetUrl: h ?? "",
                disableMediaViewer: !0,
                action: "" !== S ? { text: S, variant: "primary", icon: N, iconPosition: "start", onClick: g } : void 0,
                textLink: null != I ? { text: I.linkText, link: I.url } : void 0,
                onRequestClose: m,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var e0 = n(613412),
    e1 = n(164636),
    e6 = n(139286),
    e3 = n(727419),
    e5 = n(792996),
    e8 = n(330766);
function e7(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        l = (0, e1.bG)([H.A, em.default], () => {
            let e = em.default.getCurrentUser(),
                n = H.A.getGuild(t);
            return null != n && (0, eE.bM)(n, e);
        });
    return (
        (0, e6.A)({
            type: e0.ImpressionTypes.POPOUT,
            name: e0.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: l },
        }),
        (0, s.jsx)(u.A, {
            targetElementRef: i,
            title: e5.intl.string(e5.t.C0m4rQ),
            body: e5.intl.string(e5.t.zOHfEX),
            graphic: { type: "image", src: e8 },
            actions: [
                {
                    text: e5.intl.string(e5.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        e3.A.open(t, j.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(el.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function e2(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(eY.H, {
        targetElementRef: i,
        title: e5.intl.string(e5.t.gCgirr),
        body: e5.intl.string(e5.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: e5.intl.string(e5.t.BQq86h),
            variant: "primary",
            onClick: function () {
                e3.A.open(t, j.BEX.ROLE_SUBSCRIPTIONS, void 0, j.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(el.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var e9 = n(834730),
    e4 = n(821609),
    te = n(736759);
function tt(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: te.kL,
        children: [
            (0, s.jsx)("div", { className: te.Wn }),
            (0, s.jsx)(e9.E, { variant: "body-sm/normal", className: te.Qs, children: e5.intl.string(e5.t.rdzeVP) }),
            (0, s.jsx)(e4.$, {
                variant: "overlay-primary",
                text: e5.intl.string(e5.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(el.i.AUTO);
                },
            }),
        ],
    });
}
var tn = n(148700);
function ti(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(u.A, {
        targetElementRef: i,
        title: e5.intl.string(e5.t.Hgd22r),
        body: e5.intl.string(e5.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: e5.intl.string(e5.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    e3.A.open(t.id, j.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(el.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function ts(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = l.useRef(null);
    return (0, s.jsx)(h.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, s.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(i) : t,
            }),
        position: "bottom",
        align: "center",
        animation: h.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, s.jsx)("div", { ref: i, children: n() }),
    });
}
let tl = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: l, data: a, markAsDismissed: r } = t,
        d = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, s.jsx)(s.Fragment, {
        children: (function () {
            switch (l) {
                case o.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, s.jsx)(tn.UB, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...d }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) =>
                            (0, s.jsx)(tn.YX, { guildId: n.id, markAsDismissed: r, channelRowRef: e, ...d }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) => (0, s.jsx)(tn.K8, { guildId: n.id, markAsDismissed: r, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = a?.featuredPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(ts, {
                        renderPopout: (t) =>
                            (0, s.jsx)(tn.Gw, {
                                type: eL.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...d,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = a?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(ts, {
                        renderPopout: (t) =>
                            (0, s.jsx)(tn.Mr, {
                                type: eL.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: r,
                                channelRowRef: t,
                                ...d,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.GUILD_HEADER_COACHMARK: {
                    let e = a?.marketingComponent;
                    if (null == e) return i();
                    return (0, s.jsx)(ts, {
                        renderPopout: (t) =>
                            (0, s.jsx)(eJ, {
                                guildId: n.id,
                                marketingComponent: e,
                                targetElementRef: t,
                                markAsDismissed: r,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) => (0, s.jsx)(e7, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) => (0, s.jsx)(ti, { guild: n, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, s.jsx)(ts, {
                        renderPopout: (0, s.jsx)(tt, { markAsDismissed: r }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, s.jsx)(ts, {
                        renderPopout: (e) => (0, s.jsx)(e2, { guildId: n.id, markAsDismissed: r, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var ta = n(256787),
    tr = n(158390),
    to = n(620632),
    td = n(927813);
let tu = null;
class tc extends r.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tu;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tu?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tu?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tu) return [];
        let e = tu;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tA = new tc(m.h, {
        LOGOUT: function () {
            tu = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tu = t;
        },
    }),
    th = [],
    tE = (0, r.UT)(tA, {
        getQueryId: (e) => (e ? "unclaimed-games" : null),
        get: () => tA.getMap(),
        load: () =>
            (async function () {
                let { body: e } = await to.Bo.get({
                    url: j.Rsh.UNCLAIMED_GAMES,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
                m.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
            })(),
        staleAfter: td.A.Seconds.DAY,
        retryConfig: { backoff: () => new tr.A(5 * td.A.Millis.MINUTE), maxRetries: 10 },
    });
function tm(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tE(t);
    return n?.[e] ?? th;
}
let tg = (0, ea.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tI = n(509434),
    tC = n(975807),
    t_ = n(435558),
    tN = n.n(t_),
    tS = n(862482),
    tp = n(939249),
    tT = n(789645),
    tM = n(534514),
    tf = n(149468),
    tb = n(446406);
let tR = tN().debounce(tf.Ay.trackWithMetadata, 500),
    tL = function (e) {
        let {
            guild: t,
            title: n,
            message: i,
            image: a,
            type: r,
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
            tR(j.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: r, guild_id: t.id });
        }, [t.id, r]);
        let g = null;
        "function" == typeof E
            ? (g = E())
            : null != E &&
              (g = (0, s.jsx)(tS.$n, {
                  "data-migration-pending": !0,
                  className: tb.HM,
                  size: tS.$n.Sizes.SMALL,
                  onClick: function () {
                      (null != r &&
                          eo.default.track(j.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: r,
                          }),
                          h?.());
                  },
                  fullWidth: !0,
                  color: m,
                  children: E,
              }));
        let I = null != o ? `${o}px` : "16px";
        return (0, s.jsxs)("div", {
            className: tb.kX,
            children: [
                !0 === c
                    ? null
                    : (0, s.jsx)(tp.D, {
                          onClick: function () {
                              (tf.Ay.trackWithMetadata(j.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: r }), A?.());
                          },
                          className: tb.VN,
                          "aria-label": e5.intl.string(e5.t.WAI6xu),
                          children: (0, s.jsx)(tT.XSmallIcon, { size: "md", color: "currentColor", className: tb.ut }),
                      }),
                null != a &&
                    (0, s.jsx)("div", {
                        className: tb.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof a ? (0, s.jsx)("img", { className: tb.Sl, src: a, alt: "" }) : a,
                    }),
                (0, s.jsxs)("div", {
                    className: tb.iU,
                    children: [
                        null != n
                            ? (0, s.jsx)(tM.D, { variant: "heading-sm/semibold", className: tb.DD, children: n })
                            : null,
                        (0, s.jsx)(e9.E, { variant: "body-sm/normal", children: i }),
                        g,
                    ],
                }),
            ],
        });
    };
var tx = n(201438),
    tD = n(194362),
    tO = n(646514),
    tG = n(307301),
    tU = n(701115);
function ty(e) {
    let { imageSrc: t } = e;
    return (0, s.jsxs)("div", {
        className: tU.kL,
        children: [
            (0, s.jsx)("div", { className: tU.j3, children: (0, s.jsx)("img", { className: tU.Su, src: t, alt: "" }) }),
            (0, s.jsx)("div", {
                className: tU.gm,
                children: (0, s.jsx)("div", {
                    className: tU.WA,
                    children: (0, s.jsx)(tG.PlusSmallIcon, { size: "sm", color: tO.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tP = n(63142);
function tH(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tm(t.id)[0] ?? null,
        { coverImageUrl: l, gameName: a } = (0, tx.A)(i, e5.intl.string(e5.t.VQq92a));
    if (null == l) return null;
    let r = t.features.has(j.GuildFeatures.VERIFIED) ? e5.intl.string(e5.t.uUARXe) : e5.intl.string(e5.t["0Dx29f"]);
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: () => n(el.i.USER_DISMISS),
        title: e5.intl.format(e5.t.Q11WTQ, { gameName: a }),
        message: r,
        cta: (0, s.jsxs)("span", {
            className: tP.m,
            children: [
                e5.intl.string(e5.t["2u6ZlY"]),
                (0, s.jsx)(tI.LinkExternalSmallIcon, { size: "xs", color: "currentColor" }),
            ],
        }),
        type: j.n5X.GAME_CLAIM,
        image: (0, s.jsx)(ty, { imageSrc: l }),
        imageMarginX: 60,
        onClick: async () => {
            n(el.i.TAKE_ACTION);
            let e = await (0, tD.a)(j.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tC.A)(e);
        },
    });
}
var tv = n(631305),
    tj = n(473145),
    tB = n(598933);
function tw(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tj.Os)(t, j.TVA.TIER_2),
        { analyticsLocations: l } = (0, C.Ay)(I.A.GUILD_BANNER_NOTICE);
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: () => n(el.i.UNKNOWN),
        cta: e5.intl.string(e5.t.oPAx73),
        message: e5.intl.format(e5.t.AcaNYw, { boostsNeeded: i }),
        type: j.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tv.A)({
                analyticsLocations: l,
                analyticsSourceLocation: { section: j.JJy.CHANNEL_NOTICE, object: j.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tB.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tk = n(233824);
class tX extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tk.K4)({ guildId: e.id, location: { section: j.JJy.CHANNEL_NOTICE, object: j.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, s.jsx)(tL, {
            guild: e,
            onDismissed: () => n(el.i.USER_DISMISS),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? e5.intl.string(e5.t.hlitVQ) : e5.intl.string(e5.t.XHtaDD),
            cta: e5.intl.string(e5.t["vqb+H1"]),
            trackingSource: j.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: j.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let tV = r.Ay.connectStores([P.A], (e) => {
    let { guild: t } = e;
    return { memberCount: P.A.getMemberCount(t.id) };
})(tX);
var tK = n(503698),
    tF = n.n(tK),
    tW = n(933832),
    tY = n(782603),
    tz = n(81466),
    tQ = n(116085),
    tZ = n(597601),
    tq = n(451394),
    t$ = n(104171),
    tJ = n(47167),
    t0 = n(713654),
    t1 = n(976860),
    t6 = n(129095),
    t3 = n(110618),
    t5 = n(46653),
    t8 = n(309010),
    t7 = n(312006),
    t2 = n(403362),
    t9 = n(707592),
    t4 = n(698441),
    ne = n(935159),
    nt = n(11550),
    nn = n(435328),
    ni = n(563312),
    ns = n(9448),
    nl = n(974930),
    na = n(666394),
    nr = n(659463);
let no = l.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: l,
        detailsIcon: a,
        topic: r,
        onClickCloseIcon: o,
        children: d,
    } = e;
    return (0, s.jsxs)("div", {
        className: nr.kX,
        children: [
            (0, s.jsxs)("div", {
                className: tF()(nr.fI, nr.pF),
                children: [
                    (0, s.jsx)("div", { className: nr.Ok }),
                    (0, s.jsx)(e9.E, {
                        color: "text-feedback-positive",
                        variant: "body-xs/semibold",
                        className: nr.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, s.jsx)(tp.D, {
                            onClick: o,
                            className: nr.ut,
                            "aria-label": e5.intl.string(e5.t.cpT0Cq),
                            children: (0, s.jsx)(tT.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, s.jsx)(tM.D, {
                color: "text-strong",
                variant: "heading-sm/semibold",
                lineClamp: 2,
                className: nr.eq,
                children: r,
            }),
            (0, s.jsxs)("div", {
                className: tF()(nr.fI, nr.pF),
                children: [
                    i,
                    (0, s.jsx)(e9.E, { color: "none", variant: "body-xs/normal", className: nr.HA, children: n }),
                    null != l &&
                        null != a &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(e9.E, {
                                    className: nr.hY,
                                    color: "none",
                                    variant: "body-xs/normal",
                                    children: "\u2022",
                                }),
                                a,
                                (0, s.jsx)(e9.E, {
                                    color: "none",
                                    variant: "body-xs/normal",
                                    className: nr.zH,
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
function nd(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, tJ.Ay)(n),
        l = (0, r.yK)(
            [b.Ay],
            () =>
                b.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, t0.gU)(n);
    return (0, s.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
        heading: e5.intl.string(e5.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != a ? (0, s.jsx)(a, { size: "xs", color: "currentColor", className: nr.uE }) : null,
        children: (0, s.jsx)(ng, { channel: n, speakers: l, voiceType: 1 }),
    });
}
function nu(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nl.G3)(t),
        l = (0, r.bG)([t4.Ay], () => t4.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, r.bG)([nt.A], () => nt.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != a || (0, ne.pE)(t.id),
        (0, s.jsx)(e4.$, {
            onClick: function () {
                ((0, na.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, ne.Lx)(t.id), 1e3)),
                    eo.default.track(j.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: e5.intl.string(e5.t.DlcqlU),
            icon: l ? tW.CheckmarkLargeIcon : tY.BellIcon,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nc(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, ns.oF)(t),
        a = null != i ? (0, nn.y)(i, !0) : null,
        r = (0, ns.WN)(t),
        o = (0, tJ.Ay)(r),
        d = (0, t0.gU)(r),
        { startTime: u, endTime: c } = (0, ni.Ay)(t),
        { startDateTimeString: A, upcomingEvent: h, diffMinutes: E } = (0, nl.CC)(u.toISOString(), c?.toISOString()),
        m = h
            ? E > 0
                ? e5.intl.formatToPlainString(e5.t.PQlCWk, { minutes: E })
                : e5.intl.string(e5.t.WINqKV)
            : e5.intl.formatToPlainString(e5.t.DC6h3G, { date: A });
    return (
        l.useEffect(() => {
            eo.default.track(j.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, s.jsxs)("div", {
            className: nr.kX,
            children: [
                (0, s.jsxs)("div", {
                    className: nr.fI,
                    children: [
                        (0, s.jsx)(tp.D, {
                            onClick: () => (0, t9.uR)({ eventId: t.id }),
                            className: nr.oP,
                            children: (0, s.jsx)(e9.E, {
                                color: "text-strong",
                                variant: "body-md/semibold",
                                lineClamp: 2,
                                className: nr.eq,
                                children: t.name,
                            }),
                        }),
                        (0, s.jsx)(tp.D, {
                            onClick: () => {
                                (eo.default.track(j.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, ne.Lx)(t.id));
                            },
                            className: nr.ut,
                            "aria-label": e5.intl.string(e5.t.cpT0Cq),
                            children: (0, s.jsx)(tT.XSmallIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tF()(nr.fI, nr.pF),
                    children: [
                        (0, s.jsx)(tz.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nr.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, s.jsx)(e9.E, {
                            color: "text-default",
                            variant: "body-xs/normal",
                            className: nr.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: tF()(nr.fI, nr.pF),
                    children: [
                        null != d
                            ? (0, s.jsx)(d, { size: "xs", color: "currentColor", className: nr.uE })
                            : (0, s.jsx)(tQ.LocationIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nr.uE,
                              }),
                        (0, s.jsx)(e9.E, {
                            color: "none",
                            variant: "body-xs/normal",
                            className: nr.HA,
                            children: o ?? a,
                        }),
                    ],
                }),
                (0, s.jsx)(nu, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nA(e) {
    let { guildEvent: t } = e,
        n = (0, ns.oF)(t);
    return null == n
        ? null
        : (0, s.jsx)(no, {
              onClickCloseIcon: () => (0, ne.iF)({ eventId: t?.id }),
              heading: e5.intl.string(e5.t["1+boPi"]),
              topic: t.name,
              location: (0, nn.y)(n, !0),
              locationIcon: (0, s.jsx)(tQ.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nr.uE,
              }),
              children: (0, s.jsx)(nh, { guildEvent: t }),
          });
}
function nh(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, t9.uR)({ eventId: t.id });
        }, [t]);
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nr.PD,
        children: (0, s.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: e5.intl.string(e5.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nE(e) {
    let { channel: t, label: n } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nr.PD,
        children: (0, s.jsx)(e4.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, t6.av)(t), (0, t1.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nm(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, tJ.Ay)(n),
        l = (0, r.yK)([N.A], () => [...new Set(N.A.getMutableParticipants(n.id, S.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, r.bG)([N.A], () => N.A.getParticipantCount(n.id, S.ip.AUDIENCE), [n.id]),
        o = e5.intl.formatToPlainString(e5.t["+v2pN2"], { count: `${a}` });
    return (0, s.jsx)(no, {
        onClickCloseIcon: () => (0, ne.iF)({ stageId: t?.id }),
        heading: e5.intl.string(e5.t["X2K3/4"]),
        location: i,
        details: o,
        detailsIcon: (0, s.jsx)(tZ.HeadphonesIcon, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nr.uE,
        }),
        locationIcon: (0, s.jsx)(tq.StageIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nr.uE,
        }),
        topic: t.topic,
        children: (0, s.jsx)(ng, { channel: n, speakers: l, voiceType: 2 }),
    });
}
function ng(e) {
    var t;
    let { channel: n, speakers: i, voiceType: a } = e,
        o = n.getGuildId(),
        d = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, r.bG)([f.A], () => f.A.can(j.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, r.bG)(
                [t5.default, t8.Ay, t7.Ay],
                () => {
                    let e = t5.default.getId();
                    return t8.Ay.getVoiceChannelId() === t ? t7.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = e5.intl.string(e5.t.VJlc0S);
    switch (a) {
        case 1:
            A = e5.intl.string(e5.t.VJlc0S);
            break;
        case 2:
            ((A = e5.intl.string(e5.t.ZYO5OK)),
                c?.speaker ? (A = e5.intl.string(e5.t["/cnSFc"])) : null != c && (A = e5.intl.string(e5.t.btSGOj)));
            break;
        case 3:
            A = e5.intl.string(e5.t.wBoE6L);
            break;
        default:
            (0, t2.xb)(a);
    }
    return null == o
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  d.length > 0
                      ? (0, s.jsxs)("div", {
                            className: tF()(nr.fI, nr.pF),
                            children: [
                                (0, s.jsx)(t$.Ay, { guildId: o, users: d, showUserPopout: !0, size: t$.DN.SIZE_16 }),
                                (0, s.jsx)(e9.E, {
                                    color: "none",
                                    variant: "body-xs/normal",
                                    className: nr.c8,
                                    children: (0, t3.c)(o, d, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, s.jsx)(nE, { channel: n, label: A }),
              ],
          });
}
let nI = l.memo(function (e) {
    var t;
    let n,
        i,
        l,
        { guild: a } = e,
        o = ((t = a.id), (n = (0, O.r2)(t)), (i = (0, T.Ay)(t)), (l = M.A.getChannel(i[0]?.id)), n ?? l),
        d = (0, O.BP)(a.id),
        u = (0, O.WG)(a.id),
        c = (0, r.bG)([p.A], () => p.A.getStageInstanceByChannel(o?.id), [o]),
        { isStageNoticeHidden: A, isEventNoticeHidden: h } = (0, r.cf)(
            [D],
            () => ({
                isStageNoticeHidden: D.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: D.isLiveChannelNoticeHidden({ eventId: d?.id }),
            }),
            [c, d],
        ),
        E = null,
        m = null != c && null != o && !A;
    null == d || h
        ? m && (E = (0, s.jsx)(nm, { stageInstance: c, channel: o }))
        : d.entity_type === R.Ps.STAGE_INSTANCE && m
          ? (E = (0, s.jsx)(nm, { stageInstance: c, channel: o }))
          : d.entity_type === R.Ps.EXTERNAL
            ? (E = (0, s.jsx)(nA, { guildEvent: d }))
            : d.entity_type === R.Ps.VOICE && null != o && (E = (0, s.jsx)(nd, { guildEvent: d, channel: o }));
    let g = a.features.has(j.GuildFeatures.COMMUNITY);
    if (null == E && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        E = (0, s.jsx)(nc, { guildEvent: e, noticeType: t });
    }
    return E;
});
var nC = n(62617);
function n_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nC.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/22b530628b0360931343feee81e79f9e43c02bf07c24cb4ee9f657b3ec8a0e6c.svg",
        className: (0, nC.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nN = n(863888);
function nS(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: () => i(el.i.UNKNOWN),
        onClick: function () {
            (0, E.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(144909),
                    n.e(197804),
                    n.e(807265),
                    n.e(797641),
                    n.e(169555),
                ]).then(n.bind(n, 500126));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        },
        message: e5.intl.string(e5.t["1+hiP6"]),
        cta: e5.intl.string(e5.t.hvVgAZ),
        trackingSource: j.kZU.HUB_LINK_NOTICE,
        type: j.n5X.HUB_LINK,
        image: (0, s.jsx)("div", { className: nN.b, children: (0, s.jsx)(n_, { alt: "", ariaHidden: !0 }) }),
    });
}
function np(e) {
    let { guild: t } = e;
    function n() {
        return G.A.dismissNotice(t.id);
    }
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: n,
        cta: e5.intl.string(e5.t.RzWDqY),
        message: e5.intl.format(e5.t["kQ/MDl"], {}),
        type: j.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), e3.A.open(t.id, j.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nT = n(587895),
    nM = n(143582);
function nf(e) {
    let t,
        { guild: n } = e,
        i = (0, U.$s)(n);
    function a() {
        return (0, nM.Hc)(n.id);
    }
    let o = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        d = (0, r.yK)(
            [nT.A],
            () => {
                let e = [];
                for (let t of o) {
                    let n = nT.A.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [o],
        );
    return 0 === d.length
        ? null
        : ((t =
              1 === d.length
                  ? e5.intl.formatToPlainString(e5.t["Egq+G/"], { a: d[0].name })
                  : 2 === d.length
                    ? e5.intl.formatToPlainString(e5.t.LxU9R3, { a: d[0].name, b: d[1].name })
                    : 3 === d.length
                      ? e5.intl.formatToPlainString(e5.t.crKXMC, { a: d[0].name, b: d[1].name, c: d[2].name })
                      : e5.intl.string(e5.t.MvfowF)),
          (0, s.jsx)(tL, {
              guild: n,
              onDismissed: a,
              message: t,
              type: j.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (a(), e3.A.open(n.id, j.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: e5.intl.string(e5.t.Rr3MAe),
          }));
}
function nb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nC.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 123, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/5eaa226d911a51611c1b456eb404180953cb0c515bc70e9b09fa5f10d8383a94.svg",
        className: (0, nC.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
let nR = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), m.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: n,
        onClick: () => e3.A.open(t.id, j.BEX.COMMUNITY),
        message: e5.intl.string(e5.t["2klD0Z"]),
        trackingSource: j.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: j.n5X.PUBLIC_UPSELL,
        image: (0, s.jsx)(nb, { alt: "", ariaHidden: !0, width: "100%" }),
        cta: e5.intl.string(e5.t.hvVgAZ),
    });
};
var nL = n(536194),
    nx = n(780964),
    nD = n(766075);
class nO extends l.PureComponent {
    render() {
        return (0, s.jsx)(tL, {
            guild: this.props.guild,
            onClick: () => (0, nD.openUserSettings)(nx.X.ACCOUNT_PANEL),
            message: e5.intl.format(e5.t["oCd+at"], {}),
            cta: e5.intl.string(e5.t["8dCrV9"]),
            trackingSource: j.kZU.GUILD_MFA_WARNING,
            type: j.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
function nG(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: d, style: u } = e,
        c = l.useMemo(
            () => (0, nC.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [r, o, u],
        );
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/dc82534138c63ce764672d1e10188ceb29febbcf73dad31c313f8a4b41dcff96.svg",
        className: (0, nC.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nU = n(138399),
    ny = n(476952);
class nP extends l.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, E.mM)(async () => {
            let { default: t } = await Promise.all([
                n.e(683621),
                n.e(711162),
                n.e(159957),
                n.e(728136),
                n.e(680029),
                n.e(635864),
                n.e(447864),
                n.e(794704),
            ]).then(n.bind(n, 137811));
            return (n) => (0, s.jsx)(t, { ...n, guild: e, source: j.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = t8.Ay.getChannelId(),
            t = e5.intl.formatToPlainString(e5.t.DEn7nu, { invitePeople: e5.intl.string(e5.t.Sd8Ixw) });
        (this.props.markAsDismissed(el.i.UNKNOWN), null != e && nU.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${e5.intl.string(e5.t.VWqWZQ)}
${e5.intl.string(e5.t["0Lgb/K"])}`;
        return (0, s.jsx)(tL, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: e5.intl.string(e5.t.Sd8Ixw),
            trackingSource: j.kZU.INVITE_NOTICE,
            type: j.n5X.INVITE,
            image: (0, s.jsx)("div", {
                className: ny.b,
                children: (0, s.jsx)(nG, { alt: "", ariaHidden: !0, width: 126, height: 84 }),
            }),
            imageMarginX: 46,
        });
    }
}
var nH = n(975571);
let nv = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), m.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tL, {
        guild: t,
        onDismissed: n,
        message: e5.intl.format(e5.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: nH.A.getArticleURL(j.MVz.MAX_MEMBERS),
        }),
        type: j.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nj = n(475358),
    nB = n(675704),
    nw = n(793322);
let nk = function (e) {
    let t = (0, s.jsx)(nj.e, { shortcut: nB.R.binds["0"], keyClassName: tb.Eb });
    return (0, s.jsx)(tL, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(el.i.UNKNOWN),
        onClick: () => (0, nw.WU)("CHANNEL_NOTICE"),
        message: e5.intl.string(e5.t.Qhk8cs),
        cta: t,
        trackingSource: j.kZU.QUICK_SWITCHER_NOTICE,
        type: j.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nX = n(174768);
class nV extends r.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(H.A), this.syncWith([H.A], j.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(j.GuildFeatures.BANNER) && Date.now() - t >= j.D2K;
    }
}
let nK = new nV(m.h);
class nF extends r.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(f.A), this.syncWith([f.A], j.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= j.D2K && f.A.can(j.xBc.MANAGE_GUILD, e);
    }
}
let nW = new nF(m.h);
var nY = n(731667);
function nz() {
    return !0;
}
class nQ extends r.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(f.A), this.syncWith([f.A], nz));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= j.D2K && f.A.can(j.xBc.ADMINISTRATOR, e);
    }
}
let nZ = new nQ(m.h),
    nq = "lastHiddenChannelNotice",
    n$ = [
        {
            type: j.n5X.GUILD_BOOSTING,
            store: nW,
            dismissibleContentType: o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: j.n5X.GUILD_BANNER, store: nK, dismissibleContentType: o.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: j.n5X.INVITE, store: nZ, dismissibleContentType: o.M.CHANNEL_NOTICE_INVITE },
        { type: j.n5X.HUB_LINK, store: nY.A, dismissibleContentType: o.M.CHANNEL_NOTICE_HUBLINK },
        { type: j.n5X.QUICKSWITCHER, store: nX.A, dismissibleContentType: o.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: j.n5X.GAME_CLAIM, dismissibleContentType: o.M.GAME_CLAIM_COACHMARK },
    ],
    nJ = n$.map((e) => e.store).filter(t2.Vq),
    n0 = new Set([o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, o.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n1(e) {
    e.stopPropagation();
}
let n6 = [];
function n3(e) {
    var t, n;
    let i,
        a,
        d,
        u,
        c,
        { guild: A } = e,
        [h, E] = l.useState(y.w.get(nq) ?? 0),
        m =
            ((n = t = A.id),
            (i = tg.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (a = (0, r.bG)([f.A], () => f.A.canWithPartialContext(j.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (u = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tm(e, t).length > 0;
            })(t, (d = i && a))),
            (c = d && u),
            l.useMemo(() => {
                let e = [];
                return (c && e.push(o.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n6);
            }, [c])),
        [g, I] = (0, q.ww)(m, A.id, el.m.CHANNEL_NOTICES, !0),
        C = null != g,
        _ = (0, r.yK)(
            nJ,
            () =>
                C
                    ? []
                    : n$
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, h) && !n0.has(t);
                          })
                          .map((e) => e.dismissibleContentType)
                          .filter(ta.Jq),
            [A, h, C],
        ),
        [N, S] = (0, q.kn)(_, { groupName: el.m.CHANNEL_NOTICES }),
        p = g ?? N,
        T = null != g ? I : S,
        M = l.useCallback(
            function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el.i.UNKNOWN;
                ((e = Date.now()), y.w.set(nq, e), E(e), T(t));
            },
            [T],
        ),
        b = (() => {
            switch (p) {
                case o.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, s.jsx)(nS, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_INVITE:
                    return (0, s.jsx)(nP, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, s.jsx)(tV, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, s.jsx)(nk, { guild: A, markAsDismissed: M });
                case o.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, s.jsx)(tw, { guild: A, markAsDismissed: M });
                case o.M.GAME_CLAIM_COACHMARK:
                    return (0, s.jsx)(tH, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == b ? null : (0, s.jsx)("div", { onContextMenu: n1, children: b });
}
let n5 = function (e) {
    let { guild: t } = e;
    switch (z(t)) {
        case Y.ENABLE_PUBLIC_GUILD:
            return (0, s.jsx)(nR, { guild: t });
        case Y.MAX_MEMBER_COUNT:
            return (0, s.jsx)(nv, { guild: t });
        case Y.GUILD_LIVE_CHANNEL:
            return (0, s.jsx)(nI, { guild: t });
        case Y.GUILD_MFA_WARNING:
            return (0, s.jsx)(nO, { guild: t });
        case Y.COMMANDS_MIGRATION:
            return (0, s.jsx)(np, { guild: t });
        case Y.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, s.jsx)(nf, { guild: t });
    }
    return nL.P.isDisallowPopupsSet() ? null : (0, s.jsx)(n3, { guild: e.guild });
};
var n8 = n(883476);
function n7(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, s.jsx)("div", { className: n8.k, ref: i, children: (0, s.jsx)(n5, { guild: t }) })
    );
}
var n2 = n(66933),
    n9 = n(846930),
    n4 = n(168095);
let ie = "server-settings",
    it = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ii extends l.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = l.createRef();
    guildHeaderDropdownButtonRef = l.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new d.Ep();
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
        (this.setAnimatedValue(0),
            m.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = ey.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = ey.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        (this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            m.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices));
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
        (e.stopPropagation(), (0, en.Z)(!t), this.closeAllHeaderNotices());
    };
    handleContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, $.ai)(t.id))
                return void (0, g.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e(387141), n.e(879948)]).then(n.bind(n, 329671));
                    return (t) => (0, s.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
            (0, g.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(309004), n.e(419690), n.e(845322), n.e(110758)]).then(
                    n.bind(n, 455557),
                );
                return (n) => (0, s.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, $.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, g.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e(203112),
                    n.e(876364),
                    n.e(668756),
                    n.e(697395),
                    n.e(996907),
                    n.e(816027),
                    n.e(562772),
                    n.e(8159),
                    n.e(24312),
                    n.e(361922),
                    n.e(179028),
                    n.e(307564),
                    n.e(597622),
                    n.e(965886),
                    n.e(231541),
                    n.e(295570),
                    n.e(301850),
                    n.e(936875),
                    n.e(862179),
                    n.e(722784),
                    n.e(326794),
                    n.e(906470),
                    n.e(860350),
                    n.e(774550),
                    n.e(923981),
                    n.e(317446),
                    n.e(71866),
                    n.e(891473),
                    n.e(412117),
                    n.e(263406),
                    n.e(1955),
                    n.e(341161),
                    n.e(410526),
                    n.e(202985),
                    n.e(603619),
                    n.e(175927),
                    n.e(470126),
                    n.e(149697),
                    n.e(128804),
                    n.e(60882),
                    n.e(71151),
                    n.e(227853),
                    n.e(286615),
                    n.e(735042),
                    n.e(311541),
                    n.e(795854),
                    n.e(870088),
                    n.e(300641),
                    n.e(571163),
                    n.e(586662),
                    n.e(831377),
                    n.e(709976),
                    n.e(860596),
                    n.e(279774),
                    n.e(763945),
                    n.e(261204),
                    n.e(686731),
                    n.e(807432),
                    n.e(873532),
                    n.e(590088),
                    n.e(807003),
                    n.e(46083),
                    n.e(152133),
                    n.e(747802),
                    n.e(626353),
                    n.e(71169),
                    n.e(736663),
                    n.e(846900),
                    n.e(419121),
                    n.e(489020),
                    n.e(919789),
                    n.e(669130),
                    n.e(802890),
                    n.e(82937),
                    n.e(987221),
                    n.e(157064),
                    n.e(156957),
                    n.e(918786),
                    n.e(701335),
                    n.e(257935),
                    n.e(724086),
                    n.e(358937),
                    n.e(448738),
                    n.e(206189),
                    n.e(804439),
                    n.e(795345),
                    n.e(894292),
                    n.e(153302),
                    n.e(88683),
                    n.e(239204),
                    n.e(750370),
                    n.e(972281),
                    n.e(307107),
                    n.e(896622),
                    n.e(466592),
                    n.e(73946),
                    n.e(228271),
                    n.e(387970),
                    n.e(847445),
                    n.e(547510),
                    n.e(966366),
                    n.e(983513),
                    n.e(76928),
                    n.e(699250),
                    n.e(528311),
                    n.e(411938),
                    n.e(653383),
                    n.e(217991),
                    n.e(9796),
                    n.e(952068),
                    n.e(768289),
                    n.e(772565),
                    n.e(195707),
                    n.e(533781),
                    n.e(328276),
                    n.e(592e3),
                    n.e(524434),
                    n.e(653294),
                    n.e(672402),
                    n.e(226229),
                    n.e(118994),
                    n.e(516497),
                    n.e(24774),
                    n.e(670870),
                    n.e(684231),
                    n.e(570690),
                    n.e(886631),
                    n.e(435860),
                    n.e(426782),
                    n.e(406322),
                    n.e(942571),
                    n.e(464759),
                    n.e(763343),
                    n.e(194704),
                    n.e(274461),
                    n.e(830560),
                    n.e(384054),
                    n.e(284269),
                    n.e(572430),
                    n.e(816348),
                    n.e(165291),
                    n.e(109383),
                    n.e(818291),
                    n.e(243794),
                    n.e(519435),
                    n.e(10985),
                    n.e(171206),
                    n.e(546547),
                    n.e(102075),
                    n.e(828178),
                    n.e(45036),
                    n.e(974119),
                    n.e(434683),
                    n.e(920955),
                    n.e(505928),
                    n.e(752657),
                    n.e(747973),
                    n.e(314001),
                    n.e(885251),
                    n.e(857871),
                    n.e(529366),
                    n.e(990185),
                    n.e(752924),
                    n.e(849162),
                    n.e(660201),
                    n.e(770925),
                    n.e(179301),
                    n.e(918347),
                    n.e(689521),
                    n.e(10886),
                    n.e(84993),
                    n.e(592268),
                    n.e(374962),
                    n.e(553627),
                    n.e(887141),
                    n.e(736919),
                    n.e(440636),
                    n.e(568960),
                    n.e(459257),
                    n.e(924697),
                    n.e(549009),
                    n.e(339715),
                    n.e(985301),
                    n.e(981059),
                    n.e(631323),
                    n.e(464452),
                    n.e(714144),
                    n.e(458855),
                    n.e(305161),
                    n.e(845486),
                    n.e(58353),
                    n.e(17256),
                    n.e(377016),
                    n.e(385504),
                    n.e(269714),
                    n.e(331696),
                    n.e(483754),
                    n.e(865429),
                    n.e(806391),
                    n.e(880472),
                    n.e(707551),
                    n.e(726399),
                    n.e(424216),
                    n.e(842429),
                    n.e(603992),
                    n.e(173896),
                    n.e(57358),
                    n.e(580305),
                    n.e(722765),
                    n.e(156912),
                    n.e(249169),
                    n.e(754596),
                    n.e(191601),
                    n.e(232e3),
                    n.e(21486),
                    n.e(304419),
                    n.e(622936),
                    n.e(45268),
                    n.e(291532),
                    n.e(3069),
                    n.e(733199),
                    n.e(603977),
                    n.e(655327),
                    n.e(335532),
                    n.e(138545),
                    n.e(536490),
                    n.e(771137),
                    n.e(403655),
                    n.e(212037),
                    n.e(577154),
                    n.e(877730),
                    n.e(611899),
                    n.e(527552),
                    n.e(903758),
                    n.e(768071),
                    n.e(96922),
                    n.e(769266),
                    n.e(487873),
                    n.e(765626),
                    n.e(683302),
                    n.e(660608),
                    n.e(744554),
                    n.e(118203),
                    n.e(331212),
                    n.e(638259),
                    n.e(635958),
                    n.e(207998),
                    n.e(683621),
                    n.e(711162),
                    n.e(275179),
                    n.e(242517),
                    n.e(19385),
                    n.e(692811),
                    n.e(324469),
                    n.e(70379),
                    n.e(417333),
                    n.e(905581),
                    n.e(62052),
                    n.e(122218),
                    n.e(834552),
                    n.e(993103),
                    n.e(708757),
                    n.e(863232),
                    n.e(295507),
                    n.e(332447),
                    n.e(959880),
                    n.e(174016),
                    n.e(22921),
                    n.e(910471),
                    n.e(11301),
                    n.e(430858),
                    n.e(861060),
                    n.e(364827),
                    n.e(77333),
                    n.e(626565),
                    n.e(257980),
                    n.e(960235),
                    n.e(585968),
                    n.e(486137),
                    n.e(80421),
                    n.e(206027),
                    n.e(393471),
                    n.e(177641),
                    n.e(198329),
                    n.e(678157),
                    n.e(942374),
                    n.e(223219),
                    n.e(130795),
                    n.e(10866),
                    n.e(313537),
                    n.e(40291),
                    n.e(733115),
                    n.e(397270),
                    n.e(406222),
                    n.e(393336),
                    n.e(761597),
                    n.e(373122),
                    n.e(649408),
                    n.e(221856),
                    n.e(686367),
                    n.e(186212),
                    n.e(755936),
                    n.e(316344),
                    n.e(801012),
                    n.e(274501),
                    n.e(756625),
                    n.e(692990),
                    n.e(305834),
                    n.e(745959),
                    n.e(858529),
                    n.e(481987),
                    n.e(595653),
                    n.e(958038),
                    n.e(532039),
                    n.e(719466),
                    n.e(14234),
                    n.e(576909),
                    n.e(27355),
                    n.e(126437),
                    n.e(481647),
                    n.e(713708),
                    n.e(776273),
                    n.e(749248),
                    n.e(704434),
                    n.e(900361),
                    n.e(913823),
                    n.e(21921),
                    n.e(885533),
                    n.e(282833),
                    n.e(391763),
                    n.e(393766),
                    n.e(811310),
                    n.e(676418),
                    n.e(844780),
                    n.e(401518),
                    n.e(571210),
                    n.e(166495),
                    n.e(362274),
                    n.e(49782),
                    n.e(570849),
                    n.e(45072),
                    n.e(942724),
                    n.e(139970),
                    n.e(173764),
                    n.e(188689),
                    n.e(940258),
                    n.e(830221),
                    n.e(521930),
                    n.e(357688),
                    n.e(308555),
                    n.e(857467),
                    n.e(508371),
                    n.e(142867),
                    n.e(885434),
                    n.e(88342),
                    n.e(96539),
                    n.e(554241),
                    n.e(724303),
                    n.e(179049),
                    n.e(132737),
                    n.e(495786),
                    n.e(53102),
                    n.e(717479),
                    n.e(344502),
                    n.e(146070),
                    n.e(836863),
                    n.e(538733),
                    n.e(311802),
                    n.e(41250),
                    n.e(854622),
                    n.e(263736),
                    n.e(590365),
                    n.e(37977),
                    n.e(136149),
                    n.e(470068),
                    n.e(817989),
                    n.e(88599),
                    n.e(720590),
                    n.e(147626),
                    n.e(613867),
                    n.e(870663),
                    n.e(689393),
                    n.e(727779),
                    n.e(412743),
                    n.e(717602),
                    n.e(585503),
                    n.e(437065),
                    n.e(891585),
                    n.e(203589),
                    n.e(709640),
                    n.e(382465),
                    n.e(294857),
                    n.e(15481),
                    n.e(179745),
                    n.e(952548),
                    n.e(893917),
                    n.e(668802),
                    n.e(631358),
                    n.e(335395),
                    n.e(636373),
                    n.e(882777),
                    n.e(877691),
                    n.e(945413),
                    n.e(402026),
                    n.e(163235),
                    n.e(230664),
                    n.e(564850),
                    n.e(941040),
                    n.e(124791),
                    n.e(648344),
                    n.e(170104),
                    n.e(491793),
                    n.e(889638),
                    n.e(256769),
                    n.e(553984),
                    n.e(902564),
                    n.e(884601),
                    n.e(782969),
                    n.e(30441),
                    n.e(704727),
                    n.e(374916),
                    n.e(214285),
                    n.e(248330),
                    n.e(373004),
                    n.e(803332),
                    n.e(776766),
                    n.e(938149),
                    n.e(408362),
                    n.e(504370),
                    n.e(225575),
                    n.e(676156),
                    n.e(852617),
                    n.e(125964),
                    n.e(415266),
                    n.e(737021),
                    n.e(775951),
                    n.e(428967),
                    n.e(731751),
                    n.e(254506),
                    n.e(62613),
                    n.e(874342),
                    n.e(258033),
                    n.e(533015),
                    n.e(255580),
                    n.e(976516),
                    n.e(400501),
                    n.e(985794),
                    n.e(695358),
                    n.e(767837),
                    n.e(473384),
                    n.e(129080),
                    n.e(229657),
                    n.e(996868),
                    n.e(238232),
                    n.e(368062),
                    n.e(859991),
                    n.e(667092),
                    n.e(608032),
                    n.e(474610),
                    n.e(477970),
                    n.e(299854),
                    n.e(709371),
                    n.e(330724),
                    n.e(608557),
                    n.e(599719),
                    n.e(770182),
                    n.e(506620),
                    n.e(823300),
                    n.e(318939),
                    n.e(178048),
                    n.e(556868),
                    n.e(250129),
                    n.e(726511),
                    n.e(531741),
                    n.e(939171),
                    n.e(465157),
                    n.e(490010),
                    n.e(140667),
                    n.e(144472),
                    n.e(660249),
                    n.e(440142),
                    n.e(652212),
                    n.e(713567),
                    n.e(612287),
                    n.e(720064),
                    n.e(733416),
                    n.e(305557),
                    n.e(321640),
                    n.e(938579),
                    n.e(36227),
                    n.e(975933),
                    n.e(444567),
                    n.e(93907),
                    n.e(159957),
                    n.e(229666),
                    n.e(92295),
                    n.e(589916),
                    n.e(695170),
                    n.e(495861),
                    n.e(460773),
                    n.e(309004),
                    n.e(781202),
                    n.e(335559),
                    n.e(848625),
                    n.e(458273),
                    n.e(208018),
                    n.e(968763),
                    n.e(163069),
                    n.e(883952),
                    n.e(26001),
                    n.e(414591),
                    n.e(652111),
                    n.e(434786),
                    n.e(506045),
                    n.e(215920),
                    n.e(147540),
                    n.e(618706),
                    n.e(430997),
                    n.e(708536),
                    n.e(411353),
                    n.e(25572),
                    n.e(838090),
                    n.e(439089),
                    n.e(982730),
                    n.e(800872),
                    n.e(728136),
                    n.e(452531),
                    n.e(338601),
                    n.e(365011),
                    n.e(201243),
                    n.e(950535),
                    n.e(573330),
                    n.e(203930),
                    n.e(903663),
                    n.e(65393),
                    n.e(343116),
                    n.e(368530),
                    n.e(583518),
                    n.e(978046),
                    n.e(807476),
                    n.e(680029),
                    n.e(127659),
                    n.e(428235),
                    n.e(610943),
                    n.e(637038),
                    n.e(635864),
                    n.e(396854),
                    n.e(447864),
                    n.e(710727),
                    n.e(966016),
                    n.e(507775),
                    n.e(66580),
                    n.e(794704),
                    n.e(582486),
                    n.e(466147),
                    n.e(462984),
                    n.e(369501),
                    n.e(303710),
                    n.e(256373),
                    n.e(50342),
                    n.e(409391),
                    n.e(645830),
                    n.e(134504),
                    n.e(810262),
                    n.e(479971),
                    n.e(995602),
                    n.e(346313),
                    n.e(553203),
                    n.e(218489),
                    n.e(838336),
                    n.e(115368),
                    n.e(636002),
                    n.e(343233),
                    n.e(248985),
                    n.e(569468),
                    n.e(836681),
                    n.e(756684),
                    n.e(419690),
                    n.e(495748),
                    n.e(138728),
                    n.e(708364),
                    n.e(530995),
                    n.e(452823),
                    n.e(556967),
                    n.e(647011),
                    n.e(205896),
                    n.e(269178),
                    n.e(553584),
                    n.e(466913),
                    n.e(983947),
                    n.e(574534),
                    n.e(71719),
                    n.e(213848),
                    n.e(588307),
                    n.e(462500),
                    n.e(676376),
                    n.e(639855),
                    n.e(842935),
                    n.e(73091),
                    n.e(37786),
                    n.e(214530),
                    n.e(886692),
                    n.e(850298),
                    n.e(675933),
                    n.e(916373),
                    n.e(528038),
                    n.e(81398),
                    n.e(608464),
                    n.e(93685),
                    n.e(118504),
                    n.e(8458),
                    n.e(11810),
                    n.e(404332),
                    n.e(890152),
                    n.e(174337),
                    n.e(347871),
                    n.e(287973),
                    n.e(966308),
                    n.e(314863),
                    n.e(623386),
                    n.e(375428),
                    n.e(560165),
                    n.e(940661),
                    n.e(712390),
                    n.e(884063),
                    n.e(876401),
                    n.e(113446),
                    n.e(306410),
                    n.e(606053),
                    n.e(632607),
                    n.e(229030),
                    n.e(161309),
                    n.e(694529),
                    n.e(303807),
                    n.e(143330),
                    n.e(995210),
                    n.e(96961),
                    n.e(114751),
                    n.e(483504),
                    n.e(317699),
                    n.e(204309),
                    n.e(952831),
                    n.e(845322),
                    n.e(114748),
                    n.e(426386),
                    n.e(916434),
                    n.e(29360),
                    n.e(588860),
                ]).then(n.bind(n, 587369));
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
        let e = (0, Z.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(j.GuildFeatures.HUB);
        !e && t && (0, Z.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: el.i.AUTO });
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
            n.e(993103),
            n.e(142867),
            n.e(96539),
            n.e(474610),
            n.e(309004),
            n.e(365011),
            n.e(343116),
            n.e(256373),
            n.e(419690),
            n.e(966308),
            n.e(113446),
            n.e(632607),
            n.e(317699),
            n.e(204309),
            n.e(387141),
            n.e(972257),
            n.e(193829),
            n.e(499817),
        ]).then(n.bind(n, 808144));
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
            : (0, s.jsx)(tl, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? c.ChevronSmallUpIcon : A.ChevronSmallDownIcon;
        return (0, s.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let {
                guildId: t,
                showGuildTemplateDirtyTooltip: n,
                showGuildHeaderTutorial: i,
                showPriorityHeaderNotice: l,
                anyLayerOpen: a,
            } = this.props,
            { shouldShowSubscribeTooltip: r } = this.state;
        return i
            ? (0, s.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, s.jsx)(eP.A, {
                      tutorialId: ie,
                      position: "bottom",
                      inlineSpecs: it,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : l
              ? (0, s.jsxs)(s.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !a &&
                            (0, s.jsx)(eR.Hd, { guildId: t, targetElementRef: this.guildHeaderDropdownButtonRef }),
                    ],
                })
              : n
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          this.renderGuildHeaderDropdownButton(e),
                          !e &&
                              !a &&
                              (0, s.jsx)(u.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: e5.intl.string(e5.t.Rk2RJk),
                                  body: e5.intl.string(e5.t.sFSrFH),
                                  onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                  position: "bottom",
                                  caretConfig: { align: "center" },
                              }),
                      ],
                  })
                : a || e
                  ? this.renderGuildHeaderDropdownButton(e)
                  : r
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              this.renderGuildHeaderDropdownButton(e),
                              (0, s.jsx)(u.A, {
                                  targetElementRef: this.guildHeaderDropdownButtonRef,
                                  title: e5.intl.string(e5.t.Q3qa4x),
                                  body: e5.intl.string(e5.t.UyHD4O),
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
                showPriorityHeaderNotice: a,
                isGuildHeaderDismissibleTooltipShown: r,
                headerAnalyticsLocations: o,
            } = this.props,
            {
                controller: d,
                renderBanner: u,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: E,
            } = this.state,
            m = i || a || l || r;
        return null == t
            ? null
            : (0, s.jsx)(C.f5, {
                  value: o,
                  children: (0, s.jsx)(h.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: h.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, en.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: l, ...a } = i;
                          return (0, s.jsx)(eW.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: d,
                              renderBanner: u,
                              hasSubheader: e,
                              bannerVisible: c,
                              communityInfoVisible: E,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: m,
                              animationOverlayHeight: A,
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
            i = null != t && (0, eK.A)(t);
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
            return (0, s.jsx)(n9.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(j.GuildFeatures.HUB))
                return (0, s.jsx)("div", {
                    className: n4.r0,
                    children: (0, s.jsx)(ef.A, { guild: t, channel: n ?? eB.A.getDefaultChannel(t.id) }),
                });
            let e = (0, $.ai)(t.id) ? J.A : eF.B;
            return (0, s.jsx)(e, {
                guild: t,
                ...i,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eK.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, $.YC)(e);
        return (0, s.jsxs)("nav", {
            className: n4.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": e5.intl.formatToPlainString(e5.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, s.jsx)(n7, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function is(e) {
    let t,
        i,
        a,
        d,
        u,
        c,
        A,
        h,
        m,
        g,
        _,
        N,
        S,
        p,
        T,
        { guildId: R, hideSelectedChannel: L, selectedChannelId: x } = e,
        D = (0, ee.$)("favorite-guild-header-context"),
        O = (0, r.bG)([H.A], () => H.A.getGuild(R)),
        G = (0, r.bG)([b.Ay], () => b.Ay.getVoiceStates(R), [R]),
        U = (0, r.bG)([ev.A], () => ev.A.getGuildDimensions(R).scrollTo),
        y = (0, r.bG)([eX.A], () => eX.A.getChannelId()),
        P = (0, r.bG)([f.A], () => f.A.can(j.xBc.MANAGE_GUILD, O)),
        B = (0, r.bG)([ej.A], () => ej.A.isUnavailable(R)),
        w = (0, r.bG)([em.default], () => em.default.getCurrentUser()),
        { analyticsLocations: k } = (0, C.Ay)(I.A.GUILD_HEADER),
        X = (0, Q.Ay)((e) => n$.some((t) => e.currentlyShown.has(t.dismissibleContentType))),
        V = z(O),
        K = (0, E.re)(E.DX),
        F = (0, r.bG)([ew.A], () => ew.A.hasLayers()),
        W = (0, eb.xr)((e) => e.fullScreenLayers.length > 0),
        Y = (0, r.bG)([eH.A], () => eH.A.shouldShow(ie)),
        Z =
            ((t = (0, r.bG)([H.A], () => H.A.getGuild(R))),
            (i = (0, r.bG)([em.default], () => em.default.getCurrentUser())),
            (a = null != t && (0, eE.bM)(t, i)),
            (d = (0, eh.oS)()),
            a &&
                (t?.features.has(j.GuildFeatures.COMMUNITY) ?? !1) &&
                d &&
                !(
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(j.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        J = O?.features.has(j.GuildFeatures.HUB) === !0,
        ea = P && O?.features.has(j.GuildFeatures.DISCOVERABLE) === !0,
        eg = (0, r.bG)(
            [ep, ew.A],
            () => null != O && null != w && P && !ew.A.hasLayers() && ep.shouldShowGuildTemplateDirtyTooltip(R),
        ),
        eI = (0, r.bG)([M.A], () => M.A.getChannel(x)),
        { isPopoutOpen: eC } = (0, en.S)(),
        e_ = O?.features.has(j.GuildFeatures.COMMUNITY) ?? !1,
        eN = eV.Ay.isNewUser(w);
    ((u = (function (e) {
        let t = (0, r.bG)([f.A], () => f.A.can(j.xBc.MANAGE_GUILD, e)),
            { enabled: n } = er.useExperiment(
                { guildId: e?.id ?? "", location: "dd4beb_3" },
                { autoTrackExposure: !0 },
            );
        if (null == e) return !1;
        let i = e.features.has(j.GuildFeatures.COMMUNITY);
        return t && i && n;
    })(O)),
        (c = v.dR.some((e) => !(0, $.ai)(O?.id) && ed.Ib(e, O))),
        (A = O?.defaultMessageNotifications === j.orn.ALL_MESSAGES),
        (h = (0, eu.G$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, O?.id ?? "")),
        (m = u && (c || A) && !h),
        (g = l.useCallback(() => {
            (0, eu._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, O?.id ?? "", !0, el.i.DISMISS);
        }, [O])),
        (_ = l.useRef(!1)),
        l.useEffect(() => {
            m &&
                !_.current &&
                ((0, E.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(942068),
                            n.e(553203),
                            n.e(452823),
                            n.e(442446),
                        ]).then(n.bind(n, 653981));
                        return (t) =>
                            (0, s.jsx)(e, {
                                guild: O,
                                canEveryoneModerate: c,
                                isDefaultNotificationsAllMessages: A,
                                ...t,
                            });
                    },
                    { onCloseCallback: g },
                ),
                eo.default.track(j.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: o.V[o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: O?.id ?? "",
                }),
                (_.current = !0));
        }, [c, O, g, A, m]));
    let eS =
        ((N = (0, r.bG)([H.A], () => H.A.getGuild(R))),
        (S = (0, ec._Y)(R)),
        (p =
            N?.features.has(j.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
            N?.features.has(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
        (T = (0, eA.X9)(N)),
        p && T && S);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eT.Kb)(e, "GuildThemeNuxTrigger"),
            [a, r] = (0, q.kn)(null != s ? [o.M.GUILD_THEME_NUX] : [], { groupName: el.m.GUILD_THEME_NUX }),
            d = a === o.M.GUILD_THEME_NUX,
            u = l.useRef(!1);
        (l.useEffect(() => {
            u.current = !1;
        }, [e]),
            l.useEffect(() => {
                if (!d || n || u.current) return;
                let t = setTimeout(() => {
                    u.current = !0;
                    let t = !1;
                    Promise.resolve(
                        i({
                            guildId: e,
                            markAsDismissed: (e) => {
                                t || ((t = !0), r(e, !0));
                            },
                        }),
                    ).catch(() => {
                        u.current = !1;
                    });
                }, 2e3);
                return () => clearTimeout(t);
            }, [d, n, e, r, i]));
    })(R, {
        isNuxOpen: (0, E.Ry)(eM.u),
        openNux: l.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, E.mM)(
                async () => {
                    let e = await Promise.resolve().then(n.bind(n, 166998));
                    return (n) =>
                        (0, s.jsx)(e.default, {
                            guildId: t,
                            markAsDismissed: i,
                            transitionState: n.transitionState,
                            onClose: n.onClose,
                        });
                },
                { modalKey: eM.u, onCloseCallback: () => i(el.i.USER_DISMISS) },
            );
        }, []),
    });
    let ef = (0, r.bG)([eX.A], () => eX.A.getChannelId()),
        ey = (0, r.bG)([ek.A], () => ek.A.desyncedVoiceStatesCount),
        eP = (0, eG.A)(R),
        eB = (0, $.ai)(R) ? null : eP;
    n2.A.useConfig({ guildId: R, location: "guild_sidebar" });
    let eK = (0, et.C$)(R, "GuildSidebar"),
        eF = (0, r.bG)([H.A], () => H.A.getGuild(R)?.features.has(j.GuildFeatures.GAME_SERVERS) ?? !1, [R]),
        eW = eK && !eF && !1 === eB,
        eY = (0, eU.A)(),
        ez = (0, eD.A)(R),
        eQ = !1 === eB && eY && null != ez,
        eZ = (0, eO.A)(R),
        eq = !1 === eB && eY && null != eZ,
        e$ = [];
    (J && e$.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        Z && e$.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        ea && e$.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eB && e$.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eW && e$.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eS && e$.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let eJ = (0, Q.uW)([
            ...e$,
            o.M.GUILD_HEADER_COACHMARK,
            o.M.GAME_SERVER_NEW_GAMES_COACHMARK,
            o.M.BOOST_TO_UNLOCK_COACHMARK,
            o.M.EXPIRING_POWERUP_COACHMARK,
        ]),
        e0 = (0, eR.Dq)(O) && !eJ,
        e1 = (function (e) {
            let t = (0, es.u)(ei.oW.GUILD_HEADER_COACHMARK),
                n = t?.surface,
                i = null != e && !(0, $.ai)(e),
                [s, l] = (0, q.Cc)(
                    null != n && i ? o.M.GUILD_HEADER_COACHMARK : null,
                    t?.promotionId ?? "",
                    el.m.GUILD_HEADER_TOOLTIPS,
                );
            return {
                shouldShow: null != n && i && s === o.M.GUILD_HEADER_COACHMARK,
                marketingComponent: t,
                markAsDismissed: l,
            };
        })(e0 ? null : R),
        [e6, e3] = (0, q.kn)(e0 ? [] : e$, { groupName: el.m.GUILD_HEADER_TOOLTIPS }),
        [e5, e8] = (0, ex.vB)(eK && !1 === eB && !(0, $.ai)(R) && !e0, el.m.GUILD_HEADER_TOOLTIPS),
        [e7, e2] = (0, q.D8)(
            eQ && !e0 ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            R,
            { cooldownDurationMs: eL.bW, numTimesToRecur: 5 },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        [e9, e4] = (0, q.D8)(
            eq && !e0 ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            R,
            { cooldownDurationMs: eL.mD },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        te = l.useMemo(
            () =>
                e1.shouldShow && null != e1.marketingComponent
                    ? {
                          contentType: o.M.GUILD_HEADER_COACHMARK,
                          data: { marketingComponent: e1.marketingComponent },
                          markAsDismissed: e1.markAsDismissed,
                      }
                    : null != e6
                      ? { contentType: e6, data: null, markAsDismissed: e3 }
                      : e5 === o.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: e5, data: null, markAsDismissed: e8 }
                        : e7 === o.M.BOOST_TO_UNLOCK_COACHMARK && null != ez
                          ? { contentType: e7, data: { featuredPowerup: ez }, markAsDismissed: e2 }
                          : e9 === o.M.EXPIRING_POWERUP_COACHMARK && null != eZ
                            ? { contentType: e9, data: { featuredExpiringPowerup: eZ }, markAsDismissed: e4 }
                            : null,
            [e1.shouldShow, e1.marketingComponent, e1.markAsDismissed, e6, e5, e7, e9, ez, eZ, e3, e8, e2, e4],
        );
    return (0, s.jsx)(ii, {
        guildId: R,
        hideSelectedChannel: L,
        guild: O,
        scrollToChannel: U,
        selectedChannelId: L ? null : x,
        selectedChannel: eI,
        selectedVoiceChannelId: y,
        voiceStates: G,
        rtcConnectedChannelId: ef,
        rtcDesyncedVoiceStatesCount: ey,
        isUnavailable: B,
        user: w,
        hasChannelNotice: null != V || X,
        anyLayerOpen: K || F || W,
        showGuildHeaderTutorial: Y,
        showPriorityHeaderNotice: e0,
        showGuildTemplateDirtyTooltip: eg,
        showNewUnreadsBar: e_,
        isHeaderPopoutOpen: eC,
        isGuildHeaderDismissibleTooltipShown: eJ,
        headerAnalyticsLocations: k,
        shouldRenderBurstCoachmark: !eN,
        guildHeaderContentDescriptor: te,
        onFavoriteGuildContextMenu: D,
    });
}
