(n.r(t), n.d(t, { default: () => id }), n(321073));
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
    E = n(847374),
    h = n(922016),
    m = n(192308),
    I = n(228366),
    g = n(442433),
    C = n(793574),
    _ = n(688810),
    N = n(285059),
    S = n(63995);
n(113783);
var p = n(518769),
    T = n(446600),
    M = n(624265);
n(616356);
var f = n(734057),
    L = n(576705),
    R = n(607567),
    D = n(988794);
let O = { hiddenEventsAndStages: [] };
class x extends o.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (O = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && O.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && O.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return O;
    }
}
let G = new x(I.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? O.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && O.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        O.hiddenEventsAndStages.includes(n) &&
            (t.status === D.XG.CANCELED || t.status === D.XG.COMPLETED) &&
            (O.hiddenEventsAndStages = O.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        O.hiddenEventsAndStages.includes(n) &&
            (O.hiddenEventsAndStages = O.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        O.hiddenEventsAndStages.includes(n) &&
            (O.hiddenEventsAndStages = O.hiddenEventsAndStages.filter((e) => e !== n));
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
                    [G],
                    () => ({
                        isStageNoticeHidden: G.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: G.isLiveChannelNoticeHidden({ eventId: s?.id }),
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
var q = n(122590),
    Z = n(826673),
    $ = n(131607),
    J = n(93055),
    ee = n(5180),
    et = n(826320),
    en = n(428784),
    ei = n(831617),
    es = n(43471),
    el = n(788563),
    er = n(72152),
    ea = n(877624),
    eo = n(549996),
    ed = n(49999),
    eu = n(15073),
    ec = n(174459),
    eA = n(488926),
    eE = n(45780),
    eh = n(567305),
    em = n(555325),
    eI = n(469993),
    eg = n(260509),
    eC = n(287809),
    e_ = n(568185);
let eN = "hasSeenGuildTemplatePromotionTooltip",
    eS = {},
    ep = !0 === P.w.get(eN);
function eT(e) {
    let { guildId: t } = e;
    eS = { ...eS, [t]: !1 };
}
class eM extends o.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return eS[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !ep;
    }
}
let ef = new eM(I.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        eS = { ...eS, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        (P.w.set(eN, !0), (ep = !0));
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        eS = { ...eS, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: eT,
    GUILD_TEMPLATE_DELETE_SUCCESS: eT,
});
var eL = n(875317),
    eR = n(181880),
    eD = n(285406),
    eO = n(361158),
    ex = n(379229),
    eG = n(229548),
    eU = n(139032),
    eb = n(128313),
    ey = n(363487),
    eP = n(342220),
    eH = n(383272),
    ev = n(414133),
    ej = n(864310),
    eB = n(972829),
    ew = n(568065),
    ek = n(320989),
    eX = n(728321),
    eV = n(79858),
    eK = n(72314),
    eF = n(919638),
    eW = n(808728),
    ez = n(186111),
    eY = n(584569),
    eQ = n(763827),
    eq = n(158045),
    eZ = n(885631),
    e$ = n(182707),
    eJ = n(960628),
    e0 = n(206248),
    e1 = n(498470),
    e6 = n(807098),
    e8 = n(637706),
    e3 = n(788883),
    e5 = n(7667);
function e7(e) {
    let { guildId: t, componentId: n, promotionId: i, coachmark: r, targetElementRef: a, markAsDismissed: o } = e,
        { analyticsLocations: u } = (0, _.Ay)(),
        c = (0, e6.T)(r.asset),
        { terms: A } = (0, e5.A)(i),
        E = l.useCallback(() => {
            o(ed.i.DISMISS);
        }, [o]),
        h = l.useCallback(() => {
            ((0, e1.h)({
                buttonAction: r.button?.buttonAction,
                deeplinkSection: r.button?.deeplinkSection,
                applicationId: r.button?.navigableStorefrontApplicationId?.value,
                guildId: t,
                analyticsLocation: { page: B.liQ.GUILD_CHANNEL, section: B.JJy.GUILD_HEADER },
                analyticsLocations: u,
            })(),
                o(ed.i.TAKE_ACTION));
        }, [r.button, t, u, o]),
        m = (0, e8.C)(r.helpArticle, ""),
        I = [r.body, A].filter((e) => "" !== e).join(" "),
        { icon: g } = (0, e1.x)({ buttonAction: r.button?.buttonAction }),
        C = r.button?.copy ?? "";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(e3.A, {
                componentType: ea.C.GUILD_HEADER_COACHMARK,
                componentId: n,
                promotionId: i,
                dismissibleContent: d.M.GUILD_HEADER_COACHMARK,
            }),
            (0, s.jsx)(e0.H, {
                targetElementRef: a,
                title: r.header,
                body: I,
                assetUrl: c ?? "",
                disableMediaViewer: !0,
                action: "" !== C ? { text: C, variant: "primary", icon: g, iconPosition: "start", onClick: h } : void 0,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                onRequestClose: E,
                position: "bottom",
                caretConfig: { align: "center" },
            }),
        ],
    });
}
var e2 = n(562708),
    e9 = n(702841),
    e4 = n(139286),
    te = n(468689),
    tt = n(375708),
    tn = n(330766);
function ti(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        l = (0, e9.bG)([v.A, eC.default], () => {
            let e = eC.default.getCurrentUser(),
                n = v.A.getGuild(t);
            return null != n && (0, eg.bM)(n, e);
        });
    return (
        (0, e4.A)({
            type: e2.ImpressionTypes.POPOUT,
            name: e2.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: l },
        }),
        (0, s.jsx)(c.A, {
            targetElementRef: i,
            title: tt.intl.string(tt.t.C0m4rQ),
            body: tt.intl.string(tt.t.zOHfEX),
            graphic: { type: "image", src: tn },
            actions: [
                {
                    text: tt.intl.string(tt.t.OgQQbG),
                    variant: "primary",
                    onClick: function () {
                        te.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(ed.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
function ts(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(e0.H, {
        targetElementRef: i,
        title: tt.intl.string(tt.t.gCgirr),
        body: tt.intl.string(tt.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: tt.intl.string(tt.t.BQq86h),
            variant: "primary",
            onClick: function () {
                te.default.open(t, B.BEX.ROLE_SUBSCRIPTIONS, void 0, B.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(ed.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var tl = n(834730),
    tr = n(821609),
    ta = n(736759);
function to(e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, s.jsx)("div", { className: ta.Wn }),
            (0, s.jsx)(tl.E, { variant: "text-sm/normal", className: ta.Qs, children: tt.intl.string(tt.t.rdzeVP) }),
            (0, s.jsx)(tr.$, {
                variant: "overlay-primary",
                text: tt.intl.string(tt.t["NX+WJN"]),
                fullWidth: !0,
                onClick: function () {
                    t(ed.i.AUTO);
                },
            }),
        ],
    });
}
var td = n(270533);
function tu(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, s.jsx)(c.A, {
        targetElementRef: i,
        title: tt.intl.string(tt.t.Hgd22r),
        body: tt.intl.string(tt.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: tt.intl.string(tt.t["9l+df7"]),
                variant: "primary",
                onClick: function (e) {
                    te.default.open(t.id, B.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(ed.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function tc(e) {
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
let tA = l.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: l, data: r, markAsDismissed: a } = t,
        o = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, s.jsx)(s.Fragment, {
        children: (function () {
            switch (l) {
                case d.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) =>
                            (0, s.jsx)(td.UB, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_NEW_GAMES_COACHMARK:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) =>
                            (0, s.jsx)(td.YX, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) =>
                            (0, s.jsx)(td.Ns, { guildId: n.id, markAsDismissed: a, channelRowRef: e, ...o }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) => (0, s.jsx)(td.K8, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_THEME_MEMBER_COACHMARK:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) => (0, s.jsx)(td.Gz, { guildId: n.id, markAsDismissed: a, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = r?.featuredPowerup;
                    if (null == e) return i();
                    return (0, s.jsx)(tc, {
                        renderPopout: (t) =>
                            (0, s.jsx)(td.Gw, {
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
                    return (0, s.jsx)(tc, {
                        renderPopout: (t) =>
                            (0, s.jsx)(td.Mr, {
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
                    return (0, s.jsx)(tc, {
                        renderPopout: (t) =>
                            (0, s.jsx)(e7, {
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
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) => (0, s.jsx)(ti, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) => (0, s.jsx)(tu, { guild: n, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, s.jsx)(tc, {
                        renderPopout: (0, s.jsx)(to, { markAsDismissed: a }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, s.jsx)(tc, {
                        renderPopout: (e) => (0, s.jsx)(ts, { guildId: n.id, markAsDismissed: a, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var tE = n(435558),
    th = n.n(tE),
    tm = n(862482),
    tI = n(939249),
    tg = n(789645),
    tC = n(297264),
    t_ = n(95561),
    tN = n(446406);
let tS = th().debounce(t_.Ay.trackWithMetadata, 500),
    tp = function (e) {
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
            onClick: E,
            cta: h,
            ctaColor: m,
        } = e;
        l.useEffect(() => {
            tS(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let I = null;
        "function" == typeof h
            ? (I = h())
            : null != h &&
              (I = (0, s.jsx)(tm.$n, {
                  "data-migration-pending": !0,
                  className: tN.HM,
                  size: tm.$n.Sizes.SMALL,
                  onClick: function () {
                      (null != a &&
                          ec.default.track(B.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
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
        let g = null != o ? `${o}px` : "16px";
        return (0, s.jsxs)("div", {
            className: tN.kX,
            children: [
                !0 === c
                    ? null
                    : (0, s.jsx)(tI.D, {
                          onClick: function () {
                              (t_.Ay.trackWithMetadata(B.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), A?.());
                          },
                          className: tN.VN,
                          "aria-label": tt.intl.string(tt.t.WAI6xu),
                          children: (0, s.jsx)(tg.P, { size: "md", color: "currentColor", className: tN.ut }),
                      }),
                null != r &&
                    (0, s.jsx)("div", {
                        className: tN.ZS,
                        style: { marginTop: `${d}px`, marginLeft: g, marginRight: g },
                        children: "string" == typeof r ? (0, s.jsx)("img", { className: tN.Sl, src: r, alt: "" }) : r,
                    }),
                (0, s.jsxs)("div", {
                    className: tN.iU,
                    children: [
                        null != n
                            ? (0, s.jsx)(tC.D, { variant: "heading-md/semibold", className: tN.DD, children: n })
                            : null,
                        (0, s.jsx)(tl.E, { variant: "text-sm/normal", children: i }),
                        I,
                    ],
                }),
            ],
        });
    };
var tT = n(975571);
function tM(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, s.jsx)(tp, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(ed.i.UNKNOWN),
        onClick: () => {
            (open(tT.A.getArticleURL(B.MVz.CONNECTION_DETAILS)), n(ed.i.UNKNOWN));
        },
        title: tt.intl.string(tt.t.YMgaJt),
        message: tt.intl.string(tt.t["AV/9eW"]),
        cta: tt.intl.string(tt.t.hvVgAZ),
        trackingSource: B.kZU.LINKED_ROLES_ADMIN_NUX,
        type: B.n5X.LINKED_ROLES_ADMIN,
    });
}
var tf = n(158390),
    tL = n(636537),
    tR = n(927813);
let tD = null;
class tO extends o.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getMap() {
        return tD;
    }
    getUnclaimedGameIdsForGuild(e) {
        return tD?.[e] ?? [];
    }
    hasUnclaimedGames(e) {
        let t = tD?.[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        if (null == tD) return [];
        let e = tD;
        return Object.keys(e).filter((t) => (e[t] ?? []).length > 0);
    }
}
let tx = new tO(I.h, {
        LOGOUT: function () {
            tD = null;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            tD = t;
        },
    }),
    tG = [];
async function tU() {
    let { body: e } = await tL.Bo.get({ url: B.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 });
    I.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: e });
}
let tb = (0, o.UT)(tx, {
    getQueryId: (e) => (e ? "unclaimed-games" : null),
    get: () => tx.getMap(),
    load: () => tU(),
    staleAfter: tR.A.Seconds.DAY,
    retryConfig: { backoff: () => new tf.A(5 * tR.A.Millis.MINUTE), maxRetries: 10 },
});
function ty(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { data: n } = tb(t);
    return n?.[e] ?? tG;
}
let tP = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
});
var tH = n(509434),
    tv = n(975807),
    tj = n(201438),
    tB = n(194362),
    tw = n(661531),
    tk = n(307301),
    tX = n(701115);
function tV(e) {
    let { imageSrc: t } = e;
    return (0, s.jsxs)("div", {
        className: tX.kL,
        children: [
            (0, s.jsx)("div", { className: tX.j3, children: (0, s.jsx)("img", { className: tX.Su, src: t, alt: "" }) }),
            (0, s.jsx)("div", {
                className: tX.gm,
                children: (0, s.jsx)("div", {
                    className: tX.WA,
                    children: (0, s.jsx)(tk.j, { size: "sm", color: tw.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var tK = n(63142);
function tF(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = ty(t.id)[0] ?? null,
        { coverImageUrl: l, gameName: r } = (0, tj.A)(i, tt.intl.string(tt.t.VQq92a));
    if (null == l) return null;
    let a = t.features.has(B.GuildFeatures.VERIFIED) ? tt.intl.string(tt.t.uUARXe) : tt.intl.string(tt.t["0Dx29f"]);
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: () => n(ed.i.USER_DISMISS),
        title: tt.intl.format(tt.t.Q11WTQ, { gameName: r }),
        message: a,
        cta: (0, s.jsxs)("span", {
            className: tK.m,
            children: [tt.intl.string(tt.t["2u6ZlY"]), (0, s.jsx)(tH.I, { size: "xs", color: "currentColor" })],
        }),
        type: B.n5X.GAME_CLAIM,
        image: (0, s.jsx)(tV, { imageSrc: l }),
        imageMarginX: 60,
        onClick: async () => {
            n(ed.i.TAKE_ACTION);
            let e = await (0, tB.a)(B.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, tv.A)(e);
        },
    });
}
var tW = n(631305),
    tz = n(473145),
    tY = n(625633);
function tQ(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, tz.Os)(t, B.TVA.TIER_2),
        { analyticsLocations: l } = (0, _.Ay)(C.A.GUILD_BANNER_NOTICE);
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: () => n(ed.i.UNKNOWN),
        cta: tt.intl.string(tt.t.oPAx73),
        message: tt.intl.format(tt.t.AcaNYw, { boostsNeeded: i }),
        type: B.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, tW.A)({
                analyticsLocations: l,
                analyticsSourceLocation: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, tY.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var tq = n(878678);
class tZ extends l.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, tq.K4)({ guildId: e.id, location: { section: B.JJy.CHANNEL_NOTICE, object: B.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, s.jsx)(tp, {
            guild: e,
            onDismissed: () => n(ed.i.USER_DISMISS),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? tt.intl.string(tt.t.hlitVQ) : tt.intl.string(tt.t.XHtaDD),
            cta: tt.intl.string(tt.t["vqb+H1"]),
            trackingSource: B.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: B.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let t$ = o.Ay.connectStores([H.A], (e) => {
    let { guild: t } = e;
    return { memberCount: H.A.getMemberCount(t.id) };
})(tZ);
var tJ = n(503698),
    t0 = n.n(tJ),
    t1 = n(933832),
    t6 = n(782603),
    t8 = n(81466),
    t3 = n(116085),
    t5 = n(597601),
    t7 = n(451394),
    t2 = n(104171),
    t9 = n(47167),
    t4 = n(713654),
    ne = n(976860),
    nt = n(790535),
    nn = n(110618),
    ni = n(280450),
    ns = n(309010),
    nl = n(312006),
    nr = n(403362),
    na = n(707592),
    no = n(698441),
    nd = n(935159),
    nu = n(11550),
    nc = n(435328),
    nA = n(563312),
    nE = n(9448),
    nh = n(974930),
    nm = n(666394),
    nI = n(659463);
let ng = l.memo(function (e) {
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
        className: nI.kX,
        children: [
            (0, s.jsxs)("div", {
                className: t0()(nI.fI, nI.pF),
                children: [
                    (0, s.jsx)("div", { className: nI.Ok }),
                    (0, s.jsx)(tl.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: nI.U4,
                        children: t,
                    }),
                    null != o &&
                        (0, s.jsx)(tI.D, {
                            onClick: o,
                            className: nI.ut,
                            "aria-label": tt.intl.string(tt.t.cpT0Cq),
                            children: (0, s.jsx)(tg.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, s.jsx)(tC.D, { color: "text-strong", variant: "heading-md/semibold", className: nI.eq, children: a }),
            (0, s.jsxs)("div", {
                className: t0()(nI.fI, nI.pF),
                children: [
                    i,
                    (0, s.jsx)(tl.E, { color: "none", variant: "text-xs/normal", className: nI.HA, children: n }),
                    null != l &&
                        null != r &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(tl.E, {
                                    className: nI.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "\u2022",
                                }),
                                r,
                                (0, s.jsx)(tl.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nI.zH,
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
function nC(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, t9.Ay)(n),
        l = (0, o.yK)(
            [R.Ay],
            () =>
                R.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, t4.gU)(n);
    return (0, s.jsx)(ng, {
        onClickCloseIcon: () => (0, nd.iF)({ eventId: t?.id }),
        heading: tt.intl.string(tt.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != r ? (0, s.jsx)(r, { size: "xs", color: "currentColor", className: nI.uE }) : null,
        children: (0, s.jsx)(nf, { channel: n, speakers: l, voiceType: 1 }),
    });
}
function n_(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nh.G3)(t),
        l = (0, o.bG)([no.Ay], () => no.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        r = (0, o.bG)([nu.A], () => nu.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        l || null != r || (0, nd.pE)(t.id),
        (0, s.jsx)(tr.$, {
            onClick: function () {
                ((0, nm.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, nd.Lx)(t.id), 1e3)),
                    ec.default.track(B.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n }));
            },
            text: tt.intl.string(tt.t.DlcqlU),
            icon: l ? t1.CheckmarkLargeIcon : t6.BellIcon,
            variant: l ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function nN(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, nE.oF)(t),
        r = null != i ? (0, nc.y)(i, !0) : null,
        a = (0, nE.WN)(t),
        o = (0, t9.Ay)(a),
        d = (0, t4.gU)(a),
        { startTime: u, endTime: c } = (0, nA.Ay)(t),
        { startDateTimeString: A, upcomingEvent: E, diffMinutes: h } = (0, nh.CC)(u.toISOString(), c?.toISOString()),
        m = E
            ? h > 0
                ? tt.intl.formatToPlainString(tt.t.PQlCWk, { minutes: h })
                : tt.intl.string(tt.t.WINqKV)
            : tt.intl.formatToPlainString(tt.t.DC6h3G, { date: A });
    return (
        l.useEffect(() => {
            ec.default.track(B.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, s.jsxs)("div", {
            className: nI.kX,
            children: [
                (0, s.jsxs)("div", {
                    className: nI.fI,
                    children: [
                        (0, s.jsx)(tI.D, {
                            onClick: () => (0, na.uR)({ eventId: t.id }),
                            className: nI.oP,
                            children: (0, s.jsx)(tl.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: nI.eq,
                                children: t.name,
                            }),
                        }),
                        (0, s.jsx)(tI.D, {
                            onClick: () => {
                                (ec.default.track(B.HAw.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: n,
                                    guild_id: t.guild_id,
                                }),
                                    (0, nd.Lx)(t.id));
                            },
                            className: nI.ut,
                            "aria-label": tt.intl.string(tt.t.cpT0Cq),
                            children: (0, s.jsx)(tg.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: t0()(nI.fI, nI.pF),
                    children: [
                        (0, s.jsx)(t8.CalendarIcon, {
                            size: "custom",
                            color: "currentColor",
                            className: nI.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, s.jsx)(tl.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: nI.Sv,
                            children: m,
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: t0()(nI.fI, nI.pF),
                    children: [
                        null != d
                            ? (0, s.jsx)(d, { size: "xs", color: "currentColor", className: nI.uE })
                            : (0, s.jsx)(t3.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: nI.uE,
                              }),
                        (0, s.jsx)(tl.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: nI.HA,
                            children: o ?? r,
                        }),
                    ],
                }),
                (0, s.jsx)(n_, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function nS(e) {
    let { guildEvent: t } = e,
        n = (0, nE.oF)(t);
    return null == n
        ? null
        : (0, s.jsx)(ng, {
              onClickCloseIcon: () => (0, nd.iF)({ eventId: t?.id }),
              heading: tt.intl.string(tt.t["1+boPi"]),
              topic: t.name,
              location: (0, nc.y)(n, !0),
              locationIcon: (0, s.jsx)(t3.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: nI.uE,
              }),
              children: (0, s.jsx)(np, { guildEvent: t }),
          });
}
function np(e) {
    let { guildEvent: t } = e,
        n = l.useCallback(() => {
            (0, na.uR)({ eventId: t.id });
        }, [t]);
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nI.PD,
        children: (0, s.jsx)(tr.$, {
            variant: "active",
            size: "sm",
            text: tt.intl.string(tt.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function nT(e) {
    let { channel: t, label: n } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: nI.PD,
        children: (0, s.jsx)(tr.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: function () {
                null != t && null != t.getGuildId() && ((0, nt.av)(t), (0, ne.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function nM(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, t9.Ay)(n),
        l = (0, o.yK)([S.A], () => [...new Set(S.A.getMutableParticipants(n.id, p.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        r = (0, o.bG)([S.A], () => S.A.getParticipantCount(n.id, p.ip.AUDIENCE), [n.id]),
        a = tt.intl.formatToPlainString(tt.t["+v2pN2"], { count: `${r}` });
    return (0, s.jsx)(ng, {
        onClickCloseIcon: () => (0, nd.iF)({ stageId: t?.id }),
        heading: tt.intl.string(tt.t["X2K3/4"]),
        location: i,
        details: a,
        detailsIcon: (0, s.jsx)(t5.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: nI.uE,
        }),
        locationIcon: (0, s.jsx)(t7.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: nI.uE,
        }),
        topic: t.topic,
        children: (0, s.jsx)(nf, { channel: n, speakers: l, voiceType: 2 }),
    });
}
function nf(e) {
    var t;
    let { channel: n, speakers: i, voiceType: r } = e,
        a = n.getGuildId(),
        d = l.useMemo(() => i.slice(0, 3), [i]),
        u = (0, o.bG)([L.A], () => L.A.can(B.xBc.CONNECT, n)),
        c =
            ((t = n.id),
            (0, o.bG)(
                [ni.default, ns.Ay, nl.Ay],
                () => {
                    let e = ni.default.getId();
                    return ns.Ay.getVoiceChannelId() === t ? nl.Ay.getPermissionsForUser(e, t) : null;
                },
                [t],
            )),
        A = tt.intl.string(tt.t.VJlc0S);
    switch (r) {
        case 1:
            A = tt.intl.string(tt.t.VJlc0S);
            break;
        case 2:
            ((A = tt.intl.string(tt.t.ZYO5OK)),
                c?.speaker ? (A = tt.intl.string(tt.t["/cnSFc"])) : null != c && (A = tt.intl.string(tt.t.btSGOj)));
            break;
        case 3:
            A = tt.intl.string(tt.t.wBoE6L);
            break;
        default:
            (0, nr.xb)(r);
    }
    return null == a
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  d.length > 0
                      ? (0, s.jsxs)("div", {
                            className: t0()(nI.fI, nI.pF),
                            children: [
                                (0, s.jsx)(t2.Ay, { guildId: a, users: d, showUserPopout: !0, size: t2.DN.SIZE_16 }),
                                (0, s.jsx)(tl.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: nI.c8,
                                    children: (0, nn.c)(a, d, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  u && null == c && (0, s.jsx)(nT, { channel: n, label: A }),
              ],
          });
}
let nL = l.memo(function (e) {
    var t;
    let n,
        i,
        l,
        { guild: r } = e,
        a = ((t = r.id), (n = (0, U.r2)(t)), (i = (0, M.Ay)(t)), (l = f.A.getChannel(i[0]?.id)), n ?? l),
        d = (0, U.BP)(r.id),
        u = (0, U.WG)(r.id),
        c = (0, o.bG)([T.A], () => T.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: A, isEventNoticeHidden: E } = (0, o.cf)(
            [G],
            () => ({
                isStageNoticeHidden: G.isLiveChannelNoticeHidden({ stageId: c?.id }),
                isEventNoticeHidden: G.isLiveChannelNoticeHidden({ eventId: d?.id }),
            }),
            [c, d],
        ),
        h = null,
        m = null != c && null != a && !A;
    null == d || E
        ? m && (h = (0, s.jsx)(nM, { stageInstance: c, channel: a }))
        : d.entity_type === D.Ps.STAGE_INSTANCE && m
          ? (h = (0, s.jsx)(nM, { stageInstance: c, channel: a }))
          : d.entity_type === D.Ps.EXTERNAL
            ? (h = (0, s.jsx)(nS, { guildEvent: d }))
            : d.entity_type === D.Ps.VOICE && null != a && (h = (0, s.jsx)(nC, { guildEvent: d, channel: a }));
    let I = r.features.has(B.GuildFeatures.COMMUNITY);
    if (null == h && null != u && !I) {
        let { upcomingEvent: e, noticeType: t } = u;
        h = (0, s.jsx)(nN, { guildEvent: e, noticeType: t });
    }
    return h;
});
function nR(e) {
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
var nD = n(863888);
function nO(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: () => i(ed.i.UNKNOWN),
        onClick: function () {
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("722514"),
                    n.e("197804"),
                    n.e("807265"),
                    n.e("797641"),
                    n.e("890496"),
                ]).then(n.bind(n, 401155));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        },
        message: tt.intl.string(tt.t["1+hiP6"]),
        cta: tt.intl.string(tt.t.hvVgAZ),
        trackingSource: B.kZU.HUB_LINK_NOTICE,
        type: B.n5X.HUB_LINK,
        image: (0, s.jsx)("div", { className: nD.b, children: (0, s.jsx)(nR, { alt: "", ariaHidden: !0 }) }),
    });
}
function nx(e) {
    let { guild: t } = e;
    function n() {
        return b.A.dismissNotice(t.id);
    }
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: n,
        cta: tt.intl.string(tt.t.RzWDqY),
        message: tt.intl.format(tt.t["kQ/MDl"], {}),
        type: B.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            (n(), te.default.open(t.id, B.BEX.INTEGRATIONS));
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var nG = n(587895),
    nU = n(143582);
function nb(e) {
    let t,
        { guild: n } = e,
        i = (0, y.$s)(n);
    function r() {
        return (0, nU.Hc)(n.id);
    }
    let a = l.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        d = (0, o.yK)(
            [nG.A],
            () => {
                let e = [];
                for (let t of a) {
                    let n = nG.A.getApplication(t);
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
                  ? tt.intl.formatToPlainString(tt.t["Egq+G/"], { a: d[0].name })
                  : 2 === d.length
                    ? tt.intl.formatToPlainString(tt.t.LxU9R3, { a: d[0].name, b: d[1].name })
                    : 3 === d.length
                      ? tt.intl.formatToPlainString(tt.t.crKXMC, { a: d[0].name, b: d[1].name, c: d[2].name })
                      : tt.intl.string(tt.t.MvfowF)),
          (0, s.jsx)(tp, {
              guild: n,
              onDismissed: r,
              message: t,
              type: B.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  (r(), te.default.open(n.id, B.BEX.INTEGRATIONS));
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: tt.intl.string(tt.t.Rr3MAe),
          }));
}
var ny = n(628287);
let nP = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: n,
        onClick: () => te.default.open(t.id, B.BEX.COMMUNITY),
        message: tt.intl.string(tt.t["2klD0Z"]),
        trackingSource: B.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: B.n5X.PUBLIC_UPSELL,
        image: ny,
        cta: tt.intl.string(tt.t.hvVgAZ),
    });
};
var nH = n(536194),
    nv = n(780964),
    nj = n(766075);
class nB extends l.PureComponent {
    render() {
        return (0, s.jsx)(tp, {
            guild: this.props.guild,
            onClick: () => (0, nj.openUserSettings)(nv.X.ACCOUNT_PANEL),
            message: tt.intl.format(tt.t["oCd+at"], {}),
            cta: tt.intl.string(tt.t["8dCrV9"]),
            trackingSource: B.kZU.GUILD_MFA_WARNING,
            type: B.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
var nw = n(148494);
class nk extends l.PureComponent {
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
        let e = ns.Ay.getChannelId(),
            t = tt.intl.formatToPlainString(tt.t.DEn7nu, { invitePeople: tt.intl.string(tt.t.Sd8Ixw) });
        (this.props.markAsDismissed(ed.i.UNKNOWN), null != e && nw.A.sendBotMessage(e, t));
    };
    render() {
        let e = `${tt.intl.string(tt.t.VWqWZQ)}
${tt.intl.string(tt.t["0Lgb/K"])}`;
        return (0, s.jsx)(tp, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: tt.intl.string(tt.t.Sd8Ixw),
            trackingSource: B.kZU.INVITE_NOTICE,
            type: B.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let nX = function (e) {
    let { guild: t } = e,
        n = l.useCallback(() => {
            var e;
            ((e = t.id), I.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e }));
        }, [t.id]);
    return (0, s.jsx)(tp, {
        guild: t,
        onDismissed: n,
        message: tt.intl.format(tt.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: tT.A.getArticleURL(B.MVz.MAX_MEMBERS),
        }),
        type: B.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var nV = n(475358),
    nK = n(675704),
    nF = n(793322);
let nW = function (e) {
    let t = (0, s.jsx)(nV.e, { shortcut: nK.R.binds["0"], keyClassName: tN.Eb });
    return (0, s.jsx)(tp, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(ed.i.UNKNOWN),
        onClick: () => (0, nF.WU)("CHANNEL_NOTICE"),
        message: tt.intl.string(tt.t.Qhk8cs),
        cta: t,
        trackingSource: B.kZU.QUICK_SWITCHER_NOTICE,
        type: B.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var nz = n(174768);
class nY extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(v.A), this.syncWith([v.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(B.GuildFeatures.BANNER) && Date.now() - t >= B.D2K;
    }
}
let nQ = new nY(I.h);
class nq extends o.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], B.tEg));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.MANAGE_GUILD, e);
    }
}
let nZ = new nq(I.h);
var n$ = n(731667);
function nJ() {
    return !0;
}
class n0 extends o.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        (this.waitFor(L.A), this.syncWith([L.A], nJ));
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= B.D2K && L.A.can(B.xBc.ADMINISTRATOR, e);
    }
}
let n1 = new n0(I.h),
    n6 = "lastHiddenChannelNotice",
    n8 = [
        {
            type: B.n5X.GUILD_BOOSTING,
            store: nZ,
            dismissibleContentType: d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: B.n5X.GUILD_BANNER, store: nQ, dismissibleContentType: d.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: B.n5X.INVITE, store: n1, dismissibleContentType: d.M.CHANNEL_NOTICE_INVITE },
        { type: B.n5X.HUB_LINK, store: n$.A, dismissibleContentType: d.M.CHANNEL_NOTICE_HUBLINK },
        { type: B.n5X.QUICKSWITCHER, store: nz.A, dismissibleContentType: d.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: B.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: d.M.LINKED_ROLE_ADMIN_GUILD },
        { type: B.n5X.GAME_CLAIM, dismissibleContentType: d.M.GAME_CLAIM_COACHMARK },
    ],
    n3 = n8.map((e) => e.store).filter(nr.Vq),
    n5 = new Set([d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, d.M.CHANNEL_NOTICE_GUILD_BANNER]);
function n7(e) {
    e.stopPropagation();
}
let n2 = [];
function n9(e) {
    var t, n;
    let i,
        r,
        a,
        u,
        c,
        { guild: A } = e,
        [E, h] = l.useState(P.w.get(n6) ?? 0),
        m =
            ((n = t = A.id),
            (i = tP.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (r = (0, o.bG)([L.A], () => L.A.canWithPartialContext(B.xBc.ADMINISTRATOR, { guildId: t }), [t])),
            (u = (function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return ty(e, t).length > 0;
            })(t, (a = i && r))),
            (c = a && u),
            l.useMemo(() => {
                let e = [];
                return (c && e.push(d.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : n2);
            }, [c])),
        [I, g] = (0, $.ww)(m, A.id, ed.m.CHANNEL_NOTICES, !0),
        C = null != I,
        _ = (0, o.yK)(
            n3,
            () =>
                C
                    ? []
                    : n8
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(A, E) && !n5.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [A, E, C],
        ),
        [N, S] = (0, $.kn)(_, ed.m.CHANNEL_NOTICES),
        p = I ?? N,
        T = null != I ? g : S,
        M = l.useCallback(
            function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed.i.UNKNOWN;
                ((e = Date.now()), P.w.set(n6, e), h(e), T(t));
            },
            [T],
        ),
        f = (() => {
            switch (p) {
                case d.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, s.jsx)(nO, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_INVITE:
                    return (0, s.jsx)(nk, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, s.jsx)(t$, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, s.jsx)(nW, { guild: A, markAsDismissed: M });
                case d.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, s.jsx)(tQ, { guild: A, markAsDismissed: M });
                case d.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, s.jsx)(tM, { guild: A, markAsDismissed: () => T(ed.i.UNKNOWN) });
                case d.M.GAME_CLAIM_COACHMARK:
                    return (0, s.jsx)(tF, { guild: A, markAsDismissed: T });
                default:
                    return null;
            }
        })();
    return null == f ? null : (0, s.jsx)("div", { onContextMenu: n7, children: f });
}
let n4 = function (e) {
    let { guild: t } = e;
    switch (Q(t)) {
        case Y.ENABLE_PUBLIC_GUILD:
            return (0, s.jsx)(nP, { guild: t });
        case Y.MAX_MEMBER_COUNT:
            return (0, s.jsx)(nX, { guild: t });
        case Y.GUILD_LIVE_CHANNEL:
            return (0, s.jsx)(nL, { guild: t });
        case Y.GUILD_MFA_WARNING:
            return (0, s.jsx)(nB, { guild: t });
        case Y.COMMANDS_MIGRATION:
            return (0, s.jsx)(nx, { guild: t });
        case Y.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, s.jsx)(nb, { guild: t });
    }
    return nH.P.isDisallowPopupsSet() ? null : (0, s.jsx)(n9, { guild: e.guild });
};
var ie = n(883476);
function it(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, s.jsx)("div", { className: ie.k, ref: i, children: (0, s.jsx)(n4, { guild: t }) })
    );
}
var ii = n(66933),
    is = n(846930),
    il = n(168095);
let ir = "server-settings",
    ia = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class io extends l.PureComponent {
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
            (this.historyUnlisten = ek.A.addRouteChangeListener(this.handleHistoryChange)));
        let { location: e } = ek.A.getHistory();
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
        (e.stopPropagation(), (0, er.Z)(!t), this.closeAllHeaderNotices());
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
                    n.e("207623"),
                    n.e("853458"),
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
                    n.e("166741"),
                    n.e("270076"),
                    n.e("703728"),
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
                    n.e("357712"),
                    n.e("849162"),
                    n.e("660201"),
                    n.e("571247"),
                    n.e("179301"),
                    n.e("918347"),
                    n.e("358574"),
                    n.e("689521"),
                    n.e("10886"),
                    n.e("519858"),
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
                    n.e("364827"),
                    n.e("25279"),
                    n.e("907167"),
                    n.e("517888"),
                    n.e("784569"),
                    n.e("811133"),
                    n.e("861060"),
                    n.e("959880"),
                    n.e("174016"),
                    n.e("910471"),
                    n.e("11301"),
                    n.e("952372"),
                    n.e("262156"),
                    n.e("960235"),
                    n.e("77333"),
                    n.e("716460"),
                    n.e("264572"),
                    n.e("678157"),
                    n.e("641248"),
                    n.e("331988"),
                    n.e("40291"),
                    n.e("402368"),
                    n.e("733115"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("190779"),
                    n.e("373122"),
                    n.e("724285"),
                    n.e("221856"),
                    n.e("293159"),
                    n.e("186212"),
                    n.e("755936"),
                    n.e("172503"),
                    n.e("760586"),
                    n.e("833703"),
                    n.e("55252"),
                    n.e("362931"),
                    n.e("745959"),
                    n.e("858529"),
                    n.e("41298"),
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
                    n.e("942724"),
                    n.e("913823"),
                    n.e("393766"),
                    n.e("53102"),
                    n.e("187110"),
                    n.e("139970"),
                    n.e("676418"),
                    n.e("875842"),
                    n.e("940258"),
                    n.e("675706"),
                    n.e("401518"),
                    n.e("198329"),
                    n.e("571210"),
                    n.e("292583"),
                    n.e("302969"),
                    n.e("586127"),
                    n.e("854461"),
                    n.e("173764"),
                    n.e("166495"),
                    n.e("9205"),
                    n.e("25949"),
                    n.e("308555"),
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
                    n.e("23055"),
                    n.e("147626"),
                    n.e("613867"),
                    n.e("979483"),
                    n.e("417886"),
                    n.e("553984"),
                    n.e("943780"),
                    n.e("203589"),
                    n.e("884601"),
                    n.e("782969"),
                    n.e("756055"),
                    n.e("294857"),
                    n.e("480830"),
                    n.e("179745"),
                    n.e("96680"),
                    n.e("375767"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("981004"),
                    n.e("428967"),
                    n.e("154469"),
                    n.e("342922"),
                    n.e("945413"),
                    n.e("146844"),
                    n.e("255580"),
                    n.e("163235"),
                    n.e("859546"),
                    n.e("486672"),
                    n.e("75029"),
                    n.e("564850"),
                    n.e("608032"),
                    n.e("170104"),
                    n.e("491793"),
                    n.e("477970"),
                    n.e("868214"),
                    n.e("902564"),
                    n.e("608557"),
                    n.e("92935"),
                    n.e("67878"),
                    n.e("758946"),
                    n.e("214285"),
                    n.e("248330"),
                    n.e("91450"),
                    n.e("588070"),
                    n.e("803332"),
                    n.e("938149"),
                    n.e("408362"),
                    n.e("772401"),
                    n.e("852617"),
                    n.e("204744"),
                    n.e("386317"),
                    n.e("737021"),
                    n.e("695164"),
                    n.e("718495"),
                    n.e("818465"),
                    n.e("971430"),
                    n.e("976516"),
                    n.e("400501"),
                    n.e("41332"),
                    n.e("985794"),
                    n.e("767837"),
                    n.e("473384"),
                    n.e("487062"),
                    n.e("282783"),
                    n.e("305557"),
                    n.e("859991"),
                    n.e("368062"),
                    n.e("793438"),
                    n.e("36227"),
                    n.e("709371"),
                    n.e("310235"),
                    n.e("288534"),
                    n.e("474610"),
                    n.e("844780"),
                    n.e("939171"),
                    n.e("713567"),
                    n.e("242323"),
                    n.e("444567"),
                    n.e("229666"),
                    n.e("589916"),
                    n.e("695170"),
                    n.e("460773"),
                    n.e("142266"),
                    n.e("458273"),
                    n.e("208018"),
                    n.e("968763"),
                    n.e("278045"),
                    n.e("883952"),
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
                    n.e("159957"),
                    n.e("618706"),
                    n.e("203930"),
                    n.e("800872"),
                    n.e("903663"),
                    n.e("452531"),
                    n.e("201243"),
                    n.e("368530"),
                    n.e("430997"),
                    n.e("65393"),
                    n.e("338601"),
                    n.e("215920"),
                    n.e("728136"),
                    n.e("978046"),
                    n.e("127659"),
                    n.e("66580"),
                    n.e("216084"),
                    n.e("343116"),
                    n.e("610943"),
                    n.e("283230"),
                    n.e("582486"),
                    n.e("273669"),
                    n.e("507775"),
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
                    n.e("284819"),
                    n.e("810262"),
                    n.e("741786"),
                    n.e("995602"),
                    n.e("346313"),
                    n.e("463726"),
                    n.e("170571"),
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
                    n.e("556967"),
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
                    n.e("467753"),
                    n.e("317699"),
                    n.e("257032"),
                    n.e("845322"),
                    n.e("426386"),
                    n.e("584705"),
                    n.e("842987"),
                    n.e("588860"),
                ]).then(n.bind(n, 485272));
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
        !e && t && (0, Z.Dr)(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ed.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        (this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && e_.A.hideGuildTemplateDirtyTooltip(e.id);
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
            : (0, s.jsx)(tA, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? A.t : E.a;
        return (0, s.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, s.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, s.jsx)(eX.A, {
                      tutorialId: ir,
                      position: "bottom",
                      inlineSpecs: ia,
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
                                title: tt.intl.string(tt.t.Rk2RJk),
                                body: tt.intl.string(tt.t.sFSrFH),
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
                                title: tt.intl.string(tt.t.Q3qa4x),
                                body: tt.intl.string(tt.t.UyHD4O),
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
            E = i || l || r;
        return null == t
            ? null
            : (0, s.jsx)(_.f5, {
                  value: a,
                  children: (0, s.jsx)(h.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: h.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, er.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: l, ...r } = i;
                          return (0, s.jsx)(eJ.Ay, {
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
            return (0, s.jsx)(is.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(B.GuildFeatures.HUB))
                return (0, s.jsx)("div", {
                    className: il.r0,
                    children: (0, s.jsx)(eD.A, { guild: t, channel: n ?? eW.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, ee.ai)(t.id) ? et.A : e$.B;
            return (0, s.jsx)(e, {
                guild: t,
                ...i,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, eZ.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, ee.YC)(e);
        return (0, s.jsxs)("nav", {
            className: il.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": tt.intl.formatToPlainString(tt.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, s.jsx)(it, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function id(e) {
    let t,
        i,
        r,
        u,
        c,
        A,
        E,
        h,
        I,
        g,
        N,
        S,
        p,
        T,
        M,
        { guildId: D, hideSelectedChannel: O, selectedChannelId: x } = e,
        G = (0, en.$)("favorite-guild-header-context"),
        { hasAccess: U } = (0, J.TW)("ConnectedGuildSidebar"),
        b = (0, o.bG)([v.A], () => v.A.getGuild(D)),
        y = (0, o.bG)([R.Ay], () => R.Ay.getVoiceStates(D), [D]),
        P = (0, o.bG)([eK.A], () => eK.A.getGuildDimensions(D).scrollTo),
        H = (0, o.bG)([eQ.A], () => eQ.A.getChannelId()),
        w = (0, o.bG)([L.A], () => L.A.can(B.xBc.MANAGE_GUILD, b)),
        k = (0, o.bG)([eF.A], () => eF.A.isUnavailable(D)),
        X = (0, o.bG)([eC.default], () => eC.default.getCurrentUser()),
        V = (0, q.Ay)((e) => e.currentlyShown.has(d.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [K, F] = l.useState(!V),
        [W, z] = l.useState(D),
        { analyticsLocations: Y } = (0, _.Ay)(C.A.GUILD_HEADER);
    D !== W && (z(D), F(!V));
    let [Z, et] = (0, q.Ay)(
            (e) => [
                n8.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ed.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        e_ = Q(b),
        eN = (0, m.useModalsStore)(m.hasAnyModalOpenSelector),
        eS = (0, o.bG)([ez.A], () => ez.A.hasLayers()),
        ep = (function (e) {
            let t = (0, eo.c)(ea.C.GUILD_HEADER_COACHMARK),
                n =
                    null != t && "guildHeaderCoachmark" === t.properties.properties.oneofKind
                        ? t.properties.properties.guildHeaderCoachmark
                        : null,
                i = null != e && !(0, ee.ai)(e),
                [s, l] = (0, $.Cc)(
                    null != n && i ? d.M.GUILD_HEADER_COACHMARK : null,
                    t?.promotionId ?? "",
                    ed.m.GUILD_HEADER_TOOLTIPS,
                );
            return {
                shouldShow: null != n && i && s === d.M.GUILD_HEADER_COACHMARK,
                componentId: t?.id ?? "",
                promotionId: t?.promotionId ?? "",
                coachmark: n,
                markAsDismissed: l,
            };
        })(D),
        eT = (0, eO.xr)((e) => e.fullScreenLayers.length > 0),
        eM = (0, o.bG)([eV.A], () => eV.A.shouldShow(ir)),
        eD =
            ((t = (0, o.bG)([v.A], () => v.A.getGuild(D))),
            (i = (0, o.bG)([eC.default], () => eC.default.getCurrentUser())),
            (r = null != t && (0, eg.bM)(t, i)),
            (u = (0, eI.oS)()),
            r &&
                (t?.features.has(B.GuildFeatures.COMMUNITY) ?? !1) &&
                u &&
                !(
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(B.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        ek = b?.features.has(B.GuildFeatures.HUB) === !0,
        eX = w && b?.features.has(B.GuildFeatures.DISCOVERABLE) === !0,
        eW = (0, o.bG)(
            [ef, ez.A],
            () => null != b && null != X && w && !ez.A.hasLayers() && ef.shouldShowGuildTemplateDirtyTooltip(D),
        ),
        eZ = (0, o.bG)([f.A], () => f.A.getChannel(x)),
        { isPopoutOpen: e$ } = (0, er.S)(),
        eJ = b?.features.has(B.GuildFeatures.COMMUNITY) ?? !1,
        e0 = eq.Ay.isNewUser(X),
        e1 = K && !e0;
    ((c = (0, eu.TZ)(b)),
        (A = j.dR.some((e) => !(0, ee.ai)(b?.id) && eA.Ib(e, b))),
        (E = b?.defaultMessageNotifications === B.orn.ALL_MESSAGES),
        (h = (0, eE.G$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq)),
        (I = c && (A || E) && !h),
        (g = l.useCallback(() => {
            (0, eE._$)(d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, b?.id ?? B.dJq, !0, ed.i.DISMISS);
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
                                isDefaultNotificationsAllMessages: E,
                                ...t,
                            });
                    },
                    { onCloseCallback: g },
                ),
                ec.default.track(B.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: d.V[d.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: b?.id ?? B.dJq,
                }),
                (N.current = !0));
        }, [A, b, g, E, I]));
    let e6 =
        ((S = (0, o.bG)([v.A], () => v.A.getGuild(D))),
        (p = (0, eh._Y)(D)),
        (T =
            S?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
            S?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
        (M = (0, em.X9)(S)),
        T && M && p);
    (function (e, t) {
        let { isNuxOpen: n, openNux: i } = t,
            s = (0, eL.Kb)(e, "GuildThemeNuxTrigger"),
            [r, a] = (0, $.kn)(null != s ? [d.M.GUILD_THEME_NUX] : [], ed.m.GUILD_THEME_NUX),
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
    })(D, {
        isNuxOpen: (0, m.useHasModalOpen)(eR.u),
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
                { modalKey: eR.u, onCloseCallback: () => i(ed.i.USER_DISMISS) },
            );
        }, []),
    });
    let e8 = (0, o.bG)([eQ.A], () => eQ.A.getChannelId()),
        e3 = (0, o.bG)([eY.A], () => eY.A.desyncedVoiceStatesCount),
        e5 = (0, ey.A)(D),
        e7 = (0, ee.ai)(D) ? null : e5,
        e2 =
            (function (e) {
                let t = (0, ey.A)(e),
                    n = (0, eH.DD)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    i = (0, ev.OS)("useShouldShowGuildThemeMemberCoachmark"),
                    s = (0, eH.lY)(e, "useShouldShowGuildThemeMemberCoachmark"),
                    l = (0, eB.A)(e),
                    { available: r, isLoading: a } = (0, ej.A)(e);
                if (a) return !1;
                let o = r < ew.fe;
                return n && i && !s && o && !l && !1 === t;
            })(D) && !(0, ee.ai)(D);
    ii.A.useConfig({ guildId: D, location: "guild_sidebar" });
    let e9 = (0, ei.C$)(D, "GuildSidebar"),
        e4 = (0, o.bG)([v.A], () => v.A.getGuild(D)?.features.has(B.GuildFeatures.GAME_SERVERS) ?? !1, [D]),
        te = e9 && !e4 && !1 === e7,
        tt = (0, el.J)("GuildSidebar"),
        tn = (0, es.S)(D, "GuildSidebar"),
        ti = e9 && !e4 && tn && !1 === e7,
        ts = (0, eP.A)(),
        tl = (0, eU.A)(D),
        tr = !1 === e7 && ts && null != tl,
        ta = (0, eb.A)(D),
        to = !1 === e7 && ts && null != ta,
        td = [];
    (ek && td.push(d.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eD && td.push(d.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eX && td.push(d.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === e7 && td.push(d.M.GUILD_POWERUP_PERKS_COACHMARK),
        e2 && td.push(d.M.GUILD_THEME_MEMBER_COACHMARK),
        te && td.push(d.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        ti && td.push(d.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        e6 && td.push(d.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL));
    let [tu, tc] = (0, $.kn)(td, ed.m.GUILD_HEADER_TOOLTIPS),
        [tA, tE] = (0, eG.vB)(tt && e9 && !1 === e7 && !(0, ee.ai)(D), ed.m.GUILD_HEADER_TOOLTIPS),
        [th, tm] = (0, $.D8)(
            tr ? d.M.BOOST_TO_UNLOCK_COACHMARK : null,
            D,
            { cooldownDurationMs: ex.bW, numTimesToRecur: 5 },
            ed.m.GUILD_HEADER_TOOLTIPS,
        ),
        [tI, tg] = (0, $.D8)(
            to ? d.M.EXPIRING_POWERUP_COACHMARK : null,
            D,
            { cooldownDurationMs: ex.mD },
            ed.m.GUILD_HEADER_TOOLTIPS,
        ),
        tC = l.useMemo(
            () =>
                ep.shouldShow && null != ep.coachmark
                    ? {
                          contentType: d.M.GUILD_HEADER_COACHMARK,
                          data: {
                              marketingComponent: {
                                  componentId: ep.componentId,
                                  promotionId: ep.promotionId,
                                  coachmark: ep.coachmark,
                              },
                          },
                          markAsDismissed: ep.markAsDismissed,
                      }
                    : null != tu
                      ? { contentType: tu, data: null, markAsDismissed: tc }
                      : tA === d.M.GAME_SERVER_NEW_GAMES_COACHMARK
                        ? { contentType: tA, data: null, markAsDismissed: tE }
                        : th === d.M.BOOST_TO_UNLOCK_COACHMARK && null != tl
                          ? { contentType: th, data: { featuredPowerup: tl }, markAsDismissed: tm }
                          : tI === d.M.EXPIRING_POWERUP_COACHMARK && null != ta
                            ? { contentType: tI, data: { featuredExpiringPowerup: ta }, markAsDismissed: tg }
                            : null,
            [
                ep.shouldShow,
                ep.coachmark,
                ep.componentId,
                ep.promotionId,
                ep.markAsDismissed,
                tu,
                tA,
                th,
                tI,
                tl,
                ta,
                tc,
                tE,
                tm,
                tg,
            ],
        );
    return (0, s.jsx)(io, {
        guildId: D,
        hideSelectedChannel: O,
        guild: b,
        scrollToChannel: P,
        selectedChannelId: O ? null : x,
        selectedChannel: eZ,
        selectedVoiceChannelId: H,
        voiceStates: y,
        rtcConnectedChannelId: e8,
        rtcDesyncedVoiceStatesCount: e3,
        isUnavailable: k,
        user: X,
        hasChannelNotice: null != e_ || Z,
        anyLayerOpen: eN || eS || eT,
        showGuildHeaderTutorial: eM,
        showGuildTemplateDirtyTooltip: eW,
        showNewUnreadsBar: eJ,
        isHeaderPopoutOpen: e$,
        isGuildHeaderDismissibleTooltipShown: et,
        canShowCoachMarkAtBottom: K,
        headerAnalyticsLocations: Y,
        shouldRenderBurstCoachmark: e1,
        guildHeaderContentDescriptor: tC,
        onFavoriteGuildContextMenu: G,
        hasFavoritesAccess: U,
    });
}
