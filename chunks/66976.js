(n.r(t), n.d(t, { default: () => ip }), n(321073));
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(202091),
    o = n(462180),
    d = n(17928),
    u = n(554146),
    c = n(451988),
    A = n(43105),
    E = n(900797),
    h = n(847374),
    m = n(922016),
    g = n(192308),
    I = n(228366),
    C = n(442433),
    _ = n(793574),
    N = n(688810),
    S = n(285059),
    p = n(63995);
n(113783);
var T = n(518769),
    M = n(446600),
    f = n(624265);
n(616356);
var O = n(734057),
    R = n(576705),
    L = n(607567),
    D = n(988794);
let x = { hiddenEventsAndStages: [] };
class G extends d.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (x = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && x.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && x.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return x;
    }
}
let U = new G(I.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? x.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && x.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        x.hiddenEventsAndStages.includes(n) &&
            (t.status === D.XG.CANCELED || t.status === D.XG.COMPLETED) &&
            (x.hiddenEventsAndStages = x.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        x.hiddenEventsAndStages.includes(n) &&
            (x.hiddenEventsAndStages = x.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        x.hiddenEventsAndStages.includes(n) &&
            (x.hiddenEventsAndStages = x.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var b = n(508654);
n(818348);
var y = n(600975),
    H = n(652215);
let P = (0, y.C)({
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
                e.features.has(H.GuildFeatures.HUB) &&
                P.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        P.useExperiment(
            { guildId: e?.id ?? H.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(H.GuildFeatures.HUB) },
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
        (this.waitFor(R.A, X.A, k.A), this.syncWith([R.A, X.A, k.A], H.tEg), (F = new Set(w.w.get(K)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return;
        let t = k.A.getMemberCount(e.id);
        return (
            !F.has(e.id) &&
            null != t &&
            t >= V.dH &&
            R.A.can(H.xBc.ADMINISTRATOR, e) &&
            !e.features.has(H.GuildFeatures.COMMUNITY)
        );
    }
}
let Y = new W(I.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!F.has(t)) return (F.add(t), w.w.set(K, F), !0);
    },
});
var z = n(992250);
let Q = { MAX_MEMBER_COUNT: new Set() };
class q extends d.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        (this.waitFor(R.A, X.A, k.A),
            this.syncWith([R.A, X.A, k.A], H.tEg),
            w.w.remove(H.n5X.MAX_MEMBER_COUNT_100),
            w.w.remove(H.n5X.MAX_MEMBER_COUNT_250),
            (Q[H.n5X.MAX_MEMBER_COUNT] = new Set(w.w.get(H.n5X.MAX_MEMBER_COUNT)) ?? new Set()));
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = k.A.getMemberCount(e.id) ?? 0,
            n = R.A.can(H.xBc.ADMINISTRATOR, e);
        return !Q[H.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let Z = new q(I.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!Q[H.n5X.MAX_MEMBER_COUNT].has(t))
            return (Q[H.n5X.MAX_MEMBER_COUNT].add(t), w.w.set(H.n5X.MAX_MEMBER_COUNT, Q[H.n5X.MAX_MEMBER_COUNT]), !0);
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
    let t = e?.id ?? H.dJq,
        n = (0, d.bG)([Y], () => Y.isVisible(e)),
        i = (0, d.bG)([Z], () => Z.isVisible(e)),
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
        A = u && !e?.features.has(H.GuildFeatures.HUB),
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
var ee = n(47899),
    et = n(826673),
    en = n(131607),
    ei = n(93055),
    es = n(5180),
    el = n(826320),
    er = n(428784),
    ea = n(831617),
    eo = n(43471),
    ed = n(788563),
    eu = n(72152),
    ec = n(877624),
    eA = n(549996),
    eE = n(49999),
    eh = n(15073),
    em = n(174459),
    eg = n(488926),
    eI = n(45780),
    eC = n(567305),
    e_ = n(555325),
    eN = n(469993),
    eS = n(260509),
    ep = n(287809),
    eT = n(568185);
let eM = "hasSeenGuildTemplatePromotionTooltip",
    ef = {},
    eO = !0 === w.w.get(eM);
function eR(e) {
    let { guildId: t } = e;
    ef = { ...ef, [t]: !1 };
}
class eL extends d.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return ef[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !eO;
    }
}
let eD = new eL(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        ef = { ...ef, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        (w.w.set(eM, !0), (eO = !0));
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        ef = { ...ef, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eR,
    GUILD_TEMPLATE_DELETE_SUCCESS: eR,
});
var ex = n(875317),
    eG = n(181880),
    eU = n(285406),
    eb = n(361158),
    ey = n(379229),
    eH = n(229548),
    eP = n(139032),
    ev = n(128313),
    ej = n(363487),
    eB = n(342220),
    ew = n(383272),
    ek = n(414133),
    eX = n(864310),
    eV = n(972829),
    eK = n(568065),
    eF = n(320989),
    eW = n(728321),
    eY = n(79858),
    ez = n(72314),
    eQ = n(919638),
    eq = n(808728),
    eZ = n(186111),
    e$ = n(584569),
    eJ = n(763827),
    e0 = n(158045),
    e1 = n(885631),
    e6 = n(542308),
    e3 = n(960628),
    e8 = n(206248),
    e7 = n(498470),
    e2 = n(807098),
    e5 = n(637706),
    e9 = n(788883),
    e4 = n(7667);
function te(e) {
    let { guildId: t, componentId: n, promotionId: i, coachmark: s, targetElementRef: a, markAsDismissed: o } = e,
        { analyticsLocations: d } = (0, N.Ay)(),
        c = (0, e2.T)(s.asset),
        { terms: A } = (0, e4.A)(i),
        E = r.useCallback(() => {
            o(eE.i.DISMISS);
        }, [o]),
        h = r.useCallback(() => {
            ((0, e7.h)({
                buttonAction: s.button?.buttonAction,
                deeplinkSection: s.button?.deeplinkSection,
                applicationId: s.button?.navigableStorefrontApplicationId?.value,
                guildId: t,
                analyticsLocation: { page: H.liQ.GUILD_CHANNEL, section: H.JJy.GUILD_HEADER },
                analyticsLocations: d,
            })(),
                o(eE.i.TAKE_ACTION));
        }, [s.button, t, d, o]),
        m = (0, e5.C)(s.helpArticle, ""),
        g = [s.body, A].filter((e) => "" !== e).join(" "),
        { icon: I } = (0, e7.x)({ buttonAction: s.button?.buttonAction }),
        C = s.button?.copy ?? "";
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e9.A, {
                componentType: ec.C.GUILD_HEADER_COACHMARK,
                componentId: n,
                promotionId: i,
                dismissibleContent: u.M.GUILD_HEADER_COACHMARK,
            }),
            (0, l.jsx)(e8.H, {
                targetElementRef: a,
                title: s.header,
                body: g,
                assetUrl: c ?? "",
                disableMediaViewer: !0,
                action: "" !== C ? { text: C, variant: "primary", icon: I, iconPosition: "start", onClick: h } : void 0,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                onRequestClose: E,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var tt = n(562708),
    tn = n(702841),
    ti = n(139286),
    ts = n(468689),
    tl = n(375708),
    tr = n(330766);
function ta(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        s = (0, tn.bG)([X.A, ep.default], () => {
            let e = ep.default.getCurrentUser(),
                n = X.A.getGuild(t);
            return null != n && (0, eS.bM)(n, e);
        });
    return (
        (0, ti.A)({
            type: tt.ImpressionTypes.POPOUT,
            name: tt.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: s },
        }),
        (0, l.jsx)(A.A, {
            targetElementRef: i,
            title: tl.intl.string(tl.t.C0m4rQ),
            body: tl.intl.string(tl.t.zOHfEX),
            graphic: { type: "image", src: tr },
            actions: [
                {
                    text: tl.intl.string(tl.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        ts.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(eE.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function to(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(e8.H, {
        targetElementRef: i,
        title: tl.intl.string(tl.t.gCgirr),
        body: tl.intl.string(tl.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: tl.intl.string(tl.t.BQq86h),
            variant: "primary",
            onClick: function () {
                ts.A.open(t, H.BEX.ROLE_SUBSCRIPTIONS, void 0, H.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var td = n(834730),
    tu = n(821609),
    tc = n(736759);
function tA(e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, l.jsx)("div", { className: tc.Wn }),
            (0, l.jsx)(td.E, { variant: "text-sm/normal", className: tc.Qs, children: tl.intl.string(tl.t.rdzeVP) }),
            (0, l.jsx)(tu.$, {
                variant: "overlay-primary",
                text: tl.intl.string(tl.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(eE.i.AUTO);
                },
            }),
        ],
    });
}
var tE = n(270533);
function th(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, l.jsx)(A.A, {
        targetElementRef: i,
        title: tl.intl.string(tl.t.Hgd22r),
        body: tl.intl.string(tl.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: tl.intl.string(tl.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    ts.A.open(t.id, H.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(eE.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function tm(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = r.useRef(null);
    return (0, l.jsx)(m.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, l.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => e.stopPropagation(),
                children: "function" == typeof t ? t(i) : t,
            }),
        position: "bottom",
        align: "center",
        animation: m.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, l.jsx)("div", { ref: i, children: n() }),
    });
}
let tg = r.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: s, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, l.jsx)(l.Fragment, {
        children: (function () {
            switch (s) {
                case u.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tE.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tE.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) =>
                            (0, l.jsx)(tE.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) => (0, l.jsx)(tE.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) => (0, l.jsx)(tE.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, l.jsx)(tm, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tE.Gw, {
                                type: ey.o.BOOST_TO_UNLOCK,
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
                    return (0, l.jsx)(tm, {
                        renderPopout: (t) =>
                            (0, l.jsx)(tE.Mr, {
                                type: ey.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: a,
                                channelRowRef: t,
                                ...o,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case u.M.GUILD_HEADER_COACHMARK: {
                    let e = r?.marketingComponent;
                    if (null == e) return i();
                    return (0, l.jsx)(tm, {
                        renderPopout: (t) =>
                            (0, l.jsx)(te, {
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
                case u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) => (0, l.jsx)(ta, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) => (0, l.jsx)(th, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, l.jsx)(tm, {
                        renderPopout: (0, l.jsx)(tA, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, l.jsx)(tm, {
                        renderPopout: (e) => (0, l.jsx)(to, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tI = n(435558),
    tC = n.n(tI),
    t_ = n(862482),
    tN = n(939249),
    tS = n(789645),
    tp = n(297264),
    tT = n(95561),
    tM = n(446406);
let tf = tC().debounce(tT.Ay.trackWithMetadata, 500),
    tO = function (e) {
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
            ctaColor: m,
        } = e;
        r.useEffect(() => {
            tf(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let g = null;
        "function" == typeof h
            ? (g = h())
            : null != h &&
              (g = (0, l.jsx)(t_.$n, {
                  "data-migration-pending": !0,
                  className: tM.HM,
                  size: t_.$n.Sizes.SMALL,
                  onClick: function () {
                      (null != a &&
                          em.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: u,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          E?.());
                  },
                  fullWidth: !0,
                  color: m,
                  children: h,
              }));
        let I = null != o ? `${o}px` : "16px";
        return (0, l.jsxs)("div", {
            className: tM.kX,
            children: [
                !0 === c
                    ? null
                    : (0, l.jsx)(tN.D, {
                          onClick: function () {
                              (tT.Ay.trackWithMetadata(H.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.());
                          },
                          className: tM.VN,
                          "aria-label": tl.intl.string(tl.t.WAI6xu),
                          children: (0, l.jsx)(tS.P, { size: "md", color: "currentColor", className: tM.ut }),
                      }),
                null != s &&
                    (0, l.jsx)("div", {
                        className: tM.ZS,
                        style: { marginTop: `${d}px`, marginLeft: I, marginRight: I },
                        children: "string" == typeof s ? (0, l.jsx)("img", { className: tM.Sl, src: s, alt: "" }) : s,
                    }),
                (0, l.jsxs)("div", {
                    className: tM.iU,
                    children: [
                        null != n
                            ? (0, l.jsx)(tp.D, { variant: "heading-md/semibold", className: tM.DD, children: n })
                            : null,
                        (0, l.jsx)(td.E, { variant: "text-sm/normal", children: i }),
                        g,
                    ],
                }),
            ],
        });
    };
var tR = n(975571);
function tL(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, l.jsx)(tO, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        onClick: () => {
            (open(tR.A.getArticleURL(H.MVz.CONNECTION_DETAILS)), n(eE.i.UNKNOWN));
        },
        title: tl.intl.string(tl.t.YMgaJt),
        message: tl.intl.string(tl.t["AV/9eW"]),
        cta: tl.intl.string(tl.t.hvVgAZ),
        trackingSource: H.kZU.LINKED_ROLES_ADMIN_NUX,
        type: H.n5X.LINKED_ROLES_ADMIN,
    });
}
var tD = n(158390),
    tx = n(636537),
    tG = n(927813);
let tU = null;
class tb extends d.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tU;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tU?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tU?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tU) return [];
        let e = tU;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let ty = new tb(I.h, {
        LOGOUT: function () {
            tU = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tU = t;
        },
    }),
    tH = [];
async function tP() {
    let { body: e } = await tx.Bo.get({ url: H.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tv = (0, d.UT)(ty, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => ty.getMap(),
    load: () => tP(),
    staleAfter: tG.A.Seconds.DAY,
    retryConfig: { backoff: () => new tD.A(5 * tG.A.Millis.MINUTE), maxRetries: 10 },
});
function tj(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tv(t);
    return n?.[e] ?? tH;
}
let tB = (0, y.C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tw = n(509434),
    tk = n(975807),
    tX = n(201438),
    tV = n(194362),
    tK = n(307301),
    tF = n(661531),
    tW = n(701115);
function tY(e) {
    let { imageSrc: t } = e;
    return (0, l.jsxs)("div", {
        className: tW.kL,
        children: [
            (0, l.jsx)("div", { className: tW.j3, children: (0, l.jsx)("img", { className: tW.Su, src: t, alt: "" }) }),
            (0, l.jsx)("div", {
                className: tW.gm,
                children: (0, l.jsx)("div", {
                    className: tW.WA,
                    children: (0, l.jsx)(tK.j, { size: "sm", color: tF.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tz = n(63142);
function tQ(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = tj(t.id)[0] ?? null,
        { coverImageUrl: s, gameName: r } = (0, tX.A)(i, tl.intl.string(tl.t.VQq92a));
    if (null == s) return null;
    let a = t.features.has(H.GuildFeatures.VERIFIED) ? tl.intl.string(tl.t.uUARXe) : tl.intl.string(tl.t["0Dx29f"]);
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: () => n(eE.i.USER_DISMISS),
        title: tl.intl.format(tl.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, l.jsxs)("span", {
            className: tz.m,
            children: [tl.intl.string(tl.t["2u6ZlY"]), (0, l.jsx)(tw.I, { size: "xs", color: "currentColor" })],
        }),
        type: H.n5X.GAME_CLAIM,
        image: (0, l.jsx)(tY, { imageSrc: s }),
        imageMarginX: 60,
        onClick: async () => {
            n(eE.i.TAKE_ACTION);
            let e = await (0, tV.a)(H.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tk.A)(e);
        },
    });
}
var tq = n(631305),
    tZ = n(473145),
    t$ = n(625633);
function tJ(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tZ.Os)(t, H.TVA.TIER_2),
        { analyticsLocations: s } = (0, N.Ay)(_.A.GUILD_BANNER_NOTICE);
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: () => n(eE.i.UNKNOWN),
        cta: tl.intl.string(tl.t.oPAx73),
        message: tl.intl.format(tl.t.AcaNYw, { boostsNeeded: i }),
        type: H.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tq.A)({
                analyticsLocations: s,
                analyticsSourceLocation: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, t$.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var t0 = n(878678);
class t1 extends r.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, t0.K4)({ guildId: e.id, location: { section: H.JJy.CHANNEL_NOTICE, object: H.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, l.jsx)(tO, {
            guild: e,
            onDismissed: () => n(eE.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? tl.intl.string(tl.t.hlitVQ) : tl.intl.string(tl.t.XHtaDD),
            cta: tl.intl.string(tl.t["vqb+H1"]),
            trackingSource: H.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: H.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let t6 = d.Ay.connectStores([k.A], (e) => {
    let { guild: t } = e;
    return { memberCount: k.A.getMemberCount(t.id) };
})(t1);
var t3 = n(503698),
    t8 = n.n(t3),
    t7 = n(933832),
    t2 = n(782603),
    t5 = n(81466),
    t9 = n(116085),
    t4 = n(597601),
    ne = n(451394),
    nt = n(104171),
    nn = n(47167),
    ni = n(713654),
    ns = n(976860),
    nl = n(790535),
    nr = n(110618),
    na = n(280450),
    no = n(309010),
    nd = n(312006),
    nu = n(403362),
    nc = n(707592),
    nA = n(698441),
    nE = n(935159),
    nh = n(11550),
    nm = n(435328),
    ng = n(563312),
    nI = n(9448),
    nC = n(974930),
    n_ = n(666394),
    nN = n(659463);
let nS = r.memo(function (e) {
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
        className: nN.kX,
        children: [
            (0, l.jsxs)("div", {
                className: t8()(nN.fI, nN.pF),
                children: [
                    (0, l.jsx)("div", { className: nN.Ok }),
                    (0, l.jsx)(td.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nN.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, l.jsx)(tN.D, {
                            onClick: o,
                            className: nN.ut,
                            "aria-label": tl.intl.string(tl.t.cpT0Cq),
                            children: (0, l.jsx)(tS.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, l.jsx)(tp.D, { color: "text-strong", variant: "heading-md/semibold", className: nN.eq, children: a }),
            (0, l.jsxs)("div", {
                className: t8()(nN.fI, nN.pF),
                children: [
                    i,
                    (0, l.jsx)(td.E, { color: "none", variant: "text-xs/normal", className: nN.HA, children: n }),
                    null != s &&
                        null != r &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(td.E, {
                                    className: nN.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, l.jsx)(td.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nN.zH,
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
function np(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, nn.Ay)(n),
        s = (0, d.yK)(
            [L.Ay],
            () =>
                L.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, ni.gU)(n);
    return (0, l.jsx)(nS, {
        onClickCloseIcon: () => (0, nE.iF)({ eventId: t?.id }),
        heading: tl.intl.string(tl.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, l.jsx)(r, { size: "xs", color: "currentColor", className: nN.uE }) : null,
        children: (0, l.jsx)(nx, { channel: n, speakers: s, voiceType: 1 }),
    });
}
function nT(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nC.G3)(t),
        s = (0, d.bG)([nA.Ay], () => nA.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, d.bG)([nh.A], () => nh.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        s || null != r || (0, nE.pE)(t.id),
        (0, l.jsx)(tu.$, {
            onClick: function () {
                ((0, n_.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nE.Lx)(t.id), 1e3)),
                    em.default.track(H.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: tl.intl.string(tl.t.DlcqlU),
            icon: s ? t7.CheckmarkLargeIcon : t2.BellIcon,
            variant: s ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nM(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nI.oF)(t),
        s = null != i ? (0, nm.y)(i, !0) : null,
        a = (0, nI.WN)(t),
        o = (0, nn.Ay)(a),
        d = (0, ni.gU)(a),
        { startTime: u, endTime: c } = (0, ng.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nC.CC)(u.toISOString(), c?.toISOString()),
        m = E
            ? h > 0
                ? tl.intl.formatToPlainString(tl.t.PQlCWk, { minutes: h })
                : tl.intl.string(tl.t.WINqKV)
            : tl.intl.formatToPlainString(tl.t.DC6h3G, { date: A });
    return (
        r.useEffect(() => {
            em.default.track(H.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: nN.kX,
            children: [
                (0, l.jsxs)("div", {
                    className: nN.fI,
                    children: [
                        (0, l.jsx)(tN.D, {
                            onClick: () => (0, nc.uR)({ eventId: t.id }),
                            className: nN.oP,
                            children: (0, l.jsx)(td.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nN.eq,
                                children: t.name,
                            }),
                        }),
                        (0, l.jsx)(tN.D, {
                            onClick: () => {
                                (em.default.track(H.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, nE.Lx)(t.id));
                            },
                            className: nN.ut,
                            "aria-label": tl.intl.string(tl.t.cpT0Cq),
                            children: (0, l.jsx)(tS.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t8()(nN.fI, nN.pF),
                    children: [
                        (0, l.jsx)(t5.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nN.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, l.jsx)(td.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nN.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: t8()(nN.fI, nN.pF),
                    children: [
                        null != d
                            ? (0, l.jsx)(d, { size: "xs", color: "currentColor", className: nN.uE })
                            : (0, l.jsx)(t9.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nN.uE,
                              }),
                        (0, l.jsx)(td.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nN.HA,
                            children: o ?? s,
                        }),
                    ],
                }),
                (0, l.jsx)(nT, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nf(e) {
    let { guildEvent: t } = e,
        n = (0, nI.oF)(t);
    return null == n
        ? null
        : (0, l.jsx)(nS, {
              onClickCloseIcon: () => (0, nE.iF)({ eventId: t?.id }),
              heading: tl.intl.string(tl.t["1+boPi"]),
              topic: t.name,
              location: (0, nm.y)(n, !0),
              locationIcon: (0, l.jsx)(t9.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nN.uE,
              }),
              children: (0, l.jsx)(nO, { guildEvent: t }),
          });
}
function nO(e) {
    let { guildEvent: t } = e,
        n = r.useCallback(() => {
            (0, nc.uR)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nN.PD,
        children: (0, l.jsx)(tu.$, {
            variant: "active",
            size: "sm",
            text: tl.intl.string(tl.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nR(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nN.PD,
        children: (0, l.jsx)(tu.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, nl.av)(t), (0, ns.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nL(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, nn.Ay)(n),
        s = (0, d.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, T.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, d.bG)([p.A], () => p.A.getParticipantCount(n.id, T.ip.AUDIENCE), [n.id]),
        a = tl.intl.formatToPlainString(tl.t["+v2pN2"], { count: `${r}` });
    return (0, l.jsx)(nS, {
        onClickCloseIcon: () => (0, nE.iF)({ stageId: t?.id }),
        heading: tl.intl.string(tl.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, l.jsx)(t4.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nN.uE,
        }),
        locationIcon: (0, l.jsx)(ne.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nN.uE,
        }),
        topic: t.topic,
        children: (0, l.jsx)(nx, { channel: n, speakers: s, voiceType: 2 }),
    });
}
var nD = (((s = {})[(s.VOICE = 1)] = "VOICE"), (s[(s.STAGE = 2)] = "STAGE"), (s[(s.STUDY_ROOM = 3)] = "STUDY_ROOM"), s);
function nx(e) {
    var t;
    let { channel: n, speakers: i, voiceType: s } = e,
        a = n.getGuildId(),
        o = r.useMemo(() => i.slice(0, 3), [i]),
        u = (0, d.bG)([R.A], () => R.A.can(H.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, d.bG)(
                [na.default, no.Ay, nd.Ay],
                () => {
                    let e = na.default.getId();
                    return no.Ay.getVoiceChannelId() === t ? nd.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = tl.intl.string(tl.t.VJlc0S);
    switch (s) {
        case 1:
            A = tl.intl.string(tl.t.VJlc0S);
            break;
        case 2:
            ((A = tl.intl.string(tl.t.ZYO5OK)),
                c?.speaker ? (A = tl.intl.string(tl.t["/cnSFc"])) : null != c && (A = tl.intl.string(tl.t.btSGOj)));
            break;
        case 3:
            A = tl.intl.string(tl.t.wBoE6L);
            break;
        default:
            (0, nu.xb)(s);
    }
    return null == a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o.length > 0
                      ? (0, l.jsxs)("div", {
                            className: t8()(nN.fI, nN.pF),
                            children: [
                                (0, l.jsx)(nt.Ay, { guildId: a, users: o, showUserPopout: !0, size: nt.DN.SIZE_16 }),
                                (0, l.jsx)(td.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nN.c8,
                                    children: (0, nr.c)(a, o, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, l.jsx)(nR, { channel: n, label: A }),
              ],
          });
}
let nG = r.memo(function (e) {
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
        m = null != c && null != a && !A;
    null == o || E
        ? m && (h = (0, l.jsx)(nL, { stageInstance: c, channel: a }))
        : o.entity_type === D.Ps.STAGE_INSTANCE && m
          ? (h = (0, l.jsx)(nL, { stageInstance: c, channel: a }))
          : o.entity_type === D.Ps.EXTERNAL
            ? (h = (0, l.jsx)(nf, { guildEvent: o }))
            : o.entity_type === D.Ps.VOICE && null != a && (h = (0, l.jsx)(np, { guildEvent: o, channel: a }));
    let g = r.features.has(H.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !g) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, l.jsx)(nM, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nU(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: r = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: r, height: a },
        src: "https://cdn.discordapp.com/assets/content/22b530628b0360931343feee81e79f9e43c02bf07c24cb4ee9f657b3ec8a0e6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var nb = n(863888);
function ny(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: () => i(eE.i.UNKNOWN),
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("722514"),
                    n.e("197804"),
                    n.e("807265"),
                    n.e("797641"),
                    n.e("890496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        message: tl.intl.string(tl.t["1+hiP6"]),
        cta: tl.intl.string(tl.t.hvVgAZ),
        trackingSource: H.kZU.HUB_LINK_NOTICE,
        type: H.n5X.HUB_LINK,
        image: (0, l.jsx)("div", { className: nb.b, children: (0, l.jsx)(nU, { alt: "", ariaHidden: !0 }) }),
    });
}
var nH = n(717421),
    nP = n(450510);
let nv = function (e) {
    let { channel: t, guild: n } = e;
    return (0, l.jsx)(tO, {
        guild: n,
        onDismissed: function () {
            (0, nP.sF)(nP._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: function () {
            ((0, nP.sF)(nP._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, nl.av)(t), (0, ns.uh)(t.getGuildId(), t.id)));
        },
        title: tl.intl.string(tl.t["4Y2AS7"]),
        message: tl.intl.string(tl.t.wTsxTS),
        cta: tl.intl.string(tl.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: H.n5X.HUB_STUDY_ROOM,
    });
};
var nj = n(435793);
let nB = function (e) {
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
        s = (0, ni.gU)(n);
    return (0, l.jsx)(nS, {
        heading: tl.intl.string(tl.t["X2K3/4"]),
        topic: t,
        location: tl.intl.string(tl.t.LZA6Na),
        locationIcon: null != s ? (0, l.jsx)(s, { size: "xs", color: "currentColor", className: nj.K }) : null,
        children: (0, l.jsx)(nx, { channel: n, speakers: i, voiceType: nD.STUDY_ROOM }),
    });
};
var nw = n(48686);
function nk(e) {
    let { channel: t, guild: n } = e,
        i = (0, d.bG)([nP.HP], () => nP.HP.hasHotspot(nP._2.HUB_STUDY_ROOM_NOTICE)),
        s = (0, nw.Q)(t.guild_id),
        r = (0, nn.Ay)(t),
        o = (0, nH.z)({ maxHeight: 300 * !s, overflow: "hidden", delay: 400 });
    return (0, l.jsx)(a.animated.div, {
        style: o,
        children: i
            ? (0, l.jsx)(nv, { channel: t, guild: n })
            : (0, l.jsx)(nB, { name: `\u{1F4DA}\u{2615} ${r}`, channel: t }),
    });
}
let nX = function (e) {
    let { guild: t } = e,
        n = (0, d.bG)([eq.Ay], () => eq.Ay.getChannels(t.id)[eq.vM][0]),
        i = (0, d.bG)([R.A], () => null != n && R.A.can(H.xBc.CONNECT, n.channel));
    return t.features.has(H.GuildFeatures.HUB) && null != n && i
        ? (0, l.jsx)(nk, { channel: n.channel, guild: t })
        : null;
};
function nV(e) {
    let { guild: t } = e;
    function n() {
        return j.A.dismissNotice(t.id);
    }
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: n,
        cta: tl.intl.string(tl.t.RzWDqY),
        message: tl.intl.format(tl.t["kQ/MDl"], {}),
        type: H.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), ts.A.open(t.id, H.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nK = n(587895),
    nF = n(143582);
function nW(e) {
    let t,
        { guild: n } = e,
        i = (0, B.$s)(n);
    function s() {
        return (0, nF.Hc)(n.id);
    }
    let a = r.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        o = (0, d.yK)(
            [nK.A],
            () => {
                let e = [];
                for (let t of a) {
                    let n = nK.A.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [a],
        );
    return 0 === o.length
        ? null
        : ((t =
              1 === o.length
                  ? tl.intl.formatToPlainString(tl.t["Egq+G/"], { a: o[0].name })
                  : 2 === o.length
                    ? tl.intl.formatToPlainString(tl.t.LxU9R3, { a: o[0].name, b: o[1].name })
                    : 3 === o.length
                      ? tl.intl.formatToPlainString(tl.t.crKXMC, { a: o[0].name, b: o[1].name, c: o[2].name })
                      : tl.intl.string(tl.t.MvfowF)),
          (0, l.jsx)(tO, {
              guild: n,
              onDismissed: s,
              message: t,
              type: H.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (s(), ts.A.open(n.id, H.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: tl.intl.string(tl.t.Rr3MAe),
          }));
}
var nY = n(628287);
let nz = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: n,
        onClick: () => ts.A.open(t.id, H.BEX.COMMUNITY),
        message: tl.intl.string(tl.t["2klD0Z"]),
        trackingSource: H.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: H.n5X.PUBLIC_UPSELL,
        image: nY,
        cta: tl.intl.string(tl.t.hvVgAZ),
    });
};
var nQ = n(536194),
    nq = n(780964),
    nZ = n(766075);
class n$ extends r.PureComponent {
    render() {
        return (0, l.jsx)(tO, {
            guild: this.props.guild,
            onClick: () => (0, nZ.openUserSettings)(nq.X.ACCOUNT_PANEL),
            message: tl.intl.format(tl.t["oCd+at"], {}),
            cta: tl.intl.string(tl.t["8dCrV9"]),
            trackingSource: H.kZU.GUILD_MFA_WARNING,
            type: H.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nJ = n(148494);
class n0 extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, g.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("683621"),
                n.e("711162"),
                n.e("159957"),
                n.e("728136"),
                n.e("216084"),
                n.e("22547"),
            ]).then(n.bind(n, 1310));
            return (n) => (0, l.jsx)(t, { ...n, guild: e, source: H.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = no.Ay.getChannelId(),
            t = tl.intl.formatToPlainString(tl.t.DEn7nu, { invitePeople: tl.intl.string(tl.t.Sd8Ixw) });
        (this.props.markAsDismissed(eE.i.UNKNOWN), null != e && nJ.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${tl.intl.string(tl.t.VWqWZQ)}
${tl.intl.string(tl.t["0Lgb/K"])}`;
        return (0, l.jsx)(tO, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: tl.intl.string(tl.t.Sd8Ixw),
            trackingSource: H.kZU.INVITE_NOTICE,
            type: H.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let n1 = function (e) {
    let { guild: t } = e,
        n = r.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, l.jsx)(tO, {
        guild: t,
        onDismissed: n,
        message: tl.intl.format(tl.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tR.A.getArticleURL(H.MVz.MAX_MEMBERS),
        }),
        type: H.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var n6 = n(475358),
    n3 = n(675704),
    n8 = n(793322);
let n7 = function (e) {
    let t = (0, l.jsx)(n6.e, { shortcut: n3.R.binds["0"], keyClassName: tM.Eb });
    return (0, l.jsx)(tO, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(eE.i.UNKNOWN),
        onClick: () => (0, n8.WU)("CHANNEL_NOTICE"),
        message: tl.intl.string(tl.t.Qhk8cs),
        cta: t,
        trackingSource: H.kZU.QUICK_SWITCHER_NOTICE,
        type: H.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var n2 = n(174768);
class n5 extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(X.A), this.syncWith([X.A], H.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(H.GuildFeatures.BANNER) && Date.now() - t >= H.D2K;
    }
}
let n9 = new n5(I.h);
class n4 extends d.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(R.A), this.syncWith([R.A], H.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.MANAGE_GUILD, e);
    }
}
let ie = new n4(I.h);
var it = n(731667);
function ii() {
    return !0;
}
class is extends d.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(R.A), this.syncWith([R.A], ii));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= H.D2K && R.A.can(H.xBc.ADMINISTRATOR, e);
    }
}
let il = new is(I.h),
    ir = "lastHiddenChannelNotice",
    ia = [
        {
            type: H.n5X.GUILD_BOOSTING,
            store: ie,
            dismissibleContentType: u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: H.n5X.GUILD_BANNER, store: n9, dismissibleContentType: u.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: H.n5X.INVITE, store: il, dismissibleContentType: u.M.CHANNEL_NOTICE_INVITE },
        { type: H.n5X.HUB_LINK, store: it.A, dismissibleContentType: u.M.CHANNEL_NOTICE_HUBLINK },
        { type: H.n5X.QUICKSWITCHER, store: n2.A, dismissibleContentType: u.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: H.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: u.M.LINKED_ROLE_ADMIN_GUILD },
        { type: H.n5X.GAME_CLAIM, dismissibleContentType: u.M.GAME_CLAIM_COACHMARK },
    ],
    io = ia.map((e) => e.store).filter(nu.Vq),
    id = new Set([u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, u.M.CHANNEL_NOTICE_GUILD_BANNER]);
function iu(e) {
    e.stopPropagation();
}
let ic = [];
function iA(e) {
    var t, n;
    let i,
        s,
        a,
        o,
        c,
        { guild: A } = e,
        [E, h] = r.useState(w.w.get(ir) ?? 0),
        m =
            ((n = t = A.id),
            (i = tB.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (s = (0, d.bG)([R.A], () => R.A.canWithPartialContext(H.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (o = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return tj(e, t).length > 0;
            })(t, (a = i && s))),
            (c = a && o),
            r.useMemo(() => {
                let e = [];
                return (c && e.push(u.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : ic);
            }, [c])),
        [g, I] = (0, en.ww)(m, A.id, eE.m.CHANNEL_NOTICES, !0),
        C = null != g,
        _ = (0, d.yK)(
            io,
            () =>
                C
                    ? []
                    : ia
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !id.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, C],
        ),
        [N, S] = (0, en.kn)(_, eE.m.CHANNEL_NOTICES),
        p = g ?? N,
        T = null != g ? I : S,
        M = r.useCallback(() => {
            var e;
            ((e = Date.now()), w.w.set(ir, e), h(e), T(eE.i.UNKNOWN));
        }, [T]),
        f = (() => {
            switch (p) {
                case u.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, l.jsx)(ny, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_INVITE:
                    return (0, l.jsx)(n0, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, l.jsx)(t6, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, l.jsx)(n7, { guild: A, markAsDismissed: M });
                case u.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, l.jsx)(tJ, { guild: A, markAsDismissed: M });
                case u.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, l.jsx)(tL, { guild: A, markAsDismissed: () => T(eE.i.UNKNOWN) });
                case u.M.GAME_CLAIM_COACHMARK:
                    return (0, l.jsx)(tQ, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, l.jsx)("div", { onContextMenu: iu, children: f });
}
let iE = function (e) {
    let { guild: t } = e;
    switch (J(t)) {
        case $.ENABLE_PUBLIC_GUILD:
            return (0, l.jsx)(nz, { guild: t });
        case $.MAX_MEMBER_COUNT:
            return (0, l.jsx)(n1, { guild: t });
        case $.GUILD_LIVE_CHANNEL:
            return (0, l.jsx)(nG, { guild: t });
        case $.GUILD_MFA_WARNING:
            return (0, l.jsx)(n$, { guild: t });
        case $.COMMANDS_MIGRATION:
            return (0, l.jsx)(nV, { guild: t });
        case $.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, l.jsx)(nW, { guild: t });
        case $.HUB_STUDY_ROOM:
            return (0, l.jsx)(nX, { guild: t });
    }
    return nQ.P.isDisallowPopupsSet() ? null : (0, l.jsx)(iA, { guild: e.guild });
};
var ih = n(883476);
function im(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, l.jsx)("div", { className: ih.k, ref: i, children: (0, l.jsx)(iE, { guild: t }) })
    );
}
var ig = n(66933),
    iI = n(846930),
    iC = n(168095);
let i_ = "server-settings",
    iN = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class iS extends r.PureComponent {
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
        (this.setAnimatedValue(0),
            I.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = eF.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = eF.A.getHistory();
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
        (e.stopPropagation(), (0, eu.Z)(!t), this.closeAllHeaderNotices());
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) {
                if (!i) return;
                (0, C.L3)(e, async () => {
                    let { default: e } = await n.e("879948").then(n.bind(n, 329671));
                    return (t) => (0, l.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("309004"),
                    n.e("419690"),
                    n.e("845322"),
                    n.e("110758"),
                ]).then(n.bind(n, 455557));
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, es.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("203112"),
                    n.e("876364"),
                    n.e("925807"),
                    n.e("996907"),
                    n.e("816027"),
                    n.e("562772"),
                    n.e("8159"),
                    n.e("207322"),
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
                    n.e("366313"),
                    n.e("262564"),
                    n.e("71866"),
                    n.e("891473"),
                    n.e("679157"),
                    n.e("1955"),
                    n.e("341161"),
                    n.e("401696"),
                    n.e("202985"),
                    n.e("455021"),
                    n.e("812196"),
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
                    n.e("986735"),
                    n.e("586662"),
                    n.e("758053"),
                    n.e("247471"),
                    n.e("889002"),
                    n.e("709976"),
                    n.e("750955"),
                    n.e("953343"),
                    n.e("405763"),
                    n.e("686731"),
                    n.e("807432"),
                    n.e("873532"),
                    n.e("279774"),
                    n.e("307158"),
                    n.e("410470"),
                    n.e("765208"),
                    n.e("711562"),
                    n.e("661157"),
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
                    n.e("548938"),
                    n.e("258407"),
                    n.e("894292"),
                    n.e("153302"),
                    n.e("836576"),
                    n.e("661779"),
                    n.e("750370"),
                    n.e("686809"),
                    n.e("636909"),
                    n.e("466592"),
                    n.e("73946"),
                    n.e("282050"),
                    n.e("436101"),
                    n.e("976888"),
                    n.e("387970"),
                    n.e("847445"),
                    n.e("919659"),
                    n.e("698136"),
                    n.e("718368"),
                    n.e("983513"),
                    n.e("76928"),
                    n.e("355502"),
                    n.e("528311"),
                    n.e("38012"),
                    n.e("411938"),
                    n.e("653383"),
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
                    n.e("74336"),
                    n.e("978898"),
                    n.e("406322"),
                    n.e("942571"),
                    n.e("464759"),
                    n.e("763343"),
                    n.e("194704"),
                    n.e("403643"),
                    n.e("812793"),
                    n.e("293612"),
                    n.e("703728"),
                    n.e("519435"),
                    n.e("10985"),
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
                    n.e("167275"),
                    n.e("529366"),
                    n.e("990185"),
                    n.e("444038"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("323589"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("10886"),
                    n.e("196689"),
                    n.e("343298"),
                    n.e("564664"),
                    n.e("842631"),
                    n.e("852197"),
                    n.e("553627"),
                    n.e("59599"),
                    n.e("46238"),
                    n.e("736919"),
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
                    n.e("903758"),
                    n.e("76283"),
                    n.e("792513"),
                    n.e("292699"),
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
                    n.e("866539"),
                    n.e("722765"),
                    n.e("33909"),
                    n.e("249169"),
                    n.e("754596"),
                    n.e("357625"),
                    n.e("308093"),
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
                    n.e("56955"),
                    n.e("463455"),
                    n.e("403655"),
                    n.e("317615"),
                    n.e("577154"),
                    n.e("877730"),
                    n.e("611899"),
                    n.e("527552"),
                    n.e("769266"),
                    n.e("487873"),
                    n.e("765626"),
                    n.e("683302"),
                    n.e("660608"),
                    n.e("744554"),
                    n.e("541137"),
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
                    n.e("450503"),
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
                    n.e("364827"),
                    n.e("523276"),
                    n.e("907167"),
                    n.e("830938"),
                    n.e("948720"),
                    n.e("784569"),
                    n.e("25279"),
                    n.e("992789"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("960235"),
                    n.e("811133"),
                    n.e("425412"),
                    n.e("77333"),
                    n.e("910486"),
                    n.e("56366"),
                    n.e("265607"),
                    n.e("317771"),
                    n.e("331988"),
                    n.e("262156"),
                    n.e("206028"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("217951"),
                    n.e("221856"),
                    n.e("293159"),
                    n.e("755936"),
                    n.e("172503"),
                    n.e("730760"),
                    n.e("214143"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("481987"),
                    n.e("595653"),
                    n.e("958038"),
                    n.e("171202"),
                    n.e("346802"),
                    n.e("576909"),
                    n.e("708757"),
                    n.e("993103"),
                    n.e("585968"),
                    n.e("481647"),
                    n.e("393336"),
                    n.e("776273"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("407170"),
                    n.e("811310"),
                    n.e("21921"),
                    n.e("307575"),
                    n.e("391763"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("53102"),
                    n.e("187110"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("875842"),
                    n.e("675706"),
                    n.e("940258"),
                    n.e("844841"),
                    n.e("401518"),
                    n.e("571210"),
                    n.e("292583"),
                    n.e("323354"),
                    n.e("302969"),
                    n.e("586127"),
                    n.e("173764"),
                    n.e("166495"),
                    n.e("198329"),
                    n.e("9205"),
                    n.e("308555"),
                    n.e("25949"),
                    n.e("146070"),
                    n.e("88599"),
                    n.e("836863"),
                    n.e("854622"),
                    n.e("95340"),
                    n.e("807936"),
                    n.e("88342"),
                    n.e("344502"),
                    n.e("617249"),
                    n.e("171273"),
                    n.e("437065"),
                    n.e("179049"),
                    n.e("709640"),
                    n.e("362422"),
                    n.e("590365"),
                    n.e("952548"),
                    n.e("470068"),
                    n.e("817989"),
                    n.e("311802"),
                    n.e("37977"),
                    n.e("720590"),
                    n.e("691671"),
                    n.e("919129"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("979483"),
                    n.e("164776"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("203589"),
                    n.e("174630"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("298408"),
                    n.e("294857"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("448948"),
                    n.e("375767"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("154469"),
                    n.e("886246"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("163235"),
                    n.e("588070"),
                    n.e("859546"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("963244"),
                    n.e("564850"),
                    n.e("608032"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("477970"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("371477"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("803332"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("772401"),
                    n.e("852617"),
                    n.e("204744"),
                    n.e("36227"),
                    n.e("386317"),
                    n.e("737021"),
                    n.e("818465"),
                    n.e("630175"),
                    n.e("971430"),
                    n.e("760083"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("282783"),
                    n.e("10039"),
                    n.e("305557"),
                    n.e("859991"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("709371"),
                    n.e("310235"),
                    n.e("480012"),
                    n.e("844780"),
                    n.e("474610"),
                    n.e("939171"),
                    n.e("713567"),
                    n.e("242323"),
                    n.e("444567"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("695170"),
                    n.e("460773"),
                    n.e("28676"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("883952"),
                    n.e("159957"),
                    n.e("599976"),
                    n.e("26001"),
                    n.e("414591"),
                    n.e("652111"),
                    n.e("434786"),
                    n.e("309004"),
                    n.e("982730"),
                    n.e("708536"),
                    n.e("411353"),
                    n.e("449145"),
                    n.e("49716"),
                    n.e("506045"),
                    n.e("618706"),
                    n.e("203930"),
                    n.e("800872"),
                    n.e("903663"),
                    n.e("452531"),
                    n.e("338601"),
                    n.e("201243"),
                    n.e("368530"),
                    n.e("430997"),
                    n.e("728136"),
                    n.e("65393"),
                    n.e("215920"),
                    n.e("216084"),
                    n.e("978046"),
                    n.e("127659"),
                    n.e("66580"),
                    n.e("343116"),
                    n.e("610943"),
                    n.e("283230"),
                    n.e("582486"),
                    n.e("273669"),
                    n.e("507775"),
                    n.e("22547"),
                    n.e("466147"),
                    n.e("50342"),
                    n.e("428235"),
                    n.e("303710"),
                    n.e("161058"),
                    n.e("134504"),
                    n.e("333097"),
                    n.e("908608"),
                    n.e("409391"),
                    n.e("645830"),
                    n.e("115368"),
                    n.e("810262"),
                    n.e("995602"),
                    n.e("346313"),
                    n.e("741786"),
                    n.e("463726"),
                    n.e("816589"),
                    n.e("256373"),
                    n.e("929569"),
                    n.e("636002"),
                    n.e("343233"),
                    n.e("756684"),
                    n.e("806354"),
                    n.e("556026"),
                    n.e("416301"),
                    n.e("722191"),
                    n.e("225961"),
                    n.e("359702"),
                    n.e("708364"),
                    n.e("452823"),
                    n.e("779348"),
                    n.e("647011"),
                    n.e("331203"),
                    n.e("466913"),
                    n.e("983947"),
                    n.e("71719"),
                    n.e("419690"),
                    n.e("213848"),
                    n.e("39214"),
                    n.e("588307"),
                    n.e("514878"),
                    n.e("676376"),
                    n.e("426508"),
                    n.e("8422"),
                    n.e("842935"),
                    n.e("73091"),
                    n.e("269178"),
                    n.e("886692"),
                    n.e("916373"),
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
                    n.e("37786"),
                    n.e("306410"),
                    n.e("161309"),
                    n.e("694529"),
                    n.e("995210"),
                    n.e("482090"),
                    n.e("317699"),
                    n.e("257032"),
                    n.e("845322"),
                    n.e("94832"),
                    n.e("426386"),
                    n.e("865338"),
                    n.e("842987"),
                    n.e("588860"),
                ]).then(n.bind(n, 860417));
                return (n) => (0, l.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        (this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip());
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, et.k8)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(H.GuildFeatures.HUB);
        !e && t && (0, et.Dr)(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eE.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        (this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && eT.A.hideGuildTemplateDirtyTooltip(e.id);
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
            return null != i && (0, l.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, l.jsx)(tg, {
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
                  children: (0, l.jsx)(eW.A, {
                      tutorialId: i_,
                      position: "bottom",
                      inlineSpecs: iN,
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
                                title: tl.intl.string(tl.t.Rk2RJk),
                                body: tl.intl.string(tl.t.sFSrFH),
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
                                title: tl.intl.string(tl.t.Q3qa4x),
                                body: tl.intl.string(tl.t.UyHD4O),
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
            : (0, l.jsx)(N.f5, {
                  value: a,
                  children: (0, l.jsx)(m.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: m.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, eu.Z)(!1);
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
            i = null != t && (0, e1.A)(t);
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: i, ...s } = this.props;
        if (e || null == t)
            return (0, l.jsx)(iI.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(H.GuildFeatures.HUB) && !i)
                return (0, l.jsx)("div", {
                    className: iC.r0,
                    children: (0, l.jsx)(eU.A, { guild: t, channel: n ?? eq.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, es.ai)(t.id) ? el.A : e6.B;
            return (0, l.jsx)(e, {
                guild: t,
                ...s,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, e1.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, es.YC)(e);
        return (0, l.jsxs)("nav", {
            className: iC.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": tl.intl.formatToPlainString(tl.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, l.jsx)(im, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ip(e) {
    let t,
        i,
        s,
        a,
        c,
        A,
        E,
        h,
        m,
        I,
        C,
        S,
        p,
        T,
        M,
        { guildId: f, hideSelectedChannel: D, selectedChannelId: x } = e,
        G = (0, er.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, ei.TW)("ConnectedGuildSidebar"),
        b = (0, d.bG)([X.A], () => X.A.getGuild(f)),
        y = (0, d.bG)([L.Ay], () => L.Ay.getVoiceStates(f), [f]),
        P = (0, d.bG)([ez.A], () => ez.A.getGuildDimensions(f).scrollTo),
        j = (0, d.bG)([eJ.A], () => eJ.A.getChannelId()),
        B = (0, d.bG)([R.A], () => R.A.can(H.xBc.MANAGE_GUILD, b)),
        w = (0, d.bG)([eQ.A], () => eQ.A.isUnavailable(f)),
        k = (0, d.bG)([ep.default], () => ep.default.getCurrentUser()),
        { enableStudyGroup: K } = v(b),
        F = (0, ee.Ay)((e) => e.currentlyShown.has(u.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, Y] = r.useState(!F),
        [z, Q] = r.useState(f),
        { analyticsLocations: q } = (0, N.Ay)(_.A.GUILD_HEADER);
    f !== z && (Q(f), Y(!F));
    let [Z, $] = (0, ee.Ay)(
            (e) => [
                ia.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eE.m.GUILD_HEADER_TOOLTIPS),
            ],
            o.x,
        ),
        et = J(b),
        el = (0, g.useModalsStore)(g.hasAnyModalOpenSelector),
        eT = (0, d.bG)([eZ.A], () => eZ.A.hasLayers()),
        eM = (function (e) {
            let t = (0, eA.c)(ec.C.GUILD_HEADER_COACHMARK),
                n =
                    null != t && "guildHeaderCoachmark" === t.properties.properties.oneofKind
                        ? t.properties.properties.guildHeaderCoachmark
                        : null,
                i = null != e && !(0, es.ai)(e),
                [s, l] = (0, en.Cc)(
                    null != n && i ? u.M.GUILD_HEADER_COACHMARK : null,
                    t?.promotionId ?? "",
                    eE.m.GUILD_HEADER_TOOLTIPS,
                );
            return {
                shouldShow: null != n && i && s === u.M.GUILD_HEADER_COACHMARK,
                componentId: t?.id ?? "",
                promotionId: t?.promotionId ?? "",
                coachmark: n,
                markAsDismissed: l,
            };
        })(f),
        ef = (0, eb.xr)((e) => e.fullScreenLayers.length > 0),
        eO = (0, d.bG)([eY.A], () => eY.A.shouldShow(i_)),
        eR =
            ((t = (0, d.bG)([X.A], () => X.A.getGuild(f))),
            (i = (0, d.bG)([ep.default], () => ep.default.getCurrentUser())),
            (s = null != t && (0, eS.bM)(t, i)),
            (a = (0, eN.oS)()),
            s &&
                (t?.features.has(H.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(H.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        eL = b?.features.has(H.GuildFeatures.HUB) === !0,
        eU = B && b?.features.has(H.GuildFeatures.DISCOVERABLE) === !0,
        eF = (0, d.bG)(
            [eD, eZ.A],
            () => null != b && null != k && B && !eZ.A.hasLayers() && eD.shouldShowGuildTemplateDirtyTooltip(f),
        ),
        eW = (0, d.bG)([O.A], () => O.A.getChannel(x)),
        { isPopoutOpen: eq } = (0, eu.S)(),
        e1 = b?.features.has(H.GuildFeatures.COMMUNITY) ?? !1,
        e6 = e0.Ay.isNewUser(k),
        e3 = W && !e6;
    ((c = (0, eh.TZ)(b)),
        (A = V.dR.some((e) => !(0, es.ai)(b?.id) && eg.Ib(e, b))),
        (E = b?.defaultMessageNotifications === H.orn.ALL_MESSAGES),
        (h = (0, eI.G$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq)),
        (m = c && (A || E) && !h),
        (I = r.useCallback(() => {
            (0, eI._$)(u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? H.dJq, !0, eE.i.DISMISS);
        }, [b])),
        (C = r.useRef(!1)),
        r.useEffect(() => {
            m &&
                !C.current &&
                ((0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("942068"), n.e("452823"), n.e("442446")]).then(
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
                em.default.track(H.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: u.V[u.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? H.dJq,
                }),
                (C.current = !0));
        }, [A, b, I, E, m]));
    let e8 =
        ((S = (0, d.bG)([X.A], () => X.A.getGuild(f))),
        (p = (0, eC._Y)(f)),
        (T =
            S?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
            S?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
        (M = (0, e_.X9)(S)),
        T && M && p);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, ex.Kb)(e, "GuildThemeNuxTrigger"),
            [l, a] = (0, en.kn)(null != s ? [u.M.GUILD_THEME_NUX] : [], eE.m.GUILD_THEME_NUX),
            o = l === u.M.GUILD_THEME_NUX,
            d = r.useRef(!1);
        (r.useEffect(() => {
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
            }, [o, n, e, a, i]));
    })(f, {
        isNuxOpen: (0, g.useHasModalOpen)(eG.u),
        openNux: r.useCallback((e) => {
            let { guildId: t, markAsDismissed: i } = e;
            return (0, g.openModalLazy)(
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
                { modalKey: eG.u, onCloseCallback: () => i(eE.i.USER_DISMISS) },
            );
        }, []),
    });
    let e7 = (0, d.bG)([eJ.A], () => eJ.A.getChannelId()),
        e2 = (0, d.bG)([e$.A], () => e$.A.desyncedVoiceStatesCount),
        e5 = (0, ej.A)(f),
        e9 = (0, es.ai)(f) ? null : e5,
        e4 =
            (function (e) {
                let t = (0, ej.A)(e),
                    n = (0, ew.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, ek.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, ew.lY)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    l = (0, eV.A)(e),
                    { available: r, isLoading: a } = (0, eX.A)(e);
                if (a) return !1;
                let o = r < eK.fe;
                return n && i && !s && o && !l && !1 === t;
            })(f) && !(0, es.ai)(f);
    ig.A.useConfig({ guildId: f, location: "guild_sidebar" });
    let te = (0, ea.C$)(f, "GuildSidebar"),
        tt = (0, d.bG)([X.A], () => X.A.getGuild(f)?.features.has(H.GuildFeatures.GAME_SERVERS) ?? !1, [f]),
        tn = te && !tt && !1 === e9,
        ti = (0, ed.J)("GuildSidebar"),
        ts = (0, eo.S)(f, "GuildSidebar"),
        tl = te && !tt && ts && !1 === e9,
        tr = (0, eB.A)(),
        ta = (0, eP.A)(f),
        to = !1 === e9 && tr && null != ta,
        td = (0, ev.A)(f),
        tu = !1 === e9 && tr && null != td,
        tc = [];
    (eL && tc.push(u.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eR && tc.push(u.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eU && tc.push(u.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e9 && tc.push(u.M.GUILD_POWERUP_PERKS_COACHMARK),
        e4 && tc.push(u.M.GUILD_THEME_MEMBER_COACHMARK),
        tn && tc.push(u.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        tl && tc.push(u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e8 && tc.push(u.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let [tA, tE] = (0, en.kn)(tc, eE.m.GUILD_HEADER_TOOLTIPS),
        [th, tm] = (0, eH.vB)(ti && te && !1 === e9 && !(0, es.ai)(f), eE.m.GUILD_HEADER_TOOLTIPS),
        [tg, tI] = (0, en.D8)(
            to ? u.M.BOOST_TO_UNLOCK_COACHMARK : null,
            f,
            { cooldownDurationMs: ey.bW, numTimesToRecur: 5 },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tC, t_] = (0, en.D8)(
            tu ? u.M.EXPIRING_POWERUP_COACHMARK : null,
            f,
            { cooldownDurationMs: ey.mD },
            eE.m.GUILD_HEADER_TOOLTIPS,
        ),
        tN = r.useMemo(
            () =>
                eM.shouldShow && null != eM.coachmark
                    ? {
                          contentType: u.M.GUILD_HEADER_COACHMARK,
                          data: {
                              marketingComponent: {
                                  componentId: eM.componentId,
                                  promotionId: eM.promotionId,
                                  coachmark: eM.coachmark,
                              },
                          },
                          markAsDismissed: eM.markAsDismissed,
                      }
                    : null != tA
                      ? { contentType: tA, data: null, markAsDismissed: tE }
                      : th === u.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: th, data: null, markAsDismissed: tm }
                        : tg === u.M.BOOST_TO_UNLOCK_COACHMARK && null != ta
                          ? { contentType: tg, data: { featuredPowerup: ta }, markAsDismissed: tI }
                          : tC === u.M.EXPIRING_POWERUP_COACHMARK && null != td
                            ? { contentType: tC, data: { featuredExpiringPowerup: td }, markAsDismissed: t_ }
                            : null,
            [
                eM.shouldShow,
                eM.coachmark,
                eM.componentId,
                eM.promotionId,
                eM.markAsDismissed,
                tA,
                th,
                tg,
                tC,
                ta,
                td,
                tE,
                tm,
                tI,
                t_,
            ],
        );
    return (0, l.jsx)(iS, {
        guildId: f,
        hideSelectedChannel: D,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: D ? null : x,
        selectedChannel: eW,
        selectedVoiceChannelId: j,
        voiceStates: y,
        rtcConnectedChannelId: e7,
        rtcDesyncedVoiceStatesCount: e2,
        isUnavailable: w,
        user: k,
        hasChannelNotice: null != et || Z,
        anyLayerOpen: el || eT || ef,
        showGuildHeaderTutorial: eO,
        showGuildTemplateDirtyTooltip: eF,
        showNewUnreadsBar: e1,
        isHeaderPopoutOpen: eq,
        enableStudyGroup: K,
        isGuildHeaderDismissibleTooltipShown: $,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: q,
        shouldRenderBurstCoachmark: e3,
        guildHeaderContentDescriptor: tN,
        onFavoriteGuildContextMenu: G,
        hasFavoritesAccess: U,
    });
}
